// Keeps the generated files where we want them without teaching every generator about it.
//
// The generators (build, quantvault, bilingual-lessons, validate*) all assume the AI_ENGINEER_* files sit in the
// repo root next to "Study topics/". We keep AI_ENGINEER_DAILY_LEARNING_GUIDE.* in the root and the other
// reports in Reports/. Requiring this module:
//   1. immediately moves the reports back to the root (links rewritten back to root-relative form)
//   2. on process exit moves them to Reports/ again and rewrites links (../ for repo content, Reports/ from
//      the guide and from "Study topics/")
// Both directions are exact inverses, so running any generator twice, or one after another, is safe.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const MOVED = [
  'AI_ENGINEER_BILINGUAL_LESSONS.md',
  'AI_ENGINEER_PROJECT_ROADMAP.md', 'AI_ENGINEER_PROJECT_ROADMAP.html',
  'AI_ENGINEER_QUANTVAULT_PLAN.md', 'AI_ENGINEER_QUANTVAULT_PLAN.html',
  'AI_ENGINEER_TRANSITION_PLAN.md', 'AI_ENGINEER_TRANSITION_PLAN.html',
  'AI_ENGINEER_STUDY_LOG.html', 'AI_ENGINEER_STUDY_NOTES.html', 'AI_ENGINEER_TOP150_RECORD.html',
  'AI_ENGINEER_TOP150_SCHEDULE.md', 'AI_ENGINEER_TOP150_SCHEDULE.html',
  'AI_ENGINEER_LEETCODE_DAILY_LIST.md', 'AI_ENGINEER_LEETCODE_DAILY_LIST.html',
];
const GUIDE = ['AI_ENGINEER_DAILY_LEARNING_GUIDE.md', 'AI_ENGINEER_DAILY_LEARNING_GUIDE.html'];
const LINK = /(\]\(|href="|src="|href='|src=')([^)"'#\s][^)"'\s]*)/g;
const external = t => /^(https?:|mailto:|data:|javascript:)/.test(t);
const rd = f => fs.readFileSync(path.join(root, f), 'utf8');
const wr = (f, s) => { fs.mkdirSync(path.dirname(path.join(root, f)), { recursive: true }); fs.writeFileSync(path.join(root, f), s); };
const rm = f => { try { fs.unlinkSync(path.join(root, f)); } catch (e) { /* already gone */ } };
const exists = f => fs.existsSync(path.join(root, f));
const bare = t => t.split(/[#?]/)[0];

// links inside a moved report file
const toReportLinks = s => s.replace(LINK, (m, pre, t) => {
  if (external(t) || t.startsWith('../')) return m;
  return MOVED.includes(bare(t)) ? m : pre + '../' + t;      // siblings stay, everything else lives one level up
});
const toRootLinks = s => s.replace(LINK, (m, pre, t) => (external(t) || !t.startsWith('../') ? m : pre + t.slice(3)));
// links from files that stay where they are (guide, Study topics) to the moved reports
const redirect = (s, from, to) => s.replace(LINK, (m, pre, t) => (!external(t) && t.startsWith(from) && MOVED.includes(bare(t.slice(from.length))) ? pre + to + t.slice(from.length) : m));

function topics() { return fs.readdirSync(path.join(root, 'Study topics')).filter(f => f.endsWith('.html')).map(f => 'Study topics/' + f); }

function toRoot() {
  for (const f of MOVED) if (exists('Reports/' + f)) { wr(f, toRootLinks(rd('Reports/' + f))); rm('Reports/' + f); }
  for (const f of GUIDE) if (exists(f)) { const s = rd(f), o = redirect(s, 'Reports/', ''); if (o !== s) wr(f, o); }
  for (const f of topics()) { const s = rd(f), o = redirect(s, '../Reports/', '../'); if (o !== s) wr(f, o); }
}

function toReports() {
  for (const f of MOVED) if (exists(f)) { wr('Reports/' + f, toReportLinks(rd(f))); rm(f); }
  for (const f of GUIDE) if (exists(f)) { const s = rd(f), o = redirect(s, '', 'Reports/'); if (o !== s) wr(f, o); }
  for (const f of topics()) { const s = rd(f), o = redirect(s, '../', '../Reports/'); if (o !== s) wr(f, o); }
}

toRoot();
process.on('exit', toReports);
module.exports = { toRoot, toReports, MOVED };
