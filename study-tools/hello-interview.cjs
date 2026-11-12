// Hello Interview: the 2-hour System Design + AI Coding block of the timetable (13:45–15:45) and the Hello Interview tab
// of 刷题记录. The plan is in hello-interview.json:
//   - Day 01–03: the block used to be General & AI System Design; a day where that was ticked keeps it, the others skip
//   - Day 04–05: warm-up reading
//   - Day 06–35: the 30-day plan (hi = its own Day 01–30), so its weeks line up with ours (Monday to Friday)
//   - Day 36–45: new problems, then redoing the weakest ones
// Each day has one ☐ (the line starting with "Hello Interview"); the record tab shows which days are ticked.
// build.cjs writes the row with the block's old time (14:15–15:00) like the other rows, then moves it to 13:45–15:45.
const fs = require('fs'), path = require('path');
const progress = require('./progress.cjs');

const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, 'hello-interview.json'), 'utf8'));
const byDay = new Map(DATA.items.map(it => [it.day, it]));
const SECTION = new Map(DATA.sections.map(s => [s.id, s]));
const FIRST = Math.min(...byDay.keys());
const TIME = '13:45';   // where the block ends up in the timetable
const pad = n => String(n).padStart(2, '0');
const GROUP = { 'System Design': 'System Design', 'AI Coding': 'AI Coding', '基础': '基础与复盘', '复盘': '基础与复盘' };
const GROUPS = ['System Design', 'AI Coding', '基础与复盘'];

if (DATA.items.length !== byDay.size) throw Error('hello-interview: two items on the same day');
for (const it of DATA.items) {
  if (!SECTION.has(it.section) || !GROUP[it.kind] || !it.links.length) throw Error('hello-interview: bad item on day ' + it.day);
  if (/\|/.test(it.task + it.title + it.links.flat().join(''))) throw Error('hello-interview: "|" would break the table, day ' + it.day);
}

// the text of the day's ☐ line: what the record tab shows
const tag = it => (it.hi ? 'Hello Interview Day ' + pad(it.hi) : it.section === 'warm' ? 'Hello Interview 热身' : 'Hello Interview 加练');
const tickText = it => `${tag(it)} · ${it.kind}：${it.title}`;
const sectionDays = id => { const ds = DATA.items.filter(it => it.section === id).map(it => it.day); return `Day ${pad(Math.min(...ds))}–${pad(Math.max(...ds))}`; };

// the day's row, as Markdown; old = { part, done }: the General & AI System Design item this day used to have
function row(day, old) {
  const head = '| 14:15–15:00 | Hello Interview，2 小时 | ', it = byDay.get(day);
  const start = `Hello Interview 从 [Day ${pad(FIRST)}](#day-${pad(FIRST)}) 开始`;
  if (!it) {
    if (day > FIRST) throw Error('hello-interview: nothing planned on day ' + day);
    return head + (old && old.done ? `${old.part}<br>这一格原来是 General & AI System Design，这天已经做完；${start} |` : `跳过：这一格原来是 General & AI System Design，${start} |`);
  }
  return head + `${tickText(it)} ☐<br>${it.task}<br>${it.links.map(([t, u]) => `[${t}](${u})`).join(' · ')} |`;
}
// 学习提示 lines (ending with a newline), or ''
function tip(day) {
  const it = byDay.get(day);
  if (!it) return '';
  const sec = SECTION.get(it.section), first = DATA.items.find(x => x.section === it.section).day === day;
  return (first ? `- Hello Interview 本周目标（${sec.name}）：${sec.goal}\n` : '') + `- Hello Interview：${DATA.method[it.kind]}。${DATA.record}\n`;
}
// the "今天学习 Topic" entry, or ''
function topic(day) {
  const it = byDay.get(day);
  return it ? `${it.kind} · [${it.title}](${it.links[0][1]})` : '';
}

// the record tab's items, with their tick keys read from the timetable Markdown (☐/☑)
function items(md) {
  const found = new Map();
  for (const [, day, block] of md.matchAll(/<a id="(day-\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)) {
    const line = block.split('\n').find(l => l.startsWith('| ' + TIME));
    const part = line && ((line.slice(1, -1).split('|')[2] || '').trim().split('<br>')[0]);
    if (part && part.startsWith('Hello Interview') && /[☐☑]/.test(part)) found.set(+day.slice(4), { keys: [progress.keyOf(day, part)], done: part.includes('☑') });
  }
  return DATA.items.map(it => {
    const f = found.get(it.day);
    if (!f) throw Error('hello-interview: no ☐ for day ' + it.day + ' in the timetable');
    return { ...it, ...f, group: GROUP[it.kind], section: `${SECTION.get(it.section).name} · ${sectionDays(it.section)}` };
  });
}

module.exports = { DATA, FIRST, TIME, GROUPS, row, tip, topic, items };
