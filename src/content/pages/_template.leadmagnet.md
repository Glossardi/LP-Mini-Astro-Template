---
# Agent-Vorlage: Lead-Magnet-Landingpage
# Struktur wie Wireframe: Hero → Problem → Lösung → Proof → Lead Magnet → About → Form → FAQ → Exit
# Referenz: arbeitsplatz-fitness-check.md → /arbeitsplatz-fitness-check/

slug: mein-lead-magnet
published: false

title: "SEO-Titel — Nutzen in max. 60 Zeichen"
description: "Meta-Description: Konkretes Ergebnis + Zielgruppe + ohne Risiko (max. 160 Zeichen)."

# LP-Funnel-Reihenfolge (Conversion-optimiert)
section_order:
  - hero
  - social_proof_bar
  - problem
  - transformation
  - benefits
  - content_preview
  - testimonial
  - about
  - faq
  - form
  - secondary_cta

sections:
  nav: true
  hero: true
  social_proof_bar: true
  problem: true
  transformation: true
  benefits: true
  process: false
  testimonial: true
  about: true
  content_preview: true
  faq: true
  form: true
  secondary_cta: true
  footer: true
  pricing: false
  program: false
  speakers: false
  location: false

nav_cta_text: "Check starten"

# ── Hero: 1 Angebot, 1 primärer CTA ───────────────────────────────
hero_eyebrow: "Kostenloser Download"
hero_title: "Outcome-Headline — was die Zielgruppe danach kann"
hero_subtitle: "Für wen + welches konkrete Ergebnis + warum jetzt. Kein Feature-Katalog, sondern Transformation in 1–2 Sätzen."
hero_image: "/pages/mein-lead-magnet/hero.jpg"
hero_image_alt: "Beschreibung Hero-Bild"
cta_text: "Check kostenlos starten"
hero_trust_metrics:
  - value: "3 Min"
    label: "Ausfüllzeit"
  - value: "PDF"
    label: "Sofort-Download"

# ── Social Proof: früh für Vertrauen ──────────────────────────────
social_proof_text: "Vertrauen von Unternehmen im DACH-Raum"
social_proof_logos:
  - name: "Vitra"
    image: "/images/logos/schumms-partners/vitra.svg"
  - name: "Wilkhahn"
    image: "/images/logos/schumms-partners/wilkhahn.svg"
  - name: "sedus"
    image: "/images/logos/schumms-partners/sedus.svg"
  - name: "König + Neurath"
    image: "/images/logos/schumms-partners/koenig-neurath.svg"

# ── Problem: 3 konkrete Pain-Points ───────────────────────────────
problem_heading: "Status quo benennen — Zielgruppe nickt mit"
problem_intro: "Kurzer Kontextsatz: Warum das Thema jetzt brennt."
problem_points:
  - "Erster Pain — spezifisch, nicht abstrakt"
  - "Zweiter Pain — Entscheider denken: genau mein Problem"
  - "Dritter Pain — Kosten des Nicht-Handelns"

# ── Lösung: Heute / Danach ────────────────────────────────────────
transformation_heading: "Vom Reagieren zum Gestalten"
transformation_before: "Ist-Zustand — was heute nicht funktioniert und warum."
transformation_after: "Zielbild — messbares Ergebnis nach dem Download, kein Buzzword."

# ── Benefits: 3–5 nummerierte Vorteile + CTA ──────────────────────
benefits_heading: "Was du konkret gewinnst"
benefits_intro: "Nutzen in Ich-/Du-Form — jeder Punkt beantwortet „Was hab ich davon?“"
benefits:
  - headline: "Erster messbarer Nutzen"
    description: "Zwei Sätze — konkret, ohne Marketing-Sprech."
  - headline: "Zweiter Nutzen"
    description: "Warum das für deine Rolle relevant ist."
  - headline: "Dritter Nutzen"
    description: "Emotionaler oder finanzieller Mehrwert."
  - headline: "Vierter Nutzen"
    description: "Optional — nur wenn wirklich unterschiedlich."
  - headline: "Fünfter Nutzen"
    description: "Optional — kurz halten."

# ── Testimonial: vor dem Formular ─────────────────────────────────
testimonial_heading: "Das sagen Entscheiderinnen"
testimonial_quote: "Zitat mit konkretem Ergebnis — keine generischen Lobeshymnen."
testimonial_author: "Vorname Nachname"
testimonial_role: "Position"
testimonial_company: "Unternehmen"
testimonial_image: "/pages/mein-lead-magnet/testimonial.jpg"

# ── Über uns: Autorität & Trust ───────────────────────────────────
about_heading: "Wer steckt dahinter?"
about_name: "Susanne Busshart"
about_title: "Geschäftsführerin · Schumm & Rösch"
about_image: "/pages/mein-lead-magnet/about.jpg"
about_bio: "Kurze Credibility — Expertise, Erfahrung, warum man euch vertrauen kann."

# ── Lead Magnet: Was drinsteckt ───────────────────────────────────
content_preview_heading: "Das bekommst du im Download"
content_preview_intro: "Konkrete Module/Kapitel — keine vagen Versprechen."
content_preview_image: "/pages/mein-lead-magnet/preview.jpg"
content_preview_image_alt: "Vorschau des Downloads"
content_preview_items:
  - title: "Modul 1 — Kurz & prägnant"
    description: "Was die Zielgruppe darin findet."
  - title: "Modul 2"
    description: "Key-Learning oder Checklisten-Punkt."
  - title: "Modul 3"
    description: "Handlungsempfehlung oder Score-Erklärung."
  - title: "Modul 4"
    description: "Optional — Bonus oder Vorlage."

# ── FAQ: Einwände + Datenschutz ─────────────────────────────────────
faq_heading: "Häufige Fragen"
faq:
  - question: "Ist das wirklich kostenlos?"
    answer: "Ja — Download ohne versteckte Kosten. Optionaler Beratungskontakt nur auf Wunsch."
  - question: "Für wen ist das gedacht?"
    answer: "Zielgruppe konkret benennen — HR, Facility, GF, Teamgröße."
  - question: "Was passiert mit meinen Daten?"
    answer: "DSGVO-konform, kein Spam, Abmeldung jederzeit. Link zur Datenschutzerklärung."
  - question: "Meine Frage steht nicht dabei?"
    answer: "info@schumms.com oder kostenfreies Erstgespräch über den Button unten."

# ── Formular: primäre Conversion ──────────────────────────────────
form_title: "Jetzt kostenlos herunterladen"
form_intro: "Nutzen noch einmal — direkt über dem Formular. Gleicher CTA wie Hero."
form_cta: "Check kostenlos starten"
form_webhook: "https://n8n.schumms.com/webhook/DEIN-WEBHOOK"
form_download_url: "https://assets.schumms.com/optional-download.pdf"
form_success_message: "Danke! Dein Download ist unterwegs — schau auch in den Spam-Ordner."

# ── Sekundärer CTA: weicher Ausstieg ──────────────────────────────
secondary_cta_heading: "Lieber persönlich sprechen?"
secondary_cta_text: "Kostenfreie Erstberatung — unverbindlich, ohne Verkaufsdruck."
secondary_cta_button: "Termin vereinbaren"
secondary_cta_href: "https://www.schumms.com/kontakt"
---
