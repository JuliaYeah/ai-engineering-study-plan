const fs=require('fs');
const coding=require('./coding.cjs'),sql=require('./sql.cjs'),ml=require('./ml.cjs'),design=require('./design.cjs'),concepts=require('./concepts.cjs');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const notes=new Map();
for(const file of ['lesson-zh.txt','concept-zh.txt','design-zh.txt'])for(const line of fs.readFileSync(`${__dirname}/${file}`,'utf8').split(/\r?\n/)){if(!line.trim())continue;const i=line.indexOf('|');notes.set(line.slice(0,i),line.slice(i+1));}
const focused=new Map(`
Supervised and Unsupervised Learning|Supervised learning fits a mapping from features to known targets. Unsupervised learning finds structure without a specified target; clusters are not automatically useful prediction classes.
Data Leakage|Leakage lets training use information that would be unavailable at prediction time. Fit preprocessing on training data only and check feature publication times.
Bias-Variance|An overly restricted model misses patterns; an overly flexible model is sensitive to its training sample. Compare training and validation errors under an appropriate evaluation protocol.
Overfitting|Overfitting means learning sample-specific noise rather than generalizable patterns. Strong training performance with weak held-out performance is a warning, not a complete diagnosis.
Regularization|Regularization penalizes model complexity. Ridge shrinks coefficients with an L2 penalty; Lasso uses an L1 penalty and can set coefficients to zero. Select strength using validation data.
Scaling|Scaling puts numerical features on comparable scales. Fit the scaler only on training data and apply the same transformation at prediction time.
Linear Regression|Linear regression predicts a numerical target using an intercept and weighted features. Fit weights by minimizing an objective such as squared error; evaluate on unseen data.
Logistic Regression|Logistic regression maps a linear score through a sigmoid to estimate a binary-class probability. A threshold converts that probability into a decision.
Decision Trees|Decision trees repeatedly split features into regions and predict within a leaf. Restrict depth or leaf size to reduce overfitting.
Random Forests|A random forest combines trees trained with sample and feature randomness. Averaging can reduce variance, but it does not prevent leakage or guarantee extrapolation.
Gradient Boosting|Gradient boosting adds models sequentially to reduce the current objective. Tune learning rate, depth and iteration count using validation data.
scikit-learn Pipelines|A pipeline chains preprocessing and prediction. During cross-validation it fits preprocessing inside each training fold, but cannot fix future-looking features.
Cross-Validation|Cross-validation compares performance across multiple training and validation folds. Choose folds that respect time, entity groups and dependence; keep final testing separate.
Hyperparameter Tuning|Hyperparameters configure learning rather than being fitted as model coefficients. Select configurations using validation or cross-validation, not the final test set.
Feature Engineering|Feature engineering turns available raw data into model inputs. Every feature must be computable at prediction time and transformed consistently in training and serving.
Class Imbalance|Class imbalance means some labels are rare. Accuracy can hide missed positives; compare precision, recall and suitable baselines under the actual prevalence.
MAE|MAE is the mean absolute prediction error in target units. It weights each error linearly and needs a meaningful baseline for interpretation.
RMSE|RMSE is the square root of mean squared prediction error. It is in target units and reacts more strongly to large errors than MAE.
Precision|Precision is true positives divided by all predicted positives. It measures how often a positive prediction is correct, at a specified threshold.
Recall|Recall is true positives divided by all actual positives. It measures coverage; it does not measure the purity of predicted positives.
F1|F1 is the harmonic mean of precision and recall. It ignores true negatives and does not by itself encode the business costs of errors.
PR-AUC|Precision-recall curves compare precision and recall across thresholds. State the integration convention, such as average precision, and compare on the same prevalence.
ROC-AUC|ROC-AUC measures positive-negative ranking across thresholds. It does not assess probability calibration or determine a business decision threshold.
Calibration|A calibrated probability of 0.7 corresponds to about 70% positives among comparable predictions over an appropriate evaluation population. Evaluate separately from ranking.
Interpretability|Interpretability explains model behavior using coefficients or suitable explanation methods. An explanation of prediction is not proof of causation.
Feature Importance|Feature importance measures how a feature contributes under a specific method. Correlated features can share or distort importance; examine held-out behavior.
Time-Series Splits|Train on earlier observations and validate on later ones. Respect label availability and any necessary gap; random splits can leak future information.
Walk-Forward Validation|Walk-forward validation repeatedly advances a chronological training and validation window. Match retraining timing and forecast horizons to intended deployment.
Temporal Leakage|Temporal leakage uses future or not-yet-published information. Check both observation dates and publication times, including revisions.
Forecast Horizons|The forecast horizon specifies how far ahead the target lies. Define target construction, availability and evaluation dates consistently.
Regime Changes|A regime change alters the data-generating environment. Good historical performance may not persist; evaluate across periods and monitor relevant errors.
Volatility Forecasting|Define a future volatility target and point-in-time features. Compare with appropriate historical-volatility baselines using chronological out-of-sample evaluation.
Out-of-Sample Evaluation|Out-of-sample evaluation measures performance on data not used to fit or select the model. In finance, respect chronology and information availability.
Statistical Uncertainty|A performance estimate varies with its evaluation sample. Quantify uncertainty using methods appropriate to dependence and avoid unsupported claims of improvement.
Drift|Input drift is a change in feature distributions; performance drift requires outcome evidence. An alert should trigger investigation rather than automatic replacement.
Retraining|Retraining updates the model using eligible new data. Validate the candidate against the current model and baseline before deployment, with a rollback path.
`.trim().split('\n').map(x=>x.split('|')));
const questions={
'Train / Validation / Test Split':['What are training, validation and test sets, and why should they be separate?','训练集、验证集和测试集各是什么？为什么需要分开？'],
'Regularization':['What is regularization, and how do Ridge and Lasso differ?','什么是正则化？Ridge和Lasso有什么区别？'],
'Linear Regression':['What does linear regression learn, and what does it predict?','线性回归学习什么参数，又预测什么结果？'],
'Logistic Regression':['What does logistic regression predict, and how does a threshold create a class label?','逻辑回归预测什么？怎样用阈值得到类别？']};
function lesson(r){
 const c=coding.find(x=>x[0]===r.name),s=sql.find(x=>x[0]===r.name),m=ml.find(x=>x[0]===r.name),d=design.find(x=>x[0]===r.name),a=concepts.find(x=>x.name===r.name);
 let answer=c?.[3]||s?.[3]||m?.[2]||(d?`${d[6]} ${d[7]} ${d[8]}`:a?.note)||focused.get(r.name);
 // Focused ML explanations are distinct from the grouped notebook overview.
 if(r.module==='ML'&&!m&&focused.has(r.name))answer=focused.get(r.name);
 let zh=notes.get(r.name)||r.name.split('; ').map(n=>notes.get(n)).filter(Boolean).join(' ');
 if(!answer||!zh)throw Error(`Missing bilingual material: ${r.name}`);
 const q=questions[r.name]||(d?[d[3],`请设计 ${r.name} 场景中的系统，说明需求、架构、取舍和失败处理。`]:s?[`How do you use ${r.name} correctly, and what mistakes should you avoid?`,`怎样正确使用 ${r.name}，应避免哪些错误？`]:[`What is ${r.name}, how does it work, and when would you use it?`,`${r.name} 是什么、如何工作、适用于什么情况？`]);
 const isML=r.module==='ML';
 const background=isML?'这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。':s?'这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。':c?'这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。':d?'这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。':'这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。';
 const terms=isML?[['Feature','模型的输入变量，例如过去已观测的波动率。'],['Target','希望预测的结果，例如未来一段时间的波动率。'],['Generalization','模型在没有参与训练的数据上的表现。']]:s?[['Row grain','一行数据代表的业务单位，例如一笔交易或一个账户。'],['NULL','未知或缺失值，不等同于零或空字符串。']]:c?[['Time complexity','输入变大时计算量如何增长。'],['Edge case','空输入、重复值等容易遗漏的边界情况。']]:d?[['Requirement','系统必须满足的行为或性能约束。'],['Trade-off','一个选择带来的收益及付出的代价。'],['Failure mode','依赖或组件出错时的具体表现。']]:[['Evaluation','用预先定义的案例和指标检验系统效果。'],['Constraint','数据、权限、成本或延迟方面的限制。']];
 const example=r.name==='Train / Validation / Test Split'?'例如用1000个彼此独立的历史样本预测数值：600个用于拟合权重，200个用于选择模型和配置，最后200个只用于最终估计。这个比例不是固定规则；金融时间序列通常必须按时间切分。训练像做练习，验证像模拟考试，测试像封存的最后一次考试。':isML?'以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。':s?'用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。':c?'先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。':d?'把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。':'把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。';
 const body=`<section data-bilingual-lesson="v1" lang="zh-CN"><h2>Topic</h2><p lang="en">${esc(r.name)}</p><h2>学习背景</h2><p>${background}</p>${isML?'<p><a href="ml-foundations-start-here.html">先读 Machine Learning Foundations</a></p>':''}<h2>Question</h2><p lang="en">${esc(q[0])}</p><p>${esc(q[1])}</p><h2>Key Terms</h2><dl><dt lang="en">${esc(r.name)}</dt><dd>${esc(zh.split('。')[0])}。</dd>${terms.map(([t,v])=>`<dt lang="en">${t}</dt><dd>${v}</dd>`).join('')}</dl><h2>直观例子</h2><p>${example}</p><h2>Short Answer</h2><p lang="en">${esc(answer)}</p><h2>中文回答</h2><p>${esc(zh)}</p><h2>练习方式</h2><p>先用中文说明含义，再遮住答案，用英文回答上面的Question。最后打开下方材料完成练习；不认识的术语先查定义，不需要先背答案。</p>${r.name==='Regularization'?'<h2>Advanced Question</h2><p lang="en">What is an advantage of Lasso over other linear feature selection methods?</p><p>Lasso相比其他线性特征选择方法有什么优势？这是模型选择与正则化的进阶题，先理解线性回归和系数。</p><h3>Short Answer</h3><p lang="en">Lasso jointly fits a linear model and selects features through an L1 penalty that can set coefficients to zero. This can simplify the model, but selection may be unstable with correlated features. Scale features and choose penalty strength using suitable validation; it is not universally better than other methods.</p><h3>中文回答</h3><p>Lasso把拟合和特征选择结合起来：L1惩罚可以把部分系数压到零，形成较简洁的模型。但相关特征下选择可能不稳定；通常需缩放特征并验证惩罚强度。它并非在任何数据上都优于其他方法。</p>':''}</section>`;
 return {body,answer,zh,q,background,example,terms};
}
function run(records){
 for(const r of records){const file=`Study topics/${r.id}.html`;const html=fs.readFileSync(file,'utf8');if(html.includes('<article>'))fs.writeFileSync(file,html.replace('<article>','<article lang="en">'));}
 const markdown=['# Bilingual Study Lessons','学习顺序：背景 → Question → Key Terms → 例子 → Short Answer → 中文回答 → 实验。','先读[Machine Learning Foundations](Study%20topics/ml-foundations-start-here.html)。'];
 for(const r of records){const item=lesson(r),file=`Study topics/${r.id}.html`;let html=fs.readFileSync(file,'utf8');html=html.replace(/<article lang="en">([\s\S]*?)<\/article>/,(_,original)=>{const saved=original.match(/<details data-original-lesson="v1"><summary>[^<]*<\/summary>([\s\S]*)<\/details>$/);if(saved)original=saved[1];return `<article>${item.body}<details data-original-lesson="v1"><summary>英文深入材料、实验与参考代码</summary><div lang="en">${original.replace(/^<div lang="en">|<\/div>$/g,'')}</div></details></article>`;});
 // Repeated runs also handle the bilingual article generated above.
 if(!html.includes('data-bilingual-lesson'))throw Error(`Failed to update ${file}`);
 fs.writeFileSync(file,html);
 markdown.push(`\n## ${r.name}\n\nTopic: ${r.name}\n\n### 学习背景\n\n${item.background}\n\n### Question\n\n${item.q[0]}\n\n${item.q[1]}\n\n### Key Terms\n\n${item.terms.map(([t,v])=>`- ${t}：${v}`).join('\n')}\n\n### 直观例子\n\n${item.example}\n\n### Short Answer\n\n${item.answer}\n\n### 中文回答\n\n${item.zh}\n\n[深入材料与练习](Study%20topics/${r.id}.html)\n`);
 }
 fs.writeFileSync('AI_ENGINEER_BILINGUAL_LESSONS.md',markdown.join('\n'));
 require('./ml-primer.cjs')();
 const link='<p data-lesson-navigation="v1">讲义按“学习背景 → Question → Key Terms → 例子 → Short Answer → 中文回答”阅读。ML初学者先读 <a href="'+('Study topics/')+'ml-foundations-start-here.html">Machine Learning Foundations</a>，基础阅读计入原有ML时段。</p>';
 for(const file of ['AI_ENGINEER_DAILY_LEARNING_GUIDE.html','Study topics/index.html']){let html=fs.readFileSync(file,'utf8');if(!html.includes('data-lesson-navigation'))html=html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/,`$1${file.startsWith('Study topics/')?link.replace('Study topics/',''):link}`);fs.writeFileSync(file,html);}
 const guide='AI_ENGINEER_DAILY_LEARNING_GUIDE.md';let text=fs.readFileSync(guide,'utf8');if(!text.includes('Machine Learning Foundations'))text+='\n\n## 讲义阅读方式\n\n先读[Machine Learning Foundations](Study%20topics/ml-foundations-start-here.html)。每页依次阅读学习背景、Question、Key Terms、直观例子、英文Short Answer及中文回答，再完成原有练习。入门阅读计入原有ML时段，不改变日期与课时。\n\n[全部双语讲义](AI_ENGINEER_BILINGUAL_LESSONS.md)。\n';fs.writeFileSync(guide,text);
 console.log(`Bilingual lessons: ${records.length}`);
}
module.exports=run;
if(require.main===module)run(JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8')).records);
