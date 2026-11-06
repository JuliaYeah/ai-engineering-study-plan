// QuantVault data for one study day: the problems, the 45-minute split and the notes.
// Shared by build.cjs (the 13:30 row of the timetable) and quantvault.cjs (the QuantVault schedule pages).
const fs = require('fs');
const schedule = require('./quantvault-schedule.cjs');

const problems = fs.readFileSync(`${__dirname}/quantvault-selected.txt`, 'utf8').trim().split(/\r?\n/).map(line => {
  const [id, category, difficulty, title] = line.split('|');
  return { id: +id, category, difficulty, title, url: `https://quantvault.org/problems.html?id=${id}` };
});
const lookup = new Map(problems.map(p => [p.id, p]));
// minutes for: lecture + prerequisite reading, notebook, QuantVault
const timing = { foundation: [20, 15, 10], learn: [15, 20, 10], review: [10, 15, 20] };

// The prerequisite text names Study topics pages ("Data Leakage", "Cross-Validation") and other days ("Day 07").
// linkPrereq turns the first mention of each topic page name into a link, and every "Day NN" into a link to that day.
//   terms   : [[name, id], ...] from manifest.records (name -> Study topics/<id>.html)
//   mode    : 'md' | 'html'   (html escapes the text itself)
//   dayBase : prefix for day links, e.g. '#' (same page) or 'AI_ENGINEER_TRANSITION_PLAN.html#'
// Names without a page stay plain text; nothing is invented.
const FOUNDATIONS = 'Machine Learning Foundations';
const escHtml = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escRe = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function linkPrereq(raw, terms, mode, dayBase) {
  const all = [...terms];
  if (!all.some(t => t[0] === FOUNDATIONS)) all.push([FOUNDATIONS, 'ml-foundations-start-here']);
  const idOf = new Map();
  for (const [name, id] of all) if (!idOf.has(name)) idOf.set(name, id);
  const names = [...idOf.keys()].sort((x, y) => y.length - x.length);
  const re = new RegExp('(?<![A-Za-z0-9-])(' + names.map(escRe).join('|') + ')(?![A-Za-z0-9-])|(Day (\\d{2}))', 'g');
  const piece = mode === 'md' ? x => x : escHtml;
  const link = (text, href) => (mode === 'md' ? `[${text}](${href})` : `<a href="${href}">${escHtml(text)}</a>`);
  const seen = new Set();
  let out = '', last = 0;
  for (const m of raw.matchAll(re)) {
    out += piece(raw.slice(last, m.index));
    last = m.index + m[0].length;
    if (m[2]) out += link(m[2], `${dayBase}day-${m[3]}`);
    else if (seen.has(m[1])) out += piece(m[0]);
    else { seen.add(m[1]); out += link(m[1], `Study%20topics/${idOf.get(m[1])}.html`); }
  }
  return out + piece(raw.slice(last));
}

// n is the 1-based study day
function day(n) {
  const row = schedule[n - 1];
  if (!row) throw Error('QuantVault: no schedule for day ' + n);
  const [ids, depth, scope, prerequisites, mode] = row;
  const [lesson, notebook, practice] = timing[mode];
  return { day: n, ids, depth, scope, prerequisites, mode, minutes: { lesson, notebook, practice }, problems: ids.map(id => lookup.get(id)) };
}

module.exports = { schedule, problems, lookup, timing, day, linkPrereq, FOUNDATIONS };
