# 金融转 Applied AI：工作日八小时学习计划

<!-- quantvault-intro -->

## QuantVault Practice

只安排Regression与Machine Learning，按已有Pro访问权限执行。2026-10-04实时目录核对：Regression 170题、Machine Learning 94题，共264个不同题号；网页搜索抓取曾显示Regression 171题，因此以实时目录为准。

本轮选择47道核心题，分配到45个学习日，重复题用于分阶段练习和复习；其余217题作为扩展题库，不要求在当前45分钟ML时段内全部做完。保留现有Python、SQL与LeetCode安排，不加入QuantVault Coding或Optimization分类。

讲义与先修、Notebook及QuantVault共享13:30–14:15的45分钟：入门日20+15+10，初学日15+20+10，复习日10+15+20。网站Coding类型的ML题只练指定的ML片段或方案，不另加算法刷题。

[全部日期与具体题目](AI_ENGINEER_QUANTVAULT_PLAN.md) · [HTML日期索引](AI_ENGINEER_QUANTVAULT_PLAN.html)。

<!-- /quantvault-intro -->


623题均已附英文 Interview Answer、Explanation 和 Follow-up。答案位于当天原题下方；HTML先展开口述稿，再按需展开详解、追问与参考代码。未确认的个人经历与指标仍需按真实情况补充；条件不完整的原题保留说明，不虚构题目。每日学习时长不变。

2026 年 10 月 5 日至 11 月 27 日为八周主计划；11 月 30 日至 12 月 4 日为工作日缓冲期。时区：America/New_York。

周一至周五每天学习 8 小时，午休不计入；周六、周日休息，不安排网课或其他学习。主计划 40 天、320 小时；使用完整缓冲期则共 45 天、360 小时。不加入找岗位、投递或简历修改任务。

## 项目计划更新

[三项目实践路线](AI_ENGINEER_PROJECT_ROADMAP.md) / [HTML版](AI_ENGINEER_PROJECT_ROADMAP.html)：Day 01–20 Risk Copilot（30小时）；Day 21–30 Financial Statement Analytics Assistant（15小时）；Day 31–38 Investment Research Workbench（12小时）；Day 39–40复现与收尾（3小时）。另有7.5小时缓冲。每天项目时段仍为15:00–16:30，任务包含改进、验证与成果。

已实施学习资料更新：ML使用短讲义与可运行notebook；General & AI System Design使用成对讲解/练习；第三项目整合Volatility Forecasting。这里的“实施”指学习材料与计划已生成，不表示项目功能已经完成。

## 每日学习方法

配套 [学习执行指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md) / [HTML版](AI_ENGINEER_DAILY_LEARNING_GUIDE.html) 展开每天的ML、System Design、Project练习与结果。

## Topic 资料与日期索引

[打开可搜索的 Topic Library](Study%20topics/index.html)。每页列出首次学习日和明确复习日；同一天的资料是对应时段的候选入口，不要求另外逐页阅读。

## Topic 总览

下面汇总的是日程中明确安排的主题，不把“上完课程”自动等同于已经掌握。基础理论、架构和专项术语以理解与面试表达为主；项目栏是开发或实验主题，并非承诺每天完成整个功能。

### Python 与编码

[Hash Maps](Study%20topics/hash-maps.html)（[Day 01](#day-01)）; [Arrays and Strings](Study%20topics/arrays-and-strings.html)（[Day 03](#day-03)）; [Two Pointers](Study%20topics/two-pointers.html)（[Day 03](#day-03)）; [Sorting](Study%20topics/sorting.html)（[Day 05](#day-05)）; [Binary Search](Study%20topics/binary-search.html)（[Day 05](#day-05)）; [Sliding Window](Study%20topics/sliding-window.html)（[Day 08](#day-08)）; [Prefix Sums](Study%20topics/prefix-sums.html)（[Day 08](#day-08)）; [Stacks](Study%20topics/stacks.html)（[Day 10](#day-10)）; [Queues](Study%20topics/queues.html)（[Day 10](#day-10)）; [Heaps](Study%20topics/heaps.html)（[Day 11](#day-11)）; [Linked Lists](Study%20topics/linked-lists.html)（[Day 13](#day-13)）; [LRU Cache](Study%20topics/lru-cache.html)（[Day 13](#day-13)）; [Trees](Study%20topics/trees.html)（[Day 16](#day-16)）; [Recursion](Study%20topics/recursion.html)（[Day 16](#day-16)）; [BFS](Study%20topics/bfs.html)（[Day 15](#day-15)）; [DFS](Study%20topics/dfs.html)（[Day 15](#day-15)）; [Complexity Analysis](Study%20topics/complexity-analysis.html)（[Day 05](#day-05)）; [Key-Value Store](Study%20topics/key-value-store.html)（[Day 18](#day-18)）; [TTL](Study%20topics/ttl.html)（[Day 18](#day-18)）; [API Clients](Study%20topics/api-clients.html)（[Day 21](#day-21)）; [Rate Limiter](Study%20topics/rate-limiter.html)（[Day 25](#day-25)）; [Crawler](Study%20topics/crawler.html)（[Day 26](#day-26)）; [Async](Study%20topics/async.html)（[Day 23](#day-23)）; [Concurrency](Study%20topics/concurrency.html)（[Day 23](#day-23)）; [Parallelism](Study%20topics/parallelism.html)（[Day 23](#day-23)）; [GIL](Study%20topics/gil.html)（[Day 23](#day-23)）; [Race Conditions](Study%20topics/race-conditions.html)（[Day 23](#day-23)）; [Vectorization](Study%20topics/vectorization.html)（[Day 28](#day-28)）; [Profiling](Study%20topics/profiling.html)（[Day 28](#day-28)）; [Debugging](Study%20topics/debugging.html)（[Day 20](#day-20)）; [Refactoring](Study%20topics/refactoring.html)（[Day 20](#day-20)）; [Code Review](Study%20topics/code-review.html)（[Day 20](#day-20)）; [NumPy Logistic Regression](Study%20topics/numpy-logistic-regression.html)（[Day 35](#day-35)）.

### SQL 与数据库

[SELECT](Study%20topics/select.html)（[Day 02](#day-02)）; [WHERE](Study%20topics/where.html)（[Day 02](#day-02)）; [ORDER BY](Study%20topics/order-by.html)（[Day 02](#day-02)）; [LIMIT](Study%20topics/limit.html)（[Day 02](#day-02)）; [NULL](Study%20topics/null.html)（[Day 02](#day-02)）; [GROUP BY](Study%20topics/group-by.html)（[Day 04](#day-04)）; [HAVING](Study%20topics/having.html)（[Day 04](#day-04)）; [CASE](Study%20topics/case.html)（[Day 04](#day-04)）; [JOINs](Study%20topics/joins.html)（[Day 07](#day-07)）; [Subqueries](Study%20topics/subqueries.html)（[Day 09](#day-09)）; [CTEs](Study%20topics/ctes.html)（[Day 09](#day-09)）; [EXISTS](Study%20topics/exists.html)（[Day 09](#day-09)）; [Window Functions](Study%20topics/window-functions.html)（[Day 12](#day-12)）; [ROW_NUMBER](Study%20topics/row-number.html)（[Day 12](#day-12)）; [RANK](Study%20topics/rank.html)（[Day 12](#day-12)）; [DENSE_RANK](Study%20topics/dense-rank.html)（[Day 12](#day-12)）; [LAG](Study%20topics/lag.html)（[Day 14](#day-14)）; [LEAD](Study%20topics/lead.html)（[Day 14](#day-14)）; [Rolling Aggregations](Study%20topics/rolling-aggregations.html)（[Day 14](#day-14)）; [Date Queries](Study%20topics/date-queries.html)（[Day 17](#day-17)）; [Transactions](Study%20topics/transactions.html)（[Day 19](#day-19)）; [Constraints](Study%20topics/constraints.html)（[Day 19](#day-19)）; [Parameterized Queries](Study%20topics/parameterized-queries.html)（[Day 19](#day-19)）; [PostgreSQL Schema Design](Study%20topics/postgresql-schema-design.html)（[Day 22](#day-22)）; [Primary and Foreign Keys](Study%20topics/primary-and-foreign-keys.html)（[Day 22](#day-22)）; [Indexes](Study%20topics/indexes.html)（[Day 24](#day-24)）; [EXPLAIN](Study%20topics/explain.html)（[Day 24](#day-24)）; [Query Optimization](Study%20topics/query-optimization.html)（[Day 24](#day-24)）; [Run Analytics](Study%20topics/run-analytics.html)（[Day 27](#day-27)）; [Percentiles](Study%20topics/percentiles.html)（[Day 27](#day-27)）; [Financial Analytics](Study%20topics/financial-analytics.html)（[Day 34](#day-34)）.

### ML 与金融验证

[Supervised and Unsupervised Learning](Study%20topics/supervised-and-unsupervised-learning.html)（[Day 02](#day-02)）; [Train / Validation / Test Split](Study%20topics/train-validation-test-split.html)（[Day 01](#day-01)）; [Data Leakage](Study%20topics/data-leakage.html)（[Day 03](#day-03)）; [Bias-Variance](Study%20topics/bias-variance.html)（[Day 05](#day-05)）; [Overfitting](Study%20topics/overfitting.html)（[Day 05](#day-05)）; [Regularization](Study%20topics/regularization.html)（[Day 05](#day-05)）; [Scaling](Study%20topics/scaling.html)（[Day 03](#day-03)）; [Linear Regression](Study%20topics/linear-regression.html)（[Day 05](#day-05)）; [Logistic Regression](Study%20topics/logistic-regression.html)（[Day 07](#day-07)）; [Decision Trees](Study%20topics/decision-trees.html)（[Day 11](#day-11)）; [Random Forests](Study%20topics/random-forests.html)（[Day 11](#day-11)）; [Gradient Boosting](Study%20topics/gradient-boosting.html)（[Day 11](#day-11)）; [scikit-learn Pipelines](Study%20topics/scikit-learn-pipelines.html)（[Day 03](#day-03)）; [Cross-Validation](Study%20topics/cross-validation.html)（[Day 17](#day-17)）; [Hyperparameter Tuning](Study%20topics/hyperparameter-tuning.html)（[Day 17](#day-17)）; [Feature Engineering](Study%20topics/feature-engineering.html)（[Day 19](#day-19)）; [Class Imbalance](Study%20topics/class-imbalance.html)（[Day 07](#day-07)）; [MAE](Study%20topics/mae.html)（[Day 04](#day-04)）; [RMSE](Study%20topics/rmse.html)（[Day 04](#day-04)）; [Precision](Study%20topics/precision.html)（[Day 07](#day-07)）; [Recall](Study%20topics/recall.html)（[Day 07](#day-07)）; [F1](Study%20topics/f1.html)（[Day 07](#day-07)）; [PR-AUC](Study%20topics/pr-auc.html)（[Day 09](#day-09)）; [ROC-AUC](Study%20topics/roc-auc.html)（[Day 09](#day-09)）; [Calibration](Study%20topics/calibration.html)（[Day 09](#day-09)）; [Interpretability](Study%20topics/interpretability.html)（[Day 19](#day-19)）; [Feature Importance](Study%20topics/feature-importance.html)（[Day 19](#day-19)）; [Time-Series Splits](Study%20topics/time-series-splits.html)（[Day 21](#day-21)）; [Walk-Forward Validation](Study%20topics/walk-forward-validation.html)（[Day 21](#day-21)）; [Temporal Leakage](Study%20topics/temporal-leakage.html)（[Day 21](#day-21)）; [Forecast Horizons](Study%20topics/forecast-horizons.html)（[Day 21](#day-21)）; [Regime Changes](Study%20topics/regime-changes.html)（[Day 32](#day-32)）; [Volatility Forecasting](Study%20topics/volatility-forecasting.html)（[Day 25](#day-25)）; [Out-of-Sample Evaluation](Study%20topics/out-of-sample-evaluation.html)（[Day 25](#day-25)）; [Reproducibility](Study%20topics/reproducibility.html)（[Day 36](#day-36)）; [Statistical Uncertainty](Study%20topics/statistical-uncertainty.html)（[Day 32](#day-32)）; [Prediction Intervals](Study%20topics/prediction-intervals.html)（[Day 33](#day-33)）; [Drift](Study%20topics/drift.html)（[Day 42](#day-42)）; [Retraining](Study%20topics/retraining.html)（[Day 42](#day-42)）; [Model Versioning](Study%20topics/model-versioning.html)（[Day 36](#day-36)）; [Rollback](Study%20topics/rollback.html)（[Day 19](#day-19)）.

### LLM 基础与方案取舍

[Tokenization](Study%20topics/tokenization.html)（[Day 01](#day-01)）; [Next-Token Prediction](Study%20topics/next-token-prediction.html)（[Day 01](#day-01)）; [Context Windows](Study%20topics/context-windows.html)（[Day 01](#day-01)）; [Temperature](Study%20topics/temperature.html)（[Day 01](#day-01)）; [Top-p](Study%20topics/top-p.html)（[Day 01](#day-01)）; [Transformer and Attention Fundamentals](Study%20topics/transformer-and-attention-fundamentals.html)（[Day 01](#day-01)）; [LLM Limitations](Study%20topics/llm-limitations.html)（[Day 01](#day-01)）; [Model Selection](Study%20topics/model-selection.html)（[Day 17](#day-17)）; [Prompt Engineering](Study%20topics/prompt-engineering.html)（[Day 02](#day-02)）; [Few-Shot Examples](Study%20topics/few-shot-examples.html)（[Day 02](#day-02)）; [Prompt Versioning](Study%20topics/prompt-versioning.html)（[Day 02](#day-02)）; [Structured Outputs](Study%20topics/structured-outputs.html)（[Day 03](#day-03)）; [Pydantic](Study%20topics/pydantic.html)（[Day 03](#day-03)）; [JSON Recovery](Study%20topics/json-recovery.html)（[Day 03](#day-03)）; [Prompting vs. RAG vs. Fine-Tuning](Study%20topics/prompting-vs-rag-vs-fine-tuning.html)（[Day 04](#day-04)）; [LoRA](Study%20topics/lora.html)（[Day 04](#day-04)）; [Quantization](Study%20topics/quantization.html)（[Day 04](#day-04)）.

### RAG、Agents 与评估

[Embeddings](Study%20topics/embeddings.html)（[Day 05](#day-05)）; [Vector Similarity](Study%20topics/vector-similarity.html)（[Day 05](#day-05)）; [Chunking](Study%20topics/chunking.html)（[Day 06](#day-06)）; [Metadata](Study%20topics/metadata.html)（[Day 06](#day-06)）; [Context Budgets](Study%20topics/context-budgets.html)（[Day 06](#day-06)）; [Keyword / Vector / Hybrid Search](Study%20topics/keyword-vector-hybrid-search.html)（[Day 07](#day-07)）; [MMR](Study%20topics/mmr.html)（[Day 08](#day-08)）; [Reranking](Study%20topics/reranking.html)（[Day 08](#day-08)）; [Query Reformulation](Study%20topics/query-reformulation.html)（[Day 08](#day-08)）; [Citations](Study%20topics/citations.html)（[Day 11](#day-11)）; [Golden Datasets](Study%20topics/golden-datasets.html)（[Day 04](#day-04)）; [Hard Negatives](Study%20topics/hard-negatives.html)（[Day 04](#day-04)）; [Held-Out Evaluation](Study%20topics/held-out-evaluation.html)（[Day 08](#day-08)）; [Recall@k](Study%20topics/recall-k.html)（[Day 05](#day-05)）; [Precision@k](Study%20topics/precision-k.html)（[Day 05](#day-05)）; [MRR](Study%20topics/mrr.html)（[Day 05](#day-05)）; [nDCG](Study%20topics/ndcg.html)（[Day 05](#day-05)）; [Redundancy](Study%20topics/redundancy.html)（[Day 08](#day-08)）; [Groundedness](Study%20topics/groundedness.html)（[Day 11](#day-11)）; [Hallucination](Study%20topics/hallucination.html)（[Day 11](#day-11)）; [LLM-as-Judge](Study%20topics/llm-as-judge.html)（[Day 11](#day-11)）; [Human Calibration](Study%20topics/human-calibration.html)（[Day 11](#day-11)）; [Judge Bias](Study%20topics/judge-bias.html)（[Day 11](#day-11)）; [Offline / Regression Evals](Study%20topics/offline-regression-evals.html)（[Day 15](#day-15)）; [Online Feedback](Study%20topics/online-feedback.html)（[Day 34](#day-34)）; [Agents vs. Workflows](Study%20topics/agents-vs-workflows.html)（[Day 09](#day-09)）; [Function Calling](Study%20topics/function-calling.html)（[Day 09](#day-09)）; [Tool Schemas](Study%20topics/tool-schemas.html)（[Day 09](#day-09)）; [Tool Selection Evaluation](Study%20topics/tool-selection-evaluation.html)（[Day 37](#day-37)）; [Agent State](Study%20topics/agent-state.html)（[Day 10](#day-10)）; [Memory](Study%20topics/memory.html)（[Day 27](#day-27)）; [LangGraph](Study%20topics/langgraph.html)（[Day 10](#day-10)）; [Termination Conditions](Study%20topics/termination-conditions.html)（[Day 09](#day-09)）; [MCP Fundamentals](Study%20topics/mcp-fundamentals.html)（[Day 28](#day-28)）.

### 服务工程、成本与安全

[REST APIs](Study%20topics/rest-apis.html)（[Day 12](#day-12)）; [FastAPI](Study%20topics/fastapi.html)（[Day 12](#day-12)）; [API Tests](Study%20topics/api-tests.html)（[Day 12](#day-12)）; [Queues](Study%20topics/queues.html)（[Day 10](#day-10)）; [Workers](Study%20topics/workers.html)（[Day 34](#day-34)）; [Idempotency](Study%20topics/idempotency.html)（[Day 11](#day-11)）; [Timeouts](Study%20topics/timeouts.html)（[Day 09](#day-09)）; [Backoff](Study%20topics/backoff.html)（[Day 09](#day-09)）; [Rate Limiting](Study%20topics/rate-limiting.html)（[Day 09](#day-09)）; [Backpressure](Study%20topics/backpressure.html)（[Day 34](#day-34)）; [Docker](Study%20topics/docker.html)（[Day 16](#day-16)）; [CI/CD](Study%20topics/ci-cd.html)（[Day 15](#day-15)）; [Cloud Fundamentals](Study%20topics/cloud-fundamentals.html)（[Day 17](#day-17)）; [IAM](Study%20topics/iam.html)（[Day 17](#day-17)）; [Networking](Study%20topics/networking.html)（[Day 17](#day-17)）; [Capacity Planning](Study%20topics/capacity-planning.html)（[Day 09](#day-09)）; [Load Testing](Study%20topics/load-testing.html)（[Day 13](#day-13)）; [Logs](Study%20topics/logs.html)（[Day 13](#day-13)）; [Traces](Study%20topics/traces.html)（[Day 13](#day-13)）; [p50 / p95](Study%20topics/p50-p95.html)（[Day 13](#day-13)）; [TTFT](Study%20topics/ttft.html)（[Day 13](#day-13)）; [Streaming](Study%20topics/streaming.html)（[Day 35](#day-35)）; [Token Usage](Study%20topics/token-usage.html)（[Day 35](#day-35)）; [Caching](Study%20topics/caching.html)（[Day 05](#day-05)）; [Semantic Caching](Study%20topics/semantic-caching.html)（[Day 35](#day-35)）; [Freshness](Study%20topics/freshness.html)（[Day 05](#day-05)）; [Model Routing](Study%20topics/model-routing.html)（[Day 35](#day-35)）; [Cost-Quality Trade-offs](Study%20topics/cost-quality-trade-offs.html)（[Day 35](#day-35)）; [Human-in-the-Loop](Study%20topics/human-in-the-loop.html)（[Day 10](#day-10)）; [Approval Audit Trail](Study%20topics/approval-audit-trail.html)（[Day 10](#day-10)）; [Prompt Injection](Study%20topics/prompt-injection.html)（[Day 37](#day-37)）; [Tool Sandboxing](Study%20topics/tool-sandboxing.html)（[Day 37](#day-37)）; [PII](Study%20topics/pii.html)（[Day 37](#day-37)）; [Access Control](Study%20topics/access-control.html)（[Day 21](#day-21)）; [Tenant Isolation](Study%20topics/tenant-isolation.html)（[Day 37](#day-37)）; [Secrets](Study%20topics/secrets.html)（[Day 17](#day-17)）; [Fail-Open vs. Fail-Closed](Study%20topics/fail-open-vs-fail-closed.html)（[Day 09](#day-09)）; [Graceful Degradation](Study%20topics/graceful-degradation.html)（[Day 35](#day-35)）.

### 项目与面试表达

[Risk Copilot](Study%20topics/risk-copilot.html)（[Day 01](#day-01)）; [Financial Statement Analytics Assistant](Study%20topics/financial-statement-analytics-assistant.html)（[Day 21](#day-21)）; [Investment Research Workbench](Study%20topics/investment-research-workbench.html)（[Day 31](#day-31)）; [Snowflake](Study%20topics/snowflake.html)（[Day 21](#day-21)）; [SQL](Study%20topics/sql.html)（[Day 02](#day-02)）; [Text-to-SQL Evaluation](Study%20topics/text-to-sql-evaluation.html)（[Day 28](#day-28)）; [SEC Financial Data](Study%20topics/sec-financial-data.html)（[Day 22](#day-22)）; [Data Quality](Study%20topics/data-quality.html)（[Day 23](#day-23)）; [Point-in-Time Data](Study%20topics/point-in-time-data.html)（[Day 24](#day-24)）; [Experiment Tracking](Study%20topics/experiment-tracking.html)（[Day 31](#day-31)）; [Queues and Workers](Study%20topics/queues-and-workers.html)（[Day 34](#day-34)）; [Idempotency](Study%20topics/idempotency.html)（[Day 11](#day-11)）; [Retries](Study%20topics/retries.html)（[Day 09](#day-09)）; [Failure Recovery](Study%20topics/failure-recovery.html)（[Day 35](#day-35)）; [Latency Benchmarking](Study%20topics/latency-benchmarking.html)（[Day 13](#day-13)）; [AWS ECS Fargate](Study%20topics/aws-ecs-fargate.html)（[Day 17](#day-17)）; [ECR](Study%20topics/ecr.html)（[Day 17](#day-17)）; [CloudWatch](Study%20topics/cloudwatch.html)（[Day 17](#day-17)）; [IAM](Study%20topics/iam.html)（[Day 17](#day-17)）; [GitHub Actions](Study%20topics/github-actions.html)（[Day 15](#day-15)）; [CI/CD](Study%20topics/ci-cd.html)（[Day 15](#day-15)）; [OIDC](Study%20topics/oidc.html)（[Day 19](#day-19)）; [Rollback](Study%20topics/rollback.html)（[Day 19](#day-19)）; [Clean-Environment Reproduction](Study%20topics/clean-environment-reproduction.html)（[Day 20](#day-20)）; [README](Study%20topics/readme.html)（[Day 20](#day-20)）; [Demo](Study%20topics/demo.html)（[Day 20](#day-20)）; [Ownership](Study%20topics/ownership.html)（[Day 39](#day-39)）; [AI-Assisted Code Review](Study%20topics/ai-assisted-code-review.html)（[Day 20](#day-20)）; [Design Trade-offs](Study%20topics/design-trade-offs.html)（[Day 39](#day-39)）.

### General & AI System Design

- [Requirements and API Design](Study%20topics/requirements-and-api-design.html) · [Day 01](#day-01)
- [Data Modeling and Indexes](Study%20topics/data-modeling-and-indexes.html) · [Day 03](#day-03)
- [Cache and API Service](Study%20topics/cache-and-api-service.html) · [Day 05](#day-05)
- [Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · [Day 07](#day-07)
- [Rate Limiting and Capacity](Study%20topics/rate-limiting-and-capacity.html) · [Day 09](#day-09)
- [Retries, Idempotency and Consistency](Study%20topics/retries-idempotency-and-consistency.html) · [Day 11](#day-11)
- [Latency and Observability](Study%20topics/latency-and-observability.html) · [Day 13](#day-13)
- [CI/CD and AWS Deployment](Study%20topics/ci-cd-and-aws-deployment.html) · [Day 15](#day-15)
- [Financial Research RAG](Study%20topics/financial-research-rag.html) · [Day 17](#day-17)
- [RAG Evaluation and Retrieval Trade-offs](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html) · [Day 19](#day-19)
- [Financial Text-to-SQL](Study%20topics/financial-text-to-sql.html) · [Day 21](#day-21)
- [Text-to-SQL Evaluation and Data Quality](Study%20topics/text-to-sql-evaluation-and-data-quality.html) · [Day 23](#day-23)
- [Agents with Human Approval](Study%20topics/agents-with-human-approval.html) · [Day 25](#day-25)
- [Agent Memory and Tool Contracts](Study%20topics/agent-memory-and-tool-contracts.html) · [Day 27](#day-27)
- [AI-Assisted Experiment Platform](Study%20topics/ai-assisted-experiment-platform.html) · [Day 29](#day-29)
- [Volatility Forecasting Service](Study%20topics/volatility-forecasting-service.html) · [Day 31](#day-31)
- [Evaluation and Regression Pipeline](Study%20topics/evaluation-and-regression-pipeline.html) · [Day 33](#day-33)
- [AI Latency and Cost Budget](Study%20topics/ai-latency-and-cost-budget.html) · [Day 35](#day-35)
- [AI Security and Reliability](Study%20topics/ai-security-and-reliability.html) · [Day 37](#day-37)
- [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · [Day 39](#day-39)

### 每日 Interview Questions

LLM Theory; RAG; Agents; Evaluation; Safety; Monitoring; Cost and Latency; Python Follow-ups; SQL Follow-ups; ML Fundamentals; Financial Validation; System Design; Project Deep Dive; Behavioral; Integrated Mocks。每天按仓库原题分配，题号与原文位置见日程。

## 为什么这样安排：仓库证据与你的差距

这份计划结合仓库的岗位技能分析、面试问题、招聘观察和你的转岗背景。它不是仓库给出的原版课表。岗位需求频率不等于候选人缺失率；也没有足够证据把它称为“HR 最缺技能排行榜”。

- 岗位技能：[role/02-skills.md](role/02-skills.md) 基于 6,964 条岗位记录，强调 Python、RAG、Agents，以及 AI 之外的工程能力。这里优先选金融 Applied AI 所需的应用工程方向，不照搬全部技能清单。
- 招聘与技术面试关注：[interview/03-get-hired.md](interview/03-get-hired.md) 汇总评估、成本、延迟、取舍、可靠性、Python 深度和实际交付。招聘筛选关注相关经历与成果表述；技术面试进一步验证实现能力和设计判断，二者不能混为一谈。
- 理论题：[interview/questions/01-theory.md](interview/questions/01-theory.md) 对应 LLM Fundamentals、RAG、Agents、Evals、Monitoring、Safety 和基础 ML。本次补齐上一版没有明确列出的 Structured Outputs、Tool Calling、LLM Sampling 和 Context Management。
- 编码题：[interview/questions/02-coding.md](interview/questions/02-coding.md) 对应 DSA 和 Progressive Implementation。这里既安排算法题，也安排 KV Store、Crawler、Rate Limiter、Debugging 等实际实现题。
- 系统设计：[interview/questions/04-ai-system-design.md](interview/questions/04-ai-system-design.md) 对应需求、架构、评估、规模、成本、权限和失败路径；使用金融场景贯穿练习。
- 项目与行为面试：[interview/questions/03-project-deep-dive.md](interview/questions/03-project-deep-dive.md)、[interview/questions/05-behavioral.md](interview/questions/05-behavioral.md) 对应 Ownership、Trade-offs、Failure 和 Communication。这是面试学习，不是找岗位任务。
- 作品集：[portfolio/04-polishing.md](portfolio/04-polishing.md) 对应 Tests、Evals、Logs、README、Demo 和 Reproducibility。
- 个性化安排：你已有金融建模、Python Library 和性能优化经验，增加 SQL、ML Basics、Time-Series Validation、API、Testing、Deployment 的时间。Risk Copilot 的已知缺口用于项目选题；没有假设你已经具备 Data Scientist 的 ML 经验。

## 覆盖深度与暂不覆盖

- 重点实践：Python、SQL、RAG / Agent Evaluation、Reliability、API、Database、Docker、CI、Financial ML Experiment。
- 以概念和设计为主：Transformer / Attention、LoRA、Quantization、MCP、Cloud IAM、Tenant Isolation、Streaming。日程安排不等于已经实现这些生产功能。
- 暂不系统训练：LeetCode Hard、Advanced Dynamic Programming、Distributed Training、CUDA、GPU Serving Optimization、Transformer from Scratch、RLHF / DPO、Advanced Kubernetes / Terraform、Full-Stack React。目标岗位明确要求时，再替换相关复习时间。
- 三个作品：Risk Copilot 深化、Financial Statement Analytics Assistant、Investment Research Workbench。第一项为已有项目改进，后两项控制为小型端到端版本；范围与验收见项目路线。

## 固定安排与网课

刷题默认周一、周三、周五为 Python，周二、周四为 SQL，同一天不安排两种。Python 刷题包含 Practical Implementation 和 Code Review；ML 时段允许使用 Python 完成 ML 实验，不额外安排 Python 刷题。

每天网课 2 小时：先完成剩余 Core，再学 Production，按实际进度推进，不预设具体 lecture 或完成日期。两门课完成后，该时段用于 Course Exercise Review。Agentic 已学完，只按需复习。

- [AI Engineer Core Track](https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/)
- [AI Engineer Production Track](https://www.udemy.com/course/generative-and-agentic-ai-in-production/)

课程包含跟做；不拆分观看和练习分钟数。下方学习时段列 topic，刷题附 LeetCode 题号和链接；面试时段列当天仓库原题。不设置答题步骤或每日验收要求。碎片时间可替代适合口述的学习时段，不额外累加。项目按进度顺延，在每周五的复盘里重排，周末不补课。每天新增 1 小时 Interview Questions，项目时段相应缩短为 1.5 小时；每天仍为 8 小时。独立的题目复习时段用于口述回答和追问，与 System Design 专项时段分别安排。

## 题库覆盖范围与核对方式

以 interview/questions/questions.md 总题库为主，并合并 01-theory.md、02-coding.md、03-project-deep-dive.md、04-ai-system-design.md、05-behavioral.md、06-home-assignments.md 中的题目、追问和作业示例。排除 Sources、学习建议、格式介绍和评分说明；完全相同的问题合并，措辞不同的变体保留。当前快照共 623 条，分配在前 40 个工作日，11 月 27 日完成首次覆盖；缓冲周只复习。

全量题库额外包含 Advanced Transformer Internals、RLHF / DPO、Distributed Training / GPU Systems、Traditional System Design、Voice / Multimodal Systems 和 Company-Specific Assignments。这些也纳入浏览覆盖，但不改变前文的重点实践范围。

每天一小时的目标是阅读、理解并形成回答思路；不代表完整实现所有编码题或 take-home，也不代表每道系统设计题都完成整轮模拟。系统设计和项目时段承担深入实践。部分条目是作业示例或官方挑战入口，这些按题目要求分析，不要求全部开发。

每日条目使用 Q 编号、英文原文和来源文件／行号。完全重复的条目列出全部来源，便于逐项核对。每日题数根据题型粗略加权分配，实际难度不同，需要在复盘中标记未理解的题目。

LeetCode 题号、标题、slug 和 Premium 状态于 2026 年 10 月 4 日通过 [官方题目目录](https://leetcode.com/api/problems/all/) 核对。SQL 日使用 SQL 作答。列出的题是练习候选，不要求当天全部完成；重复题用于复习。工程主题没有直接对应题时，另作中文说明，不把相关算法题冒充完整工程练习。

分配统计：623 条唯一条目、727 处原文引用；主计划每天 9–20 条。

## 第 1 周：Foundations and Project Baseline

<a id="day-01"></a>

### 周一 10/5

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Hash Maps: Counting, Frequency, Duplicate Detection<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/); [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)<br>资料：[Hash Maps](Study%20topics/hash-maps.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [Notebook](notebook/01_train_validation_test_split.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Requirements and API Design](Study%20topics/requirements-and-api-design.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Baseline and Issue Audit<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-01) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / LLM Fundamentals — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Tokenization](Study%20topics/tokenization.html); [Next-Token Prediction](Study%20topics/next-token-prediction.html); [Context Windows](Study%20topics/context-windows.html); [Temperature](Study%20topics/temperature.html); [Top-p](Study%20topics/top-p.html); [Transformer and Attention Fundamentals](Study%20topics/transformer-and-attention-fundamentals.html); [LLM Limitations](Study%20topics/llm-limitations.html); [Risk Copilot](Study%20topics/risk-copilot.html) |


<!-- quantvault-day 01 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 20 分钟 → Notebook实验 15 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1962 · Explaining Machine Learning to a Non-Technical Audience](https://quantvault.org/problems.html?id=1962) · Machine Learning · Easy

先修：先读Machine Learning Foundations。

本次范围：Conceptual。用自己的金融工作解释Feature、Target、Training和Prediction；先不背模型名。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-01)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q001 — How do LLMs work?（来源：[questions.md:9](interview/questions/questions.md)；[01-theory.md:22](interview/questions/01-theory.md)）

<!-- interview-answer Q001 -->
<details>
<summary>展开答案 · Q001</summary>

Interview Answer

An LLM learns statistical patterns in token sequences, usually by predicting the next token over a large training corpus. At inference it repeatedly predicts a distribution, selects a token and appends it to the context. Post-training improves instruction following, but fluent text is not proof of correctness. In an application I ground factual claims in evidence and use deterministic tools for calculations.

<details>
<summary>展开详解与追问</summary>

Explanation

Next-token training optimizes a statistical objective, not a guarantee of truth. A model can reproduce a plausible financial explanation while getting its number wrong; calculations should come from validated tools.

Follow-up

- Does an LLM store a database of facts?
  Its parameters encode learned patterns, without a reliable record-level lookup or provenance mechanism.

</details>
</details>
<!-- /interview-answer -->

- Q002 — How do transformers work?（来源：[questions.md:10](interview/questions/questions.md)；[01-theory.md:136](interview/questions/01-theory.md)）

<!-- interview-answer Q002 -->
<details>
<summary>展开答案 · Q002</summary>

Interview Answer

A Transformer turns tokens into contextual representations through attention and feed-forward layers, with positional information, normalization and residual connections. Attention lets a token combine information from other permitted positions. In a causal decoder, a mask prevents looking ahead. Training can process many positions in parallel; autoregressive inference still generates sequentially unless an acceleration method changes the execution strategy.

<details>
<summary>展开详解与追问</summary>

Explanation

For sequence length n, ordinary full attention forms n-by-n interactions per head. Causal masking blocks future positions, while residual connections support optimization of deep layers.

Follow-up

- Does parallel training imply parallel generation?
  No. Teacher-forced training knows the target sequence; autoregressive decoding conditions each new token on previously generated tokens.

</details>
</details>
<!-- /interview-answer -->

- Q003 — What is tokenization and how does it affect LLM performance?（来源：[questions.md:11](interview/questions/questions.md)）

<!-- interview-answer Q003 -->
<details>
<summary>展开答案 · Q003</summary>

Interview Answer

Tokenization maps text to a vocabulary of token IDs. A word may become one token or several, and different languages or specialist terms can have very different token counts. This affects cost, context usage and how the model represents rare terms. I inspect the actual tokenizer on representative financial documents rather than estimating tokens from English word counts alone.

<details>
<summary>展开详解与追问</summary>

Explanation

A context limit and a billing unit are expressed in tokens, not words. Tokenization can split tickers, identifiers and non-English text unevenly, so inspect representative inputs.

Follow-up

- Can changing the tokenizer of a trained model be harmless?
  No. Token IDs and learned embeddings are coupled; a new tokenizer generally requires compatible adaptation.

</details>
</details>
<!-- /interview-answer -->

- Q004 — What is the difference between pre-training and fine-tuning?（来源：[questions.md:12](interview/questions/questions.md)）

<!-- interview-answer Q004 -->
<details>
<summary>展开答案 · Q004</summary>

Interview Answer

Pre-training learns broad representations and language patterns from a large corpus. Fine-tuning continues training on a narrower dataset or objective to change behavior or specialize performance. It does not reliably act like an editable facts database. For frequently changing company information I would usually retrieve evidence, while considering fine-tuning for a persistent behavior gap supported by enough high-quality examples.

<details>
<summary>展开详解与追问</summary>

Explanation

Pre-training establishes broad representations from a large corpus; fine-tuning adapts an existing model using a more targeted objective and dataset. Both update parameters, unlike adding examples to a prompt.

Follow-up

- Does fine-tuning guarantee current facts?
  No. External retrieval is usually more controllable for frequently changing facts and source attribution.

</details>
</details>
<!-- /interview-answer -->

- Q005 — Explain context windows and their limitations.（来源：[questions.md:13](interview/questions/questions.md)）

<!-- interview-answer Q005 -->
<details>
<summary>展开答案 · Q005</summary>

Interview Answer

The context window bounds what the model can condition on in a request, including the relevant input and output allocation under the serving contract. More context costs memory and compute and does not guarantee that every detail is used correctly. I prioritize evidence, remove redundant content, retrieve relevant sections and retain references to the full documents instead of blindly inserting everything.

<details>
<summary>展开详解与追问</summary>

Explanation

The window includes instructions, conversation, retrieved text and generated output under the provider's accounting rules. Fitting text does not guarantee the model uses every relevant detail reliably.

Follow-up

- Would a larger context remove the need for retrieval?
  No. Retrieval still controls cost, permissions, freshness and evidence selection.

</details>
</details>
<!-- /interview-answer -->

- Q006 — What are scaling laws and why do they matter?（来源：[questions.md:14](interview/questions/questions.md)）

<!-- interview-answer Q006 -->
<details>
<summary>展开答案 · Q006</summary>

Interview Answer

Scaling laws describe empirical relationships between model loss and factors such as parameters, training tokens and compute within studied regimes. They help allocate a training budget rather than simply choosing the largest model. They are not guarantees about every downstream task or unlimited extrapolation. For an application role I would still compare candidate models on task-specific quality, latency and cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Scaling laws describe empirical relationships among loss, parameters, data and compute within studied regimes. They inform allocation but do not guarantee business-task accuracy or safe extrapolation.

Follow-up

- Why can a larger model still underperform?
  Data quality, task mismatch, inference constraints and evaluation design can dominate parameter count.

</details>
</details>
<!-- /interview-answer -->

- Q007 — What is temperature and top-p sampling? How do they affect outputs?（来源：[questions.md:15](interview/questions/questions.md)；[01-theory.md:23](interview/questions/01-theory.md)）

<!-- interview-answer Q007 -->
<details>
<summary>展开答案 · Q007</summary>

Interview Answer

Temperature rescales logits: lower values concentrate the distribution and higher values flatten it. Top-p keeps the smallest high-probability token set whose cumulative mass reaches a threshold, then samples from it. I tune these on the task rather than maximizing creativity by default. Low temperature improves consistency but does not guarantee determinism or factual accuracy.

<details>
<summary>展开详解与追问</summary>

Explanation

Temperature rescales logits before sampling; nucleus sampling retains a probability-mass subset. Their effects interact, and low randomness does not repair missing evidence or incorrect reasoning.

Follow-up

- Is temperature zero fully deterministic?
  Not necessarily across hardware, provider implementations or model revisions; test the actual serving setup.

</details>
</details>
<!-- /interview-answer -->

- Q008 — Explain few-shot learning and chain-of-thought prompting.（来源：[questions.md:16](interview/questions/questions.md)）

<!-- interview-answer Q008 -->
<details>
<summary>展开答案 · Q008</summary>

Interview Answer

Few-shot prompting supplies examples of the desired input-output mapping, including important edge cases. Chain-of-thought prompting encourages intermediate reasoning, which can help some tasks but also adds cost and can produce plausible errors. I evaluate final correctness and useful verifiable intermediate artifacts, such as calculations or tool calls, rather than treating a verbose explanation as evidence of sound reasoning.

<details>
<summary>展开详解与追问</summary>

Explanation

Few-shot examples demonstrate the desired mapping without updating weights. Reasoning-oriented prompts can help decomposition, but displayed explanations are not a reliable audit of internal computation.

Follow-up

- What should production traces contain?
  Inputs, tool decisions, validated results and concise justifications, rather than assuming private reasoning text proves correctness.

</details>
</details>
<!-- /interview-answer -->

- Q009 — What is KV cache? How does it help in LLM inference?（来源：[questions.md:17](interview/questions/questions.md)；[01-theory.md:139](interview/questions/01-theory.md)）

<!-- interview-answer Q009 -->
<details>
<summary>展开答案 · Q009</summary>

Interview Answer

A KV cache stores previously computed attention keys and values during autoregressive decoding. Each new token reuses them instead of recomputing the whole prefix. This reduces repeated computation but uses memory that grows with sequence length, layers, batch size and KV heads. It is different from caching a completed answer, and cache management can limit serving concurrency.

<details>
<summary>展开详解与追问</summary>

Explanation

Cached keys and values avoid recomputing past token projections during decoding. Cache memory grows with layers, context, batch size and KV heads, which can constrain concurrency.

Follow-up

- Does KV caching remove attention over past tokens?
  No. A new query still attends to cached past keys and values.

</details>
</details>
<!-- /interview-answer -->

- Q010 — Can you describe the difference between GenAI and traditional programming in the context of solving a real-world problem?（来源：[questions.md:18](interview/questions/questions.md)）

<!-- interview-answer Q010 -->
<details>
<summary>展开答案 · Q010</summary>

Interview Answer

Traditional software executes explicitly specified rules; generative AI predicts an output from learned patterns. I use the model where language interpretation is valuable and deterministic code where exactness matters. In a risk assistant, the LLM can interpret a scenario and explain results, while validated Python functions compute exposures and risk measures. The surrounding application must handle uncertainty and failures explicitly.

<details>
<summary>展开详解与追问</summary>

Explanation

A deterministic rule is preferable for an exact calculation or authorization decision. A generative component helps interpret ambiguous language, but its output needs an explicit application contract.

Follow-up

- How would you combine both for a report?
  Compute numbers in Python or SQL and let the model explain those verified results with provenance.

</details>
</details>
<!-- /interview-answer -->

- Q011 — How do you ensure the outputs from large language models are consistent and accurate, especially when dealing with complex multi-step workflows?（来源：[questions.md:19](interview/questions/questions.md)）

<!-- interview-answer Q011 -->
<details>
<summary>展开答案 · Q011</summary>

Interview Answer

I define an output contract, constrain tool arguments, validate business rules and keep exact computation outside the model. Each workflow stage has a success condition, a bounded retry policy and an explicit failure state. I version prompts and models and run representative regression evaluations. Lower temperature helps consistency, but neither a schema nor a confident response establishes semantic correctness.

<details>
<summary>展开详解与追问</summary>

Explanation

Schema validity checks structure; evidence checks factual support; state-machine checks enforce workflow order. These solve different failure classes and should have separate tests.

Follow-up

- Is a second model enough to validate the first?
  No. Correlated errors are possible; use deterministic checks and reviewed examples where available.

</details>
</details>
<!-- /interview-answer -->

- Q012 — What's an RAG model? Explain the complete process.（来源：[questions.md:20](interview/questions/questions.md)）

<!-- interview-answer Q012 -->
<details>
<summary>展开答案 · Q012</summary>

Interview Answer

RAG combines retrieval with generation. Offline, I parse and clean documents, attach provenance and permissions, chunk them and build searchable indexes. Online, I retrieve candidates, optionally rerank and expand context, then generate an answer supported by that context with citations. I evaluate evidence retrieval and answer quality separately, and abstain when the retrieved evidence cannot support the requested claim.

<details>
<summary>展开详解与追问</summary>

Explanation

RAG is a system pattern rather than a single model. Offline ingestion and indexing feed online retrieval, context assembly and generation; citations and abstention require additional design.

Follow-up

- Where can a correct answer be lost?
  During extraction, chunking, retrieval, reranking, context truncation or generation; inspect each stage separately.

</details>
</details>
<!-- /interview-answer -->

- Q013 — What are embeddings?（来源：[questions.md:21](interview/questions/questions.md)）

<!-- interview-answer Q013 -->
<details>
<summary>展开答案 · Q013</summary>

Interview Answer

Embeddings are numerical vectors that represent inputs according to a model's training objective. Similar vectors can help retrieve semantically related content, but similarity is not a truth probability. I select an embedding model using representative queries, keep indexing and query model versions compatible, and check normalization and dimensions. Exact identifiers, negation and temporal constraints often need additional filtering or lexical search.

<details>
<summary>展开详解与追问</summary>

Explanation

An embedding maps an input to a learned vector space. Similarity depends on the training objective, model and normalization; it is not a universal measure of factual equivalence.

Follow-up

- Can you mix vectors from different embedding models?
  Generally no. Re-embed into a compatible space or maintain separately versioned indexes.

</details>
</details>
<!-- /interview-answer -->

- Q014 — How does chunking happen?（来源：[questions.md:22](interview/questions/questions.md)）

<!-- interview-answer Q014 -->
<details>
<summary>展开答案 · Q014</summary>

Interview Answer

I split documents at meaningful boundaries such as headings, paragraphs and tables, subject to a token budget. I carry document-wide metadata into each chunk and use overlap or parent-section expansion when context crosses boundaries. Size and overlap are experimental parameters: smaller chunks can improve precision, while larger chunks retain context but increase redundancy and generation cost. I choose using labeled retrieval and answer evaluations.

<details>
<summary>展开详解与追问</summary>

Explanation

Chunking defines retrieval units. Small chunks can lose definitions; large chunks can dilute relevance. Preserve headings and metadata, and compare configurations on fixed evidence-labeled queries.

Follow-up

- Does overlap always help?
  No. It can create redundant results and inflate index size; measure coverage and duplicate retrieval.

</details>
</details>
<!-- /interview-answer -->

- Q015 — What is the difference between discriminative and generative models?（来源：[questions.md:23](interview/questions/questions.md)）

<!-- interview-answer Q015 -->
<details>
<summary>展开答案 · Q015</summary>

Interview Answer

A discriminative model learns a decision rule or conditional relationship, such as P(label given features). A generative model models how data are produced, for example P(text) or P(text given prompt), and can generate new examples. The distinction concerns the modeled objective, not whether a neural network is used. A generative LLM can also perform classification by producing a label.

<details>
<summary>展开详解与追问</summary>

Explanation

A discriminative model estimates a decision or conditional target such as P(y given x). A generative model models data or its distribution; a generative LLM can still perform classification.

Follow-up

- Is a classifier always simpler to deploy?
  Not always; the answer depends on labels, task stability and serving requirements, not just model category.

</details>
</details>
<!-- /interview-answer -->

- Q016 — What is graph RAG? How does it differ from standard RAG?（来源：[questions.md:24](interview/questions/questions.md)）

<!-- interview-answer Q016 -->
<details>
<summary>展开答案 · Q016</summary>

Interview Answer

Graph RAG organizes entities, relationships or document communities into a graph and uses graph traversal or graph-derived summaries during retrieval. This can help relationship-heavy or corpus-wide questions that isolated vector chunks handle poorly. It adds extraction errors, indexing cost and maintenance complexity. I would first demonstrate a gap in a simpler hybrid RAG baseline before adding a graph.

<details>
<summary>展开详解与追问</summary>

Explanation

Graph retrieval follows entities or relationships, which can help multi-hop questions. Graph construction, entity resolution and stale edges add cost and failure modes beyond ordinary chunk search.

Follow-up

- When is graph RAG unnecessary?
  When direct document retrieval already answers the workload with adequate evidence and latency.

</details>
</details>
<!-- /interview-answer -->

- Q017 — What is reflection in the context of LLM agents?（来源：[questions.md:25](interview/questions/questions.md)）

<!-- interview-answer Q017 -->
<details>
<summary>展开答案 · Q017</summary>

Interview Answer

Reflection is a step where an agent critiques a proposed answer or previous action and may revise it. I make the critique target explicit, such as missing citations or failed tests, and cap revision cycles. A second model pass is not automatically an independent verifier: it may repeat the same mistake. External evidence and deterministic checks are stronger where available.

<details>
<summary>展开详解与追问</summary>

Explanation

Reflection generates critique or revision, but a model may reinforce its own error. Make critiques actionable against a rubric, tool result or independent evidence and cap iterations.

Follow-up

- How do you know reflection helped?
  Compare task success and failure rates with and without it on the same held-out cases, including cost and latency.

</details>
</details>
<!-- /interview-answer -->

- Q018 — Explain KL divergence.（来源：[questions.md:26](interview/questions/questions.md)）

<!-- interview-answer Q018 -->
<details>
<summary>展开答案 · Q018</summary>

Interview Answer

KL divergence measures how one probability distribution differs from another: KL(P ∥ Q) = sum P(x) log(P(x)/Q(x)). It is nonnegative but asymmetric and is not a distance metric. It can be infinite if Q assigns zero probability where P is positive. In language-model training it can constrain a policy from drifting too far from a reference model.

<details>
<summary>展开详解与追问</summary>

Explanation

KL(P ∥ Q) is the expected log ratio under P. It is nonnegative but asymmetric, and becomes infinite if Q assigns zero mass where P has positive mass.

Follow-up

- Is KL a distance metric?
  No. It is asymmetric and does not satisfy all metric properties such as the triangle inequality.

</details>
</details>
<!-- /interview-answer -->

- Q019 — What is the difference between symbolic and connectionist AI?（来源：[questions.md:27](interview/questions/questions.md)）

<!-- interview-answer Q019 -->
<details>
<summary>展开答案 · Q019</summary>

Interview Answer

Symbolic AI represents knowledge with explicit rules, logic or structured symbols. Connectionist AI learns distributed representations in neural-network parameters. Symbolic rules are useful for enforceable business constraints; neural models are useful for flexible pattern recognition and language. I often combine them: a model proposes a structured action, then deterministic policy and numerical code validate and execute it.

<details>
<summary>展开详解与追问</summary>

Explanation

Symbolic systems manipulate explicit rules and representations; connectionist systems learn distributed representations. A hybrid can combine language interpretation with deterministic policy rules.

Follow-up

- Which should enforce a refund limit?
  A deterministic policy check; a model can interpret the request but should not redefine the authorized amount.

</details>
</details>
<!-- /interview-answer -->

- Q020 — Describe the types of text summarization techniques and when you'd use each.（来源：[questions.md:28](interview/questions/questions.md)）

<!-- interview-answer Q020 -->
<details>
<summary>展开答案 · Q020</summary>

Interview Answer

Extractive summarization selects source passages, which preserves original wording but can feel disjointed. Abstractive summarization generates a new synthesis, which is more flexible but risks unsupported claims. For financial documents I use evidence-linked abstraction with exact-number checks. For long documents I summarize sections and then synthesize while retaining source links and checking that important qualifications are not lost.

<details>
<summary>展开详解与追问</summary>

Explanation

Extractive summaries select source material; abstractive summaries generate new wording. Hierarchical summarization handles long inputs but can compound omissions across stages.

Follow-up

- How would you summarize numerical reports?
  Preserve units, periods and source references, and validate key figures against the original rather than only an intermediate summary.

</details>
</details>
<!-- /interview-answer -->


<a id="day-02"></a>

### 周二 10/6

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: SELECT, WHERE, ORDER BY, LIMIT, NULL<br>LeetCode: [1757. Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/); [584. Find Customer Referee](https://leetcode.com/problems/find-customer-referee/); [595. Big Countries](https://leetcode.com/problems/big-countries/)<br>资料：[SELECT](Study%20topics/select.html); [WHERE](Study%20topics/where.html); [ORDER BY](Study%20topics/order-by.html); [LIMIT](Study%20topics/limit.html); [NULL](Study%20topics/null.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Supervised and Unsupervised Learning; Baselines](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [Notebook](notebook/02_supervised_and_unsupervised_learning_baselines.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Requirements and API Design](Study%20topics/requirements-and-api-design.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Risk Numerical Correctness: Missing Data and Factors<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-02) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / LLM Fundamentals; Technical Questions / RAG Systems — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Prompt Engineering](Study%20topics/prompt-engineering.html); [Few-Shot Examples](Study%20topics/few-shot-examples.html); [Prompt Versioning](Study%20topics/prompt-versioning.html); [SQL](Study%20topics/sql.html) |


<!-- quantvault-day 02 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 20 分钟 → Notebook实验 15 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1432 · Linear Regression: Model, Estimation, and When to Use It](https://quantvault.org/problems.html?id=1432) · Regression · Medium
- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：入门页的Linear Regression公式；两题各用约5分钟。

本次范围：Conceptual。先解释线性函数的输入、系数和数值输出，再用目标→数据→基线→验证组织建模思路。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-02)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q021 — How do you do memory management and context management with LLMs?（来源：[questions.md:29](interview/questions/questions.md)；[01-theory.md:25](interview/questions/01-theory.md)）

<!-- interview-answer Q021 -->
<details>
<summary>展开答案 · Q021</summary>

Interview Answer

I separate short-term conversation context, durable user preferences and authoritative application records. I retain recent turns, retrieve relevant older information and summarize low-priority history with provenance. Token budgets and expiration policies keep context bounded. Summaries can omit details or preserve bad instructions, so they never replace source records for financial numbers, permissions or consequential actions.

<details>
<summary>展开详解与追问</summary>

Explanation

Working context, durable facts and conversation history serve different roles. Summaries save tokens but can lose qualifiers; keep raw evidence addressable and scope memory by user and permissions.

Follow-up

- Should every conversation become long-term memory?
  No. Store only justified, consent-compatible facts with provenance, expiry and correction paths.

</details>
</details>
<!-- /interview-answer -->

- Q022 — What is the self-attention mechanism? How does it differ from multi-head attention?（来源：[questions.md:30](interview/questions/questions.md)）

<!-- interview-answer Q022 -->
<details>
<summary>展开答案 · Q022</summary>

Interview Answer

Self-attention computes relationships among positions in the same sequence, commonly as softmax(QK^T/sqrt(d_k))V with an appropriate mask. Multi-head attention performs this operation through multiple learned projections, then combines the head outputs. Heads can capture different relationships; they do not necessarily correspond to clean human-interpretable concepts. The causal mask and tensor dimensions are essential implementation details.

<details>
<summary>展开详解与追问</summary>

Explanation

Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V. Multi-head attention applies separate learned projections and combines their outputs, allowing different relationships to be represented.

Follow-up

- Why divide by sqrt(d_k)?
  It controls dot-product scale so softmax is less likely to saturate as key dimension increases.

</details>
</details>
<!-- /interview-answer -->

- Q023 — What is grouped query attention and how does it differ from standard multi-head attention?（来源：[questions.md:31](interview/questions/questions.md)）

<!-- interview-answer Q023 -->
<details>
<summary>展开答案 · Q023</summary>

Interview Answer

Multi-head attention usually gives each query head its own key and value heads. Grouped-query attention shares fewer KV heads across groups of query heads, reducing KV-cache memory and bandwidth. Multi-query attention is the extreme with one KV head. GQA trades some flexibility for serving efficiency; the actual quality and speed depend on training, hardware and workload.

<details>
<summary>展开详解与追问</summary>

Explanation

Grouped-query attention assigns multiple query heads to fewer KV heads. It reduces KV storage relative to full multi-head attention while retaining more KV diversity than a single shared head.

Follow-up

- What must match when reusing a cache?
  Layer, position, model version, head layout and the actual prefix tokens must be compatible.

Technical Sources

- [Grouped-query attention paper](https://arxiv.org/abs/2305.13245)

</details>
</details>
<!-- /interview-answer -->

- Q024 — What are the differences between BPE, WordPiece, and character-level tokenization? What are the trade-offs?（来源：[questions.md:32](interview/questions/questions.md)；[01-theory.md:141](interview/questions/01-theory.md)）

<!-- interview-answer Q024 -->
<details>
<summary>展开答案 · Q024</summary>

Interview Answer

BPE builds tokens by repeatedly merging frequent symbol pairs. WordPiece also builds subwords but uses a different vocabulary-selection criterion, commonly described through likelihood-related scoring. Character tokenization avoids many vocabulary gaps but creates much longer sequences. I compare fragmentation, multilingual behavior and domain vocabulary on actual text; tokenizer choice affects context consumption and model compatibility and cannot be swapped independently of a trained model.

<details>
<summary>展开详解与追问</summary>

Explanation

BPE merges frequent symbol pairs; WordPiece uses a learned subword vocabulary with a different vocabulary-building objective; character tokenization avoids many unknown fragments but lengthens sequences.

Follow-up

- Why is longer tokenization costly?
  Attention and decoding work grow with sequence length, and fewer words fit in a fixed token budget.

</details>
</details>
<!-- /interview-answer -->

- Q025 — Explain the difference between encoder-only, decoder-only, and encoder-decoder Transformer architectures. When would you use each?（来源：[questions.md:33](interview/questions/questions.md)；[01-theory.md:138](interview/questions/01-theory.md)）

<!-- interview-answer Q025 -->
<details>
<summary>展开答案 · Q025</summary>

Interview Answer

Encoder-only models use bidirectional context and are common for representation, classification and retrieval. Decoder-only models use causal attention and naturally generate continuations. Encoder-decoder models encode an input and generate a separate output, fitting translation and other sequence-to-sequence tasks. I choose by task, available pretrained models and deployment constraints rather than assuming one architecture wins universally.

<details>
<summary>展开详解与追问</summary>

Explanation

Encoders attend bidirectionally over input, decoders generate under a causal mask, and encoder-decoder models separate input representation from conditional output generation.

Follow-up

- What would you choose for embeddings?
  An encoder or an embedding model trained for retrieval is a natural baseline; a generic decoder's hidden state is not automatically a good embedding.

</details>
</details>
<!-- /interview-answer -->

- Q026 — Why are decoder-only models dominant even for non-generation tasks?（来源：[questions.md:34](interview/questions/questions.md)）

<!-- interview-answer Q026 -->
<details>
<summary>展开答案 · Q026</summary>

Interview Answer

Decoder-only models benefit from a simple scalable next-token objective and a uniform interface for generation, classification and tool use. Large pretrained ecosystems make them convenient for many application tasks. That does not make them optimal for everything: a small encoder classifier or embedding model can be cheaper and faster when the task is fixed and does not require open-ended generation.

<details>
<summary>展开详解与追问</summary>

Explanation

Decoder-only dominance reflects scalable training, a unified generation interface and strong instruction tuning, not theoretical superiority for every task. Encoders may be cheaper for fixed classification or retrieval.

Follow-up

- Would you use a decoder for every classification problem?
  No. Compare a smaller supervised model on quality, labels, latency and maintenance.

</details>
</details>
<!-- /interview-answer -->

- Q027 — What is positional encoding and why is it needed in Transformers?（来源：[questions.md:35](interview/questions/questions.md)）

<!-- interview-answer Q027 -->
<details>
<summary>展开答案 · Q027</summary>

Interview Answer

Attention alone does not encode sequence order, so a Transformer needs positional information. Absolute embeddings attach a position representation; relative schemes describe relationships between positions, and RoPE rotates query and key components according to position. The scheme influences long-context behavior. Extending the input beyond training lengths still requires evaluation; positional encoding alone does not guarantee reliable extrapolation.

<details>
<summary>展开详解与追问</summary>

Explanation

Without positional information, basic attention cannot distinguish sequence order adequately. Absolute embeddings and relative methods such as rotary position embeddings introduce different extrapolation behavior.

Follow-up

- Does supporting a longer input guarantee good long-context reasoning?
  No. Evaluate retrieval and reasoning over position and length, especially outside the training distribution.

</details>
</details>
<!-- /interview-answer -->

- Q028 — What are the key MMLU, BigBench, and HumanEval benchmarks? What does each measure and what are its limitations?（来源：[questions.md:36](interview/questions/questions.md)）

<!-- interview-answer Q028 -->
<details>
<summary>展开答案 · Q028</summary>

Interview Answer

MMLU probes broad subject knowledge through multiple-choice questions, BIG-bench contains diverse language-model tasks, and HumanEval evaluates function-level code generation with tests. Scores depend on prompting, sampling and evaluation protocols, and contamination is a concern. They do not fully measure production reliability, permissions or financial correctness. I use them for orientation and build a separate task-specific evaluation set.

<details>
<summary>展开详解与追问</summary>

Explanation

MMLU tests broad academic-style knowledge, BIG-bench contains diverse tasks, and HumanEval checks code against tests. Contamination, narrow coverage and scoring details limit generalization to a job workflow.

Follow-up

- What benchmark would matter most for your application?
  A held-out set reflecting actual inputs, failures and business constraints, supplemented by public benchmarks.

</details>
</details>
<!-- /interview-answer -->

- Q029 — What is the difference between RLHF and DPO? When would you prefer one over the other?（来源：[questions.md:37](interview/questions/questions.md)）

<!-- interview-answer Q029 -->
<details>
<summary>展开答案 · Q029</summary>

Interview Answer

RLHF is a broad approach using human preferences; a common pipeline trains a reward model and optimizes a policy against it with a method such as PPO. DPO directly optimizes preference pairs relative to a reference policy, avoiding a separately trained reward model and an online RL loop in its basic formulation. DPO is operationally simpler; neither removes the need for good preference data and evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

DPO optimizes preference pairs directly through a reference-relative objective. PPO-based RLHF trains a reward model and uses an online policy-optimization loop, adding operational complexity and flexibility.

Follow-up

- Can preference optimization reduce factual accuracy?
  Yes. Preferences can reward style or agreement; preserve factual and task-specific regression checks.

Technical Sources

- [Direct Preference Optimization paper](https://arxiv.org/abs/2305.18290)

</details>
</details>
<!-- /interview-answer -->

- Q030 — What is Mixture of Experts (MoE)? How does it improve efficiency?（来源：[questions.md:38](interview/questions/questions.md)；[01-theory.md:140](interview/questions/01-theory.md)）

<!-- interview-answer Q030 -->
<details>
<summary>展开答案 · Q030</summary>

Interview Answer

A mixture-of-experts model routes tokens to a subset of expert networks, often in feed-forward layers. It can increase total parameter capacity without activating all parameters for every token. Efficiency depends on routing balance, communication and hardware utilization; total model memory may still be large. I would distinguish active compute from total parameters when comparing inference cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Sparse MoE activates a subset of experts per token, reducing active computation relative to using every parameter. Routing, load imbalance and cross-device communication can offset gains.

Follow-up

- Are total parameters and active parameters interchangeable?
  No. Total parameters affect storage; active parameters more directly influence per-token computation.

</details>
</details>
<!-- /interview-answer -->

- Q031 — How do LLMs actually generate text? Explain the autoregressive decoding process.（来源：[questions.md:39](interview/questions/questions.md)）

<!-- interview-answer Q031 -->
<details>
<summary>展开答案 · Q031</summary>

Interview Answer

The model tokenizes the prompt, computes next-token logits, converts them into a distribution and chooses a token using a decoding rule. It appends that token and repeats until a stop condition or output limit. Cached keys and values avoid recomputing the prefix. The output is generated incrementally, so an early mistake can influence later tokens unless the application validates or revises it.

<details>
<summary>展开详解与追问</summary>

Explanation

The model produces logits, applies decoding rules, emits a token, updates state and repeats until a stop condition. Generation is conditioned on the actual sampled prefix, so early errors can propagate.

Follow-up

- What terminates generation?
  An end token, configured stop condition, maximum output budget or application cancellation.

</details>
</details>
<!-- /interview-answer -->

- Q032 — What are decoding strategies like beam search, top-k, and top-p? When do you use each?（来源：[questions.md:40](interview/questions/questions.md)）

<!-- interview-answer Q032 -->
<details>
<summary>展开答案 · Q032</summary>

Interview Answer

Beam search retains several high-scoring sequences and is useful when sequence likelihood and relatively constrained outputs matter, though it can favor repetitive text. Top-k samples from a fixed number of candidates; top-p samples from a variable set covering a probability mass. For open-ended generation I usually evaluate sampling; for structured tasks I prioritize schema constraints and task accuracy over decoding ideology.

<details>
<summary>展开详解与追问</summary>

Explanation

Beam search keeps several high-scoring sequences; top-k restricts candidate count; top-p restricts cumulative probability mass. A high likelihood sequence is not necessarily the most useful answer.

Follow-up

- When might sampling be preferable?
  For diverse creative outputs, with evaluation and constraints appropriate to the task.

</details>
</details>
<!-- /interview-answer -->

- Q033 — What is FlashAttention and how does it work?（来源：[questions.md:41](interview/questions/questions.md)）

<!-- interview-answer Q033 -->
<details>
<summary>展开答案 · Q033</summary>

Interview Answer

FlashAttention computes exact attention using a tiled algorithm that reduces expensive transfers between GPU high-bandwidth memory and on-chip memory. It avoids materializing the full attention matrix and uses numerically stable incremental softmax computation. It improves memory use and wall-clock performance without changing dense attention into a sparse approximation. Benefits depend on sequence length, hardware and implementation.

<details>
<summary>展开详解与追问</summary>

Explanation

FlashAttention computes exact attention using tiling and online softmax to reduce memory traffic and avoid materializing the full attention matrix. It changes execution efficiency, not the mathematical attention objective.

Follow-up

- Does it make attention linear-time in sequence length?
  No. Standard dense attention still has quadratic arithmetic; the optimization targets memory movement and storage.

Technical Sources

- [FlashAttention paper](https://arxiv.org/abs/2205.14135)

</details>
</details>
<!-- /interview-answer -->

- Q034 — Why is LLM inference memory-bounded?（来源：[questions.md:42](interview/questions/questions.md)）

<!-- interview-answer Q034 -->
<details>
<summary>展开答案 · Q034</summary>

Interview Answer

Autoregressive decoding at small batch sizes is often memory-bandwidth-bound because weights and the growing KV cache must be accessed for relatively little computation per step. Prefill or larger batches can be compute-bound instead. I profile the actual phase and workload before choosing an optimization; batching, quantization and KV-cache management address different resource constraints.

<details>
<summary>展开详解与追问</summary>

Explanation

Single-token decoding often spends heavily on reading weights and KV state; prefill and larger batches can be more compute intensive. Bottlenecks depend on workload, hardware and implementation.

Follow-up

- How would you identify the bottleneck?
  Profile prefill and decode separately, including memory bandwidth, utilization, batch size and context length.

</details>
</details>
<!-- /interview-answer -->

- Q035 — How do stop sequences work in LLMs?（来源：[questions.md:43](interview/questions/questions.md)）

<!-- interview-answer Q035 -->
<details>
<summary>展开答案 · Q035</summary>

Interview Answer

A stop sequence is a configured text or token pattern that tells the serving implementation when to stop generation. I check whether it is supported, whether it is included in the returned output and how partial matches are handled. It is not a safety boundary: a model can generate an invalid action before the sequence. I also enforce output-token and application-level completion limits.

<details>
<summary>展开详解与追问</summary>

Explanation

Stop sequences are output-matching conditions, distinct from the model's end token. Streaming code must handle a sequence split across chunks and avoid leaking a partial delimiter.

Follow-up

- Can a stop sequence enforce JSON validity?
  No. Use constrained structure and parsing; premature stopping can produce incomplete JSON.

</details>
</details>
<!-- /interview-answer -->

- Q036 — What is the context window and what happens when you exceed it? How do you handle long documents?（来源：[questions.md:44](interview/questions/questions.md)；[01-theory.md:24](interview/questions/01-theory.md)）

<!-- interview-answer Q036 -->
<details>
<summary>展开答案 · Q036</summary>

Interview Answer

When an input exceeds a model or endpoint context limit, the request may be rejected or the application may truncate it, depending on the implementation. I budget input and output explicitly. For long documents I retrieve relevant sections or use hierarchical processing with provenance, preserving document-level definitions and units. Silent truncation is especially dangerous when it removes qualifications or key evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Exceeding a window can cause rejection or implementation-specific truncation. Plan token budgets before calls and choose retrieval or hierarchical processing with source preservation.

Follow-up

- Why not truncate the end blindly?
  The removed portion may contain the question, definitions or required evidence, producing a plausible but unsupported answer.

</details>
</details>
<!-- /interview-answer -->

- Q037 — What risks arise from applying a general-purpose tokenizer to specialized domains like legal or medical text?（来源：[questions.md:45](interview/questions/questions.md)）

<!-- interview-answer Q037 -->
<details>
<summary>展开答案 · Q037</summary>

Interview Answer

A general-purpose tokenizer can fragment specialist terminology into many tokens, increasing cost and consuming the context budget. Rare abbreviations and unusual notation may also be poorly represented by the trained model. I test domain examples, preserve exact entities and units, and use retrieval or domain adaptation where justified. Changing tokenization alone is not a plug-in fix for an existing pretrained model.

<details>
<summary>展开详解与追问</summary>

Explanation

Specialized abbreviations and identifiers may fragment into many tokens. This increases cost and can hurt exact copying, but changing tokenization alone does not establish domain competence.

Follow-up

- What should you test?
  Representative abbreviations, units, rare terms and identifiers, measuring token counts and actual downstream error rates.

</details>
</details>
<!-- /interview-answer -->

- Q492 — What is the self-attention mechanism?（来源：[01-theory.md:137](interview/questions/01-theory.md)）

<!-- interview-answer Q492 -->
<details>
<summary>展开答案 · Q492</summary>

Interview Answer

Self-attention computes relationships among positions in the same sequence, commonly as softmax(QK^T/sqrt(d_k))V with an appropriate mask. Multi-head attention performs this operation through multiple learned projections, then combines the head outputs. Heads can capture different relationships; they do not necessarily correspond to clean human-interpretable concepts. The causal mask and tensor dimensions are essential implementation details.

<details>
<summary>展开详解与追问</summary>

Explanation

Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V. Multi-head attention applies separate learned projections and combines their outputs, allowing different relationships to be represented. For this question, lead with single-head self-attention: queries, keys and values come from the same sequence. Multi-head attention is an extension, not a prerequisite for the definition.

Follow-up

- Why divide by sqrt(d_k)?
  It controls dot-product scale so softmax is less likely to saturate as key dimension increases.

</details>
</details>
<!-- /interview-answer -->

- Q038 — Design a RAG system for a customer support chatbot. How do you evaluate it? (reported across multiple companies)（来源：[questions.md:49](interview/questions/questions.md)）

<!-- interview-answer Q038 -->
<details>
<summary>展开答案 · Q038</summary>

Interview Answer

I would clarify supported support tasks, document permissions and escalation rules. The pipeline is versioned ingestion, hybrid retrieval, optional reranking and citation-grounded generation, with session state and a human fallback. I evaluate retrieval recall, answer correctness, groundedness, appropriate abstention and task resolution, alongside p95 latency and cost. A chatbot that deflects tickets incorrectly is not successful.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate policy retrieval from account-specific tools. Evaluate answer support and escalation behavior alongside retrieval coverage, response latency and resolved cases; enforce permissions before retrieval.

Follow-up

- What happens when policy sources conflict?
  Prefer an explicit version/precedence rule or escalate with the conflict rather than let the model pick silently.

</details>
</details>
<!-- /interview-answer -->


<a id="day-03"></a>

### 周三 10/7

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Arrays and Strings: Two Pointers<br>LeetCode: [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/); [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/); [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)<br>资料：[Arrays and Strings](Study%20topics/arrays-and-strings.html); [Two Pointers](Study%20topics/two-pointers.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Data Leakage; Scaling; scikit-learn Pipelines](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [Notebook](notebook/03_data_leakage_scaling_scikit_learn_pipelines.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Data Modeling and Indexes](Study%20topics/data-modeling-and-indexes.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Risk Numerical Correctness: Zero Exposure and Units<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-03) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / RAG Systems — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Structured Outputs](Study%20topics/structured-outputs.html); [Pydantic](Study%20topics/pydantic.html); [JSON Recovery](Study%20topics/json-recovery.html) |


<!-- quantvault-day 03 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Data Leakage与scikit-learn Pipelines。

本次范围：Case outline。只画Data → Split → Preprocessing → Fit → Evaluate，标出哪些步骤只能看训练集。整题的完整建模方案留到Day 31。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-03)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q039 — How would you design an LLM-powered enterprise search system?（来源：[questions.md:50](interview/questions/questions.md)）

<!-- interview-answer Q039 -->
<details>
<summary>展开答案 · Q039</summary>

Interview Answer

I would build permission-aware connectors into a common document and metadata model, then maintain lexical and vector indexes with freshness tracking. Queries retrieve and rerank authorized evidence; the answer layer cites sources and exposes uncertainty. I separate retrieval quality from synthesis quality and measure freshness, access leakage, latency and useful task completion. Source permissions must propagate through caches as well as retrieval.

<details>
<summary>展开详解与追问</summary>

Explanation

Enterprise search needs identity-aware filtering, freshness and provenance across connectors. Indexing permissions once is insufficient when access changes after ingestion.

Follow-up

- How would you prevent stale permissions leaking data?
  Revalidate authorization at retrieval or serving time and invalidate affected caches and index metadata.

</details>
</details>
<!-- /interview-answer -->

- Q040 — Design a generative AI document-processing pipeline for unstructured data (emails, PDFs, images) to automate workflows like claims processing.（来源：[questions.md:51](interview/questions/questions.md)）

<!-- interview-answer Q040 -->
<details>
<summary>展开答案 · Q040</summary>

Interview Answer

I would use an asynchronous intake pipeline with file validation, malware scanning, deduplication, parsing or OCR, structured extraction and deterministic business checks. Extracted fields retain page or span provenance and confidence tied to validation evidence. Conflicts and low-confidence cases enter a review queue. Durable state and idempotent processing support retries without duplicate decisions; document text cannot instruct the system to bypass policy.

<details>
<summary>展开详解与追问</summary>

Explanation

Persist raw files, extraction artifacts and workflow state separately. Typed extraction, deterministic validation and review queues keep uncertain documents from silently triggering irreversible actions.

Follow-up

- How do you retry a failed document job?
  Use an idempotent document/version key and resume from durable stages without repeating already committed side effects.

</details>
</details>
<!-- /interview-answer -->

- Q041 — How would you use GPT-4 to generate accurate answers based on proprietary documents?（来源：[questions.md:52](interview/questions/questions.md)）

<!-- interview-answer Q041 -->
<details>
<summary>展开答案 · Q041</summary>

Interview Answer

I would place the proprietary documents behind access-controlled retrieval and send only permitted, relevant excerpts to an approved model endpoint. The prompt requests evidence-grounded answers and citations, but I also validate critical claims and abstention behavior through evaluation. I would verify data-handling and retention requirements separately; the historical model name in the question does not determine the best current model.

<details>
<summary>展开详解与追问</summary>

Explanation

The named model is a historical choice, not a guarantee of current availability or quality. Proprietary-document answers need permission-scoped retrieval, citations and abstention regardless of model brand.

Follow-up

- Would fine-tuning replace document access controls?
  No. Access must be enforced by the application; weights do not offer reliable per-document authorization.

</details>
</details>
<!-- /interview-answer -->

- Q042 — Design a generative QA assistant for your company's knowledge base.（来源：[questions.md:53](interview/questions/questions.md)）

<!-- interview-answer Q042 -->
<details>
<summary>展开答案 · Q042</summary>

Interview Answer

I would first define the knowledge scope, who can access each document and what a correct answer looks like. I would ingest versioned content, retrieve and rerank evidence, and generate cited answers with a missing-evidence fallback. A small labeled set would include ambiguous, stale and unanswerable questions. I would instrument retrieval, generation, user feedback, latency and cost before expanding scope.

<details>
<summary>展开详解与追问</summary>

Explanation

Start with a narrow knowledge scope, an evidence-labeled question set and a fallback. Ownership and update processes for the source documents matter as much as the prompt.

Follow-up

- How do you handle outdated answers?
  Version the corpus, detect stale sources and update or withdraw affected cached answers.

</details>
</details>
<!-- /interview-answer -->

- Q043 — You're making a system that processes huge PDF reports. How would you handle the problem of not keeping an entire report's context when splitting a document for a chatbot?（来源：[questions.md:54](interview/questions/questions.md)）

<!-- interview-answer Q043 -->
<details>
<summary>展开答案 · Q043</summary>

Interview Answer

I preserve a document hierarchy and attach title, section, date, units and parent IDs to each chunk. Retrieval finds focused chunks, then selectively expands to neighboring passages or parent sections within a token budget. Tables need their headers and footnotes. I test multi-section questions and compare expanded context against the baseline instead of assuming larger chunks always solve the problem.

<details>
<summary>展开详解与追问</summary>

Explanation

Use child chunks for matching and parent sections for context, carrying document-wide definitions and units as metadata. More context can improve support but also adds irrelevant text and cost.

Follow-up

- Does MMR guarantee different sources?
  No. It encourages diversity based on similarity; use explicit source constraints when required and validate evidence coverage.

</details>
</details>
<!-- /interview-answer -->

- Q044 — How would you efficiently generate and store embeddings for products and queries in a chatbot application?（来源：[questions.md:55](interview/questions/questions.md)）

<!-- interview-answer Q044 -->
<details>
<summary>展开答案 · Q044</summary>

Interview Answer

I would normalize product text, attach stable IDs and content hashes, batch embedding requests within provider limits and only recompute changed records. I store vectors with model version, dimensions and metadata; query embeddings use the compatible model. Caches need invalidation on model or content changes. I benchmark retrieval quality and index update throughput, not only embedding-call speed.

<details>
<summary>展开详解与追问</summary>

Explanation

Batch product embeddings, deduplicate by content hash and record model versions. Query embeddings are generated online or cached within valid privacy and version boundaries.

Follow-up

- When do you re-embed?
  When content or the embedding model changes; changing generation models alone does not necessarily require it.

</details>
</details>
<!-- /interview-answer -->

- Q045 — How would you handle the problem of a model hallucinating when no information is found in the given context?（来源：[questions.md:56](interview/questions/questions.md)；[01-theory.md:34](interview/questions/01-theory.md)）

<!-- interview-answer Q045 -->
<details>
<summary>展开答案 · Q045</summary>

Interview Answer

I would make insufficient evidence an explicit outcome and evaluate it with unanswerable examples. Retrieval scores alone are not reliable confidence probabilities, so I combine evidence checks, answer support checks and calibrated decision rules. The system can ask for clarification or say it lacks enough information. For critical values I require a source or a deterministic tool result rather than allowing a plausible guess.

<details>
<summary>展开详解与追问</summary>

Explanation

A low retrieval score is only one signal; even highly similar text may omit the answer. Train and test an explicit unsupported-answer path against realistic near-match questions.

Follow-up

- Can a prompt guarantee no hallucination?
  No. Combine evidence constraints, validation, abstention and monitoring, and report remaining failure rates.

</details>
</details>
<!-- /interview-answer -->

- Q046 — What retrieval-augmented generation (RAG) projects have you worked on?（来源：[questions.md:57](interview/questions/questions.md)）

<!-- interview-answer Q046 -->
<details>
<summary>展开答案 · Q046</summary>

Interview Answer

My current AI project is Risk Copilot, which combines retrieval with financial-risk workflows. AI generated much of the implementation, and I am developing deeper ownership by tracing the code, examining poor retrieval results and testing corner cases. My improvement plan separates retrieval metrics from answer quality and compares chunking, embedding choices and diversity. I would only quote measured improvements after running and reviewing the experiments.

<details>
<summary>展开详解与追问</summary>

Explanation

The confirmed project is Risk Copilot, largely AI-assisted. Discuss actual retrieval problems and code you can demonstrate; planned metrics and production features remain future work.

Follow-up

- What evidence strengthens this answer?
  A reproducible failing query, inspected retrieved chunks and a measured before/after experiment once completed.

</details>
</details>
<!-- /interview-answer -->

- Q047 — Design a question-answering system over internal documentation.（来源：[questions.md:58](interview/questions/questions.md)）

<!-- interview-answer Q047 -->
<details>
<summary>展开答案 · Q047</summary>

Interview Answer

I would index internal documentation with document IDs, versions, source spans and access scopes. A query uses authorization-aware retrieval, reranking if useful and evidence-linked generation. I would handle document deletion and permission changes explicitly and prevent stale cache entries from bypassing them. Evaluation includes exact terminology, multi-document questions, missing answers and cross-user access tests.

<details>
<summary>展开详解与追问</summary>

Explanation

Model the document lifecycle, authorization and evidence trace, not just a vector index. An internal QA service needs update handling and a clear response when no supported answer exists.

Follow-up

- What would you build first?
  One end-to-end document source with a small judged query set and visible citations, then expand based on measured failures.

</details>
</details>
<!-- /interview-answer -->

- Q048 — How do you ensure the quality of data that an LLM interacts with?（来源：[questions.md:59](interview/questions/questions.md)）

<!-- interview-answer Q048 -->
<details>
<summary>展开答案 · Q048</summary>

Interview Answer

I check source authority, freshness, completeness, duplicates, parsing quality and schema or unit consistency before the data reaches the model. I retain provenance and quarantine failed records instead of silently repairing uncertain facts. For financial data I also check periods and revision rules. Data-quality metrics and sampled human review complement model evaluation because a faithful answer can still repeat bad source data.

<details>
<summary>展开详解与追问</summary>

Explanation

Validate source quality, schema, provenance, freshness and permissions before the LLM sees data. Retrieval cannot recover text lost during parsing, and prompting cannot repair a wrong unit silently.

Follow-up

- How do you prioritize data fixes?
  By downstream error impact and frequency, using traceable failing cases rather than cleaning every field indiscriminately.

</details>
</details>
<!-- /interview-answer -->

- Q049 — Compare sparse vs. dense retrieval. When would you use each?（来源：[questions.md:60](interview/questions/questions.md)）

<!-- interview-answer Q049 -->
<details>
<summary>展开答案 · Q049</summary>

Interview Answer

Sparse retrieval, such as BM25, is strong for exact terms, identifiers and rare keywords. Dense retrieval is useful for semantic paraphrases but can blur negation, dates or numerical constraints. I usually benchmark a hybrid candidate set with metadata filtering, then rerank if it earns its cost. The choice should reflect labeled query types rather than a preference for vector databases.

<details>
<summary>展开详解与追问</summary>

Explanation

Sparse retrieval handles exact terms well; dense retrieval captures semantic similarity. Neither dominates for all queries, and hybrid retrieval can recover complementary candidates.

Follow-up

- Why do tickers favor lexical checks?
  A one-character difference can identify another asset even when the surrounding descriptions are semantically similar.

</details>
</details>
<!-- /interview-answer -->

- Q050 — What are common RAG failure points and how do you debug them?（来源：[questions.md:61](interview/questions/questions.md)；[01-theory.md:35](interview/questions/01-theory.md)）

<!-- interview-answer Q050 -->
<details>
<summary>展开答案 · Q050</summary>

Interview Answer

I localize the failure: ingestion, chunking, filtering, candidate retrieval, reranking, context assembly or generation. I inspect the actual evidence for a failed query and compare it with a reference answer. If the answer is absent from candidates, prompt changes will not fix retrieval. I change one component at a time and rerun a versioned regression set with quality, latency and cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Use a trace containing parsed text, query transformation, candidates, ranking, final context and answer. Change one stage at a time against the same failing examples.

Follow-up

- How do you isolate generation failure?
  Supply verified supporting context; if the answer still fails, retrieval is not the only cause.

</details>
</details>
<!-- /interview-answer -->

- Q051 — How do you protect sensitive/confidential data in a RAG pipeline?（来源：[questions.md:62](interview/questions/questions.md)）

<!-- interview-answer Q051 -->
<details>
<summary>展开答案 · Q051</summary>

Interview Answer

I enforce authentication and document-level authorization before retrieval and tool execution, minimize data sent to models, and restrict logs and caches by access scope. I also handle deletion, retention and secrets separately. Retrieved text is untrusted input, so it cannot grant permissions. I test cross-tenant queries and cache hits rather than relying on a prompt instruction to keep data confidential.

<details>
<summary>展开详解与追问</summary>

Explanation

Apply least-privilege access, tenant isolation, appropriate encryption and retention, and redaction where suitable. Cache keys and logs are common leakage paths even when the primary index is filtered.

Follow-up

- Is a prompt instruction to respect permissions sufficient?
  No. Authorization must be enforced outside the model for every data and tool operation.

</details>
</details>
<!-- /interview-answer -->

- Q052 — What vector databases have you used? Which ones and why?（来源：[questions.md:63](interview/questions/questions.md)）

<!-- interview-answer Q052 -->
<details>
<summary>展开答案 · Q052</summary>

Interview Answer

I would name only the vector store I can verify in my own project and explain what I actually configured. I would compare alternatives on filtering, update semantics, retrieval quality, operational burden, scale and cost. My current experience is a learning project, so I would not claim operating a large production vector database. I can discuss the measured workload and the next scale limitation honestly.

<details>
<summary>展开详解与追问</summary>

Explanation

Personal experience must be verified from the actual repository configuration. Explain the database you used and its measured trade-offs; comparing products is not the same as operating them.

Follow-up

- How would you choose a vector store?
  Start from scale, filtering, durability, update frequency, operations and existing stack, then benchmark representative retrieval.

</details>
</details>
<!-- /interview-answer -->

- Q053 — You have a financial report where page 1 says "all amounts in thousands." How do you handle document-wide context when chunking page by page?（来源：[questions.md:64](interview/questions/questions.md)）

<!-- interview-answer Q053 -->
<details>
<summary>展开答案 · Q053</summary>

Interview Answer

I would extract the document-wide unit declaration and attach it to relevant chunks as structured metadata, with a reference to the original statement. Table extraction would preserve headings and footnotes, and the calculation layer would normalize units explicitly. I would test a query whose retrieved page omits the declaration. The model should not infer thousands or millions from convention.

<details>
<summary>展开详解与追问</summary>

Explanation

Carry the report-level unit into each relevant chunk's metadata and resolve local overrides. Preserve the original number and unit rather than multiplying blindly during ingestion.

Follow-up

- What if one table says millions?
  The local table qualifier overrides the general default for that table; cite and record that scope explicitly.

</details>
</details>
<!-- /interview-answer -->

- Q054 — What is hybrid search? When would you combine vector search with keyword search (BM25)?（来源：[questions.md:65](interview/questions/questions.md)）

<!-- interview-answer Q054 -->
<details>
<summary>展开答案 · Q054</summary>

Interview Answer

Hybrid search combines lexical and semantic retrieval, often through rank fusion or a learned reranker. I use it when queries mix exact entities, such as a ticker or clause number, with paraphrased intent. Scores from different retrievers are not automatically comparable. I evaluate fusion weights or rank-based fusion on held-out queries and preserve authorization filters in both paths.

<details>
<summary>展开详解与追问</summary>

Explanation

Hybrid search merges lexical and dense candidate lists. RRF combines ranks without equating raw BM25 and cosine scores; weighted score fusion requires normalization and tuning.

Follow-up

- How do you know hybrid helped?
  Compare retrieval coverage and final answer support on the same held-out queries, including exact identifiers and paraphrases.

</details>
</details>
<!-- /interview-answer -->

- Q055 — What is re-ranking and why is it needed on top of vector retrieval? Explain cross-encoder vs. bi-encoder.（来源：[questions.md:66](interview/questions/questions.md)）

<!-- interview-answer Q055 -->
<details>
<summary>展开答案 · Q055</summary>

Interview Answer

A bi-encoder embeds queries and documents separately, making large-scale retrieval efficient. A cross-encoder jointly processes each query-document pair, often improving relevance judgments at greater per-candidate cost. I retrieve a manageable candidate pool, then rerank it if the quality gain justifies latency. Reranking cannot recover evidence that the first stage never retrieved.

<details>
<summary>展开详解与追问</summary>

Explanation

A bi-encoder precomputes document vectors cheaply; a cross-encoder jointly scores query-document pairs and is usually more expensive. Rerank a bounded candidate set after recall-oriented retrieval.

Follow-up

- Can reranking fix missing evidence?
  No. It cannot select documents absent from the candidate set.

</details>
</details>
<!-- /interview-answer -->

- Q056 — How do you scale a RAG system to 10M+ articles? Discuss sharding, caching, and retrieval optimization.（来源：[questions.md:67](interview/questions/questions.md)）

<!-- interview-answer Q056 -->
<details>
<summary>展开答案 · Q056</summary>

Interview Answer

I would separate ingestion from serving, partition indexes according to access patterns, use ANN retrieval with metadata filtering and track incremental updates. I would benchmark recall-latency trade-offs, shard fan-out and tail latency before adding replicas or caches. Versioned indexes support safe rebuilds. Ten million articles alone does not specify capacity: chunk count, dimensions, QPS and filters determine the actual load.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate ingestion throughput from query serving, partition with access and workload in mind, and benchmark ANN recall under filters. Cache invalidation and hot partitions matter alongside total corpus size.

Follow-up

- What is the danger of premature sharding?
  It adds operational complexity and can reduce recall or require expensive cross-shard fan-out without a demonstrated need.

</details>
</details>
<!-- /interview-answer -->

- Q057 — Your RAG system returns relevant documents but users still can't find the answer. How do you transform it from a search engine into an answer engine?（来源：[questions.md:68](interview/questions/questions.md)）

<!-- interview-answer Q057 -->
<details>
<summary>展开答案 · Q057</summary>

Interview Answer

I would turn retrieved evidence into a concise answer that addresses the user's exact question, with supporting citations and unresolved gaps. I would inspect whether the relevant passage is actually in the assembled context and whether tables or cross-document relationships were lost. Success should be measured by answer usefulness and correctness, not merely whether a relevant document appeared in the search results.

<details>
<summary>展开详解与追问</summary>

Explanation

Retrieve evidence at the level needed to answer, compose supported claims and expose citations. A list of relevant links is useful search, but it does not complete the user's information task.

Follow-up

- How do you judge answer completeness?
  Break the question into required facts and verify each against evidence, while marking unsupported parts.

</details>
</details>
<!-- /interview-answer -->

- Q058 — How do you evaluate a RAG pipeline? What metrics would you use? (NDCG, MRR, precision@k, recall)（来源：[questions.md:69](interview/questions/questions.md)）

<!-- interview-answer Q058 -->
<details>
<summary>展开答案 · Q058</summary>

Interview Answer

I evaluate retrieval and generation separately. Recall@k measures coverage of labeled relevant evidence; precision@k measures the useful fraction returned; MRR emphasizes the first relevant hit; nDCG accounts for graded relevance and rank. I then check answer correctness, citation support, abstention, latency and cost. Label completeness and the relevance unit matter, so I inspect failures rather than optimizing one aggregate score blindly.

<details>
<summary>展开详解与追问</summary>

Explanation

Recall@k is relevant items retrieved divided by all labeled relevant items; precision@k is relevant retrieved divided by k. MRR emphasizes the first relevant result; NDCG supports graded relevance and rank position.

Follow-up

- Does higher recall guarantee a better answer?
  No. Extra irrelevant context, missing reasoning or incorrect generation can still reduce end-to-end quality.

</details>
</details>
<!-- /interview-answer -->


<a id="day-04"></a>

### 周四 10/8

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: GROUP BY, HAVING, CASE, Aggregations<br>LeetCode: [182. Duplicate Emails](https://leetcode.com/problems/duplicate-emails/); [596. Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/); [620. Not Boring Movies](https://leetcode.com/problems/not-boring-movies/)<br>资料：[GROUP BY](Study%20topics/group-by.html); [HAVING](Study%20topics/having.html); [CASE](Study%20topics/case.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [MAE; RMSE](Study%20topics/mae-rmse.html) · [Notebook](notebook/04_mae_rmse.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Data Modeling and Indexes](Study%20topics/data-modeling-and-indexes.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Retrieval Dataset and Label Review<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-04) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / RAG Systems; Technical Questions / Agents and Tool Use — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Prompting vs. RAG vs. Fine-Tuning](Study%20topics/prompting-vs-rag-vs-fine-tuning.html); [LoRA](Study%20topics/lora.html); [Quantization](Study%20topics/quantization.html); [Golden Datasets](Study%20topics/golden-datasets.html); [Hard Negatives](Study%20topics/hard-negatives.html) |


<!-- quantvault-day 04 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1613 · Loss Function Minimizers and Regression Variants](https://quantvault.org/problems.html?id=1613) · Regression · Medium

先修：先读MAE、RMSE；Loss是训练目标，Metric是评价方式，两者可以不同。

本次范围：Conceptual。只比较Squared Loss与Absolute Loss，以及均值/中位数对应关系；不要求完成所有回归变体推导。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-04)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q059 — How do you handle citations and source attribution in a RAG system?（来源：[questions.md:70](interview/questions/questions.md)；[01-theory.md:36](interview/questions/01-theory.md)）

<!-- interview-answer Q059 -->
<details>
<summary>展开答案 · Q059</summary>

Interview Answer

Each chunk carries a stable document version and source location. Generated claims reference those evidence IDs, and the application resolves them into source links or spans. I check whether the cited text supports the specific claim, not just whether the URL exists. Unsupported statements should be removed or qualified, and regenerated answers should not accidentally cite an outdated version.

<details>
<summary>展开详解与追问</summary>

Explanation

Store stable document and span identifiers during ingestion and bind citations to actual evidence used. A valid URL alone does not establish that its content supports the claim.

Follow-up

- How do you test citations?
  Check both resolvability and entailment of the associated claim, including page and version correctness.

</details>
</details>
<!-- /interview-answer -->

- Q060 — How does Approximate Nearest Neighbor (ANN) search work? Explain HNSW indexing.（来源：[questions.md:71](interview/questions/questions.md)）

<!-- interview-answer Q060 -->
<details>
<summary>展开答案 · Q060</summary>

Interview Answer

ANN search trades exact nearest-neighbor guarantees for faster retrieval. HNSW builds a multilayer proximity graph: search starts in sparse upper layers and moves toward a promising region, then explores more neighbors in the lower layer. Construction and search parameters affect memory, build time, recall and latency. I benchmark filtered queries too, because metadata restrictions can change performance substantially.

<details>
<summary>展开详解与追问</summary>

Explanation

HNSW navigates a layered proximity graph to approximate nearest neighbors. Search breadth trades latency for recall; memory and filtering behavior depend on the implementation.

Follow-up

- How would you measure ANN recall?
  Compare approximate results against exact nearest neighbors on a representative sample using the same distance metric.

</details>
</details>
<!-- /interview-answer -->

- Q061 — Where do embeddings fail? Discuss negation, temporal reasoning, and precision requirements.（来源：[questions.md:72](interview/questions/questions.md)）

<!-- interview-answer Q061 -->
<details>
<summary>展开答案 · Q061</summary>

Interview Answer

Embeddings can place sentences with opposite meanings close together, miss time ordering and underweight exact numbers or identifiers. Similarity is not logical entailment. I add lexical retrieval, structured filters, entity and date checks, and task-specific reranking when appropriate. For financial questions I require explicit evidence for the company, period and unit rather than trusting semantic proximity alone.

<details>
<summary>展开详解与追问</summary>

Explanation

Dense similarity may blur negation, numbers and time qualifiers. Combine semantic retrieval with structured filters and exact checks where those details determine correctness.

Follow-up

- Can a higher-dimensional embedding solve all these issues?
  No. Training objective and evaluation matter; dimensionality alone provides no guarantee.

</details>
</details>
<!-- /interview-answer -->

- Q062 — What is semantic caching and how can it reduce cost and latency in a RAG system?（来源：[questions.md:73](interview/questions/questions.md)）

<!-- interview-answer Q062 -->
<details>
<summary>展开答案 · Q062</summary>

Interview Answer

Semantic caching reuses a prior answer for a meaning-equivalent request rather than an identical string. I treat vector similarity as a candidate match, then verify relevant entities, permissions, versions and freshness. It can reduce model calls, but a false cache hit is a correctness failure. I compare cost savings with answer-quality and cross-user isolation tests before enabling it broadly.

<details>
<summary>展开详解与追问</summary>

Explanation

Semantic caches reuse answers for similar requests, so a false match can return a wrong answer very quickly. Include tenant, source version and relevant context in eligibility and invalidation rules.

Follow-up

- What should not be semantically cached broadly?
  Personalized, permission-sensitive or rapidly changing answers unless the cache preserves their full scope and freshness contract.

</details>
</details>
<!-- /interview-answer -->

- Q063 — Design a RAG system that maintains context across multi-turn conversations.（来源：[questions.md:74](interview/questions/questions.md)）

<!-- interview-answer Q063 -->
<details>
<summary>展开答案 · Q063</summary>

Interview Answer

I retain recent turns and structured conversational state, resolve references into a standalone retrieval query, and fetch fresh authorized evidence. I distinguish remembered user preferences from factual source records. Citations should point to evidence used for the current answer, and stale summaries must not override it. Evaluation includes pronouns, topic switches, corrections and permission changes across turns.

<details>
<summary>展开详解与追问</summary>

Explanation

Resolve follow-up references using conversation state, then retrieve fresh authorized evidence. Keep the original and rewritten queries in traces so mistaken reference resolution is debuggable.

Follow-up

- Should the entire conversation always be embedded?
  No. A focused query plus relevant state is often clearer and cheaper, and avoids unrelated history contaminating retrieval.

</details>
</details>
<!-- /interview-answer -->

- Q064 — What are the key tradeoffs when designing a RAG system (latency vs accuracy, chunk size vs context, cost vs quality)?（来源：[questions.md:75](interview/questions/questions.md)）

<!-- interview-answer Q064 -->
<details>
<summary>展开答案 · Q064</summary>

Interview Answer

I balance evidence coverage, ranking precision, context completeness, token cost and latency. Larger chunks may preserve meaning but crowd out other evidence; reranking can improve ordering at extra cost; more candidates may help recall but add noise. I fix a representative evaluation set and compare configurations under the same budget. Critical correctness constraints remain hard requirements rather than averaging into a quality score.

<details>
<summary>展开详解与追问</summary>

Explanation

Tune chunking, retrieval count, reranking and model choice against paired quality-cost-latency measurements. Whole sections can restore context while exceeding budget or distracting generation.

Follow-up

- What is a useful experiment?
  Freeze queries and source data, change one configuration, and compare evidence recall, answer support, tokens and tail latency.

</details>
</details>
<!-- /interview-answer -->

- Q065 — How do you optimize RAG latency in production?（来源：[questions.md:76](interview/questions/questions.md)）

<!-- interview-answer Q065 -->
<details>
<summary>展开答案 · Q065</summary>

Interview Answer

I trace query preparation, embedding, retrieval, reranking, prompt assembly and generation separately. Then I optimize the measured critical path: cache safe reusable work, reduce redundant context, bound candidate counts or parallelize independent calls. Streaming can improve time to first token without reducing total duration. I rerun quality and failure evaluations after each optimization and report load and sample size with latency percentiles.

<details>
<summary>展开详解与追问</summary>

Explanation

Measure parsing/query steps, retrieval, reranking, prefill and decoding separately. Streaming improves perceived responsiveness but does not necessarily reduce total completion time.

Follow-up

- Which optimization comes first?
  The measured bottleneck, while preserving the quality and freshness requirements of the actual workload.

</details>
</details>
<!-- /interview-answer -->

- Q471 — What's RAG? Explain the complete process.（来源：[01-theory.md:31](interview/questions/01-theory.md)）

<!-- interview-answer Q471 -->
<details>
<summary>展开答案 · Q471</summary>

Interview Answer

RAG combines retrieval with generation. Offline, I parse and clean documents, attach provenance and permissions, chunk them and build searchable indexes. Online, I retrieve candidates, optionally rerank and expand context, then generate an answer supported by that context with citations. I evaluate evidence retrieval and answer quality separately, and abstain when the retrieved evidence cannot support the requested claim.

<details>
<summary>展开详解与追问</summary>

Explanation

RAG is a system pattern rather than a single model. Offline ingestion and indexing feed online retrieval, context assembly and generation; citations and abstention require additional design.

Follow-up

- Where can a correct answer be lost?
  During extraction, chunking, retrieval, reranking, context truncation or generation; inspect each stage separately.

</details>
</details>
<!-- /interview-answer -->

- Q472 — Text vs Vector search. When would you use each?（来源：[01-theory.md:32](interview/questions/01-theory.md)）

<!-- interview-answer Q472 -->
<details>
<summary>展开答案 · Q472</summary>

Interview Answer

Sparse retrieval, such as BM25, is strong for exact terms, identifiers and rare keywords. Dense retrieval is useful for semantic paraphrases but can blur negation, dates or numerical constraints. I usually benchmark a hybrid candidate set with metadata filtering, then rerank if it earns its cost. The choice should reflect labeled query types rather than a preference for vector databases.

<details>
<summary>展开详解与追问</summary>

Explanation

Sparse retrieval handles exact terms well; dense retrieval captures semantic similarity. Neither dominates for all queries, and hybrid retrieval can recover complementary candidates.

Follow-up

- Why do tickers favor lexical checks?
  A one-character difference can identify another asset even when the surrounding descriptions are semantically similar.

</details>
</details>
<!-- /interview-answer -->

- Q473 — You're making a system for huge PDF reports. How would you process them?（来源：[01-theory.md:33](interview/questions/01-theory.md)）

<!-- interview-answer Q473 -->
<details>
<summary>展开答案 · Q473</summary>

Interview Answer

I preserve a document hierarchy and attach title, section, date, units and parent IDs to each chunk. Retrieval finds focused chunks, then selectively expands to neighboring passages or parent sections within a token budget. Tables need their headers and footnotes. I test multi-section questions and compare expanded context against the baseline instead of assuming larger chunks always solve the problem.

<details>
<summary>展开详解与追问</summary>

Explanation

Use child chunks for matching and parent sections for context, carrying document-wide definitions and units as metadata. More context can improve support but also adds irrelevant text and cost. Before chunking, run asynchronous bounded parsing/OCR with page-level provenance, content hashes and resumable checkpoints. Quarantine failed pages rather than silently presenting an incomplete report as complete.

Follow-up

- Does MMR guarantee different sources?
  No. It encourages diversity based on similarity; use explicit source constraints when required and validate evidence coverage.

</details>
</details>
<!-- /interview-answer -->

- Q474 — What is semantic caching?（来源：[01-theory.md:37](interview/questions/01-theory.md)）

<!-- interview-answer Q474 -->
<details>
<summary>展开答案 · Q474</summary>

Interview Answer

Semantic caching reuses a prior answer for a meaning-equivalent request rather than an identical string. I treat vector similarity as a candidate match, then verify relevant entities, permissions, versions and freshness. It can reduce model calls, but a false cache hit is a correctness failure. I compare cost savings with answer-quality and cross-user isolation tests before enabling it broadly.

<details>
<summary>展开详解与追问</summary>

Explanation

Semantic caches reuse answers for similar requests, so a false match can return a wrong answer very quickly. Include tenant, source version and relevant context in eligibility and invalidation rules.

Follow-up

- What should not be semantically cached broadly?
  Personalized, permission-sensitive or rapidly changing answers unless the cache preserves their full scope and freshness contract.

</details>
</details>
<!-- /interview-answer -->

- Q475 — How do you scale a RAG system to 10M+ articles?（来源：[01-theory.md:38](interview/questions/01-theory.md)）

<!-- interview-answer Q475 -->
<details>
<summary>展开答案 · Q475</summary>

Interview Answer

I would separate ingestion from serving, partition indexes according to access patterns, use ANN retrieval with metadata filtering and track incremental updates. I would benchmark recall-latency trade-offs, shard fan-out and tail latency before adding replicas or caches. Versioned indexes support safe rebuilds. Ten million articles alone does not specify capacity: chunk count, dimensions, QPS and filters determine the actual load.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate ingestion throughput from query serving, partition with access and workload in mind, and benchmark ANN recall under filters. Cache invalidation and hot partitions matter alongside total corpus size.

Follow-up

- What is the danger of premature sharding?
  It adds operational complexity and can reduce recall or require expensive cross-shard fan-out without a demonstrated need.

</details>
</details>
<!-- /interview-answer -->

- Q476 — What are the key tradeoffs when designing a RAG system?（来源：[01-theory.md:39](interview/questions/01-theory.md)）

<!-- interview-answer Q476 -->
<details>
<summary>展开答案 · Q476</summary>

Interview Answer

I balance evidence coverage, ranking precision, context completeness, token cost and latency. Larger chunks may preserve meaning but crowd out other evidence; reranking can improve ordering at extra cost; more candidates may help recall but add noise. I fix a representative evaluation set and compare configurations under the same budget. Critical correctness constraints remain hard requirements rather than averaging into a quality score.

<details>
<summary>展开详解与追问</summary>

Explanation

Tune chunking, retrieval count, reranking and model choice against paired quality-cost-latency measurements. Whole sections can restore context while exceeding budget or distracting generation.

Follow-up

- What is a useful experiment?
  Freeze queries and source data, change one configuration, and compare evidence recall, answer support, tokens and tail latency.

</details>
</details>
<!-- /interview-answer -->

- Q066 — What is an AI agent and what is its role in a broader system?（来源：[questions.md:80](interview/questions/questions.md)）

<!-- interview-answer Q066 -->
<details>
<summary>展开答案 · Q066</summary>

Interview Answer

An AI agent uses a model to choose actions or tools in pursuit of a goal, observes results and updates its next step. It is one component inside a larger system that supplies permissions, state, execution and monitoring. I would keep its authority bounded and use deterministic workflow logic where the process is already known.

<details>
<summary>展开详解与追问</summary>

Explanation

An agent selects actions based on goals and observations within a surrounding application. Tools, state and enforced boundaries determine what it can actually do.

Follow-up

- Does a conversational interface make a system an agent?
  No. The important distinction is adaptive action selection, not whether the interface looks like chat.

</details>
</details>
<!-- /interview-answer -->

- Q067 — What's the difference between an agent and a simple LLM chain? (reported across multiple companies)（来源：[questions.md:81](interview/questions/questions.md)）

<!-- interview-answer Q067 -->
<details>
<summary>展开答案 · Q067</summary>

Interview Answer

A simple chain follows a predetermined sequence of steps. An agent delegates some runtime choice, such as the next tool or whether more information is needed, to a model. The difference is control flow, not the number of prompts. I use a chain when it is sufficient because it is easier to test, budget and recover.

<details>
<summary>展开详解与追问</summary>

Explanation

A fixed chain executes predetermined steps; an agent chooses steps or tools dynamically. Hybrid workflows often use deterministic outer structure and bounded model decisions inside.

Follow-up

- Why prefer a chain sometimes?
  It is easier to test, budget and debug when the task's sequence is already known.

</details>
</details>
<!-- /interview-answer -->

- Q068 — What makes an AI system truly agentic and what does not qualify?（来源：[questions.md:82](interview/questions/questions.md)）

<!-- interview-answer Q068 -->
<details>
<summary>展开答案 · Q068</summary>

Interview Answer

I call a system agentic when observations influence model-selected actions over multiple steps toward a goal. A single generation call or a fixed pipeline does not become agentic merely because it uses an LLM. The useful question is which decisions need that flexibility and how the application verifies progress, constrains authority and knows when to stop.

<details>
<summary>展开详解与追问</summary>

Explanation

Autonomy is a spectrum involving decisions, tools and feedback. Rebranding a fixed prompt sequence as a multi-agent system does not create adaptive behavior.

Follow-up

- What evidence shows useful agency?
  The system selects appropriate actions for changing inputs and improves task completion within measurable limits.

</details>
</details>
<!-- /interview-answer -->

- Q069 — When is an agentic architecture the wrong solution?（来源：[questions.md:83](interview/questions/questions.md)）

<!-- interview-answer Q069 -->
<details>
<summary>展开答案 · Q069</summary>

Interview Answer

An agent is a poor fit when the task has a stable deterministic process, strict latency limits, unacceptable action risk or insufficient evaluation coverage. A normal API, classifier or fixed workflow may be simpler and more reliable. I would introduce model-driven planning only for a demonstrated source of variability that outweighs the added cost and debugging complexity.

<details>
<summary>展开详解与追问</summary>

Explanation

A known deterministic workflow rarely needs open-ended planning. Extra autonomy adds latency, cost and unpredictable paths without necessarily improving the outcome.

Follow-up

- When would you introduce an agent?
  When the action sequence genuinely depends on intermediate observations and a bounded agent outperforms a simpler baseline.

</details>
</details>
<!-- /interview-answer -->

- Q070 — How do you define and enforce agent autonomy boundaries?（来源：[questions.md:84](interview/questions/questions.md)）

<!-- interview-answer Q070 -->
<details>
<summary>展开答案 · Q070</summary>

Interview Answer

I define permitted tools, objects, spend, duration, iteration count and actions requiring approval. The executor enforces these rules using authenticated identity and validated arguments; the prompt only communicates them. An approval is bound to a specific payload and version. Attempts outside the boundary fail explicitly and are logged without revealing sensitive data.

<details>
<summary>展开详解与追问</summary>

Explanation

Express boundaries as allowed tools, data scopes, budgets and approval rules enforced by code. Model instructions explain the rules but cannot be the sole enforcement layer.

Follow-up

- Can the agent grant itself more permissions?
  No. Permission changes require an external authorized control path.

</details>
</details>
<!-- /interview-answer -->

- Q071 — What are the essential components of an agent beyond an LLM?（来源：[questions.md:85](interview/questions/questions.md)；[01-theory.md:47](interview/questions/01-theory.md)）

<!-- interview-answer Q071 -->
<details>
<summary>展开答案 · Q071</summary>

Interview Answer

Beyond the model, an agent needs tool contracts, a controlled executor, state and memory, an orchestration loop, termination rules, permission checks and observability. It also needs an evaluation set that covers failed tools, ambiguity and inappropriate actions. A useful agent is not just a loop that feeds tool output back into a prompt indefinitely.

<details>
<summary>展开详解与追问</summary>

Explanation

State, tools, observation handling, a controller and termination checks turn a model into an executable system. Evaluation and traces make its behavior inspectable.

Follow-up

- What is the source of truth for completion?
  Validated application state or accepted artifacts, not a model statement that it is finished.

</details>
</details>
<!-- /interview-answer -->


<a id="day-05"></a>

### 周五 10/9

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Sorting; Binary Search; Complexity Analysis<br>LeetCode: [704. Binary Search](https://leetcode.com/problems/binary-search/); [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/); [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)<br>资料：[Sorting](Study%20topics/sorting.html); [Binary Search](Study%20topics/binary-search.html); [Complexity Analysis](Study%20topics/complexity-analysis.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Cache and API Service](Study%20topics/cache-and-api-service.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Metric Audit and Retrieval Baseline<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-05) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Agents and Tool Use — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities<br>当日概念索引（按需）：[Embeddings](Study%20topics/embeddings.html); [Vector Similarity](Study%20topics/vector-similarity.html); [Recall@k](Study%20topics/recall-k.html); [Precision@k](Study%20topics/precision-k.html); [MRR](Study%20topics/mrr.html); [nDCG](Study%20topics/ndcg.html); [Caching](Study%20topics/caching.html); [Freshness](Study%20topics/freshness.html) |

<!-- quantvault-day 05 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy

先修：补读R-Squared = 1 − SSE/SST；它不同于RMSE，样本外可能为负。

本次范围：Conceptual。先识别训练好、验证差的过拟合，再解释R-Squared衡量相对均值基线的拟合；Cross-Validation细节留到Day 17。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-05)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q072 — How do you prevent agents from over-reasoning or over-planning?（来源：[questions.md:86](interview/questions/questions.md)）

<!-- interview-answer Q072 -->
<details>
<summary>展开答案 · Q072</summary>

Interview Answer

I set a small planning budget, prefer direct execution for simple requests, and require each extra step to produce useful evidence or progress. I cap iterations, cost and wall time and detect repeated actions. I compare task success against a simpler workflow baseline. More reasoning text is not a success metric and can hide a lack of actual progress.

<details>
<summary>展开详解与追问</summary>

Explanation

Set step, time, token and tool budgets, and require progress toward an acceptance condition. A shorter plan is not necessarily better, but repeated unproductive planning should trigger intervention.

Follow-up

- What if the budget runs out mid-task?
  Return verified partial work and an explicit unresolved state, rather than claim success.

</details>
</details>
<!-- /interview-answer -->

- Q073 — Walk through a production-ready agent architecture.（来源：[questions.md:87](interview/questions/questions.md)）

<!-- interview-answer Q073 -->
<details>
<summary>展开答案 · Q073</summary>

Interview Answer

My architecture would put an authenticated API ahead of a durable state machine. A planner proposes schema-validated actions; a policy layer approves them; bounded tools execute and write results to persistent state. Checkpoints support recovery, and consequential effects are idempotent. Traces record decisions and outcomes, while offline and online evaluations check correctness, permissions, cost and completion.

<details>
<summary>展开详解与追问</summary>

Explanation

Use an authenticated API, durable task state, bounded controller, authorized tools and observable execution. Retry policies and human review belong in the architecture before large-scale autonomy.

Follow-up

- How do you recover after a worker crash?
  Resume from persisted state and reconcile idempotent side effects rather than replaying the whole conversation blindly.

</details>
</details>
<!-- /interview-answer -->

- Q074 — What logic belongs in the orchestrator vs the LLM?（来源：[questions.md:88](interview/questions/questions.md)）

<!-- interview-answer Q074 -->
<details>
<summary>展开答案 · Q074</summary>

Interview Answer

The orchestrator owns deterministic invariants: permissions, state transitions, budgets, retries, deadlines, approval and persistence. The model handles language interpretation and choices that benefit from flexible reasoning. I would not let model prose decide whether a user is authorized or whether a transaction committed. Keeping that boundary explicit makes the system easier to test and explain.

<details>
<summary>展开详解与追问</summary>

Explanation

The orchestrator owns state transitions, permissions and budgets; the model interprets ambiguity and proposes actions. Keep accounting and invariants deterministic.

Follow-up

- Who decides whether a payment is allowed?
  The application's policy and authorization layer, regardless of the model's proposed action.

</details>
</details>
<!-- /interview-answer -->

- Q075 — How do you design a safe and debuggable agent loop?（来源：[questions.md:89](interview/questions/questions.md)）

<!-- interview-answer Q075 -->
<details>
<summary>展开答案 · Q075</summary>

Interview Answer

I represent each iteration as observe, propose, validate, execute and record. Every tool result has a typed success or failure contract, and the next step uses the recorded result rather than an assumed success. I cap retries and iterations, detect repeated states and support cancellation. A trace should let me reproduce the failing path without collecting unnecessary sensitive content.

<details>
<summary>展开详解与追问</summary>

Explanation

Each loop iteration should produce an inspectable action proposal, validated tool call, observation and state update. Correlation IDs connect them without logging secrets.

Follow-up

- What should happen on malformed tool arguments?
  Reject or request a bounded repair with a structured error; never execute partially parsed arguments.

</details>
</details>
<!-- /interview-answer -->

- Q076 — How do you implement termination conditions in long-running agents?（来源：[questions.md:90](interview/questions/questions.md)；[01-theory.md:52](interview/questions/01-theory.md)）

<!-- interview-answer Q076 -->
<details>
<summary>展开答案 · Q076</summary>

Interview Answer

I define terminal success from validated deliverables, terminal failure from unrecoverable conditions, and separate waiting states for approval or more input. I also enforce time, token, spend and step limits. Cancellation propagates to tools where possible. Exceeding a budget returns a clear partial or failed outcome rather than allowing the model to keep planning indefinitely.

<details>
<summary>展开详解与追问</summary>

Explanation

Success, failure, cancellation and budget exhaustion are separate terminal states. A long-running job needs deadlines and resumable checkpoints, not only a maximum-token limit.

Follow-up

- How do you handle user cancellation?
  Propagate it to queued and running work, stop new side effects and report any actions already committed.

</details>
</details>
<!-- /interview-answer -->

- Q077 — How do agents decompose high-level goals into executable steps?（来源：[questions.md:91](interview/questions/questions.md)）

<!-- interview-answer Q077 -->
<details>
<summary>展开答案 · Q077</summary>

Interview Answer

I ask the model to propose a small structured plan with dependencies, required inputs and observable outputs. The orchestrator validates allowed steps and executes one bounded action at a time, updating the plan from actual results. If a step lacks a prerequisite, the agent clarifies or retrieves it. I avoid executing a long speculative plan without intermediate validation.

<details>
<summary>展开详解与追问</summary>

Explanation

Decomposition should yield verifiable subtasks with dependencies and clear outputs. A plan can be revised as evidence arrives, but revisions must respect budgets and prior committed work.

Follow-up

- How do you detect a missing prerequisite?
  Validate each step's inputs and dependencies before execution and stop for the missing information.

</details>
</details>
<!-- /interview-answer -->

- Q078 — Chain-of-thought vs tree-of-thought vs graph planning - when would you use each?（来源：[questions.md:92](interview/questions/questions.md)）

<!-- interview-answer Q078 -->
<details>
<summary>展开答案 · Q078</summary>

Interview Answer

A linear reasoning path is sufficient for many simple tasks. Tree-style search explores alternative candidate paths and can help when backtracking is valuable, at higher cost. Graph planning represents reusable states and dependencies rather than a single branch. I choose based on measurable task structure and external validation, not because a more elaborate reasoning label sounds stronger.

<details>
<summary>展开详解与追问</summary>

Explanation

Branching search explores alternatives at additional cost; graph planning shares dependencies and state. Choose complexity based on actual search benefit, not a belief that more reasoning always helps.

Follow-up

- What is the evaluation criterion?
  Task success per cost and latency budget, including failed and abandoned branches.

</details>
</details>
<!-- /interview-answer -->

- Q079 — How do you detect and stop infinite planning loops?（来源：[questions.md:93](interview/questions/questions.md)；[01-theory.md:51](interview/questions/01-theory.md)）

<!-- interview-answer Q079 -->
<details>
<summary>展开答案 · Q079</summary>

Interview Answer

I track normalized tool calls, state hashes and progress indicators to detect repeated behavior, while enforcing a hard step and time budget. Repetition is not always a loop, so I consider whether new evidence or state changes occurred. When progress stalls, I terminate, ask for clarification or route to a human rather than generating another identical plan.

<details>
<summary>展开详解与追问</summary>

Explanation

Track repeated action-state pairs, unchanged artifacts and consumed budgets. Repeating a tool can be legitimate after new evidence, so distinguish retries from unproductive cycles.

Follow-up

- What breaks a loop safely?
  A bounded retry, alternate path or explicit escalation with the repeated failure recorded.

</details>
</details>
<!-- /interview-answer -->

- Q080 — How do you handle partial observability or missing information?（来源：[questions.md:94](interview/questions/questions.md)）

<!-- interview-answer Q080 -->
<details>
<summary>展开答案 · Q080</summary>

Interview Answer

I make missing information explicit and distinguish unknown values from defaults. The agent can retrieve additional evidence, ask a targeted question or return a bounded partial answer. Tool contracts should expose uncertainty and missing fields. For consequential actions I do not allow the model to guess required parameters merely to complete the workflow.

<details>
<summary>展开详解与追问</summary>

Explanation

Represent unknowns explicitly and seek the minimum missing information. Guessing a required identifier or permission can turn uncertainty into an unsafe action.

Follow-up

- When should the agent ask a human?
  When the missing fact materially changes the action and cannot be obtained safely from authorized tools.

</details>
</details>
<!-- /interview-answer -->

- Q081 — How do agents decide a task is "done"?（来源：[questions.md:95](interview/questions/questions.md)）

<!-- interview-answer Q081 -->
<details>
<summary>展开答案 · Q081</summary>

Interview Answer

Completion means the application's success criteria are met: required artifacts exist, validation passes and relevant side effects are confirmed. The model may propose that it is done, but the orchestrator checks the state. I distinguish completed, partially completed, failed and waiting outcomes. This prevents a persuasive final message from masking unfinished or failed work.

<details>
<summary>展开详解与追问</summary>

Explanation

Define acceptance criteria before execution and check them against observable results. A tool response may confirm submission but not completion of an asynchronous job.

Follow-up

- How do you avoid premature success?
  Track pending jobs and verify their final state or artifact before marking the task complete.

</details>
</details>
<!-- /interview-answer -->

- Q082 — What planning failures are hardest to detect in production?（来源：[questions.md:96](interview/questions/questions.md)）

<!-- interview-answer Q082 -->
<details>
<summary>展开答案 · Q082</summary>

Interview Answer

The hardest failures are plausible but wrong plans: using the wrong source, skipping an unstated prerequisite, optimizing the wrong objective or declaring success after a partial failure. They may not raise exceptions. I test multi-step scenarios with independently checked outcomes and inspect intermediate decisions, especially around ambiguity, delayed results and irreversible actions.

<details>
<summary>展开详解与追问</summary>

Explanation

Silent progress toward the wrong goal is harder to detect than a crash. Validate intermediate artifacts against the user's objective, not just whether tools returned successfully.

Follow-up

- What signal helps detect drift?
  A mismatch between accepted requirements and the accumulating artifacts or decisions, checked at explicit checkpoints.

</details>
</details>
<!-- /interview-answer -->

- Q083 — How do agents decide which tool to use?（来源：[questions.md:97](interview/questions/questions.md)；[01-theory.md:48](interview/questions/01-theory.md)）

<!-- interview-answer Q083 -->
<details>
<summary>展开答案 · Q083</summary>

Interview Answer

The model chooses among clearly described tools using the request, current state and prior results. I reduce overlap in tool descriptions and specify when not to call a tool. Server-side validation checks the proposed arguments and authority. I evaluate both selection and argument correctness, including cases where asking a question or using no tool is the correct action.

<details>
<summary>展开详解与追问</summary>

Explanation

Tool selection combines task interpretation with a registry of clear capabilities and constraints. Validate the selected tool and its arguments independently of model confidence.

Follow-up

- How do you reduce selection ambiguity?
  Use distinct tool names, narrow schemas and examples that clarify overlapping responsibilities.

</details>
</details>
<!-- /interview-answer -->

- Q084 — How do you design tool schemas that reduce hallucinated actions?（来源：[questions.md:98](interview/questions/questions.md)）

<!-- interview-answer Q084 -->
<details>
<summary>展开答案 · Q084</summary>

Interview Answer

I use precise names, narrow responsibilities, typed arguments, enums, units, bounds and explicit required fields. Outputs distinguish success, absence and failure rather than returning arbitrary strings. I avoid large generic execute-anything tools. Schema compliance reduces malformed calls, but business constraints and authorization still require deterministic validation outside the model.

<details>
<summary>展开详解与追问</summary>

Explanation

Typed fields, enums, required arguments and bounded values reduce invalid actions. Tool descriptions should state side effects and scope, while validators enforce them.

Follow-up

- Should a tool accept arbitrary shell text?
  Prefer constrained operations; unrestricted commands require much stronger isolation and authorization.

</details>
</details>
<!-- /interview-answer -->

- Q085 — How do you sandbox tool execution safely?（来源：[questions.md:99](interview/questions/questions.md)；[01-theory.md:53](interview/questions/01-theory.md)）

<!-- interview-answer Q085 -->
<details>
<summary>展开答案 · Q085</summary>

Interview Answer

I run untrusted execution with minimum privileges, restricted filesystem and network access, resource and time limits, and isolated credentials. Tools expose a narrow capability rather than a general shell whenever possible. I validate inputs and outputs and retain an audit trail. Containers help packaging and isolation but are not, by themselves, a complete security policy.

<details>
<summary>展开详解与追问</summary>

Explanation

Isolate execution with least-privilege identity, restricted filesystem/network access and resource limits. A container alone is not a complete boundary if it exposes host secrets or privileged mounts.

Follow-up

- How do you handle generated code?
  Run it in a disposable restricted environment with time and resource limits, not in the application's privileged process.

</details>
</details>
<!-- /interview-answer -->

- Q086 — How do you handle tool failures, retries, and idempotency?（来源：[questions.md:100](interview/questions/questions.md)；[01-theory.md:54](interview/questions/01-theory.md)）

<!-- interview-answer Q086 -->
<details>
<summary>展开答案 · Q086</summary>

Interview Answer

I classify errors into permanent and transient, propagate an overall deadline and retry transient operations with capped backoff and jitter. For side effects, an idempotency key binds the request to a durable outcome so a timeout cannot create a duplicate effect. I record attempts separately from logical tasks and surface a clear terminal failure after the budget is exhausted.

<details>
<summary>展开详解与追问</summary>

Explanation

Retry transient failures with bounded backoff and jitter; do not retry invalid requests unchanged. Idempotency keys identify one logical side effect across repeated attempts.

Follow-up

- What if a timeout occurs after the action committed?
  Query or reconcile its status using the logical operation ID before repeating it.

Technical Sources

- [AWS: making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)

</details>
</details>
<!-- /interview-answer -->

- Q087 — What are the biggest security risks with tool-using agents?（来源：[questions.md:101](interview/questions/questions.md)；[01-theory.md:55](interview/questions/01-theory.md)）

<!-- interview-answer Q087 -->
<details>
<summary>展开答案 · Q087</summary>

Interview Answer

The largest risks include prompt injection, excessive tool permissions, cross-tenant data access, secret exposure and unvalidated code or network execution. I treat retrieved documents and tool output as untrusted content. Authorization, input validation and execution limits live outside the model. I test hostile inputs against actual tool boundaries, not just against the model's verbal refusal behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

Prompt injection, data exfiltration and unauthorized tool use arise when untrusted content influences privileged actions. Treat retrieved pages and tool outputs as data, not new authority.

Follow-up

- Can an injection detector be the only defense?
  No. Enforce permissions, tool scope and approval boundaries even if detection misses the attack.

</details>
</details>
<!-- /interview-answer -->

- Q088 — How do you control cost explosions from tool calls?（来源：[questions.md:102](interview/questions/questions.md)）

<!-- interview-answer Q088 -->
<details>
<summary>展开答案 · Q088</summary>

Interview Answer

I set per-request and per-tenant budgets for tool calls, tokens, elapsed time and expensive operations. The orchestrator counts retries and background calls, not only successful final calls. I cache safe repeat work and stop loops that do not add information. I also monitor cost per successful task, because cheaper calls can still create a more expensive failing workflow.

<details>
<summary>展开详解与追问</summary>

Explanation

Budget by task and tool, cap fan-out and retries, and record spend as execution progresses. Expensive loops can occur even when every individual call seems reasonable.

Follow-up

- What do you do near the budget limit?
  Stop low-value exploration and return verified partial results or request an explicit scope decision.

</details>
</details>
<!-- /interview-answer -->

- Q089 — Stateless vs stateful agents - tradeoffs and use cases?（来源：[questions.md:103](interview/questions/questions.md)）

<!-- interview-answer Q089 -->
<details>
<summary>展开答案 · Q089</summary>

Interview Answer

A stateless agent is simpler to scale and isolate but must reconstruct context on every request. A stateful agent supports long-running work and continuity but needs persistence, ownership, versioning and recovery semantics. I keep authoritative state outside the prompt. I would choose statefulness only where the task requires it and define expiration and deletion behavior explicitly.

<details>
<summary>展开详解与追问</summary>

Explanation

Stateless requests simplify scaling; stateful agents support continuity but require consistency, retention and recovery. External state storage can keep workers stateless while preserving task history.

Follow-up

- What must be isolated?
  User, tenant and task state, including caches and durable memory.

</details>
</details>
<!-- /interview-answer -->

- Q090 — How do you version and roll back agent behavior?（来源：[questions.md:104](interview/questions/questions.md)）

<!-- interview-answer Q090 -->
<details>
<summary>展开答案 · Q090</summary>

Interview Answer

I version model configuration, prompt, tool schemas, workflow code, retrieval index and evaluation data. A release records the compatible combination, with a known-good fallback and migration plan for persisted state. Rollback is not just changing a model name: changed tool contracts or data schemas can make an older version incompatible. I verify behavior with a small release regression set.

<details>
<summary>展开详解与追问</summary>

Explanation

Version prompts, models, tools, schemas and policies together with evaluation results. Rollback must consider state compatibility, not just switch a model name.

Follow-up

- What if a new tool schema wrote incompatible state?
  Use a migration or compatible reader before rollback; otherwise the old version may fail on new records.

</details>
</details>
<!-- /interview-answer -->

- Q091 — Describe how you would architect an AI agent system, including the agent loop, tool interfaces, memory design, orchestration technologies, and safety considerations.（来源：[questions.md:105](interview/questions/questions.md)）

<!-- interview-answer Q091 -->
<details>
<summary>展开答案 · Q091</summary>

Interview Answer

I would use a durable workflow around a bounded model loop, typed tools and a permission-aware executor. Working context holds the current task; long-term memory is scoped and provenance-aware; experiment records stay in a database. I choose an orchestration framework for needed checkpoint and approval features, not novelty. Tests cover tool selection, state recovery, unauthorized calls, termination and grounded results.

<details>
<summary>展开详解与追问</summary>

Explanation

The architecture must connect the loop, tools, short-term state, durable memory and safety controls. Select an orchestration library for required persistence and control, not as a substitute for specifying behavior.

Follow-up

- How would you test it offline?
  Use deterministic tool fixtures and provider mocks for state transitions, then separate model evaluations for decision quality.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 2 周：RAG and Retrieval Evaluation

<a id="day-06"></a>

### 周一 10/12

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Hash Maps and Two Pointers: Review<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/); [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)<br>资料：[Hash Maps](Study%20topics/hash-maps.html); [Arrays and Strings](Study%20topics/arrays-and-strings.html); [Two Pointers](Study%20topics/two-pointers.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Cache and API Service](Study%20topics/cache-and-api-service.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Chunking Experiment<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-06) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Agents and Tool Use; Technical Questions / Fine-tuning and Training — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Chunking](Study%20topics/chunking.html); [Metadata](Study%20topics/metadata.html); [Context Budgets](Study%20topics/context-budgets.html) |


<!-- quantvault-day 06 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1861 · Linear Regression, Ridge, and Lasso](https://quantvault.org/problems.html?id=1861) · Regression · Medium
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：先读Regularization讲义；L1可归零，L2通常缩小，alpha用验证选。

本次范围：Comparison。先比较OLS、Ridge与Lasso，再回答Lasso的特征选择优势及相关特征下不稳定的限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-06)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q092 — Design an agent analyzing customer support tickets, drafting responses, and escalating complex issues.（来源：[questions.md:106](interview/questions/questions.md)）

<!-- interview-answer Q092 -->
<details>
<summary>展开答案 · Q092</summary>

Interview Answer

I would classify the ticket, retrieve authorized product and account context, draft a cited response and check it against policy. Low-confidence, sensitive or unsupported cases escalate to a human; sending is a separately authorized action. I measure correct resolution, escalation quality and unsupported claims, not just deflection. Session state, idempotency and audit logs prevent duplicate or untraceable actions.

<details>
<summary>展开详解与追问</summary>

Explanation

Classify and retrieve before drafting; enforce account access and escalate policy ambiguity or high-impact actions. Evaluate draft correctness and escalation decisions separately.

Follow-up

- Does a drafted response count as ticket resolution?
  No. Resolution requires an observed user or workflow outcome, not merely generated text.

</details>
</details>
<!-- /interview-answer -->

- Q093 — Create a system where agents collaborate on research reports with citations.（来源：[questions.md:107](interview/questions/questions.md)）

<!-- interview-answer Q093 -->
<details>
<summary>展开答案 · Q093</summary>

Interview Answer

I would separate research, synthesis and verification roles around a shared versioned evidence store. Each claim must carry a source reference, and a verifier checks support and contradictions rather than merely polishing prose. A coordinator controls scope and budgets. I would compare with a single-agent baseline because multiple agents add coordination cost and can repeat each other's errors.

<details>
<summary>展开详解与追问</summary>

Explanation

Assign research and writing roles with evidence-carrying artifacts. Verify sources and reconcile conflicting claims before synthesis; multiple agents can repeat the same unsupported claim.

Follow-up

- What should a citation record contain?
  Source identity, retrieved version or date, evidence span and the claim it supports.

</details>
</details>
<!-- /interview-answer -->

- Q094 — Build an agent reviewing code and suggesting improvements.（来源：[questions.md:108](interview/questions/questions.md)；[01-theory.md:57](interview/questions/01-theory.md)）

<!-- interview-answer Q094 -->
<details>
<summary>展开答案 · Q094</summary>

Interview Answer

I would parse the changed files and relevant surrounding code, run deterministic linters and tests, then ask the model for prioritized findings with file locations, evidence and a concrete fix. I would suppress unsupported style complaints and evaluate against known bugs and clean changes. The review agent would suggest changes; applying or executing untrusted code needs separate controlled tooling.

<details>
<summary>展开详解与追问</summary>

Explanation

Static analysis and tests provide deterministic signals; the model adds contextual explanation. Treat repository content as untrusted and avoid executing arbitrary project scripts with elevated privileges.

Follow-up

- How do you reduce noisy review comments?
  Require a concrete defect, location, consequence and actionable correction; measure false positives on reviewed changes.

</details>
</details>
<!-- /interview-answer -->

- Q095 — How do you explain agentic systems to non-technical stakeholders?（来源：[questions.md:109](interview/questions/questions.md)；[01-theory.md:50](interview/questions/01-theory.md)）

<!-- interview-answer Q095 -->
<details>
<summary>展开答案 · Q095</summary>

Interview Answer

I describe an agent as software that can choose a next step, use approved tools and check the outcome, instead of following only a fixed script. I explain the specific decisions it can make, what remains under human control and what happens when it fails. I use a concrete workflow and measured success criteria rather than suggesting it behaves like an unrestricted employee.

<details>
<summary>展开详解与追问</summary>

Explanation

Explain the system through a familiar workflow: it chooses among approved tools, observes results and asks for help when needed. Describe boundaries and measurable outcomes without implying human judgment.

Follow-up

- What is a useful demonstration?
  A normal task and one failure or escalation, showing both capability and limits.

</details>
</details>
<!-- /interview-answer -->

- Q096 — What types of memory do agentic systems need? Describe working, episodic, semantic, and procedural memory.（来源：[questions.md:110](interview/questions/questions.md)）

<!-- interview-answer Q096 -->
<details>
<summary>展开答案 · Q096</summary>

Interview Answer

Working memory holds the current task context. Episodic memory records past events or interactions; semantic memory stores facts or knowledge; procedural memory represents ways to perform tasks. These are design categories, not necessarily separate databases. I define provenance, ownership, retrieval, expiration and correction rules for each, and keep authoritative business records outside lossy conversation summaries.

<details>
<summary>展开详解与追问</summary>

Explanation

Working memory supports the current task; episodic memory records events; semantic memory stores facts; procedural memory stores reusable methods. Each needs a distinct update and retrieval policy.

Follow-up

- Which memories should expire?
  Task-specific and time-sensitive memories should expire or be revalidated; even durable facts need correction and deletion paths.

</details>
</details>
<!-- /interview-answer -->

- Q097 — How do you design long-term memory without polluting it?（来源：[questions.md:111](interview/questions/questions.md)）

<!-- interview-answer Q097 -->
<details>
<summary>展开答案 · Q097</summary>

Interview Answer

I only persist information with a clear future use, provenance and user scope. I distinguish an asserted fact from an inference, deduplicate entries and allow correction, expiry and deletion. Sensitive or transient content should not automatically become permanent memory. I evaluate whether retrieved memories improve tasks and whether incorrect or malicious entries influence future actions.

<details>
<summary>展开详解与追问</summary>

Explanation

Store only reviewed or well-supported facts with provenance, confidence and scope. Repeated model output is not independent confirmation of a fact.

Follow-up

- How do you correct a bad memory?
  Version or invalidate it, update dependent summaries and ensure retrieval stops returning the obsolete claim.

</details>
</details>
<!-- /interview-answer -->

- Q098 — How do you implement human-in-the-loop (HIL) patterns and decide when to trigger human review?（来源：[questions.md:112](interview/questions/questions.md)）

<!-- interview-answer Q098 -->
<details>
<summary>展开答案 · Q098</summary>

Interview Answer

I trigger review for consequential actions, ambiguous inputs, unsupported evidence, low-confidence extraction or policy-defined exceptions. The reviewer sees the exact proposed action and relevant evidence, and approval is bound to its payload and version. Rejection, expiry and cancellation are explicit states. A human-in-the-loop is useful only if the reviewer has enough context and time to make a meaningful decision.

<details>
<summary>展开详解与追问</summary>

Explanation

Trigger review based on consequence, uncertainty and policy, and show the exact proposed action and evidence. Persist approval state so retries cannot bypass it.

Follow-up

- What if the proposed action changes after approval?
  Invalidate the approval and request review of the changed payload.

</details>
</details>
<!-- /interview-answer -->

- Q099 — How do you monitor and observe autonomous agent behavior in production?（来源：[questions.md:113](interview/questions/questions.md)；[01-theory.md:83](interview/questions/01-theory.md)）

<!-- interview-answer Q099 -->
<details>
<summary>展开答案 · Q099</summary>

Interview Answer

I trace goals, state transitions, proposed and executed tools, retries, durations and outcomes under a correlation ID. Metrics include task success, invalid calls, intervention rate, budget exhaustion and cost. I sample failure traces with appropriate redaction and retain configuration versions for reproduction. The dashboard should distinguish model mistakes from tool, data and infrastructure failures.

<details>
<summary>展开详解与追问</summary>

Explanation

Trace task outcomes, tool calls, state changes, errors, latency and cost. Sample content carefully and redact sensitive data; observability is not an excuse for unlimited conversation retention.

Follow-up

- What alert is more useful than raw token count?
  A sustained rise in failed tasks, unsupported actions or cost per successful outcome, segmented by workflow.

</details>
</details>
<!-- /interview-answer -->

- Q100 — How do you architect agents for regulated or compliance-heavy domains (e.g., financial, healthcare)?（来源：[questions.md:114](interview/questions/questions.md)）

<!-- interview-answer Q100 -->
<details>
<summary>展开答案 · Q100</summary>

Interview Answer

I begin with the specific organizational and jurisdictional requirements, then encode permissions, retention, review gates and auditability into the system. I minimize sensitive data, preserve source provenance and keep consequential decisions reviewable. I would validate the implementation with domain and compliance owners. I would not claim that choosing a particular model or adding a disclaimer makes a workflow compliant.

<details>
<summary>展开详解与追问</summary>

Explanation

Use traceable evidence, restricted tools, documented policies and human oversight appropriate to the consequence. Technical safeguards support governance but do not alone prove compliance.

Follow-up

- Can the model be the final policy authority?
  No. Formal policy and authorized review must remain outside probabilistic generation.

</details>
</details>
<!-- /interview-answer -->

- Q101 — When do you use orchestration vs choreography patterns for multi-agent systems?（来源：[questions.md:115](interview/questions/questions.md)）

<!-- interview-answer Q101 -->
<details>
<summary>展开答案 · Q101</summary>

Interview Answer

Orchestration uses a coordinator that explicitly controls steps, making dependencies, retries and debugging easier to follow. Choreography lets services react to events, improving decoupling but making global behavior harder to inspect. For a small regulated agent workflow I would usually start with orchestration. I would move to event-driven coordination when independent scaling and organizational boundaries justify its complexity.

<details>
<summary>展开详解与追问</summary>

Explanation

Orchestration centralizes control and state visibility; choreography lets components react to events with looser coupling. Event-driven designs need duplicate handling and clear ownership of completion.

Follow-up

- When is a central orchestrator preferable?
  When ordering, approvals and end-to-end auditability dominate, especially for a bounded workflow.

</details>
</details>
<!-- /interview-answer -->

- Q102 — How do you filter PII in agent pipelines before data reaches the LLM?（来源：[questions.md:116](interview/questions/questions.md)）

<!-- interview-answer Q102 -->
<details>
<summary>展开答案 · Q102</summary>

Interview Answer

I minimize data at the source, detect sensitive fields using schemas plus appropriate pattern and entity checks, and replace identifiers with scoped tokens where the task allows. I keep the re-identification mapping in a protected service and redact logs independently. Detection is imperfect, so I test false negatives and false positives and enforce access and provider data-handling constraints as additional layers.

<details>
<summary>展开详解与追问</summary>

Explanation

Combine schema-aware filtering, detection and tokenization or redaction before calls. Test indirect identifiers and logs, and retain reversible mappings only in a protected store when necessary.

Follow-up

- Does regex catch all PII?
  No. Context-dependent identifiers and free text need broader controls and measured detection limits.

</details>
</details>
<!-- /interview-answer -->

- Q103 — How do you evaluate agent performance? What metrics matter (tool selection quality, action advancement, context adherence)?（来源：[questions.md:117](interview/questions/questions.md)；[01-theory.md:72](interview/questions/01-theory.md)）

<!-- interview-answer Q103 -->
<details>
<summary>展开答案 · Q103</summary>

Interview Answer

I measure end-to-end task success and also the steps that produce it: correct tool choice, valid arguments, useful progress, adherence to evidence and successful termination. I track unauthorized attempts, unnecessary calls, recovery, human intervention, latency and cost. A model that writes a convincing answer after a failed tool should fail the evaluation even if the prose looks good.

<details>
<summary>展开详解与追问</summary>

Explanation

Score correct tool selection, argument validity, progress, task completion, policy adherence and recovery separately. A low-cost failure is still a failure; successful outcomes need cost and latency context.

Follow-up

- How do you test action advancement?
  Check whether the action creates a needed artifact or resolves a prerequisite, not merely whether a tool was called.

</details>
</details>
<!-- /interview-answer -->

- Q477 — What makes an AI system agentic?（来源：[01-theory.md:46](interview/questions/01-theory.md)）

<!-- interview-answer Q477 -->
<details>
<summary>展开答案 · Q477</summary>

Interview Answer

I call a system agentic when observations influence model-selected actions over multiple steps toward a goal. A single generation call or a fixed pipeline does not become agentic merely because it uses an LLM. The useful question is which decisions need that flexibility and how the application verifies progress, constrains authority and knows when to stop.

<details>
<summary>展开详解与追问</summary>

Explanation

Autonomy is a spectrum involving decisions, tools and feedback. Rebranding a fixed prompt sequence as a multi-agent system does not create adaptive behavior.

Follow-up

- What evidence shows useful agency?
  The system selects appropriate actions for changing inputs and improves task completion within measurable limits.

</details>
</details>
<!-- /interview-answer -->

- Q478 — When agent is the wrong solution?（来源：[01-theory.md:49](interview/questions/01-theory.md)）

<!-- interview-answer Q478 -->
<details>
<summary>展开答案 · Q478</summary>

Interview Answer

An agent is a poor fit when the task has a stable deterministic process, strict latency limits, unacceptable action risk or insufficient evaluation coverage. A normal API, classifier or fixed workflow may be simpler and more reliable. I would introduce model-driven planning only for a demonstrated source of variability that outweighs the added cost and debugging complexity.

<details>
<summary>展开详解与追问</summary>

Explanation

A known deterministic workflow rarely needs open-ended planning. Extra autonomy adds latency, cost and unpredictable paths without necessarily improving the outcome.

Follow-up

- When would you introduce an agent?
  When the action sequence genuinely depends on intermediate observations and a bounded agent outperforms a simpler baseline.

</details>
</details>
<!-- /interview-answer -->

- Q479 — How do you create an agent for analyzing customer support tickets, drafting responses, and escalating complex issues.（来源：[01-theory.md:56](interview/questions/01-theory.md)）

<!-- interview-answer Q479 -->
<details>
<summary>展开答案 · Q479</summary>

Interview Answer

I would classify the ticket, retrieve authorized product and account context, draft a cited response and check it against policy. Low-confidence, sensitive or unsupported cases escalate to a human; sending is a separately authorized action. I measure correct resolution, escalation quality and unsupported claims, not just deflection. Session state, idempotency and audit logs prevent duplicate or untraceable actions.

<details>
<summary>展开详解与追问</summary>

Explanation

Classify and retrieve before drafting; enforce account access and escalate policy ambiguity or high-impact actions. Evaluate draft correctness and escalation decisions separately.

Follow-up

- Does a drafted response count as ticket resolution?
  No. Resolution requires an observed user or workflow outcome, not merely generated text.

</details>
</details>
<!-- /interview-answer -->

- Q104 — When would you fine-tune vs use prompt engineering? (reported across multiple companies)（来源：[questions.md:121](interview/questions/questions.md)）

<!-- interview-answer Q104 -->
<details>
<summary>展开答案 · Q104</summary>

Interview Answer

I start with a clear prompt and representative evaluation cases. Fine-tuning becomes attractive when a repeatable behavior or formatting gap remains, there are enough high-quality examples, and the benefit justifies training and maintenance. If the missing ingredient is changing factual knowledge, retrieval is usually more appropriate. I compare against the simpler baseline and reserve held-out examples for the final decision.

<details>
<summary>展开详解与追问</summary>

Explanation

Try clear instructions and examples before parameter updates. Fine-tune when repeatable behavior or format gaps remain and you have suitable training and held-out data.

Follow-up

- What is a bad reason to fine-tune?
  Trying to memorize frequently changing facts that need provenance and deletion control.

</details>
</details>
<!-- /interview-answer -->

- Q105 — What is PEFT/LoRA and when would you use it?（来源：[questions.md:122](interview/questions/questions.md)；[01-theory.md:127](interview/questions/01-theory.md)）

<!-- interview-answer Q105 -->
<details>
<summary>展开答案 · Q105</summary>

Interview Answer

Parameter-efficient fine-tuning adapts a subset or a compact additional parameterization instead of updating all model weights. LoRA adds a low-rank update to selected weight matrices while freezing the base. It reduces trainable-state requirements and can support separate adapters. I would use it when adaptation is justified and resources are limited, while still evaluating base capability, regression and serving compatibility.

<details>
<summary>展开详解与追问</summary>

Explanation

LoRA learns low-rank updates while freezing base weights, reducing trainable parameters and optimizer memory. It does not make the entire training or serving system free.

Follow-up

- What controls adapter capacity?
  Rank and targeted modules, alongside data quality and training configuration; select them empirically.

Technical Sources

- [LoRA original paper](https://arxiv.org/abs/2106.09685)

</details>
</details>
<!-- /interview-answer -->

- Q106 — What is QLoRA and how does it differ from LoRA? When would you choose one over the other?（来源：[questions.md:123](interview/questions/questions.md)）

<!-- interview-answer Q106 -->
<details>
<summary>展开答案 · Q106</summary>

Interview Answer

LoRA trains low-rank adapters; QLoRA additionally keeps the frozen base model in low-bit quantized form during adaptation, reducing memory further. Quantization introduces its own numerical and tooling considerations, and adapter training still needs higher-precision computation in parts of the pipeline. I would choose based on available memory, supported kernels and measured quality rather than assuming QLoRA is always faster.

<details>
<summary>展开详解与追问</summary>

Explanation

QLoRA combines a quantized frozen base with trainable adapters. It reduces memory needs, but computation precision and quantized storage are different concerns.

Follow-up

- When might ordinary LoRA be preferable?
  When memory is sufficient and the simpler precision/setup trade-off provides better stability or tooling support.

Technical Sources

- [QLoRA original paper](https://arxiv.org/abs/2305.14314)

</details>
</details>
<!-- /interview-answer -->

- Q107 — What is RLHF and why is it important?（来源：[questions.md:124](interview/questions/questions.md)）

<!-- interview-answer Q107 -->
<details>
<summary>展开答案 · Q107</summary>

Interview Answer

RLHF uses human feedback to shape model behavior beyond the pre-training objective. A common approach learns preferences through a reward model and optimizes the policy while constraining drift from a reference. It helps align responses with desired behavior but can learn annotator bias or exploit imperfect rewards. I would evaluate actual task and safety outcomes rather than treating preference optimization as a correctness guarantee.

<details>
<summary>展开详解与追问</summary>

Explanation

Preference-based post-training aligns outputs with a feedback objective. That objective can be biased or reward superficial behavior, so evaluate factuality and safety separately.

Follow-up

- Does RLHF guarantee truthful answers?
  No. Human preference and factual correctness overlap imperfectly.

</details>
</details>
<!-- /interview-answer -->


<a id="day-07"></a>

### 周二 10/13

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: INNER JOIN, LEFT JOIN, Duplicate Rows<br>LeetCode: [175. Combine Two Tables](https://leetcode.com/problems/combine-two-tables/); [577. Employee Bonus](https://leetcode.com/problems/employee-bonus/); [1581. Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)<br>资料：[JOINs](Study%20topics/joins.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Embedding Model Experiment<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-07) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Fine-tuning and Training; Technical Questions / Evaluation and Metrics — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Keyword / Vector / Hybrid Search](Study%20topics/keyword-vector-hybrid-search.html) |


<!-- quantvault-day 07 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#2606 · Interpreting Logistic Regression Coefficients](https://quantvault.org/problems.html?id=2606) · Machine Learning · Medium

先修：先读Logistic Regression；Odds = p/(1−p)，Log-odds = log(Odds)。

本次范围：Conceptual。解释线性score→sigmoid→概率；系数影响log-odds，不能直接说概率增加相同数值。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-07)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q108 — Fine-tune or use prompt-engineered RAG?（来源：[questions.md:125](interview/questions/questions.md)）

<!-- interview-answer Q108 -->
<details>
<summary>展开答案 · Q108</summary>

Interview Answer

I would use prompt-engineered RAG when the task needs current, attributable knowledge from a changing corpus. Fine-tuning is better suited to persistent behavior or domain-pattern adaptation when examples and evaluation support it. They can be combined. I would diagnose whether the failure comes from missing evidence, retrieval or response behavior before paying to retrain a model.

<details>
<summary>展开详解与追问</summary>

Explanation

Prompting changes instructions, retrieval supplies external knowledge, and fine-tuning changes parameters. They can be combined, but choose the intervention that matches the observed failure.

Follow-up

- How do you distinguish a knowledge gap from a behavior gap?
  Provide correct evidence in the prompt; persistent format or task failures point toward behavior, while missing evidence points toward retrieval/data.

</details>
</details>
<!-- /interview-answer -->

- Q109 — How would you design a model that can solve math problems? Walk through data collection, supervised fine-tuning, post-training, and evaluation.（来源：[questions.md:126](interview/questions/questions.md)；[01-theory.md:131](interview/questions/01-theory.md)）

<!-- interview-answer Q109 -->
<details>
<summary>展开答案 · Q109</summary>

Interview Answer

I would collect licensed, diverse problems with verified solutions, split by problem family to reduce leakage, and establish a strong baseline. Supervised fine-tuning can teach solution behavior; post-training can use verifiable answers or carefully designed preference signals. I would use tools for arithmetic and test generalization on novel problems. Evaluation must distinguish answer correctness from persuasive but invalid explanations.

<details>
<summary>展开详解与追问</summary>

Explanation

Use verified problem-solution pairs, contamination-aware splits and executable answer checks where possible. Post-training should improve correctness, not simply longer explanations.

Follow-up

- How do you evaluate generalization?
  Hold out problem families or generated variants and inspect errors beyond memorized benchmark answers.

</details>
</details>
<!-- /interview-answer -->

- Q110 — How would you design a scalable and efficient system for training a large language model, considering both computational and data constraints?（来源：[questions.md:127](interview/questions/questions.md)）

<!-- interview-answer Q110 -->
<details>
<summary>展开答案 · Q110</summary>

Interview Answer

I would first set a compute, data and quality budget, validate the data pipeline and run small scaling experiments. Then I would choose distributed parallelism, mixed precision, checkpointing and fault recovery matched to hardware and network constraints. Throughput, utilization, loss quality and reproducibility all matter. I would present this as a design approach, not claim personal large-model training experience I do not have.

<details>
<summary>展开详解与追问</summary>

Explanation

Plan data quality, compute allocation, distributed parallelism, checkpointing and failure recovery together. Throughput improvements are useful only when data and optimization remain correct.

Follow-up

- What would you monitor during training?
  Loss, gradient behavior, throughput, utilization, failed workers and validation performance, with reproducible checkpoints.

</details>
</details>
<!-- /interview-answer -->

- Q111 — Explain the RLHF pipeline: supervised fine-tuning, reward model training, and PPO. How does DPO simplify this?（来源：[questions.md:128](interview/questions/questions.md)；[01-theory.md:128](interview/questions/01-theory.md)）

<!-- interview-answer Q111 -->
<details>
<summary>展开答案 · Q111</summary>

Interview Answer

In the common pipeline, supervised fine-tuning teaches instruction behavior, preference comparisons train a reward model, and PPO improves the policy using that reward with a reference-model constraint. Basic DPO instead optimizes a preference-pair objective directly against a reference policy. It removes that separate reward-training and on-policy RL loop, but still depends on representative preference data and robust evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

The classical pipeline uses SFT, preference labels, a reward model and PPO with reference regularization. DPO directly optimizes a preference objective without that explicit online reward-model loop.

Follow-up

- Is DPO identical to SFT?
  No. It optimizes relative preference between chosen and rejected responses with a reference-relative objective.

Technical Sources

- [Direct Preference Optimization paper](https://arxiv.org/abs/2305.18290)

</details>
</details>
<!-- /interview-answer -->

- Q112 — What is instruction tuning and how does it differ from pre-training?（来源：[questions.md:129](interview/questions/questions.md)；[01-theory.md:126](interview/questions/01-theory.md)）

<!-- interview-answer Q112 -->
<details>
<summary>展开答案 · Q112</summary>

Interview Answer

Instruction tuning is supervised training on instruction-response examples so a model learns to follow requested tasks and formats. Pre-training usually learns broad language patterns through a large-scale predictive objective. Instruction tuning can make capabilities easier to elicit without adding reliable access to changing facts. I would evaluate instruction compliance, task quality and regressions on examples outside the tuning set.

<details>
<summary>展开详解与追问</summary>

Explanation

Instruction tuning trains on instruction-response examples, often across tasks. Pre-training usually uses broad self-supervised text prediction; the boundary can vary with dataset mixtures.

Follow-up

- What makes instruction data harmful?
  Incorrect answers, narrow styles, leaked evaluation examples or inconsistent policies can teach undesirable behavior.

</details>
</details>
<!-- /interview-answer -->

- Q113 — What is speculative decoding and how does it speed up inference?（来源：[questions.md:130](interview/questions/questions.md)）

<!-- interview-answer Q113 -->
<details>
<summary>展开答案 · Q113</summary>

Interview Answer

Speculative decoding lets a cheaper draft model propose several tokens and a larger target model verify them in parallel. With the appropriate acceptance and correction algorithm, it can preserve the target sampling distribution. Speed depends on draft cost, acceptance rate and hardware utilization. A poor draft or already well-batched serving workload may erase the benefit, so I would benchmark rather than assume a fixed speedup.

<details>
<summary>展开详解与追问</summary>

Explanation

A draft model proposes tokens and a target model verifies them in a batch with an appropriate acceptance scheme. Exact speculative methods preserve the target distribution, but speed depends on acceptance and overhead.

Follow-up

- When can it be slower?
  When drafts are frequently rejected or verification/drafting overhead outweighs saved target decoding steps.

Technical Sources

- [Speculative decoding paper](https://arxiv.org/abs/2211.17192)

</details>
</details>
<!-- /interview-answer -->

- Q114 — How do you convert implicit user behavior (edits, acceptance, rejection) into training signals for model improvement?（来源：[questions.md:131](interview/questions/questions.md)；[01-theory.md:130](interview/questions/01-theory.md)）

<!-- interview-answer Q114 -->
<details>
<summary>展开答案 · Q114</summary>

Interview Answer

I would log consented, provenance-aware feedback and distinguish explicit correction from ambiguous behavior. An accepted answer is not automatically correct, and an edit may reflect style rather than a factual error. I would review and label a sample, construct suitable preference or supervised examples, and keep an independent evaluation set. Product experiments should verify that training on the signal improves the intended outcome.

<details>
<summary>展开详解与追问</summary>

Explanation

Acceptance and edits are noisy preference signals affected by user intent and exposure. Log context and distinguish a correction from a stylistic preference before creating training pairs.

Follow-up

- Should every accepted answer be a positive label?
  No. Acceptance may reflect convenience or unnoticed errors; audit samples and retain uncertainty.

</details>
</details>
<!-- /interview-answer -->

- Q115 — Explain quantization. What are the trade-offs between model size, speed, and accuracy?（来源：[questions.md:132](interview/questions/questions.md)；[01-theory.md:129](interview/questions/01-theory.md)）

<!-- interview-answer Q115 -->
<details>
<summary>展开答案 · Q115</summary>

Interview Answer

Quantization represents weights or activations with fewer bits to reduce memory and potentially bandwidth or compute cost. It can degrade quality, especially for sensitive layers or outlier values, and requires compatible kernels. Smaller storage does not guarantee lower latency on every device. I would evaluate the actual task, batch and context lengths and include a higher-precision baseline and rollback path.

<details>
<summary>展开详解与追问</summary>

Explanation

Lower precision reduces storage and can improve throughput with supported kernels. Outliers, accumulation precision and workload determine the quality/performance trade-off.

Follow-up

- How do you validate quantization?
  Compare task metrics, difficult slices, memory and latency on the actual serving hardware against the unquantized baseline.

</details>
</details>
<!-- /interview-answer -->

- Q491 — When would you fine-tune vs use prompt engineering vs RAG?（来源：[01-theory.md:125](interview/questions/01-theory.md)）

<!-- interview-answer Q491 -->
<details>
<summary>展开答案 · Q491</summary>

Interview Answer

I would use prompt-engineered RAG when the task needs current, attributable knowledge from a changing corpus. Fine-tuning is better suited to persistent behavior or domain-pattern adaptation when examples and evaluation support it. They can be combined. I would diagnose whether the failure comes from missing evidence, retrieval or response behavior before paying to retrain a model.

<details>
<summary>展开详解与追问</summary>

Explanation

Prompting changes instructions, retrieval supplies external knowledge, and fine-tuning changes parameters. They can be combined, but choose the intervention that matches the observed failure.

Follow-up

- How do you distinguish a knowledge gap from a behavior gap?
  Provide correct evidence in the prompt; persistent format or task failures point toward behavior, while missing evidence points toward retrieval/data.

</details>
</details>
<!-- /interview-answer -->

- Q116 — What metrics do you consider when benchmarking and evaluating LLM performance?（来源：[questions.md:136](interview/questions/questions.md)）

<!-- interview-answer Q116 -->
<details>
<summary>展开答案 · Q116</summary>

Interview Answer

I use task-specific correctness, groundedness and appropriate abstention, then operational metrics such as p50/p95 latency, time to first token, throughput, errors and cost per successful task. I also check important slices and access or safety failures. General benchmarks are useful context, but the release decision comes from representative application data with documented evaluation conditions.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate task quality from serving performance and resource use. Include unsupported-answer rate, cost per successful task and latency distributions rather than one average score.

Follow-up

- Why report p95 latency?
  It describes a tail users may frequently encounter at scale and can reveal queueing hidden by the mean.

</details>
</details>
<!-- /interview-answer -->

- Q117 — How do you evaluate a chatbot? (candidates wish they prepared for this)（来源：[questions.md:137](interview/questions/questions.md)）

<!-- interview-answer Q117 -->
<details>
<summary>展开答案 · Q117</summary>

Interview Answer

I evaluate whether the chatbot solves the intended user task correctly, not simply whether it sounds natural. The set includes answerable, ambiguous, multi-turn and unanswerable cases. I check evidence support, tool behavior, escalation and permission boundaries, plus latency and cost. Human review calibrates any model judge, and production feedback complements rather than replaces a fixed regression set.

<details>
<summary>展开详解与追问</summary>

Explanation

Evaluate representative conversations, including follow-ups, refusals and escalation, with a calibrated rubric. Offline answer quality and online task success are related but distinct.

Follow-up

- What does a good chatbot test case include?
  User context, the question, allowed evidence, expected behavior and explicit unacceptable outcomes.

</details>
</details>
<!-- /interview-answer -->

- Q118 — How do you detect and mitigate hallucinations in production? (reported across multiple companies)（来源：[questions.md:138](interview/questions/questions.md)）

<!-- interview-answer Q118 -->
<details>
<summary>展开答案 · Q118</summary>

Interview Answer

I detect unsupported claims by comparing them with retrieved evidence, tool results or reference answers, using deterministic checks for exact fields and calibrated review for open text. I reduce failures through better retrieval, clear output contracts and abstention. In production I sample failures and track claim-level support rates. No single prompt or judge eliminates hallucinations.

<details>
<summary>展开详解与追问</summary>

Explanation

Detect unsupported claims with source checks, deterministic validation and sampled review. Mitigation includes better evidence, narrowed scope and abstention, not just a stronger warning prompt.

Follow-up

- What should happen after detecting a recurring error?
  Create a regression case, identify its stage and validate a targeted fix before deployment.

</details>
</details>
<!-- /interview-answer -->

- Q119 — How would you prevent factual errors in a summarization system?（来源：[questions.md:139](interview/questions/questions.md)；[01-theory.md:69](interview/questions/01-theory.md)）

<!-- interview-answer Q119 -->
<details>
<summary>展开答案 · Q119</summary>

Interview Answer

I preserve provenance during extraction and require summaries to retain material numbers, dates, entities and qualifications. I compare critical values with the source and test omissions as well as invented claims. For long documents I use section-level processing with evidence-linked synthesis. If the document is ambiguous or contradictory, the summary should say so rather than resolving it through invention.

<details>
<summary>展开详解与追问</summary>

Explanation

Preserve names, figures, units, dates and qualifiers, and check claims against source spans. A concise summary can still be wrong by omitting a crucial exception.

Follow-up

- How do you evaluate omissions?
  Define required facts or decisions for the task and score whether the summary retains them with the correct qualifications.

</details>
</details>
<!-- /interview-answer -->

- Q120 — How would you reduce hallucinations in a medical chatbot?（来源：[questions.md:140](interview/questions/questions.md)）

<!-- interview-answer Q120 -->
<details>
<summary>展开答案 · Q120</summary>

Interview Answer

I would constrain the product to a clearly defined support or information task, use vetted and current clinical sources, retain citations and involve qualified clinical review for consequential outputs. The system should acknowledge missing evidence and route urgent or out-of-scope cases appropriately. I would evaluate with domain experts and privacy requirements; I would not rely on generic web text or a model's confidence as medical validation.

<details>
<summary>展开详解与追问</summary>

Explanation

Use reviewed sources, limited scope, evidence attribution and appropriate human escalation. Model self-confidence is not a clinical validation signal, and a prototype should not make unsupported treatment decisions.

Follow-up

- What is a key failure test?
  A request beyond the supported scope with superficially relevant retrieved text; verify the system does not overclaim.

</details>
</details>
<!-- /interview-answer -->

- Q121 — What happens when the LLM is confidently wrong? How do you debug a RAG chatbot giving confident but wrong answers? (candidates wish they prepared for this)（来源：[questions.md:141](interview/questions/questions.md)）

<!-- interview-answer Q121 -->
<details>
<summary>展开答案 · Q121</summary>

Interview Answer

I reproduce the exact request with prompt, model, index and data versions, then inspect whether the needed evidence was ingested, retrieved and actually passed to generation. If the evidence is correct, I examine interpretation, units and unsupported synthesis. I add the failure to a regression set and fix the responsible stage. Confidence in the wording is not evidence about which stage failed.

<details>
<summary>展开详解与追问</summary>

Explanation

Reproduce the exact trace and find the first divergence: wrong evidence, missing qualifier, context truncation or unsupported synthesis. Correct-looking citations can still refer to non-supporting text.

Follow-up

- Why not immediately change the model?
  A model swap can conceal an ingestion or retrieval defect and make causal diagnosis harder.

</details>
</details>
<!-- /interview-answer -->

- Q122 — Explain SHAP, LIME, and model interpretability.（来源：[questions.md:142](interview/questions/questions.md)）

<!-- interview-answer Q122 -->
<details>
<summary>展开答案 · Q122</summary>

Interview Answer

SHAP attributes a prediction using a Shapley-value framework under a chosen background and dependence treatment. LIME fits an interpretable local surrogate around a prediction using perturbed inputs. Both depend on modeling choices and can be unstable or misleading with correlated features or unrealistic perturbations. I use them to investigate model behavior, not as proof of causality or fairness.

<details>
<summary>展开详解与追问</summary>

Explanation

SHAP assigns feature contributions under a chosen reference setup; LIME fits a local surrogate around a prediction. Neither turns an association into a causal explanation.

Follow-up

- Why can explanations differ?
  Background data, correlated features, perturbations and the model itself affect the attribution.

</details>
</details>
<!-- /interview-answer -->

- Q123 — How do you detect and mitigate hallucinations?（来源：[questions.md:143](interview/questions/questions.md)；[01-theory.md:68](interview/questions/01-theory.md)）

<!-- interview-answer Q123 -->
<details>
<summary>展开答案 · Q123</summary>

Interview Answer

I define hallucination operationally as a claim unsupported by the allowed evidence or known reference. I use exact checks where possible and calibrated human or model review otherwise. Mitigation combines evidence quality, retrieval, constrained actions and an honest insufficient-information path. I report the denominator and review method because an apparent rate can change with query mix and labeling policy.

<details>
<summary>展开详解与追问</summary>

Explanation

Define hallucination operationally, such as unsupported externally verifiable claims. Check source support and calculations separately from style and relevance.

Follow-up

- Can a correct uncited claim count as unsupported?
  Under a strict grounded-answer contract, yes; factual truth and support from permitted evidence are separate criteria.

</details>
</details>
<!-- /interview-answer -->

- Q124 — Explain evaluation metrics: perplexity, ROUGE, BLEU. What are the pitfalls of n-gram-based metrics?（来源：[questions.md:144](interview/questions/questions.md)）

<!-- interview-answer Q124 -->
<details>
<summary>展开答案 · Q124</summary>

Interview Answer

Perplexity measures how well a model assigns probability to reference tokens; it is not a direct measure of helpfulness. BLEU emphasizes reference n-gram precision and ROUGE commonly measures n-gram or sequence overlap, often with a recall focus. They can penalize valid paraphrases and reward overlapping but incorrect text. I supplement them with task correctness and evidence-based human evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

Perplexity measures predictive likelihood; BLEU and ROUGE measure forms of reference overlap. Valid paraphrases can score poorly and copied but misleading text can score well.

Follow-up

- What should supplement them?
  Task-specific factual checks and calibrated human or model-assisted rubrics, with known limitations.

</details>
</details>
<!-- /interview-answer -->

- Q125 — What are your testing strategies for non-deterministic outputs?（来源：[questions.md:145](interview/questions/questions.md)）

<!-- interview-answer Q125 -->
<details>
<summary>展开答案 · Q125</summary>

Interview Answer

I test deterministic contracts separately from variable language: schema, permissions, numeric results, tool limits and required evidence. For generative quality I use representative cases, repeated runs when needed and calibrated rubrics with uncertainty. I compare against a fixed baseline and inspect severe regressions individually. Snapshotting exact prose is usually too brittle unless exact wording is the requirement.

<details>
<summary>展开详解与追问</summary>

Explanation

Assert stable contracts, use repeated trials for stochastic outcomes and compare distributions or failure rates. Exact string matching is appropriate only where wording is part of the contract.

Follow-up

- How many repeats are enough?
  Choose based on expected variance, failure rarity and decision confidence; there is no universal fixed count.

</details>
</details>
<!-- /interview-answer -->


<a id="day-08"></a>

### 周三 10/14

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Sliding Window; Prefix Sums<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/); [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)<br>资料：[Sliding Window](Study%20topics/sliding-window.html); [Prefix Sums](Study%20topics/prefix-sums.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: MMR Experiment and Held-Out Check<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-08) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Evaluation and Metrics — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[MMR](Study%20topics/mmr.html); [Reranking](Study%20topics/reranking.html); [Query Reformulation](Study%20topics/query-reformulation.html); [Held-Out Evaluation](Study%20topics/held-out-evaluation.html); [Redundancy](Study%20topics/redundancy.html) |


<!-- quantvault-day 08 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1473 · Precision and Recall in Classification](https://quantvault.org/problems.html?id=1473) · Machine Learning · Medium

先修：先认识Confusion Matrix：实际类别与预测类别的交叉计数。

本次范围：Worked example。手算一组TP、FP、FN的Precision与Recall；改变阈值，解释误报和漏报。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-08)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q126 — How do you measure accuracy in generative systems where traditional metrics don't apply?（来源：[questions.md:146](interview/questions/questions.md)）

<!-- interview-answer Q126 -->
<details>
<summary>展开答案 · Q126</summary>

Interview Answer

I translate the product goal into observable criteria: did the task succeed, were key claims correct, was evidence used and were invalid requests handled appropriately? Some criteria have exact reference checks; others need expert labels or a calibrated judge. I report category and slice scores rather than hiding everything in one subjective average. A fluent answer can still fail the task.

<details>
<summary>展开详解与追问</summary>

Explanation

Decompose open-ended quality into supported facts, completeness, usefulness and constraint adherence. Use a rubric with examples and judge calibration against human labels.

Follow-up

- How do you avoid a biased LLM judge?
  Blind system identity, vary ordering, inspect disagreements and measure judge agreement on reviewed cases.

</details>
</details>
<!-- /interview-answer -->

- Q127 — What operational/business metrics matter for AI systems beyond accuracy? (win rate, deflection rate, p95 latency)（来源：[questions.md:147](interview/questions/questions.md)）

<!-- interview-answer Q127 -->
<details>
<summary>展开答案 · Q127</summary>

Interview Answer

I track successful task completion, time saved or resolution quality, correction and escalation rates, user retention and cost per successful task. Operationally I track latency percentiles, error rates, availability and provider saturation. Deflection and win rate need carefully defined denominators and guardrails: pushing users away or preferring verbose answers must not be mistaken for business value.

<details>
<summary>展开详解与追问</summary>

Explanation

Deflection needs a denominator and evidence of resolution; otherwise users abandoning a failed interaction may look like success. Track outcomes with quality, cost and reliability guardrails.

Follow-up

- What is cost per successful task?
  Total relevant serving cost divided by verified successful tasks, using a consistent task and success definition.

</details>
</details>
<!-- /interview-answer -->

- Q128 — How would you evaluate and monitor a model in production, not just offline?（来源：[questions.md:148](interview/questions/questions.md)；[01-theory.md:80](interview/questions/01-theory.md)）

<!-- interview-answer Q128 -->
<details>
<summary>展开答案 · Q128</summary>

Interview Answer

I monitor request mix, data freshness, failures, latency, cost and validated outcome quality where labels become available. I compare important slices with a versioned offline baseline and sample real failures for review. Alerts should trigger diagnosis and safe fallback, not automatic retraining. For delayed financial outcomes I explicitly separate input drift from measured performance degradation.

<details>
<summary>展开详解与追问</summary>

Explanation

Monitor input/output shifts, service health and delayed outcome labels by segment. A stable aggregate metric can hide a failing customer group or changed use case.

Follow-up

- When should you retrain?
  After diagnosing a model/data issue that retraining can address, with a validated candidate and rollback path.

</details>
</details>
<!-- /interview-answer -->

- Q129 — How have you addressed bias/fairness in your models? Can you provide an example of a trade-off you've faced?（来源：[questions.md:149](interview/questions/questions.md)）

<!-- interview-answer Q129 -->
<details>
<summary>展开答案 · Q129</summary>

Interview Answer

I have not yet established a professional ML fairness case that I can honestly present as completed work. My approach would be to define affected groups and harms with domain owners, inspect label and coverage bias, compare relevant error rates and review the fairness-utility trade-off. Before using a past-tense example, I would add a real dataset, decision, measured result and limitation from work I actually performed.

<details>
<summary>展开详解与追问</summary>

Explanation

No confirmed fairness project has been supplied. Use an honest proposed method: define affected groups and harms, evaluate error slices and discuss trade-offs with stakeholders.

Follow-up

- Can one fairness metric satisfy every goal?
  No. Metrics can conflict, particularly across differing base rates; explain the chosen objective and its consequences.

</details>
</details>
<!-- /interview-answer -->

- Q130 — What is time to first token and why does it matter for user experience?（来源：[questions.md:150](interview/questions/questions.md)；[01-theory.md:91](interview/questions/01-theory.md)）

<!-- interview-answer Q130 -->
<details>
<summary>展开答案 · Q130</summary>

Interview Answer

Time to first token is the delay until the user receives the first generated token. It matters for perceived responsiveness, especially in chat, but does not describe total completion time or correctness. I measure it from the user-visible request boundary, separating queueing and retrieval where useful, and track both TTFT and end-to-end latency under representative load.

<details>
<summary>展开详解与追问</summary>

Explanation

TTFT includes queueing, network, prompt processing and the start of generation as measured by the chosen boundary. It differs from inter-token latency and total completion time.

Follow-up

- Can streaming improve TTFT without faster computation?
  It can expose earlier partial output, but measurement must use a consistent client-visible boundary.

</details>
</details>
<!-- /interview-answer -->

- Q131 — How do you measure hallucination rate in production?（来源：[questions.md:151](interview/questions/questions.md)；[01-theory.md:82](interview/questions/01-theory.md)）

<!-- interview-answer Q131 -->
<details>
<summary>展开答案 · Q131</summary>

Interview Answer

I define the unit first: unsupported claims, answers containing an unsupported claim, or tasks with material factual errors. I sample representative production cases, retain permitted evidence and use an adjudicated labeling rubric. I report the sample size, uncertainty and severity slices. An uncalibrated model judge score is not a trustworthy production hallucination rate by itself.

<details>
<summary>展开详解与追问</summary>

Explanation

Choose a unit such as claim, answer or conversation, label sampled outputs against evidence and report sampling uncertainty. Unlabeled traffic cannot support an exact universal hallucination rate.

Follow-up

- What sampling bias should you watch for?
  Only reviewing flagged complaints misses quiet errors; include random and risk-weighted samples with appropriate weighting.

</details>
</details>
<!-- /interview-answer -->

- Q132 — What is "vibes-based" evaluation vs. a formal eval framework? How do you build proper evals?（来源：[questions.md:152](interview/questions/questions.md)）

<!-- interview-answer Q132 -->
<details>
<summary>展开答案 · Q132</summary>

Interview Answer

Vibes-based evaluation relies on a few favorable examples and subjective impressions. A formal evaluation uses versioned cases, explicit success criteria, reproducible configurations and comparison with a baseline. I include failure and abstention cases, review label quality and record cost and latency as well as answer quality. The framework can start small; discipline matters more than adopting a particular library.

<details>
<summary>展开详解与追问</summary>

Explanation

A formal framework versions cases, rubrics, outputs and decisions. It converts anecdotal impressions into repeatable comparisons, though coverage and judge quality still limit conclusions.

Follow-up

- Is a large test set automatically good?
  No. Representative cases and reliable labels matter more than many near-duplicates.

</details>
</details>
<!-- /interview-answer -->

- Q133 — How do you build a golden dataset for evaluation? How do you use it for regression testing?（来源：[questions.md:153](interview/questions/questions.md)）

<!-- interview-answer Q133 -->
<details>
<summary>展开答案 · Q133</summary>

Interview Answer

I collect representative tasks and known failures, define reference evidence or expected outcomes and review labels for ambiguity. I separate development and held-out cases and prevent near-duplicate leakage. Each run records dataset, prompt, model and code versions. For regressions I compare both aggregate scores and individual severe failures, updating the dataset without pretending repeatedly tuned cases remain independent tests.

<details>
<summary>展开详解与追问</summary>

Explanation

Build from real task categories and failures, include hard negatives and keep development separate from held-out regression evidence. Track source versions and label disagreements.

Follow-up

- Should the golden set never change?
  It should evolve with the product, but changes must be versioned so old and new scores remain interpretable.

</details>
</details>
<!-- /interview-answer -->

- Q134 — How does the system get better over time? Describe feedback and reinforcement loops.（来源：[questions.md:154](interview/questions/questions.md)）

<!-- interview-answer Q134 -->
<details>
<summary>展开答案 · Q134</summary>

Interview Answer

I collect privacy-appropriate feedback and traces, cluster recurring failures and turn verified examples into regression cases. I then improve the relevant component, compare with a baseline and release gradually. Feedback does not have to mean model retraining; source cleanup or tool validation may solve the issue more cheaply. I avoid training directly on unverified user reactions or model-generated judgments.

<details>
<summary>展开详解与追问</summary>

Explanation

Feedback collection, triage, labeling, candidate changes and staged deployment form the improvement loop. Automatically training on unreviewed outputs can reinforce errors.

Follow-up

- How do you tell improvement from test overfitting?
  Evaluate on held-out or newly sampled cases and confirm online outcomes under controlled deployment.

</details>
</details>
<!-- /interview-answer -->

- Q135 — How do you decide success metrics for an ML model?（来源：[questions.md:155](interview/questions/questions.md)）

<!-- interview-answer Q135 -->
<details>
<summary>展开答案 · Q135</summary>

Interview Answer

I start with the decision the model supports and the cost of different errors, then choose metrics aligned with that objective. I establish a simple baseline and evaluate relevant slices on an appropriate holdout. For volatility forecasting I would compare MAE and RMSE with historical volatility on the same dates; improved prediction error alone does not establish profitable trading performance.

<details>
<summary>展开详解与追问</summary>

Explanation

Start from the user decision and error costs, then choose model metrics and operational guardrails. A classifier's best threshold depends on the consequence of false positives and false negatives.

Follow-up

- What if the business goal is delayed?
  Use validated leading indicators while preserving a plan to measure the actual delayed outcome.

</details>
</details>
<!-- /interview-answer -->

- Q136 — How would you implement A/B testing for different prompt variations?（来源：[questions.md:156](interview/questions/questions.md)）

<!-- interview-answer Q136 -->
<details>
<summary>展开答案 · Q136</summary>

Interview Answer

I randomly assign a stable unit such as a user or session to prompt variants, keep other changes controlled and define the primary metric, guardrails and observation window in advance. I log prompt versions and analyze uncertainty and segment effects. Randomizing each turn can contaminate a conversation, so the assignment unit must match the product behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

Randomize at a unit that avoids contamination, keep other changes controlled and predefine metrics, sample size and stopping rules. Repeated peeking can inflate false discoveries.

Follow-up

- Why randomize by user rather than message?
  When prior responses affect later behavior, message-level assignment can mix treatments within one experience.

</details>
</details>
<!-- /interview-answer -->

- Q137 — How would you test a new model before full deployment? Describe A/B testing, canary, interleaved, and shadow testing strategies.（来源：[questions.md:157](interview/questions/questions.md)）

<!-- interview-answer Q137 -->
<details>
<summary>展开答案 · Q137</summary>

Interview Answer

Offline tests first check correctness and severe failures. Shadow testing runs a candidate on real traffic without exposing its outputs; a canary exposes a small controlled portion; an A/B test compares randomized groups. Interleaving can efficiently compare ranked results within a shared list, but is not appropriate for every product. Each stage needs rollback criteria and privacy-aware logging.

<details>
<summary>展开详解与追问</summary>

Explanation

Shadow traffic avoids serving candidate outputs, canaries limit exposure, A/B tests estimate comparative outcomes, and interleaving can compare ranked results within one interaction.

Follow-up

- What should trigger rollback?
  Predefined quality, safety, cost or reliability regressions, including critical failures even when average metrics look acceptable.

</details>
</details>
<!-- /interview-answer -->

- Q138 — Two models have identical accuracy but different confidence levels. Which do you choose? Explain model calibration.（来源：[questions.md:158](interview/questions/questions.md)）

<!-- interview-answer Q138 -->
<details>
<summary>展开答案 · Q138</summary>

Interview Answer

I check calibration: among predictions near a given probability, does the event occur about that often? If ranking and accuracy are equal, better-calibrated probabilities are more useful for thresholding and risk-sensitive decisions, provided latency and other constraints are acceptable. I examine reliability curves and proper scoring rules such as log loss or Brier score, not simply which model sounds more confident.

<details>
<summary>展开详解与追问</summary>

Explanation

Accuracy compares decisions; calibration compares predicted probabilities with observed frequencies. A well-calibrated model is preferable when probabilities drive decisions, subject to discrimination and task costs.

Follow-up

- Can temperature scaling improve accuracy automatically?
  It usually changes confidence calibration without changing class ranking; it is not a general accuracy fix.

Technical Sources

- [scikit-learn probability calibration](https://scikit-learn.org/stable/modules/calibration.html)

</details>
</details>
<!-- /interview-answer -->

- Q139 — A production chatbot's accuracy dropped from 95% to 80% in six weeks. How do you diagnose the root cause before retraining?（来源：[questions.md:159](interview/questions/questions.md)）

<!-- interview-answer Q139 -->
<details>
<summary>展开答案 · Q139</summary>

Interview Answer

I first verify that the metric, sample and labels are comparable. Then I segment by traffic, document freshness, prompt/model/index version, language and failure type, and inspect recent deployment and provider changes. I reproduce representative errors and distinguish retrieval, data and model problems. I roll back a known regression where appropriate; retraining is a later decision after the cause is understood.

<details>
<summary>展开详解与追问</summary>

Explanation

First verify the evaluation definition and sampling, then inspect traffic, source data, prompts, model versions and pipeline errors. A change in the mix of questions can lower aggregate accuracy without a model regression.

Follow-up

- Why avoid retraining immediately?
  It may not fix broken retrieval, stale documents or a metric bug, and it destroys a clean diagnostic baseline.

</details>
</details>
<!-- /interview-answer -->

- Q480 — How do you ensure the output from LLMs is consistent and accurate?（来源：[01-theory.md:64](interview/questions/01-theory.md)）

<!-- interview-answer Q480 -->
<details>
<summary>展开答案 · Q480</summary>

Interview Answer

I define an output contract, constrain tool arguments, validate business rules and keep exact computation outside the model. Each workflow stage has a success condition, a bounded retry policy and an explicit failure state. I version prompts and models and run representative regression evaluations. Lower temperature helps consistency, but neither a schema nor a confident response establishes semantic correctness.

<details>
<summary>展开详解与追问</summary>

Explanation

Schema validity checks structure; evidence checks factual support; state-machine checks enforce workflow order. These solve different failure classes and should have separate tests.

Follow-up

- Is a second model enough to validate the first?
  No. Correlated errors are possible; use deterministic checks and reviewed examples where available.

</details>
</details>
<!-- /interview-answer -->

- Q481 — How do you evaluate a chatbot?（来源：[01-theory.md:65](interview/questions/01-theory.md)）

<!-- interview-answer Q481 -->
<details>
<summary>展开答案 · Q481</summary>

Interview Answer

I evaluate whether the chatbot solves the intended user task correctly, not simply whether it sounds natural. The set includes answerable, ambiguous, multi-turn and unanswerable cases. I check evidence support, tool behavior, escalation and permission boundaries, plus latency and cost. Human review calibrates any model judge, and production feedback complements rather than replaces a fixed regression set.

<details>
<summary>展开详解与追问</summary>

Explanation

Evaluate representative conversations, including follow-ups, refusals and escalation, with a calibrated rubric. Offline answer quality and online task success are related but distinct.

Follow-up

- What does a good chatbot test case include?
  User context, the question, allowed evidence, expected behavior and explicit unacceptable outcomes.

</details>
</details>
<!-- /interview-answer -->

- Q482 — What metrics do you consider when evaluating LLM performance?（来源：[01-theory.md:66](interview/questions/01-theory.md)）

<!-- interview-answer Q482 -->
<details>
<summary>展开答案 · Q482</summary>

Interview Answer

I use task-specific correctness, groundedness and appropriate abstention, then operational metrics such as p50/p95 latency, time to first token, throughput, errors and cost per successful task. I also check important slices and access or safety failures. General benchmarks are useful context, but the release decision comes from representative application data with documented evaluation conditions.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate task quality from serving performance and resource use. Include unsupported-answer rate, cost per successful task and latency distributions rather than one average score.

Follow-up

- Why report p95 latency?
  It describes a tail users may frequently encounter at scale and can reveal queueing hidden by the mean.

</details>
</details>
<!-- /interview-answer -->

- Q483 — How do you build a golden dataset for evaluation?（来源：[01-theory.md:67](interview/questions/01-theory.md)）

<!-- interview-answer Q483 -->
<details>
<summary>展开答案 · Q483</summary>

Interview Answer

I collect representative tasks and known failures, define reference evidence or expected outcomes and review labels for ambiguity. I separate development and held-out cases and prevent near-duplicate leakage. Each run records dataset, prompt, model and code versions. For regressions I compare both aggregate scores and individual severe failures, updating the dataset without pretending repeatedly tuned cases remain independent tests.

<details>
<summary>展开详解与追问</summary>

Explanation

Build from real task categories and failures, include hard negatives and keep development separate from held-out regression evidence. Track source versions and label disagreements.

Follow-up

- Should the golden set never change?
  It should evolve with the product, but changes must be versioned so old and new scores remain interpretable.

</details>
</details>
<!-- /interview-answer -->

- Q484 — How do you debug a RAG chatbot giving confident but wrong answers?（来源：[01-theory.md:70](interview/questions/01-theory.md)）

<!-- interview-answer Q484 -->
<details>
<summary>展开答案 · Q484</summary>

Interview Answer

I reproduce the exact request with prompt, model, index and data versions, then inspect whether the needed evidence was ingested, retrieved and actually passed to generation. If the evidence is correct, I examine interpretation, units and unsupported synthesis. I add the failure to a regression set and fix the responsible stage. Confidence in the wording is not evidence about which stage failed.

<details>
<summary>展开详解与追问</summary>

Explanation

Reproduce the exact trace and find the first divergence: wrong evidence, missing qualifier, context truncation or unsupported synthesis. Correct-looking citations can still refer to non-supporting text.

Follow-up

- Why not immediately change the model?
  A model swap can conceal an ingestion or retrieval defect and make causal diagnosis harder.

</details>
</details>
<!-- /interview-answer -->

- Q485 — How do you evaluate a RAG pipeline?（来源：[01-theory.md:71](interview/questions/01-theory.md)）

<!-- interview-answer Q485 -->
<details>
<summary>展开答案 · Q485</summary>

Interview Answer

I evaluate retrieval and generation separately. Recall@k measures coverage of labeled relevant evidence; precision@k measures the useful fraction returned; MRR emphasizes the first relevant hit; nDCG accounts for graded relevance and rank. I then check answer correctness, citation support, abstention, latency and cost. Label completeness and the relevance unit matter, so I inspect failures rather than optimizing one aggregate score blindly.

<details>
<summary>展开详解与追问</summary>

Explanation

Recall@k is relevant items retrieved divided by all labeled relevant items; precision@k is relevant retrieved divided by k. MRR emphasizes the first relevant result; NDCG supports graded relevance and rank position.

Follow-up

- Does higher recall guarantee a better answer?
  No. Extra irrelevant context, missing reasoning or incorrect generation can still reduce end-to-end quality.

</details>
</details>
<!-- /interview-answer -->


<a id="day-09"></a>

### 周四 10/15

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Subqueries, CTEs, EXISTS<br>LeetCode: [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/); [1661. Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/); [1148. Article Views I](https://leetcode.com/problems/article-views-i/)<br>资料：[Subqueries](Study%20topics/subqueries.html); [CTEs](Study%20topics/ctes.html); [EXISTS](Study%20topics/exists.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [PR-AUC; ROC-AUC; Calibration](Study%20topics/pr-auc-roc-auc-calibration.html) · [Notebook](notebook/07_pr_auc_roc_auc_calibration.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Rate Limiting and Capacity](Study%20topics/rate-limiting-and-capacity.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Evaluator Failures and Bounded Retries<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-09) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / ML Fundamentals; Technical Questions / Python and Software Engineering — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Agents vs. Workflows](Study%20topics/agents-vs-workflows.html); [Function Calling](Study%20topics/function-calling.html); [Tool Schemas](Study%20topics/tool-schemas.html); [Termination Conditions](Study%20topics/termination-conditions.html); [Timeouts](Study%20topics/timeouts.html); [Backoff](Study%20topics/backoff.html); [Rate Limiting](Study%20topics/rate-limiting.html); [Capacity Planning](Study%20topics/capacity-planning.html); [Fail-Open vs. Fail-Closed](Study%20topics/fail-open-vs-fail-closed.html); [Retries](Study%20topics/retries.html) |


<!-- quantvault-day 09 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1666 · Profit-Aware Classification Threshold](https://quantvault.org/problems.html?id=1666) · Machine Learning · Hard

先修：先读Precision、Recall、ROC-AUC与PR-AUC；用每次正确收益/错误损失的小数字例子。

本次范围：Advanced: scoped calculation。只完成二分类阈值的收益/损失判断。先画PR/ROC曲线的含义，再说明排序指标不能替代决策成本。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-09)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q140 — How do you approach data pre-processing and feature engineering?（来源：[questions.md:163](interview/questions/questions.md)）

<!-- interview-answer Q140 -->
<details>
<summary>展开答案 · Q140</summary>

Interview Answer

I start by defining the prediction target, decision time and row grain. I inspect missingness, duplicates, units and label quality, then split data before fitting imputation, scaling or feature selection. Features must be available at prediction time. I compare against a simple baseline and keep transformations in a versioned pipeline so training and serving use the same contract.

<details>
<summary>展开详解与追问</summary>

Explanation

For five-day volatility, a return observed after today's close is available for a close-time forecast, while the next five returns belong only in the label. Filing period end and publication date are also different timestamps.

Follow-up

- Why split before preprocessing?
  A fitted transform can leak held-out distribution information even when it never sees the held-out labels.

Technical Sources

- [scikit-learn cross-validation guidance](https://scikit-learn.org/stable/modules/cross_validation.html)

</details>
</details>
<!-- /interview-answer -->

- Q141 — Explain SQL versus NoSQL databases for AI workloads.（来源：[questions.md:164](interview/questions/questions.md)）

<!-- interview-answer Q141 -->
<details>
<summary>展开答案 · Q141</summary>

Interview Answer

I choose storage from access patterns and consistency requirements. Relational databases fit structured entities, joins and transactional invariants such as experiment runs and payments. Document or key-value stores can fit flexible records or high-volume keyed access. Search and vector indexes serve retrieval rather than replacing an authoritative database. I would use PostgreSQL for run state and add specialized indexes only when the workload warrants them.

<details>
<summary>展开详解与追问</summary>

Explanation

SQL versus NoSQL is not a binary choice between consistency and scale; individual systems offer different guarantees. Duplicate writes, access control and deletion propagation need explicit design across stores.

Follow-up

- Where should embeddings live?
  Alongside searchable metadata in a suitable index, with stable references to the authoritative document and its version.

</details>
</details>
<!-- /interview-answer -->

- Q142 — What steps would you take to diagnose performance bugs in a model?（来源：[questions.md:165](interview/questions/questions.md)）

<!-- interview-answer Q142 -->
<details>
<summary>展开答案 · Q142</summary>

Interview Answer

I first clarify whether performance means predictive quality, runtime or memory. I reproduce the issue on a fixed input, check versions and compare intermediate outputs with a trusted baseline. For learning failures I inspect labels, shapes, loss and gradients; for runtime I profile the actual bottleneck. I make one change and rerun correctness and performance checks on the same workload.

<details>
<summary>展开详解与追问</summary>

Explanation

A model returning the correct shape can still broadcast labels incorrectly. Conversely, a slow model may spend most of its time in data loading rather than computation.

Follow-up

- What is your first sanity check for training?
  Try to overfit a tiny clean batch, then verify labels and gradients if it cannot.

</details>
</details>
<!-- /interview-answer -->

- Q143 — Should you optimize for latency or throughput? (for a personal assistant with one request)（来源：[questions.md:166](interview/questions/questions.md)）

<!-- interview-answer Q143 -->
<details>
<summary>展开答案 · Q143</summary>

Interview Answer

For a personal assistant handling one interactive request, I would prioritize user-visible latency while maintaining quality. I would measure queue time, retrieval, model prefill, decoding and tool execution, then shorten the critical path. Throughput still matters for resource efficiency, but waiting to fill a large batch may make that user's experience worse.

<details>
<summary>展开详解与追问</summary>

Explanation

Time to first token and full completion time are separate. Parallelizing independent tools can help, but dependent steps cannot simply run concurrently.

Follow-up

- Would streaming solve the problem?
  It improves perceived responsiveness, but does not necessarily reduce completion time or tool latency.

</details>
</details>
<!-- /interview-answer -->

- Q144 — Should you use data parallelism for a single-request personal assistant? Why or why not?（来源：[questions.md:167](interview/questions/questions.md)）

<!-- interview-answer Q144 -->
<details>
<summary>展开答案 · Q144</summary>

Interview Answer

Usually not. Data parallelism replicates a model to process independent requests or training minibatches; it does not normally accelerate one autoregressive request. For a single interactive request I would first optimize context, kernels, model size and the tool critical path. Model parallelism might be necessary if the model cannot fit on one device, but adds communication overhead.

<details>
<summary>展开详解与追问</summary>

Explanation

Replication helps concurrent users and availability. It should not be confused with partitioning one model across devices or speculative decoding.

Follow-up

- When would replicas still be useful?
  When the service must remain available after failure or handle multiple concurrent requests.

</details>
</details>
<!-- /interview-answer -->

- Q145 — Explain how Transformers work. Why are they foundational? (reported across multiple companies)（来源：[questions.md:168](interview/questions/questions.md)）

<!-- interview-answer Q145 -->
<details>
<summary>展开答案 · Q145</summary>

Interview Answer

Transformers combine attention, feed-forward layers, positional information, normalization and residual connections to build context-sensitive representations. Attention can connect distant positions without the sequential recurrence of an RNN. Parallel training and scalable architectures helped make them foundational for language models. I would distinguish that training advantage from autoregressive inference, which still generates tokens sequentially in the basic algorithm.

<details>
<summary>展开详解与追问</summary>

Explanation

Causal, bidirectional and cross-attention serve different tasks. Dense attention's sequence-length cost and inference KV cache affect system design.

Follow-up

- Is attention alone the whole model?
  No; feed-forward layers, embeddings, normalization, residual paths and the training objective are all important.

</details>
</details>
<!-- /interview-answer -->

- Q146 — How would you handle real-time versus batch processing for data updates? When is one preferred over the other?（来源：[questions.md:169](interview/questions/questions.md)；[questions.md:302](interview/questions/questions.md)；[questions.md:460](interview/questions/questions.md)；[04-ai-system-design.md:65](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q146 -->
<details>
<summary>展开答案 · Q146</summary>

Interview Answer

I choose from freshness requirements and operational cost. Batch processing is simpler and efficient when hourly or daily updates are acceptable. Streaming is appropriate when new events must affect decisions quickly, but requires handling duplicates, ordering, late arrivals and replay. I would often use a batch backfill plus incremental updates with clear version and watermark semantics.

<details>
<summary>展开详解与追问</summary>

Explanation

A real-time label does not guarantee immediate correctness: the underlying event may arrive late. Define event time separately from processing time.

Follow-up

- How do you recover after an outage?
  Replay from a durable offset or checkpoint using idempotent processing, then reconcile against the source.

</details>
</details>
<!-- /interview-answer -->

- Q147 — How do you ingest and process different types of data (structured, unstructured, event data)?（来源：[questions.md:170](interview/questions/questions.md)；[questions.md:303](interview/questions/questions.md)；[04-ai-system-design.md:66](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q147 -->
<details>
<summary>展开答案 · Q147</summary>

Interview Answer

I normalize inputs into versioned records with provenance while preserving raw data for reproducibility. Structured data undergo schema and business checks; documents need parsing, OCR and layout-aware extraction; events need IDs, timestamps and deduplication. Failed records enter a quarantine path. Incremental ingestion tracks changes and deletions, and downstream indexes expose which source version they contain.

<details>
<summary>展开详解与追问</summary>

Explanation

One universal parser often loses tables, units or event semantics. A common envelope can unify metadata without forcing every payload into the same representation.

Follow-up

- What do you do with a malformed record?
  Record the failure with its source reference, quarantine it and avoid silently publishing a fabricated repair.

</details>
</details>
<!-- /interview-answer -->

- Q148 — Explain the bias-variance tradeoff in simple terms.（来源：[questions.md:171](interview/questions/questions.md)）

<!-- interview-answer Q148 -->
<details>
<summary>展开答案 · Q148</summary>

Interview Answer

Bias is error from a model being too restrictive; variance is sensitivity to the particular training sample. A simple model may miss real structure, while a flexible model may fit noise. I inspect training and validation performance and use regularization, more representative data or an appropriate model to balance them. The goal is generalization, not minimum training error.

<details>
<summary>展开详解与追问</summary>

Explanation

The familiar decomposition is most straightforward for squared-error settings. Real validation also includes distribution shift and data leakage, which are not solved by this slogan.

Follow-up

- Does more complexity always lower test error?
  No. It may reduce training error while increasing sensitivity to noise and worsening validation performance.

</details>
</details>
<!-- /interview-answer -->

- Q149 — Why are neural networks usually not the first choice for tabular data?（来源：[questions.md:172](interview/questions/questions.md)）

<!-- interview-answer Q149 -->
<details>
<summary>展开答案 · Q149</summary>

Interview Answer

For many modest tabular datasets, boosted trees provide strong performance with less preprocessing and tuning than neural networks. They handle nonlinear interactions and mixed feature patterns well. Neural networks can still be useful with very large data, learned embeddings, multimodal inputs or particular architectures. I would benchmark them rather than claim that neural networks are inherently unsuitable for tables.

<details>
<summary>展开详解与追问</summary>

Explanation

Dataset size, categorical encoding, missingness and training budget affect the comparison. A simple linear baseline remains valuable for diagnosis.

Follow-up

- What would make you try a neural model?
  Evidence that learned representations or scale improve the task enough to justify the extra complexity.

</details>
</details>
<!-- /interview-answer -->

- Q150 — How do you handle imbalanced datasets in real projects?（来源：[questions.md:173](interview/questions/questions.md)）

<!-- interview-answer Q150 -->
<details>
<summary>展开答案 · Q150</summary>

Interview Answer

I define which error matters, use a split that preserves the real deployment setting and evaluate precision, recall and appropriate ranking or cost metrics rather than accuracy alone. I consider class weights or resampling within training folds, and tune the decision threshold on validation data. I also inspect minority subclasses and calibration.

<details>
<summary>展开详解与追问</summary>

Explanation

Resampling the entire dataset before splitting leaks related examples. A high ROC-AUC may coexist with low useful precision at a rare-event operating point.

Follow-up

- Would you balance the test set?
  Not for deployment performance estimation; it should reflect the intended population or be evaluated with explicit prevalence weighting.

</details>
</details>
<!-- /interview-answer -->

- Q151 — Explain the difference between RNN and LSTM.（来源：[questions.md:174](interview/questions/questions.md)）

<!-- interview-answer Q151 -->
<details>
<summary>展开答案 · Q151</summary>

Interview Answer

An ordinary RNN updates a hidden state recursively, which can struggle to retain long-range information because gradients vanish or explode. An LSTM adds a cell state and gates controlling what to retain, forget and expose. That improves memory handling but does not eliminate optimization difficulties or sequential computation. I would compare with simpler sequence features or Transformers for the actual task.

<details>
<summary>展开详解与追问</summary>

Explanation

The gates are learned functions, not hand-written decisions. Padding, masking and sequence boundaries matter in implementation.

Follow-up

- Does an LSTM remove all vanishing gradients?
  No. Its additive cell path helps, but long-sequence learning and initialization still require care.

</details>
</details>
<!-- /interview-answer -->

- Q152 — Debug a model that runs but doesn't learn. Identify broadcasting errors and dimension mismatches.（来源：[questions.md:175](interview/questions/questions.md)）

<!-- interview-answer Q152 -->
<details>
<summary>展开答案 · Q152</summary>

Interview Answer

I would print and assert the shapes of inputs, predictions, labels, loss and gradients, then try to overfit one small batch. A common bug is subtracting labels shaped (n,) from predictions shaped (n,1), producing an (n,n) matrix. I also check detached tensors, zero gradients, optimizer steps, learning rate and label alignment before changing the architecture.

<details>
<summary>展开详解与追问</summary>

Explanation

A decreasing scalar loss does not prove the intended objective is being optimized. Compare a few hand-computed predictions and a finite-difference gradient where feasible.

Follow-up

- What shape should binary labels have?
  It depends on the loss API, but it must match its documented prediction contract without accidental broadcasting.

</details>
</details>
<!-- /interview-answer -->

- Q153 — Statistics questions: probability, distributions, regression, Bayesian analysis, hypothesis testing.（来源：[questions.md:176](interview/questions/questions.md)）

<!-- interview-answer Q153 -->
<details>
<summary>展开答案 · Q153</summary>

Interview Answer

I would first ask which statistical problem we are solving. I would define the sample space, assumptions and estimand; choose a distribution or regression model justified by the data; and quantify uncertainty. For Bayesian analysis I would distinguish prior, likelihood and posterior. For hypothesis testing I would explain the null, test statistic, error rates and practical effect size rather than recite a p-value rule.

<details>
<summary>展开详解与追问</summary>

Explanation

This entry names a subject area, not a fully specified question. Time dependence, multiple comparisons and selection can invalidate standard independent-sample formulas in finance.

Follow-up

- What does a p-value mean?
  Under the null and test assumptions, it is the probability of a result at least as extreme as observed, not the probability that the null is true.

</details>
</details>
<!-- /interview-answer -->

- Q154 — Explain supervised vs. unsupervised learning. When would you use each?（来源：[questions.md:177](interview/questions/questions.md)）

<!-- interview-answer Q154 -->
<details>
<summary>展开答案 · Q154</summary>

Interview Answer

Supervised learning uses labeled examples to predict a specified outcome, such as future volatility or default. Unsupervised learning looks for structure without that target, such as clustering documents or reducing dimensions. I choose based on the decision to support and the available labels. Unsupervised clusters still need evaluation; discovering groups does not automatically make them useful business categories.

<details>
<summary>展开详解与追问</summary>

Explanation

The same dataset can support both approaches. A clustering objective is not equivalent to forecast accuracy.

Follow-up

- Is reinforcement learning unsupervised learning?
  It is usually treated separately: an agent learns from reward-linked interactions rather than ordinary fixed labels or clustering objectives.

</details>
</details>
<!-- /interview-answer -->

- Q155 — What is regularization? Compare L1, L2, and dropout.（来源：[questions.md:178](interview/questions/questions.md)）

<!-- interview-answer Q155 -->
<details>
<summary>展开答案 · Q155</summary>

Interview Answer

Regularization discourages overly complex or unstable fits. L1 penalizes absolute coefficients and can produce sparsity; L2 penalizes squared coefficients and tends to shrink correlated effects smoothly. Dropout randomly masks activations during training, encouraging less reliance on particular units. I select strength on validation data and keep feature scaling in mind; regularization cannot repair leakage or incorrect labels.

<details>
<summary>展开详解与追问</summary>

Explanation

L1 does not reliably identify causal variables, particularly with correlated features. Dropout's training and inference behavior differ.

Follow-up

- Why does scaling matter for L1 or L2?
  The penalty acts on coefficient magnitude, which changes when feature units change.

</details>
</details>
<!-- /interview-answer -->

- Q156 — What is feature scaling and when is it necessary? Compare normalization vs standardization.（来源：[questions.md:179](interview/questions/questions.md)）

<!-- interview-answer Q156 -->
<details>
<summary>展开答案 · Q156</summary>

Interview Answer

Scaling makes feature magnitudes comparable. Standardization subtracts a fitted mean and divides by a fitted scale; normalization may mean min-max scaling or unit-vector normalization, so I clarify the term. Distance-based methods and regularized linear models often need scaling, while trees generally do not. I fit transformations on training data and reuse them unchanged during validation and serving.

<details>
<summary>展开详解与追问</summary>

Explanation

Outliers can dominate mean/std or min-max estimates; robust scaling may help. Constant features require a defined handling rule.

Follow-up

- Can I scale once before cross-validation?
  No. Fit the scaler inside each fold, normally through a pipeline.

</details>
</details>
<!-- /interview-answer -->

- Q157 — Implement cosine similarity in NumPy.（来源：[questions.md:180](interview/questions/questions.md)）

<!-- interview-answer Q157 -->
<details>
<summary>展开答案 · Q157</summary>

Interview Answer

For vectors a and b, cosine similarity is dot(a,b)/(norm(a)*norm(b)). I convert to a numeric array, validate equal one-dimensional shapes and define how zero vectors are handled. For batches I normalize along the feature axis and multiply matrices. I would test identical, orthogonal, opposite and zero vectors and avoid accidental broadcasting.

<details>
<summary>展开详解与追问</summary>

Explanation

Cosine compares direction, not magnitude. The reference implementation below returns zero for a zero-norm input as an explicit application policy, not a mathematical definition.

Follow-up

- What is the complexity?
  O(d) time for d-dimensional vectors; O(d) conversion space if a copy is required, otherwise constant additional reduction space.

Reference Code

```python
import numpy as np


def cosine_similarity(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if a.ndim != 1 or a.shape != b.shape or a.size == 0:
        raise ValueError("equal nonempty vectors required")
    if not np.isfinite(a).all() or not np.isfinite(b).all():
        raise ValueError("finite vectors required")
    # Rescale first to reduce overflow in norms for large finite inputs.
    sa, sb = np.max(np.abs(a)), np.max(np.abs(b))
    if sa == 0 or sb == 0:
        return 0.0  # Explicit application policy; cosine is undefined at zero.
    a, b = a / sa, b / sb
    return float(np.clip(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)), -1, 1))
```

</details>
</details>
<!-- /interview-answer -->

- Q158 — How do you handle race conditions in your code?（来源：[questions.md:184](interview/questions/questions.md)）

<!-- interview-answer Q158 -->
<details>
<summary>展开答案 · Q158</summary>

Interview Answer

I identify the shared invariant and protect the entire read-modify-write operation, not just individual container calls. Threads may need a lock, while multiple processes or services need database transactions, atomic operations or another shared coordination mechanism. I also prefer avoiding shared mutable state where practical and test controlled interleavings around failure boundaries.

<details>
<summary>展开详解与追问</summary>

Explanation

The GIL does not make a multi-step business operation atomic. A local lock does not protect another worker process.

Follow-up

- How would you prevent duplicate job publication?
  Use a durable unique logical key and an atomic result commit, with retry behavior that reuses the recorded outcome.

</details>
</details>
<!-- /interview-answer -->


<a id="day-10"></a>

### 周五 10/16

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Stacks; Queues; String Parsing<br>LeetCode: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/); [155. Min Stack](https://leetcode.com/problems/min-stack/); [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)<br>资料：[Stacks](Study%20topics/stacks.html); [Queues](Study%20topics/queues.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [PR-AUC; ROC-AUC; Calibration](Study%20topics/pr-auc-roc-auc-calibration.html) · [Notebook](notebook/07_pr_auc_roc_auc_calibration.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Rate Limiting and Capacity](Study%20topics/rate-limiting-and-capacity.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Human Approval and State Transitions<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-10) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Python and Software Engineering; Technical Questions / Infrastructure and MLOps — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities<br>当日概念索引（按需）：[Agent State](Study%20topics/agent-state.html); [LangGraph](Study%20topics/langgraph.html); [Human-in-the-Loop](Study%20topics/human-in-the-loop.html); [Approval Audit Trail](Study%20topics/approval-audit-trail.html) |

<!-- quantvault-day 10 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3699 · MSE or Cross Entropy: Picking a Loss for a Probabilistic Classifier](https://quantvault.org/problems.html?id=3699) · Machine Learning · Medium

先修：Cross Entropy衡量真实类别被赋予的概率；Brier Score是概率的平方误差。这里不要求证明。

本次范围：Conceptual。比较数值回归损失与概率分类损失；先读Calibration，说明校准、排序和训练目标是不同问题。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-10)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q159 — What is the Global Interpreter Lock (GIL) in Python?（来源：[questions.md:185](interview/questions/questions.md)）

<!-- interview-answer Q159 -->
<details>
<summary>展开答案 · Q159</summary>

Interview Answer

In conventional CPython, the GIL limits Python-bytecode execution to one thread at a time within an interpreter. Threads can still overlap I/O, and native extensions may release it. Optional free-threaded builds change those assumptions, so I specify the runtime. CPU-heavy Python often benefits from processes, while shared application invariants still need explicit synchronization.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not equate the GIL with a general thread-safety guarantee or assume every Python implementation behaves identically.

Follow-up

- Does NumPy always run under the GIL?
  Many numerical operations release it, but behavior depends on the operation and underlying library; I benchmark the actual workload.

Technical Sources

- [Python free-threading documentation](https://docs.python.org/3/howto/free-threading-python.html)

</details>
</details>
<!-- /interview-answer -->

- Q160 — What is something unique about Python when it comes to concurrency?（来源：[questions.md:186](interview/questions/questions.md)）

<!-- interview-answer Q160 -->
<details>
<summary>展开答案 · Q160</summary>

Interview Answer

Python offers async tasks, threads and processes with different execution and isolation models. In conventional CPython, the GIL limits parallel Python-bytecode execution across threads, but threads remain useful for blocking I/O. Async works through cooperative yielding, and processes can parallelize CPU-bound Python at serialization and startup cost. I choose from workload measurements and failure semantics.

<details>
<summary>展开详解与追问</summary>

Explanation

Free-threaded Python is an important qualification; library compatibility still matters. Combining process pools with multithreaded BLAS can oversubscribe CPUs.

Follow-up

- Why not use multiprocessing everywhere?
  It adds data-transfer, memory, startup and coordination costs that can exceed the useful computation.

Technical Sources

- [Python free-threading documentation](https://docs.python.org/3/howto/free-threading-python.html)

</details>
</details>
<!-- /interview-answer -->

- Q161 — What are some problems you can run into when using asynchronous programming in Python?（来源：[questions.md:187](interview/questions/questions.md)）

<!-- interview-answer Q161 -->
<details>
<summary>展开答案 · Q161</summary>

Interview Answer

Common async failures include blocking the event loop, unbounded task creation, forgotten awaits, lost task exceptions and incorrect cancellation cleanup. A semaphore limits active work but may still leave millions of allocated tasks. I use bounded queues or worker pools, explicit timeouts and structured task lifetimes, and make shared state transitions safe across await points.

<details>
<summary>展开详解与追问</summary>

Explanation

Async concurrency is not automatic CPU parallelism. Retrying cancelled side-effect calls can also duplicate remote work.

Follow-up

- How would you diagnose an event-loop stall?
  Measure loop delay and inspect blocking calls or long CPU sections, then replace or offload the offending operation.

Technical Sources

- [Python asyncio tasks and cancellation](https://docs.python.org/3/library/asyncio-task.html)

</details>
</details>
<!-- /interview-answer -->

- Q162 — What is Docker?（来源：[questions.md:188](interview/questions/questions.md)）

<!-- interview-answer Q162 -->
<details>
<summary>展开答案 · Q162</summary>

Interview Answer

Docker packages an application and its dependencies into an image and runs isolated processes from that image. It improves reproducibility across environments, but it does not make an application scalable or persist local state automatically. I use a small versioned image, explicit configuration, a non-root runtime where feasible, health checks and externalized durable state.

<details>
<summary>展开详解与追问</summary>

Explanation

Containers share the host kernel; they are not equivalent to full virtual machines. Image reproducibility still depends on pinned inputs and build practices.

Follow-up

- What happens to data when a container is replaced?
  Ephemeral writable-layer data may disappear; durable data must be stored in an explicitly managed volume or external service.

</details>
</details>
<!-- /interview-answer -->

- Q163 — Why do we use Selenium?（来源：[questions.md:189](interview/questions/questions.md)）

<!-- interview-answer Q163 -->
<details>
<summary>展开答案 · Q163</summary>

Interview Answer

Selenium automates a real browser, which is useful for end-to-end UI tests and workflows requiring client-side JavaScript. I prefer an API or simpler HTTP client when one is available because browser automation is slower and more fragile. Tests should use stable locators, explicit waits and independent state rather than arbitrary sleep calls.

<details>
<summary>展开详解与追问</summary>

Explanation

A browser test checks user-visible integration, but it is not a replacement for focused unit and API tests.

Follow-up

- How do you reduce flaky tests?
  Wait for observable conditions, avoid timing assumptions, isolate test data and select elements by stable semantics.

</details>
</details>
<!-- /interview-answer -->

- Q164 — Have you heard about Redis?（来源：[questions.md:190](interview/questions/questions.md)）

<!-- interview-answer Q164 -->
<details>
<summary>展开答案 · Q164</summary>

Interview Answer

Redis is an in-memory data platform often used for caching, counters, coordination and some queue patterns. I would choose data structures and persistence settings according to the requirement rather than assume it is a durable source of truth by default. For experiment runs I would keep authoritative state in a transactional database and use Redis only where its latency or queue capabilities help.

<details>
<summary>展开详解与追问</summary>

Explanation

Eviction, expiration, replication and failover settings affect correctness. A distributed lock also needs careful ownership and expiry semantics.

Follow-up

- Can Redis replace every database?
  No. Transactions, querying, durability and operational requirements determine whether it is appropriate.

</details>
</details>
<!-- /interview-answer -->

- Q165 — Explain the JavaScript event loop.（来源：[questions.md:191](interview/questions/questions.md)）

<!-- interview-answer Q165 -->
<details>
<summary>展开答案 · Q165</summary>

Interview Answer

JavaScript executes synchronous code on a call stack while the runtime schedules asynchronous work. Once the stack is clear, queued work can run; promise reactions use the microtask queue, which is processed before the next ordinary task in common runtimes. Long synchronous work blocks responsiveness. Browser and Node event-loop details differ, so I would qualify runtime-specific ordering claims.

<details>
<summary>展开详解与追问</summary>

Explanation

Async syntax does not turn CPU-heavy code into parallel work. Recursive microtasks can starve other tasks.

Follow-up

- How do you move CPU-heavy work off the main thread?
  Use a worker mechanism appropriate to the runtime and account for message-transfer overhead.

</details>
</details>
<!-- /interview-answer -->

- Q166 — How do you call models via API/SDK? How do you handle retries, timeouts, and logging?（来源：[questions.md:192](interview/questions/questions.md)）

<!-- interview-answer Q166 -->
<details>
<summary>展开答案 · Q166</summary>

Interview Answer

I wrap the provider SDK behind a small interface with typed inputs and outputs, explicit deadlines and structured errors. I retry only eligible transient failures within a total budget, respect rate limits and use idempotency for side effects. Logs retain request IDs, model configuration, latency and usage with sensitive content redacted. Offline tests use mocks; controlled integration tests verify the real endpoint.

<details>
<summary>展开详解与追问</summary>

Explanation

A timeout does not prove the provider stopped processing. Streaming requires handling partial output, disconnects and cancellation separately.

Follow-up

- What should never go into ordinary logs?
  API keys, secrets and unnecessary sensitive prompts or tool results.

</details>
</details>
<!-- /interview-answer -->

- Q167 — Which AI development platforms or tools do you regularly use, and why?（来源：[questions.md:193](interview/questions/questions.md)）

<!-- interview-answer Q167 -->
<details>
<summary>展开答案 · Q167</summary>

Interview Answer

I use Python daily and have built a Python library; I also use GitHub workflows where pull requests trigger unit tests. In my learning work, Risk Copilot and AI-assisted development are central. I would name specific model SDKs and frameworks only after verifying what I actually used, and distinguish using an existing CI pipeline from designing or deploying it.

<details>
<summary>展开详解与追问</summary>

Explanation

A strong answer ties each tool to a problem and explains personal depth. Completing a course is not the same as operating the framework in production.

Follow-up

- Which tool would you discuss most deeply?
  The Python library or Risk Copilot component I can trace, test and modify myself.

</details>
</details>
<!-- /interview-answer -->

- Q168 — Explain memory leaks and garbage collection in Python.（来源：[questions.md:194](interview/questions/questions.md)）

<!-- interview-answer Q168 -->
<details>
<summary>展开答案 · Q168</summary>

Interview Answer

CPython mainly uses reference counting and a cyclic garbage collector. Memory can grow because objects remain reachable in caches, callbacks, global collections or reference cycles involving resources; native extensions can also retain memory. I profile allocations and object lifetimes under a repeatable workload, inspect ownership and add explicit cleanup for external resources rather than forcing garbage collection blindly.

<details>
<summary>展开详解与追问</summary>

Explanation

A process retaining allocated memory for reuse is not automatically a leak. RSS alone does not reveal which objects are still live.

Follow-up

- What tool would you start with?
  tracemalloc for Python allocation growth, supplemented by process and native-memory profiling when the growth is outside Python's tracked allocations.

</details>
</details>
<!-- /interview-answer -->

- Q169 — What is the difference between class methods and static methods?（来源：[questions.md:195](interview/questions/questions.md)）

<!-- interview-answer Q169 -->
<details>
<summary>展开答案 · Q169</summary>

Interview Answer

A class method receives the class as its first argument and is useful for alternate constructors or behavior that depends on the subclass. A static method receives no implicit instance or class and is a namespaced utility. An instance method receives self. I choose based on which state and polymorphism the operation needs rather than using decorators just for organization.

<details>
<summary>展开详解与追问</summary>

Explanation

An alternate constructor should normally call cls(...) rather than hard-code the base class if subclass behavior is intended.

Follow-up

- Can a static method access class data?
  Yes through an explicit reference, but it does not automatically receive the dynamically selected class.

</details>
</details>
<!-- /interview-answer -->

- Q170 — Explain super() and Method Resolution Order in multiple inheritance.（来源：[questions.md:196](interview/questions/questions.md)）

<!-- interview-answer Q170 -->
<details>
<summary>展开答案 · Q170</summary>

Interview Answer

super() delegates to the next implementation in the method resolution order, not simply a named parent. Python uses C3 linearization for multiple inheritance. Cooperative methods need compatible signatures and consistent use of super so each participating class can run once in the intended order. I inspect the class's MRO rather than guessing the diamond-inheritance path.

<details>
<summary>展开详解与追问</summary>

Explanation

Calling a particular base class directly can skip or duplicate cooperative initialization in a diamond.

Follow-up

- How would you debug an unexpected method call?
  Inspect Class.__mro__, then trace which classes override the method and how they forward arguments.

</details>
</details>
<!-- /interview-answer -->

- Q171 — How do you debug Python code in production? "In production, there will be no VS Code."（来源：[questions.md:197](interview/questions/questions.md)）

<!-- interview-answer Q171 -->
<details>
<summary>展开答案 · Q171</summary>

Interview Answer

I rely on structured logs, metrics, traces, error reports and reproducible inputs tied to deployed versions. I narrow the failing request and reproduce it in a safe environment, preserving exception causes and redacting sensitive data. If necessary I add targeted instrumentation or profiling under a controlled rollout. An IDE is convenient, but production diagnosis depends on observability and disciplined experiments.

<details>
<summary>展开详解与追问</summary>

Explanation

Attaching a debugger can pause a service or expose data. It is a controlled diagnostic option, not the default first step.

Follow-up

- What did your library experience teach you?
  Broad try/except blocks can conceal the root cause; useful error context and exception chaining make failures easier to diagnose.

</details>
</details>
<!-- /interview-answer -->

- Q172 — How do you use asyncio for concurrent I/O in Python? When would you use threading vs. multiprocessing instead?（来源：[questions.md:198](interview/questions/questions.md)）

<!-- interview-answer Q172 -->
<details>
<summary>展开答案 · Q172</summary>

Interview Answer

I use asyncio with nonblocking clients for many concurrent I/O operations, bounded by a queue or semaphore and an overall timeout. Threads fit blocking I/O libraries that lack async support. Processes can help CPU-bound Python, with serialization and startup overhead. I test cancellation and failures and avoid mixing blocking work into the event loop.

<details>
<summary>展开详解与追问</summary>

Explanation

The optimal choice depends on library behavior, including native kernels that release the GIL. More concurrency can overwhelm the downstream provider.

Follow-up

- How do you preserve result order?
  Attach input IDs or gather bounded batch results in input order, while allowing execution to complete out of order.

Technical Sources

- [Python asyncio tasks and cancellation](https://docs.python.org/3/library/asyncio-task.html)

</details>
</details>
<!-- /interview-answer -->

- Q173 — How do you optimize SQL queries? Explain the order of execution in SQL.（来源：[questions.md:199](interview/questions/questions.md)）

<!-- interview-answer Q173 -->
<details>
<summary>展开答案 · Q173</summary>

Interview Answer

I first check correctness and row grain, then inspect EXPLAIN or the engine's query profile for scans, joins, estimates, sorts and spills. I reduce unnecessary rows and columns and add suitable indexes where supported. A useful logical order is FROM/JOIN, WHERE, GROUP BY, HAVING, window processing, SELECT, DISTINCT, ORDER BY and LIMIT, with dialect nuances; the optimizer's physical order can differ.

<details>
<summary>展开详解与追问</summary>

Explanation

Filtering a nullable right-side column after a LEFT JOIN can change its meaning. Snowflake optimization differs from PostgreSQL B-tree tuning.

Follow-up

- Why can a query be slow despite an index?
  Low selectivity, stale estimates, incompatible predicate/order, excessive intermediate rows or I/O can make another plan preferable.

</details>
</details>
<!-- /interview-answer -->

- Q174 — What are Git branching strategies for deployment? How do you perform a rebase? How do you handle merge conflicts?（来源：[questions.md:200](interview/questions/questions.md)）

<!-- interview-answer Q174 -->
<details>
<summary>展开答案 · Q174</summary>

Interview Answer

I would use short-lived branches and frequent integration unless release constraints justify a more complex strategy. Rebase replays commits on a new base and rewrites their identities, so I avoid rebasing shared history without coordination. For conflicts I inspect both intended behaviors, resolve the code, and run relevant tests; choosing one side mechanically can discard a necessary change.

<details>
<summary>展开详解与追问</summary>

Explanation

Merging preserves branch history; rebasing creates a linear history. Deployment should reference a tested immutable revision regardless of branching style.

Follow-up

- What happens after rebasing a branch already pushed?
  Updating it may require a coordinated force-with-lease push; I would not overwrite teammates' work casually.

</details>
</details>
<!-- /interview-answer -->

- Q175 — Have you worked with real-time communication technologies like WebRTC?（来源：[questions.md:201](interview/questions/questions.md)）

<!-- interview-answer Q175 -->
<details>
<summary>展开答案 · Q175</summary>

Interview Answer

I would be transparent that I have not established hands-on production WebRTC experience. Conceptually, it supports real-time audio, video and data with session negotiation and network traversal using ICE, STUN and often TURN. I would prototype connection setup, interruption, latency and privacy behavior before committing to it for a voice assistant.

<details>
<summary>展开详解与追问</summary>

Explanation

Signaling is application-defined; WebRTC does not eliminate the need for a signaling service. A media server may be needed for multi-party scale.

Follow-up

- What is TURN for?
  Relaying traffic when a direct peer path cannot be established through the network environment.

</details>
</details>
<!-- /interview-answer -->

- Q176 — How would you design a large-scale AI model deployment system?（来源：[questions.md:205](interview/questions/questions.md)）

<!-- interview-answer Q176 -->
<details>
<summary>展开答案 · Q176</summary>

Interview Answer

I would separate model artifacts and versions from the serving fleet, put admission control and routing in front, and scale replicas based on measured GPU and queue saturation. Batching, caching and hardware-compatible quantization can improve efficiency. Releases need offline quality gates, canary traffic, observability and rollback. Capacity planning includes model load time, KV memory, failure headroom and per-request cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Autoscaling is not instantaneous when large weights must load. Multi-tenant isolation and data handling remain part of the serving contract.

Follow-up

- What metric would trigger scaling?
  A combination of queue wait, utilization and service objectives, rather than GPU utilization alone.

</details>
</details>
<!-- /interview-answer -->

- Q177 — How would you design a distributed training system for deep learning?（来源：[questions.md:206](interview/questions/questions.md)）

<!-- interview-answer Q177 -->
<details>
<summary>展开答案 · Q177</summary>

Interview Answer

I would establish a single-device baseline, then choose data, tensor, pipeline or state-sharding parallelism according to model size, memory and interconnect. The design includes deterministic data sharding, gradient synchronization, checkpointing, restart and performance instrumentation. I would measure useful tokens per second and convergence, not just device occupancy. This is a design answer, not a claim of personal large-scale training experience.

<details>
<summary>展开详解与追问</summary>

Explanation

Communication and uneven pipeline stages can dominate. Checkpoints must capture optimizer and data-progress state as well as weights.

Follow-up

- What is a common scaling trap?
  Adding GPUs without sufficient network bandwidth or per-device work, causing communication to outweigh computation.

</details>
</details>
<!-- /interview-answer -->

- Q178 — How would you design a scalable data pipeline for ML applications?（来源：[questions.md:207](interview/questions/questions.md)）

<!-- interview-answer Q178 -->
<details>
<summary>展开答案 · Q178</summary>

Interview Answer

I would retain immutable raw inputs, validate and transform versioned datasets, and publish features with clear timing and lineage. Batch and streaming paths should share definitions where possible. Idempotent tasks, checkpoints and data-quality gates make retries safe. Training reads a reproducible snapshot; serving uses a compatible feature contract. I monitor freshness, completeness and label delay alongside throughput.

<details>
<summary>展开详解与追问</summary>

Explanation

Training-serving skew often comes from different transformation code or data availability. A pipeline can be operationally healthy while producing semantically wrong features.

Follow-up

- How do you handle backfills?
  Run them against an explicit source version and time range, deduplicate publication and verify affected downstream artifacts.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 3 周：End-to-End Evals and Agent Fundamentals

<a id="day-11"></a>

### 周一 10/19

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Heaps; Top-k; Priority Queues<br>LeetCode: [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/); [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)<br>资料：[Heaps](Study%20topics/heaps.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Retries, Idempotency and Consistency](Study%20topics/retries-idempotency-and-consistency.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Scenario and Report Evaluation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-11) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Infrastructure and MLOps; Technical Questions / Cost and Latency Optimization — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Citations](Study%20topics/citations.html); [Groundedness](Study%20topics/groundedness.html); [Hallucination](Study%20topics/hallucination.html); [LLM-as-Judge](Study%20topics/llm-as-judge.html); [Human Calibration](Study%20topics/human-calibration.html); [Judge Bias](Study%20topics/judge-bias.html); [Idempotency](Study%20topics/idempotency.html) |


<!-- quantvault-day 11 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1836 · Controlling Overfitting in Decision Trees and XGBoost](https://quantvault.org/problems.html?id=1836) · Machine Learning · Medium

先修：先读Decision Trees；Boosting细节尚未学，不要求第一次完整作答。

本次范围：Conceptual。先讨论树深、叶子样本数与过拟合，只做Decision Tree部分；XGBoost部分留到Day 16对照。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-11)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q179 — How would you design a GenAI system to handle traffic spikes without overwhelming the model provider?（来源：[questions.md:208](interview/questions/questions.md)）

<!-- interview-answer Q179 -->
<details>
<summary>展开答案 · Q179</summary>

Interview Answer

I would combine per-tenant rate limits, bounded concurrency, a bounded queue and deadlines before calling the provider. Requests that cannot meet the contract are rejected or offered asynchronous completion. Retries use capped jittered backoff and a shared budget. Caching and model routing may reduce demand, while circuit breaking and clear degradation prevent a failing provider from causing a retry storm.

<details>
<summary>展开详解与追问</summary>

Explanation

Rate and concurrency limits solve different problems: a slower provider increases in-flight work even at unchanged arrivals.

Follow-up

- Why is an unbounded queue dangerous?
  It converts overload into growing memory use and stale work that may time out after consuming resources.

</details>
</details>
<!-- /interview-answer -->

- Q180 — How would you monitor production AI systems?（来源：[questions.md:209](interview/questions/questions.md)）

<!-- interview-answer Q180 -->
<details>
<summary>展开答案 · Q180</summary>

Interview Answer

I monitor service health and AI behavior separately: latency, errors, saturation and costs, plus task success, grounding, tool correctness and severe policy failures. Traces connect prompts, retrieval and tools using versioned configuration and redacted metadata. Delayed labels and reviewed samples provide outcome evidence. Alerts should identify actionable failure categories and a rollback or fallback response.

<details>
<summary>展开详解与追问</summary>

Explanation

A normal CPU graph does not imply good answers. Aggregate quality can hide a regression in one language, customer group or document type.

Follow-up

- How do you avoid monitoring becoming a privacy leak?
  Minimize payload logging, redact sensitive fields, enforce access controls and define retention explicitly.

</details>
</details>
<!-- /interview-answer -->

- Q181 — What are major scaling challenges for LLM-powered applications?（来源：[questions.md:210](interview/questions/questions.md)）

<!-- interview-answer Q181 -->
<details>
<summary>展开答案 · Q181</summary>

Interview Answer

Common constraints are provider quotas, long and variable service times, context and KV-cache memory, retrieval/index growth, costly retries and difficult quality evaluation. State, permissions and data freshness become harder across replicas. I identify the actual bottleneck with traces and load tests, then scale the limiting component while preserving task correctness and cost budgets.

<details>
<summary>展开详解与追问</summary>

Explanation

User count alone is not a load model. Requests per user, output lengths, concurrency and burstiness determine resource needs.

Follow-up

- What would you scale first?
  The component measured to violate the service objective, not automatically the model or database.

</details>
</details>
<!-- /interview-answer -->

- Q486 — What operational/business metrics matter for AI systems?（来源：[01-theory.md:79](interview/questions/01-theory.md)）

<!-- interview-answer Q486 -->
<details>
<summary>展开答案 · Q486</summary>

Interview Answer

I track successful task completion, time saved or resolution quality, correction and escalation rates, user retention and cost per successful task. Operationally I track latency percentiles, error rates, availability and provider saturation. Deflection and win rate need carefully defined denominators and guardrails: pushing users away or preferring verbose answers must not be mistaken for business value.

<details>
<summary>展开详解与追问</summary>

Explanation

Deflection needs a denominator and evidence of resolution; otherwise users abandoning a failed interaction may look like success. Track outcomes with quality, cost and reliability guardrails.

Follow-up

- What is cost per successful task?
  Total relevant serving cost divided by verified successful tasks, using a consistent task and success definition.

</details>
</details>
<!-- /interview-answer -->

- Q487 — How would you test a new model before full deployment?（来源：[01-theory.md:81](interview/questions/01-theory.md)）

<!-- interview-answer Q487 -->
<details>
<summary>展开答案 · Q487</summary>

Interview Answer

Offline tests first check correctness and severe failures. Shadow testing runs a candidate on real traffic without exposing its outputs; a canary exposes a small controlled portion; an A/B test compares randomized groups. Interleaving can efficiently compare ranked results within a shared list, but is not appropriate for every product. Each stage needs rollback criteria and privacy-aware logging.

<details>
<summary>展开详解与追问</summary>

Explanation

Shadow traffic avoids serving candidate outputs, canaries limit exposure, A/B tests estimate comparative outcomes, and interleaving can compare ranked results within one interaction.

Follow-up

- What should trigger rollback?
  Predefined quality, safety, cost or reliability regressions, including critical failures even when average metrics look acceptable.

</details>
</details>
<!-- /interview-answer -->

- Q182 — Your app gets 1M queries/day - how do you optimize cost? (reported across multiple companies)（来源：[questions.md:214](interview/questions/questions.md)）

<!-- interview-answer Q182 -->
<details>
<summary>展开答案 · Q182</summary>

Interview Answer

One million daily queries is about 11.6 requests per second on average, but peak traffic and token lengths drive capacity. I would measure the request mix, token spend, cache eligibility and successful-task rate. Then I would reduce redundant context, reuse safe work, route suitable tasks to cheaper models and batch noninteractive jobs. Each change must preserve quality and access controls.

<details>
<summary>展开详解与追问</summary>

Explanation

Compute cost as requests times the weighted input/output token prices plus retrieval, infrastructure, retries and evaluation. Average QPS does not capture bursts.

Follow-up

- Would you immediately fine-tune a smaller model?
  Only after a measured routing or prompting baseline shows a recurring gap worth the training and maintenance cost.

</details>
</details>
<!-- /interview-answer -->

- Q183 — How do you reduce token costs at scale? (candidates wish they prepared for this)（来源：[questions.md:215](interview/questions/questions.md)）

<!-- interview-answer Q183 -->
<details>
<summary>展开答案 · Q183</summary>

Interview Answer

I remove repeated instructions and redundant evidence, cap unnecessary output, reuse compatible prompt prefixes where the provider supports caching, and avoid repeated tool or embedding work. I route simple tasks to cheaper models only after evaluation. I measure total tokens per successful task, including retries and background calls, so apparent per-call savings do not hide a worse workflow.

<details>
<summary>展开详解与追问</summary>

Explanation

Reducing context can remove essential qualifiers. Token compression should be tested on exact entities, units and multi-hop questions.

Follow-up

- What is the safest first optimization?
  Eliminate demonstrably duplicated or unused content and verify the same task outcomes on a fixed dataset.

</details>
</details>
<!-- /interview-answer -->

- Q184 — How would you think about cost and capacity planning for an LLM-powered application at scale?（来源：[questions.md:216](interview/questions/questions.md)）

<!-- interview-answer Q184 -->
<details>
<summary>展开答案 · Q184</summary>

Interview Answer

I estimate peak arrival rate, input/output token distributions, service times, cache hit rates and provider limits. Little's law gives a first concurrency estimate, then load tests validate it. The budget includes model calls, embeddings, indexes, compute, storage, retries and monitoring. I leave failure headroom and set per-tenant budgets rather than using only an average monthly token bill.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate one-time ingestion from recurring query and update costs. Report assumptions as ranges when workloads are uncertain.

Follow-up

- How would you handle a long-tail request?
  Use explicit limits, asynchronous execution or a separate service class rather than allowing it to consume the interactive pool indefinitely.

</details>
</details>
<!-- /interview-answer -->

- Q185 — How would you make GPT-based API calls cost-efficient under heavy load?（来源：[questions.md:217](interview/questions/questions.md)）

<!-- interview-answer Q185 -->
<details>
<summary>展开答案 · Q185</summary>

Interview Answer

I would deduplicate identical work, cache safe reusable inputs or results, use concise prompts and route low-complexity tasks to validated cheaper models. I would batch offline jobs and bound live concurrency to avoid throttling and wasteful retries. Cost accounting includes failures and fallback calls, and I would compare cost per successful task rather than cost per request alone.

<details>
<summary>展开详解与追问</summary>

Explanation

A response cache must include authorization scope and relevant versions. A cheap model that needs repeated corrections may cost more end to end.

Follow-up

- What if heavy load is mostly unique questions?
  Focus on context efficiency, model routing and serving utilization rather than expecting a response cache to solve it.

</details>
</details>
<!-- /interview-answer -->

- Q186 — How would you reduce token costs?（来源：[questions.md:218](interview/questions/questions.md)）

<!-- interview-answer Q186 -->
<details>
<summary>展开答案 · Q186</summary>

Interview Answer

I would inspect actual usage first, then reduce repeated context, retrieve fewer but better passages, shorten unnecessary output and cache reusable work. I would preserve important evidence and compare accuracy, abstention and task success before and after. Token prices and provider caching rules change, so a concrete estimate needs the current provider contract rather than remembered prices.

<details>
<summary>展开详解与追问</summary>

Explanation

Input and output tokens may have different prices. Count every step in an agent workflow, not just the final answer.

Follow-up

- Can a shorter prompt reduce quality?
  Yes; removing definitions, examples or evidence can create more errors and retries, offsetting the saving.

</details>
</details>
<!-- /interview-answer -->

- Q187 — Explain quantization and model distillation for inference optimization.（来源：[questions.md:219](interview/questions/questions.md)）

<!-- interview-answer Q187 -->
<details>
<summary>展开答案 · Q187</summary>

Interview Answer

Quantization reduces numerical precision to lower memory and potentially improve hardware efficiency. Distillation trains a smaller student to reproduce useful behavior from a teacher or its outputs. Quantization changes representation; distillation changes the model and training process. Both need task-specific quality checks, serving benchmarks and a rollback option rather than assuming smaller always means faster or equally capable.

<details>
<summary>展开详解与追问</summary>

Explanation

Distillation data can inherit teacher errors and omit rare cases. Quantized kernels must match the target hardware and workload.

Follow-up

- Can they be combined?
  Yes, but evaluate the combined system because their quality and performance effects need not be independent.

</details>
</details>
<!-- /interview-answer -->

- Q188 — Describe the latency/cost/relevancy tradeoff triangle in GenAI systems. How do you manage all three?（来源：[questions.md:220](interview/questions/questions.md)）

<!-- interview-answer Q188 -->
<details>
<summary>展开答案 · Q188</summary>

Interview Answer

I set minimum correctness and safety requirements, then compare feasible designs on latency and total cost. Retrieval depth, reranking, model size and output length affect all three. I use a fixed workload to find useful trade-offs rather than optimizing a single score. For financial outputs, unsupported numbers remain unacceptable even if removing validation saves time.

<details>
<summary>展开详解与追问</summary>

Explanation

A Pareto frontier identifies options for which no other tested design is both cheaper and better on the selected dimensions.

Follow-up

- How do you choose among non-dominated options?
  Use the product's user experience, budget and error-cost priorities, stating which trade-off is being accepted.

</details>
</details>
<!-- /interview-answer -->

- Q189 — How do you reduce latency in GenAI applications?（来源：[questions.md:221](interview/questions/questions.md)；[01-theory.md:90](interview/questions/01-theory.md)）

<!-- interview-answer Q189 -->
<details>
<summary>展开答案 · Q189</summary>

Interview Answer

I trace the whole critical path and separate queue wait, retrieval, prefill, generation and tools. I then reduce avoidable serial calls, parallelize independent work, cache safe repeats and reduce unnecessary context or output. A smaller model or different serving setup is useful only if task quality remains acceptable. Streaming improves responsiveness but must be evaluated separately from completion latency.

<details>
<summary>展开详解与追问</summary>

Explanation

The slowest stage, not the most visible stage, should drive optimization. Tail latency often comes from saturation or retries rather than average compute.

Follow-up

- Can you add p95 values from each stage?
  No; component percentiles do not generally sum to the end-to-end percentile.

</details>
</details>
<!-- /interview-answer -->

- Q190 — Cost vs. quality trade-offs: when is a small open-source model "good enough" vs. GPT-4-class?（来源：[questions.md:222](interview/questions/questions.md)）

<!-- interview-answer Q190 -->
<details>
<summary>展开答案 · Q190</summary>

Interview Answer

A smaller model is good enough when it meets task-specific correctness, failure and latency requirements on representative held-out cases at lower total cost. I include difficult and rare cases and compare routing plus fallback with a single large-model baseline. Hosting cost, operations and data constraints count too. Model size or an open-source label alone does not settle the decision.

<details>
<summary>展开详解与追问</summary>

Explanation

A hybrid can save money if routing is accurate; misrouting hard requests may introduce silent quality loss.

Follow-up

- What is the acceptance criterion?
  A predefined quality floor and severe-failure guardrails, with a measured cost and latency advantage under the real workload.

</details>
</details>
<!-- /interview-answer -->

- Q191 — By trimming prompts and caching embeddings, how would you reduce API spend? Walk through a before-and-after cost breakdown.（来源：[questions.md:223](interview/questions/questions.md)）

<!-- interview-answer Q191 -->
<details>
<summary>展开答案 · Q191</summary>

Interview Answer

I would show measured usage before and after, separating one-time indexing from recurring queries. As an illustrative calculation, reducing average input from 4,000 to 2,500 tokens saves 1,500 times the query count times the input-token rate; output and other costs remain separate. Embedding caching saves only repeated embedding calls. I would label hypothetical numbers clearly and verify quality has not regressed.

<details>
<summary>展开详解与追问</summary>

Explanation

A prompt cache may bill differently from an application response cache. Avoid counting a saving twice when one optimization eliminates the call entirely.

Follow-up

- What evidence supports the claimed saving?
  Provider usage records or instrumented call counts and token totals from the same workload and pricing period.

</details>
</details>
<!-- /interview-answer -->

- Q192 — Explain multi-layer caching strategies: retrieval cache, prompt cache, and response cache.（来源：[questions.md:224](interview/questions/questions.md)）

<!-- interview-answer Q192 -->
<details>
<summary>展开答案 · Q192</summary>

Interview Answer

I distinguish cached query/retrieval results, cached model prompt-prefix computation and cached completed responses. They have different keys, invalidation rules and quality risks. Keys include relevant data/model versions and permission scope; TTL follows freshness needs. Semantic response reuse requires stronger correctness checks than exact-key caching. I measure hit rates and stale or incorrect hits separately.

<details>
<summary>展开详解与追问</summary>

Explanation

Provider-side prefix caching does not mean the generated answer is reused. Embedding caches are another narrower layer.

Follow-up

- Which layer is riskiest?
  Answer reuse can return a semantically wrong or unauthorized response, so its acceptance and invalidation rules need particular care.

</details>
</details>
<!-- /interview-answer -->

- Q193 — What is model tiering? When do you route to a small distilled model vs. a large LLM?（来源：[questions.md:225](interview/questions/questions.md)；[01-theory.md:95](interview/questions/01-theory.md)）

<!-- interview-answer Q193 -->
<details>
<summary>展开答案 · Q193</summary>

Interview Answer

Model tiering routes requests to models with different capability and cost profiles. I would use a cheap model for well-defined low-risk tasks and a stronger one for cases requiring more capability, with explicit fallback rules. The router is itself evaluated for misclassification, cost and latency. I would compare the full routed workflow with a simpler single-model baseline.

<details>
<summary>展开详解与追问</summary>

Explanation

Confidence from the small model is not automatically calibrated enough to control escalation. Repeated fallbacks can erase savings.

Follow-up

- How do you evaluate the router?
  Measure quality and cost by task class, including false easy classifications and unnecessary expensive escalations.

</details>
</details>
<!-- /interview-answer -->

- Q194 — What is prompt compression and how does it reduce cost?（来源：[questions.md:226](interview/questions/questions.md)）

<!-- interview-answer Q194 -->
<details>
<summary>展开答案 · Q194</summary>

Interview Answer

Prompt compression removes or rewrites context to reduce tokens while retaining task-relevant information. It may use deterministic deduplication, selective extraction or a learned compressor. I preserve exact entities, units, source links and instructions needed for the task and evaluate downstream answers, not just compression ratio. Compression can shift cost to another model call.

<details>
<summary>展开详解与追问</summary>

Explanation

A summary can lose exceptions or negation even when it sounds faithful. Exact financial values should remain grounded in source data.

Follow-up

- When would you avoid learned compression?
  When the context is already short, exact wording is critical or the extra call costs more than it saves.

</details>
</details>
<!-- /interview-answer -->

- Q195 — Latency vs. throughput optimization for LLM serving - what are the trade-offs?（来源：[questions.md:227](interview/questions/questions.md)）

<!-- interview-answer Q195 -->
<details>
<summary>展开答案 · Q195</summary>

Interview Answer

Larger batches improve hardware utilization and throughput but can increase queueing delay for an individual request. Continuous batching helps combine requests at different stages, while admission control prevents overload. I choose a batching policy against latency objectives, token-length distributions and KV-memory limits. Interactive and offline workloads may need different pools or priorities.

<details>
<summary>展开详解与追问</summary>

Explanation

Prefill and decoding stress resources differently. A benchmark at fixed short lengths may not predict real mixed-length traffic.

Follow-up

- What metric would you optimize for chat?
  Latency and quality under the expected load, subject to an acceptable cost and throughput budget.

</details>
</details>
<!-- /interview-answer -->


<a id="day-12"></a>

### 周二 10/20

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: ROW_NUMBER, RANK, DENSE_RANK<br>LeetCode: [178. Rank Scores](https://leetcode.com/problems/rank-scores/); [176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/); [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)<br>资料：[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Data Leakage; Scaling; scikit-learn Pipelines](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [Notebook](notebook/03_data_leakage_scaling_scikit_learn_pipelines.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Retries, Idempotency and Consistency](Study%20topics/retries-idempotency-and-consistency.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Analysis API and Error Contracts<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-12) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Cost and Latency Optimization; Technical Questions / Safety and Guardrails; Coding Problems / LeetCode / Algorithm Style — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[REST APIs](Study%20topics/rest-apis.html); [FastAPI](Study%20topics/fastapi.html); [API Tests](Study%20topics/api-tests.html) |


<!-- quantvault-day 12 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2017 · Missing Data Imputation and Regression Pipeline](https://quantvault.org/problems.html?id=2017) · Machine Learning · Medium

先修：先读Imputation：用训练数据确定填充值；Notebook示例仍保留。

本次范围：Implementation sketch。只写缺失值处理与Scaler放入Pipeline的最小片段；验证预处理没有读取验证集。完整题不要求当日实现。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-12)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q196 — How would you benchmark each LLM call in a multi-step pipeline to identify latency bottlenecks?（来源：[questions.md:228](interview/questions/questions.md)；[01-theory.md:92](interview/questions/01-theory.md)）

<!-- interview-answer Q196 -->
<details>
<summary>展开答案 · Q196</summary>

Interview Answer

I attach a trace ID and record start/end times, queue delay, prompt/output tokens, TTFT, full duration, retries and provider status for every call. I distinguish parallel spans from sequential dependencies and compare the same request classes across versions. I inspect tail examples and saturation before changing the pipeline. Sensitive payloads are not needed for basic timing attribution.

<details>
<summary>展开详解与追问</summary>

Explanation

Network time, client preprocessing and provider inference can be hard to separate without provider telemetry; label what is actually measured.

Follow-up

- What if one rare call dominates p99?
  Segment that path, inspect its input size and retries, and consider a separate budget or asynchronous contract.

</details>
</details>
<!-- /interview-answer -->

- Q197 — Estimate the budget for a RAG pipeline at enterprise scale (e.g., 300,000 legal contracts).（来源：[questions.md:229](interview/questions/questions.md)；[01-theory.md:97](interview/questions/01-theory.md)）

<!-- interview-answer Q197 -->
<details>
<summary>展开答案 · Q197</summary>

Interview Answer

I would estimate document tokens and update frequency, not budget from contract count alone. Ingestion costs include parsing/OCR, embedding and indexing; query costs include retrieval, reranking, input/output tokens and retries. Storage, access control and operations are additional. I would sample representative contracts, measure token and chunk distributions and present a range based on expected QPS and current prices.

<details>
<summary>展开详解与追问</summary>

Explanation

A 300,000-document corpus may vary by orders of magnitude in pages and scan quality. Do not invent a dollar total without those assumptions.

Follow-up

- What is the first measurement?
  Sample pages, OCR incidence and tokens/chunks per contract, then measure the expected query mix.

</details>
</details>
<!-- /interview-answer -->

- Q198 — What's the real bottleneck in LLM serving throughput? How does PagedAttention address it?（来源：[questions.md:230](interview/questions/questions.md)）

<!-- interview-answer Q198 -->
<details>
<summary>展开答案 · Q198</summary>

Interview Answer

There is no universal bottleneck: decoding often depends on memory bandwidth and KV-cache capacity, while prefill can be compute-heavy. PagedAttention manages KV data in blocks, reducing fragmentation and enabling more flexible sharing and allocation. That can improve serving utilization and batching, but it does not remove every compute or network limit. I profile the actual workload and implementation.

<details>
<summary>展开详解与追问</summary>

Explanation

Block-based KV management is conceptually similar to virtual-memory allocation; it is distinct from caching entire responses.

Follow-up

- Does PagedAttention change the model's learned weights?
  No. It primarily changes how attention state is stored and managed during serving.

Technical Sources

- [PagedAttention original paper](https://arxiv.org/abs/2309.06180)

</details>
</details>
<!-- /interview-answer -->

- Q488 — How do you reduce token costs?（来源：[01-theory.md:93](interview/questions/01-theory.md)）

<!-- interview-answer Q488 -->
<details>
<summary>展开答案 · Q488</summary>

Interview Answer

I would inspect actual usage first, then reduce repeated context, retrieve fewer but better passages, shorten unnecessary output and cache reusable work. I would preserve important evidence and compare accuracy, abstention and task success before and after. Token prices and provider caching rules change, so a concrete estimate needs the current provider contract rather than remembered prices.

<details>
<summary>展开详解与追问</summary>

Explanation

Input and output tokens may have different prices. Count every step in an agent workflow, not just the final answer.

Follow-up

- Can a shorter prompt reduce quality?
  Yes; removing definitions, examples or evidence can create more errors and retries, offsetting the saving.

</details>
</details>
<!-- /interview-answer -->

- Q489 — Cost vs. quality trade-offs: when is a small open-source model "good enough"?（来源：[01-theory.md:94](interview/questions/01-theory.md)）

<!-- interview-answer Q489 -->
<details>
<summary>展开答案 · Q489</summary>

Interview Answer

A smaller model is good enough when it meets task-specific correctness, failure and latency requirements on representative held-out cases at lower total cost. I include difficult and rare cases and compare routing plus fallback with a single large-model baseline. Hosting cost, operations and data constraints count too. Model size or an open-source label alone does not settle the decision.

<details>
<summary>展开详解与追问</summary>

Explanation

A hybrid can save money if routing is accurate; misrouting hard requests may introduce silent quality loss.

Follow-up

- What is the acceptance criterion?
  A predefined quality floor and severe-failure guardrails, with a measured cost and latency advantage under the real workload.

</details>
</details>
<!-- /interview-answer -->

- Q490 — Your app gets 1M queries/day - how do you optimize cost?（来源：[01-theory.md:96](interview/questions/01-theory.md)；[04-ai-system-design.md:40](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q490 -->
<details>
<summary>展开答案 · Q490</summary>

Interview Answer

One million daily queries is about 11.6 requests per second on average, but peak traffic and token lengths drive capacity. I would measure the request mix, token spend, cache eligibility and successful-task rate. Then I would reduce redundant context, reuse safe work, route suitable tasks to cheaper models and batch noninteractive jobs. Each change must preserve quality and access controls.

<details>
<summary>展开详解与追问</summary>

Explanation

Compute cost as requests times the weighted input/output token prices plus retrieval, infrastructure, retries and evaluation. Average QPS does not capture bursts.

Follow-up

- Would you immediately fine-tune a smaller model?
  Only after a measured routing or prompting baseline shows a recurring gap worth the training and maintenance cost.

</details>
</details>
<!-- /interview-answer -->

- Q199 — When and how would you implement LLM guardrails?（来源：[questions.md:234](interview/questions/questions.md)；[01-theory.md:103](interview/questions/01-theory.md)）

<!-- interview-answer Q199 -->
<details>
<summary>展开答案 · Q199</summary>

Interview Answer

I add guardrails where a concrete failure matters: input validation, permissions, tool argument checks, output schema checks and evidence requirements. High-impact actions need enforceable policies and sometimes real approval. I evaluate both blocked unsafe behavior and rejected legitimate requests. Prompt instructions are one layer, not a security boundary, and every guardrail needs an explicit failure policy.

<details>
<summary>展开详解与追问</summary>

Explanation

A guardrail can fail or time out. For authorization or financial correctness I would not silently continue as if validation succeeded.

Follow-up

- How do you avoid making the assistant useless?
  Measure false refusals on legitimate cases and provide a safe clarification or limited alternative where possible.

</details>
</details>
<!-- /interview-answer -->

- Q200 — How would you design a language model that minimizes harmful outputs while still being useful and expressive?（来源：[questions.md:235](interview/questions/questions.md)）

<!-- interview-answer Q200 -->
<details>
<summary>展开答案 · Q200</summary>

Interview Answer

I would define the intended use and unacceptable behaviors with stakeholders, then combine appropriate training or model selection with application-level permissions, validation and evaluation. Red-team cases and ordinary benign tasks both matter: excessive refusal is also a product failure. I would retain human oversight for consequential decisions and revise controls from observed failures rather than promise universally harmless output.

<details>
<summary>展开详解与追问</summary>

Explanation

A general-purpose safety objective can conflict with domain-specific usefulness. The application must distinguish harmful capability from legitimate discussion.

Follow-up

- How would you evaluate the balance?
  Use separate unsafe-compliance and benign-refusal measures, reviewed by people familiar with the task and policy.

</details>
</details>
<!-- /interview-answer -->

- Q201 — How would you build a system that detects whether content violates policy or contains offensive material?（来源：[questions.md:236](interview/questions/questions.md)；[01-theory.md:106](interview/questions/01-theory.md)）

<!-- interview-answer Q201 -->
<details>
<summary>展开答案 · Q201</summary>

Interview Answer

I would translate the policy into labeled categories with examples and escalation rules, then establish a simple classifier baseline. The pipeline can combine deterministic checks, a classifier and a model for ambiguous cases. I would tune thresholds to error costs, evaluate across language and context slices and support human appeals. Labels and policy versions must remain traceable.

<details>
<summary>展开详解与追问</summary>

Explanation

Offensive words can occur in quotations or counterspeech; a keyword match is not the same as a policy violation.

Follow-up

- What happens near the threshold?
  Return uncertainty or route for review according to the impact, rather than forcing a confident binary decision.

</details>
</details>
<!-- /interview-answer -->

- Q202 — How do you protect against prompt injection and jailbreaking?（来源：[questions.md:237](interview/questions/questions.md)；[01-theory.md:105](interview/questions/01-theory.md)）

<!-- interview-answer Q202 -->
<details>
<summary>展开答案 · Q202</summary>

Interview Answer

I treat user text, retrieved documents and tool output as untrusted inputs. Permissions, allowed tools, data access and outbound actions are enforced outside the model, with least privilege and explicit approvals where needed. I test injection attempts that arrive through retrieved content as well as direct prompts. No prompt-only defense guarantees protection against all attacks.

<details>
<summary>展开详解与追问</summary>

Explanation

Jailbreaking targets model restrictions; prompt injection often redirects an application through untrusted context. Both can lead to harmful actions if tools are overprivileged.

Follow-up

- What is the most important boundary?
  The executor must refuse unauthorized actions even if the model requests them confidently.

</details>
</details>
<!-- /interview-answer -->

- Q203 — What steps would you take to handle exceptions in a GenAI application?（来源：[questions.md:238](interview/questions/questions.md)）

<!-- interview-answer Q203 -->
<details>
<summary>展开答案 · Q203</summary>

Interview Answer

I distinguish validation, provider, tool and internal errors and preserve the original cause when adding context. Permanent failures return useful structured errors; eligible transient failures receive bounded retries under a deadline. I record safe diagnostics and explicit workflow state so failure cannot be summarized as success. A fallback is labeled and only used where the contract permits it.

<details>
<summary>展开详解与追问</summary>

Explanation

Broad except blocks returning plausible defaults can hide numerical corruption, as in the user's library debugging experience.

Follow-up

- When should you catch an exception?
  At a boundary where you can recover, translate it meaningfully or add necessary context; otherwise let the cause remain visible.

</details>
</details>
<!-- /interview-answer -->

- Q204 — Explain Constitutional AI and alignment considerations.（来源：[questions.md:239](interview/questions/questions.md)）

<!-- interview-answer Q204 -->
<details>
<summary>展开答案 · Q204</summary>

Interview Answer

Constitutional AI uses an explicit set of principles to guide critique, revision and preference-related training, reducing some reliance on manually labeling every response. The principles and evaluation process still encode human choices and can conflict or miss context. I would distinguish a training approach from enforceable application controls; a constitution does not replace permissions or domain validation.

<details>
<summary>展开详解与追问</summary>

Explanation

Model-generated feedback can carry systematic bias. Evaluate both adherence to principles and useful behavior on independent cases.

Follow-up

- Can the principles be treated as objective truth?
  No. They are a chosen specification that requires transparent trade-offs and ongoing evaluation.

Technical Sources

- [Constitutional AI original paper](https://arxiv.org/abs/2212.08073)

</details>
</details>
<!-- /interview-answer -->

- Q205 — How do you handle data privacy and PII in prompts and logs?（来源：[questions.md:240](interview/questions/questions.md)；[01-theory.md:104](interview/questions/01-theory.md)）

<!-- interview-answer Q205 -->
<details>
<summary>展开答案 · Q205</summary>

Interview Answer

I minimize sensitive inputs, apply field-aware redaction or pseudonymization, restrict model endpoints according to approved data handling and avoid storing raw prompts in ordinary logs. Access, retention and deletion apply to traces, caches and evaluation datasets too. I would verify organizational requirements rather than assume a provider setting makes every use compliant.

<details>
<summary>展开详解与追问</summary>

Explanation

Hashing an identifier is not automatically anonymization, especially for low-entropy values. Re-identification mappings require separate protection.

Follow-up

- How do you debug without raw sensitive prompts?
  Use structured metadata, synthetic reproductions and tightly controlled access to necessary samples with a defined retention policy.

</details>
</details>
<!-- /interview-answer -->

- Q206 — How do you address bias in training data and generated content?（来源：[questions.md:241](interview/questions/questions.md)）

<!-- interview-answer Q206 -->
<details>
<summary>展开答案 · Q206</summary>

Interview Answer

I inspect coverage, annotation and historical decision bias, then evaluate relevant outcome and error slices with domain stakeholders. For generated content I also examine stereotypes and uneven refusals. Mitigation may involve better data, thresholds, product constraints or human review, not just retraining. I would state the fairness objective and trade-offs explicitly rather than claim a single metric removes bias.

<details>
<summary>展开详解与追问</summary>

Explanation

Different fairness criteria can conflict, particularly when base rates differ. Sensitive-attribute handling must follow the actual legal and organizational context.

Follow-up

- What is the first step?
  Define the affected people and concrete harm before choosing a metric or technical intervention.

</details>
</details>
<!-- /interview-answer -->

- Q207 — How do you red-team an LLM system?（来源：[questions.md:242](interview/questions/questions.md)）

<!-- interview-answer Q207 -->
<details>
<summary>展开答案 · Q207</summary>

Interview Answer

I build a threat model around sensitive data, privileged tools and likely adversaries, then test direct and indirect injections, unauthorized access, malicious files, boundary inputs and recovery failures. I record reproducible cases, severity and expected safe behavior and convert verified failures into regression tests. Testing remains scoped to authorized systems and does not imply universal security coverage.

<details>
<summary>展开详解与追问</summary>

Explanation

Successful refusal in a chat response is insufficient if a tool already performed the forbidden action. Inspect actual side effects.

Follow-up

- How do you prioritize findings?
  By credible impact and exploitability, then by the breadth of affected workflows and available mitigation.

</details>
</details>
<!-- /interview-answer -->

- Q208 — Your application generates code that gets executed. How do you prevent malicious code generation and execution?（来源：[questions.md:243](interview/questions/questions.md)；[01-theory.md:107](interview/questions/01-theory.md)）

<!-- interview-answer Q208 -->
<details>
<summary>展开答案 · Q208</summary>

Interview Answer

I avoid arbitrary execution when restricted tools can solve the task. If code execution is necessary, it runs in an isolated environment with no unnecessary credentials, limited filesystem/network access, resource quotas and timeouts. I validate requested capabilities and require approval for consequential effects. Static analysis and model review help but do not replace runtime isolation and least privilege.

<details>
<summary>展开详解与追问</summary>

Explanation

Generated code may be malicious or simply incorrect. Dependency installation and outbound network requests are part of the execution threat surface.

Follow-up

- Are containers enough?
  Not alone; the container's privileges, mounts, network, secrets and host protections determine the real boundary.

</details>
</details>
<!-- /interview-answer -->

- Q288 — Word Search on Grid using Trie + DFS (LeetCode Medium).（来源：[questions.md:343](interview/questions/questions.md)）

<!-- interview-answer Q288 -->
<details>
<summary>展开答案 · Q288</summary>

Interview Answer

I would build a trie of the target words and run DFS from each grid cell, following only trie prefixes and marking cells visited along the current path. Found words are deduplicated, and completed trie branches can be pruned. With a four-neighbor grid and maximum word length L, a loose bound is O(mn*4^L), reduced substantially by prefix pruning; trie space is O(total word characters).

<details>
<summary>展开详解与追问</summary>

Explanation

Clarify whether cells can be reused, whether diagonals count and whether the task is one word or many. The stated combination resembles Word Search II; the difficulty label in the source is not a specification.

Follow-up

- Why not search independently for each word?
  A trie shares common prefixes and stops branches that cannot lead to any target word.

Reference Code

```python
def find_words(board, words):
    """Four-neighbor search; a cell cannot repeat within one word."""
    if not board or not board[0]:
        return []
    rows, cols = len(board), len(board[0])
    if any(len(row) != cols for row in board):
        raise ValueError("rectangular board required")
    trie = {}
    for word in words:
        if not word:
            continue
        node = trie
        for char in word:
            node = node.setdefault(char, {})
        node[None] = word
    found, visited = set(), set()

    def dfs(r, c, node):
        if not (0 <= r < rows and 0 <= c < cols) or (r, c) in visited:
            return
        child = node.get(board[r][c])
        if child is None:
            return
        if None in child:
            found.add(child[None])
        visited.add((r, c))
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            dfs(r + dr, c + dc, child)
        visited.remove((r, c))

    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie)
    return sorted(found)
```

</details>
</details>
<!-- /interview-answer -->

- Q289 — LRU Cache with O(1) time complexity using HashMap + Doubly Linked List.（来源：[questions.md:344](interview/questions/questions.md)）

<!-- interview-answer Q289 -->
<details>
<summary>展开答案 · Q289</summary>

Interview Answer

I would combine a dictionary mapping keys to linked-list nodes with a doubly linked list ordered by recency. GET moves a hit to the most-recent end; PUT updates or inserts there and evicts the least-recent node when capacity is exceeded. These operations are expected O(1), using O(capacity) memory. I would test updates, repeated reads, eviction and zero capacity.

<details>
<summary>展开详解与追问</summary>

Explanation

OrderedDict is a concise Python reference; if the interviewer requires the underlying design, explain sentinel nodes and pointer updates explicitly. Thread safety is a separate requirement.

Follow-up

- Why a doubly linked list?
  Given a node from the map, it supports removal and reinsertion without scanning for its predecessor.

Reference Code

```python
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity):
        if capacity < 0:
            raise ValueError("nonnegative capacity required")
        self.capacity, self.data = capacity, OrderedDict()

    def get(self, key):
        if key not in self.data:
            return -1  # This exercise's missing-value contract.
        self.data.move_to_end(key)
        return self.data[key]

    def put(self, key, value):
        self.data[key] = value
        self.data.move_to_end(key)
        if len(self.data) > self.capacity:
            self.data.popitem(last=False)
```

Technical Sources

- [Python OrderedDict documentation](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

</details>
</details>
<!-- /interview-answer -->

- Q290 — Prime numbers between 0 and 100.（来源：[questions.md:345](interview/questions/questions.md)；[02-coding.md:43](interview/questions/02-coding.md)）

<!-- interview-answer Q290 -->
<details>
<summary>展开答案 · Q290</summary>

Interview Answer

I would use a sieve: initialize candidates from 2 through 100, and for each still-prime p up to sqrt(100), mark multiples starting at p*p as composite. Zero and one are not prime. The general algorithm is O(n log log n) time and O(n) space. For such a small fixed range, trial division is also reasonable, but I would state the generalizable method.

<details>
<summary>展开详解与追问</summary>

Explanation

Starting at p*p avoids re-marking smaller multiples already handled by smaller factors. Test limits below two and inclusive upper-bound behavior.

Follow-up

- Why stop at the square root?
  Every composite number has at least one factor no larger than its square root.

Reference Code

```python
from math import isqrt


def primes_through(n):
    if n < 2:
        return []
    prime = [True] * (n + 1)
    prime[0] = prime[1] = False
    for p in range(2, isqrt(n) + 1):
        if prime[p]:
            for multiple in range(p * p, n + 1, p):
                prime[multiple] = False
    return [i for i, yes in enumerate(prime) if yes]
```

</details>
</details>
<!-- /interview-answer -->

- Q291 — Check whether two strings are anagrams of each other.（来源：[questions.md:346](interview/questions/questions.md)）

<!-- interview-answer Q291 -->
<details>
<summary>展开答案 · Q291</summary>

Interview Answer

I would clarify case, whitespace and Unicode normalization requirements, then compare character frequency maps after the agreed normalization. Equal lengths are a quick early check. Counting takes expected O(n) time and O(number of distinct characters) space; sorting is an O(n log n) alternative. I would test repeated characters, empty strings and characters outside ASCII.

<details>
<summary>展开详解与追问</summary>

Explanation

Case folding and Unicode normalization change the definition of equivalence; do not silently apply them when exact characters are required.

Follow-up

- Why is comparing sets insufficient?
  Sets discard multiplicity, so aab and abb would appear equivalent even though they are not anagrams.

Reference Code

```python
from collections import Counter


def is_anagram(left, right):
    """Exact Unicode code-point equality; no implicit normalization."""
    return len(left) == len(right) and Counter(left) == Counter(right)
```

</details>
</details>
<!-- /interview-answer -->


<a id="day-13"></a>

### 周三 10/21

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Linked Lists; LRU Cache<br>LeetCode: [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/); [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/)<br>资料：[Linked Lists](Study%20topics/linked-lists.html); [LRU Cache](Study%20topics/lru-cache.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [MAE; RMSE](Study%20topics/mae-rmse.html) · [Notebook](notebook/04_mae_rmse.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Latency and Observability](Study%20topics/latency-and-observability.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Tracing and Latency Baseline<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-13) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / LeetCode / Algorithm Style; Coding Problems / OpenAI-Specific Coding; Coding Problems / Anthropic-Specific Coding; Coding Problems / ML / AI Coding — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Load Testing](Study%20topics/load-testing.html); [Logs](Study%20topics/logs.html); [Traces](Study%20topics/traces.html); [p50 / p95](Study%20topics/p50-p95.html); [TTFT](Study%20topics/ttft.html); [Latency Benchmarking](Study%20topics/latency-benchmarking.html) |


<!-- quantvault-day 13 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1625 · Median Regression vs. OLS](https://quantvault.org/problems.html?id=1625) · Regression · Medium

先修：Median Regression对应中位数目标；注意它与均值OLS的差异。

本次范围：Comparison。比较MAE/Absolute Loss与MSE/Squared Loss，说明异常值为何影响不同；不要求完整Quantile Regression证明。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-13)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q292 — Serialize Binary Tree (space-optimized, discussion-based with compression techniques and backward compatibility).（来源：[questions.md:347](interview/questions/questions.md)）

<!-- interview-answer Q292 -->
<details>
<summary>展开答案 · Q292</summary>

Interview Answer

I would use a versioned traversal format that records both values and structure, such as preorder with explicit null markers. The decoder validates token counts and types and reconstructs the same tree in O(n) time. For space, I would consider a shape bitmap plus encoded values or compression of a framed payload. I would not omit nulls unless another rule makes structure unambiguous.

<details>
<summary>展开详解与追问</summary>

Explanation

Compression, framing and checksums solve different problems. A BST-specific compact encoding cannot be assumed for an arbitrary binary tree.

Follow-up

- How do you recover from corruption?
  Use record framing and integrity checks; reject an invalid tree rather than silently deserialize a different structure.

Reference Code

```python
import json
from dataclasses import dataclass


@dataclass
class TreeNode:
    value: int
    left: object = None
    right: object = None


def serialize_tree(root):
    tokens, stack = [], [root]
    while stack:
        node = stack.pop()
        if node is None:
            tokens.append(None)
        else:
            if type(node.value) is not int:
                raise ValueError("integer values required")
            tokens.append(node.value)
            stack.extend([node.right, node.left])
    return json.dumps({"version": 1, "preorder": tokens})


def deserialize_tree(payload):
    obj = json.loads(payload)
    if not isinstance(obj, dict) or obj.get("version") != 1:
        raise ValueError("unsupported format")
    tokens = obj.get("preorder")
    if not isinstance(tokens, list) or not tokens:
        raise ValueError("missing tree")
    sentinel = TreeNode(0)
    pending = [(sentinel, "left")]
    for value in tokens:
        if not pending:
            raise ValueError("extra tokens")
        parent, side = pending.pop()
        if value is not None:
            if type(value) is not int:
                raise ValueError("invalid value")
            node = TreeNode(value)
            setattr(parent, side, node)
            pending.extend([(node, "right"), (node, "left")])
    if pending:
        raise ValueError("truncated tree")
    return sentinel.left
```

</details>
</details>
<!-- /interview-answer -->

- Q293 — LeetCode 2408: Design SQL.（来源：[questions.md:348](interview/questions/questions.md)；[02-coding.md:23](interview/questions/02-coding.md)）

<!-- interview-answer Q293 -->
<details>
<summary>展开答案 · Q293</summary>

Interview Answer

I would implement the specified tables as maps from monotonically increasing row IDs to rows, with a separate next-ID counter per table. Insert allocates an ID; delete removes the row; selecting a cell validates table, row and column according to the contract. I would preserve ID semantics after deletion and test multiple tables and column boundaries. I would confirm the current problem statement before adding unsupported SQL behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

Design SQL here is an interface-implementation exercise, not a SQL parser or production database. Row and column indexing conventions must be explicit.

Follow-up

- Should deleted IDs be reused?
  Not if the specified contract requires monotonic insertion IDs; maintain the counter separately from current row count.

Reference Code

```python
class SQL:
    """Named tables, 1-based row IDs and columns; invalid access raises."""
    def __init__(self, names, columns):
        if len(names) != len(columns) or len(set(names)) != len(names):
            raise ValueError("invalid table definitions")
        if any(c < 1 for c in columns):
            raise ValueError("positive column counts required")
        self.width = dict(zip(names, columns))
        self.rows = {name: {} for name in names}
        self.next_id = dict.fromkeys(names, 1)

    def insertRow(self, name, row):
        if len(row) != self.width[name]:
            raise ValueError("wrong row width")
        row_id = self.next_id[name]
        self.rows[name][row_id] = list(row)
        self.next_id[name] += 1

    def deleteRow(self, name, row_id):
        del self.rows[name][row_id]

    def selectCell(self, name, row_id, column_id):
        if not 1 <= column_id <= self.width[name]:
            raise IndexError(column_id)
        return self.rows[name][row_id][column_id - 1]
```

</details>
</details>
<!-- /interview-answer -->

- Q294 — LeetCode 981: Time Based Key-Value Store.（来源：[questions.md:349](interview/questions/questions.md)）

<!-- interview-answer Q294 -->
<details>
<summary>展开答案 · Q294</summary>

Interview Answer

I would store, for each key, timestamp-value pairs in ascending timestamp order. SET appends when timestamps are guaranteed increasing; GET binary-searches for the rightmost timestamp no greater than the query. Lookup is O(log n) for that key and storage is O(total writes). If timestamps may arrive out of order, insertion needs a different cost or data structure.

<details>
<summary>展开详解与追问</summary>

Explanation

This is historical lookup, not TTL expiry. Missing keys and queries earlier than the first timestamp need the specified empty result. The reference uses None for absence and reserves None for tombstones; for the common string-valued interface, translate absence to the specified empty string at the API boundary.

Follow-up

- Why not use a map from timestamp to value alone?
  It does not efficiently find the greatest timestamp less than or equal to a requested time.

Reference Code

```python
from bisect import bisect_right


class TimeMap:
    """Strictly increasing timestamps per key; None is a tombstone."""
    def __init__(self):
        self.times, self.values = {}, {}

    def set(self, key, value, timestamp):
        times = self.times.setdefault(key, [])
        if times and timestamp <= times[-1]:
            raise ValueError("timestamps must increase per key")
        times.append(timestamp)
        self.values.setdefault(key, []).append(value)

    def delete(self, key, timestamp):
        self.set(key, None, timestamp)

    def get(self, key, timestamp):
        i = bisect_right(self.times.get(key, []), timestamp) - 1
        return None if i < 0 else self.values[key][i]
```

</details>
</details>
<!-- /interview-answer -->

- Q295 — Unix cd command with symbolic link resolution.（来源：[questions.md:350](interview/questions/questions.md)；[02-coding.md:24](interview/questions/02-coding.md)）

<!-- interview-answer Q295 -->
<details>
<summary>展开答案 · Q295</summary>

Interview Answer

I would clarify whether resolution is lexical or follows actual filesystem symlinks. Lexical normalization uses a stack for dot and parent segments, but real symlink resolution must replace the linked prefix and interpret relative targets from the link's directory. I would bound link traversals to detect cycles and respect filesystem permissions and missing-path semantics. I would not claim simple string normalization implements real cd behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

For real filesystems, symlinks followed by '..' can behave differently from purely lexical collapse. Path length and link expansion determine cost.

Follow-up

- What is the key counterexample?
  A path entering a symlink and then using '..' may resolve relative to the target directory, not the textual parent.

Reference Code

```python
from collections import deque


def resolve_virtual_path(path, cwd="/", symlinks=None, max_links=40):
    """Illustrative POSIX virtual paths; no host filesystem access or ACL check."""
    symlinks = symlinks or {}
    if not cwd.startswith("/") or not path:
        raise ValueError("absolute cwd and nonempty path required")
    pending = deque((path if path.startswith("/") else cwd + "/" + path).split("/"))
    resolved, links = [], 0
    while pending:
        part = pending.popleft()
        if part in ("", "."):
            continue
        if part == "..":
            if resolved:
                resolved.pop()
            continue
        resolved.append(part)
        current = "/" + "/".join(resolved)
        if current in symlinks:
            links += 1
            if links > max_links:
                raise ValueError("symlink traversal limit")
            target = symlinks[current]
            resolved.pop()
            if target.startswith("/"):
                resolved.clear()
            pending.extendleft(reversed(target.split("/")))
    return "/" + "/".join(resolved)
```

</details>
</details>
<!-- /interview-answer -->

- Q296 — Reverse a linked list with constraints (AI-assisted coding round - candidate must prompt LLM effectively).（来源：[questions.md:351](interview/questions/questions.md)；[02-coding.md:45](interview/questions/02-coding.md)）

<!-- interview-answer Q296 -->
<details>
<summary>展开答案 · Q296</summary>

Interview Answer

I would state the list contract and ask the coding assistant for a small iterative implementation, then review it independently. At each step I save the next node, reverse the current pointer and advance previous/current. It is O(n) time and O(1) extra space. I would test empty, one-node and multi-node lists and explain why saving next before mutation is essential.

<details>
<summary>展开详解与追问</summary>

Explanation

Using AI does not remove responsibility for pointer safety or the problem's constraints. A cyclic input requires a separate detection or precondition policy.

Follow-up

- How would you validate the generated code?
  Check the reversed values and node identities, confirm the tail terminates, and inspect the original head's new next pointer.

Reference Code

```python
from dataclasses import dataclass


@dataclass
class ListNode:
    value: object
    next: object = None


def reverse_list(head):
    """Precondition: finite, acyclic singly linked list."""
    previous, current = None, head
    while current is not None:
        following = current.next
        current.next = previous
        previous, current = current, following
    return previous
```

</details>
</details>
<!-- /interview-answer -->

- Q297 — Find the Excel column name from its column number (e.g., column 702 = "AAA").（来源：[questions.md:352](interview/questions/questions.md)；[02-coding.md:46](interview/questions/02-coding.md)）

<!-- interview-answer Q297 -->
<details>
<summary>展开答案 · Q297</summary>

Interview Answer

I would first correct the example: 702 is ZZ, and 703 is AAA. Excel columns use a bijective base-26 representation with digits A through Z and no zero digit. Repeatedly subtract one, take divmod by 26, collect the letter and reverse the result. Time and output space are O(log base 26 of n), and n must be positive.

<details>
<summary>展开详解与追问</summary>

Explanation

The subtract-one step is what maps multiples of 26 correctly. Test 1, 26, 27, 52, 702 and 703.

Follow-up

- Why does ordinary base 26 fail?
  Its zero digit and carry conventions do not match A=1 through Z=26.

Reference Code

```python
def excel_column(number):
    if type(number) is not int or number <= 0:
        raise ValueError("positive integer required")
    result = []
    while number:
        number, digit = divmod(number - 1, 26)
        result.append(chr(ord("A") + digit))
    return "".join(reversed(result))
```

</details>
</details>
<!-- /interview-answer -->

- Q298 — Construct a tree from a list where index = node value and value = parent node (LC Medium).（来源：[questions.md:353](interview/questions/questions.md)）

<!-- interview-answer Q298 -->
<details>
<summary>展开答案 · Q298</summary>

Interview Answer

I would create every node first, then attach node i to its specified parent, recording the root sentinel. I would validate parent bounds, self-parenting, number of roots and cycles rather than assume the input is a valid tree. Construction is O(n) time and O(n) space with adjacency lists; cycle validation also takes O(n). The number and ordering of children must be clarified.

<details>
<summary>展开详解与追问</summary>

Explanation

The prompt does not say binary tree. Rejecting more than two children is only appropriate if that constraint is explicitly supplied.

Follow-up

- Why create all nodes before linking?
  A parent may appear after its child in the input, and two-pass construction avoids order dependence.

Reference Code

```python
def parent_tree(parents):
    """Return root index and children; -1 denotes the sole root."""
    if not parents:
        return None, []
    n = len(parents)
    children, roots = [[] for _ in parents], []
    for i, parent in enumerate(parents):
        if parent == -1:
            roots.append(i)
        elif not 0 <= parent < n or parent == i:
            raise ValueError("invalid parent")
        else:
            children[parent].append(i)
    if len(roots) != 1:
        raise ValueError("one root required")
    seen, stack = set(), roots[:]
    while stack:
        node = stack.pop()
        if node in seen:
            raise ValueError("cycle")
        seen.add(node)
        stack.extend(children[node])
    if len(seen) != n:
        raise ValueError("disconnected cycle")
    return roots[0], children
```

</details>
</details>
<!-- /interview-answer -->

- Q299 — CodeSignal GCA: 4 questions in 70 min - two medium-hard, one graph, one greedy with bit ops.（来源：[questions.md:354](interview/questions/questions.md)）

<!-- interview-answer Q299 -->
<details>
<summary>展开答案 · Q299</summary>

Interview Answer

This entry describes an assessment format rather than supplying four problems, so there is no defensible exact solution to write. I would scan all questions, identify the quickest complete wins, then implement and test progressively while keeping a time budget. For each actual problem I would clarify constraints, choose an invariant and analyze complexity. I would not infer algorithms from the reported difficulty alone.

<details>
<summary>展开详解与追问</summary>

Explanation

A graph label can cover traversal, shortest path or connectivity; a greedy label still requires a proof. Treat this as interview logistics until the statements are available.

Follow-up

- How do you allocate the final minutes?
  Prioritize boundary tests and fixing near-complete solutions rather than starting an unbounded rewrite.

</details>
</details>
<!-- /interview-answer -->

- Q300 — Union Find problem + AI question (use DistilBERT to categorize CSV text with sentiments, must pass 5 test cases checking embeddings length, output structure).（来源：[questions.md:355](interview/questions/questions.md)）

<!-- interview-answer Q300 -->
<details>
<summary>展开答案 · Q300</summary>

Interview Answer

For the union-find component I would implement path compression and union by size, giving near-constant amortized operations. For the sentiment component I would clarify whether the contract expects class probabilities, labels or embeddings, then use the specified model/tokenizer consistently. I would test batch shapes, output fields, empty rows and model-version behavior. A generic DistilBERT checkpoint is not automatically a sentiment classifier.

<details>
<summary>展开详解与追问</summary>

Explanation

These are two tasks with missing details, so the exact five tests cannot be reconstructed. Embedding length is a representation contract, not sentiment accuracy.

Follow-up

- What must you verify before loading a checkpoint?
  Its task head, tokenizer compatibility, expected inputs, output dimensions and license/runtime requirements.

Reference Code

```python
class UnionFind:
    """Union-find component only; sentiment-model details are unspecified."""
    def __init__(self, n):
        self.parent, self.size = list(range(n)), [1] * n

    def find(self, x):
        if not 0 <= x < len(self.parent):
            raise IndexError(x)
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return False
        if self.size[a] < self.size[b]:
            a, b = b, a
        self.parent[b] = a
        self.size[a] += self.size[b]
        return True
```

</details>
</details>
<!-- /interview-answer -->

- Q301 — Write code for a banking application using HashMap/TreeMap. Design a task executor - store and pause tasks.（来源：[questions.md:356](interview/questions/questions.md)）

<!-- interview-answer Q301 -->
<details>
<summary>展开答案 · Q301</summary>

Interview Answer

I would first define balances, transaction ordering and task pause/resume semantics. A hash map gives expected O(1) keyed lookup; an ordered map supports range or time-order operations at O(log n). The executor needs explicit states and idempotent transitions. I would use precise money representation and make pause cooperative at safe boundaries rather than killing a task midway through a side effect.

<details>
<summary>展开详解与追问</summary>

Explanation

The prompt combines two broad exercises without method signatures. Clarify what is in memory, what must persist and whether concurrency is in scope.

Follow-up

- How do you pause safely?
  Record the requested state and let the worker checkpoint at a defined boundary, preserving any already committed effect.

</details>
</details>
<!-- /interview-answer -->

- Q302 — A gRPC service is timing out. Add an async boundary, handle failure modes (retries, dead letter queues, idempotency), scale with multi-threading or message queues.（来源：[questions.md:357](interview/questions/questions.md)）

<!-- interview-answer Q302 -->
<details>
<summary>展开答案 · Q302</summary>

Interview Answer

I would trace the timeout before introducing concurrency. If the operation is genuinely long-running, I would return a durable job ID and move execution behind a bounded queue, with status lookup. Deadlines, retries, idempotency and a terminal failure path remain explicit. Threads help only if the work and libraries suit them; a queue does not make the underlying computation faster.

<details>
<summary>展开详解与追问</summary>

Explanation

An async boundary changes the API contract from immediate result to accepted work. The caller needs a way to observe completion and cancellation.

Follow-up

- What if the worker succeeds but acknowledgment fails?
  Redelivery must detect the already committed logical result rather than execute a second consequential effect.

</details>
</details>
<!-- /interview-answer -->

- Q303 — Discuss serialization approaches, compression techniques, streaming formats, backward compatibility, and corruption recovery - no code written, pure discussion. (Microsoft senior)（来源：[questions.md:358](interview/questions/questions.md)）

<!-- interview-answer Q303 -->
<details>
<summary>展开答案 · Q303</summary>

Interview Answer

I would choose a versioned schema and framed records before choosing compression. JSON is readable; binary formats can reduce size and enforce types; streaming formats allow incremental processing. I would define forward/backward compatibility and include integrity checks and length bounds. Compression is measured on representative data, while corruption recovery depends on framing and checkpoints rather than compression alone.

<details>
<summary>展开详解与追问</summary>

Explanation

A checksum detects accidental damage; it does not authenticate malicious changes. Schema evolution should avoid reusing field identities with different meanings.

Follow-up

- How do you evolve safely?
  Add optional fields with documented defaults and test old-reader/new-writer combinations supported by the contract.

</details>
</details>
<!-- /interview-answer -->

- Q304 — KV Store Serialize/Deserialize.（来源：[questions.md:362](interview/questions/questions.md)）

<!-- interview-answer Q304 -->
<details>
<summary>展开答案 · Q304</summary>

Interview Answer

I would serialize a versioned collection of key-value records using an unambiguous encoding, with explicit length and type limits. Deserialization builds a new map, validates the complete payload and only then replaces live state. Round-trip and malformed-input tests cover separators, Unicode, empty values, duplicates and truncation. I would avoid unsafe object deserialization for untrusted input.

<details>
<summary>展开详解与追问</summary>

Explanation

A delimiter-only encoding fails when keys or values contain the delimiter. Atomic replacement prevents partial corruption of the existing store.

Follow-up

- What should happen on a corrupt payload?
  Return a structured error and leave the current store unchanged.

Reference Code

```python
import json


class KeyValueStore:
    """String keys/values, single process; GET absence raises KeyError."""
    def __init__(self):
        self.data = {}

    def set(self, key, value):
        if not isinstance(key, str) or not isinstance(value, str):
            raise TypeError("string keys and values required")
        self.data[key] = value

    def get(self, key):
        return self.data[key]

    def delete(self, key):
        if key not in self.data:
            return False
        del self.data[key]
        return True

    def serialize(self):
        return json.dumps({"version": 1, "entries": list(self.data.items())})

    def restore(self, payload):
        if len(payload) > 1_000_000:
            raise ValueError("payload too large")
        obj = json.loads(payload)
        if not isinstance(obj, dict) or obj.get("version") != 1:
            raise ValueError("unsupported format")
        entries = obj.get("entries")
        if not isinstance(entries, list):
            raise ValueError("entries must be a list")
        replacement = {}
        for pair in entries:
            if (not isinstance(pair, list) or len(pair) != 2
                    or not all(isinstance(x, str) for x in pair)):
                raise ValueError("invalid entry")
            key, value = pair
            if key in replacement:
                raise ValueError("duplicate key")
            replacement[key] = value
        self.data = replacement  # Commit only after complete validation.
```

</details>
</details>
<!-- /interview-answer -->

- Q305 — In-Memory Database: Implement SQL-Like Operations.（来源：[questions.md:363](interview/questions/questions.md)；[02-coding.md:25](interview/questions/02-coding.md)）

<!-- interview-answer Q305 -->
<details>
<summary>展开答案 · Q305</summary>

Interview Answer

I would clarify the supported SQL-like operations and implement only that contract: named tables, row identity, insert/delete/select and specified predicates. A simple scan is an understandable baseline; indexes are added for measured access patterns. I would define null, type and duplicate semantics and test operations against a tiny hand-checked fixture. I would not pretend a small parser is a full SQL engine.

<details>
<summary>展开详解与追问</summary>

Explanation

Without a grammar or signatures, an exact implementation cannot be uniquely determined. Separate parsing from execution if textual queries are required.

Follow-up

- When would you add an index?
  When a required selective query is too expensive as a scan and update cost is acceptable.

</details>
</details>
<!-- /interview-answer -->

- Q306 — Versioned key-value store implementation (Time Travel Hash variant).（来源：[questions.md:364](interview/questions/questions.md)）

<!-- interview-answer Q306 -->
<details>
<summary>展开答案 · Q306</summary>

Interview Answer

I would store ordered versions per key and find the latest version at or before the requested time using binary search. Deletes are tombstones so older values do not incorrectly reappear. I would define duplicate timestamps, out-of-order writes and retention. Append-only writes are cheap under monotonic time; reads are O(log versions per key).

<details>
<summary>展开详解与追问</summary>

Explanation

Version time can mean application event time or commit time; those are different contracts. Compaction must preserve versions still needed by readers.

Follow-up

- How do historical deletes work?
  A tombstone is a versioned event; reads after it return absence until a later write, while earlier reads retain the old value.

Reference Code

```python
from bisect import bisect_right


class TimeMap:
    """Strictly increasing timestamps per key; None is a tombstone."""
    def __init__(self):
        self.times, self.values = {}, {}

    def set(self, key, value, timestamp):
        times = self.times.setdefault(key, [])
        if times and timestamp <= times[-1]:
            raise ValueError("timestamps must increase per key")
        times.append(timestamp)
        self.values.setdefault(key, []).append(value)

    def delete(self, key, timestamp):
        self.set(key, None, timestamp)

    def get(self, key, timestamp):
        i = bisect_right(self.times.get(key, []), timestamp) - 1
        return None if i < 0 else self.values[key][i]
```

</details>
</details>
<!-- /interview-answer -->

- Q307 — Credits management system - track credit state across issued and used credits with different expiration rules and usage requirements, with increasing complexity.（来源：[questions.md:365](interview/questions/questions.md)；[02-coding.md:26](interview/questions/02-coding.md)）

<!-- interview-answer Q307 -->
<details>
<summary>展开答案 · Q307</summary>

Interview Answer

I would define credit eligibility, expiration boundaries and the required consumption order before implementing. Grants and usages become auditable records; a query computes eligible remaining amounts at the requested time. If earliest-expiring eligible credit is the rule, an ordered structure can support allocation, but late events and historical queries may require replay or versioned state. I would test exact-expiry, partial use and overlapping grants.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not invent a consumption policy from the word credits. Balance conservation and no double consumption are core invariants.

Follow-up

- What if usage arrives out of order?
  Either reject it under the contract or replay/reconcile affected allocations deterministically; a simple current-balance counter is insufficient.

</details>
</details>
<!-- /interview-answer -->

- Q308 — Refactoring round: 100-120 lines of intentionally convoluted, deeply nested code. Refactor for long-term maintainability while keeping existing tests green and extending to new ones.（来源：[questions.md:366](interview/questions/questions.md)）

<!-- interview-answer Q308 -->
<details>
<summary>展开答案 · Q308</summary>

Interview Answer

I would capture the external contract with existing and characterization tests, then identify parsing, business logic and side effects. I would refactor small cohesive pieces without mixing in unrelated behavior changes, preserving error semantics and adding cases that expose the original complexity. I would explain the new boundaries and verify maintainability through simpler dependencies, not merely shorter code.

<details>
<summary>展开详解与追问</summary>

Explanation

Existing green tests may encode a bug or miss behavior. A correctness fix needs an explicit expected-output decision separate from a structural refactor.

Follow-up

- What would you extract first?
  A deterministic computation or validation step with clear inputs and outputs and minimal side effects.

</details>
</details>
<!-- /interview-answer -->

- Q309 — 4-level progressive coding assessment: Level 1 (SET/GET/DELETE), Level 2 (SCAN/SCAN_BY_PREFIX), Level 3 (timestamped operations + TTL), Level 4 (file compression/decompression with storage management).（来源：[questions.md:370](interview/questions/questions.md)）

<!-- interview-answer Q309 -->
<details>
<summary>展开答案 · Q309</summary>

Interview Answer

I would implement each level on a stable contract: basic keyed operations, ordered/prefix scanning, timestamped TTL behavior, then the specified storage encoding. I would inject a clock and define expiry at now >= expires_at. Each level gets boundary tests before the next. Compression should use a framed versioned format and not alter logical values or expiry semantics.

<details>
<summary>展开详解与追问</summary>

Explanation

SCAN order, historical versus current reads, TTL overwrite rules and persistence are not fully given. I would clarify them instead of assuming the most complex interpretation. The reference demonstrates current-time TTL and prefix scans. Persistence/compression is not implemented in that snippet because its exact contract is missing; reuse versioned framing only after specifying absolute versus relative expiry on restore.

Follow-up

- What is a common TTL bug?
  Reading an expired value at the exact boundary or losing the expiry when updating or serializing an entry.

Reference Code

```python
class TTLStore:
    """Current-time reads; injected monotonic clock; prefix scan sorted by key."""
    def __init__(self, clock):
        self.clock, self.data = clock, {}

    def set(self, key, value, ttl=None):
        if ttl is not None and ttl < 0:
            raise ValueError("negative TTL")
        self.data[key] = (value, None if ttl is None else self.clock() + ttl)

    def get(self, key):
        value, expires = self.data[key]
        if expires is not None and self.clock() >= expires:
            del self.data[key]
            raise KeyError(key)
        return value

    def delete(self, key):
        try:
            self.get(key)
        except KeyError:
            return False
        del self.data[key]
        return True

    def scan(self, prefix=""):
        result = []
        for key in sorted(self.data):
            if key.startswith(prefix):
                try:
                    result.append((key, self.get(key)))
                except KeyError:
                    pass
        return result
```

</details>
</details>
<!-- /interview-answer -->

- Q310 — 1-NN (simplest KNN case) and feedforward neural network implementation.（来源：[questions.md:374](interview/questions/questions.md)）

<!-- interview-answer Q310 -->
<details>
<summary>展开答案 · Q310</summary>

Interview Answer

For 1-NN I would compute the chosen distance from the query to every training point and return the label of the nearest, with a deterministic tie rule. It costs O(n*d) per query. For a feed-forward network I would implement affine layers, activations, a stable loss and backpropagation, checking gradients against finite differences and overfitting a tiny dataset before optimizing.

<details>
<summary>展开详解与追问</summary>

Explanation

Scaling and distance choice matter for 1-NN. The network architecture and loss are unspecified, so the reference code demonstrates a minimal forward block rather than an invented full task.

Follow-up

- What is the key learning sanity test?
  A sufficiently flexible network should fit a tiny clean batch; failure suggests data, gradient or optimizer errors.

Reference Code

```python
import numpy as np


def nearest_label(x, labels, query):
    x, query, labels = np.asarray(x, float), np.asarray(query, float), np.asarray(labels)
    if x.ndim != 2 or len(x) == 0 or query.shape != (x.shape[1],) or len(labels) != len(x):
        raise ValueError("incompatible nonempty data")
    if not np.isfinite(x).all() or not np.isfinite(query).all():
        raise ValueError("finite inputs required")
    return labels[np.argmin(np.sum((x - query) ** 2, axis=1))]


def feed_forward(x, w1, b1, w2, b2):
    """Illustrative two-layer forward pass; training loss is unspecified."""
    return np.maximum(0, np.asarray(x) @ w1 + b1) @ w2 + b2
```

</details>
</details>
<!-- /interview-answer -->


<a id="day-14"></a>

### 周四 10/22

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: LAG, LEAD, Rolling Aggregations<br>LeetCode: [180. Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)<br>资料：[LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Latency and Observability](Study%20topics/latency-and-observability.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Measured Performance Improvement<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-14) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / ML / AI Coding; Coding Problems / Practical / Data Processing; Coding Problems / Supplemental Implementation — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 14 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1431 · Lasso, Ridge, and Elastic Net Comparison](https://quantvault.org/problems.html?id=1431) · Regression · Medium
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：Elastic Net结合L1与L2；Multicollinearity指输入特征近似线性相关。

本次范围：Comparison。比较Lasso、Ridge与Elastic Net，结合相关特征解释系数稳定性和特征选择。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-14)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q311 — Transformer bug-fixing exercise with position embedding and KV cache issues.（来源：[questions.md:375](interview/questions/questions.md)）

<!-- interview-answer Q311 -->
<details>
<summary>展开答案 · Q311</summary>

Interview Answer

I would compare full-sequence and token-by-token logits on the same short input with dropout disabled. Then I would inspect position offsets, cache length, attention masks and KV tensor shapes at each step. Cached decoding must use positions after the prefix, not restart at zero. I would add a parity test that fails at the first mismatching token.

<details>
<summary>展开详解与追问</summary>

Explanation

A rectangular query-by-key causal mask needs the correct offset when query length is shorter than cached key length. No buggy code was supplied, so the exact patch cannot be identified.

Follow-up

- What is the strongest regression check?
  Full-prefix and cached next-token outputs agree within a numerical tolerance across multiple prefix lengths.

</details>
</details>
<!-- /interview-answer -->

- Q312 — PyTorch code completion with complexity analysis.（来源：[questions.md:376](interview/questions/questions.md)）

<!-- interview-answer Q312 -->
<details>
<summary>展开答案 · Q312</summary>

Interview Answer

I would read the supplied tensor contracts and complete the smallest missing operation while annotating batch, sequence, head and feature axes. I would check masking, dtype, device, gradient flow and numerical stability, then test a tiny deterministic example. Complexity must include projections, attention and temporary tensors rather than only counting Python loops. The actual code is needed for a specific completion.

<details>
<summary>展开详解与追问</summary>

Explanation

Dense attention uses O(B*H*T*T) score storage in a straightforward implementation and O(B*T*T*d) attention arithmetic, excluding projection terms.

Follow-up

- What would you assert first?
  Expected shapes and divisibility of model width by head count, followed by finite outputs and gradients.

</details>
</details>
<!-- /interview-answer -->

- Q313 — Implement Multi-Head Attention from memory.（来源：[questions.md:377](interview/questions/questions.md)）

<!-- interview-answer Q313 -->
<details>
<summary>展开答案 · Q313</summary>

Interview Answer

I would project input X into Q, K and V, reshape into heads, compute scaled dot-product scores, apply the mask before softmax, combine values and concatenate heads before an output projection. I would test shapes and causal behavior against a tiny reference. Straightforward self-attention is O(B*T*T*d + B*T*d*d) time and uses quadratic score memory.

<details>
<summary>展开详解与追问</summary>

Explanation

The reference below is an educational NumPy forward pass, not an optimized training kernel. Stable softmax and the order of masking are essential.

Follow-up

- Why divide by sqrt(head dimension)?
  It controls the scale of dot products so softmax does not become unnecessarily saturated as the dimension grows.

Reference Code

```python
import numpy as np


def attention(q, k, v, causal=True, offset=0):
    """Shapes (batch, heads, query/key length, head dimension)."""
    scores = q @ k.swapaxes(-1, -2) / np.sqrt(q.shape[-1])
    if causal:
        allowed = np.arange(k.shape[-2])[None, :] <= offset + np.arange(q.shape[-2])[:, None]
        scores = np.where(allowed, scores, -np.inf)
    scores -= scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights /= weights.sum(axis=-1, keepdims=True)
    return weights @ v


def mha(x, wq, wk, wv, wo, heads):
    batch, length, width = x.shape
    if heads <= 0 or width % heads:
        raise ValueError("invalid head count")
    def split(w):
        return (x @ w).reshape(batch, length, heads, width // heads).transpose(0, 2, 1, 3)
    y = attention(split(wq), split(wk), split(wv))
    return y.transpose(0, 2, 1, 3).reshape(batch, length, width) @ wo


def layer_norm(x, eps=1e-5):
    return (x - x.mean(axis=-1, keepdims=True)) / np.sqrt(x.var(axis=-1, keepdims=True) + eps)


def decoder_layer(x, wq, wk, wv, wo, w1, w2, heads):
    """Pre-norm, ReLU, no biases/dropout or learned norm affine terms."""
    y = x + mha(layer_norm(x), wq, wk, wv, wo, heads)
    return y + np.maximum(0, layer_norm(y) @ w1) @ w2


def grouped_cached_attention(q, k_new, v_new, cache=None):
    """Projected inputs; query heads must be a multiple of KV heads."""
    q_heads, kv_heads = q.shape[1], k_new.shape[1]
    if kv_heads < 1 or q_heads % kv_heads or k_new.shape != v_new.shape:
        raise ValueError("invalid GQA shapes")
    offset = 0 if cache is None else cache[0].shape[-2]
    k = k_new if cache is None else np.concatenate([cache[0], k_new], axis=-2)
    v = v_new if cache is None else np.concatenate([cache[1], v_new], axis=-2)
    repeats = q_heads // kv_heads
    output = attention(q, np.repeat(k, repeats, axis=1), np.repeat(v, repeats, axis=1), offset=offset)
    return output, (k, v)
```

</details>
</details>
<!-- /interview-answer -->

- Q314 — Implement a full Transformer layer from memory.（来源：[questions.md:378](interview/questions/questions.md)）

<!-- interview-answer Q314 -->
<details>
<summary>展开答案 · Q314</summary>

Interview Answer

I would state the chosen variant, such as a pre-norm decoder layer. It applies layer normalization, causal multi-head attention and a residual addition, followed by layer normalization, a feed-forward network and another residual. I would specify activation, dimensions and dropout behavior. Then I would test shape preservation, causal masking and numerical stability against a trusted implementation.

<details>
<summary>展开详解与追问</summary>

Explanation

Encoder, decoder and encoder-decoder layers differ; cross-attention is not implied by this brief. The reference uses an explicit simplified decoder variant.

Follow-up

- Why state pre-norm versus post-norm?
  They place normalization differently and change the computation and optimization behavior, so they are not interchangeable implementation details.

Reference Code

```python
import numpy as np


def attention(q, k, v, causal=True, offset=0):
    """Shapes (batch, heads, query/key length, head dimension)."""
    scores = q @ k.swapaxes(-1, -2) / np.sqrt(q.shape[-1])
    if causal:
        allowed = np.arange(k.shape[-2])[None, :] <= offset + np.arange(q.shape[-2])[:, None]
        scores = np.where(allowed, scores, -np.inf)
    scores -= scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights /= weights.sum(axis=-1, keepdims=True)
    return weights @ v


def mha(x, wq, wk, wv, wo, heads):
    batch, length, width = x.shape
    if heads <= 0 or width % heads:
        raise ValueError("invalid head count")
    def split(w):
        return (x @ w).reshape(batch, length, heads, width // heads).transpose(0, 2, 1, 3)
    y = attention(split(wq), split(wk), split(wv))
    return y.transpose(0, 2, 1, 3).reshape(batch, length, width) @ wo


def layer_norm(x, eps=1e-5):
    return (x - x.mean(axis=-1, keepdims=True)) / np.sqrt(x.var(axis=-1, keepdims=True) + eps)


def decoder_layer(x, wq, wk, wv, wo, w1, w2, heads):
    """Pre-norm, ReLU, no biases/dropout or learned norm affine terms."""
    y = x + mha(layer_norm(x), wq, wk, wv, wo, heads)
    return y + np.maximum(0, layer_norm(y) @ w1) @ w2


def grouped_cached_attention(q, k_new, v_new, cache=None):
    """Projected inputs; query heads must be a multiple of KV heads."""
    q_heads, kv_heads = q.shape[1], k_new.shape[1]
    if kv_heads < 1 or q_heads % kv_heads or k_new.shape != v_new.shape:
        raise ValueError("invalid GQA shapes")
    offset = 0 if cache is None else cache[0].shape[-2]
    k = k_new if cache is None else np.concatenate([cache[0], k_new], axis=-2)
    v = v_new if cache is None else np.concatenate([cache[1], v_new], axis=-2)
    repeats = q_heads // kv_heads
    output = attention(q, np.repeat(k, repeats, axis=1), np.repeat(v, repeats, axis=1), offset=offset)
    return output, (k, v)
```

</details>
</details>
<!-- /interview-answer -->

- Q315 — Implement LoRA adapter from scratch.（来源：[questions.md:379](interview/questions/questions.md)）

<!-- interview-answer Q315 -->
<details>
<summary>展开答案 · Q315</summary>

Interview Answer

For a frozen matrix W, I would represent the update as scale times B@A with rank r much smaller than the original dimensions. The forward result is the base projection plus the low-rank path. I would initialize one adapter factor so the initial update is zero, train only adapter parameters and test that merging produces the same output in evaluation mode.

<details>
<summary>展开详解与追问</summary>

Explanation

Matrix orientation depends on whether the code uses row-vector inputs or framework linear-layer conventions. State the shapes before writing the multiplication.

Follow-up

- How do you check that the base is frozen?
  Inspect trainable parameters and verify W remains unchanged after an optimizer step while adapter parameters receive gradients.

Reference Code

```python
import numpy as np


def lora_forward(x, w, a, b, alpha):
    """Row-vector convention: W(d,o), A(d,r), B(r,o); base W frozen."""
    if a.shape[1] < 1 or a.shape[1] != b.shape[0]:
        raise ValueError("invalid rank")
    return x @ w + (alpha / a.shape[1]) * ((x @ a) @ b)
```

Technical Sources

- [LoRA original paper](https://arxiv.org/abs/2106.09685)

</details>
</details>
<!-- /interview-answer -->

- Q316 — Implement efficient LLM API batch processing.（来源：[questions.md:380](interview/questions/questions.md)）

<!-- interview-answer Q316 -->
<details>
<summary>展开答案 · Q316</summary>

Interview Answer

I would use a bounded worker pool, a rate budget and explicit per-call and total deadlines. Each item keeps an ID so out-of-order completions can be reconstructed. Eligible transient failures retry with capped backoff; permanent failures become typed results. I would test partial failures and cancellation and record tokens and latency without exposing sensitive payloads.

<details>
<summary>展开详解与追问</summary>

Explanation

Launching one task per item can exhaust memory even if a semaphore caps active calls. Use a queue for a large or streaming input.

Follow-up

- What happens when one item fails?
  Preserve successful results and record the failed item according to the batch contract, rather than silently dropping or restarting the entire batch.

Reference Code

```python
import asyncio


async def bounded_batch(items, call, workers=4, timeout=2.0):
    """Async transport core; call must separately enforce quotas/retry policy."""
    if workers < 1 or timeout <= 0:
        raise ValueError("invalid worker configuration")
    queue, results = asyncio.Queue(maxsize=workers * 2), []

    async def producer():
        for index, item in enumerate(items):
            await queue.put((index, item))
        for _ in range(workers):
            await queue.put(None)

    async def worker():
        while True:
            entry = await queue.get()
            try:
                if entry is None:
                    return
                index, item = entry
                try:
                    value = await asyncio.wait_for(call(item), timeout)
                    results.append((index, {"ok": True, "value": value}))
                except Exception as exc:
                    results.append((index, {"ok": False, "error_type": type(exc).__name__}))
            finally:
                queue.task_done()

    async with asyncio.TaskGroup() as group:  # Python 3.11+; cancellation propagates.
        group.create_task(producer())
        for _ in range(workers):
            group.create_task(worker())
    return [value for _, value in sorted(results)]
```

Technical Sources

- [Python asyncio tasks and cancellation](https://docs.python.org/3/library/asyncio-task.html)

</details>
</details>
<!-- /interview-answer -->

- Q317 — Debug code handling embeddings.（来源：[questions.md:381](interview/questions/questions.md)；[02-coding.md:31](interview/questions/02-coding.md)）

<!-- interview-answer Q317 -->
<details>
<summary>展开答案 · Q317</summary>

Interview Answer

I would verify model/version compatibility, dimensions, dtype, normalization and the axis used for similarity. I would test identical, orthogonal and zero vectors and compare a small manual result. I would also inspect whether document IDs stayed aligned after filtering or batching. Many embedding bugs produce plausible rankings, so correctness needs more than a shape check.

<details>
<summary>展开详解与追问</summary>

Explanation

Mixing vectors from different embedding models can yield numeric scores with no valid semantic interpretation.

Follow-up

- What is a useful retrieval sanity test?
  A known document queried by its own text should behave as expected under the chosen model and index configuration, with provenance checked.

Reference Code

```python
import numpy as np


def cosine_similarity(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if a.ndim != 1 or a.shape != b.shape or a.size == 0:
        raise ValueError("equal nonempty vectors required")
    if not np.isfinite(a).all() or not np.isfinite(b).all():
        raise ValueError("finite vectors required")
    # Rescale first to reduce overflow in norms for large finite inputs.
    sa, sb = np.max(np.abs(a)), np.max(np.abs(b))
    if sa == 0 or sb == 0:
        return 0.0  # Explicit application policy; cosine is undefined at zero.
    a, b = a / sa, b / sb
    return float(np.clip(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)), -1, 1))
```

</details>
</details>
<!-- /interview-answer -->

- Q318 — Write scripts preparing text for fine-tuning.（来源：[questions.md:382](interview/questions/questions.md)）

<!-- interview-answer Q318 -->
<details>
<summary>展开答案 · Q318</summary>

Interview Answer

I would validate the target training format, normalize encoding, remove duplicates and split related examples before generating records. I would retain provenance, filter secrets and personal data and check role/order and length constraints. A validation script would reject malformed examples rather than silently truncate important content. I would inspect representative records manually before starting training.

<details>
<summary>展开详解与追问</summary>

Explanation

Near-duplicate or same-document examples across splits can inflate evaluation. Data preparation should be reproducible and versioned.

Follow-up

- Why not simply train on every successful chat?
  Success may be unverified, sensitive data may be present, and the conversation may not demonstrate the desired behavior.

Reference Code

```python
import json


def training_jsonl(records):
    """Illustrative prompt/completion input to chat JSONL; split/redact upstream."""
    seen, output = set(), []
    for record in records:
        prompt, completion = record["prompt"], record["completion"]
        if not isinstance(prompt, str) or not isinstance(completion, str):
            raise ValueError("string prompt/completion required")
        prompt, completion = prompt.strip(), completion.strip()
        if not prompt or not completion:
            raise ValueError("empty training example")
        key = (prompt, completion)
        if key in seen:
            continue
        seen.add(key)
        output.append(json.dumps({"messages": [
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": completion}
        ]}, ensure_ascii=False))
    return "\n".join(output)
```

</details>
</details>
<!-- /interview-answer -->

- Q319 — Build a gRPC service for financial report generation (async conversion, thread management, error handling, batch processing).（来源：[questions.md:383](interview/questions/questions.md)）

<!-- interview-answer Q319 -->
<details>
<summary>展开答案 · Q319</summary>

Interview Answer

I would define a typed report request and response/status contract, then trace the existing timeout. For long reports I would submit a durable job, execute deterministic financial calculations in an appropriate bounded worker pool and expose status/results. Model-generated prose consumes validated results only. I would test deadlines, duplicate requests, worker failure and batch partial success with request-level tracing.

<details>
<summary>展开详解与追问</summary>

Explanation

Async transport and CPU parallelism are separate choices. Returning acceptance changes what the RPC promises, so the client must support the job lifecycle.

Follow-up

- How do you prevent an incorrect report from looking successful?
  Publish a completed report only after numerical and schema checks pass, and persist a distinct failure state otherwise.

</details>
</details>
<!-- /interview-answer -->

- Q320 — Implement neural networks, LSTMs, and RNNs from scratch using NumPy or PyTorch.（来源：[questions.md:384](interview/questions/questions.md)）

<!-- interview-answer Q320 -->
<details>
<summary>展开答案 · Q320</summary>

Interview Answer

I would choose one explicitly specified network first, write the forward equations and tensor shapes, then derive or use autograd for gradients. For an RNN, state updates recurrently; an LSTM adds input, forget and output gates plus a cell state. I would check tiny-batch learning, numerical gradients and sequence boundaries. This broad prompt does not define a single complete architecture to implement.

<details>
<summary>展开详解与追问</summary>

Explanation

The reference material provides small forward computations; a full trainable network also needs loss, initialization, masking, optimizer and tests for the chosen task.

Follow-up

- How do you detect a backpropagation error?
  Compare analytical gradients with finite differences on a tiny deterministic network before training at scale.

Reference Code

```python
import numpy as np


def rnn_forward(sequence, h0, wx, wh, bias):
    """Time-major (time,batch,input); caller handles padding and resets."""
    h, states = h0.copy(), []
    for x in sequence:
        h = np.tanh(x @ wx + h @ wh + bias)
        states.append(h.copy())
    return np.stack(states) if states else np.empty((0,) + h0.shape)


def lstm_forward(sequence, h0, c0, weights, bias):
    """Gate order i,f,g,o; weights shape (input+hidden,4*hidden)."""
    def logistic(z):
        return np.exp(-np.logaddexp(0, -z))
    h, c, states = h0.copy(), c0.copy(), []
    for x in sequence:
        i, f, g, o = np.split(np.concatenate([x, h], axis=-1) @ weights + bias, 4, axis=-1)
        c = logistic(f) * c + logistic(i) * np.tanh(g)
        h = logistic(o) * np.tanh(c)
        states.append(h.copy())
    output = np.stack(states) if states else np.empty((0,) + h0.shape)
    return output, (h, c)
```

</details>
</details>
<!-- /interview-answer -->

- Q321 — Implement cached attention and grouped query attention variants.（来源：[questions.md:385](interview/questions/questions.md)）

<!-- interview-answer Q321 -->
<details>
<summary>展开答案 · Q321</summary>

Interview Answer

I would store per-layer K and V for prior positions and append only the new token's values during decoding. Queries attend to the complete valid prefix using correctly offset masks and positions. For GQA, multiple query heads share fewer KV heads, with compatible head grouping. I would compare cached and uncached outputs and test reset and sequence-boundary behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

KV-cache savings depend on KV head count, sequence length and dtype. A cache must not accidentally leak state between unrelated requests. The educational reference repeats grouped KV heads for clarity; a production kernel should avoid physically duplicating that cache. It receives already projected and position-encoded tensors.

Follow-up

- What is the critical correctness property?
  For the same prefix and configuration, cached and full attention produce matching next-token outputs within tolerance.

Reference Code

```python
import numpy as np


def attention(q, k, v, causal=True, offset=0):
    """Shapes (batch, heads, query/key length, head dimension)."""
    scores = q @ k.swapaxes(-1, -2) / np.sqrt(q.shape[-1])
    if causal:
        allowed = np.arange(k.shape[-2])[None, :] <= offset + np.arange(q.shape[-2])[:, None]
        scores = np.where(allowed, scores, -np.inf)
    scores -= scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights /= weights.sum(axis=-1, keepdims=True)
    return weights @ v


def mha(x, wq, wk, wv, wo, heads):
    batch, length, width = x.shape
    if heads <= 0 or width % heads:
        raise ValueError("invalid head count")
    def split(w):
        return (x @ w).reshape(batch, length, heads, width // heads).transpose(0, 2, 1, 3)
    y = attention(split(wq), split(wk), split(wv))
    return y.transpose(0, 2, 1, 3).reshape(batch, length, width) @ wo


def layer_norm(x, eps=1e-5):
    return (x - x.mean(axis=-1, keepdims=True)) / np.sqrt(x.var(axis=-1, keepdims=True) + eps)


def decoder_layer(x, wq, wk, wv, wo, w1, w2, heads):
    """Pre-norm, ReLU, no biases/dropout or learned norm affine terms."""
    y = x + mha(layer_norm(x), wq, wk, wv, wo, heads)
    return y + np.maximum(0, layer_norm(y) @ w1) @ w2


def grouped_cached_attention(q, k_new, v_new, cache=None):
    """Projected inputs; query heads must be a multiple of KV heads."""
    q_heads, kv_heads = q.shape[1], k_new.shape[1]
    if kv_heads < 1 or q_heads % kv_heads or k_new.shape != v_new.shape:
        raise ValueError("invalid GQA shapes")
    offset = 0 if cache is None else cache[0].shape[-2]
    k = k_new if cache is None else np.concatenate([cache[0], k_new], axis=-2)
    v = v_new if cache is None else np.concatenate([cache[1], v_new], axis=-2)
    repeats = q_heads // kv_heads
    output = attention(q, np.repeat(k, repeats, axis=1), np.repeat(v, repeats, axis=1), offset=offset)
    return output, (k, v)
```

</details>
</details>
<!-- /interview-answer -->

- Q322 — Implement beam search, top-k, and top-p decoding strategies from scratch.（来源：[questions.md:386](interview/questions/questions.md)）

<!-- interview-answer Q322 -->
<details>
<summary>展开答案 · Q322</summary>

Interview Answer

I would implement top-k by masking all but the k highest logits, and top-p by sorting probabilities and retaining the minimal prefix crossing the cumulative threshold, including the crossing token. Beam search tracks cumulative log probabilities and finished hypotheses under a stated length policy. I would test boundary k/p values and normalized probabilities before integrating a model.

<details>
<summary>展开详解与追问</summary>

Explanation

Beam search is a sequence search; top-k and top-p are per-step sampling filters. Confusing them leads to the wrong algorithm.

Follow-up

- Why retain the token that crosses top-p?
  Otherwise the retained probability mass can remain below the requested threshold and even remove every token at small p.

Reference Code

```python
import numpy as np


def sampling_probs(logits, temperature=1.0, top_k=None, top_p=1.0):
    logits = np.asarray(logits, float)
    if logits.ndim != 1 or len(logits) == 0 or not np.isfinite(logits).all():
        raise ValueError("finite nonempty 1D logits required")
    if temperature <= 0 or not 0 < top_p <= 1:
        raise ValueError("invalid sampling parameters")
    if top_k is not None and not 1 <= top_k <= len(logits):
        raise ValueError("invalid top_k")
    order = np.argsort(-logits, kind="stable")
    if top_k is not None:
        order = order[:top_k]
    scaled = (logits[order] - logits[order].max()) / temperature
    p = np.exp(scaled)
    p /= p.sum()
    count = min(len(p), np.searchsorted(np.cumsum(p), top_p, side="left") + 1)
    result = np.zeros(len(logits))
    result[order[:count]] = p[:count] / p[:count].sum()
    return result


def generate(next_logits, prompt, eos, max_new=20, max_context=100, seed=0, **sampling):
    """Fake/real next_logits interface; stops rather than truncates context."""
    tokens, rng = list(prompt), np.random.default_rng(seed)
    if len(tokens) > max_context or max_new < 0:
        raise ValueError("invalid token budget")
    for _ in range(max_new):
        if len(tokens) >= max_context:
            break
        probabilities = sampling_probs(next_logits(tokens), **sampling)
        token = int(rng.choice(len(probabilities), p=probabilities))
        tokens.append(token)
        if token == eos:
            break
    return tokens


def beam_search(next_logits, prompt, eos, width=2, max_new=10):
    """Cumulative log-probability; no length normalization in this variant."""
    if width < 1:
        raise ValueError("positive beam width required")
    beams = [(list(prompt), 0.0, False)]
    for _ in range(max_new):
        candidates = []
        for tokens, score, done in beams:
            if done:
                candidates.append((tokens, score, True))
                continue
            z = np.asarray(next_logits(tokens), float)
            z = z - z.max()
            logp = z - np.log(np.exp(z).sum())
            for token in np.argsort(-logp)[:width]:
                candidates.append((tokens + [int(token)], score + logp[token], token == eos))
        beams = sorted(candidates, key=lambda b: b[1], reverse=True)[:width]
        if all(b[2] for b in beams):
            break
    return beams[0][0]
```

</details>
</details>
<!-- /interview-answer -->

- Q323 — Implement autoregressive generation with top-p sampling.（来源：[questions.md:387](interview/questions/questions.md)）

<!-- interview-answer Q323 -->
<details>
<summary>展开答案 · Q323</summary>

Interview Answer

I would tokenize the prompt, call a next-token interface, apply temperature and top-p filtering, sample with a controlled RNG and append the token. I would stop on EOS or an output limit and use a correctly managed cache if provided. Tests use deterministic fake logits to verify support, termination and context handling before connecting a real model.

<details>
<summary>展开详解与追问</summary>

Explanation

The sampling distribution must be renormalized after filtering. Seeded sampling improves reproducibility but does not guarantee identical GPU/provider behavior.

Follow-up

- What if the context reaches its limit?
  Apply an explicit truncation or stopping policy rather than letting hidden clipping change the task silently.

Reference Code

```python
import numpy as np


def sampling_probs(logits, temperature=1.0, top_k=None, top_p=1.0):
    logits = np.asarray(logits, float)
    if logits.ndim != 1 or len(logits) == 0 or not np.isfinite(logits).all():
        raise ValueError("finite nonempty 1D logits required")
    if temperature <= 0 or not 0 < top_p <= 1:
        raise ValueError("invalid sampling parameters")
    if top_k is not None and not 1 <= top_k <= len(logits):
        raise ValueError("invalid top_k")
    order = np.argsort(-logits, kind="stable")
    if top_k is not None:
        order = order[:top_k]
    scaled = (logits[order] - logits[order].max()) / temperature
    p = np.exp(scaled)
    p /= p.sum()
    count = min(len(p), np.searchsorted(np.cumsum(p), top_p, side="left") + 1)
    result = np.zeros(len(logits))
    result[order[:count]] = p[:count] / p[:count].sum()
    return result


def generate(next_logits, prompt, eos, max_new=20, max_context=100, seed=0, **sampling):
    """Fake/real next_logits interface; stops rather than truncates context."""
    tokens, rng = list(prompt), np.random.default_rng(seed)
    if len(tokens) > max_context or max_new < 0:
        raise ValueError("invalid token budget")
    for _ in range(max_new):
        if len(tokens) >= max_context:
            break
        probabilities = sampling_probs(next_logits(tokens), **sampling)
        token = int(rng.choice(len(probabilities), p=probabilities))
        tokens.append(token)
        if token == eos:
            break
    return tokens


def beam_search(next_logits, prompt, eos, width=2, max_new=10):
    """Cumulative log-probability; no length normalization in this variant."""
    if width < 1:
        raise ValueError("positive beam width required")
    beams = [(list(prompt), 0.0, False)]
    for _ in range(max_new):
        candidates = []
        for tokens, score, done in beams:
            if done:
                candidates.append((tokens, score, True))
                continue
            z = np.asarray(next_logits(tokens), float)
            z = z - z.max()
            logp = z - np.log(np.exp(z).sum())
            for token in np.argsort(-logp)[:width]:
                candidates.append((tokens + [int(token)], score + logp[token], token == eos))
        beams = sorted(candidates, key=lambda b: b[1], reverse=True)[:width]
        if all(b[2] for b in beams):
            break
    return beams[0][0]
```

</details>
</details>
<!-- /interview-answer -->

- Q324 — Implement logistic regression with SGD, L2 regularization, and early stopping in NumPy.（来源：[questions.md:388](interview/questions/questions.md)；[02-coding.md:32](interview/questions/02-coding.md)）

<!-- interview-answer Q324 -->
<details>
<summary>展开答案 · Q324</summary>

Interview Answer

I would compute sigmoid probabilities from X@w+b using a numerically stable form and minimize mean log loss plus L2 on weights. Each SGD minibatch updates gradients X.T@(p-y)/batch_size plus the penalty; the intercept is normally unpenalized. Early stopping tracks validation loss and restores the best weights. I would assert shapes, check gradients and keep preprocessing train-only.

<details>
<summary>展开详解与追问</summary>

Explanation

The reference uses explicit learning rate, seed, patience and penalty convention. Training loss alone is not an early-stopping signal for generalization.

Follow-up

- What is the most common silent shape bug?
  Combining (n,1) predictions with (n,) labels and accidentally optimizing an (n,n) broadcasted objective.

Reference Code

```python
import numpy as np


def sigmoid(z):
    z = np.asarray(z, float)
    out = np.empty_like(z)
    positive = z >= 0
    out[positive] = 1 / (1 + np.exp(-z[positive]))
    ez = np.exp(z[~positive])
    out[~positive] = ez / (1 + ez)
    return out


def logistic_loss_gradient(x, y, w, b, l2=0.0):
    z = x @ w + b
    loss = np.mean(np.logaddexp(0, z) - y * z) + 0.5 * l2 * (w @ w)
    error = sigmoid(z) - y
    return loss, x.T @ error / len(y) + l2 * w, error.mean()


def fit_logistic(x, y, xv, yv, lr=0.1, l2=0.01, epochs=200, batch_size=16, patience=10, seed=0):
    x, y, xv, yv = map(lambda a: np.asarray(a, float), (x, y, xv, yv))
    if (x.ndim != 2 or xv.ndim != 2 or x.shape[1] != xv.shape[1]
            or y.shape != (len(x),) or yv.shape != (len(xv),)
            or len(y) == 0 or len(yv) == 0):
        raise ValueError("invalid data shapes")
    if not all(np.isfinite(a).all() for a in (x, y, xv, yv)):
        raise ValueError("finite inputs required")
    if not np.isin(y, [0, 1]).all() or not np.isin(yv, [0, 1]).all():
        raise ValueError("binary labels required")
    if min(lr, epochs, batch_size, patience) <= 0 or l2 < 0:
        raise ValueError("invalid optimizer configuration")
    w, b = np.zeros(x.shape[1]), 0.0
    best, best_loss, stale = (w.copy(), b), float("inf"), 0
    rng = np.random.default_rng(seed)
    for _ in range(epochs):
        order = rng.permutation(len(y))
        for start in range(0, len(y), batch_size):
            ix = order[start:start + batch_size]
            _, dw, db = logistic_loss_gradient(x[ix], y[ix], w, b, l2)
            w, b = w - lr * dw, b - lr * db
        val_loss = logistic_loss_gradient(xv, yv, w, b, 0)[0]
        if val_loss < best_loss - 1e-8:
            best, best_loss, stale = (w.copy(), b), val_loss, 0
        else:
            stale += 1
            if stale >= patience:
                break
    return best
```

</details>
</details>
<!-- /interview-answer -->

- Q325 — Implement stratified K-fold splitting.（来源：[questions.md:389](interview/questions/questions.md)）

<!-- interview-answer Q325 -->
<details>
<summary>展开答案 · Q325</summary>

Interview Answer

I would group sample indices by class, optionally shuffle within each class using a seed and distribute each class across k folds as evenly as possible. Each fold's training indices are the complement of its validation indices. I would verify no overlap, complete coverage and approximate class proportions. Grouped or temporal data require a different splitter despite class imbalance.

<details>
<summary>展开详解与追问</summary>

Explanation

A class with fewer than k samples cannot appear in every fold; the implementation should reject or document that limitation. Complexity is O(n) plus output construction.

Follow-up

- Why is stratification insufficient for financial time series?
  It preserves label proportions but can still leak future information or related observations across folds.

Reference Code

```python
import numpy as np


def stratified_folds(labels, k, seed=0):
    labels = np.asarray(labels)
    if labels.ndim != 1 or len(labels) == 0 or k < 2:
        raise ValueError("nonempty labels and k >= 2 required")
    rng, folds, offset = np.random.default_rng(seed), [[] for _ in range(k)], 0
    for label in np.unique(labels):
        indices = np.flatnonzero(labels == label)
        if len(indices) < k:
            raise ValueError("every class must have at least k samples")
        rng.shuffle(indices)
        for j, index in enumerate(indices):
            folds[(offset + j) % k].append(int(index))
        offset = (offset + len(indices)) % k
    all_indices = np.arange(len(labels))
    for fold in folds:
        validation = np.array(sorted(fold), dtype=int)
        train_mask = np.ones(len(labels), dtype=bool)
        train_mask[validation] = False
        yield all_indices[train_mask], validation
```

Technical Sources

- [scikit-learn cross-validation guidance](https://scikit-learn.org/stable/modules/cross_validation.html)

</details>
</details>
<!-- /interview-answer -->

- Q326 — Speed coding: given a complicated JSON file, extract a specific part following some pattern, then feed that to an AI model and get the summary. 30-minute time limit, browser/ChatGPT allowed.（来源：[questions.md:393](interview/questions/questions.md)）

<!-- interview-answer Q326 -->
<details>
<summary>展开答案 · Q326</summary>

Interview Answer

I would inspect the JSON schema and specify the extraction path and missing-field behavior first. I would write a small deterministic extractor with fixture tests, then pass only the relevant bounded content to the summarizer. The output contract includes provenance and explicit model errors. Under a 30-minute limit I would prioritize a correct minimal path over a broad interface.

<details>
<summary>展开详解与追问</summary>

Explanation

The actual JSON and target pattern are not supplied, so an exact selector would be invented. Avoid dumping the entire file into the prompt.

Follow-up

- How do you handle malformed or oversized input?
  Fail with a clear validation error or process within explicit size limits; do not silently omit arbitrary fields.

</details>
</details>
<!-- /interview-answer -->

- Q327 — Design a concurrent web crawler handling robots.txt, rate limiting, and circular references while maintaining data integrity and freshness.（来源：[questions.md:394](interview/questions/questions.md)）

<!-- interview-answer Q327 -->
<details>
<summary>展开答案 · Q327</summary>

Interview Answer

I would use a deduplicated URL frontier, normalized identities, per-host rate limits and bounded workers. The fetcher respects the agreed robots policy, validates destinations and redirects, and records content hashes and fetch timestamps. Durable state supports restart, while retries distinguish transient failure from permanent absence. I would test cycles, duplicate URLs, slow hosts and changed content.

<details>
<summary>展开详解与追问</summary>

Explanation

SSRF protection requires checking resolved addresses and redirects, not just string prefixes. The graph traversal cost is O(V+E) excluding network and parsing work.

Follow-up

- How do you refresh without crawling everything constantly?
  Schedule revisits from freshness requirements and observed changes, using conditional HTTP requests where supported.

Reference Code

```python
from collections import deque
from urllib.parse import urljoin, urlsplit, urlunsplit


def crawl_frontier(start, fetch_links, max_pages=100):
    """Offline traversal core. fetch_links must enforce network/robots policy."""
    def normalize(url):
        parts = urlsplit(url)
        if parts.scheme not in ("http", "https") or not parts.hostname or parts.username:
            raise ValueError("unsupported URL")
        return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path or "/", parts.query, ""))
    start = normalize(start)
    origin = urlsplit(start)[:2]
    queue, seen, visited = deque([start]), {start}, []
    while queue and len(visited) < max_pages:
        url = queue.popleft()
        visited.append(url)
        for href in fetch_links(url):
            try:
                target = normalize(urljoin(url, href))
            except ValueError:
                continue
            if urlsplit(target)[:2] == origin and target not in seen:
                seen.add(target)
                queue.append(target)
    return visited
```

</details>
</details>
<!-- /interview-answer -->

- Q493 — Implement a website crawler (my personal experience)（来源：[02-coding.md:20](interview/questions/02-coding.md)）

<!-- interview-answer Q493 -->
<details>
<summary>展开答案 · Q493</summary>

Interview Answer

I would use a deduplicated URL frontier, normalized identities, per-host rate limits and bounded workers. The fetcher respects the agreed robots policy, validates destinations and redirects, and records content hashes and fetch timestamps. Durable state supports restart, while retries distinguish transient failure from permanent absence. I would test cycles, duplicate URLs, slow hosts and changed content.

<details>
<summary>展开详解与追问</summary>

Explanation

SSRF protection requires checking resolved addresses and redirects, not just string prefixes. The graph traversal cost is O(V+E) excluding network and parsing work.

Follow-up

- How do you refresh without crawling everything constantly?
  Schedule revisits from freshness requirements and observed changes, using conditional HTTP requests where supported.

Reference Code

```python
from collections import deque
from urllib.parse import urljoin, urlsplit, urlunsplit


def crawl_frontier(start, fetch_links, max_pages=100):
    """Offline traversal core. fetch_links must enforce network/robots policy."""
    def normalize(url):
        parts = urlsplit(url)
        if parts.scheme not in ("http", "https") or not parts.hostname or parts.username:
            raise ValueError("unsupported URL")
        return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path or "/", parts.query, ""))
    start = normalize(start)
    origin = urlsplit(start)[:2]
    queue, seen, visited = deque([start]), {start}, []
    while queue and len(visited) < max_pages:
        url = queue.popleft()
        visited.append(url)
        for href in fetch_links(url):
            try:
                target = normalize(urljoin(url, href))
            except ValueError:
                continue
            if urlsplit(target)[:2] == origin and target not in seen:
                seen.add(target)
                queue.append(target)
    return visited
```

</details>
</details>
<!-- /interview-answer -->

- Q494 — Refactor 100-120 lines of convoluted, deeply nested code.（来源：[02-coding.md:21](interview/questions/02-coding.md)）

<!-- interview-answer Q494 -->
<details>
<summary>展开答案 · Q494</summary>

Interview Answer

I would capture the external contract with existing and characterization tests, then identify parsing, business logic and side effects. I would refactor small cohesive pieces without mixing in unrelated behavior changes, preserving error semantics and adding cases that expose the original complexity. I would explain the new boundaries and verify maintainability through simpler dependencies, not merely shorter code.

<details>
<summary>展开详解与追问</summary>

Explanation

Existing green tests may encode a bug or miss behavior. A correctness fix needs an explicit expected-output decision separate from a structural refactor.

Follow-up

- What would you extract first?
  A deterministic computation or validation step with clear inputs and outputs and minimal side effects.

</details>
</details>
<!-- /interview-answer -->


<a id="day-15"></a>

### 周五 10/23

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | BFS; DFS; Graph Traversal<br>LeetCode: [200. Number of Islands](https://leetcode.com/problems/number-of-islands/); [133. Clone Graph](https://leetcode.com/problems/clone-graph/); [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)<br>资料：[Queues](Study%20topics/queues.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [CI/CD and AWS Deployment](Study%20topics/ci-cd-and-aws-deployment.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: CI and Evaluation Gates<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-15) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / Supplemental Implementation; System Design Questions / AI System Design — 12 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities<br>当日概念索引（按需）：[Offline / Regression Evals](Study%20topics/offline-regression-evals.html); [CI/CD](Study%20topics/ci-cd.html); [GitHub Actions](Study%20topics/github-actions.html) |

<!-- quantvault-day 15 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1670 · Random Forests, Bagging, and Variance Reduction](https://quantvault.org/problems.html?id=1670) · Machine Learning · Medium

先修：先读Random Forests；Bagging是重采样后组合模型。

本次范围：Conceptual。解释Bagging、随机特征与树平均怎样降低方差，并指出不是所有树都独立。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-15)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q495 — Build a key-value database starting with basic operations (SET/GET/DELETE).（来源：[02-coding.md:22](interview/questions/02-coding.md)）

<!-- interview-answer Q495 -->
<details>
<summary>展开答案 · Q495</summary>

Interview Answer

I would define SET as insert-or-replace, GET as lookup with an explicit missing-key result, and DELETE as an idempotent operation returning whether a key existed. A Python dictionary provides expected O(1) operations and O(n) space. I would first implement an in-memory single-process contract, then discuss persistence and concurrency if requested. None of those database guarantees follows automatically from using a dictionary.

<details>
<summary>展开详解与追问</summary>

Explanation

Use a sentinel or KeyError so a stored null is distinguishable from absence. Test replacement, empty-string keys, missing deletion and mutable values; decide whether values are copied or shared.

Follow-up

- How would you add durability?
  Use a transactional embedded database or a write-ahead log with replay and a defined fsync policy; a dictionary alone loses data at process exit.

Reference Code

```python
import json


class KeyValueStore:
    """String keys/values, single process; GET absence raises KeyError."""
    def __init__(self):
        self.data = {}

    def set(self, key, value):
        if not isinstance(key, str) or not isinstance(value, str):
            raise TypeError("string keys and values required")
        self.data[key] = value

    def get(self, key):
        return self.data[key]

    def delete(self, key):
        if key not in self.data:
            return False
        del self.data[key]
        return True

    def serialize(self):
        return json.dumps({"version": 1, "entries": list(self.data.items())})

    def restore(self, payload):
        if len(payload) > 1_000_000:
            raise ValueError("payload too large")
        obj = json.loads(payload)
        if not isinstance(obj, dict) or obj.get("version") != 1:
            raise ValueError("unsupported format")
        entries = obj.get("entries")
        if not isinstance(entries, list):
            raise ValueError("entries must be a list")
        replacement = {}
        for pair in entries:
            if (not isinstance(pair, list) or len(pair) != 2
                    or not all(isinstance(x, str) for x in pair)):
                raise ValueError("invalid entry")
            key, value = pair
            if key in replacement:
                raise ValueError("duplicate key")
            replacement[key] = value
        self.data = replacement  # Commit only after complete validation.
```

</details>
</details>
<!-- /interview-answer -->

- Q496 — RLE encoding (my personal experience).（来源：[02-coding.md:42](interview/questions/02-coding.md)）

<!-- interview-answer Q496 -->
<details>
<summary>展开答案 · Q496</summary>

Interview Answer

I would scan the input once, count each maximal run of equal characters, and emit a character-count pair when the character changes or the scan ends. This is O(n) time and O(r) output space for r runs. I would clarify whether the required encoding is a string or a list of pairs; pairs avoid ambiguity when the input contains digits. Empty input produces no runs.

<details>
<summary>展开详解与追问</summary>

Explanation

The invariant is that the active count covers exactly the un-emitted suffix of identical characters. Test empty text, one character, alternating characters, Unicode and runs longer than nine.

Follow-up

- Does RLE always compress?
  No. Alternating input can expand; a storage format can choose raw representation when encoding is larger.

Reference Code

```python
def rle_encode(text):
    result = []
    for char in text:
        if result and result[-1][0] == char:
            result[-1] = (char, result[-1][1] + 1)
        else:
            result.append((char, 1))
    return result


def rle_decode(runs):
    if any(not isinstance(c, str) or len(c) != 1 or type(n) is not int or n < 1 for c, n in runs):
        raise ValueError("invalid runs")
    return "".join(char * count for char, count in runs)
```

</details>
</details>
<!-- /interview-answer -->

- Q497 — LRU Cache with O(1) time complexity.（来源：[02-coding.md:44](interview/questions/02-coding.md)）

<!-- interview-answer Q497 -->
<details>
<summary>展开答案 · Q497</summary>

Interview Answer

I would combine a dictionary mapping keys to linked-list nodes with a doubly linked list ordered by recency. GET moves a hit to the most-recent end; PUT updates or inserts there and evicts the least-recent node when capacity is exceeded. These operations are expected O(1), using O(capacity) memory. I would test updates, repeated reads, eviction and zero capacity.

<details>
<summary>展开详解与追问</summary>

Explanation

OrderedDict is a concise Python reference; if the interviewer requires the underlying design, explain sentinel nodes and pointer updates explicitly. Thread safety is a separate requirement.

Follow-up

- Why a doubly linked list?
  Given a node from the map, it supports removal and reinsertion without scanning for its predecessor.

Reference Code

```python
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity):
        if capacity < 0:
            raise ValueError("nonnegative capacity required")
        self.capacity, self.data = capacity, OrderedDict()

    def get(self, key):
        if key not in self.data:
            return -1  # This exercise's missing-value contract.
        self.data.move_to_end(key)
        return self.data[key]

    def put(self, key, value):
        self.data[key] = value
        self.data.move_to_end(key)
        if len(self.data) > self.capacity:
            self.data.popitem(last=False)
```

Technical Sources

- [Python OrderedDict documentation](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

</details>
</details>
<!-- /interview-answer -->

- Q209 — Design ChatGPT.（来源：[questions.md:250](interview/questions/questions.md)）

<!-- interview-answer Q209 -->
<details>
<summary>展开答案 · Q209</summary>

Interview Answer

I would first scope a chat product rather than claim to reproduce a company's private architecture. The core path is authenticated client, conversation store, context builder, model gateway and streamed response. Tool use runs through a controlled executor. I would add quotas, cancellation, retries, privacy controls and versioned evaluations, then scale using measured token load and queue latency.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate durable messages from transient generation attempts. Record partial, completed and failed responses so reconnecting does not duplicate an action or silently treat partial text as final.

Follow-up

- How do you support regeneration?
  Create a new generation attempt or branch referencing the same conversation state and record its model configuration.

</details>
</details>
<!-- /interview-answer -->

- Q210 — Design our Claude chat service.（来源：[questions.md:251](interview/questions/questions.md)）

<!-- interview-answer Q210 -->
<details>
<summary>展开答案 · Q210</summary>

Interview Answer

I would clarify the service's actual requirements, then design a provider-neutral chat backend with authenticated sessions, durable conversation state, bounded context assembly and streaming. Model calls sit behind a gateway for deadlines, usage and provider errors. Tools and memory have separate authorization checks. I would not claim knowledge of Claude's internal implementation from the product name.

<details>
<summary>展开详解与追问</summary>

Explanation

The interview is about a plausible service design, not reverse-engineering a proprietary system. Provider-specific capabilities must be checked against the actual endpoint contract.

Follow-up

- How do you handle a disconnected client?
  Cancel where safe or persist the attempt for later retrieval, making the chosen behavior explicit and avoiding duplicate tool effects.

</details>
</details>
<!-- /interview-answer -->

- Q211 — Design a small language learning model that could run on a phone while making sure it's polite.（来源：[questions.md:252](interview/questions/questions.md)）

<!-- interview-answer Q211 -->
<details>
<summary>展开答案 · Q211</summary>

Interview Answer

I would clarify device memory, offline requirements, language coverage and acceptable latency. I would start from a licensed compact model, benchmark hardware-supported quantization and limit context and output. Polite behavior needs curated task examples and evaluation, not just a system prompt. Sensitive actions remain constrained by the application, and the product should expose when a request exceeds local capability.

<details>
<summary>展开详解与追问</summary>

Explanation

Battery use, thermal throttling and model download size can dominate phone deployment. Politeness must not mean confidently agreeing with an incorrect or unsafe request.

Follow-up

- Would you use cloud fallback?
  Only if connectivity, privacy and product requirements permit it, with clear user-visible behavior.

</details>
</details>
<!-- /interview-answer -->

- Q212 — Here's a junior developer's design for an inference batching system. Can you review it and explain what you'd change or improve?（来源：[questions.md:253](interview/questions/questions.md)）

<!-- interview-answer Q212 -->
<details>
<summary>展开答案 · Q212</summary>

Interview Answer

I would ask to see the design and its workload before judging it. My review would check bounded admission, queue deadlines, length-aware or continuous batching, KV-memory limits, cancellation and fairness. I would measure throughput and tail latency together and test overload, long requests and worker failure. I would explain the smallest change supported by evidence rather than replace the design wholesale.

<details>
<summary>展开详解与追问</summary>

Explanation

No junior developer diagram was supplied, so specific defects cannot be asserted. Batch formation and scheduling should reflect interactive versus offline service objectives.

Follow-up

- What is a common batching mistake?
  Waiting indefinitely for a full batch or allowing long jobs to starve short interactive requests.

</details>
</details>
<!-- /interview-answer -->

- Q213 — Design the OpenAI Playground - specifically the feature that lets developers simulate full conversations and threads.（来源：[questions.md:254](interview/questions/questions.md)）

<!-- interview-answer Q213 -->
<details>
<summary>展开答案 · Q213</summary>

Interview Answer

I would model editable conversation trees, immutable message versions and generation runs containing model, parameters and tool settings. A client can branch from a message, run a simulation and inspect streamed output, token usage and errors. The backend validates roles and schemas, enforces quotas and keeps secrets out of shared artifacts. Saved runs make comparisons reproducible.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a proposed playground-style application, not a claim about the existing product's internals. Editing a prior message should create a branch rather than silently rewriting the provenance of later outputs.

Follow-up

- How do you compare two prompts fairly?
  Run them against the same versioned cases and configuration, accounting for generation variability and usage.

</details>
</details>
<!-- /interview-answer -->

- Q214 — Design a real-time chatbot API (low-latency handling, session management, concurrency, safety filters).（来源：[questions.md:255](interview/questions/questions.md)）

<!-- interview-answer Q214 -->
<details>
<summary>展开答案 · Q214</summary>

Interview Answer

I would use authenticated session IDs, a durable message store and SSE or another suitable streaming transport. The API validates input, constructs a bounded context and calls the model through a deadline-aware gateway. Per-tenant rate and concurrency limits protect the service. Cancellation, partial responses and safety checks have explicit semantics, and tests cover reconnects and concurrent turns.

<details>
<summary>展开详解与追问</summary>

Explanation

Concurrent writes to one conversation need ordering or optimistic version checks. Streaming partial text creates a different moderation and validation boundary than buffering a complete answer.

Follow-up

- How do you avoid duplicate turns?
  Give each submission a client-generated request key and persist its logical outcome before acknowledging it.

</details>
</details>
<!-- /interview-answer -->

- Q215 — Design a Document Q&A Assistant.（来源：[questions.md:256](interview/questions/questions.md)）

<!-- interview-answer Q215 -->
<details>
<summary>展开答案 · Q215</summary>

Interview Answer

I would ingest documents with source IDs, versions, layout and access metadata, then build lexical and vector retrieval. A query retrieves authorized evidence, optionally reranks it and generates a cited answer or an explicit insufficient-evidence response. I would evaluate multi-hop questions, tables, missing answers and citation support, with latency and cost instrumentation.

<details>
<summary>展开详解与追问</summary>

Explanation

The citation must support the associated claim, not merely point to a relevant document. Document-wide units and definitions need to survive chunking.

Follow-up

- What if relevant evidence spans several sections?
  Expand selected chunks to their parents or retrieve additional evidence with a bounded follow-up search.

</details>
</details>
<!-- /interview-answer -->

- Q216 — Design a Hallucination-Free Banking Chatbot.（来源：[questions.md:257](interview/questions/questions.md)）

<!-- interview-answer Q216 -->
<details>
<summary>展开答案 · Q216</summary>

Interview Answer

I would challenge the absolute promise of hallucination-free output and agree on a measurable banking use case. Account balances and transactions come from authorized deterministic tools; policy answers come from approved versioned documents with citations. The system abstains or escalates when evidence is missing. I would test numeric fidelity, permissions, stale policies and severe failures before controlled rollout.

<details>
<summary>展开详解与追问</summary>

Explanation

A banking assistant should not generate authoritative account facts from model memory. Access control and transaction authorization remain outside the model.

Follow-up

- What would you guarantee instead?
  Specific enforced contracts, such as no displayed balance without a successful authorized tool result, plus measured quality and explicit limitations.

</details>
</details>
<!-- /interview-answer -->

- Q217 — Design a Hospital Voice Assistant (handle noise, privacy, latency, domain vocabulary).（来源：[questions.md:258](interview/questions/questions.md)；[04-ai-system-design.md:50](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q217 -->
<details>
<summary>展开答案 · Q217</summary>

Interview Answer

I would clarify whether the assistant documents speech, retrieves information or initiates actions. The pipeline includes consent-aware audio capture, streaming transcription, domain vocabulary handling, a constrained task layer and reviewable output. Noise, speaker overlap, negation and drug names need targeted evaluation. Sensitive data retention and clinician confirmation are designed into the workflow, not added as a disclaimer.

<details>
<summary>展开详解与追问</summary>

Explanation

Latency has audio, transcription, interpretation and response components. Low-confidence critical entities should be confirmed rather than silently normalized.

Follow-up

- How would you test it?
  Use authorized representative recordings with expert annotations, measuring entity and negation errors as well as transcription error and latency.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 4 周：Reliability, Safety and Governance

<a id="day-16"></a>

### 周一 10/26

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Trees; Recursion<br>LeetCode: [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/); [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/); [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)<br>资料：[BFS](Study%20topics/bfs.html); [Trees](Study%20topics/trees.html); [Recursion](Study%20topics/recursion.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [CI/CD and AWS Deployment](Study%20topics/ci-cd-and-aws-deployment.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Docker and Local Release<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-16) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Docker](Study%20topics/docker.html) |


<!-- quantvault-day 16 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1743 · Gradient Boosting vs. Random Forests, Batch Normalization, and SGD Momentum](https://quantvault.org/problems.html?id=1743) · Machine Learning · Easy

先修：先读Gradient Boosting；逐步纠正当前损失，与独立树平均不同。

本次范围：Comparison。只比较Random Forest与Gradient Boosting，并复习Day 11的XGBoost限制；Batch Norm和SGD Momentum作为扩展。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-16)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q218 — Design a Feedback Loop for Writing Tools.（来源：[questions.md:259](interview/questions/questions.md)）

<!-- interview-answer Q218 -->
<details>
<summary>展开答案 · Q218</summary>

Interview Answer

I would capture consented edits and acceptance signals with the original context, prompt and model version. I would distinguish factual corrections from stylistic preferences, review representative samples and turn verified failures into evaluation cases. Prompt or model changes are tested offline and then in controlled experiments. Feedback should not automatically enter training without quality and privacy checks.

<details>
<summary>展开详解与追问</summary>

Explanation

An accepted suggestion may merely be convenient, and a rejected one may be factually correct. Label interpretation is the central design problem.

Follow-up

- How do you prevent a feedback loop from amplifying errors?
  Retain independent evaluation data and human review rather than treating the system's own outputs as ground truth.

</details>
</details>
<!-- /interview-answer -->

- Q219 — Design a Legal Contract Generation system with compliance requirements.（来源：[questions.md:260](interview/questions/questions.md)；[04-ai-system-design.md:51](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q219 -->
<details>
<summary>展开答案 · Q219</summary>

Interview Answer

I would use approved templates and clause libraries, structured client inputs and jurisdiction-specific review requirements. Retrieval supplies relevant clauses; generation produces a draft with clause provenance and unresolved questions. Deterministic checks verify required fields and prohibited combinations, and a qualified reviewer approves the final document. I would measure omission, contradiction and unsupported-clause rates, not only prose quality.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a drafting workflow, not autonomous legal advice. Template and policy versions must be retained with the document.

Follow-up

- What if a requested clause conflicts with policy?
  Flag the conflict and route it for review rather than inventing a compromise clause.

</details>
</details>
<!-- /interview-answer -->

- Q220 — Design an AI Search system scaling to 10M+ articles.（来源：[questions.md:261](interview/questions/questions.md)）

<!-- interview-answer Q220 -->
<details>
<summary>展开答案 · Q220</summary>

Interview Answer

I would separate ingestion and query serving, maintain incremental versioned indexes and combine metadata-aware lexical and ANN retrieval. Sharding follows access patterns and capacity measurements; reranking operates on a bounded candidate set. Caches include permissions and versions. I would benchmark recall, freshness and tail latency under realistic query distributions before making a capacity promise.

<details>
<summary>展开详解与追问</summary>

Explanation

Article count is not enough: chunk count, vector dimensions, update rate and QPS determine cost and index size.

Follow-up

- How do you replace an index safely?
  Build and validate a new version, switch traffic through a controlled alias or routing change, and retain a rollback version.

</details>
</details>
<!-- /interview-answer -->

- Q221 — Design a Resume Classifier for Team Routing.（来源：[questions.md:262](interview/questions/questions.md)）

<!-- interview-answer Q221 -->
<details>
<summary>展开答案 · Q221</summary>

Interview Answer

I would define the routing categories and whether the system merely suggests a team or affects hiring decisions. I would establish a labeled baseline, preserve relevant skills and experience, and route uncertain cases for review. Evaluation includes per-category errors, calibration and potential unfair proxy features. The output should explain supported matching evidence rather than infer protected traits.

<details>
<summary>展开详解与追问</summary>

Explanation

Resume parsing quality can create unequal errors before classification. A recommendation to a team should remain distinguishable from a hiring judgment.

Follow-up

- How do you handle an unfamiliar profile?
  Allow multiple plausible routes or an uncertain category rather than force an unsupported label.

</details>
</details>
<!-- /interview-answer -->

- Q222 — Design an AI-powered Candidate Sourcing System with 750M profiles, semantic search, and <500ms latency.（来源：[questions.md:263](interview/questions/questions.md)）

<!-- interview-answer Q222 -->
<details>
<summary>展开答案 · Q222</summary>

Interview Answer

I would clarify whether 500ms applies to candidate retrieval or to a fully generated explanation. I would precompute profile features and vectors, partition by useful filters, retrieve a small lexical/ANN candidate set and rerank within a bounded budget. Permissions, deletion and freshness propagate through indexes and caches. I would prove latency with representative load tests rather than promise it from the architecture alone.

<details>
<summary>展开详解与追问</summary>

Explanation

At 750 million profiles, filtering, shard fan-out and index memory are first-class constraints. Generating prose for every candidate would be a separate expensive stage.

Follow-up

- What is the quality metric?
  Useful candidate relevance at top ranks, reviewed with domain experts and checked for harmful or inappropriate filtering.

</details>
</details>
<!-- /interview-answer -->

- Q223 — Scale an AI chat feature to 1M daily users - discuss trade-offs. (reported across multiple companies)（来源：[questions.md:264](interview/questions/questions.md)）

<!-- interview-answer Q223 -->
<details>
<summary>展开答案 · Q223</summary>

Interview Answer

I would turn one million daily users into a workload model: sessions per user, turns per session, peak arrival rate and token-length distribution. I would separate chat state, retrieval and model serving, then add admission control, safe caches and autoscaling with failure headroom. Streaming, batching and model routing are evaluated against task quality, latency and total cost.

<details>
<summary>展开详解与追问</summary>

Explanation

One million users is not one million simultaneous requests. Durable conversation state and tenant-scoped caches must survive replica changes.

Follow-up

- What would you measure before scaling?
  Peak QPS, concurrent generations, input/output tokens, provider quotas and the current critical path.

</details>
</details>
<!-- /interview-answer -->

- Q224 — Design for 1M users (scale beyond prototype). (candidates wish they prepared for this)（来源：[questions.md:265](interview/questions/questions.md)）

<!-- interview-answer Q224 -->
<details>
<summary>展开答案 · Q224</summary>

Interview Answer

I would first define what the million users do and how often. I would load-test the existing service, identify the limiting component and introduce the minimum necessary partitioning, caching and asynchronous work. Data ownership, authorization and recovery must remain correct across replicas. I would propose staged capacity targets and explicit degradation behavior instead of a vague rewrite for scale.

<details>
<summary>展开详解与追问</summary>

Explanation

Scaling a prototype requires operational evidence, not just adding a message broker and Kubernetes to a diagram.

Follow-up

- What stays simple?
  Components that are not bottlenecks and whose single-instance availability meets the current stage's requirements.

</details>
</details>
<!-- /interview-answer -->

- Q225 — Design a system to process 10k user uploads per month (bank payslips, IDs, references). How would you extract data, detect inconsistencies, reject invalid files, and handle LLM provider downtime?（来源：[questions.md:266](interview/questions/questions.md)）

<!-- interview-answer Q225 -->
<details>
<summary>展开答案 · Q225</summary>

Interview Answer

I would accept uploads into protected object storage, validate file type and size, scan them and enqueue idempotent processing jobs. Parsing/OCR produces source-linked fields; deterministic checks compare identities, dates and totals across documents. Conflicts go to review. Provider downtime leaves jobs queued or failed with retryable status, and the user can track progress without resubmitting files.

<details>
<summary>展开详解与追问</summary>

Explanation

Ten thousand uploads per month is modest on average, but file size, OCR time and bursts matter. Treat uploaded instructions as document content, not execution policy.

Follow-up

- How do you avoid duplicate processing?
  Use stable upload/job IDs and content hashes, with a durable record of the processing version and outcome.

</details>
</details>
<!-- /interview-answer -->

- Q226 — Design a system that lets doctors automatically send billing info to insurers based on patient notes.（来源：[questions.md:267](interview/questions/questions.md)；[04-ai-system-design.md:54](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q226 -->
<details>
<summary>展开答案 · Q226</summary>

Interview Answer

I would separate clinical note extraction, coding suggestions, validation, clinician approval and insurer submission. The model proposes structured billing data with evidence spans; rules and qualified review check consistency and completeness. Submission uses an authorized, idempotent integration with an audit trail. I would validate the workflow with billing and privacy specialists rather than allow unsupported autonomous claims.

<details>
<summary>展开详解与追问</summary>

Explanation

A note containing a term does not automatically justify a billing code. Corrections and rejected claims need traceable versioning.

Follow-up

- What if the model is uncertain?
  Request clarification or review and avoid submitting an invented or unsupported code.

</details>
</details>
<!-- /interview-answer -->


<a id="day-17"></a>

### 周二 10/27

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Window Functions; Date Queries<br>LeetCode: [1204. Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/); [1164. Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/); [1070. Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/)<br>资料：[Date Queries](Study%20topics/date-queries.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Cross-Validation; Hyperparameter Tuning](Study%20topics/cross-validation-hyperparameter-tuning.html) · [Notebook](notebook/09_cross_validation_hyperparameter_tuning.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Financial Research RAG](Study%20topics/financial-research-rag.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: AWS Deployment Configuration<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-17) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Model Selection](Study%20topics/model-selection.html); [Cloud Fundamentals](Study%20topics/cloud-fundamentals.html); [IAM](Study%20topics/iam.html); [Networking](Study%20topics/networking.html); [Secrets](Study%20topics/secrets.html); [AWS ECS Fargate](Study%20topics/aws-ecs-fargate.html); [ECR](Study%20topics/ecr.html); [CloudWatch](Study%20topics/cloudwatch.html) |


<!-- quantvault-day 17 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1746 · Hyperparameter Selection in Machine Learning](https://quantvault.org/problems.html?id=1746) · Machine Learning · Easy

先修：先读Cross-Validation；随机K-fold不能直接用于金融时间序列。

本次范围：Conceptual。区分模型学到的Parameter与人为选择的Hyperparameter，说明Cross-Validation和最终测试的分工。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-17)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q227 — Design a conversational recommender system that suggests products based on user preferences, combining chat, retrieval, and database layers.（来源：[questions.md:268](interview/questions/questions.md)）

<!-- interview-answer Q227 -->
<details>
<summary>展开答案 · Q227</summary>

Interview Answer

I would maintain a catalog and inventory source of truth, retrieve candidates using structured preferences and semantic intent, and rank them with explicit constraints. The LLM handles conversation and explains recommendations using actual product attributes. Session preferences are scoped and editable. I would measure relevance, task completion and constraint violations, while avoiding hallucinated prices or stock status.

<details>
<summary>展开详解与追问</summary>

Explanation

Candidate generation and ranking need not use the same model. Current availability should be checked close to presentation or purchase.

Follow-up

- How do you handle cold start?
  Ask a small number of useful preference questions and use catalog or popularity baselines without pretending personalization already exists.

</details>
</details>
<!-- /interview-answer -->

- Q228 — Design a fast autocomplete system using LLMs.（来源：[questions.md:269](interview/questions/questions.md)）

<!-- interview-answer Q228 -->
<details>
<summary>展开答案 · Q228</summary>

Interview Answer

I would prioritize latency with debounced requests, small relevant context, a fast model and cancellation of stale generations. An editor or search client associates each result with the input version so old completions are discarded. Safe prefix caching may help. I would evaluate acceptance and correction rates alongside latency, and never allow a completion to apply itself without the intended user action.

<details>
<summary>展开详解与追问</summary>

Explanation

Autocomplete workloads contain many cancelled or superseded requests. Counting only completed calls understates cost.

Follow-up

- What is the main correctness race?
  A completion generated for an older document revision being displayed or inserted into a newer one.

</details>
</details>
<!-- /interview-answer -->

- Q229 — Design an AI-powered legal assistant.（来源：[questions.md:270](interview/questions/questions.md)）

<!-- interview-answer Q229 -->
<details>
<summary>展开答案 · Q229</summary>

Interview Answer

I would scope the assistant to tasks such as cited document retrieval, clause extraction and draft comparison. Documents retain jurisdiction, version and source spans; the model surfaces uncertainty and conflicts. Qualified reviewers approve consequential interpretations and outputs. Evaluation focuses on material omissions, unsupported claims and wrong-version evidence, with access and confidentiality controls throughout.

<details>
<summary>展开详解与追问</summary>

Explanation

A generic legal corpus can be inappropriate for a particular jurisdiction or date. Retrieval provenance is essential.

Follow-up

- How do you present uncertainty?
  Identify the unresolved issue and supporting evidence instead of producing a confident legal conclusion without support.

</details>
</details>
<!-- /interview-answer -->

- Q230 — Build a generative resume builder with memory.（来源：[questions.md:271](interview/questions/questions.md)）

<!-- interview-answer Q230 -->
<details>
<summary>展开答案 · Q230</summary>

Interview Answer

I would store user-confirmed employment facts and preferences separately from generated wording. The model can tailor structure and phrasing to a role but cannot invent accomplishments, dates or metrics. Memory is editable and deletable, and every draft references the factual profile version. I would test factual fidelity, useful tailoring and protection of personal information.

<details>
<summary>展开详解与追问</summary>

Explanation

The system may suggest a placeholder for a missing metric, but it must be visibly unfilled rather than guessed.

Follow-up

- How do you prevent fabricated achievements?
  Constrain generation to confirmed facts and flag any new factual claim for explicit user verification.

</details>
</details>
<!-- /interview-answer -->

- Q231 — Create an internal Slack bot answering HR questions.（来源：[questions.md:272](interview/questions/questions.md)）

<!-- interview-answer Q231 -->
<details>
<summary>展开答案 · Q231</summary>

Interview Answer

I would connect approved HR documents to an access-aware retrieval service and answer with policy citations and effective dates. The bot verifies the requesting user's scope, asks clarifying questions where employment context matters and escalates sensitive personal cases. It does not expose another employee's data or treat a chat message as authority to change records.

<details>
<summary>展开详解与追问</summary>

Explanation

Public channel and direct-message behavior should differ where privacy requires it. Policy changes must invalidate stale cached answers.

Follow-up

- What if policies conflict?
  Show the conflict and route to the responsible HR owner rather than selecting a convenient answer silently.

</details>
</details>
<!-- /interview-answer -->

- Q232 — Design a GitHub Copilot-style JavaScript development tool.（来源：[questions.md:273](interview/questions/questions.md)）

<!-- interview-answer Q232 -->
<details>
<summary>展开答案 · Q232</summary>

Interview Answer

I would integrate an editor client with a low-latency completion and assistance service. Context includes the relevant code, language metadata and permitted repository snippets, bounded by a token budget. Suggestions are tied to document versions and cancelled when stale. Tests, linting and developer review remain the acceptance boundary; repository text is untrusted input for any tool-enabled workflow.

<details>
<summary>展开详解与追问</summary>

Explanation

JavaScript suggestions need awareness of project types, APIs and asynchronous behavior. Sending entire repositories creates unnecessary latency and privacy exposure.

Follow-up

- How do you evaluate it?
  Use representative coding tasks, correctness tests, acceptance/correction signals and latency, separating useful suggestions from merely accepted ones.

</details>
</details>
<!-- /interview-answer -->

- Q233 — Design an AI co-pilot like GitHub Copilot (real-time streaming completions).（来源：[questions.md:274](interview/questions/questions.md)）

<!-- interview-answer Q233 -->
<details>
<summary>展开答案 · Q233</summary>

Interview Answer

I would design a streaming completion service with versioned editor context, cancellation, bounded retrieval and a model gateway. The client discards stale responses and lets the user choose whether to insert code. Larger refactoring tasks use a separate interaction path with tests and a reviewable diff. I would measure correctness, edit usefulness, latency and privacy compliance.

<details>
<summary>展开详解与追问</summary>

Explanation

Token streaming alone does not solve stale-context races. Applying partial code can produce invalid intermediate states.

Follow-up

- How do you avoid wasting compute?
  Debounce, cancel superseded requests and limit context to the most relevant permitted code.

</details>
</details>
<!-- /interview-answer -->

- Q234 — Design a Midjourney/Stable Diffusion image generation service (queueing, GPU scheduling).（来源：[questions.md:275](interview/questions/questions.md)）

<!-- interview-answer Q234 -->
<details>
<summary>展开答案 · Q234</summary>

Interview Answer

I would expose asynchronous generation jobs backed by a durable queue, GPU workers and object storage. Admission quotas and resolution/step limits bound cost; scheduling considers model residency and job size. Workers publish versioned artifacts idempotently and users receive status updates. I would evaluate prompt adherence, image quality, safety, queue wait and failure recovery under load.

<details>
<summary>展开详解与追问</summary>

Explanation

GPU model loading can be expensive, so scheduling by model can help while risking fairness. Reproducibility needs seed and model/configuration versions.

Follow-up

- What happens if a worker dies?
  The job is retried or resumed according to its checkpoint capability, without charging or publishing duplicate logical results.

</details>
</details>
<!-- /interview-answer -->

- Q235 — Design a Perplexity.ai / real-time LLM-powered search engine.（来源：[questions.md:276](interview/questions/questions.md)；[04-ai-system-design.md:60](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q235 -->
<details>
<summary>展开答案 · Q235</summary>

Interview Answer

I would retrieve current web candidates, fetch and parse them safely, rank evidence and generate a cited synthesis with timestamps and uncertainty. Query latency budgets limit browsing and reranking, and caches respect freshness. Evaluation checks answer support, source quality, coverage and stale information. Untrusted web text cannot change tool permissions or instruct the assistant to exfiltrate data.

<details>
<summary>展开详解与追问</summary>

Explanation

A citation is not automatically a trustworthy source. Conflicting reports should remain visible rather than being averaged into a false consensus.

Follow-up

- How do you handle breaking news?
  Surface publication and event times, acknowledge uncertainty and prefer primary sources when available.

</details>
</details>
<!-- /interview-answer -->

- Q236 — Design a Ghibli Image Generator (text prompt ingestion, model selection, GPU inference, cost throttling, safety filters).（来源：[questions.md:277](interview/questions/questions.md)）

<!-- interview-answer Q236 -->
<details>
<summary>展开答案 · Q236</summary>

Interview Answer

I would clarify the desired visual characteristics and choose an appropriately licensed image model. The service uses validated prompts, asynchronous GPU jobs, per-user quotas, safety checks and artifact storage with model/seed metadata. I would offer a described aesthetic rather than imply endorsement or an official studio product. Cost limits include image size, sampling steps, retries and moderation overhead.

<details>
<summary>展开详解与追问</summary>

Explanation

The architecture resembles other image-generation services; the named style does not justify a distinct scaling design. Evaluate prompt adherence and failure cases with representative requests.

Follow-up

- How do you keep costs predictable?
  Bound generation parameters and concurrent jobs, display status, and cap retries and per-user budgets.

</details>
</details>
<!-- /interview-answer -->


<a id="day-18"></a>

### 周三 10/28

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Key-Value Store; TTL<br>LeetCode: [706. Design HashMap](https://leetcode.com/problems/design-hashmap/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)<br>资料：[Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Cross-Validation; Hyperparameter Tuning](Study%20topics/cross-validation-hyperparameter-tuning.html) · [Notebook](notebook/09_cross_validation_hyperparameter_tuning.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Financial Research RAG](Study%20topics/financial-research-rag.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: AWS Deployment and Smoke Tests<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-18) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：TTL 为自定义扩展练习；LeetCode 981 仅对应 Time-Based Key-Value Store，不等同于 TTL。

<!-- quantvault-day 18 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1587 · Hyperparameter Tuning and Diagnosing Flat Out-of-Sample Performance](https://quantvault.org/problems.html?id=1587) · Machine Learning · Medium
- [#1676 · Ridge Regression Hyperparameter Diagnostics](https://quantvault.org/problems.html?id=1676) · Machine Learning · Medium

先修：先读Hyperparameter Tuning；不根据最终测试反复选择配置。

本次范围：Diagnosis。面对样本外表现平坦，先判断数据、基线、alpha、样本量与验证方差，再决定是否继续调参。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-18)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q237 — Design a Dynamic Questionnaire Engine for an Insurance Platform (JSON-driven, frontend decision tree without backend calls).（来源：[questions.md:278](interview/questions/questions.md)）

<!-- interview-answer Q237 -->
<details>
<summary>展开答案 · Q237</summary>

Interview Answer

I would define a versioned JSON schema for question nodes, answer types, validation and branching rules, then validate the graph before loading it. The frontend evaluates deterministic branches locally and persists answers with the questionnaire version. I would detect unreachable nodes and cycles and define how edits invalidate downstream answers. Authoritative submission validation still belongs on the server.

<details>
<summary>展开详解与追问</summary>

Explanation

No backend calls during navigation does not mean the client can enforce security or final business rules alone.

Follow-up

- What happens when a prior answer changes?
  Recompute reachable questions and clear or explicitly retain now-inapplicable answers according to a documented rule.

</details>
</details>
<!-- /interview-answer -->

- Q238 — Design a user profile system addressing storage, multi-device tracking, and preference flexibility. Optimize for 100 million users with batch migration.（来源：[questions.md:279](interview/questions/questions.md)）

<!-- interview-answer Q238 -->
<details>
<summary>展开答案 · Q238</summary>

Interview Answer

I would use a stable user ID and separate core profile fields from versioned preferences and device associations. Reads use scoped caches; updates use concurrency control and clear conflict rules. For migration I would backfill in batches, dual-read or dual-write only with reconciliation, and monitor correctness before cutting over. Privacy, deletion and access control apply across devices.

<details>
<summary>展开详解与追问</summary>

Explanation

One hundred million users demands estimates of active reads, writes and record size. Flexible preferences should not erase the schema for important invariants.

Follow-up

- How do you prevent lost updates?
  Use field-level updates or optimistic version checks rather than overwriting an entire profile from a stale device copy.

</details>
</details>
<!-- /interview-answer -->

- Q239 — Design a distributed search system capable of handling a billion documents and a million QPS, while also managing LLM inference for over 10,000 requests per second.（来源：[questions.md:280](interview/questions/questions.md)）

<!-- interview-answer Q239 -->
<details>
<summary>展开答案 · Q239</summary>

Interview Answer

I would split search retrieval from LLM answering and build separate load models for each. Search uses partitioned inverted/vector indexes, replicas, bounded fan-out and aggressive safe caching. Only eligible requests enter an independently rate-limited inference tier. I would validate regional capacity and tail latency with benchmarks; the stated scale requires substantial operational design beyond a prototype diagram.

<details>
<summary>展开详解与追问</summary>

Explanation

A million search QPS and ten thousand inference requests per second have very different cost and latency profiles. Synchronous coupling would let inference saturation degrade all search.

Follow-up

- What is the first architectural separation?
  Keep ordinary ranked search available even when the generative answer tier is overloaded or unavailable.

</details>
</details>
<!-- /interview-answer -->

- Q240 — Design hybrid search combining traditional text retrieval with semantic similarity - top-k similar documents from a corpus of over 10M documents with a response time under 50ms.（来源：[questions.md:281](interview/questions/questions.md)）

<!-- interview-answer Q240 -->
<details>
<summary>展开答案 · Q240</summary>

Interview Answer

I would clarify whether 50ms includes networking, query embedding and reranking. I would precompute document vectors, run lexical and ANN retrieval with efficient filters, fuse bounded candidates and minimize shard fan-out. A heavy cross-encoder may exceed the budget. I would tune index parameters against recall and measure p95/p99 on realistic filtered queries before committing to the target.

<details>
<summary>展开详解与追问</summary>

Explanation

An average local index lookup below 50ms is not proof that the end-to-end distributed service meets that objective.

Follow-up

- What would you sacrifice first?
  Reduce optional reranking or candidate breadth only if held-out relevance remains above the agreed quality floor.

</details>
</details>
<!-- /interview-answer -->

- Q241 — Design a workflow to remove all dead links for hundreds of client websites assuming you have API access to overwrite their HTML.（来源：[questions.md:282](interview/questions/questions.md)）

<!-- interview-answer Q241 -->
<details>
<summary>展开答案 · Q241</summary>

Interview Answer

I would crawl authorized sites with bounded concurrency and record every link and source page version. Temporary network errors are not automatically dead links; I would classify and recheck failures. Proposed edits are reviewable diffs, followed by conditional writes that reject changed pages and retain backups. The workflow logs edits and supports rollback rather than destructively rewriting HTML from one failed fetch.

<details>
<summary>展开详解与追问</summary>

Explanation

Redirects, authentication and rate limits can make a healthy URL appear broken. Removal versus replacement is a business decision.

Follow-up

- How do you avoid overwriting a concurrent edit?
  Use an ETag, version or content-hash precondition when publishing the updated page.

</details>
</details>
<!-- /interview-answer -->

- Q242 — How would you design the UX for an AI assistant that is often slow?（来源：[questions.md:283](interview/questions/questions.md)）

<!-- interview-answer Q242 -->
<details>
<summary>展开答案 · Q242</summary>

Interview Answer

I would acknowledge the request immediately, show meaningful progress states and allow cancellation. If useful, I would stream partial content while distinguishing it from validated final output. Longer tasks become asynchronous with resumable status rather than a frozen spinner. I would set expectations from measured latency and avoid fabricated progress percentages or claiming success before tools finish.

<details>
<summary>展开详解与追问</summary>

Explanation

Perceived speed and actual completion speed are separate. A quick but misleading answer damages trust more than a clear waiting state.

Follow-up

- What should happen after a timeout?
  Explain the known state, offer safe retry or status lookup, and avoid silently duplicating consequential work.

</details>
</details>
<!-- /interview-answer -->

- Q243 — How would you surface model limitations or errors to users without breaking trust?（来源：[questions.md:284](interview/questions/questions.md)）

<!-- interview-answer Q243 -->
<details>
<summary>展开答案 · Q243</summary>

Interview Answer

I would state the specific limitation in task language, show the evidence or missing input and offer a useful next step. I would distinguish uncertainty, unavailable data and system failure rather than use one vague apology. For a financial answer, an unverified number should not be displayed as authoritative. Honest boundaries and consistent recovery build more trust than false confidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Overloading every answer with generic disclaimers reduces clarity. Explain limitations where they change the user's decision.

Follow-up

- How do you handle a corrected answer?
  Identify what changed, provide the corrected result and retain an audit trail where the workflow requires it.

</details>
</details>
<!-- /interview-answer -->

- Q244 — Design a scalable image-generation pipeline for millions of users.（来源：[questions.md:285](interview/questions/questions.md)；[04-ai-system-design.md:67](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q244 -->
<details>
<summary>展开答案 · Q244</summary>

Interview Answer

I would decouple API admission from GPU generation through durable jobs, quotas and a scheduler aware of model, resolution and resource needs. Object storage and a CDN serve generated assets, while workers scale with queue and GPU measurements. Evaluation covers quality and safety as well as cost, fairness and recovery. I would retain immutable job configuration for reproducibility.

<details>
<summary>展开详解与追问</summary>

Explanation

Millions of registered users do not imply millions of simultaneous GPU jobs. Capacity follows arrivals, generation time and output size.

Follow-up

- How do you prevent one user from monopolizing GPUs?
  Use per-tenant quotas and fair scheduling with explicit priority classes and bounded job sizes.

</details>
</details>
<!-- /interview-answer -->

- Q245 — How would you scale a generative content platform for millions of users?（来源：[questions.md:286](interview/questions/questions.md)）

<!-- interview-answer Q245 -->
<details>
<summary>展开答案 · Q245</summary>

Interview Answer

I would separate content types and interactive versus batch workloads, define per-task quality requirements and put generation behind admission control and durable job state. Reusable assets and safe caches reduce repeat work; storage/CDN handles delivery. Model routing and worker pools scale independently, and moderation, provenance, cost tracking and release evaluations remain part of the design.

<details>
<summary>展开详解与追问</summary>

Explanation

Text, images and video have different service-time distributions, so one queue can create head-of-line blocking.

Follow-up

- What is your overload policy?
  Prioritize essential interactive work, defer eligible batch jobs and reject excess requests explicitly instead of accepting unlimited backlog.

</details>
</details>
<!-- /interview-answer -->

- Q246 — Design an In-Memory Database with SET, GET, BEGIN, ROLLBACK, COMMIT, and nested transaction support.（来源：[questions.md:287](interview/questions/questions.md)）

<!-- interview-answer Q246 -->
<details>
<summary>展开答案 · Q246</summary>

Interview Answer

I would define nested transactions as a stack of write overlays above a committed map. GET searches overlays from newest to oldest; SET writes to the top layer; deletion needs a tombstone. ROLLBACK discards the top layer. Under my stated semantics, inner COMMIT merges into its parent and outer COMMIT publishes to the base. I would clarify whether the interviewer instead expects COMMIT to close all levels.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a single-threaded in-memory design, not durable isolation. GET costs O(transaction depth); writes are expected O(1), and commit costs O(changed keys).

Follow-up

- Why is a tombstone necessary?
  It distinguishes a deliberate deletion from a key absent in the current overlay, preventing an older value from reappearing.

</details>
</details>
<!-- /interview-answer -->


<a id="day-19"></a>

### 周四 10/29

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Transactions; Constraints; Parameterized Queries<br>LeetCode: [196. Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/); [602. Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/); [1341. Movie Rating](https://leetcode.com/problems/movie-rating/)<br>资料：[Transactions](Study%20topics/transactions.html); [Constraints](Study%20topics/constraints.html); [Parameterized Queries](Study%20topics/parameterized-queries.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Feature Engineering; Interpretability; Feature Importance](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [Notebook](notebook/10_feature_engineering_interpretability_feature_importance.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [RAG Evaluation and Retrieval Trade-offs](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Controlled CD and Rollback<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-19) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[OIDC](Study%20topics/oidc.html); [Rollback](Study%20topics/rollback.html) |


刷题对应说明：LeetCode 对应本日查询练习；Transactions、Constraints 和 Parameterized Queries 在 PostgreSQL 中练习。

<!-- quantvault-day 19 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1757 · Limitations of One-Hot Encoding](https://quantvault.org/problems.html?id=1757) · Machine Learning · Easy
- [#1964 · Feature Selection for Return Prediction](https://quantvault.org/problems.html?id=1964) · Machine Learning · Medium

先修：先读Feature Engineering；One-Hot用多个0/1变量表示类别。

本次范围：Feature strategy。说明One-Hot Encoding的维度与未知类别问题；特征选择也必须在训练/验证流程内完成。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-19)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q247 — Design an AI recommendation system.（来源：[questions.md:288](interview/questions/questions.md)）

<!-- interview-answer Q247 -->
<details>
<summary>展开答案 · Q247</summary>

Interview Answer

I would separate candidate generation, ranking and policy constraints. Data pipelines create user/item features with point-in-time correctness, while the serving tier combines personalized and fallback candidates. I would evaluate offline ranking and online utility with diversity, freshness and harmful-feedback-loop checks. An LLM can interpret intent or explain recommendations, but it is not required for every ranking decision.

<details>
<summary>展开详解与追问</summary>

Explanation

Clicks are biased by what was previously shown. Cold start and delayed outcomes need separate treatment.

Follow-up

- How do you handle a new user?
  Use explicit preferences, contextual or popularity baselines and careful exploration rather than inventing a profile.

</details>
</details>
<!-- /interview-answer -->

- Q248 — Design a fraud detection system.（来源：[questions.md:289](interview/questions/questions.md)；[04-ai-system-design.md:55](interview/questions/04-ai-system-design.md)；[04-ai-system-design.md:105](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q248 -->
<details>
<summary>展开答案 · Q248</summary>

Interview Answer

I would define the action, such as approve, review or block, and its false-positive and false-negative costs. A low-latency scoring path uses available transaction features and rules, while a separate pipeline learns from delayed and corrected fraud labels. I would monitor calibration, drift, review capacity and adversarial adaptation. High-risk cases have an auditable review or appeal path.

<details>
<summary>展开详解与追问</summary>

Explanation

Blocked transactions may lack eventual fraud labels, creating selection bias. Features must reflect information available at authorization time.

Follow-up

- Which metric matters most?
  The operating-point business cost and detection/false-positive rates under review constraints, not accuracy on an artificially balanced test set.

</details>
</details>
<!-- /interview-answer -->

- Q249 — Design a chatbot architecture end-to-end (LLM + backend + data flow).（来源：[questions.md:290](interview/questions/questions.md)）

<!-- interview-answer Q249 -->
<details>
<summary>展开答案 · Q249</summary>

Interview Answer

I would start with authenticated requests, durable conversation state and a context builder that retrieves only permitted information. A model gateway handles deadlines, streaming and usage; validated tools perform exact actions. The response layer retains citations and explicit failure states. I would test conversation ordering, tool errors, missing evidence and access boundaries, then measure task success, latency and cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Store logical turns and generation attempts separately so a retry does not overwrite history or repeat an action.

Follow-up

- What is the simplest useful first version?
  A narrow task with a small trusted corpus, no unnecessary autonomous tools and a reproducible evaluation set.

</details>
</details>
<!-- /interview-answer -->

- Q250 — Design a distributed job queue for 100k+ GPU training jobs with preemption and checkpointing.（来源：[questions.md:291](interview/questions/questions.md)；[04-ai-system-design.md:68](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q250 -->
<details>
<summary>展开答案 · Q250</summary>

Interview Answer

I would maintain durable job specifications and priorities, a scheduler aware of GPU type/topology, and worker leases with heartbeats. Preemption policy considers checkpoint cost and fairness; checkpoints include model, optimizer and data progress. Results publish idempotently, and failed nodes trigger recovery. I would measure queue delay, utilization, wasted work and starvation rather than only completed-job count.

<details>
<summary>展开详解与追问</summary>

Explanation

Gang scheduling may be necessary for multi-GPU jobs. A checkpoint that lacks the input position can repeat or skip training data.

Follow-up

- How do you avoid endless preemption?
  Use priority aging, minimum run windows and preemption costs in the scheduling policy.

</details>
</details>
<!-- /interview-answer -->

- Q251 — Design a temperature prediction system handling inconsistent global datasets (hybrid ML-LLM).（来源：[questions.md:292](interview/questions/questions.md)）

<!-- interview-answer Q251 -->
<details>
<summary>展开答案 · Q251</summary>

Interview Answer

I would normalize units, timestamps, station identities and missingness while preserving source quality indicators. A numerical forecasting baseline uses temporally valid weather features and appropriate spatial/time holdouts. The LLM can assist metadata interpretation or explain forecasts, but does not replace the numerical model or invent observations. I would evaluate by region, horizon and extreme conditions.

<details>
<summary>展开详解与追问</summary>

Explanation

Random row splitting can leak nearby stations or adjacent times. Unit conversion errors can overwhelm model improvements.

Follow-up

- How would you handle an ambiguous unit?
  Flag it for source validation instead of letting the LLM silently choose Celsius or Fahrenheit.

</details>
</details>
<!-- /interview-answer -->

- Q252 — Design an end-to-end RAG service: data ingestion, indexing, retrieval, generation, evals, tracing, guardrails.（来源：[questions.md:293](interview/questions/questions.md)）

<!-- interview-answer Q252 -->
<details>
<summary>展开答案 · Q252</summary>

Interview Answer

I would version the ingestion, chunking and indexing pipeline, including provenance, permissions and deletion handling. Query-time retrieval and reranking produce evidence for a constrained cited answer. Traces attribute failures to each stage, and evaluation includes retrieval metrics, answer support, abstention and access checks. Release gates compare quality, latency and cost with a frozen baseline.

<details>
<summary>展开详解与追问</summary>

Explanation

A production service also needs update/rebuild strategy, timeouts and an explicit outcome when retrieval or the model fails.

Follow-up

- How do you diagnose a regression?
  Reproduce a failing case with the prior and candidate configurations and compare evidence and outputs stage by stage.

</details>
</details>
<!-- /interview-answer -->

- Q253 — Design a rate-limiter and code the core part.（来源：[questions.md:294](interview/questions/questions.md)）

<!-- interview-answer Q253 -->
<details>
<summary>展开答案 · Q253</summary>

Interview Answer

I would clarify rate, burst and scope, then implement a token bucket using a monotonic clock. Elapsed time refills tokens up to capacity; admission atomically consumes a token. A process-local bucket is only a local core. A distributed service needs atomic shared state or partitioned budgets, plus explicit fail-open or fail-closed behavior appropriate to the endpoint.

<details>
<summary>展开详解与追问</summary>

Explanation

Each local check is O(1) time and O(1) state per key. Inactive keys need expiry so user cardinality does not cause unlimited memory growth.

Follow-up

- Why use both a rate and concurrency limit?
  A slow downstream can exhaust resources even when the arrival rate remains within its quota.

Reference Code

```python
import time
import threading


class TokenBucket:
    """Thread-safe local bucket; not a distributed rate limit."""
    def __init__(self, rate, capacity, clock=time.monotonic):
        if rate < 0 or capacity <= 0:
            raise ValueError("invalid rate/capacity")
        self.rate, self.capacity, self.clock = rate, capacity, clock
        self.tokens, self.updated = float(capacity), clock()
        self.lock = threading.Lock()

    def allow(self, amount=1):
        if amount <= 0:
            raise ValueError("positive amount required")
        with self.lock:
            now = self.clock()
            if now < self.updated:
                raise ValueError("clock moved backward")
            self.tokens = min(self.capacity, self.tokens + (now - self.updated) * self.rate)
            self.updated = now
            if self.tokens < amount:
                return False
            self.tokens -= amount
            return True
```

</details>
</details>
<!-- /interview-answer -->

- Q254 — Scaling AI systems to millions of users: latency and cost trade-offs, batching, caching, streaming, failure modes.（来源：[questions.md:295](interview/questions/questions.md)）

<!-- interview-answer Q254 -->
<details>
<summary>展开答案 · Q254</summary>

Interview Answer

I would derive a peak token workload and service objective, then independently scale state, retrieval and model execution. Batching improves utilization but can increase waiting; streaming improves perceived response but not necessarily completion time; caches require freshness and authorization. I would bound queues and retries, budget fallbacks and test provider outages. Quality and cost per successful task remain release criteria.

<details>
<summary>展开详解与追问</summary>

Explanation

There is no single millions-of-users architecture. Workload shape and acceptable degradation determine the useful design.

Follow-up

- How do you protect the service during failure?
  Shed excess load, bound retries and preserve a clearly limited fallback instead of amplifying demand.

</details>
</details>
<!-- /interview-answer -->

- Q255 — Design ChatGPT's cross-conversation memory feature.（来源：[questions.md:296](interview/questions/questions.md)；[04-ai-system-design.md:56](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q255 -->
<details>
<summary>展开答案 · Q255</summary>

Interview Answer

I would store user-scoped, provenance-aware memory records separately from conversation transcripts, with explicit creation, correction and deletion controls. Retrieval selects relevant memories for a new conversation under a token budget. Sensitive facts and uncertain inferences need special handling. I would evaluate usefulness, stale recall and cross-user leakage; this is a proposed design, not a claim about ChatGPT internals.

<details>
<summary>展开详解与追问</summary>

Explanation

A remembered statement can be wrong or malicious. Memory cannot grant permissions or override current user corrections.

Follow-up

- What happens when a user deletes a memory?
  Remove or invalidate it in the authoritative store and propagate deletion to indexes and caches with a documented completion state.

</details>
</details>
<!-- /interview-answer -->

- Q256 — Design a multi-step agentic workflow (meeting scheduling, code review, email campaigns).（来源：[questions.md:297](interview/questions/questions.md)；[04-ai-system-design.md:57](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q256 -->
<details>
<summary>展开答案 · Q256</summary>

Interview Answer

I would represent the workflow as durable states with typed inputs, allowed transitions and bounded model choices. Tools expose narrow actions; permissions and approval govern consequential effects such as sending or booking. Each step records success or failure and supports idempotent recovery. I would evaluate complete scenarios including ambiguity, rejection, cancellation and a crash after an external action.

<details>
<summary>展开详解与追问</summary>

Explanation

Compensation is not always a perfect rollback: an email cannot truly be unsent. Design confirmation before irreversible effects.

Follow-up

- How do you handle a changed approval payload?
  Require renewed approval because the old decision does not authorize different parameters.

</details>
</details>
<!-- /interview-answer -->


<a id="day-20"></a>

### 周五 10/30

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Debugging; Code Reading; Refactoring<br>LeetCode: [394. Decode String](https://leetcode.com/problems/decode-string/); [71. Simplify Path](https://leetcode.com/problems/simplify-path/); [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)<br>资料：[Stacks](Study%20topics/stacks.html); [Debugging](Study%20topics/debugging.html); [Refactoring](Study%20topics/refactoring.html); [Code Review](Study%20topics/code-review.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Feature Engineering; Interpretability; Feature Importance](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [Notebook](notebook/10_feature_engineering_interpretability_feature_importance.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [RAG Evaluation and Retrieval Trade-offs](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Reproduction and Project Deep Dive<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-20) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design; System Design Questions / Traditional System Design — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities<br>当日概念索引（按需）：[Clean-Environment Reproduction](Study%20topics/clean-environment-reproduction.html); [README](Study%20topics/readme.html); [Demo](Study%20topics/demo.html); [AI-Assisted Code Review](Study%20topics/ai-assisted-code-review.html) |

刷题对应说明：LeetCode 对应解析与数据处理；Debugging、Code Reading 和 Refactoring 使用项目代码。

<!-- quantvault-day 20 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3080 · Feature Importance in Tree Models and What a SHAP Value Measures](https://quantvault.org/problems.html?id=3080) · Machine Learning · Medium

先修：SHAP把某个预测相对基准的差异分摊到特征，取决于所用基准与方法。

本次范围：Conceptual。区分树内Importance、Permutation Importance与SHAP，说明相关特征及因果解释的限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-20)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q257 — Design a content/policy violation detection system.（来源：[questions.md:298](interview/questions/questions.md)；[04-ai-system-design.md:58](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q257 -->
<details>
<summary>展开答案 · Q257</summary>

Interview Answer

I would version the policy, define labeled examples and escalation criteria, and build a calibrated classification baseline. A layered service can use deterministic checks and models for contextual judgments. Evaluation includes false approvals and false refusals across languages and scenarios, with human review for consequential uncertainty. Monitoring tracks policy drift and adversarial adaptation.

<details>
<summary>展开详解与追问</summary>

Explanation

Context matters: quotation, education and abuse can contain the same terms. Keyword filters alone are inadequate.

Follow-up

- How do policy updates reach the system?
  Version rules and labels, rerun regression cases and roll out the new behavior with explicit comparison and rollback criteria.

</details>
</details>
<!-- /interview-answer -->

- Q258 — Design a unified query engine across dispersed data sources like email, calendar, documents, and chat.（来源：[questions.md:299](interview/questions/questions.md)；[04-ai-system-design.md:59](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q258 -->
<details>
<summary>展开答案 · Q258</summary>

Interview Answer

I would use connectors that preserve source permissions, stable IDs, timestamps and change/deletion events. A query planner chooses relevant sources and retrieves within the authenticated user's scope, then merges and ranks results with provenance. The answer layer cites source records and exposes incomplete connector results. Caches must not bypass source authorization or freshness rules.

<details>
<summary>展开详解与追问</summary>

Explanation

Calendar, email and documents have different schemas and update rates. A unified interface need not erase those semantics.

Follow-up

- How do you answer when one source is unavailable?
  Return a clearly scoped partial result or fail the task if completeness is required, rather than claiming a complete search.

</details>
</details>
<!-- /interview-answer -->

- Q259 — How would you implement an AI application from start to finish, from kickoff meeting through deployment? (IBM)（来源：[questions.md:300](interview/questions/questions.md)）

<!-- interview-answer Q259 -->
<details>
<summary>展开答案 · Q259</summary>

Interview Answer

I would begin with the user problem, baseline process, error costs and success criteria. I would inspect data and permissions, build a narrow end-to-end prototype and an evaluation set, then iterate on the measured failures. Before deployment I would add tests, observability, budgets, release gates and rollback. I would document limitations and hand over an operable workflow, not just a demo.

<details>
<summary>展开详解与追问</summary>

Explanation

Stakeholder agreement on acceptable failure is an early requirement, not a final sign-off after implementation.

Follow-up

- When would you stop the project?
  When evidence shows the problem lacks value, data access is infeasible or the quality-cost constraints cannot be met within scope.

</details>
</details>
<!-- /interview-answer -->

- Q260 — How would you design a scalable and reliable automation workflow? What considerations for error handling, monitoring, and debugging?（来源：[questions.md:301](interview/questions/questions.md)）

<!-- interview-answer Q260 -->
<details>
<summary>展开答案 · Q260</summary>

Interview Answer

I would design a durable state machine with idempotent steps, explicit deadlines and retry classification. A transactional outbox bridges database changes and queued work where needed. Traces and state history make each run explainable, and poison tasks reach a terminal or review state. Scaling adds workers only where coordination and downstream limits remain safe.

<details>
<summary>展开详解与追问</summary>

Explanation

Retries after an ambiguous side effect need a durable request key or status reconciliation. A queue alone does not create reliable automation.

Follow-up

- How do you test recovery?
  Inject failures before and after state and result commits, then verify a single logical outcome after redelivery.

</details>
</details>
<!-- /interview-answer -->

- Q261 — Design GitHub Actions.（来源：[questions.md:307](interview/questions/questions.md)；[04-ai-system-design.md:118](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q261 -->
<details>
<summary>展开答案 · Q261</summary>

Interview Answer

I would model versioned workflow definitions as job DAGs triggered by repository events. A scheduler dispatches jobs to isolated runners with scoped short-lived credentials, logs and artifacts. Dependency state is durable; retries and cancellation have explicit semantics. Untrusted pull requests must not gain privileged secrets. I would measure queue wait, execution success, fairness and runner recovery.

<details>
<summary>展开详解与追问</summary>

Explanation

This is an Actions-like design, not an assertion about GitHub's internals. Build caches are untrusted inputs unless integrity and scope are enforced.

Follow-up

- How do you prevent a malicious PR from stealing deployment credentials?
  Separate untrusted validation from privileged release jobs and restrict credential issuance to approved identities and contexts.

</details>
</details>
<!-- /interview-answer -->

- Q262 — Design Slack.（来源：[questions.md:308](interview/questions/questions.md)）

<!-- interview-answer Q262 -->
<details>
<summary>展开答案 · Q262</summary>

Interview Answer

I would separate durable channel messages, membership/permissions, search and presence. Persistent connections deliver events, while sequence IDs and cursors support reconnect and history retrieval. The database is authoritative; pub/sub is a delivery mechanism, not the only record. I would define ordering within a channel, duplicate handling, offline notifications and multi-region trade-offs.

<details>
<summary>展开详解与追问</summary>

Explanation

Presence can be eventually consistent, while membership changes need stricter enforcement. A message fan-out strategy depends on channel size.

Follow-up

- How does a reconnecting client recover missed messages?
  Resume from its last acknowledged channel cursor and deduplicate by message ID.

</details>
</details>
<!-- /interview-answer -->

- Q263 — Design Online Chess.（来源：[questions.md:309](interview/questions/questions.md)；[04-ai-system-design.md:119](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q263 -->
<details>
<summary>展开答案 · Q263</summary>

Interview Answer

I would use an authoritative game server to validate moves, turns and clocks, with durable game events and reconnectable sessions. Clients may show optimistic UI but cannot decide legal state. Matchmaking and spectator delivery scale separately. I would define disconnect, timeout and cheating policies and test repeated or out-of-order move submissions.

<details>
<summary>展开详解与追问</summary>

Explanation

A monotonic server clock and clearly defined lag policy matter more than trusting client timestamps.

Follow-up

- How do you prevent a move from being applied twice?
  Require the expected game version and a unique move/request ID before committing the event.

</details>
</details>
<!-- /interview-answer -->

- Q264 — Design a Payment System.（来源：[questions.md:310](interview/questions/questions.md)）

<!-- interview-answer Q264 -->
<details>
<summary>展开答案 · Q264</summary>

Interview Answer

I would define payment states and an immutable ledger, validate requests and use idempotency keys for every logical payment. Provider calls are reconciled through durable state and verified callbacks because timeouts can be ambiguous. Transactions protect local invariants; external effects need recovery and reconciliation. I would design refunds, disputes and auditability explicitly with the relevant compliance owners.

<details>
<summary>展开详解与追问</summary>

Explanation

Use integer minor units or suitable decimal types, not binary floating point for ledger money. Exactly-once delivery is not assumed.

Follow-up

- What if the provider charged the card but your request timed out?
  Query or reconcile the existing payment using its identifier; do not create a new charge blindly.

</details>
</details>
<!-- /interview-answer -->

- Q265 — Design a Webhook Callback System.（来源：[questions.md:311](interview/questions/questions.md)）

<!-- interview-answer Q265 -->
<details>
<summary>展开答案 · Q265</summary>

Interview Answer

I would persist outgoing events and delivery attempts, sign payloads with timestamped verification data and use idempotent event IDs. A bounded retry schedule handles transient failures; exhausted events enter a review or dead-letter path. Recipients acknowledge quickly and process durably. I would document ordering, duplicates and retention rather than promise exactly-once delivery.

<details>
<summary>展开详解与追问</summary>

Explanation

Endpoint URLs require SSRF protections, and secrets rotate with a compatibility window. A timeout can occur after successful receipt.

Follow-up

- What must the receiver do?
  Verify authenticity, deduplicate the event ID and record acceptance before performing the logical effect.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 5 周：APIs, Databases and Deployment

<a id="day-21"></a>

### 周一 11/2

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: API Clients; Input Validation<br>LeetCode: [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/); [468. Validate IP Address](https://leetcode.com/problems/validate-ip-address/)<br>资料：[API Clients](Study%20topics/api-clients.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Financial Text-to-SQL](Study%20topics/financial-text-to-sql.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Snowflake Setup and Sample SQL<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-21) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Traditional System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Access Control](Study%20topics/access-control.html); [Snowflake](Study%20topics/snowflake.html); [Financial Statement Analytics Assistant](Study%20topics/financial-statement-analytics-assistant.html) |


刷题对应说明：LeetCode 对应 Validation 与 Parsing；API Clients 使用自定义工程练习。

<!-- quantvault-day 21 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1939 · Cross-Validation Leakage in Financial Time Series](https://quantvault.org/problems.html?id=1939) · Machine Learning · Medium

先修：先读Time-Series Splits、Walk-Forward Validation。

本次范围：Case outline。画时间轴，指出随机切分、提前标准化和重叠目标怎样造成泄漏。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-21)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q266 — Design TinyURL (Bitly).（来源：[questions.md:312](interview/questions/questions.md)）

<!-- interview-answer Q266 -->
<details>
<summary>展开答案 · Q266</summary>

Interview Answer

I would map a compact unique code to a validated destination URL, store it durably and cache hot redirects. Creation includes abuse controls and optional expiry; reads return an appropriate redirect status. I would clarify custom aliases, analytics and consistency requirements. Code generation must handle collisions, and expired or blocked links must invalidate caches.

<details>
<summary>展开详解与追问</summary>

Explanation

Sequential IDs are simple but enumerable; random IDs need enough space and collision checks. Analytics can be asynchronous.

Follow-up

- How do you disable an abusive link quickly?
  Update the authoritative status and propagate cache invalidation, with a short maximum stale interval if required.

</details>
</details>
<!-- /interview-answer -->

- Q267 — Design Instagram / TikTok feed.（来源：[questions.md:313](interview/questions/questions.md)）

<!-- interview-answer Q267 -->
<details>
<summary>展开答案 · Q267</summary>

Interview Answer

I would separate content storage, social relationships, candidate generation, ranking and feed delivery. Fan-out-on-write works for ordinary publishers, while high-fan-out accounts may be merged at read time. Media is served through object storage/CDN. I would evaluate relevance, freshness and harmful feedback loops, and define pagination stability and deletion propagation.

<details>
<summary>展开详解与追问</summary>

Explanation

A feed is both a distributed data problem and a ranking problem. Engagement alone can reward undesirable content.

Follow-up

- How do you avoid repeated items during pagination?
  Use stable cursors tied to a ranking/session snapshot or a defined seen-item policy rather than offset-only pagination.

</details>
</details>
<!-- /interview-answer -->

- Q268 — Design Twitter / X (timeline, posting, followers, trending topics).（来源：[questions.md:314](interview/questions/questions.md)）

<!-- interview-answer Q268 -->
<details>
<summary>展开答案 · Q268</summary>

Interview Answer

I would store posts and follow relationships separately, distribute ordinary timeline updates asynchronously and handle celebrity fan-out with a hybrid approach. Reads merge candidates, apply visibility rules and rank within a latency budget. Trending computation uses streaming aggregates with abuse controls. Deletion, blocking and privacy updates must reach timelines and caches.

<details>
<summary>展开详解与追问</summary>

Explanation

Per-user timeline ordering can be approximate if the product permits it, but authorization cannot be approximated away.

Follow-up

- What happens after a user blocks another account?
  Enforce the rule at read time as well as propagating removal from materialized timelines.

</details>
</details>
<!-- /interview-answer -->

- Q269 — Design YouTube / Netflix video streaming platform.（来源：[questions.md:315](interview/questions/questions.md)；[04-ai-system-design.md:121](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q269 -->
<details>
<summary>展开答案 · Q269</summary>

Interview Answer

I would use asynchronous upload, validation and transcoding into multiple bitrate formats, then distribute immutable media through object storage and a CDN. Playback retrieves a manifest and adapts quality to network conditions. Metadata, entitlement checks, recommendations and viewing progress are separate services. I would measure startup delay, buffering, playback errors and encoding cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Video traffic is dominated by bytes delivered, not database QPS. Failed transcodes need resumable durable jobs.

Follow-up

- How do you handle a popular new release?
  Pre-position content, protect origin capacity and validate CDN/entitlement behavior under a realistic burst.

</details>
</details>
<!-- /interview-answer -->

- Q270 — Design Uber (ride-sharing backend: matching, ETA, pricing surges).（来源：[questions.md:316](interview/questions/questions.md)；[04-ai-system-design.md:122](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q270 -->
<details>
<summary>展开答案 · Q270</summary>

Interview Answer

I would separate driver location ingestion, nearby-driver search, matching, trip state and payments. Location updates can tolerate some staleness, but assigning a driver to a trip needs an atomic ownership decision. ETA and pricing use validated data and explicit policies. I would test reconnects, duplicate requests and cancellations and monitor matching quality and tail latency.

<details>
<summary>展开详解与追问</summary>

Explanation

Geospatial indexing narrows candidates; dispatch decisions still need freshness and concurrency checks.

Follow-up

- How do you prevent two riders from claiming the same driver?
  Use a conditional state transition or transactional reservation with expiry and a single authoritative assignment.

</details>
</details>
<!-- /interview-answer -->

- Q271 — Design WhatsApp / Messenger (1:1 + group chat at global scale).（来源：[questions.md:317](interview/questions/questions.md)；[04-ai-system-design.md:123](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q271 -->
<details>
<summary>展开答案 · Q271</summary>

Interview Answer

I would store durable messages and membership, maintain persistent connection gateways and deliver events with sequence IDs and acknowledgments. Offline clients resume from cursors and deduplicate messages. Group fan-out scales separately from storage, and encryption requirements influence server-side search and moderation. I would define ordering, delivery receipts, retention and cross-device key/state synchronization.

<details>
<summary>展开详解与追问</summary>

Explanation

Delivery, receipt and read are different states. A push notification is not proof that the message reached the application.

Follow-up

- What happens when a client reconnects?
  Fetch missing events from durable history and reconcile acknowledgments rather than rely on transient pub/sub history.

</details>
</details>
<!-- /interview-answer -->

- Q272 — Design a distributed key-value store (like DynamoDB / Cassandra).（来源：[questions.md:318](interview/questions/questions.md)；[04-ai-system-design.md:116](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q272 -->
<details>
<summary>展开答案 · Q272</summary>

Interview Answer

I would partition keys, replicate data and define consistency, durability and conflict semantics before choosing quorum or leader-based protocols. The design needs membership changes, rebalancing, failure detection, repair and bounded hot-key handling. I would distinguish per-key operations from multi-key transactions and benchmark under failures, not just healthy-node throughput.

<details>
<summary>展开详解与追问</summary>

Explanation

Dynamo-style conflict resolution and strongly consistent leader replication make different trade-offs. Quorum arithmetic alone does not guarantee every consistency property.

Follow-up

- How do you handle a hot key?
  Cache or split the workload when semantics permit, while avoiding contradictory writes to multiple independent owners.

</details>
</details>
<!-- /interview-answer -->

- Q273 — Design Google Docs collaborative editing (real-time, eventually consistent).（来源：[questions.md:319](interview/questions/questions.md)；[04-ai-system-design.md:124](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q273 -->
<details>
<summary>展开答案 · Q273</summary>

Interview Answer

I would model edits as operations with stable identities and use a proven OT or CRDT approach for convergence. A collaboration service persists operation history, distributes updates and supports reconnects and snapshots. Access control, undo and document-version semantics require explicit design. I would test concurrent edits, offline merges and duplicate delivery rather than invent an ad hoc merge algorithm.

<details>
<summary>展开详解与追问</summary>

Explanation

Convergence means replicas agree, not necessarily that every merge matches user intent. Rich text and undo complicate the model.

Follow-up

- Why not just use last-write-wins for the whole document?
  It loses concurrent edits and fails the core collaborative-editing requirement.

</details>
</details>
<!-- /interview-answer -->

- Q274 — Design Yelp / Google Maps nearby search.（来源：[questions.md:320](interview/questions/questions.md)）

<!-- interview-answer Q274 -->
<details>
<summary>展开答案 · Q274</summary>

Interview Answer

I would index locations by a spatial scheme such as cells or a tree, retrieve nearby candidates and apply exact distance, category and availability filters. Ranking can combine proximity and relevance. Updates and cached results need freshness rules. I would clarify geographic coverage, radius behavior and edge cases near cell or international-date boundaries.

<details>
<summary>展开详解与追问</summary>

Explanation

A spatial bucket is a candidate filter, not an exact distance test. Dense cities and sparse regions produce different candidate loads.

Follow-up

- How do you expand an empty search?
  Increase the radius or neighboring cells under a bounded policy and tell the user when the scope changes.

</details>
</details>
<!-- /interview-answer -->

- Q275 — Design a rate limiter (global, per-user, distributed).（来源：[questions.md:321](interview/questions/questions.md)；[04-ai-system-design.md:117](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q275 -->
<details>
<summary>展开答案 · Q275</summary>

Interview Answer

I would define per-user and global quotas, burst allowance and failure behavior. Token buckets or sliding-window counters run through atomic shared operations, with local budgets where controlled approximation is acceptable. I would separately cap concurrent requests and expire inactive keys. Tests cover simultaneous admissions, clock behavior, hot tenants and limiter-store failure.

<details>
<summary>展开详解与追问</summary>

Explanation

Strict global limits add coordination latency. Regional budget allocation improves availability but needs an explicit overshoot bound.

Follow-up

- Should the limiter fail open?
  Only if the endpoint's risk and capacity policy allows it; expensive or sensitive operations may need fail-closed behavior.

</details>
</details>
<!-- /interview-answer -->


<a id="day-22"></a>

### 周二 11/3

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: PostgreSQL Schema Design; Primary and Foreign Keys<br>LeetCode: [1934. Confirmation Rate](https://leetcode.com/problems/confirmation-rate/); [1251. Average Selling Price](https://leetcode.com/problems/average-selling-price/); [1633. Percentage of Users Attended a Contest](https://leetcode.com/problems/percentage-of-users-attended-a-contest/)<br>资料：[PostgreSQL Schema Design](Study%20topics/postgresql-schema-design.html); [Primary and Foreign Keys](Study%20topics/primary-and-foreign-keys.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Financial Text-to-SQL](Study%20topics/financial-text-to-sql.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: SEC Ingestion and Raw Snapshots<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-22) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Traditional System Design; System Design Questions / System Troubleshooting — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[SEC Financial Data](Study%20topics/sec-financial-data.html) |


刷题对应说明：LeetCode 对应查询练习；Schema Design 与主外键使用 PostgreSQL。

<!-- quantvault-day 22 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2001 · Lookahead Bias From Universe Membership Leakage](https://quantvault.org/problems.html?id=2001) · Machine Learning · Medium
- [#1980 · Handling Delayed Features in a Regression Model](https://quantvault.org/problems.html?id=1980) · Regression · Medium

先修：Point-in-Time只使用预测时已知信息，期末日期不等于公布日期。

本次范围：Point-in-time audit。分别检查股票池成员和延迟发布特征；列出Observation Date、Publication Date、Prediction Date。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-22)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q276 — Design Discord (voice + text chat, millions concurrent in voice channels).（来源：[questions.md:322](interview/questions/questions.md)）

<!-- interview-answer Q276 -->
<details>
<summary>展开答案 · Q276</summary>

Interview Answer

I would separate text messaging from real-time media. Text uses durable history and reconnectable gateways; voice uses regional media servers such as SFUs with session signaling and congestion handling. Presence and membership coordinate access. I would size by concurrent streams and bandwidth, test regional failure and measure join time, jitter, loss and audio quality.

<details>
<summary>展开详解与追问</summary>

Explanation

Routing every media packet through the same service that stores messages would couple very different workloads.

Follow-up

- Why use an SFU instead of full peer-to-peer mesh?
  Mesh upload and connection counts grow poorly with group size; an SFU centralizes forwarding without mixing all media into one stream.

</details>
</details>
<!-- /interview-answer -->

- Q277 — Design Stripe payment processing system (high consistency, PCI compliance).（来源：[questions.md:323](interview/questions/questions.md)）

<!-- interview-answer Q277 -->
<details>
<summary>展开答案 · Q277</summary>

Interview Answer

I would use a ledger and explicit payment state machine, idempotent request handling, provider reconciliation and verified event delivery. Sensitive payment data should be tokenized through appropriate certified integrations where possible, with minimal storage and scoped access. I would work with security/compliance specialists on the actual requirements. High consistency applies to defined ledger invariants, not a blanket claim about every distributed component.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a Stripe-like design exercise, not a claim about Stripe internals or a complete PCI compliance recipe.

Follow-up

- How do refunds relate to the original charge?
  They are separately identified ledger events constrained by the original payment and remaining refundable amount.

</details>
</details>
<!-- /interview-answer -->

- Q278 — Design a distributed job scheduler (like AWS Batch at planetary scale).（来源：[questions.md:324](interview/questions/questions.md)）

<!-- interview-answer Q278 -->
<details>
<summary>展开答案 · Q278</summary>

Interview Answer

I would divide the scheduler into regional capacity domains with durable job records, fair admission, resource-aware placement and worker leases. Global policy decides where work may run; local schedulers handle rapid placement. Checkpoints and idempotent publication support recovery. I would define priority, starvation prevention and data-locality constraints rather than build one globally serialized scheduling loop.

<details>
<summary>展开详解与追问</summary>

Explanation

Planetary scale is underspecified; quantify jobs, regions, dependencies and resource types before estimating capacity.

Follow-up

- What if a region disconnects?
  Fence or limit its ownership according to the consistency policy and avoid dispatching the same non-idempotent job independently elsewhere.

</details>
</details>
<!-- /interview-answer -->

- Q279 — Design a notification system that can send 1B notifications/day with <1% loss.（来源：[questions.md:325](interview/questions/questions.md)）

<!-- interview-answer Q279 -->
<details>
<summary>展开答案 · Q279</summary>

Interview Answer

One billion notifications per day is roughly 11,574 per second on average, with peaks requiring more headroom. I would use durable events, partitioned queues, channel-specific workers, provider limits and retries with deduplication. I would define loss precisely: accepted, handed to provider or delivered to a device. Unsubscribe and preference checks precede sending, and unrecoverable failures remain visible.

<details>
<summary>展开详解与追问</summary>

Explanation

A provider acceptance receipt is not proof that a human saw the notification. The loss objective needs a measurement window and denominator.

Follow-up

- How do you avoid duplicate sends after a timeout?
  Use stable notification IDs, provider idempotency where available and reconciliation or a documented at-least-once trade-off.

</details>
</details>
<!-- /interview-answer -->

- Q280 — Design a strongly-consistent distributed database (Spanner / CockroachDB-like).（来源：[questions.md:326](interview/questions/questions.md)）

<!-- interview-answer Q280 -->
<details>
<summary>展开答案 · Q280</summary>

Interview Answer

I would define the required consistency level, then use consensus-replicated shards and a transaction protocol for operations spanning shards. The system needs leader election, durable logs, MVCC, recovery and safe membership changes. Geographic latency is part of the contract, and clock assumptions must be explicit. I would not equate generic timestamps with Spanner's specific time architecture.

<details>
<summary>展开详解与追问</summary>

Explanation

Consensus solves agreement within a replica group; multi-shard atomicity and serializable isolation require additional mechanisms.

Follow-up

- What is the main geographic trade-off?
  Synchronous coordination across distant regions raises write latency but supports stronger guarantees during normal operation.

</details>
</details>
<!-- /interview-answer -->

- Q281 — Design a high-frequency trading exchange matching engine.（来源：[questions.md:327](interview/questions/questions.md)）

<!-- interview-answer Q281 -->
<details>
<summary>展开答案 · Q281</summary>

Interview Answer

I would focus first on deterministic price-time matching within an ordered partition, normally per instrument or matching domain. Validated orders enter a sequence, update the order book and produce an append-only event log for replay and audit. Risk checks, market data and clearing are separate boundaries. I would define failover, duplicate-order handling and latency measurement without claiming distributed unordered writes are safe.

<details>
<summary>展开详解与追问</summary>

Explanation

For an HFT exchange, determinism and ordering can be more important than maximizing threads within one order book. Durable acknowledgment semantics must be explicit.

Follow-up

- How do you recover the book?
  Replay a validated snapshot plus ordered events and verify sequence continuity before resuming matching.

</details>
</details>
<!-- /interview-answer -->

- Q282 — Our p99 latency went from 50ms to 2s overnight - how would you debug and fix?（来源：[questions.md:328](interview/questions/questions.md)）

<!-- interview-answer Q282 -->
<details>
<summary>展开答案 · Q282</summary>

Interview Answer

I would verify the percentile, time window and traffic mix, then compare traces and deployment events before and after the change. I would inspect queueing, dependency latency, retries, saturation, GC and database plans, segmenting by endpoint and region. A reversible deployment regression can be rolled back while diagnosis continues. I would validate recovery under the same load.

<details>
<summary>展开详解与追问</summary>

Explanation

A small increase in service time near saturation can create a very large queueing increase. Averages can hide the affected path.

Follow-up

- What is your first useful comparison?
  Slow-request traces versus the previous healthy version for the same request class and input size.

</details>
</details>
<!-- /interview-answer -->

- Q283 — Design a global WebSocket service (10M+ concurrent connections).（来源：[questions.md:329](interview/questions/questions.md)）

<!-- interview-answer Q283 -->
<details>
<summary>展开答案 · Q283</summary>

Interview Answer

I would use regional connection gateways, a shared routing/presence layer and durable application event stores. Gateways maintain bounded per-connection buffers, heartbeats and backpressure, while clients resume using cursors after reconnect. I would size file descriptors, memory and bandwidth and test mass reconnect storms. Connection count alone does not describe message fan-out or throughput.

<details>
<summary>展开详解与追问</summary>

Explanation

Avoid routing every event through a single global registry. Presence may be approximate, but authorized message delivery cannot be.

Follow-up

- What is the dangerous failure pattern?
  A region outage causing millions of clients to reconnect and authenticate simultaneously without jitter or admission limits.

</details>
</details>
<!-- /interview-answer -->

- Q284 — Design a global feature flag / config service (multi-region, zero-downtime rollouts).（来源：[questions.md:330](interview/questions/questions.md)）

<!-- interview-answer Q284 -->
<details>
<summary>展开答案 · Q284</summary>

Interview Answer

I would maintain a versioned configuration control plane and distribute immutable snapshots to regional caches and SDKs. Evaluation should usually happen locally with stable user bucketing. Signed or integrity-checked updates, last-known-good values and explicit defaults allow safe operation during outages. Rollout, audit, kill switches and schema compatibility need tests before broad deployment.

<details>
<summary>展开详解与追问</summary>

Explanation

A feature flag can change business behavior instantly; access to the control plane is consequential. Avoid a remote network request on every application decision.

Follow-up

- How do you keep an experiment assignment stable?
  Use a deterministic hash of experiment version and the selected assignment unit, such as user ID.

</details>
</details>
<!-- /interview-answer -->

- Q285 — A system's 95th percentile latency spiked from 100ms to 2000ms. Identify bottlenecks rapidly.（来源：[questions.md:334](interview/questions/questions.md)）

<!-- interview-answer Q285 -->
<details>
<summary>展开答案 · Q285</summary>

Interview Answer

I would confirm the p95 measurement and identify which endpoints, regions or tenants changed. Traces and saturation metrics distinguish database, model-provider, network and queueing delays. I would inspect recent releases, traffic and retry changes, mitigate with a targeted rollback or load shedding, then reproduce the cause. I would not start by randomly scaling every service.

<details>
<summary>展开详解与追问</summary>

Explanation

Successful and failed requests can have different latency distributions. Changes in sampling or query mix can create an apparent spike.

Follow-up

- How do you know the fix worked?
  Compare the same workload and error rate over a suitable window, including tail traces rather than only the average.

</details>
</details>
<!-- /interview-answer -->


<a id="day-23"></a>

### 周三 11/4

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Async; Concurrency; Parallelism; GIL; Race Conditions<br>LeetCode: [1114. Print in Order](https://leetcode.com/problems/print-in-order/); [1115. Print FooBar Alternately](https://leetcode.com/problems/print-foobar-alternately/)<br>资料：[Async](Study%20topics/async.html); [Concurrency](Study%20topics/concurrency.html); [Parallelism](Study%20topics/parallelism.html); [GIL](Study%20topics/gil.html); [Race Conditions](Study%20topics/race-conditions.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Text-to-SQL Evaluation and Data Quality](Study%20topics/text-to-sql-evaluation-and-data-quality.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Financial Data Model and Quality Checks<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-23) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / System Troubleshooting; System Design Questions / Supplemental Designs — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Data Quality](Study%20topics/data-quality.html) |


刷题对应说明：LeetCode 1114 / 1115 对应同步问题；Async、GIL、Race Conditions 另用自定义 Python 练习。

<!-- quantvault-day 23 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2168 · Purged Walk-Forward Cross-Validation](https://quantvault.org/problems.html?id=2168) · Machine Learning · Hard

先修：Purging排除信息区间重叠的训练样本；Embargo是额外隔离期，长度取决于标签和依赖。

本次范围：Advanced: diagram only。用时间轴解释训练标签与验证区间重叠时需要purging；只画窗口和gap，不要求完整实现。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-23)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q286 — How would you handle a 10x traffic spike during a product launch?（来源：[questions.md:335](interview/questions/questions.md)）

<!-- interview-answer Q286 -->
<details>
<summary>展开答案 · Q286</summary>

Interview Answer

I would protect dependencies with admission limits, bounded queues and load shedding, then use pre-warmed capacity, safe caching and asynchronous processing where the product permits. I would prioritize essential requests and cap retries. Autoscaling is part of the response, but cold starts, provider quotas and database limits can prevent instant expansion. Afterward I would analyze rejected and degraded requests as well as successful ones.

<details>
<summary>展开详解与追问</summary>

Explanation

A launch plan should include realistic burst testing and a reversible feature or quality degradation strategy.

Follow-up

- What would you do before the launch?
  Measure peak capacity, secure provider quotas, warm critical resources and rehearse overload and rollback behavior.

</details>
</details>
<!-- /interview-answer -->

- Q287 — What happens if your primary data center goes offline for six hours?（来源：[questions.md:336](interview/questions/questions.md)）

<!-- interview-answer Q287 -->
<details>
<summary>展开答案 · Q287</summary>

Interview Answer

I would execute the documented disaster-recovery plan based on recovery-time and recovery-point objectives. Traffic moves only to a region with sufficient capacity and a safe view of state; fencing prevents conflicting writers. I would restore or promote data, verify critical workflows and communicate degraded behavior. After recovery, reconciliation and a controlled failback are necessary.

<details>
<summary>展开详解与追问</summary>

Explanation

Asynchronous replication may lose recent acknowledged data unless the contract prevents that. Failover availability and data consistency are separate promises.

Follow-up

- What must be decided before the outage?
  Which data loss and downtime are acceptable, who can promote replicas and how the former primary is fenced.

</details>
</details>
<!-- /interview-answer -->

- Q513 — Scale an AI chat feature to 1M daily users - discuss trade-offs（来源：[04-ai-system-design.md:39](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q513 -->
<details>
<summary>展开答案 · Q513</summary>

Interview Answer

I would turn one million daily users into a workload model: sessions per user, turns per session, peak arrival rate and token-length distribution. I would separate chat state, retrieval and model serving, then add admission control, safe caches and autoscaling with failure headroom. Streaming, batching and model routing are evaluated against task quality, latency and total cost.

<details>
<summary>展开详解与追问</summary>

Explanation

One million users is not one million simultaneous requests. Durable conversation state and tenant-scoped caches must survive replica changes.

Follow-up

- What would you measure before scaling?
  Peak QPS, concurrent generations, input/output tokens, provider quotas and the current critical path.

</details>
</details>
<!-- /interview-answer -->

- Q514 — Design an AI chatbot (ChatGPT, Claude chat service).（来源：[04-ai-system-design.md:47](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q514 -->
<details>
<summary>展开答案 · Q514</summary>

Interview Answer

I would first scope a chat product rather than claim to reproduce a company's private architecture. The core path is authenticated client, conversation store, context builder, model gateway and streamed response. Tool use runs through a controlled executor. I would add quotas, cancellation, retries, privacy controls and versioned evaluations, then scale using measured token load and queue latency.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate durable messages from transient generation attempts. Record partial, completed and failed responses so reconnecting does not duplicate an action or silently treat partial text as final.

Follow-up

- How do you support regeneration?
  Create a new generation attempt or branch referencing the same conversation state and record its model configuration.

</details>
</details>
<!-- /interview-answer -->

- Q515 — Design a Document Q&A Assistant / RAG system.（来源：[04-ai-system-design.md:48](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q515 -->
<details>
<summary>展开答案 · Q515</summary>

Interview Answer

I would ingest documents with source IDs, versions, layout and access metadata, then build lexical and vector retrieval. A query retrieves authorized evidence, optionally reranks it and generates a cited answer or an explicit insufficient-evidence response. I would evaluate multi-hop questions, tables, missing answers and citation support, with latency and cost instrumentation.

<details>
<summary>展开详解与追问</summary>

Explanation

The citation must support the associated claim, not merely point to a relevant document. Document-wide units and definitions need to survive chunking.

Follow-up

- What if relevant evidence spans several sections?
  Expand selected chunks to their parents or retrieve additional evidence with a bounded follow-up search.

</details>
</details>
<!-- /interview-answer -->

- Q516 — Design an AI co-pilot like GitHub Copilot（来源：[04-ai-system-design.md:49](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q516 -->
<details>
<summary>展开答案 · Q516</summary>

Interview Answer

I would design a streaming completion service with versioned editor context, cancellation, bounded retrieval and a model gateway. The client discards stale responses and lets the user choose whether to insert code. Larger refactoring tasks use a separate interaction path with tests and a reviewable diff. I would measure correctness, edit usefulness, latency and privacy compliance.

<details>
<summary>展开详解与追问</summary>

Explanation

Token streaming alone does not solve stale-context races. Applying partial code can produce invalid intermediate states.

Follow-up

- How do you avoid wasting compute?
  Debounce, cancel superseded requests and limit context to the most relevant permitted code.

</details>
</details>
<!-- /interview-answer -->

- Q517 — Design an AI-powered Candidate Sourcing System.（来源：[04-ai-system-design.md:52](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q517 -->
<details>
<summary>展开答案 · Q517</summary>

Interview Answer

I would clarify whether 500ms applies to candidate retrieval or to a fully generated explanation. I would precompute profile features and vectors, partition by useful filters, retrieve a small lexical/ANN candidate set and rerank within a bounded budget. Permissions, deletion and freshness propagate through indexes and caches. I would prove latency with representative load tests rather than promise it from the architecture alone.

<details>
<summary>展开详解与追问</summary>

Explanation

At 750 million profiles, filtering, shard fan-out and index memory are first-class constraints. Generating prose for every candidate would be a separate expensive stage. The larger source question supplies 750M profiles and a 500ms target; for this shorter question those are optional practice assumptions to clarify, not given requirements.

Follow-up

- What is the quality metric?
  Useful candidate relevance at top ranks, reviewed with domain experts and checked for harmful or inappropriate filtering.

</details>
</details>
<!-- /interview-answer -->

- Q518 — Design a system to process 10K user uploads/month (bank payslips, IDs, references).（来源：[04-ai-system-design.md:53](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q518 -->
<details>
<summary>展开答案 · Q518</summary>

Interview Answer

I would accept uploads into protected object storage, validate file type and size, scan them and enqueue idempotent processing jobs. Parsing/OCR produces source-linked fields; deterministic checks compare identities, dates and totals across documents. Conflicts go to review. Provider downtime leaves jobs queued or failed with retryable status, and the user can track progress without resubmitting files.

<details>
<summary>展开详解与追问</summary>

Explanation

Ten thousand uploads per month is modest on average, but file size, OCR time and bursts matter. Treat uploaded instructions as document content, not execution policy.

Follow-up

- How do you avoid duplicate processing?
  Use stable upload/job IDs and content hashes, with a durable record of the processing version and outcome.

</details>
</details>
<!-- /interview-answer -->

- Q519 — Design a large-scale AI model deployment system - model serving, GPU scaling, model versioning, result caching. (OpenAI)（来源：[04-ai-system-design.md:69](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q519 -->
<details>
<summary>展开答案 · Q519</summary>

Interview Answer

I would separate model artifacts and versions from the serving fleet, put admission control and routing in front, and scale replicas based on measured GPU and queue saturation. Batching, caching and hardware-compatible quantization can improve efficiency. Releases need offline quality gates, canary traffic, observability and rollback. Capacity planning includes model load time, KV memory, failure headroom and per-request cost.

<details>
<summary>展开详解与追问</summary>

Explanation

Autoscaling is not instantaneous when large weights must load. Multi-tenant isolation and data handling remain part of the serving contract. Flow: versioned artifact registry → rollout controller → admission/routing → GPU replicas → response. Cache keys include model, prompt/configuration and authorized context; use queue/token pressure and KV capacity for scaling, with load-time headroom and rollback to a compatible version.

Follow-up

- What metric would trigger scaling?
  A combination of queue wait, utilization and service objectives, rather than GPU utilization alone.

</details>
</details>
<!-- /interview-answer -->


<a id="day-24"></a>

### 周四 11/5

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Indexes; EXPLAIN; Query Optimization<br>LeetCode: [1193. Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/); [1211. Queries Quality and Percentage](https://leetcode.com/problems/queries-quality-and-percentage/); [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/)<br>资料：[Indexes](Study%20topics/indexes.html); [EXPLAIN](Study%20topics/explain.html); [Query Optimization](Study%20topics/query-optimization.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Text-to-SQL Evaluation and Data Quality](Study%20topics/text-to-sql-evaluation-and-data-quality.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Reference SQL and Financial Analytics<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-24) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Supplemental Designs; Project Deep Dive / Opening Questions; Project Deep Dive / Follow-up Probes — 15 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Point-in-Time Data](Study%20topics/point-in-time-data.html) |


刷题对应说明：LeetCode 对应 SQL 查询；Indexes、EXPLAIN 和 Query Optimization 在 PostgreSQL 中练习。

<!-- quantvault-day 24 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2150 · Leak-Free Feature Standardization in Walk-Forward Validation](https://quantvault.org/problems.html?id=2150) · Machine Learning · Medium

先修：先读Scaling与Pipeline；只写关键伪代码，沿用本地Notebook实验。

本次范围：Implementation sketch。在每个时间fold内fit预处理，只transform后续窗口；检查扩展窗口与滚动窗口差别。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-24)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q520 — Design a recommendation system（来源：[04-ai-system-design.md:104](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q520 -->
<details>
<summary>展开答案 · Q520</summary>

Interview Answer

I would separate candidate generation, ranking and policy constraints. Data pipelines create user/item features with point-in-time correctness, while the serving tier combines personalized and fallback candidates. I would evaluate offline ranking and online utility with diversity, freshness and harmful-feedback-loop checks. An LLM can interpret intent or explain recommendations, but it is not required for every ranking decision.

<details>
<summary>展开详解与追问</summary>

Explanation

Clicks are biased by what was previously shown. Cold start and delayed outcomes need separate treatment.

Follow-up

- How do you handle a new user?
  Use explicit preferences, contextual or popularity baselines and careful exploration rather than inventing a profile.

</details>
</details>
<!-- /interview-answer -->

- Q521 — Design a spam classifier（来源：[04-ai-system-design.md:106](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q521 -->
<details>
<summary>展开答案 · Q521</summary>

Interview Answer

I would clarify the spam channel, latency requirement and relative costs of blocking legitimate content versus missing spam. I would start with a labeled time-split dataset and a simple text classifier, combine it with safe rules and reputation features, then calibrate a decision threshold. Serving would include feature versioning, an appeal or review path and monitoring for drift and adversarial change. I would measure precision, recall and false positives by user segment.

<details>
<summary>展开详解与追问</summary>

Explanation

Labels can be delayed or biased by user reporting. Keep senders or campaigns separated where needed to avoid duplicate leakage, and retrain from audited feedback rather than every user flag.

Follow-up

- Why not optimize accuracy?
  Spam prevalence can make accuracy misleading; the operating threshold must reflect false-positive cost and acceptable missed spam.

</details>
</details>
<!-- /interview-answer -->

- Q522 — Design a search ranking system（来源：[04-ai-system-design.md:107](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q522 -->
<details>
<summary>展开答案 · Q522</summary>

Interview Answer

I would separate candidate retrieval from ranking. Lexical and semantic retrieval produce candidates; a ranker uses query-document relevance, freshness and permitted behavioral signals. I would define relevance judgments and measure NDCG or MRR offline, then test user outcomes with latency and diversity guardrails. Query logs, clicks and training features need time-aware processing, and a simpler ranking fallback should remain available.

<details>
<summary>展开详解与追问</summary>

Explanation

Click labels reflect position and presentation bias, not pure relevance. Retrieval recall bounds downstream ranking quality: a ranker cannot recover documents it never sees.

Follow-up

- How do you handle new documents?
  Use content-based features and lexical retrieval before sufficient interaction history accumulates, then monitor exposure and relevance separately.

</details>
</details>
<!-- /interview-answer -->

- Q523 — Design an ad click prediction system（来源：[04-ai-system-design.md:108](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q523 -->
<details>
<summary>展开答案 · Q523</summary>

Interview Answer

I would predict click probability for eligible ad impressions using user, context and ad features available at serving time. I would start with logistic regression or a tree baseline, use chronological validation and account for delayed or sampled labels. I would evaluate log loss, calibration and ranking utility, then run a controlled online test with revenue, user-experience and latency guardrails. Serving needs consistent features and a safe baseline during failures.

<details>
<summary>展开详解与追问</summary>

Explanation

If negatives are downsampled, correct probabilities for the sampling scheme or calibrate on representative data. AUC alone does not show whether predicted probabilities are suitable for auction decisions.

Follow-up

- Why does calibration matter?
  A predicted probability can feed expected-value calculations; systematically biased probabilities distort bids even with good ranking.

</details>
</details>
<!-- /interview-answer -->

- Q524 — Design Instagram / TikTok / X (timeline, posting, followers).（来源：[04-ai-system-design.md:120](interview/questions/04-ai-system-design.md)）

<!-- interview-answer Q524 -->
<details>
<summary>展开答案 · Q524</summary>

Interview Answer

I would separate content storage, social relationships, candidate generation, ranking and feed delivery. Fan-out-on-write works for ordinary publishers, while high-fan-out accounts may be merged at read time. Media is served through object storage/CDN. I would evaluate relevance, freshness and harmful feedback loops, and define pagination stability and deletion propagation.

<details>
<summary>展开详解与追问</summary>

Explanation

A feed is both a distributed data problem and a ranking problem. Engagement alone can reward undesirable content. Posting writes metadata and an outbox atomically, then fan-out workers deliver idempotently. Follow/unfollow updates an adjacency store; read-time privacy and block checks prevent stale feeds leaking content. Reconcile dropped fan-out tasks and use stable cursor pagination; evaluate freshness and p95 feed latency under celebrity bursts.

Follow-up

- How do you avoid repeated items during pagination?
  Use stable cursors tied to a ranking/session snapshot or a defined seen-item policy rather than offset-only pagination.

</details>
</details>
<!-- /interview-answer -->

- Q407 — Walk me through your most technically challenging project. (OpenAI - 45-min presentation to a peer engineer)（来源：[questions.md:512](interview/questions/questions.md)）

<!-- interview-answer Q407 -->
<details>
<summary>展开答案 · Q407</summary>

Interview Answer

For a long technical presentation I would choose a real financial-engineering project with substantial ownership. I would begin with the user problem and constraints, draw the architecture, then spend most time on one hard decision and one failure investigation. I would show actual validation and state my role precisely. Risk Copilot can illustrate current AI learning, but I would not inflate it into a large production deployment.

<details>
<summary>展开详解与追问</summary>

Explanation

Prepare evidence for numerical correctness, module boundaries and performance claims. The specific project and outcomes must come from the user's work.

Follow-up

- What should you omit from a 45-minute deep dive?
  A feature-by-feature tour that leaves no time for the difficult reasoning, failure modes and questions.

</details>
</details>
<!-- /interview-answer -->

- Q408 — Walk me through a project you owned end-to-end. What were the key technical decisions? (Anthropic - 25-min presentation + 15-20 min discussion)（来源：[questions.md:513](interview/questions/questions.md)）

<!-- interview-answer Q408 -->
<details>
<summary>展开答案 · Q408</summary>

Interview Answer

I would select a project I truly owned through the relevant lifecycle and define what end-to-end meant in that organization. I would explain requirements, implementation decisions, validation and operational handoff, distinguishing work done by teammates or AI. If I did not own deployment, I would say so. The presentation should be supported by real artifacts rather than a reconstructed ideal process.

<details>
<summary>展开详解与追问</summary>

Explanation

The user used existing company CI but did not deploy it. Do not turn that into ownership of the entire release platform.

Follow-up

- What if the project was collaborative?
  Name shared outcomes and clearly isolate your decisions, deliverables and coordination responsibilities.

</details>
</details>
<!-- /interview-answer -->

- Q409 — Tell me about a project you're most proud of, and what role you played. (OpenAI)（来源：[questions.md:514](interview/questions/questions.md)）

<!-- interview-answer Q409 -->
<details>
<summary>展开答案 · Q409</summary>

Interview Answer

The Python library is a credible candidate because I built it and later addressed maintainability and performance. I would explain a specific function or architecture choice, the problem that motivated refactoring and the evidence that the result met its contract. I would add real user impact if available, without inventing speedups or team outcomes. Risk Copilot is a separate, newer learning story.

<details>
<summary>展开详解与追问</summary>

Explanation

Pride should connect to a concrete result and personal responsibility. An impressive title or technology list is not the evidence.

Follow-up

- What would you show an interviewer?
  A small before/after design, a meaningful regression case and a measured result from the actual project.

</details>
</details>
<!-- /interview-answer -->

- Q410 — Why did you choose that particular storage/model/architecture over alternatives?（来源：[questions.md:521](interview/questions/questions.md)）

<!-- interview-answer Q410 -->
<details>
<summary>展开答案 · Q410</summary>

Interview Answer

I would explain the requirement first, then compare the selected storage, model or architecture with the simplest viable alternative. I would identify whether the decision was mine, inherited or suggested by AI, and describe what I validated. For a future workbench, relational run state and restricted tools are proposed choices, not completed decisions with production evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

A defensible choice can be provisional. State workload assumptions and what would trigger reevaluation.

Follow-up

- What if a cheaper alternative now meets the need?
  Consider migration based on total benefit and risk rather than defending the original choice for its own sake.

</details>
</details>
<!-- /interview-answer -->

- Q411 — Is there an actual eval framework here, or is it vibes-based? (OpenAI)（来源：[questions.md:522](interview/questions/questions.md)）

<!-- interview-answer Q411 -->
<details>
<summary>展开答案 · Q411</summary>

Interview Answer

I would open the actual evaluation command, dataset and result artifacts and explain what they measure. If parts are only planned, I would say that clearly. A real framework requires repeatable cases, explicit labels or outcome checks, version tracking and failure review; merely importing an evaluation library does not establish it. I would separate retrieval, numerical and answer-quality checks.

<details>
<summary>展开详解与追问</summary>

Explanation

The current learning plan provides an evaluation direction, not proof that every project benchmark has run.

Follow-up

- What is the smallest credible evaluation?
  A reviewed set of representative and failure cases, a reproducible runner and a baseline with transparent limitations.

</details>
</details>
<!-- /interview-answer -->

- Q412 — What alternative approaches did you consider, and why did you reject them?（来源：[questions.md:523](interview/questions/questions.md)）

<!-- interview-answer Q412 -->
<details>
<summary>展开答案 · Q412</summary>

Interview Answer

I would discuss alternatives for the actual decision, not a generic list of fashionable frameworks. For example, I might compare a fixed workflow with an agent loop and explain whether runtime flexibility justified the extra failure and evaluation burden. I would label untested options and acknowledge any benefit I gave up. Rejected alternatives should remain viable under different requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

This answer should use an actual project decision before being told in past tense.

Follow-up

- What would make you reverse the decision?
  A changed requirement or measured failure that outweighs the original simplicity, cost or reliability advantage.

</details>
</details>
<!-- /interview-answer -->

- Q413 — How would you handle different requirements or scale constraints?（来源：[questions.md:524](interview/questions/questions.md)；[03-project-deep-dive.md:48](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q413 -->
<details>
<summary>展开答案 · Q413</summary>

Interview Answer

I would identify which assumption changed: load, freshness, access isolation, latency, availability or output correctness. Then I would trace the affected component and preserve the core contract while changing the minimum necessary design. More workers may help independent jobs; stronger state coordination may be needed for concurrent effects. I would validate with a representative workload rather than add infrastructure based only on user count.

<details>
<summary>展开详解与追问</summary>

Explanation

A prototype's deployment limitation is not the same as a flaw in its numerical or retrieval logic.

Follow-up

- What is a useful first scaling experiment?
  Increase realistic concurrent load while measuring queueing, errors and quality, then inspect the first saturated resource.

</details>
</details>
<!-- /interview-answer -->

- Q414 — What would you do differently if you started this project over?（来源：[questions.md:525](interview/questions/questions.md)；[03-project-deep-dive.md:69](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q414 -->
<details>
<summary>展开答案 · Q414</summary>

Interview Answer

For Risk Copilot, I would begin with a narrow user task, explicit deterministic boundaries and a small evaluation set before expanding the agent workflow. For the Python library, I would examine clearer modularity and error propagation earlier. I would preserve parts that already work and support each proposed change with an observed issue. Hindsight does not mean every original choice was unreasonable.

<details>
<summary>展开详解与追问</summary>

Explanation

These are lessons and proposed changes; add exact examples to avoid a generic retrospective.

Follow-up

- Would you rewrite everything?
  No. I would target the highest-impact gap and verify the change against existing behavior and evidence.

</details>
</details>
<!-- /interview-answer -->

- Q415 — What was the most challenging technical decision and how did you make it?（来源：[questions.md:526](interview/questions/questions.md)；[03-project-deep-dive.md:54](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q415 -->
<details>
<summary>展开答案 · Q415</summary>

Interview Answer

I would choose one real consequential decision, explain the uncertainty and alternatives, and show the evidence used to decide. Possible areas in my experience include numerical-tool modularity or performance approaches, but the actual decision and result must be supplied. In Risk Copilot I would distinguish choices I reviewed from defaults generated by AI. The answer should show judgment under constraints, not a technology preference.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template for the specific hardest decision. No evidence supports a fabricated multi-million-user architecture choice.

Follow-up

- What made it difficult?
  A real conflict between important constraints, such as maintainability and speed, with incomplete but decision-relevant evidence.

</details>
</details>
<!-- /interview-answer -->

- Q416 — Did the solution actually work? How do you know? What metrics did you track?（来源：[questions.md:527](interview/questions/questions.md)；[03-project-deep-dive.md:61](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q416 -->
<details>
<summary>展开答案 · Q416</summary>

Interview Answer

I would define what worked means for that project and show the corresponding evidence: correct outputs, test results, evaluation cases, performance measurements or real user outcomes. I would distinguish code that runs from a system that solves the task and state what remains unverified. For Risk Copilot, planned metrics must not be presented as observed improvements.

<details>
<summary>展开详解与追问</summary>

Explanation

Report sample size, workload and configuration with any score. A hand-picked demo is not an independent performance estimate.

Follow-up

- What if the result was mixed?
  Explain which requirements were met, which failed and how that informed the next decision.

</details>
</details>
<!-- /interview-answer -->


<a id="day-25"></a>

### 周五 11/6

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Rate Limiter; Cache<br>LeetCode: [146. LRU Cache](https://leetcode.com/problems/lru-cache/); [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/); [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/)（Premium，可选）<br>资料：[LRU Cache](Study%20topics/lru-cache.html); [Rate Limiter](Study%20topics/rate-limiter.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Agents with Human Approval](Study%20topics/agents-with-human-approval.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Question Dataset and SQL Ground Truth<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-25) |
| 16:30–17:30 | Interview Questions，1 小时 | Project Deep Dive / Follow-up Probes; Project Deep Dive / Supplemental Probes — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

刷题对应说明：LeetCode 359 为 Premium，可跳过；Rate Limiting 也可用自定义练习。

<!-- quantvault-day 25 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1978 · HAR-RV Model for Realized Variance Forecasting](https://quantvault.org/problems.html?id=1978) · Regression · Medium

先修：Realized Variance是已实现方差；HAR组合日/周/月等历史尺度，详细估计作为扩展。

本次范围：Financial baseline outline。只解释HAR-RV使用不同历史尺度的已实现方差作输入，并定义未来目标、单位和简单基线。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-25)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q417 — What were the trade-offs you made, and are you still comfortable with them?（来源：[questions.md:528](interview/questions/questions.md)；[03-project-deep-dive.md:47](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q417 -->
<details>
<summary>展开答案 · Q417</summary>

Interview Answer

I would state the actual trade-off and the reason it was acceptable at the time. A small learning project may favor a simple deployment over high availability, while a financial calculation should not trade correctness for a polished answer. I would revisit the decision using current evidence and say whether its assumptions still hold. I would not defend a compromise after its key premise changed.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate deliberate scope limits from accidental defects. A limitation is acceptable only when it is understood and fits the requirement.

Follow-up

- How do you document a trade-off?
  Record the requirement, alternatives, decision, downside and the condition that would trigger reconsideration.

</details>
</details>
<!-- /interview-answer -->

- Q418 — How did you communicate technical decisions to stakeholders?（来源：[questions.md:529](interview/questions/questions.md)；[03-project-deep-dive.md:42](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q418 -->
<details>
<summary>展开答案 · Q418</summary>

Interview Answer

I would present the decision in terms of the stakeholder's task, the options and their consequences. A concrete example or small experiment can show why one approach is safer or more useful. I would record the agreed criteria and unresolved risks and invite questions. To make this a past-tense story, I would add the actual stakeholder conversation and outcome from my work.

<details>
<summary>展开详解与追问</summary>

Explanation

A technical diagram may help an engineer but not answer a business owner's concern about a wrong risk number. Adapt to the decision-maker.

Follow-up

- How do you handle disagreement?
  Return to the agreed objective and testable assumptions, then escalate the decision if authority or risk requires it.

</details>
</details>
<!-- /interview-answer -->

- Q419 — What would you explore next if you had more time?（来源：[questions.md:530](interview/questions/questions.md)；[03-project-deep-dive.md:70](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q419 -->
<details>
<summary>展开答案 · Q419</summary>

Interview Answer

I would prioritize the most important unverified assumption rather than add a new framework. For Risk Copilot that may be a stronger retrieval/answer evaluation and clearer failure handling. For the planned workbench it is a reproducible baseline and timing-correct validation before more models. I would choose the next experiment by expected learning and user value, with a bounded scope.

<details>
<summary>展开详解与追问</summary>

Explanation

Future ideas should not be included among completed achievements. Tie each to a current limitation.

Follow-up

- What would you deliberately postpone?
  Optional scale, additional strategies or complex multi-agent behavior until the core task is demonstrably reliable.

</details>
</details>
<!-- /interview-answer -->

- Q420 — How do you monitor the model post-deployment for drift or degradation?（来源：[questions.md:531](interview/questions/questions.md)；[03-project-deep-dive.md:63](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q420 -->
<details>
<summary>展开答案 · Q420</summary>

Interview Answer

I would monitor input distributions, freshness, service failures and prediction quality when labels become available. For a five-day volatility forecast, recent outcomes are pending until the horizon ends, so I would not score them early. I would segment errors by asset and regime, compare with the historical baseline and investigate drift before retraining. Model and preprocessing versions must be traceable and rollback-compatible.

<details>
<summary>展开详解与追问</summary>

Explanation

Input drift does not necessarily imply worse accuracy; absence of drift does not guarantee stable performance. This is a proposed monitoring design, not an existing production deployment claim.

Follow-up

- When would you retrain?
  After confirming a data or relationship change and showing a candidate improves appropriate validation without violating release constraints.

</details>
</details>
<!-- /interview-answer -->

- Q421 — What trade-offs did you make between retrieval speed vs. context length, fine-tuning vs. prompt engineering, GPU cost vs. latency?（来源：[questions.md:532](interview/questions/questions.md)）

<!-- interview-answer Q421 -->
<details>
<summary>展开答案 · Q421</summary>

Interview Answer

I would discuss only trade-offs I actually evaluated and mark the rest as design reasoning. Larger retrieved context can preserve evidence but increases input cost and may add noise; fine-tuning changes behavior while retrieval supplies current facts; GPU serving choices trade utilization against interactive delay. I would use a fixed workload and report quality, latency and cost together rather than claim all three improved automatically.

<details>
<summary>展开详解与追问</summary>

Explanation

The user has not confirmed self-hosted GPU operations or fine-tuning experiments. Those parts should remain hypothetical until supported.

Follow-up

- How do you make the comparison fair?
  Hold the task set and success criteria fixed, record versions and include retries, failures and infrastructure in the cost.

</details>
</details>
<!-- /interview-answer -->

- Q498 — Walk me through an AI project you built end-to-end.（来源：[03-project-deep-dive.md:22](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q498 -->
<details>
<summary>展开答案 · Q498</summary>

Interview Answer

My current AI project is Risk Copilot, connecting financial questions and retrieved evidence with scenario and risk workflows. AI generated much of the code, so I distinguish assembling the project from fully owning every implementation detail. My focus is understanding the data flow, improving retrieval quality, testing corner cases and making failures explicit. I would demonstrate one real request through the code and show only evaluation or deployment results I have actually verified.

<details>
<summary>展开详解与追问</summary>

Explanation

Use the existing financial background to explain why numerical correctness matters. Before an interview, attach one reproducible trace, a known failure and a measured comparison; these are not yet assumed completed. Current status matters: describe the prototype and your verified contributions, not a completed production deployment.

Follow-up

- What did you personally contribute?
  State the requirements, investigations and reviews you actually performed, and name AI-generated implementation honestly rather than implying manual authorship.

</details>
</details>
<!-- /interview-answer -->

- Q499 — Walk through a recent technical project.（来源：[03-project-deep-dive.md:23](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q499 -->
<details>
<summary>展开答案 · Q499</summary>

Interview Answer

My professional projects center on stochastic modeling, economic scenario generation and hedge-risk tools, implemented mainly in Python. I have also built a Python library and worked on debugging, refactoring and performance. Risk Copilot is my AI learning project. I would choose one example relevant to the role and distinguish established financial-engineering experience from newer applied-AI practice.

<details>
<summary>展开详解与追问</summary>

Explanation

Keep the overview short, then invite a technical deep dive. Do not imply the employer used Risk Copilot or that every project was individually owned end to end. For a recent-project walkthrough, choose one project and order the answer as problem, your contribution, design, a failure and verified outcome; the exact recency and result must be supplied.

Follow-up

- Which project best demonstrates your engineering depth?
  The professional Python tool whose requirements, code, failure modes and validation I can explain most concretely.

</details>
</details>
<!-- /interview-answer -->

- Q500 — Walk me through your most technically challenging project.（来源：[03-project-deep-dive.md:24](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q500 -->
<details>
<summary>展开答案 · Q500</summary>

Interview Answer

For a long technical presentation I would choose a real financial-engineering project with substantial ownership. I would begin with the user problem and constraints, draw the architecture, then spend most time on one hard decision and one failure investigation. I would show actual validation and state my role precisely. Risk Copilot can illustrate current AI learning, but I would not inflate it into a large production deployment.

<details>
<summary>展开详解与追问</summary>

Explanation

Prepare evidence for numerical correctness, module boundaries and performance claims. The specific project and outcomes must come from the user's work.

Follow-up

- What should you omit from a 45-minute deep dive?
  A feature-by-feature tour that leaves no time for the difficult reasoning, failure modes and questions.

</details>
</details>
<!-- /interview-answer -->

- Q501 — Tell me about a recent/favorite project and some of the difficulties you had.（来源：[03-project-deep-dive.md:25](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q501 -->
<details>
<summary>展开答案 · Q501</summary>

Interview Answer

Risk Copilot is a recent project I am using to connect my financial background with applied AI. The difficult part has been moving from plausible answers to evidence-backed behavior: retrieval quality, unanticipated corner cases and appropriate safeguards. AI wrote much of the code, and I am building ownership by tracing and testing it. I would discuss one actual failure and the evidence for any fix, without claiming the whole improvement plan is finished.

<details>
<summary>展开详解与追问</summary>

Explanation

A favorite project can still be incomplete. Explain current state and learning rather than manufacture user or production impact.

Follow-up

- What is the next technical milestone?
  A reproducible evaluation baseline and a small verified improvement before expanding features.

</details>
</details>
<!-- /interview-answer -->

- Q502 — Tell me about the greatest accomplishment of your career.（来源：[03-project-deep-dive.md:29](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q502 -->
<details>
<summary>展开答案 · Q502</summary>

Interview Answer

I would select a genuine financial-engineering accomplishment rather than invent a dramatic AI story. A useful candidate is my work on an economic scenario generator, hedge-risk tool or Python library, where I can explain the technical responsibility and validation. I would fill in the business need, my specific contribution and the verified outcome from actual records before calling it my greatest accomplishment.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: choose the real project and explain why its outcome matters to you. No exact impact metric or stakeholder reaction has been supplied.

Follow-up

- How do you separate team impact from your role?
  Describe the team's result, then identify the decisions and deliverables for which you were personally responsible.

</details>
</details>
<!-- /interview-answer -->

- Q503 — What business problem were you solving? Why was it a priority?（来源：[03-project-deep-dive.md:39](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q503 -->
<details>
<summary>展开答案 · Q503</summary>

Interview Answer

My relevant domain is financial risk: I have worked on economic scenario generation and hedge-risk tools. To explain priority convincingly, I would connect one specific tool to the decision it supported, the previous workflow and the cost of an incorrect or delayed result. I should fill in the actual business sponsor, deadline and success measure before telling this as a completed business-impact story.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: specify the actual decision and evidence of priority. Building a technically sophisticated model is not itself proof that it was a business priority.

Follow-up

- What if you have no revenue metric?
  Use verified evidence such as reduced manual steps, improved reconciliation or a decision enabled; do not invent dollar savings.

</details>
</details>
<!-- /interview-answer -->

- Q504 — Who was the customer? Who benefited from this work?（来源：[03-project-deep-dive.md:40](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q504 -->
<details>
<summary>展开答案 · Q504</summary>

Interview Answer

For my financial-engineering work, I would identify the actual team that consumed the scenarios or hedge-risk outputs and distinguish that user from the sponsor. For Risk Copilot, I can describe the intended financial-analysis user, but I should not imply external adoption without evidence. A strong answer explains who used the output, what decision they made and how I learned whether it helped.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: actual consumer, workflow and feedback. A planned persona and a demonstrated customer are different forms of evidence.

Follow-up

- Who is the buyer versus the user?
  The buyer controls budget or approval; the user performs the workflow. Their success criteria can differ.

</details>
</details>
<!-- /interview-answer -->

- Q505 — What was your actual role in building this?（来源：[03-project-deep-dive.md:41](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q505 -->
<details>
<summary>展开答案 · Q505</summary>

Interview Answer

My confirmed experience includes Python financial modeling, writing a Python library, debugging, refactoring and performance work. For Risk Copilot, AI generated most of the code, so I would distinguish the requirements and decisions I directed from implementation I still need to understand better. I can discuss my testing and retrieval-quality concerns, but I should only claim ownership of design, deployment or results that I can demonstrate.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not replace the actual division of work with an end-to-end ownership claim. Prepare a concrete code walkthrough and a change you can explain line by line.

Follow-up

- Does AI assistance weaken ownership?
  Ownership requires reviewing correctness, making decisions and being accountable for behavior; claiming code you cannot explain is the real problem.

</details>
</details>
<!-- /interview-answer -->

- Q506 — Why did you choose that particular approach over alternatives?（来源：[03-project-deep-dive.md:46](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q506 -->
<details>
<summary>展开答案 · Q506</summary>

Interview Answer

I would explain the requirement first, then compare the selected storage, model or architecture with the simplest viable alternative. I would identify whether the decision was mine, inherited or suggested by AI, and describe what I validated. For a future workbench, relational run state and restricted tools are proposed choices, not completed decisions with production evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

A defensible choice can be provisional. State workload assumptions and what would trigger reevaluation.

Follow-up

- What if a cheaper alternative now meets the need?
  Consider migration based on total benefit and risk rather than defending the original choice for its own sake.

</details>
</details>
<!-- /interview-answer -->

- Q507 — Why did you pick that particular tech stack for data processing?（来源：[03-project-deep-dive.md:49](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q507 -->
<details>
<summary>展开答案 · Q507</summary>

Interview Answer

Python was a natural fit because I use it daily for numerical modeling and have experience building a reusable library. It lets me express the calculation clearly and use vectorized numerical operations where profiling supports them. For a data-processing project I would compare that choice against SQL for relational aggregation and a distributed engine only when data volume or execution requirements justify it.

<details>
<summary>展开详解与追问</summary>

Explanation

The actual library dependencies, scale and alternatives considered are still to be supplied. Do not claim Snowflake or distributed-processing production experience from a planned project.

Follow-up

- Why not perform every operation in Python?
  Database-side filtering and aggregation can reduce movement and exploit the database engine; Python is useful for numerical logic and orchestration.

</details>
</details>
<!-- /interview-answer -->

- Q508 — What went wrong? What was harder than expected?（来源：[03-project-deep-dive.md:55](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q508 -->
<details>
<summary>展开答案 · Q508</summary>

Interview Answer

One real difficulty was that broad try/except handling obscured the underlying library error. Another was that functions were not modular enough to maintain comfortably, which led to a refactor. In Risk Copilot, weak answers and unanticipated cases have led me to examine retrieval quality and guardrails. I would choose one incident, show the failing input and explain the specific correction rather than combine everything into a vague success story.

<details>
<summary>展开详解与追问</summary>

Explanation

Confirm the exact fix, regression test and outcome before using past-tense details beyond these known facts. The lesson is to make failures observable and responsibilities testable.

Follow-up

- Would you remove all exception handling?
  No. Catch errors where recovery or useful context is possible, and preserve the original exception when propagating failure.

</details>
</details>
<!-- /interview-answer -->

- Q509 — How did you debug production issues?（来源：[03-project-deep-dive.md:56](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q509 -->
<details>
<summary>展开答案 · Q509</summary>

Interview Answer

A relevant debugging experience is my Python library, where broad exception handling hid the underlying failure. I would start from a reproducible input, trace the calculation and inspect the original error instead of treating the wrapper message as the cause. I can explain that experience honestly, but I should not describe it as a production on-call incident unless that context is accurate.

<details>
<summary>展开详解与追问</summary>

Explanation

For a production question, add only confirmed details about impact, mitigation and recovery. A proposed extension is to add structured context, exception chaining and a regression test for the failing input.

Follow-up

- What comes first during a live incident?
  Contain user impact with a safe fallback or rollback, while preserving evidence for root-cause analysis.

</details>
</details>
<!-- /interview-answer -->

- Q510 — Is there an actual eval framework here, or is it vibes-based?（来源：[03-project-deep-dive.md:60](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q510 -->
<details>
<summary>展开答案 · Q510</summary>

Interview Answer

I would open the actual evaluation command, dataset and result artifacts and explain what they measure. If parts are only planned, I would say that clearly. A real framework requires repeatable cases, explicit labels or outcome checks, version tracking and failure review; merely importing an evaluation library does not establish it. I would separate retrieval, numerical and answer-quality checks.

<details>
<summary>展开详解与追问</summary>

Explanation

The current learning plan provides an evaluation direction, not proof that every project benchmark has run.

Follow-up

- What is the smallest credible evaluation?
  A reviewed set of representative and failure cases, a reproducible runner and a baseline with transparent limitations.

</details>
</details>
<!-- /interview-answer -->

- Q511 — What was the outcome? How did stakeholders react?（来源：[03-project-deep-dive.md:62](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q511 -->
<details>
<summary>展开答案 · Q511</summary>

Interview Answer

I would report the outcome of the particular project using evidence I can defend: what changed in the calculation or workflow, how it was checked and who actually reviewed it. I have not supplied stakeholder reactions or quantified business results here, so those remain placeholders. For Risk Copilot I would describe the current prototype and observed limitations, then distinguish planned evaluation from measured improvement.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: actual before/after result and one documented or accurately remembered reaction. Avoid fabricated adoption, savings, accuracy or approval claims.

Follow-up

- What if the result was mixed?
  Explain what improved, what did not and the decision that followed; a credible limitation is more useful than an invented success.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 6 周：Performance and Financial Analytics

<a id="day-26"></a>

### 周一 11/9

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Crawler; Bounded Concurrency<br>LeetCode: [1236. Web Crawler](https://leetcode.com/problems/web-crawler/)（Premium，可选）; [127. Word Ladder](https://leetcode.com/problems/word-ladder/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)<br>资料：[Crawler](Study%20topics/crawler.html); [Async](Study%20topics/async.html); [Concurrency](Study%20topics/concurrency.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Agents with Human Approval](Study%20topics/agents-with-human-approval.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Text-to-SQL and Semantic Context<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-26) |
| 16:30–17:30 | Interview Questions，1 小时 | Project Deep Dive / Supplemental Probes; Behavioral Questions / Project Deep Dives; Behavioral Questions / Conflict and Collaboration — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 1236 为 Premium；无法访问时练自定义 Crawler，127 / 200 只对应相关图遍历。

<!-- quantvault-day 26 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3103 · Combining Features With Different Update Frequencies](https://quantvault.org/problems.html?id=3103) · Machine Learning · Hard

先修：先读Forecast Horizons、Temporal Leakage；频率低不等于可以引用未来发布值。

本次范围：Advanced: feature contract。列出日/周/月数据的发布时间、前向填充规则和缺失状态；不使用预测时不可获得的新值。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-26)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q512 — How did you handle data quality and preprocessing challenges?（来源：[03-project-deep-dive.md:64](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q512 -->
<details>
<summary>展开答案 · Q512</summary>

Interview Answer

My financial-modeling background makes data assumptions and calculation correctness important. For a concrete story, I need to identify a real dataset and the specific issue I corrected; I should not invent a cleaning pipeline. My intended approach is to validate schema, units, dates and missing values, preserve provenance, and fit learned preprocessing only on training data. For financial time series I also check when every feature and label became available.

<details>
<summary>展开详解与追问</summary>

Explanation

Distinguish existing experience from proposed ML practice. An apparently accurate model can be invalid if revisions or future labels leak into its inputs.

Follow-up

- Would you drop all missing rows?
  No. First determine why values are missing and whether deletion changes the population or removes important failure cases.

</details>
</details>
<!-- /interview-answer -->

- Q328 — Walk me through an AI project you built end-to-end. (very common in 2026)（来源：[questions.md:401](interview/questions/questions.md)）

<!-- interview-answer Q328 -->
<details>
<summary>展开答案 · Q328</summary>

Interview Answer

My current AI project is Risk Copilot, connecting financial questions and retrieved evidence with scenario and risk workflows. AI generated much of the code, so I distinguish assembling the project from fully owning every implementation detail. My focus is understanding the data flow, improving retrieval quality, testing corner cases and making failures explicit. I would demonstrate one real request through the code and show only evaluation or deployment results I have actually verified.

<details>
<summary>展开详解与追问</summary>

Explanation

Use the existing financial background to explain why numerical correctness matters. Before an interview, attach one reproducible trace, a known failure and a measured comparison; these are not yet assumed completed.

Follow-up

- What did you personally contribute?
  State the requirements, investigations and reviews you actually performed, and name AI-generated implementation honestly rather than implying manual authorship.

</details>
</details>
<!-- /interview-answer -->

- Q329 — Tell me about a project you're most proud of, and what role you played?（来源：[questions.md:402](interview/questions/questions.md)；[03-project-deep-dive.md:30](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q329 -->
<details>
<summary>展开答案 · Q329</summary>

Interview Answer

One project I can discuss is a Python library I built in my financial-engineering work. The initial functions were difficult to maintain, and I later refactored the structure. I also investigated performance using vectorization and parallel-processing approaches. What I value is making a modeling tool easier to reason about and maintain, not just obtaining a plausible number. I would add the exact module, users and measured outcome from my records.

<details>
<summary>展开详解与追问</summary>

Explanation

The library, refactoring and optimization attempts are confirmed by the user. Team size, speedup and business impact are not confirmed and must not be invented.

Follow-up

- What evidence would make this story stronger?
  A before/after API or code example, tests preserving behavior and a reproducible benchmark with actual results.

</details>
</details>
<!-- /interview-answer -->

- Q330 — What is your most challenging work in GenAI?（来源：[questions.md:403](interview/questions/questions.md)）

<!-- interview-answer Q330 -->
<details>
<summary>展开答案 · Q330</summary>

Interview Answer

The most relevant GenAI challenge in Risk Copilot has been obtaining useful, trustworthy results rather than simply getting an LLM call to work. Retrieval can return several similar chunks from one source, and corner cases expose missing safeguards. I am approaching this by separating retrieval quality from answer quality and examining chunking, embeddings and diversity. I would distinguish experiments already run from the improvements still in the plan.

<details>
<summary>展开详解与追问</summary>

Explanation

A repeated source is not inherently wrong; the actual issue may be redundant evidence or missing coverage. Avoid claiming MMR always fixes it.

Follow-up

- How would you know an improvement worked?
  Compare a frozen query set using evidence coverage, answer support, failure cases, latency and cost.

</details>
</details>
<!-- /interview-answer -->

- Q331 — Describe a time you reduced hallucinations/cost in production. (very common in 2026)（来源：[questions.md:404](interview/questions/questions.md)）

<!-- interview-answer Q331 -->
<details>
<summary>展开答案 · Q331</summary>

Interview Answer

I have not yet established a production GenAI cost or hallucination reduction that I can claim. My relevant experience is improving Risk Copilot as a learning project and debugging financial Python tools professionally. For an AI example I would show the measured baseline, the specific change and the held-out result once that experiment is complete. I would not relabel a local prototype improvement as production impact.

<details>
<summary>展开详解与追问</summary>

Explanation

This question contains a production-experience assumption. An honest boundary plus a concrete adjacent example is stronger than an invented percentage.

Follow-up

- What would you measure first?
  Unsupported material claims per evaluated answer and total cost per successful task under a fixed representative workload.

</details>
</details>
<!-- /interview-answer -->

- Q332 — Describe a time you had to optimize an existing process or workflow for efficiency or scalability.（来源：[questions.md:405](interview/questions/questions.md)；[03-project-deep-dive.md:26](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q332 -->
<details>
<summary>展开答案 · Q332</summary>

Interview Answer

In my financial Python work, I investigated performance bottlenecks and used vectorization, while also exploring parallel processing across more cores. I would explain the specific slow operation, why it was a bottleneck and what correctness checks I used. The key trade-off is that more parallelism can introduce overhead or complexity, so I would report the actual benchmark rather than assume more cores always helped.

<details>
<summary>展开详解与追问</summary>

Explanation

Confirmed: vectorization and parallel-processing attempts. Add the workload, hardware, timings and final selected approach from real evidence.

Follow-up

- What would you do before optimizing?
  Create a reproducible workload, verify correctness and profile to identify the actual limiting operation.

</details>
</details>
<!-- /interview-answer -->

- Q333 — Describe a challenging prompt engineering problem that you solved.（来源：[questions.md:406](interview/questions/questions.md)；[03-project-deep-dive.md:27](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q333 -->
<details>
<summary>展开答案 · Q333</summary>

Interview Answer

I would use a real Risk Copilot example only after identifying the exact prompt and failure. My answer would explain the ambiguous input, the output contract, the prompt or schema change and the test cases that checked it. I would separate a prompt fix from retrieval or tool-validation changes, because a prompt cannot supply missing evidence or enforce permissions by itself.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template: add the actual request, old output, prompt diff and observed result. No completed prompt-specific success has been confirmed in the conversation.

Follow-up

- How do you avoid overfitting a prompt?
  Keep representative held-out cases and test neighboring failure modes, not only the example that motivated the change.

</details>
</details>
<!-- /interview-answer -->

- Q334 — Is there an actual eval framework, or is it vibes-based?（来源：[questions.md:407](interview/questions/questions.md)）

<!-- interview-answer Q334 -->
<details>
<summary>展开答案 · Q334</summary>

Interview Answer

I would show the actual evaluation artifacts rather than answer from memory. Risk Copilot has evaluation-related code in its study roadmap, but I should verify the current runner, dataset and results before claiming a complete framework. A credible demonstration includes versioned queries, reference evidence or outcomes, repeatable execution and failure analysis. Tests that run are useful only if their expectations are independent and meaningful.

<details>
<summary>展开详解与追问</summary>

Explanation

Distinguish code that exists, evaluation that has actually run and results reviewed by you. Do not claim the planned held-out study is already complete.

Follow-up

- What makes an evaluation more than a demo?
  Reproducible cases and criteria, a baseline, independent checks and documented failures rather than selected successful examples.

</details>
</details>
<!-- /interview-answer -->

- Q335 — Present a "proud" project to a panel: design decisions, trade-offs, what broke, and what you'd change.（来源：[questions.md:408](interview/questions/questions.md)）

<!-- interview-answer Q335 -->
<details>
<summary>展开答案 · Q335</summary>

Interview Answer

I would present my Python library or Risk Copilot around one user problem, the main data flow and a small number of consequential decisions. I would show what broke, how I diagnosed it and what evidence supports the result. I would distinguish my work from AI assistance and mark unfinished capabilities clearly. I would close with the highest-value next improvement, not a list of every possible feature.

<details>
<summary>展开详解与追问</summary>

Explanation

Prepare a diagram and one deep code path. Use the library for stronger professional ownership and Risk Copilot for current AI learning, without blending their deployment histories.

Follow-up

- What would you change today?
  Name a specific boundary or validation gap you can demonstrate, such as preserved exception context or retrieval evaluation coverage.

</details>
</details>
<!-- /interview-answer -->

- Q336 — Tell me about your past projects. (Apple, Discord, Anduril)（来源：[questions.md:409](interview/questions/questions.md)）

<!-- interview-answer Q336 -->
<details>
<summary>展开答案 · Q336</summary>

Interview Answer

My professional projects center on stochastic modeling, economic scenario generation and hedge-risk tools, implemented mainly in Python. I have also built a Python library and worked on debugging, refactoring and performance. Risk Copilot is my AI learning project. I would choose one example relevant to the role and distinguish established financial-engineering experience from newer applied-AI practice.

<details>
<summary>展开详解与追问</summary>

Explanation

Keep the overview short, then invite a technical deep dive. Do not imply the employer used Risk Copilot or that every project was individually owned end to end.

Follow-up

- Which project best demonstrates your engineering depth?
  The professional Python tool whose requirements, code, failure modes and validation I can explain most concretely.

</details>
</details>
<!-- /interview-answer -->

- Q337 — Tell me about a recent/favorite project and some of the difficulties you had. (Meta)（来源：[questions.md:410](interview/questions/questions.md)；[questions.md:515](interview/questions/questions.md)）

<!-- interview-answer Q337 -->
<details>
<summary>展开答案 · Q337</summary>

Interview Answer

Risk Copilot is a recent project I am using to connect my financial background with applied AI. The difficult part has been moving from plausible answers to evidence-backed behavior: retrieval quality, unanticipated corner cases and appropriate safeguards. AI wrote much of the code, and I am building ownership by tracing and testing it. I would discuss one actual failure and the evidence for any fix, without claiming the whole improvement plan is finished.

<details>
<summary>展开详解与追问</summary>

Explanation

A favorite project can still be incomplete. Explain current state and learning rather than manufacture user or production impact.

Follow-up

- What is the next technical milestone?
  A reproducible evaluation baseline and a small verified improvement before expanding features.

</details>
</details>
<!-- /interview-answer -->

- Q338 — Tell me about a technical challenge that you have overcome.（来源：[questions.md:411](interview/questions/questions.md)；[03-project-deep-dive.md:28](interview/questions/03-project-deep-dive.md)）

<!-- interview-answer Q338 -->
<details>
<summary>展开答案 · Q338</summary>

Interview Answer

One concrete issue in my Python library was that broad try/except handling obscured underlying errors while results could still look plausible. I traced the failure toward the original error rather than accepting the surface output. The lesson is that numerical software needs meaningful error propagation and independent checks. I would add the exact exception path and corrective change from the code before presenting a complete outcome.

<details>
<summary>展开详解与追问</summary>

Explanation

The reported issue is confirmed; the exact fix and before/after result need the user's evidence. Avoid describing a particular patch as done unless verified.

Follow-up

- Why was this more dangerous than a crash?
  A plausible wrong result can travel downstream without triggering investigation, whereas an explicit failure exposes uncertainty.

</details>
</details>
<!-- /interview-answer -->

- Q339 — Tell me about the greatest accomplishment of your career. (Meta)（来源：[questions.md:412](interview/questions/questions.md)）

<!-- interview-answer Q339 -->
<details>
<summary>展开答案 · Q339</summary>

Interview Answer

I would select a genuine financial-engineering accomplishment rather than invent a dramatic AI story. A useful candidate is my work on an economic scenario generator, hedge-risk tool or Python library, where I can explain the technical responsibility and validation. I would fill in the business need, my specific contribution and the verified outcome from actual records before calling it my greatest accomplishment.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: choose the real project and explain why its outcome matters to you. No exact impact metric or stakeholder reaction has been supplied.

Follow-up

- How do you separate team impact from your role?
  Describe the team's result, then identify the decisions and deliverables for which you were personally responsible.

</details>
</details>
<!-- /interview-answer -->

- Q340 — What level of prompts have you written? What kind of projects did you work on?（来源：[questions.md:413](interview/questions/questions.md)）

<!-- interview-answer Q340 -->
<details>
<summary>展开答案 · Q340</summary>

Interview Answer

My AI prompting work is tied to learning and building Risk Copilot, and I have completed an agentic-AI course while progressing through the engineering material. I would show a concrete prompt, tool schema or debugging interaction I actually used. I am aiming to design and review AI-assisted implementations, so I focus on requirements, inputs/outputs, failure cases and verification rather than claiming prompt sophistication from length alone.

<details>
<summary>展开详解与追问</summary>

Explanation

Course completion and project use are confirmed. Exact model versions and prompt experiments should be checked before naming them.

Follow-up

- What makes a good engineering prompt?
  A clear contract and testable outcome, with relevant context and constraints, followed by independent review of the result.

</details>
</details>
<!-- /interview-answer -->

- Q341 — Give a specific example of conflict with another person, how resolution took form, and the rationale behind the choices you made.（来源：[questions.md:417](interview/questions/questions.md)）

<!-- interview-answer Q341 -->
<details>
<summary>展开答案 · Q341</summary>

Interview Answer

I would use a real disagreement and explain it without blaming the other person: we differed on [specific decision], and I was responsible for [actual scope]. I clarified the shared objective, asked about their constraints and compared options using [evidence or experiment]. We agreed on [decision], and the outcome was [verified result]. I would also state what I changed in my own view.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template; no interpersonal conflict story has been provided. Replace every bracket with a real event before using it as a past-tense answer.

Follow-up

- What if the other person was right?
  Explain the evidence that changed your mind and how you supported the resulting decision.

</details>
</details>
<!-- /interview-answer -->

- Q342 — How do you collaborate with non-technical stakeholders?（来源：[questions.md:418](interview/questions/questions.md)）

<!-- interview-answer Q342 -->
<details>
<summary>展开答案 · Q342</summary>

Interview Answer

I start with the decision the stakeholder needs to make and the cost of a wrong result. I translate modeling or AI behavior into concrete examples, show uncertainty and agree on acceptance criteria in their language. I would use a financial-tool example I actually worked on, explaining how scenario assumptions affect the output without requiring the audience to know the implementation.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a working approach, not a claim that a specific meeting occurred. Add a real stakeholder and decision to turn it into an experience story.

Follow-up

- How do you check understanding?
  Ask the stakeholder to interpret an example or choose between explicit trade-offs rather than simply asking whether the explanation was clear.

</details>
</details>
<!-- /interview-answer -->

- Q343 — How do you manage workload in a distributed team?（来源：[questions.md:419](interview/questions/questions.md)）

<!-- interview-answer Q343 -->
<details>
<summary>展开答案 · Q343</summary>

Interview Answer

I would make ownership, priorities, dependencies and completion criteria visible in a shared work system. I separate focused work from coordination, communicate blockers early and use concise written decisions so time zones do not require every discussion to be synchronous. I would base any claim about distributed-team experience on an actual team arrangement rather than infer it from my title.

<details>
<summary>展开详解与追问</summary>

Explanation

A good example includes a blocked dependency, how it was escalated and the effect on delivery. Those facts remain to be supplied.

Follow-up

- How do you handle competing urgent requests?
  Compare impact and deadlines with the responsible owner, make the trade-off explicit and update commitments promptly.

</details>
</details>
<!-- /interview-answer -->

- Q344 — Conflict handling.（来源：[questions.md:420](interview/questions/questions.md)）

<!-- interview-answer Q344 -->
<details>
<summary>展开答案 · Q344</summary>

Interview Answer

I would first separate the shared goal from the disputed approach, understand the other person's constraints and agree on evidence that can resolve the disagreement. If a small experiment is possible, I prefer it to repeated opinion exchanges. Once a decision is made, I commit to it and document unresolved risks. For a behavioral example I would use a real event, not this general method alone.

<details>
<summary>展开详解与追问</summary>

Explanation

The prompt is broad. A concrete conflict, personal action and observed outcome are required for a complete past-experience response.

Follow-up

- When would you escalate?
  When authority, risk or a blocked decision requires it, presenting options and evidence rather than a personal complaint.

</details>
</details>
<!-- /interview-answer -->

- Q345 — Describe a time you disagreed with a team member about how to approach a problem. How did you handle it?（来源：[questions.md:421](interview/questions/questions.md)）

<!-- interview-answer Q345 -->
<details>
<summary>展开答案 · Q345</summary>

Interview Answer

My answer would identify a real technical disagreement, the constraint each person prioritized and how I tested the alternatives. I would say: I initially preferred [A] because [reason]; my colleague raised [valid concern]. We compared [evidence], chose [option] and observed [result]. The important part is showing constructive reasoning and any change in my own position, not proving I won.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. A disagreement about vectorization versus parallelism could be used only if it actually happened with another person.

Follow-up

- What did you learn about collaboration?
  State a specific behavior you changed, such as agreeing on evaluation criteria before debating implementations.

</details>
</details>
<!-- /interview-answer -->

- Q346 — Tell me about a time you struggled to work with one of your colleagues. (Meta)（来源：[questions.md:422](interview/questions/questions.md)）

<!-- interview-answer Q346 -->
<details>
<summary>展开答案 · Q346</summary>

Interview Answer

I would discuss a real working mismatch in observable terms, such as unclear handoffs or different expectations, rather than label the colleague as difficult. I would explain the conversation I initiated, the agreement we made and whether it improved delivery. I would acknowledge my contribution to the problem and avoid inventing a conflict just to have a polished story.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: the colleague, behavior, intervention and outcome have not been provided. Keep private details unnecessary to the lesson out of the answer.

Follow-up

- What if the relationship did not fully improve?
  Explain the professional process that allowed the work to proceed and the remaining limitation honestly.

</details>
</details>
<!-- /interview-answer -->


<a id="day-27"></a>

### 周二 11/10

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Run Analytics; Percentiles; Cost Aggregation<br>LeetCode: [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/); [1174. Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/); [1907. Count Salary Categories](https://leetcode.com/problems/count-salary-categories/)<br>资料：[Run Analytics](Study%20topics/run-analytics.html); [Percentiles](Study%20topics/percentiles.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Agent Memory and Tool Contracts](Study%20topics/agent-memory-and-tool-contracts.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Query Controls and Clarification<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-27) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Conflict and Collaboration; Behavioral Questions / Leadership and Ownership — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Memory](Study%20topics/memory.html) |


<!-- quantvault-day 27 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1996 · LASSO for Return Prediction with Time-Series Validation](https://quantvault.org/problems.html?id=1996) · Regression · Hard

先修：先复习Lasso、Walk-Forward与基线；具体预测目标使用本地Workbench契约。

本次范围：Advanced: validation outline。只设计Lasso时间序列development folds和特征缩放，不执行整套投资回测。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-27)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q347 — Tell me about a time you handled a difficult stakeholder.（来源：[questions.md:423](interview/questions/questions.md)；[05-behavioral.md:32](interview/questions/05-behavioral.md)）

<!-- interview-answer Q347 -->
<details>
<summary>展开答案 · Q347</summary>

Interview Answer

I would choose a real stakeholder situation and describe the underlying constraint rather than the person's personality. My response would clarify the outcome they needed, show the evidence behind the technical limitation and offer feasible options with costs. I would record the agreed scope and communicate progress. The final result and stakeholder reaction must come from the actual event.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. Do not assume financial seniority implies a particular conflict or management responsibility.

Follow-up

- How do you respond to an impossible deadline?
  Explain the minimum safe scope and available trade-offs, then seek an explicit priority decision rather than silently overpromise.

</details>
</details>
<!-- /interview-answer -->

- Q348 — Tell me about a time you had to explain a complex technical concept to someone without a technical background.（来源：[questions.md:424](interview/questions/questions.md)）

<!-- interview-answer Q348 -->
<details>
<summary>展开答案 · Q348</summary>

Interview Answer

For a financial example, I would explain a scenario generator as a tool for exploring many plausible future paths, not predicting one certain future. I would show how different assumptions change a decision and separate model uncertainty from implementation error. To make this a past-tense story, I would add the actual audience, misunderstanding and evidence that the explanation helped.

<details>
<summary>展开详解与追问</summary>

Explanation

The domain example fits the user's confirmed work, but a specific stakeholder conversation is not confirmed.

Follow-up

- How do you avoid oversimplifying?
  Keep the decision-relevant assumptions and limitations, while removing implementation details that do not affect the choice.

</details>
</details>
<!-- /interview-answer -->

- Q349 — Tell me about a time you convinced someone to change their mind.（来源：[questions.md:425](interview/questions/questions.md)；[05-behavioral.md:34](interview/questions/05-behavioral.md)）

<!-- interview-answer Q349 -->
<details>
<summary>展开答案 · Q349</summary>

Interview Answer

I would describe a genuine case where evidence changed a decision: the initial position was [view], I understood its rationale, and I presented [test or example] tied to our shared goal. The person changed [specific decision], with [observed result]. I would also mention what evidence could have changed my own mind, showing that persuasion was about the outcome rather than winning.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template; no confirmed persuasion event exists in the conversation.

Follow-up

- What if they remain unconvinced?
  Clarify the unresolved assumption, propose a bounded experiment or escalate the decision through the appropriate owner.

</details>
</details>
<!-- /interview-answer -->

- Q350 — What types of team members do you find difficult to work with? (Visa)（来源：[questions.md:426](interview/questions/questions.md)）

<!-- interview-answer Q350 -->
<details>
<summary>展开答案 · Q350</summary>

Interview Answer

I find it challenging when expectations or ownership remain implicit, but I try to address the behavior rather than categorize people. I make responsibilities and decision criteria explicit, ask what constraints I may be missing and agree on a communication pattern. If the problem continues, I raise its effect on delivery with specific examples. I would not criticize former colleagues or claim I never encounter friction.

<details>
<summary>展开详解与追问</summary>

Explanation

A self-aware answer identifies a workable response and your own responsibility, not a disliked personality type.

Follow-up

- What do you change in yourself?
  Adapt the level of detail, timing or communication channel when it helps the other person work effectively.

</details>
</details>
<!-- /interview-answer -->

- Q351 — Describe communication to resolve ambiguity. (Anthropic)（来源：[questions.md:427](interview/questions/questions.md)）

<!-- interview-answer Q351 -->
<details>
<summary>展开答案 · Q351</summary>

Interview Answer

I would turn ambiguity into a small set of concrete decisions: who is the user, what output supports their task, what errors are unacceptable and what evidence counts as success? I would write examples, including an ambiguous and a failure case, and ask stakeholders to choose among explicit trade-offs. I would keep unresolved assumptions visible instead of letting them become accidental requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

Use a real project example if asked for an event. The general approach is not evidence of a past meeting or outcome.

Follow-up

- What is a useful artifact?
  A one-page contract with sample inputs, expected outputs, non-goals and open decisions.

</details>
</details>
<!-- /interview-answer -->

- Q352 — Describe a time you had trouble communicating with stakeholders and how you overcame it. (OpenAI)（来源：[questions.md:428](interview/questions/questions.md)）

<!-- interview-answer Q352 -->
<details>
<summary>展开答案 · Q352</summary>

Interview Answer

I would use a real case where my initial explanation failed. The answer would identify what I assumed the stakeholder understood, how I noticed the mismatch and how I changed the explanation, for example through a concrete scenario or visual. I would report the actual decision or feedback afterward and what I now do earlier to confirm understanding.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. Do not turn the user's modeling background into an invented communication incident.

Follow-up

- How would you recognize the misunderstanding?
  Through the stakeholder's interpretation or decision, not merely whether they nodded during the presentation.

</details>
</details>
<!-- /interview-answer -->

- Q353 — Have you mentored teammates remotely?（来源：[questions.md:432](interview/questions/questions.md)）

<!-- interview-answer Q353 -->
<details>
<summary>展开答案 · Q353</summary>

Interview Answer

I would answer directly from my experience. If I have not formally mentored teammates remotely, I would say so and describe only real code reviews or knowledge-sharing that are relevant. A complete example would explain the person's goal, how we structured feedback and practice, and what changed over time. I would not claim mentorship or promotion outcomes based on my VP title.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: whether mentoring occurred, in what format and with what result has not been established.

Follow-up

- What would effective remote mentoring look like?
  Regular focused reviews, concrete exercises, written feedback and increasing independent ownership rather than constant live supervision.

</details>
</details>
<!-- /interview-answer -->

- Q354 — Describe a time you drove technical decisions at scale and guided teams through complex challenges.（来源：[questions.md:433](interview/questions/questions.md)）

<!-- interview-answer Q354 -->
<details>
<summary>展开答案 · Q354</summary>

Interview Answer

I would choose an actual decision with multi-team or large-scale impact only if I have one. I would explain the constraints, alternatives, stakeholders, migration or validation approach and the evidence behind the outcome. Otherwise I would use a smaller financial-tool example and state its scope accurately. Senior judgment is shown through responsibility and reasoning, not by inflating the number of users or teams.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. The conversation confirms eight years of work, not a specific multi-team architectural initiative.

Follow-up

- How do you gain alignment?
  Agree on requirements and risks, document trade-offs and involve the people responsible for operating the result.

</details>
</details>
<!-- /interview-answer -->

- Q355 — Describe a time you mentored engineers who went on to senior roles.（来源：[questions.md:434](interview/questions/questions.md)）

<!-- interview-answer Q355 -->
<details>
<summary>展开答案 · Q355</summary>

Interview Answer

I would not claim that I mentored engineers into senior roles unless I can substantiate it. If true, I would describe the individual's starting goal, the responsibilities I helped them practice, the feedback and increasing autonomy, and their eventual outcome without taking sole credit. If not, I would offer a real coaching example or explain how I would approach mentoring.

<details>
<summary>展开详解与追问</summary>

Explanation

The user's title does not establish people-management or promotion responsibility. This answer requires actual personal evidence.

Follow-up

- How do you measure mentoring success?
  By the person's stronger independent judgment and ownership, not only by a promotion title.

</details>
</details>
<!-- /interview-answer -->

- Q356 — Tell me about a time you showed leadership. (OpenAI EM)（来源：[questions.md:435](interview/questions/questions.md)）

<!-- interview-answer Q356 -->
<details>
<summary>展开答案 · Q356</summary>

Interview Answer

I would describe leadership through a real action: identifying an important problem, creating clarity, taking responsibility and helping others reach a result. My Python-library work may provide an example if I can show the actual initiative and collaboration. I would explain what I personally changed and what the team achieved, while avoiding claims about management authority that have not been established.

<details>
<summary>展开详解与追问</summary>

Explanation

A technical leadership story can work without direct reports. Add the actual scope, stakeholders and result before using it.

Follow-up

- What if you had no formal authority?
  Explain how evidence, clear communication and follow-through helped align the work.

</details>
</details>
<!-- /interview-answer -->

- Q357 — Tell me about a time you led an initiative or took ownership of a challenging task.（来源：[questions.md:436](interview/questions/questions.md)；[05-behavioral.md:39](interview/questions/05-behavioral.md)）

<!-- interview-answer Q357 -->
<details>
<summary>展开答案 · Q357</summary>

Interview Answer

A potential example is taking responsibility for improving the structure of my Python library after the initial functions became difficult to maintain. I did refactor it, and I would describe the specific boundary I changed, how I preserved required behavior and what became easier. I would add the actual motivation and outcome from the code, rather than inventing adoption or delivery metrics.

<details>
<summary>展开详解与追问</summary>

Explanation

Confirmed refactoring provides a starting point, but initiative timing and collaboration still need factual detail.

Follow-up

- How do you demonstrate ownership?
  Show that you followed the issue through diagnosis, change and verification rather than only proposing a solution.

</details>
</details>
<!-- /interview-answer -->

- Q358 — Tell me about a time you took the initiative to solve a problem.（来源：[questions.md:437](interview/questions/questions.md)）

<!-- interview-answer Q358 -->
<details>
<summary>展开答案 · Q358</summary>

Interview Answer

I would use the library refactor or an actual debugging investigation if I initiated it. I would explain the recurring problem, why it mattered, the smallest improvement I made and how I checked it. The user's confirmed experience supports refactoring and error investigation, but I should verify who initiated the work before presenting it as an unsolicited initiative.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required for the trigger and outcome. Initiative is not the same as merely completing an assigned task.

Follow-up

- How do you avoid unnecessary scope expansion?
  Tie the improvement to a visible failure or maintenance cost and keep the change bounded.

</details>
</details>
<!-- /interview-answer -->

- Q359 — Tell me about a time when you made short-term sacrifices for long-term gains.（来源：[questions.md:438](interview/questions/questions.md)）

<!-- interview-answer Q359 -->
<details>
<summary>展开答案 · Q359</summary>

Interview Answer

My library refactor is a possible example of accepting short-term implementation effort to improve long-term maintainability. I would explain the concrete structural problem, what work I deferred, how I preserved behavior and the later benefit I actually observed. I would not claim reduced maintenance hours unless I measured them. If the refactor did not involve a real sacrifice, I would choose another event.

<details>
<summary>展开详解与追问</summary>

Explanation

The refactor is confirmed; its schedule cost and later benefit must be supplied from actual experience.

Follow-up

- How do you know the investment was worthwhile?
  Use a real later change or bug fix that became easier, supported by code or recorded effort rather than a generic claim.

</details>
</details>
<!-- /interview-answer -->

- Q360 — How do you prioritize tasks?（来源：[questions.md:439](interview/questions/questions.md)；[05-behavioral.md:41](interview/questions/05-behavioral.md)）

<!-- interview-answer Q360 -->
<details>
<summary>展开答案 · Q360</summary>

Interview Answer

I prioritize by user or business impact, correctness and failure risk, dependencies and time sensitivity. For an AI project I would fix wrong numerical outputs or unsafe tool behavior before adding features. I make scope trade-offs explicit and protect time for validation. When priorities conflict, I ask the responsible stakeholder to choose with the consequences visible rather than quietly accepting incompatible deadlines.

<details>
<summary>展开详解与追问</summary>

Explanation

A prioritization framework needs an example to become an experience story. The project plan's order is a future approach, not proof of past delivery.

Follow-up

- What do you do with a low-value urgent request?
  Clarify the deadline's reason and compare it with displaced work before committing.

</details>
</details>
<!-- /interview-answer -->

- Q361 — How do you lead under risk and uncertainty? (Anthropic)（来源：[questions.md:440](interview/questions/questions.md)）

<!-- interview-answer Q361 -->
<details>
<summary>展开答案 · Q361</summary>

Interview Answer

I make uncertainty explicit, distinguish reversible from hard-to-reverse decisions and gather the cheapest evidence that can change the choice. I use small experiments, conservative defaults for consequential outputs and clear stop conditions. I communicate what is known, assumed and still unverified. For a past example, I would use a real financial-modeling decision and its actual validation evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not imply that uncertainty disappears after a meeting or that a pilot proves production reliability.

Follow-up

- When do you decide without complete information?
  When delay has a higher cost and the risk is bounded, with a documented assumption and a plan to revise.

</details>
</details>
<!-- /interview-answer -->

- Q362 — As a manager, how do you handle trade-offs? (OpenAI EM)（来源：[questions.md:441](interview/questions/questions.md)）

<!-- interview-answer Q362 -->
<details>
<summary>展开答案 · Q362</summary>

Interview Answer

I would first clarify whether the role expects people-management experience; my VP title alone does not establish that. My decision approach is to make the goal, constraints and downside of each option explicit, then choose the smallest scope that meets critical requirements. I would describe a real technical trade-off from my library or modeling work and distinguish it from hypothetical management practice.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required for team size, authority and management decisions. Avoid answering as an established engineering manager unless accurate.

Follow-up

- How do you communicate a rejected option?
  Explain which constraint it failed and what future evidence would make it worth reconsidering.

</details>
</details>
<!-- /interview-answer -->

- Q363 — How do you manage your team's career growth? (OpenAI EM)（来源：[questions.md:442](interview/questions/questions.md)）

<!-- interview-answer Q363 -->
<details>
<summary>展开答案 · Q363</summary>

Interview Answer

I would not assume I have managed career growth solely because of my title. If I have direct experience, I would describe individual goals, feedback, stretch assignments and how I increased ownership fairly. Otherwise I would state that boundary and discuss the approach I would take. A credible answer supports growth with concrete evidence rather than promising promotions I cannot control.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: direct reports and review responsibilities are unknown.

Follow-up

- How would you avoid a one-size-fits-all plan?
  Agree on the person's goals and current gaps, then choose relevant opportunities and review progress together.

</details>
</details>
<!-- /interview-answer -->

- Q364 — Tell me about a time when you worked on a project with a tight deadline.（来源：[questions.md:443](interview/questions/questions.md)；[05-behavioral.md:45](interview/questions/05-behavioral.md)）

<!-- interview-answer Q364 -->
<details>
<summary>展开答案 · Q364</summary>

Interview Answer

I would choose a real deadline and state what was fixed, what could change and what failure was unacceptable. I would explain how I reduced scope, sequenced dependencies and protected validation rather than simply worked longer. The answer ends with the actual delivery outcome and any remaining limitation. No specific deadline incident has been supplied, so the event and result need to be filled in.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. A financial tool's correctness checks should not be presented as optional polish sacrificed for speed.

Follow-up

- What would you cut first?
  Optional features or presentation work before checks needed to trust the core result.

</details>
</details>
<!-- /interview-answer -->

- Q365 — Explain management style, execution strategy, and culture choices. (Anthropic)（来源：[questions.md:444](interview/questions/questions.md)）

<!-- interview-answer Q365 -->
<details>
<summary>展开答案 · Q365</summary>

Interview Answer

I would describe my actual responsibility level before discussing management style. My preferred execution approach is clear ownership, small reviewable changes, explicit trade-offs and evidence-based validation. I value a culture where errors can be surfaced early without hiding them behind plausible outputs. I would connect that preference to the library debugging experience and add genuine team examples where available.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a statement of working preferences, not proof of people-management history or culture outcomes.

Follow-up

- What behavior would you encourage?
  Raising uncertain assumptions and failed tests promptly, with enough context for others to help resolve them.

</details>
</details>
<!-- /interview-answer -->


<a id="day-28"></a>

### 周三 11/11

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Vectorization; Profiling; Performance<br>LeetCode: [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/); [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)<br>资料：[Parallelism](Study%20topics/parallelism.html); [GIL](Study%20topics/gil.html); [Vectorization](Study%20topics/vectorization.html); [Profiling](Study%20topics/profiling.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Agent Memory and Tool Contracts](Study%20topics/agent-memory-and-tool-contracts.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Text-to-SQL Evaluation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-28) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Technical Decision-Making; Behavioral Questions / Failure and Learning — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[MCP Fundamentals](Study%20topics/mcp-fundamentals.html); [Text-to-SQL Evaluation](Study%20topics/text-to-sql-evaluation.html) |


刷题对应说明：LeetCode 对应数组与算法复习；Vectorization 和 Profiling 使用自定义实验。

<!-- quantvault-day 28 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1677 · Ridge Regression Regularization in Time Series](https://quantvault.org/problems.html?id=1677) · Regression · Medium

先修：先复习Ridge与Hyperparameter Tuning。

本次范围：Model selection。解释alpha、训练窗口、预测期限与Ridge稳定性，所有配置在development数据上选择。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-28)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q366 — Which model provider do you prefer for creative writing tasks?（来源：[questions.md:448](interview/questions/questions.md)）

<!-- interview-answer Q366 -->
<details>
<summary>展开答案 · Q366</summary>

Interview Answer

I would not name a universally best provider. I would compare candidates on the intended writing style, instruction adherence, revision quality, latency, cost and permitted data use using a blinded sample of actual tasks. My preference would be based on the results and current model availability, with a clear statement of where another model performed better.

<details>
<summary>展开详解与追问</summary>

Explanation

Provider rankings and model offerings change. A personal preference should be grounded in direct use rather than a remembered benchmark.

Follow-up

- How would you evaluate creative quality?
  Use a rubric covering the brief, coherence, voice and originality, with multiple human judgments where the decision matters.

</details>
</details>
<!-- /interview-answer -->

- Q367 — How do you compare AI coding assistants like Cursor, Windsurf, or Claude Code?（来源：[questions.md:449](interview/questions/questions.md)）

<!-- interview-answer Q367 -->
<details>
<summary>展开答案 · Q367</summary>

Interview Answer

I compare coding assistants on repository understanding, edit quality, test use, tool permissions, controllability and recovery from mistakes. I would run the same bounded tasks and inspect the final diff and verification, not just how quickly code appears. My own use is AI-assisted, so I would explain how I review and validate outputs instead of claiming the assistant's success as independent coding skill.

<details>
<summary>展开详解与追问</summary>

Explanation

Specific products change quickly; use current observed behavior rather than a permanent ranking. Include privacy and cost constraints.

Follow-up

- What is a useful comparison task?
  A small real bug with a hidden edge case, requiring a targeted fix and meaningful test rather than a greenfield demo.

</details>
</details>
<!-- /interview-answer -->

- Q368 — What recent AI paper or development caught your attention?（来源：[questions.md:450](interview/questions/questions.md)；[05-behavioral.md:25](interview/questions/05-behavioral.md)）

<!-- interview-answer Q368 -->
<details>
<summary>展开答案 · Q368</summary>

Interview Answer

One foundational paper I would discuss is FlashAttention because it shows how reducing memory movement can improve exact attention without changing the mathematical objective. That connects to my interest in profiling and vectorization. I would be clear that it is not a recent paper. If the interviewer specifically asks for something recent, I would select and read a current primary source before naming it.

<details>
<summary>展开详解与追问</summary>

Explanation

The learning point is hardware-aware implementation rather than a claimed personal GPU contribution. Do not call an old paper recent to satisfy the question.

Follow-up

- What would you explain from the paper?
  The memory hierarchy bottleneck, tiled computation and why avoiding a materialized attention matrix can help.

</details>
</details>
<!-- /interview-answer -->

- Q369 — What side projects have you built with AI?（来源：[questions.md:451](interview/questions/questions.md)）

<!-- interview-answer Q369 -->
<details>
<summary>展开答案 · Q369</summary>

Interview Answer

Risk Copilot is my current AI side project. It connects financial-risk use cases with retrieval and agent-style workflows, and much of the code was generated with AI assistance. I am improving my understanding through code review, retrieval experiments and corner-case testing. The Snowflake analytics assistant and research workbench are planned projects, so I would not list them as completed yet.

<details>
<summary>展开详解与追问</summary>

Explanation

Keep the project status current before each interview. Course exercises should also be distinguished from independently developed systems.

Follow-up

- What would you demonstrate live?
  A narrow reproducible request and a known failure or limitation that I can explain from the code.

</details>
</details>
<!-- /interview-answer -->

- Q370 — Why a particular storage solution over alternatives?（来源：[questions.md:452](interview/questions/questions.md)）

<!-- interview-answer Q370 -->
<details>
<summary>展开答案 · Q370</summary>

Interview Answer

I would connect the chosen store to the actual access pattern, consistency, schema and operating burden. For example, durable experiment state benefits from relational constraints and transactions, while retrieval may need a vector index. I would name the current project's actual store only after verifying it and explain what evidence would justify changing it. Familiarity is a valid constraint, but not the only rationale.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not claim a storage decision you merely inherited from AI-generated code. Explain whether you selected, reviewed or plan to replace it.

Follow-up

- What alternative matters most?
  The simplest existing component that could meet the requirement without another operational dependency.

</details>
</details>
<!-- /interview-answer -->

- Q371 — How did you decide which model to use for inference?（来源：[questions.md:453](interview/questions/questions.md)）

<!-- interview-answer Q371 -->
<details>
<summary>展开答案 · Q371</summary>

Interview Answer

I would describe the actual selection process if I ran one; otherwise I would say the initial model was a starting choice and a comparison is still pending. My intended evaluation considers task correctness, tool/schema reliability, latency, token cost and data constraints. I would preserve the same cases and configuration across candidates and report limitations rather than claim an unmeasured optimum.

<details>
<summary>展开详解与追问</summary>

Explanation

A model used in a course or default template is not automatically a personally validated production choice.

Follow-up

- What would make you switch models?
  A reproducible improvement on the target workload that meets the quality floor and justifies migration and maintenance costs.

</details>
</details>
<!-- /interview-answer -->

- Q372 — What frameworks are you familiar with? What have you built before?（来源：[questions.md:454](interview/questions/questions.md)）

<!-- interview-answer Q372 -->
<details>
<summary>展开答案 · Q372</summary>

Interview Answer

My strongest foundation is Python for financial modeling and library development. I am learning applied AI through courses and Risk Copilot, where I need to verify and understand the actual framework components I discuss. I would distinguish using a library client, reading framework code and deploying a framework in production. I would rather demonstrate one component deeply than claim broad expertise from a dependency list.

<details>
<summary>展开详解与追问</summary>

Explanation

Before the interview, inspect the project's imports and configuration and prepare a real execution trace. The exact framework version is not assumed here.

Follow-up

- How do you show depth?
  Explain a key abstraction, a failure you encountered and a small change you can make without treating the framework as a black box.

</details>
</details>
<!-- /interview-answer -->

- Q373 — Which models have you worked with? Which cloud providers are you familiar with?（来源：[questions.md:455](interview/questions/questions.md)）

<!-- interview-answer Q373 -->
<details>
<summary>展开答案 · Q373</summary>

Interview Answer

I would list only models and cloud services I have actually used, then state the depth: API calls, local experiments, configuration or deployment. My confirmed experience includes Python clients and using company CI checks, but not personally deploying that CI system. AWS deployment for Risk Copilot is in the plan, so I would not present it as completed until I can show real evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required for exact model and cloud names. Avoid inferring them from course titles or future project tasks.

Follow-up

- What if the role asks about a service you have not used?
  Say so, explain the transferable concept and describe a bounded validation exercise rather than claim hands-on experience.

</details>
</details>
<!-- /interview-answer -->

- Q374 — Tell me about a time when you solved a complex problem and how you went about it.（来源：[questions.md:456](interview/questions/questions.md)；[05-behavioral.md:49](interview/questions/05-behavioral.md)）

<!-- interview-answer Q374 -->
<details>
<summary>展开答案 · Q374</summary>

Interview Answer

A concrete starting point is the library issue where broad exception handling hid the underlying failure and outputs could look plausible. I would explain how I narrowed the failing input, followed the error path and separated numerical expectations from the observed result. I would then show the actual correction and regression check from the code. The lesson is to make uncertainty and failure visible rather than accept a near-looking answer.

<details>
<summary>展开详解与追问</summary>

Explanation

The issue is confirmed, but the exact diagnostic steps and fix should match the user's real work. Add only steps actually performed.

Follow-up

- What made the problem complex?
  Explain the real interaction between layers or assumptions, not simply that the codebase was large.

</details>
</details>
<!-- /interview-answer -->

- Q375 — Tell me about a time when a technical misjudgment led to a project delay. What did you learn? (Anthropic)（来源：[questions.md:457](interview/questions/questions.md)）

<!-- interview-answer Q375 -->
<details>
<summary>展开答案 · Q375</summary>

Interview Answer

I would choose a real technical misjudgment and own the decision directly: I assumed [assumption], which proved wrong when [evidence], causing [actual effect]. I corrected course through [action] and changed [specific practice]. I would not invent a project delay from the fact that my library later needed refactoring. If no suitable event is available, I would state a smaller real mistake accurately.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. The answer needs an actual delay and your causal role, not a generic lesson.

Follow-up

- What prevents recurrence?
  A targeted change such as an early integration test or explicit assumption check, not a promise to be more careful.

</details>
</details>
<!-- /interview-answer -->

- Q376 — What would you do if, midway through a project, you realized it was actually unfeasible? (Anthropic)（来源：[questions.md:458](interview/questions/questions.md)）

<!-- interview-answer Q376 -->
<details>
<summary>展开答案 · Q376</summary>

Interview Answer

I would verify which assumption makes the project infeasible, quantify the gap and communicate it early. I would offer options such as narrower scope, a simpler baseline, different data access or stopping the work, with cost and risk for each. I would preserve useful validated artifacts and document the decision. I would not continue silently to protect sunk effort.

<details>
<summary>展开详解与追问</summary>

Explanation

Feasibility may concern quality, data rights, budget or latency; each leads to a different response.

Follow-up

- When would you recommend stopping?
  When no bounded alternative meets the essential value and risk constraints at an acceptable cost.

</details>
</details>
<!-- /interview-answer -->

- Q377 — Describe a time you had to quickly learn a new technology or methodology to complete a project.（来源：[questions.md:459](interview/questions/questions.md)）

<!-- interview-answer Q377 -->
<details>
<summary>展开答案 · Q377</summary>

Interview Answer

My current transition involves learning agentic and LLM engineering and applying it to Risk Copilot. I completed the agentic course and have been using the project to expose gaps beyond the lectures. For a deadline-driven professional story, I would add a real technology, task and result from my work rather than imply the current course study happened under a business deadline.

<details>
<summary>展开详解与追问</summary>

Explanation

Confirmed learning progress is useful but does not prove rapid mastery. Show one concept transferred into an explained and tested implementation.

Follow-up

- How do you learn efficiently?
  Start from a working minimal example, vary one thing, explain the behavior and apply it to a real failure or requirement.

</details>
</details>
<!-- /interview-answer -->

- Q378 — Most challenging project.（来源：[questions.md:464](interview/questions/questions.md)）

<!-- interview-answer Q378 -->
<details>
<summary>展开答案 · Q378</summary>

Interview Answer

I would choose the most challenging actual project from my stochastic-modeling, scenario-generation or hedge-risk work. I would explain the hardest technical uncertainty, my role, the alternatives and the validation rather than describe every feature. Risk Copilot is a newer AI project and can illustrate my transition, but I would not automatically call it my most difficult professional accomplishment.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: the exact project and challenge have not been ranked by the user.

Follow-up

- What should the interviewer remember?
  One difficult decision you owned and the evidence showing how you handled it.

</details>
</details>
<!-- /interview-answer -->

- Q379 — What would you do differently?（来源：[questions.md:465](interview/questions/questions.md)）

<!-- interview-answer Q379 -->
<details>
<summary>展开答案 · Q379</summary>

Interview Answer

For the library, I would examine whether clearer module boundaries and more precise exception handling earlier would have reduced later maintenance difficulty. For Risk Copilot, I would establish a small evaluation baseline before expanding behavior. These are lessons consistent with my reported experience, but I would connect each to a specific observed failure and avoid claiming a counterfactual time saving I cannot measure.

<details>
<summary>展开详解与追问</summary>

Explanation

A useful reflection names an actionable change and its trade-off, not a complete rewrite using today's preferred framework.

Follow-up

- What would you keep unchanged?
  The parts that already met the requirement and produced reliable evidence; hindsight does not make every original decision wrong.

</details>
</details>
<!-- /interview-answer -->

- Q380 — Tell me about a time when you received negative feedback and how you handled it.（来源：[questions.md:466](interview/questions/questions.md)）

<!-- interview-answer Q380 -->
<details>
<summary>展开答案 · Q380</summary>

Interview Answer

I would use a real feedback event and state the feedback accurately, my initial reaction, how I checked it and what I changed. The answer should include a visible later difference or an honest explanation of why I did not accept part of the feedback. No such event has been provided, so I would not fabricate a manager's criticism or reaction.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. Feedback about code structure could fit only if someone actually gave it.

Follow-up

- How do you respond when feedback is vague?
  Ask for a concrete example and the expected behavior, then agree on an observable improvement.

</details>
</details>
<!-- /interview-answer -->

- Q381 — What's a mistake you made, and what did you learn from it?（来源：[questions.md:467](interview/questions/questions.md)；[05-behavioral.md:56](interview/questions/05-behavioral.md)）

<!-- interview-answer Q381 -->
<details>
<summary>展开答案 · Q381</summary>

Interview Answer

One real lesson from my library work is that insufficient modularity made maintenance harder and led to a refactor. I would take responsibility for the original design choices I actually made, explain the specific coupling and show the change. I would also distinguish a design limitation from an individual error by someone else. Exact consequences and results must come from the real project.

<details>
<summary>展开详解与追问</summary>

Explanation

The initial modularity issue and refactor are confirmed; no invented outage or financial loss is needed to make the lesson meaningful.

Follow-up

- What changed in your practice?
  Use clearer computation/IO boundaries and testable contracts earlier, if that reflects the actual refactor and subsequent work.

</details>
</details>
<!-- /interview-answer -->

- Q382 — Describe a project that didn't go as planned. What did you learn? (Anthropic)（来源：[questions.md:468](interview/questions/questions.md)）

<!-- interview-answer Q382 -->
<details>
<summary>展开答案 · Q382</summary>

Interview Answer

I would describe a real mismatch between the plan and what happened, then explain how I recognized it and adjusted scope or implementation. Risk Copilot's poor results and unanticipated corner cases are potential examples, but I would identify one exact case rather than claim the entire project failed. I would show what is fixed, what remains and the evidence behind that distinction.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not equate an unfinished learning project with a production incident. A concrete failure is more useful than a dramatic label.

Follow-up

- What did you change in the plan?
  Tie the change to the root cause, such as evaluation before new features, rather than adding unrelated technology.

</details>
</details>
<!-- /interview-answer -->

- Q383 — Describe a project where your AI solution failed and how you addressed it. (Google DeepMind)（来源：[questions.md:469](interview/questions/questions.md)）

<!-- interview-answer Q383 -->
<details>
<summary>展开答案 · Q383</summary>

Interview Answer

In Risk Copilot, I have encountered poor answers and corner cases that motivated improving retrieval and adding safeguards. I would take one reproducible example and identify whether the evidence was missing, redundant or misinterpreted, then show the actual change and reevaluation. I would be explicit that this is a learning project and that planned improvements are not yet verified outcomes.

<details>
<summary>展开详解与追问</summary>

Explanation

An answer-quality failure is not automatically a model failure. Trace ingestion, retrieval, context and tools before changing the model.

Follow-up

- What if the change does not improve the score?
  Report that result, inspect the failure cases and preserve the simpler baseline instead of selecting a favorable anecdote.

</details>
</details>
<!-- /interview-answer -->

- Q384 — Why do you think we should NOT hire you? (Google, Visa)（来源：[questions.md:470](interview/questions/questions.md)）

<!-- interview-answer Q384 -->
<details>
<summary>展开答案 · Q384</summary>

Interview Answer

If you need someone who has already independently operated large-scale production ML or LLM infrastructure, that is a gap in my current experience. My strength is eight years of financial modeling and daily Python engineering, including library development, debugging and performance work. I am building applied-AI depth through Risk Copilot and structured practice. I would be a stronger fit where financial domain judgment and growing AI engineering skills both matter.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a candid fit statement, not self-dismissal. Do not claim production experience to erase the gap or undermine verified strengths.

Follow-up

- Why hire you despite that gap?
  For relevant financial-system judgment, Python experience and demonstrated ability to learn and validate a bounded AI workflow.

</details>
</details>
<!-- /interview-answer -->


<a id="day-29"></a>

### 周四 11/12

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Time-Series Joins; Missing Dates<br>LeetCode: [1148. Article Views I](https://leetcode.com/problems/article-views-i/); [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/)<br>资料：[LAG](Study%20topics/lag.html); [Date Queries](Study%20topics/date-queries.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI-Assisted Experiment Platform](Study%20topics/ai-assisted-experiment-platform.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Snowflake Query Performance<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-29) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Failure and Learning; Behavioral Questions / AI-Specific Behavioral; Behavioral Questions / Culture and Motivation; Behavioral Questions / AI-Conducted Interview Follow-ups — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 29 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2126 · Comparing Forecasting Models for Daily Asset Returns](https://quantvault.org/problems.html?id=2126) · Machine Learning · Medium

先修：先读Out-of-Sample Evaluation；本题题名是收益，举例可迁移到波动率但不能混淆目标。

本次范围：Evaluation protocol。比较两个预测模型前先冻结数据、日期、指标与基线；最终测试不用于反复调整。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-29)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q385 — Tell me about a time when you had to think outside the box to complete a task.（来源：[questions.md:471](interview/questions/questions.md)；[05-behavioral.md:59](interview/questions/05-behavioral.md)）

<!-- interview-answer Q385 -->
<details>
<summary>展开答案 · Q385</summary>

Interview Answer

I would choose a real instance where a simpler representation, decomposition or experiment resolved a difficult problem. My vectorization work could be relevant if it involved such a shift, but I would explain the actual transformation and result rather than label ordinary optimization as exceptional creativity. The story needs the original constraint, the unconventional idea and evidence that it worked.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required for the specific creative step. Avoid inventing a clever technique beyond the user's reported work.

Follow-up

- How do you distinguish creativity from unnecessary novelty?
  The new approach should solve the constraint with a measurable or demonstrable benefit and acceptable complexity.

</details>
</details>
<!-- /interview-answer -->

- Q386 — How do you stay updated with fast-changing AI tech? (very common in 2026)（来源：[questions.md:475](interview/questions/questions.md)）

<!-- interview-answer Q386 -->
<details>
<summary>展开答案 · Q386</summary>

Interview Answer

I use a structured learning loop: study a focused topic, apply it in a small experiment or Risk Copilot, and verify details against primary documentation or papers. I have completed an agentic course and am progressing through engineering material. I would curate a few reliable sources and revisit only developments relevant to my target work rather than try every new framework.

<details>
<summary>展开详解与追问</summary>

Explanation

Social posts can identify a topic, but they are not final technical evidence. A useful learning artifact is an explanation and reproducible example.

Follow-up

- How do you decide what to ignore?
  Compare the development with my current skill gaps and project constraints, and defer it if it does not change a decision.

</details>
</details>
<!-- /interview-answer -->

- Q387 — How do you collaborate with non-technical stakeholders on AI features? (very common in 2026)（来源：[questions.md:476](interview/questions/questions.md)）

<!-- interview-answer Q387 -->
<details>
<summary>展开答案 · Q387</summary>

Interview Answer

I start with the user's workflow and the consequences of a wrong answer. I demonstrate normal, ambiguous and failed cases, agree on when the system should ask or escalate, and define acceptance criteria in business terms. For financial stakeholders, I connect model uncertainty and evidence to decisions. I would add a real interaction before presenting this as a completed collaboration story.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not sell an AI feature using only a successful demo. Stakeholders need to understand what they will review and what remains automated.

Follow-up

- What is an important question to ask them?
  Which mistakes are tolerable, which require human review and which must block the workflow entirely?

</details>
</details>
<!-- /interview-answer -->

- Q388 — Can you give an example of a time when you addressed ethical concerns in an ML project?（来源：[questions.md:477](interview/questions/questions.md)）

<!-- interview-answer Q388 -->
<details>
<summary>展开答案 · Q388</summary>

Interview Answer

I have not provided a verified past ML ethics incident, so I would not invent one. My approach would be to identify the affected people, the potential harm and the actual decision the system influences, then review data use, fairness, access and oversight with appropriate owners. I would explain the trade-off and document the chosen mitigation using a real example when available.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required. A hypothetical risk analysis is valid when clearly labeled, but not as a claimed past event.

Follow-up

- What evidence would make the example credible?
  The specific risk, your action, the decision owner and a verifiable change in the product or process.

</details>
</details>
<!-- /interview-answer -->

- Q389 — Tell me about a time you made a safety-first decision in a project. (Anthropic)（来源：[questions.md:478](interview/questions/questions.md)）

<!-- interview-answer Q389 -->
<details>
<summary>展开答案 · Q389</summary>

Interview Answer

I would use a real case where I deliberately limited or blocked an output because the evidence or calculation was unreliable. The library's plausible-but-wrong-result issue is relevant context, but I need the actual decision and outcome before claiming a safety-first intervention. In Risk Copilot, my intended principle is to fail explicitly on unvalidated numerical results rather than produce a reassuring report.

<details>
<summary>展开详解与追问</summary>

Explanation

Separate a confirmed bug from an unconfirmed decision you might have made about it. No outage prevention or saved loss is assumed.

Follow-up

- How do you preserve usefulness while failing safely?
  Return validated partial information with a clear boundary, or request the missing input, without fabricating the affected result.

</details>
</details>
<!-- /interview-answer -->

- Q390 — Tell me about a time you identified a major risk in an AI system — what did you do? (Mistral)（来源：[questions.md:479](interview/questions/questions.md)）

<!-- interview-answer Q390 -->
<details>
<summary>展开答案 · Q390</summary>

Interview Answer

For a future Risk Copilot review, I would look for a risk such as unsupported financial numbers or tool execution without real approval. If I identify one, I would reproduce it, constrain the affected capability, add a regression case and verify the fix. I would only tell this as a past incident after it actually happens and I have evidence of my role.

<details>
<summary>展开详解与追问</summary>

Explanation

The conversation confirms guardrail work in general, not a specific major security incident. Use this as a preparation template.

Follow-up

- How do you prioritize the response?
  By credible impact and the ability to prevent the affected behavior, then by root-cause remediation and regression coverage.

</details>
</details>
<!-- /interview-answer -->

- Q391 — Describe a time you reduced cost or latency in a production AI system.（来源：[questions.md:480](interview/questions/questions.md)）

<!-- interview-answer Q391 -->
<details>
<summary>展开答案 · Q391</summary>

Interview Answer

I would be explicit that I have not yet established a production AI latency or cost reduction. I do have professional Python performance experience with vectorization and parallel-processing experiments. I would use that real example for profiling and trade-off judgment, then explain how I am applying the same discipline to Risk Copilot benchmarks without claiming a production result.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not reuse a Python speedup as if it were an LLM token-cost reduction. Keep workloads and environments distinct.

Follow-up

- What would an AI benchmark include?
  Quality, failures, token usage, queue/retrieval/model timings, concurrency and the exact configuration and sample size.

</details>
</details>
<!-- /interview-answer -->

- Q392 — How do you manage ambiguity in ML projects where requirements and data evolve over time?（来源：[questions.md:481](interview/questions/questions.md)）

<!-- interview-answer Q392 -->
<details>
<summary>展开答案 · Q392</summary>

Interview Answer

I keep assumptions, data availability and success criteria explicit, then build the smallest experiment that can resolve the biggest uncertainty. I version datasets and requirements and review changes with the decision owner. A baseline protects against unnecessary complexity, while stop conditions prevent endless iteration. I would use a real financial-modeling example to demonstrate the approach rather than imply all uncertainty can be planned away.

<details>
<summary>展开详解与追问</summary>

Explanation

Changing requirements may invalidate labels or evaluation splits. A new target should trigger a review of the whole measurement contract.

Follow-up

- What remains fixed during iteration?
  The current experiment's evaluation conditions, so comparisons are interpretable; broader requirements change through an explicit decision.

</details>
</details>
<!-- /interview-answer -->

- Q393 — How do you use AI coding agents in your work?（来源：[questions.md:482](interview/questions/questions.md)）

<!-- interview-answer Q393 -->
<details>
<summary>展开答案 · Q393</summary>

Interview Answer

I use AI to help implement code, including much of Risk Copilot, but I want to own the design and verification. My process is to define the input/output contract and failure cases, request a small diff, inspect the code and run meaningful checks. I am also practicing coding without AI to strengthen independent understanding. I would be candid about components I cannot yet explain deeply.

<details>
<summary>展开详解与追问</summary>

Explanation

AI-generated tests can repeat the same mistaken assumption as the code. Independent fixtures and counterexamples are important.

Follow-up

- What do you do if you cannot explain a generated function?
  Pause adoption, simplify or study it, and verify its behavior before depending on it.

</details>
</details>
<!-- /interview-answer -->

- Q394 — Did you apply GenAI techniques to solve a problem not usually solved with GenAI?（来源：[questions.md:483](interview/questions/questions.md)）

<!-- interview-answer Q394 -->
<details>
<summary>展开答案 · Q394</summary>

Interview Answer

Risk Copilot applies a language interface and retrieval to financial-risk workflows that traditionally rely on models and tools. The LLM's useful role is interpreting intent, selecting constrained actions and explaining sourced results. Deterministic Python still performs numerical calculations. I would describe this as an interface and workflow improvement, not claim that generative AI replaces stochastic modeling or has already improved business outcomes.

<details>
<summary>展开详解与追问</summary>

Explanation

The value proposition must be tested with users and task metrics. An LLM is not justified merely because the domain previously lacked one.

Follow-up

- What is the non-LLM baseline?
  The same risk calculation or research task invoked through explicit parameters and existing tools.

</details>
</details>
<!-- /interview-answer -->

- Q395 — Do you fact-check AI outputs or just trust them? How do you validate AI-generated content?（来源：[questions.md:484](interview/questions/questions.md)）

<!-- interview-answer Q395 -->
<details>
<summary>展开答案 · Q395</summary>

Interview Answer

I do not treat a fluent AI output as verified. I check factual claims against sources, numerical results against deterministic calculations and generated code against contracts and meaningful tests. I inspect errors and corner cases, especially where a plausible result could hide a failure. If I cannot verify a claim, I mark it as uncertain rather than converting it into a confident answer.

<details>
<summary>展开详解与追问</summary>

Explanation

For source-based answers, check that the cited span supports the exact claim. For code, a passing generated test is not enough if its expected result is wrong.

Follow-up

- What do you verify first?
  The claims with the highest consequence or strongest dependency on exact data, such as units, dates, financial numbers and permissions.

</details>
</details>
<!-- /interview-answer -->

- Q396 — Why OpenAI? / Why Microsoft? / Why this company?（来源：[questions.md:488](interview/questions/questions.md)）

<!-- interview-answer Q396 -->
<details>
<summary>展开答案 · Q396</summary>

Interview Answer

I would connect three things: the company's verified product or mission, the concrete role responsibilities and my relevant experience. For me, financial AI or research tooling is a strong fit because I bring stochastic-modeling and Python-tool experience while building applied-AI depth. I would add a specific current product or team detail from official sources before using this answer for a named company.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: do not reuse generic enthusiasm or invent knowledge of an employer's roadmap. The answer should explain why this role, not only why AI.

Follow-up

- What would you ask the interviewer?
  How the team measures useful AI outcomes and where domain expertise changes engineering decisions.

</details>
</details>
<!-- /interview-answer -->

- Q397 — Why change now?（来源：[questions.md:489](interview/questions/questions.md)；[05-behavioral.md:72](interview/questions/05-behavioral.md)）

<!-- interview-answer Q397 -->
<details>
<summary>展开答案 · Q397</summary>

Interview Answer

After eight years in financial engineering, I want to move closer to building AI tools and research workflows while preserving the value of my modeling background. I use Python daily and have built libraries and risk tools, so this is an extension of engineering work rather than starting from zero. My recent courses and Risk Copilot have made the skill gaps concrete, and I am actively addressing them.

<details>
<summary>展开详解与追问</summary>

Explanation

Avoid suggesting the transition is guaranteed or motivated solely by hype. Be clear that production AI depth is still developing.

Follow-up

- Why start with finance-AI roles?
  They let my domain knowledge contribute immediately while I build broader applied-AI engineering experience.

</details>
</details>
<!-- /interview-answer -->

- Q398 — Tell me about yourself.（来源：[questions.md:490](interview/questions/questions.md)；[05-behavioral.md:63](interview/questions/05-behavioral.md)）

<!-- interview-answer Q398 -->
<details>
<summary>展开答案 · Q398</summary>

Interview Answer

I am a New York-based financial engineer with eight years of experience, currently at VP level. My work includes stochastic modeling, economic scenario generation and hedge-risk tools, using Python daily and building a Python library. I am now transitioning toward applied AI and research engineering, with Risk Copilot and recent AI coursework as hands-on learning. I am particularly interested in tools for financial analysts, researchers and risk teams.

<details>
<summary>展开详解与追问</summary>

Explanation

This introduction uses confirmed facts. Add employer names or quantified outcomes only from the user's real resume.

Follow-up

- What is your main development area?
  Independent ownership of production AI engineering, especially evaluation, data/SQL and deployment beyond using existing tooling.

</details>
</details>
<!-- /interview-answer -->

- Q399 — Walk me through your resume. (OpenAI)（来源：[questions.md:491](interview/questions/questions.md)）

<!-- interview-answer Q399 -->
<details>
<summary>展开答案 · Q399</summary>

Interview Answer

I would walk through the actual resume chronologically, focusing on how my responsibilities developed across financial modeling and Python engineering. I would highlight the scenario generator, hedge-risk tools and library work where they appear, then explain the transition through AI coursework and Risk Copilot. I would distinguish professional experience from side projects and avoid filling unknown dates or employers from inference.

<details>
<summary>展开详解与追问</summary>

Explanation

The actual resume has not been supplied here. This is a speaking structure, not a reconstructed employment history.

Follow-up

- How much detail should each role get?
  Enough to explain progression and one relevant contribution, leaving deeper implementation details for follow-up questions.

</details>
</details>
<!-- /interview-answer -->

- Q400 — Describe career decisions and culture fit. (Anthropic)（来源：[questions.md:492](interview/questions/questions.md)）

<!-- interview-answer Q400 -->
<details>
<summary>展开答案 · Q400</summary>

Interview Answer

My intended next step builds on financial modeling and Python engineering while moving toward applied AI systems. I value work where correctness, transparent trade-offs and useful tools matter, and I am open to discussing title and compensation to make the transition successful. I would connect that direction to the specific team's working practices using verified information, rather than claim culture fit from a brand alone.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not overstate flexibility as having no preferences. The confirmed priority is a successful transition, especially through finance-AI overlap.

Follow-up

- What culture would help you do your best work?
  One with clear ownership, honest feedback, meaningful validation and room to develop deeper engineering capability.

</details>
</details>
<!-- /interview-answer -->

- Q401 — How do you handle AI-safety conflicts with project goals? (Anthropic)（来源：[questions.md:493](interview/questions/questions.md)）

<!-- interview-answer Q401 -->
<details>
<summary>展开答案 · Q401</summary>

Interview Answer

I would identify the concrete safety concern, the affected users and whether it is a hard requirement or a negotiable risk. I would present a safer scoped alternative and the evidence needed to reconsider it. If the critical constraint cannot be met, I would block the affected capability through the proper decision process rather than hide the issue to meet a launch date.

<details>
<summary>展开详解与追问</summary>

Explanation

Safety should be specific, such as unauthorized actions or unvalidated financial numbers, rather than an undefined veto. A past example requires an actual event.

Follow-up

- How do you avoid endless caution?
  Use explicit thresholds, bounded experiments and review owners so the decision can move forward on evidence.

</details>
</details>
<!-- /interview-answer -->

- Q402 — Why do you want to pursue research? (for research roles)（来源：[questions.md:494](interview/questions/questions.md)；[05-behavioral.md:75](interview/questions/05-behavioral.md)）

<!-- interview-answer Q402 -->
<details>
<summary>展开答案 · Q402</summary>

Interview Answer

I am interested in research engineering because I enjoy translating quantitative ideas into reliable experiments and tools. My stochastic-modeling and scenario-generation background makes me comfortable with assumptions, uncertainty and validation. I want to support researchers with reproducible data and AI workflows. I would distinguish that goal from claiming a record of original ML research or targeting a research-scientist role without the required evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Research engineering and research science overlap but have different hiring expectations. Align the answer with the actual role.

Follow-up

- What would you contribute immediately?
  Financial domain understanding, Python numerical tooling and disciplined validation of experiments and outputs.

</details>
</details>
<!-- /interview-answer -->

- Q403 — How would you handle edge cases?（来源：[questions.md:500](interview/questions/questions.md)）

<!-- interview-answer Q403 -->
<details>
<summary>展开答案 · Q403</summary>

Interview Answer

I derive edge cases from the contract and failure boundaries: empty or missing input, limits, duplicate requests, malformed types, unavailable dependencies and partial success. I prioritize cases that can produce plausible wrong results or unsafe effects. I use small independent fixtures and add a regression whenever a real failure is found. I do not rely only on random examples or AI-generated happy-path tests.

<details>
<summary>展开详解与追问</summary>

Explanation

For financial data, zero exposure, units, missing dates and unavailable labels are especially important. Edge cases should reflect the actual function being discussed.

Follow-up

- How do you know when coverage is sufficient?
  The critical invariants and known failure classes are tested; coverage percentage alone is not a completeness guarantee.

</details>
</details>
<!-- /interview-answer -->

- Q404 — What alternative approaches did you consider?（来源：[questions.md:501](interview/questions/questions.md)）

<!-- interview-answer Q404 -->
<details>
<summary>展开答案 · Q404</summary>

Interview Answer

I would name the real alternatives for the decision under discussion, the constraints that mattered and why the selected option fit them. For retrieval, that might compare simple similarity search with hybrid retrieval or MMR; for performance, vectorization with process parallelism. I would distinguish options actually tested from ones considered conceptually and state what evidence would change the choice.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not claim rejecting a tool after benchmarking if no benchmark was run. A reasoned untested alternative is acceptable when labeled.

Follow-up

- What is a weak trade-off answer?
  Listing technologies without connecting them to a requirement, cost or observed failure.

</details>
</details>
<!-- /interview-answer -->


<a id="day-30"></a>

### 周五 11/13

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Coding Review: Mixed Python Patterns<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)<br>资料：[Complexity Analysis](Study%20topics/complexity-analysis.html); [Sliding Window](Study%20topics/sliding-window.html); [Heaps](Study%20topics/heaps.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html); [Trees](Study%20topics/trees.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI-Assisted Experiment Platform](Study%20topics/ai-assisted-experiment-platform.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: CI and Reproducible Demo<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-30) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / AI-Conducted Interview Follow-ups; Behavioral Questions / Supplemental Behavioral — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

<!-- quantvault-day 30 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1937 · Cross-Sectional Factor Model Estimation and Diagnostics](https://quantvault.org/problems.html?id=1937) · Regression · Medium

先修：先读Residual：实际值减预测值；核对同一时期和信息可用时间。

本次范围：Case outline。只讨论资产切片、数据口径与回归残差诊断；完整横截面因子模型作为扩展。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-30)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q405 — Time and space complexity analysis.（来源：[questions.md:502](interview/questions/questions.md)）

<!-- interview-answer Q405 -->
<details>
<summary>展开答案 · Q405</summary>

Interview Answer

I define the input size and count dominant operations, including sorting, copied slices, recursion and data-structure behavior. I distinguish worst-case, expected and amortized costs and account for auxiliary memory separately from output. I then relate the bound to the actual constraints, since an asymptotically better approach can still be slower on small inputs or dominated by I/O.

<details>
<summary>展开详解与追问</summary>

Explanation

There is no single complexity answer without a particular algorithm. The correct response is to analyze the code or method being discussed.

Follow-up

- Can nested loops be linear?
  Yes, for example when a sliding-window pointer advances at most n times across the whole algorithm.

</details>
</details>
<!-- /interview-answer -->

- Q406 — Why did you choose this specific data structure?（来源：[questions.md:503](interview/questions/questions.md)）

<!-- interview-answer Q406 -->
<details>
<summary>展开答案 · Q406</summary>

Interview Answer

I choose the structure from required operations and invariants. A hash map supports expected constant-time lookup, a heap supports efficient extreme selection, an ordered structure supports predecessor or range queries, and a queue expresses FIFO traversal. I would explain the concrete workload and compare at least one simpler alternative, including memory and update costs.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not justify a choice only because it is common in interview solutions. Show which operation would be expensive without it.

Follow-up

- When is a list enough?
  When data is small or scans are rare and its simplicity outweighs maintaining an additional index.

</details>
</details>
<!-- /interview-answer -->

- Q525 — How do you stay up-to-date with the latest developments in AI?（来源：[05-behavioral.md:23](interview/questions/05-behavioral.md)）

<!-- interview-answer Q525 -->
<details>
<summary>展开答案 · Q525</summary>

Interview Answer

I use a structured learning loop: study a focused topic, apply it in a small experiment or Risk Copilot, and verify details against primary documentation or papers. I have completed an agentic course and am progressing through engineering material. I would curate a few reliable sources and revisit only developments relevant to my target work rather than try every new framework.

<details>
<summary>展开详解与追问</summary>

Explanation

Social posts can identify a topic, but they are not final technical evidence. A useful learning artifact is an explanation and reproducible example.

Follow-up

- How do you decide what to ignore?
  Compare the development with my current skill gaps and project constraints, and defer it if it does not change a decision.

</details>
</details>
<!-- /interview-answer -->

- Q526 — What side projects have you built with AI? What frameworks and models have you worked with?（来源：[05-behavioral.md:24](interview/questions/05-behavioral.md)）

<!-- interview-answer Q526 -->
<details>
<summary>展开答案 · Q526</summary>

Interview Answer

Risk Copilot is my current AI project. Most of its code was generated with AI assistance, and my current learning focus is understanding the implementation, improving retrieval quality and testing corner cases. I have completed an agentic-AI course and am continuing core engineering study. I would name only the frameworks and model versions actually present in the repository and explain my depth with each rather than list tools I have only heard about.

<details>
<summary>展开详解与追问</summary>

Explanation

Verify exact dependencies and model configuration before the interview. The analytics assistant and research workbench are planned projects until implemented and tested.

Follow-up

- What can you demonstrate today?
  Show a reproducible workflow, a real failure case and the code or configuration involved; do not substitute a roadmap for a demonstration.

</details>
</details>
<!-- /interview-answer -->

- Q527 — Describe a project that didn't go as planned or where your AI solution failed（来源：[05-behavioral.md:26](interview/questions/05-behavioral.md)）

<!-- interview-answer Q527 -->
<details>
<summary>展开答案 · Q527</summary>

Interview Answer

In Risk Copilot, I have encountered poor answers and corner cases that motivated improving retrieval and adding safeguards. I would take one reproducible example and identify whether the evidence was missing, redundant or misinterpreted, then show the actual change and reevaluation. I would be explicit that this is a learning project and that planned improvements are not yet verified outcomes.

<details>
<summary>展开详解与追问</summary>

Explanation

An answer-quality failure is not automatically a model failure. Trace ingestion, retrieval, context and tools before changing the model.

Follow-up

- What if the change does not improve the score?
  Report that result, inspect the failure cases and preserve the simpler baseline instead of selecting a favorable anecdote.

</details>
</details>
<!-- /interview-answer -->

- Q528 — Tell me about a specific conflict with another person（来源：[05-behavioral.md:31](interview/questions/05-behavioral.md)）

<!-- interview-answer Q528 -->
<details>
<summary>展开答案 · Q528</summary>

Interview Answer

I would use a real disagreement and explain it without blaming the other person: we differed on [specific decision], and I was responsible for [actual scope]. I clarified the shared objective, asked about their constraints and compared options using [evidence or experiment]. We agreed on [decision], and the outcome was [verified result]. I would also state what I changed in my own view.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template; no interpersonal conflict story has been provided. Replace every bracket with a real event before using it as a past-tense answer.

Follow-up

- What if the other person was right?
  Explain the evidence that changed your mind and how you supported the resulting decision.

</details>
</details>
<!-- /interview-answer -->

- Q529 — Tell me about a time when you had to explain a complex technical concept to someone without a technical background（来源：[05-behavioral.md:33](interview/questions/05-behavioral.md)）

<!-- interview-answer Q529 -->
<details>
<summary>展开答案 · Q529</summary>

Interview Answer

For a financial example, I would explain a scenario generator as a tool for exploring many plausible future paths, not predicting one certain future. I would show how different assumptions change a decision and separate model uncertainty from implementation error. To make this a past-tense story, I would add the actual audience, misunderstanding and evidence that the explanation helped.

<details>
<summary>展开详解与追问</summary>

Explanation

The domain example fits the user's confirmed work, but a specific stakeholder conversation is not confirmed.

Follow-up

- How do you avoid oversimplifying?
  Keep the decision-relevant assumptions and limitations, while removing implementation details that do not affect the choice.

</details>
</details>
<!-- /interview-answer -->

- Q530 — How do you collaborate with non-technical stakeholders on AI features?（来源：[05-behavioral.md:35](interview/questions/05-behavioral.md)）

<!-- interview-answer Q530 -->
<details>
<summary>展开答案 · Q530</summary>

Interview Answer

I start with the user's workflow and the consequences of a wrong answer. I demonstrate normal, ambiguous and failed cases, agree on when the system should ask or escalate, and define acceptance criteria in business terms. For financial stakeholders, I connect model uncertainty and evidence to decisions. I would add a real interaction before presenting this as a completed collaboration story.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not sell an AI feature using only a successful demo. Stakeholders need to understand what they will review and what remains automated.

Follow-up

- What is an important question to ask them?
  Which mistakes are tolerable, which require human review and which must block the workflow entirely?

</details>
</details>
<!-- /interview-answer -->

- Q531 — Tell me about a time when you made short-term sacrifices for long-term（来源：[05-behavioral.md:40](interview/questions/05-behavioral.md)）

<!-- interview-answer Q531 -->
<details>
<summary>展开答案 · Q531</summary>

Interview Answer

My library refactor is a possible example of accepting short-term implementation effort to improve long-term maintainability. I would explain the concrete structural problem, what work I deferred, how I preserved behavior and the later benefit I actually observed. I would not claim reduced maintenance hours unless I measured them. If the refactor did not involve a real sacrifice, I would choose another event.

<details>
<summary>展开详解与追问</summary>

Explanation

The refactor is confirmed; its schedule cost and later benefit must be supplied from actual experience.

Follow-up

- How do you know the investment was worthwhile?
  Use a real later change or bug fix that became easier, supported by code or recorded effort rather than a generic claim.

</details>
</details>
<!-- /interview-answer -->

- Q532 — Describe a time you drove an architectural decision that affected multiple teams（来源：[05-behavioral.md:42](interview/questions/05-behavioral.md)）

<!-- interview-answer Q532 -->
<details>
<summary>展开答案 · Q532</summary>

Interview Answer

I would choose an actual decision with multi-team or large-scale impact only if I have one. I would explain the constraints, alternatives, stakeholders, migration or validation approach and the evidence behind the outcome. Otherwise I would use a smaller financial-tool example and state its scope accurately. Senior judgment is shown through responsibility and reasoning, not by inflating the number of users or teams.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. The conversation confirms eight years of work, not a specific multi-team architectural initiative.

Follow-up

- How do you gain alignment?
  Agree on requirements and risks, document trade-offs and involve the people responsible for operating the result.

</details>
</details>
<!-- /interview-answer -->

- Q533 — Tell me about a time you mentored an engineer who went on to a senior role（来源：[05-behavioral.md:43](interview/questions/05-behavioral.md)）

<!-- interview-answer Q533 -->
<details>
<summary>展开答案 · Q533</summary>

Interview Answer

I would not claim that I mentored engineers into senior roles unless I can substantiate it. If true, I would describe the individual's starting goal, the responsibilities I helped them practice, the feedback and increasing autonomy, and their eventual outcome without taking sole credit. If not, I would offer a real coaching example or explain how I would approach mentoring.

<details>
<summary>展开详解与追问</summary>

Explanation

The user's title does not establish people-management or promotion responsibility. This answer requires actual personal evidence.

Follow-up

- How do you measure mentoring success?
  By the person's stronger independent judgment and ownership, not only by a promotion title.

</details>
</details>
<!-- /interview-answer -->

- Q534 — How do you lead under risk and uncertainty?（来源：[05-behavioral.md:44](interview/questions/05-behavioral.md)）

<!-- interview-answer Q534 -->
<details>
<summary>展开答案 · Q534</summary>

Interview Answer

I make uncertainty explicit, distinguish reversible from hard-to-reverse decisions and gather the cheapest evidence that can change the choice. I use small experiments, conservative defaults for consequential outputs and clear stop conditions. I communicate what is known, assumed and still unverified. For a past example, I would use a real financial-modeling decision and its actual validation evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not imply that uncertainty disappears after a meeting or that a pilot proves production reliability.

Follow-up

- When do you decide without complete information?
  When delay has a higher cost and the risk is bounded, with a documented assumption and a plan to revise.

</details>
</details>
<!-- /interview-answer -->

- Q535 — Tell me about a time when a technical misjudgment led to a project delay. What did you learn?（来源：[05-behavioral.md:50](interview/questions/05-behavioral.md)）

<!-- interview-answer Q535 -->
<details>
<summary>展开答案 · Q535</summary>

Interview Answer

I would choose a real technical misjudgment and own the decision directly: I assumed [assumption], which proved wrong when [evidence], causing [actual effect]. I corrected course through [action] and changed [specific practice]. I would not invent a project delay from the fact that my library later needed refactoring. If no suitable event is available, I would state a smaller real mistake accurately.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization template. The answer needs an actual delay and your causal role, not a generic lesson.

Follow-up

- What prevents recurrence?
  A targeted change such as an early integration test or explicit assumption check, not a promise to be more careful.

</details>
</details>
<!-- /interview-answer -->

- Q536 — What would you do if, midway through a project, you realized it was unfeasible?（来源：[05-behavioral.md:51](interview/questions/05-behavioral.md)）

<!-- interview-answer Q536 -->
<details>
<summary>展开答案 · Q536</summary>

Interview Answer

I would verify which assumption makes the project infeasible, quantify the gap and communicate it early. I would offer options such as narrower scope, a simpler baseline, different data access or stopping the work, with cost and risk for each. I would preserve useful validated artifacts and document the decision. I would not continue silently to protect sunk effort.

<details>
<summary>展开详解与追问</summary>

Explanation

Feasibility may concern quality, data rights, budget or latency; each leads to a different response.

Follow-up

- When would you recommend stopping?
  When no bounded alternative meets the essential value and risk constraints at an acceptable cost.

</details>
</details>
<!-- /interview-answer -->

- Q537 — Describe a time you had to quickly learn a new technology or methodology（来源：[05-behavioral.md:52](interview/questions/05-behavioral.md)）

<!-- interview-answer Q537 -->
<details>
<summary>展开答案 · Q537</summary>

Interview Answer

My current transition involves learning agentic and LLM engineering and applying it to Risk Copilot. I completed the agentic course and have been using the project to expose gaps beyond the lectures. For a deadline-driven professional story, I would add a real technology, task and result from my work rather than imply the current course study happened under a business deadline.

<details>
<summary>展开详解与追问</summary>

Explanation

Confirmed learning progress is useful but does not prove rapid mastery. Show one concept transferred into an explained and tested implementation.

Follow-up

- How do you learn efficiently?
  Start from a working minimal example, vary one thing, explain the behavior and apply it to a real failure or requirement.

</details>
</details>
<!-- /interview-answer -->

- Q538 — Describe failure impact and resolve cross-functional conflict（来源：[05-behavioral.md:57](interview/questions/05-behavioral.md)）

<!-- interview-answer Q538 -->
<details>
<summary>展开答案 · Q538</summary>

Interview Answer

I would separate the technical failure from its effect on other teams: what broke, who was blocked and what decision needed agreement. Then I would explain how I shared evidence, proposed recovery options and agreed on ownership and a revised timeline. I need to supply a real cross-functional incident before presenting that sequence as experience; the library-debugging example alone does not establish a cross-team conflict.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: actual parties, disagreement, action and outcome. A strong senior answer acknowledges one's contribution to the failure and the other team's constraints.

Follow-up

- What if teams disagree on root cause?
  Agree on a reproducible test and immediate containment first, then investigate competing hypotheses without delaying recovery.

</details>
</details>
<!-- /interview-answer -->

- Q539 — Why do you think we should NOT hire you?（来源：[05-behavioral.md:58](interview/questions/05-behavioral.md)）

<!-- interview-answer Q539 -->
<details>
<summary>展开答案 · Q539</summary>

Interview Answer

If you need someone who has already independently operated large-scale production ML or LLM infrastructure, that is a gap in my current experience. My strength is eight years of financial modeling and daily Python engineering, including library development, debugging and performance work. I am building applied-AI depth through Risk Copilot and structured practice. I would be a stronger fit where financial domain judgment and growing AI engineering skills both matter.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a candid fit statement, not self-dismissal. Do not claim production experience to erase the gap or undermine verified strengths.

Follow-up

- Why hire you despite that gap?
  For relevant financial-system judgment, Python experience and demonstrated ability to learn and validate a bounded AI workflow.

</details>
</details>
<!-- /interview-answer -->

- Q540 — Discuss culture, collaboration, and mission alignment（来源：[05-behavioral.md:64](interview/questions/05-behavioral.md)）

<!-- interview-answer Q540 -->
<details>
<summary>展开答案 · Q540</summary>

Interview Answer

I work best where technical rigor and collaboration are part of delivery. My financial-engineering experience has trained me to question assumptions and make numerical results explainable. For an AI role, I want to apply that discipline to useful tools while developing stronger production engineering skills. I would connect this to a specific company practice or product I have researched and give a real example of how I work with others.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: verified company evidence and an actual collaboration example. Mission alignment should explain choices, not repeat marketing language.

Follow-up

- What culture would be difficult for you?
  One where speed routinely replaces verification and concerns cannot be raised; explain the working practice rather than criticize former colleagues.

</details>
</details>
<!-- /interview-answer -->

- Q541 — Describe career decisions and cultural alignment（来源：[05-behavioral.md:65](interview/questions/05-behavioral.md)）

<!-- interview-answer Q541 -->
<details>
<summary>展开答案 · Q541</summary>

Interview Answer

My intended next step builds on financial modeling and Python engineering while moving toward applied AI systems. I value work where correctness, transparent trade-offs and useful tools matter, and I am open to discussing title and compensation to make the transition successful. I would connect that direction to the specific team's working practices using verified information, rather than claim culture fit from a brand alone.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not overstate flexibility as having no preferences. The confirmed priority is a successful transition, especially through finance-AI overlap.

Follow-up

- What culture would help you do your best work?
  One with clear ownership, honest feedback, meaningful validation and room to develop deeper engineering capability.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 7 周：Project Deep Dive and Interview Practice

<a id="day-31"></a>

### 周一 11/16

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Progressive Implementation Problems<br>LeetCode: [2408. Design SQL](https://leetcode.com/problems/design-sql/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/)<br>资料：[LRU Cache](Study%20topics/lru-cache.html); [Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Volatility Forecasting Service](Study%20topics/volatility-forecasting-service.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Research Contract and Market Data<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-31)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Supplemental Behavioral; Take-Home Assignments / RAG / Chatbot Systems; Take-Home Assignments / Agent Systems — 15 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Experiment Tracking](Study%20topics/experiment-tracking.html); [Investment Research Workbench](Study%20topics/investment-research-workbench.html) |


<!-- quantvault-day 31 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Reproducibility、Model Versioning；本地Notebook继续承担数值实验。

本次范围：Case outline: second pass。补齐数据契约、实验追踪、模型产物、推理一致性、监控与回滚，复用Day 03的流程。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-31)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q542 — Open-ended behavioral at senior level: conflicts with managers, deadline pressure, design disagreements, mistakes（来源：[05-behavioral.md:66](interview/questions/05-behavioral.md)）

<!-- interview-answer Q542 -->
<details>
<summary>展开答案 · Q542</summary>

Interview Answer

For a senior behavioral question, I would choose one real decision where I had meaningful responsibility, state the competing constraints and explain my own action. Under deadline pressure, I would distinguish essential correctness from deferrable scope. In a disagreement, I would make alternatives testable and support the final decision. For a mistake, I would explain its impact and the process change that followed. The specific episode and outcome still need to be filled in.

<details>
<summary>展开详解与追问</summary>

Explanation

This is a response framework, not a completed personal story. Prepare separate real examples for manager conflict, design disagreement and a missed assumption; do not force one invented story across all four.

Follow-up

- What makes the answer senior-level?
  It shows judgment across business and technical constraints, ownership of consequences and improved team decision-making, not just individual coding effort.

</details>
</details>
<!-- /interview-answer -->

- Q543 — Why [company]?（来源：[05-behavioral.md:70](interview/questions/05-behavioral.md)）

<!-- interview-answer Q543 -->
<details>
<summary>展开答案 · Q543</summary>

Interview Answer

I would connect three things: the company's verified product or mission, the concrete role responsibilities and my relevant experience. For me, financial AI or research tooling is a strong fit because I bring stochastic-modeling and Python-tool experience while building applied-AI depth. I would add a specific current product or team detail from official sources before using this answer for a named company.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: do not reuse generic enthusiasm or invent knowledge of an employer's roadmap. The answer should explain why this role, not only why AI.

Follow-up

- What would you ask the interviewer?
  How the team measures useful AI outcomes and where domain expertise changes engineering decisions.

</details>
</details>
<!-- /interview-answer -->

- Q544 — Why do you want to work here?（来源：[05-behavioral.md:71](interview/questions/05-behavioral.md)）

<!-- interview-answer Q544 -->
<details>
<summary>展开答案 · Q544</summary>

Interview Answer

I would connect three things: the company's verified product or mission, the concrete role responsibilities and my relevant experience. For me, financial AI or research tooling is a strong fit because I bring stochastic-modeling and Python-tool experience while building applied-AI depth. I would add a specific current product or team detail from official sources before using this answer for a named company.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: do not reuse generic enthusiasm or invent knowledge of an employer's roadmap. The answer should explain why this role, not only why AI.

Follow-up

- What would you ask the interviewer?
  How the team measures useful AI outcomes and where domain expertise changes engineering decisions.

</details>
</details>
<!-- /interview-answer -->

- Q545 — Why [this startup]? with evidence of due diligence（来源：[05-behavioral.md:73](interview/questions/05-behavioral.md)）

<!-- interview-answer Q545 -->
<details>
<summary>展开答案 · Q545</summary>

Interview Answer

I would explain why this startup's customer problem is compelling, cite a specific product workflow or technical challenge I investigated, and connect it to my financial-domain expertise and Python background. I would also explain why the role's ownership and learning opportunity fit my transition. I have not identified a particular startup here, so product evidence, stage and team needs must be researched before using this answer.

<details>
<summary>展开详解与追问</summary>

Explanation

Personalization required: two verifiable company facts and one thoughtful question about customers, runway or engineering priorities. Do not invent customer traction or funding claims.

Follow-up

- What if the product is early?
  Explain which hypothesis interests you and ask how the team validates it; uncertainty can be attractive without pretending the business is proven.

</details>
</details>
<!-- /interview-answer -->

- Q546 — Discuss career decisions and culture fit（来源：[05-behavioral.md:74](interview/questions/05-behavioral.md)）

<!-- interview-answer Q546 -->
<details>
<summary>展开答案 · Q546</summary>

Interview Answer

My intended next step builds on financial modeling and Python engineering while moving toward applied AI systems. I value work where correctness, transparent trade-offs and useful tools matter, and I am open to discussing title and compensation to make the transition successful. I would connect that direction to the specific team's working practices using verified information, rather than claim culture fit from a brand alone.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not overstate flexibility as having no preferences. The confirmed priority is a successful transition, especially through finance-AI overlap.

Follow-up

- What culture would help you do your best work?
  One with clear ownership, honest feedback, meaningful validation and room to develop deeper engineering capability.

</details>
</details>
<!-- /interview-answer -->

- Q422 — Blood test report AI: Create a project that takes a blood test report in PDF format, understands medical issues, and provides suggestions by fetching them from online blog articles. Submit in a few hours.（来源：[questions.md:541](interview/questions/questions.md)）

<!-- interview-answer Q422 -->
<details>
<summary>展开答案 · Q422</summary>

Interview Answer

I would clarify the intended educational scope and avoid turning an extraction demo into autonomous diagnosis. I would parse the report into source-linked values, units and reference ranges, flag uncertainty and use vetted clinical sources rather than arbitrary blogs. A minimal submission would show accurate extraction, grounded explanation and a clear review boundary, with privacy-aware fixtures and tests for OCR and unit errors.

<details>
<summary>展开详解与追问</summary>

Explanation

The assignment's request to infer medical issues from blogs is a quality risk, not a requirement to accept uncritically. No clinical validity should be claimed from a few-hour prototype.

Follow-up

- What would you decline to automate?
  Diagnosis or treatment recommendations unsupported by qualified review and an appropriately validated clinical workflow.

</details>
</details>
<!-- /interview-answer -->

- Q423 — Customer support RAG chatbot: Design a production-ready chatbot using open-source tools. Requirements: 100+ concurrent users, <2 second latency, grounded in company docs, cost-effective, analytics tracking. Score: 9/10.（来源：[questions.md:542](interview/questions/questions.md)）

<!-- interview-answer Q423 -->
<details>
<summary>展开答案 · Q423</summary>

Interview Answer

I would agree whether the two-second target means first token or complete answer, then build a narrow open-source RAG baseline with permission-aware documents, citations and abstention. I would measure performance at the required concurrent load, not just one local request. The submission includes a reproducible setup, a labeled evaluation set, traces, cost assumptions and explicit unmet requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

The reported 9/10 is historical commentary, not an acceptance guarantee. Hardware, output length and concurrency strongly affect feasibility.

Follow-up

- What if the latency target is missed?
  Show the measured bottleneck and a scoped optimization or proposed requirement trade-off rather than claim production readiness.

</details>
</details>
<!-- /interview-answer -->

- Q424 — Document Q&A system: Build a document Q&A system with citation tracking for multi-hop questions.（来源：[questions.md:543](interview/questions/questions.md)）

<!-- interview-answer Q424 -->
<details>
<summary>展开答案 · Q424</summary>

Interview Answer

I would create document/section IDs and evidence-linked chunks, then retrieve enough supporting passages for each multi-hop question. The answer records which source supports each step or claim and abstains when a required link is missing. I would include single-hop, multi-hop and insufficient-evidence cases with expected citations and a small failure analysis.

<details>
<summary>展开详解与追问</summary>

Explanation

A generated reasoning narrative is not proof that both necessary documents were used. Check the actual evidence chain.

Follow-up

- How do you test multi-hop behavior?
  Remove one required source and verify the system no longer gives the unsupported complete answer.

</details>
</details>
<!-- /interview-answer -->

- Q425 — Build a RAG chatbot that ingests PDFs/documents, creates embeddings in a vector DB, and answers questions with citations (10+ candidate submissions across 5+ companies).（来源：[questions.md:544](interview/questions/questions.md)）

<!-- interview-answer Q425 -->
<details>
<summary>展开答案 · Q425</summary>

Interview Answer

I would implement a small end-to-end path: parse supplied documents, preserve source locations, build an index and answer questions with supported citations. I would add an explicit no-evidence response, a few representative and adversarial cases, and reproducible commands. The README distinguishes local functionality from untested production scale and includes quality, latency and cost observations.

<details>
<summary>展开详解与追问</summary>

Explanation

A vector database is an implementation choice, not the evaluation goal. The project succeeds when answers use the right evidence and fail honestly.

Follow-up

- What is the first test?
  A question with a known supporting passage and an unanswerable question that must not receive an invented answer.

</details>
</details>
<!-- /interview-answer -->

- Q426 — Refactor a messy RAG codebase into a modular, production-ready service with FastAPI and LangGraph (5+ candidate submissions for one company).（来源：[questions.md:545](interview/questions/questions.md)）

<!-- interview-answer Q426 -->
<details>
<summary>展开答案 · Q426</summary>

Interview Answer

I would preserve the existing API contract with characterization tests, then separate ingestion, retrieval, generation, orchestration and configuration. External clients are injected so unit tests run offline. I would keep LangGraph only where its state/control features help and put a thin FastAPI boundary over testable logic. I would provide a behavior-preservation report and clearly separate bug fixes from refactoring.

<details>
<summary>展开详解与追问</summary>

Explanation

Changing frameworks is not itself an improvement. Global mutable state and hidden service dependencies often make refactoring hard to verify.

Follow-up

- How do you prove compatibility?
  Run the same request/response and error-contract fixtures before and after, including failure paths.

</details>
</details>
<!-- /interview-answer -->

- Q427 — Build a policy document RAG assistant with mandatory source citations for every answer. Includes a 7-question evaluation set.（来源：[questions.md:546](interview/questions/questions.md)）

<!-- interview-answer Q427 -->
<details>
<summary>展开答案 · Q427</summary>

Interview Answer

I would preserve policy versions and source spans, require each substantive answer claim to have supporting evidence and return a scoped fallback for unanswered parts. I would run the supplied seven cases and add a few adversarial cases without treating the supplied set as an independent holdout after tuning. The deliverable includes citations, failure examples and reproducible evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

Seven questions are useful acceptance cases but too small to justify broad quality claims. Partially answerable questions need partial rather than invented complete answers.

Follow-up

- What if the retrieved policy is outdated?
  Identify its effective date and avoid presenting it as current without a validated revision rule.

</details>
</details>
<!-- /interview-answer -->

- Q428 — Build an AI agent demonstrating natural interaction, agentic behavior, clear reasoning steps, and strong technical decision-making. 3-day window. Company: Eightfold.ai.（来源：[questions.md:550](interview/questions/questions.md)）

<!-- interview-answer Q428 -->
<details>
<summary>展开答案 · Q428</summary>

Interview Answer

I would choose one narrow user task with a real runtime decision, such as selecting a retrieval or calculation tool, and implement a bounded agent loop with typed state. I would expose concise decision summaries and tool traces rather than claim to reveal a model's hidden reasoning. Evaluation covers normal, ambiguous and failed-tool cases, with limits, reproducible setup and a clear demo.

<details>
<summary>展开详解与追问</summary>

Explanation

A three-day window favors a complete small workflow over many shallow agents. Natural conversation does not replace measurable task success.

Follow-up

- What demonstrates agentic behavior?
  An observation changes the next permitted action, with the choice and outcome visible in the execution trace.

</details>
</details>
<!-- /interview-answer -->

- Q429 — Customer email campaign agent: Build an agent reading customer CSV data and generating personalized email campaigns with evaluation metrics.（来源：[questions.md:551](interview/questions/questions.md)）

<!-- interview-answer Q429 -->
<details>
<summary>展开答案 · Q429</summary>

Interview Answer

I would validate the customer CSV, minimize personal data and generate drafts from permitted fields under a structured campaign schema. I would test factual personalization, tone, duplicate handling and inappropriate content with a small reference set. Sending is outside the default draft-generation scope and requires explicit approval and the organization's communication rules. The demo uses synthetic customer data.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not fabricate personal facts or infer sensitive traits to make messages feel personalized. Evaluate distinct factual and stylistic criteria.

Follow-up

- How do you measure quality?
  Check factual consistency with the input, required campaign fields, reviewed writing quality and safety; do not invent conversion uplift.

</details>
</details>
<!-- /interview-answer -->

- Q430 — Code review agent: Implement a code review agent for Python files with actionable feedback.（来源：[questions.md:552](interview/questions/questions.md)）

<!-- interview-answer Q430 -->
<details>
<summary>展开答案 · Q430</summary>

Interview Answer

I would parse Python files and combine deterministic lint/test results with model review of a bounded diff and relevant context. Findings include location, severity, evidence and a suggested fix; unsupported claims are filtered or marked uncertain. I would evaluate known bugs and clean examples, and avoid executing submitted code outside an isolated environment.

<details>
<summary>展开详解与追问</summary>

Explanation

Actionable feedback identifies a reproducible issue, not just a stylistic preference. Track false positives as well as missed bugs.

Follow-up

- What belongs in the minimal demo?
  One real defect detected with a precise explanation and one clean file that does not attract invented findings.

</details>
</details>
<!-- /interview-answer -->

- Q431 — Conversational Calendar Booking Agent: LangGraph/LangChain orchestration, Streamlit chat interface, FastAPI backend, Google Calendar integration via Service Accounts, function calling for booking logic.（来源：[questions.md:553](interview/questions/questions.md)）

<!-- interview-answer Q431 -->
<details>
<summary>展开答案 · Q431</summary>

Interview Answer

I would separate intent extraction from calendar operations. Validated tools list availability, propose a slot and create a booking only after explicit confirmation, with timezone and conflict checks. The chosen identity must actually have access to the calendar; a service account does not automatically gain a user's calendar permissions. I would test duplicate confirmation, stale availability, DST and API failure.

<details>
<summary>展开详解与追问</summary>

Explanation

UI and orchestration libraries do not resolve calendar authorization. A confirmed payload must be revalidated before the write where conflicts are possible.

Follow-up

- How do you avoid duplicate bookings?
  Use a stable logical request ID and reconcile the calendar outcome after an ambiguous timeout.

</details>
</details>
<!-- /interview-answer -->


<a id="day-32"></a>

### 周二 11/17

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Integrated Query Practice<br>LeetCode: [1075. Project Employees I](https://leetcode.com/problems/project-employees-i/); [1280. Students and Examinations](https://leetcode.com/problems/students-and-examinations/); [1193. Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/)<br>资料：[JOINs](Study%20topics/joins.html); [GROUP BY](Study%20topics/group-by.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Volatility Forecasting Service](Study%20topics/volatility-forecasting-service.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Deterministic Research Tools<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-32)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Agent Systems; Take-Home Assignments / Multi-Agent Systems — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 32 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1465 · Out-of-Distribution Prediction: Dog Weight Regression](https://quantvault.org/problems.html?id=1465) · Machine Learning · Easy

先修：先读Regime Changes；模型能输出数值不等于有有效外推依据。

本次范围：Conceptual。解释Distribution Shift与Extrapolation，训练范围外的输入为何可能失效，连接金融Regime Change。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-32)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q432 — Create a customer support agent relevant to the company's product within 1.5 hours. Red flag if candidate doesn't start with evals.（来源：[questions.md:554](interview/questions/questions.md)）

<!-- interview-answer Q432 -->
<details>
<summary>展开答案 · Q432</summary>

Interview Answer

I would spend the initial minutes defining the product scope and a handful of expected outcomes, including an unanswerable and escalation case. Then I would build the smallest support workflow that can pass them: retrieve known information, draft a grounded answer and return a clear fallback. I would reserve time for running the cases and documenting limitations rather than constructing an elaborate interface.

<details>
<summary>展开详解与追问</summary>

Explanation

Within 1.5 hours, a reproducible narrow vertical slice is more credible than calling a broad prototype production-ready.

Follow-up

- What would you omit?
  Autonomous external actions, elaborate multi-agent coordination and infrastructure not needed to demonstrate the task.

</details>
</details>
<!-- /interview-answer -->

- Q433 — Build a simple autonomous agent using an open-source LLM with a task-specific goal and an observability/eval layer.（来源：[questions.md:555](interview/questions/questions.md)）

<!-- interview-answer Q433 -->
<details>
<summary>展开答案 · Q433</summary>

Interview Answer

I would choose a bounded task and an available licensed open-source model, wrap tools with typed validation and enforce step/time limits. The agent records state transitions and actual tool outcomes. A small evaluation set compares it with a deterministic baseline and includes failed tools and ambiguous requests. I would document hardware and model versions so the result can be reproduced.

<details>
<summary>展开详解与追问</summary>

Explanation

Open-source model availability does not guarantee suitable hardware performance or unrestricted use. Verify the actual license and runtime.

Follow-up

- What shows useful autonomy?
  Correctly selecting among permitted actions based on observations while avoiding unnecessary calls and stopping reliably.

</details>
</details>
<!-- /interview-answer -->

- Q434 — Build an assistant agent handling database queries, document search, and bash commands. Explicit evaluation criteria: tool selection accuracy, response grounding, error handling.（来源：[questions.md:556](interview/questions/questions.md)）

<!-- interview-answer Q434 -->
<details>
<summary>展开答案 · Q434</summary>

Interview Answer

I would give database, search and shell tools distinct narrow contracts and permissions. Queries are read-only and bounded; retrieval respects source access; shell execution is isolated and requires explicit approval for the actual command. Evaluation measures tool choice, argument validity, grounded results and recovery, with unauthorized requests expected to fail before execution.

<details>
<summary>展开详解与追问</summary>

Explanation

A general bash tool greatly expands the threat surface. Prefer predefined commands when they meet the task.

Follow-up

- What should an approval record contain?
  The exact command and arguments, scope, approver and relevant version, with rejection and expiry behavior.

</details>
</details>
<!-- /interview-answer -->

- Q435 — Build a production-ready AI agent that transforms project management data into conversational business insights using dual-LLM architecture (primary + fallback).（来源：[questions.md:557](interview/questions/questions.md)）

<!-- interview-answer Q435 -->
<details>
<summary>展开答案 · Q435</summary>

Interview Answer

I would ingest permitted project-management records into a defined schema, compute business metrics deterministically and let the LLM interpret questions and explain returned aggregates. A fallback model uses the same validated contract and is tested separately. I would trace data freshness, model route, latency and errors and include a reproducible offline fixture and a controlled live integration test.

<details>
<summary>展开详解与追问</summary>

Explanation

Fallback is not automatically equivalent behavior. It can increase cost or change privacy and output characteristics.

Follow-up

- When should fallback occur?
  For explicitly classified failures or quality conditions, within a budget, not as an endless loop whenever an answer is inconvenient.

</details>
</details>
<!-- /interview-answer -->

- Q436 — Build an agentic RAG system evaluated using RAGAS metrics (faithfulness, answer relevancy, context precision).（来源：[questions.md:558](interview/questions/questions.md)）

<!-- interview-answer Q436 -->
<details>
<summary>展开答案 · Q436</summary>

Interview Answer

I would build a bounded retrieval workflow and evaluate answer support, relevance and retrieved evidence using the required RAGAS metrics plus independently reviewed examples. I would version the dataset, judge/model settings and retrieval configuration. Tool failures and insufficient evidence are explicit outcomes. I would not treat a judge score as ground truth or use the same cases repeatedly as a claimed holdout.

<details>
<summary>展开详解与追问</summary>

Explanation

Metric definitions and judge behavior vary by version. Exact numerical claims and citations still need deterministic or human checks.

Follow-up

- How do you validate the evaluator?
  Compare its judgments with reviewed cases, inspect disagreements and report the sample and limitations.

</details>
</details>
<!-- /interview-answer -->

- Q437 — Build a chatbot-driven TikTok Ad Campaign Creation Agent.（来源：[questions.md:559](interview/questions/questions.md)）

<!-- interview-answer Q437 -->
<details>
<summary>展开答案 · Q437</summary>

Interview Answer

I would structure the workflow around campaign requirements, validated creative and budget fields, draft preview and explicit approval before any external publication or spending. Tools enforce allowed account and campaign operations. I would test missing inputs, policy failures, duplicate submissions and provider errors. A minimal assignment demo can remain a dry run with recorded payloads and clear integration status.

<details>
<summary>展开详解与追问</summary>

Explanation

Campaign creation may create financial commitments. A chat confirmation must be tied to the exact approved configuration.

Follow-up

- What would you show in the demo?
  A valid draft, an ambiguity requiring clarification and a rejected or failed action that does not claim success.

</details>
</details>
<!-- /interview-answer -->

- Q438 — Build a multi-agent content generation system: 5 core agents (research, writing, editing, SEO, publishing) orchestrated through a pipeline.（来源：[questions.md:563](interview/questions/questions.md)）

<!-- interview-answer Q438 -->
<details>
<summary>展开答案 · Q438</summary>

Interview Answer

I would treat the five agents as bounded stages with typed outputs and a shared source record, not five unrestricted chatbots. Research supplies evidence, writing produces a draft, editing and SEO apply explicit rubrics, and publishing remains an approval-controlled action. I would cap revisions and test schema validity, factual support and failure propagation against a simpler pipeline baseline.

<details>
<summary>展开详解与追问</summary>

Explanation

More agents can increase latency and correlated errors. The design must justify each stage's contribution.

Follow-up

- How do you prevent endless revision?
  A fixed iteration budget and measurable acceptance criteria, with an explicit unresolved outcome when the budget is exhausted.

</details>
</details>
<!-- /interview-answer -->

- Q439 — Implement a minimal workflow engine with graph-based nodes, state management, branching/looping, and tool-based logic. Max 50 steps. Unit tests mandatory (6+ candidate submissions).（来源：[questions.md:564](interview/questions/questions.md)）

<!-- interview-answer Q439 -->
<details>
<summary>展开答案 · Q439</summary>

Interview Answer

I would implement a small graph executor with registered node functions, typed state and explicit next-node decisions. Every executed node consumes a step, and the engine stops before exceeding 50, including repeated cycles. I would define terminal success, failure and missing-node behavior and test branching, loops, exceptions, state updates and the exact boundary.

<details>
<summary>展开详解与追问</summary>

Explanation

The engine should not execute arbitrary model-generated code. A repeated-state detector may help, but the hard step limit must remain independent.

Follow-up

- What is a crucial boundary test?
  A graph that terminates on step 50 succeeds, while a request to execute step 51 is blocked.

</details>
</details>
<!-- /interview-answer -->

- Q440 — Build a 5-agent CBT therapy system with crisis detection, safety filtering, and PII redaction.（来源：[questions.md:565](interview/questions/questions.md)）

<!-- interview-answer Q440 -->
<details>
<summary>展开答案 · Q440</summary>

Interview Answer

I would keep the assignment educational and explicitly separate it from clinical care. The multi-agent workflow can draft and critique exercises, but qualified human review is required before use; crisis-related input follows a dedicated escalation path. I would minimize personal data, redact logs and test harmful suggestions, missed crisis signals and overconfident claims. I would not call a short prototype clinically safe.

<details>
<summary>展开详解与追问</summary>

Explanation

Five agents do not provide five independent clinical judgments. Shared-model errors and inappropriate reassurance remain possible.

Follow-up

- What is the minimum credible safety evidence?
  A reviewed set of crisis and ordinary cases, documented escalation behavior and clear limits on what the system is allowed to do.

</details>
</details>
<!-- /interview-answer -->

- Q564 — Build a multi-agent content generation system: 5 core agents (research, writing, editing, SEO, publishing). Takes product JSON input, generates FAQ document, product page, and comparison page. All outputs must follow strict JSON formats. LangChain + Groq.（来源：[06-home-assignments.md:63](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q564 -->
<details>
<summary>展开答案 · Q564</summary>

Interview Answer

I would implement the five roles in LangChain using Groq: research, writing, editing, SEO and publishing. A validated product JSON schema would feed a bounded workflow, with separate strict schemas for the FAQ, product page and comparison page. Each stage would consume structured artifacts, and publishing would mean producing a validated deliverable unless external publication is explicitly authorized. Tests would cover missing product facts, invalid JSON and unsupported comparisons.

<details>
<summary>展开详解与追问</summary>

Explanation

Use schema validation after every stage and bounded repair attempts. Role separation is useful only if responsibilities are clear; five agents should not endlessly rewrite one another.

Follow-up

- How do you prevent invented product claims?
  Require each factual field to trace to the input or an approved source, and leave unknown fields unresolved rather than fill them creatively.

</details>
</details>
<!-- /interview-answer -->

- Q565 — Implement a minimal workflow engine with graph-based nodes, state management, branching/looping, and tool-based logic. Max 50 steps. Built-in infinite-cycle protection required. Unit tests mandatory (6+ candidate submissions).（来源：[06-home-assignments.md:64](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q565 -->
<details>
<summary>展开答案 · Q565</summary>

Interview Answer

I would implement a small graph executor with registered node functions, typed state and explicit next-node decisions. Every executed node consumes a step, and the engine stops before exceeding 50, including repeated cycles. I would define terminal success, failure and missing-node behavior and test branching, loops, exceptions, state updates and the exact boundary.

<details>
<summary>展开详解与追问</summary>

Explanation

The engine should not execute arbitrary model-generated code. A repeated-state detector may help, but the hard step limit must remain independent.

Follow-up

- What is a crucial boundary test?
  A graph that terminates on step 50 succeeds, while a request to execute step 51 is blocked.

</details>
</details>
<!-- /interview-answer -->

- Q566 — Build a 5-agent CBT therapy system: agents autonomously design, critique, and refine therapy exercises. Human-in-the-loop approval required before finalization.（来源：[06-home-assignments.md:65](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q566 -->
<details>
<summary>展开答案 · Q566</summary>

Interview Answer

I would keep the assignment educational and explicitly separate it from clinical care. The multi-agent workflow can draft and critique exercises, but qualified human review is required before use; crisis-related input follows a dedicated escalation path. I would minimize personal data, redact logs and test harmful suggestions, missed crisis signals and overconfident claims. I would not call a short prototype clinically safe.

<details>
<summary>展开详解与追问</summary>

Explanation

Five agents do not provide five independent clinical judgments. Shared-model errors and inappropriate reassurance remain possible. Define five bounded roles, for example exercise proposer, evidence reviewer, safety critic, editor and final reviewer. Finalization requires durable human approval of the exact final artifact; an agent vote does not substitute for that gate.

Follow-up

- What is the minimum credible safety evidence?
  A reviewed set of crisis and ordinary cases, documented escalation behavior and clear limits on what the system is allowed to do.

</details>
</details>
<!-- /interview-answer -->

- Q567 — Build a 4-stage bedtime story pipeline: Spec Builder, Storyteller, LLM Judge, Rewriter. Must use gpt-3.5-turbo. Up to 2 revision cycles. LLM judge evaluates stories against the spec.（来源：[06-home-assignments.md:66](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q567 -->
<details>
<summary>展开答案 · Q567</summary>

Interview Answer

I would implement four typed stages: a validated story specification, generation, rubric-based judging and bounded revision. The loop allows at most two rewrite cycles and retains the original specification and each result. I would verify whether the historically named model is still available under the assignment; if not, document an approved compatible substitution rather than silently changing it. Tests cover judge failure and unmet constraints.

<details>
<summary>展开详解与追问</summary>

Explanation

A judge can miss violations, so deterministic constraints such as required names or length can be checked separately.

Follow-up

- What happens after two failed revisions?
  Return the best available draft with unmet criteria identified, rather than loop indefinitely or label it compliant.

</details>
</details>
<!-- /interview-answer -->


<a id="day-33"></a>

### 周三 11/18

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Embedding Debugging; Cosine Similarity<br>LeetCode: [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/); [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)<br>资料：[Debugging](Study%20topics/debugging.html); [Vectorization](Study%20topics/vectorization.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Evaluation and Regression Pipeline](Study%20topics/evaluation-and-regression-pipeline.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Experiment API and Persistent Runs<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-33)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / LLM-as-Judge / Evaluation; Take-Home Assignments / Document Extraction and Processing — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Prediction Intervals](Study%20topics/prediction-intervals.html) |


刷题对应说明：973 / 347 对应向量距离和 Top-k 的相关算法；Embedding Debugging、Cosine Similarity 使用 NumPy 练习。

<!-- quantvault-day 33 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1867 · OLS Coefficient Confidence Intervals](https://quantvault.org/problems.html?id=1867) · Regression · Medium

先修：先读Prediction Intervals；置信区间描述估计参数不确定性，预测区间还含新观测噪声。

本次范围：Uncertainty comparison。区分系数Confidence Interval与单次未来结果Prediction Interval；只说明假设与不同对象，不完成整题证明。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-33)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q441 — Build an evaluation tool for LLM hallucination detection.（来源：[questions.md:569](interview/questions/questions.md)；[06-home-assignments.md:58](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q441 -->
<details>
<summary>展开答案 · Q441</summary>

Interview Answer

I would define hallucination relative to allowed evidence and create labeled supported, contradicted and unsupported examples. The tool extracts or scores claims against sources, records judge configuration and exposes uncertain cases for review. I would measure false positives and false negatives against human labels and keep deterministic checks for numbers and citations. The output is a detection estimate, not a proof of truth.

<details>
<summary>展开详解与追问</summary>

Explanation

A correct claim may be unsupported by the supplied context; that distinction belongs in the labeling policy.

Follow-up

- What if the source itself is wrong?
  Report groundedness separately from external factual correctness rather than conflating the two.

</details>
</details>
<!-- /interview-answer -->

- Q442 — Build a 4-stage bedtime story pipeline: Spec Builder, Storyteller, LLM Judge, Rewriter. Must use gpt-3.5-turbo. Up to 2 revision cycles (4+ candidate submissions).（来源：[questions.md:570](interview/questions/questions.md)）

<!-- interview-answer Q442 -->
<details>
<summary>展开答案 · Q442</summary>

Interview Answer

I would implement four typed stages: a validated story specification, generation, rubric-based judging and bounded revision. The loop allows at most two rewrite cycles and retains the original specification and each result. I would verify whether the historically named model is still available under the assignment; if not, document an approved compatible substitution rather than silently changing it. Tests cover judge failure and unmet constraints.

<details>
<summary>展开详解与追问</summary>

Explanation

A judge can miss violations, so deterministic constraints such as required names or length can be checked separately.

Follow-up

- What happens after two failed revisions?
  Return the best available draft with unmet criteria identified, rather than loop indefinitely or label it compliant.

</details>
</details>
<!-- /interview-answer -->

- Q443 — Build a sales insights agent with PII safety: 3-dimension evaluation (accuracy, safety, reasoning).（来源：[questions.md:571](interview/questions/questions.md)）

<!-- interview-answer Q443 -->
<details>
<summary>展开答案 · Q443</summary>

Interview Answer

I would compute sales metrics through read-only validated queries and pass only permitted aggregates to the model. A policy layer rejects personal-data requests before data retrieval, and generated explanations must match actual results. Evaluation separates numerical accuracy, refusal correctness and explanation quality, including adversarial prompts and small-group leakage risks. I would provide a synthetic fixture and auditable query traces.

<details>
<summary>展开详解与追问</summary>

Explanation

Removing names is not always enough if an aggregate identifies a single person. The allowed aggregation policy must be explicit.

Follow-up

- How do you prevent raw-row leakage?
  Restrict the data tool's output schema and privileges so the LLM never receives unauthorized rows.

</details>
</details>
<!-- /interview-answer -->

- Q444 — Build a live chat agent grounded in FAQ knowledge base (2 candidate submissions with different tech stacks).（来源：[questions.md:572](interview/questions/questions.md)）

<!-- interview-answer Q444 -->
<details>
<summary>展开答案 · Q444</summary>

Interview Answer

I would normalize and version the FAQ, retrieve relevant entries and answer only from supported content, with an explicit out-of-scope response. Session state helps resolve follow-ups without turning prior generated text into authoritative knowledge. I would test paraphrases, conflicting entries and missing answers, and show a small quality/latency report with reproducible setup.

<details>
<summary>展开详解与追问</summary>

Explanation

FAQ grounding should not be mistaken for permission to improvise product policies. Cite or identify the relevant entry.

Follow-up

- What if two FAQ entries conflict?
  Surface the conflict or route for review instead of confidently choosing one without a revision rule.

</details>
</details>
<!-- /interview-answer -->

- Q445 — Build a marksheet extraction API: parse complex table layouts and handwriting. Confidence scoring required. FastAPI + Docker + Gemini 1.5 Flash.（来源：[questions.md:576](interview/questions/questions.md)）

<!-- interview-answer Q445 -->
<details>
<summary>展开答案 · Q445</summary>

Interview Answer

I would separate file validation, OCR/layout extraction and typed marksheet normalization. Each field retains page/cell evidence and a confidence indicator calibrated against labeled examples where possible. Low-confidence handwriting or inconsistent totals goes to review. I would provide a FastAPI/Docker path, fixtures and error cases, and verify the named model's availability before using a historical assignment version.

<details>
<summary>展开详解与追问</summary>

Explanation

A model's self-reported confidence is not automatically calibrated. Table row/column association can fail even when individual characters are correct.

Follow-up

- What would you evaluate?
  Field accuracy, table alignment, missing/extra fields and review coverage, including handwriting and complex layouts.

</details>
</details>
<!-- /interview-answer -->

- Q446 — Build a physician notetaker: medical transcription NLP system with NER and SOAP notes (3+ candidate submissions).（来源：[questions.md:577](interview/questions/questions.md)）

<!-- interview-answer Q446 -->
<details>
<summary>展开答案 · Q446</summary>

Interview Answer

I would build a consent-aware transcription pipeline that preserves speaker and time references, extracts candidate entities and drafts structured SOAP sections linked to the transcript. A clinician reviews before the note becomes authoritative. I would test negation, uncertainty, speaker attribution and critical entities, and protect audio and transcript retention. A prototype should not claim clinical validation.

<details>
<summary>展开详解与追问</summary>

Explanation

A plausible note can invent an assessment or plan that was never said. Empty or uncertain sections must remain explicit.

Follow-up

- What is the strongest factual check?
  Every substantive clinical statement is supported by the transcript or explicitly supplied clinician input.

</details>
</details>
<!-- /interview-answer -->

- Q447 — Refactor a messy codebase into a modular, production-ready service (5+ candidate submissions for one company).（来源：[questions.md:578](interview/questions/questions.md)）

<!-- interview-answer Q447 -->
<details>
<summary>展开答案 · Q447</summary>

Interview Answer

I would freeze observable behavior with tests, then separate deterministic logic from input/output and external dependencies. Small refactoring steps make changes reviewable, and dependency injection enables offline tests. I would preserve API and error contracts unless a separately documented bug fix changes them. The deliverable includes setup, tests and an explanation of boundaries, not just renamed files.

<details>
<summary>展开详解与追问</summary>

Explanation

Production-ready is a broad claim; distinguish actual tests and deployment evidence from future hardening.

Follow-up

- How do you handle uncovered behavior?
  Add characterization cases from real callers or clarify the contract before changing it.

</details>
</details>
<!-- /interview-answer -->

- Q448 — Build an AI-powered legal document analysis tool for contracts.（来源：[questions.md:579](interview/questions/questions.md)）

<!-- interview-answer Q448 -->
<details>
<summary>展开答案 · Q448</summary>

Interview Answer

I would extract source-linked clauses and structured contract attributes, then generate a reviewable summary of potential issues using an explicit rubric and approved reference material. The system identifies uncertainty and jurisdictional limits and routes legal judgments to a qualified reviewer. Tests include missing clauses, contradictory wording and unsupported risk claims, with document permissions and confidentiality preserved.

<details>
<summary>展开详解与追问</summary>

Explanation

Risk identification is not an enforceable legal conclusion. A clause's meaning can depend on the rest of the contract and applicable context.

Follow-up

- How do you reduce false alarms?
  Require cited evidence and a defined risk criterion, then calibrate findings against reviewed examples.

</details>
</details>
<!-- /interview-answer -->

- Q568 — Build a marksheet extraction API: parse complex table layouts and handwriting from academic marksheets into structured JSON.（来源：[06-home-assignments.md:71](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q568 -->
<details>
<summary>展开答案 · Q568</summary>

Interview Answer

I would separate file validation, OCR/layout extraction and typed marksheet normalization. Each field retains page/cell evidence and a confidence indicator calibrated against labeled examples where possible. Low-confidence handwriting or inconsistent totals goes to review. I would provide a FastAPI/Docker path, fixtures and error cases, and verify the named model's availability before using a historical assignment version.

<details>
<summary>展开详解与追问</summary>

Explanation

A model's self-reported confidence is not automatically calibrated. Table row/column association can fail even when individual characters are correct. The particular OCR/model choice is illustrative; benchmark handwriting and complex-table cases before selecting it.

Follow-up

- What would you evaluate?
  Field accuracy, table alignment, missing/extra fields and review coverage, including handwriting and complex layouts.

</details>
</details>
<!-- /interview-answer -->

- Q569 — Build a physician notetaker: transform physician-patient conversations into structured clinical documentation..（来源：[06-home-assignments.md:72](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q569 -->
<details>
<summary>展开答案 · Q569</summary>

Interview Answer

I would build a consent-aware transcription pipeline that preserves speaker and time references, extracts candidate entities and drafts structured SOAP sections linked to the transcript. A clinician reviews before the note becomes authoritative. I would test negation, uncertainty, speaker attribution and critical entities, and protect audio and transcript retention. A prototype should not claim clinical validation.

<details>
<summary>展开详解与追问</summary>

Explanation

A plausible note can invent an assessment or plan that was never said. Empty or uncertain sections must remain explicit.

Follow-up

- What is the strongest factual check?
  Every substantive clinical statement is supported by the transcript or explicitly supplied clinician input.

</details>
</details>
<!-- /interview-answer -->

- Q570 — Build a legal document analysis tool for contracts: extract key information, identify risks (auto-renewal traps, liability, IP ownership, non-competes), generate structured summaries.（来源：[06-home-assignments.md:73](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q570 -->
<details>
<summary>展开答案 · Q570</summary>

Interview Answer

I would extract contract clauses with page and span references, then identify auto-renewal, liability, IP-ownership and non-compete provisions using a structured risk schema. The output would distinguish quoted terms from interpretation and flag missing or ambiguous clauses for human review. I would test varied layouts, conflicting amendments and false positives, and avoid presenting a generated summary as a legal determination.

<details>
<summary>展开详解与追问</summary>

Explanation

A clause's practical meaning can depend on definitions, jurisdiction and amendments. Retrieve surrounding definitions and preserve document precedence; do not infer enforceability from a keyword alone.

Follow-up

- How would you evaluate it?
  Use expert-reviewed clause labels and evidence spans, measure missed high-risk clauses, and inspect whether each summary is supported.

</details>
</details>
<!-- /interview-answer -->

- Q571 — Build a CBT assistant combining RAG with safety mechanisms. Crisis detection mandatory. PII redaction and pseudonymization required. No secrets in logs. Educational only, not clinical advice.（来源：[06-home-assignments.md:74](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q571 -->
<details>
<summary>展开答案 · Q571</summary>

Interview Answer

I would keep the CBT assistant educational, retrieve from an approved knowledge base and cite supporting material. A separate safety path would detect crisis-related requests and route to an appropriate reviewed response instead of continuing a normal exercise. I would redact PII before model calls where feasible, pseudonymize stored identifiers and ensure secrets never enter logs. Tests would include indirect crisis language, redaction failures and prompt injection.

<details>
<summary>展开详解与追问</summary>

Explanation

Pseudonymization is not anonymization. Document retention and access rules, and acknowledge that automated crisis detection has false negatives and needs expert review; this prototype is not a clinical service.

Follow-up

- Can RAG replace the safety layer?
  No. Retrieval supplies educational evidence; crisis handling, privacy controls and scope enforcement need their own policies and tests.

</details>
</details>
<!-- /interview-answer -->

- Q572 — Take a blood test report as PDF, understand medical issues, generate suggestions by fetching content from online blog articles with source links.（来源：[06-home-assignments.md:75](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q572 -->
<details>
<summary>展开答案 · Q572</summary>

Interview Answer

I would clarify the intended educational scope and avoid turning an extraction demo into autonomous diagnosis. I would parse the report into source-linked values, units and reference ranges, flag uncertainty and use vetted clinical sources rather than arbitrary blogs. A minimal submission would show accurate extraction, grounded explanation and a clear review boundary, with privacy-aware fixtures and tests for OCR and unit errors.

<details>
<summary>展开详解与追问</summary>

Explanation

The assignment's request to infer medical issues from blogs is a quality risk, not a requirement to accept uncritically. No clinical validity should be claimed from a few-hour prototype.

Follow-up

- What would you decline to automate?
  Diagnosis or treatment recommendations unsupported by qualified review and an appropriately validated clinical workflow.

</details>
</details>
<!-- /interview-answer -->


<a id="day-34"></a>

### 周四 11/19

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Financial Analytics; Window Functions Review<br>LeetCode: [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/); [1341. Movie Rating](https://leetcode.com/problems/movie-rating/)<br>资料：[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html); [Financial Analytics](Study%20topics/financial-analytics.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Evaluation and Regression Pipeline](Study%20topics/evaluation-and-regression-pipeline.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Queue and Worker Execution<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-34)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Document Extraction and Processing; Take-Home Assignments / Voice AI and Conversational Systems; Take-Home Assignments / Full-Stack AI Applications — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Online Feedback](Study%20topics/online-feedback.html); [Workers](Study%20topics/workers.html); [Backpressure](Study%20topics/backpressure.html); [Queues and Workers](Study%20topics/queues-and-workers.html) |


<!-- quantvault-day 34 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1638 · OLS with Correlated Errors](https://quantvault.org/problems.html?id=1638) · Regression · Medium

先修：先认识Autocorrelation；本题只分析依赖和评价假设，GLS推导作为扩展。

本次范围：Conceptual。说明残差相关时独立样本标准误为何不可靠，连接区块估计与配对比较。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-34)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q573 — Build a question deduplication and clustering pipeline: exact dedup, semantic dedup, LLM-based cluster discovery, classification. Output evaluated with ARI, NMI, homogeneity, completeness metrics.（来源：[06-home-assignments.md:76](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q573 -->
<details>
<summary>展开答案 · Q573</summary>

Interview Answer

I would normalize text and remove exact duplicates first, then generate semantic candidates using embeddings. I would use an LLM for bounded cluster interpretation or ambiguous pairs, preserve original IDs and assign questions to a versioned taxonomy. Against labeled groups I would report ARI, NMI, homogeneity and completeness, plus examples of false merges and splits. I would tune thresholds on development data rather than the final evaluation set.

<details>
<summary>展开详解与追问</summary>

Explanation

Homogeneity rewards pure clusters; completeness rewards keeping each true class together. Their trade-off matters: one cluster per item and one giant cluster fail in different ways. Deduplication must preserve meaning-changing numbers or negation.

Follow-up

- Why not use cosine similarity alone?
  Near wording can conceal different answers; semantic candidate generation needs calibrated thresholds or pairwise verification.

</details>
</details>
<!-- /interview-answer -->

- Q574 — Build a data pipeline that processes 1,000 messy products from 4 vendors, normalizes them into a unified schema, fetches supplementary data via rate-limited async API calls (vendor-specific token-bucket rate limits), enriches products through AI-powered duplicate detection. Must support both CLI and API access.（来源：[06-home-assignments.md:77](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q574 -->
<details>
<summary>展开答案 · Q574</summary>

Interview Answer

I would define one canonical product schema and four vendor adapters, preserving raw values and provenance. An async enrichment layer would apply separate vendor token buckets, bounded concurrency, timeouts and retry budgets. Duplicate detection would start with identifiers and normalized attributes, use embeddings for candidates and reserve an LLM for uncertain pairs. CLI and API would call the same service, with idempotent runs and a report for all 1,000 records.

<details>
<summary>展开详解与追问</summary>

Explanation

Rate limits and concurrency are distinct controls. Test malformed prices, currencies, pagination, 429s, retries and false product merges. Persist uncertain matches for review rather than silently merging inventory.

Follow-up

- How do you verify throughput safely?
  Use a fake clock and mock vendor responses to check burst and sustained limits, then benchmark with documented quotas.

</details>
</details>
<!-- /interview-answer -->

- Q575 — Build a transaction-to-user matching system: identify users whose names appear in transaction descriptions, find similar transactions via text matching, propose improvements (semantic embeddings, database integration). Spring Boot + Java.（来源：[06-home-assignments.md:78](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q575 -->
<details>
<summary>展开答案 · Q575</summary>

Interview Answer

I would implement a Spring Boot service in Java that normalizes names and transaction descriptions, retrieves candidate users and scores matches with explainable text features. The initial API would return ranked candidates and an ambiguity flag instead of forcing a match. Tests would cover common names, aliases, punctuation and multiple names in one description. Database indexes and embeddings would be proposed only after measuring the baseline's errors.

<details>
<summary>展开详解与追问</summary>

Explanation

Names alone are often insufficient identifiers. Do not treat a semantically similar transaction as proof of the same owner; retain match evidence and review thresholds.

Follow-up

- When would embeddings help?
  They can retrieve paraphrased transaction patterns, but exact identifiers and supervised evidence remain stronger for identity resolution.

</details>
</details>
<!-- /interview-answer -->

- Q576 — Build real-time earnings call transcription and insight streaming: streaming audio-to-text via Whisper, real-time extraction of financial signals (revenue, guidance, risks, outlook), SSE output.（来源：[06-home-assignments.md:79](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q576 -->
<details>
<summary>展开答案 · Q576</summary>

Interview Answer

I would stream audio into bounded Whisper transcription segments, emit partial and finalized transcripts, then extract revenue, guidance, risks and outlook into a typed event schema. SSE would deliver events with IDs, timestamps and source spans so clients can reconnect and handle corrections. I would evaluate transcription errors in numbers and company names, extraction accuracy, event latency and reconnect behavior.

<details>
<summary>展开详解与追问</summary>

Explanation

Whisper integration may chunk audio rather than provide native token-by-token streaming. Financial figures need units, reporting periods and correction events; tentative speech must not become an irreversible published fact.

Follow-up

- How do you handle a revised transcript?
  Version the affected span and emit a correction linked to prior events so downstream summaries can be reconciled.

</details>
</details>
<!-- /interview-answer -->

- Q449 — Build real-time concall transcription and insight streaming for Indian accents.（来源：[questions.md:583](interview/questions/questions.md)）

<!-- interview-answer Q449 -->
<details>
<summary>展开答案 · Q449</summary>

Interview Answer

I would stream audio into transcription with timestamps, handle interim versus finalized text and extract insights only with versioned evidence references. I would evaluate accents, code-switching, noise and speaker overlap on authorized recordings. SSE delivers updates with stable IDs so corrections replace earlier text. Critical financial numbers require additional checks, and latency is measured end to end.

<details>
<summary>展开详解与追问</summary>

Explanation

A streaming recognizer can revise previous words. Downstream insights must not retain a number contradicted by the finalized transcript.

Follow-up

- How do you handle corrections?
  Version transcript segments and invalidate or recompute dependent insights.

</details>
</details>
<!-- /interview-answer -->

- Q450 — Build a Singapore public transport query agent with voice interface.（来源：[questions.md:584](interview/questions/questions.md)）

<!-- interview-answer Q450 -->
<details>
<summary>展开答案 · Q450</summary>

Interview Answer

I would map user intent to validated transport-data tools, fetch live information with freshness timestamps and produce a bounded spoken or text answer. The voice layer handles transcription uncertainty and location ambiguity before querying. I would mock API responses for offline tests and distinguish real-time data from static knowledge, with clear behavior when a feed is unavailable.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not fabricate a live arrival time from model memory. API access, quotas and current schemas need verification.

Follow-up

- What would you ask when a stop name is ambiguous?
  A short clarification using known candidate stops or the user's permitted location context.

</details>
</details>
<!-- /interview-answer -->

- Q451 — Build a Telegram bot for investment coaching with safety filtering. 3 days / 6-8 hours.（来源：[questions.md:585](interview/questions/questions.md)）

<!-- interview-answer Q451 -->
<details>
<summary>展开答案 · Q451</summary>

Interview Answer

I would scope the bot to general investment education and sourced explanations, with no personalized buy/sell instructions or unsupported return promises. A small approved corpus and explicit out-of-scope handling keep the six-to-eight-hour build manageable. I would test risky requests, stale information and privacy leakage, and document that the prototype is not a validated financial-advice service.

<details>
<summary>展开详解与追问</summary>

Explanation

The assignment's short time budget favors a simple controlled workflow. A disclaimer alone does not constrain the actual responses.

Follow-up

- What is a useful failure case?
  A user asks for a guaranteed trade or a personalized allocation; the bot should redirect to general education without inventing certainty.

</details>
</details>
<!-- /interview-answer -->

- Q452 — Build a live chat support agent with OpenAI, session persistence, and conversation history (2 candidate submissions).（来源：[questions.md:586](interview/questions/questions.md)）

<!-- interview-answer Q452 -->
<details>
<summary>展开答案 · Q452</summary>

Interview Answer

I would implement authenticated or appropriately scoped sessions, durable conversation messages and a bounded context builder around the model API. Requests have IDs for retry/reconnect behavior, and the UI distinguishes streaming, completed and failed responses. I would add grounding if the task requires factual support and test session isolation, history truncation and provider failure.

<details>
<summary>展开详解与追问</summary>

Explanation

Persisting chat history is not the same as building reliable long-term memory. Sensitive data retention must be explicit.

Follow-up

- How do you prevent one user's history appearing in another session?
  Enforce ownership on every read/write and include scope in caches, not just in the frontend route.

</details>
</details>
<!-- /interview-answer -->

- Q453 — Build conversational agents with game-based evaluation (2 submissions).（来源：[questions.md:587](interview/questions/questions.md)）

<!-- interview-answer Q453 -->
<details>
<summary>展开答案 · Q453</summary>

Interview Answer

I would first formalize the game's state, legal actions and scoring rules in deterministic code. The conversational agent interprets input or proposes actions, while the engine validates and updates state. Evaluation uses scripted games and adversarial inputs to measure rule adherence, task success and ambiguity handling. I would not let persuasive text override the game's authoritative state.

<details>
<summary>展开详解与追问</summary>

Explanation

The precise game rules are missing, so a full solution cannot be inferred from the label alone.

Follow-up

- What should the LLM control?
  Language interaction or bounded choices, not the authoritative legality and scoring rules.

</details>
</details>
<!-- /interview-answer -->

- Q454 — AI-First CRM: HCP Module: React/Redux frontend, FastAPI backend, LangGraph with 5+ tools (summarization, entity extraction). Models: gemma2-9b-it or llama-3.3-70b via Groq API. Deliverable: GitHub repo + 10-15 minute demo video. Expected time: ~60 hours.（来源：[questions.md:591](interview/questions/questions.md)）

<!-- interview-answer Q454 -->
<details>
<summary>展开答案 · Q454</summary>

Interview Answer

I would confirm the required CRM workflows and build one complete HCP interaction path across the frontend, API and typed tools before expanding to five tools. Sensitive professional/customer data gets scoped access and minimal model exposure. I would include deterministic calculations, mock-provider tests and a demo showing success and failure. Exact model availability and the 60-hour scope would be verified rather than assumed current.

<details>
<summary>展开详解与追问</summary>

Explanation

A large take-home should have explicit priorities and acceptance criteria. Framework count is not proof of product quality.

Follow-up

- What would you deliver first?
  A reproducible vertical slice with one useful tool, validated output and a clear extension pattern.

</details>
</details>
<!-- /interview-answer -->

- Q455 — Login page with validations: Create a login page accepting email and password with basic validations. Estimated 2-3 hours within 2-3 day window.（来源：[questions.md:592](interview/questions/questions.md)）

<!-- interview-answer Q455 -->
<details>
<summary>展开答案 · Q455</summary>

Interview Answer

I would implement accessible email/password fields with client-side usability checks and authoritative server-side validation. Real authentication requires secure password hashing, TLS, session management, rate limiting and careful error messages, not just a form regex. For a two-to-three-hour UI task I would clarify whether authentication is in scope and avoid claiming a mocked login is production security.

<details>
<summary>展开详解与追问</summary>

Explanation

Never log passwords or store them in plaintext. Email format validation does not verify account ownership.

Follow-up

- What is a useful test?
  Invalid inputs, keyboard navigation, submission errors and a server rejection that the client cannot bypass.

</details>
</details>
<!-- /interview-answer -->

- Q456 — Build a production-ready mental health MVP with safety, privacy, PII redaction, and evaluation.（来源：[questions.md:593](interview/questions/questions.md)）

<!-- interview-answer Q456 -->
<details>
<summary>展开答案 · Q456</summary>

Interview Answer

I would narrow the MVP to an explicitly nonclinical support or educational use, with privacy controls, crisis escalation and qualified review of content and evaluation. The model cannot diagnose or replace care. I would test both missed-risk and excessive-refusal cases and document unvalidated areas. A small prototype should not be labeled production-grade mental healthcare merely because it has redaction and a safety prompt.

<details>
<summary>展开详解与追问</summary>

Explanation

Safety detection is fallible and needs ongoing review. Human escalation must be an actual available workflow, not an empty promise.

Follow-up

- What would block launch?
  Unresolved severe harmful-output or privacy failures and an inadequate real-world escalation process for the intended use.

</details>
</details>
<!-- /interview-answer -->

- Q457 — Build a production-grade distributed LLM processing pipeline with smart routing for 100K+ daily requests.（来源：[questions.md:594](interview/questions/questions.md)）

<!-- interview-answer Q457 -->
<details>
<summary>展开答案 · Q457</summary>

Interview Answer

I would separate durable request state from bounded provider workers, with typed routing rules, deadlines, retries and idempotent publication. Exact and semantic caches have explicit scope and freshness policies; fallback providers are evaluated, not assumed equivalent. Distributed traces and load tests measure quality, p95 latency, throughput and cost. The daily volume becomes a peak workload estimate before capacity claims.

<details>
<summary>展开详解与追问</summary>

Explanation

100,000 daily requests is about 1.16 per second on average; bursts and token lengths can dominate. Do not confuse daily volume with simultaneous load.

Follow-up

- How do you test failure routing?
  Inject provider timeout, throttling and malformed output and verify bounded fallback with a truthful final status.

</details>
</details>
<!-- /interview-answer -->


<a id="day-35"></a>

### 周五 11/20

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Logistic Regression with NumPy; Shape Checks<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)<br>资料：[Vectorization](Study%20topics/vectorization.html); [NumPy Logistic Regression](Study%20topics/numpy-logistic-regression.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI Latency and Cost Budget](Study%20topics/ai-latency-and-cost-budget.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Retries, Timeouts and Worker Failure<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-35)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Full-Stack AI Applications — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities<br>当日概念索引（按需）：[Streaming](Study%20topics/streaming.html); [Token Usage](Study%20topics/token-usage.html); [Semantic Caching](Study%20topics/semantic-caching.html); [Model Routing](Study%20topics/model-routing.html); [Cost-Quality Trade-offs](Study%20topics/cost-quality-trade-offs.html); [Graceful Degradation](Study%20topics/graceful-degradation.html); [Failure Recovery](Study%20topics/failure-recovery.html) |

刷题对应说明：Logistic Regression、Shape Checks 和 Early Stopping 无直接 LeetCode 对应，使用 NumPy 自定义练习；1 / 20 为可选算法复习。

<!-- quantvault-day 35 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2000 · Logistic Regression: Log-Likelihood, Gradient, and Threshold Selection](https://quantvault.org/problems.html?id=2000) · Regression · Medium

先修：复习Day 07、Day 10；先看本地NumPy Logistic Regression。

本次范围：Derivation sketch。用已学sigmoid和交叉熵写梯度关键步骤，再说明概率与阈值的分工；不要求完整Hessian。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-35)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q458 — Build an intelligent NPC system for a job simulation platform.（来源：[questions.md:595](interview/questions/questions.md)）

<!-- interview-answer Q458 -->
<details>
<summary>展开答案 · Q458</summary>

Interview Answer

I would define each NPC's role, knowledge access and permitted actions, with a shared authoritative simulation state. The model produces dialogue and bounded actions; deterministic rules enforce job-simulation constraints. I would test consistency, task usefulness, loops and cross-character information leakage. A minimal demo includes one scenario with a successful interaction and a recoverable misunderstanding.

<details>
<summary>展开详解与追问</summary>

Explanation

Personality should change style, not facts or authority. Long conversation memory needs scoped, versioned summaries.

Follow-up

- How do you keep characters distinct?
  Use explicit role/style constraints and evaluated examples while retaining the same factual and safety boundaries.

</details>
</details>
<!-- /interview-answer -->

- Q459 — Build an LLM-based rating prediction system with prompt evaluation and dashboards.（来源：[questions.md:596](interview/questions/questions.md)）

<!-- interview-answer Q459 -->
<details>
<summary>展开答案 · Q459</summary>

Interview Answer

I would define the rating target and labeled split, establish a non-LLM baseline and compare prompt variants without leaking evaluation labels. The model returns a validated rating and optional evidence, and dashboards show error distributions, calibration where relevant, cost and latency. I would distinguish user-facing predictions from administrator evaluation controls.

<details>
<summary>展开详解与追问</summary>

Explanation

A rating prediction task may be ordinal; MAE, class errors and ranking metrics answer different questions. Choose based on the actual use.

Follow-up

- How do you avoid prompt overfitting?
  Tune on development cases and reserve a separate final set, retaining prompt and model versions.

</details>
</details>
<!-- /interview-answer -->

- Q460 — Build a markdown-to-slides generator with cost and time metrics tracking.（来源：[questions.md:597](interview/questions/questions.md)）

<!-- interview-answer Q460 -->
<details>
<summary>展开答案 · Q460</summary>

Interview Answer

I would parse markdown structure, allocate content to the requested slide count and generate a typed slide representation before rendering. I would validate headings, content length and asset references and record tokens, time and cost. The demo includes long input, an impossible slide budget and malformed output. I would avoid claiming good slides from merely producing a syntactically valid file.

<details>
<summary>展开详解与追问</summary>

Explanation

A logical section plan can be deterministic or model-assisted. Rendering and layout validation are separate from text generation.

Follow-up

- What if the requested slide count is too small?
  Ask for a scope choice or transparently summarize lower-priority content instead of shrinking everything into unreadable slides.

</details>
</details>
<!-- /interview-answer -->

- Q461 — Build a deduplication and clustering pipeline with ARI/NMI evaluation metrics.（来源：[questions.md:598](interview/questions/questions.md)）

<!-- interview-answer Q461 -->
<details>
<summary>展开答案 · Q461</summary>

Interview Answer

I would start with exact normalization/deduplication, then generate semantic candidates and validate merge decisions against labeled pairs. Clustering and cluster naming are separate steps; an LLM label does not prove cluster quality. I would report ARI/NMI with the reference partition and inspect false merges, especially near-but-distinct questions. Parameters are selected on development data.

<details>
<summary>展开详解与追问</summary>

Explanation

ARI adjusts pair agreement for chance; NMI measures normalized information agreement and depends on the chosen normalization. Both need meaningful reference labels.

Follow-up

- Which error is especially costly?
  Merging distinct business questions, because it can erase necessary differences in intent or constraints.

</details>
</details>
<!-- /interview-answer -->

- Q462 — Build a transaction matching system.（来源：[questions.md:599](interview/questions/questions.md)）

<!-- interview-answer Q462 -->
<details>
<summary>展开答案 · Q462</summary>

Interview Answer

I would define what constitutes a match, normalize names and amounts/dates where available, and establish deterministic exact or fuzzy baselines. Candidate generation narrows the search; a scoring stage ranks plausible matches with an uncertain outcome for ambiguous cases. I would evaluate false matches separately from misses and preserve an audit trail rather than force every transaction to a user.

<details>
<summary>展开详解与追问</summary>

Explanation

Name similarity alone is weak evidence when names are common or abbreviated. The assignment lacks an exact schema, so matching rules must be clarified.

Follow-up

- How do you handle two equally plausible users?
  Return ambiguity or route for review rather than pick one arbitrarily.

</details>
</details>
<!-- /interview-answer -->

- Q463 — Build a D&D dungeon simulation with context engineering. Evaluation rubric: 30% functionality, 30% challenge completion, 25% context engineering, 15% code quality. ~4 hours.（来源：[questions.md:600](interview/questions/questions.md)）

<!-- interview-answer Q463 -->
<details>
<summary>展开答案 · Q463</summary>

Interview Answer

I would select three explicit challenges and build a small deterministic world state around the language agents. The game master and player agents have distinct knowledge scopes; actions are validated before state changes. I would demonstrate context retention, hidden-information boundaries and rule handling with scripted cases, and keep a hard turn budget within the four-hour scope.

<details>
<summary>展开详解与追问</summary>

Explanation

The rubric weights do not replace concrete acceptance cases. Choose challenges that can be visibly tested in the demo.

Follow-up

- How do you stop the model from rewriting history?
  Treat saved world state as authoritative and validate proposed changes rather than accepting narrative prose as committed state.

</details>
</details>
<!-- /interview-answer -->

- Q464 — Build a memory and personality engine using open-source LLMs only.（来源：[questions.md:601](interview/questions/questions.md)）

<!-- interview-answer Q464 -->
<details>
<summary>展开答案 · Q464</summary>

Interview Answer

I would extract candidate memories into a strict schema with source references, confidence and user scope, then persist only appropriate verified or clearly qualified facts. Persona transformation changes tone without changing factual content or permissions. I would use an allowed open-source model and test memory precision, correction, deletion and persona consistency on synthetic conversations.

<details>
<summary>展开详解与追问</summary>

Explanation

A therapist persona should not imply clinical qualification. Open-source-only constraints apply to all model calls, including judges and embeddings.

Follow-up

- How do you prevent memory pollution?
  Require provenance and a persistence policy, avoid storing every utterance as truth and test adversarial or contradictory history.

</details>
</details>
<!-- /interview-answer -->

- Q577 — Build a Telegram bot for investment coaching with safety filtering. Educational content only - no personalized financial advice.（来源：[06-home-assignments.md:84](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q577 -->
<details>
<summary>展开答案 · Q577</summary>

Interview Answer

I would scope the bot to general investment education and sourced explanations, with no personalized buy/sell instructions or unsupported return promises. A small approved corpus and explicit out-of-scope handling keep the six-to-eight-hour build manageable. I would test risky requests, stale information and privacy leakage, and document that the prototype is not a validated financial-advice service.

<details>
<summary>展开详解与追问</summary>

Explanation

The assignment's short time budget favors a simple controlled workflow. A disclaimer alone does not constrain the actual responses.

Follow-up

- What is a useful failure case?
  A user asks for a guaranteed trade or a personalized allocation; the bot should redirect to general education without inventing certainty.

</details>
</details>
<!-- /interview-answer -->

- Q578 — Build a multi-agent D&D dungeon simulation: Game Master agent + Player agents. Must address at least 3 of 6 challenges (long campaigns, secrets, rulings, self-aware dungeon, living world, ambiguity). LangGraph required.（来源：[06-home-assignments.md:85](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q578 -->
<details>
<summary>展开答案 · Q578</summary>

Interview Answer

I would use LangGraph to maintain explicit game state and route between a Game Master and player agents. For the required three challenges, I would choose long campaigns, secrets and rulings: summarize durable history, enforce per-agent visibility, and use deterministic rules or adjudication records for disputed actions. I would test state persistence, unauthorized secret access and contradictory rulings across turns.

<details>
<summary>展开详解与追问</summary>

Explanation

The graph state is the source of truth; a player's generated narration cannot directly change inventory or reveal hidden information. Cap rounds and validate proposed actions before committing them.

Follow-up

- How do you keep a long campaign coherent?
  Store durable facts and event history separately from conversational summaries, then retrieve only the relevant visible state.

</details>
</details>
<!-- /interview-answer -->

- Q579 — Build a memory extraction and personality transformation system: extract structured long-term memory from chat history as JSON, transform responses based on personas (calm mentor, witty friend, therapist). Open-source LLMs only, no proprietary APIs.（来源：[06-home-assignments.md:86](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q579 -->
<details>
<summary>展开答案 · Q579</summary>

Interview Answer

I would extract candidate memories into a strict schema with source references, confidence and user scope, then persist only appropriate verified or clearly qualified facts. Persona transformation changes tone without changing factual content or permissions. I would use an allowed open-source model and test memory precision, correction, deletion and persona consistency on synthetic conversations.

<details>
<summary>展开详解与追问</summary>

Explanation

A therapist persona should not imply clinical qualification. Open-source-only constraints apply to all model calls, including judges and embeddings. Persist memories as validated JSON and test calm-mentor, witty-friend and therapist-style outputs on the same underlying facts. Persona changes cannot change permissions, stored truth or the educational scope.

Follow-up

- How do you prevent memory pollution?
  Require provenance and a persistence policy, avoid storing every utterance as truth and test adversarial or contradictory history.

</details>
</details>
<!-- /interview-answer -->

- Q580 — Build an AI judge for a Rock-Paper-Scissors variant: classify player inputs as VALID/INVALID/UNCLEAR, handle typos and edge cases, tool-based state management workflow (2 submissions).（来源：[06-home-assignments.md:87](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q580 -->
<details>
<summary>展开答案 · Q580</summary>

Interview Answer

I would define the variant's legal moves and winning rules first. The language layer would classify each input as VALID, INVALID or UNCLEAR and normalize a move only when confidence and rules permit it. A deterministic tool would update game state and compute the winner, with idempotent turn IDs. Tests would include typos, multiple moves, empty input and attempts to alter the rules.

<details>
<summary>展开详解与追问</summary>

Explanation

The precise variant is unspecified, so do not assume ordinary three-move rules. Ambiguity should prompt clarification rather than random normalization; the model should not decide arithmetic or state transitions.

Follow-up

- Why keep scoring outside the model?
  It makes outcomes reproducible and prevents conversational instructions from changing established game rules.

</details>
</details>
<!-- /interview-answer -->

- Q581 — Build a web app that converts markdown to slide deck presentations by splitting content into logical sections based on a target slide count. Document size limited to 150K tokens, single API call. Next.js + OpenAI.（来源：[06-home-assignments.md:88](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q581 -->
<details>
<summary>展开答案 · Q581</summary>

Interview Answer

I would validate the markdown token count and target slide count before a single model call, then request structured slide sections with titles and content. The Next.js backend would keep credentials server-side, validate the returned schema and render a deck from safe templates. I would confirm that the chosen model supports the input plus instructions and output budget; 150K input tokens does not fit every model.

<details>
<summary>展开详解与追问</summary>

Explanation

A single-call constraint rules out an unnoticed summarize-then-generate pipeline and automatic repair calls. Reject oversized input clearly, handle malformed output locally where possible and report failures. Sanitize rendered markdown.

Follow-up

- How do you check the requested slide count?
  Validate the returned array length and content coverage; a correct count alone does not prove the original argument was preserved.

</details>
</details>
<!-- /interview-answer -->

- Q582 — Build an LLM processing pipeline with intelligent routing, multi-level caching (exact + semantic), provider health monitoring with failover, and distributed tracing. Targets: 100+ req/s, p95 latency under 2s, >40% cache hit rate.（来源：[06-home-assignments.md:89](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q582 -->
<details>
<summary>展开答案 · Q582</summary>

Interview Answer

I would route requests through admission control, exact-cache lookup, a carefully scoped semantic cache and bounded provider workers. Provider health checks and circuit breakers would select a tested fallback, while distributed traces separate queueing, cache, prefill and generation time. I would load-test the stated 100+ requests per second, p95 below two seconds and cache hit rate above 40% with representative token lengths, misses and failure scenarios.

<details>
<summary>展开详解与追问</summary>

Explanation

These are acceptance targets, not achieved results. A cache-heavy workload can hide slow misses, so report hit and miss latency separately. Keep tenant, source and model versions in cache eligibility, and reject fallback providers that fail the same quality and data-handling requirements.

Follow-up

- How do you test failure routing?
  Inject provider timeout, throttling and malformed output and verify bounded fallback with a truthful final status.

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 第 8 周：Integrated Interview Review

<a id="day-36"></a>

### 周一 11/23

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Timed Coding Mock<br>LeetCode: [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/); [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)<br>资料：[Binary Search](Study%20topics/binary-search.html); [Prefix Sums](Study%20topics/prefix-sums.html); [Recursion](Study%20topics/recursion.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI Latency and Cost Budget](Study%20topics/ai-latency-and-cost-budget.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: AI Experiment Planning and Tool Calling<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-36)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Full-Stack AI Applications; Take-Home Assignments / Company Product Integration; Take-Home Assignments / Performance / Optimization; Take-Home Assignments / OpenAI-Specific; Take-Home Assignments / Red Flags (Unreasonable Assignments); Take-Home Assignments / RAG and Document Q&A — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Reproducibility](Study%20topics/reproducibility.html); [Model Versioning](Study%20topics/model-versioning.html) |


<!-- quantvault-day 36 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1736 · End-to-End EDA and Linear Regression Pipeline](https://quantvault.org/problems.html?id=1736) · Machine Learning · Medium

先修：EDA是Exploratory Data Analysis；完整网站Coding题不作为额外算法刷题。

本次范围：Case outline。只形成EDA→缺失处理→切分→Pipeline→指标→版本化产物的方案，明确训练与服务使用同一变换。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-36)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q583 — Build an NPC system for a job simulation platform: three AI co-workers with distinct personalities, a "Director Agent" that detects conversation loops via semantic similarity (0.85 threshold), RAG-based knowledge retrieval. FastAPI + Claude API + FAISS.（来源：[06-home-assignments.md:90](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q583 -->
<details>
<summary>展开答案 · Q583</summary>

Interview Answer

I would give the three co-workers separate persona prompts and permitted knowledge scopes, retrieve evidence with FAISS, and serve conversations through FastAPI using Claude. A Director would compare recent turns with embeddings and use the specified 0.85 similarity threshold as one loop signal. It would choose a bounded intervention, while tests would distinguish genuine repetition from necessary clarification.

<details>
<summary>展开详解与追问</summary>

Explanation

The 0.85 threshold is task-specific, not universal across embedding models. Log interventions, preserve conversation state and avoid exposing one persona's private context to another.

Follow-up

- What if the Director repeatedly interrupts useful conversation?
  Add a cooldown and progress checks, then tune on labeled loop and non-loop examples.

</details>
</details>
<!-- /interview-answer -->

- Q584 — Build an LLM-based rating prediction and prompt evaluation system with user and admin dashboards. Node.js + MongoDB + Google Generative AI.（来源：[06-home-assignments.md:91](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q584 -->
<details>
<summary>展开答案 · Q584</summary>

Interview Answer

I would build a Node.js API with MongoDB persistence and separate user and admin permissions. The model would predict a rating in a validated scale using a versioned Google Generative AI prompt, while the admin dashboard would compare prompts on a frozen labeled set. I would report MAE or ordinal errors alongside calibration where applicable, cost and latency, and preserve failed or invalid outputs in evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

Clarify whether the rating is a numeric score, class or probability distribution. A prompt that matches training examples may not generalize; keep final evaluation examples out of prompt iteration.

Follow-up

- Can admins overwrite evaluation labels?
  Corrections should create a new labeled-data version with an audit trail, not silently change the benchmark being reported.

</details>
</details>
<!-- /interview-answer -->

- Q585 — Build an AI-first CRM module: React/Redux frontend, FastAPI backend, LangGraph with 5+ tools. Deliverable: GitHub repo + 10-15 minute demo video.（来源：[06-home-assignments.md:92](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q585 -->
<details>
<summary>展开答案 · Q585</summary>

Interview Answer

I would deliver one coherent CRM workflow with React/Redux, FastAPI and LangGraph, exposing at least five typed tools such as contact lookup, account lookup, activity search, draft note and approved update. Authentication and authorization would be enforced in the backend, and write actions would be previewed and validated. The repository and 10–15 minute demo would show success, ambiguous input and a rejected unsafe action.

<details>
<summary>展开详解与追问</summary>

Explanation

Choose tools around an actual workflow, not to inflate a count. Include fixture data, setup instructions, mocked-provider tests and an execution trace with sensitive fields redacted.

Follow-up

- What should the demo emphasize?
  The user's task, tool decisions, a recoverable failure and evidence that unauthorized writes are blocked.

</details>
</details>
<!-- /interview-answer -->

- Q465 — Roboflow: build a project using their CV platform and present to CTO.（来源：[questions.md:605](interview/questions/questions.md)）

<!-- interview-answer Q465 -->
<details>
<summary>展开答案 · Q465</summary>

Interview Answer

I would first verify the actual platform capabilities and assignment rubric, then choose a narrow computer-vision problem with licensed data and a clear metric. I would split data to avoid near-duplicate leakage, establish a baseline and demonstrate inference plus error analysis. The presentation would explain label quality, failure slices and deployment constraints rather than only show a polished demo.

<details>
<summary>展开详解与追问</summary>

Explanation

The prompt does not specify the task or dataset, so no exact model choice or benchmark result can be supplied.

Follow-up

- What makes the CTO presentation convincing?
  A reproducible result, honest failure analysis and a clear explanation of why the project solves a real problem.

</details>
</details>
<!-- /interview-answer -->

- Q466 — Anthropic performance take-home: Code optimization for speed. 4-hour limit. Python workload simulating TPU-like operations. Tests low-level optimization skills. Now open-sourced for practice.（来源：[questions.md:609](interview/questions/questions.md)）

<!-- interview-answer Q466 -->
<details>
<summary>展开答案 · Q466</summary>

Interview Answer

I would read the provided workload and rules, run the correctness tests and profile a baseline before optimizing. I would target measured bottlenecks, change one thing at a time and compare speed under identical conditions while preserving all required semantics. I would keep notes on unsuccessful experiments and reserve time for the final test suite rather than assume a particular low-level optimization applies.

<details>
<summary>展开详解与追问</summary>

Explanation

The public challenge's exact version and allowed changes must be checked. This answer does not claim to know hidden tests or a guaranteed winning optimization.

Follow-up

- What if a change is faster but numerically different?
  Determine whether the tolerance contract permits it; otherwise reject the speedup.

</details>
</details>
<!-- /interview-answer -->

- Q467 — 48-hour technical project: Take-home assignment delivered day after recruiter call, 48-hour completion window. Practical coding, not puzzle-based.（来源：[questions.md:613](interview/questions/questions.md)）

<!-- interview-answer Q467 -->
<details>
<summary>展开答案 · Q467</summary>

Interview Answer

I would request the concrete statement and acceptance criteria, then budget the 48 hours around a working end-to-end slice, tests and a clear README. I would identify external dependencies early and provide offline fixtures where appropriate. The final submission distinguishes implemented, tested and deferred behavior. Since this entry only describes timing, I would not invent the actual assignment or solution.

<details>
<summary>展开详解与追问</summary>

Explanation

A deadline is not a technical specification. Clarifying the expected output can prevent spending most of the time on irrelevant polish.

Follow-up

- What would you communicate if scope is excessive?
  The minimum complete deliverable and the explicit features that require additional time.

</details>
</details>
<!-- /interview-answer -->

- Q468 — 72-hour "Round 1" demanding full RAG + agents + UI.（来源：[questions.md:618](interview/questions/questions.md)）

<!-- interview-answer Q468 -->
<details>
<summary>展开答案 · Q468</summary>

Interview Answer

I would prioritize a narrow RAG use case with a working UI and one justified agent decision, then add citations, abstention and a small evaluation set. I would use typed boundaries and mocked dependencies for tests and document deployment limits. I would not spread the time across many agents or claim production readiness without evidence.

<details>
<summary>展开详解与追问</summary>

Explanation

The 72-hour window is a constraint, not a reason to skip correctness. Preserve time for clean-environment setup and failure cases.

Follow-up

- What is the first milestone?
  One question answered from an ingested document with a valid citation through the actual UI path.

</details>
</details>
<!-- /interview-answer -->

- Q469 — Build an LLM agent to ingest years of financial reports with stock price analysis and chart generation using only freemium APIs. Candidate withdrew, calling it "an unpaid mini-consulting project."（来源：[questions.md:619](interview/questions/questions.md)）

<!-- interview-answer Q469 -->
<details>
<summary>展开答案 · Q469</summary>

Interview Answer

I would negotiate a minimal scope: a small fixed set of financial reports, source-linked extraction, deterministic price analysis and chart generation, with an LLM explaining verified outputs. I would verify freemium quotas and data rights and offer offline fixtures. The submission would clearly separate current filing data from point-in-time research and avoid claims of profitable stock prediction.

<details>
<summary>展开详解与追问</summary>

Explanation

The broad brief can exceed a reasonable take-home budget. A scoped proposal is more defensible than silently delivering a fragile imitation.

Follow-up

- What would you exclude first?
  Years of broad data coverage, autonomous trading and extra interfaces before the core evidence and numerical path works.

</details>
</details>
<!-- /interview-answer -->

- Q470 — 45 minutes for 3 complex tasks.（来源：[questions.md:620](interview/questions/questions.md)）

<!-- interview-answer Q470 -->
<details>
<summary>展开答案 · Q470</summary>

Interview Answer

I would ask for the three exact tasks and their scoring, then identify the smallest correct deliverables and allocate time explicitly. I would favor a tested partial solution over three unverified implementations and communicate assumptions as I work. This entry is a format complaint rather than a complete coding problem, so it cannot support a specific algorithmic answer.

<details>
<summary>展开详解与追问</summary>

Explanation

Under 45 minutes, setup friction and unclear contracts are material risks. Reuse permitted tooling, but keep the reasoning and validation visible.

Follow-up

- What would you do if all three cannot be completed?
  Prioritize by scoring and dependencies, finish the highest-value path and state exactly what remains incomplete.

</details>
</details>
<!-- /interview-answer -->

- Q547 — Build a RAG chatbot that ingests PDFs/documents, creates embeddings in a vector DB, and answers questions with citations. Must respond "I don't have that information" when answer is unavailable. Answers must come strictly from retrieved context (10+ candidate submissions across 5+ companies).（来源：[06-home-assignments.md:35](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q547 -->
<details>
<summary>展开答案 · Q547</summary>

Interview Answer

I would preserve document and page identifiers during ingestion, index chunks, retrieve evidence and generate only claims supported by that evidence. Every substantive answer would include citations, and unsupported requests would return the exact required fallback, "I don't have that information." I would test answerable, missing-evidence and misleading-context cases, including attempts to make retrieved text override application instructions.

<details>
<summary>展开详解与追问</summary>

Explanation

Similarity is not proof of answer support. Check that cited spans actually contain the required fact; partially answerable questions need supported partial responses only if the specification allows them.

Follow-up

- How do you test abstention?
  Include questions whose words match the corpus but whose requested facts are absent, and measure both missed answers and unsupported answers.

</details>
</details>
<!-- /interview-answer -->

- Q548 — Build a policy document RAG assistant with mandatory source citations for every answer. Return safe fallbacks for out-of-scope questions. Comes with a 7-question evaluation set across 3 categories (answerable, partially answerable, unanswerable).（来源：[06-home-assignments.md:36](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q548 -->
<details>
<summary>展开答案 · Q548</summary>

Interview Answer

I would preserve policy versions and source spans, require each substantive answer claim to have supporting evidence and return a scoped fallback for unanswered parts. I would run the supplied seven cases and add a few adversarial cases without treating the supplied set as an independent holdout after tuning. The deliverable includes citations, failure examples and reproducible evaluation.

<details>
<summary>展开详解与追问</summary>

Explanation

Seven questions are useful acceptance cases but too small to justify broad quality claims. Partially answerable questions need partial rather than invented complete answers. Report the seven supplied cases separately across answerable, partially answerable and unanswerable categories. Out-of-scope requests must take a safe fallback path; every supported partial answer still needs citations.

Follow-up

- What if the retrieved policy is outdated?
  Identify its effective date and avoid presenting it as current without a validated revision rule.

</details>
</details>
<!-- /interview-answer -->

- Q549 — Build a document Q&A system with citation tracking that handles multi-hop questions (questions requiring information from multiple documents or sections to answer).（来源：[06-home-assignments.md:37](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q549 -->
<details>
<summary>展开答案 · Q549</summary>

Interview Answer

I would create document/section IDs and evidence-linked chunks, then retrieve enough supporting passages for each multi-hop question. The answer records which source supports each step or claim and abstains when a required link is missing. I would include single-hop, multi-hop and insufficient-evidence cases with expected citations and a small failure analysis.

<details>
<summary>展开详解与追问</summary>

Explanation

A generated reasoning narrative is not proof that both necessary documents were used. Check the actual evidence chain.

Follow-up

- How do you test multi-hop behavior?
  Remove one required source and verify the system no longer gives the unsupported complete answer.

</details>
</details>
<!-- /interview-answer -->

- Q550 — Build a live chat agent grounded in FAQ knowledge base. Model must answer only from known FAQ data.（来源：[06-home-assignments.md:38](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q550 -->
<details>
<summary>展开答案 · Q550</summary>

Interview Answer

I would normalize and version the FAQ, retrieve relevant entries and answer only from supported content, with an explicit out-of-scope response. Session state helps resolve follow-ups without turning prior generated text into authoritative knowledge. I would test paraphrases, conflicting entries and missing answers, and show a small quality/latency report with reproducible setup.

<details>
<summary>展开详解与追问</summary>

Explanation

FAQ grounding should not be mistaken for permission to improvise product policies. Cite or identify the relevant entry.

Follow-up

- What if two FAQ entries conflict?
  Surface the conflict or route for review instead of confidently choosing one without a revision rule.

</details>
</details>
<!-- /interview-answer -->


<a id="day-37"></a>

### 周二 11/24

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Timed Query Mock<br>LeetCode: [178. Rank Scores](https://leetcode.com/problems/rank-scores/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)<br>资料：[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI Security and Reliability](Study%20topics/ai-security-and-reliability.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Workflow Evaluation and Observability<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-37)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / RAG and Document Q&A; Take-Home Assignments / Agents and Tool-Calling — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Tool Selection Evaluation](Study%20topics/tool-selection-evaluation.html); [Prompt Injection](Study%20topics/prompt-injection.html); [Tool Sandboxing](Study%20topics/tool-sandboxing.html); [PII](Study%20topics/pii.html); [Tenant Isolation](Study%20topics/tenant-isolation.html) |


<!-- quantvault-day 37 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2152 · ML Model Failures in Production](https://quantvault.org/problems.html?id=2152) · Machine Learning · Medium

先修：先读Serving、Drift、Model Versioning。

本次范围：Production diagnosis。检查输入schema、预处理、版本、真实标签延迟和服务指标；比较离线与线上预测一致性。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-37)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q551 — Design a customer support chatbot using RAG with open-source models. Requirements: 100+ concurrent users, <2 second latency, grounded in company docs, analytics tracking.（来源：[06-home-assignments.md:39](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q551 -->
<details>
<summary>展开答案 · Q551</summary>

Interview Answer

I would agree whether the two-second target means first token or complete answer, then build a narrow open-source RAG baseline with permission-aware documents, citations and abstention. I would measure performance at the required concurrent load, not just one local request. The submission includes a reproducible setup, a labeled evaluation set, traces, cost assumptions and explicit unmet requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

The reported 9/10 is historical commentary, not an acceptance guarantee. Hardware, output length and concurrency strongly affect feasibility.

Follow-up

- What if the latency target is missed?
  Show the measured bottleneck and a scoped optimization or proposed requirement trade-off rather than claim production readiness.

</details>
</details>
<!-- /interview-answer -->

- Q552 — Build a CLI tool for summarizing long PDFs with configurable models and chunking strategies.（来源：[06-home-assignments.md:40](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q552 -->
<details>
<summary>展开答案 · Q552</summary>

Interview Answer

I would build a CLI with explicit input path, model, token budget and chunking options. Parsing would retain page references; token-aware chunks would feed a map-and-reduce summary that preserves key facts and uncertainty. The command would write the summary plus configuration and provenance, with resumable intermediate results where practical. I would test long documents, empty or scanned PDFs, provider failures and differences across chunking strategies.

<details>
<summary>展开详解与追问</summary>

Explanation

Clarify whether hierarchical summarization is permitted and whether OCR is in scope. Evaluate factual preservation and missing critical sections, not just shorter output; model context limits must be checked before calls.

Follow-up

- Why not summarize each page independently?
  Important arguments can cross pages. Structural chunking and a final synthesis stage preserve relationships better, while still requiring source checks.

</details>
</details>
<!-- /interview-answer -->

- Q553 — Refactor an existing messy RAG application into a clean architecture. Preserve all external behaviors (exact API endpoints), eliminate global mutable state, ensure testability without requiring running services (5+ candidate submissions for one company).（来源：[06-home-assignments.md:41](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q553 -->
<details>
<summary>展开答案 · Q553</summary>

Interview Answer

I would preserve the existing API contract with characterization tests, then separate ingestion, retrieval, generation, orchestration and configuration. External clients are injected so unit tests run offline. I would keep LangGraph only where its state/control features help and put a thin FastAPI boundary over testable logic. I would provide a behavior-preservation report and clearly separate bug fixes from refactoring.

<details>
<summary>展开详解与追问</summary>

Explanation

Changing frameworks is not itself an improvement. Global mutable state and hidden service dependencies often make refactoring hard to verify. Remove global mutable clients and request state through explicit lifetimes and dependency injection. Freeze exact route, status-code and response-shape contracts; use fake retrieval/model adapters so tests require no running services.

Follow-up

- How do you prove compatibility?
  Run the same request/response and error-contract fixtures before and after, including failure paths.

</details>
</details>
<!-- /interview-answer -->

- Q554 — Build an agentic RAG system for government documents. 100% open-source required (Ollama + CrewAI + pgvector). Must integrate with OpenWebUI. Evaluated using RAGAS metrics (faithfulness, answer relevancy, context precision, context recall).（来源：[06-home-assignments.md:42](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q554 -->
<details>
<summary>展开答案 · Q554</summary>

Interview Answer

I would use Ollama for local inference, CrewAI for bounded orchestration and PostgreSQL with pgvector for retrieval, exposing an interface compatible with OpenWebUI. Government documents would retain section, date and version metadata. I would establish a non-agentic retrieval baseline, then evaluate faithfulness, answer relevancy, context precision and context recall with a reference set. I would pin RAGAS and record evaluator models and prompts.

<details>
<summary>展开详解与追问</summary>

Explanation

Open-source tooling does not automatically make every model weight or evaluator open-source; check licenses and keep evaluation local if the requirement covers the full stack. Reference-based context recall needs known supporting evidence.

Follow-up

- Why compare against a simple RAG baseline?
  It shows whether orchestration improves measured answers enough to justify latency, failure modes and maintenance.

</details>
</details>
<!-- /interview-answer -->

- Q555 — Build an assistant agent handling database queries, document search, and bash commands. Bash commands require explicit user approval.（来源：[06-home-assignments.md:49](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q555 -->
<details>
<summary>展开答案 · Q555</summary>

Interview Answer

I would give database, search and shell tools distinct narrow contracts and permissions. Queries are read-only and bounded; retrieval respects source access; shell execution is isolated and requires explicit approval for the actual command. Evaluation measures tool choice, argument validity, grounded results and recovery, with unauthorized requests expected to fail before execution.

<details>
<summary>展开详解与追问</summary>

Explanation

A general bash tool greatly expands the threat surface. Prefer predefined commands when they meet the task.

Follow-up

- What should an approval record contain?
  The exact command and arguments, scope, approver and relevant version, with rejection and expiry behavior.

</details>
</details>
<!-- /interview-answer -->

- Q556 — Build an AI agent that transforms Monday.com project management data into conversational business insights using dual-LLM architecture.（来源：[06-home-assignments.md:50](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q556 -->
<details>
<summary>展开答案 · Q556</summary>

Interview Answer

I would fetch authorized Monday.com data through typed tools, normalize board and item fields, and compute business aggregates in code. A planning model would select the query or tools; a second model would produce a conversational explanation from validated results. I would preserve date ranges and permissions, test ambiguous board schemas and stale data, and compare the dual-model design against a single-model baseline.

<details>
<summary>展开详解与追问</summary>

Explanation

Two LLMs do not create independent truth. Validate calculations server-side, cap tool loops and define what happens when either model or the Monday.com API fails.

Follow-up

- What should the second model receive?
  The question, approved aggregate results, field definitions and provenance, not unrestricted raw account data.

</details>
</details>
<!-- /interview-answer -->

- Q557 — Build an AI agent demonstrating natural interaction, agentic behavior, and clear reasoning steps.（来源：[06-home-assignments.md:51](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q557 -->
<details>
<summary>展开答案 · Q557</summary>

Interview Answer

I would choose one narrow user task with a real runtime decision, such as selecting a retrieval or calculation tool, and implement a bounded agent loop with typed state. I would expose concise decision summaries and tool traces rather than claim to reveal a model's hidden reasoning. Evaluation covers normal, ambiguous and failed-tool cases, with limits, reproducible setup and a clear demo.

<details>
<summary>展开详解与追问</summary>

Explanation

A three-day window favors a complete small workflow over many shallow agents. Natural conversation does not replace measurable task success.

Follow-up

- What demonstrates agentic behavior?
  An observation changes the next permitted action, with the choice and outcome visible in the execution trace.

</details>
</details>
<!-- /interview-answer -->

- Q558 — Build a customer support agent.（来源：[06-home-assignments.md:52](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q558 -->
<details>
<summary>展开答案 · Q558</summary>

Interview Answer

I would spend the initial minutes defining the product scope and a handful of expected outcomes, including an unanswerable and escalation case. Then I would build the smallest support workflow that can pass them: retrieve known information, draft a grounded answer and return a clear fallback. I would reserve time for running the cases and documenting limitations rather than constructing an elaborate interface.

<details>
<summary>展开详解与追问</summary>

Explanation

Within 1.5 hours, a reproducible narrow vertical slice is more credible than calling a broad prototype production-ready. The standalone question gives no delivery deadline; any time-box in the shared example is a proposed scoping choice, not an additional requirement.

Follow-up

- What would you omit?
  Autonomous external actions, elaborate multi-agent coordination and infrastructure not needed to demonstrate the task.

</details>
</details>
<!-- /interview-answer -->

- Q559 — Build an autonomous agent using an open-source LLM with observability/eval layer.（来源：[06-home-assignments.md:53](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q559 -->
<details>
<summary>展开答案 · Q559</summary>

Interview Answer

I would choose a bounded task and an available licensed open-source model, wrap tools with typed validation and enforce step/time limits. The agent records state transitions and actual tool outcomes. A small evaluation set compares it with a deterministic baseline and includes failed tools and ambiguous requests. I would document hardware and model versions so the result can be reproduced.

<details>
<summary>展开详解与追问</summary>

Explanation

Open-source model availability does not guarantee suitable hardware performance or unrestricted use. Verify the actual license and runtime.

Follow-up

- What shows useful autonomy?
  Correctly selecting among permitted actions based on observations while avoiding unnecessary calls and stopping reliably.

</details>
</details>
<!-- /interview-answer -->

- Q560 — Build an agent that reads customer CSV data and generates personalized email campaigns with evaluation metrics.（来源：[06-home-assignments.md:54](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q560 -->
<details>
<summary>展开答案 · Q560</summary>

Interview Answer

I would validate the customer CSV, minimize personal data and generate drafts from permitted fields under a structured campaign schema. I would test factual personalization, tone, duplicate handling and inappropriate content with a small reference set. Sending is outside the default draft-generation scope and requires explicit approval and the organization's communication rules. The demo uses synthetic customer data.

<details>
<summary>展开详解与追问</summary>

Explanation

Do not fabricate personal facts or infer sensitive traits to make messages feel personalized. Evaluate distinct factual and stylistic criteria.

Follow-up

- How do you measure quality?
  Check factual consistency with the input, required campaign fields, reviewed writing quality and safety; do not invent conversion uplift.

</details>
</details>
<!-- /interview-answer -->

- Q561 — Build a code review agent that analyzes Python files and provides actionable feedback.（来源：[06-home-assignments.md:55](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q561 -->
<details>
<summary>展开答案 · Q561</summary>

Interview Answer

I would parse Python files and combine deterministic lint/test results with model review of a bounded diff and relevant context. Findings include location, severity, evidence and a suggested fix; unsupported claims are filtered or marked uncertain. I would evaluate known bugs and clean examples, and avoid executing submitted code outside an isolated environment.

<details>
<summary>展开详解与追问</summary>

Explanation

Actionable feedback identifies a reproducible issue, not just a stylistic preference. Track false positives as well as missed bugs.

Follow-up

- What belongs in the minimal demo?
  One real defect detected with a precise explanation and one clean file that does not attract invented findings.

</details>
</details>
<!-- /interview-answer -->

- Q562 — Build a Singapore public transport query agent that fetches live data from 7 LTA APIs about buses, trains, traffic, and station conditions.（来源：[06-home-assignments.md:56](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q562 -->
<details>
<summary>展开答案 · Q562</summary>

Interview Answer

I would wrap each of the seven LTA APIs with a typed adapter that handles authentication, pagination, timeouts and schema validation. The agent would identify the relevant transport intent, call only the needed adapters and return timestamped results with a clear stale-data indication. A small local fixture suite would test buses, trains, traffic, station conditions, ambiguous locations and upstream outages.

<details>
<summary>展开详解与追问</summary>

Explanation

Keep credentials outside prompts. Time-sensitive data needs short, endpoint-specific caching; a scheduled timetable must not be presented as a live arrival estimate.

Follow-up

- What if only one API is unavailable?
  Return the supported partial answer and identify the missing live information, rather than fabricate a complete transport status.

</details>
</details>
<!-- /interview-answer -->

- Q563 — Build a sales insights agent that answers questions about subscription/revenue data. Must detect and refuse PII requests (emails, phone numbers, credit card tokens). No raw rows passed to the LLM - aggregates only. Evaluated on 3 dimensions: accuracy, safety/refusal correctness, reasoning quality.（来源：[06-home-assignments.md:57](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q563 -->
<details>
<summary>展开答案 · Q563</summary>

Interview Answer

I would compute sales metrics through read-only validated queries and pass only permitted aggregates to the model. A policy layer rejects personal-data requests before data retrieval, and generated explanations must match actual results. Evaluation separates numerical accuracy, refusal correctness and explanation quality, including adversarial prompts and small-group leakage risks. I would provide a synthetic fixture and auditable query traces.

<details>
<summary>展开详解与追问</summary>

Explanation

Removing names is not always enough if an aggregate identifies a single person. The allowed aggregation policy must be explicit. Include explicit refusal tests for emails, phone numbers and credit-card tokens, including attempts to encode or infer them. Only approved aggregates, never raw subscription rows, enter model context.

Follow-up

- How do you prevent raw-row leakage?
  Restrict the data tool's output schema and privileges so the LLM never receives unauthorized rows.

</details>
</details>
<!-- /interview-answer -->


<a id="day-38"></a>

### 周三 11/25

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Debugging and Code Review Mock<br>LeetCode: [71. Simplify Path](https://leetcode.com/problems/simplify-path/); [394. Decode String](https://leetcode.com/problems/decode-string/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)<br>资料：[API Clients](Study%20topics/api-clients.html); [Race Conditions](Study%20topics/race-conditions.html); [Profiling](Study%20topics/profiling.html); [Debugging](Study%20topics/debugging.html); [Refactoring](Study%20topics/refactoring.html); [Code Review](Study%20topics/code-review.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [AI Security and Reliability](Study%20topics/ai-security-and-reliability.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: CI, Container Release and Demo<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-38)<br>ML integration: [Volatility Forecasting prerequisite](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Legal Document AI; Take-Home Assignments / RAG and Document Q&A (New Companies); Take-Home Assignments / Agents and Multi-Agent Systems (New) — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 38 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：先复习Day 37，避免一看到低分就直接重训练。

本次范围：Advanced: incident outline。给出定位、可安全回滚、证据保留和复验顺序；说明哪些证据支持数据变化，哪些支持实现故障。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-38)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q586 — Build a legal document AI workflow with a three-tier extraction cascade and an improvement-from-edits loop. The system must ingest, extract, ground, and iteratively improve based on operator corrections.（来源：[06-home-assignments.md:143](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q586 -->
<details>
<summary>展开答案 · Q586</summary>

Interview Answer

I would define the three extraction tiers explicitly, for example deterministic parsing, OCR/layout extraction and a model-assisted fallback for difficult fields. Every value would retain evidence and confidence. Operator edits would be stored as reviewed corrections with document and schema versions, then used to improve rules or prompts through a held-out evaluation. I would avoid immediately training on every edit.

<details>
<summary>展开详解与追问</summary>

Explanation

The tier choices are proposed because the prompt does not specify them. Test routing, conflicting evidence and whether improvements generalize beyond corrected documents; an edit can itself be wrong.

Follow-up

- How do you prevent feedback contamination?
  Separate development corrections from held-out evaluation and retain the original extraction so changes can be audited.

</details>
</details>
<!-- /interview-answer -->

- Q587 — Pearson Specter Litt: Take-home requiring ingestion of messy legal documents, grounded retrieval, cited draft generation, and learning from operator edits. Delivered as a scrum sprint plan.（来源：[06-home-assignments.md:144](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q587 -->
<details>
<summary>展开答案 · Q587</summary>

Interview Answer

I would write a sprint plan around a thin legal-document workflow: ingest messy files, preserve provenance, retrieve relevant clauses, generate cited drafts and capture operator edits. Each story would have an acceptance test, a dependency and an explicit review boundary. The final demo would show a supported draft and one correction feeding a versioned improvement process; it would not claim autonomous legal judgment.

<details>
<summary>展开详解与追问</summary>

Explanation

A useful sprint plan includes spikes for uncertain parsing, a definition of done for citation correctness and a fallback when evidence is missing. Scope the first sprint to one document type and workflow.

Follow-up

- What is the highest-priority story?
  Reliable ingestion and evidence tracing, because polished draft generation is not valuable when it cites the wrong clause.

</details>
</details>
<!-- /interview-answer -->

- Q588 — Quorium: Build a RAG Q&A chatbot for an AI Engineer Trainee role. Standard RAG pipeline with document ingestion and question answering.（来源：[06-home-assignments.md:149](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q588 -->
<details>
<summary>展开答案 · Q588</summary>

Interview Answer

I would implement a small end-to-end path: parse supplied documents, preserve source locations, build an index and answer questions with supported citations. I would add an explicit no-evidence response, a few representative and adversarial cases, and reproducible commands. The README distinguishes local functionality from untested production scale and includes quality, latency and cost observations.

<details>
<summary>展开详解与追问</summary>

Explanation

A vector database is an implementation choice, not the evaluation goal. The project succeeds when answers use the right evidence and fail honestly.

Follow-up

- What is the first test?
  A question with a known supporting passage and an unanswerable question that must not receive an invented answer.

</details>
</details>
<!-- /interview-answer -->

- Q589 — ITJ: RAG-based document QA system as a take-home challenge.（来源：[06-home-assignments.md:150](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q589 -->
<details>
<summary>展开答案 · Q589</summary>

Interview Answer

I would implement a small end-to-end path: parse supplied documents, preserve source locations, build an index and answer questions with supported citations. I would add an explicit no-evidence response, a few representative and adversarial cases, and reproducible commands. The README distinguishes local functionality from untested production scale and includes quality, latency and cost observations.

<details>
<summary>展开详解与追问</summary>

Explanation

A vector database is an implementation choice, not the evaluation goal. The project succeeds when answers use the right evidence and fail honestly.

Follow-up

- What is the first test?
  A question with a known supporting passage and an unanswerable question that must not receive an invented answer.

</details>
</details>
<!-- /interview-answer -->

- Q590 — NTT DATA: RAG system over sustainability reports.（来源：[06-home-assignments.md:151](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q590 -->
<details>
<summary>展开答案 · Q590</summary>

Interview Answer

I would ingest sustainability reports with company, year, reporting boundary and page metadata, then combine textual retrieval with structured extraction for numeric disclosures. Answers would cite evidence and preserve units and distinctions such as reported versus restated values. I would evaluate cross-year comparisons, missing disclosures and misleadingly similar metrics before adding more sophisticated retrieval.

<details>
<summary>展开详解与追问</summary>

Explanation

Sustainability figures are not comparable merely because their labels match. Scope, units and methodology can change; retrieval should surface these caveats instead of calculating an unsupported trend.

Follow-up

- How do you handle a table split across pages?
  Reconstruct its headers and row context while retaining both page references, and flag uncertain extraction for review.

</details>
</details>
<!-- /interview-answer -->

- Q591 — NeoStats: Chatbot assignment for an AI Engineer case study.（来源：[06-home-assignments.md:152](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q591 -->
<details>
<summary>展开答案 · Q591</summary>

Interview Answer

The title identifies a chatbot case study but does not specify its users, data or acceptance criteria. I would obtain that brief before choosing a stack. My proposed minimum is a narrow supported workflow, a reproducible data fixture, a clear fallback for unsupported requests and a small evaluation set. I would document which assumptions are mine rather than present them as NeoStats requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

Missing information includes corpus, required integrations, deadline, permitted models and expected deliverables. A study answer can explain the scoping method without fabricating a company-specific assignment.

Follow-up

- What can you do before the full brief arrives?
  Define a lightweight interface and evaluation checklist, but avoid building features whose necessity is unknown.

</details>
</details>
<!-- /interview-answer -->

- Q592 — Trinamix: Supply chain RAG chatbot over a 2,000-PO supplier register and governance policy. Built with Flowise, Pinecone, and GPT.（来源：[06-home-assignments.md:153](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q592 -->
<details>
<summary>展开答案 · Q592</summary>

Interview Answer

I would use Flowise to orchestrate the assistant, Pinecone for governance-policy retrieval and GPT for interpreting questions and explaining results. For the 2,000-PO register, counts, sums and filters would run through validated structured queries rather than approximate vector retrieval. Answers would combine computed results with relevant policy citations and preserve supplier, date and status definitions.

<details>
<summary>展开详解与追问</summary>

Explanation

A PO register is structured data even if supplied as a spreadsheet. Test duplicate POs, null statuses, mismatched supplier names and questions that combine numerical facts with policy obligations.

Follow-up

- Why not embed all POs and ask the model to count?
  Top-k retrieval does not guarantee exhaustive rows, and an LLM count is not a reliable database aggregation.

</details>
</details>
<!-- /interview-answer -->

- Q593 — GoTyme Bank: Full-stack document extraction system combining OCR and LLM, with a React frontend.（来源：[06-home-assignments.md:154](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q593 -->
<details>
<summary>展开答案 · Q593</summary>

Interview Answer

I would build a React upload and review interface, a backend with asynchronous OCR and extraction jobs, and a schema-validated result store. OCR would provide text and layout evidence; the LLM would map it into typed fields with provenance rather than invent missing values. I would test corrupt files, low-quality scans, contradictory fields and retries, with an operator correction path.

<details>
<summary>展开详解与追问</summary>

Explanation

The title does not establish exact document types or traffic targets. Clarify those first, and isolate uploads by user with file limits and controlled retention.

Follow-up

- How do you show extraction uncertainty?
  Display the source crop or span with an unresolved field or confidence flag, and require review where errors have material consequences.

</details>
</details>
<!-- /interview-answer -->

- Q594 — Go Fig AI: Build an inbox-triage agent skill with a human-in-the-loop approval gate. 2-hour cap.（来源：[06-home-assignments.md:159](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q594 -->
<details>
<summary>展开答案 · Q594</summary>

Interview Answer

Within the two-hour cap, I would implement inbox ingestion, classification, a proposed action and a human approval gate before any side effect. I would prioritize fixture-based tests proving that rejection performs no write, approval executes only the reviewed action and retries do not duplicate it. I would reserve time for a clear engineering log and a short demo of both approval and refusal.

<details>
<summary>展开详解与追问</summary>

Explanation

Treat email contents as untrusted instructions. Keep the skill small and make the approved payload immutable; a model revision after approval requires a new review.

Follow-up

- What happens if the process crashes after sending?
  Use an idempotency key and durable execution status so replay can reconcile the result instead of sending again.

</details>
</details>
<!-- /interview-answer -->

- Q595 — Yuno: Multi-agent orchestration platform with Ollama, Streamlit, and Telegram.（来源：[06-home-assignments.md:160](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q595 -->
<details>
<summary>展开答案 · Q595</summary>

Interview Answer

I would use Ollama for local models, Streamlit for an operator interface and Telegram as a messaging adapter, with shared orchestration logic behind both. Agent responsibilities and tool permissions would be explicit, conversation state would be isolated per user, and loops would have time and step limits. The minimum demo would show one multi-agent workflow and an upstream failure with a useful fallback.

<details>
<summary>展开详解与追问</summary>

Explanation

The brief does not define the agents' business roles; choose and state a narrow example rather than invent Yuno's requirements. Validate Telegram user identity and deduplicate update IDs.

Follow-up

- Why share a backend service?
  It prevents the web and messaging interfaces from implementing different permission, state and error-handling rules.

</details>
</details>
<!-- /interview-answer -->

- Q596 — RefundPilot: Containerized internal support workspace that evaluates e-commerce refund requests, applies refund policy, resists prompt-injection attempts, and records structured decision logs.（来源：[06-home-assignments.md:161](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q596 -->
<details>
<summary>展开答案 · Q596</summary>

Interview Answer

I would containerize a workspace that reads a refund request, retrieves the applicable versioned policy and produces a structured recommendation with evidence and reason codes. Deterministic checks would enforce policy constraints, while the model explains ambiguous facts. I would keep actual refunds behind an authorized action, log decisions without secrets and test malicious customer text, missing order data and duplicate requests.

<details>
<summary>展开详解与追问</summary>

Explanation

A customer message cannot override refund policy or tool permissions. Record the policy version and distinguish recommended, approved and executed states.

Follow-up

- How do you evaluate injection resistance?
  Create adversarial requests embedded in customer text and attachments, then assert that policy and authorization checks still control outcomes.

</details>
</details>
<!-- /interview-answer -->

- Q597 — AgentCollect: Full-Stack AI Engineer (AI-Native) hiring challenge.（来源：[06-home-assignments.md:162](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q597 -->
<details>
<summary>展开答案 · Q597</summary>

Interview Answer

This is a hiring-challenge title rather than an implementable specification. I would request the full brief, including the user workflow, required stack and review criteria, then propose one complete vertical slice with a tested API, usable interface and observable model interaction. I would disclose AI assistance and explain the code I submit, but I would not invent AgentCollect's hidden requirements.

<details>
<summary>展开详解与追问</summary>

Explanation

Missing conditions include data, integrations, deployment expectations and time budget. The appropriate study deliverable is a scoping and acceptance approach until those are known.

Follow-up

- What would your first milestone be?
  A deterministic end-to-end path with fixtures, followed by the model integration and failure tests needed for the actual workflow.

</details>
</details>
<!-- /interview-answer -->

- Q598 — Neon Health: AI Agent with OpenAI integration.（来源：[06-home-assignments.md:163](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q598 -->
<details>
<summary>展开答案 · Q598</summary>

Interview Answer

I would first clarify what the Neon Health agent is allowed to do and what data it handles. For an OpenAI integration, I would place provider calls behind a server-side adapter, validate tool arguments, protect sensitive data and record minimal traces. The initial deliverable would demonstrate one authorized workflow with mocked failure tests; I would not assume a clinical decision-making scope from the company name.

<details>
<summary>展开详解与追问</summary>

Explanation

The prompt omits actions, data sources and acceptance criteria. If sensitive health data is involved, actual deployment needs a separately verified data-handling and review design.

Follow-up

- What if the model proposes an unrecognized tool?
  Reject it at the tool dispatcher and return a controlled error; never translate arbitrary tool names into executable code.

</details>
</details>
<!-- /interview-answer -->


<a id="day-39"></a>

### 周四 11/26

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Weak-Topic Review<br>LeetCode: [1661. Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/); [1934. Confirmation Rate](https://leetcode.com/problems/confirmation-rate/); [1204. Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/)<br>资料：[SELECT](Study%20topics/select.html); [WHERE](Study%20topics/where.html); [ORDER BY](Study%20topics/order-by.html); [LIMIT](Study%20topics/limit.html); [NULL](Study%20topics/null.html); [GROUP BY](Study%20topics/group-by.html); [HAVING](Study%20topics/having.html); [CASE](Study%20topics/case.html); [Subqueries](Study%20topics/subqueries.html); [CTEs](Study%20topics/ctes.html); [EXISTS](Study%20topics/exists.html); [Date Queries](Study%20topics/date-queries.html); [Transactions](Study%20topics/transactions.html); [Constraints](Study%20topics/constraints.html); [Parameterized Queries](Study%20topics/parameterized-queries.html); [PostgreSQL Schema Design](Study%20topics/postgresql-schema-design.html); [Primary and Foreign Keys](Study%20topics/primary-and-foreign-keys.html); [Indexes](Study%20topics/indexes.html); [EXPLAIN](Study%20topics/explain.html); [Query Optimization](Study%20topics/query-optimization.html); [Run Analytics](Study%20topics/run-analytics.html); [Percentiles](Study%20topics/percentiles.html); [Financial Analytics](Study%20topics/financial-analytics.html); [JOINs](Study%20topics/joins.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Supervised and Unsupervised Learning; Baselines](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [Notebook](notebook/02_supervised_and_unsupervised_learning_baselines.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Learning |
| 15:00–16:30 | 项目，1.5 小时 | Portfolio Review: Evidence Audit and Cross-Project Reproduction<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-39) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Agents and Multi-Agent Systems (New); Take-Home Assignments / LLM Applications and Infrastructure; Take-Home Assignments / Embeddable and Conversational AI — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review<br>当日概念索引（按需）：[Ownership](Study%20topics/ownership.html); [Design Trade-offs](Study%20topics/design-trade-offs.html) |


<!-- quantvault-day 39 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1866 · OLS Assumptions, Violations, and Diagnostics](https://quantvault.org/problems.html?id=1866) · Regression · Medium

先修：复习Linear Regression、Data Leakage、Multicollinearity。

本次范围：Mock: regression foundations。口述模型、假设、残差与常见失效；重点是预测有效性，不把因果或无偏推断当作自动结论。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-39)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q599 — Future Research: LangGraph multi-agent fitness coach with hub routing to sub-agents (coach, workout-generator, workout-logger) via Claude structured output.（来源：[06-home-assignments.md:164](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q599 -->
<details>
<summary>展开答案 · Q599</summary>

Interview Answer

For this described version of the assignment, I would use LangGraph with a hub that selects coach, workout-generator or workout-logger through Claude structured output. Each route would have a typed input/output contract, with a deterministic validator before logging or presenting a workout. I would test ambiguous intent, repeated logging and invalid structured responses, and keep the plan within declared user constraints.

<details>
<summary>展开详解与追问</summary>

Explanation

This wording is a particular task variant; the separately linked current Future Research repository describes a broader knowledge-graph assessment. Do not silently merge the two briefs.

Follow-up

- How do you avoid routing loops?
  Use explicit terminal states, a bounded number of handoffs and a fallback that asks for clarification.

</details>
</details>
<!-- /interview-answer -->

- Q600 — KarthikTools: Full-stack web app where a backend agent executes predefined tools with a clear execution trace.（来源：[06-home-assignments.md:165](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q600 -->
<details>
<summary>展开答案 · Q600</summary>

Interview Answer

I would build a frontend that shows the request, proposed tool steps and results, backed by an agent that can invoke only a predefined registry. Each tool would have a schema, authorization check and explicit side-effect classification. I would persist a trace with correlation IDs and redact secrets, then test invalid arguments, timeouts and repeated actions.

<details>
<summary>展开详解与追问</summary>

Explanation

An execution trace should report actions and evidence, not private internal chain-of-thought. The missing tool list must be supplied or clearly labeled as an illustrative choice.

Follow-up

- Can the frontend authorize a tool by hiding a button?
  No. The backend must enforce permissions regardless of how the request is submitted.

</details>
</details>
<!-- /interview-answer -->

- Q601 — GenAI Labs: Production-ready LLM-driven SQL analytics pipeline with token counting, SQL validation, observability, and benchmarking. Multiple submissions.（来源：[06-home-assignments.md:170](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q601 -->
<details>
<summary>展开答案 · Q601</summary>

Interview Answer

I would separate natural-language interpretation, SQL generation, validation, execution and explanation. The database role would be read-only with table-level access limits, timeouts and row caps; an AST validator would restrict statements before execution. I would count input/output tokens, trace each stage and benchmark execution correctness, refusal behavior, latency and cost against reference queries.

<details>
<summary>展开详解与追问</summary>

Explanation

SQL validation is not a regex problem. Joins, functions and subqueries can still be expensive or expose data even when a statement begins with SELECT; enforce permissions at the database too.

Follow-up

- How do you score equivalent SQL?
  Compare results on multiple fixtures with defined ordering and null semantics, rather than demand identical query text.

</details>
</details>
<!-- /interview-answer -->

- Q602 — VantageScore: GenAI-powered credit risk scoring with ML ensemble, explainability, and LLM enrichment.（来源：[06-home-assignments.md:171](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q602 -->
<details>
<summary>展开答案 · Q602</summary>

Interview Answer

I would separate credit-risk prediction from LLM explanation. A supervised ensemble would use features available at the decision time, with chronological validation, calibration and documented feature provenance. The LLM could summarize approved explanatory facts or enrich reviewed text features, but it would not invent scores or alter the decision policy. I would assess model stability, subgroup performance and traceability before considering operational use.

<details>
<summary>展开详解与追问</summary>

Explanation

This is an implementation proposal, not a claim of regulatory compliance or a deployed lending model. Any real decision and explanation requirements need domain and legal review; do not infer causality from feature attribution.

Follow-up

- What is the baseline?
  A transparent statistical model with the same feature timing and evaluation population, so ensemble gains can be assessed fairly.

</details>
</details>
<!-- /interview-answer -->

- Q603 — AEGIS: AEO content scoring, LLM query fan-out, and embedding-based semantic gap analysis.（来源：[06-home-assignments.md:172](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q603 -->
<details>
<summary>展开答案 · Q603</summary>

Interview Answer

I would define the AEO score as a measurable rubric, generate a controlled set of representative queries and fan out model calls with bounded concurrency. Embeddings would identify candidate semantic gaps between the content and desired topics; model judgments would then produce evidence-linked suggestions. I would report variation across queries and models rather than present one score as an objective search ranking.

<details>
<summary>展开详解与追问</summary>

Explanation

Clarify what AEO success means for the customer. Semantic distance is a diagnostic signal, not proof of missing facts or improved discoverability; validate recommendations with human review and downstream observations.

Follow-up

- How do you make comparisons reproducible?
  Freeze content, query set, model/prompt versions and scoring rules, and retain raw outputs for inspection.

</details>
</details>
<!-- /interview-answer -->

- Q604 — SHL: GenAI assessment recommendation system.（来源：[06-home-assignments.md:173](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q604 -->
<details>
<summary>展开答案 · Q604</summary>

Interview Answer

I would parse the assessment catalog into structured attributes, interpret a hiring request into constraints and retrieve eligible assessments. A ranker would prioritize job relevance, duration and skill coverage, while the LLM explains recommendations using catalog evidence. I would evaluate against reviewed recommendations and test nonexistent assessments, unsupported claims and conflicting constraints.

<details>
<summary>展开详解与追问</summary>

Explanation

The system recommends assessment products, not a candidate's suitability. Keep hard constraints deterministic and avoid inferring sensitive attributes from the job request.

Follow-up

- What if no assessment matches all constraints?
  Return the unmet constraints and a transparent nearest alternative rather than fabricate a matching product.

</details>
</details>
<!-- /interview-answer -->

- Q605 — Camplight: LLM interview task.（来源：[06-home-assignments.md:174](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q605 -->
<details>
<summary>展开答案 · Q605</summary>

Interview Answer

The prompt only names an LLM interview task, so I cannot infer Camplight's expected application. I would ask for the task statement and evaluation constraints, then identify the smallest demonstrable behavior, its failure cases and a reproducible test. My submission would explain where deterministic code is sufficient and where a model adds value.

<details>
<summary>展开详解与追问</summary>

Explanation

Missing information includes input/output examples, allowed tools, duration and success criteria. Do not substitute a generic chatbot as though it were the original assignment.

Follow-up

- How would you handle an intentionally vague brief?
  State assumptions, select a defensible narrow scope and show how one measurable result tests those assumptions.

</details>
</details>
<!-- /interview-answer -->

- Q606 — VijaySaravanaPandi: NL-to-app "compiler" — turns a natural-language app description into a working application via structured, validated intermediate representations (not just prompt to code).（来源：[06-home-assignments.md:175](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q606 -->
<details>
<summary>展开答案 · Q606</summary>

Interview Answer

I would treat the natural-language request as source input to a compiler-like pipeline: parse requirements, produce a typed intermediate representation, validate it, and generate application code from constrained templates. The IR would define entities, fields, routes and permissions. Tests would reject unsupported constructs and verify that generated routes and data constraints match the IR, with generated code executed only in an isolated environment.

<details>
<summary>展开详解与追问</summary>

Explanation

The model proposes structured intent; validators and code generation enforce the supported language. Clarify unsupported features rather than silently producing a plausible but unsafe app.

Follow-up

- Why is an IR better than direct prompt-to-code?
  It creates an inspectable contract and allows structural validation, deterministic generation and targeted error messages before execution.

</details>
</details>
<!-- /interview-answer -->

- Q607 — Jpower3145: Local LLM pre-interview task.（来源：[06-home-assignments.md:176](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q607 -->
<details>
<summary>展开答案 · Q607</summary>

Interview Answer

A local-LLM pre-interview task needs the actual problem statement before I can specify a solution. I would clarify hardware, allowed weights, licensing, network restrictions and expected output, then establish a reproducible local baseline with pinned model configuration. I would measure correctness, memory and latency on the supplied cases and document limitations honestly.

<details>
<summary>展开详解与追问</summary>

Explanation

The title does not establish whether the task is inference, fine-tuning or application development. Do not assume a GPU or substitute a hosted API for a local-only requirement.

Follow-up

- What if the model does not fit in memory?
  Consider permitted quantization or a smaller model, measure quality loss and explain the resource constraint rather than hide offloading.

</details>
</details>
<!-- /interview-answer -->

- Q608 — Cerebras: AI Engineer Model Quality and Performance hiring challenge (perf UI, eval pruning).（来源：[06-home-assignments.md:177](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q608 -->
<details>
<summary>展开答案 · Q608</summary>

Interview Answer

I would treat performance presentation and evaluation pruning as separate engineering problems. The UI should make throughput/latency trade-offs inspectable for different audiences, while the pruning component should select a smaller benchmark set and validate whether it preserves useful conclusions on held-out model results. I would compare against simple baselines and report uncertainty and failure cases, not just a compression ratio.

<details>
<summary>展开详解与追问</summary>

Explanation

Avoid choosing examples using the same model outcomes used for final validation. A pruned benchmark can preserve mean scores while reversing rankings or missing critical failures.

Follow-up

- What is a useful pruning test?
  Hold out models or runs and compare full versus pruned scores, ranking changes and decision errors with confidence estimates.

</details>
</details>
<!-- /interview-answer -->

- Q609 — nickusevich: Novelty detection for football news using hybrid retrieval (pgvector + tsvector + RRF), LLM reranking, and LLM-based publish/skip/review decisions.（来源：[06-home-assignments.md:178](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q609 -->
<details>
<summary>展开答案 · Q609</summary>

Interview Answer

I would retrieve similar football stories with PostgreSQL full-text search and pgvector, combine ranks using RRF and rerank the candidates with a bounded LLM step. A structured decision would select publish, skip or review with evidence about what is new. Tests would include paraphrases, updated scores, transfers with changed facts and older background articles.

<details>
<summary>展开详解与追问</summary>

Explanation

Novelty is not merely low similarity. A highly similar article can contain a critical update; preserve entities, dates and claims, and route ambiguous factual changes to review.

Follow-up

- Why use RRF?
  It combines rankings from differently scaled retrieval scores without assuming those scores are directly comparable.

</details>
</details>
<!-- /interview-answer -->

- Q610 — EloquentAI: Build an embeddable AI agent chat widget.（来源：[06-home-assignments.md:183](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q610 -->
<details>
<summary>展开答案 · Q610</summary>

Interview Answer

I would provide an embeddable widget with a small client loader and a backend session API. Tenant configuration, allowed origins and authentication would be checked server-side, with isolated conversation state, rate limits and streaming responses. The minimum demo would include embedding on a sample page, reconnect behavior and a provider failure message. I would avoid placing model credentials or trusted tenant controls in browser code.

<details>
<summary>展开详解与追问</summary>

Explanation

A public widget ID is not a secret. Sensitive tools require authenticated users and backend authorization; CSS isolation and accessibility also matter for a reusable component.

Follow-up

- How do you prevent cross-tenant retrieval?
  Bind the authenticated session to a server-verified tenant scope and enforce that scope in every data access and cache key.

</details>
</details>
<!-- /interview-answer -->

- Q611 — Fleetio: Hybrid deterministic + LLM weekly fleet digest.（来源：[06-home-assignments.md:184](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q611 -->
<details>
<summary>展开答案 · Q611</summary>

Interview Answer

I would compute the weekly fleet metrics deterministically from a frozen reporting window, then give the LLM a compact set of verified facts to narrate. The digest would retain units, comparison periods and evidence for anomalies, with missing-data warnings. Tests would verify calculations, late-arriving data and whether generated text contradicts the facts; a templated digest would be the fallback.

<details>
<summary>展开详解与追问</summary>

Explanation

The LLM should explain results, not calculate totals from raw events. A versioned reporting cutoff prevents a rerun from silently changing the story without explanation.

Follow-up

- What if the model invents a cause for an anomaly?
  Require causal claims to have evidence; otherwise describe the observed change and label possible causes as hypotheses.

</details>
</details>
<!-- /interview-answer -->


<a id="day-40"></a>

### 周五 11/27

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Weak-Topic Review<br>LeetCode: [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/); [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)<br>资料：[Hash Maps](Study%20topics/hash-maps.html); [LRU Cache](Study%20topics/lru-cache.html); [NumPy Logistic Regression](Study%20topics/numpy-logistic-regression.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [Notebook](notebook/01_train_validation_test_split.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Portfolio Review: Feature Freeze and Interview Deep Dive<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-40) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Embeddable and Conversational AI; Take-Home Assignments / Official Company Challenges — 12 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

<!-- quantvault-day 40 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：复习Day 05、Day 06；缓冲周按错误安排重做。

本次范围：Mock: evaluation and regularization。不看答案各用2分钟回答，再回答一个追问；重点检查验证角色及Lasso限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-40)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

- Q612 — Zap: AI-powered client onboarding automation.（来源：[06-home-assignments.md:185](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q612 -->
<details>
<summary>展开答案 · Q612</summary>

Interview Answer

I would map the client-onboarding workflow into explicit states, required information and approved actions. Deterministic validation would check forms and documents; AI would help extract information or draft communications. Integrations would use idempotent requests, retries and an audit trail, with review before material account changes. The demo would cover a complete case and one missing-information recovery.

<details>
<summary>展开详解与追问</summary>

Explanation

Clarify which systems and actions the Zap brief requires. Do not equate a generated onboarding checklist with a completed external setup; status must reflect confirmed tool results.

Follow-up

- How do you resume an interrupted onboarding?
  Persist completed steps and pending requirements, then retry only safe incomplete operations with the same logical request identifiers.

</details>
</details>
<!-- /interview-answer -->

- Q613 — Adobe (FDE): GenAI-powered creative automation pipeline for social ad campaigns.（来源：[06-home-assignments.md:186](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q613 -->
<details>
<summary>展开答案 · Q613</summary>

Interview Answer

I would translate the campaign brief into a structured specification covering audience, channel, dimensions, brand constraints and approved claims. A generation pipeline would produce candidate copy and creative assets, validate format and brand rules, and present variants for review. I would track prompt, model, source assets and approval state, then export approved deliverables with reproducible metadata.

<details>
<summary>展开详解与追问</summary>

Explanation

Creative quality needs human review and a defined rubric; automatic checks can catch dimensions, missing disclosures and unsupported product claims. The brief does not authorize actual ad publication or spending.

Follow-up

- How do you compare variants?
  Use a consistent creative rubric for offline review and a separately designed campaign experiment for real performance; aesthetic preference is not conversion evidence.

</details>
</details>
<!-- /interview-answer -->

- Q614 — [ML6 (laine)](https://github.com/ml6team/laine-engineer-coding-challenge) - Coding challenge for evaluating AI Engineer candidates（来源：[06-home-assignments.md:193](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q614 -->
<details>
<summary>展开答案 · Q614</summary>

Interview Answer

The linked ML6 challenge was unavailable when checked, so I cannot responsibly describe its hidden task or provide a fabricated solution. I would obtain the original README or task text, identify the required inputs, outputs and constraints, and then implement the smallest verifiable solution with meaningful tests. The source question remains intact here so it can be completed against an actual specification.

<details>
<summary>展开详解与追问</summary>

Explanation

Source limitation: the repository URL returned unavailable content during verification. No company-specific task details are inferred from the title.

Follow-up

- What can you prepare meanwhile?
  Practice explaining a small implementation's contract, complexity and tests, but do not label that exercise as the missing ML6 solution.

</details>
</details>
<!-- /interview-answer -->

- Q615 — [Jaseci Labs](https://github.com/jaseci-labs/take-home-ai-engineer) - Take-home for AI Software Engineer candidates（来源：[06-home-assignments.md:194](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q615 -->
<details>
<summary>展开答案 · Q615</summary>

Interview Answer

I would build a claims-processing workflow that extracts document facts, checks required evidence and identifies conflicts across documents. It would choose tools conditionally, preserve supporting spans and update the claim state when new messages arrive. I would demonstrate complete, incomplete and review-needed cases, with malformed documents and contradictory identifiers in the test set.

<details>
<summary>展开详解与追问</summary>

Explanation

The linked brief involves claims and supporting documents; a VIN format check alone cannot establish identity. Persist revisions and reasons so a human can inspect why a claim needs review.

Follow-up

- What belongs outside the LLM?
  Schema checks, required-document rules, identifier validation and state transitions should be deterministic; uncertain extraction remains reviewable.

Technical Sources

- [Jaseci Labs original challenge](https://github.com/jaseci-labs/take-home-ai-engineer)

</details>
</details>
<!-- /interview-answer -->

- Q616 — [Jitera](https://github.com/Jitera-Interviews/genai-takehome) - Take-home task for GenAI roles（来源：[06-home-assignments.md:195](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q616 -->
<details>
<summary>展开答案 · Q616</summary>

Interview Answer

I would first reproduce the spreadsheet agent's current output, then replace raw-row tool responses with a few server-side aggregation tools. I would update reporting instructions to use computed facts, add focused promptfoo checks and fix at least one observed failure. Within the two-hour scope, I would prioritize correct grouping and factual reports over adding more agents.

<details>
<summary>展开详解与追问</summary>

Explanation

Test empty groups, missing values and aggregate totals independently from model wording. Preserve the existing app workflow and record what changed and what remains limited.

Follow-up

- Why is tool design central here?
  The model should interpret a question and explain computed results; asking it to calculate from dumped rows increases token use and numerical errors.

Technical Sources

- [Jitera original challenge](https://github.com/Jitera-Interviews/genai-takehome)

</details>
</details>
<!-- /interview-answer -->

- Q617 — [AuxoAI](https://github.com/AuxoAI-Hiring/ai-engineer-assignment) - AI Engineering Take-Home（来源：[06-home-assignments.md:196](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q617 -->
<details>
<summary>展开答案 · Q617</summary>

Interview Answer

I would complete the three parts separately: an O(1) LRU-backed embedding cache, diagnosis and repair of the leaky ML pipeline, and prompt-robustness hardening. I would document root causes and trade-offs in the reflection, measure cache behavior and validate the pipeline with train-only preprocessing and an appropriate split. I would understand every submitted change, including AI-assisted code.

<details>
<summary>展开详解与追问</summary>

Explanation

The repository makes the reflection and engineering explanation part of the assessment. Leakage fixes may lower a misleading score; report the corrected result rather than optimize for the original inflated metric.

Follow-up

- How would you prove the cache policy?
  Trace reads, updates and evictions on a tiny sequence, then test hit/miss accounting and capacity boundaries.

Technical Sources

- [AuxoAI original challenge](https://github.com/AuxoAI-Hiring/ai-engineer-assignment)

</details>
</details>
<!-- /interview-answer -->

- Q618 — [Coginis Research](https://github.com/CoginisResearch/ai-engineer-challenge) - AI Product Engineer Hiring Challenge（来源：[06-home-assignments.md:197](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q618 -->
<details>
<summary>展开答案 · Q618</summary>

Interview Answer

I would choose the contextual-retrieval option and build an in-memory embedding search over the supplied messages without an off-the-shelf vector database. I would define relevance with a small judged query set, return five scored messages and compare against a lexical baseline. The README and demo would explain score interpretation, ambiguous queries and limitations.

<details>
<summary>展开详解与追问</summary>

Explanation

The repository offers alternative tasks, so completing every option is unnecessary. For this choice, similarity scores are not calibrated relevance probabilities; evaluate the actual ranking.

Follow-up

- What if semantic retrieval misses an exact identifier?
  Add a lexical signal or exact-match rule, then evaluate the hybrid on queries containing names, IDs and paraphrases.

Technical Sources

- [Coginis original challenge](https://github.com/CoginisResearch/ai-engineer-challenge)

</details>
</details>
<!-- /interview-answer -->

- Q619 — [Future Research](https://github.com/future-research/candidate-assessment) - AI Engineer take-home assessment + exercise dataset（来源：[06-home-assignments.md:198](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q619 -->
<details>
<summary>展开答案 · Q619</summary>

Interview Answer

I would follow the linked assessment's knowledge-graph scope: build a movement/clinical graph from the supplied synthetic exercise data, then expose a workout generator and a member-context copilot in a coach dashboard. Recommendations would retain provenance and explicit constraints, with tests for incompatible requests and unsupported explanations. I would document the graph and stack choices and keep the supplied synthetic-data boundary.

<details>
<summary>展开详解与追问</summary>

Explanation

This linked brief differs from the shorter LangGraph routing variant elsewhere in the question bank. Treat injury-related constraints as reviewed requirements, not facts invented by the model.

Follow-up

- How do you check explainability?
  Trace each recommendation to graph facts and constraints, and reject explanations that cite relationships absent from the stored evidence.

Technical Sources

- [Future Research linked assessment](https://github.com/future-research/candidate-assessment)

</details>
</details>
<!-- /interview-answer -->

- Q620 — [Go Fig AI](https://github.com/go-fig-ai/take-home-inbox-triage) - Inbox-triage agent with human-in-the-loop（来源：[06-home-assignments.md:199](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q620 -->
<details>
<summary>展开答案 · Q620</summary>

Interview Answer

I would implement the inbox skill against the mock API, classify messages into the four required categories and draft the corresponding actions. Before any external-looking write, I would require approval of the exact action payload and record the outcome. I would test rejection, spam, duplicate processing and instruction attacks in email bodies, then document the two-hour scope and unfinished work.

<details>
<summary>展开详解与追问</summary>

Explanation

The mock integration allows the workflow to be demonstrated without real mail or CRM accounts. Approval must bind to an immutable payload; edits invalidate it.

Follow-up

- What is the most important negative test?
  A rejected or unapproved action must make no write call, even if the message or model asks to bypass review.

Technical Sources

- [Go Fig original challenge](https://github.com/go-fig-ai/take-home-inbox-triage)

</details>
</details>
<!-- /interview-answer -->

- Q621 — [Cerebras](https://github.com/danielkim-cerebras/ai-model-quality-challenge) - Model Quality and Performance challenge（来源：[06-home-assignments.md:200](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q621 -->
<details>
<summary>展开答案 · Q621</summary>

Interview Answer

I would deliver the performance UI and benchmark-pruning work as separately testable components. For the UI, I would validate uploaded sweep data and make customer decisions and engineer diagnostics clear. For pruning, I would implement the extension in the requested evalscope workflow and compare full and pruned results on held-out runs. I would inspect the task-specific restrictions before choosing baselines.

<details>
<summary>展开详解与追问</summary>

Explanation

The linked repository includes projection data and evaluation outputs, with large-file handling requirements. Verify real data files rather than accidentally benchmarking Git LFS pointer text.

Follow-up

- What would make pruning unacceptable?
  A small subset that preserves average score but changes deployment decisions or systematically hides important error categories.

Technical Sources

- [Cerebras original challenge](https://github.com/danielkim-cerebras/ai-model-quality-challenge)

</details>
</details>
<!-- /interview-answer -->

- Q622 — [AI:AT](https://github.com/AIAT-AIandBusinessgrowth/standort-agent-challenge-public) - Multi-criteria location evaluation agent（来源：[06-home-assignments.md:201](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q622 -->
<details>
<summary>展开答案 · Q622</summary>

Interview Answer

I would select the developer track and build a location-ranking prototype over the synthetic municipality data. Deterministic scoring would normalize criteria such as demographics, cost and access, while an agent interprets the business profile and explains the evidence. I would make weights and missing-data treatment visible and test ranking sensitivity, rather than present one ranking as an objective investment recommendation.

<details>
<summary>展开详解与追问</summary>

Explanation

The task has separate developer and business tracks. The supplied data is synthetic; recommendations demonstrate mechanics and should not be represented as real location due diligence.

Follow-up

- How do you handle conflicting criteria?
  Show the trade-off and sensitivity to weights, and identify candidates that remain competitive across reasonable preferences.

Technical Sources

- [AI:AT original challenge](https://github.com/AIAT-AIandBusinessgrowth/standort-agent-challenge-public)

</details>
</details>
<!-- /interview-answer -->

- Q623 — [Bloom (radialreview)](https://github.com/radialreview/bloom-coffee-ai) - Pre-built coffee ordering app candidates extend with an AI order taker（来源：[06-home-assignments.md:202](interview/questions/06-home-assignments.md)）

<!-- interview-answer Q623 -->
<details>
<summary>展开答案 · Q623</summary>

Interview Answer

I would extend the existing coffee-ordering app with a conversational layer that reads the actual menu, clarifies missing options and proposes a structured order. The backend would validate items, modifiers and prices before a confirmed submission. I would preserve the existing FastAPI, React and SQLite flow and test unavailable products, corrections and duplicate confirmation.

<details>
<summary>展开详解与追问</summary>

Explanation

The model should not invent menu entries or calculate trusted prices. Keep order state explicit and use a unique submission identifier so a retry does not create another order.

Follow-up

- What if the user changes a drink after confirmation?
  Treat it as a new change request with the application's supported modification rules; do not silently alter a completed order.

Technical Sources

- [Bloom original challenge](https://github.com/radialreview/bloom-coffee-ai)

</details>
</details>
<!-- /interview-answer -->



周六、周日：休息，不安排学习。

## 缓冲周：缓冲期：Review and Remediation

<a id="day-41"></a>

### 周一 11/30

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Coding Mock Remediation<br>LeetCode: [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/); [704. Binary Search](https://leetcode.com/problems/binary-search/); [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)<br>资料：[Sorting](Study%20topics/sorting.html); [Binary Search](Study%20topics/binary-search.html); [Linked Lists](Study%20topics/linked-lists.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [Notebook](notebook/01_train_validation_test_split.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Cache and API Service](Study%20topics/cache-and-api-service.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Risk Copilot: Correctness Remediation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-41) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 41 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：复习自己的错题记录。

本次范围：Buffer: remediation。重做R-Squared和Multicollinearity；若已熟悉，用最弱的Regression题替换，不增加新题。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-41)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

复习主计划第 1–8 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-42"></a>

### 周二 12/1

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Query Mock Remediation<br>LeetCode: [175. Combine Two Tables](https://leetcode.com/problems/combine-two-tables/); [596. Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/); [180. Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/)<br>资料：[JOINs](Study%20topics/joins.html); [HAVING](Study%20topics/having.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Drift; Retraining](Study%20topics/drift-retraining.html) · [Notebook](notebook/15_drift_retraining.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: AWS and CD: Completion or Recovery Drill<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-42) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 42 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3100 · Handling Simultaneous Feature and Target Distribution Shift](https://quantvault.org/problems.html?id=3100) · Machine Learning · Hard

先修：先读Drift；概念分析，不要求完成完整分布适配项目。

本次范围：Advanced: monitoring outline。分别讨论Feature Distribution与Target Distribution变化，以及标签何时才能观测。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-42)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

复习主计划第 9–16 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-43"></a>

### 周三 12/2

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Practical Implementation Mock<br>LeetCode: [706. Design HashMap](https://leetcode.com/problems/design-hashmap/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/); [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)<br>资料：[Queues](Study%20topics/queues.html); [Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html); [Rate Limiter](Study%20topics/rate-limiter.html); [Crawler](Study%20topics/crawler.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Drift; Retraining](Study%20topics/drift-retraining.html) · [Notebook](notebook/15_drift_retraining.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Snowflake: Data and SQL Remediation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-43) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 43 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：复习Day 37、Day 38、Day 42。

本次范围：Buffer: incident replay。重新解释真实标签延迟、预处理故障与数据变化的排查；依据错题补漏。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-43)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

复习主计划第 17–24 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-44"></a>

### 周四 12/3

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Comprehensive Review<br>LeetCode: [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)<br>资料：[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Drift; Retraining](Study%20topics/drift-retraining.html) · [Notebook](notebook/15_drift_retraining.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Research Workbench: Failure Recovery<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-44) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


<!-- quantvault-day 44 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3322 · Preventing Overfitting and Ensuring Model Robustness](https://quantvault.org/problems.html?id=3322) · Machine Learning · Medium

先修：先读Retraining与Drift。

本次范围：Retraining decision。说明重训练触发条件、候选验证、基线比较和回滚；不把漂移告警等同于部署新模型。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-44)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

复习主计划第 25–32 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-45"></a>

### 周五 12/4

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Final Mixed Review<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)<br>资料：[Sliding Window](Study%20topics/sliding-window.html); [Heaps](Study%20topics/heaps.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | [Drift; Retraining](Study%20topics/drift-retraining.html) · [Notebook](notebook/15_drift_retraining.ipynb) |
| 14:15–15:00 | General & AI System Design，45 分钟 | [Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Portfolio: Final Reproduction and Remaining Gaps<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-45) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

<!-- quantvault-day 45 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：仅复习，不再加入未学过的高级模型。

本次范围：Final mock。用自己项目讲目标、数据、基线、切分、指标、失败与下一步；选最弱两题补问。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-45)。

<!-- /quantvault-day -->

#### 当天 Interview Questions

复习主计划第 33–40 个工作日分配的问题，以其中标记的弱项和追问为主。


周六、周日：休息，不安排学习。



