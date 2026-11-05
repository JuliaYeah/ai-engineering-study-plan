# Overview

这个仓库由几套东西叠在一起:

- 原版 AI Engineering Field Guide - 岗位、面试、学习路线、作品集资料,基于 6,964 条真实 JD
- 每日学习计划 - 252 页中英双语讲义、题库、QuantVault 排期
- ML notebooks - 15 个本地可运行的实验
- 职位数据流水线 - 每月抓取并用 LLM 结构化新数据
- `wiki/` - 由 LLM 维护的知识库

所有命令默认在仓库根目录运行,特别说明的除外。

## 想做什么,运行什么

- 浏览 wiki - `python serve_wiki.py`,然后打开 http://127.0.0.1:8000
- 每日学习 - 直接打开 `AI_ENGINEER_DAILY_LEARNING_GUIDE.html`,不需要命令
- 记录碎片时间看到的面试题 - 在 `micro-learning/questions.md` 里加一行 `- [ ] 题目`,答案每天自动生成到 `micro-learning/answers/`
- 跑 ML 实验 - 先建环境(见下),再在 VS Code 打开 `notebook/*.ipynb`
- 抓取新一个月的职位数据 - 在 Claude Code 里运行 `/fetch-jobs`
- 改了学习资料后重新生成 - `node study-tools/build.cjs`
- 检查学习资料有没有坏 - `node study-tools/validate.cjs`
- 验证 notebook 能跑通 - `.\.study-venv\Scripts\python.exe study-tools/verify_notebooks.py`

## 按用途找入口

1. 了解岗位和技能 - 读 [README.md](README.md),再看 `role/`(技能、职责、用例、趋势)
2. 准备面试 - 读 `interview/`(流程、分类题库、51 家公司的面试数据、拿 offer 之后的内容)
3. 规划转岗 - `learning-paths/` 有从 Data Engineer、Data Scientist、ML Engineer、Backend、Frontend 出发的路线
4. 做作品集 - 读 `portfolio/`
5. 每天学习 - `AI_ENGINEER_DAILY_LEARNING_GUIDE.html` 按日程学,`Study topics/` 是各知识点的 HTML 讲义
6. 积累面试题 - `micro-learning/` 是面试题收件箱和每日答案
7. 查资料和问答 - 用 `wiki/`

目录全貌见 [REPO_STRUCTURE.md](REPO_STRUCTURE.md)。

## 学习计划文件

这些文件是同一套学习计划的不同视图。计划从 2026-11-09(周一)开始,Day 1 就是这一天:8 周主计划到 2027-01-01(Day 40),再加 1 周缓冲到 2027-01-08(Day 45)。工作日每天 8.5 小时,周末休息;感恩节、圣诞节和元旦都按工作日算,要休息就把当天内容顺延。它们都是 `study-tools/` 生成的,每份有 `.md` 和 `.html` 两个版本,除了 BILINGUAL_LESSONS 和 TOP150_SCHEDULE 只有 `.md`。

当前位置:`AI_ENGINEER_DAILY_LEARNING_GUIDE` 在仓库根目录,另外 4 份在 `Reports/`。

- `AI_ENGINEER_TRANSITION_PLAN` - 总日程表(约 19,000 行,是最大的一份)。每个学习日的时间安排,以及 623 道面试原题,每题附英文 Interview Answer、Explanation 和 Follow-up。HTML 版先展开口述稿,再按需展开详解和参考代码。想知道某天该做什么,先查这份
- `AI_ENGINEER_DAILY_LEARNING_GUIDE` - 每日执行指南。把总日程展开成每天的 Coding、ML、System Design、Project 四个时段,并链接到当天的讲义和 notebook。每天实际打开的是这份
- `AI_ENGINEER_PROJECT_ROADMAP` - 三项目实践路线,每天 15:00-16:30 的项目时段:Day 01-20 Risk Copilot(30 小时),Day 21-30 Financial Statement Analytics Assistant(15 小时),Day 31-38 Investment Research Workbench(12 小时),Day 39-40 复现与收尾。这是未来的计划,不是项目已完成的报告
- `AI_ENGINEER_QUANTVAULT_PLAN` - QuantVault 题目排期。只含 Regression 和 Machine Learning 两类,实时目录共 264 题,其中 47 道核心题分配到 45 个学习日,其余作扩展。和讲义、notebook 共用每天 13:30-14:15 的 45 分钟
- `AI_ENGINEER_TOP150_SCHEDULE` - LeetCode Top Interview 150 的完整排期(`Reports/` 里,只有 `.md`)。列出 150 题分在哪一天、每个专题的进度,以及计划里不在 Top 150 的 21 道题。详见下面的"刷题安排"
- `AI_ENGINEER_BILINGUAL_LESSONS` - 全部讲义的 Markdown 合集(约 8,600 行)。每个主题按 背景、Question、Key Terms、直观例子、英文 Short Answer、中文回答 的顺序写。适合通读或复习,不用一页页点 HTML

每天的时间块是固定的:

1. 08:30-10:30 - Coding(2 小时,Python 题和 Top 150 混合刷)
2. 13:30-14:15 - ML(讲义、notebook、QuantVault)
3. 14:15-15:00 - General 与 AI System Design
4. 15:00-16:30 - Project
5. 16:30-17:30 - 面试原题
6. 17:30-18:00 - 复盘

## 刷题安排

每天 08:30-10:30 刷题,共 2 小时。

- Python 日(周一、周三、周五) - 计划原有的 Python 题和 Top 150 混合刷,每天 4 到 7 题
- SQL 日(周二、周四) - 前 1 小时做 SQL(三题候选先做前两题),后 1 小时刷 Top 150,每天 2 到 3 题
- Hard - 全部排在 Day 35(2026-12-25)之后,Day 41(2027-01-04)做完
- Day 42 到 Day 45 - 重做薄弱题,不再新增题目
- 估算 - Easy 15 分钟、Medium 20 分钟、Hard 30 分钟,工程实现题(KV Store、Rate Limiter、Crawler)30 分钟。实际速度比估算慢,就把没做完的题顺延到 Day 42 到 Day 45

每天的具体题目和链接在 `Reports/AI_ENGINEER_TRANSITION_PLAN.html` 当天的第一行,完整题单见 `Reports/AI_ENGINEER_TOP150_SCHEDULE.md`。

## 最近更新

按时间从新到旧,只列对使用有影响的:

- 2026-11-04 - 学习计划整体改期:Day 1 从 2026-10-05 改为 2026-11-09;刷题时段延长为 2 小时,并把 LeetCode Top Interview 150 全部排进去(Hard 放最后),新增 `Reports/AI_ENGINEER_TOP150_SCHEDULE.md`
- 2026-10-07 - 加了 `/fetch-jobs` 命令(`.claude/commands/fetch-jobs.md`,同时有 `.agents/skills/source-command-fetch-jobs/`),一条命令跑完整个抓取流程
- 2026-10-05 - 加了 `micro-learning/`:`questions.md` 是待答题池,首批记录了 58 道小红书 Agent 开发面经题;`answers/2026-10-05.md` 是每日生成的英文回答加中文要点,已答的题会被打勾。答案由定时任务生成,不是手动写的
- 2026-10-04 - 加了整套学习材料:5 份计划文件、`Study topics/`(252 页讲义)、`notebook/`(15 个 ML 实验)、`study-tools/`(生成和校验脚本)
- 2026-09-23 - 加了 9 月的 Built In 抓取数据(`job-market/data_structured/2026-09-23/`),这是目前最新的一批
- 2026-09-19 - `CLAUDE.md` 改名为 `AGENTS.md`,Claude 读的是 `AGENTS.md`;`wiki/` 里同理
- 2026-09-16 - 市场统计 wiki 搬到了 AI-Shipping-Labs/wiki 仓库
- 2026-09-10 - 加了 `serve_wiki.py`,可以在本地用浏览器看 wiki
- 2026-09-09 - 加了 `wiki/`(覆盖仓库全部原创内容),爬虫代理从 Oxylabs 换成 DataImpulse

新增而且能直接用的文件:

- `AI_ENGINEER_DAILY_LEARNING_GUIDE.html` - 每天学习的入口
- `Study topics/index.html` - 可搜索的 Topic Library,按主题查讲义和首次学习日、复习日
- `notebook/01_train_validation_test_split.ipynb` - 15 个 ML 实验的第一个
- `micro-learning/questions.md` 和 `micro-learning/answers/` - 面试题收件箱和答案
- `study-tools/answers/` - 面试原题的英文回答源文件(`01-foundations.txt` 到 `05-experience.txt`)
- `serve_wiki.py` - 本地浏览 wiki
- `/fetch-jobs` - 一键更新职位数据

## ML notebook

用 Python 3.12 在仓库根目录建环境,只需做一次:

```powershell
py -3.12 -m venv .study-venv
.\.study-venv\Scripts\python.exe -m pip install --no-cache-dir -r notebook/requirements-lock.txt
```

然后在 VS Code 里装 Python 和 Jupyter 扩展,打开 `.ipynb`,右上角 Select Kernel 选 `.study-venv\Scripts\python.exe`。从 `notebook/01_train_validation_test_split.ipynb` 开始。

这些实验用合成数据,不需要 API key。详见 [notebook/README.md](notebook/README.md)。

## wiki

- 浏览 - 运行 `python serve_wiki.py`,用 `--port` 换端口,页面后加 `?raw=1` 看 markdown 源码
- Ingest - 把资料放进 `wiki/raw/`(或直接给 Claude 一个 URL),让它整理成摘要、更新相关页面并写入 `wiki/log.md`
- Query - 直接向 Claude 提问,有复用价值的回答会存进 `wiki/answers/`
- Lint - 定期让 Claude 检查矛盾、过期说法、孤立页面和缺失页面

规则见 [wiki/README.md](wiki/README.md),wiki 自己的主题总结见 [wiki/overview.md](wiki/overview.md)。

## 更新职位数据

职位数据会更新,每月抓一次。最近一次抓取在 `job-market/data_structured/2026-09-23/`。

最简单的方式是在 Claude Code 里运行:

```
/fetch-jobs
```

它定义在 `.claude/commands/fetch-jobs.md`,按顺序跑下面 5 步,每步报告数量,出错就停下。

手动运行的话,先进入工作目录,再依次执行(`{YYYYMMDD}` 换成第 1 步输出的日期):

```powershell
cd job-market/_internal
uv run python scrapers/scrape_builtin_requests.py
uv run python scrapers/clean_dedup.py all_jobs_{YYYYMMDD}.csv
uv run python scrapers/download_all_html.py --csv all_jobs_{YYYYMMDD}_dedup.csv
uv run python scrapers/extract_from_html.py --all --csv all_jobs_{YYYYMMDD}_dedup.csv
uv run python extract_llm.py --all --csv all_jobs_{YYYYMMDD}_dedup.csv
```

每一步做什么:

1. 抓取 builtin.com 的列表页(LA、NY、London、Amsterdam、Berlin、India)
2. 去重,并合并进全局的 `data/all_jobs_dedup.csv`
3. 下载每个职位的 HTML
4. 从 HTML 直接解析成 `data_raw/{日期}/*.yaml`,不用 LLM
5. 调用 LLM 做分类和提取,输出 `data_structured/{日期}/*.yaml`

运行前需要:

- Python 3.13 以上和 `uv`(依赖在 `job-market/pyproject.toml`)
- 代理账号 - 第 1、3 步通过 DataImpulse 代理(备用 Oxylabs),需要 `DATAIMPULSE_USER`、`DATAIMPULSE_PASSWORD` 等环境变量
- LLM key - 第 5 步用 Z.ai 的 GLM 模型,需要 `ZAI_API_KEY`,模型默认 `glm-5.2`,可用 `ZAI_MODEL` 覆盖
- 环境变量可以直接导出,也可以写进项目的 `.env`,详见 `job-market/_internal/PIPELINE.md`

跑完之后:

- 市场统计 wiki 已搬到 [AI-Shipping-Labs/wiki](https://github.com/AI-Shipping-Labs/wiki),在那个仓库运行 `uv run python market-wiki/generate.py` 重新生成
- `role/` 里的统计数字和 `README.md` 里的总数不会自动更新,需要重跑 `job-market/analysis.ipynb` 并手动核对
- `is_management` 和 `company_stage` 两个字段目前不可靠,不要引用

## 维护学习资料

"维护"的意思是:学习指南、讲义、题库页面(`AI_ENGINEER_*.md/html`、`Study topics/*.html`、`notebook/*.ipynb`)是生成出来的,不要直接改 HTML。要改内容,就改 `study-tools/` 里的源文件,再重新生成。

内容源:

- `coding.cjs`、`sql.cjs`、`ml.cjs`、`design.cjs`、`concepts.cjs` - 各类题目和知识点
- `lesson-zh.txt`、`concept-zh.txt`、`design-zh.txt` - 讲义的中文内容
- `quantvault-selected.txt`、`quantvault-schedule.cjs` - QuantVault 选题和排期(日期、先修、分钟数)

完整流程:

```powershell
node study-tools/build.cjs
node study-tools/validate.cjs
.\.study-venv\Scripts\python.exe study-tools/verify_notebooks.py
```

三条命令的作用:

1. `build.cjs` - 生成学习指南(MD 和 HTML)、Topic Library 和 notebooks,末尾自动执行双语讲义和 QuantVault 模块
2. `validate.cjs` - 核对日期、课时、题库数量和本地链接,结果写进 `validation.json`
3. `verify_notebooks.py` - 在独立 kernel 里执行 notebook,结果写进 `notebook-validation.json`

只改一部分时可以单独运行:

- `node study-tools/bilingual-lessons.cjs` - 只更新双语讲义(之后要再运行 QuantVault 模块恢复导航)
- `node study-tools/quantvault.cjs` - 只更新 QuantVault 排期
- `node study-tools/validate-quantvault.cjs` - 核对 QuantVault

注意:

- 重新生成时,没改过 cell 的 notebook 会保留运行输出;改过的 notebook 需要再跑一次验证
- 原 623 道题、LeetCode 链接和 notebook 实验代码保持不变
- `study-tools/original-plan.md` 和 `study-tools/original-roadmap.md` 是只读快照,不是当前入口
- 日期和刷题安排已经直接改在生成好的文件里(`Reports/`、`AI_ENGINEER_DAILY_LEARNING_GUIDE.*`、`Study topics/`、`study-tools/manifest.json`),`study-tools/` 的生成脚本还没有跟着改。现在重新运行 `build.cjs`、`quantvault.cjs`、`bilingual-lessons.cjs` 会把日期改回 2026-10-05,刷题时段改回 1.5 小时,Top 150 全部丢失。要重新生成,必须先把这些改动写进脚本和 `original-plan.md`
- `AI_ENGINEER_*` 文件目前分两处:`AI_ENGINEER_DAILY_LEARNING_GUIDE` 在仓库根目录,其余在 `Reports/`,相互之间的链接已经按这个布局改好。但 `build.cjs`、`quantvault.cjs`、`bilingual-lessons.cjs` 仍然按"全部在根目录"写文件和链接。现在重新运行它们,会在根目录生成 4 份新文件,并把已改好的链接改回旧样子,`validate.cjs` 也可能报错。重新生成之前,要先改这些脚本里的输出路径和链接前缀
- 详细说明见 [study-tools/README.md](study-tools/README.md)
