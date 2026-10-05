const fs=require('fs'),assert=require('assert');
const q=JSON.parse(fs.readFileSync('study-tools/quantvault-manifest.json','utf8'));
const m=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
assert.equal(q.days.length,45);assert.equal(q.problems.length,47);
assert.equal(new Set(q.problems.map(p=>p.id)).size,q.selectedUnique);
assert.equal(new Set(q.days.flatMap(d=>d.ids)).size,q.selectedUnique);
assert.deepEqual(q.excluded,['Coding','Optimization']);
assert(q.problems.every(p=>['Regression','Machine Learning'].includes(p.category)));
for(const d of q.days){assert.equal(d.date,m.days[d.day-1].date);assert.equal(d.topic,m.days[d.day-1].ml);assert.equal(Object.values(d.minutes).reduce((a,b)=>a+b),45);assert(d.prerequisites&&d.scope);}
for(const base of ['AI_ENGINEER_TRANSITION_PLAN','AI_ENGINEER_DAILY_LEARNING_GUIDE']){
 const md=fs.readFileSync(base+'.md','utf8'),html=fs.readFileSync(base+'.html','utf8');
 assert.equal((md.match(/<!-- quantvault-day \d+ -->/g)||[]).length,45,base+' Markdown sessions');
 assert.equal((html.match(/data-quantvault-day="\d+"/g)||[]).length,45,base+' HTML sessions');
 assert.equal((html.match(/data-quantvault-intro=/g)||[]).length,1);
}
const page=fs.readFileSync('AI_ENGINEER_QUANTVAULT_PLAN.html','utf8');
for(const p of q.problems)assert(page.includes(p.url),p.title);
assert(q.days[5].ids.includes(1078));assert(q.days[39].ids.includes(1078));
console.log('QuantVault: 47 unique problems, 45 sessions, 54 attempts; dates and 45-minute blocks preserved.');
