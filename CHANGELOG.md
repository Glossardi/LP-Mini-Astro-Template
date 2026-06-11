# Changelog

Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/).

---

## [1.1.0] — 2026-06-11

### Added

- **18-Section-System** — Event-Sections: `pricing`, `program`, `speakers`, `location`
- Agent-Vorlagen: `_template.leadmagnet.md`, `_template.event.md`
- Referenz-Seiten: `arbeitsplatz-fitness-check`, `hr-konferenz-wiesbaden`
- Image Pool von schumms.com (`public/images/pool/` + `manifest.json`)
- Asset-Skripte: `scripts/fetch-schumms-image-pool.py`, `scripts/fetch-hr-konferenz-assets.sh`
- CI-Workflow (GitHub Actions)
- `section_order` für custom Funnel-Reihenfolge
- Problem-Section: 2-Spalten mit eingebettetem Pricing (Events)

### Changed

- Schumms-Design: Split-Hero, Coral-Formular, globale `.split`-Layouts
- Lead-Magnet-Funnel: FAQ vor Formular, CTAs in Benefits/ContentPreview/Testimonial
- README, CONTEXT, AGENTS.md für Template-Nutzung überarbeitet
- Index-Seite listet alle published Pages

### Removed

- Legacy-Komponenten (flache `src/components/*.astro`)
- KMU-Platzhalter-SVGs, `site.ts` / `theme.ts` / `themes.ts`
- Verwaiste Assets `public/pages/future-work-2026/`

---

## [1.0.0] — 2026-06-11

Initiale 14-Section-Basis, Partner-Logos, `default-landing` Referenz.

---

## [0.1.0] — 2026-06-11

Fork-Basis aus KMU-Mini-Astro-Template.
