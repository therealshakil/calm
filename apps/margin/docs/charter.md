# Margin — Charter

> *Margin* (noun): the blank space around the type; the slack you have left.
> This app is named for what it protects, not what it produces.

Margin is the suite's calm daily work edition. It inherits the [Calm Constitution](../../../CONSTITUTION.md)
and the shared [voice](../../../docs/calm-language.md) — read those first. This charter covers only what is
**specific to Margin**: its one job, its form, and its columns. Measurable limits live in
[`budgets.md`](./budgets.md). When a feature conflicts with the Constitution or this charter, the feature
loses.

---

## 1. The one job

**"Given everything on my plate, what's the one thing to do next — and why?"**

Margin pulls signals across Jira, Fathom, Gmail, Calendar and Slack, ranks them with a transparent
rubric, and presents **one recommendation** plus a calm, ranked read of the rest. The value is
**synthesis across silos** — weighing a blocked teammate, a meeting commitment, an unanswered DM and a
stale ticket against each other, instead of five separate anxious tabs.

## 2. The form: a daily edition

Margin behaves like a **newspaper edition**, not a live dashboard — this *is* how it honours Article I
(finite by default). An edition is prepared on a quiet cadence (Cron, in-hours only), numbered and dated,
and presented as a complete, finite thing. A magazine has no refresh button; neither does Margin. When a
new edition is ready it waits quietly — it never interrupts.

### Columns of the edition
Each column passes one test: **does it serve calm + completion, or pull you back in?** The set is *fixed*
(adding one is an Amendment — see `budgets.md`).

| Column | What it is | Why it's allowed |
|---|---|---|
| **The Spot** | A daily single-ink line-illustration on the masthead (hand-made or generated — see identity §3). | Humanises the page; "someone set this for you today." One fixed slot, static, single-ink — calm, not noise. |
| **Work on this next** | The hero recommendation + its reasoning. | The one job. |
| **The rest of your plate** | Ranked remainder, progressively disclosed. | Opt-in; capacity-framed. |
| **The Cartoon** | A daily single-panel cartoon + caption — wry but kind, Peanuts-gentle, never urbane. | One beat of levity. Single panel (not a strip) = a moment, not a task. |
| **Settled** | What you closed today (done + won't-do). The "obituaries", reframed. | Gives *completion* its own visible, satisfying space. |
| **The Forecast** | The week ahead, styled as the paper's weather column. | Gentle foresight: "clear skies Thu — protect Thursday." |
| **From the Desk** | A one-line warm editorial note up top. | Where the guardrail speaks: "A lighter edition today — that's allowed." |

**Deliberately excluded** (guardrail): crossword/puzzles (a charming hyperfocus hole — the app that
protects attention won't hand you a new way to lose it), horoscope (prediction = pressure), and any
sports/stocks/letters noise.

## 3. Design, in one line

Margin wears the suite identity ([`docs/identity.md`](../../../docs/identity.md)) in its edition form:
**monochrome ink on warm paper** — no colour at all (the warmth is research-led anti-glare, not cosmetic
cream), typography carrying all hierarchy, hairline rules. A **two-voice type split**: hand-lettering for
the masthead and the editorial voice (From the Desk, the sign-off), a serious serif for the work itself,
a hyperlegible humanist sans for the body. **No alarm red — no colour** (Article VI); the rare genuinely
time-bound item is carried by *position, weight, and a filled ink mark*, never colour. Peanuts-gentle ink
illustration. Worked-up direction lives in [`docs/mockups/`](./mockups/) (edition-v3); the full design
system follows in the spec phase.

## 4. Architecture, in one line

Pure installable PWA: **SvelteKit on Cloudflare** (Workers + D1 + KV + R2 + Cron), **Cloudflare Access**
(Zero Trust) as the only auth, **Composio hosted API** behind a `SourceAdapter` seam for sources, and the
**Claude API** for ranking. Single user. Less LOC, performance, beauty. Details: `docs/architecture.md`
(to be written).

## 5. Non-goals

Multi-user. A public surface. Engagement maximisation of any kind. Anything that makes a quiet day feel
like a failure.

**Read-only on your sources (a principle — stricter than Article VII).** Margin **never writes** to
Jira / Gmail / Slack / Calendar — it never creates, edits, sends, or closes anything. Any change to a
source is something *you* do there; Margin only reflects it. This is least-privilege: a read-only tool
has a far smaller blast radius and is far easier to trust with your work data (research-backed — see
[`docs/research.md`](../../../docs/research.md)). The one exception is Margin's **own** local, ephemeral
state (e.g. a one-day "set aside") — that is not a write to your systems.

Read-only runs **both ways**: Margin doesn't write to your systems, and **you don't operate Margin** —
you glance, take the one thing, and leave (Article I, *glanceable not operable*). This is why interaction
controls stay minimal, and why even the local "set aside" is resisted: a thing to fiddle with is a thing
to sink time into. Margin is to glance at and move on from, not a timesink.
