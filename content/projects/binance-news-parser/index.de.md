---
title: "Binance News Parser"
description: "Echtzeit-Monitor fuer Binance-Listing-Ankuendigungen"
tech: ["Python", "Selenium", "BeautifulSoup", "requests"]
status: "Veroeffentlicht"
weight: 8
---

Ein Hochgeschwindigkeits-Monitor zur Erkennung neuer Kryptowaehrungs-Listing-Ankuendigungen auf Binance.
Sendet sofortige Telegram-Benachrichtigungen, wenn ein Ziel-Token fuer den Binance-Futures-Launch angekuendigt wird.

## Scraping-Strategien

Zwei parallele Ansaetze fuer maximale Geschwindigkeit:
- **Selenium** - Headless Chrome mit optimierten Einstellungen (keine Bilder, Disk-Cache) fuer JavaScript-gerenderte Seiten
- **API-Requests** - direkte Abfragen an die Binance-CMS-API mit Cache-Bypass-Techniken (variierende Seitengroessen, Encoding-Optionen)

## Funktionen

- Ueberwachung von 100+ Ziel-Kryptowaehrungen
- Telegram-Benachrichtigungen bei Treffer
- Cache-Bypass ueber CloudFront-Header-Manipulation
- Prozess-Pool mit 10 parallelen Instanzen fuer Redundanz
- Getaktete Abfragen synchronisiert auf bestimmte Intervalle
