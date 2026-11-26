# Spec — Architecture
<!-- filename: 001-architecture.md -->

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-22 · **App:** gutter

How gutter is built and how a comic gets *in*: a pure client-side PWA, the `Book` shape, the `SourceAdapter`
seam, and where the shared archive-parse and reading state live — so every later spec plugs into a settled
foundation.

## Why
The [charter](../charter.md) §4 pins the direction in one line: an installable PWA, entirely client-side, plain
HTML/CSS/JS, files never leaving the device, a `SourceAdapter` seam so local-now / cloud-later is phasing not a
rewrite. This spec writes that foundation once, explicitly, so 002–006 don't each re-decide it. Serves Article
IX (one small stack, few moving parts), X (private, single-user, on-device), and I (finite, nothing computes
that you didn't ask for).

## What it does
gutter opens a comic archive **you already have**, renders its pages, and remembers where you stopped —
entirely on your device.
- **Happy:** you open a `.cbz`; the source adapter hands its bytes to a shared parser, which yields an ordered
  list of page images; the reader renders them; your last page is written to on-device storage as you read.
- **Quiet & empty:** nothing open yet (first run, or you closed the last book) → a calm open screen, never an
  error. (Detailed in 005.)
- **When it fails:** the file isn't a readable `.cbz`, or an entry is corrupt → gutter says so plainly and
  keeps what it can (a partly-readable archive still opens to its good pages); it never alarms, never blames.
  (Detailed in 005.)

## The `Book` (gutter's core object)
gutter's analogue to study's `Signal` — but gutter's payload is an opened comic, not an ingested feed item.

`Book = { id, title, source, pageCount, pages, openedAt }`
- `id` = a **content hash** of the archive bytes — so reading progress follows the *file*, not its name or
  location. Rename or move the file and gutter still knows where you were.
- `title` = derived from the filename (cleaned); no metadata scraping (charter non-goal).
- `source` = which adapter produced it (`local` in v1).
- `pageCount` / `pages` = the ordered page images (natural-sorted; non-image entries dropped — see 002).
- `openedAt` = when this session opened it (for the resume list ordering).

Reading **progress** is stored separately, keyed by `id`: `{ id, lastPage, updatedAt }` (see 004). The heavy
`pages` are **not** persisted — the file lives on your disk; gutter re-reads it on open rather than hoarding a
second copy (Article IX, and it keeps storage tiny).

## The seam (local now, cloud later)
Two clean layers so cloud is additive, never a rewrite:

- **`SourceAdapter`** — supplies *bytes* and *listing*, nothing else. `list() → Ref[]` and
  `bytes(ref) → ArrayBuffer`. **Read-only is structural: no write/delete method exists on the seam.** v1 ships
  `LocalFileAdapter` (spec 002); `MegaAdapter` / `DropboxAdapter` / `DriveAdapter` are the same interface later
  (spec 007).
- **`parseArchive(bytes) → Page[]`** — shared, adapter-agnostic. Turns archive bytes into ordered page images.
  v1 handles `.cbz` (spec 002); `.pdf` / `.cbr` slot in here later behind the same return shape. Because parse
  lives *below* the adapter, every source — local or cloud — reads through the same path.

## How (the plan)
**Stack.** Static PWA — plain **HTML/CSS/JS, no framework, no backend, no build server** (Subtraction Ladder;
a file reader doesn't earn a framework). Everything runs in the page: adapter → `parseArchive` → render →
write progress. No network at read time, no CORS, offline by construction. Deployable as static files
anywhere; identity/shell wears calm-ds (spec 003).

**Storage.** **IndexedDB** for reading state and the resume list — small records only (`{ id, lastPage,
updatedAt, title, pageCount }`), plus, where the platform allows, a persisted file handle for one-tap resume
(spec 004). No page images persisted. `localStorage` only for tiny UI prefs (fit mode, theme). Nothing leaves
the device; no telemetry (Article X).

**Render path.** `parseArchive` yields page images as object-URLs / blobs; the reader shows one (or a spread)
at a time and revokes URLs it's done with, so memory stays bounded for large books — the concrete strategy
(eager vs lazy decode) is a 003 detail, but the seam here guarantees the reader only ever sees an ordered
`Page[]`, never archive internals.

## Requirements
- **R1 (Ubiquitous).** gutter shall run entirely client-side — no backend, no server call at read time, no
  CORS path; it shall function fully offline once installed.
- **R2 (Ubiquitous).** A `SourceAdapter` shall expose listing and byte-read only; **no write or delete method
  shall exist** on the seam (read-only is structural, not merely unused).
- **R3 (Event).** WHEN an archive's bytes are obtained, THEN a single shared `parseArchive` shall turn them
  into an ordered `Page[]`, independent of which adapter supplied the bytes.
- **R4 (Ubiquitous).** A `Book` shall be identified by a content hash of its bytes, so reading progress
  follows the file across renames and moves.
- **R5 (Ubiquitous).** Page images shall **not** be persisted to storage; only small reading-state records
  shall be stored (progress, resume list, UI prefs).
- **R6 (Unwanted).** IF an archive is unreadable or partly corrupt, THEN gutter shall open the pages it can
  recover (or, if none, fail plainly and calmly), never alarm, never discard a readable remainder.
- **R7 (Ubiquitous).** No comic content, page, or reading data shall leave the device; gutter shall emit no
  telemetry.
- **R8 (State).** WHILE a large book is open, the reader shall bound memory (release page resources it is no
  longer showing) rather than hold every decoded page at once.

## Not this (non-goals)
- **No backend / account / auth** — nothing to sign into (unlike margin/study's Cloudflare Access spine).
- **No shared runtime with margin/study** — gutter inherits the suite *identity and voice* by reference only,
  not their Worker/Cron/D1 stack.
- **No library/collection management, metadata scraping, or stats** (charter non-goals) — the resume list is
  a convenience, not a catalogue.
- **No cloud sources in v1** — the seam exists for them; the adapters are spec 007 (deferred).
- **No `.pdf` / `.cbr` in v1** — `parseArchive` is shaped for them, but v1 implements `.cbz` only.

## Research
Reasoned-not-sourced (established web-platform knowledge), with a small **verify-queue** to close before
build:
- **V1.** Confirm a `FileSystemFileHandle` can be persisted in IndexedDB and re-authorised across sessions
  with a single permission re-grant (the basis for one-tap resume in 004), and the graceful path where the
  File System Access API is absent (Firefox/Safari → drag-drop / `<input type=file>` fallback).
- **V2.** Confirm the leanest `.cbz` read: hand-roll from the ZIP central directory vs a tiny vendored zip
  reader (Subtraction Ladder call for 002). Note `DecompressionStream` does gzip/deflate *streams*, not the
  ZIP *container* — so a container reader is still needed.
- **V3.** Confirm PWA **file-handler** registration (open-a-`.cbz`-with-gutter) support + fallback (spec 006).

## Open questions
- Content-hash cost on large files — full-bytes hash vs a cheap fingerprint (size + head/tail bytes). Settle
  with 004 (only the resume key needs it, not integrity).
- Whether the resume list stores a tiny cover thumbnail (nice for recognition) or stays text-only (leaner).
  Settle with 003/004.

## Tasks
(Filled at build time — smallest increments; each cites the requirement it satisfies.)

## Constitution Check
1. **Serves:** IX (one tiny client-only stack, no backend/framework), X (fully on-device, no telemetry, files
   never leave), I (finite; nothing computes at read time you didn't ask for).
2. **Violates:** none — no live path, no writes to your files (read-only seam is structural), no shared
   surface with other apps.
3. **Subtracts:** no framework, no backend, no database server, no auth, no page-image persistence; reuses one
   shared `parseArchive` under the adapter rather than per-source paths.
4. **Calm:** empty (nothing open) and failure (unreadable/partial archive) are first-class states, specified
   here and detailed in 005; no alarms; `prefers-reduced-motion` honoured at the UI layer (003).
