# Calm

*A quiet place — ideas set down so they're safe, not lost. Nothing here is a to-do. Pluck one onto
the page when **you** choose; the rest wait without a sound.*

> The point of this space is the opposite of urgency: parked ≠ forgotten. An idea written here doesn't
> need you tonight. Lean into the good, set boundaries on the rest, pick one when there's margin for it.

**Status key:** 🌱 seed · 📋 parked · 🔭 exploring · 🚧 building · 💤 resting · ✅ shipped

---

## 🚧 Margin
*A calm "daily edition" work app — the one thing to do next, and why. Built to protect capacity, not
maximise engagement.*
- Lives in this monorepo: `apps/margin` (charter `apps/margin/docs/charter.md`, budgets
  `apps/margin/docs/budgets.md`). Shared suite layer: `CONSTITUTION.md` + `docs/calm-language.md` at root.
- Inspiration: loved **Dia's "Edition"** (a delivered, once-a-day briefing) → reimagined for work + with
  a wellbeing constitution.
- Where it's at: identity locked; specs 001–005 locked; continuing here (one tool at a time).

## 🌱 study — the calm reading room *(sibling to Margin; admitted 2026-07-03)*
*Google Reader reborn, calm: gather what you've chosen to follow, read it finite and at your pace, then stop.
The **study** to Margin's **work** — separate on purpose, so reading ranks *alongside* tasks, not beneath them.*
- Lives in the monorepo: `apps/study` (charter `apps/study/docs/charter.md`).
- **Lived need (entry gate):** decades in newsgroups / IRC / RSS / Reader — none of it still functional or calm.
- Form: a prepared reading room (not a live feed), Reader + 90s-newsboard feel, calm. Margin's **out-of-hours**
  mode points here rather than Margin becoming a weekend app.
- v1: calm reader PWA over pre-fetched content — the ai-scout digest + a small curated feed list. North star:
  the AI "knows-you / archetype" feed, and zero-config internal tools (central auth + Composio + per-user identity.md).
- Where it's at: charter **locked 2026-07-14** (§4 ingest decided via calm-council: reuse the `Signal` shape,
  own the engine, uncoupled, spike-first). Not building code yet.

## 🌱 A DS that ships usable apps — living documentation, not a static spec *(2026-07-03)*
*The principle under Margin + study: a design system shouldn't be only tokens + docs. It **ships with real,
useful apps built in it** — which are at once the canonical demonstration of the system and its living
documentation. The apps prove the DS by using it; the DS earns trust by shipping the apps. Most DSes die as a
Figma library nobody opens; this one walks around as working software.*
- Margin and study *are* calm's DS-in-practice — you learn the identity by using them, not by reading a spec.
- The same works for onboarding: new people get a small suite of genuinely useful, on-brand apps that both
  help them settle in *and* teach the design language by use, rather than a brand PDF.
- Kin: [[study]]. A strong principle — fold toward the Constitution if it holds. Seed, parked, unjudged.

## 📋 Mail *(admitted — queued behind Margin)*
*A calm mail tool as a CLI/agent skill — replaces the chaotic Gmail GUI. inbox-0 triage + flow-mode
tone-setting (type messy, intent kept, tone set) + a calm pre-send check; recommends, never auto-sends.*
- **Admitted to the suite under the entry gate (2026-06-23, Constitution Amendment 1)** — earned by 20+
  years of lived need. The first tool admitted as a *skill* rather than an app.
- Full capture: `apps/mail/NOTES.md`. Not in development — picked up after Margin.

## ✅ Calm terminal theme — first complete calm product
*A warm paper/ink terminal palette (bright, off-neon pastels) + IBM Plex Mono, matching the suite identity
— calm by default for an all-CLI working style.*
- Shipped → spec `assets/terminal/001-terminal-foundation.md`. The first "complete" calm product.

## ✅ Prompt Warden — vibe-coded → specced (a highlight)
*The first tool we evolved the calm way: replaced `remember-permissions` (vibe-coded) with a quickly-specced,
safer, shareable agent (a hook + script, ~0 tokens).*
- Shipped + installed global → source `.claude/warden/`; research `docs/research/tuning-agents.md`;
  principle = Amendment 4 (calm tooling).

## 🌱 Spec drop
*A frictionless way to set down a rough, half-formed **spec** thought mid-work and return to what you were
doing — the same capture-and-return as an idea drop, but for early spec ideas.*
- The thought lands somewhere safe; it's refined into a proper numbered spec later, via the suite's
  specs-first waterfall. Capture now, shape when there's margin.
- Parking convention: rough spec thoughts go in the relevant app's specs folder as a lightweight seed note
  (`apps/<app>/docs/specs/spec-ideas.md`), to be promoted into a numbered spec later.
- Seed only — not in development.

## 🌱 Install / onboarding flow
*Standing up the calm suite on a clean setup — a new machine, a new account, or someone else entirely.*
- Shape: clone/paste the repo → Claude reads its `CLAUDE.md` (+ a small onboarding/install doc or skill) and
  guides the setup, one step at a time.
- The opt-in step: during install, **ask** "enable calm by default?" — apply the calm working register
  globally by symlinking the repo's `CLAUDE.md` to `~/.claude/CLAUDE.md`. Default off; chosen, not assumed.
- Relates to: the calm `CLAUDE.md` and portability of the suite.
- Seed only — not in development.

## 🌱 Calm-by-default, assets earn their place
*Two facets of one principle. **Calm design is the default skin** for everything in the suite — any asset
that doesn't demand its own design system inherits this repo's. And **every asset must earn its place** —
subtract by default, keep the repo tidy.*
- The exceptions would be obvious — only ever official internal/client apps that mandate their own DS, and
  none exist yet. Until one does, calm is the default, not a choice to make each time.
- Reads like a candidate **Constitution** principle (asset hygiene + calm-design-as-default). Fold it into
  the Constitution via amendment when picked up — not edited here.
- Seed only — not in development.

## 🌱 Calm agents
*Sub-agents that are calm by construction — they read this repo's `CLAUDE.md` and inherit the register
(soft, minimal-yes, subtract-by-default), the way the idea-drop background agents already do.*
- A pattern/foundation for spawning agents that carry the calm working mode without being told each time:
  inherit the `CLAUDE.md`, the Constitution, and the calm mechanics.
- Likely builds on the existing idea-drop background-agent mechanism; may become a shared "calm agent"
  pattern/foundation later.
- Seed only — not in development.

## 🔭 Calm-sync — keep adopters in step with upstream
*A calm agent ("Renovate for calm") that keeps a CALMED downstream repo in step with calm upstream as the
conventions/identity evolve — without the PR-spam that makes ordinary update bots anti-calm.*
- **Specced (draft, 2026-06-30):** [`docs/specs/009-calm-sync.md`](docs/specs/009-calm-sync.md) — detect +
  write-back-local (no PR), a canonical inherited-surface manifest, ADOPTING.md verified against it. Awaiting lock.
- Small by design: most calm inherits **by reference** (the `CLAUDE.md` pointer reads live upstream), so only
  the copied bits (`tokens.css`, the pointer boilerplate) drift. The right analogue is Renovate *presets* /
  cruft·copier template-resync, not a dependency-bump bot — borrow only their noise-control.
- Calm shape: an **on-demand** skill (pull, not push) that diffs the adopter's copied files vs upstream and,
  if drifted, opens **one quiet PR** — batched, glanceable "what changed and why", **recommends, never
  merges** (Article VII), silent when in sync, no notifications. Absence is never debt.
- Anti-calm pitfall: a scheduled bot that PRs-per-change and pings every event — makes being-behind feel like
  debt. Avoid. Respect scoped exceptions (e.g. reverie's marker-orange) — treat local edits as "ours".
- Real adopter (reverie): inherits by pointer, overrides identity (no `tokens.css`) — so its only drift is
  the **pointer's links**, which broke when calm renamed `cli-conventions.md` → `007-…` and were hand-fixed.
  Lesson: even by-reference drifts when upstream renames/adds/removes referenced files; reconcile the link set.
- When to act (trigger): only on changes to the **inherited surface** — the pointer-linked governing files,
  the referenced convention specs, `tokens.css`, and the kit (`ADOPTING.md`/`CALMED.md`) — content *or* path.
  Silent for internal churn (research, `Calm.md`, drift/Margin specs, warden). A small **inherited-surface
  manifest** upstream doubles as the watch-list. Acting rarely, only when it matters, is what makes it calm.

## 🌱 Calm-review — does an adopter's own work still honour the Articles?
*The companion to [[Calm-sync]]. calm-sync reconciles the inherited **surface** (pointer links + copied
files); it deliberately does **not** check whether an adopter's own work satisfies a **new Article**. When the
Constitution gains an Article (e.g. XI — never looks AI-generated), an adopter's existing UI/docs may now be
out of compliance — and nothing catches that.*
- A **human review**, never an auto-audit — a calm pass that reads an adopter against the current Articles and
  *recommends* (Article VII), surfacing "this predates Article XI; worth a look" — no scoring, no nag.
- Split out of [`docs/specs/009-calm-sync.md`](docs/specs/009-calm-sync.md) (the compliance gap, deliberately
  out of that cut). Seed — not in development; promote only if the gap is felt in practice.

## 🌱 Calm reading list — liked resources, logged for the article
*An official, curated list of resources we've **liked** (videos, talks, articles) — added when one lands,
feeding the suite's reference store. A calm log: only what earned a place, never a firehose.*
- Flow: recommend freely → when one is **liked**, it graduates to the list; the rest wait, unjudged —
  the idea-space ethos, curated not accusing.
- Home (open): a `docs/reading-list.md` here — decide on pickup.
- **Candidate queue** (recommended 2026-06-28, not yet vetted):
  - [Rich Hickey — *Simple Made Easy*](https://www.youtube.com/watch?v=SxdOUGdseq4)
  - [Andrej Karpathy — *Intro to Large Language Models*](https://www.youtube.com/watch?v=zjkBMFhNj_g)
  - [Amber Case — *Designing Calm Technology*](https://www.youtube.com/watch?v=HwD03sPAX48)
  - [Sebastian Lague — *Coding Adventures*](https://www.youtube.com/c/SebastianLague)
- Seed — not in development.
- Research → `docs/research.md` (2026-06-28). Builds on [`ADOPTING.md`](ADOPTING.md) + [[Calm agents]]. Seed — not in
  development.

## 🌱 Calm companion apps — only what I've used and it helped *(2026-07-05)*
*A curated listing of small, calm, themeable apps I've personally used and genuinely benefitted from — the
same earned-a-place ethos as the [[Calm reading list — liked resources, logged for the article]], but for
apps, not talks. Kin to [[A listing of apps with added calm]] (that's repos that adopt calm; this is
third-party apps that already feel calm).*
- **Strict entry gate — all three:** (1) **lived benefit** — I've actually used it and it helped, not "looks
  nice"; (2) it **survives the Constitution** — calm, anti-engagement, glanceable/peripheral, subtracts by
  default; (3) it's **calm + themeable/skinnable**.
- Why it's calm: recommend freely, but only what earned its place graduates — never a firehose of app links.
  Finite, curated, honest — the idea-space ethos, applied to tools.
- **Confirmed (cleared the gate):**
  - **Antinote** — calm disposable scratchpad, themeable; used and loved (installed 2026-07-05).
- **Held (not yet lived — waiting, unjudged):** Tot just installed, not yet earned. My earlier suggestions
  (One Thing, Dark Noise, Portal, Pause, Dato, Diarly) are *recommendations*, not lived benefit — they don't
  belong on the list until they clear the gate.
- Home (open): probably a short `docs/` listing here, or folded with [[A listing of apps with added calm]] —
  decide on pickup.
- Seed — not in development.

## 🚧 Idea prune
*A calm ritual for tidying the idea-space (this file) itself — cull seeds that no longer earn their place,
so the board stays calm and uncluttered.*
- Specced → `docs/specs/005-idea-space-upkeep.md` (inline status-tracks-reality + a calm reconciliation pass).

## 🌱 Screenshots are calm
*A screenshot is a calm, glanceable, show-don't-tell medium — a picture lands faster and quieter than a
paragraph describing it.*
- Fits "show, don't describe": let the visual carry the point instead of narrating it.
- Seed only — not in development.

## 🚧 drift — calm generative ASCII *(the ASCII-art idea, implemented)*
*The calm suite's identity / dev-surface tooling (kin to the terminal foundation, not a roster calm-tool):
a deterministic engine for quiet code-made ASCII art (clouds, trees, a Hokusai-style wave + textures),
text set into art without shouting, logos/banners, and a Markdown-insert generator.*
- The implementation of the calm-ASCII-art idea — the FIGlet/chafa-era seed grew into a built tool.
  Spec locked → `assets/drift/docs/specs/001-drift.md`.

## 🌱 Calm mode announces itself on launch
*Calm mode should state its presence on launch — quietly — via a calm ASCII wordmark from [[drift]].*
- A soft, low-ink banner at start: you can glance and know "calm is on" without being told in prose.
- The distinction: [[drift]] is whether we *can* produce the art; this is *where* it goes — launch is the
  first placement (doc headers / READMEs may follow).
- Depends on [[drift]] for the wordmark art — thin, minimal, whitespace-heavy; calm to look at, not busy.
- Show-don't-tell: the banner is the statement, no paragraph needed.
- Plain-text one-liner now; swap in drift's wordmark when this is wired up.
- Seed only — not in development.

## 🌱 Self-citing working docs
*CLAUDE.md (and kin) link each statement to its source — the Constitution article or `research.md` entry
it comes from — so every "be calm" line is traceable, not just asserted.*
- Why it's calm: a claim you can trace doesn't nag ("was that right?"); matches the research-method ethos.
- Next: a light pass adding links; keep it from getting noisy — probably only the load-bearing lines.
  Pairs with the qualified-voice note below.

## 🌱 Qualified voice — say how sure, and why
*The assistant qualifies its statements — confidence level + source — rather than asserting flatly.
Hedging honestly is calm: it lowers false certainty and quietly invites correction.*
- Belongs with `docs/calm-language.md` (voice). Adopted in working practice now; this parks the principle.

## 🌱 Implicit reasoning vs researched reasoning *(for the article)*
*Two ways an LLM can reason a decision — and why calm chooses the second for speccing. The default is
**implicit reasoning**: the model answers from its weights — fluent, fast, confident, but opaque. No
receipts, no sources, no way for the person to check it or disagree on evidence; you trust it or you don't.
The calm research-flow does the opposite: it **combines with** the LLM but externalises the reasoning —
shows receipts (citations graded by strength), puts **human sources** in front of the person to read
themselves, flags a **verify-queue**, and hands over a **method to make an informed choice** rather than a
verdict to accept.*
- The split that matters: the machine does the fast gathering; the **human keeps the judgement**, with the
  evidence visible. A decision grounded this way is traceable and arguable-on-evidence — so it doesn't nag
  ("was that right?") and isn't re-litigated.
- Why it's the right approach to speccing: more **natural and studious** — closer to how a thoughtful person
  actually researches before deciding, and the opposite of a vibe-decided spec. The spec that follows is
  grounded, not guessed.
- Live example to cite: the spec-loop research (`docs/research/calm-spec-loop.md`, 2026-06-30) — receipts,
  graded findings, a verify-queue handed back, the human locks. The method *being* the example.
- **The division of labour.** Use the AI for its **speed** — and LLM reasoning is genuinely great at deciding
  *how to find things*, how to get to a working solution fast. But the human decides **faster** than an LLM,
  more **consistently**, and can **truly** reason. So let the AI do the gathering and the grunt work, and keep
  the deciding human. The line: **let the AI take the chore out of the work — don't let it take the work out
  of the human.**
- **The human learns along the way.** Research isn't a separate task with a hand-off — it **ends in the spec**;
  the person picks up the sources and the reasoning as they go. The learning is a by-product of the method,
  not extra homework.
- **Sharpen the tool, then point it anywhere.** What you're really honing is *your own* reasoning — the
  durable, transferable skill. Sharpen that and it applies to **anything**, not just the tech you happened to
  learn along the way. The tech is the occasion; the thinking is the asset.
- **The headline: writing specs this way isn't *faster*, it's *better*.** The speed is real but it's not the
  claim — the AI's speed goes into the *finding*, not into rushing the decision. What you get out is a spec
  that's grounded, traceable, and right — better, not just quicker. (Resists the "AI makes you 10× faster"
  framing; the win is quality, and quality is what saves the expensive cost downstream.)
- **Where the investment now pays.** Pouring *all* your time and effort into **great specs** returns far more
  than the same investment in programming skill. The leverage has moved: the AI handles the language and the
  keystrokes, so the marginal hour spent sharpening *what to build and why* beats the marginal hour spent
  sharpening *how to type it*. Invest at the layer that still compounds — the thinking, not the syntax.
- **It builds a muscle: don't default-trust the LLM.** Working this way trains the reflex the AI era most
  needs — to *not* take the model's fluent, confident answer on faith. Every pass ends with receipts to check
  and a verify-queue to work, so checking-before-believing becomes the habit, not the exception. The skill
  that compounds isn't using the LLM; it's keeping a healthy skepticism of it.
- **The AI won't reach for sources on its own — make it.** A model answers from its weights: fluent,
  confident, and often *stale*. It rarely volunteers "let me check the current docs first" — left alone it
  defaults to internal knowledge. So the human (or the harness) must **force it to consult recent,
  human-authored sources**, and do so **during planning, regularly** — not only after something breaks.
  Confirming the doc up front is cheap; discovering the assumption was wrong after three failed attempts is not.
- **Circling is the signal to research.** When the same fix fails twice, or the assumptions keep being wrong,
  that's the cue to **stop guessing and go to the authoritative source** — not to retry a hunch or make the
  person absorb the churn. *(Candidate working-principle, for you to lock: "confirm version/API claims against
  current docs before acting; auto-research on the second failure.")*
- **Lived example (2026-07-01, a small side project):** a long circular debug — a Capacitor 7 in-app plugin
  read as "not implemented on iOS" through several confident wrong guesses — collapsed the instant the *docs*
  were checked: Capacitor 6+ removed automatic registration of app-local plugins; you must call
  `registerPluginInstance` yourself. The fix was in the docs the whole time. The cost wasn't the bug; it was
  trusting the model's internal knowledge over a 30-second source check. The method *being* the example, again.
- Kin: [[Self-citing working docs]], [[Qualified voice]]; the research-flow ethos (`docs/specs/003-research-flow.md`
  — "we fact-check the AI before the spec") and `docs/research/research-principles.md` ("verify the AI's
  claims, not just the decision"). Seed — a theme for the article, not in development.

## 🌱 Incidental guardrails — the method catches what no rule was written to catch *(for the article)*
*A whole class of guardrail isn't a rule at all — it falls out of working the calm way. Because the method
makes the AI **ground in the real repo before building**, it routinely catches mistakes no one wrote a check
for. The clearest kind: **redirecting the best project fit for a feature** — stopping a good feature from
being built onto the wrong app.*
- Lived example (2026-07-14, this session): asked for an ongoing **media-ingest skill+agent** and told "we
  have a spec for this, I think." Instead of building onto the first app named, the assistant read the repo,
  found **Margin ingests work-signals, not media**, and traced the real home to the **study** app (the calm
  reading room, `feat/study`) before a line was written. The feature was right; the *place* would have been
  wrong. Screenshot captured as the artifact.
- Why it's a guardrail, not a rule: nothing in the Constitution says "check which app a feature belongs to."
  It emerged from **Build Gate → classify before building** and **reqs-before-research** — grounding first,
  so the misfit surfaced on its own. The rule is general (ground in the source); the catch is specific and
  unplanned.
- The article angle: the payoff of specs-first + verify-first isn't only better specs — it's a **standing net
  of incidental correctness**. Guessy/vibe building has no such net; the wrong-place feature just gets built.
- Kin: [[Implicit reasoning vs researched reasoning]]; Build Gate + reqs-before-research (`CONSTITUTION.md`
  Amendment 2, `research-method.md`). Seed — a theme for the article, not in development.

## 🌱 Convergent validation — a big independent project lands on the shape you designed *(for the article)*
*Quiet confirmation that an approach is right: an unrelated, wildly popular project, built by someone
credible, arrives at the **same pipeline shape** you'd already specced — without either copying the other.*
- Lived example (2026-07-14, this session): Garry Tan's (YC) `garrytan/gstack` — MIT, ~122k★ — turns out to
  be a "software factory": **Think → Plan → Build → Review → Test → Ship → Reflect.** That's almost exactly
  calm's own spec loop: **Classify → gather → draft → review → lock → hand-off**. A YC-backed, six-figure-star
  project independently reproducing the shape reads as evidence the shape is sound, not idiosyncratic.
- The nuance that keeps it honest: convergence validates the *structure*, not every choice. gstack's
  autonomous back half (`/ship` deploys, `/codex` egresses to OpenAI) runs **against** calm's
  human-gate stance ("nothing ships autonomously; the person locks"). So it confirms the pipeline and
  sharpens the divergence — same skeleton, deliberately different restraint. MIT means the front-half review
  personas (`/office-hours`, `/plan-*-review`) are lift-able as reference.
- The article angle: specced-first work earns **external corroboration** you can point to — "the method isn't
  just my taste; the market converged on it" — while still letting you say *where* and *why* you chose less.
- Kin: the calm spec loop (`docs/research/calm-spec-loop.md`). Seed — a theme for the article, not in
  development.

## 🌱 AI spikes — build the throwaway, use it now, promote only if it earns it *(for the article)*
*The Build Gate blesses named throwaway spikes; AI makes them cheap enough that "build a tool to make this
decision" and "make the decision" collapse into one sitting. The spike proves itself in-flow — and only
then, if it paid off, does it get spec'd and promoted. Faster, and safer: you keep what worked, not what
you guessed.*
- Lived example (2026-07-14, this session): the **calm-council** skill was built as a named spike, then
  immediately used to stress-test the **study** ingest fork — and that run produced the charter decision
  that got locked. It earned promotion (spec 011 + suite skill) *because* it had already paid off, not on a
  hunch.
- **The timeline, for the article — one evening, whole loop (2026-07-14):** first *used* 17:14 (study
  charter §4, still a spike) → *locked* 18:46 (spec 011 + suite skill) → *used for real again* ~20:16 on a
  **different repo's** genuine product one-way door. So **research → spike → real usage in a single ~3-hour sitting**;
  **lock → first cross-repo real use ≈ 1h 30m**; and it had already proved itself in use ~1h *before* it was
  locked. The instrument reached across the whole suite the same evening it was born — proof moving ahead of
  commitment, exactly the seed above. (Second run's own honesty note: the council converged fast on
  "adapter, not builder" — flagged as a warning on a one-way door, not a green light; a spike still gates it.)
- The speed that matters isn't "AI types faster" — it's that the loop **need → tool → use → evidence**
  closes in minutes. A spike you'd never have bothered hand-building becomes worth building, so a decision
  gets a real instrument instead of a guess.
- The safety is the Gate: the spike stays a named throwaway; promoting it re-triggers the gate → spec +
  human lock. Speed doesn't skip ratification — it moves the *proof* ahead of the *commitment*.
- Kin: [[Incidental guardrails — the method catches what no rule was written to catch]],
  [[Convergent validation — a big independent project lands on the shape you designed]]; Build Gate
  (`CONSTITUTION.md` Amendment 2). Seed — a theme for the article, not in development.

## 🌱 Adversarial self-check — make the AI argue against itself *(for the article)*
*AI's default failure is agreeableness — it confirms your framing and its own first answer. The calm move
is to force it to push back on itself: steelman the opposite, check its assumptions, treat easy agreement as
a warning. The calm-council operationalises this (independent personas on different models, anonymised
cross-review), and the value is as much in **seeing** the pushback as in the verdict.*
- Lived example (2026-07-15): curating study's feeds, the council caught its own **echo chamber** ("all
  pro-AI / pro-calm insiders, no dissent") and fixed it by adding a rigorous AI-skeptic feed (Baldur
  Bjarnason) as a deliberate counterweight. The model argued itself out of a blind spot.
- The article angle: the headline worry about AI assistants is sycophancy; the antidote isn't a smarter
  single answer, it's **structured disagreement**. Seeing the pushback is the point: made visible, it builds
  trust the tidy conclusion can't.
- Kin: the calm-council (`docs/specs/011-calm-council.md`); research-method's "don't default-trust the LLM";
  [[AI spikes — build the throwaway, use it now, promote only if it earns it]]. Seed — for the article, not in development.

## 🌱 Verified ≠ working — run the real thing; it surfaces what the check missed *(for the article)*
*A verification can pass and still miss the point. The feed research confirmed each source "resolves" (returns
a real feed) — a genuine check — yet two were **dormant** (last posts Dec 2024 / Jan 2025). Only running the
actual fetcher and looking at the output caught it. The gap wasn't a lie; it was the **wrong question** —
"does it resolve" instead of "is it alive". Observing real behaviour caught what the proxy check couldn't.*
- Lived example (2026-07-15): study's feed fetcher, first live run — 2 of 13 feeds returned 0 signals.
  Instead of assuming "just infrequent", the dates got checked → dormant → swapped for active feeds and
  re-verified. The tool earned its keep on run one.
- The article angle: the discipline isn't only "verify" — it's **verify by exercising the real thing and
  observing**, not by a proxy that looks close enough; and distrust even your **own** earlier green tick —
  re-ask what it actually proved. Extends research-method's "don't default-trust the LLM" to "don't
  default-trust your own check".
- Kin: [[Adversarial self-check — make the AI argue against itself]], [[Incidental guardrails — the method catches what no rule was written to catch]]; the `verify` skill ethos. Seed — for the article, not in development.

## 🌱 A listing of apps with added calm
*A quiet registry of the projects that have "added calm" — repos that inherit this suite's Constitution
via the one-file pointer pattern (see calm-wallpapers). Somewhere to see the family at a glance.*
- Likely a short `CALMED.md` (or a README section) here in the home repo: name, one line, link, what it
  borrows. Glanceable, not a directory to maintain — finite, like everything else.
- First entry: **calm-wallpapers**. Grows only as real projects adopt the pattern; never a wishlist.
- Relates to the 🔭 calm-software studio (the imprint) — this is its plainest, cheapest expression.
- Seed only — not in development.

## 🔭 The calm-software studio *(the org)*
*A tiny "publishing house" for calm, anti-engagement, typographic software. Each app is published under
the imprint and inherits ONE shared **Constitution** + design system; each adds its own app-specific
articles.*
- Family so far: **Margin** (work edition) · the **single-week ADHD calendar** · future calm apps.
- Shared root = the universal Articles (calm-over-alarm · subtract · stay small · private); per-app =
  the rest. Margin's `docs/constitution.md` is written to split along exactly this seam.
- **Name:** the org/imprint name is still **parked for a fresh start later** (don't re-pitch the old
  Imprint · Colophon · Fallow · Recto · Quire shortlist). This idea-space itself is named **Calm** — a real
  "calm" app already exists; that's fine, this one is a method, not a product.

## 🌱 Calm all my apps — calm-flix as a pattern *(2026-06-25)*
*Not just Netflix — the wish is to calm **every** chaotic app. calm-flix is the prototype of a repeatable
pattern: a "calm layer" laid over a noisy app — a calm-X per app, or one general calm mode.*
- What calm-flix does: a browser extension that strips a site's engagement/noise (autoplay, recommendation
  rows, urgency badges), keeps only the intentional content, and restyles the brand into a calmer identity
  — desaturated colour, warmer ground, DM Sans, reduced motion. Lives standalone in its own repo.
- The pattern underneath: the same calm layer applied to whichever app is loud, app by app.
- **Stray idea, parked unjudged** — has *not* passed the suite's organic entry gate; it waits here until a
  real lived need shows it's wanted. Not pitched, not developed.

## 🌱 Calm for kids — make your own (safe) app, with a grown-up
*Adapt calm into a gentle on-ramp to software engineering for children: a kid designs and names their own
small, safe app — icons, themes, a feature wish — with a parent supervising and guardrails on. Born
2026-07-01 from a themed TV-remote build for a child, where a kid-facing "design mission" — name it →
draw the buttons in Canva → design the app icon → propose a feature, ideas auto-saved — turned out to be
a delightful first taste of SE.*
- **Calm fit is strong:** made **by their hand** (Article XI — their drawings become the real UI; AI only
  removes the chore of tidying), **deal-and-leave** missions (Article I), no-pressure / no-wrong-answers,
  capture-and-return (this idea-space ethos), and **safe by construction** — parent supervision +
  guardrails, single-user, private, nothing outward without a grown-up (Articles VII, X).
- **Shape (seed):** a "kid mode" kit — a few calm missions + templates (name · draw→vectorize · icon ·
  propose-a-feature) a parent runs *with* a child; the child's rough drawings become real buttons/icons.
  First lived instance: that remote's design-challenge page.
- Kin: [[Calm all my apps — calm-flix as a pattern]] (calm as a repeatable layer), the "made by a hand"
  identity. Parked, unjudged — promote only if the lived need holds.

---

*Add a margin note any time. To bring one onto the page, we just decide — and it graduates to its own
repo / project.*
