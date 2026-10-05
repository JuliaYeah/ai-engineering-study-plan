const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'answers');
const catalog = require('./interview-questions.json');
const answers = new Map();
const idOf = n => 'Q' + String(n).padStart(3, '0');
const lines = file => fs.readFileSync(path.join(root, file), 'utf8').trim().split(/\r?\n/).filter(Boolean);
const details = new Map(lines('foundation-details.txt').map(line => {
  const [n, explanation, question, answer, ...extra] = line.split('|');
  if (extra.length || !answer) throw Error('Invalid foundation detail: ' + n);
  return [idOf(n), {explanation, followups: [{question, answer}]}];
}));
for (const file of fs.readdirSync(root).filter(f => /^\d\d-.*\.txt$/.test(f)).sort()) {
  for (const line of lines(file)) {
    const [n, answer, explanation, question, followup, ...extra] = line.split('|');
    const id = idOf(n);
    if (extra.length || answers.has(id) || !answer) throw Error('Invalid/duplicate answer: ' + id);
    const detail = explanation ? {explanation, followups: [{question, answer: followup}]} : details.get(id);
    if (!detail) throw Error('Missing explanation: ' + id);
    answers.set(id, {id, answer, ...detail, sources: []});
  }
}
// Explicit editorial reuse for equivalent questions, never a fallback generator.
for (const [target, source] of Object.entries(require('./answers/reuse.json'))) {
  const id = idOf(target), original = answers.get(idOf(source));
  if (!original || answers.has(id)) throw Error('Invalid reuse: ' + id);
  answers.set(id, {...structuredClone(original), id, sharedCore: idOf(source)});
}
const refinements = {
  Q473: 'Before chunking, run asynchronous bounded parsing/OCR with page-level provenance, content hashes and resumable checkpoints. Quarantine failed pages rather than silently presenting an incomplete report as complete.',
  Q499: 'For a recent-project walkthrough, choose one project and order the answer as problem, your contribution, design, a failure and verified outcome; the exact recency and result must be supplied.',
  Q517: 'The larger source question supplies 750M profiles and a 500ms target; for this shorter question those are optional practice assumptions to clarify, not given requirements.',
  Q519: 'Flow: versioned artifact registry → rollout controller → admission/routing → GPU replicas → response. Cache keys include model, prompt/configuration and authorized context; use queue/token pressure and KV capacity for scaling, with load-time headroom and rollback to a compatible version.',
  Q524: 'Posting writes metadata and an outbox atomically, then fan-out workers deliver idempotently. Follow/unfollow updates an adjacency store; read-time privacy and block checks prevent stale feeds leaking content. Reconcile dropped fan-out tasks and use stable cursor pagination; evaluate freshness and p95 feed latency under celebrity bursts.',
  Q548: 'Report the seven supplied cases separately across answerable, partially answerable and unanswerable categories. Out-of-scope requests must take a safe fallback path; every supported partial answer still needs citations.',
  Q553: 'Remove global mutable clients and request state through explicit lifetimes and dependency injection. Freeze exact route, status-code and response-shape contracts; use fake retrieval/model adapters so tests require no running services.',
  Q563: 'Include explicit refusal tests for emails, phone numbers and credit-card tokens, including attempts to encode or infer them. Only approved aggregates, never raw subscription rows, enter model context.',
  Q566: 'Define five bounded roles, for example exercise proposer, evidence reviewer, safety critic, editor and final reviewer. Finalization requires durable human approval of the exact final artifact; an agent vote does not substitute for that gate.',
  Q579: 'Persist memories as validated JSON and test calm-mentor, witty-friend and therapist-style outputs on the same underlying facts. Persona changes cannot change permissions, stored truth or the educational scope.',
  Q294: 'The reference uses None for absence and reserves None for tombstones; for the common string-valued interface, translate absence to the specified empty string at the API boundary.',
  Q309: 'The reference demonstrates current-time TTL and prefix scans. Persistence/compression is not implemented in that snippet because its exact contract is missing; reuse versioned framing only after specifying absolute versus relative expiry on restore.',
  Q321: 'The educational reference repeats grouped KV heads for clarity; a production kernel should avoid physically duplicating that cache. It receives already projected and position-encoded tensors.',
  Q492: 'For this question, lead with single-head self-attention: queries, keys and values come from the same sequence. Multi-head attention is an extension, not a prerequisite for the definition.',
  Q498: 'Current status matters: describe the prototype and your verified contributions, not a completed production deployment.',
  Q558: 'The standalone question gives no delivery deadline; any time-box in the shared example is a proposed scoping choice, not an additional requirement.',
  Q568: 'The particular OCR/model choice is illustrative; benchmark handwriting and complex-table cases before selecting it.',
  Q582: 'The 100+ req/s, p95 below 2 seconds and cache hit rate above 40% are acceptance targets to test on a stated workload, not measured achievements or guarantees.'
};
for (const [id, text] of Object.entries(refinements)) answers.get(id).explanation += ' ' + text;
answers.get('Q582').answer = 'I would route requests through admission control, exact-cache lookup, a carefully scoped semantic cache and bounded provider workers. Provider health checks and circuit breakers would select a tested fallback, while distributed traces separate queueing, cache, prefill and generation time. I would load-test the stated 100+ requests per second, p95 below two seconds and cache hit rate above 40% with representative token lengths, misses and failure scenarios.';
answers.get('Q582').explanation = 'These are acceptance targets, not achieved results. A cache-heavy workload can hide slow misses, so report hit and miss latency separately. Keep tenant, source and model versions in cache eligibility, and reject fallback providers that fail the same quality and data-handling requirements.';
const code = fs.readFileSync(path.join(root, 'reference.py'), 'utf8');
for (const block of code.matchAll(/^# BEGIN (Q\d{3}(?: Q\d{3})*)\r?\n([\s\S]*?)^# END/gm)) {
  for (const id of block[1].split(' ')) {
    if (!answers.has(id)) throw Error('Code for unknown ID: ' + id);
    answers.get(id).code = block[2].trim();
  }
}
const sourceGroups = [
  [[105,315], 'LoRA original paper', 'https://arxiv.org/abs/2106.09685'],
  [[106], 'QLoRA original paper', 'https://arxiv.org/abs/2305.14314'],
  [[159,160], 'Python free-threading documentation', 'https://docs.python.org/3/howto/free-threading-python.html'],
  [[161,172,316], 'Python asyncio tasks and cancellation', 'https://docs.python.org/3/library/asyncio-task.html'],
  [[198], 'PagedAttention original paper', 'https://arxiv.org/abs/2309.06180'],
  [[204], 'Constitutional AI original paper', 'https://arxiv.org/abs/2212.08073'],
  [[23], 'Grouped-query attention paper', 'https://arxiv.org/abs/2305.13245'],
  [[29,111], 'Direct Preference Optimization paper', 'https://arxiv.org/abs/2305.18290'],
  [[33], 'FlashAttention paper', 'https://arxiv.org/abs/2205.14135'],
  [[113], 'Speculative decoding paper', 'https://arxiv.org/abs/2211.17192'],
  [[138], 'scikit-learn probability calibration', 'https://scikit-learn.org/stable/modules/calibration.html'],
  [[140,325], 'scikit-learn cross-validation guidance', 'https://scikit-learn.org/stable/modules/cross_validation.html'],
  [[86], 'AWS: making retries safe with idempotent APIs', 'https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/'],
  [[289,497], 'Python OrderedDict documentation', 'https://docs.python.org/3/library/collections.html#collections.OrderedDict'],
  [[615], 'Jaseci Labs original challenge', 'https://github.com/jaseci-labs/take-home-ai-engineer'],
  [[616], 'Jitera original challenge', 'https://github.com/Jitera-Interviews/genai-takehome'],
  [[617], 'AuxoAI original challenge', 'https://github.com/AuxoAI-Hiring/ai-engineer-assignment'],
  [[618], 'Coginis original challenge', 'https://github.com/CoginisResearch/ai-engineer-challenge'],
  [[619], 'Future Research linked assessment', 'https://github.com/future-research/candidate-assessment'],
  [[620], 'Go Fig original challenge', 'https://github.com/go-fig-ai/take-home-inbox-triage'],
  [[621], 'Cerebras original challenge', 'https://github.com/danielkim-cerebras/ai-model-quality-challenge'],
  [[622], 'AI:AT original challenge', 'https://github.com/AIAT-AIandBusinessgrowth/standort-agent-challenge-public'],
  [[623], 'Bloom original challenge', 'https://github.com/radialreview/bloom-coffee-ai']
];
for (const [ids, title, url] of sourceGroups) for (const n of ids) answers.get(idOf(n)).sources.push({title, url});
for (const q of catalog) {
  const a = answers.get(q.id);
  if (!a || !a.answer || !a.explanation || a.followups.some(f => !f.question || !f.answer)) throw Error('Incomplete: ' + q.id);
  a.question = q.question;
}
if (answers.size !== 623 || new Set(catalog.map(q => q.id)).size !== 623) throw Error('Coverage must be exactly 623');
const escape = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function markdown(id) {
  const a = answers.get(id);
  return `<!-- interview-answer ${id} -->\n<details>\n<summary>展开答案 · ${id}</summary>\n\nInterview Answer\n\n${a.answer}\n\n<details>\n<summary>展开详解与追问</summary>\n\nExplanation\n\n${a.explanation}\n\nFollow-up\n\n${a.followups.map(f => `- ${f.question}\n  ${f.answer}`).join('\n\n')}\n\n${a.code ? 'Reference Code\n\n```python\n' + a.code + '\n```\n\n' : ''}${a.sources.length ? 'Technical Sources\n\n' + a.sources.map(s => `- [${s.title}](${s.url})`).join('\n') + '\n\n' : ''}</details>\n</details>\n<!-- /interview-answer -->`;
}
function html(id) {
  const a = answers.get(id);
  return `<details class="interview-answer" id="answer-${id}" data-question="${id}"><summary>展开答案 · ${id}</summary><article lang="en"><h4>Interview Answer</h4><p class="spoken-answer">${escape(a.answer)}</p><details class="answer-depth"><summary lang="zh-CN">展开详解与追问</summary><h4>Explanation</h4><p class="explanation">${escape(a.explanation)}</p><h4>Follow-up</h4>${a.followups.map(f => `<p class="follow-question">${escape(f.question)}</p><p class="follow-answer">${escape(f.answer)}</p>`).join('')}${a.code ? '<h4>Reference Code</h4><pre><code class="language-python">' + escape(a.code) + '</code></pre>' : ''}${a.sources.length ? '<h4>Technical Sources</h4><ul>' + a.sources.map(s => `<li><a href="${escape(s.url)}">${escape(s.title)}</a></li>`).join('') + '</ul>' : ''}</details></article></details>`;
}
function augment(md) {
  const seen = new Set();
  const result = md.replace(/^(- (Q\d{3})[^\r\n]+)$/gm, (_, line, id) => {
    if (seen.has(id)) throw Error('Duplicate scheduled question: ' + id);
    seen.add(id);
    return line + '\n\n' + markdown(id) + '\n';
  });
  if (seen.size !== 623) throw Error('Schedule coverage: ' + seen.size);
  return result;
}
module.exports = {answers, augment, html};
