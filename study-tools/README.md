# 学习资料维护

内容源：`coding.cjs`、`sql.cjs`、`ml.cjs`、`design.cjs`、`concepts.cjs`。`build.cjs`生成三个MD/HTML、Topic Library和notebooks，`enrich.cjs`补充独立ML条目和技术参考。

`original-plan.md`与`original-roadmap.md`是本次更新前的只读输入快照，用于保留623条原题、LeetCode链接与项目基础路线；它们不是当前学习入口。当前入口在仓库根目录。

## 生成与检查

```powershell
node study-tools/build.cjs
node study-tools/validate.cjs
.\.study-venv\Scripts\python.exe study-tools/verify_notebooks.py
```

重新生成时，未修改cell source的notebook保留运行输出；修改过的notebook需要再次执行验证。`validation.json`核对日期、课时、题库与本地链接；`notebook-validation.json`记录独立kernel执行结果。`requirements-lock.txt`记录本次验证环境的确切版本。

`preview.cjs`是当前机器上的可选浏览器检查，使用已安装Edge和Codex提供的Playwright；不影响资料本身运行。页面是本地静态HTML，无CDN或服务器依赖。

## 来源与范围

## 双语讲义维护

## QuantVault排期维护

`quantvault.cjs`在生成末尾更新总表、学习指南、ML讲义链接与`AI_ENGINEER_QUANTVAULT_PLAN.md/html`。选题元数据在`quantvault-selected.txt`，日期、先修、分段范围与分钟数在`quantvault-schedule.cjs`。只加入Regression与Machine Learning，按已有Pro权限执行。实时目录共264题，本轮47道核心题、45次学习时段、54次练习；其余217题作扩展，并不声称全量排期。

单独更新可运行`node study-tools/quantvault.cjs`；核对可运行`node study-tools/validate-quantvault.cjs`。若单独更新双语讲义，再运行QuantVault模块恢复关联导航。Notebook实验代码、原623题与原LeetCode链接保持不变；QuantVault共享原45分钟ML时段。

`bilingual-lessons.cjs`在生成末尾为252页加入Question、Key Terms、直观例子、英文Short Answer和中文回答。中文内容来自`lesson-zh.txt`、`concept-zh.txt`与`design-zh.txt`；ML独立主题的英文解释在该模块中维护。`ml-primer.cjs`生成零基础入口，并为15个notebook添加导读，不修改实验代码。

可在仓库根目录运行`node study-tools/bilingual-lessons.cjs`单独更新讲义。全文Markdown为`AI_ENGINEER_BILINGUAL_LESSONS.md`。原有深入材料保留在HTML折叠区；题库、日期与课时保持原值。

题型按仓库interview/questions整理，技术解释参考各页列出的官方资料与公开讲义，问答脚本与练习为原创整理。没有可验证的面试出现频率数据，因此页面使用“核心主题”而不声称“统计最高频”。课程章节未擅自指定，以用户实际网课进度为准。

本次生成的是学习资料与未来项目任务。没有改Risk Copilot代码、部署AWS资源或运行付费LLM/Snowflake实验。
