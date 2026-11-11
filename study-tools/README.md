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

`bilingual-lessons.cjs`在生成末尾为252页加入Question（只有英文）、Key Terms、英文Short Answer和中文回答。Key Terms每行一个“英文术语：中文解释”；合并的主题（例如Data Leakage; Scaling; scikit-learn Pipelines）每个部分各占一行，链接到它自己的页面。“直观例子”只留在有具体例子的Train / Validation / Test Split页，通用的例子和“练习方式”已删掉。ML主题的完整讲义写在`ml-notes.md`（每个`## `一个主题，`zh:`中文名，`en:`英文Short Answer，其余是正文：分类、例子、怎么防、常见错误、代码），由`ml-notes.cjs`放进页面的“讲义”部分（Key Terms和Short Answer之间）；合并主题的每个部分都写了，Short Answer就换成每个部分各一段的英文答法。目前写好的是Data Leakage、Scaling、scikit-learn Pipelines（Day 03），加新主题只改`ml-notes.md`再运行`node study-tools/build.cjs`。中文内容来自`lesson-zh.txt`、`concept-zh.txt`与`design-zh.txt`；ML独立主题的英文解释在该模块中维护。`ml-primer.cjs`生成零基础入口，并为15个notebook添加导读，不修改实验代码。

System Design主题的完整参考答案在`design-answers.cjs`：每页加上“怎么学这一页”（Day 1和复习日各45分钟怎么分配）和“参考答案”（页面上每个问题，包括澄清问题和追问，都有中文讲解和可以直接说的英文答法，以及一份5分钟英文口述稿），由`bilingual-lessons.cjs`放进页面。目前写好的是Requirements and API Design；没有写答案的主题只有Short Answer和中文回答。

可在仓库根目录运行`node study-tools/bilingual-lessons.cjs`单独更新讲义。全文Markdown为`AI_ENGINEER_BILINGUAL_LESSONS.md`。原有深入材料保留在HTML折叠区；题库、日期与课时保持原值。

题型按仓库interview/questions整理，技术解释参考各页列出的官方资料与公开讲义，问答脚本与练习为原创整理。没有可验证的面试出现频率数据，因此页面使用“核心主题”而不声称“统计最高频”。课程章节未擅自指定，以用户实际网课进度为准。

本次生成的是学习资料与未来项目任务。没有改Risk Copilot代码、部署AWS资源或运行付费LLM/Snowflake实验。

## 日期、刷题排期与文件位置

- `reschedule.cjs` - 在`original-plan.md`和`original-roadmap.md`的快照上应用当前排期：Day 1改为`top150-schedule.json`里的`start`（周一），刷题时段改为08:30–10:30共2小时，并把LeetCode Top Interview 150与计划原题混合排入（Hard在最后）。`build.cjs`、`validate.cjs`、`verify-interview-answers.cjs`都经过它读取快照
- `top150-schedule.json` - 排期数据：每天的计划原题、Top 150题、复习题，以及150题的标题、难度和专题。改排期只改这个文件，再运行`node study-tools/build.cjs`
- `layout.cjs` - 学习指南留在仓库根目录，其余报告（`AI_ENGINEER_TRANSITION_PLAN`、`PROJECT_ROADMAP`、`QUANTVAULT_PLAN`、`BILINGUAL_LESSONS`、`TOP150_SCHEDULE`）放在`Reports/`。生成脚本仍按“全部在根目录”工作，引入`layout.cjs`后，运行期间文件临时回到根目录，退出时自动放回`Reports/`并修好链接
- 重新生成会清空notebook的运行输出，之后运行`verify_notebooks.py`重新执行
- 学习指南与每日时间表的分工由`build.cjs`生成：总览（日期与工时、项目计划、Topic总览、规则、课程与题库说明）和“每日入口”（每天一个链接，指向时间表当天位置）写进`AI_ENGINEER_DAILY_LEARNING_GUIDE`；`AI_ENGINEER_TRANSITION_PLAN`只放每天的内容，并加上每天的“学习提示”（ML实验、设计读法、项目任务）。QuantVault的总说明只进指南，每天的题目只进时间表
- 时间表每天“学习记录 · 今日学习笔记”链接下面的“今天学习 Topic”也由`build.cjs`生成（`dayTopics`）：从当天的行里取刷题主题（08:30）、ML讲义和带链接的先修主题（13:30）、System Design（14:15）和项目任务（15:00，链接到项目路线），先修和讲义写在同一行；Markdown里是一个列表（用`<!-- day-topics -->`标记），HTML里排成左右两列。改了当天的行，重新生成就会跟着变
- `top150-record.cjs` - “刷题记录”`Reports/AI_ENGINEER_TOP150_RECORD.html`（所有页面顶部导航里“项目路线”后面），上面两个选项卡LeetCode和QuantVault（记住上次选的，也可以用`#leetcode`、`#quantvault`直接打开）。LeetCode是Top 150，按LeetCode的23个专题分列；QuantVault是排进计划的47题，按第一次排到那天的ML讲义分列；每列按日期排序，列像砖墙一样往下排，短的列不留空白。每道题的键从时间表Markdown里它的勾选框算出（LeetCode在08:30行，当天和复习日都算；QuantVault在13:30行，重复排的那天也算），任意一个勾过就算做了，显示为绿色带✓。生成时写入当时的进度，打开页面后从`/api/progress`读最新勾选（切回页面会再读一次），没连服务器时用生成时的进度加这个浏览器里的勾选。如果某道题在时间表里找不到勾选框，生成会报错
- 时间表HTML的两处交互也由`build.cjs`生成，只在HTML里，Markdown不变：每天的“当天 Interview Questions”默认折叠（标题后显示题数，打开`#answer-Qxxx`链接时会自动展开）；页面顶部固定栏的“📅 Daily plan”按钮展开全部日期（今天高亮），点日期跳到当天，点别处或按Esc收起。`verify-interview-answers.cjs`会先展开折叠再检查答案
- 网页版（手机、iPad）：`https://juliayeah.github.io/ai-engineering-field-guide/`，GitHub Pages从`main`分支的根目录发布，每次推送后一两分钟自动更新。根目录的`index.html`跳到每日时间表，`.nojekyll`让GitHub原样发布文件（不经过Jekyll）。网页版只能看：勾选只存在那台设备的浏览器里，“今日申请工作”和学习笔记需要本地服务器，不显示
- `server.cjs` - 本地服务器（`start-server.bat`启动，默认`http://127.0.0.1:5510`，只监听本机）：提供页面，保存时间表里的勾选和课程名，并提供“从GitHub拉取”和“推送到GitHub”两个按钮。不要用5500，那是VS Code的Live Server，不能保存
- `progress.cjs` - 进度的读写和Markdown镜像：`study-progress.json`是进度的唯一来源（每行一项、按键排序、没有时间戳，两台设备改不同项时能干净合并），时间表Markdown里的☐/☑和`Online Course [____]`由它按进度改写。`build.cjs`重新生成时也会按`study-progress.json`写回，所以重新生成不会丢进度
- `notes.cjs` - 学习笔记的两个页面（`#day-NN`选日期），时间表每天标题下都有链接：
  - “学习记录”`Reports/AI_ENGINEER_STUDY_LOG.html`：由`build.cjs`从时间表Markdown生成，每天每一项一个框（题目、Study topic、网课、ML/Notebook/QuantVault、System Design、项目、每道面试题、复盘），键和勾选框相同，所以勾过的项显示✓。输入通过`/api/notes`存进`Study notes/drafts.json`，“生成今日学习笔记”通过`/api/notes/generate`写`Study notes/<日期> Day NN.md`（只写有内容的框，再生成会覆盖同一个文件）
  - “今日学习笔记”`Reports/AI_ENGINEER_STUDY_NOTES.html`：读取当天生成的`.md`并显示（页面里自带一个小的Markdown渲染器，需要服务器）
  - `drafts.json`和生成的`.md`都跟着同步按钮一起推送和拉取（见下面的“两个按钮”）
- 勾选框的键是“当天锚点 + 这一项文字的哈希”：改了某一项的文字（比如换了题），它的旧勾选就不再对应
- 两个按钮只处理`study-progress.json`、时间表Markdown，以及`Study notes/`里的`drafts.json`和生成的`<日期> Day NN.md`（不含README）：拉取是提交本地进度和笔记后`git pull --rebase`，推送是在此基础上再`git push`。只有这些文件冲突时才自动合并：进度和`drafts.json`以共同祖先为基准逐项三方合并（一台设备取消的勾或清空的框不会被另一台复活，两台都改了同一项时以当前设备为准）；同一天的笔记`.md`在两台设备都生成过时保留当前设备的版本，草稿已经合并，在学习记录里再生成一次就能得到两边的内容。其他文件冲突会中止并提示，不会替你决定
- 时间表13:30那一行（ML + QuantVault）由`build.cjs`用`quantvault-day.cjs`的数据直接写出：讲义、Notebook、QuantVault各一行，标着分钟数，题目带勾选框。所以改了`quantvault-selected.txt`或`quantvault-schedule.cjs`之后要运行`node study-tools/build.cjs`；单独运行`quantvault.cjs`只更新QuantVault排期页，不再改时间表和指南；指南里的“题库一览”表也由`build.cjs`生成
- `applications.cjs` - 读取career-ops仓库（私有）里的`reports/tracker/pass-tracker.md`的Applied表、`applied.json`的申请日期、`jd/`里的本地JD页面（文件名是岗位链接sha256的前16位）和`data/applications.md`里的完整评估分数（按Full Eval的编号对应；tracker的Score列是初筛分，不用它），按日期分组。时间表的表格列是岗位名称、公司、Eval分数、Eval报告、Local JD和岗位链接；服务器通过`/api/applications`提供，评估报告HTML通过`/career-ops/reports/`提供（只开放reports下的.html，仅本机）。career-ops默认找本仓库旁边的`career-ops`文件夹，也可以用环境变量`CAREER_OPS_DIR`指定。时间表每天只放一个空的“今日申请工作”位置，页面打开时由脚本填充，申请信息不会写进Markdown、HTML或GitHub（本仓库是公开的）
