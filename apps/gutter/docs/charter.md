# gutter — Charter

**Status:** locked 2026-07-22 · **App:** gutter

> *gutter* (noun, comics): the space between the panels — where nothing is drawn, and the reader's own
> imagination supplies the motion, the time, the meaning. Scott McCloud called it the place "closure" happens.
> Named for the quiet where *you*, not the page, do the work — not for the pictures it shows.

gutter is the suite's calm **comic reading room** — a leisure sibling to [study](../../study/docs/charter.md)'s
feeds and [Margin](../../margin/docs/charter.md)'s work. It inherits the
[Calm Constitution](../../../CONSTITUTION.md), the shared [voice](../../../docs/calm-language.md) and
[identity](../../../docs/identity.md) — read those first. This charter covers only what is **specific to
gutter**. When a feature conflicts with the Constitution or this charter, the feature loses.

---

## 1. The one job

**"Let me read a comic I already have — and nothing else."**

Open a file, render it beautifully, remember exactly where I stopped, and get entirely out of the way. No
account, no upload, no library to curate, no stats, no next-issue autoplay. Just the page.

## The lived need (the entry gate)

A real, long-carried need, not a wishlist item — you built the original `chrome-comic-reader` years ago and
it never quite worked (it rode Chrome *packaged apps*, a platform Google killed). The gap it aimed at is still
open: comic archives you own (`.cbz` / `.cbr` / `.pdf`) and no *calm* way to read them. Everything modern is
an app-store thing with accounts, sync, ads and upsell; or a heavy desktop collection-manager; or a web reader
that uploads your files to someone's server. None is private, offline, and quiet. gutter passes the suite's
organic entry gate the way Mail and study did.

## 2. The form: a reading room, not a library

Like study, gutter is **finite by nature** — a comic *has* a last page; there is no stream to fall into. It
deliberately refuses the bloat that makes comic apps anxious: collection management, metadata scraping, series
tracking, reading streaks, "you've read N pages today," completion badges. All subtracted. v1 is one loop:
**open → read → it remembers → close.**

**The reading surface, calm:**
- **The page is the whole screen.** Chrome hides by default; summon it and it fades back. No persistent toolbar.
- **Fit modes:** fit-to-screen single page (default), fit-width, two-page spread. The reader chooses; the app
  doesn't nag.
- **Turning is quiet.** Click/tap zones, arrow keys, space. Minimal or no page-turn motion; honours
  `prefers-reduced-motion` — never a source of motion sickness. No swipe-into-the-next-issue trap.
- **Progress is a hairline, not a percentage.** No "37% — keep going" pressure.
- **Stopping and resuming is effortless** (the ND core): it reopens exactly where you left off, per book. This
  is the whole promise of a calm *immersive* tool — see §3a.
- **The last page is a full stop.** Reach the end and it says so gently and *stops* — no autoplay, no "up next."

**The shell wears calm-ds; the artwork owns the pixels.** calm-ds governs the open screen, controls, resume
list, empty and error states — monochrome ink on warm paper, the one clay accent used once, hairline rules,
near-zero motion, light + dark. But the comic art itself is the art: full-bleed on a neutral, glare-free
backdrop (warm paper in light, true-dark in dark), theme-aware. calm never repaints the page.

## 3. Design, in one line

Wears the suite identity as study's leisure sibling: **monochrome ink on paper** shell, type carrying
hierarchy, one clay accent, almost no motion — around a reading surface that disappears so the artwork can
speak. The full design system follows in the spec phase, anchored to Margin's and study's mockups so gutter
reads as family.

### 3a. The honest tension (and its resolution)

A comic reader is **operable, not glanceable** — you drive it, you sink into it. That is the *opposite* of
Article I's "glanceable, not operable," and the charter should say so plainly rather than pretend otherwise.

The resolution: Article I guards against tools that pull you back into **obligations** — external state
accruing while you're away (unread counts, tasks, someone waiting). **A comic has none of that.** It is chosen
leisure with a last page. So gutter *inverts* the usual calm posture on purpose — it is a thing to sink into
deliberately, the way study protects deep reading — while still owing the Constitution everything else:
**finite** (a comic ends; no infinite feed), **no manufactured urgency**, **no engagement mechanics**,
**private by default**, and above all **stopping is effortless and lossless**. That is the calm contract for
an immersive tool: *deep is fine; sticky is not.* gutter must never make it hard to leave, and never make
having-left feel like debt.

## 4. Architecture, in one line

Pure installable **PWA**, entirely client-side — **plain HTML/CSS/JS, no framework** (Subtraction Ladder; a
file reader doesn't earn one). Files **never leave the device**: opened locally, unpacked in-browser, rendered,
progress kept in **IndexedDB** (last page per book, keyed by file hash). No backend, no account, no CORS,
works fully offline.

**A `SourceAdapter` seam — local now, cloud later (your phasing).** v1 ships `LocalFileAdapter` (File System
Access API where available; drag-drop / `<input type=file>` fallback). `MegaAdapter` / `DropboxAdapter` /
`DriveAdapter` slot in behind the same seam later without a rewrite. Cross-device *progress* sync, if it ever
comes, rides that same later phase — never in v1.

**Format support has a real cost gradient** (a genuine scoping fork for the spec — §6):
`.cbz` (a ZIP of images — a tiny in-browser zip reader, cheap) → `.pdf` (needs pdf.js, heavier) →
`.cbr` (RAR — needs a wasm unrar, heaviest, licensing to check). The Subtraction Ladder says start at `.cbz`
and let `.pdf` / `.cbr` earn their weight.

**Subtraction Ladder (charter-level):** necessity ✓ (long-felt, nothing calm exists) → reuse: nothing in-suite
reads comics → native: File System Access, IndexedDB, drag-drop carry most of it → dep: a small zip reader for
`.cbz`; pdf.js / unrar-wasm *only* if those formats are in scope → build: the reader shell itself. **Skipped:**
framework, backend, database, auth, bundler-heaviness, any store presence.

## 5. Non-goals / deferred

Accounts. Upload. Cloud-by-default. Library / collection management. Metadata scraping. Reading
stats / streaks / achievements / completion pressure. Social or sharing. Recommendations. A store presence.
gutter reads files **you already own** — it is a reader, never an acquisition or piracy tool.

**Deferred, build toward:** the cloud source adapters (Mega / Dropbox / Drive) and, only alongside them,
optional cross-device *resume* sync. Both stay out of v1 scope.

## 6. Locked decisions (2026-07-22)

1. **The name is *gutter*** — for the pause between panels where the reader supplies the meaning.
2. **v1 format scope is `.cbz` only** — the leanest rung (a ZIP of images). `.pdf` (pdf.js) and `.cbr`
   (wasm unrar, licensing to check) are deferred; they join later behind the same render path without a
   rewrite. Additive, so pulling one into v1 later is a two-way door.
3. **Charter locked** — the spec phase follows, in the `study` / `margin` numbered-spec sequence.
