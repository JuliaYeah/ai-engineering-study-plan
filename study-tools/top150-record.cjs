// 刷题记录: two tabs, LeetCode (the Top Interview 150, one column per LeetCode topic) and QuantVault (the scheduled
// problems, one column per ML lesson of the day they are first scheduled). Solved problems are green with a check.
// A problem counts as solved when any of its ticks in the timetable is checked (its day, a review day or a repeat day).
// build.cjs writes AI_ENGINEER_TOP150_RECORD.html with the state at build time; the page then reads the live ticks from
// /api/progress (local server), or falls back to that state plus the ticks saved in this browser.
const fs = require('fs'), path = require('path');
const progress = require('./progress.cjs');
const qvd = require('./quantvault-day.cjs');

const FILE = 'AI_ENGINEER_TOP150_RECORD.html', TITLE = '刷题记录';
// LeetCode's own topic order for the study plan; a topic not listed here goes at the end
const ORDER = ['Array / String', 'Two Pointers', 'Sliding Window', 'Matrix', 'Hashmap', 'Intervals', 'Stack', 'Linked List',
  'Binary Tree General', 'Binary Tree BFS', 'Binary Search Tree', 'Graph General', 'Graph BFS', 'Trie', 'Backtracking',
  'Divide & Conquer', "Kadane's Algorithm", 'Binary Search', 'Heap', 'Bit Manipulation', 'Math', '1D DP', 'Multidimensional DP'];
const DIFFS = ['Easy', 'Medium', 'Hard'];
const pad = n => String(n).padStart(2, '0');

// [day, block] for each day of the timetable Markdown (root-relative, with ☐/☑)
const dayBlocks = md => [...md.matchAll(/<a id="day-(\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)].map(([, d, b]) => [Number(d), b]);
// the <br> parts of a row's content cell: the same parts the timetable renderer turns into checkboxes, so the keys match
function rowParts(block, time) {
  const row = block.split('\n').find(l => l.startsWith('| ' + time));
  return row ? (row.slice(1, -1).split('|')[2] || '').trim().split('<br>') : [];
}
const tick = (p, day, part) => { p.keys.push(progress.keyOf('day-' + pad(day), part)); if (part.includes('☑')) p.done = true; };

// the 150 LeetCode problems with their days and tick keys (08:30 row)
function problems(md) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'top150-schedule.json'), 'utf8'));
  const list = Object.values(data.P).filter(p => p.top150).map(p => ({ ...p, days: [], reviews: [], keys: [], done: false }));
  const byN = new Map(list.map(p => [p.n, p])), bySlug = new Map(list.map(p => [p.slug, p]));
  for (const s of data.schedule) {
    for (const n of [...(s.own || []), ...(s.top || [])]) if (byN.has(n)) byN.get(n).days.push(s.day);
    for (const n of s.review || []) if (byN.has(n)) byN.get(n).reviews.push(s.day);
  }
  for (const [day, block] of dayBlocks(md)) for (const part of rowParts(block, '08:30')) {
    const m = part.match(/https:\/\/leetcode\.com\/problems\/([^/)]+)\//);
    const p = m && /[☐☑]/.test(part) && bySlug.get(m[1]);
    if (p) tick(p, day, part);
  }
  const lost = list.filter(p => !p.keys.length);
  if (lost.length) throw new Error('Top 150 problems without a tick in the timetable: ' + lost.map(p => p.n).join(', '));
  const first = p => Math.min(...(p.days.length ? p.days : p.reviews));
  return list.sort((a, b) => first(a) - first(b) || a.n - b.n);
}

// the scheduled QuantVault problems with their days and tick keys (13:30 row), in the order they first come up;
// section = the ML lesson of the first day (the row starts with the lesson link)
function quantvault(md) {
  const byId = new Map();
  for (const [day, block] of dayBlocks(md)) {
    const parts = rowParts(block, '13:30');
    const lesson = ((parts[0] || '').match(/^\[([^\]]+)\]/) || [])[1] || 'Other';
    for (const part of parts) {
      const m = part.match(/quantvault\.org\/problems\.html\?id=(\d+)/);
      if (!m || !/[☐☑]/.test(part)) continue;
      const q = qvd.lookup.get(Number(m[1]));
      if (!q) throw new Error('QuantVault problem not in quantvault-selected.txt: ' + m[1]);
      if (!byId.has(q.id)) byId.set(q.id, { ...q, section: lesson, days: [], keys: [], done: false });
      const p = byId.get(q.id);
      p.days.push(day);
      tick(p, day, part);
    }
  }
  const lost = qvd.problems.filter(q => !byId.has(q.id));
  if (lost.length) throw new Error('QuantVault problems without a tick in the timetable: ' + lost.map(q => q.id).join(', '));
  return [...byId.values()];
}

const style = `<style>
.rec-head{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;margin:0 0 6px}
.rec-head h1{margin:0}
.rec-tabs{display:inline-flex;border:1px solid #c9d6de;border-radius:8px;overflow:hidden;background:#fff}
.rec-tabs button{border:0;background:none;padding:6px 14px;font:inherit;font-size:14px;color:#33454f;cursor:pointer}
.rec-tabs button+button{border-left:1px solid #c9d6de}
.rec-tabs button[aria-selected="true"]{background:var(--accent);color:#fff}
.rec-tabs .rec-tab-n{margin-left:6px;font-size:12px;opacity:.85}
.rec-note{margin:0 0 10px;font-size:13px}
.rec-sum{display:flex;flex-wrap:wrap;align-items:center;gap:4px 18px;background:#fff;border:1px solid #dce4ea;border-radius:10px;padding:8px 14px;margin:0 0 12px}
.rec-big{font-size:18px;font-weight:600}
.rec-big .muted{font-size:14px;font-weight:400}
.rec-sum>.rec-bar{flex:1 1 160px}
.rec-line{font-size:13px;color:#4b5b66}
.rec-msg{flex-basis:100%;margin:0;font-size:12px}
.rec-bar{height:6px;background:#e6ecf0;border-radius:3px;overflow:hidden}
.rec-bar span{display:block;height:100%;background:#2da44e}
.rec-grid{column-width:230px;column-gap:10px}
section.rec-col{display:inline-block;width:100%;box-sizing:border-box;break-inside:avoid;margin:0 0 10px;padding:8px 8px 6px}
.rec-col h2{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 3px;font-size:14.5px;line-height:1.3}
.rec-n{flex:none;font-size:12.5px;font-weight:400;color:#4b5b66}
.rec-col .rec-bar{height:4px;margin:5px 3px 4px}
.rec-col ul{list-style:none;margin:0;padding:0}
li.rec-p{display:flex;gap:5px;align-items:baseline;margin:1px 0;padding:1px 5px;border-radius:5px;font-size:13px;line-height:1.35}
.rec-p a{text-decoration:none}
.rec-p a:hover{text-decoration:underline}
.rec-ck{flex:none;width:.9em;color:#1a7f37;font-weight:700}
.rec-title{flex:1;min-width:0}
.rec-meta{flex:none;font-size:11.5px;color:#5b6b78;white-space:nowrap}
li.rec-p.done{background:#dafbe1}
li.rec-p.done .rec-title a{color:#116329}
</style>`;

// browser side: tabs, and recounting from the live ticks (server) or from the build state plus this browser's saved ticks
function client() {
  var items = [].slice.call(document.querySelectorAll('.rec-p')), P = 'study-plan:', TAB = 'study-record-tab';
  var panels = [].slice.call(document.querySelectorAll('.rec-panel')), tabs = [].slice.call(document.querySelectorAll('.rec-tabs button'));
  var built = items.map(function (li) { return li.classList.contains('done'); });
  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function keys(li) { return li.dataset.keys.split(' '); }
  function bar(el, done, total) { el.style.width = (total ? 100 * done / total : 0).toFixed(1) + '%'; }
  function set(root, sel, v) { [].slice.call(root.querySelectorAll(sel)).forEach(function (el) { el.textContent = v; }); }
  function show(isDone, note) {
    items.forEach(function (li, i) {
      var d = isDone(li, i);
      li.classList.toggle('done', d);
      li.querySelector('.rec-ck').textContent = d ? '✓' : '';
    });
    panels.forEach(function (panel) {
      var all = panel.querySelectorAll('.rec-p'), done = [].slice.call(panel.querySelectorAll('.rec-p.done'));
      set(panel, '.rec-done', done.length);
      set(panel, '.rec-left', all.length - done.length);
      bar(panel.querySelector('.rec-sum .rec-bar span'), done.length, all.length);
      [].slice.call(panel.querySelectorAll('.rec-col')).forEach(function (col) {
        var n = col.querySelectorAll('.rec-p').length, d = col.querySelectorAll('.rec-p.done').length;
        col.querySelector('.rec-c').textContent = d;
        bar(col.querySelector('.rec-bar span'), d, n);
      });
      [].slice.call(panel.querySelectorAll('[data-count]')).forEach(function (el) {
        el.textContent = done.filter(function (li) { return li.dataset[el.dataset.count] === el.dataset.v; }).length;
      });
      set(document, '.rec-tab-n[data-tab="' + panel.dataset.tab + '"]', done.length + ' / ' + all.length);
      set(panel, '.rec-msg', note);
    });
  }
  function offline() {
    show(function (li, i) { return built[i] || keys(li).some(function (k) { return ls(P + k) === '1'; }); },
      '没有连接本地服务器：显示的是上次生成页面时的进度，加上这个浏览器里的勾选');
  }
  function load() {
    if (location.protocol === 'file:') return offline();
    fetch('/api/progress', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(function (st) {
      var t = st.ticks || {};
      show(function (li) { return keys(li).some(function (k) { return t[k]; }); }, '已连接本地服务器：显示最新的勾选，切回这个页面时会自动刷新');
    }).catch(offline);
  }
  function pick(name, save) {
    if (!panels.some(function (p) { return p.dataset.tab === name; })) name = panels[0].dataset.tab;
    panels.forEach(function (p) { p.hidden = p.dataset.tab !== name; });
    tabs.forEach(function (b) { b.setAttribute('aria-selected', String(b.dataset.tab === name)); });
    if (save) {
      try { localStorage.setItem(TAB, name); } catch (e) {}
      history.replaceState(null, '', '#' + name);
    }
  }
  tabs.forEach(function (b) { b.addEventListener('click', function () { pick(b.dataset.tab, true); }); });
  window.addEventListener('hashchange', function () { pick(location.hash.slice(1), false); });
  pick(location.hash.slice(1) || ls(TAB) || '', false);
  load();
  document.addEventListener('visibilitychange', function () { if (!document.hidden) load(); });
}

function page(md, { shell, esc }) {
  const pct = (d, n) => (n ? 100 * d / n : 0).toFixed(1) + '%';
  const dayLink = (day, tip) => `<a href="AI_ENGINEER_TRANSITION_PLAN.html#day-${pad(day)}" target="_blank" rel="noopener"${tip ? ` title="${esc(tip)}"` : ''}>Day ${pad(day)}</a>`;
  // one tab: summary (done / left, bar, count lines) and one column per section
  const panel = (tab, list, sections, lines, item) => {
    const done = list.filter(p => p.done).length;
    const line = ([key, label, values]) => `<span class="rec-line">${label ? label + ' ' : ''}${values.map(v => {
      const all = list.filter(p => p[key] === v);
      return `${esc(v)} <span data-count="${key}" data-v="${esc(v)}">${all.filter(p => p.done).length}</span> / ${all.length}`;
    }).join(' · ')}</span>`;
    const col = s => {
      const ps = list.filter(p => p.section === s), d = ps.filter(p => p.done).length;
      return `<section class="rec-col"><h2><span>${esc(s)}</span><span class="rec-n"><span class="rec-c">${d}</span> / ${ps.length}</span></h2>`
        + `<div class="rec-bar"><span style="width:${pct(d, ps.length)}"></span></div><ul>${ps.map(item).join('')}</ul></section>`;
    };
    return `<div class="rec-panel" data-tab="${tab}"${tab === 'leetcode' ? '' : ' hidden'}>`
      + `<div class="rec-sum"><span class="rec-big">已刷 <span class="rec-done">${done}</span> / ${list.length}<span class="muted"> · 还剩 <span class="rec-left">${list.length - done}</span> 题</span></span>`
      + `<span class="rec-bar"><span style="width:${pct(done, list.length)}"></span></span>${lines.map(line).join('')}<p class="rec-msg muted"></p></div>`
      + `<div class="rec-grid">${sections.map(col).join('')}</div></div>`;
  };
  const li = (p, link, day, tip) => `<li class="rec-p${p.done ? ' done' : ''}" data-keys="${esc(p.keys.join(' '))}" data-diff="${esc(p.diff)}"${p.category ? ` data-category="${esc(p.category)}"` : ''}>`
    + `<span class="rec-ck" aria-hidden="true">${p.done ? '✓' : ''}</span><span class="rec-title">${link}</span>`
    + `<span class="rec-meta">${esc(p.diff[0])} · ${dayLink(day, tip)}</span></li>`;

  const lc = problems(md);
  const lcSections = [...new Set(lc.map(p => p.section))].sort((a, b) => {
    const i = x => (ORDER.includes(x) ? ORDER.indexOf(x) : ORDER.length);
    return i(a) - i(b) || a.localeCompare(b);
  });
  const lcItem = p => {
    const day = Math.min(...(p.days.length ? p.days : p.reviews)), rev = p.reviews.filter(r => r !== day);
    return li(p, `<a href="https://leetcode.com/problems/${esc(p.slug)}/" target="_blank" rel="noopener">${p.n}. ${esc(p.title)}</a>`,
      day, rev.length ? '复习：' + rev.map(r => 'Day ' + pad(r)).join('、') : '');
  };

  const qv = quantvault(md).map(p => ({ ...p, diff: p.difficulty }));
  const qvItem = p => li(p, `<a href="${esc(p.url)}" target="_blank" rel="noopener" title="#${p.id} · ${esc(p.category)}">${esc(p.title)}</a>`,
    p.days[0], p.days.length > 1 ? '也排在：' + p.days.slice(1).map(d => 'Day ' + pad(d)).join('、') : '');

  const count = list => `${list.filter(p => p.done).length} / ${list.length}`;
  const body = `${style}<div class="rec-head"><h1>${TITLE}</h1><div class="rec-tabs" role="tablist">`
    + `<button type="button" role="tab" data-tab="leetcode" aria-selected="true">LeetCode<span class="rec-tab-n" data-tab="leetcode">${count(lc)}</span></button>`
    + `<button type="button" role="tab" data-tab="quantvault" aria-selected="false">QuantVault<span class="rec-tab-n" data-tab="quantvault">${count(qv)}</span></button></div></div>`
    + `<p class="rec-note muted">勾选在<a href="AI_ENGINEER_TRANSITION_PLAN.html">每日时间表</a>里做，当天、复习日或重复的那天勾过一次就算做了。LeetCode 按 LeetCode 的专题分列，QuantVault 按第一次排到那天的 ML 讲义分列；每列按日期排序。鼠标停在 Day 上能看到其他日期。</p>`
    + panel('leetcode', lc, lcSections, [['diff', '', DIFFS]], lcItem)
    + panel('quantvault', qv, [...new Set(qv.map(p => p.section))], [['diff', '', DIFFS], ['category', '', ['Machine Learning', 'Regression']]], qvItem)
    + `<script>(${client.toString()})();</script>`;
  fs.writeFileSync(FILE, shell(TITLE, body, true));
  return { file: FILE, leetcode: lc.length, quantvault: qv.length };
}

module.exports = { FILE, TITLE, problems, quantvault, page };
