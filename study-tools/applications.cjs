// Jobs applied for, per day, read live from the career-ops repo (private) by the local server.
// Nothing here is written into this repo (it is public): the timetable only has an empty container per day,
// and the page fills it from /api/applications while the server is running.
//
// Sources, inside the career-ops repo:
//   reports/tracker/pass-tracker.md   the "## Applied" tables: Role, Company, Full Eval, Link ...
//   reports/tracker/applied.json      { "<job url>": "YYYY-MM-DD" }  the Apply Date of each applied job
//   reports/tracker/jd/<id>.html      the tracker's "Local JD" page; <id> = first 16 hex of sha256(job url), same rule as career-ops' tracker-jd-pages.mjs
//   data/applications.md              the full-evaluation Score of each report number
const fs = require('fs'), path = require('path'), crypto = require('crypto');

// CAREER_OPS_DIR wins; otherwise a folder named career-ops next to this repo
function careerOpsDir(root) {
  const candidates = [process.env.CAREER_OPS_DIR, path.resolve(root, '..', 'career-ops')].filter(Boolean);
  return candidates.find(d => fs.existsSync(path.join(d, 'reports', 'tracker', 'pass-tracker.md'))) || null;
}

const cells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(s => s.trim().replace(/\\\|/g, '|'));
const mdLink = c => { const m = c.match(/\[([^\]]*)\]\(([^)]*)\)/); return m ? { text: m[1], href: m[2] } : { text: c, href: '' }; };

// full-evaluation scores from data/applications.md, by row number; the tracker's Full Eval label "#36" is that number.
// (The tracker's own Score column is the triage score, except for directly evaluated rows marked "(eval)".)
function evalScores(dir) {
  const out = {};
  let text = '';
  try { text = fs.readFileSync(path.join(dir, 'data', 'applications.md'), 'utf8'); } catch (e) { return out; }
  for (const l of text.split(/\r?\n/)) {
    if (!l.startsWith('|')) continue;
    const c = cells(l);
    if (/^\d+$/.test(c[0]) && /^\d+(\.\d+)?\/5$/.test(c[4] || '')) out[Number(c[0])] = c[4];
  }
  return out;
}

function load(dir) {
  const trackerDir = path.join(dir, 'reports', 'tracker'), reportsDir = path.join(dir, 'reports');
  const md = fs.readFileSync(path.join(trackerDir, 'pass-tracker.md'), 'utf8').split(/\r?\n/);
  let dates = {};
  try { dates = JSON.parse(fs.readFileSync(path.join(trackerDir, 'applied.json'), 'utf8')); } catch (e) { /* no apply dates yet */ }
  const scores = evalScores(dir);

  const start = md.findIndex(l => /^## Applied\b/.test(l));
  const byDate = {};
  let total = 0, undated = 0;
  if (start >= 0) {
    let end = md.findIndex((l, i) => i > start && /^## /.test(l));
    if (end < 0) end = md.length;
    let head = null;
    for (const l of md.slice(start + 1, end)) {
      if (!l.startsWith('|')) continue;
      const c = cells(l);
      if (c[0] === '#') { head = c; continue; }
      if (!head || !/^\d+$/.test(c[0])) continue;
      const col = name => c[head.indexOf(name)] || '';
      const job = mdLink(col('Link')), ev = mdLink(col('Full Eval'));
      total++;
      // the apply date: from applied.json by job url (or an "Apply Date" column if the tracker ever gets one)
      const date = dates[job.href] || col('Apply Date') || '';
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { undated++; continue; }
      // the evaluation report: a path relative to reports/tracker/, served by the local server under /career-ops/reports/
      let evalUrl = '';
      if (/^https?:\/\//.test(ev.href)) evalUrl = ev.href;
      else if (ev.href) {
        const f = path.resolve(trackerDir, ev.href);
        if ((f + path.sep).startsWith(reportsDir + path.sep) && f.endsWith('.html') && fs.existsSync(f)) {
          evalUrl = '/career-ops/reports/' + path.relative(reportsDir, f).split(path.sep).map(encodeURIComponent).join('/');
        }
      }
      // the local copy of the job description, if career-ops saved one
      let jdUrl = '';
      if (job.href) {
        const name = crypto.createHash('sha256').update(job.href).digest('hex').slice(0, 16) + '.html';
        if (fs.existsSync(path.join(trackerDir, 'jd', name))) jdUrl = '/career-ops/reports/tracker/jd/' + name;
      }
      const num = (ev.text.match(/^#?(\d+)$/) || [])[1];
      const trackerScore = col('Score');
      const evalScore = (num && scores[Number(num)]) || (/\(eval\)/.test(trackerScore) ? trackerScore.replace(/\s*\(eval\)/, '') : '');
      (byDate[date] = byDate[date] || []).push({
        role: col('Role'), company: col('Company'), evalLabel: ev.text || 'Eval', evalUrl, evalScore, jdUrl,
        jobUrl: /^https?:\/\//.test(job.href) ? job.href : '',
      });
    }
  }
  return { byDate, total, undated };
}

module.exports = { careerOpsDir, load };
