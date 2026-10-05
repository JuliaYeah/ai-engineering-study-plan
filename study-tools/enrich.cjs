const fs=require('fs');
module.exports=function enrich(records,ml,esc){
 const official=[
  [/SQL|Snowflake|Financial Statement|Financial Analytics/,'https://docs.snowflake.com/en/user-guide/ui-snowsight-activity'],
  [/SEC|Point-in-Time|Financial Statement/,'https://www.sec.gov/search-filings/edgar-application-programming-interfaces'],
  [/AWS|Fargate|ECR|CloudWatch|Cloud Fundamentals|Networking|IAM/,'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html'],
  [/CI\/CD|GitHub|OIDC|Deployment|Secrets/,'https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws'],
  [/Retries|Backoff|Timeout|Idempotency|Failure Recovery|Queues|Workers/,'https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/'],
  [/Access Control|Tenant|Text-to-SQL/,'https://docs.snowflake.com/en/user-guide/security-access-control-considerations'],
  [/Indexes|EXPLAIN|Query Optimization|Schema|Keys|Constraints/,'https://www.postgresql.org/docs/current/indexes.html'],
  [/Tree|Forest|Boosting/,'https://scikit-learn.org/stable/modules/ensemble.html'],
  [/Regression|Regularization|Scaling/,'https://scikit-learn.org/stable/modules/linear_model.html'],
  [/FastAPI|API Tests/,'https://fastapi.tiangolo.com/tutorial/testing/']
 ];
 for(const r of records){const file=`Study topics/${r.id}.html`;let html=fs.readFileSync(file,'utf8');
  if(r.parent){const parent=records.find(p=>p.id===r.parent),lesson=ml.find(p=>p[0]===parent.name);html=html.replace('<h2>Focused Lesson</h2>',`<h2>Core Concepts</h2><p>${esc(lesson[2])}</p><h2>Worked Experiment</h2><p>${esc(lesson[3])}</p><details><summary>Interview script and expected observation</summary><p>${esc(lesson[2])}</p><p>${esc(lesson[5])}</p></details><h2>Focused Lesson</h2>`);}
  const refs=official.filter(([pattern])=>pattern.test(r.name)).map(([,url])=>url);if(refs.length)html=html.replace('<h2>Sources and Scope</h2>',`<h2>Topic-specific Technical References</h2><ul>${refs.map(url=>`<li><a href="${url}">${esc(new URL(url).hostname+new URL(url).pathname)}</a></li>`).join('')}</ul><h2>Sources and Scope</h2>`);
  fs.writeFileSync(file,html);
 }
};
