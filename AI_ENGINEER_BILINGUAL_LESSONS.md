# Bilingual Study Lessons
学习顺序：背景 → Question → Key Terms → 例子 → Short Answer → 中文回答 → 实验。
先读[Machine Learning Foundations](Study%20topics/ml-foundations-start-here.html)。

## Hash Maps

Topic: Hash Maps

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Hash Maps, how does it work, and when would you use it?

Hash Maps 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I use a dictionary when I need to remember previously seen values. For Two Sum, I check the complement before inserting the current number, so an element cannot match itself.

### 中文回答

哈希表把键映射到值，适合查找、计数和去重。平均查找和更新通常是 O(1)，但不能把平均复杂度当作最坏情况保证；键必须可哈希。

[深入材料与练习](Study%20topics/hash-maps.html)


## Arrays and Strings

Topic: Arrays and Strings

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Arrays and Strings, how does it work, and when would you use it?

Arrays and Strings 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I first check whether order matters and whether mutation is allowed. Repeated string concatenation can copy accumulated output; I normally collect pieces and join them.

### 中文回答

数组按位置保存元素，字符串保存字符序列。先确认是否可以原地修改以及空输入行为；Python 字符串不可变，反复拼接可能产生额外复制。

[深入材料与练习](Study%20topics/arrays-and-strings.html)


## Two Pointers

Topic: Two Pointers

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Two Pointers, how does it work, and when would you use it?

Two Pointers 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For sorted Two Sum, if the sum is too small I move the left pointer. Every other pair with the current left value and a smaller right value is also too small, so that elimination is safe.

### 中文回答

双指针用两个位置维护搜索范围或配对关系。只有排序、单调性或其他不变量允许安全排除候选时，才能移动指针；不能凭感觉跳过元素。

[深入材料与练习](Study%20topics/two-pointers.html)


## Sorting

Topic: Sorting

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Sorting, how does it work, and when would you use it?

Sorting 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I would use Python sorted for a new list and list.sort for in-place mutation. The sort is stable, which lets equal-key records preserve their previous order.

### 中文回答

排序把元素按规则排列，便于后续查找、分组或双指针处理。说明排序键和并列规则，计算排序本身的 O(n log n) 成本，并确认是否修改原输入。

[深入材料与练习](Study%20topics/sorting.html)


## Binary Search

Topic: Binary Search

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Binary Search, how does it work, and when would you use it?

Binary Search 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I use a half-open interval [lo, hi). For lower bound, everything before lo is smaller than the target and everything at or after hi is at least the target.

### 中文回答

二分查找要求搜索空间有序或判断条件单调。每次依据中点缩小范围，通常 O(log n)；先定义区间是否包含端点，再检查空输入和边界。

[深入材料与练习](Study%20topics/binary-search.html)


## Complexity Analysis

Topic: Complexity Analysis

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Complexity Analysis, how does it work, and when would you use it?

Complexity Analysis 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I count how often each element is processed. A nested while loop can still be linear if each pointer only moves forward n times.

### 中文回答

复杂度描述输入规模增长时运行时间和内存如何增长。先找循环、递归和数据结构的主要操作；渐近复杂度不能代替真实工作负载的性能测量。

[深入材料与练习](Study%20topics/complexity-analysis.html)


## Sliding Window

Topic: Sliding Window

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Sliding Window, how does it work, and when would you use it?

Sliding Window 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For a substring without repeated characters, I store each character last position. I advance the left boundary with max(left, last+1), so it never moves backwards.

### 中文回答

滑动窗口维护连续区间及其状态，适合某些子串和子数组问题。进入和离开窗口时更新计数；只有满足相应单调条件时才能保证线性扫描。

[深入材料与练习](Study%20topics/sliding-window.html)


## Prefix Sums

Topic: Prefix Sums

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Prefix Sums, how does it work, and when would you use it?

Prefix Sums 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For subarray sum k, I count prior prefix sums equal to current-k. I seed zero with count one to include subarrays starting at the first element.

### 中文回答

前缀和保存从起点累积到每个位置的总量，区间和由两个前缀相减得到。预处理 O(n)，区间查询 O(1)；检查端点和空区间。

[深入材料与练习](Study%20topics/prefix-sums.html)


## Stacks

Topic: Stacks

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Stacks, how does it work, and when would you use it?

Stacks 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For bracket validation I push opening brackets and match each closing bracket with the top. A closing bracket with an empty stack fails immediately.

### 中文回答

栈遵循后进先出，适合括号匹配、表达式和某些单调栈问题。明确栈中每个元素代表的状态，以及何时入栈和出栈。

[深入材料与练习](Study%20topics/stacks.html)


## Queues

Topic: Queues

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Queues, how does it work, and when would you use it?

Queues 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For breadth-first traversal I use deque.popleft rather than list.pop(0), which shifts the remaining list elements.

### 中文回答

队列遵循先进先出，适合待处理任务和 BFS。Python 可用 deque 实现高效两端操作；生产任务队列还需要持久化和重复处理策略。

[深入材料与练习](Study%20topics/queues.html)


## Heaps

Topic: Heaps

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Heaps, how does it work, and when would you use it?

Heaps 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For the largest k elements I keep a min-heap of size k. The root is the weakest retained candidate; a better candidate replaces it.

### 中文回答

堆支持快速取得最小值或最大值，适合 top-k 和调度。插入和弹出通常 O(log n)，查看堆顶 O(1)；堆并不意味着全部元素已排序。

[深入材料与练习](Study%20topics/heaps.html)


## Linked Lists

Topic: Linked Lists

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Linked Lists, how does it work, and when would you use it?

Linked Lists 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

To reverse a list I save the next pointer before overwriting it, reverse the edge, and then advance both pointers.

### 中文回答

链表用节点引用连接元素。已知节点或前驱时可高效修改连接，但按位置查找要遍历；删除时检查头尾和空链表。

[深入材料与练习](Study%20topics/linked-lists.html)


## LRU Cache

Topic: LRU Cache

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is LRU Cache, how does it work, and when would you use it?

LRU Cache 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I combine a hash map with a doubly linked list for O(1) lookup and recency updates. In Python OrderedDict provides a compact implementation of those operations.

### 中文回答

LRU 淘汰最久未使用的条目，可用哈希表加双向链表实现平均 O(1) 访问与更新。读取命中也要更新顺序，明确容量为零和并发行为。

[深入材料与练习](Study%20topics/lru-cache.html)


## BFS

Topic: BFS

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is BFS, how does it work, and when would you use it?

BFS 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I mark a node visited when I enqueue it. That prevents duplicate enqueues and makes the first distance final for unweighted edges.

### 中文回答

广度优先搜索逐层扩展节点，用队列管理待访问节点。无权图中可求最短边数；通常 O(V+E)，注意何时标记访问以免重复入队。

[深入材料与练习](Study%20topics/bfs.html)


## DFS

Topic: DFS

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is DFS, how does it work, and when would you use it?

DFS 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I use a visited set for graphs and an explicit stack when depth can exceed the recursion limit. For cycle detection in a directed graph I distinguish active from finished nodes.

### 中文回答

深度优先搜索沿路径深入，再回退。适合遍历、连通性和回溯；循环图需要访问状态，递归还受调用栈深度限制。

[深入材料与练习](Study%20topics/dfs.html)


## Trees

Topic: Trees

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Trees, how does it work, and when would you use it?

Trees 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For maximum depth, an empty tree contributes zero and a nonempty tree contributes one plus the larger child depth.

### 中文回答

树是层级结构。遍历方式取决于任务；二叉搜索树有额外排序约束，普通二叉树没有。性能取决于高度，不能默认树总是平衡的。

[深入材料与练习](Study%20topics/trees.html)


## Recursion

Topic: Recursion

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Recursion, how does it work, and when would you use it?

Recursion 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I define what the function returns before writing its recursive calls. For tree height, the contract is the number of nodes on the longest downward path.

### 中文回答

递归把问题分解为较小的同类问题。必须有终止条件，并说明每次如何接近终止；分析调用次数、栈空间和重复计算。

[深入材料与练习](Study%20topics/recursion.html)


## Key-Value Store

Topic: Key-Value Store

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Key-Value Store, how does it work, and when would you use it?

Key-Value Store 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I would start with a dictionary, define missing-key behavior, and add TTL only after the basic contract works. Persistence and concurrency change the requirements substantially.

### 中文回答

键值存储提供按键读取、写入和删除。先实现明确接口，再按需求加入 TTL、历史版本或持久化；这些能力各有一致性与边界约定。

[深入材料与练习](Study%20topics/key-value-store.html)


## TTL

Topic: TTL

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is TTL, how does it work, and when would you use it?

TTL 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I inject a clock and treat now >= expires_at as expired. Reads lazily remove expired values; a production memory bound may require periodic cleanup too.

### 中文回答

TTL 是条目的有效时长。定义到期边界和使用的时钟；过期后逻辑上不可读，不等于物理数据立即删除。

[深入材料与练习](Study%20topics/ttl.html)


## API Clients

Topic: API Clients

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is API Clients, how does it work, and when would you use it?

API Clients 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I set explicit deadlines, classify failures, validate the response schema, and retry only safe operations. I preserve the original cause when adding domain context.

### 中文回答

API 客户端负责调用外部接口并处理认证、错误和响应校验。配置超时和有限重试，避免日志泄露凭证；有副作用的请求需要幂等设计。

[深入材料与练习](Study%20topics/api-clients.html)


## Rate Limiter

Topic: Rate Limiter

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Rate Limiter, how does it work, and when would you use it?

Rate Limiter 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

A token bucket refills with elapsed time up to a capacity. Each admitted request consumes a token, allowing bounded bursts while controlling long-run rate.

### 中文回答

限流器控制单位时间内的请求数量，常见算法包括令牌桶。区分速率限制与并发限制，明确突发容量、分布式计数和失败时行为。

[深入材料与练习](Study%20topics/rate-limiter.html)


## Crawler

Topic: Crawler

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Crawler, how does it work, and when would you use it?

Crawler 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I keep a deduplicated frontier, normalize URLs, restrict allowed hosts, and bound concurrency and response size. Fetch failures become explicit outcomes.

### 中文回答

爬虫遍历链接并获取网页。维护去重集合、范围限制、请求超时和有限并发，并遵守网站访问规则；失败与空页面不能混为一谈。

[深入材料与练习](Study%20topics/crawler.html)


## Async

Topic: Async

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Async, how does it work, and when would you use it?

Async 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

Async is useful for many waiting network calls. A blocking function inside the event loop stalls other tasks, so I use async clients or explicitly offload blocking work.

### 中文回答

异步让等待 I/O 时可以调度其他任务。它不自动加速 CPU 计算；阻塞函数会阻塞事件循环，必须正确处理取消、超时和并发上限。

[深入材料与练习](Study%20topics/async.html)


## Concurrency

Topic: Concurrency

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Concurrency, how does it work, and when would you use it?

Concurrency 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I choose concurrency for waiting workloads and protect shared invariants. Correctness depends on coordination, not merely on whether two instructions run at the same instant.

### 中文回答

并发表示多个任务的生命周期重叠，不一定同时执行。适合隐藏 I/O 等待；共享状态仍需同步，并说明结果和异常如何汇总。

[深入材料与练习](Study%20topics/concurrency.html)


## Parallelism

Topic: Parallelism

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Parallelism, how does it work, and when would you use it?

Parallelism 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For CPU-heavy pure Python I consider processes, accounting for serialization, startup and memory. I benchmark the full workload because more workers can be slower.

### 中文回答

并行表示多个任务同时执行。CPU 密集任务可考虑多进程，但序列化、进程启动和内存复制会抵消收益，应先测量。

[深入材料与练习](Study%20topics/parallelism.html)


## GIL

Topic: GIL

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is GIL, how does it work, and when would you use it?

GIL 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

Threads can overlap I/O and native libraries may release the GIL. CPU-bound Python often benefits from processes; optional free-threaded builds have different assumptions.

### 中文回答

传统 CPython 的 GIL 限制多个线程同时执行 Python 字节码，但 I/O 和部分原生数值库可释放它。可选的 free-threaded 构建改变前提，面试时要说明运行环境。

[深入材料与练习](Study%20topics/gil.html)


## Race Conditions

Topic: Race Conditions

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Race Conditions, how does it work, and when would you use it?

Race Conditions 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I identify the shared invariant and guard the entire read-modify-write operation. For a database-backed job I use a transaction or conditional update rather than a local lock.

### 中文回答

竞争条件指结果取决于并发执行顺序。检查共享读写和跨步骤不变量；用锁、事务或避免共享状态解决，不能假设 GIL 保证业务操作原子性。

[深入材料与练习](Study%20topics/race-conditions.html)


## Vectorization

Topic: Vectorization

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Vectorization, how does it work, and when would you use it?

Vectorization 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I check shapes and broadcasting first, then compare a vectorized result with a small reference loop. Vectorization reduces Python overhead but may create large temporary arrays.

### 中文回答

向量化把逐元素 Python 循环转为数组批量操作，通常减少解释器开销。检查广播、临时数组和数值一致性，实际收益依工作负载而定。

[深入材料与练习](Study%20topics/vectorization.html)


## Profiling

Topic: Profiling

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Profiling, how does it work, and when would you use it?

Profiling 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I reproduce a representative workload, measure a baseline, profile the bottleneck, and change one thing. I rerun correctness tests and report workload, environment and repeated timings.

### 中文回答

性能分析先测量时间和内存分布以定位瓶颈，再做针对性优化。在同一数据与环境下比较前后结果，并同时验证正确性。

[深入材料与练习](Study%20topics/profiling.html)


## Debugging

Topic: Debugging

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Debugging, how does it work, and when would you use it?

Debugging 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I reduce the failing input, inspect the complete traceback and compare intermediate results with an independent expectation. I catch only errors I can handle and preserve exception chaining.

### 中文回答

排错先复现问题，缩小输入，保留 traceback，再逐步检验原因。比较中间结果与可信基线；修复后用原失败案例和正常案例验证。

[深入材料与练习](Study%20topics/debugging.html)


## Refactoring

Topic: Refactoring

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Refactoring, how does it work, and when would you use it?

Refactoring 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

I first capture existing valid behavior with characterization tests, isolate parsing from computation, and refactor in small steps. Bug fixes need separate expected-output decisions.

### 中文回答

重构在保持外部行为的前提下改善代码结构。先用测试锁定行为，再拆分职责和依赖；不要把功能变更藏在结构调整里。

[深入材料与练习](Study%20topics/refactoring.html)


## Code Review

Topic: Code Review

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is Code Review, how does it work, and when would you use it?

Code Review 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For AI-generated code I trace inputs to outputs, inspect external side effects and ask for a counterexample. Passing tests matter only if the tests check an independent requirement.

### 中文回答

代码审查检查正确性、边界、测试、安全和维护成本。对 AI 代码也应逐项核对需求，理解关键逻辑，并以实际执行证据支持结论。

[深入材料与练习](Study%20topics/code-review.html)


## NumPy Logistic Regression

Topic: NumPy Logistic Regression

### 学习背景

这属于Python与算法知识。先用小输入手算过程，再独立写代码并解释复杂度。

### Question

What is NumPy Logistic Regression, how does it work, and when would you use it?

NumPy Logistic Regression 是什么、如何工作、适用于什么情况？

### Key Terms

- Time complexity：输入变大时计算量如何增长。
- Edge case：空输入、重复值等容易遗漏的边界情况。

### 直观例子

先用3–5个元素的输入逐步追踪，再试空输入和重复值。对照下方英文题目与代码，说明本题的数据结构为什么适用。

### Short Answer

For mean log loss the weight gradient is X.T @ (p-y)/n. I add regularization to weights, check shapes and compare analytical gradients with finite differences.

### 中文回答

用 NumPy 实现逻辑回归时，先把线性分数经 sigmoid 转成二分类概率，再最小化对数损失。明确矩阵形状、梯度和正则项，测试数值稳定性。

[深入材料与练习](Study%20topics/numpy-logistic-regression.html)


## SELECT

Topic: SELECT

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use SELECT correctly, and what mistakes should you avoid?

怎样正确使用 SELECT，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I name columns explicitly so schema changes do not silently change the contract. SELECT does not imply a stable row order.

### 中文回答

SELECT 指定结果列及表达式。先确定每行代表什么，明确列名；没有 ORDER BY 时不能依赖返回顺序。

[深入材料与练习](Study%20topics/select.html)


## WHERE

Topic: WHERE

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use WHERE correctly, and what mistakes should you avoid?

怎样正确使用 WHERE，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I put row conditions in WHERE and group conditions in HAVING. A predicate on the nullable side of a LEFT JOIN in WHERE can discard unmatched rows.

### 中文回答

WHERE 在分组前过滤行。NULL 比较需要 IS NULL；在 WHERE 过滤 LEFT JOIN 右侧列，可能丢掉未匹配行。

[深入材料与练习](Study%20topics/where.html)


## ORDER BY

Topic: ORDER BY

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use ORDER BY correctly, and what mistakes should you avoid?

怎样正确使用 ORDER BY，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

For a stable top result I order by the score and a unique key. Without ORDER BY the database can return rows in any order.

### 中文回答

ORDER BY 定义结果顺序。需要唯一首行或分页时，加稳定的并列排序键，不能依赖数据库偶然返回顺序。

[深入材料与练习](Study%20topics/order-by.html)


## LIMIT

Topic: LIMIT

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use LIMIT correctly, and what mistakes should you avoid?

怎样正确使用 LIMIT，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

LIMIT controls result size but does not guarantee a cheap scan. I inspect the plan and use keyset pagination for deep ordered pages.

### 中文回答

LIMIT 限制输出行数，但不保证扫描成本低。先确定排序，再检查执行计划；深分页可考虑基于键的分页。

[深入材料与练习](Study%20topics/limit.html)


## NULL

Topic: NULL

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use NULL correctly, and what mistakes should you avoid?

怎样正确使用 NULL，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use IS NULL, not equality to NULL. COUNT(column) skips nulls while COUNT(*) counts rows; I avoid replacing missing financial data with zero without a business rule.

### 中文回答

NULL 表示缺失或未知，普通比较可能返回未知。用 IS NULL 检查；COUNT(*) 与 COUNT(column) 对 NULL 的处理不同。

[深入材料与练习](Study%20topics/null.html)


## GROUP BY

Topic: GROUP BY

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use GROUP BY correctly, and what mistakes should you avoid?

怎样正确使用 GROUP BY，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I decide the desired result grain before grouping. Joining two fact tables first can multiply rows and inflate totals, so I may aggregate each side before joining.

### 中文回答

GROUP BY 按键聚合行。先定义分组粒度，再选择聚合函数；错误连接可能在聚合前把数值重复放大。

[深入材料与练习](Study%20topics/group-by.html)


## HAVING

Topic: HAVING

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use HAVING correctly, and what mistakes should you avoid?

怎样正确使用 HAVING，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

WHERE filters individual rows and HAVING filters the computed group. To find classes with at least five students I group by class and count distinct students if duplicates are allowed.

### 中文回答

HAVING 过滤分组后的结果，例如总金额超过阈值的组合。能在行层过滤的条件一般写在 WHERE。

[深入材料与练习](Study%20topics/having.html)


## CASE

Topic: CASE

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use CASE correctly, and what mistakes should you avoid?

怎样正确使用 CASE，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use CASE for explicit categories and conditional aggregation. I include an ELSE when a default is intended and avoid comparing NULL with ordinary equality.

### 中文回答

CASE 根据条件返回不同值，可实现条件分类或条件聚合。分支按顺序判断，明确 ELSE 和 NULL 行为。

[深入材料与练习](Study%20topics/case.html)


## JOINs

Topic: JOINs

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use JOINs correctly, and what mistakes should you avoid?

怎样正确使用 JOINs，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I check whether the join keys are unique on each side. A LEFT JOIN retains unmatched left rows, but filtering right-side columns in WHERE can remove them.

### 中文回答

JOIN 按条件连接表。先检查两侧键是否唯一以及一对多关系；LEFT JOIN 保留左侧未匹配行，但后续过滤仍可能删除它们。

[深入材料与练习](Study%20topics/joins.html)


## Subqueries

Topic: Subqueries

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Subqueries correctly, and what mistakes should you avoid?

怎样正确使用 Subqueries，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I verify whether the subquery can return multiple rows and whether it is correlated. The optimizer may transform it, so I compare plans instead of assuming subqueries are slow.

### 中文回答

子查询把一个查询结果用于另一个查询。区分标量、集合和相关子查询，检查返回多行、NULL 与性能行为。

[深入材料与练习](Study%20topics/subqueries.html)


## CTEs

Topic: CTEs

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use CTEs correctly, and what mistakes should you avoid?

怎样正确使用 CTEs，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use CTEs to separate filtering, aggregation and ranking. They improve readability but do not automatically cache results; execution behavior depends on the engine and query.

### 中文回答

CTE 用 WITH 给中间查询命名，帮助组织复杂逻辑。可读性提高不等于执行更快，是否物化及优化行为要看数据库版本和计划。

[深入材料与练习](Study%20topics/ctes.html)


## EXISTS

Topic: EXISTS

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use EXISTS correctly, and what mistakes should you avoid?

怎样正确使用 EXISTS，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

For an anti-join I prefer NOT EXISTS when nulls are possible. NOT IN can become unknown if its subquery returns a null.

### 中文回答

EXISTS 判断是否存在匹配行，适合存在性过滤，避免为取右侧列而制造重复。NOT EXISTS 与带 NULL 的 NOT IN 行为不同。

[深入材料与练习](Study%20topics/exists.html)


## Window Functions

Topic: Window Functions

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Window Functions correctly, and what mistakes should you avoid?

怎样正确使用 Window Functions，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I distinguish PARTITION BY from ORDER BY and specify the frame when rolling semantics matter. A window result generally needs a subquery or QUALIFY to filter, depending on the engine.

### 中文回答

窗口函数在保留原行的同时计算分组或排序后的指标。明确 PARTITION、ORDER BY 和窗口范围；它不同于 GROUP BY 压缩行数。

[深入材料与练习](Study%20topics/window-functions.html)


## ROW_NUMBER

Topic: ROW_NUMBER

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use ROW_NUMBER correctly, and what mistakes should you avoid?

怎样正确使用 ROW_NUMBER，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use ROW_NUMBER for one deterministic row per group and add a unique tie breaker. It arbitrarily chooses among ties if the order is incomplete.

### 中文回答

ROW_NUMBER 为窗口内每行编号。若必须选唯一一行，需要稳定的并列排序键，否则同分行顺序可能不确定。

[深入材料与练习](Study%20topics/row-number.html)


## RANK

Topic: RANK

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use RANK correctly, and what mistakes should you avoid?

怎样正确使用 RANK，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

For scores 100,100,90, RANK returns 1,1,3. I clarify whether the request means three rows or three distinct salary levels before choosing a ranking function.

### 中文回答

RANK 对并列值给相同名次，后续名次留空，例如 1、1、3。适合允许并列排名的业务要求。

[深入材料与练习](Study%20topics/rank.html)


## DENSE_RANK

Topic: DENSE_RANK

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use DENSE_RANK correctly, and what mistakes should you avoid?

怎样正确使用 DENSE_RANK，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

For the top three distinct salaries I use DENSE_RANK per department and filter rank <= 3. More than three people can qualify because ties are retained.

### 中文回答

DENSE_RANK 对并列值给相同名次但不跳号，例如 1、1、2。明确要求是第几个不同分值还是第几行。

[深入材料与练习](Study%20topics/dense-rank.html)


## LAG

Topic: LAG

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use LAG correctly, and what mistakes should you avoid?

怎样正确使用 LAG，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

LAG means the previous observed row, not necessarily yesterday. I check date gaps when computing returns and partition by asset.

### 中文回答

LAG 读取有序窗口中的前一行或指定偏移行。它不是默认前一个自然日，缺日期时需先说明日历和数据粒度。

[深入材料与练习](Study%20topics/lag.html)


## LEAD

Topic: LEAD

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use LEAD correctly, and what mistakes should you avoid?

怎样正确使用 LEAD，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

LEAD can construct a future label for offline training, but that column must never enter prediction-time features. I record the label availability date separately.

### 中文回答

LEAD 读取窗口中的后一行。预测特征中使用未来行会造成泄漏，但构造未来标签时可以使用，须明确可用时间。

[深入材料与练习](Study%20topics/lead.html)


## Rolling Aggregations

Topic: Rolling Aggregations

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Rolling Aggregations correctly, and what mistakes should you avoid?

怎样正确使用 Rolling Aggregations，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

ROWS counts observed records; RANGE follows ordered values. I first aggregate to one row per date when a seven-day business definition requires daily grain.

### 中文回答

滚动聚合计算窗口内的和或均值。ROWS 按行数，RANGE 按排序值范围；缺日期和并列时间可能改变结果。

[深入材料与练习](Study%20topics/rolling-aggregations.html)


## Date Queries

Topic: Date Queries

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Date Queries correctly, and what mistakes should you avoid?

怎样正确使用 Date Queries，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use half-open intervals for timestamps so adjacent periods do not overlap. Trading days, calendar days and available records are different definitions.

### 中文回答

日期查询要明确时区、边界与业务日期，常用半开区间。筛选交易日还是自然日必须与任务一致。

[深入材料与练习](Study%20topics/date-queries.html)


## Transactions

Topic: Transactions

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Transactions correctly, and what mistakes should you avoid?

怎样正确使用 Transactions，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

For job submission I insert the run and its outbox event in one transaction. Isolation still matters: a transaction alone does not prevent every concurrency anomaly.

### 中文回答

事务把一组操作作为一致的逻辑单元提交或回滚。隔离级别影响并发读写；事务不能自动解决跨外部服务的副作用。

[深入材料与练习](Study%20topics/transactions.html)


## Constraints

Topic: Constraints

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Constraints correctly, and what mistakes should you avoid?

怎样正确使用 Constraints，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I use uniqueness for idempotency keys, NOT NULL for required data and checks for legal values. Application validation improves errors but cannot replace database enforcement under races.

### 中文回答

约束把非空、唯一、引用和检查规则交给数据库执行。应用校验不能完全替代数据库约束，尤其在并发写入时。

[深入材料与练习](Study%20topics/constraints.html)


## Parameterized Queries

Topic: Parameterized Queries

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Parameterized Queries correctly, and what mistakes should you avoid?

怎样正确使用 Parameterized Queries，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I bind values using the driver rather than formatting strings. Identifiers such as column names require an allowlist or safe identifier composition, not value placeholders.

### 中文回答

参数化查询把数据值与 SQL 结构分开，降低注入风险。表名、列名等标识符通常需单独白名单处理。

[深入材料与练习](Study%20topics/parameterized-queries.html)


## PostgreSQL Schema Design

Topic: PostgreSQL Schema Design

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use PostgreSQL Schema Design correctly, and what mistakes should you avoid?

怎样正确使用 PostgreSQL Schema Design，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I separate immutable experiment configuration from mutable execution state and append-only predictions. I make data/model versions explicit rather than embedding everything in an opaque blob.

### 中文回答

数据库设计先定义实体、行粒度和查询需求，再选择键、类型、约束和索引。常查字段应有清晰结构，不能把所有不变量藏进 JSON。

[深入材料与练习](Study%20topics/postgresql-schema-design.html)


## Primary and Foreign Keys

Topic: Primary and Foreign Keys

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Primary and Foreign Keys correctly, and what mistakes should you avoid?

怎样正确使用 Primary and Foreign Keys，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

A foreign key prevents an orphan prediction but does not guarantee the prediction belongs to the correct data version. That rule needs a richer schema or application check.

### 中文回答

主键唯一标识行，外键保证引用有效。它们不自动定义所有业务唯一性，必要时另加唯一约束。

[深入材料与练习](Study%20topics/primary-and-foreign-keys.html)


## Indexes

Topic: Indexes

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Indexes correctly, and what mistakes should you avoid?

怎样正确使用 Indexes，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I start from the query predicate and ordering. A composite index beginning with asset and then date helps an asset-specific date range; it is not interchangeable with every column ordering.

### 中文回答

索引可以加速部分查询，但占空间并增加写入成本。选择顺序需考虑过滤和排序条件，以实际查询计划验证。

[深入材料与练习](Study%20topics/indexes.html)


## EXPLAIN

Topic: EXPLAIN

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use EXPLAIN correctly, and what mistakes should you avoid?

怎样正确使用 EXPLAIN，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I compare estimated and actual row counts, scans, joins and sorts. EXPLAIN ANALYZE executes the statement, so I use it carefully for writes and realistic read workloads.

### 中文回答

EXPLAIN 显示查询计划，EXPLAIN ANALYZE 会实际执行。检查扫描、连接、估算与实际行数；修改型语句需特别谨慎。

[深入材料与练习](Study%20topics/explain.html)


## Query Optimization

Topic: Query Optimization

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Query Optimization correctly, and what mistakes should you avoid?

怎样正确使用 Query Optimization，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I inspect the plan, reduce unnecessary columns and rows, verify join grain, and compare timings on the same data. Snowflake pruning and warehouse behavior differ from PostgreSQL B-tree tuning.

### 中文回答

查询优化从真实慢查询和执行计划开始，检查连接粒度、统计信息、索引和扫描量。修改前后验证结果一致和延迟变化。

[深入材料与练习](Study%20topics/query-optimization.html)


## Run Analytics

Topic: Run Analytics

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Run Analytics correctly, and what mistakes should you avoid?

怎样正确使用 Run Analytics，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I separate attempts from logical runs so retries do not inflate success counts. I report the denominator and distinguish queue wait from execution time.

### 中文回答

运行分析按请求、运行或尝试的明确粒度统计成功率、重试和成本。失败尝试不能被覆盖，否则指标会过于乐观。

[深入材料与练习](Study%20topics/run-analytics.html)


## Percentiles

Topic: Percentiles

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Percentiles correctly, and what mistakes should you avoid?

怎样正确使用 Percentiles，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

I report p95 with sample size and the measurement window. Averaging per-shard p95 values does not produce the global p95.

### 中文回答

百分位表示分布中的位置，例如 p95 表示约 95% 观测不超过该值。说明样本、窗口和算法，不能平均不同组的 p95 来得到整体 p95。

[深入材料与练习](Study%20topics/percentiles.html)


## Financial Analytics

Topic: Financial Analytics

### 学习背景

这属于SQL数据查询知识。先明确一行数据代表什么、表如何关联，再理解查询语义。

### Question

How do you use Financial Analytics correctly, and what mistakes should you avoid?

怎样正确使用 Financial Analytics，应避免哪些错误？

### Key Terms

- Row grain：一行数据代表的业务单位，例如一笔交易或一个账户。
- NULL：未知或缺失值，不等同于零或空字符串。

### 直观例子

用账户和交易两张小表练习，加入一个没有交易的账户、一条缺失记录和重复数据。比较查询输出与手算结果，检查每行粒度。

### Short Answer

Before comparing revenue I align fiscal periods and units and specify the filing revision rule. Current restated data cannot automatically be used for historical trading decisions.

### 中文回答

金融查询先确认币种、单位、期间和版本，再聚合。相同财务项的不同披露版本不能随意相加，避免连接放大和未来信息泄漏。

[深入材料与练习](Study%20topics/financial-analytics.html)


## Train / Validation / Test Split

Topic: Train / Validation / Test Split

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What are training, validation and test sets, and why should they be separate?

训练集、验证集和测试集各是什么？为什么需要分开？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

例如用1000个彼此独立的历史样本预测数值：600个用于拟合权重，200个用于选择模型和配置，最后200个只用于最终估计。这个比例不是固定规则；金融时间序列通常必须按时间切分。训练像做练习，验证像模拟考试，测试像封存的最后一次考试。

### Short Answer

I fit parameters on training data, choose configurations on validation data, and reserve the test set for the final estimate. Repeatedly checking test results turns the test set into another validation set.

### 中文回答

训练集用于学习参数，验证集用于选择模型和设置，测试集用于最终样本外评估。反复看测试结果再修改模型，会把测试集变成验证集。金融数据还需遵守时间和标签可用性。

[深入材料与练习](Study%20topics/train-validation-test-split.html)


## Supervised and Unsupervised Learning; Baselines

Topic: Supervised and Unsupervised Learning; Baselines

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Supervised and Unsupervised Learning; Baselines, how does it work, and when would you use it?

Supervised and Unsupervised Learning; Baselines 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Supervised learning uses a specified target; clustering groups features without a target. A simple baseline makes a model score interpretable. Predicting the training mean is a valid regression baseline, but it is not a competitive financial-volatility baseline.

### 中文回答

监督学习用输入和已知目标学习预测关系；非监督学习在没有目标标签时寻找结构。回归预测数值，分类预测类别；先定义业务目标再选方法。 基线是简单可比较的方案，例如预测历史均值或使用过去波动率。复杂模型必须在相同样本和指标下与基线比较；不能默认复杂就更好。

[深入材料与练习](Study%20topics/supervised-and-unsupervised-learning-baselines.html)


## Data Leakage; Scaling; scikit-learn Pipelines

Topic: Data Leakage; Scaling; scikit-learn Pipelines

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Data Leakage; Scaling; scikit-learn Pipelines, how does it work, and when would you use it?

Data Leakage; Scaling; scikit-learn Pipelines 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Leakage uses information unavailable at prediction time or allows held-out data to influence training. A pipeline fits preprocessing inside each training fold. It does not repair future-looking features or incorrectly timed labels.

### 中文回答

泄漏是训练或选择模型时用了预测时不应知道的信息。包括未来数据、测试标签或在全数据上拟合预处理。先划分，再只在训练数据上拟合变换。 缩放调整特征尺度，例如标准化减去训练均值并除以训练标准差。对 Ridge、Lasso 等尺度敏感方法很重要；测试数据使用训练得到的变换。 Pipeline 将预处理和模型串成统一对象，让交叉验证每个训练折分别拟合变换。它能减少预处理泄漏，但不能修复本身含未来信息的特征。

[深入材料与练习](Study%20topics/data-leakage-scaling-scikit-learn-pipelines.html)


## MAE; RMSE

Topic: MAE; RMSE

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is MAE; RMSE, how does it work, and when would you use it?

MAE; RMSE 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

MAE averages absolute error in target units. RMSE takes the square root of average squared error and penalizes large errors more strongly. Neither establishes business value without a baseline and an error-cost definition.

### 中文回答

MAE 是预测误差绝对值的平均，单位与目标相同。可直观描述平均偏差，但不体现方向，需结合业务损失判断是否合适。 RMSE 是平方误差均值的平方根，单位与目标相同。它比 MAE 更强调大误差，但不是任何任务都应该优先选它。

[深入材料与练习](Study%20topics/mae-rmse.html)


## Bias-Variance; Overfitting; Regularization; Linear Regression

Topic: Bias-Variance; Overfitting; Regularization; Linear Regression

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Bias-Variance; Overfitting; Regularization; Linear Regression, how does it work, and when would you use it?

Bias-Variance; Overfitting; Regularization; Linear Regression 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

An overly flexible model can fit noise; an overly restricted model misses structure. Ridge penalizes squared coefficients, trading training fit for stability. Regularization strength is selected on validation data, not on the final test.

### 中文回答

偏差表示方法的系统性近似误差，方差表示模型对训练样本变化的敏感度。太简单可能欠拟合，太灵活可能过拟合，需用样本外验证比较。 过拟合是把训练数据的噪声也学进去，训练表现好但新数据差。可用合理验证、正则化和复杂度控制缓解，不只看训练误差。 正则化在拟合损失之外增加约束或惩罚，抑制过于灵活的模型。Ridge 使用 L2，Lasso 使用 L1 并可让部分系数为零；强度要在验证数据上选择。 线性回归用特征的加权和加截距预测连续数值，训练时学习这些权重。它是模型；train/validation/test 是评估流程，不是另一种模型。

[深入材料与练习](Study%20topics/bias-variance-overfitting-regularization-linear-regression.html)


## Logistic Regression; Precision; Recall; F1; Class Imbalance

Topic: Logistic Regression; Precision; Recall; F1; Class Imbalance

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Logistic Regression; Precision; Recall; F1; Class Imbalance, how does it work, and when would you use it?

Logistic Regression; Precision; Recall; F1; Class Imbalance 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Precision asks how many predicted positives are truly positive; recall asks how many actual positives were found. F1 combines them but omits true negatives. Logistic regression estimates probabilities; a decision threshold translates them into actions.

### 中文回答

逻辑回归虽然名字含 regression，通常用于分类。它将线性分数经 sigmoid 转为二分类概率，用对数损失学习参数，再用阈值作类别决策。 Precision 是判为正类的样本中真正为正类的比例，TP/(TP+FP)。它反映误报情况，需说明正类、阈值和分母为零时约定。 分类 Recall 是所有真正正类中被找到的比例，TP/(TP+FN)。它反映漏报情况，与检索 Recall@k 的任务和分母定义不同。 F1 是 precision 和 recall 的调和平均，2PR/(P+R)。它忽略真负例，是否适合取决于业务代价，不能替代完整误差分析。 类别不平衡时准确率可能误导。检查 precision、recall 和 PR 指标，阈值或类别权重在开发数据上选择；重采样只能在训练数据中进行。

[深入材料与练习](Study%20topics/logistic-regression-precision-recall-f1-class-imbalance.html)


## PR-AUC; ROC-AUC; Calibration

Topic: PR-AUC; ROC-AUC; Calibration

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is PR-AUC; ROC-AUC; Calibration, how does it work, and when would you use it?

PR-AUC; ROC-AUC; Calibration 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

ROC-AUC summarizes positive-negative ranking. Precision-recall measures emphasize positive retrieval under class imbalance. Calibration asks whether predictions near .7 occur about 70 percent of the time; a ranking metric does not answer that.

### 中文回答

精确率召回曲线比较不同阈值下的误报与覆盖取舍，受正类比例影响。Average Precision 和梯形积分 PR-AUC 不是必然相同的计算方式。 ROC-AUC 衡量正类相对负类的排序表现，基于 TPR 和 FPR。它不证明概率校准良好，严重类别不平衡时还要看 PR 和业务阈值。 校准检查预测概率是否与实际频率一致，例如预测 0.7 的样本是否约 70% 为正类。排序准确不等于校准良好，校准不能在最终测试集上拟合。

[深入材料与练习](Study%20topics/pr-auc-roc-auc-calibration.html)


## Decision Trees; Random Forests; Gradient Boosting

Topic: Decision Trees; Random Forests; Gradient Boosting

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Decision Trees; Random Forests; Gradient Boosting, how does it work, and when would you use it?

Decision Trees; Random Forests; Gradient Boosting 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Trees partition feature space; depth controls flexibility. Random forests average randomized trees to reduce variance. Boosting sequentially adds models to correct a loss-related residual signal.

### 中文回答

决策树按特征条件逐步切分空间，叶节点输出数值或类别。深度过大容易过拟合，要在验证数据上选择复杂度。 随机森林把多个经过样本和特征随机化的树进行平均或投票，主要减少方差。它不是保证优于其他模型，仍需样本外比较。 梯度提升依次加入模型以改进当前损失，常用浅树拟合负梯度信号。学习率和树数量控制拟合过程，过多迭代也可能过拟合。

[深入材料与练习](Study%20topics/decision-trees-random-forests-gradient-boosting.html)


## Cross-Validation; Hyperparameter Tuning

Topic: Cross-Validation; Hyperparameter Tuning

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Cross-Validation; Hyperparameter Tuning, how does it work, and when would you use it?

Cross-Validation; Hyperparameter Tuning 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Cross-validation estimates variation across appropriate held-out folds. Hyperparameter search chooses a configuration using those folds. An outer test or nested evaluation is needed to estimate the selected procedure without selection optimism.

### 中文回答

交叉验证用多个合适的训练／验证折比较方法与波动。独立样本可考虑 K-fold；时间序列需保持时间顺序，最终测试与选择过程分开。 超参数是训练前指定的配置，如 Ridge 强度、树深度。使用开发验证或交叉验证搜索；不是直接从最终测试结果选最好的设置。

[深入材料与练习](Study%20topics/cross-validation-hyperparameter-tuning.html)


## Feature Engineering; Interpretability; Feature Importance

Topic: Feature Engineering; Interpretability; Feature Importance

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Feature Engineering; Interpretability; Feature Importance, how does it work, and when would you use it?

Feature Engineering; Interpretability; Feature Importance 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Features encode information available at decision time. Permutation importance measures the loss in held-out performance after disrupting a feature; correlated features can substitute for each other and dilute importance.

### 中文回答

特征工程把原始信息转为模型输入，如历史收益和过去波动率。必须明确预测时这些信息是否可知，拟合型变换只用训练数据。 可解释性帮助理解模型如何关联输入与输出。线性系数、局部解释和置换重要性各有条件，相关性和模型解释不自动证明因果。 特征重要性依赖模型、数据和指标。置换重要性看打乱某特征后样本外性能变化；相关特征可能互相替代，重要性不是固有因果排名。

[深入材料与练习](Study%20topics/feature-engineering-interpretability-feature-importance.html)


## Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons

Topic: Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons, how does it work, and when would you use it?

Time-Series Splits; Walk-Forward Validation; Temporal Leakage; Forecast Horizons 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A forecast made after close t may use returns through t. Its next-five-return label is only available after close t+5. At validation origin v, training examples must have label_end < v when the model is frozen before that origin.

### 中文回答

时间序列划分用较早数据训练，较晚数据验证或测试。所有训练标签必须在预测时已获得，不能只按输入日期排序而忽略标签结束时间。 滚动向前验证模拟多个历史预测时点，每次只用当时已可知的数据。可用扩展窗口或固定长度窗口，明确模型更新频率。 时间泄漏是使用预测时尚未知的未来信息，包括未公布报表、未来收益和未结束标签。记录事件日期和实际公布／可用日期。 预测期限定义目标覆盖哪段未来，如未来五日波动率。标签要等该期限结束才可用，重叠标签还会造成误差相关。

[深入材料与练习](Study%20topics/time-series-splits-walk-forward-validation-temporal-leakage-forecast-horizons.html)


## Volatility Forecasting; Out-of-Sample Evaluation

Topic: Volatility Forecasting; Out-of-Sample Evaluation

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Volatility Forecasting; Out-of-Sample Evaluation, how does it work, and when would you use it?

Volatility Forecasting; Out-of-Sample Evaluation 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Use annualized root-mean-square daily returns: target(t)=sqrt(252*mean(r[t+1:t+6]^2)); baseline(t)=sqrt(252*mean(r[t-19:t+1]^2)). This defines realized RMS volatility without demeaning. Compare Ridge and baseline on identical dates.

### 中文回答

先定义波动率目标和时点，再与过去波动率基线比较。讲义的目标是未来五个日收益平方均值开根号后年化，不是自动等于任意波动率估计量。 样本外评估用未参与拟合的案例评价泛化；最终测试还不能参与模型选择。金融数据须保证可用时间，报告基线、各资产结果和不确定性。

[深入材料与练习](Study%20topics/volatility-forecasting-out-of-sample-evaluation.html)


## Regime Changes; Statistical Uncertainty; Prediction Intervals

Topic: Regime Changes; Statistical Uncertainty; Prediction Intervals

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Regime Changes; Statistical Uncertainty; Prediction Intervals, how does it work, and when would you use it?

Regime Changes; Statistical Uncertainty; Prediction Intervals 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A mean metric can hide changing error regimes. Overlapping forecast labels create dependent errors. Block resampling preserves some local dependence; residual intervals calibrated in one regime may fail after a shift.

### 中文回答

市场状态变化可能改变特征和目标关系，平均误差会掩盖局部失效。分时期评估，检查样本量和标签可用性，不凭一次变化就自动重训。 有限样本指标有不确定性，金融序列和重叠标签往往相关。区块重采样等方法也依赖假设和区块长度，不能把折间标准差直接当置信区间。 预测区间描述未来观测可能范围，区别于参数或均值的置信区间。覆盖率与假设有关，市场分布改变可能使历史校准失效。

[深入材料与练习](Study%20topics/regime-changes-statistical-uncertainty-prediction-intervals.html)


## Reproducibility; Model Versioning; Serving; Rollback

Topic: Reproducibility; Model Versioning; Serving; Rollback

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Reproducibility; Model Versioning; Serving; Rollback, how does it work, and when would you use it?

Reproducibility; Model Versioning; Serving; Rollback 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A deployed model needs a versioned preprocessing contract, model artifact, data reference and code reference. Loading a trusted artifact should reproduce predictions; untrusted pickle files can execute code.

### 中文回答

可复现需要记录代码、数据、依赖、随机性和配置。固定种子有帮助，但不同硬件和数值执行仍可能不同；复现不等于实证有效。 模型版本需关联训练数据、预处理、特征顺序、配置和代码。单独保存权重不足以可靠重现预测，需验证完整输入契约。 模型服务把经过校验的输入转为预测结果。训练和推理须使用一致预处理、特征顺序与单位，并有版本、异常和监控记录。 回滚应同步恢复模型、预处理及兼容输入接口，明确触发条件和可恢复版本。只换模型文件可能造成特征不一致。

[深入材料与练习](Study%20topics/reproducibility-model-versioning-serving-rollback.html)


## Drift; Retraining

Topic: Drift; Retraining

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Drift; Retraining, how does it work, and when would you use it?

Drift; Retraining 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Input drift is a distribution change; performance drift requires outcomes. A drift alarm should trigger diagnosis before retraining, since retraining on bad labels can make the system worse.

### 中文回答

输入漂移是特征分布变化，性能漂移需真实结果才能确认。漂移警报应触发数据与误差调查，不自动证明模型变差。 重训练需有数据质量、标签可用性和性能证据，并按同一验证协议比较候选模型。未经验证直接替换可能使系统更差。

[深入材料与练习](Study%20topics/drift-retraining.html)


## Requirements and API Design

Topic: Requirements and API Design

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design an API for submitting financial risk calculations.

请设计 Requirements and API Design 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Client → API validation → Run database → Worker → Result store → Status API Use POST /runs with an idempotency key and GET /runs/{id}. Persist configuration and ownership before acknowledging acceptance. Keep expensive calculation out of the request path. Synchronous execution is simpler for consistently short jobs. A queue adds operational cost but isolates slow calculations and allows recovery.

### 中文回答

先确认用户、负载和业务约束，再定义资源、状态与API契约。耗时研究任务返回任务ID，由用户查询状态；说明认证、错误和幂等规则。

[深入材料与练习](Study%20topics/requirements-and-api-design.html)


## Data Modeling and Indexes

Topic: Data Modeling and Indexes

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design persistent experiment runs, predictions and metrics.

请设计 Data Modeling and Indexes 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

API → Runs and Attempts → Predictions and Metrics → Query API Use foreign keys and unique constraints. Index run ownership/status and prediction run/as-of access patterns. Store artifact URI and checksum separately from relational metadata. A JSON payload helps evolving optional metadata; typed columns protect frequently queried invariants. Indexes increase write cost.

### 中文回答

先确定实体、每行粒度及常用查询，再设计主外键、约束和索引。用实际查询计划验证索引收益，同时考虑写入与存储成本。

[深入材料与练习](Study%20topics/data-modeling-and-indexes.html)


## Cache and API Service

Topic: Cache and API Service

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design caching for frequently requested financial reports.

请设计 Cache and API Service 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Client → Auth API → Versioned Cache → Report Service → Source data Key by authorization scope, normalized request and relevant versions. Use TTL for bounded staleness and single-flight protection for expensive misses. Read-through caching is simple; explicit invalidation is faster after changes but requires reliable event delivery. A cached answer still needs authorization.

### 中文回答

缓存键包含数据版本、查询参数与权限范围，定义过期和失效策略。冷缓存及依赖失败时需限制负载，避免缓存击穿。

[深入材料与练习](Study%20topics/cache-and-api-service.html)


## Queues and Job Scheduler

Topic: Queues and Job Scheduler

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a durable scheduler for research jobs.

请设计 Queues and Job Scheduler 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

API → Transactional Run and Outbox → Dispatcher → Queue → Worker → Results Commit run and outbox together; dispatch asynchronously. Workers claim leases and publish results idempotently. Acknowledge only after durable state is saved. A database queue can suffice at small scale; a broker improves decoupling but creates a dual-write problem unless an outbox bridges it.

### 中文回答

提交任务和outbox记录应在同一事务中写入，再异步派发。worker使用租约和幂等提交处理重复投递、进程崩溃与恢复。

[深入材料与练习](Study%20topics/queues-and-job-scheduler.html)


## Rate Limiting and Capacity

Topic: Rate Limiting and Capacity

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a rate limiter for an expensive inference API.

请设计 Rate Limiting and Capacity 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Client → Auth → Admission Limiter → Bounded Queue → Model Provider Use token buckets for rate and semaphores for concurrency. Return a documented retry response when the budget is exhausted; cap queue wait by deadline. A global atomic counter is precise but adds a dependency. Local partitioned budgets trade exactness for availability.

### 中文回答

分别限制到达速率和正在执行的请求数。平均并发约等于到达速率乘服务时间，还需峰值余量；限制队列长度和等待时间。

[深入材料与练习](Study%20topics/rate-limiting-and-capacity.html)


## Retries, Idempotency and Consistency

Topic: Retries, Idempotency and Consistency

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design safe retries for a job-submission service.

请设计 Retries, Idempotency and Consistency 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Client → Idempotency Ledger → Transaction → Outbox → Worker → Result Commit Bind an idempotency key to a request hash. The same key with a different payload is a conflict. Retry safe operations with exponential backoff and jitter. Strong consistency helps admission invariants; eventually consistent progress displays may be acceptable. Do not promise exactly-once delivery from retry logic.

### 中文回答

幂等键绑定请求内容，重复提交返回原状态或结果。暂时失败采用有次数限制的退避重试；超时不能证明远端没有成功。

[深入材料与练习](Study%20topics/retries-idempotency-and-consistency.html)


## Latency and Observability

Topic: Latency and Observability

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Diagnose a slow report service.

请设计 Latency and Observability 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Client span → API span → Retrieval span → Tool span → Model span → Report span Measure p50/p95 with sample counts and realistic concurrency. Optimize the measured bottleneck, then compare quality, cost and errors on the same workload. Parallel independent calls reduce critical-path time but may raise cost and contention. Streaming improves perceived latency without necessarily reducing total completion time.

### 中文回答

用请求关联ID、日志、指标和追踪定位各环节耗时，观察p50和p95。定义可采取行动的告警，并保护敏感数据。

[深入材料与练习](Study%20topics/latency-and-observability.html)


## CI/CD and AWS Deployment

Topic: CI/CD and AWS Deployment

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Release a containerized AI API safely.

请设计 CI/CD and AWS Deployment 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

GitHub Actions → OIDC role → ECR image → ECS Fargate → CloudWatch Separate PR tests from paid integration checks. Use short-lived federated credentials, least-privilege roles and explicit image digests. Configure health checks and rollback instructions. A single task is a learning deployment, not high availability. Externalize durable state before relying on task replacement for recovery.

### 中文回答

自动验证代码后构建版本化镜像，使用最小权限部署并做健康检查。保留可回滚版本，验证环境配置与应用兼容性。

[深入材料与练习](Study%20topics/ci-cd-and-aws-deployment.html)


## Financial Research RAG

Topic: Financial Research RAG

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a financial research assistant with verifiable citations.

请设计 Financial Research RAG 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Ingestion → Versioned Chunks → Hybrid Retrieval → Reranker → Grounded Generator → Citation Checks Start with a simple embedding model and fixed chunk configuration, then compare recall, redundancy and answer quality on labeled questions. Keep access filters before retrieval and generation. Larger chunks preserve context but consume budget; MMR improves diversity but can remove useful similar passages. It does not guarantee every source appears.

### 中文回答

按实体、期间和权限检索财务证据，保留原始位置与单位。生成答案前检查证据充足性，输出可核验引用并在不足时拒答。

[深入材料与练习](Study%20topics/financial-research-rag.html)


## RAG Evaluation and Retrieval Trade-offs

Topic: RAG Evaluation and Retrieval Trade-offs

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Improve a RAG pipeline that retrieves five chunks from one source.

请设计 RAG Evaluation and Retrieval Trade-offs 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Labeled Queries → Retrieval Configs → Ranked Results → Retrieval Metrics → Answer Checks Change one factor at a time. Track relevant-evidence coverage, rank and redundancy, then inspect grounded answers. Keep document/version splits where leakage is possible. MMR balances relevance and novelty; reranking reorders candidates but cannot recover evidence never retrieved. Whole-section expansion is a separate experiment.

### 中文回答

建立标注查询与相关证据集，分别测量召回、排序、重复及答案依据。分块、MMR和重排序的收益必须与延迟、成本和覆盖损失一起比较。

[深入材料与练习](Study%20topics/rag-evaluation-and-retrieval-trade-offs.html)


## Financial Text-to-SQL

Topic: Financial Text-to-SQL

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a financial analytics assistant over Snowflake.

请设计 Financial Text-to-SQL 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Question → Semantic Context → Structured SQL Proposal → Policy Validation → Snowflake → Result Explanation Provide table grain, approved measures and examples. Use parameterized values and allowlisted objects, read-only credentials, timeout and result limits; parse and validate generated SQL. A plain LLM plus connector is a useful baseline. A semantic layer can reduce ambiguity but needs curated definitions and evaluation.

### 中文回答

提供受控schema与业务口径，验证SQL后以只读、限时和限量权限执行。结果核对单位、日期与连接粒度，无法明确的问题先澄清。

[深入材料与练习](Study%20topics/financial-text-to-sql.html)


## Text-to-SQL Evaluation and Data Quality

Topic: Text-to-SQL Evaluation and Data Quality

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Evaluate an assistant answering financial statement questions.

请设计 Text-to-SQL Evaluation and Data Quality 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

SEC Snapshot → Curated Tables → Reference SQL → Assistant SQL → Result Comparator Check units, periods, duplicates and revision rules before evaluating the LLM. Compare sorted normalized result sets with appropriate numeric tolerances. Exact SQL match is simple but rejects equivalent queries. Execution accuracy can miss coincidental correctness on a tiny dataset; add discriminating fixtures.

### 中文回答

以执行结果和业务语义评估SQL，同时测试权限、成本和拒答。空值、重复、单位与时点问题应有明确数据检查。

[深入材料与练习](Study%20topics/text-to-sql-evaluation-and-data-quality.html)


## Agents with Human Approval

Topic: Agents with Human Approval

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a tool-using agent that requires approval before a consequential action.

请设计 Agents with Human Approval 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

User → Planner → Tool Schema Validation → Approval Record → Authorized Executor → Audit Log Use deterministic workflow edges where possible. Bind approval to action parameters and state/version; reject changed or expired approvals. Limit iterations and tool permissions. An autonomous loop is flexible but harder to test. A fixed workflow with a small planning step is easier to reason about for regulated calculations.

### 中文回答

模型提出操作后，服务端先检查契约与权限；高影响操作展示具体参数供人批准。批准与操作内容绑定，记录审计并避免重复执行。

[深入材料与练习](Study%20topics/agents-with-human-approval.html)


## Agent Memory and Tool Contracts

Topic: Agent Memory and Tool Contracts

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design safe memory and tool contracts for a research assistant.

请设计 Agent Memory and Tool Contracts 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Conversation → Scoped State → Tool Router → Validated Tool → Result State → Answer Separate conversational summaries from authoritative experiment records. Version tool schemas and validate enums, dates and asset lists server-side. Long context is simple but expensive and may contain stale instructions. Retrieval from scoped records improves selectivity but needs access checks.

### 中文回答

定义工具参数、错误与副作用，区分可信状态和外部文本。记忆需要权限、版本和保留期，不能自动升级为可信指令。

[深入材料与练习](Study%20topics/agent-memory-and-tool-contracts.html)


## AI-Assisted Experiment Platform

Topic: AI-Assisted Experiment Platform

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design an AI interface to reproducible investment research jobs.

请设计 AI-Assisted Experiment Platform 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Intent → Validated Config → Runs and Outbox → Queue → Deterministic Worker → Artifacts → Summary Use allowlisted assets and model types. Save configuration, data snapshot, code version and results. LLM selects and explains tools; Python computes all financial and ML metrics. Free-form code execution expands power and security scope. Restricted tools sacrifice flexibility for reproducibility and testability.

### 中文回答

实验记录数据、代码、模型、参数与指标版本。任务运行应可恢复、可复现，并将AI建议与实际执行权限分开控制。

[深入材料与练习](Study%20topics/ai-assisted-experiment-platform.html)


## Volatility Forecasting Service

Topic: Volatility Forecasting Service

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design training and serving for a five-day volatility forecast.

请设计 Volatility Forecasting Service 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Point-in-Time Features → Purged Walk-Forward Training → Model Registry → Predict Tool → Delayed Label Evaluation Keep preprocessing inside the trained pipeline. Purge training labels unavailable at validation origin. Freeze alpha before final test, persist the artifact and feature schema, and validate predict inputs. Ridge is easy to debug and cheap to serve. A shallow tree is optional only after the baseline and evaluation contract are stable.

### 中文回答

使用时点正确的特征和时间顺序验证，与合理金融基线比较。训练与服务保持预处理一致，监控预测误差、延迟和漂移并支持回滚。

[深入材料与练习](Study%20topics/volatility-forecasting-service.html)


## Evaluation and Regression Pipeline

Topic: Evaluation and Regression Pipeline

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design an evaluation gate for an AI release.

请设计 Evaluation and Regression Pipeline 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Versioned Dataset → Candidate Build → Offline Tests → Model Evals → Human Review → Release Gate Track task success, severe failures, latency and cost. Segment by scenario and inspect disagreements. Use deterministic assertions for numbers and calibrated human/LLM review for open text. A single composite score simplifies a dashboard but can hide safety or correctness regressions. Keep hard constraints distinct from optimization metrics.

### 中文回答

用固定案例检查每次提示、检索或模型变更，再用独立测试估计效果。设置质量门槛和失败分类，防止平均分掩盖严重错误。

[深入材料与练习](Study%20topics/evaluation-and-regression-pipeline.html)


## AI Latency and Cost Budget

Topic: AI Latency and Cost Budget

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Scale an AI assistant under a latency and cost budget.

请设计 AI Latency and Cost Budget 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Request Classifier → Scoped Cache → Model Router → Parallel Safe Tools → Streamed Answer Measure the critical path first. Try prompt/context reduction, caching or routing one change at a time. Count retries and background calls in cost. Small models reduce unit cost but may create more retries or tool errors. Semantic caching requires equivalence and permission checks, not just vector proximity.

### 中文回答

分解检索、工具、模型及排队耗时，记录token和实际费用。缓存、路由和流式输出要在质量门槛下验证收益。

[深入材料与练习](Study%20topics/ai-latency-and-cost-budget.html)


## AI Security and Reliability

Topic: AI Security and Reliability

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Handle prompt injection, unauthorized access and tool failures.

请设计 AI Security and Reliability 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Untrusted Input → Authenticated Scope → Retrieval Filter → Tool Policy → Sandboxed Executor → Audit Treat prompts and retrieved documents as untrusted data. Enforce least privilege in database and tool layers; use allowlists, bounded execution and explicit approval for sensitive effects. A prompt instruction can reduce accidental misuse but is not an access-control boundary. Isolation and deterministic policy add implementation cost but remain enforceable.

### 中文回答

对检索和工具落实权限、租户隔离和资源限制，外部文本只作数据。测试注入、敏感数据泄露和依赖失败，明确安全降级行为。

[深入材料与练习](Study%20topics/ai-security-and-reliability.html)


## Transfer Mock: Contract Review Assistant

Topic: Transfer Mock: Contract Review Assistant

### 学习背景

这属于System Design：根据用户需求设计多个组件如何协作。先说明假设，再讨论容量、数据、失败和取舍。

### Question

Design a contract-review assistant for a new business domain.

请设计 Transfer Mock: Contract Review Assistant 场景中的系统，说明需求、架构、取舍和失败处理。

### Key Terms

- Requirement：系统必须满足的行为或性能约束。
- Trade-off：一个选择带来的收益及付出的代价。
- Failure mode：依赖或组件出错时的具体表现。

### 直观例子

把Risk Copilot当作具体系统：用户提交研究问题，系统检索或计算，再返回结果。围绕本页主题说明一个依赖变慢或失败后用户会看到什么。

### Short Answer

Upload → Authorized Parsing → Clause Retrieval → Structured Findings → Human Review → Audit Reuse retrieval, evaluation and approval patterns, but create domain-specific labels and failure criteria. Preserve source spans and model/prompt versions. A general chat interface is flexible; structured findings and review queues make evidence and ownership easier to audit.

### 中文回答

先明确合同审阅范围与风险类别，检索并引用条款，区分证据与建议。保护敏感合同，对重要决策保留人工复核及审计。

[深入材料与练习](Study%20topics/transfer-mock-contract-review-assistant.html)


## Tokenization

Topic: Tokenization

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Tokenization, how does it work, and when would you use it?

Tokenization 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Text is converted into token IDs; tokens need not correspond to words. I measure actual token counts for the selected model because cost and context limits operate on tokens.

### 中文回答

文本被转换成token编号；token不等于单词。实际token数决定输入长度和计费，应使用所选模型的分词器计数。

[深入材料与练习](Study%20topics/tokenization.html)


## Next-Token Prediction

Topic: Next-Token Prediction

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Next-Token Prediction, how does it work, and when would you use it?

Next-Token Prediction 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

An autoregressive language model predicts a distribution for the next token conditioned on preceding tokens. Fluent continuation does not establish factual truth or authorize a tool action.

### 中文回答

模型根据已有文本预测下一个token的概率。生成流畅不代表事实正确，也不能代替权限检查。

[深入材料与练习](Study%20topics/next-token-prediction.html)


## Context Windows

Topic: Context Windows

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Context Windows, how does it work, and when would you use it?

Context Windows 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The context budget includes relevant input and generated output under the provider contract. I prioritize evidence and preserve provenance rather than assuming a longer window guarantees better reasoning.

### 中文回答

上下文窗口限制模型一次处理的内容。输入、检索证据和输出需共同规划；更长上下文不保证回答更好。

[深入材料与练习](Study%20topics/context-windows.html)


## Temperature

Topic: Temperature

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Temperature, how does it work, and when would you use it?

Temperature 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Temperature rescales logits before sampling. Lower values usually concentrate probability, but zero temperature does not guarantee identical results across serving changes or numerical execution.

### 中文回答

温度调整采样概率分布，低温通常更集中。温度为零也不保证跨服务版本完全一致。

[深入材料与练习](Study%20topics/temperature.html)


## Top-p

Topic: Top-p

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Top-p, how does it work, and when would you use it?

Top-p 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Nucleus sampling retains a probability-mass prefix of candidate tokens. I usually tune one sampling control at a time and evaluate task consistency rather than assuming one setting is universally best.

### 中文回答

Top-p保留累计概率达到阈值的一组候选token。应一次调整一个采样参数并验证效果。

[深入材料与练习](Study%20topics/top-p.html)


## Transformer and Attention Fundamentals

Topic: Transformer and Attention Fundamentals

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Transformer and Attention Fundamentals, how does it work, and when would you use it?

Transformer and Attention Fundamentals 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Attention mixes token representations using compatibility scores between queries and keys and weighted values. Causal masking prevents an autoregressive token from attending to future tokens during prediction.

### 中文回答

注意力通过query与key的匹配分数加权value表示。自回归模型用因果遮罩防止读取未来token。

[深入材料与练习](Study%20topics/transformer-and-attention-fundamentals.html)


## LLM Limitations

Topic: LLM Limitations

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is LLM Limitations, how does it work, and when would you use it?

LLM Limitations 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A model can produce plausible unsupported details, mishandle numbers and follow malicious context. I ground claims, delegate arithmetic to deterministic tools and test failure cases rather than trusting fluency.

### 中文回答

模型可能编造事实、算错数字或受到恶意文本影响。引用证据、确定性计算工具及失败测试共同降低风险。

[深入材料与练习](Study%20topics/llm-limitations.html)


## Model Selection

Topic: Model Selection

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Model Selection, how does it work, and when would you use it?

Model Selection 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I compare candidates on the actual task, latency, cost, context needs and data constraints. A benchmark ranking is a starting point, not proof of performance on financial questions.

### 中文回答

在实际任务上比较质量、延迟、成本和数据约束。公开榜单不能直接证明金融任务表现。

[深入材料与练习](Study%20topics/model-selection.html)


## Prompt Engineering

Topic: Prompt Engineering

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Prompt Engineering, how does it work, and when would you use it?

Prompt Engineering 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I specify the task, inputs, output schema and constraints, then test the prompt on representative and adversarial cases. A clearer prompt cannot replace missing data or server-side validation.

### 中文回答

提示应说明任务、输入、输出格式和限制，并用真实及对抗案例验证。提示不能替代缺失数据或服务端校验。

[深入材料与练习](Study%20topics/prompt-engineering.html)


## Few-Shot Examples

Topic: Few-Shot Examples

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Few-Shot Examples, how does it work, and when would you use it?

Few-Shot Examples 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Examples demonstrate the intended mapping and edge cases. I include representative ambiguity and refusal behavior, avoid leaking test answers and version examples with the prompt.

### 中文回答

少量示例展示输入到输出的映射，包含模糊情况和拒答边界。示例须版本化，不能泄露测试答案。

[深入材料与练习](Study%20topics/few-shot-examples.html)


## Prompt Versioning

Topic: Prompt Versioning

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Prompt Versioning, how does it work, and when would you use it?

Prompt Versioning 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I record prompt text, examples, model configuration and tool schema as a versioned configuration. A changed prompt is a behavior change that requires regression evaluation.

### 中文回答

记录提示版本、模型、配置与评估结果，才能定位变更造成的退化并回滚。

[深入材料与练习](Study%20topics/prompt-versioning.html)


## Structured Outputs

Topic: Structured Outputs

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Structured Outputs, how does it work, and when would you use it?

Structured Outputs 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A schema constrains the output shape, but valid JSON can still contain false or invalid business values. I validate enums, bounds and cross-field rules before using the result.

### 中文回答

结构化输出约束格式，但格式正确不等于内容正确。仍须检查字段、数值和业务约束。

[深入材料与练习](Study%20topics/structured-outputs.html)


## Pydantic

Topic: Pydantic

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Pydantic, how does it work, and when would you use it?

Pydantic 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Typed validation converts boundary data into a checked contract. I decide explicitly whether coercion is acceptable and add domain validators for units, dates and mutually dependent fields.

### 中文回答

Pydantic验证数据类型及约束，适合定义API和工具输入输出。业务规则仍需显式实现。

[深入材料与练习](Study%20topics/pydantic.html)


## JSON Recovery

Topic: JSON Recovery

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is JSON Recovery, how does it work, and when would you use it?

JSON Recovery 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

On malformed output I prefer a bounded retry or explicit error over silently guessing missing financial fields. Recovering syntax does not justify changing business meaning.

### 中文回答

解析失败时可有次数受限的修复流程。不能静默改动金融数值，失败应保留诊断并明确返回。

[深入材料与练习](Study%20topics/json-recovery.html)


## Prompting vs. RAG vs. Fine-Tuning

Topic: Prompting vs. RAG vs. Fine-Tuning

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Prompting vs. RAG vs. Fine-Tuning, how does it work, and when would you use it?

Prompting vs. RAG vs. Fine-Tuning 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I use prompting for instruction and format, retrieval for external changing evidence, and fine-tuning for repeatable behavior when justified by data and evaluation. They can complement one another.

### 中文回答

提示定义任务，RAG提供可更新证据，微调改变模型行为。根据失败来源选择方案，先建立可测量的基线。

[深入材料与练习](Study%20topics/prompting-vs-rag-vs-fine-tuning.html)


## LoRA

Topic: LoRA

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is LoRA, how does it work, and when would you use it?

LoRA 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Low-rank adaptation learns a small parameter update while keeping base weights largely fixed. It reduces trainable parameter cost but does not eliminate dataset quality, validation or deployment concerns.

### 中文回答

LoRA训练低秩适配参数以减少可训练参数。仍需要合格训练数据、评估和部署兼容性检查。

[深入材料与练习](Study%20topics/lora.html)


## Quantization

Topic: Quantization

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Quantization, how does it work, and when would you use it?

Quantization 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Lower-precision weights can reduce memory and sometimes inference cost. Hardware kernels, workload and quality degradation determine whether the change helps in practice.

### 中文回答

量化降低权重或计算精度以节省内存和可能的成本。须验证实际硬件上的速度及质量变化。

[深入材料与练习](Study%20topics/quantization.html)


## Embeddings

Topic: Embeddings

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Embeddings, how does it work, and when would you use it?

Embeddings 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Embeddings map inputs to vectors optimized for a training objective. Semantic proximity is model-dependent; a high similarity score is not a probability that an answer is correct.

### 中文回答

嵌入把文本映射为向量以比较语义。索引与查询须使用兼容模型，并在业务查询上验证。

[深入材料与练习](Study%20topics/embeddings.html)


## Vector Similarity

Topic: Vector Similarity

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Vector Similarity, how does it work, and when would you use it?

Vector Similarity 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Cosine similarity compares vector direction and requires a defined zero-vector policy. I check dimensions, model versions and normalization before interpreting retrieval scores.

### 中文回答

向量相似度衡量表示的接近程度，不等于事实相关性。余弦与点积的含义取决于归一化方式。

[深入材料与练习](Study%20topics/vector-similarity.html)


## Chunking

Topic: Chunking

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Chunking, how does it work, and when would you use it?

Chunking 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Chunk boundaries determine what evidence can be retrieved together. I vary size and overlap on a labeled set, measuring recall, redundancy, answer quality and token cost instead of selecting by intuition alone.

### 中文回答

分块平衡语义完整性与检索粒度。块大小、重叠和文档结构应作为实验变量，而非固定最佳值。

[深入材料与练习](Study%20topics/chunking.html)


## Metadata

Topic: Metadata

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Metadata, how does it work, and when would you use it?

Metadata 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Document ID, version, section, date and access scope let retrieval preserve provenance and apply filters. Incorrect metadata can cause stale answers or unauthorized exposure even with a good embedding model.

### 中文回答

元数据保存来源、页码、日期、版本及权限。它支持过滤、引用和审计，不能由模型随意补造。

[深入材料与练习](Study%20topics/metadata.html)


## Context Budgets

Topic: Context Budgets

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Context Budgets, how does it work, and when would you use it?

Context Budgets 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I allocate room for instructions, evidence, tool results and output. Section expansion may restore missing context but displaces other evidence and increases input cost.

### 中文回答

分配系统提示、历史、证据和输出的token预算。增加证据可能增加成本并稀释重点，应测量质量收益。

[深入材料与练习](Study%20topics/context-budgets.html)


## Keyword / Vector / Hybrid Search

Topic: Keyword / Vector / Hybrid Search

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Keyword / Vector / Hybrid Search, how does it work, and when would you use it?

Keyword / Vector / Hybrid Search 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Keyword search helps exact identifiers while vectors help semantic paraphrases. Hybrid search combines candidate signals, often with rank fusion, then evaluates the combined ranking on real queries.

### 中文回答

关键词适合精确术语，向量适合语义表达，混合检索合并两类信号。组合权重需用标注查询验证。

[深入材料与练习](Study%20topics/keyword-vector-hybrid-search.html)


## MMR

Topic: MMR

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is MMR, how does it work, and when would you use it?

MMR 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Maximal marginal relevance balances query relevance with novelty relative to selected results. It can reduce near-duplicate chunks but does not guarantee source diversity or better answer quality.

### 中文回答

MMR平衡查询相关性与结果间多样性，可减少重复来源。它不保证一定覆盖多个来源，也不能保证召回所有相关证据。

[深入材料与练习](Study%20topics/mmr.html)


## Reranking

Topic: Reranking

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Reranking, how does it work, and when would you use it?

Reranking 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A reranker scores query-candidate pairs after initial retrieval. It improves ordering within the candidate pool but cannot recover a relevant document absent from that pool.

### 中文回答

重排序对候选结果做更精细的相关性判断。它只能调整已召回候选，无法补救完全遗漏的证据。

[深入材料与练习](Study%20topics/reranking.html)


## Query Reformulation

Topic: Query Reformulation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Query Reformulation, how does it work, and when would you use it?

Query Reformulation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Rewriting a query can improve recall, but it can also change intent. I retain the original request, compare retrieval outcomes and test numeric identifiers and financial terminology.

### 中文回答

查询改写可补充缩写或拆解复杂问题。保留原始意图并避免凭空加入实体或条件。

[深入材料与练习](Study%20topics/query-reformulation.html)


## Citations

Topic: Citations

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Citations, how does it work, and when would you use it?

Citations 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A citation should point to a source span that supports the associated claim. A valid document link alone is not evidence that the generated statement follows from it.

### 中文回答

引用应映射到真实证据位置，并验证该证据支持具体主张。存在链接不代表主张得到支持。

[深入材料与练习](Study%20topics/citations.html)


## Golden Datasets

Topic: Golden Datasets

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Golden Datasets, how does it work, and when would you use it?

Golden Datasets 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A curated set contains representative questions, evidence labels or reference outcomes, and failure cases. I track annotation uncertainty and separate development from held-out evaluation.

### 中文回答

固定标注数据用于比较版本，包含常见、困难和拒答案例。保留独立测试集，防止围绕同一题库过拟合。

[深入材料与练习](Study%20topics/golden-datasets.html)


## Hard Negatives

Topic: Hard Negatives

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Hard Negatives, how does it work, and when would you use it?

Hard Negatives 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Hard negatives resemble relevant evidence but fail the actual query requirement, such as the wrong company or fiscal year. They expose overly broad semantic matching.

### 中文回答

困难负例看似相关但不能回答问题，例如同公司不同年份。它们帮助检验检索和拒答能力。

[深入材料与练习](Study%20topics/hard-negatives.html)


## Held-Out Evaluation

Topic: Held-Out Evaluation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Held-Out Evaluation, how does it work, and when would you use it?

Held-Out Evaluation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I freeze choices before scoring the held-out set and report its size and limitations. Repeated tuning against it destroys its independent role.

### 中文回答

保留数据不参与训练和调参，用于估计泛化能力。反复根据其结果修改系统会削弱独立性。

[深入材料与练习](Study%20topics/held-out-evaluation.html)


## Recall@k

Topic: Recall@k

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Recall@k, how does it work, and when would you use it?

Recall@k 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Recall at k is relevant items retrieved in the first k divided by all labeled relevant items for that query. It measures evidence coverage, not answer correctness; incomplete relevance labels limit interpretation.

### 中文回答

前k项召回率是找回的相关项占全部标注相关项的比例。它衡量覆盖，不能单独代表答案质量。

[深入材料与练习](Study%20topics/recall-k.html)


## Precision@k

Topic: Precision@k

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Precision@k, how does it work, and when would you use it?

Precision@k 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Precision at k is relevant retrieved items divided by k when k results are returned. High precision can coexist with low recall, and both depend on the relevance labeling unit.

### 中文回答

前k项精确率是其中相关项所占比例。它衡量结果纯度，应与召回率及成本一起看。

[深入材料与练习](Study%20topics/precision-k.html)


## MRR

Topic: MRR

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is MRR, how does it work, and when would you use it?

MRR 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Mean reciprocal rank averages the inverse rank of the first relevant item across queries, using zero when none is found. It emphasizes finding one useful hit early rather than retrieving all evidence.

### 中文回答

MRR平均第一条相关结果名次的倒数，适合关注首个正确结果的任务。它不衡量全部证据覆盖。

[深入材料与练习](Study%20topics/mrr.html)


## nDCG

Topic: nDCG

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is nDCG, how does it work, and when would you use it?

nDCG 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Normalized discounted cumulative gain rewards relevant results near the top and supports graded relevance. The relevance grades and ideal ranking definition must be fixed before comparison.

### 中文回答

nDCG结合分级相关性和位置折扣，评估排序质量。需要可靠相关性标注及清楚的评价范围。

[深入材料与练习](Study%20topics/ndcg.html)


## Redundancy

Topic: Redundancy

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Redundancy, how does it work, and when would you use it?

Redundancy 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Repeated chunks consume context without necessarily adding evidence. I measure duplicate or same-section coverage separately from relevance and inspect whether repetition is actually necessary for a multi-part answer.

### 中文回答

重复结果占用上下文而不一定增加信息。测量重复程度并验证去重后是否损失重要证据。

[深入材料与练习](Study%20topics/redundancy.html)


## Groundedness

Topic: Groundedness

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Groundedness, how does it work, and when would you use it?

Groundedness 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A grounded claim is supported by supplied evidence. Groundedness differs from factual truth: outdated evidence can faithfully support an outdated answer.

### 中文回答

有依据指回答主张得到提供证据支持。它不同于完整性，也不保证来源本身正确。

[深入材料与练习](Study%20topics/groundedness.html)


## Hallucination

Topic: Hallucination

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Hallucination, how does it work, and when would you use it?

Hallucination 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I treat unsupported generated claims as an observable failure category. Retrieval reduces some errors but does not guarantee the model uses or faithfully interprets the retrieved evidence.

### 中文回答

幻觉是生成不受证据支持或错误的内容。用证据约束、拒答及逐项校验减少，而不能宣称彻底消除。

[深入材料与练习](Study%20topics/hallucination.html)


## LLM-as-Judge

Topic: LLM-as-Judge

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is LLM-as-Judge, how does it work, and when would you use it?

LLM-as-Judge 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A model judge can scale rubric-based review, but its errors require human calibration. I randomize ordering where useful, version the rubric and test disagreement cases.

### 中文回答

用模型按评分标准评估输出，适合扩大评估规模。须用人工标注校准并监控偏差。

[深入材料与练习](Study%20topics/llm-as-judge.html)


## Human Calibration

Topic: Human Calibration

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Human Calibration, how does it work, and when would you use it?

Human Calibration 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I compare automated judgments with a small independently reviewed sample and discuss disagreements. Agreement on easy cases does not establish reliability on high-impact financial errors.

### 中文回答

人工复核建立评分标准并检查自动评估的一致性。关注分歧案例，不能只看总体平均分。

[深入材料与练习](Study%20topics/human-calibration.html)


## Judge Bias

Topic: Judge Bias

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Judge Bias, how does it work, and when would you use it?

Judge Bias 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Judges may favor verbosity, familiar model style or the first answer. I use explicit criteria, blinded comparisons and spot checks, keeping deterministic numeric checks separate.

### 中文回答

评审模型可能偏好长度、表达风格或自己的输出。随机化展示顺序、隐藏模型身份并做人工抽查。

[深入材料与练习](Study%20topics/judge-bias.html)


## Offline / Regression Evals

Topic: Offline / Regression Evals

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Offline / Regression Evals, how does it work, and when would you use it?

Offline / Regression Evals 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Offline evaluation uses a fixed dataset; regression evaluation compares a change against prior behavior. I track quality, severe failures, latency and cost with dataset and configuration versions.

### 中文回答

离线评估比较固定案例上的版本表现，回归测试发现旧能力退化。不能替代上线后的真实监控。

[深入材料与练习](Study%20topics/offline-regression-evals.html)


## Online Feedback

Topic: Online Feedback

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Online Feedback, how does it work, and when would you use it?

Online Feedback 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

User signals can reveal real failures but are selective and noisy. I separate ratings from verified correctness and respect privacy before adding examples to an evaluation set.

### 中文回答

线上反馈反映真实用户行为，但受选择偏差影响。结合错误样本与离线指标判断。

[深入材料与练习](Study%20topics/online-feedback.html)


## Agents vs. Workflows

Topic: Agents vs. Workflows

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Agents vs. Workflows, how does it work, and when would you use it?

Agents vs. Workflows 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A workflow follows explicit control flow; an agent delegates some next-step choice to a model. I prefer a bounded workflow when the sequence and safety constraints are known.

### 中文回答

工作流步骤相对固定，agent动态选择下一步。只有任务确实需要动态决策时才增加agent复杂度。

[深入材料与练习](Study%20topics/agents-vs-workflows.html)


## Function Calling

Topic: Function Calling

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Function Calling, how does it work, and when would you use it?

Function Calling 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The model proposes a function name and arguments; application code validates and executes it. The proposal is not execution and cannot itself grant permission.

### 中文回答

模型提出工具名和参数，应用负责校验权限并执行。模型输出不是执行授权。

[深入材料与练习](Study%20topics/function-calling.html)


## Tool Schemas

Topic: Tool Schemas

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Tool Schemas, how does it work, and when would you use it?

Tool Schemas 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A schema describes legal arguments and outputs, including units and bounds. I enforce the contract on the server because model compliance alone is insufficient.

### 中文回答

工具契约描述字段、类型、约束及错误。输入校验和权限控制应在服务端执行。

[深入材料与练习](Study%20topics/tool-schemas.html)


## Tool Selection Evaluation

Topic: Tool Selection Evaluation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Tool Selection Evaluation, how does it work, and when would you use it?

Tool Selection Evaluation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I score whether the right tool was selected with valid arguments and whether an unnecessary call was avoided. End-to-end answer quality alone can hide unsafe intermediate actions.

### 中文回答

评估工具是否选对、参数是否正确以及该拒绝时是否拒绝。单纯任务成功率会掩盖危险调用。

[深入材料与练习](Study%20topics/tool-selection-evaluation.html)


## Agent State

Topic: Agent State

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Agent State, how does it work, and when would you use it?

Agent State 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

State records the workflow position and required artifacts. Persisted state must be versioned and resume-safe, especially when a tool may already have executed before a crash.

### 中文回答

状态记录任务进度、工具结果及待批准操作。持久化与恢复应防止重复副作用。

[深入材料与练习](Study%20topics/agent-state.html)


## Memory

Topic: Memory

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Memory, how does it work, and when would you use it?

Memory 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Conversation memory is a convenience context, not an authoritative database. I scope it by user, retain provenance and avoid letting remembered text override permissions.

### 中文回答

记忆保存跨步骤或会话信息，需限制用途、权限和生命周期。过时或不可信记忆不能直接当作事实。

[深入材料与练习](Study%20topics/memory.html)


## LangGraph

Topic: LangGraph

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is LangGraph, how does it work, and when would you use it?

LangGraph 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A state graph makes transitions, checkpoints and interruptions explicit. Side effects around resumed nodes still need idempotency and careful placement.

### 中文回答

LangGraph用状态和图结构组织流程、分支与恢复。工具权限和业务正确性仍由应用负责。

[深入材料与练习](Study%20topics/langgraph.html)


## Termination Conditions

Topic: Termination Conditions

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Termination Conditions, how does it work, and when would you use it?

Termination Conditions 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I bound iterations, time, spend and retries and define success, failure and waiting-for-approval states. A model saying it is finished is not enough without validated outputs.

### 中文回答

停止条件包括成功、步数、时间、成本和重复失败上限。达到限制应返回可解释状态。

[深入材料与练习](Study%20topics/termination-conditions.html)


## MCP Fundamentals

Topic: MCP Fundamentals

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is MCP Fundamentals, how does it work, and when would you use it?

MCP Fundamentals 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

MCP standardizes interaction with exposed tools and resources. It does not automatically make a server trustworthy or replace authentication, authorization and argument validation.

### 中文回答

MCP标准化工具与资源的连接方式。协议连通不代表服务器可信或调用已获授权。

[深入材料与练习](Study%20topics/mcp-fundamentals.html)


## REST APIs

Topic: REST APIs

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is REST APIs, how does it work, and when would you use it?

REST APIs 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I design resources, methods, status codes and error contracts around client needs. Long-running work returns a durable run identifier rather than holding an HTTP request indefinitely.

### 中文回答

REST API以资源和HTTP语义表达操作。设计状态码、错误格式、认证、分页及幂等行为。

[深入材料与练习](Study%20topics/rest-apis.html)


## FastAPI

Topic: FastAPI

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is FastAPI, how does it work, and when would you use it?

FastAPI 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A typed API boundary can validate requests and expose a contract. I keep deterministic business logic outside route handlers so it can be tested without an HTTP server.

### 中文回答

FastAPI提供Python API路由、数据验证和接口文档。耗时任务需避免阻塞请求处理。

[深入材料与练习](Study%20topics/fastapi.html)


## API Tests

Topic: API Tests

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is API Tests, how does it work, and when would you use it?

API Tests 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I test validation errors, ownership, duplicate submission and downstream failure alongside the happy path. Mock tests do not prove real provider or database integration works.

### 中文回答

接口测试验证请求、响应、权限与错误边界。应覆盖业务不变量和失败情况，而非只测成功路径。

[深入材料与练习](Study%20topics/api-tests.html)


## Workers

Topic: Workers

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Workers, how does it work, and when would you use it?

Workers 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A worker claims a task, executes bounded work and commits a result before acknowledgment. A crash can cause redelivery, so effects must be idempotent and abandoned leases recoverable.

### 中文回答

worker处理后台任务，应记录状态、限定资源并处理重启。重复投递不能重复产生业务副作用。

[深入材料与练习](Study%20topics/workers.html)


## Idempotency

Topic: Idempotency

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Idempotency, how does it work, and when would you use it?

Idempotency 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Repeating the same logical request must not create a second logical effect. I bind a key to request content and persist the outcome; delivery can still occur more than once.

### 中文回答

同一逻辑请求重复执行应产生一次业务效果。键须绑定请求内容并明确保存期限。

[深入材料与练习](Study%20topics/idempotency.html)


## Timeouts

Topic: Timeouts

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Timeouts, how does it work, and when would you use it?

Timeouts 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A timeout bounds waiting but does not prove remote work stopped. I propagate a total deadline and treat ambiguous writes with idempotency and status lookup.

### 中文回答

超时限制等待时间，但不证明远端未执行成功。对有副作用请求需状态查询或幂等保障。

[深入材料与练习](Study%20topics/timeouts.html)


## Backoff

Topic: Backoff

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Backoff, how does it work, and when would you use it?

Backoff 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Exponential backoff reduces immediate retry pressure; jitter spreads synchronized clients. I cap attempts and total time and avoid retrying permanent validation failures.

### 中文回答

退避让重试间隔逐步增长，加入随机抖动减少同步重试。还需总截止时间和次数上限。

[深入材料与练习](Study%20topics/backoff.html)


## Rate Limiting

Topic: Rate Limiting

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Rate Limiting, how does it work, and when would you use it?

Rate Limiting 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Rate limits constrain admission over time; concurrency limits constrain in-flight work. Both can be necessary because slower service increases concurrency at the same arrival rate.

### 中文回答

限流限制单位时间请求量。它不同于并发上限，两者都可能需要。

[深入材料与练习](Study%20topics/rate-limiting.html)


## Backpressure

Topic: Backpressure

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Backpressure, how does it work, and when would you use it?

Backpressure 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A saturated downstream component signals upstream producers to slow or reject work. A bounded queue and explicit overload response prevent indefinite memory growth.

### 中文回答

背压在下游变慢时限制上游输入，防止队列无限增长。可采用有界队列、拒绝或延迟接收。

[深入材料与练习](Study%20topics/backpressure.html)


## Docker

Topic: Docker

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Docker, how does it work, and when would you use it?

Docker 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A container packages application dependencies and process configuration. It does not persist local state across replacement unless storage is explicitly managed.

### 中文回答

容器封装应用运行环境，帮助一致部署。需固定依赖版本、限制权限并管理镜像和配置。

[深入材料与练习](Study%20topics/docker.html)


## CI/CD

Topic: CI/CD

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is CI/CD, how does it work, and when would you use it?

CI/CD 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

CI verifies candidate changes; CD controls promotion to an environment. I keep deterministic offline tests fast and run costly provider checks as explicit release steps.

### 中文回答

持续集成自动验证变更，持续交付组织发布。测试通过不等于生产安全，仍需部署验证和回滚。

[深入材料与练习](Study%20topics/ci-cd.html)


## Cloud Fundamentals

Topic: Cloud Fundamentals

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Cloud Fundamentals, how does it work, and when would you use it?

Cloud Fundamentals 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Compute, storage, networking and identity are separate responsibilities. I start with one deployable service and document persistence and availability limitations before scaling.

### 中文回答

云服务提供计算、存储及网络资源。理解费用、权限和故障边界后再选择托管服务。

[深入材料与练习](Study%20topics/cloud-fundamentals.html)


## IAM

Topic: IAM

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is IAM, how does it work, and when would you use it?

IAM 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I grant identities the smallest required actions on specific resources. Application authorization and cloud IAM solve different layers and both need testing.

### 中文回答

IAM控制身份能对哪些资源做哪些操作。按最小权限配置并避免长期共享密钥。

[深入材料与练习](Study%20topics/iam.html)


## Networking

Topic: Networking

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Networking, how does it work, and when would you use it?

Networking 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The service needs explicit ingress, egress and dependency connectivity. Private networking does not replace identity checks; blocked egress can also break model-provider calls.

### 中文回答

网络设计涉及连接、路由、DNS与访问边界。排错先确认请求在哪一跳失败。

[深入材料与练习](Study%20topics/networking.html)


## Capacity Planning

Topic: Capacity Planning

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Capacity Planning, how does it work, and when would you use it?

Capacity Planning 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I estimate arrival rate, service time, concurrency and retained storage with units. Estimates guide initial sizing; load tests reveal actual bottlenecks and saturation.

### 中文回答

根据到达速率、服务时间和资源瓶颈估算容量，再用负载测试验证。平均值之外还需考虑峰值。

[深入材料与练习](Study%20topics/capacity-planning.html)


## Load Testing

Topic: Load Testing

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Load Testing, how does it work, and when would you use it?

Load Testing 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I use representative requests and concurrency, track errors with latency, and separate cold-start from warm behavior. Thirty requests support a small experiment, not a strong tail-latency guarantee.

### 中文回答

负载测试测量不同压力下的延迟、错误及资源占用。使用接近真实请求分布并找出饱和点。

[深入材料与练习](Study%20topics/load-testing.html)


## Logs

Topic: Logs

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Logs, how does it work, and when would you use it?

Logs 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Logs record discrete events with request IDs and structured fields. I avoid secrets and raw sensitive prompts and preserve actionable error causes.

### 中文回答

日志记录事件及错误上下文，使用关联ID串联请求。避免记录密钥和敏感原文。

[深入材料与练习](Study%20topics/logs.html)


## Traces

Topic: Traces

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Traces, how does it work, and when would you use it?

Traces 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A trace connects spans across a request path to identify waiting and computation. I propagate IDs through queues and avoid treating concurrent span times as additive wall time.

### 中文回答

追踪连接一次请求的多个处理步骤，定位检索、工具或模型延迟。记录必要元数据且保护敏感信息。

[深入材料与练习](Study%20topics/traces.html)


## p50 / p95

Topic: p50 / p95

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is p50 / p95, how does it work, and when would you use it?

p50 / p95 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

p50 is the sample median and p95 is a high quantile, not the worst case. I report sample count, window and load; averaging service percentiles does not yield the end-to-end percentile.

### 中文回答

p50是中位延迟，p95表示95%的观测不超过该值。分位数须在同一测量窗口和请求群体上比较。

[深入材料与练习](Study%20topics/p50-p95.html)


## TTFT

Topic: TTFT

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is TTFT, how does it work, and when would you use it?

TTFT 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Time to first token measures initial streaming responsiveness. I also measure total completion time and distinguish provider latency from queue and retrieval delay.

### 中文回答

TTFT是请求开始到首个token的时间。它影响响应感受，但不代表完整回答的耗时。

[深入材料与练习](Study%20topics/ttft.html)


## Streaming

Topic: Streaming

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Streaming, how does it work, and when would you use it?

Streaming 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Streaming sends partial output sooner but complicates cancellation, errors and validation. Consequential tool execution should not be triggered by unvalidated partial output.

### 中文回答

流式返回逐步展示结果，改善等待体验。需处理取消、部分失败及结构化内容未完成的状态。

[深入材料与练习](Study%20topics/streaming.html)


## Token Usage

Topic: Token Usage

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Token Usage, how does it work, and when would you use it?

Token Usage 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I record input, output and any billed cached/reasoning categories supported by the provider. Cost estimates include retries and background calls, not only the final successful response.

### 中文回答

记录输入输出token以估算成本和上下文压力。应按模型实际计数与计费规则核对。

[深入材料与练习](Study%20topics/token-usage.html)


## Caching

Topic: Caching

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Caching, how does it work, and when would you use it?

Caching 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A cache needs a key, freshness rule and eviction policy. Include data/model versions and access scope where they affect validity; a hit must not bypass authorization.

### 中文回答

缓存复用结果以减少耗时与成本。键应包含影响结果的版本、参数和权限范围。

[深入材料与练习](Study%20topics/caching.html)


## Semantic Caching

Topic: Semantic Caching

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Semantic Caching, how does it work, and when would you use it?

Semantic Caching 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Semantic proximity is only a candidate for answer reuse. I evaluate equivalence, freshness and permission scope before serving a cached financial answer.

### 中文回答

语义缓存复用相近请求，存在错误匹配风险。对数字、日期和权限敏感查询需更严格限制。

[深入材料与练习](Study%20topics/semantic-caching.html)


## Freshness

Topic: Freshness

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Freshness, how does it work, and when would you use it?

Freshness 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Freshness is a business requirement about acceptable age and revision policy. TTL is one implementation mechanism, not a complete definition of correctness.

### 中文回答

新鲜度描述数据是否仍适用于当前问题。定义更新时间、失效条件并展示来源时间。

[深入材料与练习](Study%20topics/freshness.html)


## Model Routing

Topic: Model Routing

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Model Routing, how does it work, and when would you use it?

Model Routing 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A router selects a model based on task class and constraints. I compare end-to-end quality, retries and total cost, including routing mistakes and fallback behavior.

### 中文回答

按任务难度或约束选择模型，可能减少成本。路由规则需验证质量并保留失败升级路径。

[深入材料与练习](Study%20topics/model-routing.html)


## Cost-Quality Trade-offs

Topic: Cost-Quality Trade-offs

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Cost-Quality Trade-offs, how does it work, and when would you use it?

Cost-Quality Trade-offs 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I compare candidates on a Pareto view of quality, latency and cost with hard correctness constraints. A cheaper request is not cheaper overall if it causes expensive retries or manual repair.

### 中文回答

在可接受质量门槛下比较模型、检索和上下文的实际成本。不能只优化token而忽略错误代价。

[深入材料与练习](Study%20topics/cost-quality-trade-offs.html)


## Human-in-the-Loop

Topic: Human-in-the-Loop

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Human-in-the-Loop, how does it work, and when would you use it?

Human-in-the-Loop 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A human decision is a real authenticated workflow event, not model-generated text. I show the exact action and relevant evidence before approval.

### 中文回答

高影响操作在执行前交给人审核。审核界面应展示具体参数、影响和依据。

[深入材料与练习](Study%20topics/human-in-the-loop.html)


## Approval Audit Trail

Topic: Approval Audit Trail

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Approval Audit Trail, how does it work, and when would you use it?

Approval Audit Trail 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I record approver, timestamp, action payload, version and decision. A changed payload requires fresh approval; replay must not repeat an already completed effect.

### 中文回答

审计记录谁批准了哪次操作、参数和时间。批准须绑定具体操作，参数变更应重新判断。

[深入材料与练习](Study%20topics/approval-audit-trail.html)


## Prompt Injection

Topic: Prompt Injection

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Prompt Injection, how does it work, and when would you use it?

Prompt Injection 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Untrusted text can attempt to redirect the model. I enforce permissions and tool policies outside the model and test malicious retrieved content, not just malicious user prompts.

### 中文回答

恶意输入试图让模型越过原任务或泄露数据。把外部文本当数据，限制工具权限并测试攻击样本。

[深入材料与练习](Study%20topics/prompt-injection.html)


## Tool Sandboxing

Topic: Tool Sandboxing

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Tool Sandboxing, how does it work, and when would you use it?

Tool Sandboxing 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Execution is restricted by capability, resource limits and filesystem/network policy. A prompt telling the model to be safe is not a sandbox.

### 中文回答

沙箱限制工具能访问的文件、网络和资源。应在执行环境强制限制，而非只依赖提示。

[深入材料与练习](Study%20topics/tool-sandboxing.html)


## PII

Topic: PII

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is PII, how does it work, and when would you use it?

PII 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I minimize collection, restrict access and redact sensitive fields from logs and evaluation fixtures. Classification and retention rules must match the actual data and organizational policy.

### 中文回答

个人可识别信息需最小化收集、限制访问并定义保留期。日志及评估数据也需要保护。

[深入材料与练习](Study%20topics/pii.html)


## Access Control

Topic: Access Control

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Access Control, how does it work, and when would you use it?

Access Control 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The authenticated identity determines allowed objects and actions. I enforce it before retrieval and tool execution, not by asking the model to decide who may see data.

### 中文回答

访问控制验证用户是否能读取或操作资源。检索前和执行时都要落实，不能只隐藏界面。

[深入材料与练习](Study%20topics/access-control.html)


## Tenant Isolation

Topic: Tenant Isolation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Tenant Isolation, how does it work, and when would you use it?

Tenant Isolation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Tenant scope belongs in database, retrieval, cache and artifact access. I test cross-tenant IDs and cache collisions because one correct API check does not protect every layer.

### 中文回答

租户隔离防止不同客户数据混用。数据库、检索、缓存和日志均需明确租户范围。

[深入材料与练习](Study%20topics/tenant-isolation.html)


## Secrets

Topic: Secrets

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Secrets, how does it work, and when would you use it?

Secrets 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Credentials come from an approved secret store or runtime injection and are excluded from source, prompts and logs. Short-lived credentials reduce exposure but still require least privilege.

### 中文回答

密钥应存入专门的密钥管理系统，避免进入代码、日志和提示。使用短期凭据并支持轮换。

[深入材料与练习](Study%20topics/secrets.html)


## Fail-Open vs. Fail-Closed

Topic: Fail-Open vs. Fail-Closed

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Fail-Open vs. Fail-Closed, how does it work, and when would you use it?

Fail-Open vs. Fail-Closed 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

For risk calculations and authorization I stop the affected operation when validation is unavailable. A separate safe read-only fallback may preserve usefulness without inventing a successful result.

### 中文回答

失败放行优先可用性，失败拒绝优先保护边界。权限检查通常应拒绝，具体选择由业务风险决定。

[深入材料与练习](Study%20topics/fail-open-vs-fail-closed.html)


## Graceful Degradation

Topic: Graceful Degradation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Graceful Degradation, how does it work, and when would you use it?

Graceful Degradation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I return a clearly limited result or baseline when a dependency fails, if the contract permits it. The user must be able to distinguish degraded behavior from a full answer.

### 中文回答

部分依赖失败时返回受限但明确的服务，例如仅展示已验证证据。不能静默降低准确性。

[深入材料与练习](Study%20topics/graceful-degradation.html)


## Snowflake

Topic: Snowflake

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Snowflake, how does it work, and when would you use it?

Snowflake 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Snowflake separates storage and compute and supports analytical SQL. I learn table grain and Query Profile before adding an LLM; the model proposes queries while the database computes results.

### 中文回答

Snowflake提供云数据仓库，查询需受权限、成本和资源限制。生成SQL执行前仍须校验。

[深入材料与练习](Study%20topics/snowflake.html)


## Text-to-SQL Evaluation

Topic: Text-to-SQL Evaluation

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Text-to-SQL Evaluation, how does it work, and when would you use it?

Text-to-SQL Evaluation 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I compare execution results, clarification and rejection behavior against curated references. Valid syntax and matching SQL strings are insufficient measures of business correctness.

### 中文回答

评估SQL语义、执行结果、权限和拒答，不只比较字符串。不同SQL可能表达同一正确查询。

[深入材料与练习](Study%20topics/text-to-sql-evaluation.html)


## SEC Financial Data

Topic: SEC Financial Data

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is SEC Financial Data, how does it work, and when would you use it?

SEC Financial Data 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Financial facts include units, periods, forms and filing accessions. I retain provenance and define revision selection before comparing companies or calculating growth.

### 中文回答

SEC数据包含申报、期间、单位和修订信息。使用时核对实体、时间、口径和来源。

[深入材料与练习](Study%20topics/sec-financial-data.html)


## Data Quality

Topic: Data Quality

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Data Quality, how does it work, and when would you use it?

Data Quality 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I check uniqueness, required fields, units, periods and reference totals before model evaluation. Missing data remains explicit unless an approved imputation rule applies.

### 中文回答

数据质量包含完整性、一致性、及时性与正确性。缺失值和单位错误应在模型前被发现。

[深入材料与练习](Study%20topics/data-quality.html)


## Point-in-Time Data

Topic: Point-in-Time Data

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Point-in-Time Data, how does it work, and when would you use it?

Point-in-Time Data 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A historical decision can use only information available at that time. A fiscal period end is not the filing availability date, and later restatements can leak future knowledge.

### 中文回答

时点数据只允许使用当时已公开的信息。期末日期不同于披露日期，混淆会造成未来泄漏。

[深入材料与练习](Study%20topics/point-in-time-data.html)


## Experiment Tracking

Topic: Experiment Tracking

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Experiment Tracking, how does it work, and when would you use it?

Experiment Tracking 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I save configuration, seed, data/code/model versions, metrics and artifacts for each logical run. Reproducibility requires the environment and data snapshot as well as the seed.

### 中文回答

记录数据、代码、参数和指标版本，使实验可以比较和复现。只存最终分数不足以解释结果。

[深入材料与练习](Study%20topics/experiment-tracking.html)


## Failure Recovery

Topic: Failure Recovery

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Failure Recovery, how does it work, and when would you use it?

Failure Recovery 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I inject a crash before and after result commit and observe lease expiry, redelivery and idempotent publication. Restarting successfully once does not establish correctness under every failure point.

### 中文回答

恢复需识别已完成步骤、持久化状态和可安全重试边界。防止重启后重复写入或执行。

[深入材料与练习](Study%20topics/failure-recovery.html)


## Latency Benchmarking

Topic: Latency Benchmarking

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Latency Benchmarking, how does it work, and when would you use it?

Latency Benchmarking 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I freeze workload and environment, record distributions and sample counts, and compare one change at a time. Quality regressions and failure rates belong beside speed measurements.

### 中文回答

统一请求、并发、窗口及计时范围测量延迟。区分冷启动、缓存命中与正常请求。

[深入材料与练习](Study%20topics/latency-benchmarking.html)


## AWS ECS Fargate

Topic: AWS ECS Fargate

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is AWS ECS Fargate, how does it work, and when would you use it?

AWS ECS Fargate 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Fargate runs container tasks without managing host instances. I still configure identity, network, health checks, logging, resources and persistent dependencies.

### 中文回答

Fargate运行托管容器任务，需配置资源、网络、角色及健康检查。应用仍要处理状态和部署故障。

[深入材料与练习](Study%20topics/aws-ecs-fargate.html)


## ECR

Topic: ECR

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is ECR, how does it work, and when would you use it?

ECR 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

ECR stores versioned container images. I deploy an immutable digest and retain the previous known-good digest for reproducible rollback.

### 中文回答

ECR存储容器镜像。使用不可变版本或摘要，并管理访问及镜像扫描。

[深入材料与练习](Study%20topics/ecr.html)


## CloudWatch

Topic: CloudWatch

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is CloudWatch, how does it work, and when would you use it?

CloudWatch 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

CloudWatch collects operational logs and metrics. I choose actionable alarms and retention, and correlate deployment version with failures and latency changes.

### 中文回答

CloudWatch收集日志、指标和告警。告警阈值应对应可采取的动作而非只制造噪声。

[深入材料与练习](Study%20topics/cloudwatch.html)


## GitHub Actions

Topic: GitHub Actions

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is GitHub Actions, how does it work, and when would you use it?

GitHub Actions 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A workflow runs checks and controlled release steps. I pin dependencies as appropriate, restrict credentials and keep paid live integrations separate from deterministic PR checks.

### 中文回答

GitHub Actions自动运行验证和发布流程。限制凭据权限，并保护部署分支和工作流。

[深入材料与练习](Study%20topics/github-actions.html)


## OIDC

Topic: OIDC

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is OIDC, how does it work, and when would you use it?

OIDC 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

Federated identity lets a workflow obtain short-lived cloud credentials. The trust policy must restrict repository, branch or environment claims rather than trusting every workflow.

### 中文回答

OIDC可用身份令牌换取短期云权限，减少长期密钥。信任条件须限制仓库、分支及受众。

[深入材料与练习](Study%20topics/oidc.html)


## Clean-Environment Reproduction

Topic: Clean-Environment Reproduction

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Clean-Environment Reproduction, how does it work, and when would you use it?

Clean-Environment Reproduction 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I verify setup from documented dependencies and fixtures, with no hidden local files or credentials. Offline success and live cloud/provider verification are reported separately.

### 中文回答

在干净环境按文档安装并运行项目，检验隐含依赖。固定版本并提供可用示例数据。

[深入材料与练习](Study%20topics/clean-environment-reproduction.html)


## README

Topic: README

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is README, how does it work, and when would you use it?

README 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A useful README states the user problem, setup, commands, architecture, evidence and limitations. Every completion claim should point to runnable code or recorded results.

### 中文回答

README说明目标、安装、运行、限制和验证方法。读者应能按步骤复现演示。

[深入材料与练习](Study%20topics/readme.html)


## Demo

Topic: Demo

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Demo, how does it work, and when would you use it?

Demo 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A demo shows a normal request and a meaningful failure or ambiguity case. I keep a reproducible offline path and label live dependencies and any simulated data.

### 中文回答

演示展示真实输入、结果、依据和失败处理。说明数据与效果范围，避免夸大生产能力。

[深入材料与练习](Study%20topics/demo.html)


## Ownership

Topic: Ownership

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Ownership, how does it work, and when would you use it?

Ownership 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I explain what I personally decided, reviewed and validated, including AI assistance. I do not claim manually writing code that AI generated or claim production impact from a learning project.

### 中文回答

拥有项目意味着能解释设计、检查代码、定位故障及承担结果。AI写代码不替代这些责任。

[深入材料与练习](Study%20topics/ownership.html)


## AI-Assisted Code Review

Topic: AI-Assisted Code Review

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is AI-Assisted Code Review, how does it work, and when would you use it?

AI-Assisted Code Review 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I ask AI for a bounded diff against explicit contracts, then inspect failure paths and run independent checks. I should be able to explain a critical function and modify it under questioning.

### 中文回答

检查AI生成代码的需求匹配、权限、异常、复杂度和测试。不能仅因运行成功就接受。

[深入材料与练习](Study%20topics/ai-assisted-code-review.html)


## Design Trade-offs

Topic: Design Trade-offs

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Design Trade-offs, how does it work, and when would you use it?

Design Trade-offs 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I state the requirement, alternatives, selected option, downside and evidence that would change the decision. I use actual observations rather than invented project outcomes.

### 中文回答

设计取舍说明需求、候选方案、收益与代价。通过规模、风险或延迟约束解释选择。

[深入材料与练习](Study%20topics/design-trade-offs.html)


## Risk Copilot

Topic: Risk Copilot

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Risk Copilot, how does it work, and when would you use it?

Risk Copilot 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The project joins retrieval, scenarios, approval and deterministic risk calculations. My improvement sequence prioritizes numerical correctness, retrieval evaluation, failure handling and verifiable delivery.

### 中文回答

Risk Copilot应把风险分析结论连接到可核验数据和计算，并测量检索与答案质量。展示你能解释及改进的实现。

[深入材料与练习](Study%20topics/risk-copilot.html)


## Financial Statement Analytics Assistant

Topic: Financial Statement Analytics Assistant

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Financial Statement Analytics Assistant, how does it work, and when would you use it?

Financial Statement Analytics Assistant 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The project combines SEC facts, curated Snowflake tables, reference SQL and a restricted natural-language interface. Its value is accessible auditable analytics, not having the LLM redo database arithmetic.

### 中文回答

财报分析助手重点是口径、单位、期间和受控SQL。数值计算应由确定性工具完成并保留来源。

[深入材料与练习](Study%20topics/financial-statement-analytics-assistant.html)


## Investment Research Workbench

Topic: Investment Research Workbench

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Investment Research Workbench, how does it work, and when would you use it?

Investment Research Workbench 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

The project offers restricted research tools, versioned experiments, asynchronous execution and volatility forecasts. It demonstrates research engineering without claiming profitable alpha or live trading readiness.

### 中文回答

研究工作台组织数据、实验、评估和结果追踪。可恢复运行与可复现证据比堆叠agent更重要。

[深入材料与练习](Study%20topics/investment-research-workbench.html)


## SQL

Topic: SQL

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is SQL, how does it work, and when would you use it?

SQL 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

SQL expresses operations over relations. I identify row grain, joins, null semantics and aggregation before optimizing or asking a model to generate a query.

### 中文回答

SQL用于查询和聚合结构化数据。先明确每行粒度、连接关系与空值语义，再写查询。

[深入材料与练习](Study%20topics/sql.html)


## Queues and Workers

Topic: Queues and Workers

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Queues and Workers, how does it work, and when would you use it?

Queues and Workers 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A queue decouples admission from execution; workers need bounded retries, durable status and idempotent effects. At-least-once delivery is compatible with a single logical published result.

### 中文回答

队列解耦任务提交与执行，worker消费任务。考虑重复投递、重试、状态和死信处理。

[深入材料与练习](Study%20topics/queues-and-workers.html)


## Retries

Topic: Retries

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Retries, how does it work, and when would you use it?

Retries 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I retry only classified transient failures within a total budget, with jitter and idempotency for ambiguous effects. Permanent invalid requests should fail immediately with useful context.

### 中文回答

只对适合重试的暂时故障重试，设置退避和总预算。有副作用操作必须具备幂等或状态查询。

[深入材料与练习](Study%20topics/retries.html)


## Rollback

Topic: Rollback

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Rollback, how does it work, and when would you use it?

Rollback 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A rollback restores a compatible known-good application/model configuration. Data migrations and side effects may not reverse with an image change, so I define the boundary explicitly.

### 中文回答

回滚应同步恢复模型、预处理及兼容输入接口，明确触发条件和可恢复版本。只换模型文件可能造成特征不一致。

[深入材料与练习](Study%20topics/rollback.html)


## Prediction Intervals

Topic: Prediction Intervals

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Prediction Intervals, how does it work, and when would you use it?

Prediction Intervals 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A prediction interval describes uncertainty for a future observation under assumptions; it is not the same as uncertainty in the mean. I evaluate empirical coverage and width over time and under regime change.

### 中文回答

预测区间描述未来观测可能范围，区别于参数或均值的置信区间。覆盖率与假设有关，市场分布改变可能使历史校准失效。

[深入材料与练习](Study%20topics/prediction-intervals.html)


## Reproducibility

Topic: Reproducibility

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Reproducibility, how does it work, and when would you use it?

Reproducibility 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

I retain data snapshots, feature definitions, environment versions, seed and code reference. A seed alone does not make a distributed or external-API workflow reproducible.

### 中文回答

可复现需要记录代码、数据、依赖、随机性和配置。固定种子有帮助，但不同硬件和数值执行仍可能不同；复现不等于实证有效。

[深入材料与练习](Study%20topics/reproducibility.html)


## Model Versioning

Topic: Model Versioning

### 学习背景

这属于AI应用与工程知识。先理解输入、输出和使用场景，再说明机制、限制和验证方法。

### Question

What is Model Versioning, how does it work, and when would you use it?

Model Versioning 是什么、如何工作、适用于什么情况？

### Key Terms

- Evaluation：用预先定义的案例和指标检验系统效果。
- Constraint：数据、权限、成本或延迟方面的限制。

### 直观例子

把本页主题放回Risk Copilot：确定它影响输入、检索、工具、生成还是上线运行，并选择一个可观察的失败案例检验理解。

### Short Answer

A model version includes preprocessing, feature schema and compatible runtime, not just coefficients. Predictions retain the exact version so results can be traced and rolled back.

### 中文回答

模型版本需关联训练数据、预处理、特征顺序、配置和代码。单独保存权重不足以可靠重现预测，需验证完整输入契约。

[深入材料与练习](Study%20topics/model-versioning.html)


## Supervised and Unsupervised Learning

Topic: Supervised and Unsupervised Learning

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Supervised and Unsupervised Learning, how does it work, and when would you use it?

Supervised and Unsupervised Learning 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Supervised learning fits a mapping from features to known targets. Unsupervised learning finds structure without a specified target; clusters are not automatically useful prediction classes.

### 中文回答

监督学习用输入和已知目标学习预测关系；非监督学习在没有目标标签时寻找结构。回归预测数值，分类预测类别；先定义业务目标再选方法。

[深入材料与练习](Study%20topics/supervised-and-unsupervised-learning.html)


## Data Leakage

Topic: Data Leakage

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Data Leakage, how does it work, and when would you use it?

Data Leakage 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Leakage lets training use information that would be unavailable at prediction time. Fit preprocessing on training data only and check feature publication times.

### 中文回答

泄漏是训练或选择模型时用了预测时不应知道的信息。包括未来数据、测试标签或在全数据上拟合预处理。先划分，再只在训练数据上拟合变换。

[深入材料与练习](Study%20topics/data-leakage.html)


## Bias-Variance

Topic: Bias-Variance

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Bias-Variance, how does it work, and when would you use it?

Bias-Variance 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

An overly restricted model misses patterns; an overly flexible model is sensitive to its training sample. Compare training and validation errors under an appropriate evaluation protocol.

### 中文回答

偏差表示方法的系统性近似误差，方差表示模型对训练样本变化的敏感度。太简单可能欠拟合，太灵活可能过拟合，需用样本外验证比较。

[深入材料与练习](Study%20topics/bias-variance.html)


## Overfitting

Topic: Overfitting

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Overfitting, how does it work, and when would you use it?

Overfitting 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Overfitting means learning sample-specific noise rather than generalizable patterns. Strong training performance with weak held-out performance is a warning, not a complete diagnosis.

### 中文回答

过拟合是把训练数据的噪声也学进去，训练表现好但新数据差。可用合理验证、正则化和复杂度控制缓解，不只看训练误差。

[深入材料与练习](Study%20topics/overfitting.html)


## Regularization

Topic: Regularization

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is regularization, and how do Ridge and Lasso differ?

什么是正则化？Ridge和Lasso有什么区别？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Regularization penalizes model complexity. Ridge shrinks coefficients with an L2 penalty; Lasso uses an L1 penalty and can set coefficients to zero. Select strength using validation data.

### 中文回答

正则化在拟合损失之外增加约束或惩罚，抑制过于灵活的模型。Ridge 使用 L2，Lasso 使用 L1 并可让部分系数为零；强度要在验证数据上选择。

[深入材料与练习](Study%20topics/regularization.html)


## Scaling

Topic: Scaling

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Scaling, how does it work, and when would you use it?

Scaling 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Scaling puts numerical features on comparable scales. Fit the scaler only on training data and apply the same transformation at prediction time.

### 中文回答

缩放调整特征尺度，例如标准化减去训练均值并除以训练标准差。对 Ridge、Lasso 等尺度敏感方法很重要；测试数据使用训练得到的变换。

[深入材料与练习](Study%20topics/scaling.html)


## Linear Regression

Topic: Linear Regression

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What does linear regression learn, and what does it predict?

线性回归学习什么参数，又预测什么结果？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Linear regression predicts a numerical target using an intercept and weighted features. Fit weights by minimizing an objective such as squared error; evaluate on unseen data.

### 中文回答

线性回归用特征的加权和加截距预测连续数值，训练时学习这些权重。它是模型；train/validation/test 是评估流程，不是另一种模型。

[深入材料与练习](Study%20topics/linear-regression.html)


## Logistic Regression

Topic: Logistic Regression

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What does logistic regression predict, and how does a threshold create a class label?

逻辑回归预测什么？怎样用阈值得到类别？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Logistic regression maps a linear score through a sigmoid to estimate a binary-class probability. A threshold converts that probability into a decision.

### 中文回答

逻辑回归虽然名字含 regression，通常用于分类。它将线性分数经 sigmoid 转为二分类概率，用对数损失学习参数，再用阈值作类别决策。

[深入材料与练习](Study%20topics/logistic-regression.html)


## Decision Trees

Topic: Decision Trees

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Decision Trees, how does it work, and when would you use it?

Decision Trees 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Decision trees repeatedly split features into regions and predict within a leaf. Restrict depth or leaf size to reduce overfitting.

### 中文回答

决策树按特征条件逐步切分空间，叶节点输出数值或类别。深度过大容易过拟合，要在验证数据上选择复杂度。

[深入材料与练习](Study%20topics/decision-trees.html)


## Random Forests

Topic: Random Forests

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Random Forests, how does it work, and when would you use it?

Random Forests 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A random forest combines trees trained with sample and feature randomness. Averaging can reduce variance, but it does not prevent leakage or guarantee extrapolation.

### 中文回答

随机森林把多个经过样本和特征随机化的树进行平均或投票，主要减少方差。它不是保证优于其他模型，仍需样本外比较。

[深入材料与练习](Study%20topics/random-forests.html)


## Gradient Boosting

Topic: Gradient Boosting

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Gradient Boosting, how does it work, and when would you use it?

Gradient Boosting 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Gradient boosting adds models sequentially to reduce the current objective. Tune learning rate, depth and iteration count using validation data.

### 中文回答

梯度提升依次加入模型以改进当前损失，常用浅树拟合负梯度信号。学习率和树数量控制拟合过程，过多迭代也可能过拟合。

[深入材料与练习](Study%20topics/gradient-boosting.html)


## scikit-learn Pipelines

Topic: scikit-learn Pipelines

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is scikit-learn Pipelines, how does it work, and when would you use it?

scikit-learn Pipelines 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A pipeline chains preprocessing and prediction. During cross-validation it fits preprocessing inside each training fold, but cannot fix future-looking features.

### 中文回答

Pipeline 将预处理和模型串成统一对象，让交叉验证每个训练折分别拟合变换。它能减少预处理泄漏，但不能修复本身含未来信息的特征。

[深入材料与练习](Study%20topics/scikit-learn-pipelines.html)


## Cross-Validation

Topic: Cross-Validation

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Cross-Validation, how does it work, and when would you use it?

Cross-Validation 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Cross-validation compares performance across multiple training and validation folds. Choose folds that respect time, entity groups and dependence; keep final testing separate.

### 中文回答

交叉验证用多个合适的训练／验证折比较方法与波动。独立样本可考虑 K-fold；时间序列需保持时间顺序，最终测试与选择过程分开。

[深入材料与练习](Study%20topics/cross-validation.html)


## Hyperparameter Tuning

Topic: Hyperparameter Tuning

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Hyperparameter Tuning, how does it work, and when would you use it?

Hyperparameter Tuning 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Hyperparameters configure learning rather than being fitted as model coefficients. Select configurations using validation or cross-validation, not the final test set.

### 中文回答

超参数是训练前指定的配置，如 Ridge 强度、树深度。使用开发验证或交叉验证搜索；不是直接从最终测试结果选最好的设置。

[深入材料与练习](Study%20topics/hyperparameter-tuning.html)


## Feature Engineering

Topic: Feature Engineering

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Feature Engineering, how does it work, and when would you use it?

Feature Engineering 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Feature engineering turns available raw data into model inputs. Every feature must be computable at prediction time and transformed consistently in training and serving.

### 中文回答

特征工程把原始信息转为模型输入，如历史收益和过去波动率。必须明确预测时这些信息是否可知，拟合型变换只用训练数据。

[深入材料与练习](Study%20topics/feature-engineering.html)


## Class Imbalance

Topic: Class Imbalance

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Class Imbalance, how does it work, and when would you use it?

Class Imbalance 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Class imbalance means some labels are rare. Accuracy can hide missed positives; compare precision, recall and suitable baselines under the actual prevalence.

### 中文回答

类别不平衡时准确率可能误导。检查 precision、recall 和 PR 指标，阈值或类别权重在开发数据上选择；重采样只能在训练数据中进行。

[深入材料与练习](Study%20topics/class-imbalance.html)


## MAE

Topic: MAE

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is MAE, how does it work, and when would you use it?

MAE 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

MAE is the mean absolute prediction error in target units. It weights each error linearly and needs a meaningful baseline for interpretation.

### 中文回答

MAE 是预测误差绝对值的平均，单位与目标相同。可直观描述平均偏差，但不体现方向，需结合业务损失判断是否合适。

[深入材料与练习](Study%20topics/mae.html)


## RMSE

Topic: RMSE

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is RMSE, how does it work, and when would you use it?

RMSE 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

RMSE is the square root of mean squared prediction error. It is in target units and reacts more strongly to large errors than MAE.

### 中文回答

RMSE 是平方误差均值的平方根，单位与目标相同。它比 MAE 更强调大误差，但不是任何任务都应该优先选它。

[深入材料与练习](Study%20topics/rmse.html)


## Precision

Topic: Precision

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Precision, how does it work, and when would you use it?

Precision 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Precision is true positives divided by all predicted positives. It measures how often a positive prediction is correct, at a specified threshold.

### 中文回答

Precision 是判为正类的样本中真正为正类的比例，TP/(TP+FP)。它反映误报情况，需说明正类、阈值和分母为零时约定。

[深入材料与练习](Study%20topics/precision.html)


## Recall

Topic: Recall

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Recall, how does it work, and when would you use it?

Recall 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Recall is true positives divided by all actual positives. It measures coverage; it does not measure the purity of predicted positives.

### 中文回答

分类 Recall 是所有真正正类中被找到的比例，TP/(TP+FN)。它反映漏报情况，与检索 Recall@k 的任务和分母定义不同。

[深入材料与练习](Study%20topics/recall.html)


## F1

Topic: F1

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is F1, how does it work, and when would you use it?

F1 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

F1 is the harmonic mean of precision and recall. It ignores true negatives and does not by itself encode the business costs of errors.

### 中文回答

F1 是 precision 和 recall 的调和平均，2PR/(P+R)。它忽略真负例，是否适合取决于业务代价，不能替代完整误差分析。

[深入材料与练习](Study%20topics/f1.html)


## PR-AUC

Topic: PR-AUC

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is PR-AUC, how does it work, and when would you use it?

PR-AUC 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Precision-recall curves compare precision and recall across thresholds. State the integration convention, such as average precision, and compare on the same prevalence.

### 中文回答

精确率召回曲线比较不同阈值下的误报与覆盖取舍，受正类比例影响。Average Precision 和梯形积分 PR-AUC 不是必然相同的计算方式。

[深入材料与练习](Study%20topics/pr-auc.html)


## ROC-AUC

Topic: ROC-AUC

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is ROC-AUC, how does it work, and when would you use it?

ROC-AUC 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

ROC-AUC measures positive-negative ranking across thresholds. It does not assess probability calibration or determine a business decision threshold.

### 中文回答

ROC-AUC 衡量正类相对负类的排序表现，基于 TPR 和 FPR。它不证明概率校准良好，严重类别不平衡时还要看 PR 和业务阈值。

[深入材料与练习](Study%20topics/roc-auc.html)


## Calibration

Topic: Calibration

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Calibration, how does it work, and when would you use it?

Calibration 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A calibrated probability of 0.7 corresponds to about 70% positives among comparable predictions over an appropriate evaluation population. Evaluate separately from ranking.

### 中文回答

校准检查预测概率是否与实际频率一致，例如预测 0.7 的样本是否约 70% 为正类。排序准确不等于校准良好，校准不能在最终测试集上拟合。

[深入材料与练习](Study%20topics/calibration.html)


## Interpretability

Topic: Interpretability

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Interpretability, how does it work, and when would you use it?

Interpretability 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Interpretability explains model behavior using coefficients or suitable explanation methods. An explanation of prediction is not proof of causation.

### 中文回答

可解释性帮助理解模型如何关联输入与输出。线性系数、局部解释和置换重要性各有条件，相关性和模型解释不自动证明因果。

[深入材料与练习](Study%20topics/interpretability.html)


## Feature Importance

Topic: Feature Importance

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Feature Importance, how does it work, and when would you use it?

Feature Importance 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Feature importance measures how a feature contributes under a specific method. Correlated features can share or distort importance; examine held-out behavior.

### 中文回答

特征重要性依赖模型、数据和指标。置换重要性看打乱某特征后样本外性能变化；相关特征可能互相替代，重要性不是固有因果排名。

[深入材料与练习](Study%20topics/feature-importance.html)


## Time-Series Splits

Topic: Time-Series Splits

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Time-Series Splits, how does it work, and when would you use it?

Time-Series Splits 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Train on earlier observations and validate on later ones. Respect label availability and any necessary gap; random splits can leak future information.

### 中文回答

时间序列划分用较早数据训练，较晚数据验证或测试。所有训练标签必须在预测时已获得，不能只按输入日期排序而忽略标签结束时间。

[深入材料与练习](Study%20topics/time-series-splits.html)


## Walk-Forward Validation

Topic: Walk-Forward Validation

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Walk-Forward Validation, how does it work, and when would you use it?

Walk-Forward Validation 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Walk-forward validation repeatedly advances a chronological training and validation window. Match retraining timing and forecast horizons to intended deployment.

### 中文回答

滚动向前验证模拟多个历史预测时点，每次只用当时已可知的数据。可用扩展窗口或固定长度窗口，明确模型更新频率。

[深入材料与练习](Study%20topics/walk-forward-validation.html)


## Temporal Leakage

Topic: Temporal Leakage

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Temporal Leakage, how does it work, and when would you use it?

Temporal Leakage 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Temporal leakage uses future or not-yet-published information. Check both observation dates and publication times, including revisions.

### 中文回答

时间泄漏是使用预测时尚未知的未来信息，包括未公布报表、未来收益和未结束标签。记录事件日期和实际公布／可用日期。

[深入材料与练习](Study%20topics/temporal-leakage.html)


## Forecast Horizons

Topic: Forecast Horizons

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Forecast Horizons, how does it work, and when would you use it?

Forecast Horizons 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

The forecast horizon specifies how far ahead the target lies. Define target construction, availability and evaluation dates consistently.

### 中文回答

预测期限定义目标覆盖哪段未来，如未来五日波动率。标签要等该期限结束才可用，重叠标签还会造成误差相关。

[深入材料与练习](Study%20topics/forecast-horizons.html)


## Regime Changes

Topic: Regime Changes

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Regime Changes, how does it work, and when would you use it?

Regime Changes 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A regime change alters the data-generating environment. Good historical performance may not persist; evaluate across periods and monitor relevant errors.

### 中文回答

市场状态变化可能改变特征和目标关系，平均误差会掩盖局部失效。分时期评估，检查样本量和标签可用性，不凭一次变化就自动重训。

[深入材料与练习](Study%20topics/regime-changes.html)


## Volatility Forecasting

Topic: Volatility Forecasting

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Volatility Forecasting, how does it work, and when would you use it?

Volatility Forecasting 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Define a future volatility target and point-in-time features. Compare with appropriate historical-volatility baselines using chronological out-of-sample evaluation.

### 中文回答

先定义波动率目标和时点，再与过去波动率基线比较。讲义的目标是未来五个日收益平方均值开根号后年化，不是自动等于任意波动率估计量。

[深入材料与练习](Study%20topics/volatility-forecasting.html)


## Out-of-Sample Evaluation

Topic: Out-of-Sample Evaluation

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Out-of-Sample Evaluation, how does it work, and when would you use it?

Out-of-Sample Evaluation 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Out-of-sample evaluation measures performance on data not used to fit or select the model. In finance, respect chronology and information availability.

### 中文回答

样本外评估用未参与拟合的案例评价泛化；最终测试还不能参与模型选择。金融数据须保证可用时间，报告基线、各资产结果和不确定性。

[深入材料与练习](Study%20topics/out-of-sample-evaluation.html)


## Statistical Uncertainty

Topic: Statistical Uncertainty

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Statistical Uncertainty, how does it work, and when would you use it?

Statistical Uncertainty 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

A performance estimate varies with its evaluation sample. Quantify uncertainty using methods appropriate to dependence and avoid unsupported claims of improvement.

### 中文回答

有限样本指标有不确定性，金融序列和重叠标签往往相关。区块重采样等方法也依赖假设和区块长度，不能把折间标准差直接当置信区间。

[深入材料与练习](Study%20topics/statistical-uncertainty.html)


## Drift

Topic: Drift

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Drift, how does it work, and when would you use it?

Drift 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Input drift is a change in feature distributions; performance drift requires outcome evidence. An alert should trigger investigation rather than automatic replacement.

### 中文回答

输入漂移是特征分布变化，性能漂移需真实结果才能确认。漂移警报应触发数据与误差调查，不自动证明模型变差。

[深入材料与练习](Study%20topics/drift.html)


## Retraining

Topic: Retraining

### 学习背景

这属于Machine Learning的模型或评估知识。模型从历史样本学习规则，再预测没见过的数据；评估检查这条规则是否可靠。先读入门页，认识Feature、Target、Model与Training，再学习本题。

### Question

What is Retraining, how does it work, and when would you use it?

Retraining 是什么、如何工作、适用于什么情况？

### Key Terms

- Feature：模型的输入变量，例如过去已观测的波动率。
- Target：希望预测的结果，例如未来一段时间的波动率。
- Generalization：模型在没有参与训练的数据上的表现。

### 直观例子

以预测未来波动率为贯穿例子：输入只能包含预测时已经知道的数据，输出是未来波动率。学习本页后，判断它描述的是模型、预处理、评价指标还是验证过程；这些环节不是同一种东西。

### Short Answer

Retraining updates the model using eligible new data. Validate the candidate against the current model and baseline before deployment, with a rollback path.

### 中文回答

重训练需有数据质量、标签可用性和性能证据，并按同一验证协议比较候选模型。未经验证直接替换可能使系统更差。

[深入材料与练习](Study%20topics/retraining.html)
