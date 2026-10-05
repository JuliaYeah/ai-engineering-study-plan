# ML notebooks

基础实验使用本地生成的合成数据，不需要API key、Snowflake或行情下载。它们验证学习概念和计算流程，不是实际市场表现证据。

## 一次性设置

推荐Python 3.12。在仓库根目录运行：

```powershell
py -3.12 -m venv .study-venv
.\.study-venv\Scripts\python.exe -m pip install --no-cache-dir -r notebook/requirements-lock.txt
```

在VS Code中安装Python和Jupyter扩展，打开`.ipynb`，右上角Select Kernel选择`.study-venv\Scripts\python.exe`。不需要激活PowerShell脚本。若已有此环境，直接选择kernel即可。

本次已在当前仓库的`.study-venv`中安装并验证环境，可直接选择它。`requirements-lock.txt`是已验证版本；`requirements.txt`保留允许升级的版本范围。

## 每天怎么用

从[每日学习指南](../AI_ENGINEER_DAILY_LEARNING_GUIDE.html)打开对应实验。先读Learning Goal，再Run All；修改Guided Experiment指定的一个参数并比较结果，最后口述English Check Questions。复习日围绕指南中的Focus使用同一本，不额外增加学习时间。

第一天打开[Train / Validation / Test Split](01_train_validation_test_split.ipynb)，里面已准备Clean Linear、Noisy Linear、Nonlinear三组数据。

## 金融实验边界

Volatility Forecasting notebook中使用两个合成资产，演示未来五个交易日标签、过去20日baseline、purged walk-forward、Ridge选择与最终测试。目标为年化RMS daily returns，不做样本均值扣除。特征使用t及之前；标签在t+5可用。真实项目须替换为版本化数据快照并核对行情调整与可用时间。

教学重跑同一test不等于新的独立验证。真实项目选型完成后冻结test，只用于最后评估。模型不胜baseline时如实保留结果。

## 批量验证

```powershell
.\.study-venv\Scripts\python.exe study-tools/verify_notebooks.py
```

每本使用新的kernel，从头顺序执行。执行结果保留在notebook内；验证摘要见`study-tools/notebook-validation.json`。环境安装需要网络，基础实验运行不需要网络。首次安装耗时不属于每天45分钟实验本身，可使用第一天Review时间完成。
