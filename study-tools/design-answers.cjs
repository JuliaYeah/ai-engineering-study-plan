// Worked answers for the System Design topics (design.cjs): how to study the page, then every question on it -
// the clarifying questions, requirements, API, data flow, trade-offs, failures and follow-ups - each with a Chinese
// explanation and an English answer to say in the interview. bilingual-lessons.cjs puts them on the topic page.
//
// Answers are written in a small Markdown subset (see render): paragraphs, "- " / "1. " lists, ``` code blocks,
// `code`, and paragraphs starting with "EN: " for the English answer. Numbers are practice assumptions to state
// to the interviewer, not measured results.

const A = {};

A['Requirements and API Design'] = {
  how: `这一页的目标不是背答案，而是练会一个说话顺序：澄清问题 → 需求 → API → 数据流 → 取舍 → 失败场景 → 追问。后面19个System Design主题都用同一个顺序。

### Day 01 第一次学（45分钟）

1. 15分钟 理解：从下面“参考答案”的第1题读到第6题。每题先看问题，自己用中文想10秒，再点开；读完合上，用中文复述一遍。不认识的词看上面的Key Terms
2. 20分钟 画图和口述：在纸上画 Client → API → Run DB → Queue → Worker → Result store，标上 \`POST /v1/runs\` 和 \`GET /v1/runs/{id}\`。对着图把最后的“5分钟英文口述稿”读一遍，再不看稿讲一遍
3. 10分钟 取舍、失败和追问：第7到第11题，先自己用英文说，再点开对照
4. 在学习记录里写：哪一步讲不出来、哪个词不懂

### Day 02 复习（45分钟）

1. 30分钟 不看页面，计时：先问3个澄清问题，写下需求和API，画图，讲两个失败场景，全程用英文说（可以用手机录音）
2. 15分钟 打开参考答案逐题对照，把漏掉的点记进学习记录`,
  qa: [
    {
      q: 'Who submits a calculation?',
      zh: '谁来提交计算？',
      a: `为什么要问：调用方决定了认证方式、权限和限流。面试官一般不会主动告诉你，先问清楚再设计。

合理的假设：

- 内部风险分析师通过网页提交
- 内部系统用服务账号提交，比如每天收盘后的批量任务
- 每个run都记录owner（用户或团队），只有owner能看状态和结果
- 限流按用户和按服务账号分别算

EN: I'd assume two kinds of callers: risk analysts using an internal web UI, and internal services, such as an end-of-day batch job, using service accounts. Every request is authenticated, and every run records an owner, so only that owner or their team can read its status and results. Knowing the callers also tells me how to rate-limit: per user and per service account.`,
    },
    {
      q: 'Is completion synchronous?',
      zh: '计算结果是同步返回吗？',
      a: `为什么要问：计算要跑多久，决定API是同步还是异步。

风险计算（比如蒙特卡洛VaR、压力测试）可能要几秒到几十分钟，远远超过一个HTTP请求能等的时间（网关和浏览器通常30到60秒就超时）。所以设计成异步：

- 2秒内接受请求，返回 \`202 Accepted\` 和 run_id
- 客户端之后查状态（轮询），或者完成时收到通知
- 只有当计算总是在1秒左右完成时，同步才更简单

EN: No. A risk calculation, for example a Monte Carlo VaR or a stress test, can take anywhere from seconds to tens of minutes, which is far longer than an HTTP request should stay open. So I'd make the API asynchronous: it accepts the request within two seconds and returns 202 Accepted with a run ID, and the client polls a status endpoint or gets notified when the run finishes. If every calculation reliably finished in under a second, a synchronous API would be simpler, and I'd choose that.`,
    },
    {
      q: 'What makes two submissions the same logical request?',
      zh: '什么情况下，两次提交算同一个请求？',
      a: `这是幂等性（idempotency）问题。网络超时后客户端会重试；如果服务器把重试当成新请求，就会算两次。

做法：

- 客户端为每一次“逻辑上的提交”生成一个 \`Idempotency-Key\`（一个UUID），重试时带同一个key
- 服务器在 (owner_id, idempotency_key) 上建唯一索引
- key相同、内容也相同：返回原来那个run
- key相同、内容不同：返回 \`409 Conflict\`，这是客户端的bug

不要只按“内容相同”来判断：两个分析师可以合法地提交同样的参数，一个人也可能故意重跑。

EN: Two submissions are the same logical request when they carry the same idempotency key from the same caller. The client generates a UUID for each logical submission and reuses it on every retry. The server stores the key with a unique constraint on owner and key. Same key and same body: return the original run. Same key but a different body: return 409 Conflict, because that's a client bug. I wouldn't deduplicate on the payload alone, because two analysts can legitimately submit identical inputs, and someone may want to re-run a calculation on purpose.`,
    },
    {
      q: 'What are the functional and non-functional requirements?',
      zh: '功能需求和非功能需求怎么说？',
      a: `功能需求（系统要做什么）：

- 提交一次计算：portfolio、计算类型（VaR、压力测试）、参数、as-of日期
- 查状态：queued / running / succeeded / failed / cancelled
- 取结果、列出我的runs，可选：取消一个run

非功能需求（做得多好）：

- 峰值每秒10次提交；接受请求（admission）p99小于2秒
- 计算完成时间单独定目标，比如95%的run在10分钟内完成
- 可靠：返回run_id之后，这个run不会丢，也不会被算两次
- 安全：认证和owner检查，结果不会泄露给别人
- 可审计：保存输入、模型版本和市场数据快照，结果可以复现（金融监管要求）

EN: Functionally, a user can submit a calculation, check its status, fetch the results, list their runs, and optionally cancel one. Non-functionally, peak load is about 10 submissions per second, and accepting a request should take under 2 seconds at p99. Completion has its own target, say 95% of runs finish within 10 minutes. Once we return a run ID, the run must never be lost or executed twice. And because this is finance, every run should be reproducible, so we store its inputs, the model version and the market-data snapshot it used.`,
    },
    {
      q: 'What does the API look like?',
      zh: 'API具体长什么样？',
      a: `资源是run（一次计算）。用名词加HTTP方法；创建时返回 \`202 Accepted\` 而不是 \`201 Created\`，表示“已经接受，但还没做完”。

\`\`\`
POST /v1/runs
Authorization: Bearer <token>
Idempotency-Key: 3f6c2a9e-8d41-4b7a-9e0f-2c5d7a1b9e63

{
  "portfolio_id": "pf_123",
  "calc_type": "var",
  "params": { "confidence": 0.99, "horizon_days": 10, "method": "historical" },
  "as_of": "2026-11-06"
}

-> 202 Accepted
   Location: /v1/runs/run_8a7b
   { "run_id": "run_8a7b", "status": "queued" }

GET /v1/runs/run_8a7b
-> 200 { "run_id": "run_8a7b", "status": "running",
         "submitted_at": "...", "started_at": "...", "finished_at": null, "error": null }

GET  /v1/runs/run_8a7b/result     -> 200 结果；还没完成 -> 409；结果很大时分页或给下载链接
GET  /v1/runs?status=failed&cursor=...   -> 我的runs，按cursor分页
POST /v1/runs/run_8a7b/cancel     -> 202
\`\`\`

状态机：queued → running → succeeded / failed / cancelled。

错误码：

- \`400\` 输入不合法，指出是哪个字段
- \`401\` 没有登录
- \`404\` run不存在，或者不是你的（两种情况返回一样，见第8题）
- \`409\` 同一个key但内容不同，或者结果还没准备好
- \`429\` 超过限流，带 \`Retry-After\` 告诉客户端多久后再试

EN: The resource is a run. POST /v1/runs creates one and returns 202 Accepted with the run ID, because the work hasn't happened yet. GET /v1/runs/{id} returns the status, which moves from queued to running, and then to succeeded, failed or cancelled. GET /v1/runs/{id}/result returns the output once the run has succeeded. Errors are explicit: 400 with field-level messages for invalid input, 404 for a run that doesn't exist or isn't yours, 409 for a reused idempotency key with a different body, and 429 with Retry-After when a client exceeds its rate limit.`,
    },
    {
      q: 'Walk me through the data flow. Why persist before acknowledging?',
      zh: '请求进来以后发生了什么？为什么要先存数据库再返回？',
      a: `一个请求的完整路径：

1. API认证，校验输入：格式对不对，portfolio存不存在，调用者有没有权限
2. 在一个数据库事务里写入runs表一行，status = queued。(owner_id, idempotency_key) 有唯一索引；冲突说明是重试，按第3题的规则返回已有的run
3. 把 {run_id} 放进队列（比如SQS）
4. 返回 \`202\` 和run_id。重的计算从不在请求里做，所以接受请求能稳定在2秒以内
5. Worker从队列取消息，先“认领”这个run：\`UPDATE runs SET status = 'running' WHERE run_id = ? AND status = 'queued'\`，只有一个worker能更新成功
6. Worker读取portfolio和市场数据，计算；结果按run_id写进对象存储（S3），再把status改成succeeded并记下结果位置
7. 状态API只读runs表

runs表：run_id（主键）、owner_id、idempotency_key、request_hash、calc_type、params、portfolio_id、as_of、model_version、status、attempts、created_at、started_at、finished_at、error、result_location。

为什么先存再返回：如果先返回run_id、后写数据库，中间服务器崩溃，用户手里就有一个根本不存在的run_id，“已接受”的承诺就丢了。

一个容易漏的缺口：数据库写成功了，但放进队列失败。两种解决办法：

- transactional outbox：同一个事务里多写一条outbox记录，后台进程负责把它投递到队列
- 定时扫描：status还是queued、超过N分钟的run，重新放进队列

队列一般是至少投递一次（at-least-once），同一条消息可能来两次，所以worker要用第5步的条件更新来认领，认领失败就丢掉这条消息。

EN: The API authenticates the caller and validates the input. Then, in one transaction, it inserts a run row with status queued, with a unique constraint on owner and idempotency key, so a retry finds the existing row. It puts the run ID on a queue and returns 202 with the run ID. A worker picks up the message, claims the run with a conditional update from queued to running, so only one worker wins, computes the result, writes it to object storage keyed by run ID, and marks the run succeeded. I persist before acknowledging because once I've handed out a run ID, a crash must not lose that run. And since the database write and the enqueue can't be one atomic step, I'd use a transactional outbox or a sweeper that re-enqueues runs stuck in queued.`,
    },
    {
      q: 'What are the trade-offs: synchronous vs. asynchronous, polling vs. callbacks?',
      zh: '有哪些取舍？同步还是异步？轮询还是回调？',
      a: `同步：

- 好处：一个请求搞定，不需要队列和状态表，最简单
- 代价：慢的计算会占住API的连接和线程，超时就白算；API重启会丢掉正在算的任务
- 适合：计算总是很短（1秒左右）

异步（队列 + worker）：

- 好处：慢的计算和API隔离；重启不丢任务；可以重试；worker可以单独扩容
- 代价：多了队列、状态表和更多需要运维的组件；客户端要查状态

怎么知道算完了：

- 轮询（polling）：最简单，适合网页；服务器用 \`Retry-After\` 建议隔多久查一次
- 回调（webhook）：适合其他服务调用，不用一直查；但要处理回调失败和重试
- 我会先做轮询，有服务类调用方时再加webhook

EN: Synchronous execution is simpler: one request, no queue, no status table. But slow calculations would hold API connections, a client timeout wastes the work, and a restart loses in-flight jobs, so it only fits consistently short jobs. A queue with workers costs more to operate, but it isolates slow calculations from the API, survives restarts, allows retries, and lets me scale workers independently of the API. For completion, I'd start with polling, using Retry-After to suggest an interval, and add webhooks later for service clients, since webhooks need their own retry handling.`,
    },
    {
      q: 'What can fail, and what happens then?',
      zh: '哪里会出错？出错时会怎样？',
      a: `- 服务器已经接受了，但客户端超时没收到回复：客户端用同一个Idempotency-Key重试，拿到同一个run_id，不会重复计算
- 同一个key、不同内容：返回 \`409\`
- Worker算到一半崩溃：认领时设一个租约（lease_until），租约过期后别的worker重新认领，attempts加1；失败3次标记为failed，消息进死信队列（DLQ）等人查。所以计算必须可以安全重跑：结果按run_id写，覆盖也没关系
- 队列不可用：数据库里已经有这行，outbox或定时扫描之后会补投递；API照常接受请求
- 有人查别人的run：返回 \`404\`，和run不存在时一模一样，不返回 \`403\`。返回403等于告诉对方“这个run存在，只是你没权限”。页面上 “Unknown ownership must not leak result existence” 说的就是这个
- 提交突然暴增：队列先接住；超过每个调用方的限额返回 \`429\`；按队列积压自动增加worker

EN: If the client times out after we accepted, it retries with the same idempotency key and gets the same run back, so nothing is computed twice. If a worker crashes mid-run, its lease expires and another worker re-claims the run; after three attempts the run is marked failed and the message goes to a dead-letter queue. That's why the calculation must be safe to re-run, and results are written by run ID. If someone asks for a run that isn't theirs, they get 404, exactly like a run that doesn't exist, because a 403 would reveal that the run exists. And a burst of submissions is absorbed by the queue, with per-client rate limits returning 429.`,
    },
    {
      q: 'Follow-up: Estimate daily runs and retention storage; separate admission latency from completion latency.',
      zh: '追问：估算每天有多少个run、要存多少数据；把“接受请求的延迟”和“计算完成的延迟”分开说。',
      a: `每天多少个run：

- 每秒10次是峰值。假设全天平均是峰值的十分之一，也就是每秒1次
- 1 × 86,400秒 ≈ 每天约10万个run（取整，方便算）

存多少数据：

- 元数据：每行约2 KB，10万 × 2 KB = 每天200 MB，一年约73 GB，一台Postgres足够
- 结果：假设每个50 KB（每个持仓的风险值加汇总），每天5 GB，一年约1.8 TB
- 金融数据常要保存7年：结果约13 TB，放S3，90天后自动转到更便宜的存储层；数据库只存结果的位置

两种延迟要分开：

- 接受请求的延迟（admission latency）：从POST到拿到202。只有校验、一次写库、一次入队，通常几十到几百毫秒，目标p99小于2秒，在API层测
- 计算完成的延迟（completion latency）：从submitted_at到finished_at，等于排队时间加计算时间，取决于worker够不够

需要多少worker（Little's Law：同时在跑的数量 = 到达速率 × 平均耗时）：

- 平均每秒1个 × 每个算60秒 = 平均60个同时在跑
- 峰值每秒10个时需要600个，否则队列变长、完成时间变长。所以按队列积压自动扩容，或者接受高峰时完成得慢一些

EN: Ten per second is the peak. If the average is a tenth of that, it's about one per second, so roughly 100,000 runs a day. At about 2 KB of metadata per run, that's 200 MB a day, around 73 GB a year, which fits in one Postgres instance. If each result is about 50 KB, that's 5 GB a day, about 1.8 TB a year, and around 13 TB over a seven-year retention period, so results go to object storage with lifecycle rules, and the database keeps only their location. Admission latency is just validation, one write and one enqueue, so it should be well under the two-second target. Completion latency is queue wait plus compute time, and it depends on worker capacity: by Little's Law, one run per second at sixty seconds each means about sixty runs in flight on average, and the peak needs far more, so I'd autoscale workers on queue age.`,
    },
    {
      q: 'Follow-up: How would you adapt the design if traffic increased tenfold?',
      zh: '追问：流量变成10倍，设计要怎么改？',
      a: `变成峰值每秒100次提交。先测量哪里饱和，不要默认“多加几台机器”就能解决。

- 接受请求这条路：API是无状态的，加实例就行；每秒100次写入对Postgres不算多；SQS也没问题
- 计算是10倍：按队列积压自动扩容worker，成本也接近10倍。减少计算量的办法：
  - 同一个as-of日期的市场数据只加载一次，多个run共用
  - 输入完全相同的计算复用结果（按输入内容的哈希查，这和幂等key是两回事）
  - 分开交互队列和批量队列，分析师不用排在夜间批量任务后面
- 查状态的读请求也是10倍：读副本或缓存；用推送代替频繁轮询
- 公平：按调用方设配额，一个批量任务不能把所有worker占满
- 共享依赖：如果市场数据服务只有一个实例，加worker只会把它压垮，要先给它扩容或加缓存

EN: At a hundred submissions per second, the admission path is still easy: the API is stateless, so I add replicas, and a hundred inserts per second is modest for Postgres. The real cost is compute, which grows tenfold. I'd autoscale workers on queue age, and reduce the work itself: load each day's market data once and share it, reuse results for identical inputs by content hash, and split interactive and batch queues so analysts don't wait behind a nightly batch. I'd add per-client quotas for fairness, and move status reads to a replica or push notifications. Above all, I'd measure where saturation actually is, because adding workers doesn't help if they all depend on one market-data service.`,
    },
    {
      q: 'Follow-up: Which component in your drawing is the first bottleneck?',
      zh: '追问：你画的图里，哪个组件最先成为瓶颈？',
      a: `Worker（计算能力），以及worker依赖的服务（市场数据、portfolio服务）。

- 提交这条路很轻：校验、写一行、入队
- 队列会先把突增的请求接住，所以第一个症状不是提交失败，而是队列积压时间和完成时间变长，接受请求的延迟仍然很快
- 这正是要把两种延迟分开测的原因：只看API延迟会以为一切正常

第二个候选：runs数据库。如果几千个客户端每秒都在轮询，读请求会压过写入。办法：用Retry-After让客户端查得慢一点、读副本或缓存、webhook。

EN: The workers, and the services they depend on, such as market data. The submission path is light, and the queue absorbs bursts, so the first symptom isn't failed submissions but growing queue age and completion latency, while admission latency still looks healthy. That's exactly why I measure the two separately. The second candidate is the runs database under heavy polling, which I'd handle with Retry-After hints, a read replica or cache, and webhooks.`,
    },
  ],
  script: `EN: Before designing, I'd ask three questions: who submits calculations, whether completion has to be synchronous, and what makes two submissions the same request. I'll assume analysts and internal services, calculations that take seconds to tens of minutes, and a client-generated idempotency key.

EN: So the requirements are: submit a run, check its status, and fetch results; about 10 submissions per second at peak; accept within 2 seconds; completion has its own target; and an accepted run is never lost or run twice.

EN: The API has two main endpoints. POST /v1/runs takes the portfolio, calculation type, parameters and an Idempotency-Key header, and returns 202 Accepted with a run ID. GET /v1/runs/{id} returns the status: queued, running, succeeded or failed, plus a result link once it's done.

EN: For the data flow: the API validates the request and writes the run to the database with a unique constraint on owner and idempotency key, and only then returns the run ID. It puts the run on a queue; a worker claims it with a conditional update, computes, writes the result to object storage, and marks it succeeded. The expensive work never sits in the request path.

EN: The main trade-off is asynchronous versus synchronous. A queue adds moving parts, but it isolates slow calculations, survives restarts and lets workers scale independently.

EN: For failures: if the client times out and retries with the same key, it gets the same run. If a worker crashes, its lease expires and another worker picks the run up. And a run that isn't yours returns 404, so we never reveal that it exists.

EN: Finally, I'd check this against the requirements, and point out that the first bottleneck will be worker capacity, so I'd monitor queue age and completion latency separately from admission latency.`,
  project: '项目连接：Risk Copilot的Workbench提交一次分析，就是这里的run合约：POST返回run_id，前端轮询状态。做到这一步时，面试里可以用自己的实现举例。',
};

// Tiny renderer for the subset above. Text is escaped first; only the markup below is produced.
function render(md, esc) {
  const inline = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
  const out = [];
  for (const b of mdBlocks(md)) {
    if (b.startsWith('### ')) out.push(`<h3>${inline(b.slice(4))}</h3>`);
    else if (b.startsWith('```')) out.push(`<pre><code>${esc(b.replace(/^```\w*\n|\n?```$/g, ''))}</code></pre>`);
    else if (b.startsWith('EN: ')) out.push(`<blockquote lang="en"><p class="en-label">英文答法</p><p>${inline(b.slice(4))}</p></blockquote>`);
    else if (/^(- |\d+\. )/.test(b)) out.push(list(b, inline));
    else out.push(`<p>${inline(b).replace(/\n/g, '<br>')}</p>`);
  }
  return out.join('');
}
// paragraphs are separated by blank lines, except inside ``` blocks
function mdBlocks(md) {
  const blocks = [];
  let cur = [], fence = false;
  for (const line of md.trim().split('\n')) {
    if (line.startsWith('```')) fence = !fence;
    if (!fence && !line.trim() && !line.startsWith('```')) { if (cur.length) blocks.push(cur.join('\n')); cur = []; continue; }
    cur.push(line);
  }
  if (cur.length) blocks.push(cur.join('\n'));
  return blocks;
}
// "- " and "1. " items, with two-space-indented "- " sub-items
function list(b, inline) {
  const lines = b.split('\n'), tag = /^\d+\. /.test(lines[0]) ? 'ol' : 'ul';
  let html = `<${tag}>`, sub = false;
  for (const l of lines) {
    const m = l.match(/^(\s*)(?:- |\d+\. )(.*)$/);
    if (!m) { html += '<br>' + inline(l.trim()); continue; }
    if (m[1].length) { html += (sub ? '' : '<ul>') + `<li>${inline(m[2])}</li>`; sub = true; continue; }
    if (sub) { html += '</ul>'; sub = false; }
    html += (html.endsWith(`<${tag}>`) ? '' : '</li>') + `<li>${inline(m[2])}`;
  }
  return html + (sub ? '</ul>' : '') + `</li></${tag}>`;
}

// HTML for a topic page: { how, answers } or null when the topic has no worked answers yet.
function html(name, esc) {
  const t = A[name];
  if (!t) return null;
  const how = '<h2>怎么学这一页</h2>' + render(t.how, esc);
  const answers = '<h2>参考答案</h2><p>每一题先遮住答案，自己用英文说一遍，再点开对照。英文答法是可以直接在面试里说的版本，不需要逐字背，记住要点和顺序就行。</p>'
    + t.qa.map((x, i) => `<details class="ans"><summary><span lang="en">${i + 1}. ${esc(x.q)}</span><br><span class="muted">${esc(x.zh)}</span></summary>${render(x.a, esc)}</details>`).join('')
    + `<details class="ans"><summary>5分钟英文口述稿（把上面串起来说一遍）</summary>${render(t.script, esc)}</details>`
    + (t.project ? `<p>${esc(t.project)}</p>` : '');
  return { how, answers };
}

// Markdown for AI_ENGINEER_BILINGUAL_LESSONS.md
function markdown(name) {
  const t = A[name];
  if (!t) return '';
  const en = s => s.replace(/^EN: /gm, '英文答法：');
  return `\n### 怎么学这一页\n\n${t.how.replace(/^### /gm, '#### ')}\n\n### 参考答案\n\n`
    + t.qa.map((x, i) => `#### ${i + 1}. ${x.q}\n\n${x.zh}\n\n${en(x.a)}\n`).join('\n')
    + `\n#### 5分钟英文口述稿\n\n${en(t.script)}\n` + (t.project ? `\n${t.project}\n` : '');
}

module.exports = { html, markdown, topics: () => Object.keys(A) };
