#!/usr/bin/env python3
"""calm-check — a calm-tooling agent (Constitution, Amendment 4).

Reads a Claude Code PostToolUse payload on stdin, checks the file that was just
written against the canonical tokens, and on a violation exits 2 so the model
sees the note and fixes it in the same turn.

It speaks to the model, never to the person. A mistake is absorbed, not
announced (Article IV), so a clean run writes nothing at all and any internal
error exits quietly rather than interrupting a session.

Four rules, and only four:

  1. a colour literal in a normal declaration, where var() belongs
  2. a colour or type custom property whose name isn't --calm-*
  3. a --calm-* value that doesn't match tokens.css
  4. a dark-theme selector that isn't [data-theme="dark"] / the light guard

Plus one guard: a suppression annotation is itself a violation, so there is no
syntax for shutting this up.

Deliberately not here: the voice, the hand-made test, contrast maths, anything
needing a render. Those are judgement or a separate decision, and calm-language.md
argues against mechanising the first of them at all.

Stdlib only, no dependencies (Article IX). Spec: docs/specs/013-calm-check.md.
"""

import json
import os
import re
import sys

CHECKED = (".css", ".html", ".htm")

# these define the canon or carry generated data; checking them is circular
SKIP_NAMES = ("tokens.css", "calm-fonts.css")
SKIP_PARTS = ("/assets/fonts/", "/node_modules/", "/.git/")

HEX = r"#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b"
COLOUR = re.compile(HEX + r"|\b(?:rgba?|hsla?)\s*\(")
DECL = re.compile(r"(-{0,2}[A-Za-z][A-Za-z0-9_-]*)\s*:\s*([^;{}]+)")
SELECTOR = re.compile(r"([^{}();]*)\{")
DARK_SELECTOR = re.compile(r"(?:^|[\s,>+~])(?:[a-zA-Z]+)?\.dark\b|\[data-dark")
SUPPRESSION = re.compile(
    r"calm-check[^\n]{0,20}?(?:ignore|disable|skip|off)"
    r"|stylelint-disable|eslint-disable",
    re.IGNORECASE,
)
FONT_HINT = re.compile(
    r"\b(?:serif|sans-serif|monospace|cursive|system-ui|"
    r"Atkinson|Yrsa|Shantell|IBM Plex|Georgia|Helvetica|Arial|Menlo)\b",
    re.IGNORECASE,
)

LOG = os.path.expanduser("~/.claude/calm-check/log.md")


def mask_outside_style(text):
    """Blank everything outside <style> blocks, keeping offsets and line numbers."""
    kept = [" "] * len(text)
    for m in re.finditer(r"<style\b[^>]*>(.*?)</style\s*>", text, re.S | re.I):
        start, end = m.start(1), m.end(1)
        kept[start:end] = text[start:end]
    for i, ch in enumerate(text):
        if ch == "\n":
            kept[i] = "\n"
    return "".join(kept)


def blank_comments(text):
    """Replace /* ... */ with spaces, keeping offsets and line numbers."""

    def blank(m):
        return "".join("\n" if c == "\n" else " " for c in m.group(0))

    return re.sub(r"/\*.*?\*/", blank, text, flags=re.S)


def canonical_tokens(repo):
    """name -> set of allowed values, read from tokens.css."""
    path = os.path.join(repo, "tokens.css")
    try:
        with open(path, encoding="utf-8") as fh:
            text = blank_comments(fh.read())
    except OSError:
        return {}
    table = {}
    for m in DECL.finditer(text):
        name, value = m.group(1), m.group(2).strip().lower()
        if name.startswith("--calm-"):
            table.setdefault(name, set()).add(value)
    return table


def line_of(text, index):
    return text.count("\n", 0, index) + 1


def check(text, is_html, canon):
    """Return a list of (line, found, note)."""
    style = mask_outside_style(text) if is_html else text
    style = blank_comments(style)
    found = []

    # searched in the raw text on purpose — a suppression usually hides in a comment
    for m in SUPPRESSION.finditer(text):
        found.append(
            (
                line_of(text, m.start()),
                m.group(0).strip(),
                "no suppression annotations — fix the thing rather than silencing "
                "the check, or take the rule out of the spec",
            )
        )

    for m in SELECTOR.finditer(style):
        selector = m.group(1)
        if DARK_SELECTOR.search(selector):
            found.append(
                (
                    line_of(text, m.start(1)),
                    selector.strip(),
                    'dark theme is [data-theme="dark"], with the light half guarded '
                    'as :root:not([data-theme="light"]) inside the '
                    "prefers-color-scheme block",
                )
            )

    for m in DECL.finditer(style):
        name, raw = m.group(1), m.group(2)
        value = raw.strip().lower()
        line = line_of(text, m.start())
        is_custom = name.startswith("--")
        has_colour = bool(COLOUR.search(value))

        if not is_custom and has_colour:
            found.append(
                (
                    line,
                    "%s: %s" % (name, raw.strip()),
                    "colour belongs in a token — use var(--calm-…) here",
                )
            )
            continue

        if is_custom and not name.startswith("--calm-"):
            if has_colour or FONT_HINT.search(value):
                found.append(
                    (
                        line,
                        "%s: %s" % (name, raw.strip()),
                        "colour and type tokens are named --calm-* so every surface "
                        "shares one vocabulary",
                    )
                )
            continue

        if is_custom and has_colour and canon:
            allowed = canon.get(name)
            if allowed is None:
                found.append(
                    (
                        line,
                        "%s: %s" % (name, raw.strip()),
                        "not a token in tokens.css — add it there first, or use an "
                        "existing one",
                    )
                )
            elif value not in allowed:
                found.append(
                    (
                        line,
                        "%s: %s" % (name, raw.strip()),
                        "tokens.css has %s as %s"
                        % (name, " / ".join(sorted(allowed))),
                    )
                )

    found.sort(key=lambda item: item[0])
    return found


def log(path, found):
    try:
        os.makedirs(os.path.dirname(LOG), exist_ok=True)
        with open(LOG, "a", encoding="utf-8") as fh:
            fh.write("- %s — %d to fix\n" % (path, len(found)))
    except OSError:
        pass


def main():
    try:
        payload = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        return 0

    tool_input = payload.get("tool_input") or {}
    tool_response = payload.get("tool_response") or {}
    path = tool_response.get("filePath") or tool_input.get("file_path") or ""
    if not path:
        return 0

    if not path.lower().endswith(CHECKED):
        return 0
    if os.path.basename(path) in SKIP_NAMES:
        return 0
    if any(part in path for part in SKIP_PARTS):
        return 0

    try:
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
    except OSError:
        return 0

    repo = payload.get("cwd") or os.getcwd()
    found = check(text, path.lower().endswith((".html", ".htm")), canonical_tokens(repo))
    if not found:
        return 0

    name = os.path.basename(path)
    lines = ["calm-check — %d to bring back to the tokens in %s:" % (len(found), name)]
    for line, snippet, note in found[:12]:
        lines.append("  line %d  %s" % (line, snippet))
        lines.append("           %s" % note)
    if len(found) > 12:
        lines.append("  … and %d more of the same shape" % (len(found) - 12))
    lines.append("tokens.css is the canon; identity.md has the reasoning.")
    sys.stderr.write("\n".join(lines) + "\n")
    log(path, found)
    return 2


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception:
        # never interrupt a session over a checker
        sys.exit(0)
