# 三项目实践路线：从当前代码到可验证的作品

更新日期：2026-10-04。按已讨论的项目方向与工程要求重排；这是未来学习与交付计划，不是项目完成报告。

[每日总时间表](AI_ENGINEER_TRANSITION_PLAN.md) · [学习执行指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md)

## 待审阅：整体学习更新方案

状态：本节为下一轮实施方案，等待你审阅。已有三个项目日程已更新；Coding topic资料页、ML notebooks、General & AI System Design讲义与新日程尚未生成。notebook目录已创建但为空。以下内容获确认后再同步到每日总时间表和学习指南。

### 时间与语言约定

- 每个工作日仍为8小时：Coding 1.5小时、Courses 2小时、ML 45分钟、General & AI System Design 45分钟、Project 1.5小时、Interview Questions 1小时、Review 30分钟。午休与周末不计入。
- Topics、学习正文、代码注释、Interview Prompts、Follow-up Questions、Interview Scripts使用英文；日程说明、导航与执行安排使用中文。
- 原有623条仓库题目继续按40天首次覆盖，单独问答时段与完整System Design练习分别安排；topic资料页是复习与深化材料，不额外增加每天任务。

### Coding 与全模块 Topic Library

- 全部学习模块建立topic索引；每个topic标首次学习日、所有明确复习日、对应资料页，并能跳到当天schedule。每日schedule也链接回资料页。
- 资料放在 Study topics/，每个独立topic一个HTML，统一index带搜索与模块筛选；相同概念共用页面，跨模块互链。
- Coding页含Core Concepts、5–8个核心英文问答及追问、1–2道代表题的思路/复杂度/边界、默认折叠的参考代码、LeetCode链接、项目连接与来源。SQL同样使用英文问题与答案。
- 在线研究结合仓库题库，技术答案核对官方来源；只有可验证统计才称“最高频”，否则标核心/反复出现的问题。经验类回答用真实项目事实或待填写模板，不编造经历。

### ML：讲解、实验与表达

- 主入口改为Short Explanation / Video → Guided Experiment → Recall & Explanation → Project Application；官方documentation作为查证补充，不再让你从长文档自行找学习路径。
- 每天45分钟默认：讲解10–15分钟、小实验20–25分钟、英文检查题5–10分钟，按当天难度在总时长内调整。原有两小时网课继续Core/Production。
- 每天链接一个明确的讲解入口与可直接打开的notebook；优先使用已核对的短视频/具体章节，缺少合适视频时提供原创讲义，不编造lecture或时间戳。
- notebook/存放按序命名的.ipynb，例如01_train_validation_test_split.ipynb。实验复用时可链接同一notebook的指定章节，不为复习日机械复制文件。
- notebook模板：Learning Goal、Minimal Prerequisites、可运行数据与模型、可视化、明确修改项、English Check Questions、折叠或末尾参考答案、Financial Connection、Sources。
- 环境统一配置一次；基础实验用本地合成数据或随附tiny fixture，无密钥即可从头运行。需要联网金融数据的项目实验提供快照/fixture与来源说明。
- 核心顺序：Split / Leakage → Baselines / Metrics → Linear & Tree Models → Pipelines / Tuning → Time-Series Validation → Volatility Forecasting → Persistence / Serving / Monitoring。

### 第三个项目加入 ML

Investment Research Workbench新增Volatility Forecasting。预测只使用时刻t及之前可用的特征，目标为未来5个交易日Realized Volatility；先明确定义公式、年化和label可用时点。

- Baseline：Past-20-Day Historical Volatility。先做Ridge Regression，再在时间允许时加浅层Tree Model；Ridge不赢baseline也如实报告。
- Features：Lagged Returns、Lagged Absolute Returns、Trailing Volatility；统一通过Pipeline处理，训练外不fit预处理。
- Validation：Chronological Hold-Out与Walk-Forward；根据label结束时点清除边界重叠，显式记录可用数据日期，不把随机切分用于此任务。
- Metrics：MAE / RMSE、相同日期的baseline差值、时期切片；最终test在模型选择完成后评估。预测误差改善与策略收益分别判断。
- Integration：受限train/evaluate/predict工具，输入ExperimentConfig，输出Model Artifact、Metrics、Predictions与data/code/model版本；LLM不直接算指标。
- 时间归属：ML时段逐步完成数据切分、训练与验证notebook；Project时段负责工具封装、API/Worker、持久状态、tests与demo。原12小时是工程整合预算，不再声称包含完整ML学习与训练。
- 范围取舍：先保证Historical Baseline + Ridge + Evaluation + 可调用预测流程；Tree Model、ML驱动仓位变体、更多资产与更复杂策略为可选。保留一个确定性研究baseline，避免同时扩张多种策略。
- 同步点：实施时修改下方Day 31–38的具体任务，将已有notebook作为前置输入。下方目前仍是原工程路线，尚未反映本节ML增量；日程未更新前不视为已完成整合。

### General & AI System Design

独立模块名称改为General & AI System Design。40个主计划日共30小时：General 16次/12小时，AI 24次/18小时。5个缓冲日安排General 2次、AI 3次。每次45分钟，概念与案例的连接不额外加时。

- General Foundations：Requirements、APIs、Data Modeling、Indexes、Caching、Queues、Concurrency、Latency、Capacity Estimation。
- General Reliability：Timeouts、Retries、Idempotency、Consistency、Backpressure、Persistence、Observability、CI/CD、AWS Deployment、Rollback。
- AI Systems：RAG、Text-to-SQL、Agentic Workflows、Research Platforms、ML Training & Serving、Evaluation Pipelines、Latency / Cost Optimization、Security & Reliability。
- 原来占用System Design的Tokenization、Temperature、Transformer Fundamentals移到AI Fundamentals资料页与相关网课/题目学习里；完整课表核对时保留覆盖位置，不静默丢掉topic。
- Learning Day默认15分钟讲解/讲义、20分钟自己画方案、10分钟追问；Practice Day默认30分钟独立设计与口述、15分钟对照复盘。重点题跨两个时段，先学后练。
- General题选Job Scheduler、Rate Limiter、Cache / API Service等可迁移案例；AI题优先使用三个项目，再加入陌生业务情境测试迁移能力。

| AI System Design Topic | Representative Interview Prompt | Project Connection |
|---|---|---|
| RAG Systems | Design a Financial Research Assistant | Risk Copilot |
| Text-to-SQL Systems | Design a Financial Analytics Assistant | Snowflake Project |
| Agentic Workflows | Design an Agent with Tool Calling and Human Approval | Risk Copilot |
| Research Platforms | Design an AI-Assisted Experiment Platform | Research Workbench |
| ML Training & Serving | Design a Volatility Forecasting Service | Research Workbench |
| Evaluation & Monitoring | Design an Evaluation and Regression Testing Pipeline | All Projects |
| Latency & Cost Optimization | Scale an AI Service Under a Latency and Cost Budget | All Projects |
| Security & Reliability | Handle Prompt Injection, Tool Failures, and Unauthorized Access | All Projects |

### System Design 讲义与资料入口

- 每个topic讲义放在Study topics/，包含英文Interview Prompt、Clarifying Questions、Functional / Non-Functional Requirements、架构与数据流图、Design Decisions、替代方案、Failure Scenarios、分步骤Interview Script、Follow-ups、Project Connection、Sources。
- AI题必须包含Model Selection、Data / Context、Evaluation、Failure Handling、Human Oversight、Cost / Latency；ML题另覆盖训练/推理边界和数据泄漏。
- 脚本展示怎么推理、说明假设和取舍，答案默认折叠用于自测；不把单一架构当唯一标准答案。
- [Hello Interview — System Design in a Hurry](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)：通用答题框架与基础章节主线。
- [ByteByteGo — System Design Interview: A Step-by-Step Guide](https://www.youtube.com/watch?v=i7twT3x5yv8)：图解/视频补充。
- AI案例结合仓库System Design问题与项目，原创整理；不复制付费讲义，不能访问的材料换成可读来源。当前资源是入口，实施时为各日选择具体章节。

### 审阅通过后的实施顺序与验收

- 第一步：建立topic→日期→资料→项目任务映射，标记哪些主题是初学、复习或完整mock；保留课程、刷题链接和623题的覆盖。
- 第二步：完成Study topics/索引及各topic HTML，优先Coding，再ML与General/AI System Design，统一双向链接。
- 第三步：生成notebook/实验与一次性环境说明；从干净kernel顺序执行无密钥实验，检查图表、结果和练习答案。真实数据/付费服务的验证状态单独注明。
- 第四步：同步两个MD/HTML日程及本项目路线，把第三项目ML产物与系统设计案例安排到对应日期；相关资料作为同一时段输入，不增加隐藏作业。
- 验收：40个主计划日每天8小时、周末空；General/AI配比与项目小时数可核对；所有topic有有效学习入口；问答全英文；notebook运行成功；HTML日期锚点/本地链接有效；旧第四项目承诺清除，三个项目范围与实际前置一致。
- 当前审阅只针对这份更新方案。获确认后再生成资料与改每日schedule；本节列出的新资料尚未制作。

## 时间与范围

项目时段固定为工作日 15:00–16:30，每天 1.5 小时。主计划 40 天共 60 小时，另有 5 天共 7.5 小时缓冲；周末不安排学习。沿用原日期，11/26–11/27 仍按工作日安排。

| 日期与学习日 | 项目 | 项目小时 | 目标 |
|---|---|---|---|
| 10/5–10/30 · Day 01–20 | Risk Copilot | 30 | 深化已有项目，建立可信评估、可靠流程和部署证据 |
| 11/2–11/13 · Day 21–30 | Financial Statement Analytics Assistant | 15 | 完成 Snowflake / SQL / Text-to-SQL 小型端到端版本 |
| 11/16–11/25 · Day 31–38 | Investment Research Workbench | 12 | 完成受限研究工具、异步执行与故障恢复演示 |
| 11/26–11/27 · Day 39–40 | Portfolio Review | 3 | 复现、证据核查与演示冻结 |
| 11/30–12/4 · Day 41–45 | Buffer | 7.5 | 补关键缺口与复习 |

这是紧凑的最小版本预算，默认利用现有代码、成熟组件和 AI 辅助实现，并由你读代码与验证。一天只推进一个最小切片；若任务超时，先缩小可选范围，再使用缓冲期，不从 Coding、Courses 或 Interview Questions 偷加时间。若仍不足，延后未完成项目，不能把未做的事标为完成。

优先级：金融数值正确性和失败阻断 → 可复现的端到端流程 → 评估与工程证据 → 新功能。RAG/SQL评估不设保证提升的指标；先建立可信基线。Cloud 部署在实际执行前核对账户、预算和权限，未验证时记录 Not Deployed。

## 三个项目的完成标准

### Risk Copilot

- 复用当前 LangGraph、RAG、risk engine、retrieval metrics/runner 和 Docker；先核查旧 known_issues，旧文档中的“没有离线eval”等描述已落后于代码，不能照单重建。
- 数值：至少覆盖已支持演示的单位、零暴露、缺失值、因子映射与已知参考值；未解决的严重问题影响哪个输出，就先禁用该输出。
- RAG：人工复核的数据、固定 development/held-out、Chunking / Embedding / MMR 小型对照、结果与失败案例；没有提升也能解释。
- Reliability：有界重试、明确失败终态、真实批准或拒绝、报告数字来自确定性计算；审批先做单用户演示，多用户持久化与权限系统列扩展。
- Delivery：薄 API、可读 traces、受控 benchmark、CI、可运行容器、AWS smoke 与一次rollback；只有实际运行后才声称完成。
- Evidence：README 可从干净环境复现，包含代码版本、测试/eval命令、结果、限制与demo备份。

### Financial Statement Analytics Assistant

- 数据：SEC公开数据，3家公司 × 3个已完成财政年度，限 Revenue / Operating Income / Assets；先用Snowflake sample熟悉平台，再导入自己的raw与curated表。
- 基础：表粒度、申报版本/单位/期间、参考SQL、数据质量测试；初版是当前可获得申报口径，不用于历史交易模拟。
- AI：自然语言→澄清或SQL→只读执行→结果说明；熟悉的LLM API为默认，Cortex Analyst比较后置。Snowflake完成计算，你能独立检查参考SQL。
- Evaluation：20题的小型基准，区分development和held-out；比较执行结果、澄清/拒绝、失败、延迟与成本。
- Delivery：CLI或小型UI、离线CI、手动真实integration、schema/load/reproduce命令与Query Profile分析。

### Investment Research Workbench

- 用户：研究员希望减少重复实验操作并保留可审计的研究结果；2只ETF日频、固定数据快照、Momentum baseline及Volatility Targeting变体。
- 计算：Python做信号、仓位、成本和指标；LLM只解释意图、澄清、生成合法配置、调用受限工具和解释真实结果。无任意生成代码执行、实盘下单或盈利承诺。
- 系统：FastAPI + PostgreSQL + Redis/现成队列库 + 独立Worker，先Docker Compose单机运行；事务outbox、幂等run、有限retry/timeout、故障恢复与状态查询。
- Evaluation：tiny hand-calculated fixture验证时点/成本；10条AI任务检查配置、工具和结果解释。保存数据/代码/参数版本与结果。
- Delivery：CI、版本化容器、可复现demo和worker故障演练。AWS SQS、多worker、扩容留作扩展，单机实验不等于生产分布式系统规模验证。

## Latency、Distributed Systems、AWS 与 CI/CD 如何落地

- Latency：Day 13建立各阶段基线，Day 14只做一个有测量依据的优化；Day 29观察SQL扫描/耗时/cache，Day 37区分排队、执行与LLM耗时。p95须带样本数和环境；TTFT只适用于实际streaming路径。
- Distributed Systems：Day 33–35完成异步提交、持久状态、重复消息、worker故障、retry/timeout/backpressure。以可复现故障为学习成果，不堆Kafka/Kubernetes。
- AWS：Day 17–19以ECS Fargate单任务、ECR、CloudWatch、IAM为演示部署路径；索引首版打包只读，跨重启状态限制写清楚。S3用于需要的artifact归档时再添加；不把对象存储当事务数据库。
- CI/CD：Day 15首先建立Risk Copilot PR checks，Day 19做手动触发release和rollback；Day 30/38复用CI模式到新项目。只有Risk Copilot要求本轮AWS部署，另两项目先可运行发布。
- CI与AI Evals分开：快速、确定性的offline tests每次PR执行；付费LLM和真实Snowflake/AWS检查按预算手动执行，保存证据。

## 执行规则与入口

Risk Copilot 代码根目录为 D:/Github/risk_copilot。改动前遵循其中AGENTS与codebase_map；每次改动同步CHANGELOG，分支工作，验证后才提交，README与实际实现一致。旧known issues作为复现候选，不假定全部仍存在。

已有命令：

- Tests：uv run pytest tests/ -q
- Lint：uv run ruff check src/ evals/
- Index Build：uv run python scripts/build_vector_index.py
- Retrieval Eval：uv run python scripts/evaluate_retrieval.py --tag experiment-label

AI协作方式：你先定义输入/输出、失败情况与验证，然后要求AI做小范围diff；自己解释、审阅、运行并记录结果。这次更新只修改学习计划，没有改三个项目的代码，没有运行付费实验或创建云资源。

## 选型依据与学习材料

仓库强调真实用户问题、role relevance、可获得数据、明确评估、可完成范围和工程深度。岗位资料用于方向判断，历史JD不是当前在招证明。

- [Project Selection](portfolio/02-how-to-pick-a-project.md)
- [Portfolio Evidence](portfolio/04-polishing.md)
- [Skills Analysis](role/02-skills.md)
- [Point72 Investment Research & Workflows：历史JD](job-market/data_raw/2026-02-04/8061454_Point72_AI_Engineer_Investment_Research_Workflows.yaml)
- [Morgan Stanley Market Risk / Talk-to-Data：历史JD](job-market/data_raw/2026-05-29/9254629_Morgan_Stanley_Senior_AI_Engineer.yaml)
- [Two Sigma Engineering：研究平台与数据职责](https://www.twosigma.com/careers/engineering/)
- [AWS ECS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html)
- [GitHub Actions OIDC for AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)
- [Snowflake Sample Data](https://docs.snowflake.com/en/user-guide/sample-data)
- [SEC APIs](https://www.sec.gov/search-filings/edgar-application-programming-interfaces)

官方资料于2026-10-04核对；以下架构和时间安排是针对你的练习设计，不是官方推荐生产架构。

## 第 1 周

<a id="project-day-01"></a>

### Day 01 · 周一 10/5

15:00–16:30 · Risk Copilot

Topic：Baseline and Issue Audit

- 前置：无；先记录当前基线。
- 今天改进：读项目 AGENTS、codebase_map、CHANGELOG；运行现有 tests/lint，复现一个失败。把旧 known_issues 标为 Confirmed / Fixed / Unverified，并记录当前 commit。
- 如何验证：用离线 fixture 重现失败，保留完整 traceback；历史文档不能直接当当前事实。
- 保存成果：baseline.md; issue-backlog.md

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-01)

<a id="project-day-02"></a>

### Day 02 · 周二 10/6

15:00–16:30 · Risk Copilot

Topic：Risk Numerical Correctness: Missing Data and Factors

- 前置：Day 01 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：优先核查 risk/var.py 的缺失值处理和 data/preprocess.py 的 DXY 映射；只修已复现的问题，定义缺数据时拒绝或明确排除的规则。
- 如何验证：手算 tiny portfolio 参考值；测缺失值、因子缺失与单位，不把缺失默认为零。关键数值问题未解决则缩小演示范围。
- 保存成果：numerical-regression-tests; issue-resolution

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-02)

<a id="project-day-03"></a>

### Day 03 · 周三 10/7

15:00–16:30 · Risk Copilot

Topic：Risk Numerical Correctness: Zero Exposure and Units

- 前置：Day 02 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：核查 risk/greeks.py 的零值、VaR/P&L 因子映射和支持的置信度；集中完成一个小修复，剩余高影响问题先禁用对应演示功能。
- 如何验证：区分 zero 与 missing，验证 shock 单位和数值符号；重跑相关用例，记录仍失败的基线测试。
- 保存成果：reference-cases; supported-scope.md

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-03)

<a id="project-day-04"></a>

### Day 04 · 周四 10/8

15:00–16:30 · Risk Copilot

Topic：Retrieval Dataset and Label Review

- 前置：Day 03 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：复用现有 evals/datasets 样本，先人工审核 30 个 query：20 development、10 held-out；包含无答案、近似错误来源、跨来源问题。相似问题按组切分。
- 如何验证：每题标 relevant section IDs、分级和理由；检查来源确实存在。held-out 不用于调参；审核未完成先不比较模型。
- 保存成果：reviewed-dataset; split-manifest

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-04)

<a id="project-day-05"></a>

### Day 05 · 周五 10/9

15:00–16:30 · Risk Copilot

Topic：Metric Audit and Retrieval Baseline

- 前置：Day 04 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：复用 evaluation/retrieval 的 metrics/runner；核对 Recall@k、nDCG、MRR、冗余定义，以当前配置在 development 跑基线。无答案另记拒绝/误检，不混入 recall 均值。
- 如何验证：手算重复 section 的 toy ranking 并核对实现；保存配置、模型、索引、数据版本、tokens 和耗时。
- 保存成果：baseline-results; metric-contract

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-05)

## 第 2 周

<a id="project-day-06"></a>

### Day 06 · 周一 10/12

15:00–16:30 · Risk Copilot

Topic：Chunking Experiment

- 前置：Day 05 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：固定 embedding、search type、k；仅比较当前 chunk 配置与一个较小/较大候选，记录大小计量单位及 overlap。每个配置重建独立索引。
- 如何验证：development 同一 query 集比较 recall、nDCG、重复来源、context tokens；不追求所有指标同时上升。
- 保存成果：chunking-comparison; index-manifests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-06)

<a id="project-day-07"></a>

### Day 07 · 周二 10/13

15:00–16:30 · Risk Copilot

Topic：Embedding Model Experiment

- 前置：Day 06 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：固定选定 chunk 方案和检索设置，对比当前 embedding 与一个可用替代模型；模型/维度/版本绑定独立索引和缓存。
- 如何验证：确认 query/document embedding 配套、不能复用旧向量；比较相同样本的质量、构建成本与查询耗时。
- 保存成果：embedding-comparison; configuration-decision

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-07)

<a id="project-day-08"></a>

### Day 08 · 周三 10/14

15:00–16:30 · Risk Copilot

Topic：MMR Experiment and Held-Out Check

- 前置：Day 07 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：固定其他参数比较 Similarity 与 MMR，再锁定最终配置、运行 held-out 一次。检查误检和来源冗余；Hybrid/Reranking 只有发现对应失败才进入后续 backlog。
- 如何验证：MMR 不保证不同来源；根据质量、成本和冗余作取舍。保存失败案例，即使没有提升也如实报告。
- 保存成果：retrieval-report; frozen-config

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-08)

<a id="project-day-09"></a>

### Day 09 · 周四 10/15

15:00–16:30 · Risk Copilot

Topic：Evaluator Failures and Bounded Retries

- 前置：Day 08 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：检查 evaluator_agent 和 routing：坏 JSON、缺分、越界分数、调用异常要有明确结果；重试带拒绝原因，耗尽时阻断而非进入 risk engine。
- 如何验证：mock 成功、拒绝、解析失败、超时、预算耗尽；确认没有无限循环和静默通过。
- 保存成果：reliability-tests; retry-policy

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-09)

<a id="project-day-10"></a>

### Day 10 · 周五 10/16

15:00–16:30 · Risk Copilot

Topic：Human Approval and State Transitions

- 前置：Day 09 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：把 workflow.py 自动批准改为明确的 Pending / Approved / Rejected 状态；先完成单用户演示的暂停和同 run 恢复，保存批准记录。
- 如何验证：未批准不能执行风险计算；拒绝终止；重复恢复不能重复副作用。多用户身份系统留待扩展，不声称已实现。
- 保存成果：approval-tests; state-diagram

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-10)

## 第 3 周

<a id="project-day-11"></a>

### Day 11 · 周一 10/19

15:00–16:30 · Risk Copilot

Topic：Scenario and Report Evaluation

- 前置：Day 10 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：建立 10 个小型 E2E 场景：有效输入、非法单位、无支持证据、明确冲突和 evaluator 故障。用确定性 risk fixture 检查报告；保留 injection 反例。
- 如何验证：报告数字、单位、方向与 engine 一致；场景约束区分硬规则和需复核假设，不把市场方向经验当普适定律。
- 保存成果：scenario-evals; numerical-consistency-report

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-11)

<a id="project-day-12"></a>

### Day 12 · 周二 10/20

15:00–16:30 · Risk Copilot

Topic：Analysis API and Error Contracts

- 前置：Day 11 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：复用 workflow 建最小 FastAPI analysis 接口与 health endpoint；薄封装共享编排，不新造整套后台。审批路径通过 run ID 与现有状态衔接。
- 如何验证：用 TestClient/fakes 测输入错误、成功、等待审批、拒绝和依赖失败；服务超时可见。
- 保存成果：api-contract; integration-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-12)

<a id="project-day-13"></a>

### Day 13 · 周三 10/21

15:00–16:30 · Risk Copilot

Topic：Tracing and Latency Baseline

- 前置：Day 12 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：记录 run_id、各节点耗时、model/prompt版本、tokens、重试和失败；日志不记录密钥。用固定请求测冷/热路径。
- 如何验证：先做 30 次离线服务实验，再按预算跑少量真实请求；两组分开报告样本数、p50/p95、错误率。小样本尾延迟只作描述。
- 保存成果：trace.jsonl; latency-baseline

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-13)

<a id="project-day-14"></a>

### Day 14 · 周四 10/22

15:00–16:30 · Risk Copilot

Topic：Measured Performance Improvement

- 前置：Day 13 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：根据昨日瓶颈只选一项：减少重复调用、限制 context、缓存静态 retrieval 或并发独立步骤。缓存 key 包含数据/index/model版本及权限范围。
- 如何验证：相同请求、环境、并发下对比延迟/成本/质量/失败率；标结果缓存命中与未命中。Streaming 只在已实现时测 TTFT。
- 保存成果：before-after-benchmark; tradeoff-note

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-14)

<a id="project-day-15"></a>

### Day 15 · 周五 10/23

15:00–16:30 · Risk Copilot

Topic：CI and Evaluation Gates

- 前置：Day 14 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：建立 PR workflow：ruff、unit tests、mock integration、tiny deterministic eval；真实付费 eval 独立手动触发。已知失败登记，新增回归阻断。
- 如何验证：故意引入一个临时失败验证 gate，再撤销；CI 不依赖个人 .env。记录 workflow 实际运行结果。
- 保存成果：ci-workflow; passing-run-reference

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-15)

## 第 4 周

<a id="project-day-16"></a>

### Day 16 · 周一 10/26

15:00–16:30 · Risk Copilot

Topic：Docker and Local Release

- 前置：Day 15 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：统一可用 Docker 构建入口，排除密钥/私人文件，锁依赖；复用当前 demo 界面和 API，定义明确启动命令。
- 如何验证：新环境启动镜像、health/smoke test；写明索引来源、模型配置、审批状态是否持久化。
- 保存成果：versioned-image; local-smoke-results

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-16)

<a id="project-day-17"></a>

### Day 17 · 周二 10/27

15:00–16:30 · Risk Copilot

Topic：AWS Deployment Configuration

- 前置：Day 16 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：以 ECS Fargate 单任务为默认演示目标：ECR 镜像、CloudWatch 日志、执行/应用 IAM role、最小网络规则；写部署与清理步骤。首版用只读打包小索引。
- 如何验证：核对容器端口、health、secret注入、权限和预计计费资源；今日先完成配置。无账号/预算则用本地演练保留待部署状态。
- 保存成果：task-definition; architecture; deployment-runbook

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-17)

<a id="project-day-18"></a>

### Day 18 · 周三 10/28

15:00–16:30 · Risk Copilot

Topic：AWS Deployment and Smoke Tests

- 前置：Day 17 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：在个人 AWS 环境部署受限访问的 demo，先 mock 模式再按预算验证真实请求；查看 CloudWatch 错误。单实例是演示配置。
- 如何验证：验证实际请求、故障日志和服务重启；本地审批状态若会丢失必须明确标限制，不能声称生产持久化/高可用。记录资源与关闭步骤。
- 保存成果：deployment-evidence; smoke-test-record

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-18)

<a id="project-day-19"></a>

### Day 19 · 周四 10/29

15:00–16:30 · Risk Copilot

Topic：Controlled CD and Rollback

- 前置：Day 18 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：CI 后增加手动 release workflow；GitHub OIDC 获取限定 AWS role，推送有版本镜像并更新 task，部署后 smoke。保留前一 task/image/config。
- 如何验证：演练回退至前版并重新 smoke；不只截图流水线成功。OIDC/IAM 未通先手动验证发布，CD 标未完成并进缓冲期。
- 保存成果：release-workflow; rollback-evidence

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-19)

<a id="project-day-20"></a>

### Day 20 · 周五 10/30

15:00–16:30 · Risk Copilot

Topic：Reproduction and Project Deep Dive

- 前置：Day 19 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：从干净环境运行最小演示与 eval，更新 README/CHANGELOG；整理一个RAG实验、一个真实故障、一个延迟取舍。
- 如何验证：数字指向原始结果；标本人设计验证/AI协助实现/现成组件；删除过期“已完成”描述。
- 保存成果：demo; evidence-index; remaining-gaps

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-20)

## 第 5 周

<a id="project-day-21"></a>

### Day 21 · 周一 11/2

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Snowflake Setup and Sample SQL

- 前置：Risk Copilot 的剩余缺口进入 backlog；本项目从独立数据环境开始。
- 今天改进：项目开始时启用个人 Snowflake 环境；用小型 TPC-H sample 练连接、JOIN、GROUP BY，设置独立 role、warehouse、auto-suspend 和查询超时。
- 如何验证：能自己解释一条多表查询及其结果粒度；记录执行环境和资源设置，不复制未知生产权限。
- 保存成果：setup.sql; sample-queries

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-21)

<a id="project-day-22"></a>

### Day 22 · 周二 11/3

15:00–16:30 · Financial Statement Analytics Assistant

Topic：SEC Ingestion and Raw Snapshots

- 前置：Day 21 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：限定 3 家同业公司、3 个已完成财政年度；选择 Revenue / Operating Income / Assets。获取 SEC Company Facts，保存原始快照、CIK、来源和下载时间；缺字段显式标识。
- 如何验证：按SEC访问要求限速并标识客户端；tiny fixture验证解析、重复下载可重复执行，原始数据不被清洗覆盖。
- 保存成果：raw-snapshots; ingestion-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-22)

<a id="project-day-23"></a>

### Day 23 · 周三 11/4

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Financial Data Model and Quality Checks

- 前置：Day 22 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：建 companies、filings、financial_facts；保留 accession、filed date、period、unit、tag。定义 Revenue/Operating Margin 的年度口径和修订选择视图。
- 如何验证：唯一键/单位/期间检查用查询测试，不依赖未强制执行的声明约束；duration与instant指标分开处理。
- 保存成果：schema.sql; metric-definitions; quality-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-23)

<a id="project-day-24"></a>

### Day 24 · 周四 11/5

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Reference SQL and Financial Analytics

- 前置：Day 23 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：自己写年度趋势、margin计算、公司排名、同比变化查询，练CTE/JOIN/LAG；按确定的最新已申报口径计算。
- 如何验证：手工核对小样本，防止JOIN膨胀；NULL不当零，零分母有显式行为；本项目不冒充point-in-time回测数据。
- 保存成果：reference-queries; expected-results

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-24)

<a id="project-day-25"></a>

### Day 25 · 周五 11/6

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Question Dataset and SQL Ground Truth

- 前置：Day 24 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：建立20个问题：12 development、8 held-out，包括简单查询、时间比较、含糊口径和不支持请求；参考SQL来自上一日的正确逻辑。
- 如何验证：拆分相近问法防泄漏；预期结果带排序/数值容差/空结果规则；held-out答案不放prompt。
- 保存成果：question-dataset; answer-oracle

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-25)

## 第 6 周

<a id="project-day-26"></a>

### Day 26 · 周一 11/9

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Text-to-SQL and Semantic Context

- 前置：Day 25 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：首版复用熟悉的LLM API，输入允许的schema、指标口径与development示例，生成结构化query/clarification；通过Snowflake connector执行。
- 如何验证：能完成一条问句→SQL→表格链路；Cortex Analyst只作后续对照，避免同时维护两个生成方案。
- 保存成果：minimal-assistant; prompt-version

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-26)

<a id="project-day-27"></a>

### Day 27 · 周二 11/10

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Query Controls and Clarification

- 前置：Day 26 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：用Snowflake只读role限制到批准views，加statement timeout/输出行数限制/单语句检查；含糊Fiscal Year/指标定义先澄清。
- 如何验证：尝试写操作、非允许表、多语句和高成本请求；权限由DB执行，SQL文本检查不是唯一防线。
- 保存成果：query-control-tests; clarification-cases

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-27)

<a id="project-day-28"></a>

### Day 28 · 周三 11/11

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Text-to-SQL Evaluation

- 前置：Day 27 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：在development修明确错误后锁prompt，跑held-out；比较执行结果而非SQL字符串。保存query id、生成SQL、错误类型与成本/延迟。
- 如何验证：检查result accuracy、clarification/refusal、无数据；评估不赢baseline也报告。8题仅是小型验证，不宣称市场级准确率。
- 保存成果：eval-report; failure-analysis

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-28)

<a id="project-day-29"></a>

### Day 29 · 周四 11/12

15:00–16:30 · Financial Statement Analytics Assistant

Topic：Snowflake Query Performance

- 前置：Day 28 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：选一条扫描量较大的查询读Query Profile，比较过滤/预聚合或修正JOIN前后的结果、扫描量与耗时，记录warehouse和cache状态。
- 如何验证：结果保持一致；多次重复并区分result cache，不直接把缓存加速归因SQL优化；练实际query profiling。
- 保存成果：query-profile; performance-note

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-29)

<a id="project-day-30"></a>

### Day 30 · 周五 11/13

15:00–16:30 · Financial Statement Analytics Assistant

Topic：CI and Reproducible Demo

- 前置：Day 29 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：加离线parser/SQL fixture/guardrail tests到CI；真实Snowflake integration与LLM eval手动触发。整理小型UI或CLI及建库/导入/运行命令。
- 如何验证：从快照重建数据，演示正确查询、澄清和拒绝三条路径；保存录屏与Snowflake query证据。
- 保存成果：ci; demo; data-lineage; README

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-30)

## 第 7 周

<a id="project-day-31"></a>

### Day 31 · 周一 11/16

15:00–16:30 · Investment Research Workbench

Topic：Research Contract and Market Data

- 前置：第二项目的 Snowflake 不作为运行依赖；复用 CI、日志与评估方法。
- 今天改进：限定2只流动ETF日频、固定数据快照、一个Momentum规则和Volatility Targeting变体；定义时间区间、调整价用途、信号/执行时点和成本参数。
- 如何验证：核对许可/缺失/重复/时区；signal只用当时可得信息。保存fixture与data hash，声明小样本不代表投资价值。
- 保存成果：research-contract; data-snapshot

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-31)

<a id="project-day-32"></a>

### Day 32 · 周二 11/17

15:00–16:30 · Investment Research Workbench

Topic：Deterministic Research Tools

- 前置：Day 31 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：基于同一价格数据实现两个受限策略工具；shift信号后产生下一期仓位，成本按换手约定计算；输出return/drawdown/turnover。
- 如何验证：用手算tiny series测零信号、常价格、成本、错位；明确close-to-close执行简化，不宣称真实可成交。
- 保存成果：research-library; reference-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-32)

<a id="project-day-33"></a>

### Day 33 · 周三 11/18

15:00–16:30 · Investment Research Workbench

Topic：Experiment API and Persistent Runs

- 前置：Day 32 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：用FastAPI + PostgreSQL做submit/status/results，run存配置hash/data/code版本。服务端生成canonical experiment identity，保存幂等请求和任务outbox记录。
- 如何验证：重复提交复用run；API重启后状态仍在；run与待投递任务同事务，先用本地数据库和fake queue。
- 保存成果：api; run-schema; persistence-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-33)

<a id="project-day-34"></a>

### Day 34 · 周四 11/19

15:00–16:30 · Investment Research Workbench

Topic：Queue and Worker Execution

- 前置：Day 33 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：用Docker Compose运行API/PostgreSQL/Redis与独立Worker，选择现成队列库完成后台任务；outbox可重投，任务接收时检查run状态和claim。
- 如何验证：HTTP先返回run ID，Worker写result后更新终态；可重复投递但结果幂等。LLM仍未加入，先验证执行链路。
- 保存成果：compose-stack; async-demo

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-34)

<a id="project-day-35"></a>

### Day 35 · 周五 11/20

15:00–16:30 · Investment Research Workbench

Topic：Retries, Timeouts and Worker Failure

- 前置：Day 34 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：给任务有限retry/timeout、claim lease与唯一结果约束；模拟worker中断、重投和重复delivery。限制并发，队列满时拒绝或等待有明确行为。
- 如何验证：确认已提交结果不会重复生效、超时有终态、lease过期可恢复；单Worker是故障实验，不声称验证大规模吞吐。
- 保存成果：failure-tests; recovery-log

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-35)

## 第 8 周

<a id="project-day-36"></a>

### Day 36 · 周一 11/23

15:00–16:30 · Investment Research Workbench

Topic：AI Experiment Planning and Tool Calling

- 前置：Day 35 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：LLM把研究问题转成受限ExperimentConfig或澄清，不执行任意生成代码；调用submit/status/results，依据保存结果解释对比。
- 如何验证：非法资产/未来日期/未知策略被拒绝或澄清；摘要数值来自结果文件；记录实际调用链。
- 保存成果：ai-interface; tool-contracts

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-36)

<a id="project-day-37"></a>

### Day 37 · 周二 11/24

15:00–16:30 · Investment Research Workbench

Topic：Workflow Evaluation and Observability

- 前置：Day 36 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：建立10条小型任务集，测配置正确性、tool选择、澄清与数值忠实度；分别记录排队时间、执行时间、LLM时间和错误。
- 如何验证：同config/data版本结果可重现；比较无LLM直接配置基线。故意给失败任务，摘要不可捏造成功。
- 保存成果：workflow-evals; run-traces; reproducibility-check

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-37)

<a id="project-day-38"></a>

### Day 38 · 周三 11/25

15:00–16:30 · Investment Research Workbench

Topic：CI, Container Release and Demo

- 前置：Day 37 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：加research unit、mock LLM、Compose integration到CI，发布版本化本地容器；录正常实验、含糊请求、worker故障恢复。
- 如何验证：干净环境运行一条命令重建；记录单机与生产分布式部署差距。AWS队列/多Worker作为可选扩展。
- 保存成果：ci; demo; runbook; limitations

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-38)

<a id="project-day-39"></a>

### Day 39 · 周四 11/26

15:00–16:30 · Portfolio Review

Topic：Evidence Audit and Cross-Project Reproduction

- 前置：依据上述项目的真实完成状态。
- 今天改进：核对三个项目的README、代码版本、eval、测试和demo；各选一个真实失败和取舍。打通证据索引，不新加功能。
- 如何验证：项目陈述逐条能找到代码或实验；把缺少线上验证与未实现功能明确标注。
- 保存成果：portfolio-evidence-index; demo-backups

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-39)

<a id="project-day-40"></a>

### Day 40 · 周五 11/27

15:00–16:30 · Portfolio Review

Topic：Feature Freeze and Interview Deep Dive

- 前置：依据上述项目的真实完成状态。
- 今天改进：冻结三个可演示范围，练讲用户问题→设计→失败→验证→限制；用已有工程经验连接项目决策，明确AI贡献边界。
- 如何验证：抽问一段AI代码，自己解释并做反例；每个项目都有可运行入口和诚实的完成状态。
- 保存成果：frozen-versions; deep-dive-notes; backlog

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-40)

## 缓冲周

<a id="project-day-41"></a>

### Day 41 · 周一 11/30

15:00–16:30 · Buffer

Topic：Risk Copilot: Correctness Remediation

- 前置：依据上述项目的真实完成状态。
- 今天改进：优先处理影响风险数值或流程阻断的剩余问题；复现后小范围修复，不新增模型/框架。
- 如何验证：重跑相关数值与失败路径回归。
- 保存成果：fix-evidence

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-41)

<a id="project-day-42"></a>

### Day 42 · 周二 12/1

15:00–16:30 · Buffer

Topic：AWS and CD: Completion or Recovery Drill

- 前置：依据上述项目的真实完成状态。
- 今天改进：补足未完成AWS部署/OIDC/release验证；已完成则演练重启和rollback、检查资源清理。
- 如何验证：保存真实运行证据；无账户则保留未部署标识。
- 保存成果：deployment-status; rollback-log

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-42)

<a id="project-day-43"></a>

### Day 43 · 周三 12/2

15:00–16:30 · Buffer

Topic：Snowflake: Data and SQL Remediation

- 前置：依据上述项目的真实完成状态。
- 今天改进：修复最重要的期间/单位/重复行或SQL错误；修正后使用新验证问题，避免把反复调试的held-out继续称独立测试。
- 如何验证：核对参考结果与权限，重跑integration。
- 保存成果：updated-eval; data-checks

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-43)

<a id="project-day-44"></a>

### Day 44 · 周四 12/3

15:00–16:30 · Buffer

Topic：Research Workbench: Failure Recovery

- 前置：依据上述项目的真实完成状态。
- 今天改进：修复outbox/claim/worker中断最弱路径；复测重复投递和幂等结果。
- 如何验证：多次故障实验有可复查日志。
- 保存成果：recovery-evidence

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-44)

<a id="project-day-45"></a>

### Day 45 · 周五 12/4

15:00–16:30 · Buffer

Topic：Portfolio: Final Reproduction and Remaining Gaps

- 前置：依据上述项目的真实完成状态。
- 今天改进：最终核对demo和证据，整理后续迭代顺序。没有阻塞缺陷时用于深挖，不为了凑功能增加范围。
- 如何验证：说明完成、仅设计、未验证各是什么；周末不补。
- 保存成果：final-status; next-iteration

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-45)

