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

## 日期、刷题排期与文件位置

- `reschedule.cjs` - 在`original-plan.md`和`original-roadmap.md`的快照上应用当前排期：Day 1改为`top150-schedule.json`里的`start`（周一），刷题时段改为08:30–10:30共2小时，并把LeetCode Top Interview 150与计划原题混合排入（Hard在最后）。`build.cjs`、`validate.cjs`、`verify-interview-answers.cjs`都经过它读取快照
- `top150-schedule.json` - 排期数据：每天的计划原题、Top 150题、复习题，以及150题的标题、难度和专题。改排期只改这个文件，再运行`node study-tools/build.cjs`
- `layout.cjs` - 学习指南留在仓库根目录，其余报告（`AI_ENGINEER_TRANSITION_PLAN`、`PROJECT_ROADMAP`、`QUANTVAULT_PLAN`、`BILINGUAL_LESSONS`、`TOP150_SCHEDULE`）放在`Reports/`。生成脚本仍按“全部在根目录”工作，引入`layout.cjs`后，运行期间文件临时回到根目录，退出时自动放回`Reports/`并修好链接
- 重新生成会清空notebook的运行输出，之后运行`verify_notebooks.py`重新执行
- 学习指南与每日时间表的分工由`build.cjs`生成：总览（日期与工时、项目计划、Topic总览、规则、课程与题库说明）和“每日入口”（每天一个链接，指向时间表当天位置）写进`AI_ENGINEER_DAILY_LEARNING_GUIDE`；`AI_ENGINEER_TRANSITION_PLAN`只放每天的内容，并加上每天的“学习提示”（ML实验、设计读法、项目任务）。QuantVault的总说明只进指南，每天的题目只进时间表
- `server.cjs` - 本地服务器（`start-server.bat`启动，默认`http://127.0.0.1:5510`，只监听本机）：提供页面，保存时间表里的勾选和课程名，并提供“从GitHub拉取”和“推送到GitHub”两个按钮。不要用5500，那是VS Code的Live Server，不能保存
- `progress.cjs` - 进度的读写和Markdown镜像：`study-progress.json`是进度的唯一来源（每行一项、按键排序、没有时间戳，两台设备改不同项时能干净合并），时间表Markdown里的☐/☑和`Online Course [____]`由它按进度改写。`build.cjs`重新生成时也会按`study-progress.json`写回，所以重新生成不会丢进度
- 勾选框的键是“当天锚点 + 这一项文字的哈希”：改了某一项的文字（比如换了题），它的旧勾选就不再对应
- 两个按钮只处理`study-progress.json`和时间表Markdown两个文件：拉取是提交本地进度后`git pull --rebase`，推送是在此基础上再`git push`。只有这两个文件冲突时才自动合并（以共同祖先为基准逐项三方合并，一台设备取消的勾不会被另一台复活）；其他文件冲突会中止并提示，不会替你决定
- 时间表13:30那一行（ML + QuantVault）由`build.cjs`用`quantvault-day.cjs`的数据直接写出：讲义、Notebook、QuantVault各一行，标着分钟数，题目带勾选框。所以改了`quantvault-selected.txt`或`quantvault-schedule.cjs`之后要运行`node study-tools/build.cjs`；单独运行`quantvault.cjs`只更新QuantVault排期页和指南里的总说明，不再改时间表
