# Spec — Local source & .cbz
<!-- filename: 002-local-cbz.md -->

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-22 · **App:** gutter

How a comic gets in from your disk, and how a `.cbz` becomes ordered pages: the `LocalFileAdapter` and the
`.cbz` half of the shared `parseArchive` from [001](./001-architecture.md).

## Why
The [charter](../charter.md) locks local files as the v1 source and `.cbz` as the v1 format (§6). 001 pins the
seam: an adapter that supplies *bytes*, a shared `parseArchive` below it that yields ordered pages. This spec
fills in both for the local `.cbz` case — the one path v1 actually ships. Serves Article X (nothing leaves the
device) and IX (no dependency where the platform already does the job).

## What it does
- **Happy:** you open a `.cbz` — by picking it, dragging it onto the page, or (later) launching gutter *with* a
  `.cbz`. gutter reads the archive on-device, pulls out the image pages in natural reading order, and hands the
  reader an ordered `Page[]`.
- **Quiet & empty:** no file chosen yet → the open screen waits (005); choosing is one action, never a wizard.
- **When it fails:** the file isn't a valid ZIP, or is encrypted/spanned → gutter declines it plainly, in one
  kind line, and stays on the open screen. A *partly* corrupt archive still opens to the pages it can recover;
  the bad entries are simply skipped, never fatal (001 R6). If there are no image entries at all, it says so
  plainly. (Wording in 005.)

## How the file gets in (`LocalFileAdapter`)
Three ways in, one result (a `File` / bytes) — the adapter normalises them so `parseArchive` never sees the
difference:
- **File System Access** (`showOpenFilePicker`, where supported) — and it returns a handle 004 can persist for
  one-tap resume.
- **Drag-and-drop** onto the page.
- **`<input type="file" accept=".cbz,application/vnd.comicbook+zip">`** — the universal fallback (Firefox,
  Safari, and anywhere the Access API is absent).

The adapter is read-only by construction (001 R2): it obtains bytes; it has no method that writes, renames, or
deletes your file.

## How a `.cbz` is parsed (no dependency — verify-item V2, resolved)
A `.cbz` is a plain **ZIP of image files**. The platform already has everything needed, so v1 uses **no
third-party zip library** (Subtraction Ladder — native over dep):
1. Read the **End of Central Directory** record (scan from the tail), then walk the **central directory** to
   enumerate entries (name, compression method, sizes, local-header offset).
2. For each entry, read its local header and data. **Method 0 (STORE)** → the bytes are the image as-is.
   **Method 8 (DEFLATE)** → inflate with the native **`DecompressionStream('deflate-raw')`** — no library.
   (`DecompressionStream` handles gzip/deflate *streams*; the ZIP *container* is the ~150 lines we read by
   hand. Encrypted or spanned archives are declined — out of scope.)
3. Keep entries whose names are **image types** (`.jpg .jpeg .png .webp .gif .avif`); **drop everything else**
   — `ComicInfo.xml`, `Thumbs.db`, `__MACOSX/`, dot-files, and directory entries.
4. Order pages by a **natural, numeric-aware sort** of the entry path (`Intl.Collator(undefined,
   {numeric:true})`), so `page2` precedes `page10`. This is the reading order.
5. Each surviving entry becomes a `Page` (an image blob / object-URL + its name); the result is the ordered
   `Page[]` 001's render path consumes.

## Requirements
- **R1 (Event).** WHEN a user picks, drops, or opens a file, THEN `LocalFileAdapter` shall obtain its bytes
  via File System Access, drag-drop, or `<input type=file>` — whichever the platform supports — with the input
  fallback always available.
- **R2 (Ubiquitous).** `parseArchive` shall read a `.cbz` by parsing the ZIP central directory directly and
  shall use **no third-party zip dependency**; DEFLATE entries shall be inflated with native
  `DecompressionStream('deflate-raw')`, STORE entries read as-is.
- **R3 (Ubiquitous).** Only image entries (`.jpg/.jpeg/.png/.webp/.gif/.avif`) shall become pages; metadata,
  resource-fork, dot-file, and directory entries shall be dropped.
- **R4 (Ubiquitous).** Pages shall be ordered by numeric-aware natural sort of the entry path.
- **R5 (Unwanted).** IF an individual entry is corrupt or undecodable, THEN it shall be skipped and the
  remaining pages kept (001 R6); IF the archive yields no image pages, THEN gutter shall fail plainly (005).
- **R6 (Unwanted).** IF the archive is not a valid ZIP, or is encrypted or spanned, THEN gutter shall decline
  it in one calm line and remain on the open screen — never a crash, never an alarm.
- **R7 (Ubiquitous).** File bytes shall be read and parsed on-device only; nothing shall be uploaded (X).

## Not this (non-goals)
- **No `.pdf` / `.cbr` in v1** — `parseArchive` is shaped to grow into them, but this spec implements `.cbz`
  only (charter §6).
- **No metadata parsing** — `ComicInfo.xml` and friends are dropped, not read (charter non-goal); the title
  comes from the filename (001).
- **No cloud sources** — the adapter interface is the same later (007), but v1 is local only.
- **No writing to your files** — read-only seam (001 R2).

## Research
Reasoned-not-sourced (established web-platform knowledge). Verify-queue before build:
- **V2a.** Confirm `DecompressionStream('deflate-raw')` is available across gutter's target browsers
  (Chromium, Firefox, Safari at the versions we target); if a target lags, note the smallest fallback (a
  vendored inflate) — but do not add it pre-emptively.
- **V2b.** Confirm the read strategy for large archives (`File.arrayBuffer()` whole vs ranged `Blob.slice`
  reads driven by the central directory) so a big book doesn't force the whole file into memory at once
  (supports 001 R8 / 008 memory bounds).
- (V1 handle persistence and V3 file-handler are settled in 004 / 006.)

## Open questions
- Case/locale for the natural sort (some archives mix `Ch01/` folders) — default to path-wise numeric collation;
  revisit only if a real archive breaks it.

## Tasks
(Filled at build time — smallest increments; each cites the requirement it satisfies.)

## Constitution Check
1. **Serves:** X (bytes read on-device, nothing uploaded), IX (zero zip dependency — native container read +
   `DecompressionStream`), I (a finite archive → a finite ordered set of pages).
2. **Violates:** none — read-only adapter, no network, no writes to your files.
3. **Subtracts:** an entire class of dependency (no zip library); drops all non-image archive entries rather
   than modelling them; one parse path shared with future formats/sources.
4. **Calm:** partial corruption degrades gracefully (skip-and-keep), invalid/encrypted archives decline in one
   kind line; empty (no file chosen) and no-pages are first-class states (005).
