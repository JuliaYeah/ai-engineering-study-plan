const fs=require('fs'),assert=require('assert');
require('./layout.cjs'); // keep reports in Reports/ (moved to the root only while this script runs)
const {schedule,problems,lookup,timing,linkPrereq}=require('./quantvault-day.cjs');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const pad=n=>String(n).padStart(2,'0');
const sources=[['Machine Learning','https://quantvault.org/machine-learning-interview-questions.html'],['Regression','https://quantvault.org/regression-interview-questions.html'],['All Problems','https://quantvault.org/problems.html']];
function problemHTML(id){const p=lookup.get(id);assert(p,`Missing ID ${id}`);return `<li><a lang="en" href="${p.url}">#${id} · ${esc(p.title)}</a><span class="muted"> · ${p.category} · ${p.difficulty}</span></li>`;}
function problemMD(id){const p=lookup.get(id);return `- [#${id} · ${p.title}](${p.url}) · ${p.category} · ${p.difficulty}`;}
function stripMD(text){return text.replace(/<!-- quantvault-intro -->[\s\S]*?<!-- \/quantvault-intro -->\s*/g,'').replace(/<!-- quantvault-day \d+ -->[\s\S]*?<!-- \/quantvault-day -->\s*/g,'').replace(/^- QuantVault 练习（[^\n]*\n(?:  [^\n]*\n)*/gm,'');}
function stripHTML(text){return text.replace(/<section data-quantvault-day="\d+">[\s\S]*?<\/section>/g,'').replace(/<li data-quantvault-day="\d+">[\s\S]*?<\/ul><\/li>/g,'').replace(/<section data-quantvault-intro="v1">[\s\S]*?<\/section>/g,'').replace(/<div data-quantvault-intro="v1">[\s\S]*?<\/div>/g,'');}
function run(){
 const manifest=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
 const terms=manifest.records.map(r=>[r.name,r.id]);
 assert.equal(schedule.length,45);
 const entries=schedule.map(([ids,depth,scope,prerequisites,mode],i)=>({day:i+1,date:manifest.days[i].date,topic:manifest.days[i].ml,ids,depth,scope,prerequisites,mode,minutes:{lesson:timing[mode][0],notebook:timing[mode][1],practice:timing[mode][2]}}));
 assert.equal(new Set(entries.flatMap(e=>e.ids)).size,problems.length);
 for(const e of entries){assert.equal(Object.values(e.minutes).reduce((a,b)=>a+b),45);e.ids.forEach(id=>assert(lookup.has(id)));}
 for(const [base,prefix]of [['AI_ENGINEER_DAILY_LEARNING_GUIDE','guide-day-']]){   // the timetable's QuantVault lines are written by build.cjs
  let md=stripMD(fs.readFileSync(base+'.md','utf8'));
  fs.writeFileSync(base+'.md',md);
  let html=stripHTML(fs.readFileSync(base+'.html','utf8'));
  fs.writeFileSync(base+'.html',html);
 }
 const intro=`<p>按已有Pro访问权限执行，仅含Regression与Machine Learning。公开目录共264个不同题号；本轮选择${problems.length}道核心题，不复制网站题干或官方答案。题名、分类、难度与链接于2026-10-04在实时目录核对；学习顺序、先修和分段范围由本计划设计。</p><p>每题先读先修，再独立尝试，最后查看网站答案；用英文口述，并用中文检查理解。两题日平均分配练习时间；未完成内容放入错题记录，以后替换复习题，不追加课时。完整建模与take-home只做指定部分。</p>`;
 const navigation=`<nav>${entries.map(e=>`<a href="#qv-day-${pad(e.day)}">Day ${pad(e.day)} · ${e.date}</a>`).join('')}</nav>`;
 const body=entries.map(e=>`<section id="qv-day-${pad(e.day)}"><h2>Day ${pad(e.day)} · ${e.date}</h2><p>13:30–14:15 · ML / Regression。讲义${e.minutes.lesson}分钟，Notebook${e.minutes.notebook}分钟，QuantVault${e.minutes.practice}分钟。</p><p><a href="Study%20topics/${e.topic}.html">当天讲义</a> · <a href="AI_ENGINEER_TRANSITION_PLAN.html#day-${pad(e.day)}">当天时间表</a></p><ul>${e.ids.map(problemHTML).join('')}</ul><p>先修：${linkPrereq(e.prerequisites,terms,'html','AI_ENGINEER_TRANSITION_PLAN.html#')}</p><p><span lang="en">${esc(e.depth)}</span>：${esc(e.scope)}</p><details><summary>练习记录模板</summary><p>Attempt / Key idea / Mistake / Follow-up / Next review</p><p>记录你能否独立解释、哪个术语不懂、网站解答与你思路有何差异。不要把读过答案算作能够独立回答。</p></details></section>`).join('');
 const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>QuantVault Study Schedule</title><link rel="stylesheet" href="Study%20topics/style.css"></head><body><main><nav><a href="AI_ENGINEER_TRANSITION_PLAN.html">每日时间表</a><a href="AI_ENGINEER_DAILY_LEARNING_GUIDE.html">学习指南</a><a href="Study%20topics/index.html">Topic索引</a></nav><h1>QuantVault Study Schedule</h1>${intro}<p>实时分类计数：Regression 170 · Machine Learning 94；两类题号去重后264。计划分类统计：${problems.filter(p=>p.category==='Regression').length} Regression · ${problems.filter(p=>p.category==='Machine Learning').length} Machine Learning。</p><details><summary>按日期跳转</summary>${navigation}</details>${body}<h2>Extension Bank</h2><p>其余${264-problems.length}题保留为扩展；在核心题能独立回答后，从相关类别选择。额外模型、深度学习与高阶推导不纳入本轮必做。网页精选目录与实时总题库数量不同，精选目录不代表全量覆盖。</p><ul>${sources.map(([t,u])=>`<li><a href="${u}">${t}</a></li>`).join('')}</ul></main></body></html>`;
 fs.writeFileSync('AI_ENGINEER_QUANTVAULT_PLAN.html',html);
 const md=`# QuantVault Study Schedule\n\n只含Regression与Machine Learning，按已有Pro权限执行。实时目录于2026-10-04核对，共264个不同题号；本轮${problems.length}道核心题安排在45个学习日，其余${264-problems.length}题作为扩展。网页精选目录不等于全量题库。\n\n每日讲义、Notebook与QuantVault共享45分钟；Coding、Optimization不加入。网站完整题干与官方解答以网站为准。\n\n${entries.map(e=>`<a id="qv-day-${pad(e.day)}"></a>\n\n## Day ${pad(e.day)} · ${e.date}\n\n13:30–14:15 · ML / Regression：讲义${e.minutes.lesson}分钟，Notebook${e.minutes.notebook}分钟，QuantVault${e.minutes.practice}分钟。\n\n[当天讲义](Study%20topics/${e.topic}.html) · [当天时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-${pad(e.day)})\n\n${e.ids.map(problemMD).join('\n')}\n\n先修：${linkPrereq(e.prerequisites,terms,'md','AI_ENGINEER_TRANSITION_PLAN.md#')}\n\n${e.depth}：${e.scope}\n\n记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。\n`).join('\n')}\n## Extension Bank\n\n其余${264-problems.length}题作为扩展，不声称已完成全量排期。核心题熟练后选同主题题，替换复习或在本轮结束后学习。\n\n${sources.map(([t,u])=>`- [${t}](${u})`).join('\n')}\n`;
 fs.writeFileSync('AI_ENGINEER_QUANTVAULT_PLAN.md',md);
 // Link ML lessons to the exact scheduled days; preserve every existing lesson.
 for(const r of manifest.records.filter(r=>r.module==='ML')){
  const file=`Study topics/${r.id}.html`;let page=fs.readFileSync(file,'utf8');page=page.replace(/<section data-quantvault-topic="v1">[\s\S]*?<\/section>/g,'');
  const days=entries.filter(e=>r.days.includes(e.day));
  const block=`<section data-quantvault-topic="v1"><h2>QuantVault Practice</h2><p>在当天ML时段内做题；先按学习指南读先修，不另增加时长。</p><ul>${days.map(e=>`<li><a href="../AI_ENGINEER_QUANTVAULT_PLAN.html#qv-day-${pad(e.day)}">Day ${pad(e.day)} · ${e.date}</a>：${e.ids.map(id=>`<a href="${lookup.get(id).url}" lang="en">#${id} · ${esc(lookup.get(id).title)}</a>`).join('；')}</li>`).join('')}</ul></section>`;
  page=page.replace('</article>','</article>'+block);fs.writeFileSync(file,page);
 }
 fs.writeFileSync('study-tools/quantvault-manifest.json',JSON.stringify({checked:'2026-10-04',assumePro:true,excluded:['Coding','Optimization'],publicCounts:{Regression:170,'Machine Learning':94},publicUniqueIds:264,selectedUnique:problems.length,notScheduled:264-problems.length,problems,days:entries},null,2));
 console.log({quantvaultUnique:problems.length,sessions:entries.length,questionAttempts:entries.reduce((n,e)=>n+e.ids.length,0),hoursAdded:0});
}
module.exports=run;
if(require.main===module)run();
