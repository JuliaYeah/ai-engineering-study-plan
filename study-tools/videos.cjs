// 视频链接: a list of study videos. Paste a link (or a whole share text) on Reports/AI_ENGINEER_VIDEOS.html and click Save;
// the local server reads the title and author from the link and stores the video in "Study notes/videos.json",
// which the GitHub buttons push and pull with the study notes. The web version (GitHub Pages) reads that file and is read only.
//   YouTube - official oEmbed endpoint          小红书 - the note page, opened as an iPhone browser (title, user.nickName)
//   Bilibili - public video API (title, owner)   Vimeo - oEmbed            other sites - oEmbed link, og:title / <title>, author meta
// When nothing can be read the video is still saved; fill in the title and author with 编辑.
const fs = require('fs'), path = require('path'), crypto = require('crypto');

const FILE = 'AI_ENGINEER_VIDEOS.html', TITLE = '视频链接';
const DATA_REL = 'Study notes/videos.json', DATA = path.join(__dirname, '..', DATA_REL);
const DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// ---- storage: {id: {url, title, author, platform, added}}, one video per line so two devices merge cleanly in git
function load() { try { return JSON.parse(fs.readFileSync(DATA, 'utf8')); } catch (e) { return {}; } }
function save(all) {
  const lines = Object.keys(all).sort().map(k => JSON.stringify(k) + ': ' + JSON.stringify(all[k]));
  fs.mkdirSync(path.dirname(DATA), { recursive: true });
  fs.writeFileSync(DATA + '.tmp', '{\n' + lines.join(',\n') + '\n}\n');
  fs.renameSync(DATA + '.tmp', DATA);
}
const list = (all = load()) => Object.entries(all).map(([id, v]) => ({ id, ...v })).sort((a, b) => (b.added || '').localeCompare(a.added || ''));
// 3-way merge per video against the common ancestor (b), o = upstream, t = this device; both changed the same video: this device wins
function merge(b = {}, o = {}, t = {}) {
  const s = v => (v === undefined ? undefined : JSON.stringify(v)), out = {};
  for (const k of new Set([...Object.keys(b), ...Object.keys(o), ...Object.keys(t)])) {
    const v = s(o[k]) === s(t[k]) ? o[k] : s(o[k]) === s(b[k]) ? t[k] : s(t[k]) === s(b[k]) ? o[k] : t[k];
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
    return n && { title: n.title || (n.desc || '').split('\n')[0], author: n.user?.nickName || n.user?.nickname || '', id: n.noteId };
  } catch (e) { return null; }
}

async function readMeta(url) {
  const p = platformOf(url);
  if (p === 'YouTube') {
    const j = await getJson('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent(url));
    return { title: j.title, author: j.author_name, key: 'youtube:' + youtubeId(url) };
  }
  if (p === 'Vimeo') {
    const j = await getJson('https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(url));
    return { title: j.title, author: j.author_name, key: 'vimeo:' + j.video_id };
  }
  if (p === '小红书') {
    const r = await get(url, IPHONE);
    const n = xhsNote(r.text);
    if (n && n.title) return { title: n.title, author: n.author, key: n.id ? 'xhs:' + n.id : '' };
    if (/\/login/.test(r.url)) throw new Error('小红书要求登录');
    return { title: meta(r.text, 'og:title').replace(/\s*-\s*(小红书|rednote)$/i, ''), author: '' };
  }
  if (p === 'B站') {   // the video page (the public API answers 412 to scripts); b23.tv short links redirect to it
    const r = await get(url);
    const bv = (r.url.match(/\/video\/(BV\w+)/) || url.match(/\/video\/(BV\w+)/) || [])[1];
    const title = meta(r.text, 'og:title').replace(/_哔哩哔哩_bilibili$/, '');
    if (/^视频去哪了呢/.test(title)) throw new Error('B站视频不存在或已删除');
    return { title, author: meta(r.text, 'author') || decode((r.text.match(/"owner":\{"mid":\d+,"name":"([^"]*)"/) || [])[1]), key: bv ? 'bilibili:' + bv : '' };
  }
  // any other site: its oEmbed link if it has one, else the page's own title and author tags
  const r = await get(url);
  const oe = (r.text.match(/<link[^>]+type=["']application\/json\+oembed["'][^>]*>/i) || [''])[0].match(/href=["']([^"']+)/i);
  if (oe) { try { const j = await getJson(decode(oe[1])); if (j.title) return { title: j.title, author: j.author_name || '' }; } catch (e) { /* use the page */ } }
  const ld = (r.text.match(/"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"/) || [])[1];
  return {
    title: meta(r.text, 'og:title') || meta(r.text, 'twitter:title') || decode((r.text.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]),
    author: [meta(r.text, 'author'), decode(ld), meta(r.text, 'article:author')].find(a => a && !/^https?:/.test(a)) || '',
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

// POST /api/videos {action: 'add', text} | {action: 'update', id, title, author} | {action: 'delete', id} | {action: 'refetch', id}
async function handle(body) {
  const all = load(), action = body.action || 'add';
  if (action === 'add') {
    const { url, fallback } = parse(body.text);
    let m = {}, warning = '';
    try { m = await readMeta(url); } catch (e) { warning = '没读到标题和作者（' + e.message + '），可以点“编辑”手动填'; }
    if (!warning && !m.title) warning = '没读到标题，可以点“编辑”手动填';
    const id = idOf(m.key && !/:$/.test(m.key) ? m.key : url);
    if (all[id]) return { ok: true, duplicate: true, id, items: list(all), message: '这个视频已经存过了' };
    all[id] = { url, title: clean(m.title || fallback), author: clean(m.author), platform: platformOf(url), added: new Date().toISOString() };
    save(all);
    return { ok: true, id, items: list(all), message: warning || '已保存：' + all[id].title };
  }
  const v = all[String(body.id || '')];
  if (!v) throw new Error('找不到这个视频');
  if (action === 'delete') delete all[body.id];
  else if (action === 'update') { v.title = clean(body.title); v.author = clean(body.author); }
  else if (action === 'refetch') {
    const m = await readMeta(v.url);
    if (m.title) v.title = clean(m.title);
    if (m.author) v.author = clean(m.author);
  } else throw new Error('bad action');
  save(all);
  return { ok: true, id: body.id, items: list(all), message: { delete: '已删除', update: '已保存', refetch: '已重新读取' }[action] };
}

// ---- the page
const style = `<style>
.vd-form{display:flex;gap:8px;margin:6px 0 4px}
.vd-form[hidden]{display:none}
.vd-form input{flex:1;min-width:0;max-width:none;padding:9px 12px}
.vd-form button,.vd-act button{font:inherit;cursor:pointer;border:1px solid #b4c9d4;border-radius:6px;background:#fff;color:#1d2b36}
.vd-form button{padding:8px 18px;background:var(--accent);border-color:var(--accent);color:#fff}
.vd-form button:disabled{opacity:.6;cursor:wait}
#vd-msg{min-height:1.4em;margin:4px 0 10px}
.vd-tools{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:0 0 6px;font-size:14px}
.vd-tools input{width:min(100%,260px);padding:6px 10px;font-size:14px}
table.vd{font-size:14px;table-layout:fixed}
table.vd th:nth-child(1){width:40%}table.vd th:nth-child(2){width:16%}table.vd th:nth-child(4){width:132px}
table.vd td{padding:8px 10px;overflow-wrap:anywhere}
.vd-sub{display:block;margin-top:2px;font-size:12px;color:#5b6b78}
.vd-url{font-size:13px}
.vd-act{white-space:nowrap}
.vd-act button{padding:2px 8px;font-size:13px;margin:0 4px 4px 0}
table.vd input{width:100%;box-sizing:border-box;padding:5px 8px;font-size:14px}
.vd-empty{color:#5b6b78}
@media(max-width:640px){
 table.vd,table.vd tbody,table.vd tr,table.vd td{display:block;width:auto}
 table.vd thead{display:none}
 table.vd tr{border-bottom:1px solid #dce4ea;padding:8px 0}
 table.vd td{border:0;padding:2px 0}
 table.vd td:nth-child(2):not(:empty)::before{content:"作者："; color:#5b6b78}
}
</style>`;

// browser side: list from the server (or, on the web version, from the pushed videos.json), add / edit / delete through the server
function client() {
  var online = false, items = [], editing = '';
  function $(id) { return document.getElementById(id); }
  function msg(t) { $('vd-msg').textContent = t || ''; }
  function post(body) {
    return fetch('/api/videos', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Study': '1' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || ('HTTP ' + r.status)); return j; }); });
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function link(url, text, cls) { var a = el('a', cls, text); a.href = url; a.target = '_blank'; a.rel = 'noopener'; return a; }
  function btn(text, fn) { var b = el('button', '', text); b.type = 'button'; b.addEventListener('click', fn); return b; }
  function day(iso) { var d = new Date(iso); return isNaN(d) ? '' : (d.getMonth() + 1) + '/' + d.getDate(); }
  function act(body, done) {
    msg('正在保存…');
    post(body).then(function (j) { items = j.items; editing = ''; render(); msg(j.message); if (done) done(j); })
      .catch(function (e) { msg('失败：' + e.message); });
  }
  function render() {
    var q = $('vd-q').value.trim().toLowerCase(), body = $('vd-rows');
    body.textContent = '';
    var shown = items.filter(function (v) { return !q || (v.title + ' ' + v.author + ' ' + v.url + ' ' + v.platform).toLowerCase().indexOf(q) >= 0; });
    shown.forEach(function (v) {
      var tr = el('tr'), t = el('td'), a = el('td'), u = el('td', 'vd-url'), x = el('td', 'vd-act');
      if (editing === v.id) {
        var ti = el('input'), ai = el('input');
        ti.value = v.title; ti.placeholder = '主题'; ai.value = v.author; ai.placeholder = '作者';
        t.appendChild(ti); a.appendChild(ai);
        x.appendChild(btn('保存', function () { act({ action: 'update', id: v.id, title: ti.value, author: ai.value }); }));
        x.appendChild(btn('取消', function () { editing = ''; render(); }));
        x.appendChild(btn('重新读取', function () { msg('正在重新读取…'); act({ action: 'refetch', id: v.id }); }));
      } else {
        t.appendChild(link(v.url, v.title || '（没有标题，点编辑填写）'));
        t.appendChild(el('span', 'vd-sub', v.platform + (day(v.added) ? ' · ' + day(v.added) + ' 添加' : '')));
        a.textContent = v.author;
        if (online) {
          x.appendChild(btn('编辑', function () { editing = v.id; render(); }));
          x.appendChild(btn('删除', function () { if (confirm('删除「' + (v.title || v.url) + '」？')) act({ action: 'delete', id: v.id }); }));
        }
      }
      u.appendChild(link(v.url, v.url));
      [t, a, u, x].forEach(function (c) { tr.appendChild(c); });
      body.appendChild(tr);
    });
    $('vd-count').textContent = q ? shown.length + ' / ' + items.length + ' 个视频' : items.length + ' 个视频';
    $('vd-empty').hidden = items.length > 0;
  }
  function setOnline(on) {
    online = on;
    $('vd-form').hidden = !on;
  }
  function load() {
    fetch('/api/videos', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { setOnline(true); items = j.items; render(); })
      .catch(function () {
        // web version or no server: read the pushed file, read only
        var web = location.protocol !== 'file:' && ['127.0.0.1', 'localhost'].indexOf(location.hostname) < 0;
        setOnline(false);
        fetch('../Study%20notes/videos.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; })
          .then(function (all) {
            items = Object.keys(all).map(function (k) { var v = all[k]; v.id = k; return v; })
              .sort(function (a, b) { return (b.added || '').localeCompare(a.added || ''); });
            render();
            msg(web ? '网页版只能看：在电脑上打开这个页面（本地服务器）才能添加和修改，推送到 GitHub 后这里会更新'
              : '没有连接本地服务器：只能看已经存过的视频。运行 start-server.bat 后才能添加');
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
  load();
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !editing) load(); });
}

function page({ shell }) {
  const body = `${style}<h1>${TITLE}</h1>`
    + `<form id="vd-form" class="vd-form" hidden><input id="vd-url" type="text" inputmode="url" autocomplete="off" placeholder="粘贴视频链接：YouTube、小红书、B站…（连分享文字一起粘贴也可以）" aria-label="视频链接"><button id="vd-save" type="submit">Save</button></form>`
    + `<p id="vd-msg" class="muted"></p>`
    + `<div class="vd-tools"><span id="vd-count" class="muted"></span><input id="vd-q" type="search" placeholder="搜索主题、作者" aria-label="搜索"></div>`
    + `<table class="vd"><thead><tr><th>主题</th><th>作者</th><th>链接</th><th></th></tr></thead><tbody id="vd-rows"></tbody></table>`
    + `<p id="vd-empty" class="vd-empty" hidden>还没有视频。把链接粘贴到上面的框里，点 Save。</p>`
    + `<script>(${client.toString()})();</script>`;
  fs.writeFileSync(FILE, shell(TITLE, body, true));
  return { file: FILE };
}

module.exports = { FILE, TITLE, DATA_REL, load, save, list, merge, parse, readMeta, handle, page };
