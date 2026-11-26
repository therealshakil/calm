# Spec ideas — study

*A parking place for rough, half-formed spec thoughts. Nothing here is in development. Each is a seed, set
down so it's safe, not lost — to be promoted into a proper numbered spec later, when there's margin, via the
suite's specs-first waterfall.*

---

## 🌱 ai-scout — the weekly digest source
The charter names an "ai-scout weekly digest" as a v1 source, but no such skill exists yet. It's either a
to-be-built dependency (a scheduled scout that assembles a digest study ingests) or a fast-follow after the
curated feed list ships. Shape into its own spec (or its own skill) when the sources fork is settled — see
the spec map's open fork.

- Seed only — not in development.

## 🌱 North star — the "knows-you / archetype" feed
From `Calm.md`: a feed as a *desire*, not a URL — AI curation tuned to who you are. Explicitly deferred out
of v1 (charter §5). Lands on top of 003 (sources) + 005 (curation) once the calm reading room stands.

- Seed only — not in development.

## 🌱 Edition diversity — one voice shouldn't take over
The first live edition was dominated by one prolific source (Simon Willison: 23 of 33 items in a section).
Debated via the calm-council (2026-07-15, 5 lenses). Two tiers proposed — **Shakil to lock**:

- **v1.1 — proposed revision to locked spec 005 (deterministic, no AI).** Per-source soft cap per section +
  round-robin interleave (voices alternate, newest-first within); overflow **rolls to a later edition**
  rather than a loud "+N more" (keeps the edition finite, no FOMO — ND/User note). Author-blind, arithmetic,
  inspectable — honours "no algorithmic feed".
- **v2 — proposed NEW study spec (opt-in AI, un-defers the north star).** Topic-cluster across sources → one
  representative item per story + "N sources covering this" + a short **consensus / dissent** line when
  sources disagree; optionally a small calm-council debate result on a genuinely contested claim. This is the
  "by relevance, find consensus or push back" the brief asks for.
- **The honest tension (council-surfaced, keep it):** "assess by content **relevance**, not author" can't be
  done deterministically — real relevance/consensus needs AI judgement, i.e. the opaque feed study exists
  against. So v1.1 gives author-blind *fairness*; v2 gives *relevance + consensus*, transparent + opt-in.
  Don't build v2 piecemeal inside v1 (Skeptic) — it's the deferred north star, its own spec.
- Kin: the *North star* seed above; the calm-council (`../../../../docs/specs/011-calm-council.md`); spec 005.
  Proposals — awaiting Shakil's lock, not in development.
