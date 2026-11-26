# Prompt Warden

A calm-tooling agent (Constitution, Amendment 4): silent, efficient, ~0 tokens. After each turn it
notices the **safe, read-only** commands you used and adds them to your global allowlist, so they
stop prompting. Prompts ease over time — that easing is the confirmation.
Part of the [calm suite](../../CONSTITUTION.md).

It never weakens security: it only ever **adds** safe / read-only allow rules, and skips anything
mutating, destructive, sending, or compound. The agreed always-prompt set — destructive commands,
sends, writes outside the repo, one-way / new-surface, a pending spec — stays prompted, by design.

## Install

1. Copy `warden.py` to `~/.claude/warden/warden.py`.
2. Add a global `Stop` hook in `~/.claude/settings.json`:

```json
"hooks": { "Stop": [ { "hooks": [ {
  "type": "command",
  "command": "python3 ~/.claude/warden/warden.py >/dev/null 2>&1 || true",
  "statusMessage": "calm: warden easing prompts",
  "async": true
} ] } ] }
```

It runs after each turn, `async` and silent (a deterministic script, ~0 LLM tokens), and logs to
`~/.claude/warden/log.md` — an "eased" line when it promotes a command, and an idle heartbeat that
**collapses** consecutive runs into one line (count + time range), so the log confirms it ran without
growing noisy. A calm log: glanceable, honest, no shame.

## Settings

The safe lists (`SAFE_SOLO`, `SAFE_SUB`) are deliberately conservative — read-only commands only.
Widen them only with genuinely safe, read-only commands; never mutating or sending ones. Better to
under-ease (it still prompts) than over-ease (security).

## Licence

Part of the calm suite — see [`CONSTITUTION.md`](../../CONSTITUTION.md).
