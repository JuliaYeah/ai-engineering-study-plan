const fs=require('fs'),path=require('path'),assert=require('assert');
process.chdir(path.resolve(__dirname,'..'));
const manifest=JSON.parse(fs.readFileSync('study-tools/manifest.json'));
const original=fs.readFileSync('study-tools/original-plan.md','utf8'),plan=fs.readFileSync('AI_ENGINEER_TRANSITION_PLAN.md','utf8');
const questions=s=>s.match(/^- Q\d{3}[^\r\n]+/gm)||[];
assert.deepStrictEqual(questions(plan),questions(original));assert.equal(questions(plan).length,623);
const lc=s=>s.match(/https:\/\/leetcode.com\/problems\/[^)]+/g)||[];assert.deepStrictEqual(lc(plan),lc(original));
assert.equal(manifest.days.length,45);
assert.equal(manifest.days.slice(0,40).filter(d=>d.designModule==='General').length,16);
assert.equal(manifest.days.slice(0,40).filter(d=>d.designModule==='AI').length,24);
const blocks=[...plan.matchAll(/<a id="day-(\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)];assert.equal(blocks.length,45);
for(const [_,day,block]of blocks){for(const slot of ['09:00–10:30','10:30–12:30','12:30–13:30','13:30–14:15','14:15–15:00','15:00–16:30','16:30–17:30','17:30–18:00'])assert(block.includes(slot),`day ${day} missing ${slot}`);}
const files=['AI_ENGINEER_TRANSITION_PLAN.html','AI_ENGINEER_DAILY_LEARNING_GUIDE.html','AI_ENGINEER_PROJECT_ROADMAP.html',...(fs.existsSync('AI_ENGINEER_QUANTVAULT_PLAN.html')?['AI_ENGINEER_QUANTVAULT_PLAN.html']:[]),...fs.readdirSync('Study topics').filter(f=>f.endsWith('.html')).map(f=>'Study topics/'+f)];
let links=0;const broken=[];
for(const file of files){const html=fs.readFileSync(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' H1');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,file+' duplicate id');for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|data:|mailto:)/.test(m[1]))continue;links++;const [raw,anchor]=m[1].split('#'),target=raw?path.resolve(path.dirname(file),decodeURIComponent(raw)):path.resolve(file);if(!fs.existsSync(target)){broken.push({file,link:m[1]});continue}if(anchor&&target.endsWith('.html')&&!fs.readFileSync(target,'utf8').includes(`id="${anchor}"`))broken.push({file,link:m[1],reason:'missing anchor'});}}
assert.deepStrictEqual(broken,[]);
for(const r of manifest.records){assert(r.days.length>0,r.name);assert(fs.existsSync(`Study topics/${r.id}.html`));}
const result={days:45,mainHours:320,bufferHours:40,questions:623,questionsUnchanged:true,leetcodeLinksUnchanged:true,topicPages:manifest.records.length,notebooks:fs.readdirSync('notebook').filter(f=>f.endsWith('.ipynb')).length,generalMainSessions:16,aiMainSessions:24,localLinksChecked:links,brokenLinks:0};fs.writeFileSync('study-tools/validation.json',JSON.stringify(result,null,2));console.log(result);
