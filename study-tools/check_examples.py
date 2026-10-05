"""Check syntax and selected adversarial cases in the published reference snippets."""
import asyncio
import json
from pathlib import Path
import numpy as np

root = Path(__file__).resolve().parents[1]
namespaces = {}
for item in json.loads((root / "study-tools/coding-snippets.json").read_text(encoding="utf-8")):
    namespace = {}
    exec(compile(item["code"], item["name"], "exec"), namespace)
    namespaces[item["name"]] = namespace
assert namespaces["Hash Maps"]["two_sum"]([3, 3], 6) == [0, 1]
assert namespaces["Two Pointers"]["pair_sorted"]([1, 2, 4], 6) == [2, 3]
assert namespaces["Binary Search"]["lower_bound"]([1, 2, 2, 4], 2) == 1
assert namespaces["Binary Search"]["lower_bound"]([], 2) == 0
assert namespaces["Sliding Window"]["longest_unique"]("abba") == 2
assert namespaces["Prefix Sums"]["count_subarrays"]([1, -1, 0], 0) == 3
assert not namespaces["Stacks"]["valid"]("([)]")
assert namespaces["Heaps"]["kth_largest"]([3, 1, 3, 2], 2) == 3
cache = namespaces["LRU Cache"]["LRU"](2)
cache.put(1, 1); cache.put(2, 2); assert cache.get(1) == 1
cache.put(3, 3); assert cache.get(2) == -1
now = [0]
store = namespaces["TTL"]["TTLStore"](lambda: now[0])
store.put("a", None, 2); assert store.get("a") is None
now[0] = 2
try:
    store.get("a")
    raise AssertionError("expiry boundary failed")
except KeyError:
    pass
bucket = namespaces["Rate Limiter"]["Bucket"](1, 2)
assert bucket.allow(0) and bucket.allow(0) and not bucket.allow(0)
assert bucket.allow(1)
assert np.allclose(namespaces["Vectorization"]["normalize_rows"]([[0, 0], [3, 4]]), [[0, 0], [.6, .8]])
assert namespaces["Refactoring"]["simplify"]("/a/../../b//./") == "/b"
async def fake_fetch(value):
    await asyncio.sleep(0)
    return value * 2
assert asyncio.run(namespaces["Async"]["bounded"]([1, 2, 3], fake_fetch, 2)) == [2, 4, 6]
# Compare the gradient step against a finite-difference loss derivative.
x = np.array([[1., 2.], [-1., 1.], [2., 0.]])
y = np.array([1., 0., 1.]); w = np.array([.1, -.2]); b = .3
step = namespaces["NumPy Logistic Regression"]["step"]
new_w, new_b = step(x, y, w, b, lr=1., l2=.2)
def loss(weights, intercept):
    z = x @ weights + intercept
    return np.mean(np.logaddexp(0, z) - y*z) + .1*np.sum(weights**2)
epsilon = 1e-6
numerical = np.array([(loss(w + np.eye(2)[i]*epsilon, b)-loss(w-np.eye(2)[i]*epsilon, b))/(2*epsilon) for i in range(2)])
assert np.allclose(w-new_w, numerical, atol=1e-6)
assert np.isclose(b-new_b, (loss(w,b+epsilon)-loss(w,b-epsilon))/(2*epsilon), atol=1e-6)
print(f"Parsed {len(namespaces)} Python snippets; adversarial examples and gradient checks passed.")
