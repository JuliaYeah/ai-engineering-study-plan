// Study progress: the single source of truth is study-progress.json (tracked in git, so it syncs between devices).
// The timetable's Markdown mirrors it: "☐" becomes "☑" for finished items, "Online Course [____]" shows the course name.
//
//   ticks: { "<day>.<hash>": "<label>" }   - present = done. The key is built from the day anchor and the item text,
//                                            so build.cjs (HTML), the local server and this file always agree.
//   notes: { "<day>.course": "<text>" }
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const FILE = path.join(root, 'study-progress.json');

const hash = x => { let h = 5381; for (const c of x) h = ((h << 5) + h + c.codePointAt(0)) >>> 0; return h.toString(36); };
const NOTE = /\[(?:____|课程：[^\]]*)\]/;
// the text of one item (one "<br>" part of a table cell), without links, code ticks, checkbox and note token
const strip = p => p.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\[(?:____|课程：[^\]]*)\]/g, '').replace(/[`☐☑]/g, '').replace(/\s+/g, ' ').trim();
const keyOf = (day, part) => `${day}.${hash(strip(part))}`;

function load() {
  try {
    const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    return { ticks: j.ticks || {}, notes: j.notes || {} };
  } catch (e) { return { ticks: {}, notes: {} }; }
}

// One entry per line and sorted keys, no timestamps: two devices that tick different items merge cleanly in git.
function save(st) {
  const sorted = o => Object.fromEntries(Object.entries(o).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
  const body = JSON.stringify({ ticks: sorted(st.ticks), notes: sorted(st.notes) }, null, 1) + '\n';
  fs.writeFileSync(FILE + '.tmp', body);
  fs.renameSync(FILE + '.tmp', FILE);
}

// Rewrites only the checkbox glyphs and the course-name token in the timetable's table rows; everything else is untouched.
function applyToMd(md, st) {
  let day = '';
  return md.split('\n').map(line => {
    const a = line.match(/^<a id="(day-\d+)"><\/a>/);
    if (a) { day = a[1]; return line; }
    if (!day || !line.startsWith('|') || !(/[☐☑]/.test(line) || NOTE.test(line))) return line;
    const cells = line.split('|');
    for (let i = 1; i < cells.length - 1; i++) {
      if (!/[☐☑]/.test(cells[i]) && !NOTE.test(cells[i])) continue;
      cells[i] = cells[i].split('<br>').map(part => {
        if (NOTE.test(part)) {
          const v = (st.notes[day + '.course'] || '').replace(/[\]\r\n]/g, ' ').trim();
          return part.replace(NOTE, () => (v ? `[课程：${v}]` : '[____]'));
        }
        if (/[☐☑]/.test(part)) return part.replace(/[☐☑]/, st.ticks[keyOf(day, part)] ? '☑' : '☐');
        return part;
      }).join('<br>');
    }
    return cells.join('|');
  }).join('\n');
}

module.exports = { FILE, hash, strip, keyOf, load, save, applyToMd, NOTE };
