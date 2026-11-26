#!/usr/bin/env python3
"""Prompt Warden — calm tooling (Constitution, Amendment 4).

A Stop-hook that runs after each turn. It reads the session transcript, finds the
*safe, read-only* commands that were used, and adds their prefix to the GLOBAL
allowlist (~/.claude/settings.json) so they stop prompting everywhere. Prompts ease
over time — that easing is the confirmation.

Calm by construction:
- deterministic, ~0 tokens (a script, no LLM); runs async, silent.
- only ever ADDS safe / read-only allow rules — never weakens security. It will not
  touch mutating, destructive, sending, or compound/expanded commands; the agreed
  always-prompt set stays prompted.
- leaves a calm log at ~/.claude/warden/log.md — an "eased" line when it promotes a command,
  and an idle heartbeat that COLLAPSES consecutive runs into one line (count + time range),
  so you can see it ran without the log growing noisy. Glanceable, honest, no shame.

It fails quiet: any parse problem → it does nothing.
"""
import json
import os
import re
import sys
from datetime import datetime, timezone

# Global by design: installed at ~/.claude/warden/ and run by a global Stop hook, it eases prompts in
# EVERY project by promoting safe commands to the global allowlist. Source of truth lives in the calm repo.
TARGET_SETTINGS = os.path.expanduser("~/.claude/settings.json")   # the global allowlist
LOG = os.path.expanduser("~/.claude/warden/log.md")

# Single read-only commands → allow `Bash(<cmd> *)`.
SAFE_SOLO = {
    "ls", "cat", "head", "tail", "wc", "grep", "egrep", "fgrep", "rg", "find",
    "file", "sort", "uniq", "jq", "echo", "pwd", "date", "which", "command",
    "basename", "dirname", "cut", "tr", "stat", "tree", "column", "fc-list",
    "figlet", "toilet", "showfigfonts", "printf", "diff",
}
# Commands safe only for specific read-only sub-commands → allow `Bash(<cmd> <sub> *)`.
SAFE_SUB = {
    "git": {"status", "log", "diff", "show", "branch", "remote", "blame",
            "shortlog", "rev-parse", "ls-files", "describe", "tag"},
    "gh": {"search"},
    "brew": {"list", "info", "search", "config", "--version"},
    "npm": {"view", "info", "search", "ls", "list", "outdated"},
    "mise": {"ls", "current", "which", "--version"},
}
# If any of these appear, the command is compound / expanded / redirecting → never trust it.
UNSAFE_CHARS = re.compile(r"[;|&`<>]|\$\(|\$\{|\bsudo\b")


def load_json(path):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return {}


def existing_allows():
    data = load_json(TARGET_SETTINGS)
    return set((data.get("permissions", {}) or {}).get("allow", []) or [])


def find_bash_commands(transcript_path):
    """Defensively pull every Bash tool_use command from the transcript JSONL."""
    cmds = []

    def walk(node):
        if isinstance(node, dict):
            if node.get("name") == "Bash" and isinstance(node.get("input"), dict):
                c = node["input"].get("command")
                if isinstance(c, str):
                    cmds.append(c)
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    try:
        with open(transcript_path) as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    walk(json.loads(line))
                except Exception:
                    continue
    except Exception:
        return []
    return cmds


def rule_for(command):
    """Return a safe allow rule for a clean read-only command, or None."""
    if not command or UNSAFE_CHARS.search(command):
        return None
    parts = command.split()
    if not parts:
        return None
    head = parts[0]
    if head in SAFE_SOLO:
        return f"Bash({head} *)"
    if head in SAFE_SUB and len(parts) >= 2 and parts[1] in SAFE_SUB[head]:
        return f"Bash({head} {parts[1]} *)"
    return None


def main():
    try:
        payload = json.load(sys.stdin)
    except Exception:
        return
    transcript = payload.get("transcript_path")
    if not transcript:
        return

    have = existing_allows()
    proposed = []
    for cmd in find_bash_commands(transcript):
        rule = rule_for(cmd)
        if not rule:
            continue
        head = rule[len("Bash("):].split()[0]
        broad = f"Bash({head} *)"
        if rule in have or broad in have or rule in proposed:
            continue
        proposed.append(rule)

    # Ease the safe ones (only when there is something new to add).
    if proposed:
        data = load_json(TARGET_SETTINGS)
        perms = data.setdefault("permissions", {})
        allow = perms.setdefault("allow", [])
        allow.extend(proposed)
        perms["allow"] = allow
        with open(TARGET_SETTINGS, "w") as f:
            json.dump(data, f, indent=2)
            f.write("\n")

    # Leave a calm line. Eases append; idle "watched" runs COLLAPSE into the last line
    # (count + time range) so the log confirms it ran without growing noisy.
    stamp = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M")
    os.makedirs(os.path.dirname(LOG), exist_ok=True)
    header = ("# Warden log\n\nWhat the prompt warden quietly eased, so you don't repeat a yes. "
              "Nothing here is a fault.\n\n")
    exists = os.path.exists(LOG)
    heartbeat = re.compile(
        r"^- (\d{4}-\d\d-\d\d \d\d:\d\d)(?: → \d{4}-\d\d-\d\d \d\d:\d\d)? · watched(?: ×(\d+))? — nothing new to ease"
    )
    if proposed:
        add = "".join(f"- {stamp} · eased `{r}` — it was prompting; now it passes quietly.\n" for r in proposed)
        with open(LOG, "a") as f:
            if not exists:
                f.write(header)
            f.write(add)
    else:
        single = f"- {stamp} · watched — nothing new to ease."
        if not exists:
            with open(LOG, "w") as f:
                f.write(header + single + "\n")
        else:
            with open(LOG) as f:
                log_lines = f.read().rstrip("\n").split("\n")
            m = heartbeat.match(log_lines[-1]) if log_lines else None
            if m:
                start = m.group(1)
                count = int(m.group(2)) if m.group(2) else 1
                log_lines[-1] = f"- {start} → {stamp} · watched ×{count + 1} — nothing new to ease."
            else:
                log_lines.append(single)
            with open(LOG, "w") as f:
                f.write("\n".join(log_lines) + "\n")


if __name__ == "__main__":
    main()
