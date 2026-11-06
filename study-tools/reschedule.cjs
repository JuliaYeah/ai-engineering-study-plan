// Applies the current schedule on top of the read-only snapshots original-plan.md / original-roadmap.md:
//   - Day 1 moves to data.start (a Monday); every weekday is a study day
//   - the 09:00-10:30 coding slot becomes 08:30-10:30 (2 hours) and mixes the plan's own problems with
//     LeetCode Top Interview 150 (data in top150-schedule.json, Hard problems last)
// Used by build.cjs, validate.cjs and verify-interview-answers.cjs, so all of them see the same plan.
const fs = require('fs'), path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'top150-schedule.json'), 'utf8'));
const S = data.schedule, P = data.P, ALL = { ...data.P, ...data.OTHER };
const WD = '一二三四五';
const HEAD = /^### (周[一二三四五]) (\d{1,2}\/\d{1,2})$/gm;

function newDates() {
  const [y, m, d] = data.start.split('-').map(Number);
  let cur = new Date(Date.UTC(y, m - 1, d));
  const out = [];
  while (out.length < 45) {
    const wd = cur.getUTCDay();
    if (wd >= 1 && wd <= 5) out.push(new Date(cur));
    cur = new Date(cur.getTime() + 864e5);
  }
  return out;
}
const DATES = newDates();
const fmt = d => `${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
const nd = day => fmt(DATES[day - 1]);
const cn = iso => { const [y, m, d] = iso.split('-').map(Number); return `${y} 年 ${m} 月 ${d} 日`; };
const wdOf = day => WD[DATES[day - 1].getUTCDay() - 1];

// old (snapshot) date -> new date, built from the snapshot's own headings
const OLD = [...fs.readFileSync(path.join(__dirname, 'original-plan.md'), 'utf8').matchAll(HEAD)];
if (OLD.length !== 45) throw Error('original-plan.md must have 45 day headings');
const DATE_MAP = {};
OLD.forEach((m, i) => {
  if (m[1][1] !== wdOf(i + 1)) throw Error('start date must be a Monday: ' + m[0]);
  DATE_MAP[m[2]] = nd(i + 1);
});
const mapDates = t => t.replace(/(周[一二三四五]) (\d{1,2}\/\d{1,2})(?![\d/])/g, (m, w, d) => (DATE_MAP[d] ? `${w} ${DATE_MAP[d]}` : m));

const escHtml = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const url = n => `https://leetcode.com/problems/${ALL[n].slug}/`;
const text = (n, annot = true, sec = false) => {
  const p = ALL[n];
  return `[${n}. ${p.title}](${url(n)})` + (annot ? ` · ${sec ? p.section + ' · ' : ''}${p.diff}` : '');
};

// One problem per line, each ends with a checkbox (☐); build.cjs renders it as a saved tick box in the HTML.
function codingCell(e, body) {
  const parts = body.split('<br>');
  const out = [parts[0]];            // build.cjs appends "资料：…" to this first line
  if (e.kind === 'python') {
    for (const n of e.own) out.push(text(n) + ' ☐');
    for (const n of e.top) out.push(text(n, true, true) + ' ☐');
    for (const n of e.review) out.push(text(n, false) + ' · 复习 ☐');
    if (!e.top.length && e.spare_min >= 30) out.push(`Top 150 薄弱题重做（约 ${e.spare_min} 分钟）：回到前面卡住或做错的题，限时重做，不新增题目 ☐`);
  } else {
    const sql = parts.find(x => x.startsWith('LeetCode:')).slice('LeetCode:'.length).trim().split('; ');
    sql.forEach((x, i) => out.push(x + (i < 2 ? ' · SQL ☐' : ' · SQL（有时间再做） ☐')));
    if (e.top.length) for (const n of e.top) out.push(text(n, true, true) + ' ☐');
    else out.push('Top 150 薄弱题重做（约 60 分钟）：回到前面卡住或做错的题，限时重做，不新增题目 ☐');
  }
  return out.join('<br>');
}

function must(s, old, neu) {
  if (!s.includes(old)) throw Error('reschedule: text not found in snapshot: ' + old.slice(0, 40));
  return s.split(old).join(neu);
}

function plan(src) {
  let s = src, k = 0;
  s = s.replace(/^\| 09:00–10:30 \|[^\r\n]*\|(?=\r?$)/gm, line => {
    const e = S[k++];
    const i1 = line.indexOf(' | ', 2), i2 = line.indexOf(' | ', i1 + 3);
    const body = line.slice(i2 + 3, -2);
    return `| 08:30–10:30 | ${e.kind === 'python' ? 'Python' : 'SQL'} + Top 150 刷题，2 小时 | ${codingCell(e, body)} |`;
  });
  if (k !== 45) throw Error('reschedule: expected 45 coding rows, got ' + k);
  let courses = 0;
  s = s.replace(/^\| 10:30–12:30 \|[^\r\n]*\|(?=\r?$)/gm, () => { courses++; return '| 10:30–12:30 | 网课，2 小时 | Online Course [____] |'; });
  if (courses !== 45) throw Error('reschedule: expected 45 course rows, got ' + courses);
  const before = s.length;
  s = s.replace(/^\| 12:30–13:30 \|[^\r\n]*\r?\n/gm, '');
  if (s.length === before) throw Error('reschedule: no lunch rows found');
  const d40 = nd(40), d41 = nd(41), d45 = nd(45);
  s = must(s, '工作日八小时学习计划', '工作日八个半小时学习计划');
  s = must(s, '2026 年 10 月 5 日至 11 月 27 日为八周主计划；11 月 30 日至 12 月 4 日为工作日缓冲期。',
    `${DATES[0].getUTCFullYear()} 年 ${DATES[0].getUTCMonth() + 1} 月 ${DATES[0].getUTCDate()} 日至 ${DATES[39].getUTCFullYear()} 年 ${DATES[39].getUTCMonth() + 1} 月 ${DATES[39].getUTCDate()} 日为八周主计划；` +
    `${DATES[40].getUTCFullYear()} 年 ${DATES[40].getUTCMonth() + 1} 月 ${DATES[40].getUTCDate()} 日至 ${DATES[44].getUTCMonth() + 1} 月 ${DATES[44].getUTCDate()} 日为工作日缓冲期。` +
    '感恩节 11/26–11/27、圣诞节 12/25 和元旦 1/1 都按工作日安排，需要休息时把当天内容顺延。');
  s = must(s, '周一至周五每天学习 8 小时', '周一至周五每天学习 8.5 小时');
  s = must(s, '主计划 40 天、320 小时；使用完整缓冲期则共 45 天、360 小时', '主计划 40 天、340 小时；使用完整缓冲期则共 45 天、382.5 小时');
  s = must(s, '每天仍为 8 小时', '刷题时段从 1.5 小时延长为 2 小时（08:30 开始），每天为 8.5 小时');
  s = must(s, '刷题默认周一、周三、周五为 Python，周二、周四为 SQL，同一天不安排两种。',
    '刷题默认周一、周三、周五为 Python，周二、周四为 SQL，同一天不安排两种。刷题时段 08:30–10:30 共 2 小时：' +
    'Python 日把计划原题和 LeetCode Top Interview 150 混合刷，SQL 日前 1 小时做 SQL、后 1 小时刷 Top 150。' +
    `Top 150 共 150 题，Hard 排在 Day ${firstHardDay()} 之后。`);
  s = must(s, '重复题用于复习。工程主题没有直接对应题时',
    `重复题用于复习。Top 150 题单来自 LeetCode 官方学习计划（${cn(data.read)}读取，共 150 题，无付费题），` +
    '完整分配见[Top 150 排期](AI_ENGINEER_TOP150_SCHEDULE.md)。工程主题没有直接对应题时');
  return mapDates(s);
}

function roadmap(src) {
  let s = src;
  s = must(s, '沿用原日期，11/26–11/27 仍按工作日安排。', '感恩节 11/26–11/27、圣诞节 12/25 和元旦 1/1 都按工作日安排，需要休息时把当天内容顺延。');
  const ranges = { '10/5–10/30 · Day 01–20': [1, 20], '11/2–11/13 · Day 21–30': [21, 30], '11/16–11/25 · Day 31–38': [31, 38], '11/26–11/27 · Day 39–40': [39, 40], '11/30–12/4 · Day 41–45': [41, 45] };
  for (const [old, [a, b]] of Object.entries(ranges)) s = must(s, old, `${nd(a)}–${nd(b)} · Day ${String(a).padStart(2, '0')}–${String(b).padStart(2, '0')}`);
  s = must(s, '更新日期：2026-10-04', `更新日期：${data.read}（Day 1 改为 ${data.start}）`);
  return mapDates(s);
}

function firstHardDay() {
  for (const e of S) if (e.top.some(n => P[n].diff === 'Hard')) return e.day;
  return 45;
}

// how many problems today, for the guide's "每日入口" (the timetable has the actual problems)
function dayCounts(i) {
  const e = S[i], rev = e.review.length ? `，另复习${e.review.length}题` : '';
  if (e.kind === 'python') {
    const n = e.own.length + e.top.length;
    if (!n) return `2hr：复习${e.review.length}题，其余时间重做薄弱题`;
    return `2hr：${n}题${rev}` + (!e.top.length && e.spare_min >= 30 ? '，其余时间重做薄弱题' : '');
  }
  return `2hr：${e.sql_probs.length + e.top.length}题，含SQL ${e.sql_probs.length}题` + (!e.top.length ? '，Top 150时间重做薄弱题' : '');
}

// Reports/AI_ENGINEER_TOP150_SCHEDULE.md (root-relative links: layout.cjs moves it with the other reports)
function top150Md() {
  const where = {};
  for (const e of S) for (const n of [...e.own, ...e.top]) if (!(n in where)) where[n] = e.day;
  const secs = [...new Set(Object.values(P).map(p => p.section))];
  const hardDay = firstHardDay(), pad = n => String(n).padStart(2, '0');
  const L = ['# LeetCode Top Interview 150 排期', '',
    `题单来自 [LeetCode 官方 Top Interview 150](${data.source})（${cn(data.read)}读取，共 150 题，23 个专题，无付费题）。计划从 ${data.start}（周${wdOf(1)}）开始，Day 1 就是这一天。`, '',
    '## 怎么安排', '',
    '- 每天刷题时段是 08:30–10:30，共 2 小时',
    '- Python 日（周一、周三、周五）把计划原有的 Python 题和 Top 150 混合刷，每天 4 到 7 题',
    '- SQL 日（周二、周四）前 1 小时做 SQL（三题候选先做前两题），后 1 小时刷 Top 150，每天 2 到 3 题',
    '- 每题按 Easy 15 分钟、Medium 20 分钟、Hard 30 分钟估算，工程实现题（KV Store、Rate Limiter、Crawler 等）按 30 分钟',
    '- 同一个专题先在计划里对应的主题日引入，剩下的题在随后几天补完',
    `- Hard 全部排在 Day ${hardDay} 之后（${nd(hardDay)} 起），Day 41（${nd(41)}）全部做完；Day 42 到 Day 45 用来重做薄弱题`,
    '- 每天的具体题目和链接在[每日总时间表](AI_ENGINEER_TRANSITION_PLAN.md)', '', '## 专题进度', ''];
  for (const sec of secs) {
    const ps = Object.values(P).filter(p => p.section === sec);
    const nh = ps.filter(p => p.diff !== 'Hard').map(p => where[p.n]), hd = ps.filter(p => p.diff === 'Hard').map(p => where[p.n]);
    const a = Math.min(...nh), b = Math.max(...nh);
    let line = `- ${sec} - ${ps.length} 题 - ` + (a === b ? `Day ${pad(a)}` : `Day ${pad(a)} 到 Day ${pad(b)}（${nd(a)} 到 ${nd(b)}）`);
    if (hd.length) line += `，Hard ${hd.length} 题在 Day ${hd.sort((x, y) => x - y).map(pad).join(', ')}`;
    L.push(line);
  }
  L.push('', '## 完整题单', '');
  for (const sec of secs) {
    L.push(`### ${sec}`, '');
    for (const p of Object.values(P)) if (p.section === sec) {
      const d = where[p.n];
      L.push(`- [${p.n}. ${p.title}](${url(p.n)}) - ${p.diff} - Day ${pad(d)} · 周${wdOf(d)} ${nd(d)}`);
    }
    L.push('');
  }
  L.push('## 计划原有、不在 Top 150 里的题', '', '这些题保留在对应日期，主要是工程实现、并发、字符串解析和 Top-k 变体：', '');
  for (const p of Object.values(data.OTHER)) { const d = where[p.n]; L.push(`- [${p.n}. ${p.title}](${url(p.n)}) - ${p.diff} - Day ${pad(d)} · ${nd(d)}`); }
  return L.join('\n') + '\n';
}

// Reports/AI_ENGINEER_LEETCODE_DAILY_LIST.md: one checkbox per day with problem numbers and topics.
// planText is the rescheduled plan (plan()), so dates and SQL candidates come from the same source.
function dailyListMd(planText) {
  const heads = [...planText.matchAll(/^### (周[一二三四五]) (\d{1,2}\/\d{1,2})/gm)];
  const rows = planText.split('\n').filter(l => l.startsWith('| 08:30–10:30 |'));
  if (heads.length !== 45 || rows.length !== 45) throw Error('dailyListMd: expected 45 days');
  const pad = n => String(n).padStart(2, '0'), join = a => a.join(', ');
  const L = ['# LeetCode 每日刷题表', '',
    '每天 08:30–10:30 刷题。每行是一天：Day、日期、当天的主题，下面是今天要刷的题号。做完一天就勾掉。', '',
    '- 计划原题 - 计划里原有的 Python 题，在对应主题日刷',
    '- SQL - SQL 日前 1 小时的三道候选题，先做前两题',
    '- Top 150 - LeetCode 官方 Top Interview 150，括号里是专题',
    '- Top 150 Hard - 全部放在最后',
    '- 复习 - 之前做过的题，每题限时 10 分钟重做',
    '- 题目标题和链接在[每日总时间表](AI_ENGINEER_TRANSITION_PLAN.md)当天的第一行，完整题单在[Top 150 排期](AI_ENGINEER_TOP150_SCHEDULE.md)', ''];
  S.forEach((e, i) => {
    if (i % 5 === 0) {
      if (i > 0) L.push('');
      L.push(`## 第 ${i / 5 + 1} 周（${nd(i + 1)} 到 ${nd(Math.min(i + 5, 45))}）`, '');
    }
    const topic = rows[i].split(' | ')[2].split('<br>')[0];
    L.push(`- [ ] Day ${pad(i + 1)} · ${heads[i][1]} ${heads[i][2]} · ${topic}`);
    if (e.kind === 'sql') L.push(`  - SQL: ${join(rows[i].split('<br>').filter(x => x.includes('· SQL')).map(x => x.match(/\[(\d+)\. /)[1]))}`);
    if (e.own.length) L.push(`  - 计划原题: ${join(e.own)}`);
    const nonHard = e.top.filter(n => P[n].diff !== 'Hard'), hard = e.top.filter(n => P[n].diff === 'Hard');
    const secs = ns => [...new Set(ns.map(n => P[n].section))].join(', ');
    if (nonHard.length) L.push(`  - Top 150（${secs(nonHard)}）: ${join(nonHard)}`);
    if (hard.length) L.push(`  - Top 150 Hard（${secs(hard)}）: ${join(hard)}`);
    if (e.review.length) L.push(`  - 复习: ${join(e.review)}`);
    if (!e.top.length && e.spare_min >= 30) L.push('  - Top 150 薄弱题重做：回到前面卡住或做错的题');
  });
  return L.join('\n') + '\n';
}

module.exports = { plan, roadmap, dayCounts, top150Md, dailyListMd, mapDates, nd, DATES, data };
