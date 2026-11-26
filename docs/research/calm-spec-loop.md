# The calm spec loop — keep the skeleton, harden the requirements, scale to the change

**A research product** · 2026-06-30 · suite-wide (the spec/requirements method)
*Informs a proposed revision to [`spec-template.md`](../spec-template.md) and [`003-research-flow.md`](../specs/003-research-flow.md). To be proven by dogfooding on Margin 006 before the method change is locked.*

## Question

What is current best practice for a spec / requirements-gathering loop that yields **great specs that aren't a burden to build** — and what should calm change?

The stakes: the spec method is the suite's load-bearing process (every tool inherits it), so it earns a product, not a log line. Four failure modes to kill, named with the person:
specs **miss requirements**; specs are **heavy ceremony**; specs **don't translate to build**; the **elicitation itself is exhausting**.

## Method

One frugal pass (medium bar — a reversible process call). Budget: targeted searches across the named methodologies plus the AI-era spec-driven discourse, then an adversarial sweep for the counter-case before any recommendation. The pass **saturated** — the pro-SDD and the critique sources converge rather than conflict, so no escalation was earned. One empirical claim (EARS reduces requirement errors) rests on the originating IEEE paper plus corroboration; it sits in the verify-queue.

## Findings

### The field has converged on a three-stage spec shape — and calm already has it

**Confirmed.** AI-era spec-driven development (SDD) has settled on: **Requirements (what + why, testable) → Design (how) → Tasks (executable, traceable to requirements) → Implement**, gated by a project "constitution."
Kiro: Requirements → Design → Tasks. GitHub Spec Kit: Constitution → Specify → Plan → Tasks → Implement.
Calm's `spec-template.md` is already this exact skeleton (Specify → Plan → Tasks → Implement + the Constitution Check). So the skeleton is sound — the gap is **not** the stages; it's the **quality of the requirements inside "Specify."**

### EARS is the strongest answer to "specs miss requirements" and "don't translate to build"

**Confirmed (with one empirical claim to verify).** EARS (Easy Approach to Requirements Syntax; Mavin et al., Rolls-Royce, IEEE 2009) is constrained natural language: a tiny keyword set forces every requirement into a testable sentence, clauses always in the same order.

- **Ubiquitous:** `The system shall <response>` (an always-true property).
- **Event-driven:** `WHEN <trigger>, the system shall <response>`.
- **State-driven:** `WHILE <state>, the system shall <response>`.
- **Optional-feature:** `WHERE <feature included>, the system shall <response>`.
- **Unwanted-behaviour:** `IF <condition>, THEN the system shall <response>`.
- **Complex:** combinations of the above.

Why it closes two of the four gaps: the keywords make you state the **trigger, state, and unwanted-behaviour** explicitly — which is exactly the edge-case set people omit from a plain "the system does X" sentence (the "missed requirement"). And because each line is a single testable behaviour, it maps **one-to-one to a task and a test** (the "translate to build" gap). Kiro adopted EARS for its requirements phase for precisely this reason — to force "edge cases developers typically handle when building from basic user stories."

### The burden is real — and it comes from mis-scaling, not from specs as such

**Confirmed — this is the load-bearing counter-case.** The sharpest critiques (Fowler; Kent Beck) do **not** say "don't spec." They say the burden appears when the spec is **mis-scaled to the change** or **left to rot**:

- **Ceremony mismatch with size.** Fowler watched a small bug become "4 user stories with 16 acceptance criteria" in Kiro, and a 3–5-point feature drown in markdown review — "I'd rather review code than all these markdown files" (*Verschlimmbesserung* — improving something into a worse state).
- **Stale specs actively mislead.** A spec that drifts from the code doesn't just go unused — agents execute it confidently and never flag the mismatch. Drift recurs unless implementation decisions are **written back**.
- **Kent Beck's philosophical point (verbatim).** "The descriptions of Spec-Driven development that I have seen emphasize writing the whole specification before implementation. This encodes the (to me bizarre) assumption that you aren't going to learn anything during implementation that would change the specification." So specs must stay **revisable in small increments**, not frozen — TDD-style feedback loops, not a frozen up-front contract.
- **Templates can invite mindless fill-in.** A template can produce box-ticking that misses what the template didn't ask. The template must **prompt thought**, not just collect fields.
- **SDD overhead isn't always worth it.** Throwaway scripts, tiny fixes, solo/short-lived work — one prompt beats a requirements doc.

### "Just Barely Good Enough" is the documentation principle that fits calm

**Confirmed.** Agile's JBGE (Ambler) and "just enough documentation" line up exactly with Article IX (subtract): document the minimum that creates shared understanding, augment only when a real need appears. The lightweight testable layer the field reaches for is **acceptance criteria / Given-When-Then** — EARS is the tighter, more testable cousin of the same instinct.

### The exhausting-elicitation gap is answered by AI-drafts / human-locks, one fork at a time

**Confirmed (and calm already half-has it).** SDD pipelines work by putting **human approval at the right depth**: the assistant drafts the requirements from a loose description, the human reviews only to remove hallucinations and resolve genuine ambiguity. Calm already mandates co-authored specs where the person locks. The missing piece is the **elicitation discipline**: the assistant should surface only the real gaps/forks it can't resolve, one at a time — not interrogate, and not silently guess.

## Synthesis

**Don't replace the loop — harden one step of it.** Calm's stage skeleton already matches the field's best practice. The whole improvement is concentrated in the "Specify" step and in three guardrails that the rest of calm already believes in.

The proposed method change (to be ratified by the person, then proven on Margin 006):

1. **EARS-lite requirements in the spec template.** Add a short **Requirements** block: the load-bearing behaviours written as EARS sentences (`WHEN/WHILE/IF…THEN/WHERE, the system shall…`), each one directly testable. This replaces vague "What it does" prose for the behaviours that matter — it does not add a layer on top of it. → kills *misses requirements* + *doesn't translate to build*.
2. **Scale rigour to the change (the anti-ceremony rule).** EARS applies to **load-bearing behaviour only** — a small change gets a few lines, not sixteen. Tie it to the existing Build Gate: two-way/small → a handful of requirements; one-way/foundational → the full set. → kills *heavy ceremony*. This is the single most important guardrail; the burden is mis-scaling, not specs.
3. **Keep it living — write-back or mark disposable.** One rule: when implementation teaches you something the spec got wrong, write it back the same session, or mark the spec disposable (spec-first, not spec-anchored). → prevents stale-spec drift, honours Beck's "you learn while building."
4. **Elicitation stays ND-light.** The assistant drafts the EARS requirements from a loose description and asks the person only the genuine forks it can't resolve — one neutral question at a time, never a menu, never a silent guess. → kills *exhausting elicitation*; it's the existing "minimal yes / person locks" rule, applied to requirements.

Through-line: **the burden was never the spec — it was the unscaled, un-living spec.** EARS makes requirements terser and more testable (it can *reduce* prose), and the three guardrails are all things calm already holds (subtract, the Build Gate, minimal-yes). So this hardens spec quality without adding ceremony — net, it should make specs cheaper to build from.

## Citations

- The converged Requirements→Design→Tasks→Implement shape — [Fowler: Kiro, spec-kit & Tessl](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) · [GitHub Spec Kit](https://github.github.com/spec-kit/) · [Thoughtworks on SDD](https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices)  *(triangulated)*
- EARS syntax + patterns — [Mavin, official EARS guide](https://alistairmavin.com/ears/) · [QRA definitive guide](https://qracorp.com/guides_checklists/the-easy-approach-to-requirements-syntax-ears/) · [EARS (Mavin et al., IEEE 2009)](https://ieeexplore.ieee.org/document/5328509/)  *(triangulated; primary)*
- EARS adopted for AI requirements, forces omitted edge cases — [Kiro specs docs](https://kiro.dev/docs/specs/) · [Kiro requirements-first](https://kiro.dev/docs/specs/feature-specs/requirements-first/)  *(triangulated)*
- The counter-case: mis-scaling, review overhead, *Verschlimmbesserung* — [Fowler](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)  *(authoritative single author)*
- Stale specs mislead agents; write implementation back — [Augment: living specs](https://www.augmentcode.com/guides/living-specs-for-ai-agent-development) · [Augment: what SDD gets wrong](https://www.augmentcode.com/blog/what-spec-driven-development-gets-wrong)  *(triangulated)*
- Kent Beck (verbatim): writing the whole spec up front "encodes the (to me bizarre) assumption that you aren't going to learn anything during implementation" — [Pragmatic Engineer: TDD, AI agents & coding with Kent Beck](https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent) · [Augment: SDD for brownfield (quotes it)](https://www.augmentcode.com/guides/spec-driven-development-brownfield-codebases)  *(confirmed — direct quote, triangulated)*
- SDD overhead not worth it for throwaway/tiny/solo — [specdriven.com objections](https://specdriven.com/objections) · [Isoform: limits of SDD](https://isoform.ai/blog/the-limits-of-spec-driven-development)  *(triangulated; grey)*
- JBGE / just-enough documentation; templates can invite mindless fill-in — [Agile Modeling: lean/agile documentation (Ambler)](https://agilemodeling.com/essays/agiledocumentation.htm)  *(practitioner consensus)*
- Human approval at the right depth (drafts → review for hallucination/ambiguity) — [dplooy: SDD with AI 2025 guide](https://www.dplooy.com/blog/spec-driven-development-with-ai-complete-2025-guide)  *(grey — signal)*

## Confidence

**Safe to lock:** the stage skeleton is field-standard (calm already matches it); EARS is a real, primary-sourced, widely-adopted syntax whose patterns are well-established; the burden-is-mis-scaling counter-case is corroborated across independent critics including the field's most credible voices.

**Hold loosely / verify-queue (for the person, before the method change locks):**

- **"EARS reduces requirement errors / improves quality."** The empirical strength of this rests on the originating EARS work plus vendor (QRA) framing. Open the [IEEE paper](https://ieeexplore.ieee.org/document/5328509/) / [Mavin's guide](https://alistairmavin.com/ears/) and confirm the evidence is a study, not just advocacy, before citing it as fact in the spec template.
- ~~The Kent Beck attribution.~~ **Confirmed (2026-06-30)** — the quote is verbatim from the Pragmatic Engineer interview and is quoted directly in Augment's brownfield guide. Safe to use as written.
- **The judgement call this research can't make for you:** does an EARS block, even gated to load-bearing behaviour, *feel* like more ceremony when you write Margin 006 — or less? That's the dogfood test, and it's yours. The proposal is built so that if it feels heavier, guardrail 2 (scale to the change) is the dial to turn, not a reason to drop EARS.
