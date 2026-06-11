---
# Agent-Vorlage: Event-Landingpage
# Kopieren → umbenennen → Inhalte anpassen → published: true
# Referenz: hr-konferenz-wiesbaden.md

slug: mein-event
published: false

title: "Event-Titel — Kurzbeschreibung"
description: "Meta-Beschreibung max. 160 Zeichen."

# Reihenfolge wie auf Event-LPs: Partner am Ende
section_order:
  - hero
  - problem
  - program
  - speakers
  - location
  - form
  - social_proof_bar

sections:
  nav: true
  hero: true
  problem: true
  pricing: false
  program: true
  speakers: true
  location: true
  form: true
  social_proof_bar: true
  transformation: false
  benefits: false
  process: false
  testimonial: false
  about: false
  content_preview: false
  faq: false
  secondary_cta: false
  footer: true

nav_cta_text: "Ticket sichern"

hero_eyebrow: "Event · Datum · Ort"
hero_title: "Event-Headline"
hero_subtitle: "Subline — Nutzenversprechen in einem Satz."
hero_image: "/pages/mein-event/hero.jpg"
hero_image_alt: "Beschreibung Hero-Bild"
cta_text: "Ticket sichern"
hero_trust_metrics:
  - value: "TT.MM."
    label: "2026"
  - value: "9–17"
    label: "Uhr"
  - value: "Ort"
    label: "Region"

problem_heading: "Warum dieses Event?"
problem_intro: "Einleitungstext — Kontext und Zielgruppe. Keine Bullet-Points nötig."

pricing_eyebrow: "Sonderpreis"
pricing_label: "Jetzt für"
pricing_amount: "49"
pricing_currency: "€"
pricing_text: "Kurzer Nutzen-Satz zum Preis."
pricing_cta: "Ticket sichern"

program_heading: "Programm 9:00 – 17:00 Uhr"
program_items:
  - type: "Keynote"
    title: "Session-Titel"
    speaker: "Name"
    role: "Rolle · Unternehmen"
    organization: "Unternehmen"
    organization_logo: "/pages/mein-event/partners/logo.png"
    description: "Beschreibung der Session."
  - type: "Breakout"
    title: "Workshop-Titel"
    description: "Beschreibung ohne Speaker-Felder."
  - type: "Panel"
    title: "Panel-Titel"
    speaker: "Speaker 1, Speaker 2, Speaker 3"
    description: "Panel-Beschreibung."

speakers_heading: "Die Speaker"
speakers_tagline: "Optionaler Tagline-Satz"
speakers:
  - name: "Vorname Nachname"
    title: "Rolle · Unternehmen"
    bio: "Kurzbiografie."
    image: "/pages/mein-event/speakers/name.jpg"
    image_alt: "Portrait Name"

location_heading: "Location"
location_intro: "Wir freuen uns auf dich in unserer Eventfläche."
location_venue: "Venue-Name"
location_address: "Straße · PLZ Ort"
location_phone: "+49 ..."
location_email: "info@schumms.com"
location_image: "/pages/mein-event/location.jpg"
location_image_alt: "Beschreibung Location-Bild"

form_title: "Sichere dir dein Ticket!"
form_intro: "Preis und Nutzen noch einmal kurz wiederholen."
form_cta: "Ticket sichern"
form_webhook: "https://n8n.schumms.com/webhook/DEIN-WEBHOOK"
form_success_message: "Danke! Bestätigung folgt per E-Mail."

social_proof_text: "Unsere Partner"
social_proof_logos_monochrome: false
social_proof_logos:
  - name: "Partner 1"
    image: "/pages/mein-event/partners/partner-1.png"
  - name: "Partner 2"
    image: "/pages/mein-event/partners/partner-2.svg"
---
