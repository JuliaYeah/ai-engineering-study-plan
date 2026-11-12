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

## LeetCode Pattern排期维护

`patterns.cjs`写时间表每天10:30–11:15那一格和刷题记录的Pattern选项卡，数据在`patterns.json`：

- 41个pattern来自[design-gurus/grokking-coding-interview](https://github.com/design-gurus/grokking-coding-interview)（CC BY 4.0）：英文名、Recognize it when、Typical cost和核心思路（鼠标停在名字上显示）照抄repo，中文说明是自己写的
- `lc` - repo里每个pattern的题换成对应的LeetCode题（题号、slug、标题、难度、是否会员题、是否补充题），2026-11-12用LeetCode GraphQL逐个核对过题号、标题和会员题。repo没有对应LeetCode题的不放；免费题不够练习时加了几道补充题
- `plan` - 早上刷题计划里每道LeetCode题属于哪个pattern（`null`表示不属于这41个），用来算“刷”的那几天。早上的题加了或删了，生成会报错提醒补上
- 排期在`patterns.cjs`的`ORDER`：Day 01–03跳过；Day 04–20常见15种（DP算3个，共17个）、Day 21–33其余Core、Day 34–38 Advanced，一天一个；Day 39–41偏门的两个一天；Day 42–45混合识别
- 练习题自动挑：免费、不在早上的计划里、不重复，从简单的开始，一天两道（偏门的一个pattern一道）；混合识别每天4道，题目不标pattern
- 改了排期或题目后运行`node study-tools/build.cjs`；`validate.cjs`会核对41个pattern各排了一次，早上的LeetCode链接没变

## Hello Interview排期维护

`hello-interview.cjs`写时间表每天13:45–15:45那一格（2小时，System Design + AI Coding）和刷题记录的Hello Interview选项卡，数据在`hello-interview.json`：

- `items` - 每天一项：题目、任务、类型（System Design、AI Coding、基础、复盘）、所在的周、Hello Interview的链接；`hi`是原来30天计划里的Day。Day 04–05热身，Day 06–35是30天计划（它的每周正好对上我们的周一到周五），Day 36–45新题和重做弱项。链接都在2026-11-12打开核对过
- `sections` - 每周的名字和目标，每周第一天的“学习提示”里写本周目标；`method` - 每种类型的2小时怎么分；`record` - 每天记什么
- Day 01–03这一格原来是General & AI System Design：那天勾过的保留（勾选不丢），没勾的写“跳过”
- 每天一个☐（以“Hello Interview”开头的那一行），刷题记录的Hello Interview选项卡每周一列，按System Design、AI Coding、基础与复盘计数
- 改了以后运行`node study-tools/build.cjs`；`validate.cjs`会核对每个计划日都有这一行和一个☐

一天的时间（08:30–18:00，9小时，13:15–13:45午饭）：各行仍按原计划的时间生成，`build.cjs`最后的`SLOTS`和`retime`把它们排成现在的顺序并换上现在的时间和时长（项目1小时、复盘15分钟）。General & AI System Design讲义仍然生成，只是不排进时间表

## 双语讲义维护

`bilingual-lessons.cjs`在生成末尾为252页加入Question（只有英文）、Key Terms、英文Short Answer和中文回答。Key Terms每行一个“英文术语：中文解释”；合并的主题（例如Data Leakage; Scaling; scikit-learn Pipelines）每个部分各占一行，链接到它自己的页面。“直观例子”只留在有具体例子的Train / Validation / Test Split页，通用的例子和“练习方式”已删掉。ML主题的完整讲义写在`ml-notes.md`（每个`## `一个主题，`zh:`中文名，`en:`英文Short Answer，其余是正文：分类、例子、怎么防、常见错误、代码），由`ml-notes.cjs`放进页面的“讲义”部分（Key Terms和Short Answer之间）；合并主题的每个部分都写了，Short Answer就换成每个部分各一段的英文答法。目前写好的是Data Leakage、Scaling、scikit-learn Pipelines，加新主题只改`ml-notes.md`再运行`node study-tools/build.cjs`。中文内容来自`lesson-zh.txt`、`concept-zh.txt`与`design-zh.txt`；ML独立主题的英文解释在该模块中维护。`ml-primer.cjs`生成零基础入口，并为15个notebook添加导读，不修改实验代码。

System Design主题的完整参考答案在`design-answers.cjs`：每页加上“怎么学这一页”（Day 1和复习日各45分钟怎么分配）和“参考答案”（页面上每个问题，包括澄清问题和追问，都有中文讲解和可以直接说的英文答法，以及一份5分钟英文口述稿），由`bilingual-lessons.cjs`放进页面。目前写好的是Requirements and API Design；没有写答案的主题只有Short Answer和中文回答。

可在仓库根目录运行`node study-tools/bilingual-lessons.cjs`单独更新讲义。全文Markdown为`AI_ENGINEER_BILINGUAL_LESSONS.md`。原有深入材料保留在HTML折叠区；题库、日期与课时保持原值。

题型按仓库interview/questions整理，技术解释参考各页列出的官方资料与公开讲义，问答脚本与练习为原创整理。没有可验证的面试出现频率数据，因此页面使用“核心主题”而不声称“统计最高频”。课程章节未擅自指定，以用户实际网课进度为准。

本次生成的是学习资料与未来项目任务。没有改Risk Copilot代码、部署AWS资源或运行付费LLM/Snowflake实验。

## 日期、刷题排期与文件位置

- `reschedule.cjs` - 在`original-plan.md`和`original-roadmap.md`的快照上应用当前排期：Day 1改为`top150-schedule.json`里的`start`（周一），刷题时段改为08:30–10:30共2小时，并把LeetCode Top Interview 150与计划原题混合排入（Hard在最后）。`build.cjs`、`validate.cjs`、`verify-interview-answers.cjs`都经过它读取快照
- `top150-schedule.json` - 排期数据：每天的计划原题、Top 150题、复习题，以及150题的标题、难度和专题。改排期只改这个文件，再运行`node study-tools/build.cjs`
- `layout.cjs` - 学习指南留在仓库根目录，其余报告（`AI_ENGINEER_TRANSITION_PLAN`、`PROJECT_ROADMAP`、`BILINGUAL_LESSONS`、`TOP150_SCHEDULE`）放在`Reports/`。生成脚本仍按“全部在根目录”工作，引入`layout.cjs`后，运行期间文件临时回到根目录，退出时自动放回`Reports/`并修好链接
- 重新生成会清空notebook的运行输出，之后运行`verify_notebooks.py`重新执行
- 学习指南与每日时间表的分工由`build.cjs`生成：总览（日期与工时、项目计划、Topic总览、规则、课程与题库说明）和“每日入口”（每天一个链接，指向时间表当天位置）写进`AI_ENGINEER_DAILY_LEARNING_GUIDE`；`AI_ENGINEER_TRANSITION_PLAN`只放每天的内容，并加上每天的“学习提示”（当天pattern的中文说明、设计读法、项目任务）
- 时间表每天“学习记录 · 今日学习笔记”链接下面的“今天学习 Topic”也由`build.cjs`生成（`dayTopics`）：从当天的行里取刷题主题（08:30）、LeetCode Pattern（10:30，链接到pattern页面，`patterns.topic`）、Hello Interview（13:45，`hi.topic`）和项目任务（15:45，链接到项目路线）；Markdown里是一个列表（用`<!-- day-topics -->`标记），HTML里排成左右两列。改了当天的行，重新生成就会跟着变
- `top150-record.cjs` - “刷题记录”`Reports/AI_ENGINEER_TOP150_RECORD.html`（所有页面顶部导航里“项目路线”后面），上面三个选项卡LeetCode、Pattern和Hello Interview（记住上次选的，也可以用`#leetcode`、`#pattern`、`#hellointerview`直接打开）。LeetCode是Top 150，按LeetCode的23个专题分列；每列按日期排序，列像砖墙一样往下排，短的列不留空白。每道题的键从时间表Markdown里08:30行它的勾选框算出（当天和复习日都算），任意一个勾过就算做了，显示为绿色带✓。Pattern选项卡由`patterns.cjs`生成：最上面是repo最值得看的4个链接，下面一张表按学习顺序分四个阶段，每行是pattern（冻结在最左边，前面的勾和时间表当天10:30那一格是同一个键，打勾通过`/api/progress`保存）、LeetCode题（在时间表里勾过的变绿带✓，早上那一行和10:30练习都算；没做的后面标着计划在哪天，比如D05；🔒是会员题）、中文说明、Recognize it when、Typical cost、学和刷的日期。拖表头右边的竖线改列宽，宽度存在这个浏览器里（`study-pattern-cols`），双击还原；表格比页面宽时在框里左右滑。生成时写入当时的进度，打开页面后从`/api/progress`读最新勾选（切回页面会再读一次），没连服务器时用生成时的进度加这个浏览器里的勾选。如果某道题在时间表里找不到勾选框，生成会报错。Hello Interview选项卡用同样的列和计数，每周一列，那天的☐勾过就算完成
- `videos.cjs` - “视频链接”`Reports/AI_ENGINEER_VIDEOS.html`（顶部导航“刷题记录”后面）：在框里粘贴视频链接（小红书可以连分享文字一起粘贴），点Save，本地服务器读出标题和作者，存进`Study notes/videos.json`，表格列是看过、主题、时长、作者、Usefulness、链接，可以搜索、编辑、删除和重新读取。时长（视频长度，存成`seconds`）在保存时和标题一起读：YouTube用播放器接口的`lengthSeconds`，Vimeo用oEmbed，小红书用笔记里的`video.capa.duration`，B站用页面里的`videoData.duration`，其他网站用`video:duration`或`itemprop="duration"`标签；读不到就空着，点“编辑”里的“重新读取”会再试一次。看过的勾选框和Usefulness的1–5星（再点一次当前的星清除）点了就存进`videos.json`的`watched`（勾上的时间）和`rating`，跟着同步按钮推送；两台设备改了同一个视频的不同字段（一边勾看过，一边改标题）合并时都保留。拖动表头每列右边的竖线可以调整列宽，宽度存在这个浏览器里，双击竖线恢复默认。YouTube和Vimeo用官方oEmbed，小红书用iPhone浏览器打开笔记页读`title`和`user.nickName`，B站读视频页（它的API会拒绝脚本），其他网站读oEmbed链接或页面的标题和作者标签；读不到也会存下，再用“编辑”手动填。同一个视频（YouTube视频ID、小红书笔记ID等相同）不会存两次。网页版和没有服务器时只能看：直接读推送上去的`videos.json`。YouTube视频可以点“生成总结”：服务器读视频的字幕（有原字幕用原字幕，否则用自动字幕），合成大约20秒一行的`[mm:ss]`文字，交给`claude -p`（不给任何工具、`--strict-mcp-config`、自己的system prompt、在临时文件夹运行，所以不读CLAUDE.md），用这台电脑上Claude Code的登录，算在套餐用量里，不用API credit。页面上可以选Sonnet、Opus或Haiku。总结（一句话总结、带时间的要点、关键概念）存成`Study notes/video-summaries/<id>.md`，开头记着字幕语言、时长、模型和用了多少tokens；完整字幕不保存。点时间会跳到视频的那一秒。13分钟的视频用Sonnet大约输入4–6k、输出1–1.5k tokens，15–20秒。小红书等其他网站没有字幕，不支持总结。点作者名字（后面有✎）在这一行下面展开对这个作者的备注，再点一次或点“取消”收起，不点不展开；写完点“保存”（或Ctrl+Enter）存进`Study notes/authors.json`（每行一个作者，`note`和`updated`），清空后保存就删除。一个作者只有一条备注，他的每一行都共用；有备注的作者✎是主题色，鼠标停在名字上会显示备注。没保存的文字在收起后也留着，直到保存、取消或刷新页面。网页版只能看已有的备注
- `thoughts.cjs` - “随想笔记”`Reports/AI_ENGINEER_THOUGHTS.html`（顶部导航“视频链接”后面）：File name框输入新名字，或从下拉里选已有的笔记（大小写不同算同一篇），下面的框写随想，点Update（或Ctrl+Enter），本地服务器新建`Study notes/thoughts/<名字>.md`，或者把这条加到那篇的最后，每条上面是`## 日期 时间`。左边列出全部笔记（最近更新的在上面，显示条数和最新一条的开头），点一下在下面显示全文（最新的在上面，链接可以点），也可以删除整篇。名字就是文件名，不能有`\ / : * ? " < > | [ ] # %`，最多60个字。框里没保存的内容存在这个浏览器里，关掉页面不会丢。追加时按原文接在文件最后，所以在`.md`里手改过的内容不会被改动；要删某一条就直接改`.md`。`Study notes/thoughts/index.json`是给网页版用的笔记列表（网页版不能列文件夹），每次改动和每次点同步按钮前都从`.md`重新生成，所以手动改名、删除的笔记也会跟上。网页版和没有服务器时只能看
- 时间表HTML的两处交互也由`build.cjs`生成，只在HTML里，Markdown不变：每天的“当天 Interview Questions”默认折叠（标题后显示题数，打开`#answer-Qxxx`链接时会自动展开）；页面顶部固定栏的“📅 Daily plan”按钮展开全部日期（今天高亮），点日期跳到当天，点别处或按Esc收起。`verify-interview-answers.cjs`会先展开折叠再检查答案
- 网页版（手机、iPad）：`https://lazy-sleepysheep.github.io/ai-engineering-study-plan/`，GitHub Pages从`main`分支的根目录发布，每次推送后一两分钟自动更新。根目录的`index.html`跳到每日时间表，`.nojekyll`让GitHub原样发布文件（不经过Jekyll）。网页版只能看：勾选只存在那台设备的浏览器里，页面上会写“网页版只能看”，时间表不显示两个GitHub按钮；“今日申请工作”和学习笔记需要本地服务器，不显示；视频链接和随想笔记只能看，不能添加
- `server.cjs` - 本地服务器（`start-server.bat`启动，默认`http://127.0.0.1:5510`，只监听本机）：提供页面，保存时间表里的勾选和课程名，并提供“从GitHub拉取”和“推送到GitHub”两个按钮。不要用5500，那是VS Code的Live Server，不能保存
- `progress.cjs` - 进度的读写和Markdown镜像：`study-progress.json`是进度的唯一来源（每行一项、按键排序、没有时间戳，两台设备改不同项时能干净合并），时间表Markdown里的☐/☑和`Online Course [____]`由它按进度改写。`build.cjs`重新生成时也会按`study-progress.json`写回，所以重新生成不会丢进度
- `notes.cjs` - 学习笔记的两个页面（`#day-NN`选日期），时间表每天标题下都有链接：
  - “学习记录”`Reports/AI_ENGINEER_STUDY_LOG.html`：由`build.cjs`从时间表Markdown生成，每天每一项一个框（题目、Study topic、LeetCode Pattern和练习题、网课、Hello Interview（提示写“卡在哪里、AI帮了什么”）、项目、每道面试题、复盘），键和勾选框相同，所以勾过的项显示✓。输入通过`/api/notes`存进`Study notes/drafts.json`，“生成今日学习笔记”通过`/api/notes/generate`写`Study notes/<日期> Day NN.md`（只写有内容的框，再生成会覆盖同一个文件）
  - “今日学习笔记”`Reports/AI_ENGINEER_STUDY_NOTES.html`：读取当天生成的`.md`并显示（页面里自带一个小的Markdown渲染器，需要服务器）
  - `drafts.json`和生成的`.md`都跟着同步按钮一起推送和拉取（见下面的“两个按钮”）
- 勾选框的键是“当天锚点 + 这一项文字的哈希”：改了某一项的文字（比如换了题），它的旧勾选就不再对应
- 两个按钮只处理`study-progress.json`、时间表Markdown，以及`Study notes/`里的`drafts.json`、`videos.json`、`authors.json`、生成的`<日期> Day NN.md`、`video-summaries/<id>.md`和`thoughts/`里的随想笔记（不含README）：拉取是提交本地进度和笔记后`git pull --rebase`，推送是在此基础上再`git push`。只有这些文件冲突时才自动合并：进度、`drafts.json`、`videos.json`和`authors.json`以共同祖先为基准逐项三方合并（两台设备各加的视频都保留）（一台设备取消的勾或清空的框不会被另一台复活，两台都改了同一项时以当前设备为准）；同一篇随想笔记两台设备都加了内容时，两边加的每一条都保留，按时间排，然后重新生成`index.json`；同一天的笔记`.md`在两台设备都生成过时保留当前设备的版本，草稿已经合并，在学习记录里再生成一次就能得到两边的内容。其他文件冲突会中止并提示，不会替你决定
- 时间表10:30那一行（LeetCode Pattern）由`build.cjs`调用`patterns.row(day)`写出，见上面的“LeetCode Pattern排期维护”。ML讲义和notebook仍然生成（Topic Library里能找到），只是不再排进时间表，页面上写着“不排进时间表，需要时自学”；指南里的“题库一览”表也由`build.cjs`生成
- `applications.cjs` - 读取career-ops仓库（私有）里的`reports/tracker/pass-tracker.md`的Applied表、`applied.json`的申请日期、`jd/`里的本地JD页面（文件名是岗位链接sha256的前16位）和`data/applications.md`里的完整评估分数（按Full Eval的编号对应；tracker的Score列是初筛分，不用它），按日期分组。时间表的表格列是岗位名称、公司、Eval分数、Eval报告、Local JD和岗位链接；服务器通过`/api/applications`提供，评估报告HTML通过`/career-ops/reports/`提供（只开放reports下的.html，仅本机）。career-ops默认找本仓库旁边的`career-ops`文件夹，也可以用环境变量`CAREER_OPS_DIR`指定。时间表每天只放一个空的“今日申请工作”位置，页面打开时由脚本填充，申请信息不会写进Markdown、HTML或GitHub（本仓库是公开的）
