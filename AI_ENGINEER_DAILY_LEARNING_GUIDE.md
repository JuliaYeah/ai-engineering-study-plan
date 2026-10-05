# 每日学习执行指南

<!-- quantvault-intro -->

## QuantVault Practice

只安排Regression与Machine Learning，按已有Pro访问权限执行。2026-10-04实时目录核对：Regression 170题、Machine Learning 94题，共264个不同题号；网页搜索抓取曾显示Regression 171题，因此以实时目录为准。

本轮选择47道核心题，分配到45个学习日，重复题用于分阶段练习和复习；其余217题作为扩展题库，不要求在当前45分钟ML时段内全部做完。保留现有Python、SQL与LeetCode安排，不加入QuantVault Coding或Optimization分类。

讲义与先修、Notebook及QuantVault共享13:30–14:15的45分钟：入门日20+15+10，初学日15+20+10，复习日10+15+20。网站Coding类型的ML题只练指定的ML片段或方案，不另加算法刷题。

[全部日期与具体题目](AI_ENGINEER_QUANTVAULT_PLAN.md) · [HTML日期索引](AI_ENGINEER_QUANTVAULT_PLAN.html)。

<!-- /quantvault-intro -->


[每日时间表与623条原题](AI_ENGINEER_TRANSITION_PLAN.md) · [Topic Library](Study%20topics/index.html) · [项目路线](AI_ENGINEER_PROJECT_ROADMAP.md)

每个工作日8小时，周末休息。学习内容英文，安排与导航中文。网课每天2小时，先Core再Production，完成后用于课程练习复习。所有入口都在既定时段内使用，不追加任务。

## 使用方法

- Coding：按当天topic与LeetCode候选练习；代码答案默认折叠，同一天不混刷Python和SQL。
- ML：讲义、notebook和QuantVault共享45分钟，按当天分配执行；QuantVault替代原英文检查题。复习日只完成Notebook的Review Experiment或指定片段。
- System Design：初学15分钟讲解、20分钟画图、10分钟追问；Practice日30分钟独立模拟、15分钟对照。
- Interview Questions：16:30–17:30按总表原题覆盖；点击当天链接后，每题下方可展开英文口述答案，再展开详解、追问与参考代码；40天首次过完623条，不把take-home全部实现当作一小时目标。
- Review：17:30–18:00复盘；概念链接按当天疑问选读。手机碎片时间可替代口述/讲义时段，不额外计时。

## 一次性环境

先按 [Notebook setup](notebook/README.md)选择Python kernel。学习基础实验无密钥，数据已在notebook中生成。

<a id="guide-day-01"></a>

## Day 01 · 周一 10/5

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-01)

### 09:00–10:30 · Coding

[Hash Maps](Study%20topics/hash-maps.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Split roles and three datasets

讲解：[Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [运行Notebook](notebook/01_train_validation_test_split.ipynb)

具体实验：Change the random seed and validation fraction. Compare score variability across three synthetic datasets: clean linear, noisy linear, and nonlinear. Explain why a random split is only appropriate for independent observations.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 01 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 20 分钟 → Notebook实验 15 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1962 · Explaining Machine Learning to a Non-Technical Audience](https://quantvault.org/problems.html?id=1962) · Machine Learning · Easy

先修：先读Machine Learning Foundations。

本次范围：Conceptual。用自己的金融工作解释Feature、Target、Training和Prediction；先不背模型名。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-01)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Requirements and API Design](Study%20topics/requirements-and-api-design.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：读项目 AGENTS、codebase_map、CHANGELOG；运行现有 tests/lint，复现一个失败。把旧 known_issues 标为 Confirmed / Fixed / Unverified，并记录当前 commit。

如何验证：用离线 fixture 重现失败，保留完整 traceback；历史文档不能直接当当前事实。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-01)

<a id="guide-day-02"></a>

## Day 02 · 周二 10/6

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-02)

### 09:00–10:30 · Coding

[SELECT](Study%20topics/select.html); [WHERE](Study%20topics/where.html); [ORDER BY](Study%20topics/order-by.html); [LIMIT](Study%20topics/limit.html); [NULL](Study%20topics/null.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Supervised targets and mean baseline

讲解：[Supervised and Unsupervised Learning; Baselines](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [运行Notebook](notebook/02_supervised_and_unsupervised_learning_baselines.ipynb)

具体实验：Increase the noise level and compare Ridge with a training-mean predictor. Change the clustering seed and compare group labels with the continuous regression target.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 02 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 20 分钟 → Notebook实验 15 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1432 · Linear Regression: Model, Estimation, and When to Use It](https://quantvault.org/problems.html?id=1432) · Regression · Medium
- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：入门页的Linear Regression公式；两题各用约5分钟。

本次范围：Conceptual。先解释线性函数的输入、系数和数值输出，再用目标→数据→基线→验证组织建模思路。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-02)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Requirements and API Design](Study%20topics/requirements-and-api-design.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：优先核查 risk/var.py 的缺失值处理和 data/preprocess.py 的 DXY 映射；只修已复现的问题，定义缺数据时拒绝或明确排除的规则。

如何验证：手算 tiny portfolio 参考值；测缺失值、因子缺失与单位，不把缺失默认为零。关键数值问题未解决则缩小演示范围。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-02)

<a id="guide-day-03"></a>

## Day 03 · 周三 10/7

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-03)

### 09:00–10:30 · Coding

[Arrays and Strings](Study%20topics/arrays-and-strings.html); [Two Pointers](Study%20topics/two-pointers.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Train-only scaling and leakage

讲解：[Data Leakage; Scaling; scikit-learn Pipelines](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [运行Notebook](notebook/03_data_leakage_scaling_scikit_learn_pipelines.ipynb)

具体实验：Inspect train-only versus full-data scaler means under a shifted holdout. Add a future target as a feature only in a deliberately invalid copy and explain why the score cannot be trusted.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 03 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Data Leakage与scikit-learn Pipelines。

本次范围：Case outline。只画Data → Split → Preprocessing → Fit → Evaluate，标出哪些步骤只能看训练集。整题的完整建模方案留到Day 31。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-03)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Data Modeling and Indexes](Study%20topics/data-modeling-and-indexes.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：核查 risk/greeks.py 的零值、VaR/P&L 因子映射和支持的置信度；集中完成一个小修复，剩余高影响问题先禁用对应演示功能。

如何验证：区分 zero 与 missing，验证 shock 单位和数值符号；重跑相关用例，记录仍失败的基线测试。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-03)

<a id="guide-day-04"></a>

## Day 04 · 周四 10/8

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-04)

### 09:00–10:30 · Coding

[GROUP BY](Study%20topics/group-by.html); [HAVING](Study%20topics/having.html); [CASE](Study%20topics/case.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：MAE versus RMSE

讲解：[MAE; RMSE](Study%20topics/mae-rmse.html) · [运行Notebook](notebook/04_mae_rmse.ipynb)

具体实验：Increase one prediction error from 2 to 20. Compare how MAE and RMSE change and decide which error pattern matters for a risk forecast.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 04 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1613 · Loss Function Minimizers and Regression Variants](https://quantvault.org/problems.html?id=1613) · Regression · Medium

先修：先读MAE、RMSE；Loss是训练目标，Metric是评价方式，两者可以不同。

本次范围：Conceptual。只比较Squared Loss与Absolute Loss，以及均值/中位数对应关系；不要求完成所有回归变体推导。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-04)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Data Modeling and Indexes](Study%20topics/data-modeling-and-indexes.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：复用现有 evals/datasets 样本，先人工审核 30 个 query：20 development、10 held-out；包含无答案、近似错误来源、跨来源问题。相似问题按组切分。

如何验证：每题标 relevant section IDs、分级和理由；检查来源确实存在。held-out 不用于调参；审核未完成先不比较模型。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-04)

<a id="guide-day-05"></a>

## Day 05 · 周五 10/9

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-05)

### 09:00–10:30 · Coding

[Sorting](Study%20topics/sorting.html); [Binary Search](Study%20topics/binary-search.html); [Complexity Analysis](Study%20topics/complexity-analysis.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Underfitting and overfitting

讲解：[Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [运行Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb)

具体实验：Change polynomial degree and alpha. Compare training versus validation errors and describe underfitting and overfitting.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 05 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy

先修：补读R-Squared = 1 − SSE/SST；它不同于RMSE，样本外可能为负。

本次范围：Conceptual。先识别训练好、验证差的过拟合，再解释R-Squared衡量相对均值基线的拟合；Cross-Validation细节留到Day 17。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-05)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Cache and API Service](Study%20topics/cache-and-api-service.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：复用 evaluation/retrieval 的 metrics/runner；核对 Recall@k、nDCG、MRR、冗余定义，以当前配置在 development 跑基线。无答案另记拒绝/误检，不混入 recall 均值。

如何验证：手算重复 section 的 toy ranking 并核对实现；保存配置、模型、索引、数据版本、tokens 和耗时。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-05)

<a id="guide-day-06"></a>

## Day 06 · 周一 10/12

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-06)

### 09:00–10:30 · Coding

[Hash Maps](Study%20topics/hash-maps.html); [Arrays and Strings](Study%20topics/arrays-and-strings.html); [Two Pointers](Study%20topics/two-pointers.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Ridge regularization

讲解：[Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [运行Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb)

具体实验：Change polynomial degree and alpha. Compare training versus validation errors and describe underfitting and overfitting.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 06 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1861 · Linear Regression, Ridge, and Lasso](https://quantvault.org/problems.html?id=1861) · Regression · Medium
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：先读Regularization讲义；L1可归零，L2通常缩小，alpha用验证选。

本次范围：Comparison。先比较OLS、Ridge与Lasso，再回答Lasso的特征选择优势及相关特征下不稳定的限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-06)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Cache and API Service](Study%20topics/cache-and-api-service.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：固定 embedding、search type、k；仅比较当前 chunk 配置与一个较小/较大候选，记录大小计量单位及 overlap。每个配置重建独立索引。

如何验证：development 同一 query 集比较 recall、nDCG、重复来源、context tokens；不追求所有指标同时上升。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-06)

<a id="guide-day-07"></a>

## Day 07 · 周二 10/13

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-07)

### 09:00–10:30 · Coding

[JOINs](Study%20topics/joins.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Logistic probabilities

讲解：[Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [运行Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb)

具体实验：Move the threshold from .2 to .8 and compare confusion matrices. Explain why recall here has the same coverage idea as retrieval recall but a different denominator.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 07 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#2606 · Interpreting Logistic Regression Coefficients](https://quantvault.org/problems.html?id=2606) · Machine Learning · Medium

先修：先读Logistic Regression；Odds = p/(1−p)，Log-odds = log(Odds)。

本次范围：Conceptual。解释线性score→sigmoid→概率；系数影响log-odds，不能直接说概率增加相同数值。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-07)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：固定选定 chunk 方案和检索设置，对比当前 embedding 与一个可用替代模型；模型/维度/版本绑定独立索引和缓存。

如何验证：确认 query/document embedding 配套、不能复用旧向量；比较相同样本的质量、构建成本与查询耗时。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-07)

<a id="guide-day-08"></a>

## Day 08 · 周三 10/14

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-08)

### 09:00–10:30 · Coding

[Sliding Window](Study%20topics/sliding-window.html); [Prefix Sums](Study%20topics/prefix-sums.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Thresholds and imbalance

讲解：[Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [运行Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb)

具体实验：Move the threshold from .2 to .8 and compare confusion matrices. Explain why recall here has the same coverage idea as retrieval recall but a different denominator.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 08 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1473 · Precision and Recall in Classification](https://quantvault.org/problems.html?id=1473) · Machine Learning · Medium

先修：先认识Confusion Matrix：实际类别与预测类别的交叉计数。

本次范围：Worked example。手算一组TP、FP、FN的Precision与Recall；改变阈值，解释误报和漏报。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-08)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：固定其他参数比较 Similarity 与 MMR，再锁定最终配置、运行 held-out 一次。检查误检和来源冗余；Hybrid/Reranking 只有发现对应失败才进入后续 backlog。

如何验证：MMR 不保证不同来源；根据质量、成本和冗余作取舍。保存失败案例，即使没有提升也如实报告。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-08)

<a id="guide-day-09"></a>

## Day 09 · 周四 10/15

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-09)

### 09:00–10:30 · Coding

[Subqueries](Study%20topics/subqueries.html); [CTEs](Study%20topics/ctes.html); [EXISTS](Study%20topics/exists.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：ROC and precision-recall

讲解：[PR-AUC; ROC-AUC; Calibration](Study%20topics/pr-auc-roc-auc-calibration.html) · [运行Notebook](notebook/07_pr_auc_roc_auc_calibration.ipynb)

具体实验：Compare raw probabilities with an overconfident monotone transformation. Check ROC-AUC and Brier score. Distinguish average precision from trapezoidal PR area.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 09 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1666 · Profit-Aware Classification Threshold](https://quantvault.org/problems.html?id=1666) · Machine Learning · Hard

先修：先读Precision、Recall、ROC-AUC与PR-AUC；用每次正确收益/错误损失的小数字例子。

本次范围：Advanced: scoped calculation。只完成二分类阈值的收益/损失判断。先画PR/ROC曲线的含义，再说明排序指标不能替代决策成本。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-09)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Rate Limiting and Capacity](Study%20topics/rate-limiting-and-capacity.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：检查 evaluator_agent 和 routing：坏 JSON、缺分、越界分数、调用异常要有明确结果；重试带拒绝原因，耗尽时阻断而非进入 risk engine。

如何验证：mock 成功、拒绝、解析失败、超时、预算耗尽；确认没有无限循环和静默通过。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-09)

<a id="guide-day-10"></a>

## Day 10 · 周五 10/16

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-10)

### 09:00–10:30 · Coding

[Stacks](Study%20topics/stacks.html); [Queues](Study%20topics/queues.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Calibration

讲解：[PR-AUC; ROC-AUC; Calibration](Study%20topics/pr-auc-roc-auc-calibration.html) · [运行Notebook](notebook/07_pr_auc_roc_auc_calibration.ipynb)

具体实验：Compare raw probabilities with an overconfident monotone transformation. Check ROC-AUC and Brier score. Distinguish average precision from trapezoidal PR area.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 10 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3699 · MSE or Cross Entropy: Picking a Loss for a Probabilistic Classifier](https://quantvault.org/problems.html?id=3699) · Machine Learning · Medium

先修：Cross Entropy衡量真实类别被赋予的概率；Brier Score是概率的平方误差。这里不要求证明。

本次范围：Conceptual。比较数值回归损失与概率分类损失；先读Calibration，说明校准、排序和训练目标是不同问题。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-10)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Rate Limiting and Capacity](Study%20topics/rate-limiting-and-capacity.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：把 workflow.py 自动批准改为明确的 Pending / Approved / Rejected 状态；先完成单用户演示的暂停和同 run 恢复，保存批准记录。

如何验证：未批准不能执行风险计算；拒绝终止；重复恢复不能重复副作用。多用户身份系统留待扩展，不声称已实现。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-10)

<a id="guide-day-11"></a>

## Day 11 · 周一 10/19

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-11)

### 09:00–10:30 · Coding

[Heaps](Study%20topics/heaps.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Tree depth

讲解：[Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [运行Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb)

具体实验：Increase tree depth and compare train/validation errors for tree, forest and boosting. Keep dataset and split fixed.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 11 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1836 · Controlling Overfitting in Decision Trees and XGBoost](https://quantvault.org/problems.html?id=1836) · Machine Learning · Medium

先修：先读Decision Trees；Boosting细节尚未学，不要求第一次完整作答。

本次范围：Conceptual。先讨论树深、叶子样本数与过拟合，只做Decision Tree部分；XGBoost部分留到Day 16对照。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-11)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Retries, Idempotency and Consistency](Study%20topics/retries-idempotency-and-consistency.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：建立 10 个小型 E2E 场景：有效输入、非法单位、无支持证据、明确冲突和 evaluator 故障。用确定性 risk fixture 检查报告；保留 injection 反例。

如何验证：报告数字、单位、方向与 engine 一致；场景约束区分硬规则和需复核假设，不把市场方向经验当普适定律。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-11)

<a id="guide-day-12"></a>

## Day 12 · 周二 10/20

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-12)

### 09:00–10:30 · Coding

[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Pipeline leakage review

讲解：[Data Leakage; Scaling; scikit-learn Pipelines](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [运行Notebook](notebook/03_data_leakage_scaling_scikit_learn_pipelines.ipynb)

具体实验：Inspect train-only versus full-data scaler means under a shifted holdout. Add a future target as a feature only in a deliberately invalid copy and explain why the score cannot be trusted.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 12 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2017 · Missing Data Imputation and Regression Pipeline](https://quantvault.org/problems.html?id=2017) · Machine Learning · Medium

先修：先读Imputation：用训练数据确定填充值；Notebook示例仍保留。

本次范围：Implementation sketch。只写缺失值处理与Scaler放入Pipeline的最小片段；验证预处理没有读取验证集。完整题不要求当日实现。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-12)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Retries, Idempotency and Consistency](Study%20topics/retries-idempotency-and-consistency.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：复用 workflow 建最小 FastAPI analysis 接口与 health endpoint；薄封装共享编排，不新造整套后台。审批路径通过 run ID 与现有状态衔接。

如何验证：用 TestClient/fakes 测输入错误、成功、等待审批、拒绝和依赖失败；服务超时可见。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-12)

<a id="guide-day-13"></a>

## Day 13 · 周三 10/21

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-13)

### 09:00–10:30 · Coding

[Linked Lists](Study%20topics/linked-lists.html); [LRU Cache](Study%20topics/lru-cache.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Metric sensitivity review

讲解：[MAE; RMSE](Study%20topics/mae-rmse.html) · [运行Notebook](notebook/04_mae_rmse.ipynb)

具体实验：Increase one prediction error from 2 to 20. Compare how MAE and RMSE change and decide which error pattern matters for a risk forecast.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 13 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1625 · Median Regression vs. OLS](https://quantvault.org/problems.html?id=1625) · Regression · Medium

先修：Median Regression对应中位数目标；注意它与均值OLS的差异。

本次范围：Comparison。比较MAE/Absolute Loss与MSE/Squared Loss，说明异常值为何影响不同；不要求完整Quantile Regression证明。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-13)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Latency and Observability](Study%20topics/latency-and-observability.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：记录 run_id、各节点耗时、model/prompt版本、tokens、重试和失败；日志不记录密钥。用固定请求测冷/热路径。

如何验证：先做 30 次离线服务实验，再按预算跑少量真实请求；两组分开报告样本数、p50/p95、错误率。小样本尾延迟只作描述。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-13)

<a id="guide-day-14"></a>

## Day 14 · 周四 10/22

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-14)

### 09:00–10:30 · Coding

[LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Bias-variance review

讲解：[Bias-Variance; Overfitting; Regularization; Linear Regression](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [运行Notebook](notebook/05_bias_variance_overfitting_regularization_linear_regression.ipynb)

具体实验：Change polynomial degree and alpha. Compare training versus validation errors and describe underfitting and overfitting.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 14 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1431 · Lasso, Ridge, and Elastic Net Comparison](https://quantvault.org/problems.html?id=1431) · Regression · Medium
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：Elastic Net结合L1与L2；Multicollinearity指输入特征近似线性相关。

本次范围：Comparison。比较Lasso、Ridge与Elastic Net，结合相关特征解释系数稳定性和特征选择。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-14)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Latency and Observability](Study%20topics/latency-and-observability.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：根据昨日瓶颈只选一项：减少重复调用、限制 context、缓存静态 retrieval 或并发独立步骤。缓存 key 包含数据/index/model版本及权限范围。

如何验证：相同请求、环境、并发下对比延迟/成本/质量/失败率；标结果缓存命中与未命中。Streaming 只在已实现时测 TTFT。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-14)

<a id="guide-day-15"></a>

## Day 15 · 周五 10/23

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-15)

### 09:00–10:30 · Coding

[Queues](Study%20topics/queues.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Random forests

讲解：[Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [运行Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb)

具体实验：Increase tree depth and compare train/validation errors for tree, forest and boosting. Keep dataset and split fixed.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 15 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1670 · Random Forests, Bagging, and Variance Reduction](https://quantvault.org/problems.html?id=1670) · Machine Learning · Medium

先修：先读Random Forests；Bagging是重采样后组合模型。

本次范围：Conceptual。解释Bagging、随机特征与树平均怎样降低方差，并指出不是所有树都独立。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-15)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[CI/CD and AWS Deployment](Study%20topics/ci-cd-and-aws-deployment.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：建立 PR workflow：ruff、unit tests、mock integration、tiny deterministic eval；真实付费 eval 独立手动触发。已知失败登记，新增回归阻断。

如何验证：故意引入一个临时失败验证 gate，再撤销；CI 不依赖个人 .env。记录 workflow 实际运行结果。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-15)

<a id="guide-day-16"></a>

## Day 16 · 周一 10/26

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-16)

### 09:00–10:30 · Coding

[BFS](Study%20topics/bfs.html); [Trees](Study%20topics/trees.html); [Recursion](Study%20topics/recursion.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Gradient boosting

讲解：[Decision Trees; Random Forests; Gradient Boosting](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [运行Notebook](notebook/08_decision_trees_random_forests_gradient_boosting.ipynb)

具体实验：Increase tree depth and compare train/validation errors for tree, forest and boosting. Keep dataset and split fixed.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 16 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1743 · Gradient Boosting vs. Random Forests, Batch Normalization, and SGD Momentum](https://quantvault.org/problems.html?id=1743) · Machine Learning · Easy

先修：先读Gradient Boosting；逐步纠正当前损失，与独立树平均不同。

本次范围：Comparison。只比较Random Forest与Gradient Boosting，并复习Day 11的XGBoost限制；Batch Norm和SGD Momentum作为扩展。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-16)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[CI/CD and AWS Deployment](Study%20topics/ci-cd-and-aws-deployment.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：统一可用 Docker 构建入口，排除密钥/私人文件，锁依赖；复用当前 demo 界面和 API，定义明确启动命令。

如何验证：新环境启动镜像、health/smoke test；写明索引来源、模型配置、审批状态是否持久化。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-16)

<a id="guide-day-17"></a>

## Day 17 · 周二 10/27

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-17)

### 09:00–10:30 · Coding

[Date Queries](Study%20topics/date-queries.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Cross-validation

讲解：[Cross-Validation; Hyperparameter Tuning](Study%20topics/cross-validation-hyperparameter-tuning.html) · [运行Notebook](notebook/09_cross_validation_hyperparameter_tuning.ipynb)

具体实验：Change alpha candidates and inspect fold-score variation. Explain why this shuffled K-fold example is not the workbench time-series validation.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 17 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1746 · Hyperparameter Selection in Machine Learning](https://quantvault.org/problems.html?id=1746) · Machine Learning · Easy

先修：先读Cross-Validation；随机K-fold不能直接用于金融时间序列。

本次范围：Conceptual。区分模型学到的Parameter与人为选择的Hyperparameter，说明Cross-Validation和最终测试的分工。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-17)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Financial Research RAG](Study%20topics/financial-research-rag.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：以 ECS Fargate 单任务为默认演示目标：ECR 镜像、CloudWatch 日志、执行/应用 IAM role、最小网络规则；写部署与清理步骤。首版用只读打包小索引。

如何验证：核对容器端口、health、secret注入、权限和预计计费资源；今日先完成配置。无账号/预算则用本地演练保留待部署状态。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-17)

<a id="guide-day-18"></a>

## Day 18 · 周三 10/28

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-18)

### 09:00–10:30 · Coding

[Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Hyperparameter selection

讲解：[Cross-Validation; Hyperparameter Tuning](Study%20topics/cross-validation-hyperparameter-tuning.html) · [运行Notebook](notebook/09_cross_validation_hyperparameter_tuning.ipynb)

具体实验：Change alpha candidates and inspect fold-score variation. Explain why this shuffled K-fold example is not the workbench time-series validation.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 18 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1587 · Hyperparameter Tuning and Diagnosing Flat Out-of-Sample Performance](https://quantvault.org/problems.html?id=1587) · Machine Learning · Medium
- [#1676 · Ridge Regression Hyperparameter Diagnostics](https://quantvault.org/problems.html?id=1676) · Machine Learning · Medium

先修：先读Hyperparameter Tuning；不根据最终测试反复选择配置。

本次范围：Diagnosis。面对样本外表现平坦，先判断数据、基线、alpha、样本量与验证方差，再决定是否继续调参。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-18)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Financial Research RAG](Study%20topics/financial-research-rag.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：在个人 AWS 环境部署受限访问的 demo，先 mock 模式再按预算验证真实请求；查看 CloudWatch 错误。单实例是演示配置。

如何验证：验证实际请求、故障日志和服务重启；本地审批状态若会丢失必须明确标限制，不能声称生产持久化/高可用。记录资源与关闭步骤。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-18)

<a id="guide-day-19"></a>

## Day 19 · 周四 10/29

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-19)

### 09:00–10:30 · Coding

[Transactions](Study%20topics/transactions.html); [Constraints](Study%20topics/constraints.html); [Parameterized Queries](Study%20topics/parameterized-queries.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Feature engineering

讲解：[Feature Engineering; Interpretability; Feature Importance](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [运行Notebook](notebook/10_feature_engineering_interpretability_feature_importance.ipynb)

具体实验：Duplicate the strongest feature and compare permutation importance before and after. Explain why feature importance is not a causal effect.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 19 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1757 · Limitations of One-Hot Encoding](https://quantvault.org/problems.html?id=1757) · Machine Learning · Easy
- [#1964 · Feature Selection for Return Prediction](https://quantvault.org/problems.html?id=1964) · Machine Learning · Medium

先修：先读Feature Engineering；One-Hot用多个0/1变量表示类别。

本次范围：Feature strategy。说明One-Hot Encoding的维度与未知类别问题；特征选择也必须在训练/验证流程内完成。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-19)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[RAG Evaluation and Retrieval Trade-offs](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：CI 后增加手动 release workflow；GitHub OIDC 获取限定 AWS role，推送有版本镜像并更新 task，部署后 smoke。保留前一 task/image/config。

如何验证：演练回退至前版并重新 smoke；不只截图流水线成功。OIDC/IAM 未通先手动验证发布，CD 标未完成并进缓冲期。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-19)

<a id="guide-day-20"></a>

## Day 20 · 周五 10/30

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-20)

### 09:00–10:30 · Coding

[Stacks](Study%20topics/stacks.html); [Debugging](Study%20topics/debugging.html); [Refactoring](Study%20topics/refactoring.html); [Code Review](Study%20topics/code-review.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Permutation importance

讲解：[Feature Engineering; Interpretability; Feature Importance](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [运行Notebook](notebook/10_feature_engineering_interpretability_feature_importance.ipynb)

具体实验：Duplicate the strongest feature and compare permutation importance before and after. Explain why feature importance is not a causal effect.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 20 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3080 · Feature Importance in Tree Models and What a SHAP Value Measures](https://quantvault.org/problems.html?id=3080) · Machine Learning · Medium

先修：SHAP把某个预测相对基准的差异分摊到特征，取决于所用基准与方法。

本次范围：Conceptual。区分树内Importance、Permutation Importance与SHAP，说明相关特征及因果解释的限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-20)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[RAG Evaluation and Retrieval Trade-offs](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：从干净环境运行最小演示与 eval，更新 README/CHANGELOG；整理一个RAG实验、一个真实故障、一个延迟取舍。

如何验证：数字指向原始结果；标本人设计验证/AI协助实现/现成组件；删除过期“已完成”描述。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-20)

<a id="guide-day-21"></a>

## Day 21 · 周一 11/2

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-21)

### 09:00–10:30 · Coding

[API Clients](Study%20topics/api-clients.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Chronological splits

讲解：[Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [运行Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb)

具体实验：Change the horizon from 5 to 10 and observe which training origins are purged. Draw origin and label-end timelines. Compare expanding and fixed-width training windows.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 21 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1939 · Cross-Validation Leakage in Financial Time Series](https://quantvault.org/problems.html?id=1939) · Machine Learning · Medium

先修：先读Time-Series Splits、Walk-Forward Validation。

本次范围：Case outline。画时间轴，指出随机切分、提前标准化和重叠目标怎样造成泄漏。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-21)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Financial Text-to-SQL](Study%20topics/financial-text-to-sql.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：项目开始时启用个人 Snowflake 环境；用小型 TPC-H sample 练连接、JOIN、GROUP BY，设置独立 role、warehouse、auto-suspend 和查询超时。

如何验证：能自己解释一条多表查询及其结果粒度；记录执行环境和资源设置，不复制未知生产权限。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-21)

<a id="guide-day-22"></a>

## Day 22 · 周二 11/3

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-22)

### 09:00–10:30 · Coding

[PostgreSQL Schema Design](Study%20topics/postgresql-schema-design.html); [Primary and Foreign Keys](Study%20topics/primary-and-foreign-keys.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Label availability

讲解：[Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [运行Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb)

具体实验：Change the horizon from 5 to 10 and observe which training origins are purged. Draw origin and label-end timelines. Compare expanding and fixed-width training windows.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 22 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2001 · Lookahead Bias From Universe Membership Leakage](https://quantvault.org/problems.html?id=2001) · Machine Learning · Medium
- [#1980 · Handling Delayed Features in a Regression Model](https://quantvault.org/problems.html?id=1980) · Regression · Medium

先修：Point-in-Time只使用预测时已知信息，期末日期不等于公布日期。

本次范围：Point-in-time audit。分别检查股票池成员和延迟发布特征；列出Observation Date、Publication Date、Prediction Date。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-22)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Financial Text-to-SQL](Study%20topics/financial-text-to-sql.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：限定 3 家同业公司、3 个已完成财政年度；选择 Revenue / Operating Income / Assets。获取 SEC Company Facts，保存原始快照、CIK、来源和下载时间；缺字段显式标识。

如何验证：按SEC访问要求限速并标识客户端；tiny fixture验证解析、重复下载可重复执行，原始数据不被清洗覆盖。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-22)

<a id="guide-day-23"></a>

## Day 23 · 周三 11/4

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-23)

### 09:00–10:30 · Coding

[Async](Study%20topics/async.html); [Concurrency](Study%20topics/concurrency.html); [Parallelism](Study%20topics/parallelism.html); [GIL](Study%20topics/gil.html); [Race Conditions](Study%20topics/race-conditions.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Purged walk-forward

讲解：[Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [运行Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb)

具体实验：Change the horizon from 5 to 10 and observe which training origins are purged. Draw origin and label-end timelines. Compare expanding and fixed-width training windows.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 23 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2168 · Purged Walk-Forward Cross-Validation](https://quantvault.org/problems.html?id=2168) · Machine Learning · Hard

先修：Purging排除信息区间重叠的训练样本；Embargo是额外隔离期，长度取决于标签和依赖。

本次范围：Advanced: diagram only。用时间轴解释训练标签与验证区间重叠时需要purging；只画窗口和gap，不要求完整实现。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-23)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Text-to-SQL Evaluation and Data Quality](Study%20topics/text-to-sql-evaluation-and-data-quality.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：建 companies、filings、financial_facts；保留 accession、filed date、period、unit、tag。定义 Revenue/Operating Margin 的年度口径和修订选择视图。

如何验证：唯一键/单位/期间检查用查询测试，不依赖未强制执行的声明约束；duration与instant指标分开处理。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-23)

<a id="guide-day-24"></a>

## Day 24 · 周四 11/5

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-24)

### 09:00–10:30 · Coding

[Indexes](Study%20topics/indexes.html); [EXPLAIN](Study%20topics/explain.html); [Query Optimization](Study%20topics/query-optimization.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Expanding versus rolling windows

讲解：[Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [运行Notebook](notebook/11_time_series_splits_walk_forward_validation_temporal_leakage_forecast_horizons.ipynb)

具体实验：Change the horizon from 5 to 10 and observe which training origins are purged. Draw origin and label-end timelines. Compare expanding and fixed-width training windows.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 24 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2150 · Leak-Free Feature Standardization in Walk-Forward Validation](https://quantvault.org/problems.html?id=2150) · Machine Learning · Medium

先修：先读Scaling与Pipeline；只写关键伪代码，沿用本地Notebook实验。

本次范围：Implementation sketch。在每个时间fold内fit预处理，只transform后续窗口；检查扩展窗口与滚动窗口差别。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-24)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Text-to-SQL Evaluation and Data Quality](Study%20topics/text-to-sql-evaluation-and-data-quality.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：自己写年度趋势、margin计算、公司排名、同比变化查询，练CTE/JOIN/LAG；按确定的最新已申报口径计算。

如何验证：手工核对小样本，防止JOIN膨胀；NULL不当零，零分母有显式行为；本项目不冒充point-in-time回测数据。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-24)

<a id="guide-day-25"></a>

## Day 25 · 周五 11/6

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-25)

### 09:00–10:30 · Coding

[LRU Cache](Study%20topics/lru-cache.html); [Rate Limiter](Study%20topics/rate-limiter.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Target and baseline formula

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 25 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1978 · HAR-RV Model for Realized Variance Forecasting](https://quantvault.org/problems.html?id=1978) · Regression · Medium

先修：Realized Variance是已实现方差；HAR组合日/周/月等历史尺度，详细估计作为扩展。

本次范围：Financial baseline outline。只解释HAR-RV使用不同历史尺度的已实现方差作输入，并定义未来目标、单位和简单基线。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-25)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Agents with Human Approval](Study%20topics/agents-with-human-approval.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：建立20个问题：12 development、8 held-out，包括简单查询、时间比较、含糊口径和不支持请求；参考SQL来自上一日的正确逻辑。

如何验证：拆分相近问法防泄漏；预期结果带排序/数值容差/空结果规则；held-out答案不放prompt。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-25)

<a id="guide-day-26"></a>

## Day 26 · 周一 11/9

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-26)

### 09:00–10:30 · Coding

[Crawler](Study%20topics/crawler.html); [Async](Study%20topics/async.html); [Concurrency](Study%20topics/concurrency.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Lagged feature contract

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 26 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3103 · Combining Features With Different Update Frequencies](https://quantvault.org/problems.html?id=3103) · Machine Learning · Hard

先修：先读Forecast Horizons、Temporal Leakage；频率低不等于可以引用未来发布值。

本次范围：Advanced: feature contract。列出日/周/月数据的发布时间、前向填充规则和缺失状态；不使用预测时不可获得的新值。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-26)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Agents with Human Approval](Study%20topics/agents-with-human-approval.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：首版复用熟悉的LLM API，输入允许的schema、指标口径与development示例，生成结构化query/clarification；通过Snowflake connector执行。

如何验证：能完成一条问句→SQL→表格链路；Cortex Analyst只作后续对照，避免同时维护两个生成方案。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-26)

<a id="guide-day-27"></a>

## Day 27 · 周二 11/10

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-27)

### 09:00–10:30 · Coding

[Run Analytics](Study%20topics/run-analytics.html); [Percentiles](Study%20topics/percentiles.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Ridge development folds

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 27 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1996 · LASSO for Return Prediction with Time-Series Validation](https://quantvault.org/problems.html?id=1996) · Regression · Hard

先修：先复习Lasso、Walk-Forward与基线；具体预测目标使用本地Workbench契约。

本次范围：Advanced: validation outline。只设计Lasso时间序列development folds和特征缩放，不执行整套投资回测。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-27)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Agent Memory and Tool Contracts](Study%20topics/agent-memory-and-tool-contracts.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：用Snowflake只读role限制到批准views，加statement timeout/输出行数限制/单语句检查；含糊Fiscal Year/指标定义先澄清。

如何验证：尝试写操作、非允许表、多语句和高成本请求；权限由DB执行，SQL文本检查不是唯一防线。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-27)

<a id="guide-day-28"></a>

## Day 28 · 周三 11/11

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-28)

### 09:00–10:30 · Coding

[Parallelism](Study%20topics/parallelism.html); [GIL](Study%20topics/gil.html); [Vectorization](Study%20topics/vectorization.html); [Profiling](Study%20topics/profiling.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Select alpha on development only

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 28 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1677 · Ridge Regression Regularization in Time Series](https://quantvault.org/problems.html?id=1677) · Regression · Medium

先修：先复习Ridge与Hyperparameter Tuning。

本次范围：Model selection。解释alpha、训练窗口、预测期限与Ridge稳定性，所有配置在development数据上选择。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-28)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Agent Memory and Tool Contracts](Study%20topics/agent-memory-and-tool-contracts.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：在development修明确错误后锁prompt，跑held-out；比较执行结果而非SQL字符串。保存query id、生成SQL、错误类型与成本/延迟。

如何验证：检查result accuracy、clarification/refusal、无数据；评估不赢baseline也报告。8题仅是小型验证，不宣称市场级准确率。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-28)

<a id="guide-day-29"></a>

## Day 29 · 周四 11/12

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-29)

### 09:00–10:30 · Coding

[LAG](Study%20topics/lag.html); [Date Queries](Study%20topics/date-queries.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Freeze configuration and final test

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 29 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2126 · Comparing Forecasting Models for Daily Asset Returns](https://quantvault.org/problems.html?id=2126) · Machine Learning · Medium

先修：先读Out-of-Sample Evaluation；本题题名是收益，举例可迁移到波动率但不能混淆目标。

本次范围：Evaluation protocol。比较两个预测模型前先冻结数据、日期、指标与基线；最终测试不用于反复调整。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-29)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI-Assisted Experiment Platform](Study%20topics/ai-assisted-experiment-platform.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：选一条扫描量较大的查询读Query Profile，比较过滤/预聚合或修正JOIN前后的结果、扫描量与耗时，记录warehouse和cache状态。

如何验证：结果保持一致；多次重复并区分result cache，不直接把缓存加速归因SQL优化；练实际query profiling。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-29)

<a id="guide-day-30"></a>

## Day 30 · 周五 11/13

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-30)

### 09:00–10:30 · Coding

[Complexity Analysis](Study%20topics/complexity-analysis.html); [Sliding Window](Study%20topics/sliding-window.html); [Heaps](Study%20topics/heaps.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html); [Trees](Study%20topics/trees.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Asset slices and baseline comparison

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 30 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1937 · Cross-Sectional Factor Model Estimation and Diagnostics](https://quantvault.org/problems.html?id=1937) · Regression · Medium

先修：先读Residual：实际值减预测值；核对同一时期和信息可用时间。

本次范围：Case outline。只讨论资产切片、数据口径与回归残差诊断；完整横截面因子模型作为扩展。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-30)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI-Assisted Experiment Platform](Study%20topics/ai-assisted-experiment-platform.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：加离线parser/SQL fixture/guardrail tests到CI；真实Snowflake integration与LLM eval手动触发。整理小型UI或CLI及建库/导入/运行命令。

如何验证：从快照重建数据，演示正确查询、澄清和拒绝三条路径；保存录屏与Snowflake query证据。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-30)

<a id="guide-day-31"></a>

## Day 31 · 周一 11/16

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-31)

### 09:00–10:30 · Coding

[LRU Cache](Study%20topics/lru-cache.html); [Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Notebook-to-tool contract

讲解：[Volatility Forecasting; Out-of-Sample Evaluation](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [运行Notebook](notebook/12_volatility_forecasting_out_of_sample_evaluation.ipynb)

具体实验：Run the synthetic two-asset experiment. Change alpha only using walk-forward development folds, freeze it, then evaluate the locked final test once. Record when features and labels become available.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 31 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Reproducibility、Model Versioning；本地Notebook继续承担数值实验。

本次范围：Case outline: second pass。补齐数据契约、实验追踪、模型产物、推理一致性、监控与回滚，复用Day 03的流程。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-31)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Volatility Forecasting Service](Study%20topics/volatility-forecasting-service.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：Freeze ExperimentConfig for two assets, a five-day forecast horizon, feature timing, baseline and Ridge. Reuse the ML notebook and record data/code versions; the synthetic fixture is not market-performance evidence.

如何验证：核对许可/缺失/重复/时区；signal只用当时可得信息。保存fixture与data hash，声明小样本不代表投资价值。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-31)

<a id="guide-day-32"></a>

## Day 32 · 周二 11/17

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-32)

### 09:00–10:30 · Coding

[JOINs](Study%20topics/joins.html); [GROUP BY](Study%20topics/group-by.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Regime changes

讲解：[Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [运行Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb)

具体实验：Increase block length and compare paired-error confidence intervals. Calibrate a residual interval on the early regime and measure its coverage after the shift.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 32 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 15 分钟 → Notebook实验 20 分钟 → QuantVault 10 分钟；合计45分钟。

- [#1465 · Out-of-Distribution Prediction: Dog Weight Regression](https://quantvault.org/problems.html?id=1465) · Machine Learning · Easy

先修：先读Regime Changes；模型能输出数值不等于有有效外推依据。

本次范围：Conceptual。解释Distribution Shift与Extrapolation，训练范围外的输入为何可能失效，连接金融Regime Change。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-32)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Volatility Forecasting Service](Study%20topics/volatility-forecasting-service.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：Extract train/evaluate/predict functions from the completed ML notebook. Preserve train-only preprocessing and label_end purging; test baseline and Ridge on identical prediction dates.

如何验证：用手算tiny series测零信号、常价格、成本、错位；明确close-to-close执行简化，不宣称真实可成交。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-32)

<a id="guide-day-33"></a>

## Day 33 · 周三 11/18

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-33)

### 09:00–10:30 · Coding

[Debugging](Study%20topics/debugging.html); [Vectorization](Study%20topics/vectorization.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Prediction interval coverage

讲解：[Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [运行Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb)

具体实验：Increase block length and compare paired-error confidence intervals. Calibrate a residual interval on the early regime and measure its coverage after the shift.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 33 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1867 · OLS Coefficient Confidence Intervals](https://quantvault.org/problems.html?id=1867) · Regression · Medium

先修：先读Prediction Intervals；置信区间描述估计参数不确定性，预测区间还含新观测噪声。

本次范围：Uncertainty comparison。区分系数Confidence Interval与单次未来结果Prediction Interval；只说明假设与不同对象，不完成整题证明。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-33)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Evaluation and Regression Pipeline](Study%20topics/evaluation-and-regression-pipeline.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：Persist experiment configuration, model artifact reference, metrics and predictions with data/code/model versions. Insert run and outbox atomically; unique keys prevent duplicate logical publication.

如何验证：重复提交复用run；API重启后状态仍在；run与待投递任务同事务，先用本地数据库和fake queue。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-33)

<a id="guide-day-34"></a>

## Day 34 · 周四 11/19

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-34)

### 09:00–10:30 · Coding

[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html); [Financial Analytics](Study%20topics/financial-analytics.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Paired block uncertainty

讲解：[Regime Changes; Statistical Uncertainty; Prediction Intervals](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [运行Notebook](notebook/13_regime_changes_statistical_uncertainty_prediction_intervals.ipynb)

具体实验：Increase block length and compare paired-error confidence intervals. Calibrate a residual interval on the early regime and measure its coverage after the shift.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 34 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1638 · OLS with Correlated Errors](https://quantvault.org/problems.html?id=1638) · Regression · Medium

先修：先认识Autocorrelation；本题只分析依赖和评价假设，GLS推导作为扩展。

本次范围：Conceptual。说明残差相关时独立样本标准误为何不可靠，连接区块估计与配对比较。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-34)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Evaluation and Regression Pipeline](Study%20topics/evaluation-and-regression-pipeline.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：Run bounded train/evaluate/predict jobs in a worker. Retain the completed notebook outputs as the numerical reference; persist status and artifacts before acknowledgment.

如何验证：HTTP先返回run ID，Worker写result后更新终态；可重复投递但结果幂等。LLM仍未加入，先验证执行链路。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-34)

<a id="guide-day-35"></a>

## Day 35 · 周五 11/20

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-35)

### 09:00–10:30 · Coding

[Vectorization](Study%20topics/vectorization.html); [NumPy Logistic Regression](Study%20topics/numpy-logistic-regression.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Logistic gradient review

讲解：[Logistic Regression; Precision; Recall; F1; Class Imbalance](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [运行Notebook](notebook/06_logistic_regression_precision_recall_f1_class_imbalance.ipynb)

具体实验：Move the threshold from .2 to .8 and compare confusion matrices. Explain why recall here has the same coverage idea as retrieval recall but a different denominator.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 35 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2000 · Logistic Regression: Log-Likelihood, Gradient, and Threshold Selection](https://quantvault.org/problems.html?id=2000) · Regression · Medium

先修：复习Day 07、Day 10；先看本地NumPy Logistic Regression。

本次范围：Derivation sketch。用已学sigmoid和交叉熵写梯度关键步骤，再说明概率与阈值的分工；不要求完整Hessian。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-35)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI Latency and Cost Budget](Study%20topics/ai-latency-and-cost-budget.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：Inject duplicate delivery and worker crashes around result commit. Verify no duplicate published predictions; reject unavailable labels and invalid feature schemas.

如何验证：确认已提交结果不会重复生效、超时有终态、lease过期可恢复；单Worker是故障实验，不声称验证大规模吞吐。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-35)

<a id="guide-day-36"></a>

## Day 36 · 周一 11/23

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-36)

### 09:00–10:30 · Coding

[Binary Search](Study%20topics/binary-search.html); [Prefix Sums](Study%20topics/prefix-sums.html); [Recursion](Study%20topics/recursion.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Artifact and schema

讲解：[Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [运行Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb)

具体实验：Round-trip a tiny model in a temporary directory and verify prediction equality. Change feature ordering deliberately and explain why a schema check is necessary.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 36 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1736 · End-to-End EDA and Linear Regression Pipeline](https://quantvault.org/problems.html?id=1736) · Machine Learning · Medium

先修：EDA是Exploratory Data Analysis；完整网站Coding题不作为额外算法刷题。

本次范围：Case outline。只形成EDA→缺失处理→切分→Pipeline→指标→版本化产物的方案，明确训练与服务使用同一变换。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-36)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI Latency and Cost Budget](Study%20topics/ai-latency-and-cost-budget.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：Expose restricted train/evaluate/predict and submit/status/results tools. Validate assets, dates, model type and feature schema; the LLM explains stored results and never computes or invents metrics.

如何验证：非法资产/未来日期/未知策略被拒绝或澄清；摘要数值来自结果文件；记录实际调用链。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-36)

<a id="guide-day-37"></a>

## Day 37 · 周二 11/24

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-37)

### 09:00–10:30 · Coding

[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Prediction parity

讲解：[Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [运行Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb)

具体实验：Round-trip a tiny model in a temporary directory and verify prediction equality. Change feature ordering deliberately and explain why a schema check is necessary.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 37 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#2152 · ML Model Failures in Production](https://quantvault.org/problems.html?id=2152) · Machine Learning · Medium

先修：先读Serving、Drift、Model Versioning。

本次范围：Production diagnosis。检查输入schema、预处理、版本、真实标签延迟和服务指标；比较离线与线上预测一致性。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-37)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI Security and Reliability](Study%20topics/ai-security-and-reliability.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：Evaluate ten workflow cases plus ML baseline/Ridge MAE and RMSE on paired dates. Record delayed-label behavior, asset/regime slices, queue/worker/LLM latency and real failure outcomes.

如何验证：同config/data版本结果可重现；比较无LLM直接配置基线。故意给失败任务，摘要不可捏造成功。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-37)

<a id="guide-day-38"></a>

## Day 38 · 周三 11/25

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-38)

### 09:00–10:30 · Coding

[API Clients](Study%20topics/api-clients.html); [Race Conditions](Study%20topics/race-conditions.html); [Profiling](Study%20topics/profiling.html); [Debugging](Study%20topics/debugging.html); [Refactoring](Study%20topics/refactoring.html); [Code Review](Study%20topics/code-review.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Model rollback

讲解：[Reproducibility; Model Versioning; Serving; Rollback](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [运行Notebook](notebook/14_reproducibility_model_versioning_serving_rollback.ipynb)

具体实验：Round-trip a tiny model in a temporary directory and verify prediction equality. Change feature ordering deliberately and explain why a schema check is necessary.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 38 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：先复习Day 37，避免一看到低分就直接重训练。

本次范围：Advanced: incident outline。给出定位、可安全回滚、证据保留和复验顺序；说明哪些证据支持数据变化，哪些支持实现故障。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-38)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[AI Security and Reliability](Study%20topics/ai-security-and-reliability.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：Add numerical timing assertions, mock-tool tests and Compose integration to CI. Demonstrate training, prediction, honest baseline comparison and worker recovery; document synthetic versus real-data status.

如何验证：干净环境运行一条命令重建；记录单机与生产分布式部署差距。AWS队列/多Worker作为可选扩展。 同时核对ML notebook的feature timing、label availability、同日期baseline/model指标与artifact版本。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-38)

<a id="guide-day-39"></a>

## Day 39 · 周四 11/26

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-39)

### 09:00–10:30 · Coding

[SELECT](Study%20topics/select.html); [WHERE](Study%20topics/where.html); [ORDER BY](Study%20topics/order-by.html); [LIMIT](Study%20topics/limit.html); [NULL](Study%20topics/null.html); [GROUP BY](Study%20topics/group-by.html); [HAVING](Study%20topics/having.html); [CASE](Study%20topics/case.html); [Subqueries](Study%20topics/subqueries.html); [CTEs](Study%20topics/ctes.html); [EXISTS](Study%20topics/exists.html); [Date Queries](Study%20topics/date-queries.html); [Transactions](Study%20topics/transactions.html); [Constraints](Study%20topics/constraints.html); [Parameterized Queries](Study%20topics/parameterized-queries.html); [PostgreSQL Schema Design](Study%20topics/postgresql-schema-design.html); [Primary and Foreign Keys](Study%20topics/primary-and-foreign-keys.html); [Indexes](Study%20topics/indexes.html); [EXPLAIN](Study%20topics/explain.html); [Query Optimization](Study%20topics/query-optimization.html); [Run Analytics](Study%20topics/run-analytics.html); [Percentiles](Study%20topics/percentiles.html); [Financial Analytics](Study%20topics/financial-analytics.html); [JOINs](Study%20topics/joins.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Baseline explanation mock

讲解：[Supervised and Unsupervised Learning; Baselines](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [运行Notebook](notebook/02_supervised_and_unsupervised_learning_baselines.ipynb)

具体实验：Increase the noise level and compare Ridge with a training-mean predictor. Change the clustering seed and compare group labels with the continuous regression target.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 39 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1866 · OLS Assumptions, Violations, and Diagnostics](https://quantvault.org/problems.html?id=1866) · Regression · Medium

先修：复习Linear Regression、Data Leakage、Multicollinearity。

本次范围：Mock: regression foundations。口述模型、假设、残差与常见失效；重点是预测有效性，不把因果或无偏推断当作自动结论。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-39)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Learning

先读Prompt和Clarifying Questions，再画数据流，最后回答Follow-ups。

### 15:00–16:30 · Project

今天改进：核对三个项目的README、代码版本、eval、测试和demo；各选一个真实失败和取舍。打通证据索引，不新加功能。

如何验证：项目陈述逐条能找到代码或实验；把缺少线上验证与未实现功能明确标注。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-39)

<a id="guide-day-40"></a>

## Day 40 · 周五 11/27

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-40)

### 09:00–10:30 · Coding

[Hash Maps](Study%20topics/hash-maps.html); [LRU Cache](Study%20topics/lru-cache.html); [NumPy Logistic Regression](Study%20topics/numpy-logistic-regression.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Split and evaluation mock

讲解：[Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [运行Notebook](notebook/01_train_validation_test_split.ipynb)

具体实验：Change the random seed and validation fraction. Compare score variability across three synthetic datasets: clean linear, noisy linear, and nonlinear. Explain why a random split is only appropriate for independent observations.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 40 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：复习Day 05、Day 06；缓冲周按错误安排重做。

本次范围：Mock: evaluation and regularization。不看答案各用2分钟回答，再回答一个追问；重点检查验证角色及Lasso限制。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-40)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：冻结三个可演示范围，练讲用户问题→设计→失败→验证→限制；用已有工程经验连接项目决策，明确AI贡献边界。

如何验证：抽问一段AI代码，自己解释并做反例；每个项目都有可运行入口和诚实的完成状态。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-40)

<a id="guide-day-41"></a>

## Day 41 · 周一 11/30

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-41)

### 09:00–10:30 · Coding

[Sorting](Study%20topics/sorting.html); [Binary Search](Study%20topics/binary-search.html); [Linked Lists](Study%20topics/linked-lists.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Split remediation

讲解：[Train / Validation / Test Split](Study%20topics/train-validation-test-split.html) · [运行Notebook](notebook/01_train_validation_test_split.ipynb)

具体实验：Change the random seed and validation fraction. Compare score variability across three synthetic datasets: clean linear, noisy linear, and nonlinear. Explain why a random split is only appropriate for independent observations.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 41 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：复习自己的错题记录。

本次范围：Buffer: remediation。重做R-Squared和Multicollinearity；若已熟悉，用最弱的Regression题替换，不增加新题。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-41)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Cache and API Service](Study%20topics/cache-and-api-service.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：优先处理影响风险数值或流程阻断的剩余问题；复现后小范围修复，不新增模型/框架。

如何验证：重跑相关数值与失败路径回归。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-41)

<a id="guide-day-42"></a>

## Day 42 · 周二 12/1

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-42)

### 09:00–10:30 · Coding

[JOINs](Study%20topics/joins.html); [HAVING](Study%20topics/having.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Input drift

讲解：[Drift; Retraining](Study%20topics/drift-retraining.html) · [运行Notebook](notebook/15_drift_retraining.ipynb)

具体实验：Change the shift size and compare input histograms and mean residuals. Describe how delayed five-day labels postpone performance monitoring.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 42 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3100 · Handling Simultaneous Feature and Target Distribution Shift](https://quantvault.org/problems.html?id=3100) · Machine Learning · Hard

先修：先读Drift；概念分析，不要求完成完整分布适配项目。

本次范围：Advanced: monitoring outline。分别讨论Feature Distribution与Target Distribution变化，以及标签何时才能观测。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-42)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Queues and Job Scheduler](Study%20topics/queues-and-job-scheduler.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：补足未完成AWS部署/OIDC/release验证；已完成则演练重启和rollback、检查资源清理。

如何验证：保存真实运行证据；无账户则保留未部署标识。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-42)

<a id="guide-day-43"></a>

## Day 43 · 周三 12/2

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-43)

### 09:00–10:30 · Coding

[Queues](Study%20topics/queues.html); [Key-Value Store](Study%20topics/key-value-store.html); [TTL](Study%20topics/ttl.html); [Rate Limiter](Study%20topics/rate-limiter.html); [Crawler](Study%20topics/crawler.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Delayed-label monitoring

讲解：[Drift; Retraining](Study%20topics/drift-retraining.html) · [运行Notebook](notebook/15_drift_retraining.ipynb)

具体实验：Change the shift size and compare input histograms and mean residuals. Describe how delayed five-day labels postpone performance monitoring.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 43 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：复习Day 37、Day 38、Day 42。

本次范围：Buffer: incident replay。重新解释真实标签延迟、预处理故障与数据变化的排查；依据错题补漏。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-43)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：修复最重要的期间/单位/重复行或SQL错误；修正后使用新验证问题，避免把反复调试的held-out继续称独立测试。

如何验证：核对参考结果与权限，重跑integration。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-43)

<a id="guide-day-44"></a>

## Day 44 · 周四 12/3

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-44)

### 09:00–10:30 · Coding

[Window Functions](Study%20topics/window-functions.html); [ROW_NUMBER](Study%20topics/row-number.html); [RANK](Study%20topics/rank.html); [DENSE_RANK](Study%20topics/dense-rank.html); [LAG](Study%20topics/lag.html); [LEAD](Study%20topics/lead.html); [Rolling Aggregations](Study%20topics/rolling-aggregations.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Retraining decision

讲解：[Drift; Retraining](Study%20topics/drift-retraining.html) · [运行Notebook](notebook/15_drift_retraining.ipynb)

具体实验：Change the shift size and compare input histograms and mean residuals. Describe how delayed five-day labels postpone performance monitoring.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 44 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#3322 · Preventing Overfitting and Ensuring Model Robustness](https://quantvault.org/problems.html?id=3322) · Machine Learning · Medium

先修：先读Retraining与Drift。

本次范围：Retraining decision。说明重训练触发条件、候选验证、基线比较和回滚；不把漂移告警等同于部署新模型。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-44)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：修复outbox/claim/worker中断最弱路径；复测重复投递和幂等结果。

如何验证：多次故障实验有可复查日志。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-44)

<a id="guide-day-45"></a>

## Day 45 · 周五 12/4

[当天全部时间与原题](AI_ENGINEER_TRANSITION_PLAN.md#day-45)

### 09:00–10:30 · Coding

[Sliding Window](Study%20topics/sliding-window.html); [Heaps](Study%20topics/heaps.html); [BFS](Study%20topics/bfs.html); [DFS](Study%20topics/dfs.html)。LeetCode题号与候选链接见当天总表。

### 13:30–14:15 · ML

Focus：Monitoring explanation mock

讲解：[Drift; Retraining](Study%20topics/drift-retraining.html) · [运行Notebook](notebook/15_drift_retraining.ipynb)

具体实验：Change the shift size and compare input histograms and mean residuals. Describe how delayed five-day labels postpone performance monitoring.

复习日：围绕当天Focus改变一个参数或复述一个假设，使用Notebook的Review Experiment，不重新完成全部扩展。

<!-- quantvault-day 45 -->

#### 13:30–14:15 · QuantVault Practice

时间分配：讲义与先修 10 分钟 → Notebook实验 15 分钟 → QuantVault 20 分钟；合计45分钟。

- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：仅复习，不再加入未学过的高级模型。

本次范围：Final mock。用自己项目讲目标、数据、基线、切分、指标、失败与下一步；选最弱两题补问。

两题日拆分做题时间。计时结束记录卡点，后续复习替换，不追加时长。[当天题目与复习记录](AI_ENGINEER_QUANTVAULT_PLAN.md#qv-day-45)。

<!-- /quantvault-day -->

### 14:15–15:00 · General & AI System Design

[Transfer Mock: Contract Review Assistant](Study%20topics/transfer-mock-contract-review-assistant.html) · Practice / Review

先不看答案完成设计与口述，再展开Interview Script对照；缓冲日改变一个约束。

### 15:00–16:30 · Project

今天改进：最终核对demo和证据，整理后续迭代顺序。没有阻塞缺陷时用于深挖，不为了凑功能增加范围。

如何验证：说明完成、仅设计、未验证各是什么；周末不补。

[具体前置、成果与项目路线](AI_ENGINEER_PROJECT_ROADMAP.md#project-day-45)



## 讲义阅读方式

先读[Machine Learning Foundations](Study%20topics/ml-foundations-start-here.html)。每页依次阅读学习背景、Question、Key Terms、直观例子、英文Short Answer及中文回答，再完成原有练习。入门阅读计入原有ML时段，不改变日期与课时。

[全部双语讲义](AI_ENGINEER_BILINGUAL_LESSONS.md)。
