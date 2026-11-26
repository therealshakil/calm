# study — Charter

**Status:** locked 2026-07-14 · **App:** study

> *study* (verb, and place): to attend to something closely, for its own sake; and the room you do it in.
> Named for the attention it protects, not the output it produces.

study is the suite's calm **reading room** — the *study* sibling to [Margin](../../margin/docs/charter.md)'s
*work*. It inherits the [Calm Constitution](../../../CONSTITUTION.md), the shared
[voice](../../../docs/calm-language.md) and [identity](../../../docs/identity.md) — read those first. This
charter covers only what is **specific to study**. When a feature conflicts with the Constitution or this
charter, the feature loses.

**Why it's separate from Margin (and not a "weekend mode").** study *could* have been a mode inside Margin —
an out-of-hours face of the work app. It isn't, on purpose: folding reading into the task app quietly ranks
it *beneath* tasks. A sibling refuses that. study exists to say that reading, learning and following your
curiosity **matter in their own right, alongside work** — not as leftover capacity.

---

## 1. The one job

**"Bring my reading back — the feeds, the follows, the quiet catch-up — without bringing the noise back."**

A calm reading room: it gathers what you have *chosen* to follow, presents it as a **finite** thing to read
at your pace, and stops. No stream, no algorithm, no unread-count dread.

## The lived need (the entry gate)

Decades in **newsgroups, IRC, RSS and Google Reader** — the calm reading rooms of the old internet. Every one
is now dead, neglected, or drowned by algorithmic feeds; none of that tech is still *functional or calm*. This
is a real, long-felt, unmet need — study passes the suite's organic entry gate, as Mail did (20+ years of
lived need), not a wishlist item.

## 2. The form: a reading room, not a stream

Like Margin's edition, study is a **prepared** thing — gathered on a quiet cadence and presented finite, not a
live feed. Reader-shaped (sources/sections · item list · reading pane), evoking **Google Reader** and the
**90s newsboard / newsreader**, rendered calm. When new reading is ready it waits quietly; it never interrupts.

**Margin hands off to study.** Margin's **out-of-hours** mode points here — *"work's done for today; the
reading room's open"* — rather than Margin becoming a weekend app itself. The handoff keeps each app true to
its one job.

## 3. Design, in one line

Wears the suite identity as Margin's sibling: **monochrome ink on paper**, the one clay accent, type carrying
all hierarchy, light + dark, almost no motion. Nostalgic in *feel* (Reader / newsboard), never in decoration.
Interface anchored on Margin's mockups ([`../../margin/docs/mockups/`](../../margin/docs/mockups/)) so study
reads as family; the full design system follows in the spec phase.

## 4. Architecture, in one line

Installable PWA on the same spine as Margin: **pre-fetched content** — scheduled fetchers write data into the
repo; the reader only *reads* (no live fetch, no CORS, works offline). **Composio** behind a `SourceAdapter`
seam, **Cloudflare Access** as the only auth, single user. **v1 sources:** the
[ai-scout](../../../.claude/skills/ai-scout/SKILL.md) weekly digest + a small curated feed list.

**Reuse the shape, not the engine — locked 2026-07-14.** study borrows Margin's `Signal` shape as a legible
sibling convention, but runs its **own** ingest fetchers and its **own** runtime; the two apps stay uncoupled,
so a Margin change can't break the reading room and reading never inherits work's urgency semantics. The
*pipeline shape* is shared (fetch on a quiet cadence → normalise → finite edition); the *payload* is study's
own — a media item is an **invitation** (author, medium, why-chosen), not a work **obligation** (a deadline
gradient). Prove it with a named spike — one study-only feed fetcher emitting the shape, touching none of
Margin's code — before any wider build. Stress-tested by the calm-council (2026-07-14). Verify-queue carried
into the spec phase: does the ai-scout digest map cleanly onto the shape? does study need its own Cron Worker
or share Margin's? is the video-watching skill an ingest source or a read-time helper?

## 5. Non-goals / deferred

Multi-user, a public surface, engagement mechanics, infinite feed subscription, unread-count nagging, anything
that makes *not* reading feel like a failure. **Read-only on your sources** (like Margin — it reflects, never
writes).

**North star (deferred, build toward):** the AI "knows-you / archetype-as-feed" curation engine — a feed as a
*desire*, not a URL; and shipping the calm apps as **zero-config internal tools** (central auth + Composio +
a per-user identity.md). Both live in the idea-space (`Calm.md`), out of v1 scope.
