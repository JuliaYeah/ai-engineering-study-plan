# Interview answer maintenance

这里保存每日计划的623题答案源文件。学习正文为英文，操作说明为中文。

## 数据与生成

- `01-foundations.txt` 保存最初139题的口述稿；`foundation-details.txt` 为每题补充独立详解与追问。
- `02-engineering.txt` 至 `07-additional.txt` 每行依次为题号、口述稿、详解、追问、追问答案，以竖线分隔。正文内不要使用竖线。
- `reuse.json` 是逐项确认的重复问题映射，不是缺失答案的通用补全器。变体条件在 `../interview-answers.cjs` 中单独补充；没有完整答案会使构建失败。
- `reference.py` 的 `BEGIN Qxxx` / `END` 段落直接嵌入对应题目；标准库与 NumPy 教学示例，不访问外部服务。部分题目缺少完整契约，代码中注明示例约定。
- 原始题目、来源、日期和时段继续从 `../original-plan.md` 读取。生成输出中的答案不要直接编辑，否则下次构建会被源文件覆盖。

## 重新生成与验证

在仓库根目录执行：

```powershell
node study-tools/build.cjs
node study-tools/validate.cjs
.study-venv/Scripts/python.exe study-tools/answers/test_reference.py
node study-tools/verify-interview-answers.cjs
```

浏览器验证使用本机 Edge 和已配置的 Playwright 路径。换机器时需调整 `verify-interview-answers.cjs` 中的运行时路径。Python 示例要求 Python 3.11+、NumPy；浏览器验证不调用模型。

## 事实边界

行为题只使用已确认的金融工程、Python library 和 Risk Copilot 背景。缺少的事件、指标、客户反馈和组织影响标为需要补充，不能直接当作已发生的面试故事。未来项目和部署成果采用条件式表述。

对只有标题或缺少代码的原题，答案说明缺失条件，并给出可执行的思考方法；不编造公司原题。Q614 原仓库验证时不可用。Q599 与 Q619 分别保留题库版本和当前链接版本的不同范围。

技术来源链接放在有关题目内。外部文档核对日期为2026-10-04；不宣称有一份永远适用的唯一最佳架构或供应商价格。

## 验证范围

结构校验覆盖全部623题的题目、每日分配、答案字段、MD/HTML一致性、本地链接与默认折叠。参考代码测试覆盖边界、独立基准、数值梯度、缓存一致性及错误路径。网页在1280px桌面和390px、320px手机宽度检查。

代码是教学参考，不是完整生产服务；测试通过不等于云部署、真实负载、临床或金融业务验证已经完成。原有15个学习notebook未因答案生成而更改实验代码。
