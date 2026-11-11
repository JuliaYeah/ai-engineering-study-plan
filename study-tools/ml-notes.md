# ML 讲义

`bilingual-lessons.cjs`把这里的内容放进Topic页面的“讲义”部分（在Key Terms和Short Answer之间），也写进`AI_ENGINEER_BILINGUAL_LESSONS.md`。

- 每个`## `是一个主题，名字和`manifest.json`里的一致。合并的主题（例如Data Leakage; Scaling; scikit-learn Pipelines）按各部分分别查找，单独的页面（例如Data Leakage）也用同一份
- `zh:`一行是中文名，`en:`一行是英文Short Answer。一个合并主题的每个部分都写了，才替换原来的Short Answer
- 其余是讲义正文，小标题用`#### `，可以用列表、表格和代码块

## Data Leakage

zh: 数据泄漏
en: Data leakage is when information that wouldn't be available at prediction time gets into training or model selection, so offline scores look better than what you'll see in production. There are two broad types: target leakage, where a feature contains the answer or something derived from it, and train-test contamination, where test data influences training - for example fitting a scaler on the full dataset, letting the same customer appear in both train and test, or tuning on the test set. To prevent it, I split first, fit all preprocessing inside a pipeline on the training folds only, check that every feature is available at prediction time, split by time or by group when the data needs it, and use the test set only once at the end.

数据泄漏是训练或挑选模型时，用到了预测那一刻拿不到的信息。结果是离线分数很好看，上线后变差。常分为 2 大类，细分的话常见 5 种。

#### 两大类

| 大类 | 英文 | 意思 |
| --- | --- | --- |
| 目标泄漏 | Target leakage | 特征里包含了预测时拿不到的、和答案直接相关的信息 |
| 训练-测试污染 | Train-test contamination | 测试数据的信息通过某种途径影响了训练过程 |

#### 常见的 5 种细分

1. 预处理泄漏（属于训练-测试污染）：标准化、填缺失值、编码等步骤用了全部数据来拟合
   - 例：用训练集 + 测试集一起算平均值
   - 解决：用 Pipeline，只在训练部分拟合
2. 目标泄漏（Target leakage）：特征本身包含答案或答案的衍生信息
   - 例：预测用户是否会退款，特征里有“退款处理时长”
   - 例：预测明天股价，特征里有明天的价格
   - 解决：逐个检查特征，预测时刻真能拿到吗
3. 时间泄漏（Temporal leakage）：用未来的数据预测过去，或者随机切分时间序列数据
   - 例：用 12 月的数据训练，去预测 11 月
   - 例：财报的报告期是 3 月 31 日，但 5 月才公布，按报告期对齐就提前用了它
   - 例：预测未来 5 日波动率，训练集最后几天的标签要用到测试期的收益
   - 解决：按时间切分，用 TimeSeriesSplit，标签跨几天就留几天空隙（`gap=5`）；特征按实际公布时间对齐
4. 重复 / 分组泄漏（Duplicate / group leakage）：同一个人、同一张图、同一批次的数据，同时出现在训练集和测试集
   - 例：同一个病人的多条记录，一部分在训练集，一部分在测试集，模型学会认人而不是学规律
   - 解决：按分组切分，用 GroupKFold
5. 选择过程泄漏（Selection leakage）：特征选择、调参、模型挑选时用到了测试集
   - 例：先用全部数据筛选“和标签相关性最高的特征”，再切分训练/测试
   - 例：反复根据测试集分数调参，等于间接拟合了测试集
   - 解决：特征选择放进 Pipeline，调参只用验证集，测试集最后只用一次

#### 总结对照

| 泄漏类型 | 一句话 | 怎么防 |
| --- | --- | --- |
| 预处理泄漏 | 偷看测试集算统计量 | Pipeline |
| 目标泄漏 | 把答案当输入 | 检查每个特征的可得性 |
| 时间泄漏 | 用未来预测过去 | 按时间切分，留空隙 |
| 分组泄漏 | 同一对象跨训练/测试 | GroupKFold |
| 选择泄漏 | 用测试集挑特征或调参 | 测试集只用一次 |

#### 怎么发现可能有泄漏

- 分数好得不真实，例如波动率预测的误差远低于所有基线
- 某一个特征的重要性远高于其他特征：去查它是怎么算出来的、什么时候能拿到
- 离线分数好，上线或换一段新的时间后明显变差
- 删掉一个可疑特征后分数大幅下降：说明分数主要靠它，要确认它在预测时真的可得

## Scaling

zh: 特征缩放
en: Scaling puts numeric features on comparable ranges. It matters for models that use distances or penalize coefficient size, such as k-NN, SVMs, PCA and Ridge or Lasso, and it helps gradient-based training converge; tree-based models generally don't need it. StandardScaler subtracts the mean and divides by the standard deviation, MinMaxScaler maps each feature to a fixed range, and RobustScaler uses the median and interquartile range when there are outliers. The key rule is to fit the scaler on training data only and reuse the same fitted parameters on validation, test and production data.

特征缩放把不同量纲的数值特征变到可比较的范围。比如过去 20 日波动率大约是 0.2，日成交量大约是 1,000,000；不缩放的话，很多模型会被数值大的特征主导。

#### 哪些模型需要，哪些不需要

| 模型 | 要不要缩放 | 原因 |
| --- | --- | --- |
| k-NN、K-means、SVM | 需要 | 靠距离计算，数值大的特征主导距离 |
| Ridge、Lasso、带正则的逻辑回归 | 需要 | 惩罚按系数大小算，尺度不同惩罚就不公平 |
| PCA | 需要 | 方差大的特征会主导主成分 |
| 神经网络等用梯度下降训练的模型 | 需要 | 尺度相近收敛更快、更稳 |
| 普通线性回归（OLS） | 预测不变 | 但系数大小会变，比较系数前要缩放 |
| 决策树、随机森林、梯度提升 | 不需要 | 按阈值切分，单调变换不改变切分结果 |

#### 常见的 4 种方法

| 方法 | 怎么算（参数都来自训练集） | 什么时候用 |
| --- | --- | --- |
| StandardScaler | (x − 均值) / 标准差 | 默认选择 |
| MinMaxScaler | (x − 最小值) / (最大值 − 最小值)，压到 [0, 1] | 需要固定范围的输入；对异常值敏感 |
| RobustScaler | (x − 中位数) / 四分位距（IQR） | 有异常值，例如金融收益的厚尾 |
| 对数变换 | log(1 + x) | 右偏的正数特征，例如成交量、市值；常和上面的方法一起用 |

注意 Normalizer 是把每一行缩放到长度 1，不是按列缩放，面试里容易混。

#### 关键规则：只在训练集上 fit

1. 在训练集上 fit：算出均值和标准差（或者最小值、最大值等）
2. 用同一组参数 transform 训练集、验证集、测试集和线上数据
3. 把 fit 好的 scaler 和模型一起保存，线上不重新 fit

例：训练集里 20 日波动率的均值是 0.20，标准差是 0.05。测试集里一个 0.30 的值变成 (0.30 − 0.20) / 0.05 = 2.0。测试集不能用自己的均值重新算，否则同一个 0.30 在训练集和测试集里会变成不同的数。

```python
scaler = StandardScaler().fit(X_train)   # 只用训练集算均值和标准差
X_train_s = scaler.transform(X_train)
X_test_s = scaler.transform(X_test)      # 用训练集的参数，不重新 fit
```

实际项目里不手写这三行，而是把 scaler 放进 Pipeline（见下面 scikit-learn Pipelines）。

#### 常见错误

- 在全部数据上 fit 再切分：预处理泄漏，测试集的均值和标准差进了训练
- 测试集单独 fit：训练和测试用了两套标准，同一个原始值变成不同的数
- 时间序列用全期的均值和标准差：等于用了未来的数据。需要滚动标准化时，只用当时之前的窗口
- 把 one-hot 这类 0/1 特征也一起标准化：一般不需要，用 ColumnTransformer 只对数值列缩放
- 对目标 y 缩放后忘记变换回去：报告的误差单位就错了

## scikit-learn Pipelines

zh: 流水线
en: A scikit-learn Pipeline chains preprocessing steps and a final model into one estimator. When you call fit, each step is fit on the training data and transforms it for the next step; predict only applies the already-fitted transforms. So inside cross-validation or a grid search, preprocessing is refit on each training fold, which prevents preprocessing leakage, and you can tune preprocessing and model parameters together using the step name, two underscores and the parameter name, like ridge__alpha. It also gives you one object to save, so training and serving apply the same transformations. It doesn't fix features that already contain future information, and you still need the right splitter, such as TimeSeriesSplit or GroupKFold.

Pipeline 把多个步骤（预处理 → 模型）串成一个对象。这个对象用起来和一个模型一样，有 fit、predict、score。

#### 怎么工作

- fit(X, y)：前面每一步依次 fit_transform，把结果传给下一步；最后一步（模型）fit
- predict(X)：前面每一步只 transform，用的是训练时 fit 出来的参数，不重新 fit；最后一步 predict
- 放进 cross_val_score 或 GridSearchCV 时：每个训练折都重新 fit 整条 Pipeline，验证折只做 transform 和 predict

#### 为什么用

1. 防预处理泄漏：交叉验证时，缩放、填缺失值、特征选择都只在当前训练折里拟合
2. 训练和线上一致：保存一个 Pipeline 对象，线上调用同一个 predict，不会漏掉或改错某一步
3. 预处理和模型一起调参：参数名写成`步骤名__参数名`，例如`ridge__alpha`
4. 代码短，不用在每个折里手动重复预处理

#### 例子：错误写法和正确写法

```python
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge
from sklearn.model_selection import GridSearchCV, TimeSeriesSplit

# 错：用全部数据算均值和标准差，再切分
X_scaled = StandardScaler().fit_transform(X)
X_train, X_test = X_scaled[:800], X_scaled[800:]

# 对：先按时间切分，scaler 放进 Pipeline
X_train, X_test, y_train, y_test = X[:800], X[800:], y[:800], y[800:]
pipe = make_pipeline(StandardScaler(), Ridge())   # 步骤名自动是 standardscaler、ridge
search = GridSearchCV(pipe, {"ridge__alpha": [0.1, 1, 10]}, cv=TimeSeriesSplit(n_splits=5))
search.fit(X_train, y_train)    # 每个训练折里重新 fit scaler
search.score(X_test, y_test)    # 测试集最后只用一次
```

数值列和类别列要分别处理时，用 ColumnTransformer，再放进 Pipeline：

```python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.linear_model import Ridge

pre = ColumnTransformer([
    ("num", StandardScaler(), ["vol_20d", "volume"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["sector"]),
])
pipe = Pipeline([("pre", pre), ("model", Ridge())])   # 调参时写 model__alpha
pipe.fit(train_df, y_train)
```

#### Pipeline 防不了什么

| 问题 | 为什么防不了 | 怎么办 |
| --- | --- | --- |
| 目标泄漏 | 特征本身就含答案，Pipeline 只管拟合在哪些数据上做 | 逐个检查特征在预测时能不能拿到 |
| 时间泄漏 | 怎么切分由 cv 决定，不由 Pipeline 决定 | 时间序列用 TimeSeriesSplit |
| 分组泄漏 | 同一对象跨训练和测试，也是切分的问题 | 用 GroupKFold |
| 反复看测试集调参 | 测试集是你自己在用 | 调参只用交叉验证，测试集只用一次 |

#### 常见错误

- 在 Pipeline 外面先做特征选择（例如 SelectKBest），再交叉验证：选择过程泄漏，应该把它放进 Pipeline
- 时间序列用默认的 KFold：它会用后面的折训练、预测前面的折，等于用未来预测过去
- 只保存模型，不保存整条 Pipeline：线上的预处理和训练时不一致
