# 金融转 Applied AI：工作日八小时学习计划

2026 年 10 月 5 日至 11 月 27 日为八周主计划；11 月 30 日至 12 月 4 日为工作日缓冲期。时区：America/New_York。

周一至周五每天学习 8 小时，午休不计入；周六、周日休息，不安排网课或其他学习。主计划 40 天、320 小时；使用完整缓冲期则共 45 天、360 小时。不加入找岗位、投递或简历修改任务。

## 项目计划更新

[三项目实践路线](AI_ENGINEER_PROJECT_ROADMAP.md) / [HTML版](AI_ENGINEER_PROJECT_ROADMAP.html)：Day 01–20 Risk Copilot（30小时）；Day 21–30 Financial Statement Analytics Assistant（15小时）；Day 31–38 Investment Research Workbench（12小时）；Day 39–40复现与收尾（3小时）。另有7.5小时缓冲。每天项目时段仍为15:00–16:30，任务包含改进、验证与成果。

本次只重排Project Practice及相关项目总览；ML和System Design的学习深度与方法下一轮讨论，当前相关课程表保留。Financial ML内容暂作为ML学习实验，不再承诺第四个独立作品。

## 每日学习方法

配套 [学习执行指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md) / [HTML版](AI_ENGINEER_DAILY_LEARNING_GUIDE.html) 展开每天的ML、System Design、Project练习与结果。

## Topic 总览

下面汇总的是日程中明确安排的主题，不把“上完课程”自动等同于已经掌握。基础理论、架构和专项术语以理解与面试表达为主；项目栏是开发或实验主题，并非承诺每天完成整个功能。

### Python 与编码

Hash Maps; Arrays and Strings; Two Pointers; Sorting; Binary Search; Sliding Window; Prefix Sums; Stacks; Queues; Heaps; Linked Lists; LRU Cache; Trees; Recursion; BFS; DFS; Complexity Analysis; Key-Value Store; TTL; API Clients; Rate Limiter; Crawler; Async; Concurrency; Parallelism; GIL; Race Conditions; Vectorization; Profiling; Debugging; Refactoring; Code Review; NumPy Logistic Regression.

### SQL 与数据库

SELECT; WHERE; ORDER BY; LIMIT; NULL; GROUP BY; HAVING; CASE; JOINs; Subqueries; CTEs; EXISTS; Window Functions; ROW_NUMBER; RANK; DENSE_RANK; LAG; LEAD; Rolling Aggregations; Date Queries; Transactions; Constraints; Parameterized Queries; PostgreSQL Schema Design; Primary and Foreign Keys; Indexes; EXPLAIN; Query Optimization; Run Analytics; Percentiles; Financial Analytics.

### ML 与金融验证

Supervised and Unsupervised Learning; Train / Validation / Test Split; Data Leakage; Bias-Variance; Overfitting; Regularization; Scaling; Linear Regression; Logistic Regression; Decision Trees; Random Forests; Gradient Boosting; scikit-learn Pipelines; Cross-Validation; Hyperparameter Tuning; Feature Engineering; Class Imbalance; MAE; RMSE; Precision; Recall; F1; PR-AUC; ROC-AUC; Calibration; Interpretability; Feature Importance; Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons; Regime Changes; Volatility Forecasting; Out-of-Sample Evaluation; Reproducibility; Statistical Uncertainty; Prediction Intervals; Drift; Retraining; Model Versioning; Rollback.

### LLM 基础与方案取舍

Tokenization; Next-Token Prediction; Context Windows; Temperature; Top-p; Transformer and Attention Fundamentals; LLM Limitations; Model Selection; Prompt Engineering; Few-Shot Examples; Prompt Versioning; Structured Outputs; Pydantic; JSON Recovery; Prompting vs. RAG vs. Fine-Tuning; LoRA; Quantization.

### RAG、Agents 与评估

Embeddings; Vector Similarity; Chunking; Metadata; Context Budgets; Keyword / Vector / Hybrid Search; MMR; Reranking; Query Reformulation; Citations; Golden Datasets; Hard Negatives; Held-Out Evaluation; Recall@k; Precision@k; MRR; nDCG; Redundancy; Groundedness; Hallucination; LLM-as-Judge; Human Calibration; Judge Bias; Offline / Regression Evals; Online Feedback; Agents vs. Workflows; Function Calling; Tool Schemas; Tool Selection Evaluation; Agent State; Memory; LangGraph; Termination Conditions; MCP Fundamentals.

### 服务工程、成本与安全

REST APIs; FastAPI; API Tests; Queues; Workers; Idempotency; Timeouts; Backoff; Rate Limiting; Backpressure; Docker; CI/CD; Cloud Fundamentals; IAM; Networking; Capacity Planning; Load Testing; Logs; Traces; p50 / p95; TTFT; Streaming; Token Usage; Caching; Semantic Caching; Freshness; Model Routing; Cost-Quality Trade-offs; Human-in-the-Loop; Approval Audit Trail; Prompt Injection; Tool Sandboxing; PII; Access Control; Tenant Isolation; Secrets; Fail-Open vs. Fail-Closed; Graceful Degradation.

### 项目与面试表达

Risk Copilot; Financial Statement Analytics Assistant; Investment Research Workbench; Snowflake; SQL; Text-to-SQL Evaluation; SEC Financial Data; Data Quality; Point-in-Time Data; Experiment Tracking; Queues and Workers; Idempotency; Retries; Failure Recovery; Latency Benchmarking; AWS ECS Fargate; ECR; CloudWatch; IAM; GitHub Actions; CI/CD; OIDC; Rollback; Clean-Environment Reproduction; README; Demo; Ownership; AI-Assisted Code Review; Design Trade-offs.

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
| 09:00–10:30 | Python 刷题，1.5 小时 | Hash Maps: Counting, Frequency, Duplicate Detection<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/); [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Train / Validation / Test Split; Data Leakage |
| 14:15–15:00 | System Design，45 分钟 | Financial Risk Copilot: Requirements and Data Flow |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Baseline and Issue Audit<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-01) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / LLM Fundamentals — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q001 — How do LLMs work?（来源：[questions.md:9](interview/questions/questions.md)；[01-theory.md:22](interview/questions/01-theory.md)）
- Q002 — How do transformers work?（来源：[questions.md:10](interview/questions/questions.md)；[01-theory.md:136](interview/questions/01-theory.md)）
- Q003 — What is tokenization and how does it affect LLM performance?（来源：[questions.md:11](interview/questions/questions.md)）
- Q004 — What is the difference between pre-training and fine-tuning?（来源：[questions.md:12](interview/questions/questions.md)）
- Q005 — Explain context windows and their limitations.（来源：[questions.md:13](interview/questions/questions.md)）
- Q006 — What are scaling laws and why do they matter?（来源：[questions.md:14](interview/questions/questions.md)）
- Q007 — What is temperature and top-p sampling? How do they affect outputs?（来源：[questions.md:15](interview/questions/questions.md)；[01-theory.md:23](interview/questions/01-theory.md)）
- Q008 — Explain few-shot learning and chain-of-thought prompting.（来源：[questions.md:16](interview/questions/questions.md)）
- Q009 — What is KV cache? How does it help in LLM inference?（来源：[questions.md:17](interview/questions/questions.md)；[01-theory.md:139](interview/questions/01-theory.md)）
- Q010 — Can you describe the difference between GenAI and traditional programming in the context of solving a real-world problem?（来源：[questions.md:18](interview/questions/questions.md)）
- Q011 — How do you ensure the outputs from large language models are consistent and accurate, especially when dealing with complex multi-step workflows?（来源：[questions.md:19](interview/questions/questions.md)）
- Q012 — What's an RAG model? Explain the complete process.（来源：[questions.md:20](interview/questions/questions.md)）
- Q013 — What are embeddings?（来源：[questions.md:21](interview/questions/questions.md)）
- Q014 — How does chunking happen?（来源：[questions.md:22](interview/questions/questions.md)）
- Q015 — What is the difference between discriminative and generative models?（来源：[questions.md:23](interview/questions/questions.md)）
- Q016 — What is graph RAG? How does it differ from standard RAG?（来源：[questions.md:24](interview/questions/questions.md)）
- Q017 — What is reflection in the context of LLM agents?（来源：[questions.md:25](interview/questions/questions.md)）
- Q018 — Explain KL divergence.（来源：[questions.md:26](interview/questions/questions.md)）
- Q019 — What is the difference between symbolic and connectionist AI?（来源：[questions.md:27](interview/questions/questions.md)）
- Q020 — Describe the types of text summarization techniques and when you'd use each.（来源：[questions.md:28](interview/questions/questions.md)）

<a id="day-02"></a>

### 周二 10/6

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: SELECT, WHERE, ORDER BY, LIMIT, NULL<br>LeetCode: [1757. Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/); [584. Find Customer Referee](https://leetcode.com/problems/find-customer-referee/); [595. Big Countries](https://leetcode.com/problems/big-countries/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Supervised vs. Unsupervised Learning; Baseline Models |
| 14:15–15:00 | System Design，45 分钟 | Tokenization; Next-Token Prediction; Context Windows |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Risk Numerical Correctness: Missing Data and Factors<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-02) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / LLM Fundamentals; Technical Questions / RAG Systems — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q021 — How do you do memory management and context management with LLMs?（来源：[questions.md:29](interview/questions/questions.md)；[01-theory.md:25](interview/questions/01-theory.md)）
- Q022 — What is the self-attention mechanism? How does it differ from multi-head attention?（来源：[questions.md:30](interview/questions/questions.md)）
- Q023 — What is grouped query attention and how does it differ from standard multi-head attention?（来源：[questions.md:31](interview/questions/questions.md)）
- Q024 — What are the differences between BPE, WordPiece, and character-level tokenization? What are the trade-offs?（来源：[questions.md:32](interview/questions/questions.md)；[01-theory.md:141](interview/questions/01-theory.md)）
- Q025 — Explain the difference between encoder-only, decoder-only, and encoder-decoder Transformer architectures. When would you use each?（来源：[questions.md:33](interview/questions/questions.md)；[01-theory.md:138](interview/questions/01-theory.md)）
- Q026 — Why are decoder-only models dominant even for non-generation tasks?（来源：[questions.md:34](interview/questions/questions.md)）
- Q027 — What is positional encoding and why is it needed in Transformers?（来源：[questions.md:35](interview/questions/questions.md)）
- Q028 — What are the key MMLU, BigBench, and HumanEval benchmarks? What does each measure and what are its limitations?（来源：[questions.md:36](interview/questions/questions.md)）
- Q029 — What is the difference between RLHF and DPO? When would you prefer one over the other?（来源：[questions.md:37](interview/questions/questions.md)）
- Q030 — What is Mixture of Experts (MoE)? How does it improve efficiency?（来源：[questions.md:38](interview/questions/questions.md)；[01-theory.md:140](interview/questions/01-theory.md)）
- Q031 — How do LLMs actually generate text? Explain the autoregressive decoding process.（来源：[questions.md:39](interview/questions/questions.md)）
- Q032 — What are decoding strategies like beam search, top-k, and top-p? When do you use each?（来源：[questions.md:40](interview/questions/questions.md)）
- Q033 — What is FlashAttention and how does it work?（来源：[questions.md:41](interview/questions/questions.md)）
- Q034 — Why is LLM inference memory-bounded?（来源：[questions.md:42](interview/questions/questions.md)）
- Q035 — How do stop sequences work in LLMs?（来源：[questions.md:43](interview/questions/questions.md)）
- Q036 — What is the context window and what happens when you exceed it? How do you handle long documents?（来源：[questions.md:44](interview/questions/questions.md)；[01-theory.md:24](interview/questions/01-theory.md)）
- Q037 — What risks arise from applying a general-purpose tokenizer to specialized domains like legal or medical text?（来源：[questions.md:45](interview/questions/questions.md)）
- Q492 — What is the self-attention mechanism?（来源：[01-theory.md:137](interview/questions/01-theory.md)）
- Q038 — Design a RAG system for a customer support chatbot. How do you evaluate it? (reported across multiple companies)（来源：[questions.md:49](interview/questions/questions.md)）

<a id="day-03"></a>

### 周三 10/7

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Arrays and Strings: Two Pointers<br>LeetCode: [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/); [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/); [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Bias-Variance Trade-off; Overfitting; Underfitting |
| 14:15–15:00 | System Design，45 分钟 | Temperature; Top-p; Model Selection |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Risk Numerical Correctness: Zero Exposure and Units<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-03) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / RAG Systems — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q039 — How would you design an LLM-powered enterprise search system?（来源：[questions.md:50](interview/questions/questions.md)）
- Q040 — Design a generative AI document-processing pipeline for unstructured data (emails, PDFs, images) to automate workflows like claims processing.（来源：[questions.md:51](interview/questions/questions.md)）
- Q041 — How would you use GPT-4 to generate accurate answers based on proprietary documents?（来源：[questions.md:52](interview/questions/questions.md)）
- Q042 — Design a generative QA assistant for your company's knowledge base.（来源：[questions.md:53](interview/questions/questions.md)）
- Q043 — You're making a system that processes huge PDF reports. How would you handle the problem of not keeping an entire report's context when splitting a document for a chatbot?（来源：[questions.md:54](interview/questions/questions.md)）
- Q044 — How would you efficiently generate and store embeddings for products and queries in a chatbot application?（来源：[questions.md:55](interview/questions/questions.md)）
- Q045 — How would you handle the problem of a model hallucinating when no information is found in the given context?（来源：[questions.md:56](interview/questions/questions.md)；[01-theory.md:34](interview/questions/01-theory.md)）
- Q046 — What retrieval-augmented generation (RAG) projects have you worked on?（来源：[questions.md:57](interview/questions/questions.md)）
- Q047 — Design a question-answering system over internal documentation.（来源：[questions.md:58](interview/questions/questions.md)）
- Q048 — How do you ensure the quality of data that an LLM interacts with?（来源：[questions.md:59](interview/questions/questions.md)）
- Q049 — Compare sparse vs. dense retrieval. When would you use each?（来源：[questions.md:60](interview/questions/questions.md)）
- Q050 — What are common RAG failure points and how do you debug them?（来源：[questions.md:61](interview/questions/questions.md)；[01-theory.md:35](interview/questions/01-theory.md)）
- Q051 — How do you protect sensitive/confidential data in a RAG pipeline?（来源：[questions.md:62](interview/questions/questions.md)）
- Q052 — What vector databases have you used? Which ones and why?（来源：[questions.md:63](interview/questions/questions.md)）
- Q053 — You have a financial report where page 1 says "all amounts in thousands." How do you handle document-wide context when chunking page by page?（来源：[questions.md:64](interview/questions/questions.md)）
- Q054 — What is hybrid search? When would you combine vector search with keyword search (BM25)?（来源：[questions.md:65](interview/questions/questions.md)）
- Q055 — What is re-ranking and why is it needed on top of vector retrieval? Explain cross-encoder vs. bi-encoder.（来源：[questions.md:66](interview/questions/questions.md)）
- Q056 — How do you scale a RAG system to 10M+ articles? Discuss sharding, caching, and retrieval optimization.（来源：[questions.md:67](interview/questions/questions.md)）
- Q057 — Your RAG system returns relevant documents but users still can't find the answer. How do you transform it from a search engine into an answer engine?（来源：[questions.md:68](interview/questions/questions.md)）
- Q058 — How do you evaluate a RAG pipeline? What metrics would you use? (NDCG, MRR, precision@k, recall)（来源：[questions.md:69](interview/questions/questions.md)）

<a id="day-04"></a>

### 周四 10/8

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: GROUP BY, HAVING, CASE, Aggregations<br>LeetCode: [182. Duplicate Emails](https://leetcode.com/problems/duplicate-emails/); [596. Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/); [620. Not Boring Movies](https://leetcode.com/problems/not-boring-movies/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Linear Regression; MAE; RMSE |
| 14:15–15:00 | System Design，45 分钟 | Prompt Engineering; Few-Shot Examples; Prompt Versioning |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Retrieval Dataset and Label Review<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-04) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / RAG Systems; Technical Questions / Agents and Tool Use — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q059 — How do you handle citations and source attribution in a RAG system?（来源：[questions.md:70](interview/questions/questions.md)；[01-theory.md:36](interview/questions/01-theory.md)）
- Q060 — How does Approximate Nearest Neighbor (ANN) search work? Explain HNSW indexing.（来源：[questions.md:71](interview/questions/questions.md)）
- Q061 — Where do embeddings fail? Discuss negation, temporal reasoning, and precision requirements.（来源：[questions.md:72](interview/questions/questions.md)）
- Q062 — What is semantic caching and how can it reduce cost and latency in a RAG system?（来源：[questions.md:73](interview/questions/questions.md)）
- Q063 — Design a RAG system that maintains context across multi-turn conversations.（来源：[questions.md:74](interview/questions/questions.md)）
- Q064 — What are the key tradeoffs when designing a RAG system (latency vs accuracy, chunk size vs context, cost vs quality)?（来源：[questions.md:75](interview/questions/questions.md)）
- Q065 — How do you optimize RAG latency in production?（来源：[questions.md:76](interview/questions/questions.md)）
- Q471 — What's RAG? Explain the complete process.（来源：[01-theory.md:31](interview/questions/01-theory.md)）
- Q472 — Text vs Vector search. When would you use each?（来源：[01-theory.md:32](interview/questions/01-theory.md)）
- Q473 — You're making a system for huge PDF reports. How would you process them?（来源：[01-theory.md:33](interview/questions/01-theory.md)）
- Q474 — What is semantic caching?（来源：[01-theory.md:37](interview/questions/01-theory.md)）
- Q475 — How do you scale a RAG system to 10M+ articles?（来源：[01-theory.md:38](interview/questions/01-theory.md)）
- Q476 — What are the key tradeoffs when designing a RAG system?（来源：[01-theory.md:39](interview/questions/01-theory.md)）
- Q066 — What is an AI agent and what is its role in a broader system?（来源：[questions.md:80](interview/questions/questions.md)）
- Q067 — What's the difference between an agent and a simple LLM chain? (reported across multiple companies)（来源：[questions.md:81](interview/questions/questions.md)）
- Q068 — What makes an AI system truly agentic and what does not qualify?（来源：[questions.md:82](interview/questions/questions.md)）
- Q069 — When is an agentic architecture the wrong solution?（来源：[questions.md:83](interview/questions/questions.md)）
- Q070 — How do you define and enforce agent autonomy boundaries?（来源：[questions.md:84](interview/questions/questions.md)）
- Q071 — What are the essential components of an agent beyond an LLM?（来源：[questions.md:85](interview/questions/questions.md)；[01-theory.md:47](interview/questions/01-theory.md)）

<a id="day-05"></a>

### 周五 10/9

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Sorting; Binary Search; Complexity Analysis<br>LeetCode: [704. Binary Search](https://leetcode.com/problems/binary-search/); [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/); [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Regularization; Scaling; scikit-learn Pipelines |
| 14:15–15:00 | System Design，45 分钟 | Transformer and Attention Fundamentals; LLM Limitations |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Metric Audit and Retrieval Baseline<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-05) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Agents and Tool Use — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

- Q072 — How do you prevent agents from over-reasoning or over-planning?（来源：[questions.md:86](interview/questions/questions.md)）
- Q073 — Walk through a production-ready agent architecture.（来源：[questions.md:87](interview/questions/questions.md)）
- Q074 — What logic belongs in the orchestrator vs the LLM?（来源：[questions.md:88](interview/questions/questions.md)）
- Q075 — How do you design a safe and debuggable agent loop?（来源：[questions.md:89](interview/questions/questions.md)）
- Q076 — How do you implement termination conditions in long-running agents?（来源：[questions.md:90](interview/questions/questions.md)；[01-theory.md:52](interview/questions/01-theory.md)）
- Q077 — How do agents decompose high-level goals into executable steps?（来源：[questions.md:91](interview/questions/questions.md)）
- Q078 — Chain-of-thought vs tree-of-thought vs graph planning - when would you use each?（来源：[questions.md:92](interview/questions/questions.md)）
- Q079 — How do you detect and stop infinite planning loops?（来源：[questions.md:93](interview/questions/questions.md)；[01-theory.md:51](interview/questions/01-theory.md)）
- Q080 — How do you handle partial observability or missing information?（来源：[questions.md:94](interview/questions/questions.md)）
- Q081 — How do agents decide a task is "done"?（来源：[questions.md:95](interview/questions/questions.md)）
- Q082 — What planning failures are hardest to detect in production?（来源：[questions.md:96](interview/questions/questions.md)）
- Q083 — How do agents decide which tool to use?（来源：[questions.md:97](interview/questions/questions.md)；[01-theory.md:48](interview/questions/01-theory.md)）
- Q084 — How do you design tool schemas that reduce hallucinated actions?（来源：[questions.md:98](interview/questions/questions.md)）
- Q085 — How do you sandbox tool execution safely?（来源：[questions.md:99](interview/questions/questions.md)；[01-theory.md:53](interview/questions/01-theory.md)）
- Q086 — How do you handle tool failures, retries, and idempotency?（来源：[questions.md:100](interview/questions/questions.md)；[01-theory.md:54](interview/questions/01-theory.md)）
- Q087 — What are the biggest security risks with tool-using agents?（来源：[questions.md:101](interview/questions/questions.md)；[01-theory.md:55](interview/questions/01-theory.md)）
- Q088 — How do you control cost explosions from tool calls?（来源：[questions.md:102](interview/questions/questions.md)）
- Q089 — Stateless vs stateful agents - tradeoffs and use cases?（来源：[questions.md:103](interview/questions/questions.md)）
- Q090 — How do you version and roll back agent behavior?（来源：[questions.md:104](interview/questions/questions.md)）
- Q091 — Describe how you would architect an AI agent system, including the agent loop, tool interfaces, memory design, orchestration technologies, and safety considerations.（来源：[questions.md:105](interview/questions/questions.md)）


周六、周日：休息，不安排学习。

## 第 2 周：RAG and Retrieval Evaluation

<a id="day-06"></a>

### 周一 10/12

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Hash Maps and Two Pointers: Review<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/); [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Logistic Regression; Classification Thresholds |
| 14:15–15:00 | System Design，45 分钟 | RAG Architecture; Embeddings; Vector Similarity |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Chunking Experiment<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-06) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Agents and Tool Use; Technical Questions / Fine-tuning and Training — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q092 — Design an agent analyzing customer support tickets, drafting responses, and escalating complex issues.（来源：[questions.md:106](interview/questions/questions.md)）
- Q093 — Create a system where agents collaborate on research reports with citations.（来源：[questions.md:107](interview/questions/questions.md)）
- Q094 — Build an agent reviewing code and suggesting improvements.（来源：[questions.md:108](interview/questions/questions.md)；[01-theory.md:57](interview/questions/01-theory.md)）
- Q095 — How do you explain agentic systems to non-technical stakeholders?（来源：[questions.md:109](interview/questions/questions.md)；[01-theory.md:50](interview/questions/01-theory.md)）
- Q096 — What types of memory do agentic systems need? Describe working, episodic, semantic, and procedural memory.（来源：[questions.md:110](interview/questions/questions.md)）
- Q097 — How do you design long-term memory without polluting it?（来源：[questions.md:111](interview/questions/questions.md)）
- Q098 — How do you implement human-in-the-loop (HIL) patterns and decide when to trigger human review?（来源：[questions.md:112](interview/questions/questions.md)）
- Q099 — How do you monitor and observe autonomous agent behavior in production?（来源：[questions.md:113](interview/questions/questions.md)；[01-theory.md:83](interview/questions/01-theory.md)）
- Q100 — How do you architect agents for regulated or compliance-heavy domains (e.g., financial, healthcare)?（来源：[questions.md:114](interview/questions/questions.md)）
- Q101 — When do you use orchestration vs choreography patterns for multi-agent systems?（来源：[questions.md:115](interview/questions/questions.md)）
- Q102 — How do you filter PII in agent pipelines before data reaches the LLM?（来源：[questions.md:116](interview/questions/questions.md)）
- Q103 — How do you evaluate agent performance? What metrics matter (tool selection quality, action advancement, context adherence)?（来源：[questions.md:117](interview/questions/questions.md)；[01-theory.md:72](interview/questions/01-theory.md)）
- Q477 — What makes an AI system agentic?（来源：[01-theory.md:46](interview/questions/01-theory.md)）
- Q478 — When agent is the wrong solution?（来源：[01-theory.md:49](interview/questions/01-theory.md)）
- Q479 — How do you create an agent for analyzing customer support tickets, drafting responses, and escalating complex issues.（来源：[01-theory.md:56](interview/questions/01-theory.md)）
- Q104 — When would you fine-tune vs use prompt engineering? (reported across multiple companies)（来源：[questions.md:121](interview/questions/questions.md)）
- Q105 — What is PEFT/LoRA and when would you use it?（来源：[questions.md:122](interview/questions/questions.md)；[01-theory.md:127](interview/questions/01-theory.md)）
- Q106 — What is QLoRA and how does it differ from LoRA? When would you choose one over the other?（来源：[questions.md:123](interview/questions/questions.md)）
- Q107 — What is RLHF and why is it important?（来源：[questions.md:124](interview/questions/questions.md)）

<a id="day-07"></a>

### 周二 10/13

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: INNER JOIN, LEFT JOIN, Duplicate Rows<br>LeetCode: [175. Combine Two Tables](https://leetcode.com/problems/combine-two-tables/); [577. Employee Bonus](https://leetcode.com/problems/employee-bonus/); [1581. Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Confusion Matrix; Precision; Recall; F1 |
| 14:15–15:00 | System Design，45 分钟 | Chunking; Metadata; Context Budgets |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Embedding Model Experiment<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-07) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Fine-tuning and Training; Technical Questions / Evaluation and Metrics — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q108 — Fine-tune or use prompt-engineered RAG?（来源：[questions.md:125](interview/questions/questions.md)）
- Q109 — How would you design a model that can solve math problems? Walk through data collection, supervised fine-tuning, post-training, and evaluation.（来源：[questions.md:126](interview/questions/questions.md)；[01-theory.md:131](interview/questions/01-theory.md)）
- Q110 — How would you design a scalable and efficient system for training a large language model, considering both computational and data constraints?（来源：[questions.md:127](interview/questions/questions.md)）
- Q111 — Explain the RLHF pipeline: supervised fine-tuning, reward model training, and PPO. How does DPO simplify this?（来源：[questions.md:128](interview/questions/questions.md)；[01-theory.md:128](interview/questions/01-theory.md)）
- Q112 — What is instruction tuning and how does it differ from pre-training?（来源：[questions.md:129](interview/questions/questions.md)；[01-theory.md:126](interview/questions/01-theory.md)）
- Q113 — What is speculative decoding and how does it speed up inference?（来源：[questions.md:130](interview/questions/questions.md)）
- Q114 — How do you convert implicit user behavior (edits, acceptance, rejection) into training signals for model improvement?（来源：[questions.md:131](interview/questions/questions.md)；[01-theory.md:130](interview/questions/01-theory.md)）
- Q115 — Explain quantization. What are the trade-offs between model size, speed, and accuracy?（来源：[questions.md:132](interview/questions/questions.md)；[01-theory.md:129](interview/questions/01-theory.md)）
- Q491 — When would you fine-tune vs use prompt engineering vs RAG?（来源：[01-theory.md:125](interview/questions/01-theory.md)）
- Q116 — What metrics do you consider when benchmarking and evaluating LLM performance?（来源：[questions.md:136](interview/questions/questions.md)）
- Q117 — How do you evaluate a chatbot? (candidates wish they prepared for this)（来源：[questions.md:137](interview/questions/questions.md)）
- Q118 — How do you detect and mitigate hallucinations in production? (reported across multiple companies)（来源：[questions.md:138](interview/questions/questions.md)）
- Q119 — How would you prevent factual errors in a summarization system?（来源：[questions.md:139](interview/questions/questions.md)；[01-theory.md:69](interview/questions/01-theory.md)）
- Q120 — How would you reduce hallucinations in a medical chatbot?（来源：[questions.md:140](interview/questions/questions.md)）
- Q121 — What happens when the LLM is confidently wrong? How do you debug a RAG chatbot giving confident but wrong answers? (candidates wish they prepared for this)（来源：[questions.md:141](interview/questions/questions.md)）
- Q122 — Explain SHAP, LIME, and model interpretability.（来源：[questions.md:142](interview/questions/questions.md)）
- Q123 — How do you detect and mitigate hallucinations?（来源：[questions.md:143](interview/questions/questions.md)；[01-theory.md:68](interview/questions/01-theory.md)）
- Q124 — Explain evaluation metrics: perplexity, ROUGE, BLEU. What are the pitfalls of n-gram-based metrics?（来源：[questions.md:144](interview/questions/questions.md)）
- Q125 — What are your testing strategies for non-deterministic outputs?（来源：[questions.md:145](interview/questions/questions.md)）

<a id="day-08"></a>

### 周三 10/14

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Sliding Window; Prefix Sums<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/); [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Class Imbalance; PR-AUC; ROC-AUC |
| 14:15–15:00 | System Design，45 分钟 | Keyword Search; Vector Search; Hybrid Search |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: MMR Experiment and Held-Out Check<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-08) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Evaluation and Metrics — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q126 — How do you measure accuracy in generative systems where traditional metrics don't apply?（来源：[questions.md:146](interview/questions/questions.md)）
- Q127 — What operational/business metrics matter for AI systems beyond accuracy? (win rate, deflection rate, p95 latency)（来源：[questions.md:147](interview/questions/questions.md)）
- Q128 — How would you evaluate and monitor a model in production, not just offline?（来源：[questions.md:148](interview/questions/questions.md)；[01-theory.md:80](interview/questions/01-theory.md)）
- Q129 — How have you addressed bias/fairness in your models? Can you provide an example of a trade-off you've faced?（来源：[questions.md:149](interview/questions/questions.md)）
- Q130 — What is time to first token and why does it matter for user experience?（来源：[questions.md:150](interview/questions/questions.md)；[01-theory.md:91](interview/questions/01-theory.md)）
- Q131 — How do you measure hallucination rate in production?（来源：[questions.md:151](interview/questions/questions.md)；[01-theory.md:82](interview/questions/01-theory.md)）
- Q132 — What is "vibes-based" evaluation vs. a formal eval framework? How do you build proper evals?（来源：[questions.md:152](interview/questions/questions.md)）
- Q133 — How do you build a golden dataset for evaluation? How do you use it for regression testing?（来源：[questions.md:153](interview/questions/questions.md)）
- Q134 — How does the system get better over time? Describe feedback and reinforcement loops.（来源：[questions.md:154](interview/questions/questions.md)）
- Q135 — How do you decide success metrics for an ML model?（来源：[questions.md:155](interview/questions/questions.md)）
- Q136 — How would you implement A/B testing for different prompt variations?（来源：[questions.md:156](interview/questions/questions.md)）
- Q137 — How would you test a new model before full deployment? Describe A/B testing, canary, interleaved, and shadow testing strategies.（来源：[questions.md:157](interview/questions/questions.md)）
- Q138 — Two models have identical accuracy but different confidence levels. Which do you choose? Explain model calibration.（来源：[questions.md:158](interview/questions/questions.md)）
- Q139 — A production chatbot's accuracy dropped from 95% to 80% in six weeks. How do you diagnose the root cause before retraining?（来源：[questions.md:159](interview/questions/questions.md)）
- Q480 — How do you ensure the output from LLMs is consistent and accurate?（来源：[01-theory.md:64](interview/questions/01-theory.md)）
- Q481 — How do you evaluate a chatbot?（来源：[01-theory.md:65](interview/questions/01-theory.md)）
- Q482 — What metrics do you consider when evaluating LLM performance?（来源：[01-theory.md:66](interview/questions/01-theory.md)）
- Q483 — How do you build a golden dataset for evaluation?（来源：[01-theory.md:67](interview/questions/01-theory.md)）
- Q484 — How do you debug a RAG chatbot giving confident but wrong answers?（来源：[01-theory.md:70](interview/questions/01-theory.md)）
- Q485 — How do you evaluate a RAG pipeline?（来源：[01-theory.md:71](interview/questions/01-theory.md)）

<a id="day-09"></a>

### 周四 10/15

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Subqueries, CTEs, EXISTS<br>LeetCode: [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/); [1661. Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/); [1148. Article Views I](https://leetcode.com/problems/article-views-i/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Decision Trees; Random Forests |
| 14:15–15:00 | System Design，45 分钟 | Reranking; Query Reformulation; Citations |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Evaluator Failures and Bounded Retries<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-09) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / ML Fundamentals; Technical Questions / Python and Software Engineering — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q140 — How do you approach data pre-processing and feature engineering?（来源：[questions.md:163](interview/questions/questions.md)）
- Q141 — Explain SQL versus NoSQL databases for AI workloads.（来源：[questions.md:164](interview/questions/questions.md)）
- Q142 — What steps would you take to diagnose performance bugs in a model?（来源：[questions.md:165](interview/questions/questions.md)）
- Q143 — Should you optimize for latency or throughput? (for a personal assistant with one request)（来源：[questions.md:166](interview/questions/questions.md)）
- Q144 — Should you use data parallelism for a single-request personal assistant? Why or why not?（来源：[questions.md:167](interview/questions/questions.md)）
- Q145 — Explain how Transformers work. Why are they foundational? (reported across multiple companies)（来源：[questions.md:168](interview/questions/questions.md)）
- Q146 — How would you handle real-time versus batch processing for data updates? When is one preferred over the other?（来源：[questions.md:169](interview/questions/questions.md)；[questions.md:302](interview/questions/questions.md)；[questions.md:460](interview/questions/questions.md)；[04-ai-system-design.md:65](interview/questions/04-ai-system-design.md)）
- Q147 — How do you ingest and process different types of data (structured, unstructured, event data)?（来源：[questions.md:170](interview/questions/questions.md)；[questions.md:303](interview/questions/questions.md)；[04-ai-system-design.md:66](interview/questions/04-ai-system-design.md)）
- Q148 — Explain the bias-variance tradeoff in simple terms.（来源：[questions.md:171](interview/questions/questions.md)）
- Q149 — Why are neural networks usually not the first choice for tabular data?（来源：[questions.md:172](interview/questions/questions.md)）
- Q150 — How do you handle imbalanced datasets in real projects?（来源：[questions.md:173](interview/questions/questions.md)）
- Q151 — Explain the difference between RNN and LSTM.（来源：[questions.md:174](interview/questions/questions.md)）
- Q152 — Debug a model that runs but doesn't learn. Identify broadcasting errors and dimension mismatches.（来源：[questions.md:175](interview/questions/questions.md)）
- Q153 — Statistics questions: probability, distributions, regression, Bayesian analysis, hypothesis testing.（来源：[questions.md:176](interview/questions/questions.md)）
- Q154 — Explain supervised vs. unsupervised learning. When would you use each?（来源：[questions.md:177](interview/questions/questions.md)）
- Q155 — What is regularization? Compare L1, L2, and dropout.（来源：[questions.md:178](interview/questions/questions.md)）
- Q156 — What is feature scaling and when is it necessary? Compare normalization vs standardization.（来源：[questions.md:179](interview/questions/questions.md)）
- Q157 — Implement cosine similarity in NumPy.（来源：[questions.md:180](interview/questions/questions.md)）
- Q158 — How do you handle race conditions in your code?（来源：[questions.md:184](interview/questions/questions.md)）

<a id="day-10"></a>

### 周五 10/16

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Stacks; Queues; String Parsing<br>LeetCode: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/); [155. Min Stack](https://leetcode.com/problems/min-stack/); [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Gradient Boosting; Model Comparison |
| 14:15–15:00 | System Design，45 分钟 | RAG Failure Analysis; Retrieval vs. Generation Errors |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Human Approval and State Transitions<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-10) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Python and Software Engineering; Technical Questions / Infrastructure and MLOps — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

- Q159 — What is the Global Interpreter Lock (GIL) in Python?（来源：[questions.md:185](interview/questions/questions.md)）
- Q160 — What is something unique about Python when it comes to concurrency?（来源：[questions.md:186](interview/questions/questions.md)）
- Q161 — What are some problems you can run into when using asynchronous programming in Python?（来源：[questions.md:187](interview/questions/questions.md)）
- Q162 — What is Docker?（来源：[questions.md:188](interview/questions/questions.md)）
- Q163 — Why do we use Selenium?（来源：[questions.md:189](interview/questions/questions.md)）
- Q164 — Have you heard about Redis?（来源：[questions.md:190](interview/questions/questions.md)）
- Q165 — Explain the JavaScript event loop.（来源：[questions.md:191](interview/questions/questions.md)）
- Q166 — How do you call models via API/SDK? How do you handle retries, timeouts, and logging?（来源：[questions.md:192](interview/questions/questions.md)）
- Q167 — Which AI development platforms or tools do you regularly use, and why?（来源：[questions.md:193](interview/questions/questions.md)）
- Q168 — Explain memory leaks and garbage collection in Python.（来源：[questions.md:194](interview/questions/questions.md)）
- Q169 — What is the difference between class methods and static methods?（来源：[questions.md:195](interview/questions/questions.md)）
- Q170 — Explain super() and Method Resolution Order in multiple inheritance.（来源：[questions.md:196](interview/questions/questions.md)）
- Q171 — How do you debug Python code in production? "In production, there will be no VS Code."（来源：[questions.md:197](interview/questions/questions.md)）
- Q172 — How do you use asyncio for concurrent I/O in Python? When would you use threading vs. multiprocessing instead?（来源：[questions.md:198](interview/questions/questions.md)）
- Q173 — How do you optimize SQL queries? Explain the order of execution in SQL.（来源：[questions.md:199](interview/questions/questions.md)）
- Q174 — What are Git branching strategies for deployment? How do you perform a rebase? How do you handle merge conflicts?（来源：[questions.md:200](interview/questions/questions.md)）
- Q175 — Have you worked with real-time communication technologies like WebRTC?（来源：[questions.md:201](interview/questions/questions.md)）
- Q176 — How would you design a large-scale AI model deployment system?（来源：[questions.md:205](interview/questions/questions.md)）
- Q177 — How would you design a distributed training system for deep learning?（来源：[questions.md:206](interview/questions/questions.md)）
- Q178 — How would you design a scalable data pipeline for ML applications?（来源：[questions.md:207](interview/questions/questions.md)）


周六、周日：休息，不安排学习。

## 第 3 周：End-to-End Evals and Agent Fundamentals

<a id="day-11"></a>

### 周一 10/19

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Heaps; Top-k; Priority Queues<br>LeetCode: [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/); [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Cross-Validation; Hyperparameter Tuning |
| 14:15–15:00 | System Design，45 分钟 | Offline Evals; Regression Evals; Online Feedback |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Scenario and Report Evaluation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-11) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Infrastructure and MLOps; Technical Questions / Cost and Latency Optimization — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q179 — How would you design a GenAI system to handle traffic spikes without overwhelming the model provider?（来源：[questions.md:208](interview/questions/questions.md)）
- Q180 — How would you monitor production AI systems?（来源：[questions.md:209](interview/questions/questions.md)）
- Q181 — What are major scaling challenges for LLM-powered applications?（来源：[questions.md:210](interview/questions/questions.md)）
- Q486 — What operational/business metrics matter for AI systems?（来源：[01-theory.md:79](interview/questions/01-theory.md)）
- Q487 — How would you test a new model before full deployment?（来源：[01-theory.md:81](interview/questions/01-theory.md)）
- Q182 — Your app gets 1M queries/day - how do you optimize cost? (reported across multiple companies)（来源：[questions.md:214](interview/questions/questions.md)）
- Q183 — How do you reduce token costs at scale? (candidates wish they prepared for this)（来源：[questions.md:215](interview/questions/questions.md)）
- Q184 — How would you think about cost and capacity planning for an LLM-powered application at scale?（来源：[questions.md:216](interview/questions/questions.md)）
- Q185 — How would you make GPT-based API calls cost-efficient under heavy load?（来源：[questions.md:217](interview/questions/questions.md)）
- Q186 — How would you reduce token costs?（来源：[questions.md:218](interview/questions/questions.md)）
- Q187 — Explain quantization and model distillation for inference optimization.（来源：[questions.md:219](interview/questions/questions.md)）
- Q188 — Describe the latency/cost/relevancy tradeoff triangle in GenAI systems. How do you manage all three?（来源：[questions.md:220](interview/questions/questions.md)）
- Q189 — How do you reduce latency in GenAI applications?（来源：[questions.md:221](interview/questions/questions.md)；[01-theory.md:90](interview/questions/01-theory.md)）
- Q190 — Cost vs. quality trade-offs: when is a small open-source model "good enough" vs. GPT-4-class?（来源：[questions.md:222](interview/questions/questions.md)）
- Q191 — By trimming prompts and caching embeddings, how would you reduce API spend? Walk through a before-and-after cost breakdown.（来源：[questions.md:223](interview/questions/questions.md)）
- Q192 — Explain multi-layer caching strategies: retrieval cache, prompt cache, and response cache.（来源：[questions.md:224](interview/questions/questions.md)）
- Q193 — What is model tiering? When do you route to a small distilled model vs. a large LLM?（来源：[questions.md:225](interview/questions/questions.md)；[01-theory.md:95](interview/questions/01-theory.md)）
- Q194 — What is prompt compression and how does it reduce cost?（来源：[questions.md:226](interview/questions/questions.md)）
- Q195 — Latency vs. throughput optimization for LLM serving - what are the trade-offs?（来源：[questions.md:227](interview/questions/questions.md)）

<a id="day-12"></a>

### 周二 10/20

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: ROW_NUMBER, RANK, DENSE_RANK<br>LeetCode: [178. Rank Scores](https://leetcode.com/problems/rank-scores/); [176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/); [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Feature Engineering; Missing Values; Pipeline Leakage |
| 14:15–15:00 | System Design，45 分钟 | LLM-as-Judge; Human Calibration; Judge Bias |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Analysis API and Error Contracts<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-12) |
| 16:30–17:30 | Interview Questions，1 小时 | Technical Questions / Cost and Latency Optimization; Technical Questions / Safety and Guardrails; Coding Problems / LeetCode / Algorithm Style — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q196 — How would you benchmark each LLM call in a multi-step pipeline to identify latency bottlenecks?（来源：[questions.md:228](interview/questions/questions.md)；[01-theory.md:92](interview/questions/01-theory.md)）
- Q197 — Estimate the budget for a RAG pipeline at enterprise scale (e.g., 300,000 legal contracts).（来源：[questions.md:229](interview/questions/questions.md)；[01-theory.md:97](interview/questions/01-theory.md)）
- Q198 — What's the real bottleneck in LLM serving throughput? How does PagedAttention address it?（来源：[questions.md:230](interview/questions/questions.md)）
- Q488 — How do you reduce token costs?（来源：[01-theory.md:93](interview/questions/01-theory.md)）
- Q489 — Cost vs. quality trade-offs: when is a small open-source model "good enough"?（来源：[01-theory.md:94](interview/questions/01-theory.md)）
- Q490 — Your app gets 1M queries/day - how do you optimize cost?（来源：[01-theory.md:96](interview/questions/01-theory.md)；[04-ai-system-design.md:40](interview/questions/04-ai-system-design.md)）
- Q199 — When and how would you implement LLM guardrails?（来源：[questions.md:234](interview/questions/questions.md)；[01-theory.md:103](interview/questions/01-theory.md)）
- Q200 — How would you design a language model that minimizes harmful outputs while still being useful and expressive?（来源：[questions.md:235](interview/questions/questions.md)）
- Q201 — How would you build a system that detects whether content violates policy or contains offensive material?（来源：[questions.md:236](interview/questions/questions.md)；[01-theory.md:106](interview/questions/01-theory.md)）
- Q202 — How do you protect against prompt injection and jailbreaking?（来源：[questions.md:237](interview/questions/questions.md)；[01-theory.md:105](interview/questions/01-theory.md)）
- Q203 — What steps would you take to handle exceptions in a GenAI application?（来源：[questions.md:238](interview/questions/questions.md)）
- Q204 — Explain Constitutional AI and alignment considerations.（来源：[questions.md:239](interview/questions/questions.md)）
- Q205 — How do you handle data privacy and PII in prompts and logs?（来源：[questions.md:240](interview/questions/questions.md)；[01-theory.md:104](interview/questions/01-theory.md)）
- Q206 — How do you address bias in training data and generated content?（来源：[questions.md:241](interview/questions/questions.md)）
- Q207 — How do you red-team an LLM system?（来源：[questions.md:242](interview/questions/questions.md)）
- Q208 — Your application generates code that gets executed. How do you prevent malicious code generation and execution?（来源：[questions.md:243](interview/questions/questions.md)；[01-theory.md:107](interview/questions/01-theory.md)）
- Q288 — Word Search on Grid using Trie + DFS (LeetCode Medium).（来源：[questions.md:343](interview/questions/questions.md)）
- Q289 — LRU Cache with O(1) time complexity using HashMap + Doubly Linked List.（来源：[questions.md:344](interview/questions/questions.md)）
- Q290 — Prime numbers between 0 and 100.（来源：[questions.md:345](interview/questions/questions.md)；[02-coding.md:43](interview/questions/02-coding.md)）
- Q291 — Check whether two strings are anagrams of each other.（来源：[questions.md:346](interview/questions/questions.md)）

<a id="day-13"></a>

### 周三 10/21

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Linked Lists; LRU Cache<br>LeetCode: [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/); [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Time-Series Splits; Walk-Forward Validation |
| 14:15–15:00 | System Design，45 分钟 | Groundedness; Hallucination; Citation Correctness |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Tracing and Latency Baseline<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-13) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / LeetCode / Algorithm Style; Coding Problems / OpenAI-Specific Coding; Coding Problems / Anthropic-Specific Coding; Coding Problems / ML / AI Coding — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q292 — Serialize Binary Tree (space-optimized, discussion-based with compression techniques and backward compatibility).（来源：[questions.md:347](interview/questions/questions.md)）
- Q293 — LeetCode 2408: Design SQL.（来源：[questions.md:348](interview/questions/questions.md)；[02-coding.md:23](interview/questions/02-coding.md)）
- Q294 — LeetCode 981: Time Based Key-Value Store.（来源：[questions.md:349](interview/questions/questions.md)）
- Q295 — Unix cd command with symbolic link resolution.（来源：[questions.md:350](interview/questions/questions.md)；[02-coding.md:24](interview/questions/02-coding.md)）
- Q296 — Reverse a linked list with constraints (AI-assisted coding round - candidate must prompt LLM effectively).（来源：[questions.md:351](interview/questions/questions.md)；[02-coding.md:45](interview/questions/02-coding.md)）
- Q297 — Find the Excel column name from its column number (e.g., column 702 = "AAA").（来源：[questions.md:352](interview/questions/questions.md)；[02-coding.md:46](interview/questions/02-coding.md)）
- Q298 — Construct a tree from a list where index = node value and value = parent node (LC Medium).（来源：[questions.md:353](interview/questions/questions.md)）
- Q299 — CodeSignal GCA: 4 questions in 70 min - two medium-hard, one graph, one greedy with bit ops.（来源：[questions.md:354](interview/questions/questions.md)）
- Q300 — Union Find problem + AI question (use DistilBERT to categorize CSV text with sentiments, must pass 5 test cases checking embeddings length, output structure).（来源：[questions.md:355](interview/questions/questions.md)）
- Q301 — Write code for a banking application using HashMap/TreeMap. Design a task executor - store and pause tasks.（来源：[questions.md:356](interview/questions/questions.md)）
- Q302 — A gRPC service is timing out. Add an async boundary, handle failure modes (retries, dead letter queues, idempotency), scale with multi-threading or message queues.（来源：[questions.md:357](interview/questions/questions.md)）
- Q303 — Discuss serialization approaches, compression techniques, streaming formats, backward compatibility, and corruption recovery - no code written, pure discussion. (Microsoft senior)（来源：[questions.md:358](interview/questions/questions.md)）
- Q304 — KV Store Serialize/Deserialize.（来源：[questions.md:362](interview/questions/questions.md)）
- Q305 — In-Memory Database: Implement SQL-Like Operations.（来源：[questions.md:363](interview/questions/questions.md)；[02-coding.md:25](interview/questions/02-coding.md)）
- Q306 — Versioned key-value store implementation (Time Travel Hash variant).（来源：[questions.md:364](interview/questions/questions.md)）
- Q307 — Credits management system - track credit state across issued and used credits with different expiration rules and usage requirements, with increasing complexity.（来源：[questions.md:365](interview/questions/questions.md)；[02-coding.md:26](interview/questions/02-coding.md)）
- Q308 — Refactoring round: 100-120 lines of intentionally convoluted, deeply nested code. Refactor for long-term maintainability while keeping existing tests green and extending to new ones.（来源：[questions.md:366](interview/questions/questions.md)）
- Q309 — 4-level progressive coding assessment: Level 1 (SET/GET/DELETE), Level 2 (SCAN/SCAN_BY_PREFIX), Level 3 (timestamped operations + TTL), Level 4 (file compression/decompression with storage management).（来源：[questions.md:370](interview/questions/questions.md)）
- Q310 — 1-NN (simplest KNN case) and feedforward neural network implementation.（来源：[questions.md:374](interview/questions/questions.md)）

<a id="day-14"></a>

### 周四 10/22

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: LAG, LEAD, Rolling Aggregations<br>LeetCode: [180. Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Stationarity; Regime Changes; Temporal Leakage |
| 14:15–15:00 | System Design，45 分钟 | Agents vs. Workflows; When Not to Use Agents |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Measured Performance Improvement<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-14) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / ML / AI Coding; Coding Problems / Practical / Data Processing; Coding Problems / Supplemental Implementation — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q311 — Transformer bug-fixing exercise with position embedding and KV cache issues.（来源：[questions.md:375](interview/questions/questions.md)）
- Q312 — PyTorch code completion with complexity analysis.（来源：[questions.md:376](interview/questions/questions.md)）
- Q313 — Implement Multi-Head Attention from memory.（来源：[questions.md:377](interview/questions/questions.md)）
- Q314 — Implement a full Transformer layer from memory.（来源：[questions.md:378](interview/questions/questions.md)）
- Q315 — Implement LoRA adapter from scratch.（来源：[questions.md:379](interview/questions/questions.md)）
- Q316 — Implement efficient LLM API batch processing.（来源：[questions.md:380](interview/questions/questions.md)）
- Q317 — Debug code handling embeddings.（来源：[questions.md:381](interview/questions/questions.md)；[02-coding.md:31](interview/questions/02-coding.md)）
- Q318 — Write scripts preparing text for fine-tuning.（来源：[questions.md:382](interview/questions/questions.md)）
- Q319 — Build a gRPC service for financial report generation (async conversion, thread management, error handling, batch processing).（来源：[questions.md:383](interview/questions/questions.md)）
- Q320 — Implement neural networks, LSTMs, and RNNs from scratch using NumPy or PyTorch.（来源：[questions.md:384](interview/questions/questions.md)）
- Q321 — Implement cached attention and grouped query attention variants.（来源：[questions.md:385](interview/questions/questions.md)）
- Q322 — Implement beam search, top-k, and top-p decoding strategies from scratch.（来源：[questions.md:386](interview/questions/questions.md)）
- Q323 — Implement autoregressive generation with top-p sampling.（来源：[questions.md:387](interview/questions/questions.md)）
- Q324 — Implement logistic regression with SGD, L2 regularization, and early stopping in NumPy.（来源：[questions.md:388](interview/questions/questions.md)；[02-coding.md:32](interview/questions/02-coding.md)）
- Q325 — Implement stratified K-fold splitting.（来源：[questions.md:389](interview/questions/questions.md)）
- Q326 — Speed coding: given a complicated JSON file, extract a specific part following some pattern, then feed that to an AI model and get the summary. 30-minute time limit, browser/ChatGPT allowed.（来源：[questions.md:393](interview/questions/questions.md)）
- Q327 — Design a concurrent web crawler handling robots.txt, rate limiting, and circular references while maintaining data integrity and freshness.（来源：[questions.md:394](interview/questions/questions.md)）
- Q493 — Implement a website crawler (my personal experience)（来源：[02-coding.md:20](interview/questions/02-coding.md)）
- Q494 — Refactor 100-120 lines of convoluted, deeply nested code.（来源：[02-coding.md:21](interview/questions/02-coding.md)）

<a id="day-15"></a>

### 周五 10/23

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | BFS; DFS; Graph Traversal<br>LeetCode: [200. Number of Islands](https://leetcode.com/problems/number-of-islands/); [133. Clone Graph](https://leetcode.com/problems/clone-graph/); [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Forecast Horizons; Target Availability |
| 14:15–15:00 | System Design，45 分钟 | Agent State; Memory; Context Management; LangGraph |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: CI and Evaluation Gates<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-15) |
| 16:30–17:30 | Interview Questions，1 小时 | Coding Problems / Supplemental Implementation; System Design Questions / AI System Design — 12 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

- Q495 — Build a key-value database starting with basic operations (SET/GET/DELETE).（来源：[02-coding.md:22](interview/questions/02-coding.md)）
- Q496 — RLE encoding (my personal experience).（来源：[02-coding.md:42](interview/questions/02-coding.md)）
- Q497 — LRU Cache with O(1) time complexity.（来源：[02-coding.md:44](interview/questions/02-coding.md)）
- Q209 — Design ChatGPT.（来源：[questions.md:250](interview/questions/questions.md)）
- Q210 — Design our Claude chat service.（来源：[questions.md:251](interview/questions/questions.md)）
- Q211 — Design a small language learning model that could run on a phone while making sure it's polite.（来源：[questions.md:252](interview/questions/questions.md)）
- Q212 — Here's a junior developer's design for an inference batching system. Can you review it and explain what you'd change or improve?（来源：[questions.md:253](interview/questions/questions.md)）
- Q213 — Design the OpenAI Playground - specifically the feature that lets developers simulate full conversations and threads.（来源：[questions.md:254](interview/questions/questions.md)）
- Q214 — Design a real-time chatbot API (low-latency handling, session management, concurrency, safety filters).（来源：[questions.md:255](interview/questions/questions.md)）
- Q215 — Design a Document Q&A Assistant.（来源：[questions.md:256](interview/questions/questions.md)）
- Q216 — Design a Hallucination-Free Banking Chatbot.（来源：[questions.md:257](interview/questions/questions.md)）
- Q217 — Design a Hospital Voice Assistant (handle noise, privacy, latency, domain vocabulary).（来源：[questions.md:258](interview/questions/questions.md)；[04-ai-system-design.md:50](interview/questions/04-ai-system-design.md)）


周六、周日：休息，不安排学习。

## 第 4 周：Reliability, Safety and Governance

<a id="day-16"></a>

### 周一 10/26

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Trees; Recursion<br>LeetCode: [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/); [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/); [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Volatility Forecasting; Historical Volatility Baseline |
| 14:15–15:00 | System Design，45 分钟 | Human-in-the-Loop; Approval State; Auditability |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Docker and Local Release<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-16) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q218 — Design a Feedback Loop for Writing Tools.（来源：[questions.md:259](interview/questions/questions.md)）
- Q219 — Design a Legal Contract Generation system with compliance requirements.（来源：[questions.md:260](interview/questions/questions.md)；[04-ai-system-design.md:51](interview/questions/04-ai-system-design.md)）
- Q220 — Design an AI Search system scaling to 10M+ articles.（来源：[questions.md:261](interview/questions/questions.md)）
- Q221 — Design a Resume Classifier for Team Routing.（来源：[questions.md:262](interview/questions/questions.md)）
- Q222 — Design an AI-powered Candidate Sourcing System with 750M profiles, semantic search, and <500ms latency.（来源：[questions.md:263](interview/questions/questions.md)）
- Q223 — Scale an AI chat feature to 1M daily users - discuss trade-offs. (reported across multiple companies)（来源：[questions.md:264](interview/questions/questions.md)）
- Q224 — Design for 1M users (scale beyond prototype). (candidates wish they prepared for this)（来源：[questions.md:265](interview/questions/questions.md)）
- Q225 — Design a system to process 10k user uploads per month (bank payslips, IDs, references). How would you extract data, detect inconsistencies, reject invalid files, and handle LLM provider downtime?（来源：[questions.md:266](interview/questions/questions.md)）
- Q226 — Design a system that lets doctors automatically send billing info to insurers based on patient notes.（来源：[questions.md:267](interview/questions/questions.md)；[04-ai-system-design.md:54](interview/questions/04-ai-system-design.md)）

<a id="day-17"></a>

### 周二 10/27

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Window Functions; Date Queries<br>LeetCode: [1204. Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/); [1164. Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/); [1070. Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Financial Metrics; Error Segmentation |
| 14:15–15:00 | System Design，45 分钟 | Retries; Backoff; Idempotency; Timeouts |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: AWS Deployment Configuration<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-17) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q227 — Design a conversational recommender system that suggests products based on user preferences, combining chat, retrieval, and database layers.（来源：[questions.md:268](interview/questions/questions.md)）
- Q228 — Design a fast autocomplete system using LLMs.（来源：[questions.md:269](interview/questions/questions.md)）
- Q229 — Design an AI-powered legal assistant.（来源：[questions.md:270](interview/questions/questions.md)）
- Q230 — Build a generative resume builder with memory.（来源：[questions.md:271](interview/questions/questions.md)）
- Q231 — Create an internal Slack bot answering HR questions.（来源：[questions.md:272](interview/questions/questions.md)）
- Q232 — Design a GitHub Copilot-style JavaScript development tool.（来源：[questions.md:273](interview/questions/questions.md)）
- Q233 — Design an AI co-pilot like GitHub Copilot (real-time streaming completions).（来源：[questions.md:274](interview/questions/questions.md)）
- Q234 — Design a Midjourney/Stable Diffusion image generation service (queueing, GPU scheduling).（来源：[questions.md:275](interview/questions/questions.md)）
- Q235 — Design a Perplexity.ai / real-time LLM-powered search engine.（来源：[questions.md:276](interview/questions/questions.md)；[04-ai-system-design.md:60](interview/questions/04-ai-system-design.md)）
- Q236 — Design a Ghibli Image Generator (text prompt ingestion, model selection, GPU inference, cost throttling, safety filters).（来源：[questions.md:277](interview/questions/questions.md)）

<a id="day-18"></a>

### 周三 10/28

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Key-Value Store; TTL<br>LeetCode: [706. Design HashMap](https://leetcode.com/problems/design-hashmap/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Model Interpretability; Feature Importance |
| 14:15–15:00 | System Design，45 分钟 | Prompt Injection; Untrusted Retrieval; Tool Sandboxing |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: AWS Deployment and Smoke Tests<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-18) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：TTL 为自定义扩展练习；LeetCode 981 仅对应 Time-Based Key-Value Store，不等同于 TTL。

#### 当天 Interview Questions

- Q237 — Design a Dynamic Questionnaire Engine for an Insurance Platform (JSON-driven, frontend decision tree without backend calls).（来源：[questions.md:278](interview/questions/questions.md)）
- Q238 — Design a user profile system addressing storage, multi-device tracking, and preference flexibility. Optimize for 100 million users with batch migration.（来源：[questions.md:279](interview/questions/questions.md)）
- Q239 — Design a distributed search system capable of handling a billion documents and a million QPS, while also managing LLM inference for over 10,000 requests per second.（来源：[questions.md:280](interview/questions/questions.md)）
- Q240 — Design hybrid search combining traditional text retrieval with semantic similarity - top-k similar documents from a corpus of over 10M documents with a response time under 50ms.（来源：[questions.md:281](interview/questions/questions.md)）
- Q241 — Design a workflow to remove all dead links for hundreds of client websites assuming you have API access to overwrite their HTML.（来源：[questions.md:282](interview/questions/questions.md)）
- Q242 — How would you design the UX for an AI assistant that is often slow?（来源：[questions.md:283](interview/questions/questions.md)）
- Q243 — How would you surface model limitations or errors to users without breaking trust?（来源：[questions.md:284](interview/questions/questions.md)）
- Q244 — Design a scalable image-generation pipeline for millions of users.（来源：[questions.md:285](interview/questions/questions.md)；[04-ai-system-design.md:67](interview/questions/04-ai-system-design.md)）
- Q245 — How would you scale a generative content platform for millions of users?（来源：[questions.md:286](interview/questions/questions.md)）
- Q246 — Design an In-Memory Database with SET, GET, BEGIN, ROLLBACK, COMMIT, and nested transaction support.（来源：[questions.md:287](interview/questions/questions.md)）

<a id="day-19"></a>

### 周四 10/29

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Transactions; Constraints; Parameterized Queries<br>LeetCode: [196. Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/); [602. Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/); [1341. Movie Rating](https://leetcode.com/problems/movie-rating/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Calibration; Threshold Selection; Decision Costs |
| 14:15–15:00 | System Design，45 分钟 | PII; Access Control; Tenant Isolation; Secrets |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Controlled CD and Rollback<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-19) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 对应本日查询练习；Transactions、Constraints 和 Parameterized Queries 在 PostgreSQL 中练习。

#### 当天 Interview Questions

- Q247 — Design an AI recommendation system.（来源：[questions.md:288](interview/questions/questions.md)）
- Q248 — Design a fraud detection system.（来源：[questions.md:289](interview/questions/questions.md)；[04-ai-system-design.md:55](interview/questions/04-ai-system-design.md)；[04-ai-system-design.md:105](interview/questions/04-ai-system-design.md)）
- Q249 — Design a chatbot architecture end-to-end (LLM + backend + data flow).（来源：[questions.md:290](interview/questions/questions.md)）
- Q250 — Design a distributed job queue for 100k+ GPU training jobs with preemption and checkpointing.（来源：[questions.md:291](interview/questions/questions.md)；[04-ai-system-design.md:68](interview/questions/04-ai-system-design.md)）
- Q251 — Design a temperature prediction system handling inconsistent global datasets (hybrid ML-LLM).（来源：[questions.md:292](interview/questions/questions.md)）
- Q252 — Design an end-to-end RAG service: data ingestion, indexing, retrieval, generation, evals, tracing, guardrails.（来源：[questions.md:293](interview/questions/questions.md)）
- Q253 — Design a rate-limiter and code the core part.（来源：[questions.md:294](interview/questions/questions.md)）
- Q254 — Scaling AI systems to millions of users: latency and cost trade-offs, batching, caching, streaming, failure modes.（来源：[questions.md:295](interview/questions/questions.md)）
- Q255 — Design ChatGPT's cross-conversation memory feature.（来源：[questions.md:296](interview/questions/questions.md)；[04-ai-system-design.md:56](interview/questions/04-ai-system-design.md)）
- Q256 — Design a multi-step agentic workflow (meeting scheduling, code review, email campaigns).（来源：[questions.md:297](interview/questions/questions.md)；[04-ai-system-design.md:57](interview/questions/04-ai-system-design.md)）

<a id="day-20"></a>

### 周五 10/30

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Debugging; Code Reading; Refactoring<br>LeetCode: [394. Decode String](https://leetcode.com/problems/decode-string/); [71. Simplify Path](https://leetcode.com/problems/simplify-path/); [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Reproducibility; Seeds; Statistical Uncertainty |
| 14:15–15:00 | System Design，45 分钟 | Failure Modes; Fail-Open vs. Fail-Closed; Graceful Degradation |
| 15:00–16:30 | 项目，1.5 小时 | Risk Copilot: Reproduction and Project Deep Dive<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-20) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / AI System Design; System Design Questions / Traditional System Design — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

刷题对应说明：LeetCode 对应解析与数据处理；Debugging、Code Reading 和 Refactoring 使用项目代码。

#### 当天 Interview Questions

- Q257 — Design a content/policy violation detection system.（来源：[questions.md:298](interview/questions/questions.md)；[04-ai-system-design.md:58](interview/questions/04-ai-system-design.md)）
- Q258 — Design a unified query engine across dispersed data sources like email, calendar, documents, and chat.（来源：[questions.md:299](interview/questions/questions.md)；[04-ai-system-design.md:59](interview/questions/04-ai-system-design.md)）
- Q259 — How would you implement an AI application from start to finish, from kickoff meeting through deployment? (IBM)（来源：[questions.md:300](interview/questions/questions.md)）
- Q260 — How would you design a scalable and reliable automation workflow? What considerations for error handling, monitoring, and debugging?（来源：[questions.md:301](interview/questions/questions.md)）
- Q261 — Design GitHub Actions.（来源：[questions.md:307](interview/questions/questions.md)；[04-ai-system-design.md:118](interview/questions/04-ai-system-design.md)）
- Q262 — Design Slack.（来源：[questions.md:308](interview/questions/questions.md)）
- Q263 — Design Online Chess.（来源：[questions.md:309](interview/questions/questions.md)；[04-ai-system-design.md:119](interview/questions/04-ai-system-design.md)）
- Q264 — Design a Payment System.（来源：[questions.md:310](interview/questions/questions.md)）
- Q265 — Design a Webhook Callback System.（来源：[questions.md:311](interview/questions/questions.md)）


周六、周日：休息，不安排学习。

## 第 5 周：APIs, Databases and Deployment

<a id="day-21"></a>

### 周一 11/2

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: API Clients; Input Validation<br>LeetCode: [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/); [468. Validate IP Address](https://leetcode.com/problems/validate-ip-address/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Model Persistence; Training-Serving Consistency |
| 14:15–15:00 | System Design，45 分钟 | REST APIs; Validation; Error Contracts |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Snowflake Setup and Sample SQL<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-21) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Traditional System Design — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 对应 Validation 与 Parsing；API Clients 使用自定义工程练习。

#### 当天 Interview Questions

- Q266 — Design TinyURL (Bitly).（来源：[questions.md:312](interview/questions/questions.md)）
- Q267 — Design Instagram / TikTok feed.（来源：[questions.md:313](interview/questions/questions.md)）
- Q268 — Design Twitter / X (timeline, posting, followers, trending topics).（来源：[questions.md:314](interview/questions/questions.md)）
- Q269 — Design YouTube / Netflix video streaming platform.（来源：[questions.md:315](interview/questions/questions.md)；[04-ai-system-design.md:121](interview/questions/04-ai-system-design.md)）
- Q270 — Design Uber (ride-sharing backend: matching, ETA, pricing surges).（来源：[questions.md:316](interview/questions/questions.md)；[04-ai-system-design.md:122](interview/questions/04-ai-system-design.md)）
- Q271 — Design WhatsApp / Messenger (1:1 + group chat at global scale).（来源：[questions.md:317](interview/questions/questions.md)；[04-ai-system-design.md:123](interview/questions/04-ai-system-design.md)）
- Q272 — Design a distributed key-value store (like DynamoDB / Cassandra).（来源：[questions.md:318](interview/questions/questions.md)；[04-ai-system-design.md:116](interview/questions/04-ai-system-design.md)）
- Q273 — Design Google Docs collaborative editing (real-time, eventually consistent).（来源：[questions.md:319](interview/questions/questions.md)；[04-ai-system-design.md:124](interview/questions/04-ai-system-design.md)）
- Q274 — Design Yelp / Google Maps nearby search.（来源：[questions.md:320](interview/questions/questions.md)）
- Q275 — Design a rate limiter (global, per-user, distributed).（来源：[questions.md:321](interview/questions/questions.md)；[04-ai-system-design.md:117](interview/questions/04-ai-system-design.md)）

<a id="day-22"></a>

### 周二 11/3

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: PostgreSQL Schema Design; Primary and Foreign Keys<br>LeetCode: [1934. Confirmation Rate](https://leetcode.com/problems/confirmation-rate/); [1251. Average Selling Price](https://leetcode.com/problems/average-selling-price/); [1633. Percentage of Users Attended a Contest](https://leetcode.com/problems/percentage-of-users-attended-a-contest/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Training Pipelines; Feature Lineage |
| 14:15–15:00 | System Design，45 分钟 | Queues; Workers; Synchronous vs. Asynchronous Processing |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: SEC Ingestion and Raw Snapshots<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-22) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Traditional System Design; System Design Questions / System Troubleshooting — 10 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 对应查询练习；Schema Design 与主外键使用 PostgreSQL。

#### 当天 Interview Questions

- Q276 — Design Discord (voice + text chat, millions concurrent in voice channels).（来源：[questions.md:322](interview/questions/questions.md)）
- Q277 — Design Stripe payment processing system (high consistency, PCI compliance).（来源：[questions.md:323](interview/questions/questions.md)）
- Q278 — Design a distributed job scheduler (like AWS Batch at planetary scale).（来源：[questions.md:324](interview/questions/questions.md)）
- Q279 — Design a notification system that can send 1B notifications/day with <1% loss.（来源：[questions.md:325](interview/questions/questions.md)）
- Q280 — Design a strongly-consistent distributed database (Spanner / CockroachDB-like).（来源：[questions.md:326](interview/questions/questions.md)）
- Q281 — Design a high-frequency trading exchange matching engine.（来源：[questions.md:327](interview/questions/questions.md)）
- Q282 — Our p99 latency went from 50ms to 2s overnight - how would you debug and fix?（来源：[questions.md:328](interview/questions/questions.md)）
- Q283 — Design a global WebSocket service (10M+ concurrent connections).（来源：[questions.md:329](interview/questions/questions.md)）
- Q284 — Design a global feature flag / config service (multi-region, zero-downtime rollouts).（来源：[questions.md:330](interview/questions/questions.md)）
- Q285 — A system's 95th percentile latency spiked from 100ms to 2000ms. Identify bottlenecks rapidly.（来源：[questions.md:334](interview/questions/questions.md)）

<a id="day-23"></a>

### 周三 11/4

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Async; Concurrency; Parallelism; GIL; Race Conditions<br>LeetCode: [1114. Print in Order](https://leetcode.com/problems/print-in-order/); [1115. Print FooBar Alternately](https://leetcode.com/problems/print-foobar-alternately/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Batch vs. Online Inference |
| 14:15–15:00 | System Design，45 分钟 | Rate Limiting; Backpressure; Request Idempotency |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Financial Data Model and Quality Checks<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-23) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / System Troubleshooting; System Design Questions / Supplemental Designs — 9 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 1114 / 1115 对应同步问题；Async、GIL、Race Conditions 另用自定义 Python 练习。

#### 当天 Interview Questions

- Q286 — How would you handle a 10x traffic spike during a product launch?（来源：[questions.md:335](interview/questions/questions.md)）
- Q287 — What happens if your primary data center goes offline for six hours?（来源：[questions.md:336](interview/questions/questions.md)）
- Q513 — Scale an AI chat feature to 1M daily users - discuss trade-offs（来源：[04-ai-system-design.md:39](interview/questions/04-ai-system-design.md)）
- Q514 — Design an AI chatbot (ChatGPT, Claude chat service).（来源：[04-ai-system-design.md:47](interview/questions/04-ai-system-design.md)）
- Q515 — Design a Document Q&A Assistant / RAG system.（来源：[04-ai-system-design.md:48](interview/questions/04-ai-system-design.md)）
- Q516 — Design an AI co-pilot like GitHub Copilot（来源：[04-ai-system-design.md:49](interview/questions/04-ai-system-design.md)）
- Q517 — Design an AI-powered Candidate Sourcing System.（来源：[04-ai-system-design.md:52](interview/questions/04-ai-system-design.md)）
- Q518 — Design a system to process 10K user uploads/month (bank payslips, IDs, references).（来源：[04-ai-system-design.md:53](interview/questions/04-ai-system-design.md)）
- Q519 — Design a large-scale AI model deployment system - model serving, GPU scaling, model versioning, result caching. (OpenAI)（来源：[04-ai-system-design.md:69](interview/questions/04-ai-system-design.md)）

<a id="day-24"></a>

### 周四 11/5

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Indexes; EXPLAIN; Query Optimization<br>LeetCode: [1193. Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/); [1211. Queries Quality and Percentage](https://leetcode.com/problems/queries-quality-and-percentage/); [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Data Drift; Prediction Drift; Monitoring |
| 14:15–15:00 | System Design，45 分钟 | Docker; Cloud Fundamentals; IAM; Networking |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Reference SQL and Financial Analytics<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-24) |
| 16:30–17:30 | Interview Questions，1 小时 | System Design Questions / Supplemental Designs; Project Deep Dive / Opening Questions; Project Deep Dive / Follow-up Probes — 15 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 对应 SQL 查询；Indexes、EXPLAIN 和 Query Optimization 在 PostgreSQL 中练习。

#### 当天 Interview Questions

- Q520 — Design a recommendation system（来源：[04-ai-system-design.md:104](interview/questions/04-ai-system-design.md)）
- Q521 — Design a spam classifier（来源：[04-ai-system-design.md:106](interview/questions/04-ai-system-design.md)）
- Q522 — Design a search ranking system（来源：[04-ai-system-design.md:107](interview/questions/04-ai-system-design.md)）
- Q523 — Design an ad click prediction system（来源：[04-ai-system-design.md:108](interview/questions/04-ai-system-design.md)）
- Q524 — Design Instagram / TikTok / X (timeline, posting, followers).（来源：[04-ai-system-design.md:120](interview/questions/04-ai-system-design.md)）
- Q407 — Walk me through your most technically challenging project. (OpenAI - 45-min presentation to a peer engineer)（来源：[questions.md:512](interview/questions/questions.md)）
- Q408 — Walk me through a project you owned end-to-end. What were the key technical decisions? (Anthropic - 25-min presentation + 15-20 min discussion)（来源：[questions.md:513](interview/questions/questions.md)）
- Q409 — Tell me about a project you're most proud of, and what role you played. (OpenAI)（来源：[questions.md:514](interview/questions/questions.md)）
- Q410 — Why did you choose that particular storage/model/architecture over alternatives?（来源：[questions.md:521](interview/questions/questions.md)）
- Q411 — Is there an actual eval framework here, or is it vibes-based? (OpenAI)（来源：[questions.md:522](interview/questions/questions.md)）
- Q412 — What alternative approaches did you consider, and why did you reject them?（来源：[questions.md:523](interview/questions/questions.md)）
- Q413 — How would you handle different requirements or scale constraints?（来源：[questions.md:524](interview/questions/questions.md)；[03-project-deep-dive.md:48](interview/questions/03-project-deep-dive.md)）
- Q414 — What would you do differently if you started this project over?（来源：[questions.md:525](interview/questions/questions.md)；[03-project-deep-dive.md:69](interview/questions/03-project-deep-dive.md)）
- Q415 — What was the most challenging technical decision and how did you make it?（来源：[questions.md:526](interview/questions/questions.md)；[03-project-deep-dive.md:54](interview/questions/03-project-deep-dive.md)）
- Q416 — Did the solution actually work? How do you know? What metrics did you track?（来源：[questions.md:527](interview/questions/questions.md)；[03-project-deep-dive.md:61](interview/questions/03-project-deep-dive.md)）

<a id="day-25"></a>

### 周五 11/6

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Rate Limiter; Cache<br>LeetCode: [146. LRU Cache](https://leetcode.com/problems/lru-cache/); [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/); [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/)（Premium，可选） |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Retraining; Model Versioning; Rollback |
| 14:15–15:00 | System Design，45 分钟 | Capacity Planning; Load Testing; Availability |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Question Dataset and SQL Ground Truth<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-25) |
| 16:30–17:30 | Interview Questions，1 小时 | Project Deep Dive / Follow-up Probes; Project Deep Dive / Supplemental Probes — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

刷题对应说明：LeetCode 359 为 Premium，可跳过；Rate Limiting 也可用自定义练习。

#### 当天 Interview Questions

- Q417 — What were the trade-offs you made, and are you still comfortable with them?（来源：[questions.md:528](interview/questions/questions.md)；[03-project-deep-dive.md:47](interview/questions/03-project-deep-dive.md)）
- Q418 — How did you communicate technical decisions to stakeholders?（来源：[questions.md:529](interview/questions/questions.md)；[03-project-deep-dive.md:42](interview/questions/03-project-deep-dive.md)）
- Q419 — What would you explore next if you had more time?（来源：[questions.md:530](interview/questions/questions.md)；[03-project-deep-dive.md:70](interview/questions/03-project-deep-dive.md)）
- Q420 — How do you monitor the model post-deployment for drift or degradation?（来源：[questions.md:531](interview/questions/questions.md)；[03-project-deep-dive.md:63](interview/questions/03-project-deep-dive.md)）
- Q421 — What trade-offs did you make between retrieval speed vs. context length, fine-tuning vs. prompt engineering, GPU cost vs. latency?（来源：[questions.md:532](interview/questions/questions.md)）
- Q498 — Walk me through an AI project you built end-to-end.（来源：[03-project-deep-dive.md:22](interview/questions/03-project-deep-dive.md)）
- Q499 — Walk through a recent technical project.（来源：[03-project-deep-dive.md:23](interview/questions/03-project-deep-dive.md)）
- Q500 — Walk me through your most technically challenging project.（来源：[03-project-deep-dive.md:24](interview/questions/03-project-deep-dive.md)）
- Q501 — Tell me about a recent/favorite project and some of the difficulties you had.（来源：[03-project-deep-dive.md:25](interview/questions/03-project-deep-dive.md)）
- Q502 — Tell me about the greatest accomplishment of your career.（来源：[03-project-deep-dive.md:29](interview/questions/03-project-deep-dive.md)）
- Q503 — What business problem were you solving? Why was it a priority?（来源：[03-project-deep-dive.md:39](interview/questions/03-project-deep-dive.md)）
- Q504 — Who was the customer? Who benefited from this work?（来源：[03-project-deep-dive.md:40](interview/questions/03-project-deep-dive.md)）
- Q505 — What was your actual role in building this?（来源：[03-project-deep-dive.md:41](interview/questions/03-project-deep-dive.md)）
- Q506 — Why did you choose that particular approach over alternatives?（来源：[03-project-deep-dive.md:46](interview/questions/03-project-deep-dive.md)）
- Q507 — Why did you pick that particular tech stack for data processing?（来源：[03-project-deep-dive.md:49](interview/questions/03-project-deep-dive.md)）
- Q508 — What went wrong? What was harder than expected?（来源：[03-project-deep-dive.md:55](interview/questions/03-project-deep-dive.md)）
- Q509 — How did you debug production issues?（来源：[03-project-deep-dive.md:56](interview/questions/03-project-deep-dive.md)）
- Q510 — Is there an actual eval framework here, or is it vibes-based?（来源：[03-project-deep-dive.md:60](interview/questions/03-project-deep-dive.md)）
- Q511 — What was the outcome? How did stakeholders react?（来源：[03-project-deep-dive.md:62](interview/questions/03-project-deep-dive.md)）


周六、周日：休息，不安排学习。

## 第 6 周：Performance and Financial Analytics

<a id="day-26"></a>

### 周一 11/9

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Practical Coding: Crawler; Bounded Concurrency<br>LeetCode: [1236. Web Crawler](https://leetcode.com/problems/web-crawler/)（Premium，可选）; [127. Word Ladder](https://leetcode.com/problems/word-ladder/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Experiment Design; Paired Comparisons |
| 14:15–15:00 | System Design，45 分钟 | Observability; Logs; Traces; Quality Feedback |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Text-to-SQL and Semantic Context<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-26) |
| 16:30–17:30 | Interview Questions，1 小时 | Project Deep Dive / Supplemental Probes; Behavioral Questions / Project Deep Dives; Behavioral Questions / Conflict and Collaboration — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 1236 为 Premium；无法访问时练自定义 Crawler，127 / 200 只对应相关图遍历。

#### 当天 Interview Questions

- Q512 — How did you handle data quality and preprocessing challenges?（来源：[03-project-deep-dive.md:64](interview/questions/03-project-deep-dive.md)）
- Q328 — Walk me through an AI project you built end-to-end. (very common in 2026)（来源：[questions.md:401](interview/questions/questions.md)）
- Q329 — Tell me about a project you're most proud of, and what role you played?（来源：[questions.md:402](interview/questions/questions.md)；[03-project-deep-dive.md:30](interview/questions/03-project-deep-dive.md)）
- Q330 — What is your most challenging work in GenAI?（来源：[questions.md:403](interview/questions/questions.md)）
- Q331 — Describe a time you reduced hallucinations/cost in production. (very common in 2026)（来源：[questions.md:404](interview/questions/questions.md)）
- Q332 — Describe a time you had to optimize an existing process or workflow for efficiency or scalability.（来源：[questions.md:405](interview/questions/questions.md)；[03-project-deep-dive.md:26](interview/questions/03-project-deep-dive.md)）
- Q333 — Describe a challenging prompt engineering problem that you solved.（来源：[questions.md:406](interview/questions/questions.md)；[03-project-deep-dive.md:27](interview/questions/03-project-deep-dive.md)）
- Q334 — Is there an actual eval framework, or is it vibes-based?（来源：[questions.md:407](interview/questions/questions.md)）
- Q335 — Present a "proud" project to a panel: design decisions, trade-offs, what broke, and what you'd change.（来源：[questions.md:408](interview/questions/questions.md)）
- Q336 — Tell me about your past projects. (Apple, Discord, Anduril)（来源：[questions.md:409](interview/questions/questions.md)）
- Q337 — Tell me about a recent/favorite project and some of the difficulties you had. (Meta)（来源：[questions.md:410](interview/questions/questions.md)；[questions.md:515](interview/questions/questions.md)）
- Q338 — Tell me about a technical challenge that you have overcome.（来源：[questions.md:411](interview/questions/questions.md)；[03-project-deep-dive.md:28](interview/questions/03-project-deep-dive.md)）
- Q339 — Tell me about the greatest accomplishment of your career. (Meta)（来源：[questions.md:412](interview/questions/questions.md)）
- Q340 — What level of prompts have you written? What kind of projects did you work on?（来源：[questions.md:413](interview/questions/questions.md)）
- Q341 — Give a specific example of conflict with another person, how resolution took form, and the rationale behind the choices you made.（来源：[questions.md:417](interview/questions/questions.md)）
- Q342 — How do you collaborate with non-technical stakeholders?（来源：[questions.md:418](interview/questions/questions.md)）
- Q343 — How do you manage workload in a distributed team?（来源：[questions.md:419](interview/questions/questions.md)）
- Q344 — Conflict handling.（来源：[questions.md:420](interview/questions/questions.md)）
- Q345 — Describe a time you disagreed with a team member about how to approach a problem. How did you handle it?（来源：[questions.md:421](interview/questions/questions.md)）
- Q346 — Tell me about a time you struggled to work with one of your colleagues. (Meta)（来源：[questions.md:422](interview/questions/questions.md)）

<a id="day-27"></a>

### 周二 11/10

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Run Analytics; Percentiles; Cost Aggregation<br>LeetCode: [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/); [1174. Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/); [1907. Count Salary Categories](https://leetcode.com/problems/count-salary-categories/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Baseline Forecast Evaluation |
| 14:15–15:00 | System Design，45 分钟 | p50 / p95 Latency; TTFT; Streaming |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Query Controls and Clarification<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-27) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Conflict and Collaboration; Behavioral Questions / Leadership and Ownership — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q347 — Tell me about a time you handled a difficult stakeholder.（来源：[questions.md:423](interview/questions/questions.md)；[05-behavioral.md:32](interview/questions/05-behavioral.md)）
- Q348 — Tell me about a time you had to explain a complex technical concept to someone without a technical background.（来源：[questions.md:424](interview/questions/questions.md)）
- Q349 — Tell me about a time you convinced someone to change their mind.（来源：[questions.md:425](interview/questions/questions.md)；[05-behavioral.md:34](interview/questions/05-behavioral.md)）
- Q350 — What types of team members do you find difficult to work with? (Visa)（来源：[questions.md:426](interview/questions/questions.md)）
- Q351 — Describe communication to resolve ambiguity. (Anthropic)（来源：[questions.md:427](interview/questions/questions.md)）
- Q352 — Describe a time you had trouble communicating with stakeholders and how you overcame it. (OpenAI)（来源：[questions.md:428](interview/questions/questions.md)）
- Q353 — Have you mentored teammates remotely?（来源：[questions.md:432](interview/questions/questions.md)）
- Q354 — Describe a time you drove technical decisions at scale and guided teams through complex challenges.（来源：[questions.md:433](interview/questions/questions.md)）
- Q355 — Describe a time you mentored engineers who went on to senior roles.（来源：[questions.md:434](interview/questions/questions.md)）
- Q356 — Tell me about a time you showed leadership. (OpenAI EM)（来源：[questions.md:435](interview/questions/questions.md)）
- Q357 — Tell me about a time you led an initiative or took ownership of a challenging task.（来源：[questions.md:436](interview/questions/questions.md)；[05-behavioral.md:39](interview/questions/05-behavioral.md)）
- Q358 — Tell me about a time you took the initiative to solve a problem.（来源：[questions.md:437](interview/questions/questions.md)）
- Q359 — Tell me about a time when you made short-term sacrifices for long-term gains.（来源：[questions.md:438](interview/questions/questions.md)）
- Q360 — How do you prioritize tasks?（来源：[questions.md:439](interview/questions/questions.md)；[05-behavioral.md:41](interview/questions/05-behavioral.md)）
- Q361 — How do you lead under risk and uncertainty? (Anthropic)（来源：[questions.md:440](interview/questions/questions.md)）
- Q362 — As a manager, how do you handle trade-offs? (OpenAI EM)（来源：[questions.md:441](interview/questions/questions.md)）
- Q363 — How do you manage your team's career growth? (OpenAI EM)（来源：[questions.md:442](interview/questions/questions.md)）
- Q364 — Tell me about a time when you worked on a project with a tight deadline.（来源：[questions.md:443](interview/questions/questions.md)；[05-behavioral.md:45](interview/questions/05-behavioral.md)）
- Q365 — Explain management style, execution strategy, and culture choices. (Anthropic)（来源：[questions.md:444](interview/questions/questions.md)）

<a id="day-28"></a>

### 周三 11/11

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Vectorization; Profiling; Performance<br>LeetCode: [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/); [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Linear Model for Volatility Prediction |
| 14:15–15:00 | System Design，45 分钟 | Caching; Semantic Caching; Freshness |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Text-to-SQL Evaluation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-28) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Technical Decision-Making; Behavioral Questions / Failure and Learning — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：LeetCode 对应数组与算法复习；Vectorization 和 Profiling 使用自定义实验。

#### 当天 Interview Questions

- Q366 — Which model provider do you prefer for creative writing tasks?（来源：[questions.md:448](interview/questions/questions.md)）
- Q367 — How do you compare AI coding assistants like Cursor, Windsurf, or Claude Code?（来源：[questions.md:449](interview/questions/questions.md)）
- Q368 — What recent AI paper or development caught your attention?（来源：[questions.md:450](interview/questions/questions.md)；[05-behavioral.md:25](interview/questions/05-behavioral.md)）
- Q369 — What side projects have you built with AI?（来源：[questions.md:451](interview/questions/questions.md)）
- Q370 — Why a particular storage solution over alternatives?（来源：[questions.md:452](interview/questions/questions.md)）
- Q371 — How did you decide which model to use for inference?（来源：[questions.md:453](interview/questions/questions.md)）
- Q372 — What frameworks are you familiar with? What have you built before?（来源：[questions.md:454](interview/questions/questions.md)）
- Q373 — Which models have you worked with? Which cloud providers are you familiar with?（来源：[questions.md:455](interview/questions/questions.md)）
- Q374 — Tell me about a time when you solved a complex problem and how you went about it.（来源：[questions.md:456](interview/questions/questions.md)；[05-behavioral.md:49](interview/questions/05-behavioral.md)）
- Q375 — Tell me about a time when a technical misjudgment led to a project delay. What did you learn? (Anthropic)（来源：[questions.md:457](interview/questions/questions.md)）
- Q376 — What would you do if, midway through a project, you realized it was actually unfeasible? (Anthropic)（来源：[questions.md:458](interview/questions/questions.md)）
- Q377 — Describe a time you had to quickly learn a new technology or methodology to complete a project.（来源：[questions.md:459](interview/questions/questions.md)）
- Q378 — Most challenging project.（来源：[questions.md:464](interview/questions/questions.md)）
- Q379 — What would you do differently?（来源：[questions.md:465](interview/questions/questions.md)）
- Q380 — Tell me about a time when you received negative feedback and how you handled it.（来源：[questions.md:466](interview/questions/questions.md)）
- Q381 — What's a mistake you made, and what did you learn from it?（来源：[questions.md:467](interview/questions/questions.md)；[05-behavioral.md:56](interview/questions/05-behavioral.md)）
- Q382 — Describe a project that didn't go as planned. What did you learn? (Anthropic)（来源：[questions.md:468](interview/questions/questions.md)）
- Q383 — Describe a project where your AI solution failed and how you addressed it. (Google DeepMind)（来源：[questions.md:469](interview/questions/questions.md)）
- Q384 — Why do you think we should NOT hire you? (Google, Visa)（来源：[questions.md:470](interview/questions/questions.md)）

<a id="day-29"></a>

### 周四 11/12

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Time-Series Joins; Missing Dates<br>LeetCode: [1148. Article Views I](https://leetcode.com/problems/article-views-i/); [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Tree Model for Volatility Prediction |
| 14:15–15:00 | System Design，45 分钟 | Model Routing; Token Budgets; Cost-Quality Trade-offs |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: Snowflake Query Performance<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-29) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Failure and Learning; Behavioral Questions / AI-Specific Behavioral; Behavioral Questions / Culture and Motivation; Behavioral Questions / AI-Conducted Interview Follow-ups — 20 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q385 — Tell me about a time when you had to think outside the box to complete a task.（来源：[questions.md:471](interview/questions/questions.md)；[05-behavioral.md:59](interview/questions/05-behavioral.md)）
- Q386 — How do you stay updated with fast-changing AI tech? (very common in 2026)（来源：[questions.md:475](interview/questions/questions.md)）
- Q387 — How do you collaborate with non-technical stakeholders on AI features? (very common in 2026)（来源：[questions.md:476](interview/questions/questions.md)）
- Q388 — Can you give an example of a time when you addressed ethical concerns in an ML project?（来源：[questions.md:477](interview/questions/questions.md)）
- Q389 — Tell me about a time you made a safety-first decision in a project. (Anthropic)（来源：[questions.md:478](interview/questions/questions.md)）
- Q390 — Tell me about a time you identified a major risk in an AI system — what did you do? (Mistral)（来源：[questions.md:479](interview/questions/questions.md)）
- Q391 — Describe a time you reduced cost or latency in a production AI system.（来源：[questions.md:480](interview/questions/questions.md)）
- Q392 — How do you manage ambiguity in ML projects where requirements and data evolve over time?（来源：[questions.md:481](interview/questions/questions.md)）
- Q393 — How do you use AI coding agents in your work?（来源：[questions.md:482](interview/questions/questions.md)）
- Q394 — Did you apply GenAI techniques to solve a problem not usually solved with GenAI?（来源：[questions.md:483](interview/questions/questions.md)）
- Q395 — Do you fact-check AI outputs or just trust them? How do you validate AI-generated content?（来源：[questions.md:484](interview/questions/questions.md)）
- Q396 — Why OpenAI? / Why Microsoft? / Why this company?（来源：[questions.md:488](interview/questions/questions.md)）
- Q397 — Why change now?（来源：[questions.md:489](interview/questions/questions.md)；[05-behavioral.md:72](interview/questions/05-behavioral.md)）
- Q398 — Tell me about yourself.（来源：[questions.md:490](interview/questions/questions.md)；[05-behavioral.md:63](interview/questions/05-behavioral.md)）
- Q399 — Walk me through your resume. (OpenAI)（来源：[questions.md:491](interview/questions/questions.md)）
- Q400 — Describe career decisions and culture fit. (Anthropic)（来源：[questions.md:492](interview/questions/questions.md)）
- Q401 — How do you handle AI-safety conflicts with project goals? (Anthropic)（来源：[questions.md:493](interview/questions/questions.md)）
- Q402 — Why do you want to pursue research? (for research roles)（来源：[questions.md:494](interview/questions/questions.md)；[05-behavioral.md:75](interview/questions/05-behavioral.md)）
- Q403 — How would you handle edge cases?（来源：[questions.md:500](interview/questions/questions.md)）
- Q404 — What alternative approaches did you consider?（来源：[questions.md:501](interview/questions/questions.md)）

<a id="day-30"></a>

### 周五 11/13

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Coding Review: Mixed Python Patterns<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Out-of-Sample Errors; Model Selection |
| 14:15–15:00 | System Design，45 分钟 | Prompting vs. RAG vs. Fine-Tuning; LoRA; Quantization |
| 15:00–16:30 | 项目，1.5 小时 | Financial Statement Analytics Assistant: CI and Reproducible Demo<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-30) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / AI-Conducted Interview Follow-ups; Behavioral Questions / Supplemental Behavioral — 19 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

- Q405 — Time and space complexity analysis.（来源：[questions.md:502](interview/questions/questions.md)）
- Q406 — Why did you choose this specific data structure?（来源：[questions.md:503](interview/questions/questions.md)）
- Q525 — How do you stay up-to-date with the latest developments in AI?（来源：[05-behavioral.md:23](interview/questions/05-behavioral.md)）
- Q526 — What side projects have you built with AI? What frameworks and models have you worked with?（来源：[05-behavioral.md:24](interview/questions/05-behavioral.md)）
- Q527 — Describe a project that didn't go as planned or where your AI solution failed（来源：[05-behavioral.md:26](interview/questions/05-behavioral.md)）
- Q528 — Tell me about a specific conflict with another person（来源：[05-behavioral.md:31](interview/questions/05-behavioral.md)）
- Q529 — Tell me about a time when you had to explain a complex technical concept to someone without a technical background（来源：[05-behavioral.md:33](interview/questions/05-behavioral.md)）
- Q530 — How do you collaborate with non-technical stakeholders on AI features?（来源：[05-behavioral.md:35](interview/questions/05-behavioral.md)）
- Q531 — Tell me about a time when you made short-term sacrifices for long-term（来源：[05-behavioral.md:40](interview/questions/05-behavioral.md)）
- Q532 — Describe a time you drove an architectural decision that affected multiple teams（来源：[05-behavioral.md:42](interview/questions/05-behavioral.md)）
- Q533 — Tell me about a time you mentored an engineer who went on to a senior role（来源：[05-behavioral.md:43](interview/questions/05-behavioral.md)）
- Q534 — How do you lead under risk and uncertainty?（来源：[05-behavioral.md:44](interview/questions/05-behavioral.md)）
- Q535 — Tell me about a time when a technical misjudgment led to a project delay. What did you learn?（来源：[05-behavioral.md:50](interview/questions/05-behavioral.md)）
- Q536 — What would you do if, midway through a project, you realized it was unfeasible?（来源：[05-behavioral.md:51](interview/questions/05-behavioral.md)）
- Q537 — Describe a time you had to quickly learn a new technology or methodology（来源：[05-behavioral.md:52](interview/questions/05-behavioral.md)）
- Q538 — Describe failure impact and resolve cross-functional conflict（来源：[05-behavioral.md:57](interview/questions/05-behavioral.md)）
- Q539 — Why do you think we should NOT hire you?（来源：[05-behavioral.md:58](interview/questions/05-behavioral.md)）
- Q540 — Discuss culture, collaboration, and mission alignment（来源：[05-behavioral.md:64](interview/questions/05-behavioral.md)）
- Q541 — Describe career decisions and cultural alignment（来源：[05-behavioral.md:65](interview/questions/05-behavioral.md)）


周六、周日：休息，不安排学习。

## 第 7 周：Project Deep Dive and Interview Practice

<a id="day-31"></a>

### 周一 11/16

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Progressive Implementation Problems<br>LeetCode: [2408. Design SQL](https://leetcode.com/problems/design-sql/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Prediction Intervals; Uncertainty Communication |
| 14:15–15:00 | System Design，45 分钟 | Financial Model Serving: Evaluation and Monitoring |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Research Contract and Market Data<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-31) |
| 16:30–17:30 | Interview Questions，1 小时 | Behavioral Questions / Supplemental Behavioral; Take-Home Assignments / RAG / Chatbot Systems; Take-Home Assignments / Agent Systems — 15 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q542 — Open-ended behavioral at senior level: conflicts with managers, deadline pressure, design disagreements, mistakes（来源：[05-behavioral.md:66](interview/questions/05-behavioral.md)）
- Q543 — Why [company]?（来源：[05-behavioral.md:70](interview/questions/05-behavioral.md)）
- Q544 — Why do you want to work here?（来源：[05-behavioral.md:71](interview/questions/05-behavioral.md)）
- Q545 — Why [this startup]? with evidence of due diligence（来源：[05-behavioral.md:73](interview/questions/05-behavioral.md)）
- Q546 — Discuss career decisions and culture fit（来源：[05-behavioral.md:74](interview/questions/05-behavioral.md)）
- Q422 — Blood test report AI: Create a project that takes a blood test report in PDF format, understands medical issues, and provides suggestions by fetching them from online blog articles. Submit in a few hours.（来源：[questions.md:541](interview/questions/questions.md)）
- Q423 — Customer support RAG chatbot: Design a production-ready chatbot using open-source tools. Requirements: 100+ concurrent users, <2 second latency, grounded in company docs, cost-effective, analytics tracking. Score: 9/10.（来源：[questions.md:542](interview/questions/questions.md)）
- Q424 — Document Q&A system: Build a document Q&A system with citation tracking for multi-hop questions.（来源：[questions.md:543](interview/questions/questions.md)）
- Q425 — Build a RAG chatbot that ingests PDFs/documents, creates embeddings in a vector DB, and answers questions with citations (10+ candidate submissions across 5+ companies).（来源：[questions.md:544](interview/questions/questions.md)）
- Q426 — Refactor a messy RAG codebase into a modular, production-ready service with FastAPI and LangGraph (5+ candidate submissions for one company).（来源：[questions.md:545](interview/questions/questions.md)）
- Q427 — Build a policy document RAG assistant with mandatory source citations for every answer. Includes a 7-question evaluation set.（来源：[questions.md:546](interview/questions/questions.md)）
- Q428 — Build an AI agent demonstrating natural interaction, agentic behavior, clear reasoning steps, and strong technical decision-making. 3-day window. Company: Eightfold.ai.（来源：[questions.md:550](interview/questions/questions.md)）
- Q429 — Customer email campaign agent: Build an agent reading customer CSV data and generating personalized email campaigns with evaluation metrics.（来源：[questions.md:551](interview/questions/questions.md)）
- Q430 — Code review agent: Implement a code review agent for Python files with actionable feedback.（来源：[questions.md:552](interview/questions/questions.md)）
- Q431 — Conversational Calendar Booking Agent: LangGraph/LangChain orchestration, Streamlit chat interface, FastAPI backend, Google Calendar integration via Service Accounts, function calling for booking logic.（来源：[questions.md:553](interview/questions/questions.md)）

<a id="day-32"></a>

### 周二 11/17

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Integrated Query Practice<br>LeetCode: [1075. Project Employees I](https://leetcode.com/problems/project-employees-i/); [1280. Students and Examinations](https://leetcode.com/problems/students-and-examinations/); [1193. Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Error Analysis; Baseline Comparison |
| 14:15–15:00 | System Design，45 分钟 | MCP Fundamentals; Tool Contracts; Integration Boundaries |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Deterministic Research Tools<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-32) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Agent Systems; Take-Home Assignments / Multi-Agent Systems — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q432 — Create a customer support agent relevant to the company's product within 1.5 hours. Red flag if candidate doesn't start with evals.（来源：[questions.md:554](interview/questions/questions.md)）
- Q433 — Build a simple autonomous agent using an open-source LLM with a task-specific goal and an observability/eval layer.（来源：[questions.md:555](interview/questions/questions.md)）
- Q434 — Build an assistant agent handling database queries, document search, and bash commands. Explicit evaluation criteria: tool selection accuracy, response grounding, error handling.（来源：[questions.md:556](interview/questions/questions.md)）
- Q435 — Build a production-ready AI agent that transforms project management data into conversational business insights using dual-LLM architecture (primary + fallback).（来源：[questions.md:557](interview/questions/questions.md)）
- Q436 — Build an agentic RAG system evaluated using RAGAS metrics (faithfulness, answer relevancy, context precision).（来源：[questions.md:558](interview/questions/questions.md)）
- Q437 — Build a chatbot-driven TikTok Ad Campaign Creation Agent.（来源：[questions.md:559](interview/questions/questions.md)）
- Q438 — Build a multi-agent content generation system: 5 core agents (research, writing, editing, SEO, publishing) orchestrated through a pipeline.（来源：[questions.md:563](interview/questions/questions.md)）
- Q439 — Implement a minimal workflow engine with graph-based nodes, state management, branching/looping, and tool-based logic. Max 50 steps. Unit tests mandatory (6+ candidate submissions).（来源：[questions.md:564](interview/questions/questions.md)）
- Q440 — Build a 5-agent CBT therapy system with crisis detection, safety filtering, and PII redaction.（来源：[questions.md:565](interview/questions/questions.md)）
- Q564 — Build a multi-agent content generation system: 5 core agents (research, writing, editing, SEO, publishing). Takes product JSON input, generates FAQ document, product page, and comparison page. All outputs must follow strict JSON formats. LangChain + Groq.（来源：[06-home-assignments.md:63](interview/questions/06-home-assignments.md)）
- Q565 — Implement a minimal workflow engine with graph-based nodes, state management, branching/looping, and tool-based logic. Max 50 steps. Built-in infinite-cycle protection required. Unit tests mandatory (6+ candidate submissions).（来源：[06-home-assignments.md:64](interview/questions/06-home-assignments.md)）
- Q566 — Build a 5-agent CBT therapy system: agents autonomously design, critique, and refine therapy exercises. Human-in-the-loop approval required before finalization.（来源：[06-home-assignments.md:65](interview/questions/06-home-assignments.md)）
- Q567 — Build a 4-stage bedtime story pipeline: Spec Builder, Storyteller, LLM Judge, Rewriter. Must use gpt-3.5-turbo. Up to 2 revision cycles. LLM judge evaluates stories against the spec.（来源：[06-home-assignments.md:66](interview/questions/06-home-assignments.md)）

<a id="day-33"></a>

### 周三 11/18

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Embedding Debugging; Cosine Similarity<br>LeetCode: [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/); [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Embeddings vs. Predictive Models |
| 14:15–15:00 | System Design，45 分钟 | Project Deep Dive: Ownership; Alternatives; Measured Impact |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Experiment API and Persistent Runs<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-33) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / LLM-as-Judge / Evaluation; Take-Home Assignments / Document Extraction and Processing — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


刷题对应说明：973 / 347 对应向量距离和 Top-k 的相关算法；Embedding Debugging、Cosine Similarity 使用 NumPy 练习。

#### 当天 Interview Questions

- Q441 — Build an evaluation tool for LLM hallucination detection.（来源：[questions.md:569](interview/questions/questions.md)；[06-home-assignments.md:58](interview/questions/06-home-assignments.md)）
- Q442 — Build a 4-stage bedtime story pipeline: Spec Builder, Storyteller, LLM Judge, Rewriter. Must use gpt-3.5-turbo. Up to 2 revision cycles (4+ candidate submissions).（来源：[questions.md:570](interview/questions/questions.md)）
- Q443 — Build a sales insights agent with PII safety: 3-dimension evaluation (accuracy, safety, reasoning).（来源：[questions.md:571](interview/questions/questions.md)）
- Q444 — Build a live chat agent grounded in FAQ knowledge base (2 candidate submissions with different tech stacks).（来源：[questions.md:572](interview/questions/questions.md)）
- Q445 — Build a marksheet extraction API: parse complex table layouts and handwriting. Confidence scoring required. FastAPI + Docker + Gemini 1.5 Flash.（来源：[questions.md:576](interview/questions/questions.md)）
- Q446 — Build a physician notetaker: medical transcription NLP system with NER and SOAP notes (3+ candidate submissions).（来源：[questions.md:577](interview/questions/questions.md)）
- Q447 — Refactor a messy codebase into a modular, production-ready service (5+ candidate submissions for one company).（来源：[questions.md:578](interview/questions/questions.md)）
- Q448 — Build an AI-powered legal document analysis tool for contracts.（来源：[questions.md:579](interview/questions/questions.md)）
- Q568 — Build a marksheet extraction API: parse complex table layouts and handwriting from academic marksheets into structured JSON.（来源：[06-home-assignments.md:71](interview/questions/06-home-assignments.md)）
- Q569 — Build a physician notetaker: transform physician-patient conversations into structured clinical documentation..（来源：[06-home-assignments.md:72](interview/questions/06-home-assignments.md)）
- Q570 — Build a legal document analysis tool for contracts: extract key information, identify risks (auto-renewal traps, liability, IP ownership, non-competes), generate structured summaries.（来源：[06-home-assignments.md:73](interview/questions/06-home-assignments.md)）
- Q571 — Build a CBT assistant combining RAG with safety mechanisms. Crisis detection mandatory. PII redaction and pseudonymization required. No secrets in logs. Educational only, not clinical advice.（来源：[06-home-assignments.md:74](interview/questions/06-home-assignments.md)）
- Q572 — Take a blood test report as PDF, understand medical issues, generate suggestions by fetching content from online blog articles with source links.（来源：[06-home-assignments.md:75](interview/questions/06-home-assignments.md)）

<a id="day-34"></a>

### 周四 11/19

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Financial Analytics; Window Functions Review<br>LeetCode: [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/); [1341. Movie Rating](https://leetcode.com/problems/movie-rating/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML Metrics and Validation Review |
| 14:15–15:00 | System Design，45 分钟 | System Design Mock: Financial Document Q&A |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Queue and Worker Execution<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-34) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Document Extraction and Processing; Take-Home Assignments / Voice AI and Conversational Systems; Take-Home Assignments / Full-Stack AI Applications — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q573 — Build a question deduplication and clustering pipeline: exact dedup, semantic dedup, LLM-based cluster discovery, classification. Output evaluated with ARI, NMI, homogeneity, completeness metrics.（来源：[06-home-assignments.md:76](interview/questions/06-home-assignments.md)）
- Q574 — Build a data pipeline that processes 1,000 messy products from 4 vendors, normalizes them into a unified schema, fetches supplementary data via rate-limited async API calls (vendor-specific token-bucket rate limits), enriches products through AI-powered duplicate detection. Must support both CLI and API access.（来源：[06-home-assignments.md:77](interview/questions/06-home-assignments.md)）
- Q575 — Build a transaction-to-user matching system: identify users whose names appear in transaction descriptions, find similar transactions via text matching, propose improvements (semantic embeddings, database integration). Spring Boot + Java.（来源：[06-home-assignments.md:78](interview/questions/06-home-assignments.md)）
- Q576 — Build real-time earnings call transcription and insight streaming: streaming audio-to-text via Whisper, real-time extraction of financial signals (revenue, guidance, risks, outlook), SSE output.（来源：[06-home-assignments.md:79](interview/questions/06-home-assignments.md)）
- Q449 — Build real-time concall transcription and insight streaming for Indian accents.（来源：[questions.md:583](interview/questions/questions.md)）
- Q450 — Build a Singapore public transport query agent with voice interface.（来源：[questions.md:584](interview/questions/questions.md)）
- Q451 — Build a Telegram bot for investment coaching with safety filtering. 3 days / 6-8 hours.（来源：[questions.md:585](interview/questions/questions.md)）
- Q452 — Build a live chat support agent with OpenAI, session persistence, and conversation history (2 candidate submissions).（来源：[questions.md:586](interview/questions/questions.md)）
- Q453 — Build conversational agents with game-based evaluation (2 submissions).（来源：[questions.md:587](interview/questions/questions.md)）
- Q454 — AI-First CRM: HCP Module: React/Redux frontend, FastAPI backend, LangGraph with 5+ tools (summarization, entity extraction). Models: gemma2-9b-it or llama-3.3-70b via Groq API. Deliverable: GitHub repo + 10-15 minute demo video. Expected time: ~60 hours.（来源：[questions.md:591](interview/questions/questions.md)）
- Q455 — Login page with validations: Create a login page accepting email and password with basic validations. Estimated 2-3 hours within 2-3 day window.（来源：[questions.md:592](interview/questions/questions.md)）
- Q456 — Build a production-ready mental health MVP with safety, privacy, PII redaction, and evaluation.（来源：[questions.md:593](interview/questions/questions.md)）
- Q457 — Build a production-grade distributed LLM processing pipeline with smart routing for 100K+ daily requests.（来源：[questions.md:594](interview/questions/questions.md)）

<a id="day-35"></a>

### 周五 11/20

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Logistic Regression with NumPy; Shape Checks<br>LeetCode: [1. Two Sum](https://leetcode.com/problems/two-sum/); [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | Gradient Descent; Regularization; Early Stopping |
| 14:15–15:00 | System Design，45 分钟 | Behavioral: Technical Decisions; Failure; Collaboration |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Retries, Timeouts and Worker Failure<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-35) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Full-Stack AI Applications — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

刷题对应说明：Logistic Regression、Shape Checks 和 Early Stopping 无直接 LeetCode 对应，使用 NumPy 自定义练习；1 / 20 为可选算法复习。

#### 当天 Interview Questions

- Q458 — Build an intelligent NPC system for a job simulation platform.（来源：[questions.md:595](interview/questions/questions.md)）
- Q459 — Build an LLM-based rating prediction system with prompt evaluation and dashboards.（来源：[questions.md:596](interview/questions/questions.md)）
- Q460 — Build a markdown-to-slides generator with cost and time metrics tracking.（来源：[questions.md:597](interview/questions/questions.md)）
- Q461 — Build a deduplication and clustering pipeline with ARI/NMI evaluation metrics.（来源：[questions.md:598](interview/questions/questions.md)）
- Q462 — Build a transaction matching system.（来源：[questions.md:599](interview/questions/questions.md)）
- Q463 — Build a D&D dungeon simulation with context engineering. Evaluation rubric: 30% functionality, 30% challenge completion, 25% context engineering, 15% code quality. ~4 hours.（来源：[questions.md:600](interview/questions/questions.md)）
- Q464 — Build a memory and personality engine using open-source LLMs only.（来源：[questions.md:601](interview/questions/questions.md)）
- Q577 — Build a Telegram bot for investment coaching with safety filtering. Educational content only - no personalized financial advice.（来源：[06-home-assignments.md:84](interview/questions/06-home-assignments.md)）
- Q578 — Build a multi-agent D&D dungeon simulation: Game Master agent + Player agents. Must address at least 3 of 6 challenges (long campaigns, secrets, rulings, self-aware dungeon, living world, ambiguity). LangGraph required.（来源：[06-home-assignments.md:85](interview/questions/06-home-assignments.md)）
- Q579 — Build a memory extraction and personality transformation system: extract structured long-term memory from chat history as JSON, transform responses based on personas (calm mentor, witty friend, therapist). Open-source LLMs only, no proprietary APIs.（来源：[06-home-assignments.md:86](interview/questions/06-home-assignments.md)）
- Q580 — Build an AI judge for a Rock-Paper-Scissors variant: classify player inputs as VALID/INVALID/UNCLEAR, handle typos and edge cases, tool-based state management workflow (2 submissions).（来源：[06-home-assignments.md:87](interview/questions/06-home-assignments.md)）
- Q581 — Build a web app that converts markdown to slide deck presentations by splitting content into logical sections based on a target slide count. Document size limited to 150K tokens, single API call. Next.js + OpenAI.（来源：[06-home-assignments.md:88](interview/questions/06-home-assignments.md)）
- Q582 — Build an LLM processing pipeline with intelligent routing, multi-level caching (exact + semantic), provider health monitoring with failover, and distributed tracing. Targets: 100+ req/s, p95 latency under 2s, >40% cache hit rate.（来源：[06-home-assignments.md:89](interview/questions/06-home-assignments.md)）


周六、周日：休息，不安排学习。

## 第 8 周：Integrated Interview Review

<a id="day-36"></a>

### 周一 11/23

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Timed Coding Mock<br>LeetCode: [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/); [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML Interview: Leakage; Bias-Variance; Metrics |
| 14:15–15:00 | System Design，45 分钟 | System Design Mock: Risk Scenario Workflow |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: AI Experiment Planning and Tool Calling<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-36) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Full-Stack AI Applications; Take-Home Assignments / Company Product Integration; Take-Home Assignments / Performance / Optimization; Take-Home Assignments / OpenAI-Specific; Take-Home Assignments / Red Flags (Unreasonable Assignments); Take-Home Assignments / RAG and Document Q&A — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q583 — Build an NPC system for a job simulation platform: three AI co-workers with distinct personalities, a "Director Agent" that detects conversation loops via semantic similarity (0.85 threshold), RAG-based knowledge retrieval. FastAPI + Claude API + FAISS.（来源：[06-home-assignments.md:90](interview/questions/06-home-assignments.md)）
- Q584 — Build an LLM-based rating prediction and prompt evaluation system with user and admin dashboards. Node.js + MongoDB + Google Generative AI.（来源：[06-home-assignments.md:91](interview/questions/06-home-assignments.md)）
- Q585 — Build an AI-first CRM module: React/Redux frontend, FastAPI backend, LangGraph with 5+ tools. Deliverable: GitHub repo + 10-15 minute demo video.（来源：[06-home-assignments.md:92](interview/questions/06-home-assignments.md)）
- Q465 — Roboflow: build a project using their CV platform and present to CTO.（来源：[questions.md:605](interview/questions/questions.md)）
- Q466 — Anthropic performance take-home: Code optimization for speed. 4-hour limit. Python workload simulating TPU-like operations. Tests low-level optimization skills. Now open-sourced for practice.（来源：[questions.md:609](interview/questions/questions.md)）
- Q467 — 48-hour technical project: Take-home assignment delivered day after recruiter call, 48-hour completion window. Practical coding, not puzzle-based.（来源：[questions.md:613](interview/questions/questions.md)）
- Q468 — 72-hour "Round 1" demanding full RAG + agents + UI.（来源：[questions.md:618](interview/questions/questions.md)）
- Q469 — Build an LLM agent to ingest years of financial reports with stock price analysis and chart generation using only freemium APIs. Candidate withdrew, calling it "an unpaid mini-consulting project."（来源：[questions.md:619](interview/questions/questions.md)）
- Q470 — 45 minutes for 3 complex tasks.（来源：[questions.md:620](interview/questions/questions.md)）
- Q547 — Build a RAG chatbot that ingests PDFs/documents, creates embeddings in a vector DB, and answers questions with citations. Must respond "I don't have that information" when answer is unavailable. Answers must come strictly from retrieved context (10+ candidate submissions across 5+ companies).（来源：[06-home-assignments.md:35](interview/questions/06-home-assignments.md)）
- Q548 — Build a policy document RAG assistant with mandatory source citations for every answer. Return safe fallbacks for out-of-scope questions. Comes with a 7-question evaluation set across 3 categories (answerable, partially answerable, unanswerable).（来源：[06-home-assignments.md:36](interview/questions/06-home-assignments.md)）
- Q549 — Build a document Q&A system with citation tracking that handles multi-hop questions (questions requiring information from multiple documents or sections to answer).（来源：[06-home-assignments.md:37](interview/questions/06-home-assignments.md)）
- Q550 — Build a live chat agent grounded in FAQ knowledge base. Model must answer only from known FAQ data.（来源：[06-home-assignments.md:38](interview/questions/06-home-assignments.md)）

<a id="day-37"></a>

### 周二 11/24

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Timed Query Mock<br>LeetCode: [178. Rank Scores](https://leetcode.com/problems/rank-scores/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML Interview: Model Choice; Interpretability |
| 14:15–15:00 | System Design，45 分钟 | Project Deep Dive Mock: RAG; Evals; Reliability |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: Workflow Evaluation and Observability<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-37) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / RAG and Document Q&A; Take-Home Assignments / Agents and Tool-Calling — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q551 — Design a customer support chatbot using RAG with open-source models. Requirements: 100+ concurrent users, <2 second latency, grounded in company docs, analytics tracking.（来源：[06-home-assignments.md:39](interview/questions/06-home-assignments.md)）
- Q552 — Build a CLI tool for summarizing long PDFs with configurable models and chunking strategies.（来源：[06-home-assignments.md:40](interview/questions/06-home-assignments.md)）
- Q553 — Refactor an existing messy RAG application into a clean architecture. Preserve all external behaviors (exact API endpoints), eliminate global mutable state, ensure testability without requiring running services (5+ candidate submissions for one company).（来源：[06-home-assignments.md:41](interview/questions/06-home-assignments.md)）
- Q554 — Build an agentic RAG system for government documents. 100% open-source required (Ollama + CrewAI + pgvector). Must integrate with OpenWebUI. Evaluated using RAGAS metrics (faithfulness, answer relevancy, context precision, context recall).（来源：[06-home-assignments.md:42](interview/questions/06-home-assignments.md)）
- Q555 — Build an assistant agent handling database queries, document search, and bash commands. Bash commands require explicit user approval.（来源：[06-home-assignments.md:49](interview/questions/06-home-assignments.md)）
- Q556 — Build an AI agent that transforms Monday.com project management data into conversational business insights using dual-LLM architecture.（来源：[06-home-assignments.md:50](interview/questions/06-home-assignments.md)）
- Q557 — Build an AI agent demonstrating natural interaction, agentic behavior, and clear reasoning steps.（来源：[06-home-assignments.md:51](interview/questions/06-home-assignments.md)）
- Q558 — Build a customer support agent.（来源：[06-home-assignments.md:52](interview/questions/06-home-assignments.md)）
- Q559 — Build an autonomous agent using an open-source LLM with observability/eval layer.（来源：[06-home-assignments.md:53](interview/questions/06-home-assignments.md)）
- Q560 — Build an agent that reads customer CSV data and generates personalized email campaigns with evaluation metrics.（来源：[06-home-assignments.md:54](interview/questions/06-home-assignments.md)）
- Q561 — Build a code review agent that analyzes Python files and provides actionable feedback.（来源：[06-home-assignments.md:55](interview/questions/06-home-assignments.md)）
- Q562 — Build a Singapore public transport query agent that fetches live data from 7 LTA APIs about buses, trains, traffic, and station conditions.（来源：[06-home-assignments.md:56](interview/questions/06-home-assignments.md)）
- Q563 — Build a sales insights agent that answers questions about subscription/revenue data. Must detect and refuse PII requests (emails, phone numbers, credit card tokens). No raw rows passed to the LLM - aggregates only. Evaluated on 3 dimensions: accuracy, safety/refusal correctness, reasoning quality.（来源：[06-home-assignments.md:57](interview/questions/06-home-assignments.md)）

<a id="day-38"></a>

### 周三 11/25

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Debugging and Code Review Mock<br>LeetCode: [71. Simplify Path](https://leetcode.com/problems/simplify-path/); [394. Decode String](https://leetcode.com/problems/decode-string/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML Interview: Time-Series Validation |
| 14:15–15:00 | System Design，45 分钟 | System Design Mock: Agentic Financial Analysis |
| 15:00–16:30 | 项目，1.5 小时 | Investment Research Workbench: CI, Container Release and Demo<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-38) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Legal Document AI; Take-Home Assignments / RAG and Document Q&A (New Companies); Take-Home Assignments / Agents and Multi-Agent Systems (New) — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q586 — Build a legal document AI workflow with a three-tier extraction cascade and an improvement-from-edits loop. The system must ingest, extract, ground, and iteratively improve based on operator corrections.（来源：[06-home-assignments.md:143](interview/questions/06-home-assignments.md)）
- Q587 — Pearson Specter Litt: Take-home requiring ingestion of messy legal documents, grounded retrieval, cited draft generation, and learning from operator edits. Delivered as a scrum sprint plan.（来源：[06-home-assignments.md:144](interview/questions/06-home-assignments.md)）
- Q588 — Quorium: Build a RAG Q&A chatbot for an AI Engineer Trainee role. Standard RAG pipeline with document ingestion and question answering.（来源：[06-home-assignments.md:149](interview/questions/06-home-assignments.md)）
- Q589 — ITJ: RAG-based document QA system as a take-home challenge.（来源：[06-home-assignments.md:150](interview/questions/06-home-assignments.md)）
- Q590 — NTT DATA: RAG system over sustainability reports.（来源：[06-home-assignments.md:151](interview/questions/06-home-assignments.md)）
- Q591 — NeoStats: Chatbot assignment for an AI Engineer case study.（来源：[06-home-assignments.md:152](interview/questions/06-home-assignments.md)）
- Q592 — Trinamix: Supply chain RAG chatbot over a 2,000-PO supplier register and governance policy. Built with Flowise, Pinecone, and GPT.（来源：[06-home-assignments.md:153](interview/questions/06-home-assignments.md)）
- Q593 — GoTyme Bank: Full-stack document extraction system combining OCR and LLM, with a React frontend.（来源：[06-home-assignments.md:154](interview/questions/06-home-assignments.md)）
- Q594 — Go Fig AI: Build an inbox-triage agent skill with a human-in-the-loop approval gate. 2-hour cap.（来源：[06-home-assignments.md:159](interview/questions/06-home-assignments.md)）
- Q595 — Yuno: Multi-agent orchestration platform with Ollama, Streamlit, and Telegram.（来源：[06-home-assignments.md:160](interview/questions/06-home-assignments.md)）
- Q596 — RefundPilot: Containerized internal support workspace that evaluates e-commerce refund requests, applies refund policy, resists prompt-injection attempts, and records structured decision logs.（来源：[06-home-assignments.md:161](interview/questions/06-home-assignments.md)）
- Q597 — AgentCollect: Full-Stack AI Engineer (AI-Native) hiring challenge.（来源：[06-home-assignments.md:162](interview/questions/06-home-assignments.md)）
- Q598 — Neon Health: AI Agent with OpenAI integration.（来源：[06-home-assignments.md:163](interview/questions/06-home-assignments.md)）

<a id="day-39"></a>

### 周四 11/26

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Weak-Topic Review<br>LeetCode: [1661. Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/); [1934. Confirmation Rate](https://leetcode.com/problems/confirmation-rate/); [1204. Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML vs. Rules vs. LLMs |
| 14:15–15:00 | System Design，45 分钟 | Behavioral: Career Transition; Stakeholder Communication |
| 15:00–16:30 | 项目，1.5 小时 | Portfolio Review: Evidence Audit and Cross-Project Reproduction<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-39) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Agents and Multi-Agent Systems (New); Take-Home Assignments / LLM Applications and Infrastructure; Take-Home Assignments / Embeddable and Conversational AI — 13 items |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

- Q599 — Future Research: LangGraph multi-agent fitness coach with hub routing to sub-agents (coach, workout-generator, workout-logger) via Claude structured output.（来源：[06-home-assignments.md:164](interview/questions/06-home-assignments.md)）
- Q600 — KarthikTools: Full-stack web app where a backend agent executes predefined tools with a clear execution trace.（来源：[06-home-assignments.md:165](interview/questions/06-home-assignments.md)）
- Q601 — GenAI Labs: Production-ready LLM-driven SQL analytics pipeline with token counting, SQL validation, observability, and benchmarking. Multiple submissions.（来源：[06-home-assignments.md:170](interview/questions/06-home-assignments.md)）
- Q602 — VantageScore: GenAI-powered credit risk scoring with ML ensemble, explainability, and LLM enrichment.（来源：[06-home-assignments.md:171](interview/questions/06-home-assignments.md)）
- Q603 — AEGIS: AEO content scoring, LLM query fan-out, and embedding-based semantic gap analysis.（来源：[06-home-assignments.md:172](interview/questions/06-home-assignments.md)）
- Q604 — SHL: GenAI assessment recommendation system.（来源：[06-home-assignments.md:173](interview/questions/06-home-assignments.md)）
- Q605 — Camplight: LLM interview task.（来源：[06-home-assignments.md:174](interview/questions/06-home-assignments.md)）
- Q606 — VijaySaravanaPandi: NL-to-app "compiler" — turns a natural-language app description into a working application via structured, validated intermediate representations (not just prompt to code).（来源：[06-home-assignments.md:175](interview/questions/06-home-assignments.md)）
- Q607 — Jpower3145: Local LLM pre-interview task.（来源：[06-home-assignments.md:176](interview/questions/06-home-assignments.md)）
- Q608 — Cerebras: AI Engineer Model Quality and Performance hiring challenge (perf UI, eval pruning).（来源：[06-home-assignments.md:177](interview/questions/06-home-assignments.md)）
- Q609 — nickusevich: Novelty detection for football news using hybrid retrieval (pgvector + tsvector + RRF), LLM reranking, and LLM-based publish/skip/review decisions.（来源：[06-home-assignments.md:178](interview/questions/06-home-assignments.md)）
- Q610 — EloquentAI: Build an embeddable AI agent chat widget.（来源：[06-home-assignments.md:183](interview/questions/06-home-assignments.md)）
- Q611 — Fleetio: Hybrid deterministic + LLM weekly fleet digest.（来源：[06-home-assignments.md:184](interview/questions/06-home-assignments.md)）

<a id="day-40"></a>

### 周五 11/27

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Weak-Topic Review<br>LeetCode: [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/); [146. LRU Cache](https://leetcode.com/problems/lru-cache/); [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML Fundamentals: Consolidated Review |
| 14:15–15:00 | System Design，45 分钟 | System Design Mock: Scale; Privacy; Cost; Failure Modes |
| 15:00–16:30 | 项目，1.5 小时 | Portfolio Review: Feature Freeze and Interview Deep Dive<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-40) |
| 16:30–17:30 | Interview Questions，1 小时 | Take-Home Assignments / Embeddable and Conversational AI; Take-Home Assignments / Official Company Challenges — 12 items |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

- Q612 — Zap: AI-powered client onboarding automation.（来源：[06-home-assignments.md:185](interview/questions/06-home-assignments.md)）
- Q613 — Adobe (FDE): GenAI-powered creative automation pipeline for social ad campaigns.（来源：[06-home-assignments.md:186](interview/questions/06-home-assignments.md)）
- Q614 — [ML6 (laine)](https://github.com/ml6team/laine-engineer-coding-challenge) - Coding challenge for evaluating AI Engineer candidates（来源：[06-home-assignments.md:193](interview/questions/06-home-assignments.md)）
- Q615 — [Jaseci Labs](https://github.com/jaseci-labs/take-home-ai-engineer) - Take-home for AI Software Engineer candidates（来源：[06-home-assignments.md:194](interview/questions/06-home-assignments.md)）
- Q616 — [Jitera](https://github.com/Jitera-Interviews/genai-takehome) - Take-home task for GenAI roles（来源：[06-home-assignments.md:195](interview/questions/06-home-assignments.md)）
- Q617 — [AuxoAI](https://github.com/AuxoAI-Hiring/ai-engineer-assignment) - AI Engineering Take-Home（来源：[06-home-assignments.md:196](interview/questions/06-home-assignments.md)）
- Q618 — [Coginis Research](https://github.com/CoginisResearch/ai-engineer-challenge) - AI Product Engineer Hiring Challenge（来源：[06-home-assignments.md:197](interview/questions/06-home-assignments.md)）
- Q619 — [Future Research](https://github.com/future-research/candidate-assessment) - AI Engineer take-home assessment + exercise dataset（来源：[06-home-assignments.md:198](interview/questions/06-home-assignments.md)）
- Q620 — [Go Fig AI](https://github.com/go-fig-ai/take-home-inbox-triage) - Inbox-triage agent with human-in-the-loop（来源：[06-home-assignments.md:199](interview/questions/06-home-assignments.md)）
- Q621 — [Cerebras](https://github.com/danielkim-cerebras/ai-model-quality-challenge) - Model Quality and Performance challenge（来源：[06-home-assignments.md:200](interview/questions/06-home-assignments.md)）
- Q622 — [AI:AT](https://github.com/AIAT-AIandBusinessgrowth/standort-agent-challenge-public) - Multi-criteria location evaluation agent（来源：[06-home-assignments.md:201](interview/questions/06-home-assignments.md)）
- Q623 — [Bloom (radialreview)](https://github.com/radialreview/bloom-coffee-ai) - Pre-built coffee ordering app candidates extend with an AI order taker（来源：[06-home-assignments.md:202](interview/questions/06-home-assignments.md)）


周六、周日：休息，不安排学习。

## 缓冲周：缓冲期：Review and Remediation

<a id="day-41"></a>

### 周一 11/30

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Coding Mock Remediation<br>LeetCode: [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/); [704. Binary Search](https://leetcode.com/problems/binary-search/); [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML: Validation and Leakage Review |
| 14:15–15:00 | System Design，45 分钟 | System Design: Weak-Topic Review |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Risk Copilot: Correctness Remediation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-41) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

复习主计划第 1–8 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-42"></a>

### 周二 12/1

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Query Mock Remediation<br>LeetCode: [175. Combine Two Tables](https://leetcode.com/problems/combine-two-tables/); [596. Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/); [180. Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML: Metrics and Model Selection Review |
| 14:15–15:00 | System Design，45 分钟 | System Design: Data; APIs; Persistence |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: AWS and CD: Completion or Recovery Drill<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-42) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

复习主计划第 9–16 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-43"></a>

### 周三 12/2

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Practical Implementation Mock<br>LeetCode: [706. Design HashMap](https://leetcode.com/problems/design-hashmap/); [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/); [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML: Financial Forecasting Review |
| 14:15–15:00 | System Design，45 分钟 | Project Deep Dive: Technical Follow-ups |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Snowflake: Data and SQL Remediation<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-43) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

复习主计划第 17–24 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-44"></a>

### 周四 12/3

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | SQL 刷题，1.5 小时 | SQL: Comprehensive Review<br>LeetCode: [185. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/); [550. Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/); [1321. Restaurant Growth](https://leetcode.com/problems/restaurant-growth/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML: Drift; Interpretability; Uncertainty |
| 14:15–15:00 | System Design，45 分钟 | Behavioral: Ownership; Learning; Communication |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Research Workbench: Failure Recovery<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-44) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Daily Review |


#### 当天 Interview Questions

复习主计划第 25–32 个工作日分配的问题，以其中标记的弱项和追问为主。

<a id="day-45"></a>

### 周五 12/4

| 时间 | 安排 | Topic |
|---|---|---|
| 09:00–10:30 | Python 刷题，1.5 小时 | Python: Final Mixed Review<br>LeetCode: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/); [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/); [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 10:30–12:30 | 网课，2 小时 | AI Engineer Core Track → AI Engineer Production Track |
| 12:30–13:30 | 午休 | — |
| 13:30–14:15 | ML，45 分钟 | ML: Final Knowledge Review |
| 14:15–15:00 | System Design，45 分钟 | System Design: Final Integrated Mock |
| 15:00–16:30 | 项目，1.5 小时 | Buffer: Portfolio: Final Reproduction and Remaining Gaps<br>[改进任务与验收](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-45) |
| 16:30–17:30 | Interview Questions，1 小时 | Question Bank Review: Weak Questions and Follow-ups |
| 17:30–18:00 | 复盘，30 分钟 | Weekly Review; Weak Topics; Next-Week Priorities |

#### 当天 Interview Questions

复习主计划第 33–40 个工作日分配的问题，以其中标记的弱项和追问为主。


周六、周日：休息，不安排学习。



