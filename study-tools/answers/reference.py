"""Educational interview references. Standard library plus NumPy; no services."""

# BEGIN Q157 Q317
import numpy as np


def cosine_similarity(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if a.ndim != 1 or a.shape != b.shape or a.size == 0:
        raise ValueError("equal nonempty vectors required")
    if not np.isfinite(a).all() or not np.isfinite(b).all():
        raise ValueError("finite vectors required")
    # Rescale first to reduce overflow in norms for large finite inputs.
    sa, sb = np.max(np.abs(a)), np.max(np.abs(b))
    if sa == 0 or sb == 0:
        return 0.0  # Explicit application policy; cosine is undefined at zero.
    a, b = a / sa, b / sb
    return float(np.clip(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)), -1, 1))
# END

# BEGIN Q253
import time
import threading


class TokenBucket:
    """Thread-safe local bucket; not a distributed rate limit."""
    def __init__(self, rate, capacity, clock=time.monotonic):
        if rate < 0 or capacity <= 0:
            raise ValueError("invalid rate/capacity")
        self.rate, self.capacity, self.clock = rate, capacity, clock
        self.tokens, self.updated = float(capacity), clock()
        self.lock = threading.Lock()

    def allow(self, amount=1):
        if amount <= 0:
            raise ValueError("positive amount required")
        with self.lock:
            now = self.clock()
            if now < self.updated:
                raise ValueError("clock moved backward")
            self.tokens = min(self.capacity, self.tokens + (now - self.updated) * self.rate)
            self.updated = now
            if self.tokens < amount:
                return False
            self.tokens -= amount
            return True
# END

# BEGIN Q295
from collections import deque


def resolve_virtual_path(path, cwd="/", symlinks=None, max_links=40):
    """Illustrative POSIX virtual paths; no host filesystem access or ACL check."""
    symlinks = symlinks or {}
    if not cwd.startswith("/") or not path:
        raise ValueError("absolute cwd and nonempty path required")
    pending = deque((path if path.startswith("/") else cwd + "/" + path).split("/"))
    resolved, links = [], 0
    while pending:
        part = pending.popleft()
        if part in ("", "."):
            continue
        if part == "..":
            if resolved:
                resolved.pop()
            continue
        resolved.append(part)
        current = "/" + "/".join(resolved)
        if current in symlinks:
            links += 1
            if links > max_links:
                raise ValueError("symlink traversal limit")
            target = symlinks[current]
            resolved.pop()
            if target.startswith("/"):
                resolved.clear()
            pending.extendleft(reversed(target.split("/")))
    return "/" + "/".join(resolved)
# END

# BEGIN Q316
import asyncio


async def bounded_batch(items, call, workers=4, timeout=2.0):
    """Async transport core; call must separately enforce quotas/retry policy."""
    if workers < 1 or timeout <= 0:
        raise ValueError("invalid worker configuration")
    queue, results = asyncio.Queue(maxsize=workers * 2), []

    async def producer():
        for index, item in enumerate(items):
            await queue.put((index, item))
        for _ in range(workers):
            await queue.put(None)

    async def worker():
        while True:
            entry = await queue.get()
            try:
                if entry is None:
                    return
                index, item = entry
                try:
                    value = await asyncio.wait_for(call(item), timeout)
                    results.append((index, {"ok": True, "value": value}))
                except Exception as exc:
                    results.append((index, {"ok": False, "error_type": type(exc).__name__}))
            finally:
                queue.task_done()

    async with asyncio.TaskGroup() as group:  # Python 3.11+; cancellation propagates.
        group.create_task(producer())
        for _ in range(workers):
            group.create_task(worker())
    return [value for _, value in sorted(results)]
# END

# BEGIN Q318
import json


def training_jsonl(records):
    """Illustrative prompt/completion input to chat JSONL; split/redact upstream."""
    seen, output = set(), []
    for record in records:
        prompt, completion = record["prompt"], record["completion"]
        if not isinstance(prompt, str) or not isinstance(completion, str):
            raise ValueError("string prompt/completion required")
        prompt, completion = prompt.strip(), completion.strip()
        if not prompt or not completion:
            raise ValueError("empty training example")
        key = (prompt, completion)
        if key in seen:
            continue
        seen.add(key)
        output.append(json.dumps({"messages": [
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": completion}
        ]}, ensure_ascii=False))
    return "\n".join(output)
# END

# BEGIN Q320
import numpy as np


def rnn_forward(sequence, h0, wx, wh, bias):
    """Time-major (time,batch,input); caller handles padding and resets."""
    h, states = h0.copy(), []
    for x in sequence:
        h = np.tanh(x @ wx + h @ wh + bias)
        states.append(h.copy())
    return np.stack(states) if states else np.empty((0,) + h0.shape)


def lstm_forward(sequence, h0, c0, weights, bias):
    """Gate order i,f,g,o; weights shape (input+hidden,4*hidden)."""
    def logistic(z):
        return np.exp(-np.logaddexp(0, -z))
    h, c, states = h0.copy(), c0.copy(), []
    for x in sequence:
        i, f, g, o = np.split(np.concatenate([x, h], axis=-1) @ weights + bias, 4, axis=-1)
        c = logistic(f) * c + logistic(i) * np.tanh(g)
        h = logistic(o) * np.tanh(c)
        states.append(h.copy())
    output = np.stack(states) if states else np.empty((0,) + h0.shape)
    return output, (h, c)
# END

# BEGIN Q288
def find_words(board, words):
    """Four-neighbor search; a cell cannot repeat within one word."""
    if not board or not board[0]:
        return []
    rows, cols = len(board), len(board[0])
    if any(len(row) != cols for row in board):
        raise ValueError("rectangular board required")
    trie = {}
    for word in words:
        if not word:
            continue
        node = trie
        for char in word:
            node = node.setdefault(char, {})
        node[None] = word
    found, visited = set(), set()

    def dfs(r, c, node):
        if not (0 <= r < rows and 0 <= c < cols) or (r, c) in visited:
            return
        child = node.get(board[r][c])
        if child is None:
            return
        if None in child:
            found.add(child[None])
        visited.add((r, c))
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            dfs(r + dr, c + dc, child)
        visited.remove((r, c))

    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie)
    return sorted(found)
# END

# BEGIN Q289 Q497
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity):
        if capacity < 0:
            raise ValueError("nonnegative capacity required")
        self.capacity, self.data = capacity, OrderedDict()

    def get(self, key):
        if key not in self.data:
            return -1  # This exercise's missing-value contract.
        self.data.move_to_end(key)
        return self.data[key]

    def put(self, key, value):
        self.data[key] = value
        self.data.move_to_end(key)
        if len(self.data) > self.capacity:
            self.data.popitem(last=False)
# END

# BEGIN Q290
from math import isqrt


def primes_through(n):
    if n < 2:
        return []
    prime = [True] * (n + 1)
    prime[0] = prime[1] = False
    for p in range(2, isqrt(n) + 1):
        if prime[p]:
            for multiple in range(p * p, n + 1, p):
                prime[multiple] = False
    return [i for i, yes in enumerate(prime) if yes]
# END

# BEGIN Q291
from collections import Counter


def is_anagram(left, right):
    """Exact Unicode code-point equality; no implicit normalization."""
    return len(left) == len(right) and Counter(left) == Counter(right)
# END

# BEGIN Q292
import json
from dataclasses import dataclass


@dataclass
class TreeNode:
    value: int
    left: object = None
    right: object = None


def serialize_tree(root):
    tokens, stack = [], [root]
    while stack:
        node = stack.pop()
        if node is None:
            tokens.append(None)
        else:
            if type(node.value) is not int:
                raise ValueError("integer values required")
            tokens.append(node.value)
            stack.extend([node.right, node.left])
    return json.dumps({"version": 1, "preorder": tokens})


def deserialize_tree(payload):
    obj = json.loads(payload)
    if not isinstance(obj, dict) or obj.get("version") != 1:
        raise ValueError("unsupported format")
    tokens = obj.get("preorder")
    if not isinstance(tokens, list) or not tokens:
        raise ValueError("missing tree")
    sentinel = TreeNode(0)
    pending = [(sentinel, "left")]
    for value in tokens:
        if not pending:
            raise ValueError("extra tokens")
        parent, side = pending.pop()
        if value is not None:
            if type(value) is not int:
                raise ValueError("invalid value")
            node = TreeNode(value)
            setattr(parent, side, node)
            pending.extend([(node, "right"), (node, "left")])
    if pending:
        raise ValueError("truncated tree")
    return sentinel.left
# END

# BEGIN Q293
class SQL:
    """Named tables, 1-based row IDs and columns; invalid access raises."""
    def __init__(self, names, columns):
        if len(names) != len(columns) or len(set(names)) != len(names):
            raise ValueError("invalid table definitions")
        if any(c < 1 for c in columns):
            raise ValueError("positive column counts required")
        self.width = dict(zip(names, columns))
        self.rows = {name: {} for name in names}
        self.next_id = dict.fromkeys(names, 1)

    def insertRow(self, name, row):
        if len(row) != self.width[name]:
            raise ValueError("wrong row width")
        row_id = self.next_id[name]
        self.rows[name][row_id] = list(row)
        self.next_id[name] += 1

    def deleteRow(self, name, row_id):
        del self.rows[name][row_id]

    def selectCell(self, name, row_id, column_id):
        if not 1 <= column_id <= self.width[name]:
            raise IndexError(column_id)
        return self.rows[name][row_id][column_id - 1]
# END

# BEGIN Q294 Q306
from bisect import bisect_right


class TimeMap:
    """Strictly increasing timestamps per key; None is a tombstone."""
    def __init__(self):
        self.times, self.values = {}, {}

    def set(self, key, value, timestamp):
        times = self.times.setdefault(key, [])
        if times and timestamp <= times[-1]:
            raise ValueError("timestamps must increase per key")
        times.append(timestamp)
        self.values.setdefault(key, []).append(value)

    def delete(self, key, timestamp):
        self.set(key, None, timestamp)

    def get(self, key, timestamp):
        i = bisect_right(self.times.get(key, []), timestamp) - 1
        return None if i < 0 else self.values[key][i]
# END

# BEGIN Q296
from dataclasses import dataclass


@dataclass
class ListNode:
    value: object
    next: object = None


def reverse_list(head):
    """Precondition: finite, acyclic singly linked list."""
    previous, current = None, head
    while current is not None:
        following = current.next
        current.next = previous
        previous, current = current, following
    return previous
# END

# BEGIN Q297
def excel_column(number):
    if type(number) is not int or number <= 0:
        raise ValueError("positive integer required")
    result = []
    while number:
        number, digit = divmod(number - 1, 26)
        result.append(chr(ord("A") + digit))
    return "".join(reversed(result))
# END

# BEGIN Q298
def parent_tree(parents):
    """Return root index and children; -1 denotes the sole root."""
    if not parents:
        return None, []
    n = len(parents)
    children, roots = [[] for _ in parents], []
    for i, parent in enumerate(parents):
        if parent == -1:
            roots.append(i)
        elif not 0 <= parent < n or parent == i:
            raise ValueError("invalid parent")
        else:
            children[parent].append(i)
    if len(roots) != 1:
        raise ValueError("one root required")
    seen, stack = set(), roots[:]
    while stack:
        node = stack.pop()
        if node in seen:
            raise ValueError("cycle")
        seen.add(node)
        stack.extend(children[node])
    if len(seen) != n:
        raise ValueError("disconnected cycle")
    return roots[0], children
# END

# BEGIN Q300
class UnionFind:
    """Union-find component only; sentiment-model details are unspecified."""
    def __init__(self, n):
        self.parent, self.size = list(range(n)), [1] * n

    def find(self, x):
        if not 0 <= x < len(self.parent):
            raise IndexError(x)
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return False
        if self.size[a] < self.size[b]:
            a, b = b, a
        self.parent[b] = a
        self.size[a] += self.size[b]
        return True
# END

# BEGIN Q304 Q495
import json


class KeyValueStore:
    """String keys/values, single process; GET absence raises KeyError."""
    def __init__(self):
        self.data = {}

    def set(self, key, value):
        if not isinstance(key, str) or not isinstance(value, str):
            raise TypeError("string keys and values required")
        self.data[key] = value

    def get(self, key):
        return self.data[key]

    def delete(self, key):
        if key not in self.data:
            return False
        del self.data[key]
        return True

    def serialize(self):
        return json.dumps({"version": 1, "entries": list(self.data.items())})

    def restore(self, payload):
        if len(payload) > 1_000_000:
            raise ValueError("payload too large")
        obj = json.loads(payload)
        if not isinstance(obj, dict) or obj.get("version") != 1:
            raise ValueError("unsupported format")
        entries = obj.get("entries")
        if not isinstance(entries, list):
            raise ValueError("entries must be a list")
        replacement = {}
        for pair in entries:
            if (not isinstance(pair, list) or len(pair) != 2
                    or not all(isinstance(x, str) for x in pair)):
                raise ValueError("invalid entry")
            key, value = pair
            if key in replacement:
                raise ValueError("duplicate key")
            replacement[key] = value
        self.data = replacement  # Commit only after complete validation.
# END

# BEGIN Q309
class TTLStore:
    """Current-time reads; injected monotonic clock; prefix scan sorted by key."""
    def __init__(self, clock):
        self.clock, self.data = clock, {}

    def set(self, key, value, ttl=None):
        if ttl is not None and ttl < 0:
            raise ValueError("negative TTL")
        self.data[key] = (value, None if ttl is None else self.clock() + ttl)

    def get(self, key):
        value, expires = self.data[key]
        if expires is not None and self.clock() >= expires:
            del self.data[key]
            raise KeyError(key)
        return value

    def delete(self, key):
        try:
            self.get(key)
        except KeyError:
            return False
        del self.data[key]
        return True

    def scan(self, prefix=""):
        result = []
        for key in sorted(self.data):
            if key.startswith(prefix):
                try:
                    result.append((key, self.get(key)))
                except KeyError:
                    pass
        return result
# END

# BEGIN Q310
import numpy as np


def nearest_label(x, labels, query):
    x, query, labels = np.asarray(x, float), np.asarray(query, float), np.asarray(labels)
    if x.ndim != 2 or len(x) == 0 or query.shape != (x.shape[1],) or len(labels) != len(x):
        raise ValueError("incompatible nonempty data")
    if not np.isfinite(x).all() or not np.isfinite(query).all():
        raise ValueError("finite inputs required")
    return labels[np.argmin(np.sum((x - query) ** 2, axis=1))]


def feed_forward(x, w1, b1, w2, b2):
    """Illustrative two-layer forward pass; training loss is unspecified."""
    return np.maximum(0, np.asarray(x) @ w1 + b1) @ w2 + b2
# END

# BEGIN Q313 Q314 Q321
import numpy as np


def attention(q, k, v, causal=True, offset=0):
    """Shapes (batch, heads, query/key length, head dimension)."""
    scores = q @ k.swapaxes(-1, -2) / np.sqrt(q.shape[-1])
    if causal:
        allowed = np.arange(k.shape[-2])[None, :] <= offset + np.arange(q.shape[-2])[:, None]
        scores = np.where(allowed, scores, -np.inf)
    scores -= scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights /= weights.sum(axis=-1, keepdims=True)
    return weights @ v


def mha(x, wq, wk, wv, wo, heads):
    batch, length, width = x.shape
    if heads <= 0 or width % heads:
        raise ValueError("invalid head count")
    def split(w):
        return (x @ w).reshape(batch, length, heads, width // heads).transpose(0, 2, 1, 3)
    y = attention(split(wq), split(wk), split(wv))
    return y.transpose(0, 2, 1, 3).reshape(batch, length, width) @ wo


def layer_norm(x, eps=1e-5):
    return (x - x.mean(axis=-1, keepdims=True)) / np.sqrt(x.var(axis=-1, keepdims=True) + eps)


def decoder_layer(x, wq, wk, wv, wo, w1, w2, heads):
    """Pre-norm, ReLU, no biases/dropout or learned norm affine terms."""
    y = x + mha(layer_norm(x), wq, wk, wv, wo, heads)
    return y + np.maximum(0, layer_norm(y) @ w1) @ w2


def grouped_cached_attention(q, k_new, v_new, cache=None):
    """Projected inputs; query heads must be a multiple of KV heads."""
    q_heads, kv_heads = q.shape[1], k_new.shape[1]
    if kv_heads < 1 or q_heads % kv_heads or k_new.shape != v_new.shape:
        raise ValueError("invalid GQA shapes")
    offset = 0 if cache is None else cache[0].shape[-2]
    k = k_new if cache is None else np.concatenate([cache[0], k_new], axis=-2)
    v = v_new if cache is None else np.concatenate([cache[1], v_new], axis=-2)
    repeats = q_heads // kv_heads
    output = attention(q, np.repeat(k, repeats, axis=1), np.repeat(v, repeats, axis=1), offset=offset)
    return output, (k, v)
# END

# BEGIN Q315
import numpy as np


def lora_forward(x, w, a, b, alpha):
    """Row-vector convention: W(d,o), A(d,r), B(r,o); base W frozen."""
    if a.shape[1] < 1 or a.shape[1] != b.shape[0]:
        raise ValueError("invalid rank")
    return x @ w + (alpha / a.shape[1]) * ((x @ a) @ b)
# END

# BEGIN Q322 Q323
import numpy as np


def sampling_probs(logits, temperature=1.0, top_k=None, top_p=1.0):
    logits = np.asarray(logits, float)
    if logits.ndim != 1 or len(logits) == 0 or not np.isfinite(logits).all():
        raise ValueError("finite nonempty 1D logits required")
    if temperature <= 0 or not 0 < top_p <= 1:
        raise ValueError("invalid sampling parameters")
    if top_k is not None and not 1 <= top_k <= len(logits):
        raise ValueError("invalid top_k")
    order = np.argsort(-logits, kind="stable")
    if top_k is not None:
        order = order[:top_k]
    scaled = (logits[order] - logits[order].max()) / temperature
    p = np.exp(scaled)
    p /= p.sum()
    count = min(len(p), np.searchsorted(np.cumsum(p), top_p, side="left") + 1)
    result = np.zeros(len(logits))
    result[order[:count]] = p[:count] / p[:count].sum()
    return result


def generate(next_logits, prompt, eos, max_new=20, max_context=100, seed=0, **sampling):
    """Fake/real next_logits interface; stops rather than truncates context."""
    tokens, rng = list(prompt), np.random.default_rng(seed)
    if len(tokens) > max_context or max_new < 0:
        raise ValueError("invalid token budget")
    for _ in range(max_new):
        if len(tokens) >= max_context:
            break
        probabilities = sampling_probs(next_logits(tokens), **sampling)
        token = int(rng.choice(len(probabilities), p=probabilities))
        tokens.append(token)
        if token == eos:
            break
    return tokens


def beam_search(next_logits, prompt, eos, width=2, max_new=10):
    """Cumulative log-probability; no length normalization in this variant."""
    if width < 1:
        raise ValueError("positive beam width required")
    beams = [(list(prompt), 0.0, False)]
    for _ in range(max_new):
        candidates = []
        for tokens, score, done in beams:
            if done:
                candidates.append((tokens, score, True))
                continue
            z = np.asarray(next_logits(tokens), float)
            z = z - z.max()
            logp = z - np.log(np.exp(z).sum())
            for token in np.argsort(-logp)[:width]:
                candidates.append((tokens + [int(token)], score + logp[token], token == eos))
        beams = sorted(candidates, key=lambda b: b[1], reverse=True)[:width]
        if all(b[2] for b in beams):
            break
    return beams[0][0]
# END

# BEGIN Q324
import numpy as np


def sigmoid(z):
    z = np.asarray(z, float)
    out = np.empty_like(z)
    positive = z >= 0
    out[positive] = 1 / (1 + np.exp(-z[positive]))
    ez = np.exp(z[~positive])
    out[~positive] = ez / (1 + ez)
    return out


def logistic_loss_gradient(x, y, w, b, l2=0.0):
    z = x @ w + b
    loss = np.mean(np.logaddexp(0, z) - y * z) + 0.5 * l2 * (w @ w)
    error = sigmoid(z) - y
    return loss, x.T @ error / len(y) + l2 * w, error.mean()


def fit_logistic(x, y, xv, yv, lr=0.1, l2=0.01, epochs=200, batch_size=16, patience=10, seed=0):
    x, y, xv, yv = map(lambda a: np.asarray(a, float), (x, y, xv, yv))
    if (x.ndim != 2 or xv.ndim != 2 or x.shape[1] != xv.shape[1]
            or y.shape != (len(x),) or yv.shape != (len(xv),)
            or len(y) == 0 or len(yv) == 0):
        raise ValueError("invalid data shapes")
    if not all(np.isfinite(a).all() for a in (x, y, xv, yv)):
        raise ValueError("finite inputs required")
    if not np.isin(y, [0, 1]).all() or not np.isin(yv, [0, 1]).all():
        raise ValueError("binary labels required")
    if min(lr, epochs, batch_size, patience) <= 0 or l2 < 0:
        raise ValueError("invalid optimizer configuration")
    w, b = np.zeros(x.shape[1]), 0.0
    best, best_loss, stale = (w.copy(), b), float("inf"), 0
    rng = np.random.default_rng(seed)
    for _ in range(epochs):
        order = rng.permutation(len(y))
        for start in range(0, len(y), batch_size):
            ix = order[start:start + batch_size]
            _, dw, db = logistic_loss_gradient(x[ix], y[ix], w, b, l2)
            w, b = w - lr * dw, b - lr * db
        val_loss = logistic_loss_gradient(xv, yv, w, b, 0)[0]
        if val_loss < best_loss - 1e-8:
            best, best_loss, stale = (w.copy(), b), val_loss, 0
        else:
            stale += 1
            if stale >= patience:
                break
    return best
# END

# BEGIN Q325
import numpy as np


def stratified_folds(labels, k, seed=0):
    labels = np.asarray(labels)
    if labels.ndim != 1 or len(labels) == 0 or k < 2:
        raise ValueError("nonempty labels and k >= 2 required")
    rng, folds, offset = np.random.default_rng(seed), [[] for _ in range(k)], 0
    for label in np.unique(labels):
        indices = np.flatnonzero(labels == label)
        if len(indices) < k:
            raise ValueError("every class must have at least k samples")
        rng.shuffle(indices)
        for j, index in enumerate(indices):
            folds[(offset + j) % k].append(int(index))
        offset = (offset + len(indices)) % k
    all_indices = np.arange(len(labels))
    for fold in folds:
        validation = np.array(sorted(fold), dtype=int)
        train_mask = np.ones(len(labels), dtype=bool)
        train_mask[validation] = False
        yield all_indices[train_mask], validation
# END

# BEGIN Q327 Q493
from collections import deque
from urllib.parse import urljoin, urlsplit, urlunsplit


def crawl_frontier(start, fetch_links, max_pages=100):
    """Offline traversal core. fetch_links must enforce network/robots policy."""
    def normalize(url):
        parts = urlsplit(url)
        if parts.scheme not in ("http", "https") or not parts.hostname or parts.username:
            raise ValueError("unsupported URL")
        return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path or "/", parts.query, ""))
    start = normalize(start)
    origin = urlsplit(start)[:2]
    queue, seen, visited = deque([start]), {start}, []
    while queue and len(visited) < max_pages:
        url = queue.popleft()
        visited.append(url)
        for href in fetch_links(url):
            try:
                target = normalize(urljoin(url, href))
            except ValueError:
                continue
            if urlsplit(target)[:2] == origin and target not in seen:
                seen.add(target)
                queue.append(target)
    return visited
# END

# BEGIN Q496
def rle_encode(text):
    result = []
    for char in text:
        if result and result[-1][0] == char:
            result[-1] = (char, result[-1][1] + 1)
        else:
            result.append((char, 1))
    return result


def rle_decode(runs):
    if any(not isinstance(c, str) or len(c) != 1 or type(n) is not int or n < 1 for c, n in runs):
        raise ValueError("invalid runs")
    return "".join(char * count for char, count in runs)
# END
