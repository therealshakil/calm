# Where calm meets the industry — the field is converging on bets calm already made

**A research product** · 2026-07-14 · suite-wide
*Extends [`calm-aligned-agentic-dev.md`](calm-aligned-agentic-dev.md) (lineage) with a 30-day confirmation
scan. A deliverable in itself — it forces no spec. Living doc: re-run the scan, append a dated section.*

## Question

Six weeks after we established that calm has named ancestors, is the wider field *moving toward* calm's
bets — or away from them? And can we show the edge is **confirmation, not copying**: independent reasoning
that the industry then validates, with the confirmation loop itself automated and the human still leading?

## Method

One frugal pass over the last 30 days via the automated field scan (`/last30days`, 4 sources: GitHub, Reddit,
Hacker News, YouTube) plus three web supplements. Graded by strength; single-source claims flagged. This
*is* the point being made: the scan is a machine doing the reading; the synthesis and the lock stay human.
(X/Twitter was not sampled this run — fastest-moving chatter under-represented.)

## Findings — the market moved calm's way

**Spec-driven development is now the mainstream frame, not the fringe.** Every major tool has shipped an SDD
flavour — GitHub Spec Kit, AWS Kiro, Cursor, OpenSpec, BMAD, Tessl, Google Antigravity. The framing has
hardened to "the spec is the artifact and the code is the build output," with GitHub reporting Spec Kit teams
ship with ~an order of magnitude fewer regenerate-from-scratch cycles. **Confirmed** — this is our
[`calm-spec-loop`](calm-spec-loop.md) and specs-first, now the industry default rather than a contrarian
stance.

**Skills became a portable open standard.** `SKILL.md` was published as a cross-engine open standard at
agentskills.io (Dec 2025); OpenAI and Microsoft integrated within 48 hours, and the same file now runs
unchanged across Claude Code, Codex, Cursor, Gemini CLI and 28+ tools. **Confirmed.** This is calm's
inherit-by-reference / portability instinct arriving as an industry contract — a calm skill is now a
cross-suite asset by construction.

**The authoring craft consolidated on subtraction.** The published best practices (Claude Platform docs;
`mgechev/skills-best-practices`) now agree: three-tier progressive disclosure (load ~100 tokens at startup,
body only on match, deeper files on demand), "one skill, one verb," description-as-routing-rule, and
deterministic work pushed into scripts rather than improvised. **Confirmed** — this is the
[Subtraction Ladder](../specs/010-subtraction-ladder.md) and loose-human/strict-machine in another
vocabulary.

**The loudest pain is exactly what calm designed against.** The most-reacted items of the window are not
features but fatigue: Anthropic's own AskUserQuestion 60-second timeout drew 409 reactions and a "baby-sit
everything" backlash; a Codex reasoning-drift issue drew 422. **Confirmed** — calm's front-loaded oversight
(lock the spec, then proceed silently), no-manufactured-urgency register, and easy stop/resume are a direct
answer to a pain the field is now feeling out loud. Confirmation-heavy "ask the human everything" is the
anti-pattern; calm already rejected it.

**Counter-currents persist.** "Agentic" is now a product adjective (Sonnet 5 launch), and swarm/max-throughput
framing continues — against subtract, frugal, sustainable. Calm's resistance to this remains distinctive, not
consensus.

## Synthesis — the through-line

The field is converging on calm's structural bets (spec-first, human-decides, portable skills, subtract) while
diverging on its *values* (attention, sustainability, ND-first). That gap is the moat: **same bones, calmer
values.** Crucially, we did not arrive here by copying — the [June lineage scan](calm-aligned-agentic-dev.md)
reasoned to these positions from first principles and named the ancestors; this scan is the industry
*confirming* them a month later.

And the confirmation itself is automated. `/last30days` did the reading; `research-method.md` set the
discipline; a human reads the synthesis and decides what to lock. That loop — **confirm + research + R&D +
learn, on rails, human brain still leading** — is the actual product claim. The edge is not a single insight;
it is a compounding, low-effort way to keep proving we are on the cutting edge without chasing it.

## Citations

- SDD is the default — [DeepLearning.AI](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents) · [Sakasegawa workflow survey](https://nyosegawa.com/en/posts/coding-agent-workflow-2026/) · [BCMS SDD guide](https://thebcms.com/blog/spec-driven-development) *(triangulated)*
- SKILL.md open standard — [agent-skills open standard](https://codex.danielvaughan.com/2026/05/05/agent-skills-open-standard-portable-skills-codex-cli-cross-agent/) · [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) *(triangulated)*
- Authoring best practices — [Claude Platform docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) · [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) *(triangulated)*
- Portability as real work — [craftkit#142](https://github.com/sungjunlee/craftkit/issues/142) *(single source — illustrative)*
- Babysitting / drift pain — [claude-code#73125](https://github.com/anthropics/claude-code/issues/73125) (409 reactions) · [openai/codex#30364](https://github.com/openai/codex/issues/30364) (422 reactions) *(primary, high-engagement)*

## Confidence

Safe to lock: SDD-as-default, SKILL.md open standard, authoring-craft consolidation, and the babysitting pain
— all triangulated or high-engagement primary sources. Hold loosely: the craftkit portability example
(single source, illustrative) and any quantitative claim ("order of magnitude") which traces to a vendor
(GitHub). Verify-queue before this backs a public claim: the GitHub Spec Kit regenerate-cycle figure, and a
fresh scan with X/Twitter included.
