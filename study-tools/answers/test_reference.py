"""Boundary and independent-reference checks for the displayed snippets."""
import asyncio
import json
import unittest
import numpy as np
import reference as r


class References(unittest.TestCase):
    def test_cosine(self):
        self.assertAlmostEqual(r.cosine_similarity([1, 2], [2, 4]), 1)
        self.assertAlmostEqual(r.cosine_similarity([1, 0], [0, 1]), 0)
        self.assertAlmostEqual(r.cosine_similarity([1, 0], [-1, 0]), -1)
        self.assertEqual(r.cosine_similarity([0], [1]), 0)
        self.assertAlmostEqual(r.cosine_similarity([1e300], [1e300]), 1)
        for a, b in [([], []), ([1], [1, 2]), ([float('nan')], [1])]:
            with self.assertRaises(ValueError):
                r.cosine_similarity(a, b)

    def test_bucket(self):
        now = [0.0]
        bucket = r.TokenBucket(2, 2, lambda: now[0])
        self.assertTrue(bucket.allow(2))
        self.assertFalse(bucket.allow())
        now[0] = 0.49
        self.assertFalse(bucket.allow())
        now[0] = 0.5
        self.assertTrue(bucket.allow())
        now[0] = 100
        self.assertFalse(bucket.allow(3))
        self.assertTrue(bucket.allow(2))

    def test_symlinks(self):
        self.assertEqual(r.resolve_virtual_path('/a/link/..', symlinks={'/a/link': '/x/y'}), '/x')
        self.assertEqual(r.resolve_virtual_path('link/z', cwd='/a', symlinks={'/a/link': '../b'}), '/b/z')
        self.assertEqual(r.resolve_virtual_path('/../../a//./b'), '/a/b')
        with self.assertRaises(ValueError):
            r.resolve_virtual_path('/a', symlinks={'/a': '/b', '/b': '/a'})

    def test_bounded_async(self):
        async def scenario():
            active, peak = 0, 0
            async def call(x):
                nonlocal active, peak
                active += 1
                peak = max(peak, active)
                try:
                    await asyncio.sleep(0)
                    if x == 3:
                        raise ValueError('fixture')
                    return x * x
                finally:
                    active -= 1
            output = await r.bounded_batch(range(12), call, workers=2)
            self.assertLessEqual(peak, 2)
            self.assertEqual(len(output), 12)
            self.assertEqual(output[4], {'ok': True, 'value': 16})
            self.assertEqual(output[3]['error_type'], 'ValueError')
            self.assertEqual(await r.bounded_batch([], call), [])
        asyncio.run(scenario())

    def test_word_search(self):
        self.assertEqual(r.find_words([list('ab'), list('cd')], ['ab', 'abd', 'aba', 'ac', 'ab']), ['ab', 'abd', 'ac'])
        self.assertEqual(r.find_words([], ['a']), [])
        self.assertEqual(r.find_words([['a']], ['aa', 'a']), ['a'])

    def test_lru(self):
        cache = r.LRUCache(2)
        cache.put(1, 1)
        cache.put(2, 2)
        self.assertEqual(cache.get(1), 1)
        cache.put(3, 3)
        self.assertEqual(cache.get(2), -1)
        cache.put(1, 9)
        cache.put(4, 4)
        self.assertEqual(cache.get(3), -1)
        self.assertEqual(cache.get(1), 9)
        zero = r.LRUCache(0)
        zero.put('x', 1)
        self.assertEqual(zero.get('x'), -1)

    def test_sieve_against_trial_division(self):
        for n in range(-1, 101):
            expected = [i for i in range(2, n + 1) if all(i % j for j in range(2, int(i ** 0.5) + 1))]
            self.assertEqual(r.primes_through(n), expected)

    def test_anagrams(self):
        self.assertTrue(r.is_anagram('', ''))
        self.assertTrue(r.is_anagram('aéa', 'éaa'))
        self.assertFalse(r.is_anagram('aab', 'abb'))
        self.assertFalse(r.is_anagram('A', 'a'))

    def test_tree_codec(self):
        tree = r.TreeNode(-2, r.TreeNode(0), r.TreeNode(8, None, r.TreeNode(3)))
        self.assertEqual(r.deserialize_tree(r.serialize_tree(tree)), tree)
        self.assertIsNone(r.deserialize_tree(r.serialize_tree(None)))
        for tokens in [[], [1, None], [None, None], [True, None, None]]:
            with self.assertRaises(ValueError):
                r.deserialize_tree(json.dumps({'version': 1, 'preorder': tokens}))
        deep = None
        for i in range(1500):
            deep = r.TreeNode(i, deep)
        self.assertEqual(r.serialize_tree(r.deserialize_tree(r.serialize_tree(deep))), r.serialize_tree(deep))

    def test_sql(self):
        db = r.SQL(['a', 'b'], [2, 1])
        db.insertRow('a', ['x', 'y'])
        db.deleteRow('a', 1)
        db.insertRow('a', ['u', 'v'])
        self.assertEqual(db.selectCell('a', 2, 2), 'v')
        with self.assertRaises(KeyError):
            db.selectCell('a', 1, 1)
        with self.assertRaises(IndexError):
            db.selectCell('a', 2, 0)

    def test_historical_values(self):
        db = r.TimeMap()
        db.set('x', 'a', 3)
        db.delete('x', 5)
        db.set('x', 'b', 8)
        self.assertIsNone(db.get('missing', 9))
        expected = {2: None, 3: 'a', 4: 'a', 5: None, 7: None, 8: 'b', 9: 'b'}
        for time, value in expected.items():
            self.assertEqual(db.get('x', time), value)
        with self.assertRaises(ValueError):
            db.set('x', 'late', 7)

    def test_reverse_identity(self):
        a, b, c = r.ListNode(1), r.ListNode(2), r.ListNode(3)
        a.next, b.next = b, c
        self.assertIs(r.reverse_list(a), c)
        self.assertIs(c.next, b)
        self.assertIs(b.next, a)
        self.assertIsNone(a.next)
        self.assertIsNone(r.reverse_list(None))

    def test_excel_roundtrip(self):
        self.assertEqual(r.excel_column(702), 'ZZ')
        self.assertEqual(r.excel_column(703), 'AAA')
        for n in range(1, 3000):
            value = 0
            for c in r.excel_column(n):
                value = value * 26 + ord(c) - ord('A') + 1
            self.assertEqual(value, n)
        with self.assertRaises(ValueError):
            r.excel_column(0)

    def test_parent_tree(self):
        self.assertEqual(r.parent_tree([2, 2, -1]), (2, [[], [], [0, 1]]))
        self.assertEqual(r.parent_tree([]), (None, []))
        for parents in [[-1, -1], [-1, 2, 1], [0], [9]]:
            with self.assertRaises(ValueError):
                r.parent_tree(parents)

    def test_union_find(self):
        uf = r.UnionFind(5)
        self.assertTrue(uf.union(0, 1))
        self.assertTrue(uf.union(1, 2))
        self.assertFalse(uf.union(0, 2))
        self.assertEqual(uf.find(0), uf.find(2))
        self.assertNotEqual(uf.find(0), uf.find(3))

    def test_store_atomic_restore(self):
        db = r.KeyValueStore()
        db.set('a|雪', 'line\n"value"')
        payload = db.serialize()
        copy = r.KeyValueStore()
        copy.restore(payload)
        self.assertEqual(copy.data, db.data)
        for bad in ['{', '{"version":1,"entries":[["x","1"],["x","2"]]}']:
            with self.assertRaises(ValueError):
                db.restore(bad)
            self.assertEqual(db.serialize(), payload)
        self.assertTrue(copy.delete('a|雪'))
        self.assertFalse(copy.delete('a|雪'))

    def test_ttl_boundary(self):
        now = [0]
        db = r.TTLStore(lambda: now[0])
        db.set('a', 1, 2)
        db.set('ab', 2)
        now[0] = 1.999
        self.assertEqual(db.get('a'), 1)
        now[0] = 2
        self.assertEqual(db.scan('a'), [('ab', 2)])
        self.assertFalse(db.delete('a'))
        db.set('zero', 3, 0)
        with self.assertRaises(KeyError):
            db.get('zero')

    def test_nearest_and_forward(self):
        self.assertEqual(r.nearest_label([[0, 0], [2, 0]], ['first', 'second'], [1, 0]), 'first')
        np.testing.assert_array_equal(r.feed_forward(np.array([[-1, 2]]), np.eye(2), np.zeros(2), np.eye(2), np.zeros(2)), [[0, 2]])

    def test_attention_against_scalar_reference(self):
        rng = np.random.default_rng(7)
        q, k, v = [rng.normal(size=(1, 2, 4, 3)) for _ in range(3)]
        actual = r.attention(q, k, v)
        for head in range(2):
            for t in range(4):
                scores = np.array([np.dot(q[0, head, t], k[0, head, j]) / np.sqrt(3) for j in range(t + 1)])
                p = np.exp(scores - scores.max())
                p /= p.sum()
                expected = sum(p[j] * v[0, head, j] for j in range(t + 1))
                np.testing.assert_allclose(actual[0, head, t], expected, atol=1e-12)

    def test_gqa_cache_parity(self):
        rng = np.random.default_rng(4)
        q = rng.normal(size=(2, 4, 5, 3))
        k, v = [rng.normal(size=(2, 2, 5, 3)) for _ in range(2)]
        full, _ = r.grouped_cached_attention(q, k, v)
        cache, outputs = None, []
        for t in range(5):
            out, cache = r.grouped_cached_attention(q[:, :, t:t+1], k[:, :, t:t+1], v[:, :, t:t+1], cache)
            outputs.append(out)
        np.testing.assert_allclose(np.concatenate(outputs, axis=2), full, atol=1e-12)
        self.assertEqual(cache[0].shape, (2, 2, 5, 3))

    def test_transformer_causality(self):
        rng = np.random.default_rng(1)
        x = rng.normal(size=(1, 4, 4))
        weights = [rng.normal(size=(4, 4)) for _ in range(6)]
        y = r.decoder_layer(x, *weights, heads=2)
        changed = x.copy()
        changed[:, -1] += 100
        z = r.decoder_layer(changed, *weights, heads=2)
        np.testing.assert_allclose(y[:, :-1], z[:, :-1], atol=1e-12)
        self.assertTrue(np.isfinite(y).all())

    def test_lora_merge(self):
        rng = np.random.default_rng(1)
        x, w, a, b = [rng.normal(size=s) for s in [(3, 4), (4, 5), (4, 2), (2, 5)]]
        np.testing.assert_allclose(r.lora_forward(x, w, a, b, 4), x @ (w + 2 * a @ b))
        np.testing.assert_allclose(r.lora_forward(x, w, a, b * 0, 4), x @ w)

    def test_sampling_and_termination(self):
        p = r.sampling_probs(np.log([0.6, 0.3, 0.1]), top_p=0.7)
        np.testing.assert_allclose(p, [2/3, 1/3, 0])
        np.testing.assert_allclose(r.sampling_probs([1000, 999], top_k=1), [1, 0])
        self.assertEqual(r.generate(lambda _: [1, 9], [0], eos=1, top_k=1), [0, 1])
        self.assertEqual(r.generate(lambda _: [1, 9], [0], eos=1, max_context=1), [0])
        self.assertEqual(r.beam_search(lambda _: [0, 10], [0], eos=1), [0, 1])
        with self.assertRaises(ValueError):
            r.sampling_probs([0], top_p=0)

    def test_logistic_gradient(self):
        rng = np.random.default_rng(4)
        x, y, w, b = rng.normal(size=(7, 3)), np.array([0, 1, 1, 0, 1, 0, 1]), rng.normal(size=3), 0.2
        _, dw, db = r.logistic_loss_gradient(x, y, w, b, 0.3)
        eps = 1e-6
        for j in range(3):
            delta = np.eye(3)[j] * eps
            finite = (r.logistic_loss_gradient(x, y, w + delta, b, 0.3)[0] - r.logistic_loss_gradient(x, y, w - delta, b, 0.3)[0]) / (2 * eps)
            self.assertAlmostEqual(dw[j], finite, places=7)
        finite = (r.logistic_loss_gradient(x, y, w, b + eps)[0] - r.logistic_loss_gradient(x, y, w, b - eps)[0]) / (2 * eps)
        self.assertAlmostEqual(db, finite, places=7)
        np.testing.assert_allclose(r.sigmoid(np.array([-1000, 0, 1000])), [0, 0.5, 1])

    def test_logistic_learning(self):
        x = np.array([[-2], [-1], [1], [2]], float)
        y = np.array([0, 0, 1, 1])
        w, b = r.fit_logistic(x, y, x, y, epochs=200, batch_size=2)
        np.testing.assert_array_equal((r.sigmoid(x @ w + b) >= 0.5).astype(int), y)
        with self.assertRaises(ValueError):
            r.fit_logistic(x, y[:, None], x, y)

    def test_stratification(self):
        labels = np.array([0] * 11 + [1] * 8 + [2] * 5)
        folds = list(r.stratified_folds(labels, 4))
        self.assertEqual(sorted(np.concatenate([v for _, v in folds]).tolist()), list(range(len(labels))))
        for train, val in folds:
            self.assertFalse(set(train) & set(val))
            self.assertEqual(len(train) + len(val), len(labels))
        for label in np.unique(labels):
            counts = [sum(labels[v] == label) for _, v in folds]
            self.assertLessEqual(max(counts) - min(counts), 1)
        with self.assertRaises(ValueError):
            list(r.stratified_folds([0, 0, 1], 2))

    def test_recurrent_forward(self):
        h = np.zeros((1, 2))
        sequence = np.zeros((3, 1, 1))
        np.testing.assert_array_equal(r.rnn_forward(sequence, h, np.zeros((1, 2)), np.zeros((2, 2)), np.zeros(2)), np.zeros((3, 1, 2)))
        out, (_, cell) = r.lstm_forward(sequence, h, np.ones((1, 2)), np.zeros((3, 8)), np.zeros(8))
        np.testing.assert_allclose(cell, [[0.125, 0.125]])
        np.testing.assert_allclose(out[-1], 0.5 * np.tanh(cell))
        self.assertEqual(r.rnn_forward([], h, None, None, None).shape, (0, 1, 2))

    def test_training_records(self):
        rows = [{'prompt': ' q ', 'completion': 'a'}, {'prompt': 'q', 'completion': 'a'}]
        encoded = r.training_jsonl(rows)
        self.assertEqual(len(encoded.splitlines()), 1)
        self.assertEqual(json.loads(encoded)['messages'][0]['content'], 'q')
        with self.assertRaises(ValueError):
            r.training_jsonl([{'prompt': '', 'completion': 'a'}])

    def test_crawler(self):
        graph = {'https://example.test/': ['/a', '/a#duplicate', 'https://other.test/'], 'https://example.test/a': ['/']}
        self.assertEqual(r.crawl_frontier('https://example.test', graph.__getitem__), list(graph))
        self.assertEqual(r.crawl_frontier('https://example.test', graph.__getitem__, max_pages=1), ['https://example.test/'])

    def test_rle(self):
        for text in ['', 'a', 'a' * 100, 'abababa', '11122雪雪']:
            self.assertEqual(r.rle_decode(r.rle_encode(text)), text)
        with self.assertRaises(ValueError):
            r.rle_decode([('a', 0)])


if __name__ == '__main__':
    unittest.main(verbosity=2)
