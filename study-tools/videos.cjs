// 视频链接: a list of study videos. Paste a link (or a whole share text) on Reports/AI_ENGINEER_VIDEOS.html and click Save;
// the local server reads the title and author from the link and stores the video in "Study notes/videos.json",
// which the GitHub buttons push and pull with the study notes. The web version (GitHub Pages) reads that file and is read only.
//   YouTube - official oEmbed endpoint          小红书 - the note page, opened as an iPhone browser (title, user.nickName)
//   Bilibili - the video page (title, owner)     Vimeo - oEmbed            other sites - oEmbed link, og:title / <title>, author meta
// The length (时长, seconds) comes from the same places: YouTube's player API, Vimeo's oEmbed, the 小红书 note
// (video.capa.duration), the Bilibili page (videoData.duration), other pages' video:duration / itemprop="duration" tags.
// When nothing can be read the video is still saved; fill in the title and author with 编辑.
// 总结 (YouTube only): the server reads the video's subtitles (YouTube's own or auto-generated) and runs `claude -p` with no
// tools, which uses this computer's Claude Code login (plan usage, no API credits). The summary - timestamped bullet points -
// is saved as "Study notes/video-summaries/<id>.md" and synced with the notes; the full subtitles are never saved.
const fs = require('fs'), path = require('path'), crypto = require('crypto'), os = require('os');
const { spawn } = require('child_process');

const FILE = 'AI_ENGINEER_VIDEOS.html', TITLE = '视频链接';
const DATA_REL = 'Study notes/videos.json', DATA = path.join(__dirname, '..', DATA_REL);
// 备注 about an author (click the author's name): {author: {note, updated}}, one author per line like videos.json
const AUTHORS_REL = 'Study notes/authors.json', AUTHORS = path.join(__dirname, '..', AUTHORS_REL);
const SUM_REL = 'Study notes/video-summaries', SUM_DIR = path.join(__dirname, '..', SUM_REL);
const MODELS = { sonnet: 'Sonnet', opus: 'Opus', haiku: 'Haiku' };   // claude --model aliases offered on the page
const DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// ---- storage: {id: {url, title, author, platform, added, seconds?, watched?, rating?, summary?}}, one video per line so two
// devices merge cleanly in git; seconds is the video's length, watched is when 看过 was ticked (ISO time), rating is the
// Usefulness score 1-5
function readJson(f) { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return {}; } }
function writeLines(f, all) {
  const lines = Object.keys(all).sort().map(k => JSON.stringify(k) + ': ' + JSON.stringify(all[k]));
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f + '.tmp', '{\n' + lines.join(',\n') + '\n}\n');
  fs.renameSync(f + '.tmp', f);
}
const load = () => readJson(DATA), save = all => writeLines(DATA, all);
const loadAuthors = () => readJson(AUTHORS), saveAuthors = all => writeLines(AUTHORS, all);
const list = (all = load()) => Object.entries(all).map(([id, v]) => ({ id, ...v })).sort((a, b) => (b.added || '').localeCompare(a.added || ''));
// 3-way merge per video against the common ancestor (b), o = upstream, t = this device. Both devices changed the same video:
// merged field by field (看过 ticked on one, title edited on the other: both kept); the same field changed on both: this device wins
function merge(b = {}, o = {}, t = {}, deep = true) {
  const s = v => (v === undefined ? undefined : JSON.stringify(v)), out = {};
  const obj = v => v && typeof v === 'object' && !Array.isArray(v);
  for (const k of new Set([...Object.keys(b), ...Object.keys(o), ...Object.keys(t)])) {
    const v = s(o[k]) === s(t[k]) ? o[k] : s(o[k]) === s(b[k]) ? t[k] : s(t[k]) === s(b[k]) ? o[k]
      : deep && obj(o[k]) && obj(t[k]) ? merge(obj(b[k]) ? b[k] : {}, o[k], t[k], false) : t[k];
    if (v !== undefined) out[k] = v;
  }
  return out;
}

// ---- reading title and author
const decode = s => String(s || '').replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
async function get(url, ua = DESKTOP) {
  const r = await fetch(url, { headers: { 'User-Agent': ua, 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8' }, redirect: 'follow', signal: AbortSignal.timeout(12000) });
  return { ok: r.ok, url: r.url, text: await r.text() };
}
const getJson = async (url, ua) => { const r = await get(url, ua); if (!r.ok) throw new Error('HTTP error'); return JSON.parse(r.text); };
const meta = (html, name) => {
  for (const re of [new RegExp(`<meta[^>]+(?:property|name)=["']${name}["'][^>]*content=["']([^"']*)`, 'i'), new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${name}["']`, 'i')]) {
    const m = html.match(re);
    if (m) return decode(m[1]);
  }
  return '';
};
const host = u => { try { return new URL(u).hostname.replace(/^www\.|^m\./, ''); } catch (e) { return ''; } };
const PLATFORMS = [[/(^|\.)(youtube\.com|youtu\.be)$/, 'YouTube'], [/(^|\.)(xiaohongshu\.com|xhslink\.com|rednote\.com)$/, '小红书'],
  [/(^|\.)(bilibili\.com|b23\.tv)$/, 'B站'], [/(^|\.)vimeo\.com$/, 'Vimeo'], [/(^|\.)douyin\.com$/, '抖音']];
const platformOf = u => (PLATFORMS.find(([re]) => re.test(host(u))) || [, host(u)])[1];

function youtubeId(u) {
  try {
    const x = new URL(u);
    if (x.hostname === 'youtu.be') return x.pathname.slice(1).split('/')[0];
    return x.searchParams.get('v') || (x.pathname.match(/\/(?:shorts|live|embed)\/([\w-]+)/) || [])[1] || '';
  } catch (e) { return ''; }
}
// the note data embedded in a 小红书 page: mobile share page (noteData) or desktop page (note.noteDetailMap)
function xhsNote(html) {
  const m = html.match(/window\.__INITIAL_STATE__\s*=\s*([\s\S]*?)<\/script>/);
  if (!m) return null;
  try {
    const st = JSON.parse(m[1].trim().replace(/;$/, '').replace(/\bundefined\b/g, 'null'));
    const n = st.noteData?.data?.noteData || Object.values(st.note?.noteDetailMap || {})[0]?.note;
    return n && { title: n.title || (n.desc || '').split('\n')[0], author: n.user?.nickName || n.user?.nickname || '', id: n.noteId, seconds: n.video?.capa?.duration };
  } catch (e) { return null; }
}

// a length in seconds, or undefined when it is missing or not believable
const secs = v => { const n = Math.round(Number(v)); return n > 0 && n < 360000 ? n : undefined; };
// "PT1H2M3S" (itemprop="duration") -> seconds
const isoSecs = d => {
  const m = String(d || '').match(/^P?T?(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?$/i);
  return m && (m[1] || m[2] || m[3]) ? secs((+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0)) : undefined;
};
const pageSecs = html => secs(meta(html, 'og:video:duration') || meta(html, 'video:duration'))
  || isoSecs((html.match(/<meta[^>]+itemprop=["']duration["'][^>]*content=["']([^"']+)/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*itemprop=["']duration["']/i) || [])[1]);
// YouTube's player data, asked for the way the Android app does: videoDetails (lengthSeconds) and the caption tracks
async function youtubePlayer(id) {
  const r = await fetch('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
    method: 'POST', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'com.google.android.youtube/20.10.38 (Linux; U; Android 14)' },
    body: JSON.stringify({ context: { client: { clientName: 'ANDROID', clientVersion: '20.10.38', hl: 'en' } }, videoId: id }),
  });
  return r.json();
}

async function readMeta(url) {
  const p = platformOf(url);
  if (p === 'YouTube') {
    const id = youtubeId(url);
    const [j, p] = await Promise.all([getJson('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent(url)), id ? youtubePlayer(id).catch(() => null) : null]);
    return { title: j.title, author: j.author_name, key: 'youtube:' + id, seconds: secs(p?.videoDetails?.lengthSeconds) };
  }
  if (p === 'Vimeo') {
    const j = await getJson('https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(url));
    return { title: j.title, author: j.author_name, key: 'vimeo:' + j.video_id, seconds: secs(j.duration) };
  }
  if (p === '小红书') {
    const r = await get(url, IPHONE);
    const n = xhsNote(r.text);
    if (n && n.title) return { title: n.title, author: n.author, key: n.id ? 'xhs:' + n.id : '', seconds: secs(n.seconds) };
    if (/\/login/.test(r.url)) throw new Error('小红书要求登录');
    return { title: meta(r.text, 'og:title').replace(/\s*-\s*(小红书|rednote)$/i, ''), author: '' };
  }
  if (p === 'B站') {   // the video page (the public API answers 412 to scripts); b23.tv short links redirect to it
    const r = await get(url);
    const bv = (r.url.match(/\/video\/(BV\w+)/) || url.match(/\/video\/(BV\w+)/) || [])[1];
    const title = meta(r.text, 'og:title').replace(/_哔哩哔哩_bilibili$/, '');
    if (/^视频去哪了呢/.test(title)) throw new Error('B站视频不存在或已删除');
    return { title, author: meta(r.text, 'author') || decode((r.text.match(/"owner":\{"mid":\d+,"name":"([^"]*)"/) || [])[1]), key: bv ? 'bilibili:' + bv : '',
      seconds: secs((r.text.match(/"videoData":\{[\s\S]*?"duration":(\d+)/) || [])[1]) };
  }
  // any other site: its oEmbed link if it has one, else the page's own title and author tags
  const r = await get(url);
  const oe = (r.text.match(/<link[^>]+type=["']application\/json\+oembed["'][^>]*>/i) || [''])[0].match(/href=["']([^"']+)/i);
  if (oe) { try { const j = await getJson(decode(oe[1])); if (j.title) return { title: j.title, author: j.author_name || '', seconds: secs(j.duration) || pageSecs(r.text) }; } catch (e) { /* use the page */ } }
  const ld = (r.text.match(/"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"/) || [])[1];
  return {
    title: meta(r.text, 'og:title') || meta(r.text, 'twitter:title') || decode((r.text.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]),
    author: [meta(r.text, 'author'), decode(ld), meta(r.text, 'article:author')].find(a => a && !/^https?:/.test(a)) || '',
    seconds: pageSecs(r.text),
  };
}

// the first link in a pasted text; the rest of the text (a share text usually starts with the title) is a fallback title
function parse(text) {
  const s = String(text || '').trim();
  const m = s.match(/https?:\/\/[^\s"'<>，。！【】（）]+/i);
  if (!m) throw new Error('没有找到链接（要以 http:// 或 https:// 开头）');
  const url = m[0].replace(/[),.;!?]+$/, '');
  const rest = s.replace(m[0], ' ').replace(/复制.{0,12}打开.{0,24}$/, '').replace(/^\d+\s+/, '').replace(/\s+/g, ' ').trim();
  return { url, fallback: rest.slice(0, 160) };
}
const idOf = key => crypto.createHash('sha1').update(key).digest('hex').slice(0, 10);
const clean = v => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 300);

// ---- 总结: YouTube subtitles -> claude -p -> Study notes/video-summaries/<id>.md
const clock = s => { s = Math.floor(s); const m = String(Math.floor(s / 60) % 60).padStart(2, '0'), ss = String(s % 60).padStart(2, '0'); return s >= 3600 ? Math.floor(s / 3600) + ':' + m + ':' + ss : m + ':' + ss; };
// the video's subtitles as "[mm:ss] text" lines of about 20 seconds; its own subtitles before auto-generated ones
async function youtubeTranscript(url) {
  const id = youtubeId(url);
  if (!id) throw new Error('看不出这个链接的 YouTube 视频 ID');
  const j = await youtubePlayer(id);
  const tracks = j.captions?.playerCaptionsTracklistRenderer?.captionTracks || [];
  if (!tracks.length) {
    const st = j.playabilityStatus || {};
    throw new Error(st.status && st.status !== 'OK' ? 'YouTube 不让读取这个视频（' + (st.reason || st.status) + '）' : '这个视频没有字幕，没法总结');
  }
  const t = tracks.find(x => x.kind !== 'asr') || tracks[0];
  const c = await fetch(t.baseUrl.replace(/&fmt=[^&]*/, '') + '&fmt=json3', { signal: AbortSignal.timeout(15000) });
  const lines = [];
  let cur = null;
  for (const e of (await c.json()).events || []) {
    const text = (e.segs || []).map(s => s.utf8).join('').replace(/\s+/g, ' ').trim();
    if (!text) continue;
    const s = (e.tStartMs || 0) / 1000;
    if (!cur || s - cur.s >= 20) lines.push(cur = { s, text: [] });
    cur.text.push(text);
  }
  if (!lines.length) throw new Error('字幕是空的，没法总结');
  return { text: lines.map(l => `[${clock(l.s)}] ${l.text.join(' ')}`).join('\n'), lang: t.languageCode, auto: t.kind === 'asr', seconds: +(j.videoDetails?.lengthSeconds) || lines[lines.length - 1].s };
}

// claude -p with no tools and our own system prompt, run outside the repo so no CLAUDE.md is read; the subtitles go in on stdin
function runClaude(system, prompt, input, model) {
  const cwd = path.join(os.tmpdir(), 'study-video-summary');
  fs.mkdirSync(cwd, { recursive: true });
  // --strict-mcp-config: no MCP servers (the claude.ai connectors alone add ~10k input tokens to every call)
  const args = ['-p', '--model', model, '--tools', '', '--strict-mcp-config', '--output-format', 'json', '--no-session-persistence', '--system-prompt', system, prompt];
  // a clean environment: when the server was started from inside a Claude Code session, its CLAUDE* variables must not leak in
  const env = Object.fromEntries(Object.entries(process.env).filter(([k]) => !/^CLAUDE/i.test(k) || k === 'CLAUDE_CONFIG_DIR'));
  const tryRun = cmd => new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd, env, windowsHide: true });
    let out = '', err = '';
    const timer = setTimeout(() => p.kill(), 5 * 60 * 1000);
    p.stdout.on('data', d => { out += d; });
    p.stderr.on('data', d => { err += d; });
    p.on('error', reject);
    p.on('close', code => {
      clearTimeout(timer);
      let o;
      try { o = JSON.parse(out); } catch (e) { return reject(new Error('Claude 没有正常返回（退出码 ' + code + '）' + (err ? '：' + err.trim().slice(0, 200) : ''))); }
      if (o.is_error || !o.result) return reject(new Error('Claude 返回错误：' + String(o.result || o.subtype || 'unknown').slice(0, 300)));
      const u = o.usage || {};
      resolve({ text: o.result.trim(), input: (u.input_tokens || 0) + (u.cache_creation_input_tokens || 0) + (u.cache_read_input_tokens || 0), output: u.output_tokens || 0 });
    });
    p.stdin.end(input);
  });
  // `claude` from PATH; the installer's default location when the server was started without it on PATH
  return tryRun('claude').catch(e => {
    if (e.code !== 'ENOENT') throw e;
    const exe = path.join(os.homedir(), '.local', 'bin', 'claude.exe');
    if (!fs.existsSync(exe)) throw new Error('找不到 claude 命令（Claude Code）');
    return tryRun(exe);
  });
}

const running = new Set();
async function summarize(all, id, model) {
  const v = all[id];
  if (v.platform !== 'YouTube') throw new Error('目前只能总结 YouTube 视频');
  if (!MODELS[model]) throw new Error('bad model');
  if (running.has(id)) throw new Error('这个视频正在生成总结，请稍等');
  running.add(id);
  try {
    const tr = await youtubeTranscript(v.url);
    const min = tr.seconds / 60, lo = Math.max(5, Math.min(20, Math.round(min / 2))), hi = Math.max(8, Math.min(30, Math.round(min)));
    const system = '你帮一个在学 AI 工程的人总结视频。根据用户给的带时间戳的字幕，用中文写总结，技术名词保留英文。'
      + '格式（Markdown，不用粗体和斜体）：第一行“一句话总结：……”；然后“## 要点”，大约 ' + lo + '–' + hi + ' 条，每条以字幕里的时间开头，例如“- [03:15] ……”，可以有一层子要点；'
      + '最后“## 关键概念”，3–6 条“- 术语：一句话解释”。只根据字幕内容写，不要编造字幕里没有的信息；字幕可能是自动识别的，明显认错的专有名词按上下文改正。';
    const res = await runClaude(system, `视频标题：${v.title || '（无标题）'}\n作者：${v.author || '（未知）'}\n下面是字幕，请总结。`, tr.text, model);
    const at = new Date().toISOString();
    const md = `# ${v.title || v.url}\n\n- 作者：${v.author || '未知'}\n- 视频：${v.url}\n- 字幕：${tr.lang}${tr.auto ? ' 自动字幕' : ' 字幕'} · ${clock(tr.seconds)}\n`
      + `- 生成：${at.slice(0, 10)} · ${MODELS[model]} · 输入 ${res.input.toLocaleString('en-US')} / 输出 ${res.output.toLocaleString('en-US')} tokens\n\n<!-- summary -->\n\n${res.text}\n`;
    fs.mkdirSync(SUM_DIR, { recursive: true });
    fs.writeFileSync(path.join(SUM_DIR, id + '.md.tmp'), md);
    fs.renameSync(path.join(SUM_DIR, id + '.md.tmp'), path.join(SUM_DIR, id + '.md'));
    return { at, model, input: res.input, output: res.output };
  } finally { running.delete(id); }
}

// POST /api/videos {action: 'add', text} | {action: 'update', id, title, author} | {action: 'delete', id} | {action: 'refetch', id}
//                  | {action: 'summarize', id, model} | {action: 'mark', id, watched?: true/false, rating?: 1-5 or 0 to clear}
//                  | {action: 'author', author, note} sets the 备注 about an author ('' clears it)
async function handle(body) {
  const all = load(), action = body.action || 'add';
  if (action === 'author') {
    const name = clean(body.author), notes = loadAuthors();
    if (!name) throw new Error('没有作者名字');
    const note = String(body.note == null ? '' : body.note).replace(/\r\n?/g, '\n').trim().slice(0, 5000);
    if (note) notes[name] = { note, updated: new Date().toISOString() }; else delete notes[name];
    saveAuthors(notes);
    return { ok: true, authors: notes, message: note ? '已保存对 ' + name + ' 的备注' : '已清空对 ' + name + ' 的备注' };
  }
  if (action === 'add') {
    const { url, fallback } = parse(body.text);
    let m = {}, warning = '';
    try { m = await readMeta(url); } catch (e) { warning = '没读到标题和作者（' + e.message + '），可以点“编辑”手动填'; }
    if (!warning && !m.title) warning = '没读到标题，可以点“编辑”手动填';
    const id = idOf(m.key && !/:$/.test(m.key) ? m.key : url);
    if (all[id]) return { ok: true, duplicate: true, id, items: list(all), message: '这个视频已经存过了' };
    all[id] = { url, title: clean(m.title || fallback), author: clean(m.author), platform: platformOf(url), added: new Date().toISOString(), ...(m.seconds ? { seconds: m.seconds } : {}) };
    save(all);
    return { ok: true, id, items: list(all), message: warning || '已保存：' + all[id].title };
  }
  const v = all[String(body.id || '')];
  if (!v) throw new Error('找不到这个视频');
  if (action === 'summarize') {
    const s = await summarize(all, body.id, String(body.model || 'sonnet'));
    const fresh = load();                       // the list may have changed while Claude was writing
    if (!fresh[body.id]) return { ok: true, id: body.id, items: list(fresh), message: '视频在生成时被删掉了' };
    fresh[body.id].summary = { at: s.at, model: s.model, tokens: s.input + s.output };
    save(fresh);
    return { ok: true, id: body.id, items: list(fresh), message: `已生成总结（${MODELS[s.model]} · 输入 ${s.input.toLocaleString('en-US')} / 输出 ${s.output.toLocaleString('en-US')} tokens）` };
  }
  if (action === 'delete') { delete all[body.id]; try { fs.unlinkSync(path.join(SUM_DIR, body.id + '.md')); } catch (e) { /* no summary */ } }
  else if (action === 'update') { v.title = clean(body.title); v.author = clean(body.author); }
  else if (action === 'mark') {
    if ('rating' in body) {
      const r = Number(body.rating);
      if (!Number.isInteger(r) || r < 0 || r > 5) throw new Error('分数要是 1–5');
      if (r) v.rating = r; else delete v.rating;
    }
    if ('watched' in body) { if (body.watched) v.watched = v.watched || new Date().toISOString(); else delete v.watched; }
  } else if (action === 'refetch') {
    const m = await readMeta(v.url);
    if (m.title) v.title = clean(m.title);
    if (m.author) v.author = clean(m.author);
    if (m.seconds) v.seconds = m.seconds;
  } else throw new Error('bad action');
  save(all);
  return { ok: true, id: body.id, items: list(all), message: { delete: '已删除', update: '已保存', refetch: '已重新读取', mark: '已保存' }[action] };
}

// ---- the page
const style = `<style>
.vd-form{display:flex;gap:8px;margin:6px 0 4px}
.vd-form[hidden]{display:none}
.vd-form input{flex:1;min-width:0;max-width:none;padding:9px 12px}
.vd-form button,.vd-act button,.vd-sum button{font:inherit;cursor:pointer;border:1px solid #b4c9d4;border-radius:6px;background:#fff;color:#1d2b36}
.vd-form button{padding:8px 18px;background:var(--accent);border-color:var(--accent);color:#fff}
.vd-form button:disabled,.vd-act button:disabled{opacity:.6;cursor:wait}
#vd-msg{min-height:1.4em;margin:4px 0 10px}
.vd-tools{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:6px 10px;margin:0 0 6px;font-size:14px}
.vd-tools input{width:min(100%,240px);padding:6px 10px;font-size:14px}
.vd-tools select{font:inherit;font-size:14px;padding:5px 6px;border:1px solid #b4c9d4;border-radius:6px;background:#fff}
.vd-tools .vd-right{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px}
.vd-tools .vd-right[hidden]{display:none}
.vd-wrap{overflow-x:auto}
table.vd{font-size:14px;table-layout:fixed}
table.vd th{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
table.vd th:nth-child(1){width:58px}table.vd th:nth-child(2){width:34%}table.vd th:nth-child(3){width:70px}table.vd th:nth-child(4){width:13%}
table.vd th:nth-child(5){width:124px}table.vd th:nth-child(7){width:150px}
table.vd .vd-d{white-space:nowrap;font-variant-numeric:tabular-nums;color:#33454f}
table.vd td{padding:8px 10px;overflow-wrap:anywhere}
table.vd .vd-w{text-align:center}
.vd-grip{position:absolute;top:0;right:0;width:9px;height:100%;cursor:col-resize;touch-action:none}
.vd-grip::after{content:"";position:absolute;top:22%;bottom:22%;right:3px;border-right:1px solid #c9d6de}
.vd-grip:hover::after,.vd-grip.vd-on::after{border-right:2px solid var(--accent)}
table.vd.vd-dragging{user-select:none;cursor:col-resize}
.vd-check{width:16px;height:16px;margin:2px 0 0;cursor:pointer;accent-color:var(--accent)}
.vd-check:disabled{cursor:default}
td.vd-r{white-space:nowrap;overflow:hidden}
.vd-stars{display:inline-flex}
.vd-star{font:inherit;font-size:18px;line-height:1;padding:0 1px;border:0;background:none;color:#c5ced6;cursor:pointer}
.vd-star.vd-on{color:#d99a00}
.vd-stars:hover .vd-star{color:#ebb434}
.vd-stars .vd-star:hover~.vd-star{color:#c5ced6}
span.vd-star{cursor:default}
.vd-sub{display:block;margin-top:2px;font-size:12px;color:#5b6b78}
.vd-url{font-size:13px}
button.vd-author{font:inherit;color:inherit;text-align:left;background:none;border:0;padding:0;cursor:pointer;overflow-wrap:anywhere}
.vd-pen{font-size:13px;color:#a3b1bc}
button.vd-author:hover .vd-pen,button.vd-author.vd-open .vd-pen{color:var(--accent)}
button.vd-author.vd-noted .vd-pen{color:var(--accent);font-weight:600}
.vd-anote textarea{display:block;width:100%;min-height:90px;resize:vertical;margin:4px 0 6px;padding:8px 10px;border:1px solid #b4c9d4;border-radius:6px;font:inherit;font-size:14px;line-height:1.55}
.vd-note-btns button{margin:0 6px 0 0}
.vd-note-ro{white-space:pre-wrap}
.vd-act{white-space:normal}
.vd-act button{padding:2px 8px;font-size:13px;margin:0 4px 4px 0}
.vd-act button.vd-has{border-color:#2da44e;color:#116329}
table.vd input{width:100%;box-sizing:border-box;padding:5px 8px;font-size:14px}
tr.vd-sum-row td{padding:0 10px 12px;border-bottom:1px solid #dce4ea}
.vd-sum{background:#fff;border:1px solid #dce4ea;border-radius:8px;padding:10px 14px;font-size:14px;line-height:1.55}
.vd-sum h4{margin:12px 0 4px;font-size:15px}
.vd-sum ul{margin:4px 0;padding-left:1.3em}
.vd-sum li{margin:3px 0}
.vd-sum p{margin:4px 0}
.vd-sum .vd-meta{font-size:12px;color:#5b6b78;margin:0 0 6px}
.vd-sum a.vd-t{font-family:Consolas,monospace;font-size:13px;text-decoration:none;margin-right:4px}
.vd-sum button{padding:2px 8px;font-size:13px;margin-top:6px}
.vd-empty{color:#5b6b78}
@media(max-width:640px){
 table.vd,table.vd tbody{display:block;width:auto!important}
 table.vd thead{display:none}
 table.vd tr{display:flex;flex-wrap:wrap;align-items:flex-start;border-bottom:1px solid #dce4ea;padding:8px 0}
 table.vd td{display:block;flex:0 0 100%;border:0;padding:2px 0}
 table.vd td.vd-w{flex:0 0 28px;text-align:left}
 table.vd td.vd-t{flex:1 1 calc(100% - 28px);min-width:0}
 table.vd td.vd-d{flex:0 0 auto;margin-right:14px}
 table.vd td.vd-d:empty{display:none}
 table.vd td.vd-d::before{content:"时长："; color:#5b6b78}
 table.vd td.vd-a{flex:1 1 0;min-width:0}
 table.vd td.vd-a:not(:empty)::before{content:"作者："; color:#5b6b78}
 table.vd td.vd-r:not(:empty)::before{content:"Usefulness："; color:#5b6b78}
 tr.vd-sum-row{padding-top:0}
 tr.vd-sum-row td{padding:0 0 4px;border:0}
}
</style>`;

// browser side: list from the server (or, on the web version, from the pushed videos.json), add / edit / delete / summarize
// through the server; summaries are read from Study notes/video-summaries/<id>.md (also on the web version)
function client() {
  var online = false, items = [], editing = '', open = {}, busy = {}, cache = {}, MODEL = 'study-video-model';
  var authors = {}, noteOpen = {}, noteDraft = {}, noteFocus = '';   // author 备注: saved notes; per video row: open, unsaved text
  function $(id) { return document.getElementById(id); }
  function msg(t) { $('vd-msg').textContent = t || ''; }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function post(body) {
    return fetch('/api/videos', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Study': '1' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || ('HTTP ' + r.status)); return j; }); });
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function link(url, text, cls) { var a = el('a', cls, text); a.href = url; a.target = '_blank'; a.rel = 'noopener'; return a; }
  function btn(text, fn, cls) { var b = el('button', cls || '', text); b.type = 'button'; b.addEventListener('click', fn); return b; }
  function day(iso) { var d = new Date(iso); return isNaN(d) ? '' : (d.getMonth() + 1) + '/' + d.getDate(); }
  function ytId(u) {
    try {
      var x = new URL(u);
      if (x.hostname === 'youtu.be') return x.pathname.slice(1).split('/')[0];
      return x.searchParams.get('v') || ((x.pathname.match(/\/(?:shorts|live|embed)\/([\w-]+)/) || [])[1]) || '';
    } catch (e) { return ''; }
  }
  function act(body) {
    msg('正在保存…');
    post(body).then(function (j) { items = j.items; editing = ''; render(); msg(j.message); })
      .catch(function (e) { msg('失败：' + e.message); });
  }
  // 看过 and Usefulness: shown at once and saved quietly; the row is not redrawn, so an open 编辑 row keeps what was typed
  function mark(v, field, value, repaint) {
    var before = v[field], body = { action: 'mark', id: v.id };
    if (value) v[field] = field === 'watched' ? (v.watched || new Date().toISOString()) : value; else delete v[field];
    body[field] = value; repaint(); count();
    post(body).catch(function (e) {
      if (before === undefined) delete v[field]; else v[field] = before;
      repaint(); count(); msg('保存失败：' + e.message);
    });
  }
  // 时长: seconds -> "24:37" or "1:02:05"; '' when not known
  function hms(s) {
    s = Math.round(+s);
    if (!(s > 0)) return '';
    var h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = s % 60, two = function (n) { return (n < 10 ? '0' : '') + n; };
    return (h ? h + ':' + two(m) : m) + ':' + two(x);
  }
  function subText(v) {
    return v.platform + (day(v.added) ? ' · ' + day(v.added) + ' 添加' : '') + (v.watched && day(v.watched) ? ' · ' + day(v.watched) + ' 看过' : '');
  }
  function watchedCell(td, v, sub) {
    var c = el('input', 'vd-check');
    c.type = 'checkbox'; c.disabled = !online; c.setAttribute('aria-label', '看过');
    function paint() {
      c.checked = !!v.watched;
      c.title = v.watched ? (day(v.watched) ? day(v.watched) + ' ' : '') + '看过' : (online ? '看过了就勾上' : '没看过');
      if (sub) sub.textContent = subText(v);
    }
    paint();
    c.addEventListener('change', function () { mark(v, 'watched', c.checked, paint); });
    td.appendChild(c);
  }
  function ratingCell(td, v) {
    if (!online) {   // read only: the stars, or nothing when not rated
      if (!v.rating) return;
      var ro = el('span', 'vd-stars-ro');
      ro.title = 'Usefulness ' + v.rating + ' / 5';
      for (var k = 1; k <= 5; k++) ro.appendChild(el('span', 'vd-star' + (k <= v.rating ? ' vd-on' : ''), '★'));
      return td.appendChild(ro);
    }
    var box = el('span', 'vd-stars'), stars = [];
    function paint() {
      stars.forEach(function (s, i) {
        var n = i + 1;
        s.classList.toggle('vd-on', n <= (v.rating || 0));
        s.title = n === v.rating ? n + ' 分（再点一次清除）' : n + ' 分';
        s.setAttribute('aria-pressed', n === v.rating ? 'true' : 'false');
      });
    }
    [1, 2, 3, 4, 5].forEach(function (n) {
      var s = btn('★', function () { mark(v, 'rating', n === v.rating ? 0 : n, paint); }, 'vd-star');
      s.setAttribute('aria-label', 'Usefulness ' + n + ' 分');
      stars.push(s); box.appendChild(s);
    });
    paint();
    td.appendChild(box);
  }
  // 作者 备注: click an author's name to open a box under that row with what you think of them, click again to close it.
  // One 备注 per author (the same in every row of theirs); ✎ is coloured when there is one, and hovering shows it.
  function authorCell(td, v) {
    if (!v.author) return;
    var note = (authors[v.author] || {}).note || '';
    if (!online && !note) { td.textContent = v.author; return; }
    var b = btn('', function () {
      noteOpen[v.id] = !noteOpen[v.id];
      if (noteOpen[v.id]) noteFocus = v.id;
      render();
    }, 'vd-author' + (note ? ' vd-noted' : '') + (noteOpen[v.id] ? ' vd-open' : ''));
    b.appendChild(document.createTextNode(v.author + ' '));
    b.appendChild(el('span', 'vd-pen', '✎'));
    b.title = note ? '备注：' + (note.length > 200 ? note.slice(0, 200) + '…' : note) + '\n（点一下展开）' : '点一下写对 ' + v.author + ' 的备注';
    b.setAttribute('aria-expanded', noteOpen[v.id] ? 'true' : 'false');
    td.appendChild(b);
  }
  function saveNote(v, text, button) {
    button.disabled = true; msg('正在保存…');
    post({ action: 'author', author: v.author, note: text }).then(function (j) {
      authors = j.authors || {}; delete noteDraft[v.id]; noteOpen[v.id] = false; render(); msg(j.message);
    }).catch(function (e) { button.disabled = false; msg('保存失败：' + e.message); });
  }
  function noteRow(v) {
    var tr = el('tr', 'vd-sum-row vd-note-row'), td = el('td'), box = el('div', 'vd-sum vd-anote'), cur = authors[v.author] || {};
    td.colSpan = 7; td.appendChild(box); tr.appendChild(td);
    box.appendChild(el('p', 'vd-meta', '对 ' + v.author + ' 的备注' + (cur.updated && day(cur.updated) ? ' · ' + day(cur.updated) + ' 更新' : '')));
    if (!online) { box.appendChild(el('p', 'vd-note-ro', cur.note || '')); return tr; }
    var ta = el('textarea', 'vd-note-text'), row = el('div', 'vd-note-btns'), save;
    ta.value = v.id in noteDraft ? noteDraft[v.id] : (cur.note || '');
    ta.placeholder = '对这个作者的看法：讲得怎么样、擅长什么、值不值得继续看…（Ctrl+Enter 保存，清空后保存就删除备注）';
    ta.addEventListener('input', function () { noteDraft[v.id] = ta.value; });
    ta.addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); save.click(); } });
    save = btn('保存', function () { saveNote(v, ta.value, save); });
    row.appendChild(save);
    row.appendChild(btn('取消', function () { delete noteDraft[v.id]; noteOpen[v.id] = false; render(); }));
    box.appendChild(ta); box.appendChild(row);
    if (noteFocus === v.id) { noteFocus = ''; setTimeout(function () { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }, 0); }
    return tr;
  }
  function summarize(v) {
    busy[v.id] = true; render();
    msg('正在读字幕，再让 Claude 写总结，大约 20–60 秒…');
    post({ action: 'summarize', id: v.id, model: $('vd-model').value }).then(function (j) {
      items = j.items; delete cache[v.id]; open[v.id] = true; msg(j.message);
    }).catch(function (e) { msg('生成失败：' + e.message); })
      .then(function () { delete busy[v.id]; render(); });
  }

  // the summary Markdown: meta lines before <!-- summary -->, then 一句话总结, ## headings and (nested) bullets;
  // [mm:ss] / [h:mm:ss] become links to that moment of the video
  function inline(parent, text, vid) {
    var re = /\[(\d{1,2}:\d{2}(?::\d{2})?)\]/g, last = 0, m;
    while ((m = re.exec(text))) {
      parent.appendChild(document.createTextNode(text.slice(last, m.index)));
      var p = m[1].split(':').map(Number), s = p.reduce(function (a, b) { return a * 60 + b; }, 0);
      parent.appendChild(vid ? link('https://www.youtube.com/watch?v=' + vid + '&t=' + s + 's', m[1], 'vd-t') : el('span', 'vd-t', m[1]));
      last = re.lastIndex;
    }
    parent.appendChild(document.createTextNode(text.slice(last)));
  }
  function renderSummary(box, md, v) {
    var vid = ytId(v.url), parts = md.split('<!-- summary -->'), meta = parts.length > 1 ? parts[0] : '', body = parts.length > 1 ? parts[1] : md;
    var gen = (meta.match(/^- 生成：(.*)$/m) || [])[1], sub = (meta.match(/^- 字幕：(.*)$/m) || [])[1];
    box.textContent = '';
    if (gen || sub) box.appendChild(el('p', 'vd-meta', [sub && '字幕：' + sub, gen && '生成：' + gen].filter(Boolean).join(' · ')));
    var list = null, last = null;
    body.split('\n').forEach(function (line) {
      if (!line.trim()) return;
      var h = line.match(/^#{1,4}\s+(.*)$/), top = line.match(/^[-*]\s+(.*)$/), nest = line.match(/^\s+[-*]\s+(.*)$/);
      if (h) { list = null; box.appendChild(el('h4', '', h[1])); }
      else if (nest && last) {
        var ul = last.querySelector('ul') || last.appendChild(el('ul'));
        var li2 = el('li'); inline(li2, nest[1], vid); ul.appendChild(li2);
      } else if (top) {
        if (!list) list = box.appendChild(el('ul'));
        last = el('li'); inline(last, top[1], vid); list.appendChild(last);
      } else { list = null; var p = el('p'); inline(p, line.trim(), vid); box.appendChild(p); }
    });
    if (online) box.appendChild(btn(busy[v.id] ? '生成中…' : '重新生成', function () { if (confirm('用 ' + $('vd-model').selectedOptions[0].textContent + ' 重新生成这个总结？会再用一次 Claude 的用量。')) summarize(v); }));
  }
  function showSummary(box, v) {
    var key = v.id + '@' + v.summary.at;
    if (cache[key]) return renderSummary(box, cache[key], v);
    box.textContent = '正在读取总结…';
    fetch('../Study%20notes/video-summaries/' + v.id + '.md?v=' + encodeURIComponent(v.summary.at), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (md) { cache[key] = md; renderSummary(box, md, v); })
      .catch(function () { box.textContent = '读不到总结文件。网页版要等电脑推送到 GitHub 以后才有。'; });
  }

  function render() {
    var q = $('vd-q').value.trim().toLowerCase(), body = $('vd-rows');
    body.textContent = '';
    var shown = items.filter(function (v) { return !q || (v.title + ' ' + v.author + ' ' + v.url + ' ' + v.platform).toLowerCase().indexOf(q) >= 0; });
    shown.forEach(function (v) {
      var tr = el('tr'), w = el('td', 'vd-w'), t = el('td', 'vd-t'), d = el('td', 'vd-d', hms(v.seconds)), a = el('td', 'vd-a'), r = el('td', 'vd-r'), u = el('td', 'vd-url'), x = el('td', 'vd-act'), sub = null;
      if (editing === v.id) {
        var ti = el('input'), ai = el('input');
        ti.value = v.title; ti.placeholder = '主题'; ai.value = v.author; ai.placeholder = '作者';
        t.appendChild(ti); a.appendChild(ai);
        x.appendChild(btn('保存', function () { act({ action: 'update', id: v.id, title: ti.value, author: ai.value }); }));
        x.appendChild(btn('取消', function () { editing = ''; render(); }));
        x.appendChild(btn('重新读取', function () { msg('正在重新读取…'); act({ action: 'refetch', id: v.id }); }));
      } else {
        t.appendChild(link(v.url, v.title || '（没有标题，点编辑填写）'));
        sub = t.appendChild(el('span', 'vd-sub'));
        authorCell(a, v);
        if (v.summary) x.appendChild(btn(open[v.id] ? '收起总结' : '看总结', function () { open[v.id] = !open[v.id]; render(); }, 'vd-has'));
        else if (online && v.platform === 'YouTube') {
          var b = btn(busy[v.id] ? '生成中…' : '生成总结', function () { summarize(v); });
          b.disabled = !!busy[v.id];
          x.appendChild(b);
        }
        if (online) {
          x.appendChild(btn('编辑', function () { editing = v.id; render(); }));
          x.appendChild(btn('删除', function () { if (confirm('删除「' + (v.title || v.url) + '」？' + (v.summary ? '它的总结也会删掉。' : ''))) act({ action: 'delete', id: v.id }); }));
        }
      }
      watchedCell(w, v, sub);
      ratingCell(r, v);
      u.appendChild(link(v.url, v.url));
      [w, t, d, a, r, u, x].forEach(function (c) { tr.appendChild(c); });
      body.appendChild(tr);
      if (v.author && noteOpen[v.id] && editing !== v.id) body.appendChild(noteRow(v));
      if (v.summary && open[v.id] && editing !== v.id) {
        var sr = el('tr', 'vd-sum-row'), sd = el('td'), box = el('div', 'vd-sum');
        sd.colSpan = 7; sd.appendChild(box); sr.appendChild(sd); body.appendChild(sr);
        showSummary(box, v);
      }
    });
    count(shown.length);
    $('vd-empty').hidden = items.length > 0;
  }
  function count(n) {
    var q = $('vd-q').value.trim(), seen = items.filter(function (v) { return v.watched; }).length;
    if (n === undefined) n = $('vd-rows').querySelectorAll('tr:not(.vd-sum-row)').length;
    $('vd-count').textContent = (q ? n + ' / ' : '') + items.length + ' 个视频' + (items.length ? ' · 看过 ' + seen : '');
  }

  // column widths: drag the line at the right edge of a heading; saved in this browser, double-click a line to go back to the default
  var COLS = 'study-video-cols', table = $('vd-table'), ths = [].slice.call(table.querySelectorAll('thead th'));
  function setCols(w) {
    ths.forEach(function (th, i) { th.style.width = w ? w[i] + 'px' : ''; });
    table.style.width = w ? w.reduce(function (s, x) { return s + x; }, 0) + 'px' : '';
  }
  ths.forEach(function (th, i) {
    var g = th.appendChild(el('span', 'vd-grip'));
    g.title = '拖动调整列宽，双击恢复默认';
    g.addEventListener('pointerdown', function (e) {
      if (e.button) return;
      e.preventDefault();
      var w = ths.map(function (h) { return Math.round(h.getBoundingClientRect().width); }), x0 = e.clientX, w0 = w[i], moved = false;
      g.setPointerCapture(e.pointerId); g.classList.add('vd-on'); table.classList.add('vd-dragging');
      function move(ev) { if (ev.clientX === x0 && !moved) return; moved = true; w[i] = Math.max(44, Math.round(w0 + ev.clientX - x0)); setCols(w); }
      function up() {
        g.removeEventListener('pointermove', move); g.removeEventListener('pointerup', up); g.removeEventListener('pointercancel', up);
        g.classList.remove('vd-on'); table.classList.remove('vd-dragging');
        if (moved) ls(COLS, JSON.stringify(w));
      }
      g.addEventListener('pointermove', move); g.addEventListener('pointerup', up); g.addEventListener('pointercancel', up);
    });
    g.addEventListener('dblclick', function () { setCols(null); try { localStorage.removeItem(COLS); } catch (e) { /* nothing saved */ } });
  });
  try {
    var cw = JSON.parse(ls(COLS) || 'null');
    if (cw && cw.length === ths.length && cw.every(function (x) { return x >= 44 && x < 5000; })) setCols(cw);
  } catch (e) { /* default widths */ }
  function setOnline(on) {
    online = on;
    $('vd-form').hidden = !on;
    $('vd-model-wrap').hidden = !on;
  }
  function load() {
    fetch('/api/videos', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { setOnline(true); items = j.items; authors = j.authors || {}; render(); })
      .catch(function () {
        // web version or no server: read the pushed file, read only
        var web = location.protocol !== 'file:' && ['127.0.0.1', 'localhost'].indexOf(location.hostname) < 0;
        setOnline(false);
        fetch('../Study%20notes/videos.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; })
          .then(function (all) {
            items = Object.keys(all).map(function (k) { var v = all[k]; v.id = k; return v; })
              .sort(function (a, b) { return (b.added || '').localeCompare(a.added || ''); });
            render();
            fetch('../Study%20notes/authors.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; })
              .catch(function () { return {}; }).then(function (a) { authors = a; render(); });
            msg(web ? '网页版只能看：在电脑上打开这个页面（本地服务器）才能添加、修改和生成总结，推送到 GitHub 后这里会更新'
              : '没有连接本地服务器：只能看已经存过的视频和总结。运行 start-server.bat 后才能添加');
          });
      });
  }
  $('vd-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var text = $('vd-url').value.trim(), b = $('vd-save');
    if (!text) return msg('先粘贴一个视频链接');
    b.disabled = true; msg('正在读取标题和作者…');
    post({ action: 'add', text: text }).then(function (j) {
      items = j.items; render(); msg(j.message);
      if (!j.duplicate) $('vd-url').value = '';
    }).catch(function (e2) { msg('保存失败：' + e2.message); }).then(function () { b.disabled = false; });
  });
  $('vd-q').addEventListener('input', render);
  var saved = ls(MODEL);
  if (saved && $('vd-model').querySelector('option[value="' + saved + '"]')) $('vd-model').value = saved;
  $('vd-model').addEventListener('change', function () { ls(MODEL, $('vd-model').value); });
  load();
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !editing && !Object.keys(busy).length) load(); });
}

function page({ shell }) {
  const body = `${style}<h1>${TITLE}</h1>`
    + `<form id="vd-form" class="vd-form" hidden><input id="vd-url" type="text" inputmode="url" autocomplete="off" placeholder="粘贴视频链接（YouTube 视频可以生成总结）" aria-label="视频链接"><button id="vd-save" type="submit">Save</button></form>`
    + `<p id="vd-msg" class="muted"></p>`
    + `<div class="vd-tools"><span id="vd-count" class="muted"></span><span class="vd-right">`
    + `<label id="vd-model-wrap" hidden title="生成总结用的模型，用的是这台电脑上 Claude Code 的登录（算在套餐用量里）">总结用 <select id="vd-model">`
    + Object.entries({ sonnet: 'Sonnet（推荐）', opus: 'Opus（最好，用量最多）', haiku: 'Haiku（最省）' }).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')
    + `</select></label><input id="vd-q" type="search" placeholder="搜索主题、作者" aria-label="搜索"></span></div>`
    + `<div class="vd-wrap"><table id="vd-table" class="vd"><thead><tr><th class="vd-w">看过</th><th>主题</th><th class="vd-d" title="视频长度">时长</th><th>作者</th><th>Usefulness</th><th>链接</th><th></th></tr></thead>`
    + `<tbody id="vd-rows"></tbody></table></div>`
    + `<p id="vd-empty" class="vd-empty" hidden>还没有视频。把链接粘贴到上面的框里，点 Save。</p>`
    + `<script>(${client.toString()})();</script>`;
  fs.writeFileSync(FILE, shell(TITLE, body, true));
  return { file: FILE };
}

module.exports = { FILE, TITLE, DATA_REL, SUM_REL, AUTHORS_REL, load, save, list, loadAuthors, saveAuthors, merge, parse, readMeta, youtubeTranscript, handle, page };
