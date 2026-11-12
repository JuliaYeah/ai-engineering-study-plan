const fs=require('fs'),path=require('path'),assert=require('assert');
require('./layout.cjs'); // keep reports in Reports/ (moved to the root only while this script runs)
process.chdir(path.resolve(__dirname,'..'));
const manifest=JSON.parse(fs.readFileSync('study-tools/manifest.json'));
const original=require('./reschedule.cjs').plan(fs.readFileSync('study-tools/original-plan.md','utf8')),plan=fs.readFileSync('AI_ENGINEER_TRANSITION_PLAN.md','utf8');
const questions=s=>s.match(/^- Q\d{3}[^\r\n]+/gm)||[];
assert.deepStrictEqual(questions(plan),questions(original));assert.equal(questions(plan).length,623);
// the morning problems are unchanged; the 10:30 LeetCode Pattern rows add their own practice problems
const lc=s=>s.replace(/^\| 10:30–11:15[^\r\n]*/gm,'').match(/https:\/\/leetcode.com\/problems\/[^)]+/g)||[];assert.deepStrictEqual(lc(plan),lc(original));
for(const p of require('./patterns.cjs').DATA.patterns)assert.equal((plan.match(new RegExp('/patterns/'+p.file+'\\.md\\) · ','g'))||[]).length,1,'pattern scheduled once: '+p.name);
assert.equal(manifest.days.length,45);
// Hello Interview: each planned day has its row and one ☐ (13:45–15:45)
for(const it of require('./hello-interview.cjs').DATA.items){const b=plan.split(`<a id="day-${String(it.day).padStart(2,'0')}"></a>`)[1].split('<a id="day-')[0];assert((b.match(/^\| 13:45–15:45 \| Hello Interview，2 小时 \| Hello Interview[^☐☑|]*[☐☑]/m)||[]).length===1,'Hello Interview day '+it.day);}
const blocks=[...plan.matchAll(/<a id="day-(\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)];assert.equal(blocks.length,45);
for(const [_,day,block]of blocks){for(const slot of ['08:30–10:30','10:30–11:15','11:15–13:15','13:45–15:45','15:45–16:45','16:45–17:45','17:45–18:00'])assert(block.includes(slot),`day ${day} missing ${slot}`);}
const files=['AI_ENGINEER_TRANSITION_PLAN.html','AI_ENGINEER_DAILY_LEARNING_GUIDE.html','AI_ENGINEER_PROJECT_ROADMAP.html',...['AI_ENGINEER_STUDY_LOG.html','AI_ENGINEER_STUDY_NOTES.html','AI_ENGINEER_TOP150_RECORD.html','AI_ENGINEER_VIDEOS.html','AI_ENGINEER_THOUGHTS.html'].filter(f=>fs.existsSync(f)),...fs.readdirSync('Study topics').filter(f=>f.endsWith('.html')).map(f=>'Study topics/'+f)];
let links=0;const broken=[];
for(const file of files){const html=fs.readFileSync(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' H1');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,file+' duplicate id');for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|data:|mailto:)/.test(m[1]))continue;links++;const [raw,anchor]=m[1].split('#'),target=raw?path.resolve(path.dirname(file),decodeURIComponent(raw)):path.resolve(file);if(!fs.existsSync(target)){broken.push({file,link:m[1]});continue}if(anchor&&target.endsWith('.html')&&!fs.readFileSync(target,'utf8').includes(`id="${anchor}"`))broken.push({file,link:m[1],reason:'missing anchor'});}}
assert.deepStrictEqual(broken,[]);
for(const r of manifest.records){assert(r.days.length>0||r.module==='ML'||r.module.endsWith('System Design'),r.name);   // ML and System Design lessons are no longer scheduled
assert(fs.existsSync(`Study topics/${r.id}.html`));}
const result={days:45,mainHours:360,bufferHours:45,questions:623,questionsUnchanged:true,leetcodeLinksUnchanged:true,topicPages:manifest.records.length,notebooks:fs.readdirSync('notebook').filter(f=>f.endsWith('.ipynb')).length,helloInterviewDays:require('./hello-interview.cjs').DATA.items.length,localLinksChecked:links,brokenLinks:0};fs.writeFileSync('study-tools/validation.json',JSON.stringify(result,null,2));console.log(result);
