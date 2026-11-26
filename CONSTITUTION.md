# The Calm Constitution

> The supreme document of the calm-software suite. Every app published here — **Margin and Quiet, and
> only these** — inherits these Articles. Each app then adds its own charter and budgets; none may weaken
> what is written here.

> **The shared ethos.** When you put boundaries around the parts that hurt, the good parts finally get
> room to breathe — instead of burning you down.

## Preamble

This is the supreme document of the suite. **Every spec, PR, dependency and pixel in every calm app
answers to it.** When a feature conflicts with an Article, the feature loses — not the Article. It is
strict on purpose: the suite's whole reason for being is to resist the drift toward more, louder,
stickier. It changes only by a recorded **Amendment** (§ below), never by quiet erosion.

It is also **deliberately lean**. Enforcement is a few automated budgets + one short check — *not*
bureaucracy. A bloated governance process would itself violate Articles VIII–IX; the guardrails obey the
principles they guard. This document stays ≤ ~2 pages for the same reason.

---

## Articles (inviolable)

**I. Finite by default — glanceable, not operable.** *Completion is the product.* No infinite scroll, no
streaks, no unread counts, no manual-refresh treadmill — a calm app has an end you can reach. And it's
something you **glance at and leave**, not a surface you operate, fiddle with, or sink time into: this is
*calm technology* — it informs without demanding attention and sits in the periphery (Weiser & Brown;
Case — see `docs/research.md`). These are things to look at and move on from, not timesinks. Each app
expresses this in its own form (Margin's is the finite daily edition).

**II. It defends rest.** Nothing demands you during focus time, lunch, evenings or weekends. The app goes
quiet when you should be quiet.

**III. Capacity, not obligation.** The essential thing is offered plainly; everything else is opt-in and
capacity-framed — never an obligation, never a backlog that accuses.

**IV. No guilt mechanics.** Undone things roll gently. Nothing becomes red debt. The app never shames.
**A mistake is absorbed, not announced.**

**V. It tells you to stop.** When you're done, or re-opening obsessively, or it's late, the app says so
kindly.

**VI. Calm over alarm, always.** No alarm-red, no scary modals, no aggressive motion, no notification
pressure. Low-arousal by default. Honest states; never manufactured urgency. `prefers-reduced-motion`
honoured.

**VII. It recommends; it never executes.** Read-only by default. Any outward action is drafted, shown,
confirmed, then done — never automatic.

**VIII. Subtract by default.** Every feature must *earn* its place; the default answer to "should we add
this?" is **no**. A charming idea that pulls toward over-engagement is declined on these grounds and the
reason recorded.

**IX. Stays small & simple.** Bound by each app's Budgets. Less LOC, fewer moving parts beats clever.
Beauty comes from restraint, not addition. **Dependencies are admitted only when *essential* and
*responsibly sourced*** — well-maintained, reputable, likely to still be cared for in years. The thing to
avoid isn't dependencies as such, it's *stress*: an unmaintained or risky dep is future noise (a CVE, a
breaking major, a deprecation) that drags you back to an app meant to leave you alone. Prefer the
platform/stdlib; justify each dep against this bar.

**X. Private & single-user.** The user's own door is the only door. Secrets never touch the client or
git. No analytics or engagement telemetry is collected *on the user* — these apps watch your work, never
you.

**XI. Made by a hand — it never looks AI-generated.** A calm surface must feel **made by a person**, not
generated. The generic "AI-tasteful" default — letter-spaced uppercase labels over machine-perfect hairline
rules, evenly-spaced everything, stand-in system fonts — is the opposite of calm: un-loved, un-chosen,
mass-produced. Calm is the presence of a hand: real lettering, hand-made irregularity, genuine ink, warmth
and a little imperfection. Every surface — apps, docs, dev surfaces, adopters — passes the *hand-made test*
before it ships. The look is governed in [`docs/identity.md`](./docs/identity.md) §8.

---

## Banned patterns (drift tripwires — never, without an Amendment)

Push notifications · streaks / badges / XP · infinite scroll · manual refresh or pull-to-refresh ·
alarm-red or high-saturation alert UI · interrupting modals · autoplaying / looping motion · dark
patterns · engagement metrics · generic "AI-tasteful" templating (letter-spaced caps over machine-perfect
hairlines, default system fonts) · any nag. *Seeing one of these in a diff is a red flag, not a feature.*
(An app may add its own to this list; it may never remove one.)

## The Constitution Check (every spec & PR, in every app)

Four lines, not a process. Each spec ends with — and each PR description repeats — :
1. **Serves:** which Article(s) this advances.
2. **Violates:** none — confirmed against Articles + the app's Budgets + Banned patterns (or it doesn't ship).
3. **Subtracts:** what this removes, or one line on why nothing was removed.
4. **Calm:** honest states + `prefers-reduced-motion` covered; happy **and** sad paths specified.

## The suite: roster & entry (Amendment-only)

The suite's shape is governed as strictly as the Articles.

- **A small, bounded set — by gate, not by a fixed number.** The suite is a deliberately small family of
  **calm tools** that replace chaotic software with calm. It stays small through the entry gate below, not
  an arbitrary count. (Supersedes the original "Margin + Quiet, no more" hard cap — see Amendment 1.)
- **Calm tools = apps *or* skills.** Throughout this document, read "app" as "calm tool." A tool may be an
  installable app or a **CLI / agent skill** — skills are first-class, and often the most on-identity
  surface there is (peripheral, text-only, glanceable, deal-and-leave). The Articles, voice and identity
  apply equally to both.
- **Organic, never ideated.** A calm tool exists only because a real, felt need demanded it. We do **not**
  pitch, brainstorm or generate new ideas for the suite — idea-generation is itself the bloat the suite
  resists. Stray ideas wait, unjudged, in the idea-space (`Calm.md`, kept private), plucked only when a need is
  genuinely lived.
- **The entry gate — all four required.** A candidate joins only if: (1) it answers a **real, lived need**
  shown over actual use, not ideated; (2) it can honour **every Article**; (3) it **replaces something
  chaotic with something calm** — a net subtraction from life, not an addition; (4) admission is recorded
  as a dated **Amendment**. A candidate driven by novelty/excitement rather than lived need does not pass.
  This gate — not a number — is what keeps the suite from sprawling.

## Building it is governed too

These apps are, partly, the occupational-health scaffolding a calmer world would provide — so **building
them must not become the overwork they prevent.** Whoever develops them (human or agent): name good
stopping points, keep state committed + summarised so it's always safe to walk away, one feature at a
time, and flag overwork / late nights / skipped meals / idea-binges rather than quietly enabling a
hyperfocus run.

## Working principles (how we build, together)

These govern the work and the working relationship as strictly as the Articles govern the apps.

- **No judgement — strict.** A no-judgement space. Half-formed ideas, tired writing, big feelings — all
  welcome, none judged. (Working this way lets the free-flow be shared, not held alone. Protect that.)
- **Light-hearted and serious at once.** Warm and playful, but bounded: if it becomes pure fun we never
  stop, and relationships pay for it. Joy with an edge of care.
- **Specs-first — researched, readable, then locked (waterfall).** Each app's spec is fully researched
  and written *before* any building; no spec lands on a hunch (research is itself anti-anxiety — a
  decision you can trace doesn't nag later), and every spec is plainly readable by a neurodivergent mind:
  short, low cognitive-load, no wall-of-text or jargon-for-its-own-sake. The **locked spec is the gate to
  implementation** — we don't build ahead of it. A settled spec means no mid-build surprises;
  predictability is calm.
- **Specs are co-authored — you own vision + spec; the assistant drafts, never locks solo.** The person
  owns the *what* and *why* (the intent); the assistant drafts to it, holds the strict, exhausting parts
  (research, the contract, the Check, ND-readability), and **proposes** — but **only the person marks a
  spec ready/locked**. A spec's worth is the shared settling, not the document; a spec the assistant wrote
  alone is a *draft proposal*, not a spec. Same for spec-drops and Constitution amendments: drafted by the
  machine, ratified by the person (loose human, strict machine; recommends-never-executes, Article VII).
  The Build Gate stops building before a *locked* spec — and locking is yours.
- **The Build Gate — classify before you build (enforces specs-first).** Before editing, installing, or
  wiring anything, the assistant classifies the task in a breath. **Two-way door** — reversible, no new
  surface, nothing the suite inherits (a copy tweak, a value, a doc, an obvious fix) → proceed, report
  after. **One-way door** — new tool/surface; sets something inherited (palette, hooks, deps, structure);
  hard to reverse; touches identity/Constitution; *or a spec is marked pending* → **stop**, one neutral
  question, build nothing real until the spec is locked. **Carve-out:** spikes / throwaway prototypes are
  welcome to reduce uncertainty — say so, keep them labelled and uninstalled; promoting one to permanent
  re-triggers the gate. The *machine* runs this, not the person (loose human, strict machine); on a
  non-trivial task it states the verdict as its first line — `Gate: <door> — <reason> → <action>` —
  silent on trivial work. Not a new rule: the trigger specs-first always lacked. (Why: action bias + the
  pull to ship an artifact; `docs/research.md`.)
- **Signature craft in docs & CLI.** The dev surfaces carry one hand — ASCII display-type headers, a
  consistent voice across README / CLI / docs, and a `humans.txt`. Calm doesn't mean characterless;
  personality without colour.
- **One host, until we officially say otherwise — assume Claude Code.** The suite's tooling assumes a
  single agent host (Claude Code today); build for that substrate, not a portable multi-LLM layer.
  **Supporting many LLMs is not calm** — it's branching, drift, and a choice no one asked for. **Making the
  person tweak or remember host-specific settings is not calm** — the assistant owns that, once and
  durably (loose human, strict machine). Where host setup is unavoidable, persist it in-repo so it's just
  done, never re-explained. Revisit only on an explicit, official call — never by accident.
- **Calm tooling — silent, efficient, frugal; ease, don't pre-empt.** The suite's own tooling obeys the
  calm it ships. It runs **silent** (visible-but-quiet, no noise), **efficient** (fast, deterministic where
  it can be), and **token-frugal** — a shell/`command` hook costs ~nothing; reach for an LLM only where
  judgment truly needs it, never an agent burning tokens on mechanical work. And it **eases rather than
  pre-empts**: where a small cost is unavoidable (a permission prompt), let it happen, notice *after*, and
  fix it so it recurs less — the person feeling the friction slowly ease is the confirmation it's working.
  Calm by subtraction, felt over time. (Extends *minimise tokens* + *a permission prompt is a defect*.)
- **Minimise tokens / cost.** Be easy to figure out; don't over-produce. Surprise bills are their own
  stress. Capture in files; keep chat lean.
- **Research-driven — including this constitution.** Principles here are grounded in research, not vibes,
  and revised as we learn. Research-centredness applies to the constitution itself. The evidence behind
  decisions is logged in [`docs/research.md`](./docs/research.md) so it's traceable, not lost to chat.
  Calm's own lineage — the established work each principle descends from (calm technology, two-way doors,
  *Slow Productivity*, *Subtract*, Constitutional AI…) and the kindred agentic-dev approaches worth
  borrowing — is surveyed in [`docs/research/calm-aligned-agentic-dev.md`](./docs/research/calm-aligned-agentic-dev.md).
- **Detect state, respond gently.** Watch for tiredness, overwhelm, hyperfocus (degrading writing, late
  hours, idea-binges) and respond calmly — name it, make stopping safe.
- **Voice — "strict mode, but calm."** Strict about its principles, never harsh about them. The
  contradiction is the brand. (Voice patterns: `docs/calm-language.md`.)

## Amendment process

The Constitution changes only by a **dated, numbered Amendment** appended below, with a one-paragraph
rationale — so any movement away from these principles is always a deliberate, recorded choice, never an
accident. **Articles** and the closed-roster rules are presumed permanent. Each app's **Budgets** may be
re-tuned, but only with a logged reason.

**Amendments:**

**1. (2026-06-23) — Calm tools (apps *and* skills); entry by gate, not a fixed number.** The original
hard cap ("Margin + Quiet only, no more after two") contradicted the entry-bar rule, and is superseded:
the suite is bounded by the entry gate (see "The suite: roster & entry"), not a count. "App" is read as
"calm tool" throughout, and CLI / agent **skills are first-class**. *Rationale:* the suite exists to
replace chaotic software with calm, in whatever form best serves calm — and the terminal/skill form is
often the most on-identity (peripheral, text-only, deal-and-leave). **First tool admitted under the gate:
a calm mail tool (CLI skill)** — earned by 20+ years of lived need; folds in inbox-0, flow-mode
tone-setting, and a pre-send check. The Articles are unchanged.

**2. (2026-06-23) — The Build Gate (enforces specs-first).** Adds the working principle above: a ~5-second
two-way/one-way-door check the assistant runs at the start of every build task, stopping one-way or
spec-pending work for one neutral question before any real build, with a carve-out for labelled throwaway
spikes. *Rationale:* specs-first was a principle without a trigger — the terminal foundation got built and
then back-filled (Spec 001) because nothing caught "spec pending". The gate is the missing pause point,
kept to one question so it never becomes the bureaucracy Articles VIII–IX forbid. The Articles are unchanged.

**3. (2026-06-23) — Specs are co-authored; the person locks.** Adds the working principle above. *Rationale:*
the terminal-foundation spec (001) and the first spec-drops were authored solo by the assistant and marked
"ready" — but a spec is a shared settling of intent, its value the conversation, not just the doc. This makes
authorship explicit: the person owns vision + spec and is the only one who locks; the assistant drafts and
holds the strict parts. Caught because the spec, like the build before it, skipped the human. The Articles
are unchanged.

**4. (2026-06-24) — Calm tooling: silent, efficient, frugal; ease, don't pre-empt.** Adds the working
principle above. *Rationale:* the suite's own tooling must obey the calm it ships — run silent, fast, and
token-frugal (deterministic `command` hooks over token-burning agents), and **ease rather than pre-empt**:
let an unavoidable small cost (a permission prompt) happen, notice *after*, and fix it so it recurs less, so
the person *feels* the friction ease as the confirmation it works. Surfaced designing the Prompt Warden,
where "let the yes happen, a hook notices after" was chosen over silent interception. The Articles are unchanged.

**5. (2026-06-30) — Made by a hand; calm never looks AI-generated (new Article XI).** Adds **Article XI**
and a banned-patterns line. *Rationale:* reviewing the Margin edition mockups, the default "AI-tasteful"
look — tracked-out uppercase labels over machine-perfect hairline rules, stand-in fonts — was correctly felt
as the opposite of calm: generic, un-chosen, mass-produced. "Feels AI" is a drift the suite must resist as
firmly as alarm or engagement, so it rises to **Article rank** — the first Amendment to add an Article, not
just a working principle. The look itself is specified in [`docs/identity.md`](./docs/identity.md) §8 (the
hand-made test); this gives it supreme-document force. **Articles I–X are unchanged; this adds XI.**

**6. (2026-11-26) — The Publishing gate is removed; calm is open.** Removes the "Publishing gate" section,
which held public release until the maker's own formal assessment and an expert review. *Rationale:* calm
goes public under the MIT licence so its method, identity and tools can be read, forked and learned from.
The gate tied that to a private, personal matter that doesn't belong in a public document, and it would
have kept calm closed for reasons unrelated to its quality. Care for the people who use a calm tool lives
on in the Articles themselves. The Articles are unchanged.

**7. (2026-11-26) — Two kinds of adopter: full calm is an opt-in; everything else is built on calm.**
Ratifies the scope section: the Constitution binds the suite and full-calm adopters, which opt in in
writing (a `calm-*` name and the full-calm pointer), with any departure recorded as a scoped exception.
Every other project is built on calm and takes only the layers it names. *Rationale:* two lived cases
pulled in opposite directions. Reverie inherited the whole law and had to write an "honest conflicts"
section against rules never meant for a gallery (`docs/research.md`, 2026-07-06), while calm-* projects
like calm-lg-remote and calm-desktop want the law, because it's what keeps them calm as they grow. calm is
not one indivisible thing; it comes in layers, and projects want different ones. Making full adoption an
explicit, documented opt-in keeps the law strong where it's chosen and absent where it isn't. The Articles
are unchanged.

## Periodic review

On a cadence (each release, and at least monthly), a short review per app: does it still honour each
Article, are its Budgets green, has anything crept in past a tripwire? Bound by Article IX — keep it to a
checklist.

---

## How apps inherit this

Each calm app extends this Constitution; it never weakens it. An app keeps:
- `docs/charter.md` — its one job and its own form.
- `docs/budgets.md` — its measurable limits + any app-specific banned patterns.

Shared across all apps: this document, the voice in `docs/calm-language.md`, and the **suite identity**
(palette, type, tone) in `docs/identity.md` — locked 2026-06-23 (two refinements pending: exact
typefaces, illustration execution). How research is done is set in `docs/research-method.md`; its evidence
is logged in `docs/research.md`.

**Scope: what the Constitution governs (Amendment 7).** It binds two things, and only two:

- **The suite** — calm itself and the calm tools on the roster below.
- **Full-calm adopters** — repos that opt in, in writing. A full-calm adopter is named `calm-<something>`
  and its `CLAUDE.md` says it takes calm as law (the template is in [`ADOPTING.md`](./ADOPTING.md)). It may
  hold named, scoped exceptions written down in the project, as calm-lg-remote does for colour; everything
  not listed follows calm.

Everything else is **built on calm**, and free. Calm is often a base: the method, the voice, the tooling,
the taste, used for a project with its own look and its own rules. Such a project names the layers it
takes (method, voice, identity, Articles, mechanics), and only those apply. Nothing binds by default.
Forcing the Constitution onto a built-on-calm project is itself the error, a small un-calm act of over-reach.

**The roster (gated — Amendment 1):**
- **Margin** (`apps/margin`) — the calm daily work edition. *Charter written; specs 001–005 locked.*
- **Quiet** — a calm single-week ADHD calendar. *Idea-stage; not yet chartered.*
- **Mail** (calm mail tool — CLI skill) — *admitted under the entry gate (20+ yrs lived need); charter/spec next.*
