# Adopting calm

Add calm to a new repo by pointing at this one — no analysis pass, no machinery. Copy two things, follow
the conventions, done. An assistant reading the result inherits all of calm and can build with you
hands-off.

## 1. Drop in a CLAUDE.md pointer

Create `CLAUDE.md` in your repo. Copy this, change only the project name on the first lines:

```markdown
# Working calm — <your-project>

<your-project> inherits calm from the suite; it does not restate the rules.

## Governing law lives elsewhere

- **github.com/therealshakil/calm** — the source of calm:
  - CONSTITUTION.md — the ten Articles + banned patterns. Supreme.
  - docs/identity.md — the look: monochrome ink on paper + one clay accent, the locked typefaces, almost no motion.
  - docs/calm-language.md — the voice.
  - CLAUDE.md — how to be while you build.

When a choice here conflicts with the calm Constitution, the choice loses — not the Constitution.

## How we work here

- Build Gate (Amendment 2): classify before building — two-way (proceed, report) vs one-way (spec first; the person locks).
- Specs are co-authored; the person locks (Amendment 3).
- Mechanics: absolute paths and tool dir-flags (git -C), never cd; one operation per command; no command
  substitution, shell variables, or chained commands; push after every commit.
- CLI / dev-surface conventions: github.com/therealshakil/calm -> docs/specs/007-cli-conventions.md.
- Spot a pattern calm itself should carry? Promote it upstream — author it in calm (the true source) and this repo reads it back live; never copy-and-diverge. (Or file one calm report to apply later.) See calm's docs/specs/008-downstream-contributions.md.
```

That file is the whole inheritance mechanism — nothing else is restated.

## 2. Import the tokens

Copy [`tokens.css`](./tokens.css) into your repo (or link it), and build your styles on its variables —
never hard-coded colour. The palette is monochrome ink-on-paper + one clay accent; light and dark are both
defined.

```css
@import "tokens.css";
body { background: var(--calm-bg); color: var(--calm-fg); font-family: var(--calm-font-body); }
```

Load the four faces yourself (Google Fonts or self-host): Atkinson Hyperlegible (body), Yrsa (serif),
Shantell Sans (the hand), IBM Plex Mono (mono). The tokens only name them.

Not on the web? The values are plain — transcribe them to your target. The tokens are the canonical design;
the skin ports, the rest does not.

## 3. Reuse the conventions — don't restate them

- Specs follow [`docs/spec-template.md`](./docs/spec-template.md); keep them in your repo, indexed.
- READMEs follow [`docs/specs/004-readme-standard.md`](./docs/specs/004-readme-standard.md) (skeleton:
  [`docs/readme-template.md`](./docs/readme-template.md)).
- Writing follows [`docs/specs/002-calm-markdown.md`](./docs/specs/002-calm-markdown.md) (the eight rules).
- CLI and dev-surface work follows [`docs/specs/007-cli-conventions.md`](./docs/specs/007-cli-conventions.md).
- Skills follow the `SKILL.md` open standard (agentskills.io): standard frontmatter, a Markdown body, and
  the three optional dirs (`scripts/`, `references/`, `assets/`). A calm skill then runs unchanged across
  Claude Code, Codex, Cursor, Gemini CLI and other compliant agents — portable by construction, not tied to
  one engine. Keep the body lean (progressive disclosure), one skill to one job, the description a routing
  rule (triggers + inputs + output).
- Every doc that makes a claim ends with the four-line Constitution Check.

## 4. Add yourself to the registry

When the repo is real, add a line to [`CALMED.md`](./CALMED.md): name, one line, link, what it borrows.
It appears once it exists — never as a wishlist.

---

That is the whole of it: point, copy the tokens, follow the conventions. No generator, no build step,
nothing to maintain.
