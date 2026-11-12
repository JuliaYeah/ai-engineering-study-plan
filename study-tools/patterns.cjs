// LeetCode Pattern: the 10:30–11:15 block of the timetable and the Pattern tab of 刷题记录.
// The 41 patterns come from design-gurus/grokking-coding-interview (CC BY 4.0); patterns.json holds their text, a short
// Chinese summary, the repo's problems as LeetCode problems, and which pattern each problem of the morning plan uses.
//   - Day 01–03: skipped (the block used to be ML + QuantVault at 13:30)
//   - Day 04–20: the 15 common patterns (17 patterns, DP is three), one a day
//   - Day 21–33: the rest of core, Day 34–38: advanced, one a day; Day 39–41: the niche ones, two a day
//   - Day 42–45: mixed recognition, problems listed without their pattern
// A pattern counts as learned when the ☐ on its line in the timetable is ticked; the Pattern tab ticks the same key.
const fs = require('fs'), path = require('path');
const progress = require('./progress.cjs');

const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, 'patterns.json'), 'utf8'));
const TOP = JSON.parse(fs.readFileSync(path.join(__dirname, 'top150-schedule.json'), 'utf8'));
const byN = new Map(DATA.patterns.map(p => [p.n, p]));
const pad = n => String(n).padStart(2, '0');
const page = p => `${DATA.repo}/blob/main/patterns/${p.file}.md`;
const lcUrl = slug => `https://leetcode.com/problems/${slug}/`;

// learning order: one entry per day from Day 04
const ORDER = [[9], [1], [3], [29], [16], [4], [7], [8], [18], [10], [11], [12], [24], [20], [22], [21], [23],
  [2], [5], [30], [6], [13], [14], [15], [17], [19], [25], [26], [27], [28],
  [31], [32], [33], [37], [38],
  [34, 35], [40, 41], [39, 36]];
const FIRST = 4, MIXED = [42, 43, 44, 45], PER_MIXED = 4;
const SCHEDULE = Object.fromEntries(ORDER.map((ns, i) => [FIRST + i, ns]));
const STAGE_TEXT = {
  1: '第一阶段 · 常见 15 种（DP 算 3 个，共 17 个）· 一天一个',
  2: '第二阶段 · 其余 Core · 一天一个',
  3: '第三阶段 · Advanced · 一天一个',
  4: '第四阶段 · 偏门 · 两个一天',
};

// the morning plan: LeetCode problems per day (own + Top 150 + review), and its problems by number
const morning = new Map(), titles = new Map();
for (const p of [...Object.values(TOP.P), ...Object.values(TOP.OTHER)]) titles.set(p.n, p);
for (const s of TOP.schedule) for (const [list, review] of [[s.own, false], [s.top, false], [s.review, true]])
  for (const n of list || []) { if (!morning.has(n)) morning.set(n, []); morning.get(n).push({ day: s.day, review }); }

// checks: every pattern scheduled once, every morning problem mapped to a pattern (or explicitly to none)
{
  const seen = ORDER.flat().sort((a, b) => a - b);
  if (seen.join() !== DATA.patterns.map(p => p.n).sort((a, b) => a - b).join()) throw Error('patterns: ORDER must list each of the 41 patterns once');
  const lost = [...morning.keys()].filter(n => !(String(n) in DATA.plan));
  if (lost.length) throw Error('patterns: morning problems without a pattern in patterns.json "plan": ' + lost.join(', '));
  const extra = Object.keys(DATA.plan).filter(n => !morning.has(+n));
  if (extra.length) throw Error('patterns: "plan" lists problems that are not in the morning plan: ' + extra.join(', '));
  for (const [n, pn] of Object.entries(DATA.plan)) if (pn !== null && !byN.has(pn)) throw Error('patterns: problem ' + n + ' -> unknown pattern ' + pn);
}

// practice problems: free, not in the morning plan, never used twice; easiest first
const RANK = { Easy: 0, Medium: 1, Hard: 2 }, used = new Set();
const candidates = p => p.lc.filter(x => !x[4] && !morning.has(x[0]) && !used.has(x[0]));
function take(list, k) {
  const out = list.slice(0, k);
  out.forEach(x => used.add(x[0]));
  return out;
}
const practice = {};
for (const [day, ns] of Object.entries(SCHEDULE)) for (const n of ns) {
  const p = byN.get(n), list = candidates(p).sort((a, b) => RANK[a[3]] - RANK[b[3]]);
  practice[n] = take(list, ns.length > 1 ? 1 : 2);
  if (!practice[n].length) throw Error('patterns: no free practice problem left for #' + n);
}
// mixed recognition: one Medium (or Easy) per pattern of stages 1–2, in learning order, spread over the four days
const mixed = Object.fromEntries(MIXED.map(d => [d, []]));
{
  const picks = [];
  for (const n of ORDER.flat().filter(n => byN.get(n).stage <= 2)) {
    if (picks.length === MIXED.length * PER_MIXED) break;
    const list = candidates(byN.get(n)), x = list.find(x => x[3] === 'Medium') || list.find(x => x[3] === 'Easy');
    if (x) picks.push(...take([x], 1));
  }
  if (picks.length < MIXED.length * PER_MIXED) throw Error('patterns: not enough problems for mixed recognition');
  picks.forEach((x, i) => mixed[MIXED[i % MIXED.length]].push(x));
}

const lcLink = x => `[${x[0]}. ${x[2]}](${lcUrl(x[1])}) · ${x[3]} ☐`;
const patternLine = (p, mins) => `[#${p.n} ${p.name}](${page(p)}) · 读 Recognize it when、How it works、模板 · ${mins} mins ☐`;

// the block's row of a day, as Markdown. It is written with the block's old time (13:30–14:15) like the other rows;
// build.cjs then moves it to 10:30–11:15
function row(day) {
  const head = '| 13:30–14:15 | LeetCode Pattern，45 分钟 | ';
  if (day < FIRST) return head + `跳过：这一格原来是 ML，LeetCode Pattern 从 [Day ${pad(FIRST)}](#day-${pad(FIRST)}) 开始 |`;
  if (mixed[day]) return head + `混合识别 · 40 mins（题目不标 pattern）：${mixed[day].map(lcLink).join('<br>')}<br>先说出 pattern 和让你这么判断的 cue，再写代码；拿不准就对照 [Recognize the Pattern](${DATA.repo}/${DATA.links[0].path}) 的 Decision Tree。剩下的时间重学刷题记录 Pattern tab 里还没勾的 pattern |`;
  const ns = SCHEDULE[day];
  if (!ns) throw Error('patterns: nothing scheduled on day ' + day);
  const ps = ns.map(n => byN.get(n)), two = ps.length > 1;
  const probs = ps.flatMap(p => practice[p.n]);
  return head + ps.map(p => patternLine(p, two ? 10 : 15)).join('<br>')
    + `<br>识别练习 · ${two ? 25 : 30} mins：${probs.map(lcLink).join('<br>')}`
    + `<br>先说出 cue 和 pattern 再写代码${two ? '；偏门的说得清思路就够，不一定写完' : '；最后不看页面写一遍模板，记进学习记录'} |`;
}
// 学习提示 line(s), ending with a newline, or '' (Day 01–03)
function tip(day) {
  if (day < FIRST) return '';
  if (mixed[day]) return '- Pattern 混合识别：先盖住答案读题，说出 pattern 和 cue，再对照 Recognize the Pattern 检查判断对不对\n';
  return SCHEDULE[day].map(n => `- Pattern 重点：${byN.get(n).name} - ${byN.get(n).zh}\n`).join('');
}
// the "今天学习 Topic" entry (Markdown), or '' (Day 01–03)
function topic(day) {
  if (day < FIRST) return '';
  if (mixed[day]) return `混合识别（${mixed[day].length} 题）`;
  return SCHEDULE[day].map(n => `[#${n} ${byN.get(n).name}](${page(byN.get(n))})`).join('、');
}
const lessonDay = Object.fromEntries(Object.entries(SCHEDULE).flatMap(([d, ns]) => ns.map(n => [n, +d])));

// Pattern tab of 刷题记录: md is the timetable Markdown (with ☐/☑), used for the tick keys and the built state
function tab(md, { esc }) {
  // ticks: each pattern's ☐ in the 10:30 row. planned: every LeetCode problem in the timetable (08:30 morning rows and
  // 10:30 practice), by slug: its days and tick keys, and whether it is ticked - a problem chip is green only when it is
  const ticks = new Map(), planned = new Map();
  for (const [, day, block] of md.matchAll(/<a id="(day-\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)) {
    for (const line of block.split('\n').filter(l => /^\| (08:30|10:30)/.test(l))) {
      const slot = line.slice(2, 7);
      for (const part of (line.slice(1, -1).split('|')[2] || '').trim().split('<br>')) {
        if (!/[☐☑]/.test(part)) continue;
        const m = slot === '10:30' && part.match(/\/patterns\/([\w-]+)\.md\)/), q = part.match(/https:\/\/leetcode\.com\/problems\/([^/)]+)\//);
        if (m) ticks.set(m[1], { key: progress.keyOf(day, part), label: progress.strip(part), done: part.includes('☑') });
        else if (q) {
          if (!planned.has(q[1])) planned.set(q[1], []);
          planned.get(q[1]).push({ day: +day.slice(4), slot, key: progress.keyOf(day, part), done: part.includes('☑') });
        }
      }
    }
  }
  const order = ORDER.flat().map(n => byN.get(n));
  for (const p of order) if (!ticks.has(p.file)) throw Error('patterns: no tick for ' + p.name + ' in the timetable');
  const done = order.filter(p => ticks.get(p.file).done).length;
  const dayLink = (d, text, tip) => `<a href="AI_ENGINEER_TRANSITION_PLAN.html#day-${pad(d)}" target="_blank" rel="noopener"${tip ? ` title="${esc(tip)}"` : ''}>${text}</a>`;
  // days of the morning plan with problems of this pattern
  const drill = p => {
    const days = new Map();
    for (const [n, list] of morning) if (DATA.plan[n] === p.n) for (const { day, review } of list) {
      if (!days.has(day)) days.set(day, []);
      const t = titles.get(n);
      days.get(day).push(`${n}. ${t ? t.title : ''}${review ? '（复习）' : ''}`);
    }
    return [...days].sort((a, b) => a[0] - b[0]).map(([d, ps]) => dayLink(d, 'D' + pad(d), `Day ${pad(d)} 早上：${ps.join('、')}`)).join(' ');
  };
  // a problem: green with ✓ once any of its ticks in the timetable is checked; otherwise the first day it is planned (D05)
  const chip = x => {
    const pl = planned.get(x[1]) || [], done = pl.some(e => e.done), first = pl.length ? Math.min(...pl.map(e => e.day)) : 0;
    const when = [...new Set(pl.map(e => `Day ${pad(e.day)} ${e.slot === '08:30' ? '早上' : '10:30 练习'}`))];
    const tip = `${x[0]}. ${x[2]} · ${x[3]}${x[4] ? ' · 会员题' : ''}${x[5] ? ' · 补充题（repo 里没有对应的 LeetCode 题）' : ''}${when.length ? ' · 计划在 ' + when.join('、') : ' · 没有排进计划'}`;
    return `<a class="pt-q${done ? ' pt-ok' : ''}" href="${lcUrl(x[1])}" target="_blank" rel="noopener" title="${esc(tip)}"`
      + `${pl.length ? ` data-keys="${esc(pl.map(e => e.key).join(' '))}"` : ''}${done ? ' data-built="1"' : ''}>`
      + `<span class="pt-qt">${x[0]} ${esc(x[2])}${x[4] ? ' 🔒' : ''}</span>${first ? `<span class="pt-qd">D${pad(first)}</span>` : ''}</a>`;
  };
  const rowHtml = p => {
    const t = ticks.get(p.file), lessons = lessonDay[p.n], d = drill(p);
    return `<tr class="pt-row${t.done ? ' done' : ''}" data-key="${esc(t.key)}" data-label="${esc(t.label)}" data-stage="${p.stage}"${t.done ? ' data-built="1"' : ''}>`
      + `<td class="pt-name"><label class="pt-l"><input type="checkbox" class="pt-ck" aria-label="学完 ${esc(p.name)}"${t.done ? ' checked' : ''}><span class="pt-num">${p.n}</span></label>`
      + `<a href="${page(p)}" target="_blank" rel="noopener" lang="en" title="${esc(p.idea)}">${esc(p.name)}</a></td>`
      + `<td class="pt-lc">${p.lc.map(chip).join('')}<a class="pt-all" href="${DATA.repo}/blob/main/problems/README.md#${p.anchor}" target="_blank" rel="noopener">全部 ${p.count} 题 ↗</a></td>`
      + `<td>${esc(p.zh)}</td><td lang="en">${esc(p.when)}</td><td class="pt-cost">${esc(p.cost)}</td>`
      + `<td class="pt-days">学 ${dayLink(lessons, 'D' + pad(lessons), `Day ${pad(lessons)} 10:30 学这个 pattern`)}${d ? `<br>刷 ${d}` : ''}</td></tr>`;
  };
  const stages = [1, 2, 3, 4];
  const range = s => { const ds = order.filter(p => p.stage === s).map(p => lessonDay[p.n]); return `Day ${pad(Math.min(...ds))}–${pad(Math.max(...ds))}`; };
  const cols = [['pattern', 'Pattern', 170], ['lc', 'LeetCode 题', 260], ['zh', '中文说明', 240], ['when', 'Recognize it when', 190], ['cost', 'Typical cost', 80], ['days', '学 / 刷', 100]];
  const body = stages.map(s => `<tr class="pt-stage"><td colspan="${cols.length}"><span>${STAGE_TEXT[s]} · ${range(s)} · <span data-stage-done="${s}">${order.filter(p => p.stage === s && ticks.get(p.file).done).length}</span> / ${order.filter(p => p.stage === s).length}</span></td></tr>`
    + order.filter(p => p.stage === s).map(rowHtml).join('')).join('');
  const stageLine = stages.map(s => `${DATA.stages[s]} <span data-stage-done="${s}">${order.filter(p => p.stage === s && ticks.get(p.file).done).length}</span> / ${order.filter(p => p.stage === s).length}`).join(' · ');
  const links = DATA.links.map((l, i) => `<a class="pt-link" href="${DATA.repo}/${l.path}" target="_blank" rel="noopener"><span class="pt-lt">${i + 1}. ${esc(l.title)}<span class="pt-tag"> - ${esc(l.tag)}</span></span><span class="pt-ld">${esc(l.zh)}</span></a>`).join('');
  const pct = (100 * done / order.length).toFixed(1) + '%';
  const panel = `<div class="rec-panel" data-tab="pattern" hidden>`
    + `<div class="rec-sum"><span class="rec-big">已学 <span class="pt-done">${done}</span> / ${order.length}<span class="muted"> 个 pattern</span></span>`
    + `<span class="rec-bar"><span class="pt-bar" style="width:${pct}"></span></span><span class="rec-line">${stageLine}</span><p class="rec-msg muted pt-msg"></p></div>`
    + `<div class="pt-links">${links}</div>`
    + `<p class="pt-hint muted">每天 10:30 学一个（偏门的两个），勾选和时间表当天那一格是同一个勾。拖表头右边的竖线可以改列宽（双击还原）；表格比页面宽时左右滑，Pattern 那一列不动。题目变绿带 ✓ 是在时间表里勾过（早上或 10:30 练习都算），后面的 D05 是计划哪天做，🔒 是会员题。<button type="button" class="pt-reset">列宽全部还原</button></p>`
    + `<div class="pt-wrap"><table class="pt-table"><colgroup>${cols.map(([k, , w]) => `<col data-col="${k}" data-w="${w}" style="width:${w}px">`).join('')}</colgroup>`
    + `<thead><tr>${cols.map(([k, label]) => `<th scope="col" data-col="${k}">${label}<span class="pt-grip" role="separator" aria-orientation="vertical" title="拖动改列宽，双击还原"></span></th>`).join('')}</tr></thead>`
    + `<tbody>${body}</tbody></table></div>`
    + `<p class="pt-credit muted">Pattern 的英文说明、Recognize it when、Typical cost 和题目分类来自 <a href="${DATA.repo}" target="_blank" rel="noopener">design-gurus/grokking-coding-interview</a>（CC BY 4.0）；题目换成了对应的 LeetCode 题，中文说明是自己写的。</p></div>`;
  return { panel, done, total: order.length };
}

const style = `<style>
.pt-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;margin:0 0 10px}
a.pt-link{display:block;background:#fff;border:1px solid #dce4ea;border-radius:10px;padding:7px 11px;text-decoration:none;color:var(--ink);line-height:1.4}
a.pt-link:hover{border-color:var(--accent)}
.pt-lt{display:block;font-size:14px;font-weight:600;color:var(--accent)}
.pt-tag{font-weight:400;color:#33454f}
.pt-ld{display:block;font-size:12.5px;color:#526b7c;margin-top:2px}
.pt-hint{margin:0 0 6px;font-size:12.5px;line-height:1.5}
.pt-reset{margin-left:6px;padding:1px 8px;border:1px solid #c9d6de;border-radius:6px;background:#fff;font:inherit;font-size:12px;color:#33454f;cursor:pointer}
.pt-wrap{overflow-x:auto;border:1px solid #dce4ea;border-radius:10px;background:#fff}
table.pt-table{table-layout:fixed;border-collapse:separate;border-spacing:0;width:1040px;font-size:13px;line-height:1.4}
.pt-table th,.pt-table td{padding:4px 7px;border-bottom:1px solid #e6ecf0;vertical-align:top;overflow-wrap:anywhere;background:#fff}
.pt-table th{position:relative;font-size:12.5px;font-weight:600;color:#33454f;background:#f3f7f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pt-table th:first-child,.pt-table td.pt-name{position:sticky;left:0;z-index:2;box-shadow:1px 0 0 #dce4ea,4px 0 6px -4px rgba(24,52,73,.25)}
.pt-table th:first-child{z-index:3}
.pt-grip{position:absolute;top:0;right:0;width:9px;height:100%;cursor:col-resize;touch-action:none}
.pt-grip::after{content:"";position:absolute;top:22%;bottom:22%;right:3px;border-right:2px solid #c9d6de}
.pt-grip:hover::after,.pt-grip.on::after{border-color:var(--accent)}
tr.pt-stage td{background:#eef6f7;color:var(--accent);font-size:12.5px;font-weight:600;padding:5px 7px}
tr.pt-stage td>span{position:sticky;left:7px}
.pt-l{display:inline-flex;align-items:center;gap:4px;margin-right:5px;cursor:pointer}
.pt-ck{width:1.05em;height:1.05em;margin:0;accent-color:#2da44e;cursor:pointer}
.pt-num{min-width:1.4em;font-size:11.5px;color:#5b6b78;text-align:right}
.pt-name a{font-weight:600;text-decoration:none}
.pt-name a:hover,.pt-lc a:hover,.pt-days a:hover{text-decoration:underline}
tr.pt-row.done td{background:#f0fbf3}
tr.pt-row.done .pt-name a{color:#116329}
.pt-lc{font-size:11.5px}
a.pt-q{display:inline-flex;align-items:baseline;max-width:100%;margin:0 3px 3px 0;padding:0 4px;border:1px solid #dce4ea;border-radius:5px;text-decoration:none;line-height:1.45;vertical-align:top}
.pt-qt{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pt-qd{flex:none;margin-left:4px;padding:0 3px;border-radius:3px;background:#eef2f5;color:#526b7c;font-size:10.5px}
a.pt-q.pt-ok{background:#dafbe1;border-color:#b6e3c1;color:#116329}
a.pt-q.pt-ok .pt-qt::before{content:"✓ ";font-weight:700}
a.pt-q.pt-ok .pt-qd{display:none}
a.pt-all{display:inline-block;font-size:11.5px;text-decoration:none;color:#526b7c}
.pt-cost{white-space:normal}
.pt-days{font-size:12px;color:#33454f}
.pt-days a{text-decoration:none}
.pt-credit{margin:8px 0 0;font-size:12px}
@media(max-width:600px){.pt-links{grid-template-columns:1fr 1fr;gap:6px}.pt-ld{display:none}a.pt-link{padding:6px 9px}.pt-lt{font-size:13px}}
</style>`;

// browser side of the Pattern tab: ticks (server, or this browser), column widths
function client() {
  var rows = [].slice.call(document.querySelectorAll('.pt-row')), table = document.querySelector('.pt-table');
  if (!table) return;
  var chips = [].slice.call(document.querySelectorAll('.pt-q[data-keys]'));   // planned problems: green once ticked
  var P = 'study-plan:', COLS = 'study-pattern-cols', online = false, last = {};   // last: the ticks the server sent
  var web = location.protocol !== 'file:' && ['127.0.0.1', 'localhost'].indexOf(location.hostname) < 0;
  function ls(k, v) { try { if (arguments.length > 1) { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); return null; } return localStorage.getItem(k); } catch (e) { return null; } }
  function $$(sel) { return [].slice.call(document.querySelectorAll(sel)); }
  function msg(t) { $$('.pt-msg').forEach(function (el) { el.textContent = t; }); }
  // has(key): is this tick checked; built: also count what was checked when the page was generated (no server)
  function paint(has, built) {
    function on(el, keys) { return keys.some(has) || (built && el.dataset.built === '1'); }
    rows.forEach(function (r) { var d = on(r, [r.dataset.key]); r.classList.toggle('done', d); r.querySelector('.pt-ck').checked = d; });
    chips.forEach(function (c) { c.classList.toggle('pt-ok', on(c, c.dataset.keys.split(' '))); });
    var done = rows.filter(function (r) { return r.classList.contains('done'); });
    $$('.pt-done').forEach(function (el) { el.textContent = done.length; });
    $$('.pt-bar').forEach(function (el) { el.style.width = (100 * done.length / rows.length).toFixed(1) + '%'; });
    $$('[data-stage-done]').forEach(function (el) { el.textContent = done.filter(function (r) { return r.dataset.stage === el.dataset.stageDone; }).length; });
    $$('.rec-tab-n[data-tab="pattern"]').forEach(function (el) { el.textContent = done.length + ' / ' + rows.length; });
  }
  function offline() {
    online = false;
    paint(function (k) { return ls(P + k) === '1'; }, true);
    msg(web ? '网页版：显示的是上次推送到 GitHub 时的进度；在这里打勾只存在这台设备的浏览器里' : '没有连接本地服务器：打勾只存在这个浏览器里，不会写进时间表');
  }
  function load() {
    if (location.protocol === 'file:') return offline();
    fetch('/api/progress', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(function (st) {
      online = true;
      last = st.ticks || {};
      paint(function (k) { return !!last[k]; }, false);
      msg('已连接本地服务器：打勾会同时勾上时间表当天 10:30 那一格');
    }).catch(offline);
  }
  rows.forEach(function (r) {
    var box = r.querySelector('.pt-ck');
    box.addEventListener('change', function () {
      var on = box.checked;
      var key = r.dataset.key;
      ls(P + key, on ? '1' : '');
      if (!online) { paint(function (k) { return ls(P + k) === '1'; }, true); return; }
      fetch('/api/progress', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Study': '1' }, body: JSON.stringify({ key: key, done: on, label: r.dataset.label }) })
        .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
        .then(function (j) { last = (j.state && j.state.ticks) || {}; paint(function (k) { return !!last[k]; }, false); })
        .catch(function () { paint(function (k) { return k === key ? on : !!last[k]; }, false); msg('保存到服务器失败，已先存在这个浏览器里'); });
    });
  });
  // column widths: drag the grip at the right edge of a header, double-click to reset; saved in this browser
  var cols = [].slice.call(table.querySelectorAll('col')), DEF = cols.map(function (c) { return +c.dataset.w; });
  var widths = DEF.slice();
  try { var saved = JSON.parse(ls(COLS) || 'null'); if (saved && saved.length === DEF.length) widths = saved.map(function (w, i) { return Math.max(48, +w || DEF[i]); }); } catch (e) {}
  function apply() {
    cols.forEach(function (c, i) { c.style.width = widths[i] + 'px'; });
    table.style.width = widths.reduce(function (a, b) { return a + b; }, 0) + 'px';
  }
  function save() { ls(COLS, widths.join() === DEF.join() ? '' : JSON.stringify(widths)); }
  apply();
  [].slice.call(table.querySelectorAll('.pt-grip')).forEach(function (g, i) {
    g.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      var x0 = e.clientX, w0 = widths[i];
      g.classList.add('on');
      g.setPointerCapture(e.pointerId);
      function move(ev) { widths[i] = Math.max(48, Math.round(w0 + ev.clientX - x0)); apply(); }
      function up() { g.classList.remove('on'); g.removeEventListener('pointermove', move); g.removeEventListener('pointerup', up); g.removeEventListener('pointercancel', up); save(); }
      g.addEventListener('pointermove', move);
      g.addEventListener('pointerup', up);
      g.addEventListener('pointercancel', up);
    });
    g.addEventListener('dblclick', function () { widths[i] = DEF[i]; apply(); save(); });
  });
  var reset = document.querySelector('.pt-reset');
  if (reset) reset.addEventListener('click', function () { widths = DEF.slice(); apply(); save(); });
  load();
  document.addEventListener('visibilitychange', function () { if (!document.hidden) load(); });
}

module.exports = { DATA, ORDER, SCHEDULE, FIRST, MIXED, row, tip, topic, tab, style, client, lessonDay };
