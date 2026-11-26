# Mail — seed notes (admitted to the suite via Amendment 1; NOT yet in development)

**Status:** admitted under the entry gate on 2026-06-23 (Constitution → Amendment 1). **Queued behind
Margin — we build one tool at a time.** Charter + budgets + spec come later, when Margin is far enough
along. This file is just a capture so nothing is lost; it is **not** a charter or spec.

## What it is
A **calm mail tool, delivered as a CLI / agent skill** — replacing the chaotic Gmail GUI with something
calm. Builds on an existing private `inbox-0` skill.

## Why (lived need — the entry-gate basis)
- Shakil has used Gmail since **2003** — 20+ years of lived need (not ideated).
- The Gmail GUI is full of triggers and violates nearly every calm Article (see "triggers to strip").

## Calm principles it embodies
- **CLI = the purest calm surface:** peripheral, text-only / monochrome, no notifications, glanceable,
  deal-and-leave (Article I "glanceable, not operable"; calm technology). Also resonates personally —
  the terminal is calm for Shakil in a good way.
- **Loose-human / strict-machine — "flow mode":** type messy, as yourself; intent preserved, the machine
  sets tone before send. (Already proven in practice — messy intent → measured email.)
- **Recommends, never executes (VII):** drafts shown, confirmed before send; read-only-leaning.
- **Finite (I):** a triage session you finish — no counts, no treadmill, no infinite inbox.
- **Calm over alarm (VI):** no urgency/scarcity, no badges.

## Features (seed)
- **inbox-0 triage:** bucket, bulk-archive noise (reversibly), surface only the few human mails that need
  a reply — "here are 3, none on fire."
- **Flow-mode compose:** type stream-of-consciousness; the model tone-sets while preserving intent; shows
  the result.
- **Pre-send ADHD filter:** a calm hold-and-check before send — does this read sharper than you meant?
  missing context? "no rush, you can still stop."
- **Drafts shown + confirmed; never auto-send.** Signature auto-appended (see template / `email-signature`).

## Triggers to strip (from the Gmail GUI screenshot, 2026-06-23)
- Accusing counts/badges: Inbox 17, Drafts 7, Purchases 54, Archived 359, "1–17 of 17", Calendar 31.
- Manufactured urgency/scarcity: "TOMORROW | Limited to 20 Spaces", "Pending evaluation", "Reply above this line".
- Signal drowned in noise: human/work mail flat-listed with usage reports, GitHub alerts, bot pings, newsletters.
- Peripheral clutter: app-icon rail, per-row star/checkbox/icons, AI nudges, tab overload.

## Cross-tool / integration ideas
- **Smooth hand-off from Margin.** Mail should hand off cleanly from Margin — e.g. an item in Margin's
  "rest of your plate" that's an email needing a reply flows straight into Mail's flow-mode compose.
- **Shared context.** Mail could draw on **what Margin already knows** (the synthesised signals across
  Jira/Fathom/Gmail/Calendar/Slack + the ranking rubric) to decide *which* emails matter and *how* to
  handle them — priority + the additional context for tone/response. Suggests a shared context/seam
  between suite tools. (Captured 2026-06-23; not for now.)

## Open questions / tensions (not resolved)
- **Calm but never misses.** The central tension: Mail should be calm — glanceable, peripheral, doesn't
  demand attention — but missing a time-sensitive message has a real cost. Some mail might get missed, or
  not seen in time. Open, not decided:
  - Is Margin's daily read-only edition enough to surface time-sensitive mail, or does Mail need its own
    minimal "you'll want to see this" surfacing — without becoming a notification machine?
  - Where does the line sit between calm (you glance and move on) and a safety-net that catches the
    genuinely urgent?
  - Could the answer lean on the Margin hand-off / shared-context idea above (Mail knowing what Margin
    knows)?
  - Note: "calm but never misses" is a known hard problem in calm-technology (ambient signalling vs.
    interruption). Research it properly when Mail is picked up — not now.
  - **Candidate answer: "Resurface" (see below).** Process to zero, trust it comes back when it matters.

### Resurface (candidate answer to "calm but never misses")
Shakil dislikes two common coping habits: leaving read mail in the inbox so he won't forget it
(inbox-as-todo), and snooze modes. Both are chores that hide or clutter. Instead, Mail (likely with
Margin) **resurfaces** a message on its own at the moment it's relevant — so you can process to zero and
trust it'll come back when it matters.
- **Vs. snooze:** snooze = you manually pick when it returns (a chore), and it vanishes meanwhile.
  Resurface = the system brings it back at the right time, no manual scheduling, nothing hidden-and-forgotten.
- **The "right moment" judgement** could lean on the Margin hand-off / shared-context idea above (Mail
  knowing what Margin knows) to decide when a message becomes relevant.
- Seed only; not for now.

## Idea-drops (parked, 2026-06-24)
- **Slack DMs as mail.** Treat Slack DMs as just another kind of mail — one calm inbox over email + Slack
  DMs, same triage / flow-mode / pre-send. (Composio reaches Slack already.)
- **Naming exercise.** "Mail" is a placeholder — explore a calmer, more poetic name (vs plain "Messages").
  Run the research reqs-first when picked up.

## When picked up (later)
- Charter + budgets + spec, honouring the Constitution, `identity.md`, and `research-method.md`.
- Follow-up: broaden `identity.md` "app" → "calm tool" (Amendment 1 ripple).
