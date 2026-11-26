# Calm — Research Log

> Why this exists: the [Constitution](../CONSTITUTION.md) says *every spec is backed by research, not a
> hunch* — because a decision you can trace to evidence doesn't nag later ("was that right?"). This is
> where that evidence lives, so it doesn't evaporate into chat. One short entry per researched decision:
> the question, what the evidence said, the call it drove, and the sources.

**How to add:** newest at the top. Keep each entry to a few lines. Link the doc/section the decision
landed in. If something was reasoned rather than sourced, say so honestly and mark it to verify later.

---

## 2026-07-06 · The Constitution governs calm itself — adopters aren't bound (scope clarification)

**Q:** Does the calm Constitution bind external *adopter* repos (e.g. Reverie) the way it binds the suite's
own apps? Reverie's `CLAUDE.md` / charter currently say it "inherits" the Constitution and "the choice loses"
on conflict.
**Decided (owner — Shakil, 2026-07-06):** No. **The Constitution governs calm itself only.** An adopter takes
calm as *register and inspiration*, aspirationally — not as binding law. Pushing the full Constitution onto an
adopter is **off-putting and self-defeating**: it warps the adopter into contortions to obey rules never meant
for it.
**Lived trigger:** Reverie is a magazine that wants to be as calm as possible, but *media must live somewhere*.
Treating images-only / no-video / silent / glanceable-not-operable as inviolable law (inherited from calm)
produced a spec draft padded with an "honest conflicts" section reconciling a video+audio plinth against
constraints that don't actually apply — the tell that the inheritance was mis-scoped.
**Recommend (you lock the edits):** (1) a **scope line in `CONSTITUTION.md`** — it binds the calm suite;
adopters borrow the register, not the law; (2) soften the **"add calm to a project"** pattern in adopter
`CLAUDE.md`s from *inherits / the choice loses* to *takes calm as the aim, not a gate*.
→ Related: [`docs/research/generative-drift-accepted.md`](./research/generative-drift-accepted.md) (the Reverie
work that surfaced this). Reasoned, not sourced — an owner governance call.

## 2026-07-06 · Drift you accept — the calm move when a generative tool won't obey (→ full report)

**Q:** calm's generative art is deterministic (drift: seed = instruction, full control). Reverie generates
with a tool you can't control (Midjourney) — you write intent, it returns something else. What's the calm move?
**Found (lived, one piece — not sourced):** (1) **Two kinds of drift** — *drift-you-control* (deterministic,
the tool obeys) vs *drift-you-accept* (keep what the machine gave over what you asked). Same word, opposite
pole. (2) The intent→output gap is the **exhibit, not the error** — the hands' work is *selection, not
correction*; the machine never decides. (3) **AI receipts are honest** — the reveal records poem → prompt →
accident → keeping, not just the polished end. (4) A calm video loop is a **breath, not a blend** — a
crossfade double-exposes/ghosts at the seam (and opens mid-blend at offset 0); a brief **fade to black**
avoids the overlap and clears drift's motion bar (WCAG 2.2.2).
**Hold loosely:** the loop mechanics are reproducible; *drift-you-accept* rests on one making — firm it over
the next Reverie pieces.
→ Report: [`docs/research/generative-drift-accepted.md`](./research/generative-drift-accepted.md).
Companion: [`calm-generative-art.md`](./research/calm-generative-art.md), the
[drift spec](../assets/drift/docs/specs/001-drift.md).

## 2026-07-06 · Spec Kit lately — cautionary mirror, converge is the one borrow

**Q:** calm shares Spec Kit's spec-driven spine — what's happened in the repo recently, and does any of it
change calm's method?
**Found:** Spec Kit (created Aug 2025; ~118k stars, ~20 releases in the four weeks to 2 Jul) is turning from
a scaffolder into an **orchestration platform**: a workflow engine (label-driven bug-fix/bug-test agentic
workflows, fan-out over a bounded thread pool honouring `max_concurrency`, while/do-while loops, a
community-installable step catalog), a **third-party marketplace** (extensions/presets/`specify bundle`
role-team stacks, "review source before install" disclaimer), a config-driven opt-in **auth registry**, and
heavy integration churn (added Zed + cursor-agent; retired Roo Code + Windsurf→Devin). The spine itself is
unchanged: constitution → specify → plan → tasks → implement (+ clarify/analyze/converge). The serious
critique is about **weight, not specs** — Adzic (overcorrection back toward agile-era rigidity), Fowler
(a small bug → "4 user stories, 16 acceptance criteria"; *Verschlimmbesserung*), Beck (spec-everything-upfront
assumes you learn nothing while building). calm already pre-answered these in [`calm-spec-loop.md`](research/calm-spec-loop.md)
(EARS-lite for load-bearing behaviour only, rigour scaled to the change via the Build Gate, living/write-back
specs). **Constitution parallel = coincidence** (Shakil confirmed; calm's traces to Constitutional AI + Bezos
doors, not this repo) — independent convergence = the shape is right.
**Decided (opinion — no build):** Keep the shared spine; adopt **none** of the platform (workflow engine =
the "run many agents" current already named anti-calm in [`calm-aligned-agentic-dev.md`](research/calm-aligned-agentic-dev.md);
marketplace brushes IX; bundles/auth = platform, not glance). **One borrow worth promoting:** a
`converge`/`analyze`-style **anti-drift check** — which is exactly the parked **constitution steward**
(helper, not police). Spec Kit's last month sharpens *why calm subtracts*, and validates the steward idea.
**Sources:** [github/spec-kit](https://github.com/github/spec-kit) (releases/commits/README, 2026-07-06) ·
[Spec Kit docs](https://github.github.com/spec-kit/) ·
[Fowler — SDD tools](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) ·
[Beck (Pragmatic Engineer)](https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent).

## 2026-07-05 · Atkinson Hyperlegible — kept original over "Next"

**Q:** Switch the body/UI face to Atkinson Hyperlegible **Next** (2024 successor — wider language coverage,
extended low-vision refinements)?
**Found / decided:** Judged both **side by side in calm's paper + ink at reading size** (local specimen,
light + dark, glyph-stress rows). No discernible difference in context; Shakil: "don't see any diff — original
is fine and stable." **KEEP Atkinson Hyperlegible** — no change to `identity.md` / tokens. Reconsider Next only
if broader language coverage is ever needed. Closes the audit's optional VERIFY.
**Source:** local specimen (Google Fonts — Atkinson Hyperlegible v12 vs Atkinson Hyperlegible Next v7).

## 2026-07-05 · Replacing Composio — the calmest route (research, spike next)

**Q:** The tooling audit found Composio's hosted model breaches Article X (it custodies OAuth tokens + transits
user data on third-party infra). Replace it in the calmest way — what, exactly, and how to de-risk it?
**Found:** **Direct first-party OAuth/REST per provider** is the only fully X-clean option *and* — because calm
is single-user + headless-cron — less work than it looks. The first party holding *your* token to *its own*
service is not a third party; nothing intermediary sees the data. Use the simplest credential each provider
offers: **Fathom → API key** (no OAuth, no refresh), **Slack → `xoxp-` user token** (long-lived, no refresh),
**Google (Calendar+Gmail) → one OAuth client + refresh**, **Atlassian → OAuth with rotating refresh** (persist
the new refresh token on every refresh — the one fiddly bit). Tokens in Worker secrets; rotating/refresh tokens
in encrypted KV. **Rejected:** official first-party **MCP servers** (X-clean on tokens, but wrong shape for a
cron adapter — remote JSON-RPC/OAuth-2.1 session, action-leaning vs VII, Google's still preview) and
**self-hosted Nango** (X-clean but a whole server platform to solve a scale problem calm doesn't have —
Article IX). Net new auth code ≈ low-hundreds of lines, front-loaded then stable; the "hard part" is one shared
`getAccessToken(provider)` helper. Trap to avoid: `cloudflare/workers-oauth-provider` makes you an OAuth
*server* — calm is an OAuth *client* (the simpler half).
**Decided (locked — Shakil, 2026-07-06):** REPLACE Composio with direct first-party adapters behind the existing
`SourceAdapter` (`fetch(window)→Signal[]`) seam. **Spike Google Calendar first** (exercises the full
offline-refresh path; success = a cold Worker returns real events for a window as `Signal[]`, self-refreshing,
no data leaving the Worker↔Google path). Contradicts locked Margin specs (charter, 001, 002, 003 name
Composio) → re-ratify + update after the spike green-lights. **Verify (2026-07-06 — mostly closed):**
Fathom's docs state *"anyone can browse the API docs and start building"* and keys are generated **per-user**
(Settings → API Access → Generate API Key) — **no documented paid-tier gate**; a key only reads meetings you
recorded or that were shared to you/your Team (fine — single-user, own meetings), 60 calls/min. Only the
account-level confirm remains (that the Generate control is present on Shakil's account).
**Verify sources:** [Fathom Public API help](https://help.fathom.video/en/articles/8368641) ·
[Fathom API quickstart](https://developers.fathom.ai/quickstart).
**Sources:** [Fathom API](https://developers.fathom.ai/api-reference/recordings/get-transcript) ·
[Google OAuth web-server flow](https://developers.google.com/identity/protocols/oauth2/web-server) ·
[Atlassian remote MCP (GA)](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/) ·
[Slack tokens](https://docs.slack.dev/authentication/tokens/) ·
[Nango self-hosting](https://docs.nango.dev/guides/self-hosting/free-self-hosting/configuration) ·
[Cloudflare Workers secrets](https://developers.cloudflare.com/workers/configuration/secrets/)

## 2026-07-05 · Calm diffs — for reading, not editing

**Q:** The assistant's red/green `+/-` diffs annoy — how should a change be shown for *reading* (following
along), not editing?
**Found:** Reading ≠ editing. A reviewer staging hunks needs character-level `+/-`; a person following what
changed needs *what changed and why*, glanceable. The raw red/green patch is (a) **alarm-red** — Article VI;
(b) **line-noise, high cognitive load** — R10; (c) **inaccessible** — ~99% of colour-blindness is red-green,
and the standing guidance is *never encode by red-vs-green hue alone* (add value/position/shape/markers;
Tableau, Datawrapper). The tooling world already moved past raw red/green for readability: **difftastic**
(structural, syntax-aware — ignores formatting noise, shows what *actually* changed) and **delta**
(syntax-highlighted, readable pager). **Honest nuance:** the diff that annoyed here is **Claude Code's own
edit-render**, which a calm spec can't fully restyle — so the actionable levers are (i) the assistant
*narrating* a change in calm prose rather than leaning on the raw patch, and (ii) a calm *git* reader (delta
with the paper+ink palette, or difftastic) on the dev surface.
**Decided (seed — parked):** spec-drop "Calm diffs — for reading, not editing" in `spec-ideas.md`; reqs-first
before promoting. Operationalises Article VI + R10 on the dev surface (kin to [`007-cli-conventions.md`](specs/007-cli-conventions.md)).
**Sources:** [difftastic](https://difftastic.wilfred.me.uk/) ·
[delta](https://github.com/dandavison/delta) ·
[Don't use red/green together (Tableau)](https://www.tableau.com/blog/examining-data-viz-rules-dont-use-red-green-together) ·
[Colourblindness & viz (Datawrapper)](https://www.datawrapper.de/blog/colorblindness-part2)

## 2026-07-05 · The AI-cost trend validates calm — prose-config vs engineered-infra

**Q:** A GitHub-trending roundup ([video](https://www.youtube.com/watch?v=uvKGZb8pVc8)) puts two AI-agent
discipline tools in its top 10 — what's the overlap with calm, and is either worth adopting?
**Found:** The two trending tools map onto two of calm's own working principles. **ponytail** (#2) =
*subtract by default* (Article VIII) — a prose skill (see the entry below → spec 010). **headroom** (#1
earlier in June) = *minimise tokens & over-production* — but it's **engineered infra**, not prose: it
reversibly compresses tool output / logs / RAG chunks before they hit the LLM (60–95% fewer tokens,
benchmarked flat on quality — GSM8K ±0.000, BFCL 97%), shipped as a menu-bar app, library, proxy, and MCP
server. Both are riding the 2026 "AI cost reckoning" (Uber's $1.5k/mo cap; Microsoft pulling Claude Code at
$500–2k/engineer). This **sharpens** the 2026-07-05 "principles are in the air" note: the trending space
splits cleanly — **prose-config skills** you inherit as a *principle* in a day (taste is the scarce input),
vs **engineered infra** you adopt as a *tool* and can't prose your way to. calm already *holds* headroom's
principle, but via **discipline** (files-over-chat, keep chat lean, subtract) rather than compression infra.
**Decided (opinion — no build):** No new calm spec. ponytail's lesson is already captured (spec 010).
headroom = principle already held; **not baked into the suite** (an interceptor in the request path brushes
Article X), **but viable as an optional, opt-in dependency offered at calm setup** — with the privacy caveat
stated plainly it respects Articles III (capacity, not obligation) and VIII (opt-in). Parked as a spec-drop
(`spec-ideas.md` → "Offer headroom as an optional dep at calm setup"). Worth a trial (~50% cost cut)
after checking its proxy/privacy model. The market independently arrived at two of calm's principles.
**Sources:** [trending roundup (video)](https://www.youtube.com/watch?v=uvKGZb8pVc8) ·
[headroom repo](https://github.com/headroomlabs-ai/headroom) ·
[headroom desktop](https://github.com/gglucass/headroom-desktop) ·
[Headroom — Developers Digest](https://www.developersdigest.tech/blog/github-trending-headroom-2026-06-06) ·
[AI coding costs 2026 (Morph)](https://www.morphllm.com/ai-coding-costs)

## 2026-07-05 · Minimalism skills in the wild — the Subtraction Ladder

**Q:** Is the *ponytail* skill useful to calm, and what can we learn from it (plus alternatives)?
**Found:** ponytail (DietrichGebert, MIT, ~25k stars, viral Jun 2026) is calm's build ethos packaged as an
enforceable skill: a **decision ladder** run before any code — necessity (YAGNI) → reuse → stdlib/native →
installed dep → minimal build — with guardrails that never trim validation/security/a11y. It adds intensity
modes (`lite|full|ultra`), slash commands, and impact metrics ("≈54% less code"). Alternatives: the
**Karpathy behavioural skill** (single SKILL.md, simplicity-first, *non-destructive* — mention dead code,
don't delete it) and Anthropic's official **Code Simplifier** (reactive cleanup of a diff; calm already has
`/simplify` + `/code-review`). Key realisation: these are prose-only configs — the principles calm reached
independently are already out there, and the gap between "principle" and "running config" is trivial to
fill because implementation *is* just prose instructions.
**Decided (proposed — person locks):** take the *ordered procedure*, leave the modes/metrics/ceremony/loud
framing (all un-calm). Drafted as [`010-subtraction-ladder.md`](specs/010-subtraction-ladder.md): the five
rungs + guardrails + non-goals, in calm's voice, always-on, no scorekeeping. Non-destructive (borrowed from
Karpathy). → operationalises Articles VIII/IX.
**Sources:** [ponytail repo](https://github.com/DietrichGebert/ponytail) ·
[Stackademic critique](https://blog.stackademic.com/does-the-ponytail-skill-actually-improve-claude-code-or-just-cut-its-line-count-9e2f31a3b32a) ·
[Karpathy skill (awesome-claude-skills)](https://github.com/ComposioHQ/awesome-claude-skills) ·
[Code Simplifier (Anthropic)](https://claude.com/plugins/code-simplifier)

## 2026-06-30 · The calm spec loop — harden requirements, scale to the change (→ full report)

**Q:** Best current practice for a spec / requirements-gathering loop that yields *great specs, not a burden
to build* — and what should calm change? (Four named pains: misses reqs · heavy ceremony · doesn't translate
to build · exhausting elicitation.)
**Found:** The AI-era field has converged on the exact skeleton calm already has (Requirements → Design →
Tasks → Implement + a constitution; Kiro, GitHub Spec Kit). So the gap isn't the stages — it's the
**requirements quality inside "Specify."** **EARS** (Mavin, IEEE 2009; adopted by Kiro) is the strongest fix:
constrained natural language (`WHEN/WHILE/IF…THEN/WHERE, the system shall…`) that forces the omitted edge
cases (kills *misses reqs*) and maps one-to-one to a task + test (kills *doesn't translate*). The
counter-case (Fowler, Kent Beck) is decisive and agrees rather than conflicts: **the burden is mis-scaling
and stale specs, not specs as such** — a small bug became "4 stories, 16 acceptance criteria"; heavy upfront
specs assume nothing's learned while building. **Decided (proposed — person locks):** keep the skeleton; add
an EARS-lite **Requirements** block to the template, **scale rigour to the change** (Build Gate: two-way →
a few lines; one-way → full set), keep specs **living (write-back or mark disposable)**, and keep
**elicitation ND-light** (AI drafts, person locks, one fork at a time). Net: hardens spec quality without
adding ceremony. **To prove before locking:** dogfood on **Margin 006** (the edition UI).
→ Report: [`docs/research/calm-spec-loop.md`](./research/calm-spec-loop.md). Related: [[research-principles]],
[[calm-aligned-agentic-dev]] (Harper Reed spec→plan→chunks, Spec Kit lineage).
**Verify-queue:** the "EARS reduces errors" claim (open the IEEE paper — study vs advocacy); ~~the Kent Beck
attribution~~ **confirmed verbatim** (Pragmatic Engineer interview); and the lived dogfood test — does an
EARS block *feel* lighter or heavier when you write 006?
**Sources:** [Fowler — Kiro/spec-kit/Tessl](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) ·
[EARS (Mavin)](https://alistairmavin.com/ears/) · [EARS IEEE 2009](https://ieeexplore.ieee.org/document/5328509/) ·
[Kiro specs](https://kiro.dev/docs/specs/) · [GitHub Spec Kit](https://github.github.com/spec-kit/) ·
[Augment — what SDD gets wrong](https://www.augmentcode.com/blog/what-spec-driven-development-gets-wrong) ·
[Agile Modeling — JBGE (Ambler)](https://agilemodeling.com/essays/agiledocumentation.htm).

## 2026-06-28 · Renovate for calm — keep adopters in step (calm-sync)

**Q:** How to keep a CALMED downstream repo in step with calm upstream as conventions/identity evolve —
*calmly* (update bots are notoriously noisy)?
**Found:** The sync surface is small — calm inherits mostly **by reference** (the `CLAUDE.md` pointer reads
live upstream), so only the copied bits (`tokens.css`, pointer boilerplate) drift. Right analogue = Renovate
**presets** / **cruft·copier** template-resync (conventions by reference + 3-way merge the copied files),
**not** dependency-bump bots — borrow only their *noise-control* (one batched PR, gentle cadence). **Calm
shape:** an on-demand `calm-sync` skill (pull, not push) — diff copied files vs upstream; if drifted open
**one quiet PR** (glanceable why + Constitution Check), **recommend-never-merge** (Art. VII), silent when
clean, no notifications; treat scoped exceptions as "ours". **Anti-calm pitfall:** a scheduled spam-bot that
makes being-behind feel like debt. Frugal min: live SHA / `git diff` detection (zero new files) + optional
root CHANGELOG for the "why". Parked seed → [`Calm.md`](../Calm.md); graduates to a spec if picked up.
**Real adopter (reverie, 2026-06-28):** confirms the model and corrects it. reverie inherits by **pointer**
(its `CLAUDE.md` names `therealshakil/calm` + links the governing files; rules never restated) and overrides
identity (own skate-zine palette → **no `tokens.css` copy at all**). Yet its git log shows updates pulled
**by hand**: it wired the CLI-conventions spec into the pointer when calm added it (`7b994f0`), then
**repointed to `007-cli-conventions.md`** after this session's spec-numbering renamed it (`45eaa88`).
**Refinement:** "by reference" is *not* zero-drift — the pointer's **link set + paths** drift when upstream
**renames / adds / removes** a referenced file; for an identity-overriding adopter the *whole* drift surface
is the pointer's links (not copied artifacts), and **upstream file renames are a downstream cost** (mine
today broke reverie's link). calm-sync's first job is reconciling the pointer's links, not just copies.
**When to act (the trigger):** only on changes to the **inherited surface** — what adopters actually depend
on — never the ~90% of internal churn (research, `Calm.md`, internal specs like drift / Margin /
research-flow, the warden). From `ADOPTING.md` that surface is definite: the pointer-linked governing files
(`CONSTITUTION.md`, `docs/identity.md`, `docs/calm-language.md`, `CLAUDE.md`), the referenced convention specs
(`002-calm-markdown`, `004-readme-standard`, `007-cli-conventions`, `spec-template`, `readme-template`), the
copied `tokens.css`, and the kit itself (`ADOPTING.md`, `CALMED.md`). A change *counts* if it touches that set
— **content** (a token value, an Article) or **path** (rename/add/remove, which breaks pointers — per
reverie). Frugal mechanism: a tiny upstream **inherited-surface manifest** (the canonical "what adopters
depend on" list) doubles as calm-sync's watch-list — or scope a CHANGELOG to adopter-impacting entries.
Off-surface changes stay silent. (This is what makes it calm: it acts rarely, only when it truly matters.)
**Sources:** Renovate (noise-reduction, config-presets); Dependabot (grouped updates, cooldown); cruft;
Copier (3-way update); GitHub template-repos (no native sync); reverie git log (real adopter).

## 2026-06-28 · Calm/ND commit convention + branch-squash strategy

**Q:** What commit practices fit calm + ND (style, size, grouping), and how to reconcile autopush-per-decision
with "larger feature-based commits"?
**Decided:** A **closed type list** (`feat·fix·docs·spec·research·calm·chore`) removes a per-commit decision
(anti decision-fatigue); subject ≤~50 imperative; body = **why-not-what** grouped bullets, only when needed
(trivial = subject-only); the log is externalised memory (a glanceable resume-trail). **Strategy:** auto-push
WIP to a **feature branch** (frequent checkpoints / safe stopping points), **squash to one clean feature
commit on `main` on lock** — WIP may be piecemeal, `main` stays larger-feature + glanceable; never rewrite
merged history. Assessed our 28 commits: messages + clean-trail good, but we drifted **piecemeal** vs our own
locked rule (drift ≈ 9 commits) with sprawling types. Folded into
[`007-cli-conventions.md`](./specs/007-cli-conventions.md) §Commits.
**Sources:** Conventional Commits; cbea.ms; Tim Pope (2008); atomic commits (LeanIX, Code with Jason); epage
*Curating Commit History*; checkpoint-commit patterns; ND decision-fatigue / cognitive-load (Tiimo, arXiv
2508.13171).

## 2026-06-28 · Kindred agentic-dev approaches that fit calm (→ full report)

**Q:** What existing agentic-dev approaches/articles are kindred to the calm principles — and does calm have
real lineage?
**Decided/found:** Calm has named ancestors — "calm" = Weiser & Brown (PARC 1995); Build Gate = Bezos
two-way/one-way doors; Constitution = Constitutional AI (inspiration); subtract = Klotz; sustainable =
Newport *Slow Productivity* + Agile Principle #8; ND rules ≈ arXiv "Invisible Load" (2025). Kindred working
methods to borrow: Harper Reed's spec→plan→chunks, GitHub Spec Kit, README-driven dev, Claude Code
best-practices (human-as-oversight), Anthropic "Building Effective Agents" (maybe don't build it). Anti-calm
to resist: vibe coding, run-50-agents/max-throughput, pseudo-productivity, confirmation safety-theatre.
Through-line: same bones as the field, but ND-/wellbeing-first north star. Second real run of the
[research-flow](./specs/003-research-flow.md).
→ Report: [`docs/research/calm-aligned-agentic-dev.md`](./research/calm-aligned-agentic-dev.md). Related:
[[research-principles]].

## 2026-06-24 · Calm README standard

**Q:** What's the calm, ND-friendly README form every suite tool should follow?
**Decided:** A minimal spine — Title · one plain line · optional why · **Install** · **Use** · [**Settings**]
· **Licence** — front-loaded ("above the fold"); identical heading words across tools so a reader can predict
each section (ND load-reducer); brevity ("a README is not the manual" — link out). Explicit calm cuts: no
badges, no ToC, no roadmap/status/changelog/FAQ, no per-tool contributing (link to the Constitution).
Builds on calm-Markdown. → spec [`docs/specs/004-readme-standard.md`](./specs/004-readme-standard.md) + template
[`docs/readme-template.md`](./readme-template.md).
**Sources:** standard-readme; makeareadme.com; Art of README; GitHub about-readmes; W3C clear-content +
plain-language (Siteimprove/Accesify). Note: front-loading cite = Art of README (not WCAG); makeareadme's
"too long > too short" deliberately diverged for finite calm tools.

## 2026-06-24 · Calm generative art — a code-made visual language (→ full report)

**Q:** How do we make a genuinely calm, ND-safe visual language (logo, banner, texture) *from code*, and set
text into it — given figlet/fullwidth/block-gradients all felt "not calm", and clouds/trees/Hokusai's wave
did?
**Decided (7 principles):** deterministic (seed = the instruction, LeWitt/Nake); coherence over weight
(density organised into *flow* reads as a breeze, not noise — Hobbs flow fields); the soothing dials = low
contrast + organic non-grid spacing + mid density + breathing space (fractal fluency; pattern-glare is the
risk, not bold dots); static by default (motion implied; any animation opt-in + reduced-motion); the art
reserves a cleared-*ma* clearing and the type rests in it plain (knockout+halo, Hokusai cartouche, WCAG
4.5:1); decorative + accessible (never the sole carrier); few glyphs, monochrome, in-theme. Three motifs
(clouds, trees, wave) + text treatments proven with deterministic prototypes.
**Five frugal passes**, one continued agent (art-via-code lineage → flow fields/breeze → why texture soothes
→ text integration). First real run of the [research-flow](./specs/003-research-flow.md).
→ Report: [`docs/research/calm-generative-art.md`](./research/calm-generative-art.md) · Spec: **drift**
[`assets/drift/docs/specs/001-drift.md`](../assets/drift/docs/specs/001-drift.md). Related: [[research-principles]] (verify-queue).

## 2026-06-24 · When does one frugal pass earn a second? (the escalation rule)

**Q:** Our default is one frugal pass — when is that insufficient, and how to escalate without re-opening
unbounded research?
**Decided:** One pass by default; a second *bounded* pass only when the added evidence could change the
decision. Three triggers: (a) **high stakes** — error-cost × irreversibility makes more evidence worth it
(value-of-information positive); (b) **conflict / insufficiency** — sources disagree unexplained, or the
body is too thin/weak to grade (GRADE inconsistency/imprecision); (c) **single-source** — a load-bearing
claim has no *independent* corroborator. Don't escalate when the pass already **saturated** (new searching
stopped yielding new) or both answers lead to the same reversible action. Each escalation is a *fresh
budget on one named sub-question* (satisficing, not "keep going"). Folded into the spec.
**Sources:** EVSI/ENGS value-of-information (Dartmouth; Value in Health); GRADE inconsistency/imprecision;
Denzin + Campbell & Fiske (triangulation needs *independent* sources); Glaser & Strauss saturation (PMC);
Simon bounded rationality / satisficing (SEP). → [`docs/specs/003-research-flow.md`](./specs/003-research-flow.md).

## 2026-06-24 · ND-safe & calm research methodology (the protect-the-person layer)

**Q:** How does the research *methodology itself* stay ND-safe and calm — so research doesn't become the
hyperfocus hole / anxiety it's meant to prevent?
**Decided:** A *protect-the-person* layer over the method — seven practices: (1) one step in view, all
state externalised; (2) the budget is also a **hyperfocus tripwire** (set before, if-then); (3) stop is a
**planned landing + a breadcrumb**, never a yank; (4) **the bound is the anxiety relief** (cap research,
few options, traceable closure stops rumination); (5) capacity-framed, glanceable, no manufactured urgency;
(6) every report/log **ND-readable** by construction (calm-Markdown); (7) verification **proportional +
AI-steered** (human checks only load-bearing/low-confidence claims — blanket "check everything" causes the
rubber-stamping it's meant to prevent). Through-line: the method must also be *light enough to be
sustainable*. Defined in the spec. → [`docs/specs/003-research-flow.md`](./specs/003-research-flow.md).
**Sources:** Barkley EF / Sweller CLT; ADHD hyperfocus + implementation-intentions (PMC); Iyengar & Lepper
(choice overload); Cleveland Clinic / Inflow (decision paralysis); Ryan & Deci (SDT) + Calm Tech;
W3C COGA + BDA (ND-readable); EU AI Act Art. 14 + Parasuraman & Manzey (proportional oversight).

## 2026-06-24 · Research principles → back decisions cheaply (→ full report)

**Q:** What makes research good + decisions grounded, for a flow where deciding is cheap and research is fast/frugal?
**Decided:** Six additions to our method — (1) verify the AI's *claims*, not just the decision (human opens
the primary source for load-bearing ones); (2) record the *why* (ADR-style); (3) triangulate independent
sources; (4) set the research budget up front, by stakes; (5) a decision journal (judge process, not result);
(6) make the log an **index** (cross-linked) so research compounds. Economics: cheap research is insurance
against expensive dev — stay frugal (one pass). Through-line: a structured flow *is* decision hygiene.
**Report (product):** [`docs/research/research-principles.md`](./research/research-principles.md).
**Sources:** in the report (GRADE, Popper/Farnam St, Denzin, Fowler/Nygard ADR, Kahneman *Noise*, automation-bias).

## 2026-06-24 · Tuning agents — which drops should be agents (→ full report)

**Q:** Which parked drops should be custom agents, and how do we tune calm, frugal ones?
**Decided:** Only the **research agent** wants to be a true subagent (reasoning + isolation); the rest are
calmer and cheaper as a **hook + script** (Prompt Warden, theme-sync, welcome banner), a **skill** (release
flow), a **doc rule** (Build Gate), or **external CI** (Renovate). The cheapest shape that does the job;
reserve the costly agent for genuine judgment. This is also the first **research-as-product** — the report
is the deliverable, the log keeps the trace.
**Report (product):** [`docs/research/tuning-agents.md`](./research/tuning-agents.md).
**Sources:** Claude Code [subagents](https://code.claude.com/docs/en/sub-agents) ·
[hooks](https://code.claude.com/docs/en/hooks-guide) · [skills](https://code.claude.com/docs/en/skills) ·
[costs](https://code.claude.com/docs/en/costs).

## 2026-06-24 · Calmest agent trigger → a `Stop` `command` hook that eases, not pre-empts

**Q:** What trigger for a permission-prompt warden is most calm — silent, efficient, low-token?
**Found:** Hook *type* decides cost: **`command`** (shell) ≈ **0 LLM tokens**; `prompt` (Haiku) ~50–200;
`agent` ~500–5000+. So a token-frugal warden is a `command` hook, never an LLM agent firing each turn.
Two stances: `PreToolUse` can **pre-empt** (auto-allow before the prompt — silent but *invisible*), or a
`Stop` hook can **learn after**. Routines / background agents = full-session cost, hourly minimum → overkill.
**Chosen (Shakil):** *let the yes happen* — a **`Stop` `command` hook notices after** and widens the safe
allowlist, so prompts **ease over time**; the felt easing is the confirmation (calm-tooling principle: ease,
don't pre-empt). Visible-but-quiet via `statusMessage` / `systemMessage` + a calm log. Deny/ask rules always
override a hook's allow, so security is preserved.
**Decided:** Prompt Warden = a `Stop` `command` hook (evolve the existing `remember-permissions` promoter),
~0 tokens, learns from safe approvals; never pre-empts, never weakens security. →
[`docs/specs/spec-ideas.md`](./specs/spec-ideas.md) (Prompt Warden).
**Sources:** [Claude Code hooks](https://code.claude.com/docs/en/hooks-guide) ·
[permissions (deny-first)](https://code.claude.com/docs/en/permissions) ·
[routines (cost)](https://code.claude.com/docs/en/routines)

## 2026-06-24 · Screenshot capture → native `screencapture` of the real window + composite

**Q:** What's the fully *scriptable* way to make polished, real-looking terminal screenshots (auto, no manual tool)?
**Found:** The beautify GUIs (Shottr, CleanShot, Xnapper) automate *capture* but **not** their framing — none
are scriptable end-to-end. The one genuinely scriptable path to a **real** window shot is macOS **`screencapture`**:
`-l <windowid>` keeps the genuine chrome + drop shadow (`-o` removes it), `-c` → clipboard. VHS/freeze are
scriptable but render a *synthetic panel*, not a real window (rejected for the real look). Driving it:
AppleScript via System Events to resize the window and toggle Dark mode (`set dark mode to true/false`).
Window id: scriptable terminals expose `id of window 1`; **Ghostty doesn't** (and can't resize via AppleScript)
— use the `getwindowid` helper. **Rig = the real Ghostty window** (it's the actual calm terminal and already
auto-switches light/dark), so the flow is capture → toggle OS dark → capture. The calm backdrop (background,
padding) is the one thing `screencapture` won't do → composite after, with native `sips` or ImageMagick.
Not headless: needs a visible window + one-time TCC grants (Screen Recording, Accessibility, Automation).
**Decided:** Terminal stills = `screencapture -l` of the real Ghostty window + a composite step; AppleScript
for resize + dark toggle; `getwindowid` for the id. Replaces the VHS step in the release-flow spec. Web stays
Playwright. → [`docs/specs/001-release-flow.md`](./specs/001-release-flow.md).
**Sources:** [`screencapture` flags](https://ss64.com/mac/screencapture.html) ·
[capture window without shadow (`-o`)](https://www.howtogeek.com/713725/how-to-capture-mac-window-screenshots-without-a-shadow/) ·
[getwindowid](https://github.com/smokris/getwindowid) ·
[Ghostty AppleScript — no window bounds](https://github.com/ghostty-org/ghostty/discussions/10201) ·
[Shottr URL schemes (capture only)](https://shottr.cc/kb/urlschemes) ·
[CleanShot API](https://cleanshot.com/docs-api)

## 2026-06-24 · Calm Markdown authoring style (the rules)

**Q:** Calmest, most ND-readable way to author Markdown across GitHub + the Claude Code TUI + raw `.md`?
**Found:** Author to the lowest common denominator of the three surfaces. Load-bearing calls: the TUI
flattens h2–h6 to identical bold, so depth past h2 is false structure → one h1 + h2 (h3 rare), ATX, and
carry structure in *heading wording*. "Cramped" is density → one blank line between every block; short
sentences; ≤3-sentence paragraphs; left-aligned ragged-right (Markdown default — never justify).
**Semantic line breaks** (one clause per line) in committed `.md`: CommonMark/GFM render a soft newline as
a space, so output is unchanged but diffs stay tiny — and since none of our three surfaces are PR/issue
comments, it's unconditionally safe (no carve-out). Bold only for true keywords; no italics-for-emphasis;
no `!`. Bullets only for parallel, scannable items, ≤1 nesting level, prose for connected reasoning; no
load-bearing task-lists. Inline links with meaningful labels (bare/reference links lose their label in the
TUI). Fenced code with a language tag + short lines; tables only for true tabular data, kept narrow — avoid
horizontal scroll. Measure ~60–70 chars (BDA) / 50–75 (Baymard).
**Decided:** An 8-rule calm-Markdown style guide → [`docs/specs/002-calm-markdown.md`](./specs/002-calm-markdown.md),
written in this style as its own exemplar.
**Sources:** [Google Markdown style guide](https://google.github.io/styleguide/docguide/style.html) ·
[Semantic Line Breaks (sembr.org)](https://sembr.org/) ·
[Baymard — line length](https://baymard.com/blog/line-length-readability) ·
[BDA Style Guide 2023](https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/BDA-Style-Guide-2023.pdf) ·
[Dyslexic.com](https://www.dyslexic.com/quick-guide-making-content-accessible/) ·
[iubenda — ADHD layout](https://www.iubenda.com/en/help/184233-adhd-font-2/) ·
[W3C WAI — ADHD + dyslexia](https://www.w3.org/WAI/people-use-web/user-stories/story-eight/) ·
[CommonMark soft breaks](https://talk.commonmark.org/t/default-line-break-handling-is-inconvenient/280)

## 2026-06-24 · Doc format → keep Markdown (it earns its place); "cramped" is the renderer

**Q:** Keep Markdown, or is another plain-text format calmer / more ND-readable? (AI writes it, so the test is human *reading*, not hand-writing — and the choice is cheap/reversible now.)
**Found:** Markdown earns it on the decisive constraint — it's the **only** format that renders in all three
surfaces we read: **GitHub + the Claude Code TUI + raw**. djot (CommonMark author's cleaner successor) has
the best raw readability but neither GitHub nor the TUI renders it (2 of 3 surfaces fail). AsciiDoc/RST/Org
render on GitHub but **not** in the TUI, and are noisier raw. Markdown is also the LLM's native register
(zero authoring friction). Crucially, the **"cramped" feeling is a renderer + authoring problem, not a
format one**: the Claude Code TUI flattens h2–h6 to identical bold and renders ~60% of GFM
([#26390](https://github.com/anthropics/claude-code/issues/26390)), collapsing structure into a wall of
bold — which would hit *any* format the TUI doesn't render (all the alternatives, worse).
**Decided (proposed — confirm):** keep **CommonMark/GFM Markdown**; fix "cramped" by authoring to the TUI's
renderable subset (h1/h2 + whitespace; avoid h4+, task-lists, strikethrough, nested quotes; shorter docs) —
the *calm-markdown* drop. **djot = watch-item**: revisit only if GitHub **and** the TUI both render it.
**Sources:** [TUI renders ~60% GFM / flattens headers](https://github.com/anthropics/claude-code/issues/26390) ·
[github/markup](https://github.com/github/markup) · [djot](https://github.com/jgm/djot) ·
[AsciiDoc vs Markdown](https://docs.asciidoctor.org/asciidoc/latest/asciidoc-vs-markdown/) ·
[lightweight-markup comparison](https://hyperpolyglot.org/lightweight-markup)

## 2026-06-24 · Reducing auto-yes prompts — command hygiene beats allowlist

**Q:** Why do agent Bash commands prompt despite broad allow rules, and how do we stop it?
**Found:** Claude Code's permission matcher **statically analyses** commands; it can't verify variable
expansion (`$var`), command substitution (`$(…)`), loops, unquoted globs in write-capable tools, or `cd`
mixed into a compound — those **always prompt** regardless of allow rules (flagged "simple_expansion").
Allow rules match per-subcommand prefixes, so a clean literal `gh api "…literal…"` matches `gh *` and
passes silently, but `for t in …; do gh api "…$t…"; done` can't be analysed → prompt. Subagents **inherit**
the parent allow/deny rules but write their *own* commands (and permission *modes* don't inherit). So more
allowlist doesn't help — the fix is command hygiene, propagated to agents.
**Decided:** Spawned agents follow the calm bash mechanics (one op/command, literal paths, no
`cd`/chaining/loops/substitution/`$var`/unquoted-globs) — put it in the agent's prompt. Codified in
`CLAUDE.md`; realises the *Calm agents* seed for mechanics.
**Sources:** [Claude Code permissions](https://code.claude.com/docs/en/permissions) ·
[Claude Code subagents](https://code.claude.com/docs/en/sub-agents)

## 2026-06-24 · Declaring dev/release deps — mise.toml (machine truth) + CLAUDE.md pointer

**Q:** Calmest, cross-platform way to declare + provision top-level dev/release tools (VHS, ttyd, ffmpeg, Playwright)?
**Found:** A prose dep list in CLAUDE.md *alone* is soft — unpinned, unchecked, rots silently (same failure
as any un-CI'd doc). `package.json` forces a Node identity and can't cleanly hold non-npm binaries.
Nix/devbox = reproducible but anti-calm complexity + no native Windows. **mise** (`mise.toml`) fits: one
small declarative file, pinned, cross-platform incl. **native Windows**; covers `vhs`
(`aqua:charmbracelet/vhs`), `ttyd` (`aqua:tsl0922/ttyd`), Playwright (`npm:` backend) — `ffmpeg` is the one
rough edge (conda/asdf only; pin a static-ffmpeg release or document a system fallback). Renovate can
auto-bump it.
**Decided:** `mise.toml` is the machine truth; CLAUDE.md *points* to it ("deps in `mise.toml`; run
`mise install`"), never a parallel list; optional `mise run check` fail-loud verifier. Deps OK to depend on
(dev/release-only, reputable). Informs the release-flow *How*. → [`docs/specs/001-release-flow.md`](./specs/001-release-flow.md).
**Sources:** [mise backends](https://mise.jdx.dev/dev-tools/backends/) ·
[mise install (native Windows)](https://mise.jdx.dev/installing-mise.html) ·
[npm binary distribution realities](https://sentry.engineering/blog/publishing-binaries-on-npm) ·
[devbox/Nix (no native Windows)](https://www.jetify.com/docs/devbox/installing-devbox)

## 2026-06-24 · Screenshots can be fully automated — VHS (terminal) + Playwright (web)

**Q:** For the release skill, can product screenshots be regenerated reproducibly, or must they be grabbed by hand?
**Found:** Fully for terminal, mostly for web. **VHS** (charmbracelet) renders a versioned `.tape` in a
headless terminal → deterministic PNGs; its `Set Theme {…}` JSON maps 1:1 to the Ghostty palette
(background/foreground/cursor/selection/palette 0–15) and `Set FontFamily "IBM Plex Mono"` uses the real
font, so the calm palette renders **faithfully** — own renderer, not real-Ghostty chrome (for a pixel-true
check, a one-off macOS `screencapture` of a real window is the *verification*, not the release step). Lighter
SVG alt: **freeze** (but no full 16-colour override). **Playwright** is the web answer (`emulateMedia`
light/dark, fixed viewport, animations off). asciinema+agg = recording, not regeneration (wrong workflow);
silicon = code images (wrong tool). What stays human: staging the meaningful on-screen state + one-time
taste/framing — the machine then repeats it forever.
**Decided:** Terminal shots via a committed VHS `.tape` (theme JSON generated from the Ghostty palette
file); web via Playwright. The release skill regenerates them each release; the human stages content once
as a fixture. Dep weight (VHS → ttyd + ffmpeg; Playwright → browsers) is **dev/release-only** and
reputable/active — Article IX ok. → `docs/specs/001-release-flow.md`.
**Sources:** [VHS](https://github.com/charmbracelet/vhs) ·
[freeze](https://github.com/charmbracelet/freeze) ·
[Playwright screenshots](https://playwright.dev/docs/test-snapshots) ·
[termshot](https://github.com/homeport/termshot) ·
[asciinema agg](https://github.com/asciinema/agg) ·
[macOS screencapture](https://ss64.com/mac/screencapture.html)

## 2026-06-23 · Release flow → a reproducible calm skill (reasoned · medium bar)

**Q:** A calm product's release (README, screenshots, checks) will run often — what's the reproducible form?
**Found (reasoned, form fairly settled; contents not):** Under the one-host principle (assume Claude Code),
the documented mechanism for a repeatable, assistant-run procedure is a **Claude Code skill** — packaged
steps the machine owns end-to-end, invoked identically each time, versioned in-repo. A plain checklist doc
relies on memory and drifts; a shell script can't do the judgement parts (Constitution Check, prose). A
skill can shell out for the mechanical bits and reason for the rest. The release *contents* (exact steps,
README sections) still need pinning against a second product before locking.
**Decided:** Release flow becomes a calm skill; first README instance written as a tracer
(`assets/terminal/README.md`), its section shape captured as the template. Build of the skill re-trips the
Build Gate (needs its own spec). → `docs/specs/spec-ideas.md` (Release flow).
**Sources (to verify against current docs):** Claude Code skills (Anthropic docs) — reproducible
agentic procedures; one-host principle (CONSTITUTION.md, Amendment 2-adjacent).

## 2026-06-23 · Progress bars + todo lists can be calm (reasoned — to verify)

**Q:** Can progress indicators and todo lists be *calm*, given Article I bans treadmills / count-pressure?
**Found (reasoned, lightly sourced — flagged to verify before locking):** Determinate progress + ETA cut
perceived wait and uncertainty vs an indeterminate spinner (NN/g progress-indicator guidance); calm tech
holds that peripheral status which *informs without demanding* is calm (already logged); a visible,
self-ticking task list externalises working memory (cognitive offloading — Risko & Gilbert), helpful for
ADHD. The calm conditions: finite, honest, **auto-updating (not fiddled)**, no red/urgency, no guilt on
undone items (Article IV).
**Decided:** Park as a spec-drop; treat as **reasoned, not fully sourced** — verify NN/g + cognitive-
offloading evidence and reconcile with Articles I & IV before promoting. → `docs/specs/spec-ideas.md`.
**Sources (to verify):** NN/g — progress indicators; Risko & Gilbert — cognitive offloading;
calm technology (already logged above).

## 2026-06-23 · Terminal theme decisions validated — no restart needed

**Q:** Before back-filling the terminal-foundation spec, do our already-made calls hold, or must any be redone?
**Found:** Adversarial re-check of six load-bearing calls — all hold. (1) **WCAG 2.2 AA** 4.5:1 normal /
3:1 large is still the current standard; WCAG 3/APCA is years off, not a target. (2) **Off-neon, low-chroma
pastels** reduce sensory overload — chroma is the culprit, not brightness (2025 sensory-preference study).
(3) **IBM Plex Mono** is a sound humanist mono for read-only output, ligatures irrelevant; one nuance —
dyslexia guides prefer sans for *prose*, which doesn't apply to terminal output. (4) **Warm off-white +
warm near-black** (not pure white/black) per BDA 2023 (pattern glare / Meares-Irlen). (5) On a light ground
a "bright" can't be both lighter *and* higher-contrast, so the **deeper emphasis row** is correct (Solarized
precedent). (6) Light-on-dark reads optically **bolder/wider** (irradiation illusion) — so the same mono
reads "narrower"/cramped in light mode; perception, not a metric change. **Lived use confirmed #6** (cramped
spacing observed in light mode — recorded as evidence, deliberately *not* fixed).
**Decided:** Keep all six; no rework. Captured in `assets/terminal/001-terminal-foundation.md`. Parked: optional
`font-thicken` for light-mode optical thinning (global-only; revisit if friction persists).
**Sources:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) ·
[Sensory colour preference (Nature, 2025)](https://www.nature.com/articles/s41599-025-05753-4) ·
[IBM Plex review (Typographica)](https://typographica.org/typeface-reviews/ibm-plex/) ·
[BDA Style Guide 2023](https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/BDA-Style-Guide-2023.pdf) ·
[Solarized](https://ethanschoonover.com/solarized/) ·
[Irradiation illusion](https://en.wikipedia.org/wiki/Irradiation_illusion)

## 2026-06-23 · Why we build-first, and a one-question Build Gate

**Q:** How do we stop sliding into implementation before the spec is locked, without heavy process?
**Found:** The pull is **action bias** (doing over pausing), **planning fallacy** (the upfront spec feels
like overhead), and **default-to-action under ambiguity** — all amplified in LLM assistants tuned to emit
an artifact. Lightweight counters that don't become bureaucracy: a **Definition of Ready** kept as *a few
prompts, not a stage-gate*; **shift-left** (a wrong call caught at spec time is ~100× cheaper than after it
ships); a **checklist pause point** placed exactly where the bias fires (Gawande); and a fast **two-way vs
one-way door** reversibility test (Bezos). With an explicit carve-out so it never bans legitimate
de-risking: **spikes, tracer bullets, walking skeletons, throwaway prototypes**.
**Decided:** A ~5-second **Build Gate** the assistant runs at the start of a build task — classify
trivial/two-way (proceed) vs new-tool-or-foundation/one-way or *spec-pending* (stop; one neutral question),
plus the prototyping carve-out. Parked as a spec-drop; candidate to fold into the Constitution Check via the
Amendment process. → `docs/specs/spec-ideas.md`.
**Sources:** [Action bias](https://en.wikipedia.org/wiki/Action_bias) ·
[Planning fallacy (Decision Lab)](https://thedecisionlab.com/biases/planning-fallacy) ·
[Definition of Ready (Atlassian)](https://www.atlassian.com/agile/project-management/definition-of-ready) ·
[Shift-left (Sonar)](https://www.sonarsource.com/resources/library/shift-left/) ·
[Checklist Manifesto (Gawande)](http://atulgawande.com/book/the-checklist-manifesto/) ·
[Reversible/irreversible decisions (fs.blog)](https://fs.blog/reversible-irreversible-decisions/) ·
[Tracer bullets (Pragmatic Programmer)](https://fullstackhub.substack.com/p/the-pragmatic-programmer-12-tracer)

## 2026-06-23 · Terminal palette → bright pastel, contrast-safe (ND + CLI)

**Q:** What colour treatment suits a calm terminal for an ND, all-CLI workflow?
**Found:** ND tends to prefer soft/muted (less overstimulating), but *too* washed raises scanning effort,
and neon / high-chroma opposites shimmer and disorient — the real enemy is neon, not brightness. For CLI:
aim ~4.5:1 (WCAG); blue-on-dark is the classic unreadable case; bright green/yellow/cyan collapse into each
other without real hue + lightness separation. Ghostty ships a `minimum-contrast` auto-bump.
**Decided:** Bright **pastels** — lifted, hue-separated, off-neon. The dark theme (calm-ink) carries the
true pastels (high contrast on near-black); the light theme (calm-paper) leans deeper, since pastel-on-paper
can't stay readable. `minimum-contrast = 1.1` as a backstop. Font stays IBM Plex Mono; the suite's serif
*reading* voice can be IBM Plex Serif (one superfamily) — serif has no place in the terminal itself.
→ assets/terminal/ghostty + the terminal-foundation spec (pending).
**Sources:** [Terminal colours are tricky (jvns)](https://jvns.ca/blog/2024/10/01/terminal-colours/) ·
[Ghostty config reference](https://ghostty.org/docs/config/reference) ·
[Sensory-friendly UX for neurodiverse users (UX Mag)](https://uxmag.com/articles/designing-inclusive-and-sensory-friendly-ux-for-neurodiverse-audiences)

## 2026-06-23 · Terminal font for the calm terminal foundation → IBM Plex Mono

**Q:** Which monospaced font for the calm terminal foundation, given an all-CLI agentic working style?
**Found:** Ligatures don't matter here — Shakil doesn't hand-write the code (agentic CLI does) — so favour
the most consistent, calm, well-spaced humanist mono. Reviewed via a specimen artifact in the calm palette
(light + dark). **Atkinson Hyperlegible Mono** = most on-identity (Atkinson family) + ND-hyperlegible, but
**ruled out — horizontal spacing too loose** (confirmed on the specimen). **Fira Code** = familiar from long
prior use (runner-up).
**Decided:** **IBM Plex Mono** — calm, humanist, warm-leaning, even spacing; consistent with the identity.
The terminal piece classifies as a *foundation* (substrate the skills run in), not a gated tool — to be
charter/spec'd spec-driven when picked up.
**Sources:** [IBM Plex Mono (Google Fonts)](https://fonts.google.com/specimen/IBM+Plex+Mono) ·
[Ligatures — mostly preference (Fira Code)](https://firacode.com/understanding-ligatures-in-programming-fonts/) ·
[Atkinson Hyperlegible Mono](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Mono)

## 2026-06-23 · "Read-only" is also an interaction stance (calm technology)

**Q:** What does "read-only" mean beyond data access?
**Found:** **Calm Technology** (Weiser & Brown, 1995; Amber Case, 2014) — technology that "informs but
doesn't demand our focus or attention," sits in the *periphery*, and "requires the smallest possible
amount of attention." Glanceable, ambient — not a surface you operate. (The suite is named for this.)
**Decided:** "Read-only" has **two senses**: (a) read-only on your data/sources (least privilege,
below); (b) read-only as the **interaction model** — you glance and move on, you don't operate, fiddle,
or sink time. These are things to look at and leave, not timesinks. Reinforces minimal controls and
strengthens deferring Margin's "set aside" snooze (a thing to fiddle with is a thing to sink time into).
→ Constitution Article I + Margin charter.
**Sources:** [Principles of Calm Technology (Case)](https://www.caseorganic.com/post/principles-of-calm-technology) ·
[Calm technology (Wikipedia)](https://en.wikipedia.org/wiki/Calm_technology) ·
[Calm Tech principles (Calm Tech Institute)](https://www.calmtech.institute/calm-tech-principles) ·
[We are not bad at technology (O'Reilly / Case)](https://www.oreilly.com/content/principles-calm-technology-we-are-not-bad-at-technology-technology-is-bad-at-us/)

## 2026-06-23 · Read-only as a principle (least privilege)

**Q:** Should Margin be a *principle-level* read-only tool, and why?
**Found:** Read-only is the **principle of least privilege** — it shrinks the attack surface and "blast
radius": even if compromised, a read-only integration can't alter, send, or delete anything. Over-
permissioned third-party apps are a known trust hazard ("trust transference" — users over-trust apps that
plug into Google/etc.); read-only scopes both limit damage and *earn* user trust.
**Decided:** Margin is **strictly read-only on your sources** — never writes to Jira/Gmail/Slack/Calendar
(stricter than Article VII, which permits confirmed writes). Any change to a source is something *you* do
there; Margin only reflects it. Margin's *own* local, ephemeral state (e.g. a one-day "set aside") is
allowed — that's not a write to your systems. → Margin charter + spec 004.
**Sources:** [Least Privilege (OWASP)](https://owasp.org/www-community/controls/Least_Privilege_Principle) ·
[Principle of least privilege (Palo Alto)](https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege) ·
[Read-only scoped access (Secoda)](https://www.secoda.co/glossary/read-only-scoped-access) ·
[Third-party app permissions (Paubox)](https://www.paubox.com/blog/understanding-third-party-app-integration-permissions)

## 2026-06-23 · How to rank "what to do next" (the rubric)

**Q:** What framework should the daily ranking use, and how do we keep it trustworthy?
**Found:** The Eisenhower matrix (urgency × importance) is the proven model for daily triage of ~10–50
items; weighted-scoring / RICE add transparent, comparable scores. An *explicit, shown* rubric is what
makes a "do this next" call trustworthy rather than a black box.
**Decided:** A transparent weighted rubric on an urgency×importance spine — blocks-others, time-bound /
commitment, impact, staleness, your-capacity — applied per Signal, with the reasoning shown ("+ why").
→ spec 005.
**Sources:** [Prioritization frameworks (Parabol)](https://www.parabol.co/resources/prioritization-frameworks-and-tools/) ·
[Prioritization methods (goalsandprogress)](https://goalsandprogress.com/prioritization-methods-complete-guide/) ·
[Eisenhower matrix (Asana)](https://asana.com/resources/eisenhower-matrix) ·
[RICE / WSJF (PPM Express)](https://www.ppm.express/blog/13-prioritization-techniques)

## 2026-06-23 · LLM-as-ranker — reasoning-first, structured, grounded

**Q:** How do we use an LLM to rank/synthesise reliably and transparently, without hallucination?
**Found:** Force **structured output** (a schema) for consistency; require the **reasoning before the
score** (chain-of-thought / G-Eval) — it improves alignment with human judgement and yields an auditable
trace; anchor with the rubric; ground strictly in the provided items so the model can't invent content.
**Decided:** 005 makes one structured Claude call that reasons-then-ranks over the 003 Signals *only*
(ID-referenced, so it can't invent work), emitting the hero + its reasoning + ranked rest as validated
JSON. The shown reasoning doubles as the user's trust check. → spec 005.
**Sources:** [LLM-as-a-judge primer (Arize)](https://arize.com/llm-as-a-judge/) ·
[7 best practices (Monte Carlo)](https://montecarlo.ai/blog-llm-as-judge/) ·
[LLM-as-judge guide (Confident AI)](https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method) ·
[LLM-as-a-judge (Frontiers)](https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2025.1611389/full)

## 2026-06-23 · Composio covers all five Margin sources (incl. Fathom)

**Q:** Are all five sources — Jira, Fathom, Gmail, Google Calendar, Slack — reachable via Composio,
especially Fathom (the uncertain one)?
**Found:** Yes. Composio spans 500+ apps / ~982 toolkits — Gmail (62 tools), Google Calendar (10 tools),
Slack, Jira, and **Fathom** all have toolkits. Read-only is achieved by wiring only the fetch/list/get
tools, never send/create/update/delete.
**Decided:** A uniform `SourceAdapter` seam over Composio for all five (spec 003); the Fathom-integration
open question is closed. Exact tool slugs are a build detail.
**Sources:** [Composio toolkits](https://composio.dev/toolkits) ·
[Composio Fathom toolkit](https://composio.dev/toolkits/fathom/framework/vscode) ·
[Composio Google Calendar toolkit](https://composio.dev/toolkits/googlecalendar)

## 2026-06-23 · How we research (the method itself)

**Q:** What does good research look like for this suite (Constitution R9's parked TODO)?
**Found:** Credibility is best judged by evidence *strength and absence of bias*, not by grey-vs-peer
label (authority/method/objectivity/recency/corroboration). Lived-need validation + actively seeking
*invalidation* matter most — the majority of founders build for their own problem and never check. Lean
cheap experiments (sketch, fake-door) beat opinions; community signal is for sentiment, not fact.
**Decided:** `docs/research-method.md` — proportionate bar (hard for wellbeing/ND claims, none for
trivia), a five-method toolkit, grade-by-strength, adversarial verification before locking, log
everything here, and a stop rule so research stays calm not exhaustive.
**Sources:** [Grey literature & best evidence (KTDRR)](https://ktdrr.org/products/info-briefs/KTDRR-GreyLitBrief-508.pdf) ·
[Grey literature (Cornell)](https://guides.library.cornell.edu/evidence-synthesis/grey-literature) ·
[UX for Lean Startups (Klein)](https://www.oreilly.com/library/view/ux-for-lean/9781449335007/ch01.html) ·
[Invalidation (Tomer Sharon)](https://uxpod.com/episodes/the-importance-of-invalidation-tomer-sharon-on-lean-user-research.html)

## 2026-06-23 · Paper & ink colour — warm, not white/black

**Q:** Pure white + black, or warmed? (Decide on evidence, not taste.)
**Found:** The British Dyslexia Association says avoid white backgrounds ("too dazzling") and use cream /
a soft pastel, with dark-but-not-black text on a light-but-not-white ground. Pure black-on-white produces
*pattern glare* / visual stress (Meares-Irlen) for up to ~20% of people — headaches, blur, text that
seems to move.
**Decided:** Warm off-white `#F7F4EC` + soft warm-black `#26231E` (light); warm dark-grey ground + bone
ink (dark). Warmth is functional (anti-glare), dialled to read as paper — not the editorial cream we
rejected. → `identity.md` §1; `apps/margin/docs/mockups/edition-v2+`.
**Sources:** [BDA Style Guide 2023](https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/BDA-Style-Guide-2023.pdf) ·
[BDA guide (mirror)](https://www.thedyslexia-spldtrust.org.uk/media/downloads/69-bda-style-guide-april14.pdf) ·
[Visual stress & dyslexia (Dyslexic.com)](https://www.dyslexic.com/articles/visual-stress-and-dyslexia/) ·
[Pattern glare, visual stress & dyslexia (Crossbow)](https://www.crossboweducation.com/Pattern-Glare-Visual-Stress-and-Dyslexia) ·
[Pattern glare: contrast & colour (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4621622/)

## 2026-06-23 · Body typeface — neurodivergent readability floor

**Q:** What's the hard floor for a readable body face (Constitution R10)?
**Found:** Two lead candidates — **Lexend** (tuned by reading-fluency studies; reduces visual stress;
strongest for ADHD reading fatigue) and **Atkinson Hyperlegible** (Braille Institute; every glyph
maximally distinct, lowers misreads). The three traits that matter: open letterforms, generous spacing,
distinct glyphs. (BDA also endorses plain humanist sans.) Both candidates are open-source.
**Decided:** Body = Atkinson Hyperlegible *or* Lexend (pick on specimens). ND-readability is a hard
floor, not a nicety. → `identity.md` §2.
**Sources:** [Lexend vs OpenDyslexic vs Atkinson (FocusFlow)](https://focusflowapp.in/blog/best-dyslexia-fonts-for-web) ·
[Best fonts for ADHD reading (Nook)](https://getnook.net/blog/best-fonts-for-adhd-reading) ·
[Accessible fonts (Webyes)](https://www.webyes.com/blogs/best-fonts-accessibility/) ·
[ADHD fonts & layout (iubenda)](https://www.iubenda.com/en/help/184233-adhd-font-2/)

## 2026-06-23 · Display warmth — humanist over geometric

**Q:** What carries warmth + legibility for the literary/poetic feel?
**Found:** Humanist typefaces (derived from handwriting; open counters, generous spacing) maximise both
legibility and warmth, and read as less mechanical. Humanist sans pairs naturally with an old-style serif
for editorial settings.
**Decided:** Lean humanist/warm over cold-geometric; informs the serif + hand role split. → `identity.md` §2.
**Sources:** [Humanist fonts guide (Fontfabric)](https://www.fontfabric.com/blog/typography-knowledge-humanist-fonts/) ·
[Top humanist sans (Typewolf)](https://www.typewolf.com/top-10-humanist-sans-serif-fonts) ·
[Humanist typeface guide (MasterClass)](https://www.masterclass.com/articles/humanist-typeface-guide)

## 2026-06-23 · Component library vs roll-our-own (Svelte)

**Q:** Adopt a styled design system, or build the UI ourselves?
**Found:** Styled libraries (Skeleton, Flowbite, daisyUI) impose an aesthetic you then fight with
overrides — bad for a bespoke calm identity. Headless primitives (Bits UI, Melt) give full design freedom
*and* keep accessibility (focus, keyboard, ARIA). Teams with a custom design system are better served by
headless.
**Decided:** Rent the mechanics, own the skin — own 100% of the look in our tokens/CSS; use **Bits UI**
(headless, Svelte 5) only where a component genuinely needs it (likely Quiet's calendar), lazily. →
`identity.md` §7.
**Sources:** [Svelte 5 UI libraries (cssauthor)](https://cssauthor.com/svelte-5-ui-libraries/) ·
[Headless UI for SvelteKit (ytyng)](https://www.ytyng.com/en/blog/svelte-headless-ui-library-2025) ·
[Why I stopped using a UI library (Ben-Yair)](https://medium.com/@nirbenyair/headless-components-in-react-and-why-i-stopped-using-ui-libraries-a8208197c268) ·
[When to use unstyled libraries (Lapani)](https://dev.to/webdevlapani/when-to-use-unstyled-component-libraries-instead-of-pre-styled-ui-component-libraries-16kk)

## 2026-06-23 · Illustration generation — *assessment, web-research still owed*

**Q:** How to generate the Spot / Cartoon, "Midjourney-like"?
**Found (assessment, not yet web-verified):** Midjourney has no durable official API — driving it means
unofficial Discord automation (fragile, ToS-risky → fails Article IX "responsibly sourced"). Real-API
candidates: **FLUX.1** (Black Forest Labs; open weights → a LoRA could lock a consistent "calm ink"
style), **gpt-image-1**, **Google Imagen**. The hard risk is day-to-day style consistency.
**Decided (provisional):** Parked for the spec phase. Calm-bounded approach (one-per-edition, no reroll,
hand-made fallback); likely hybrid (hand-made default + generative for the Cartoon). Not Midjourney. →
`identity.md` §3.
**To verify:** run a real model/pricing search + a style-consistency spike before committing.
