const fs=require('fs'),assert=require('assert');
const schedule=require('./quantvault-schedule.cjs');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const pad=n=>String(n).padStart(2,'0');
const problems=fs.readFileSync(`${__dirname}/quantvault-selected.txt`,'utf8').trim().split(/\r?\n/).map(line=>{const [id,category,difficulty,title]=line.split('|');return {id:+id,category,difficulty,title,url:`https://quantvault.org/problems.html?id=${id}`};});
const lookup=new Map(problems.map(p=>[p.id,p]));
const timing={foundation:[20,15,10],learn:[15,20,10],review:[10,15,20]};
const sources=[['Machine Learning','https://quantvault.org/machine-learning-interview-questions.html'],['Regression','https://quantvault.org/regression-interview-questions.html'],['All Problems','https://quantvault.org/problems.html']];
function problemHTML(id){const p=lookup.get(id);assert(p,`Missing ID ${id}`);return `<li><a lang="en" href="${p.url}">#${id} · ${esc(p.title)}</a><span class="muted"> · ${p.category} · ${p.difficulty}</span></li>`;}
function problemMD(id){const p=lookup.get(id);return `- [#${id} · ${p.title}](${p.url}) · ${p.category} · ${p.difficulty}`;}
function htmlDay(entry){return `<section data-quantvault-day="${pad(entry.day)}"><h3>13:30–14:15 · QuantVault Practice</h3><p>时间分配：讲义与先修 ${entry.minutes.lesson} 分钟 → Notebook实验 ${entry.minutes.notebook} 分钟 → QuantVault ${entry.minutes.practice} 分钟；合计45分钟。</p><ul>${entry.ids.map(problemHTML).join('')}</ul><p>先修：${esc(entry.prerequisites)}</p><p>本次范围：<span lang="en">${esc(entry.depth)}</span>。${esc(entry.scope)}</p><p><a href="AI_ENGINEER_QUANTVAULT_PLAN.html#qv-day-${pad(entry.day)}">当天题目与复习记录</a>。两题日拆分做题时间；读题后按上述范围练习，不把整份take-home当作短题。计时结束记录卡点，后续复习替换，不追加时长。</p></section>`;}
function mdDay(entry){return `<!-- quantvault-day ${pad(entry.day)} -->\n\n#### 13:30–14:15 · QuantVault Practice\n\n时间分配：讲义与先修 ${entry.minutes.lesson} 分钟 → Notebook实验 ${entry.minutes.notebook} 分钟 → QuantVault ${entry.minutes.practice} 分钟；合计45分钟。\n\n${entry.ids.map(problemMD).join('\n')}\n\n先修：${entry.prerequisites}\n\n本次范围：${entry.depth}。${entry.scope}\n\n两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-${pad(entry.day)})。\n\n<!-- /quantvault-day -->\n\n`;}
const introMD=`<!-- quantvault-intro -->\n\n## QuantVault Practice\n\n只安排Regression与Machine Learning，按已有Pro访问权限执行。2026-10-04实时目录核对：Regression 170题、Machine Learning 94题，共264个不同题号；网页搜索抓取曾显示Regression 171题，因此以实时目录为准。\n\n本轮选择${problems.length}道核心题，分配到45个学习日，重复题用于分阶段练习和复习；其余${264-problems.length}题作为扩展题库，不要求在当前45分钟ML时段内全部做完。保留现有Python、SQL与LeetCode安排，不加入QuantVault Coding或Optimization分类。\n\n讲义与先修、Notebook及QuantVault共享13:30–14:15的45分钟：入门日20+15+10，初学日15+20+10，复习日10+15+20。网站Coding类型的ML题只练指定的ML片段或方案，不另加算法刷题。\n\n[全部日期与具体题目](AI_ENGINEER_QUANTVAULT_PLAN.md) · [HTML日期索引](AI_ENGINEER_QUANTVAULT_PLAN.html)。\n\n<!-- /quantvault-intro -->\n\n`;
function stripMD(text){return text.replace(/<!-- quantvault-intro -->[\s\S]*?<!-- \/quantvault-intro -->\s*/g,'').replace(/<!-- quantvault-day \d+ -->[\s\S]*?<!-- \/quantvault-day -->\s*/g,'');}
function stripHTML(text){return text.replace(/<section data-quantvault-day="\d+">[\s\S]*?<\/section>/g,'').replace(/<section data-quantvault-intro="v1">[\s\S]*?<\/section>/g,'');}
function run(){
 const manifest=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
 assert.equal(schedule.length,45);
 const entries=schedule.map(([ids,depth,scope,prerequisites,mode],i)=>({day:i+1,date:manifest.days[i].date,topic:manifest.days[i].ml,ids,depth,scope,prerequisites,mode,minutes:{lesson:timing[mode][0],notebook:timing[mode][1],practice:timing[mode][2]}}));
 assert.equal(new Set(entries.flatMap(e=>e.ids)).size,problems.length);
 for(const e of entries){assert.equal(Object.values(e.minutes).reduce((a,b)=>a+b),45);e.ids.forEach(id=>assert(lookup.has(id)));}
 const introHTML=`<section data-quantvault-intro="v1"><h2>QuantVault Practice</h2><p>只加入Regression与Machine Learning，按已有Pro访问权限执行。实时目录核对共264题；本轮${problems.length}道核心题按先修和当天主题安排，其余${264-problems.length}题作为扩展。QuantVault共享原有45分钟ML时段；现有Python、SQL、LeetCode及623道仓库原题保留。</p><p><a href="AI_ENGINEER_QUANTVAULT_PLAN.html">QuantVault每日题目与时间分配</a> · <a href="AI_ENGINEER_QUANTVAULT_PLAN.md">Markdown版本</a></p></section>`;
 for(const [base,prefix]of [['AI_ENGINEER_TRANSITION_PLAN','day-'],['AI_ENGINEER_DAILY_LEARNING_GUIDE','guide-day-']]){
  let md=stripMD(fs.readFileSync(base+'.md','utf8'));
  md=md.replace(/^(# [^\r\n]+\r?\n)/,`$1\n${introMD}`);
  md=md.replace(/<a id="(?:guide-)?day-(\d+)"><\/a>([\s\S]*?)(?=<a id="(?:guide-)?day-|$)/g,(whole,day,body)=>{
   const e=entries[+day-1],block=mdDay(e);
   if(prefix==='day-')return whole.replace('#### 当天 Interview Questions',block+'#### 当天 Interview Questions');
   return whole.replace('### 14:15–15:00 · General & AI System Design',block+'### 14:15–15:00 · General & AI System Design');
  });
  md=md.replace('- ML：短讲义10–15分钟，notebook实验20–25分钟，英文检查题5–10分钟。重复日使用同一notebook的Review Experiment，结合当天focus。','- ML：讲义、notebook和QuantVault共享45分钟，按当天分配执行；QuantVault替代原英文检查题。复习日只完成Notebook的Review Experiment或指定片段。');
  fs.writeFileSync(base+'.md',md);
  let html=stripHTML(fs.readFileSync(base+'.html','utf8'));
  html=html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/,`$1${introHTML}`);
  html=html.replace(/<a id="(?:guide-)?day-(\d+)"><\/a>([\s\S]*?)(?=<a id="(?:guide-)?day-|$)/g,(whole,day)=>{
   const block=htmlDay(entries[+day-1]);
   return prefix==='day-'?whole.replace(/(<h4>当天 Interview Questions<\/h4>)/,`${block}$1`):whole.replace(/(<h3>14:15–15:00 · General &amp; AI System Design<\/h3>)/,`${block}$1`);
  });
  html=html.replace('ML：短讲义10–15分钟，notebook实验20–25分钟，英文检查题5–10分钟。重复日使用同一notebook的Review Experiment，结合当天focus。','ML：讲义、notebook和QuantVault共享45分钟，按当天分配执行；QuantVault替代原英文检查题。复习日只完成Notebook的Review Experiment或指定片段。');
  fs.writeFileSync(base+'.html',html);
 }
 const intro=`<p>按已有Pro访问权限执行，仅含Regression与Machine Learning。公开目录共264个不同题号；本轮选择${problems.length}道核心题，不复制网站题干或官方答案。题名、分类、难度与链接于2026-10-04在实时目录核对；学习顺序、先修和分段范围由本计划设计。</p><p>每题先读先修，再独立尝试，最后查看网站答案；用英文口述，并用中文检查理解。两题日平均分配练习时间；未完成内容放入错题记录，以后替换复习题，不追加课时。完整建模与take-home只做指定部分。</p>`;
 const navigation=`<nav>${entries.map(e=>`<a href="#qv-day-${pad(e.day)}">Day ${pad(e.day)} · ${e.date}</a>`).join('')}</nav>`;
 const body=entries.map(e=>`<section id="qv-day-${pad(e.day)}"><h2>Day ${pad(e.day)} · ${e.date}</h2><p>13:30–14:15 · ML / Regression。讲义${e.minutes.lesson}分钟，Notebook${e.minutes.notebook}分钟，QuantVault${e.minutes.practice}分钟。</p><p><a href="Study%20topics/${e.topic}.html">当天讲义</a> · <a href="AI_ENGINEER_DAILY_LEARNING_GUIDE.html#guide-day-${pad(e.day)}">当天学习指南</a></p><ul>${e.ids.map(problemHTML).join('')}</ul><p>先修：${esc(e.prerequisites)}</p><p><span lang="en">${esc(e.depth)}</span>：${esc(e.scope)}</p><details><summary>练习记录模板</summary><p>Attempt / Key idea / Mistake / Follow-up / Next review</p><p>记录你能否独立解释、哪个术语不懂、网站解答与你思路有何差异。不要把读过答案算作能够独立回答。</p></details></section>`).join('');
 const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>QuantVault Study Schedule</title><link rel="stylesheet" href="Study%20topics/style.css"></head><body><main><nav><a href="AI_ENGINEER_TRANSITION_PLAN.html">每日时间表</a><a href="AI_ENGINEER_DAILY_LEARNING_GUIDE.html">学习指南</a><a href="Study%20topics/index.html">Topic索引</a></nav><h1>QuantVault Study Schedule</h1>${intro}<p>实时分类计数：Regression 170 · Machine Learning 94；两类题号去重后264。计划分类统计：${problems.filter(p=>p.category==='Regression').length} Regression · ${problems.filter(p=>p.category==='Machine Learning').length} Machine Learning。</p><details><summary>按日期跳转</summary>${navigation}</details>${body}<h2>Extension Bank</h2><p>其余${264-problems.length}题保留为扩展；在核心题能独立回答后，从相关类别选择。额外模型、深度学习与高阶推导不纳入本轮必做。网页精选目录与实时总题库数量不同，精选目录不代表全量覆盖。</p><ul>${sources.map(([t,u])=>`<li><a href="${u}">${t}</a></li>`).join('')}</ul></main></body></html>`;
 fs.writeFileSync('AI_ENGINEER_QUANTVAULT_PLAN.html',html);
 const md=`# QuantVault Study Schedule\n\n只含Regression与Machine Learning，按已有Pro权限执行。实时目录于2026-10-04核对，共264个不同题号；本轮${problems.length}道核心题安排在45个学习日，其余${264-problems.length}题作为扩展。网页精选目录不等于全量题库。\n\n每日讲义、Notebook与QuantVault共享45分钟；Coding、Optimization不加入。网站完整题干与官方解答以网站为准。\n\n${entries.map(e=>`<a id="qv-day-${pad(e.day)}"></a>\n\n## Day ${pad(e.day)} · ${e.date}\n\n13:30–14:15 · ML / Regression：讲义${e.minutes.lesson}分钟，Notebook${e.minutes.notebook}分钟，QuantVault${e.minutes.practice}分钟。\n\n[当天讲义](Study%20topics/${e.topic}.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-${pad(e.day)})\n\n${e.ids.map(problemMD).join('\n')}\n\n先修：${e.prerequisites}\n\n${e.depth}：${e.scope}\n\n记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。\n`).join('\n')}\n## Extension Bank\n\n其余${264-problems.length}题作为扩展，不声称已完成全量排期。核心题熟练后选同主题题，替换复习或在本轮结束后学习。\n\n${sources.map(([t,u])=>`- [${t}](${u})`).join('\n')}\n`;
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
