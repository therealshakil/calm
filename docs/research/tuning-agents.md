# Tuning agents — which calm tooling should be an agent

**A research product** · 2026-06-24 · suite-wide
*Informs the official-research-flow + the Prompt Warden's form. A deliverable in itself — it doesn't force a spec.*

## Question

We have a pile of parked tooling drops — Prompt Warden, a research agent, the release flow, theme-sync,
remote automation, the Build Gate, calm-ASCII.
Which should be a custom **agent**, and which is calmer as a **hook**, a **skill**, or a plain **script**?
And how do we tune the agents to stay calm — silent, efficient, token-frugal?

## Method

Authoritative Claude Code docs (subagents, hooks, skills, costs), read against the calm-tooling principle
(Amendment 4: silent, efficient, frugal; ease, don't pre-empt). Sources linked below.

## The decision rule

Pick the **cheapest shape that does the job**. Cost climbs left to right:

**script → command-hook → skill → subagent.**

- **Deterministic, no reasoning?** A **script** (~0 tokens). If it should run automatically on an event,
  wrap it in a **command hook** (still ~0 tokens) — sync, validate, block, log, notify.
- **Needs Claude to reason, on demand?** A **skill** — instructions the main agent loads when relevant
  (~10–50 tokens for its description; the full text only when used).
- **Needs reasoning *and* isolation** (verbose output, web tools, parallel work, reuse)? A **subagent** —
  a full LLM context that absorbs the verbose work and returns a summary. The most expensive; reserve it.
- A standing rule the main agent should always follow → **CLAUDE.md** (no per-use cost beyond context).

Hooks are *guaranteed* — they fire on the event; skills and agents rely on the model choosing them.

## Cost, at a glance

| Form | LLM cost |
| --- | --- |
| script · command-hook | ~0 tokens |
| prompt-hook | one Haiku eval |
| skill (description) | ~10–50 tokens / session |
| skill (full, on use) | its size, once |
| subagent | a full context window |
| agent-hook | a full subagent, every fire |

## Tuning a calm, frugal agent

When a subagent genuinely *is* the right form:

- smallest capable model (Haiku for light work; Sonnet default; Opus rare) + low effort.
- minimal tool grants (an allowlist, not a denylist).
- a **tight `when-to-use` description**, so it triggers only when genuinely needed.
- quiet visibility (`statusMessage`, not noise); `async` where it needn't block.
- self-improve via `memory` or a calm log, not by re-reasoning from scratch each time.

The cheapest agent is the one you never spawn — push work down to a hook or a script wherever it's deterministic.

## Threaded operation — async hooks vs agent-threads

You can have silent, background, concurrent operation **without** making a thing an agent.
An **`async` command-hook** runs in the background, doesn't block the main thread, stays silent, and costs
~0 tokens — that *is* threaded, silent operation, just with a deterministic thread rather than an LLM one.

The split:

- **Mechanical, silent, concurrent** (Warden, theme-sync, banner) → **async hooks.** Threaded and quiet, cheap.
- **Concurrent *reasoning*** (research fan-out, multi-angle judgment) → **agent-threads** (background /
  parallel subagents, workflows). Here the parallel *thinking* earns the cost, and seeing the threads work
  is the point.

The one thing async hooks don't give: showing up as visible threads in the **agent view** — that needs
agents (a full LLM context each). So choose by *what's in the thread* — a script (cheap, silent, invisible)
or reasoning (costly, visible, worth it). Not cost alone — fit.

## Our drops, sorted

| Drop | Best form | Why |
| --- | --- | --- |
| **Prompt Warden** | command-hook + script (`Stop`) | learning from approvals is pattern-matching — deterministic, ~0 tokens; a `prompt`-hook only for rare novel cases. Not a subagent. |
| **Official research agent** | **subagent** | the one true agent here — reasoning + web tools + verbose output + isolation, returns a summary. |
| **Release flow** | skill + scripts | an on-demand procedure the main agent runs; the mechanical steps (capture, composite) are scripts it calls. No isolation needed. |
| **Theme-sync** | command-hook + script | pure file copy on edit; already a hook — promote the logic to a versioned script. ~0 tokens. |
| **Build Gate** | CLAUDE.md rule | the main agent's own reflex at task start; a tiny `UserPromptSubmit` command-hook reminder only if the doc proves soft. Not a subagent. |
| **Remote automation (Renovate)** | external (GitHub bot + Actions) | runs remotely, off the laptop — not a Claude form at all; a different category (CI). |
| **Calm ASCII / welcome banner** | **parked — not currently possible** | the [drift](../../assets/drift/engine/) engine renders the art, but Claude Code has no channel for a clean ASCII launch banner (verified 2026-06-29). A shell wrapper printing before `claude` is wiped when the TUI clears the screen on startup. A `SessionStart` hook's stdout goes only into model context (~50–100 tokens/session, invisible to the user); its `systemMessage` field *is* user-visible but renders as a styled message line, not ASCII art, and still costs tokens. Open upstream requests: anthropics/claude-code [#32221](https://github.com/anthropics/claude-code/issues/32221), [#43339](https://github.com/anthropics/claude-code/issues/43339), [#25543](https://github.com/anthropics/claude-code/issues/25543), [#51787](https://github.com/anthropics/claude-code/issues/51787). Park the launch destination until one lands; the engine stands for README/markdown/terminal-greeting use. |

## Takeaway

Only **one** drop wants to be a real agent — the **research agent** (genuine reasoning + isolation).
Everything else is calmer and cheaper as a **hook + script** (Warden, theme-sync, banner), a **skill**
(release), a **doc rule** (Build Gate), or **external CI** (Renovate).
That is the calm-tooling principle in practice: the cheapest shape that does the job, with the costly agent
reserved for genuine judgment.

## Citations

- [Subagents](https://code.claude.com/docs/en/sub-agents) — frontmatter, tools, model, isolation, cost
- [Hooks](https://code.claude.com/docs/en/hooks-guide) — events, `command`/`prompt`/`agent` types, cost, `async`
- [Skills](https://code.claude.com/docs/en/skills) — description loading, on-demand content, invocation
- [Costs](https://code.claude.com/docs/en/costs) — the form-by-form cost comparison
