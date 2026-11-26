# Research principles for a calm, AI-assisted, decision-backing flow

**A research product** · 2026-06-24 · suite-wide
*Informs the [research-flow spec](../specs/003-research-flow.md) and extends [`research-method.md`](../research-method.md). A deliverable in itself — it forces no spec.*

## Question

What makes research good and decisions well-grounded — for a flow where AI makes deciding *cheap* (so we
make decisions earn evidence) and research *fast and frugal* (so we can afford to back more of them, and
the human's job is to fact-check the machine before the spec)?

## Method

One frugal research pass (calm-tooling: the cheapest shape that does the job), graded by strength and
weighed against our existing method. Sources linked below. Confidence noted where a claim rests on a single
secondary source.

## What already holds (the spine, validated)

Our method's six planks — proportionate bar, grade-by-strength, lived-need validation, seek-invalidation,
adversarial-verify-before-lock, stop rule — are sound. The literature backs them; notably, **actively
seeking disconfirmation is the single strongest epistemic move** (Popper; Farnam Street). This report builds
*past* the spine, it doesn't restate it.

## What to add (the six that matter)

1. **Verify the AI's *claims*, not just the decision.** Automation bias is real, and "remember to check"
   provably doesn't fix it — so the human opens the *primary source* for load-bearing claims before the spec
   locks, and the AI flags single-source / low-confidence claims as the priority queue. (Extends adversarial
   verification *inward*, onto the evidence.)
2. **Record the *why*, ADR-style.** A short, immutable note of context + decision + trade-offs. Rationale is
   what stops a decision being re-litigated — "understand, then revisit only if context changed," not
   "blindly accept or change." (Extends *write it down* from the call to the reasoning.)
3. **Triangulate.** A claim is lockable when independent sources corroborate it; a lone source is the floor.
   (New plank — grading a single source isn't cross-validating it.)
4. **Set the research budget up front, by stakes.** Convert the stop rule from a mid-flow judgment into a
   pre-set tripwire (time/effort by error-cost × reversibility). For an ND, anti-hyperfocus flow, a tripwire
   set *before* you start beats a judgment made while absorbed.
5. **Capture reasoning before the outcome (a decision journal); judge the process, not the result.** So a
   good call that got unlucky doesn't teach the wrong lesson.
6. **Make the log an *index*, not an archive.** Cross-link each entry to the decision it backed and to
   related prior ones — that linking is what makes research **compound** into something the next run
   inherits. (Extends *write it down* into *link it up*.)

## The economics — cheap research, expensive dev saved

Make research **proportional to stakes and reversibility**: spend evidence where being wrong is costly or
hard to reverse; decide-and-move-on where it's cheap. Cheap AI research lowers the cost of backing a
decision, which rationally lets us back *more* of them — but over-research stays a trap, because time
(and tokens) cost even when each search is cheap. The bargain: **a little spent grounding a spec saves the
big cost of building the wrong thing** (a defect caught at spec time is far cheaper than one built and
unwound). So research stays frugal — one good pass — and the saving lands in dev.

## Through-line

A structured research flow *is* **decision hygiene** (Kahneman, *Noise*): its real job is to make the same
question yield the same grounded answer regardless of which human — or which model run — drives it. That's
what makes a decision *expensive enough to be backed, and cheap enough to back often*.

## Citations

- Evidence by strength: [GRADE](https://pmc.ncbi.nlm.nih.gov/articles/PMC2335261/) · [AHRQ](https://effectivehealthcare.ahrq.gov/products/methods-guidance-grading-strength/methods)
- Disconfirmation: [Farnam Street](https://fs.blog/confirmation-bias/) · Triangulation: [Denzin](https://scholarworks.waldenu.edu/cgi/viewcontent.cgi?article=1187&context=jsc)
- Decision records: [Fowler — ADR](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) · [Nygard](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- Decision science: [Annie Duke](https://behavioralscientist.org/practical-tools-for-better-decisions-a-qa-with-annie-duke-on-how-to-decide/) · [Kahneman, *Noise*](https://en.wikipedia.org/wiki/Noise:_A_Flaw_in_Human_Judgment)
- AI verification: [NCSC — AI hallucinations](https://www.ncsc.org/resources-courts/legal-practitioners-guide-ai-hallucinations) · [automation bias](https://www.sciencedirect.com/science/article/abs/pii/S1071581908000724)
- Economics: [ISACA — analysis paralysis](https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2024/volume-5/how-to-avoid-analysis-paralysis-in-decision-making) · Compounding: [organisational memory](https://www.sciencedirect.com/science/article/pii/S2444569X19300319)

*Confidence: epistemics / ADR / Kahneman / GRADE / automation-bias rest on primary or well-established sources. The "instructions cut hallucinations ~60%" figure is a single secondary summary — verify before quoting the number.*
