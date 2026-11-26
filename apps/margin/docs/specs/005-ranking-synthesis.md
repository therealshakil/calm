# Spec 005 — Ranking & synthesis

**Status:** ready (locked 2026-06-23) · **Date:** 2026-06-23 · **App:** margin

Margin's one job, made real: take the day's normalised Signals (003) and produce **one recommendation —
"work on this next" — with its reasoning**, plus a calm, ranked read of the rest. Transparent rubric, one
grounded model call.

## Why
This is the charter's whole point — synthesis across silos into a single trustworthy "do this next"
(charter §1). It must *recommend, never execute* (Article VII), be *capacity-framed not accusing*
(Article III), and *never manufacture urgency* (Article VI). A shown rubric + shown reasoning is what
makes the call trustworthy instead of a black box.

## What it does
- **Happy:** given the day's Signals, rank them against a transparent rubric and select the **hero** (the
  one thing) with a plain "why", plus the **ranked rest** each with a one-line reason. Capacity-framed.
- **Quiet & empty:** if nothing is genuinely urgent or load-bearing, the rubric is *allowed to say so* —
  it returns a calm "nothing needs you first today" rather than inventing a hero (feeds the quiet-day
  state, 007). Never manufacture urgency to fill the slot.
- **When it fails:** if the model call errors or returns nothing usable, fall back to a **deterministic
  rank** (by the Signals' own urgency hints from 003) so an edition still builds, and mark it honestly.
  Never a broken edition, never an alarm.

## Not this (non-goals)
- No executing or drafting actions (that's the user's, via the source — Article VII).
- No inventing work — the model ranks only the Signals it's given (ID-referenced).
- No score-as-pressure: scores are an internal sort key; the user sees the *one thing* + reasons, not a
  guilt-inducing leaderboard.
- No live re-ranking — synthesis runs once per edition (004), not continuously.

## How (the plan)

**The rubric (transparent, weighted).** An urgency × importance spine (Eisenhower), made explicit as
weighted dimensions applied per Signal:
- **Blocks others** — is someone waiting on this? (highest weight — unblocking is high-leverage)
- **Time-bound / commitment** — a real deadline or a promise made (e.g. a Fathom action item)
- **Impact** — does it move something that matters
- **Staleness** — gently surfaced, never shamed
- **Your capacity** — fit to the day's room (calendar/forecast); a clear day ≠ an obligation

The rubric lives in the spec/config and is **shown** (the reasoning references it). Tuning the weights is
a logged decision, not a silent change.

**One grounded model call (Claude).** Per the [Claude API reference](../../../../docs/research-method.md):
- Model **`claude-opus-4-8`**, **adaptive thinking** (`{type: "adaptive"}`), effort `medium`–`high`.
- **Structured output** (`output_config.format`, json_schema) so the result is guaranteed-parseable for
  the edition builder (006). The schema references **Signal IDs** — the model selects/ranks existing
  Signals, it cannot invent new ones.
- **Reasoning before rank** (the schema puts the "why" before the pick) — better alignment + an auditable
  trace; the "why" is also what the user reads.
- **Prompt-cache** the stable system prompt + rubric; the day's Signals go after the cache breakpoint —
  keeps tokens/cost down (ties to 009).
- No tools — it's a single synthesis pass over the Signals, not an agent loop.

**Output shape (sketch):** `{ edition_id, hero: { signal_id, why } | null, ranked_rest: [{ signal_id,
why_one_line }], rubric_version }`. `hero: null` is the quiet-day path.

### Designed to improve with the models (Shakil, 2026-06-23)
Margin's synthesis should get *better as the models do*, with low effort:
- **Knowing a new model landed** — a tiny **model-watch** piggybacks on the existing edition Cron: each
  run it lists the **Models API** (`/v1/models`) and diffs against the last-known set in KV; a new model
  id surfaces a **quiet note** in the edition ("a new model is available — worth an eval run"). It
  **never auto-upgrades** (Article VII: recommends, never executes) — the eval set + you decide. Manual
  fallback: Anthropic's release notes. (The API tells you a model *exists*, not that it's *better* — that
  is the eval set's job, below.)
- **Model is config, not hardcoded** — upgrading to a newer Claude is a config change, not a rewrite. The
  call site and schema stay; only the model id / params move.
- **The eval set is the upgrade gate** — when a stronger model lands, re-run the hand-judged days, compare
  ranking quality, and adopt if it ranks better (or matches at lower cost / latency). This reuses the
  research-method's adversarial-verification step as the upgrade safety net.
- **Re-tune per model, downward** — newer models follow instructions more faithfully and usually need
  *less* scaffolding; trim the rubric prompt as they improve rather than piling on (per the Claude API
  migration guidance).
- Folds into the Constitution's periodic review: "is there a better model, and does it rank better on the
  eval set?" becomes a standing check, not a one-off.

## Open questions
- Exact rubric weights + how "your capacity" reads from the calendar (settle with 006/forecast).
- Output JSON schema shape (finalise with 004's edition model + 006's columns).
- ~~Keep a tiny eval set?~~ **Resolved (2026-06-23): yes — it's both the launch sanity-check and the
  model-upgrade gate** (see "Designed to improve with the models"). A few hand-judged days, kept current.
- Effort level vs cost (tune against the 009 budget).

## Tasks
*(fill at build time — smallest first)*
- [ ] Write the rubric as explicit weighted dimensions + the synthesis system prompt.
- [ ] Define the structured-output JSON schema (Signal-ID-referenced; reasoning-before-pick).
- [ ] One synthesis call end-to-end over fixture Signals (no live sources needed).
- [ ] The quiet-day path: model may return `hero: null`; builder handles it.
- [ ] The deterministic fallback rank + the "degraded, honestly marked" path.
- [ ] (If kept) a small hand-judged eval set to check ranking quality.

## Constitution Check
1. **Serves:** the charter's one job (synthesis → one recommendation); III (capacity-framed); VI (calm, no manufactured urgency); VII (recommends, never executes).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no engagement scoring shown to the user, no auto-actions).
3. **Subtracts:** no leaderboard, no auto-execution, no live re-ranking — the model picks one thing and explains it, nothing more.
4. **Calm:** "nothing needs you first" is a first-class output; reasoning is shown (trust, not pressure); a failed call degrades to a deterministic rank, never an alarm.
