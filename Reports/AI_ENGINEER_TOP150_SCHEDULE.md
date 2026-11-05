# LeetCode Top Interview 150 排期

题单来自 [LeetCode 官方 Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)（2026 年 11 月 4 日读取，共 150 题，23 个专题，无付费题）。计划从 2026-11-09（周一）开始，Day 1 就是这一天。

## 怎么安排

- 每天刷题时段是 08:30–10:30，共 2 小时
- Python 日（周一、周三、周五）把计划原有的 Python 题和 Top 150 混合刷，每天 4 到 7 题
- SQL 日（周二、周四）前 1 小时做 SQL（三题候选先做前两题），后 1 小时刷 Top 150，每天 2 到 3 题
- 每题按 Easy 15 分钟、Medium 20 分钟、Hard 30 分钟估算，工程实现题（KV Store、Rate Limiter、Crawler 等）按 30 分钟
- 同一个专题先在计划里对应的主题日引入，剩下的题在随后几天补完
- Hard 全部排在 Day 35 之后（12/25 起），Day 41（1/4）全部做完；Day 42 到 Day 45 用来重做薄弱题
- 每天的具体题目和链接在[每日总时间表](AI_ENGINEER_TRANSITION_PLAN.md)

## 专题进度

- Hashmap - 9 题 - Day 01 到 Day 02（11/9 到 11/10）
- Linked List - 11 题 - Day 13 到 Day 17（11/25 到 12/1），Hard 1 题在 Day 37
- Sliding Window - 4 题 - Day 08，Hard 2 题在 Day 36, 36
- Binary Search - 7 题 - Day 05 到 Day 06（11/13 到 11/16），Hard 1 题在 Day 40
- Multidimensional DP - 9 题 - Day 33 到 Day 35（12/23 到 12/25），Hard 2 题在 Day 41, 41
- Array / String - 24 题 - Day 04 到 Day 20（11/12 到 12/4），Hard 3 题在 Day 35, 35, 36
- Math - 6 题 - Day 30，Hard 1 题在 Day 41
- Two Pointers - 5 题 - Day 03
- Backtracking - 7 题 - Day 23 到 Day 28（12/9 到 12/16），Hard 1 题在 Day 39
- Stack - 5 题 - Day 10，Hard 1 题在 Day 37
- Divide & Conquer - 4 题 - Day 32 到 Day 33（12/22 到 12/23），Hard 1 题在 Day 39
- Matrix - 5 题 - Day 21 到 Day 27（12/7 到 12/15）
- Kadane's Algorithm - 2 题 - Day 28 到 Day 29（12/16 到 12/17）
- Intervals - 4 题 - Day 06 到 Day 07（11/16 到 11/17）
- Bit Manipulation - 6 题 - Day 31 到 Day 32（12/21 到 12/22）
- 1D DP - 5 题 - Day 28 到 Day 29（12/16 到 12/17）
- Binary Search Tree - 3 题 - Day 26 到 Day 27（12/14 到 12/15）
- Binary Tree General - 14 题 - Day 16 到 Day 24（11/30 到 12/10），Hard 1 题在 Day 38
- Binary Tree BFS - 4 题 - Day 16 到 Day 26（11/30 到 12/14）
- Graph BFS - 3 题 - Day 19，Hard 1 题在 Day 38
- Graph General - 6 题 - Day 15 到 Day 17（11/27 到 12/1）
- Trie - 3 题 - Day 18，Hard 1 题在 Day 38
- Heap - 4 题 - Day 11，Hard 2 题在 Day 40, 40

## 完整题单

### Hashmap

- [1. Two Sum](https://leetcode.com/problems/two-sum/) - Easy - Day 01 · 周一 11/9
- [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) - Medium - Day 01 · 周一 11/9
- [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) - Medium - Day 01 · 周一 11/9
- [202. Happy Number](https://leetcode.com/problems/happy-number/) - Easy - Day 01 · 周一 11/9
- [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) - Easy - Day 01 · 周一 11/9
- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) - Easy - Day 02 · 周二 11/10
- [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) - Easy - Day 01 · 周一 11/9
- [290. Word Pattern](https://leetcode.com/problems/word-pattern/) - Easy - Day 02 · 周二 11/10
- [383. Ransom Note](https://leetcode.com/problems/ransom-note/) - Easy - Day 02 · 周二 11/10

### Linked List

- [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) - Medium - Day 13 · 周三 11/25
- [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) - Medium - Day 13 · 周三 11/25
- [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) - Easy - Day 13 · 周三 11/25
- [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) - Hard - Day 37 · 周二 12/29
- [61. Rotate List](https://leetcode.com/problems/rotate-list/) - Medium - Day 13 · 周三 11/25
- [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) - Medium - Day 14 · 周四 11/26
- [86. Partition List](https://leetcode.com/problems/partition-list/) - Medium - Day 14 · 周四 11/26
- [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) - Medium - Day 14 · 周四 11/26
- [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) - Medium - Day 17 · 周二 12/1
- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) - Easy - Day 17 · 周二 12/1
- [146. LRU Cache](https://leetcode.com/problems/lru-cache/) - Medium - Day 13 · 周三 11/25

### Sliding Window

- [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - Medium - Day 08 · 周三 11/18
- [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) - Hard - Day 36 · 周一 12/28
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) - Hard - Day 36 · 周一 12/28
- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) - Medium - Day 08 · 周三 11/18

### Binary Search

- [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) - Hard - Day 40 · 周五 1/1
- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium - Day 05 · 周五 11/13
- [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) - Medium - Day 05 · 周五 11/13
- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) - Easy - Day 05 · 周五 11/13
- [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) - Medium - Day 05 · 周五 11/13
- [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) - Medium - Day 05 · 周五 11/13
- [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) - Medium - Day 06 · 周一 11/16

### Multidimensional DP

- [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - Day 33 · 周三 12/23
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) - Medium - Day 33 · 周三 12/23
- [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) - Medium - Day 34 · 周四 12/24
- [72. Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium - Day 34 · 周四 12/24
- [97. Interleaving String](https://leetcode.com/problems/interleaving-string/) - Medium - Day 34 · 周四 12/24
- [120. Triangle](https://leetcode.com/problems/triangle/) - Medium - Day 35 · 周五 12/25
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) - Hard - Day 41 · 周一 1/4
- [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) - Hard - Day 41 · 周一 1/4
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/) - Medium - Day 35 · 周五 12/25

### Array / String

- [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) - Medium - Day 04 · 周四 11/12
- [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/) - Medium - Day 04 · 周四 11/12
- [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/) - Easy - Day 04 · 周四 11/12
- [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) - Easy - Day 07 · 周二 11/17
- [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) - Easy - Day 07 · 周二 11/17
- [27. Remove Element](https://leetcode.com/problems/remove-element/) - Easy - Day 08 · 周三 11/18
- [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) - Easy - Day 08 · 周三 11/18
- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) - Hard - Day 35 · 周五 12/25
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) - Medium - Day 08 · 周三 11/18
- [55. Jump Game](https://leetcode.com/problems/jump-game/) - Medium - Day 09 · 周四 11/19
- [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) - Easy - Day 09 · 周四 11/19
- [68. Text Justification](https://leetcode.com/problems/text-justification/) - Hard - Day 35 · 周五 12/25
- [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) - Medium - Day 09 · 周四 11/19
- [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) - Easy - Day 10 · 周五 11/20
- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) - Easy - Day 10 · 周五 11/20
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) - Medium - Day 11 · 周一 11/23
- [134. Gas Station](https://leetcode.com/problems/gas-station/) - Medium - Day 11 · 周一 11/23
- [135. Candy](https://leetcode.com/problems/candy/) - Hard - Day 36 · 周一 12/28
- [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) - Medium - Day 12 · 周二 11/24
- [169. Majority Element](https://leetcode.com/problems/majority-element/) - Easy - Day 12 · 周二 11/24
- [189. Rotate Array](https://leetcode.com/problems/rotate-array/) - Medium - Day 12 · 周二 11/24
- [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) - Medium - Day 18 · 周三 12/2
- [274. H-Index](https://leetcode.com/problems/h-index/) - Medium - Day 20 · 周五 12/4
- [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) - Medium - Day 20 · 周五 12/4

### Math

- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) - Easy - Day 30 · 周五 12/18
- [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) - Medium - Day 30 · 周五 12/18
- [66. Plus One](https://leetcode.com/problems/plus-one/) - Easy - Day 30 · 周五 12/18
- [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) - Easy - Day 30 · 周五 12/18
- [149. Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) - Hard - Day 41 · 周一 1/4
- [172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) - Medium - Day 30 · 周五 12/18

### Two Pointers

- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - Medium - Day 03 · 周三 11/11
- [15. 3Sum](https://leetcode.com/problems/3sum/) - Medium - Day 03 · 周三 11/11
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) - Easy - Day 03 · 周三 11/11
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) - Medium - Day 03 · 周三 11/11
- [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) - Easy - Day 03 · 周三 11/11

### Backtracking

- [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) - Medium - Day 23 · 周三 12/9
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - Medium - Day 23 · 周三 12/9
- [39. Combination Sum](https://leetcode.com/problems/combination-sum/) - Medium - Day 23 · 周三 12/9
- [46. Permutations](https://leetcode.com/problems/permutations/) - Medium - Day 25 · 周五 12/11
- [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/) - Hard - Day 39 · 周四 12/31
- [77. Combinations](https://leetcode.com/problems/combinations/) - Medium - Day 25 · 周五 12/11
- [79. Word Search](https://leetcode.com/problems/word-search/) - Medium - Day 28 · 周三 12/16

### Stack

- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) - Easy - Day 10 · 周五 11/20
- [71. Simplify Path](https://leetcode.com/problems/simplify-path/) - Medium - Day 10 · 周五 11/20
- [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) - Medium - Day 10 · 周五 11/20
- [155. Min Stack](https://leetcode.com/problems/min-stack/) - Medium - Day 10 · 周五 11/20
- [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/) - Hard - Day 37 · 周二 12/29

### Divide & Conquer

- [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) - Hard - Day 39 · 周四 12/31
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) - Easy - Day 32 · 周二 12/22
- [148. Sort List](https://leetcode.com/problems/sort-list/) - Medium - Day 33 · 周三 12/23
- [427. Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/) - Medium - Day 33 · 周三 12/23

### Matrix

- [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) - Medium - Day 21 · 周一 12/7
- [48. Rotate Image](https://leetcode.com/problems/rotate-image/) - Medium - Day 21 · 周一 12/7
- [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - Medium - Day 21 · 周一 12/7
- [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) - Medium - Day 27 · 周二 12/15
- [289. Game of Life](https://leetcode.com/problems/game-of-life/) - Medium - Day 27 · 周二 12/15

### Kadane's Algorithm

- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) - Medium - Day 28 · 周三 12/16
- [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) - Medium - Day 29 · 周四 12/17

### Intervals

- [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) - Medium - Day 06 · 周一 11/16
- [57. Insert Interval](https://leetcode.com/problems/insert-interval/) - Medium - Day 06 · 周一 11/16
- [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/) - Easy - Day 06 · 周一 11/16
- [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) - Medium - Day 07 · 周二 11/17

### Bit Manipulation

- [67. Add Binary](https://leetcode.com/problems/add-binary/) - Easy - Day 31 · 周一 12/21
- [136. Single Number](https://leetcode.com/problems/single-number/) - Easy - Day 31 · 周一 12/21
- [137. Single Number II](https://leetcode.com/problems/single-number-ii/) - Medium - Day 31 · 周一 12/21
- [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/) - Easy - Day 31 · 周一 12/21
- [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) - Easy - Day 32 · 周二 12/22
- [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) - Medium - Day 32 · 周二 12/22

### 1D DP

- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Easy - Day 28 · 周三 12/16
- [139. Word Break](https://leetcode.com/problems/word-break/) - Medium - Day 28 · 周三 12/16
- [198. House Robber](https://leetcode.com/problems/house-robber/) - Medium - Day 28 · 周三 12/16
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium - Day 29 · 周四 12/17
- [322. Coin Change](https://leetcode.com/problems/coin-change/) - Medium - Day 29 · 周四 12/17

### Binary Search Tree

- [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium - Day 26 · 周一 12/14
- [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) - Medium - Day 26 · 周一 12/14
- [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) - Easy - Day 27 · 周二 12/15

### Binary Tree General

- [100. Same Tree](https://leetcode.com/problems/same-tree/) - Easy - Day 16 · 周一 11/30
- [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - Easy - Day 16 · 周一 11/30
- [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - Easy - Day 16 · 周一 11/30
- [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) - Medium - Day 16 · 周一 11/30
- [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) - Medium - Day 16 · 周一 11/30
- [112. Path Sum](https://leetcode.com/problems/path-sum/) - Easy - Day 19 · 周四 12/3
- [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) - Medium - Day 20 · 周五 12/4
- [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) - Medium - Day 22 · 周二 12/8
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) - Hard - Day 38 · 周三 12/30
- [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) - Medium - Day 22 · 周二 12/8
- [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) - Medium - Day 22 · 周二 12/8
- [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/) - Medium - Day 24 · 周四 12/10
- [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) - Easy - Day 16 · 周一 11/30
- [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - Medium - Day 24 · 周四 12/10

### Binary Tree BFS

- [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium - Day 16 · 周一 11/30
- [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - Medium - Day 24 · 周四 12/10
- [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) - Medium - Day 26 · 周一 12/14
- [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) - Easy - Day 26 · 周一 12/14

### Graph BFS

- [127. Word Ladder](https://leetcode.com/problems/word-ladder/) - Hard - Day 38 · 周三 12/30
- [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) - Medium - Day 19 · 周四 12/3
- [909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) - Medium - Day 19 · 周四 12/3

### Graph General

- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) - Medium - Day 15 · 周五 11/27
- [133. Clone Graph](https://leetcode.com/problems/clone-graph/) - Medium - Day 15 · 周五 11/27
- [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium - Day 15 · 周五 11/27
- [207. Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium - Day 15 · 周五 11/27
- [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) - Medium - Day 15 · 周五 11/27
- [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/) - Medium - Day 17 · 周二 12/1

### Trie

- [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) - Medium - Day 18 · 周三 12/2
- [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) - Medium - Day 18 · 周三 12/2
- [212. Word Search II](https://leetcode.com/problems/word-search-ii/) - Hard - Day 38 · 周三 12/30

### Heap

- [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - Medium - Day 11 · 周一 11/23
- [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) - Hard - Day 40 · 周五 1/1
- [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) - Medium - Day 11 · 周一 11/23
- [502. IPO](https://leetcode.com/problems/ipo/) - Hard - Day 40 · 周五 1/1

## 计划原有、不在 Top 150 里的题

这些题保留在对应日期，主要是工程实现、并发、字符串解析和 Top-k 变体：

- [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/) - Medium - Day 21 · 12/7
- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - Easy - Day 13 · 11/25
- [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) - Easy - Day 01 · 11/9
- [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) - Easy - Day 10 · 11/20
- [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) - Easy - Day 03 · 11/11
- [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - Medium - Day 11 · 11/23
- [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/) - Easy - Day 25 · 12/11
- [394. Decode String](https://leetcode.com/problems/decode-string/) - Medium - Day 20 · 12/4
- [468. Validate IP Address](https://leetcode.com/problems/validate-ip-address/) - Medium - Day 21 · 12/7
- [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) - Medium - Day 08 · 11/18
- [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) - Medium - Day 25 · 12/11
- [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) - Easy - Day 11 · 11/23
- [704. Binary Search](https://leetcode.com/problems/binary-search/) - Easy - Day 05 · 11/13
- [706. Design HashMap](https://leetcode.com/problems/design-hashmap/) - Easy - Day 18 · 12/2
- [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) - Medium - Day 33 · 12/23
- [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) - Medium - Day 18 · 12/2
- [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) - Medium - Day 15 · 11/27
- [1114. Print in Order](https://leetcode.com/problems/print-in-order/) - Easy - Day 23 · 12/9
- [1115. Print FooBar Alternately](https://leetcode.com/problems/print-foobar-alternately/) - Medium - Day 23 · 12/9
- [1236. Web Crawler](https://leetcode.com/problems/web-crawler/) - Medium - Day 26 · 12/14
- [2408. Design SQL](https://leetcode.com/problems/design-sql/) - Medium - Day 31 · 12/21
