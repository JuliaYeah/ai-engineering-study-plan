# QuantVault Study Schedule

只含Regression与Machine Learning，按已有Pro权限执行。实时目录于2026-10-04核对，共264个不同题号；本轮47道核心题安排在45个学习日，其余217题作为扩展。网页精选目录不等于全量题库。

每日讲义、Notebook与QuantVault共享45分钟；Coding、Optimization不加入。网站完整题干与官方解答以网站为准。

<a id="qv-day-01"></a>

## Day 01 · 周一 10/5

13:30–14:15 · ML / Regression：讲义20分钟，Notebook15分钟，QuantVault10分钟。

[当天讲义](Study%20topics/train-validation-test-split.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-01)

- [#1962 · Explaining Machine Learning to a Non-Technical Audience](https://quantvault.org/problems.html?id=1962) · Machine Learning · Easy

先修：先读Machine Learning Foundations。

Conceptual：用自己的金融工作解释Feature、Target、Training和Prediction；先不背模型名。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-02"></a>

## Day 02 · 周二 10/6

13:30–14:15 · ML / Regression：讲义20分钟，Notebook15分钟，QuantVault10分钟。

[当天讲义](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-02)

- [#1432 · Linear Regression: Model, Estimation, and When to Use It](https://quantvault.org/problems.html?id=1432) · Regression · Medium
- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：入门页的Linear Regression公式；两题各用约5分钟。

Conceptual：先解释线性函数的输入、系数和数值输出，再用目标→数据→基线→验证组织建模思路。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-03"></a>

## Day 03 · 周三 10/7

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-03)

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Data Leakage与scikit-learn Pipelines。

Case outline：只画Data → Split → Preprocessing → Fit → Evaluate，标出哪些步骤只能看训练集。整题的完整建模方案留到Day 31。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-04"></a>

## Day 04 · 周四 10/8

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/mae-rmse.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-04)

- [#1613 · Loss Function Minimizers and Regression Variants](https://quantvault.org/problems.html?id=1613) · Regression · Medium

先修：先读MAE、RMSE；Loss是训练目标，Metric是评价方式，两者可以不同。

Conceptual：只比较Squared Loss与Absolute Loss，以及均值/中位数对应关系；不要求完成所有回归变体推导。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-05"></a>

## Day 05 · 周五 10/9

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-05)

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy

先修：补读R-Squared = 1 − SSE/SST；它不同于RMSE，样本外可能为负。

Conceptual：先识别训练好、验证差的过拟合，再解释R-Squared衡量相对均值基线的拟合；Cross-Validation细节留到Day 17。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-06"></a>

## Day 06 · 周一 10/12

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-06)

- [#1861 · Linear Regression, Ridge, and Lasso](https://quantvault.org/problems.html?id=1861) · Regression · Medium
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：先读Regularization讲义；L1可归零，L2通常缩小，alpha用验证选。

Comparison：先比较OLS、Ridge与Lasso，再回答Lasso的特征选择优势及相关特征下不稳定的限制。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-07"></a>

## Day 07 · 周二 10/13

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-07)

- [#2606 · Interpreting Logistic Regression Coefficients](https://quantvault.org/problems.html?id=2606) · Machine Learning · Medium

先修：先读Logistic Regression；Odds = p/(1−p)，Log-odds = log(Odds)。

Conceptual：解释线性score→sigmoid→概率；系数影响log-odds，不能直接说概率增加相同数值。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-08"></a>

## Day 08 · 周三 10/14

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-08)

- [#1473 · Precision and Recall in Classification](https://quantvault.org/problems.html?id=1473) · Machine Learning · Medium

先修：先认识Confusion Matrix：实际类别与预测类别的交叉计数。

Worked example：手算一组TP、FP、FN的Precision与Recall；改变阈值，解释误报和漏报。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-09"></a>

## Day 09 · 周四 10/15

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/pr-auc-roc-auc-calibration.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-09)

- [#1666 · Profit-Aware Classification Threshold](https://quantvault.org/problems.html?id=1666) · Machine Learning · Hard

先修：先读Precision、Recall、ROC-AUC与PR-AUC；用每次正确收益/错误损失的小数字例子。

Advanced: scoped calculation：只完成二分类阈值的收益/损失判断。先画PR/ROC曲线的含义，再说明排序指标不能替代决策成本。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-10"></a>

## Day 10 · 周五 10/16

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/pr-auc-roc-auc-calibration.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-10)

- [#3699 · MSE or Cross Entropy: Picking a Loss for a Probabilistic Classifier](https://quantvault.org/problems.html?id=3699) · Machine Learning · Medium

先修：Cross Entropy衡量真实类别被赋予的概率；Brier Score是概率的平方误差。这里不要求证明。

Conceptual：比较数值回归损失与概率分类损失；先读Calibration，说明校准、排序和训练目标是不同问题。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-11"></a>

## Day 11 · 周一 10/19

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-11)

- [#1836 · Controlling Overfitting in Decision Trees and XGBoost](https://quantvault.org/problems.html?id=1836) · Machine Learning · Medium

先修：先读Decision Trees；Boosting细节尚未学，不要求第一次完整作答。

Conceptual：先讨论树深、叶子样本数与过拟合，只做Decision Tree部分；XGBoost部分留到Day 16对照。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-12"></a>

## Day 12 · 周二 10/20

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-12)

- [#2017 · Missing Data Imputation and Regression Pipeline](https://quantvault.org/problems.html?id=2017) · Machine Learning · Medium

先修：先读Imputation：用训练数据确定填充值；Notebook示例仍保留。

Implementation sketch：只写缺失值处理与Scaler放入Pipeline的最小片段；验证预处理没有读取验证集。完整题不要求当日实现。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-13"></a>

## Day 13 · 周三 10/21

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/mae-rmse.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-13)

- [#1625 · Median Regression vs. OLS](https://quantvault.org/problems.html?id=1625) · Regression · Medium

先修：Median Regression对应中位数目标；注意它与均值OLS的差异。

Comparison：比较MAE/Absolute Loss与MSE/Squared Loss，说明异常值为何影响不同；不要求完整Quantile Regression证明。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-14"></a>

## Day 14 · 周四 10/22

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-14)

- [#1431 · Lasso, Ridge, and Elastic Net Comparison](https://quantvault.org/problems.html?id=1431) · Regression · Medium
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：Elastic Net结合L1与L2；Multicollinearity指输入特征近似线性相关。

Comparison：比较Lasso、Ridge与Elastic Net，结合相关特征解释系数稳定性和特征选择。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-15"></a>

## Day 15 · 周五 10/23

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-15)

- [#1670 · Random Forests, Bagging, and Variance Reduction](https://quantvault.org/problems.html?id=1670) · Machine Learning · Medium

先修：先读Random Forests；Bagging是重采样后组合模型。

Conceptual：解释Bagging、随机特征与树平均怎样降低方差，并指出不是所有树都独立。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-16"></a>

## Day 16 · 周一 10/26

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/decision-trees-random-forests-gradient-boosting.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-16)

- [#1743 · Gradient Boosting vs. Random Forests, Batch Normalization, and SGD Momentum](https://quantvault.org/problems.html?id=1743) · Machine Learning · Easy

先修：先读Gradient Boosting；逐步纠正当前损失，与独立树平均不同。

Comparison：只比较Random Forest与Gradient Boosting，并复习Day 11的XGBoost限制；Batch Norm和SGD Momentum作为扩展。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-17"></a>

## Day 17 · 周二 10/27

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/cross-validation-hyperparameter-tuning.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-17)

- [#1746 · Hyperparameter Selection in Machine Learning](https://quantvault.org/problems.html?id=1746) · Machine Learning · Easy

先修：先读Cross-Validation；随机K-fold不能直接用于金融时间序列。

Conceptual：区分模型学到的Parameter与人为选择的Hyperparameter，说明Cross-Validation和最终测试的分工。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-18"></a>

## Day 18 · 周三 10/28

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/cross-validation-hyperparameter-tuning.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-18)

- [#1587 · Hyperparameter Tuning and Diagnosing Flat Out-of-Sample Performance](https://quantvault.org/problems.html?id=1587) · Machine Learning · Medium
- [#1676 · Ridge Regression Hyperparameter Diagnostics](https://quantvault.org/problems.html?id=1676) · Machine Learning · Medium

先修：先读Hyperparameter Tuning；不根据最终测试反复选择配置。

Diagnosis：面对样本外表现平坦，先判断数据、基线、alpha、样本量与验证方差，再决定是否继续调参。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-19"></a>

## Day 19 · 周四 10/29

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-19)

- [#1757 · Limitations of One-Hot Encoding](https://quantvault.org/problems.html?id=1757) · Machine Learning · Easy
- [#1964 · Feature Selection for Return Prediction](https://quantvault.org/problems.html?id=1964) · Machine Learning · Medium

先修：先读Feature Engineering；One-Hot用多个0/1变量表示类别。

Feature strategy：说明One-Hot Encoding的维度与未知类别问题；特征选择也必须在训练/验证流程内完成。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-20"></a>

## Day 20 · 周五 10/30

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/feature-engineering-interpretability-feature-importance.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-20)

- [#3080 · Feature Importance in Tree Models and What a SHAP Value Measures](https://quantvault.org/problems.html?id=3080) · Machine Learning · Medium

先修：SHAP把某个预测相对基准的差异分摊到特征，取决于所用基准与方法。

Conceptual：区分树内Importance、Permutation Importance与SHAP，说明相关特征及因果解释的限制。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-21"></a>

## Day 21 · 周一 11/2

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-21)

- [#1939 · Cross-Validation Leakage in Financial Time Series](https://quantvault.org/problems.html?id=1939) · Machine Learning · Medium

先修：先读Time-Series Splits、Walk-Forward Validation。

Case outline：画时间轴，指出随机切分、提前标准化和重叠目标怎样造成泄漏。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-22"></a>

## Day 22 · 周二 11/3

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-22)

- [#2001 · Lookahead Bias From Universe Membership Leakage](https://quantvault.org/problems.html?id=2001) · Machine Learning · Medium
- [#1980 · Handling Delayed Features in a Regression Model](https://quantvault.org/problems.html?id=1980) · Regression · Medium

先修：Point-in-Time只使用预测时已知信息，期末日期不等于公布日期。

Point-in-time audit：分别检查股票池成员和延迟发布特征；列出Observation Date、Publication Date、Prediction Date。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-23"></a>

## Day 23 · 周三 11/4

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-23)

- [#2168 · Purged Walk-Forward Cross-Validation](https://quantvault.org/problems.html?id=2168) · Machine Learning · Hard

先修：Purging排除信息区间重叠的训练样本；Embargo是额外隔离期，长度取决于标签和依赖。

Advanced: diagram only：用时间轴解释训练标签与验证区间重叠时需要purging；只画窗口和gap，不要求完整实现。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-24"></a>

## Day 24 · 周四 11/5

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-24)

- [#2150 · Leak-Free Feature Standardization in Walk-Forward Validation](https://quantvault.org/problems.html?id=2150) · Machine Learning · Medium

先修：先读Scaling与Pipeline；只写关键伪代码，沿用本地Notebook实验。

Implementation sketch：在每个时间fold内fit预处理，只transform后续窗口；检查扩展窗口与滚动窗口差别。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-25"></a>

## Day 25 · 周五 11/6

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-25)

- [#1978 · HAR-RV Model for Realized Variance Forecasting](https://quantvault.org/problems.html?id=1978) · Regression · Medium

先修：Realized Variance是已实现方差；HAR组合日/周/月等历史尺度，详细估计作为扩展。

Financial baseline outline：只解释HAR-RV使用不同历史尺度的已实现方差作输入，并定义未来目标、单位和简单基线。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-26"></a>

## Day 26 · 周一 11/9

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-26)

- [#3103 · Combining Features With Different Update Frequencies](https://quantvault.org/problems.html?id=3103) · Machine Learning · Hard

先修：先读Forecast Horizons、Temporal Leakage；频率低不等于可以引用未来发布值。

Advanced: feature contract：列出日/周/月数据的发布时间、前向填充规则和缺失状态；不使用预测时不可获得的新值。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-27"></a>

## Day 27 · 周二 11/10

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-27)

- [#1996 · LASSO for Return Prediction with Time-Series Validation](https://quantvault.org/problems.html?id=1996) · Regression · Hard

先修：先复习Lasso、Walk-Forward与基线；具体预测目标使用本地Workbench契约。

Advanced: validation outline：只设计Lasso时间序列development folds和特征缩放，不执行整套投资回测。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-28"></a>

## Day 28 · 周三 11/11

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-28)

- [#1677 · Ridge Regression Regularization in Time Series](https://quantvault.org/problems.html?id=1677) · Regression · Medium

先修：先复习Ridge与Hyperparameter Tuning。

Model selection：解释alpha、训练窗口、预测期限与Ridge稳定性，所有配置在development数据上选择。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-29"></a>

## Day 29 · 周四 11/12

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-29)

- [#2126 · Comparing Forecasting Models for Daily Asset Returns](https://quantvault.org/problems.html?id=2126) · Machine Learning · Medium

先修：先读Out-of-Sample Evaluation；本题题名是收益，举例可迁移到波动率但不能混淆目标。

Evaluation protocol：比较两个预测模型前先冻结数据、日期、指标与基线；最终测试不用于反复调整。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-30"></a>

## Day 30 · 周五 11/13

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-30)

- [#1937 · Cross-Sectional Factor Model Estimation and Diagnostics](https://quantvault.org/problems.html?id=1937) · Regression · Medium

先修：先读Residual：实际值减预测值；核对同一时期和信息可用时间。

Case outline：只讨论资产切片、数据口径与回归残差诊断；完整横截面因子模型作为扩展。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-31"></a>

## Day 31 · 周一 11/16

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-31)

- [#1953 · End-to-End Prediction Modeling Pipeline](https://quantvault.org/problems.html?id=1953) · Machine Learning · Medium

先修：先读Reproducibility、Model Versioning；本地Notebook继续承担数值实验。

Case outline: second pass：补齐数据契约、实验追踪、模型产物、推理一致性、监控与回滚，复用Day 03的流程。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-32"></a>

## Day 32 · 周二 11/17

13:30–14:15 · ML / Regression：讲义15分钟，Notebook20分钟，QuantVault10分钟。

[当天讲义](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-32)

- [#1465 · Out-of-Distribution Prediction: Dog Weight Regression](https://quantvault.org/problems.html?id=1465) · Machine Learning · Easy

先修：先读Regime Changes；模型能输出数值不等于有有效外推依据。

Conceptual：解释Distribution Shift与Extrapolation，训练范围外的输入为何可能失效，连接金融Regime Change。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-33"></a>

## Day 33 · 周三 11/18

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-33)

- [#1867 · OLS Coefficient Confidence Intervals](https://quantvault.org/problems.html?id=1867) · Regression · Medium

先修：先读Prediction Intervals；置信区间描述估计参数不确定性，预测区间还含新观测噪声。

Uncertainty comparison：区分系数Confidence Interval与单次未来结果Prediction Interval；只说明假设与不同对象，不完成整题证明。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-34"></a>

## Day 34 · 周四 11/19

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-34)

- [#1638 · OLS with Correlated Errors](https://quantvault.org/problems.html?id=1638) · Regression · Medium

先修：先认识Autocorrelation；本题只分析依赖和评价假设，GLS推导作为扩展。

Conceptual：说明残差相关时独立样本标准误为何不可靠，连接区块估计与配对比较。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-35"></a>

## Day 35 · 周五 11/20

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-35)

- [#2000 · Logistic Regression: Log-Likelihood, Gradient, and Threshold Selection](https://quantvault.org/problems.html?id=2000) · Regression · Medium

先修：复习Day 07、Day 10；先看本地NumPy Logistic Regression。

Derivation sketch：用已学sigmoid和交叉熵写梯度关键步骤，再说明概率与阈值的分工；不要求完整Hessian。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-36"></a>

## Day 36 · 周一 11/23

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-36)

- [#1736 · End-to-End EDA and Linear Regression Pipeline](https://quantvault.org/problems.html?id=1736) · Machine Learning · Medium

先修：EDA是Exploratory Data Analysis；完整网站Coding题不作为额外算法刷题。

Case outline：只形成EDA→缺失处理→切分→Pipeline→指标→版本化产物的方案，明确训练与服务使用同一变换。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-37"></a>

## Day 37 · 周二 11/24

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-37)

- [#2152 · ML Model Failures in Production](https://quantvault.org/problems.html?id=2152) · Machine Learning · Medium

先修：先读Serving、Drift、Model Versioning。

Production diagnosis：检查输入schema、预处理、版本、真实标签延迟和服务指标；比较离线与线上预测一致性。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-38"></a>

## Day 38 · 周三 11/25

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/reproducibility-model-versioning-serving-rollback.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-38)

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：先复习Day 37，避免一看到低分就直接重训练。

Advanced: incident outline：给出定位、可安全回滚、证据保留和复验顺序；说明哪些证据支持数据变化，哪些支持实现故障。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-39"></a>

## Day 39 · 周四 11/26

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/supervised-and-unsupervised-learning-baselines.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-39)

- [#1866 · OLS Assumptions, Violations, and Diagnostics](https://quantvault.org/problems.html?id=1866) · Regression · Medium

先修：复习Linear Regression、Data Leakage、Multicollinearity。

Mock: regression foundations：口述模型、假设、残差与常见失效；重点是预测有效性，不把因果或无偏推断当作自动结论。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-40"></a>

## Day 40 · 周五 11/27

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/train-validation-test-split.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-40)

- [#1261 · Diagnosing Overfitting and Cross-Validation](https://quantvault.org/problems.html?id=1261) · Machine Learning · Easy
- [#1078 · Advantages of Lasso Over Other Linear Feature Selection Methods](https://quantvault.org/problems.html?id=1078) · Machine Learning · Medium

先修：复习Day 05、Day 06；缓冲周按错误安排重做。

Mock: evaluation and regularization：不看答案各用2分钟回答，再回答一个追问；重点检查验证角色及Lasso限制。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-41"></a>

## Day 41 · 周一 11/30

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/train-validation-test-split.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-41)

- [#1118 · Definition and Range of R-Squared](https://quantvault.org/problems.html?id=1118) · Regression · Easy
- [#1447 · Multicollinearity Consequences in OLS](https://quantvault.org/problems.html?id=1447) · Regression · Easy

先修：复习自己的错题记录。

Buffer: remediation：重做R-Squared和Multicollinearity；若已熟悉，用最弱的Regression题替换，不增加新题。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-42"></a>

## Day 42 · 周二 12/1

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/drift-retraining.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-42)

- [#3100 · Handling Simultaneous Feature and Target Distribution Shift](https://quantvault.org/problems.html?id=3100) · Machine Learning · Hard

先修：先读Drift；概念分析，不要求完成完整分布适配项目。

Advanced: monitoring outline：分别讨论Feature Distribution与Target Distribution变化，以及标签何时才能观测。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-43"></a>

## Day 43 · 周三 12/2

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/drift-retraining.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-43)

- [#3102 · Debugging a Model That Underperforms Live](https://quantvault.org/problems.html?id=3102) · Machine Learning · Hard

先修：复习Day 37、Day 38、Day 42。

Buffer: incident replay：重新解释真实标签延迟、预处理故障与数据变化的排查；依据错题补漏。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-44"></a>

## Day 44 · 周四 12/3

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/drift-retraining.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-44)

- [#3322 · Preventing Overfitting and Ensuring Model Robustness](https://quantvault.org/problems.html?id=3322) · Machine Learning · Medium

先修：先读Retraining与Drift。

Retraining decision：说明重训练触发条件、候选验证、基线比较和回滚；不把漂移告警等同于部署新模型。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

<a id="qv-day-45"></a>

## Day 45 · 周五 12/4

13:30–14:15 · ML / Regression：讲义10分钟，Notebook15分钟，QuantVault20分钟。

[当天讲义](Study%20topics/drift-retraining.html) · [学习指南](AI_ENGINEER_DAILY_LEARNING_GUIDE.md#guide-day-45)

- [#1966 · Framework for Open-Ended Modeling Strategy](https://quantvault.org/problems.html?id=1966) · Machine Learning · Easy

先修：仅复习，不再加入未学过的高级模型。

Final mock：用自己项目讲目标、数据、基线、切分、指标、失败与下一步；选最弱两题补问。

记录Attempt / Key idea / Mistake / Follow-up / Next review。两题日拆分时间，未完成内容用后续复习替换，不追加课时。

## Extension Bank

其余217题作为扩展，不声称已完成全量排期。核心题熟练后选同主题题，替换复习或在本轮结束后学习。

- [Machine Learning](https://quantvault.org/machine-learning-interview-questions.html)
- [Regression](https://quantvault.org/regression-interview-questions.html)
- [All Problems](https://quantvault.org/problems.html)
