# Welcome to calm

This guide sets calm up as the way Claude Code works on your machine, in every project.
It's an opt-in. Nothing here changes a project's own rules or look; that's what
[`ADOPTING.md`](./ADOPTING.md) is for.

Paste this file into a Claude Code session and say "set me up". It goes one step at a time,
and you can stop after any step and pick up later.

## What you get

- **The register:** how the assistant behaves — soft, plain, few questions, no cheerleading.
  It classifies work before building, drafts specs for you to lock, and never rushes you.
- **The voice and the writing style:** [`docs/calm-language.md`](./docs/calm-language.md) and
  [`docs/specs/002-calm-markdown.md`](./docs/specs/002-calm-markdown.md).
- **Three skills:** `calm-ds` (the design system, for anything visual), `calm-council` (independent
  advisors for a hard decision), and `drift` (calm ASCII art).

calm's law and look apply only where they're chosen: in calm, in `calm-*` repos, and in things made just
for you. Other projects keep their own rules.

## Setup checklist

- [ ] **Claude Code** is installed and signed in.
- [ ] **calm is cloned**, for example to `~/Projects/calm`.
- [ ] **A live copy for Claude to read**: a worktree of calm pinned to `main` at `~/.claude/calm-live`.
- [ ] **Your global `~/.claude/CLAUDE.md`** imports calm from that live copy.
- [ ] **The three skills** are linked into `~/.claude/skills`.
- [ ] **Fonts (optional):** the four faces installed on your OS, for calm-styled artifacts and apps.

## Get started

Each step is one command. The paths assume calm lives at `~/Projects/calm`; change them if it doesn't.

1. Clone calm.

   ```sh
   git clone https://github.com/therealshakil/calm.git ~/Projects/calm
   ```

2. Make the live copy. It's what Claude reads, so your own work in progress never leaks into it.

   ```sh
   git -C ~/Projects/calm worktree add --detach ~/.claude/calm-live origin/main
   ```

3. Write the global `~/.claude/CLAUDE.md`. If you already have one, keep a backup first, then merge
   rather than overwrite.

   ```markdown
   # Working calm, everywhere

   calm is how we work on this machine, read live from `~/.claude/calm-live`.

   - Everywhere: the register below — how to be, the voice, the writing and formatting.
   - calm itself and `calm-*` repos (full calm): the Constitution is law, and so is the look.
   - Any other repo: only the layers its own `CLAUDE.md` names apply; its own look and rules win for the rest.
   - Things made just for me, outside a project: full calm.

   ## How to be

   @~/.claude/calm-live/CLAUDE.md

   ## The voice

   @~/.claude/calm-live/docs/calm-language.md

   ## Writing and formatting

   @~/.claude/calm-live/docs/specs/002-calm-markdown.md
   ```

4. Link the skills.

   ```sh
   ln -s ~/.claude/calm-live/.claude/skills/calm-ds ~/.claude/skills/calm-ds
   ln -s ~/.claude/calm-live/.claude/skills/calm-council ~/.claude/skills/calm-council
   ln -s ~/.claude/calm-live/.claude/skills/drift ~/.claude/skills/drift
   ```

5. Fonts, if you want them: Atkinson Hyperlegible, Yrsa, Shantell Sans and IBM Plex Mono, all free from
   Google Fonts. Artifacts don't need them; `calm-fonts.css` carries all four inline.

6. Start a new Claude Code session and ask it something small. It should answer plainly, and for any
   build it should open with a one-line gate.

## Keeping it current

calm changes by small, recorded steps. To take the latest:

```sh
git -C ~/.claude/calm-live fetch origin
git -C ~/.claude/calm-live checkout --detach origin/main
```

## Taking it out

Delete or restore your `~/.claude/CLAUDE.md`, remove the three links in `~/.claude/skills`, and run
`git -C ~/Projects/calm worktree remove ~/.claude/calm-live`. Nothing else was touched.

## Tips

- Two-way doors (small, easy to undo) just happen; you hear about them after. One-way doors stop for one
  question. If you'd rather it asked less or more, say so.
- Specs are drafts until you lock them. "Lock it" is yours to say.
- Ideas can be dropped mid-task ("idea: …"); they're parked in `Calm.md` without derailing the work.
- Say "council this" or "debate this" before a decision that's hard to undo.

<!-- INSTRUCTION FOR CLAUDE: Someone pasted this guide to set calm up on their machine. Be a calm
onboarding companion: plain, warm, unhurried, no exclamation marks.

First, check what's already in place against the Setup checklist, and report it in one message with
markdown checkboxes, leading with what's done. One sentence per item.

Then offer to start with the first unchecked item. Work through Get started one step at a time; each
step is the person's yes. Before writing ~/.claude/CLAUDE.md, look for an existing one: back it up and
offer to merge, never overwrite silently. Adjust paths if calm isn't at ~/Projects/calm.

Stopping is fine at any point; say where they are, so they can pick up later. Don't invent steps or
sections that aren't in this guide. -->
