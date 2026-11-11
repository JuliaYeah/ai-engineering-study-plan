// Daily study notes: two pages, both linked under every day of the timetable.
//   - 学习记录, AI_ENGINEER_STUDY_LOG.html (in Reports/), is where you write. It shows one day at a time (#day-NN)
//     with a box under every item of that day: each problem, the coding study topic, the online course, the ML
//     lesson / notebook / QuantVault problem, system design, the project, each interview question and the daily review.
//     What you type is saved as you go: POST /api/notes -> "Study notes/drafts.json" (server.cjs). Without the server
//     it stays in this browser and is sent to the server the next time the page is opened through it.
//     "生成今日学习笔记" writes "Study notes/<date> Day NN.md" from the boxes that have text (POST /api/notes/generate).
//     Generating again overwrites that file: edit in 学习记录, not in the .md.
//   - 今日学习笔记, AI_ENGINEER_STUDY_NOTES.html, shows the generated .md of a day, rendered (needs the server).
// The items are read from the timetable Markdown, so they always match the day; ticked items show ✓ because the
// keys are the same as the ticks' (progress.keyOf).
const fs = require('fs');
const progress = require('./progress.cjs');
const { iso } = require('./reschedule.cjs');

const LOG = 'AI_ENGINEER_STUDY_LOG.html', VIEW = 'AI_ENGINEER_STUDY_NOTES.html';
const link = day => `[✎ 学习记录](${LOG}#day-${day}) · [📖 今日学习笔记](${VIEW}#day-${day})`;

const ROW = /^\| (\d{2}:\d{2}–\d{2}:\d{2}) \| ([^|]+?) \| (.*) \|$/;
const PLACEHOLDER = {
  problem: '这道题：思路、卡在哪里、学到的技巧…',
  topic: '这个 topic 学到了什么、哪里还不懂…',
  course: '网课学到了什么…',
  project: '今天项目做了什么、遇到什么问题…',
  question: '这道面试题的要点、自己的答法…',
  review: '今天的总结、明天要注意什么…',
  item: '学到了什么、有什么感想…',
};
// heading text for the generated .md: keep links to websites (LeetCode, QuantVault), drop links into this repo
const mdLabel = p => p.split(/\s*资料：/)[0].replace(/\[([^\]]+)\]\(([^)]*)\)/g, (m, t, u) => (/^https?:/.test(u) ? m : t))
  .replace(/[☐☑]/g, '').replace(/\s+/g, ' ').trim();

function kindOf(time, part, first) {
  if (/\]\(https?:/.test(part) && /[☐☑]/.test(part)) return 'problem';
  if (part.includes('Study%20topics/') || (first && part.includes('资料：'))) return 'topic';
  return { '15:00': 'project', '17:30': 'review' }[time.slice(0, 5)] || 'item';
}

function days(md, inline, esc) {
  return [...md.matchAll(/<a id="day-(\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)].map(([, day, block]) => {
    const anchor = 'day-' + day, heading = (block.match(/^### (.+)$/m) || [, ''])[1], seen = new Set(), groups = [];
    const key = k => { let x = k, n = 2; while (seen.has(x)) x = k + 'x' + n++; seen.add(x); return x; };
    for (const line of block.split('\n')) {
      const r = line.match(ROW);
      if (!r) continue;
      const [, time, what, cell] = r, items = [];
      cell.split('<br>').forEach((part, i) => {
        if (progress.NOTE.test(part)) items.push({ k: key(anchor + '.course'), kind: 'course', md: '网课' });
        else if (/[☐☑]/.test(part) || (i === 0 && part.includes('资料：'))) {
          const kind = kindOf(time, part, i === 0);
          items.push({ k: key(progress.keyOf(anchor, part)), kind, html: inline(part.replace(/\s*[☐☑]/g, '')), md: (kind === 'topic' && i === 0 ? 'Study topic：' : '') + mdLabel(part) });
        }
      });
      const questions = time.startsWith('16:30')
        ? [...block.matchAll(/^- (Q\d{3}) — (.+?)(?:（来源|$)/gm)].map(([, q, t]) => ({ k: key(`${anchor}.${q.toLowerCase()}`), kind: 'question', html: esc(`${q} — ${t}`), md: `${q} — ${t}` }))
        : [];
      if (items.length || questions.length) groups.push({ title: `${time} · ${what}`, items, questions });
    }
    return { day, anchor, heading, groups };
  });
}

const style = `<style>
.notebar{position:sticky;top:0;z-index:5;display:flex;flex-wrap:wrap;gap:8px;align-items:center;background:#fff;border:1px solid #dce4ea;border-radius:8px;padding:8px 12px;margin:0 0 12px;font-size:14px}
.notebar button,.notebar select{padding:4px 12px;border:1px solid var(--accent);border-radius:6px;background:#fff;color:var(--accent);font:inherit;cursor:pointer}
.notebar #nb-gen{background:var(--accent);color:#fff}
.notebar button:disabled{opacity:.5;cursor:default}
.ni{margin:16px 0}
.nl{margin-bottom:6px}
.nl code{overflow-wrap:anywhere}
.ni textarea{display:block;width:100%;min-height:3.4em;padding:8px 10px;border:1px solid #b4c9d4;border-radius:6px;background:#fbfcfd;color:inherit;font:15px/1.6 system-ui,sans-serif;resize:vertical}
.ni.has textarea{border-color:var(--accent);background:#fff}
.nd{margin-left:8px;color:var(--accent);font-size:13px;white-space:nowrap}
input.course{padding:4px 8px;width:min(100%,320px)}
.noteday section h3{margin-top:0}
.nv-body{margin-top:8px}
.nv-body h3{margin-top:1.4em}
.nv-body h4{margin-top:1.1em}
.nv-body p,.nv-body li{overflow-wrap:anywhere}
.nv-body blockquote{margin:8px 0;padding:2px 12px;border-left:3px solid #b4c9d4;color:#4a6272}
#nv-msg a,#nb-msg a{white-space:nowrap}
</style>`;

// Runs in the browser (serialized with toString). It builds links through the DOM, never as markup in strings,
// so neither layout.cjs nor validate.cjs mistakes them for links of this file.
function client() {
  const P = 'study-notes:', $ = id => document.getElementById(id);
  const days = [...document.querySelectorAll('.noteday')], boxes = [...document.querySelectorAll('.ni textarea')], courses = [...document.querySelectorAll('input.course')];
  const timer = {};
  let online = false, files = [];
  const keyOf = t => t.closest('.ni').dataset.k;
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(P + k); if (v) localStorage.setItem(P + k, v); else localStorage.removeItem(P + k); } catch (e) { /* storage blocked */ } return null; };
  const msg = (text, links) => {
    const m = $('nb-msg'); m.textContent = text;
    for (const [label, href] of links || []) { const a = document.createElement('a'); a.textContent = label; a.href = href; if (/^https?:/.test(a.href)) { a.target = '_blank'; a.rel = 'noopener'; } m.append(' · ', a); }
  };
  const post = (url, body) => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Study': '1' }, body: JSON.stringify(body) })
    .then(r => r.json().catch(() => ({})).then(j => { if (!r.ok) throw new Error(j.error || 'HTTP ' + r.status); return j; }));
  const today = () => { const t = new Date(); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  const cur = () => days.find(d => '#' + d.id === location.hash) || days.find(d => d.dataset.date >= today()) || days[days.length - 1];
  const grow = t => { t.style.height = 'auto'; t.style.height = t.scrollHeight + 2 + 'px'; };
  const mark = t => t.closest('.ni').classList.toggle('has', !!t.value.trim());
  const fileName = d => d.dataset.date + ' Day ' + d.dataset.day + '.md';
  const view = d => 'AI_ENGINEER_STUDY_NOTES.html#' + d.id;      // the rendered note (今日学习笔记)

  function status(d) {
    if (!online) return msg('没有连接本地服务器：笔记先存在这个浏览器里，生成时会下载 .md 文件');
    if (files.includes(fileName(d))) return msg('已生成过 Study notes/' + fileName(d) + '，再点生成会用最新内容覆盖', [['查看今日学习笔记', view(d)]]);
    msg('输入会自动保存');
  }
  function show() {
    const d = cur();
    days.forEach(x => { x.hidden = x !== d; });
    $('nb-day').value = d.dataset.day;
    $('nb-prev').disabled = d === days[0];
    $('nb-next').disabled = d === days[days.length - 1];
    document.title = '学习记录 · Day ' + d.dataset.day + ' · ' + d.dataset.heading;
    d.querySelectorAll('details').forEach(x => { if ([...x.querySelectorAll('textarea')].some(t => t.value.trim())) x.open = true; });
    d.querySelectorAll('textarea').forEach(grow);
    status(d);
    scrollTo(0, 0);
  }
  const go = d => { if (d) location.hash = d.id; };
  addEventListener('hashchange', show);
  $('nb-day').addEventListener('change', e => go($('day-' + e.target.value)));
  $('nb-prev').addEventListener('click', () => go(days[days.indexOf(cur()) - 1]));
  $('nb-next').addEventListener('click', () => go(days[days.indexOf(cur()) + 1]));
  document.addEventListener('toggle', e => { if (e.target.tagName === 'DETAILS' && e.target.open) e.target.querySelectorAll('textarea').forEach(grow); }, true);

  // While the server is reachable the browser copy only holds text the server has not confirmed yet.
  boxes.forEach(t => t.addEventListener('input', () => {
    const k = keyOf(t), v = t.value;
    grow(t); mark(t); ls(k, v);
    if (!online) return;
    clearTimeout(timer[k]); msg('保存中…');
    timer[k] = setTimeout(() => post('/api/notes', { key: k, text: v })
      .then(() => { if (t.value === v) ls(k, ''); msg('已自动保存'); })
      .catch(e => msg('保存到服务器失败（' + e.message + '），已先存在这个浏览器里')), 500);
  }));
  // the course name is the same one as on the timetable (study-progress.json)
  courses.forEach(i => i.addEventListener('input', () => {
    const k = i.dataset.ck;
    ls('course.' + k, i.value);
    if (!online) return;
    clearTimeout(timer[k]);
    timer[k] = setTimeout(() => post('/api/progress', { key: k, note: i.value }).then(() => ls('course.' + k, '')).catch(() => msg('课程名保存失败')), 400);
  }));

  function fill(notes) {
    const pending = {};
    boxes.forEach(t => { const k = keyOf(t), local = ls(k); let v = notes[k] || ''; if (local != null && local !== v) { v = local; pending[k] = local; } t.value = v; mark(t); });
    return pending;
  }
  function applyProgress(st) {
    document.querySelectorAll('.ni').forEach(n => { const s = n.querySelector('.nd'); if (s) s.hidden = !(st.ticks || {})[n.dataset.k]; });
    courses.forEach(i => { i.value = ls('course.' + i.dataset.ck) || (st.notes || {})[i.dataset.ck] || ''; });
  }

  function markdown(d) {
    const out = ['# 今日学习笔记 · Day ' + d.dataset.day + ' · ' + d.dataset.date + ' ' + d.dataset.weekday, '', '[当天时间表]' + '(../Reports/AI_ENGINEER_TRANSITION_PLAN.md#day-' + d.dataset.day + ')', ''];
    let n = 0;
    d.querySelectorAll('section').forEach(s => {
      const part = [];
      s.querySelectorAll('.ni').forEach(ni => {
        const text = ni.querySelector('textarea').value.trim();
        if (!text) return;
        n++;
        let h = ni.dataset.md;
        const c = ni.querySelector('input.course'), done = ni.querySelector('.nd');
        if (c && c.value.trim()) h += '：' + c.value.trim();
        if (done && !done.hidden) h += '（已完成）';
        part.push('### ' + h, '', text, '');
      });
      if (part.length) out.push('## ' + s.dataset.title, '', ...part);
    });
    return n ? out.join('\n') : '';
  }
  $('nb-gen').addEventListener('click', () => {
    const d = cur(), md = markdown(d), name = fileName(d), btn = $('nb-gen');
    if (!md) return msg('这一天还没有写任何笔记');
    if (!online) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([md], { type: 'text/markdown' })); a.download = name; a.click();
      return msg('没有连接本地服务器，已下载 ' + name + '，请放进 Study notes 文件夹');
    }
    btn.disabled = true;
    post('/api/notes/generate', { name, markdown: md })
      .then(j => { if (!files.includes(name)) files.push(name); msg('已生成 ' + j.file, [['查看今日学习笔记', view(d)], ['在 VS Code 打开', 'vscode://file/' + encodeURI(j.path.replace(/\\/g, '/'))]]); })
      .catch(e => msg('生成失败：' + e.message))
      .finally(() => { btn.disabled = false; });
  });

  // Links to other pages open in a new tab, like on the timetable.
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    let u; try { u = new URL(a.href, location.href); } catch (_) { return; }
    if (!['http:', 'https:', 'file:'].includes(u.protocol) || (u.origin === location.origin && u.pathname === location.pathname)) return;
    a.target = '_blank'; a.rel = 'noopener';
  });

  show();
  const offline = () => { fill({}); applyProgress({}); show(); };
  if (location.protocol === 'file:') return offline();
  Promise.all([
    fetch('/api/notes').then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }),
    fetch('/api/progress').then(r => (r.ok ? r.json() : {})).catch(() => ({})),
  ]).then(([n, p]) => {
    online = true; files = n.files || [];
    const pending = fill(n.notes || {});
    applyProgress(p);
    if (Object.keys(pending).length) post('/api/notes', { bulk: pending }).then(() => Object.keys(pending).forEach(k => ls(k, ''))).catch(() => {});
    show();
  }).catch(offline);
}

function page(md, { shell, inline, esc }) {
  const ds = days(md, inline, esc);
  const item = it => `<div class="ni" data-k="${it.k}" data-kind="${it.kind}" data-md="${esc(it.md)}"><div class="nl">${it.kind === 'course'
    ? `网课 · <input class="course" type="text" placeholder="课程名称" aria-label="课程名称" data-ck="${it.k.replace(/x\d+$/, '')}">`
    : it.html}<span class="nd" hidden>✓ 已完成</span></div><textarea rows="2" placeholder="${PLACEHOLDER[it.kind]}" aria-label="笔记"></textarea></div>`;
  const group = g => `<section data-title="${esc(g.title)}"><h3>${esc(g.title)}</h3>${g.items.map(item).join('')}${g.questions.length
    ? `<details><summary>逐题笔记（${g.questions.length} 题）</summary>${g.questions.map(item).join('')}</details>` : ''}</section>`;
  const body = style
    + '<h1>学习记录</h1>'
    + `<div class="notebar"><button type="button" id="nb-prev">← 前一天</button><select id="nb-day" aria-label="选择日期">${ds.map(d => `<option value="${d.day}">Day ${d.day} · ${esc(d.heading)}</option>`).join('')}</select><button type="button" id="nb-next">后一天 →</button><button type="button" id="nb-gen">生成今日学习笔记</button><span id="nb-msg" class="muted"></span></div>`
    + '<p class="muted">每一项下面的框写这一题或这一节学到的东西，输入会自动保存。写完点“生成今日学习笔记”，有内容的框会写进 Study notes 文件夹里当天的 Markdown 文件，在“📖 今日学习笔记”里看；改了再点一次会更新同一个文件，不会多出一个。</p>'
    + ds.map(d => `<div class="noteday" id="${d.anchor}" data-day="${d.day}" data-date="${iso(+d.day)}" data-heading="${esc(d.heading)}" data-weekday="${esc(d.heading.split(' ')[0])}" hidden><h2>Day ${d.day} · ${esc(d.heading)}</h2><p><a href="AI_ENGINEER_TRANSITION_PLAN.html#${d.anchor}">打开当天时间表</a> · <a href="${VIEW}#${d.anchor}">📖 今日学习笔记</a></p>${d.groups.map(group).join('')}</div>`).join('')
    + `<script>(${client.toString()})();</script>`;
  fs.writeFileSync(LOG, shell('学习记录', body, true));
  viewPage(ds, { shell, esc });
  return ds;
}

// 今日学习笔记: shows "Study notes/<date> Day NN.md" of the chosen day, rendered. Runs in the browser (serialized with
// toString) and builds every element through the DOM, so the text of a note can never inject markup.
function viewClient() {
  const $ = id => document.getElementById(id);
  const days = [...document.querySelectorAll('.noteday')], opts = [...$('nv-day').options];
  let online = false, files = [], updated = {}, dir = '', loading = 0;
  const today = () => { const t = new Date(); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  const cur = () => days.find(d => '#' + d.id === location.hash) || days.find(d => d.dataset.date >= today()) || days[days.length - 1];
  const fileName = d => d.dataset.date + ' Day ' + d.dataset.day + '.md';
  const el = (tag, text) => { const e = document.createElement(tag); if (text != null) e.textContent = text; return e; };
  const link = (text, href) => { const a = el('a', text); a.href = href; return a; };

  // A small Markdown renderer for the notes: headings (one level down, the page has the H1), paragraphs with their
  // line breaks, lists, quotes, code blocks, `code`, **bold**, Markdown links and bare URLs.
  function fixUrl(u, base) {
    let x; try { x = new URL(u, base); } catch (e) { return ''; }
    if (!['http:', 'https:'].includes(x.protocol)) return '';
    if (x.origin === location.origin) x.pathname = x.pathname.replace(/(AI_ENGINEER_\w+)\.md$/, '$1.html');
    return x.href;
  }
  function inline(parent, text, base) {
    const re = /`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s<>()（）]+)/g;
    let last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) parent.append(text.slice(last, m.index));
      if (m[1] != null) parent.append(el('code', m[1]));
      else if (m[2] != null) { const h = fixUrl(m[3], base), a = el(h ? 'a' : 'span'); if (h) a.href = h; inline(a, m[2], base); parent.append(a); }
      else if (m[4] != null) { const b = el('strong'); inline(b, m[4], base); parent.append(b); }
      else parent.append(link(m[5], m[5]));
      last = re.lastIndex;
    }
    if (last < text.length) parent.append(text.slice(last));
  }
  const LIST = /^\s*([-*+]|\d+[.)])\s+(.*)$/, BLOCK = /^(#{1,6}\s|\s*```|\s*>|\s*([-*+]|\d+[.)])\s)/;
  function render(src, base, into) {
    const lines = src.replace(/\r\n?/g, '\n').split('\n');
    for (let i = 0; i < lines.length;) {
      const l = lines[i];
      let m;
      if (!l.trim()) { i++; continue; }
      if ((m = l.match(/^(#{1,6})\s+(.*)$/))) { const h = el('h' + Math.min(6, m[1].length + 1)); inline(h, m[2], base); into.append(h); i++; continue; }
      if (/^\s*```/.test(l)) {
        const code = []; i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) code.push(lines[i++]);
        i++;
        const pre = el('pre'); pre.append(el('code', code.join('\n'))); into.append(pre); continue;
      }
      if (/^\s*>/.test(l)) {
        const q = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) q.push(lines[i++].replace(/^\s*>\s?/, ''));
        const bq = el('blockquote'); render(q.join('\n'), base, bq); into.append(bq); continue;
      }
      if ((m = l.match(LIST))) {
        const ordered = /\d/.test(m[1]), list = el(ordered ? 'ol' : 'ul');
        while (i < lines.length && (m = lines[i].match(LIST)) && /\d/.test(m[1]) === ordered) {
          const li = el('li'); inline(li, m[2], base); i++;
          while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !LIST.test(lines[i])) { li.append(el('br')); inline(li, lines[i++].trim(), base); }
          list.append(li);
        }
        into.append(list); continue;
      }
      const p = el('p');
      for (let first = true; i < lines.length && lines[i].trim() && (first || !BLOCK.test(lines[i])); first = false) { if (!first) p.append(el('br')); inline(p, lines[i++], base); }
      into.append(p);
    }
  }

  function show() {
    const d = cur(), box = d.querySelector('.nv-body'), name = fileName(d), n = ++loading;
    days.forEach(x => { x.hidden = x !== d; });
    $('nv-day').value = d.dataset.day;
    $('nv-prev').disabled = d === days[0];
    $('nv-next').disabled = d === days[days.length - 1];
    document.title = '今日学习笔记 · Day ' + d.dataset.day + ' · ' + d.dataset.heading;
    scrollTo(0, 0);
    const msg = $('nv-msg'), say = (...parts) => { msg.textContent = ''; msg.append(...parts); };
    const edit = () => link('✎ 学习记录', 'AI_ENGINEER_STUDY_LOG.html#' + d.id);
    box.textContent = '';
    if (!online) return say('需要本地服务器才能显示（用 open-study-plan.bat 或 start-server.bat 打开）');
    if (!files.includes(name)) return say('这一天还没有生成学习笔记。在 ', edit(), ' 里写好后点“生成今日学习笔记”。');
    const t = updated[name] ? new Date(updated[name]) : null;
    say('Study notes/' + name + (t ? '，最后生成于 ' + t.toLocaleString('zh-CN', { hour12: false }) : '') + ' · 要修改请到 ', edit(), ' 改完再生成');
    if (dir) msg.append(' · ', link('在 VS Code 打开', 'vscode://file/' + encodeURI((dir + '/' + name).replace(/\\/g, '/'))));
    const url = '/Study%20notes/' + encodeURIComponent(name);
    fetch(url, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); }).then(md => {
      if (n !== loading) return;
      // the page already shows the title and the link to the timetable
      md = md.replace(/^# .*\n+/, '').replace(/^\[当天时间表\]\([^)]*\)\n+/, '');
      render(md, new URL(url, location.href).href, box);
    }).catch(e => { if (n === loading) say('读取 ' + name + ' 失败：' + e.message); });
  }
  const go = d => { if (d) location.hash = d.id; };
  addEventListener('hashchange', show);
  $('nv-day').addEventListener('change', e => go($('day-' + e.target.value)));
  $('nv-prev').addEventListener('click', () => go(days[days.indexOf(cur()) - 1]));
  $('nv-next').addEventListener('click', () => go(days[days.indexOf(cur()) + 1]));

  // Links to other pages open in a new tab, like on the timetable.
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    let u; try { u = new URL(a.href, location.href); } catch (_) { return; }
    if (!['http:', 'https:', 'file:'].includes(u.protocol) || (u.origin === location.origin && u.pathname === location.pathname)) return;
    a.target = '_blank'; a.rel = 'noopener';
  });

  if (location.protocol === 'file:') return show();
  fetch('/api/notes', { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(j => {
    online = true; files = j.files || []; updated = j.updated || {}; dir = j.dir || '';
    opts.forEach(o => { const d = $('day-' + o.value); if (d && files.includes(fileName(d))) o.textContent += ' ✓'; });
  }).catch(() => {}).then(show);
}

function viewPage(ds, { shell, esc }) {
  const body = style
    + '<h1>今日学习笔记</h1>'
    + `<div class="notebar"><button type="button" id="nv-prev">← 前一天</button><select id="nv-day" aria-label="选择日期">${ds.map(d => `<option value="${d.day}">Day ${d.day} · ${esc(d.heading)}</option>`).join('')}</select><button type="button" id="nv-next">后一天 →</button><span id="nv-msg" class="muted"></span></div>`
    + '<p class="muted">这里显示学习记录生成的笔记（Study notes 文件夹里当天的 .md）。日期后面有 ✓ 的是已经生成过的。</p>'
    + ds.map(d => `<div class="noteday" id="${d.anchor}" data-day="${d.day}" data-date="${iso(+d.day)}" data-heading="${esc(d.heading)}" hidden><h2>Day ${d.day} · ${esc(d.heading)}</h2><p><a href="AI_ENGINEER_TRANSITION_PLAN.html#${d.anchor}">打开当天时间表</a> · <a href="${LOG}#${d.anchor}">✎ 学习记录</a></p><div class="nv-body"></div></div>`).join('')
    + `<script>(${viewClient.toString()})();</script>`;
  fs.writeFileSync(VIEW, shell('今日学习笔记', body, true));
}

module.exports = { LOG, VIEW, link, days, page };
