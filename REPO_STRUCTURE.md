# Repo Structure

`ai-engineering-field-guide` 是一个数据驱动的 AI Engineer 指南：基于 6,964 条招聘信息（Built In 抓取）、面试经验和从业者故事，回答 AI Engineer 做什么、怎么面试、怎么做作品集、怎么转行。

repo 约有 23,874 个跟踪文件，其中约 99% 在 `job-market/` 下（原始 HTML、YAML 和抓取数据），所以这份文档对数据文件按目录和命名规则汇总，对脚本和文档逐个说明。

语言与工具：内容主要是 Markdown，数据是 YAML 和 CSV，脚本是 Python 3.13（`uv` 管理）。抓取用 requests、BeautifulSoup、lxml 加代理，LLM 抽取用 Z.ai 的 GLM 模型（Anthropic 兼容 API），分析用 pandas、matplotlib、Jupyter。

## 目录树

```
ai-engineering-field-guide/
├── README.md, AGENTS.md, STYLING.md, awesome.md, serve_wiki.py
├── .claude/commands/        1 个文件 (fetch-jobs.md)
├── images/                  1 张图
├── role/                    9 个 md - AI Engineer 角色分析
├── interview/               82 个文件 - 面试流程、题目、证据数据
│   ├── questions/  data/  _internal/
├── learning-paths/          6 个 md - 从其他岗位转行
├── portfolio/               28 个文件 - 作品集指南
├── webinars/                19 个文件 - 5 场 webinar 和 slides
├── wiki/                    23 个文件 - LLM 维护的知识 wiki
└── job-market/              23,699 个文件 - 数据集和流水线
    ├── data_raw/            8,051 个 YAML (9 个抓取日期)
    ├── data_structured/     8,051 个 YAML (LLM 增强)
    ├── images/              5 张图表
    └── _internal/           脚本、中间数据、评估
```

## 根目录

- `README.md` - 项目入口页，介绍指南的数据来源，并链接到 role、interview、learning-paths、portfolio、webinars 各部分。
- `AGENTS.md` - 给 AI 助手的项目说明：引入 `STYLING.md`，并指明 `wiki/` 是 LLM 维护的 wiki，需遵循 wiki 的 schema。
- `STYLING.md` - 写作规范：不用粗体、斜体和水平线，少用表格，文件名用反引号，百分比保留一位小数，研究结论用第一人称。
- `awesome.md` - 精选的外部资源清单（面试经验、系统设计、博客、书、课程），是调研时的参考列表。
- `serve_wiki.py` - 只用标准库的本地 HTTP 服务，把 markdown 渲染成带样式的 HTML 来浏览 wiki，并提供图片等静态文件。
- `.gitignore` - 忽略 Python 缓存、虚拟环境、`.env`、IDE 文件、`uv.lock`、`jobs/` 下的原始抓取文件、`.pkl` 和 `.parquet`，以及 `/_work-in-progress/`。
- `.claude/commands/fetch-jobs.md` - 每月抓取招聘数据的斜杠命令，按顺序执行 5 步流水线。
- `images/event-series-tweet.jpg` - 活动系列的社交宣传图。

## role/ - 角色分析

用招聘数据定义 AI Engineer 角色。

- `role/README.md` - 本部分导读，说明如何定义 AI Engineer 角色。
- `role/01-my-vision.md` - 我对 AI Engineer 角色的整体看法，以及与相邻岗位的区别。
- `role/02-skills.md` - 招聘信息中技能需求的统计分析。
- `role/03-responsibilities.md` - 招聘信息中工作职责的归类和统计。
- `role/04-use-cases.md` - 招聘信息里提到的 AI 应用场景及其主题聚类。
- `role/05-reality-vs-postings.md` - 从业者的真实工作与招聘信息描述之间的差距。
- `role/06-fde.md` - Forward Deployed Engineer 岗位在数据里的表现。
- `role/07-trends.md` - 2026 年各月份 AI 岗位市场的趋势变化。
- `role/08-trends-appendix.md` - 趋势分析的补充数据和细节。

## interview/ - 面试

面试流程、题目和证据数据。

- `interview/README.md` - 面试准备部分的导读。
- `interview/01-interview-process.md` - AI 工程岗位面试流程的分析（轮次、形式）。
- `interview/02-questions.md` - 面试题目概览，链接到 `questions/` 下各类题型。
- `interview/03-get-hired.md` - 如何拿到 offer 的建议。
- `interview/04-after-the-interview.md` - 面试之后的跟进、谈判和复盘。
- `interview/05-trends.md` - 2026 年面试趋势。

### questions/

- `interview/questions/questions.md` - AI 工程面试题总览。
- `interview/questions/01-theory.md` - 理论题（LLM、RAG、评估等）。
- `interview/questions/02-coding.md` - 编程题。
- `interview/questions/03-project-deep-dive.md` - 项目深挖面试怎么准备。
- `interview/questions/04-ai-system-design.md` - AI 系统设计面试。
- `interview/questions/05-behavioral.md` - 行为面试题。
- `interview/questions/06-home-assignments.md` - 带回家完成的作业（take-home）类型和例子。

### data/ - 证据库

- `interview/data/README.md` - 说明每道题都能追溯到真实来源。
- `interview/data/job-descriptions/` - 51 个 `<job_id>.yaml`，每个记录公司、岗位、面试流程描述，并链接回招聘信息。
- `interview/data/research-exports/` - 5 份研究笔记：home-assignments、interview-experiences、recruitment-evolution、role-analysis、trends。
- `interview/data/sources/` - 6 份来源索引：all-links、articles、discussion-threads、github-repos、github-search-methodology、verification-methodology。

### _internal/ - 调研工具

- `interview/_internal/ai-vs-ml-scoping.md` - 界定什么算 AI engineering、什么算 ML engineering 的规则。
- `interview/_internal/fetch_reddit.py` - 通过 Arctic-Shift API 抓取 Reddit 帖子和评论。
- `interview/_internal/xai_search.py` - 调用 x.ai Grok API 的网页和 X 搜索做调研。
- `interview/_internal/main.py` - hello-world 占位脚本。
- `interview/_internal/pyproject.toml` - 调研脚本的依赖。

## learning-paths/ - 转行路径

- `learning-paths/README.md` - 各岗位转 AI Engineer 的学习路径总览。
- `learning-paths/from-backend-engineer.md` - 后端工程师的转行路径。
- `learning-paths/from-data-engineer.md` - 数据工程师的转行路径。
- `learning-paths/from-data-scientist.md` - 数据科学家的转行路径。
- `learning-paths/from-frontend-engineer.md` - 前端工程师的转行路径。
- `learning-paths/from-ml-engineer.md` - ML 工程师的转行路径。

## portfolio/ - 作品集

- `portfolio/README.md` - 作品集部分的导读。
- `portfolio/01-types-of-projects.md` - 作品集项目的类型。
- `portfolio/02-how-to-pick-a-project.md` - 如何选项目。
- `portfolio/03-start-a-project.md` - 如何开始一个项目。
- `portfolio/04-polishing.md` - 项目打磨。
- `portfolio/05-present-the-project.md` - 如何展示项目。
- `portfolio/06-common-mistakes.md` - 常见错误。
- `portfolio/07-project-ideas.md` - 项目点子清单。

### _internal/

- `portfolio/_internal/README.md` - 说明这里是原始调研笔记。
- `portfolio/_internal/all-links.md` - 所有收集到的链接。
- `portfolio/_internal/articles.md` - 文章来源索引。
- `portfolio/_internal/discussion-threads.md` - 讨论帖来源索引。
- `portfolio/_internal/local-corpus.md` - 本地语料说明。
- `portfolio/_internal/podcast-sources.md` - 播客来源索引。
- `portfolio/_internal/fetched/` - 抓取的原始内容：`grok-responses/` 和 `reddit-posts/`。

## webinars/ - 网络研讨会

- `webinars/README.md` - webinar 系列导读。
- `webinars/01-a-day-of-ai-engineer.md` - Webinar 1：AI Engineer 的一天。
- `webinars/02-defining-the-role.md` - Webinar 2：定义 AI Engineer 角色。
- `webinars/03-the-interview-process.md` - Webinar 3：面试流程。
- `webinars/04-take-home-assignments.md` - Webinar 4：take-home 作业。
- `webinars/05-selecting-a-portfolio-project.md` - Webinar 5：选择作品集项目。
- `webinars/images/` - 5 张截图：1400-jobs、800-jobs-dedup、builtin、raw-data、structured-data。

### slides/

- `webinars/slides/ai-engineer-role.html` - 角色 webinar 的 HTML 幻灯片（另有 PDF 版）。
- `webinars/slides/interview-process.html` - 面试流程 webinar 的 HTML 幻灯片（另有 PDF 版）。
- `webinars/slides/job-market-analysis.html` - 招聘市场分析幻灯片。
- `webinars/slides/job-market-trends-2026-08.html` - 2026 年 8 月趋势幻灯片（另有 PDF 版）。
- `webinars/slides/to_pdf.py` - 把 HTML 幻灯片转成 PDF 的脚本。

## wiki/ - 知识 wiki

LLM 维护的知识库，采用 Karpathy 的 LLM Wiki 模式；`raw/` 只读，每个结论都要引用来源。

- `wiki/AGENTS.md` - wiki 的 schema：目录布局、规则，以及 ingest、query、lint 三种操作。
- `wiki/README.md` - wiki 导读。
- `wiki/index.md` - 所有 wiki 页面的目录。
- `wiki/log.md` - 每次 wiki 操作的时间线日志。
- `wiki/overview.md` - 整个 wiki 的概要。
- `wiki/summaries/` - 每个 repo 部分一页摘要：awesome、field-guide-readme、interview、job-market、learning-paths、portfolio、role、webinars，外加 Karpathy 的文章摘要。
- `wiki/concepts/` - 6 个概念页：ai-engineer-role、evaluation-differentiator、interview-process、llm-wiki-pattern、portfolio-projects、take-home-assignments。
- `wiki/entities/alexey-grigorev.md` - 作者 Alexey Grigorev 的实体页。
- `wiki/answers/repo-content-map.md` - repo 内容的文件级映射。
- `wiki/raw/2026-04-karpathy-llm-wiki.md` - Karpathy LLM Wiki 文章的原始文本。

## job-market/ - 数据集和流水线

### 顶层

- `job-market/README.md` - 数据集说明：覆盖范围（LA、纽约、伦敦、阿姆斯特丹、柏林、印度）、数据格式和主要发现。
- `job-market/analysis.ipynb` - 探索性分析 notebook。
- `job-market/pyproject.toml` - 包 `ai-engineer-research` 的配置，要求 Python 3.13 以上，依赖 anthropic、playwright、pandas、pydantic 等。
- `job-market/.python-version` - 固定 Python 3.13。
- `job-market/images/` - 5 张图表：integrator-vs-trainer、role-archetypes、skill-momentum、skill-trajectories、use-case-themes。

### 数据目录

文件名规则都是 `{job_id}_{Company}_{Title}.yaml`，按抓取日期分文件夹：2026-02-04、02-27、03-27、04-22、05-29、06-25、07-22、08-25、09-23，每个日期约 900 到 1,100 个文件。

- `job-market/data_raw/<date>/` - 8,051 个 YAML，直接从 HTML 解析（无 LLM），包含标题、公司、地点、工作类型、级别、浅层技能列表和完整描述。
- `job-market/data_structured/<date>/` - 8,051 个 YAML，LLM 增强后的结构化数据：公司信息、AI-First 或 AI-Support 分类、职责、用例、按类别分的技能、是否面向客户和是否管理岗。

### _internal/ 顶层脚本和文档

- `job-market/_internal/PIPELINE.md` - 流水线完整文档：流程图、环境变量、目录结构和各步命令。
- `job-market/_internal/extract_process.md` - 最初的抽取目标：全面抽取技能，并区分 ai-first 与 ai-support。
- `job-market/_internal/extract_llm.py` - 第 5 步：用 GLM 模型和 pydantic schema 做 LLM 抽取，写入 `data_structured/`。
- `job-market/_internal/final_structure.py` - LLM 输出的 pydantic 模型（`Skill`、`JobExtraction`）和技能类别。
- `job-market/_internal/classify_jobs.py` - 基于正则的标题分类（AI-First 与 AI-Support）。
- `job-market/_internal/backfill_location.py` - 从保存的 HTML 里补全早期运行丢失的多地点 `location` 字段。
- `job-market/_internal/fix_yaml.py` - 修复含未加引号冒号的 YAML。
- `job-market/_internal/pipeline_paths.py` - 共享的路径辅助函数和常量。
- `job-market/_internal/clean_dedup.ipynb` - 去重的探索 notebook。
- `job-market/_internal/all_responsibilities.txt` - 汇总的所有职责文本。
- `job-market/_internal/all_use_cases.txt` - 汇总的所有用例，共 24,502 条，来自 4,894 个职位。

### scrapers/ - 抓取

- `job-market/_internal/scrapers/scrape_builtin_requests.py` - 第 1 步：通过代理抓取 Built In 职位列表，输出 JSON 和 `all_jobs.csv`。
- `job-market/_internal/scrapers/clean_dedup.py` - 第 2 步：去掉垃圾公司和重复项，输出 `all_jobs_dedup.csv`。
- `job-market/_internal/scrapers/download_all_html.py` - 第 3 步：用 8 个线程下载职位页面 HTML。
- `job-market/_internal/scrapers/extract_from_html.py` - 第 4 步：把 HTML 解析成 `data_raw/` 的 YAML，不用 LLM。
- `job-market/_internal/scrapers/proxy_config.py` - 从环境变量或 `.env` 读取代理凭据。
- `job-market/_internal/scrapers/pagination/` - 旧的 Playwright 抓取脚本（5 个），requests 方式失败时作为备选。

### analysis/ - 分析

读取 `data_structured/`，生成 `role/` 章节的数据和 `job-market/images/` 的图表。

- `job-market/_internal/analysis/common.py` - 技能分类体系和共享的数据加载函数。
- `job-market/_internal/analysis/canonicalize_skills.py` - 技能名称规范化。
- `job-market/_internal/analysis/analyze.py` - 主要统计分析。
- `job-market/_internal/analysis/analyze_patterns.py` - 模式分析。
- `job-market/_internal/analysis/skills_analysis.py` - 技能需求分析。
- `job-market/_internal/analysis/support_roles.py` - AI-Support 类岗位分析。
- `job-market/_internal/analysis/support_skills_analysis.py` - AI-Support 岗位的技能分析。
- `job-market/_internal/analysis/title_analysis.py` - 职位标题分析。
- `job-market/_internal/analysis/finetuning_analysis.py` - 微调（fine-tuning）需求分析。
- `job-market/_internal/analysis/extract_responsibilities.py` - 生成 `all_responsibilities.txt`。
- `job-market/_internal/analysis/extract_use_cases.py` - 生成 `all_use_cases.txt`。
- `job-market/_internal/analysis/trends.py` - 按月份的趋势分析。
- `job-market/_internal/analysis/deep_trends.py` - 更深入的趋势分析。
- `job-market/_internal/analysis/deep_trends2.py` - 趋势分析的第二版。
- `job-market/_internal/analysis/charts.py` - 生成 `job-market/images/` 里的图表。

### eval/ - 抽取质量评估

- `job-market/_internal/eval/README.md` - 评估说明：2026 年 8 月模型从 glm-5.1 换到 glm-5.2，重新抽取后对 50 个抽样职位并排打分。
- `job-market/_internal/eval/build_eval.py` - 构建 A/B 抽样集。
- `job-market/_internal/eval/consistency.py` - 一致性检查。
- `job-market/_internal/eval/recall.py` - 召回率检查。
- `job-market/_internal/eval/fields.py` - 字段级检查。
- `job-market/_internal/eval/score.py` - 汇总打分。
- `job-market/_internal/eval/run_checks.sh` - 一次运行所有检查。
- `job-market/_internal/eval/grades.json` - 人工或模型的打分结果。
- `job-market/_internal/eval/manifest.json` - 抽样清单。

### jobs/ 和 data/ - 中间数据

- `job-market/_internal/jobs/builtin/` - 按地点和日期的列表 JSON（`{site}_{YYYYMMDD}.json`，site 有 amsterdam、berlin、india、la、london、newyork）；大部分被 gitignore。
- `job-market/_internal/jobs/raw/<date>/` - 下载的原始职位页面 HTML，共 7,476 个，被 gitignore。
- `job-market/_internal/data/all_jobs_dedup.csv` - 全局去重后的职位表。
- `job-market/_internal/data/scrapes/<date>/` - 每次抓取的 `all_jobs.csv` 和 `all_jobs_dedup.csv`。

## 数据流水线

按顺序：

1. `scrapers/scrape_builtin_requests.py` - 抓取职位列表
2. `scrapers/clean_dedup.py` - 去重
3. `scrapers/download_all_html.py` - 下载 HTML
4. `scrapers/extract_from_html.py` - HTML 转 `data_raw/` YAML
5. `extract_llm.py` - LLM 增强，写入 `data_structured/`

以上都在 `job-market/_internal/` 下运行，也就是 `fetch-jobs` 命令。之后 `analysis/*` 读取 `data_structured/`，产出 `role/` 章节和图表；`eval/*` 验证抽取质量；`webinars/slides` 和 `wiki/` 基于已发布内容构建。

## 发现的不一致

- `README.md` 和 `job-market/README.md` 写的是 6,964 个职位、8 次抓取，但数据目录里已有第 9 次（2026-09-23）。
- `AGENTS.md` 引用 `wiki/CLAUDE.md`，但磁盘上只有 `wiki/AGENTS.md`。
- `PIPELINE.md` 写第 5 步模型是 GLM-4.7，但输出里是 glm-5.2，eval README 提到 glm-5.1 和 glm-5.2。
