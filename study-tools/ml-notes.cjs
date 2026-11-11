// 讲义: the deep notes for ML topics, written in ml-notes.md (one "## " section per topic name).
// bilingual-lessons.cjs puts them on the Topic pages between Key Terms and Short Answer, and into the lessons Markdown.
const fs = require('fs'), path = require('path');

const notes = new Map();
for (const sec of fs.readFileSync(path.join(__dirname, 'ml-notes.md'), 'utf8').replace(/\r\n/g, '\n').split(/^## /m).slice(1)) {
  const lines = sec.split('\n'), name = lines.shift().trim();
  const field = k => { const i = lines.findIndex(l => l.startsWith(k + ': ')); return i < 0 ? '' : lines.splice(i, 1)[0].slice(k.length + 2).trim(); };
  const zh = field('zh'), en = field('en');
  if (!zh || !en) throw new Error(`ml-notes.md: ${name} needs zh: and en: lines`);
  notes.set(name, { name, zh, en, md: lines.join('\n').trim() });
}

// the notes for each part of a topic name ("Data Leakage; Scaling; scikit-learn Pipelines"), in order, skipping parts without notes
const parts = name => name.split('; ').map(n => notes.get(n)).filter(Boolean);
// the English Short Answer, only when every part has notes (otherwise the page keeps its original answer)
const answer = name => { const p = parts(name); return p.length && p.length === name.split('; ').length ? p.map(n => n.en).join('\n\n') : ''; };

// small Markdown renderer for what ml-notes.md uses: #### headings, paragraphs, lists (one nested level), tables, code blocks, `code`
function html(md, esc) {
  const inline = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
  const lines = md.split('\n'), out = [], item = /^(\d+\.|-) /, sub = /^\s+- /;
  for (let i = 0; i < lines.length;) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (l.startsWith('```')) {
      const code = [];
      for (i++; i < lines.length && !lines[i].startsWith('```'); i++) code.push(lines[i]);
      i++;
      out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
    } else if (/^#{3,6} /.test(l)) {
      out.push(`<h4>${inline(l.replace(/^#+ /, ''))}</h4>`); i++;
    } else if (l.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++].slice(1, -1).split('|').map(c => c.trim()));
      const tr = (r, t) => `<tr>${r.map(c => `<${t}>${inline(c)}</${t}>`).join('')}</tr>`;
      out.push(`<div class="tw"><table><thead>${tr(rows[0], 'th')}</thead><tbody>${rows.slice(2).map(r => tr(r, 'td')).join('')}</tbody></table></div>`);
    } else if (item.test(l)) {
      const tag = /^\d/.test(l) ? 'ol' : 'ul', items = [];
      for (; i < lines.length && (item.test(lines[i]) || (items.length && sub.test(lines[i]))); i++) {
        if (sub.test(lines[i])) items[items.length - 1].sub.push(lines[i].trim().slice(2));
        else items.push({ text: lines[i].replace(item, ''), sub: [] });
      }
      out.push(`<${tag}>${items.map(it => `<li>${inline(it.text)}${it.sub.length ? `<ul>${it.sub.map(s => `<li>${inline(s)}</li>`).join('')}</ul>` : ''}</li>`).join('')}</${tag}>`);
    } else {
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(```|#{3,6} |\||\d+\. |- )/.test(lines[i])) para.push(lines[i++]);
      out.push(`<p>${inline(para.join(' '))}</p>`);
    }
  }
  return out.join('');
}

// the 讲义 section of a Topic page, or '' when no part has notes
const section = (name, esc) => {
  const p = parts(name);
  return p.length ? `<h2>讲义</h2><div class="lesson-notes">${p.map(n => `<h3><span lang="en">${esc(n.name)}</span> ${esc(n.zh)}</h3>${html(n.md, esc)}`).join('')}</div>` : '';
};
// the same for the lessons Markdown (topic sections there are "## ", page sections "### ")
const markdown = name => {
  const p = parts(name);
  return p.length ? `\n\n### 讲义\n\n${p.map(n => `#### ${n.name} ${n.zh}\n\n${n.md.replace(/^#### /gm, '##### ')}`).join('\n\n')}` : '';
};

module.exports = { notes, parts, answer, html, section, markdown };
