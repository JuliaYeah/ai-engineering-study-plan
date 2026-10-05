# 三项目实践路线：从当前代码到可验证的作品

更新日期：2026-10-04。按已讨论的项目方向与工程要求重排；这是未来学习与交付计划，不是项目完成报告。

[每日总时间表](AI_ENGINEER_TRANSITION_PLAN.md) · [学习执行指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md)

## 已实施的学习资料更新

已按确认方案生成 [Topic Library](Study%20topics/index.html)、[ML notebooks](notebook/README.md) 与 General & AI System Design讲义，并同步45个学习日。所有项目任务仍为未来实践，不把讲义生成当作功能完成。

ML时段逐步完成基础实验、时间验证和Volatility Forecasting；Project时段负责工程整合。主计划General 16次（12小时）、AI 24次（18小时）；缓冲期General 2次、AI 3次。

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

- 用户：研究员希望减少重复实验操作并保留可审计的研究结果；2只ETF日频、固定数据快照、一个确定性研究baseline，以及Historical Volatility + Ridge的五日Volatility Forecasting。更多策略与Tree Model为可选。
- ML前置：[Volatility Forecasting notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)。未来五个交易日RMS realized volatility，统一sqrt(252 × mean(return²))年化；特征仅使用t及之前，label在t+5才可用。训练按label_end清除边界，walk-forward选择alpha后冻结最终test。
- 指标：相同日期MAE/RMSE及baseline差值、时期与资产切片；保存data/code/model版本。模型不赢baseline也如实报告，不等同于策略盈利。
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
- 今天改进：Freeze ExperimentConfig for two assets, a five-day forecast horizon, feature timing, baseline and Ridge. Reuse the ML notebook and record data/code versions; the synthetic fixture is not market-performance evidence.
- 如何验证：核对许可/缺失/重复/时区；signal只用当时可得信息。保存fixture与data hash，声明小样本不代表投资价值。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：research-contract; data-snapshot

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-31)

<a id="project-day-32"></a>

### Day 32 · 周二 11/17

15:00–16:30 · Investment Research Workbench

Topic：Deterministic Research Tools

- 前置：Day 31 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Extract train/evaluate/predict functions from the completed ML notebook. Preserve train-only preprocessing and label_end purging; test baseline and Ridge on identical prediction dates.
- 如何验证：用手算tiny series测零信号、常价格、成本、错位；明确close-to-close执行简化，不宣称真实可成交。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：research-library; reference-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-32)

<a id="project-day-33"></a>

### Day 33 · 周三 11/18

15:00–16:30 · Investment Research Workbench

Topic：Experiment API and Persistent Runs

- 前置：Day 32 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Persist experiment configuration, model artifact reference, metrics and predictions with data/code/model versions. Insert run and outbox atomically; unique keys prevent duplicate logical publication.
- 如何验证：重复提交复用run；API重启后状态仍在；run与待投递任务同事务，先用本地数据库和fake queue。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：api; run-schema; persistence-tests

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-33)

<a id="project-day-34"></a>

### Day 34 · 周四 11/19

15:00–16:30 · Investment Research Workbench

Topic：Queue and Worker Execution

- 前置：Day 33 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Run bounded train/evaluate/predict jobs in a worker. Retain the completed notebook outputs as the numerical reference; persist status and artifacts before acknowledgment.
- 如何验证：HTTP先返回run ID，Worker写result后更新终态；可重复投递但结果幂等。LLM仍未加入，先验证执行链路。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：compose-stack; async-demo

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-34)

<a id="project-day-35"></a>

### Day 35 · 周五 11/20

15:00–16:30 · Investment Research Workbench

Topic：Retries, Timeouts and Worker Failure

- 前置：Day 34 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Inject duplicate delivery and worker crashes around result commit. Verify no duplicate published predictions; reject unavailable labels and invalid feature schemas.
- 如何验证：确认已提交结果不会重复生效、超时有终态、lease过期可恢复；单Worker是故障实验，不声称验证大规模吞吐。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：failure-tests; recovery-log

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-35)

## 第 8 周

<a id="project-day-36"></a>

### Day 36 · 周一 11/23

15:00–16:30 · Investment Research Workbench

Topic：AI Experiment Planning and Tool Calling

- 前置：Day 35 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Expose restricted train/evaluate/predict and submit/status/results tools. Validate assets, dates, model type and feature schema; the LLM explains stored results and never computes or invents metrics.
- 如何验证：非法资产/未来日期/未知策略被拒绝或澄清；摘要数值来自结果文件；记录实际调用链。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：ai-interface; tool-contracts

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-36)

<a id="project-day-37"></a>

### Day 37 · 周二 11/24

15:00–16:30 · Investment Research Workbench

Topic：Workflow Evaluation and Observability

- 前置：Day 36 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Evaluate ten workflow cases plus ML baseline/Ridge MAE and RMSE on paired dates. Record delayed-label behavior, asset/regime slices, queue/worker/LLM latency and real failure outcomes.
- 如何验证：同config/data版本结果可重现；比较无LLM直接配置基线。故意给失败任务，摘要不可捏造成功。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
- 保存成果：workflow-evals; run-traces; reproducibility-check

[返回当天总时间表](AI_ENGINEER_TRANSITION_PLAN.md#day-37)

<a id="project-day-38"></a>

### Day 38 · 周三 11/25

15:00–16:30 · Investment Research Workbench

Topic：CI, Container Release and Demo

- 前置：Day 37 的最小输出；未完成先延续该任务，不同时堆新功能。
- 今天改进：Add numerical timing assertions, mock-tool tests and Compose integration to CI. Demonstrate training, prediction, honest baseline comparison and worker recovery; document synthetic versus real-data status.
- 如何验证：干净环境运行一条命令重建；记录单机与生产分布式部署差距。AWS队列/多Worker作为可选扩展。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。
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

