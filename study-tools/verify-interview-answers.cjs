const fs=require('fs'),path=require('path'),assert=require('assert');
const {pathToFileURL}=require('url');
const {answers}=require('./interview-answers.cjs');
const {chromium}=require('C:/Users/yejun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
process.chdir(path.resolve(__dirname,'..'));
const md=fs.readFileSync('AI_ENGINEER_TRANSITION_PLAN.md','utf8');
const original=fs.readFileSync('study-tools/original-plan.md','utf8');
function allocations(text){return [...text.matchAll(/<a id="day-(\d+)"><\/a>([\s\S]*?)(?=<a id="day-|$)/g)].map(m=>({day:m[1],ids:[...m[2].matchAll(/^- (Q\d{3})\b/gm)].map(x=>x[1])}));}
assert.deepStrictEqual(allocations(md),allocations(original));
assert.equal((md.match(/<!-- interview-answer Q\d{3} -->/g)||[]).length,623);
for(const a of answers.values()){
  const start=md.indexOf(`<!-- interview-answer ${a.id} -->`),end=md.indexOf('<!-- /interview-answer -->',start);
  const block=md.slice(start,end);
  assert(block.includes(a.answer),a.id+' MD script');
  assert(block.includes(a.explanation),a.id+' MD explanation');
  for(const f of a.followups) assert(block.includes(f.question)&&block.includes(f.answer),a.id+' follow-up');
  if(a.code)assert(block.includes(a.code),a.id+' MD code');
  for(const text of [a.answer,a.explanation,...a.followups.flatMap(f=>[f.question,f.answer])]){
    assert(!/[\u4e00-\u9fff]/.test(text),a.id+' English content');
    assert(!/\bTODO\b|lorem ipsum|answer goes here/i.test(text),a.id+' unfinished placeholder');
  }
}
(async()=>{
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try{
    const page=await browser.newPage({viewport:{width:1280,height:900}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const url=pathToFileURL(path.resolve('AI_ENGINEER_TRANSITION_PLAN.html')).href;
    await page.goto(url);
    assert.equal(await page.locator('.interview-answer').count(),623);
    assert.equal(await page.locator('.interview-answer[open], .answer-depth[open]').count(),0);
    const rendered=await page.locator('.interview-answer').evaluateAll(nodes=>nodes.map(n=>({
      id:n.dataset.question,answer:n.querySelector('.spoken-answer').textContent,
      explanation:n.querySelector('.explanation').textContent,
      questions:[...n.querySelectorAll('.follow-question')].map(x=>x.textContent),
      followups:[...n.querySelectorAll('.follow-answer')].map(x=>x.textContent),
      code:n.querySelector('code.language-python')?.textContent
    })));
    for(const row of rendered){const a=answers.get(row.id);assert.equal(row.answer,a.answer);assert.equal(row.explanation,a.explanation);assert.deepStrictEqual(row.questions,a.followups.map(f=>f.question));assert.deepStrictEqual(row.followups,a.followups.map(f=>f.answer));assert.equal(row.code,a.code);}
    const first=page.locator('#answer-Q001');
    await first.locator(':scope > summary').click();
    assert(await first.getAttribute('open')!==null);
    assert(await first.locator('.spoken-answer').isVisible());
    assert(!await first.locator('.explanation').isVisible());
    await first.locator('.answer-depth > summary').click();
    assert(await first.locator('.explanation').isVisible());
    await first.scrollIntoViewIfNeeded();
    await page.screenshot({path:'study-tools/interview-desktop-preview.png'});
    const nav=page.locator('main > details').first();
    await nav.locator(':scope > summary').click();
    await nav.locator('a[href="#day-40"]').click();
    assert.equal(new URL(page.url()).hash,'#day-40');
    for(const size of [390,320]){
      await page.setViewportSize({width:size,height:844});
      await page.goto(url+'#answer-Q313');
      const item=page.locator('#answer-Q313');
      if(await item.getAttribute('open')===null)await item.locator(':scope > summary').click();
      if(await item.locator('.answer-depth').getAttribute('open')===null)await item.locator('.answer-depth > summary').click();
      await item.scrollIntoViewIfNeeded();
      assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),`mobile ${size}px overflow`);
      if(size===390)await page.screenshot({path:'study-tools/interview-mobile-preview.png'});
    }
    await page.goto(pathToFileURL(path.resolve('AI_ENGINEER_DAILY_LEARNING_GUIDE.html')).href);
    await page.locator('a[href="AI_ENGINEER_TRANSITION_PLAN.html#day-01"]').first().click();
    await page.waitForLoadState('load');
    assert.equal(new URL(page.url()).hash,'#day-01');
    assert.equal(await page.locator('.interview-answer').count(),623);
    assert.deepStrictEqual(errors,[]);
    const result={uniqueAnswers:623,originalDailyAllocationPreserved:true,mdHtmlAllFieldsMatch:true,followups:623,questionsWithReferenceCode:[...answers.values()].filter(a=>a.code).length,defaultCollapsed:true,nestedDetails:true,dateNavigation:true,guideLinks:true,mobileWidths:[390,320],browserErrors:0};
    fs.writeFileSync('study-tools/interview-validation.json',JSON.stringify(result,null,2));
    console.log(result);
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
