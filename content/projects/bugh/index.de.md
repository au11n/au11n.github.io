---
title: "BugH"
description: "Persoenliches Betriebssystem fuer Bug-Bounty-Hunting"
tech: ["Go", "PostgreSQL", "SQLite", "Cobra", "Rod"]
status: "In Entwicklung"
weight: 2
---

Ein umfassendes Bug-Bounty-Hunting-Toolkit, das ein automatisiertes Aufklaerungs-/Test-CLI-Tool (Scalpel) mit einer strukturierten Wissensdatenbank aus ueber 750 Security-Research-Dateien kombiniert.

## Scalpel - CLI-Tool

Ein Go-basiertes Kommandozeilen-Tool mit 13 Kernbefehlen fuer den gesamten Bug-Bounty-Workflow:

- **Scope** - automatisierte Aufklaerung mit 25 passiven Quellen (crt.sh, DNS, Wayback Machine, Shodan, GitHub, Common Crawl) und 39 aktiven Sammlern (JS-Parsing, Tech-Erkennung, Formularsuche, GraphQL, Swagger, Source Maps).
Unterstuetzt Stealth-Modus, Resume und Snapshot-Diff
- **Race** - Race-Condition-Testing-Engine mit 6 Sendemodi (HTTP/2 Framing, HTTP/1.1 Last-Byte, Pipeline, HTTP/3) und 9 vorgefertigten Rezepten (Coupon-Double-Spend, Cache-Poisoning, doppelte Registrierungen)
- **Probe** - mutationsbasierte Anomalieerkennung mit Baseline-Vergleich und 13 Mutationswoerterbuechern
- **Params** - Entdeckung versteckter Parameter mittels Batch + binaerer Suche
- **Hunt** - KI-gestuetzte Angriffsplanung mit hybrider Suche (BM25 + Cosine Similarity + RRF Fusion) und LLM-gefuehrter Befragung
- **CVE Check** - lokaler CVE-Datenbankabgleich mit NVD, EPSS, KEV und PoC-Daten
- **Nuclei** - selektives Vulnerability-Scanning basierend auf erkannten Technologien (Wappalyzer-DB mit 7.360+ Tech-Signaturen)
- **BB Watch** - Bug-Bounty-Plattform-Monitoring (HackerOne, Bugcrowd, Intigriti, YesWeHack)
- **Proxy** - MITM-Proxy mit YAML-basierten Match-&-Replace-Regeln

## Wissensdatenbank

Eine Sammlung von ueber 750 Markdown-Dateien, organisiert in Kategorien:

- **Tricks** (535) - unkonventionelle Ansaetze und Bypasses
- **Methods** (110) - Standardmethoden fuer Sicherheitstests
- **Vulns** (26) - Schwachstellen-Referenzblatter
- **Tools** (18) - Tool-Dokumentation
- **Routes** (6) - Schritt-fuer-Schritt-Angriffs-Checklisten
