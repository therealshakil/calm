# gutter — Spec Map

The ordered set of specs that take gutter from [charter](../charter.md) to build. Each follows the suite
[spec template](../../../../docs/spec-template.md), is backed by research (or marks its calls
reasoned-not-sourced with a verify-queue), and ends with the [Constitution](../../../../CONSTITUTION.md) Check.
We write and **lock** specs before building (waterfall), one at a time.

Grounded in the locked [charter](../charter.md): one job (open a comic you own, read it, remember where you
stopped), the reading-room-not-library form, the operable-not-glanceable tension and its resolution (§3a), a
pure client-side PWA, and the `SourceAdapter` seam (local now, cloud later).

**Deliberately leaner than [study](../../study/docs/specs/) / [margin](../../margin/docs/specs/).** gutter has
no ingest pipeline, no ranking, no Worker/Cron/D1, no auth — everything runs on-device. It inherits the
suite **identity and voice** by reference, but not their Cloudflare spine. Subtraction is the point (Article IX).

**Status:** ▢ planned · ◐ drafting · ✓ locked · ⬛ shipped

| # | Spec | Covers | Serves | Status |
|---|---|---|---|---|
| 001 | **[Architecture](./001-architecture.md)** | client-only PWA runtime; the `Book` shape; the `SourceAdapter` seam; shared archive-parse; IndexedDB for progress; no backend, offline, files never leave device | IX, X, I | ✓ |
| 002 | **[Local source & .cbz](./002-local-cbz.md)** | `LocalFileAdapter` (File System Access + drag-drop fallback); parsing a `.cbz` (ZIP of images) → ordered pages; natural sort; ignore non-image entries | X, IX | ✓ |
| 003 | **[The reader UI](./003-reader-ui.md)** | the page-owns-the-screen surface; fit modes; quiet navigation; chrome that hides; hairline progress; the last-page full stop; identity for the shell | I, VI | ◐ |
| 004 | **[Reading state & resume](./004-resume.md)** | progress by content-hash; effortless, lossless stop/resume; handle persistence across sessions; per-book last page | I, II | ▢ |
| 005 | **[Calm states](./005-calm-states.md)** | first-run / empty; a corrupt or unreadable file; the end of a book; `prefers-reduced-motion`; nothing that makes absence feel like debt | I, II, V | ▢ |
| 006 | **[PWA & install](./006-pwa-install.md)** | installable, offline-first (client-only makes this natural); manifest; service worker; file-handler entry point | I, VI | ▢ |
| 007 | **[Cloud source adapters (v2)](./007-cloud-adapters.md)** | Mega / Dropbox / Drive behind the same seam; optional cross-device resume sync — **deferred**, out of v1 | X | ▢ |

**Format fork — settled 2026-07-22 (charter §6): `.cbz`-first.** v1 reads `.cbz` only. `.pdf` (pdf.js) and
`.cbr` (wasm unrar, licensing to check) join later behind the same render path — additive, a two-way door.

**Next:** lock **001** (drafting), then 002. Specs 002–006 are v1; 007 is v2.

*This map can change by deliberate revision; if the order or set shifts, say why here.*
