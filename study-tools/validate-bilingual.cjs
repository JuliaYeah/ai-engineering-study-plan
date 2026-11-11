const fs=require('fs'),assert=require('assert');
const mlNotes=require('./ml-notes.cjs');
const {records}=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
for(const r of records){
 const html=fs.readFileSync(`Study topics/${r.id}.html`,'utf8');
 for(const heading of ['Topic','学习背景','Question','Key Terms','Short Answer','中文回答'])assert(html.includes(`<h2>${heading}</h2>`),`${r.name}: missing ${heading}`);
 const lesson=html.slice(html.indexOf('data-bilingual-lesson'),html.indexOf('data-original-lesson'));
 assert(!/<h2>练习方式<\/h2>|是什么、如何工作/.test(lesson),`${r.name}: removed sections are back`);
 assert.equal(/<h2>直观例子<\/h2>/.test(lesson),r.name==='Train / Validation / Test Split',`${r.name}: 直观例子 only where the example is concrete`);
 // a combined topic explains each of its parts in Key Terms
 const terms=(lesson.match(/<ul class="key-terms">([\s\S]*?)<\/ul>/)||[])[1]||'';
 for(const part of r.name.split('; '))assert(terms.includes(`>${part.replaceAll('&','&amp;')}<`),`${r.name}: Key Terms missing ${part}`);
 // every part with notes in ml-notes.md shows them
 for(const n of mlNotes.parts(r.name))assert(lesson.includes(`<h3><span lang="en">${n.name}</span>`),`${r.name}: 讲义 missing ${n.name}`);
 assert.equal((html.match(/data-bilingual-lesson=/g)||[]).length,1,r.name);
 assert.equal((html.match(/data-original-lesson=/g)||[]).length,1,r.name);
 assert(html.indexOf('<h2>Question</h2>')<html.indexOf('<h2>Short Answer</h2>'),r.name);
 assert(/<h2>Short Answer<\/h2><p lang="en">[^]*?<\/p><h2>中文回答<\/h2>/.test(html),r.name);
}
const notebooks=records.filter(r=>r.notebook&&!r.parent);
for(const r of notebooks){const nb=JSON.parse(fs.readFileSync(`notebook/${r.notebook}`,'utf8'));assert.equal(nb.cells.filter(c=>c.metadata?.bilingual_intro).length,1,r.name);assert(nb.cells.some(c=>c.cell_type==='code'),r.name);}
console.log(`Verified ${records.length} bilingual lessons and ${notebooks.length} notebook introductions.`);
