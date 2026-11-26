# Suite spec-drops (parked)

Rough, suite-level spec ideas not yet promoted to a numbered spec. Each names the need and (where done)
its research. Promote via the normal flow; Constitution-level changes go through the Amendment process.

---

## Constitution steward — keeps calm true to its Constitution (catches breakage + slippage)

**Promoted (2026-11-26):** now spec [`015-constitution-steward.md`](./015-constitution-steward.md), locked and built.
The seed below is kept for its history.

**Idea-drop (2026-07-05):** an agent that runs the **Constitution Check** *for real* — auditing work against
the Constitution to catch **breakages** (a clear Article violation) and **slippages** (quiet drift toward
one). The Check exists per spec/PR today, but it's author-run and honesty-dependent, so violations still
land: the 2026-07-05 tooling audit found **Composio breaching Article X inside three locked Margin specs**.
That's the proof — a standing, independent auditor would have caught it at lock, not months later.

**Why:** so Shakil doesn't have to run the checking himself, every time. It's **loose human / strict
machine** (`CLAUDE.md`) — the tiring, repetitive compliance-checking is exactly the strict work the machine
should carry. A helper, not a guard.

**Rough shape (seed):** a **read-only** helper (Article VII — recommends, never executes) that reviews a
target — a spec, a PR diff, a proposed dep/tool, or the whole suite — against the **Articles + Banned
patterns + each app's Budgets**, and returns a calm findings report: each finding cites the Article, ranks by
severity (breakage vs slippage), and names the fix. Never edits anything; never blocks silently.

- **Two triggers.** On-demand ("check this spec / diff / tool choice") and periodic (a suite-wide
  constitutional review — the Constitution already mandates a *Periodic review*; this is its helper).
- **How firmly it helps** (spectrum, shared with the Build Gate seed below): doc/ritual → **agent** (invoked)
  → **hook** (fires on its own). An invoked agent inherits the "forgot to check" failure, so the robust form
  **pairs the agent with a hook** that runs it at the moments that matter — spec lock, PR open, dep add — so
  the checking happens *for* him without him remembering to ask.
- **Register — a helper, not police.** No authority/alarm framing — no "police" / "officer" / "enforcer". A
  slippage is **surfaced, never shamed** (Article IV — no guilt); the report is finite and glanceable
  (Article I); it validates *before* prescribing. **Name: Constitution steward** (plain descriptor: *the
  Check, as an agent*).

**Accepted (2026-07-05): one *calm agents* family — helpers.** The **Constitution steward**, the **Build
Gate** helper (enforcement-form seed below), and the **Official research agent** are facets of one family:
agents that carry a calm reflex so the person doesn't run it by hand. **ai-scout v2** is the forward-writing
sibling (writes calm forward); the steward guards calm from regressing. Spec them together, as helpers — not
separate tools.

**Next (reqs-first):** decide scope (audit-what, which triggers, agent-vs-hook pairing) and the name; then
spec. Building trips the Build Gate (new enforcing surface the suite inherits). Evidence: the tooling audit,
`research.md` 2026-07-05. Reasoned seed.

---

## ai-scout v2 — learnings reflected back as PRs (shape approved)

**Moved (2026-11-26):** the scout now lives in [calm-research](https://github.com/therealshakil/calm-research)
(spec 001 + Amendment 1, locked; built). It runs weekly in the cloud. The seed below is kept for its history.

**Idea-drop (2026-07-05, shape approved by Shakil):** grow [ai-scout](../../.claude/skills/ai-scout/SKILL.md)
from *a digest he reads* to *learnings folded back into calm*. Same scanner + lens; a new output: when a
week's signal genuinely should change calm, it opens a **draft PR** with the learning already written —
exactly the loop done by hand this session (research entry → parked spec-drop → article note).

**Approved shape:**
- **Write envelope (his #1):** a PR may add `research.md` entries, the weekly digest, **park** spec-drops in
  `spec-ideas.md`, and add article notes. **Never** a numbered/locked spec, `CLAUDE.md`, or the Constitution;
  never straight to `main`. Promoting a parked drop to a real spec stays a human-initiated, co-authored act.
- **Not a chore** (the load-bearing constraint — a queue of waiting PRs is the unread-count dread the suite
  refuses): **silent by default** (most weeks no PR — honest cut); **one batched PR**, never a stream; **you
  accept or close, never edit**; **ignorable at zero cost** (same learnings are in the digest); **rolls
  gently** — waits quietly, no red, auto-closes when stale (**Article IV**), never a backlog.
- **Surfaced in calm's status update** (Shakil's ask): a rare pending learning-PR shows up as a calm,
  glanceable line in calm's status — not a GitHub check. *Dependency:* that status surface doesn't exist yet
  — it's the parked **[[Calm progress + todo]]** concept below. Interim: surface the pending PR as a line in
  the latest digest until the status surface lands.
- **Cadence:** folded into the existing weekly scout run (no second rhythm).

**Calm fit:** a draft PR *is* the calm form of "recommend, never execute" (**Article VII**) — it waits, you
lock. Kin to the parked *Official research agent* seed (method) and the *Calm progress + todo* seed
(surfacing). **Home:** the skill lives on `feat/ai-scout`; the full spec belongs there, with the skill.

**Next:** write the full spec (reqs-first) on `feat/ai-scout`; Shakil locks. Building trips the Build Gate.

---

## Calm diffs — for reading, not editing

**Idea-drop (2026-07-05):** the assistant shows changes as red/green `+/-` patch diffs — an *editing*
surface (for staging hunks). But when Shakil reads them he's **following along**, not editing. For reading,
that patch is alarm-red (**Article VI**), line-noise (**R10** cognitive load), and red-green-inaccessible
(~99% of CVD is red-green). Reading and editing want different renders.

**Rough shape (seed):** a calm "reading diff" on the dev surface —
- **Narrate over patch.** Default to a short *what changed + why* in calm prose (the assistant already can);
  keep the raw patch available, not the default.
- **When a diff is shown, no alarm-red.** Use the suite palette (ink on paper + the one clay accent); encode
  add/remove by **value/marker/position**, never by red-vs-green hue alone. Align by structure, drop
  pure-formatting noise (the **difftastic** / **delta** lesson).

**Honest limit:** the annoying render is **Claude Code's own** edit-diff, which a spec can't fully restyle —
so the levers are (i) how the *assistant narrates* changes, and (ii) a calm *git* reader (delta w/ paper+ink,
or difftastic) for terminal diffs. Research: `research.md` 2026-07-05.

**Next (reqs-first):** decide the scope — a narration convention (assistant reports changes in prose), a
terminal/tool config (calm delta/difftastic as the pager), or both — then promote. Kin to
[`007-cli-conventions.md`](./007-cli-conventions.md); building trips the Build Gate. Researched seed.

---

## Offer headroom as an optional dep at calm setup

**Idea-drop (2026-07-05):** during calm setup / adoption (pairs with [`006-adopting-calm.md`](./006-adopting-calm.md)),
**offer** [headroom](https://github.com/headroomlabs-ai/headroom) as an *optional, opt-in* dependency — it
reversibly compresses agent tool-output/logs before they hit the LLM (60–95% fewer tokens, benchmarked flat
on quality), ~50% cost cut on the plan you already pay for. Directly serves calm's *minimise tokens &
over-production* principle by infra rather than discipline.

**Why opt-in-at-setup, not baked in:** baked-in would brush **Article X** (it's an interceptor in the
request path — secrets/work transit a third layer). Offered, opt-in, at setup, **with that privacy caveat
stated plainly**, it respects **Article III** (capacity, not obligation) and **VIII** (opt-in earns its
place). The person chooses, informed. Never on by default, never silent.

**Next (reqs-first):** decide the offer surface (a line in the adoption kit / a setup prompt), the exact
caveat wording, and whether calm endorses a version/config. Research entry: `research.md` 2026-07-05. Seed.

---

## Build Gate — ratified (Amendment 2)

Ratified (2026-06-23): the one-question, specs-first gate — a `CONSTITUTION.md` working principle +
**Amendment 2**, with the ritual in `CLAUDE.md` and research in `research.md`. Classify two-way (proceed,
report) vs one-way (stop, spec first), with a carve-out for labelled throwaway spikes.

**Open question — enforcement form.** Today it is a doc + ritual (the assistant states the verdict — a
reminder, not a guard). A skill is the wrong primitive: the gate is a reflex, not a procedure, and a skill
is invoked at the model's discretion, so it inherits the same "forgot to check" failure. Real enforcement
needs a hook that fires on its own — a `UserPromptSubmit` hook injecting "classify first" each turn, or a
`PreToolUse` hook blocking an edit until classified (strongest, but naggy and slower — an Article IX
tension). Escalate doc → hook only if the ritual proves too soft; whatever gets built is a new surface, so
it trips the gate and wants its own spec.

---

## Release flow — promoted

Promoted to a spec: [`001-release-flow.md`](./001-release-flow.md) — the calm release flow (Constitution Check +
verify gates → product README → light/dark screenshots → version/tag → `humans.txt` → one summary).
Locked, co-authored.

---

## Calm progress + todo for long-running tasks

**Need:** Long tasks (research sweeps, multi-step builds) can feel like silence-then-dump. CLAUDE.md
already asks for periodic progress + ETA. A determinate **progress bar** and a visible **todo/checklist**
can themselves be calm — they cut uncertainty and externalise working memory — but only if they stay
glanceable and never become an operable treadmill.

**Reasoned basis (to verify before promoting — not yet fully sourced):** determinate progress + ETA reduce
perceived wait and uncertainty vs a blank spinner (Nielsen Norman Group progress-indicator guidance); calm
tech = peripheral status that informs without demanding (Weiser/Case — already logged); a self-ticking
task list offloads working memory (cognitive offloading; Risko & Gilbert), which helps ADHD especially.
**Tension to resolve:** Article I bans the "manual-refresh treadmill" and count-pressure, Article IV bans
guilt on undone items — so any progress/todo must be finite, honest, **auto-updating (not fiddled)**, no
red, no urgency, no shame on incomplete.

**Shape:** for a long task, show determinate progress + rough ETA and a finite todo that ticks itself;
collapses to nothing when done.

**Next:** verify the NN/g + cognitive-offloading evidence, reconcile against Articles I & IV, then spec.

---

## Integrate theme-sync into the repo

**Need:** theme-sync today is an inline `cp` one-liner buried in `.claude/settings.json` (a `PostToolUse`
hook copying `assets/terminal/ghostty/*` into `~/.config/ghostty/themes/` on edit). That is hidden,
un-versioned-as-code, host-specific (Claude Code only), and untestable — the kind of brittle machinery
Article IX calls future noise. Make it a **first-class repo capability**.

**Rough shape (seed):** a small, versioned script in the repo (e.g. `assets/terminal/sync.sh`) that does
the copy idempotently and safely (only the known theme files). The hook just calls it; the same script is
runnable by hand and by the install/onboarding flow ([[Install / onboarding flow]] seed). Scope is the
palette sync only — the Ghostty config lines + Claude Code `theme: auto` are one-time setup that belongs to
install, not the per-edit sync.

**Calm checks:** it writes to `~/.config` (the user's own machine, opted-in setup — Article VII ok); keep
it idempotent, name only the files it touches, no surprises; lives with the terminal (`assets/terminal/`)
when promoted.

**Next:** decide script vs keeping inline (is the one-liner actually fine?), then — if promoted — a small
spec; building it trips the Build Gate (new surface). Reasoned, not researched.

---

## Remote calm automation (Renovate + GitHub Actions)

**Need:** Maintenance that needs the laptop open isn't calm. Run chores on the **remote (GitHub)** so they
happen without you. Two facets: (1) **Renovate** opens PRs that bump the dep manifest (`mise.toml`) — deps
stay current on their own; (2) GitHub Actions could run release/check chores remotely.

**Principle to capture — deps evolve and try to shed themselves.** A dep is adopted provisionally, kept
current (Renovate), and **removed when it stops earning its place** — Article IX made active, not static.
Candidate Article IX refinement (ratify via Amendment, not unilateral).

**Calm checks:** PRs recommend, never auto-merge (Article VII — you confirm); quiet cadence, batched, no
nagging; nothing that pressures you to act.

**Next:** research Renovate-for-mise config + a calm cadence (grouping, schedule, automerge off); then spec.
Reasoned seed.

---

## Calm design for plain markdown — promoted

Promoted to a spec (2026-06-24): [`002-calm-markdown.md`](./002-calm-markdown.md) — an 8-rule calm-Markdown
authoring style, researched end-to-end. Locked; style in force. (Format question resolved there too:
Markdown earns its place; djot is a watch-item.)

---

## Prompt Warden — built & installed

Built and installed globally (2026-06-24): a hook + script (~0 tokens) that eases repeated safe permission
prompts. Source `.claude/warden/`; installed at `~/.claude/warden/`; research
`docs/research/tuning-agents.md`; principle = **Amendment 4**. Replaced the vibe-coded `remember-permissions`.

---

## Official research agent (a standard calm researcher)

**Idea-drop:** a reusable, official research subagent for the suite — the calm way we always research,
packaged: reqs-first (per `research-method.md`), grade-by-strength, adversarially verify before locking,
cite sources, log to `research.md`, and use calm bash hygiene. So research is consistent and on-method, not
improvised per-spawn. Pairs with the Calm agents seed (agents inherit the register). Reqs to confirm before
building (per the reqs-before-research rule). Reasoned seed.

---

## Official research flow — promoted

Promoted to a spec (2026-06-24): [`003-research-flow.md`](./003-research-flow.md) — research as a product (a frugal,
ND-safe flow with an escalation rule; a research-drop kicks it off and needn't end in a new spec).
Locked, co-authored.

---

## Logs + data live private, never in the (maybe-public) repo

**Need:** log files and generated data shouldn't pollute the calm repo — and, the real driver, **they must
be private.** This repo may not always be private (it could be published one day); anything revealing —
usage logs, patterns, personal records — must not live in version control. Extends CLAUDE.md's "sensitive
context isn't in this repo," **Article X** (private, single-user), and **Article IX** (stays tidy).

**Thinking (reqs-first, options to decide):** a calm tool's runtime data/logs go to a **private data home
outside the repo** — the Warden's log already does this (`~/.claude/warden/log.md`), a good precedent.
Options: (a) per-tool under `~/.claude/<tool>/`; (b) an **XDG data dir** (`$XDG_DATA_HOME/calm/`, i.e.
`~/.local/share/calm/`); (c) a **separate private store/repo** if data must persist or sync. The code repo
holds only calm artifacts (code, specs, docs) — never logs or data.

**Design rule:** assume the code repo could go public — keep all private + runtime data out, by default.

**Next:** decide the data home (likely XDG or `~/.claude/<tool>/`); make it the convention. The Warden is
the first instance and already compliant (log lives in `~/.claude/`, gitignored in-repo). Reasoned seed.

---

## Frictionless inheritance — promoted

Promoted to a spec and built: [`006-adopting-calm.md`](./006-adopting-calm.md) — a small static adoption kit
(`ADOPTING.md` + a `CLAUDE.md` pointer template + `tokens.css` + the `CALMED.md` registry) so a new repo
inherits calm point-and-copy, no analysis pass. Locked, co-authored. The lesson outlived the retired
calmed-Dia kit that drove it.

---

## Downstream contributions — promoted

Promoted to a spec (2026-06-28): [`008-downstream-contributions.md`](./008-downstream-contributions.md) —
author a calm-worthy pattern upstream mid-flow (in calm, the true source) and read it back live downstream
(inherit-by-reference), with a report-drop fallback for no-context-switch. Single-user; not PR-based.
Draft, co-authoring.

---

## Calm app icons (dock / home-screen)

**Seed (parked, not in development):** guidelines for what a *calm* app icon is, and how those icons are
generated/produced for calm apps — the icon equivalent of the illustration route ([`identity §3`](../identity.md))
and the hand-made test ([`identity §8`](../identity.md) / **Article XI**). One consistent, lovely, calm app
icon per calm app — the dock / home-screen kind — coherent as a family across the suite (one identity, all apps).

**Rough shape (light, uncommitted):** likely monochrome single-ink, Peanuts-gentle, visibly hand-made,
never looks AI-generated; a shared family look so the suite reads as one on a dock/home screen. A generation
route is possible (cf. Margin's [`008-illustration.md`](../../apps/margin/docs/specs/008-illustration.md)),
with a graceful hand-made fallback — but whether generative is even essential is an open Article VIII
question, same as illustration.

**Next:** shape into a numbered suite spec later, reqs-first. Seed only.
