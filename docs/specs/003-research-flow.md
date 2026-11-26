# Spec — Official research flow (research as a product)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-24 · **Scope:** suite-wide

A deliberate way to turn a research question into a **product** — a committable report that stands on its
own — distinct from the terse `research.md` log. A *research-drop* kicks it off; the report is the
deliverable, and it needn't end in a new spec.

## Why
We research constantly, and most of it is quick — a call, logged tersely in
[`research.md`](../research.md) (the evidence trail, so a decision you can trace doesn't nag later).
But some research is substantial enough to be a **product**: a report that stands on its own — deeper,
structured, cited — that you, a future reader, or anyone can read and trust. The terse log isn't that;
it's the *trace*, not the *deliverable*.

**The deeper reason: decisions should be backed.** AI makes decisions *cheap* — easy to snap-decide on a
whim — so we deliberately make them more *expensive*: a real decision earns a grounding. And AI makes
research *fast*, so we can afford to — the cost of backing a decision has collapsed, so we raise the bar.
Cheap research is the **bargain**: a little spent grounding a spec saves the big cost of building the wrong
thing (tokens aren't free) — so research stays **frugal** (one good pass, not a fan-out), and the saving
lands in dev. Research-as-product is how a decision earns its evidence.

So we want a deliberate flow for research-as-product: a **research-drop** starts it, the output is a
committable report, and — crucially — it **needn't end in a new spec**. Research can be the deliverable.
This makes our research a first-class body of work, not just a means to a spec.

**Why it pays, beyond the report:** a backed decision is **less arguable** — evidence settles it, so it
isn't re-litigated. Logged, research **compounds** — future features inherit from the same source, building
momentum; the software starts to teach us. And it's **immediately actionable**. Most of all, research is
where our **human strength** earns its keep: we *fact-check the AI before the spec* — the human verifies the
fast machine research, so the spec that follows is grounded, not guessed.

## What it does
A **research-drop** names a question and its stakes. The flow then:

- **Sets a budget up front** — time/effort capped by stakes (error-cost × reversibility).
- **Runs one frugal pass** — a single good agent, not a fan-out; graded by strength, triangulated, seeking
  disconfirmation.
- **Escalates only on a trigger** — a second *bounded* pass when the added evidence could change the
  decision: high stakes (more evidence could flip an irreversible call), sources conflict unexplained, or a
  load-bearing claim has no independent corroborator. Not when the pass already *saturated* (new searching
  stopped yielding new) or both answers lead to the same reversible action. Each escalation is a fresh
  budget on one named sub-question — never "keep going".
- **Surfaces a verify-queue** — the AI flags its load-bearing and low-confidence claims; the human checks
  *those* against the primary source (not everything).
- **Produces a report** — a committable, ND-readable product in `docs/research/`, cited, that stands on its
  own. It **needn't end in a new spec**.
- **Logs as an index** — a terse entry in [`research.md`](../research.md), cross-linked to the report and
  to related prior research, so it compounds.

## Not this (non-goals)
- Not the terse log — that's the trace; this is the deliverable.
- Not a deep-research fan-out — frugal, one pass (calm tooling, tokens aren't free).
- Doesn't force a spec — research can be the end product.
- Not exhaustive — bounded by design; "did I research enough?" is answered by the budget, not by feeling.

## Research
- [*Research principles*](../research/research-principles.md) (2026-06-24) — the principles this flow
  should encode (verify the AI's claims, record the why, triangulate, budget up front, log-as-index).
- [*Tuning agents*](../research/tuning-agents.md) (2026-06-24) — the first research-as-product; the tracer
  this spec's shape inherits.
- [`research-method.md`](../research-method.md) — the bar (reqs-first, grade-by-strength, adversarial verify).

## How — the methodology (ND-safe & calm)

The method must also be **light enough on the person to be sustainable** — research mustn't become the
hyperfocus hole or the anxiety it's meant to prevent. Seven practices, each backed (see
[research.md](../research.md), 2026-06-24):

1. **One step in view; all state externalised.** Never hold the research in your head — current step, notes,
   and progress live in the environment, one focus at a time.
2. **The budget is also a hyperfocus tripwire.** Set before you start, as an if-then — a pre-set cap beats
   in-flow judgement for a brain that loses time when absorbed. Escalation chains bounded passes; it never
   removes the bound (satisficing, not "keep going").
3. **Stop is a planned landing, with a breadcrumb.** Warn before the cap; never yank. Always leave a
   "where I was / next step" so resuming is cheap.
4. **The bound is the anxiety relief.** Cap the research, shortlist few options, keep the decision traceable
   — closure plus a record is what stops the rumination loop. A traceable decision doesn't nag.
5. **Capacity-framed, glanceable, no urgency.** "When you're ready", peripheral, minimum-attention — never
   "must / should / overdue".
6. **Every report and log is ND-readable by construction.** Short, one-idea blocks, bullets, headings,
   point-first, literal, left-aligned ([calm-Markdown](./002-calm-markdown.md)).
7. **Verification is proportional and AI-steered.** The human checks only load-bearing / low-confidence
   claims; the AI flags them. Blanket "check everything" causes the rubber-stamping it's meant to prevent.

**Through-line:** the flow already makes a decision *expensive enough to be backed, cheap enough to back
often*. This layer adds the missing axis — *light enough on the person to be sustainable*. For an ND brain
the evidence says these aren't softness on top of rigour; they **are** the rigour (pre-commitment beats
willpower; proportional oversight beats blanket checking; lean presentation beats dense).

## Open questions
- The escalation triggers are **qualitative** — "high stakes", "saturated", "load-bearing" are judgement
  calls, not numbers (the literature says the thresholds are context-dependent; no magic number). The budget
  and the three triggers bound it; the call itself stays human. Left as-is unless we find we want a sharper
  line.

## Tasks
- [x] Add a short **report template** to `docs/research/` — Question · Method + budget · Findings (graded) ·
  Synthesis · Citations · Confidence — the shape [`research-principles.md`](../research/research-principles.md)
  and [`tuning-agents.md`](../research/tuning-agents.md) already follow.
  → [`docs/research/_template.md`](../research/_template.md).
- [x] Link this flow from [`research-method.md`](../research-method.md) as the operative reference for
  research-as-product (method = the bar; this spec = the flow + the ND-safe layer).
- [x] First real run: take a research-drop through the whole flow (budget → pass → verify-queue → report →
  indexed log) and feel whether the bounds hold. → the calm generative-art research
  ([report](../research/calm-generative-art.md), [drift spec](../../assets/drift/docs/specs/001-drift.md)); the bounds held (frugal
  passes, escalation only when earned, ND-readable product, indexed log).

## Constitution Check
1. **Serves:** the *research-backed* mandate (every spec earns evidence), VI (low-arousal) + the ND-safety
   layer, IX (frugality — one frugal pass), and the *reqs-before-research* working principle.
2. **Violates:** none — no new deps, no machinery; a research discipline plus an ND-safe / calm layer.
3. **Subtracts:** bounds research by default (one pass, pre-set budget, proportional verification) — less
   searching, fewer options, no unbounded "be thorough".
4. **Calm:** capacity-framed, glanceable, planned stops with a breadcrumb; the bound is the anxiety relief —
   a traceable decision doesn't nag.
