#!/usr/bin/env python3
"""privacy-guard — keep the person's private life out of public repos (spec 014).

A Claude Code PreToolUse hook on Bash. When the command is a `git push` from a public GitHub repo, it
reads every commit that isn't on a remote yet (added lines and messages) and checks them against a
private term list. On a match it exits 2, which stops the push and shows the note to the model, so the
commit can be fixed first. Nothing is published.

It speaks to the model, never to the person. Clean pushes are silent. With no term list (anyone else's
machine) it does nothing. Private repos are skipped: names belong there.

The term list is never in calm. One term per line, matched case-insensitively on word edges; `#` starts a
comment. Default: ~/Projects/calm-private/privacy-terms.txt (override: CALM_PRIVACY_TERMS).

Any internal error exits 0 — a broken guard must not be what breaks a session — except a match, which
always blocks. Stdlib only (Article IX).
"""

import json
import os
import re
import shlex
import subprocess
import sys

TERMS = os.environ.get("CALM_PRIVACY_TERMS", os.path.expanduser("~/Projects/calm-private/privacy-terms.txt"))
PUSH = re.compile(r"(?:^|[\s;&|(])git\s(?:[^;&|]*\s)?push\b")


def load_terms():
    try:
        with open(TERMS, encoding="utf-8") as fh:
            lines = [l.split("#", 1)[0].strip() for l in fh]
    except OSError:
        return []
    return [t for t in lines if t]


def pattern(term):
    left = r"\b" if term[0].isalnum() else ""
    right = r"\b" if term[-1].isalnum() else ""
    return re.compile(left + re.escape(term) + right, re.IGNORECASE)


def repo_dir(command, cwd):
    try:
        words = shlex.split(command)
    except ValueError:
        words = command.split()
    for i, w in enumerate(words[:-1]):
        if w == "-C":
            return os.path.expanduser(words[i + 1])
    return cwd


def git(repo, *args):
    return subprocess.run(["git", "-C", repo, *args], capture_output=True, text=True, timeout=20)


def is_public(repo):
    url = git(repo, "remote", "get-url", "origin").stdout.strip()
    m = re.search(r"github\.com[:/]([^/]+)/([^/\s]+?)(?:\.git)?$", url)
    if not m:
        return False  # not a GitHub repo we can reason about
    try:
        out = subprocess.run(["gh", "api", "repos/%s/%s" % m.groups(), "--jq", ".visibility"],
                             capture_output=True, text=True, timeout=10).stdout.strip()
    except (OSError, subprocess.TimeoutExpired):
        out = ""
    return out != "private"  # public, or unknown: check to be safe


def findings(repo, terms):
    found = []
    commits = git(repo, "rev-list", "--branches", "--not", "--remotes").stdout.split()
    for c in commits:
        msg = git(repo, "log", "-1", "--format=%B", c).stdout
        diff = git(repo, "show", "--format=", "--unified=0", "--no-color", c).stdout
        current = "?"
        lines = [("message", l) for l in msg.splitlines()]
        for l in diff.splitlines():
            if l.startswith("+++ b/"):
                current = l[6:]
            elif l.startswith("+") and not l.startswith("+++"):
                lines.append((current, l[1:]))
        for where, text in lines:
            for t, rx in terms:
                if rx.search(text):
                    found.append((c[:7], where, t, text.strip()[:80]))
    return found


def main():
    try:
        payload = json.load(sys.stdin)
    except ValueError:
        return 0
    command = (payload.get("tool_input") or {}).get("command") or ""
    if not PUSH.search(command):
        return 0
    raw = load_terms()
    if not raw:
        return 0
    repo = repo_dir(command, payload.get("cwd") or os.getcwd())
    if not os.path.isdir(repo) or not is_public(repo):
        return 0
    found = findings(repo, [(t, pattern(t)) for t in raw])
    if not found:
        return 0
    out = ["privacy-guard — this push would publish private words, so it was stopped. Fix the commit"
           " (amend or rewrite it) and push again:"]
    for c, where, term, text in found[:12]:
        out.append("  %s  %s  \"%s\"  in: %s" % (c, where, term, text))
    if len(found) > 12:
        out.append("  … and %d more" % (len(found) - 12))
    sys.stderr.write("\n".join(out) + "\n")
    return 2


if __name__ == "__main__":
    try:
        code = main()
    except Exception:
        code = 0
    sys.exit(code)
