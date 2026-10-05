const fs=require('fs');
module.exports=function(){
const content=`<h1>Machine Learning Foundations</h1>
<p>这是一页零基础入口。学习内容的Topic、Question、技术术语与Short Answer保留英文，其余帮助理解的说明使用中文。先读本页，再回到当天讲义；计入原有ML学习时间。</p>
<h2>Topic: What Machine Learning Learns</h2>
<p>你熟悉随机模型：人为指定模型形式，再估计参数。监督学习也可以这样理解：给出历史输入和对应结果，让算法从数据拟合参数，目标是在新输入上预测结果。它不是只会调用LLM，也不等于所有统计建模。</p>
<h3>Question</h3><p lang="en">What are features, targets, models and training?</p><p>特征、目标、模型和训练分别是什么？</p>
<h3>Key Terms</h3><dl><dt>Sample</dt><dd>一个观测样本，例如某个交易日。</dd><dt>Feature / X</dt><dd>输入变量，例如过去20日已观测的波动率。</dd><dt>Target / y</dt><dd>希望预测的真实结果，例如未来5日波动率；定义后才能建立标签。</dd><dt>Model</dt><dd>从输入到预测的函数。</dd><dt>Parameter</dt><dd>模型从训练数据估计的量，例如回归系数。</dd><dt>Training / fit</dt><dd>使用历史输入和结果估计参数。</dd><dt>Prediction / predict</dt><dd>把新输入代入已拟合模型得到预测。</dd></dl>
<h3>直观例子</h3><p>用教学用线性函数预测数值：prediction = b + w1 × x1 + w2 × x2。x1、x2是输入，b、w1、w2是待估参数。假设已拟合b=1、w1=2、w2=3，新样本x1=4、x2=2的预测为15。实际结果可能是17，因此预测误差为−2。这里的数字只用于演示，不是有效金融预测模型。</p>
<h3>Short Answer</h3><p lang="en">Features are model inputs; the target is the outcome to predict. Training estimates model parameters from historical examples. Prediction applies the fitted model to new inputs. Evaluation checks whether those predictions work on suitable unseen data.</p><h3>中文回答</h3><p>特征是输入，目标是要预测的结果。训练用历史样本估计模型参数，预测把新输入代入已拟合模型。评价则检查模型在合适的未见数据上是否有效。</p>
<h2>Topic: Regression vs. Classification</h2><h3>Question</h3><p lang="en">How do regression and classification differ?</p><p>回归和分类有什么区别？</p><p>Regression预测连续数值，例如波动率或价格；Classification预测类别或类别概率，例如某事件是否发生。Linear Regression是数值预测模型；Logistic Regression虽然名字含regression，通常用于分类。Unsupervised Learning没有指定预测目标，例如聚类。</p>
<h3>Short Answer</h3><p lang="en">Regression predicts numerical outcomes. Classification predicts labels or class probabilities. Linear regression is a regression model; logistic regression is commonly a classification model. The task determines the target and suitable evaluation metrics.</p><h3>中文回答</h3><p>回归预测数值，分类预测类别或概率。线性回归用于回归任务，逻辑回归通常用于分类。先定义业务问题与目标，才能选择模型和指标。</p>
<h2>Topic: Loss and Generalization</h2><h3>Question</h3><p lang="en">Why is low training error not enough?</p><p>为什么训练误差低还不够？</p><p>Loss是训练时衡量预测与真实结果差距的目标，例如Squared Error。算法调整参数降低训练损失。Generalization是对新数据的泛化能力；Overfitting表示学到训练样本中的噪声，训练很好而新数据较差。Baseline是简单比较对象，例如训练均值；金融波动率任务还需要合理的历史波动率等基线。</p>
<h3>Short Answer</h3><p lang="en">Training minimizes an objective on observed examples. Low training error may reflect memorization or excessive flexibility. Generalization must be assessed on eligible unseen data and compared with a meaningful baseline.</p><h3>中文回答</h3><p>训练降低已见样本上的目标函数，但低训练误差可能来自过度拟合。必须在没有参与拟合或选择的数据上检查表现，并与合理基线比较。</p>
<h2>Topic: Training, Validation and Test Sets</h2><h3>Question</h3><p lang="en">What roles do training, validation and test sets play?</p><p>训练、验证和测试各承担什么角色？</p><p>Training Set用于拟合参数；Validation Set用于选择模型类型、特征方案和Hyperparameter（例如正则化强度）；Test Set保留到选择完成后作最终估计。反复看测试结果并据此修改模型，相当于把测试集用成验证集。比例没有统一答案；金融数据需尊重时间顺序、披露日期和标签可用时间。</p>
<h3>Short Answer</h3><p lang="en">Fit parameters on training data, choose configurations using validation data, and reserve test data for the final performance estimate. Repeated test-driven adjustments compromise independence. Splits must respect temporal and group dependencies.</p><h3>中文回答</h3><p>训练集拟合参数，验证集选择配置，测试集估计最终效果。反复根据测试结果改模型会破坏独立性。切分需考虑时间、实体分组和样本依赖。</p>
<h2>Topic: Linear Regression, Ridge and Lasso</h2><h3>Question</h3><p lang="en">How are linear regression, Ridge and Lasso related?</p><p>线性回归、Ridge和Lasso是什么关系？</p><p>普通线性回归用输入的加权和预测数值，常通过最小化平方误差拟合。Regularization在目标函数中加入约束复杂度的惩罚。Ridge使用L2平方系数惩罚，倾向于缩小系数；Lasso使用L1绝对值惩罚，可使部分系数变成零，相当于嵌入式Feature Selection。惩罚强度alpha是要验证选择的超参数。相关特征下Lasso选择可能不稳定，不能认为零系数证明变量没有真实影响。</p>
<h3>Short Answer</h3><p lang="en">All three predict with a linear combination of features. Ridge adds an L2 penalty to shrink coefficients; Lasso adds an L1 penalty that can set coefficients to zero. Scale features and select penalty strength through suitable validation. Feature selection does not establish causality.</p><h3>中文回答</h3><p>三者都使用特征的线性组合。Ridge用L2惩罚缩小系数，Lasso用L1惩罚并可能将系数归零。需要缩放特征并验证惩罚强度；特征选择不证明因果关系。</p>
<h2>Topic: How to Classify Interview Questions</h2><p>“What is linear regression?”属于模型基础；“What is the advantage of Lasso…?”属于正则化与特征选择的进阶比较；“Why separate training, validation and test?”属于模型评估方法。MAE、RMSE属于数值预测指标，Precision、Recall属于分类或检索指标，Data Leakage属于评估有效性。它们在同一个ML流程中承担不同职责。</p>
<h2>Practice</h2><ol><li>把你熟悉的金融模型中的输入、参数和输出分别对应到Feature、Parameter和Target。</li><li>用上面的教学公式手算预测，将x1改成5，解释哪个量是输入、哪个量是已经学到的参数。</li><li>解释为什么用未来已实现波动率作输入会泄漏，以及为什么训练集不能替代测试集。</li><li>不看答案，用英文解释Regression与Classification，再用中文举例。</li></ol>
<h2>Sources</h2><ul><li><a href="https://scikit-learn.org/stable/getting_started.html">scikit-learn: fit, predict and evaluation</a></li><li><a href="https://scikit-learn.org/stable/modules/linear_model.html">scikit-learn: linear models</a></li><li><a href="https://scikit-learn.org/stable/modules/cross_validation.html">scikit-learn: cross-validation</a></li></ul><p><a href="index.html">返回Topic索引</a></p>`;
fs.writeFileSync('Study topics/ml-foundations-start-here.html',`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Machine Learning Foundations</title><link rel="stylesheet" href="style.css"></head><body><main>${content}</main></body></html>`);
// Add a bilingual introduction to notebooks without changing code or existing execution outputs.
const manifest=JSON.parse(fs.readFileSync('study-tools/manifest.json','utf8'));
for(const r of manifest.records.filter(r=>r.notebook&&!r.parent)){
 const file=r.notebook.startsWith('notebook/')?r.notebook:`notebook/${r.notebook}`;
 if(!fs.existsSync(file))continue;
 const nb=JSON.parse(fs.readFileSync(file,'utf8'));
 nb.cells=nb.cells.filter(c=>!c.metadata?.bilingual_intro);
 const q=r.name==='Train / Validation / Test Split'?'What roles do training, validation and test sets play?':`What is ${r.name}, and how would you evaluate it?`;
 const source=`## Topic\n\n${r.name}\n\n先读[Machine Learning Foundations](../Study%20topics/ml-foundations-start-here.html)，再读对应[双语讲义](../Study%20topics/${r.id}.html)。\n\n## Question\n\n${q}\n\n本实验中的模型或评估方法是什么？它解决什么问题，又怎样检验效果？\n\n讲义提供Key Terms、直观例子、英文Short Answer及紧接其后的中文回答。先理解问题，再运行下面的代码。\n`;
 nb.cells.unshift({cell_type:'markdown',metadata:{bilingual_intro:true},source:source.split(/(?<=\n)/)});
 fs.writeFileSync(file,JSON.stringify(nb,null,2)+'\n');
}
};
