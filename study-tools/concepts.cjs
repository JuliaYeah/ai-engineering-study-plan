// Focused notes use original wording; these are curated themes, not a statistical frequency ranking.
module.exports = `
Tokenization|1|Text is converted into token IDs; tokens need not correspond to words. I measure actual token counts for the selected model because cost and context limits operate on tokens.
Next-Token Prediction|1|An autoregressive language model predicts a distribution for the next token conditioned on preceding tokens. Fluent continuation does not establish factual truth or authorize a tool action.
Context Windows|1|The context budget includes relevant input and generated output under the provider contract. I prioritize evidence and preserve provenance rather than assuming a longer window guarantees better reasoning.
Temperature|1|Temperature rescales logits before sampling. Lower values usually concentrate probability, but zero temperature does not guarantee identical results across serving changes or numerical execution.
Top-p|1|Nucleus sampling retains a probability-mass prefix of candidate tokens. I usually tune one sampling control at a time and evaluate task consistency rather than assuming one setting is universally best.
Transformer and Attention Fundamentals|1|Attention mixes token representations using compatibility scores between queries and keys and weighted values. Causal masking prevents an autoregressive token from attending to future tokens during prediction.
LLM Limitations|1|A model can produce plausible unsupported details, mishandle numbers and follow malicious context. I ground claims, delegate arithmetic to deterministic tools and test failure cases rather than trusting fluency.
Model Selection|17|I compare candidates on the actual task, latency, cost, context needs and data constraints. A benchmark ranking is a starting point, not proof of performance on financial questions.
Prompt Engineering|2|I specify the task, inputs, output schema and constraints, then test the prompt on representative and adversarial cases. A clearer prompt cannot replace missing data or server-side validation.
Few-Shot Examples|2|Examples demonstrate the intended mapping and edge cases. I include representative ambiguity and refusal behavior, avoid leaking test answers and version examples with the prompt.
Prompt Versioning|2|I record prompt text, examples, model configuration and tool schema as a versioned configuration. A changed prompt is a behavior change that requires regression evaluation.
Structured Outputs|3|A schema constrains the output shape, but valid JSON can still contain false or invalid business values. I validate enums, bounds and cross-field rules before using the result.
Pydantic|3|Typed validation converts boundary data into a checked contract. I decide explicitly whether coercion is acceptable and add domain validators for units, dates and mutually dependent fields.
JSON Recovery|3|On malformed output I prefer a bounded retry or explicit error over silently guessing missing financial fields. Recovering syntax does not justify changing business meaning.
Prompting vs. RAG vs. Fine-Tuning|4|I use prompting for instruction and format, retrieval for external changing evidence, and fine-tuning for repeatable behavior when justified by data and evaluation. They can complement one another.
LoRA|4|Low-rank adaptation learns a small parameter update while keeping base weights largely fixed. It reduces trainable parameter cost but does not eliminate dataset quality, validation or deployment concerns.
Quantization|4|Lower-precision weights can reduce memory and sometimes inference cost. Hardware kernels, workload and quality degradation determine whether the change helps in practice.
Embeddings|5|Embeddings map inputs to vectors optimized for a training objective. Semantic proximity is model-dependent; a high similarity score is not a probability that an answer is correct.
Vector Similarity|5|Cosine similarity compares vector direction and requires a defined zero-vector policy. I check dimensions, model versions and normalization before interpreting retrieval scores.
Chunking|6|Chunk boundaries determine what evidence can be retrieved together. I vary size and overlap on a labeled set, measuring recall, redundancy, answer quality and token cost instead of selecting by intuition alone.
Metadata|6|Document ID, version, section, date and access scope let retrieval preserve provenance and apply filters. Incorrect metadata can cause stale answers or unauthorized exposure even with a good embedding model.
Context Budgets|6|I allocate room for instructions, evidence, tool results and output. Section expansion may restore missing context but displaces other evidence and increases input cost.
Keyword / Vector / Hybrid Search|7|Keyword search helps exact identifiers while vectors help semantic paraphrases. Hybrid search combines candidate signals, often with rank fusion, then evaluates the combined ranking on real queries.
MMR|8|Maximal marginal relevance balances query relevance with novelty relative to selected results. It can reduce near-duplicate chunks but does not guarantee source diversity or better answer quality.
Reranking|8|A reranker scores query-candidate pairs after initial retrieval. It improves ordering within the candidate pool but cannot recover a relevant document absent from that pool.
Query Reformulation|8|Rewriting a query can improve recall, but it can also change intent. I retain the original request, compare retrieval outcomes and test numeric identifiers and financial terminology.
Citations|11|A citation should point to a source span that supports the associated claim. A valid document link alone is not evidence that the generated statement follows from it.
Golden Datasets|4|A curated set contains representative questions, evidence labels or reference outcomes, and failure cases. I track annotation uncertainty and separate development from held-out evaluation.
Hard Negatives|4|Hard negatives resemble relevant evidence but fail the actual query requirement, such as the wrong company or fiscal year. They expose overly broad semantic matching.
Held-Out Evaluation|8|I freeze choices before scoring the held-out set and report its size and limitations. Repeated tuning against it destroys its independent role.
Recall@k|5|Recall at k is relevant items retrieved in the first k divided by all labeled relevant items for that query. It measures evidence coverage, not answer correctness; incomplete relevance labels limit interpretation.
Precision@k|5|Precision at k is relevant retrieved items divided by k when k results are returned. High precision can coexist with low recall, and both depend on the relevance labeling unit.
MRR|5|Mean reciprocal rank averages the inverse rank of the first relevant item across queries, using zero when none is found. It emphasizes finding one useful hit early rather than retrieving all evidence.
nDCG|5|Normalized discounted cumulative gain rewards relevant results near the top and supports graded relevance. The relevance grades and ideal ranking definition must be fixed before comparison.
Redundancy|8|Repeated chunks consume context without necessarily adding evidence. I measure duplicate or same-section coverage separately from relevance and inspect whether repetition is actually necessary for a multi-part answer.
Groundedness|11|A grounded claim is supported by supplied evidence. Groundedness differs from factual truth: outdated evidence can faithfully support an outdated answer.
Hallucination|11|I treat unsupported generated claims as an observable failure category. Retrieval reduces some errors but does not guarantee the model uses or faithfully interprets the retrieved evidence.
LLM-as-Judge|11|A model judge can scale rubric-based review, but its errors require human calibration. I randomize ordering where useful, version the rubric and test disagreement cases.
Human Calibration|11|I compare automated judgments with a small independently reviewed sample and discuss disagreements. Agreement on easy cases does not establish reliability on high-impact financial errors.
Judge Bias|11|Judges may favor verbosity, familiar model style or the first answer. I use explicit criteria, blinded comparisons and spot checks, keeping deterministic numeric checks separate.
Offline / Regression Evals|15|Offline evaluation uses a fixed dataset; regression evaluation compares a change against prior behavior. I track quality, severe failures, latency and cost with dataset and configuration versions.
Online Feedback|34|User signals can reveal real failures but are selective and noisy. I separate ratings from verified correctness and respect privacy before adding examples to an evaluation set.
Agents vs. Workflows|9|A workflow follows explicit control flow; an agent delegates some next-step choice to a model. I prefer a bounded workflow when the sequence and safety constraints are known.
Function Calling|9|The model proposes a function name and arguments; application code validates and executes it. The proposal is not execution and cannot itself grant permission.
Tool Schemas|9|A schema describes legal arguments and outputs, including units and bounds. I enforce the contract on the server because model compliance alone is insufficient.
Tool Selection Evaluation|37|I score whether the right tool was selected with valid arguments and whether an unnecessary call was avoided. End-to-end answer quality alone can hide unsafe intermediate actions.
Agent State|10|State records the workflow position and required artifacts. Persisted state must be versioned and resume-safe, especially when a tool may already have executed before a crash.
Memory|27|Conversation memory is a convenience context, not an authoritative database. I scope it by user, retain provenance and avoid letting remembered text override permissions.
LangGraph|10|A state graph makes transitions, checkpoints and interruptions explicit. Side effects around resumed nodes still need idempotency and careful placement.
Termination Conditions|9|I bound iterations, time, spend and retries and define success, failure and waiting-for-approval states. A model saying it is finished is not enough without validated outputs.
MCP Fundamentals|28|MCP standardizes interaction with exposed tools and resources. It does not automatically make a server trustworthy or replace authentication, authorization and argument validation.
REST APIs|12|I design resources, methods, status codes and error contracts around client needs. Long-running work returns a durable run identifier rather than holding an HTTP request indefinitely.
FastAPI|12|A typed API boundary can validate requests and expose a contract. I keep deterministic business logic outside route handlers so it can be tested without an HTTP server.
API Tests|12|I test validation errors, ownership, duplicate submission and downstream failure alongside the happy path. Mock tests do not prove real provider or database integration works.
Workers|34|A worker claims a task, executes bounded work and commits a result before acknowledgment. A crash can cause redelivery, so effects must be idempotent and abandoned leases recoverable.
Idempotency|11|Repeating the same logical request must not create a second logical effect. I bind a key to request content and persist the outcome; delivery can still occur more than once.
Timeouts|9|A timeout bounds waiting but does not prove remote work stopped. I propagate a total deadline and treat ambiguous writes with idempotency and status lookup.
Backoff|9|Exponential backoff reduces immediate retry pressure; jitter spreads synchronized clients. I cap attempts and total time and avoid retrying permanent validation failures.
Rate Limiting|9|Rate limits constrain admission over time; concurrency limits constrain in-flight work. Both can be necessary because slower service increases concurrency at the same arrival rate.
Backpressure|34|A saturated downstream component signals upstream producers to slow or reject work. A bounded queue and explicit overload response prevent indefinite memory growth.
Docker|16|A container packages application dependencies and process configuration. It does not persist local state across replacement unless storage is explicitly managed.
CI/CD|15|CI verifies candidate changes; CD controls promotion to an environment. I keep deterministic offline tests fast and run costly provider checks as explicit release steps.
Cloud Fundamentals|17|Compute, storage, networking and identity are separate responsibilities. I start with one deployable service and document persistence and availability limitations before scaling.
IAM|17|I grant identities the smallest required actions on specific resources. Application authorization and cloud IAM solve different layers and both need testing.
Networking|17|The service needs explicit ingress, egress and dependency connectivity. Private networking does not replace identity checks; blocked egress can also break model-provider calls.
Capacity Planning|9|I estimate arrival rate, service time, concurrency and retained storage with units. Estimates guide initial sizing; load tests reveal actual bottlenecks and saturation.
Load Testing|13|I use representative requests and concurrency, track errors with latency, and separate cold-start from warm behavior. Thirty requests support a small experiment, not a strong tail-latency guarantee.
Logs|13|Logs record discrete events with request IDs and structured fields. I avoid secrets and raw sensitive prompts and preserve actionable error causes.
Traces|13|A trace connects spans across a request path to identify waiting and computation. I propagate IDs through queues and avoid treating concurrent span times as additive wall time.
p50 / p95|13|p50 is the sample median and p95 is a high quantile, not the worst case. I report sample count, window and load; averaging service percentiles does not yield the end-to-end percentile.
TTFT|13|Time to first token measures initial streaming responsiveness. I also measure total completion time and distinguish provider latency from queue and retrieval delay.
Streaming|35|Streaming sends partial output sooner but complicates cancellation, errors and validation. Consequential tool execution should not be triggered by unvalidated partial output.
Token Usage|35|I record input, output and any billed cached/reasoning categories supported by the provider. Cost estimates include retries and background calls, not only the final successful response.
Caching|5|A cache needs a key, freshness rule and eviction policy. Include data/model versions and access scope where they affect validity; a hit must not bypass authorization.
Semantic Caching|35|Semantic proximity is only a candidate for answer reuse. I evaluate equivalence, freshness and permission scope before serving a cached financial answer.
Freshness|5|Freshness is a business requirement about acceptable age and revision policy. TTL is one implementation mechanism, not a complete definition of correctness.
Model Routing|35|A router selects a model based on task class and constraints. I compare end-to-end quality, retries and total cost, including routing mistakes and fallback behavior.
Cost-Quality Trade-offs|35|I compare candidates on a Pareto view of quality, latency and cost with hard correctness constraints. A cheaper request is not cheaper overall if it causes expensive retries or manual repair.
Human-in-the-Loop|10|A human decision is a real authenticated workflow event, not model-generated text. I show the exact action and relevant evidence before approval.
Approval Audit Trail|10|I record approver, timestamp, action payload, version and decision. A changed payload requires fresh approval; replay must not repeat an already completed effect.
Prompt Injection|37|Untrusted text can attempt to redirect the model. I enforce permissions and tool policies outside the model and test malicious retrieved content, not just malicious user prompts.
Tool Sandboxing|37|Execution is restricted by capability, resource limits and filesystem/network policy. A prompt telling the model to be safe is not a sandbox.
PII|37|I minimize collection, restrict access and redact sensitive fields from logs and evaluation fixtures. Classification and retention rules must match the actual data and organizational policy.
Access Control|21|The authenticated identity determines allowed objects and actions. I enforce it before retrieval and tool execution, not by asking the model to decide who may see data.
Tenant Isolation|37|Tenant scope belongs in database, retrieval, cache and artifact access. I test cross-tenant IDs and cache collisions because one correct API check does not protect every layer.
Secrets|17|Credentials come from an approved secret store or runtime injection and are excluded from source, prompts and logs. Short-lived credentials reduce exposure but still require least privilege.
Fail-Open vs. Fail-Closed|9|For risk calculations and authorization I stop the affected operation when validation is unavailable. A separate safe read-only fallback may preserve usefulness without inventing a successful result.
Graceful Degradation|35|I return a clearly limited result or baseline when a dependency fails, if the contract permits it. The user must be able to distinguish degraded behavior from a full answer.
Snowflake|21|Snowflake separates storage and compute and supports analytical SQL. I learn table grain and Query Profile before adding an LLM; the model proposes queries while the database computes results.
Text-to-SQL Evaluation|28|I compare execution results, clarification and rejection behavior against curated references. Valid syntax and matching SQL strings are insufficient measures of business correctness.
SEC Financial Data|22|Financial facts include units, periods, forms and filing accessions. I retain provenance and define revision selection before comparing companies or calculating growth.
Data Quality|23|I check uniqueness, required fields, units, periods and reference totals before model evaluation. Missing data remains explicit unless an approved imputation rule applies.
Point-in-Time Data|24|A historical decision can use only information available at that time. A fiscal period end is not the filing availability date, and later restatements can leak future knowledge.
Experiment Tracking|31|I save configuration, seed, data/code/model versions, metrics and artifacts for each logical run. Reproducibility requires the environment and data snapshot as well as the seed.
Failure Recovery|35|I inject a crash before and after result commit and observe lease expiry, redelivery and idempotent publication. Restarting successfully once does not establish correctness under every failure point.
Latency Benchmarking|13|I freeze workload and environment, record distributions and sample counts, and compare one change at a time. Quality regressions and failure rates belong beside speed measurements.
AWS ECS Fargate|17|Fargate runs container tasks without managing host instances. I still configure identity, network, health checks, logging, resources and persistent dependencies.
ECR|17|ECR stores versioned container images. I deploy an immutable digest and retain the previous known-good digest for reproducible rollback.
CloudWatch|17|CloudWatch collects operational logs and metrics. I choose actionable alarms and retention, and correlate deployment version with failures and latency changes.
GitHub Actions|15|A workflow runs checks and controlled release steps. I pin dependencies as appropriate, restrict credentials and keep paid live integrations separate from deterministic PR checks.
OIDC|19|Federated identity lets a workflow obtain short-lived cloud credentials. The trust policy must restrict repository, branch or environment claims rather than trusting every workflow.
Clean-Environment Reproduction|20|I verify setup from documented dependencies and fixtures, with no hidden local files or credentials. Offline success and live cloud/provider verification are reported separately.
README|20|A useful README states the user problem, setup, commands, architecture, evidence and limitations. Every completion claim should point to runnable code or recorded results.
Demo|20|A demo shows a normal request and a meaningful failure or ambiguity case. I keep a reproducible offline path and label live dependencies and any simulated data.
Ownership|39|I explain what I personally decided, reviewed and validated, including AI assistance. I do not claim manually writing code that AI generated or claim production impact from a learning project.
AI-Assisted Code Review|20|I ask AI for a bounded diff against explicit contracts, then inspect failure paths and run independent checks. I should be able to explain a critical function and modify it under questioning.
Design Trade-offs|39|I state the requirement, alternatives, selected option, downside and evidence that would change the decision. I use actual observations rather than invented project outcomes.
Risk Copilot|1|The project joins retrieval, scenarios, approval and deterministic risk calculations. My improvement sequence prioritizes numerical correctness, retrieval evaluation, failure handling and verifiable delivery.
Financial Statement Analytics Assistant|21|The project combines SEC facts, curated Snowflake tables, reference SQL and a restricted natural-language interface. Its value is accessible auditable analytics, not having the LLM redo database arithmetic.
Investment Research Workbench|31|The project offers restricted research tools, versioned experiments, asynchronous execution and volatility forecasts. It demonstrates research engineering without claiming profitable alpha or live trading readiness.
SQL|2|SQL expresses operations over relations. I identify row grain, joins, null semantics and aggregation before optimizing or asking a model to generate a query.
Queues and Workers|34|A queue decouples admission from execution; workers need bounded retries, durable status and idempotent effects. At-least-once delivery is compatible with a single logical published result.
Retries|9|I retry only classified transient failures within a total budget, with jitter and idempotency for ambiguous effects. Permanent invalid requests should fail immediately with useful context.
Rollback|19|A rollback restores a compatible known-good application/model configuration. Data migrations and side effects may not reverse with an image change, so I define the boundary explicitly.
Prediction Intervals|33|A prediction interval describes uncertainty for a future observation under assumptions; it is not the same as uncertainty in the mean. I evaluate empirical coverage and width over time and under regime change.
Reproducibility|36|I retain data snapshots, feature definitions, environment versions, seed and code reference. A seed alone does not make a distributed or external-API workflow reproducible.
Model Versioning|36|A model version includes preprocessing, feature schema and compatible runtime, not just coefficients. Predictions retain the exact version so results can be traced and rolled back.
`.trim().split('\n').map(line=>{const [name,day,note]=line.split('|');return {name,day:+day,note};});
