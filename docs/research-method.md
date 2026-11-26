# Calm — How We Research

> The [Constitution](./CONSTITUTION.md) says every spec is research-backed, because evidence you can
> trace doesn't nag later. This doc says *what good research looks like here* — so it's a deliberate,
> repeatable method, not per-spec improvisation. The evidence itself is logged in
> [`research.md`](./research.md).

Keep it proportionate (Article IX). Research the decisions that are **load-bearing or touch wellbeing**;
don't research trivia. Over-researching is its own anxiety (and a hyperfocus hole) — see the stop rule.

**This doc is the bar; the [research-flow spec](./specs/003-research-flow.md) is the flow.** Most research is a
quick call, logged in [`research.md`](./research.md). Some is substantial enough to be a *product* — a
committable, cited report. The deliberate flow for that (research-drop → budget → one frugal pass →
verify-queue → report → indexed log), the escalation rule (when one pass earns a second), and the ND-safe &
calm layer all live in that spec.

---

## Requirements first — ask before researching

Before researching a decision, **ask the person about the requirements** — the question, the constraints,
the target (OS / tech / scope), what "done" looks like. Research serves a *settled* requirement, not a
guessed one; misdirected research is wasted effort (and a re-do tax). **Clarify, then research.** The person
owns the requirement; the assistant owns the strict research once it's clear.

## What we research (and how hard)

- **Wellbeing / neurodivergence claims** — the highest bar. These shape tools for real, vulnerable use,
  so prefer clinical / standards / peer-reviewed sources (e.g. BDA, NICE, journals). Don't ship a
  wellbeing claim on a blog post.
- **Identity, UX, product calls** — medium bar. Practitioner consensus, standards, and good grey
  literature are fine, weighed by quality (below). Cheap experiments beat opinions.
- **Tech / architecture calls** — medium bar. Docs, maintainer sources, and field reports; prefer the
  primary source over a summary of it.
- **Trivia / reversible details** — no formal research. Decide and move on.

## The methods (a small toolkit)

1. **Lived-need validation.** Does this arise from a *real, felt need* (the entry-bar), or are we building
   for a problem nobody has? Most founders build for their own problem and never check — we check, at
   least lightly. Talk to / observe the real use before building, and value **invalidation**: actively
   look for the version of events where this is *not* needed.
2. **Grade the evidence — by strength, not just type.** What matters is the reliability of the evidence
   and absence of bias, more than whether a source is "peer-reviewed" or "grey". Judge each source on:
   authority, method, objectivity, recency, corroboration by others. A well-run practitioner study can
   beat a weak paper; a single uncorroborated blog is the floor.
3. **Signal-gathering.** For what people actually *feel and say* (sentiment, lived experience, ecosystem
   reality) use community signal — Reddit/forums, the `last30days` skill. Good for "is this real for
   people", not for clinical truth. Label it as signal, not fact.
4. **Adversarial verification.** Before locking a decision, try to *refute* it — seek the disconfirming
   evidence and the counter-case. A claim that survives a genuine attempt to break it is safe to lock.
5. **Cheap experiments, when apt.** A paper sketch, a clickable mock, a fake-door — speed over polish, to
   test a hypothesis with real use. Bounded by the wellbeing guardrail: we test to *learn*, never to
   growth-hack the user.

## Write it down

Every researched decision becomes a short entry in [`research.md`](./research.md): the question, what the
evidence said, the call it drove, and the sources. **Be honest:** if something was reasoned rather than
sourced, say so and mark it to verify later. An untraceable decision is one we'll re-litigate.

## The stop rule

Stop researching when the decision is no longer in genuine doubt, or when the cost of more research
exceeds the cost of being wrong and reversing later. Calm research is *enough* research — not exhaustive.

---

Sources: [Grey literature & best evidence (KTDRR)](https://ktdrr.org/products/info-briefs/KTDRR-GreyLitBrief-508.pdf) ·
[Evidence synthesis: grey literature (Cornell)](https://guides.library.cornell.edu/evidence-synthesis/grey-literature) ·
[UX for Lean Startups — early validation (Klein)](https://www.oreilly.com/library/view/ux-for-lean/9781449335007/ch01.html) ·
[The importance of invalidation (Tomer Sharon)](https://uxpod.com/episodes/the-importance-of-invalidation-tomer-sharon-on-lean-user-research.html) ·
[Lean experimentation for solo founders](https://veldeonix.com/lean-experimentation-solo-founders/)
