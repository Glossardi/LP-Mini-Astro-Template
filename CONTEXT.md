# CONTEXT — schumms-landings

## Vision

Landing Page System für **Schumm & Rösch**. Agenten schreiben **nur Markdown** in `src/content/pages/` — das Template rendert on-brand Pages mit konfigurierbaren Sections.

Production: `https://landing.schumms.com` · Preview: `dev`-Branch

---

## Architektur

```
Agent → Markdown (Frontmatter + sections + section_order)
     → Astro Content Layer (Zod-Schema)
     → LandingLayout + SectionRenderer
     → Section-Komponenten
     → Static HTML (dist/)
```

| Agent darf | Fix (nicht anfassen) |
|------------|----------------------|
| `src/content/pages/*.md` | `src/components/`, `src/layouts/` |
| `public/pages/[slug]/` Bilder | `src/styles/`, `src/data/brand.ts` |
| | `src/content.config.ts`, `src/lib/sections.ts` |

---

## Sections (18)

`nav` · `hero` · `social_proof_bar` · `problem` · `pricing` · `program` · `transformation` · `benefits` · `process` · `speakers` · `testimonial` · `about` · `content_preview` · `location` · `faq` · `form` · `secondary_cta` · `footer`

Steuerung: `sections:` + optional `section_order:` für Render-Reihenfolge.

**Referenz-Seiten:**

| Slug | Zweck |
|------|--------|
| `arbeitsplatz-fitness-check` | Lead-Magnet, conversion-optimierte Reihenfolge |
| `default-landing` | Alle Standard-Sections aktiv |
| `hr-konferenz-wiesbaden` | Event (Programm, Speaker, Location, Pricing in Problem) |
| `workspace-day-september` | Event-Kompaktvariante |

**Vorlagen:** `_template.leadmagnet.md` · `_template.event.md` · `_template.md`

---

## Status

- [x] 18 Sections + Frontmatter-Steuerung + `section_order`
- [x] Schumms.com Design (Split-Hero, Coral-CTA, Partner-Logos)
- [x] Image Pool (`public/images/pool/manifest.json`, 79 Bilder)
- [x] CI (GitHub Actions: `pnpm run build`)
- [x] `published: false` → noindex, kein Production-Build
- [ ] Impressum/Datenschutz juristisch finalisieren
- [ ] Self-hosted Fonts (WOFF2, DSGVO)
- [ ] Production `/` → Redirect schumms.com (optional)

---

## Design-System

| Element | Wert |
|---------|------|
| Coral CTA | `#FD7857` |
| Basis | Schwarz/Weiß, Inter |
| Hero | Split 50/50 |
| Formular | Coral-Section `#lead-form` |
| Footer LP | Legal only |

CSS: `src/styles/schumms.css` + `src/styles/global.css`

---

## Deployment

| Branch | Ziel |
|--------|------|
| `dev` | Preview |
| `main` | Production |

Coolify: `pnpm run build` → `dist/`
