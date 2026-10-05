const fs=require('fs'),assert=require('assert');
const {records}=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
for(const r of records){
 const html=fs.readFileSync(`Study topics/${r.id}.html`,'utf8');
 for(const heading of ['Topic','学习背景','Question','Key Terms','直观例子','Short Answer','中文回答'])assert(html.includes(`<h2>${heading}</h2>`),`${r.name}: missing ${heading}`);
 assert.equal((html.match(/data-bilingual-lesson=/g)||[]).length,1,r.name);
 assert.equal((html.match(/data-original-lesson=/g)||[]).length,1,r.name);
 assert(html.indexOf('<h2>Question</h2>')<html.indexOf('<h2>Short Answer</h2>'),r.name);
 assert(/<h2>Short Answer<\/h2><p lang="en">[^]*?<\/p><h2>中文回答<\/h2>/.test(html),r.name);
}
const notebooks=records.filter(r=>r.notebook&&!r.parent);
for(const r of notebooks){const nb=JSON.parse(fs.readFileSync(`notebook/${r.notebook}`,'utf8'));assert.equal(nb.cells.filter(c=>c.metadata?.bilingual_intro).length,1,r.name);assert(nb.cells.some(c=>c.cell_type==='code'),r.name);}
console.log(`Verified ${records.length} bilingual lessons and ${notebooks.length} notebook introductions.`);
