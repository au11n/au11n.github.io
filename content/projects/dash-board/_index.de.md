---
layout: "project"
title: "Trading Dashboard"
description: "Dashboard zur Analyse der Kryptowaehrungs-Marktmikrostruktur"
tech: ["Python", "Dash", "Plotly", "ClickHouse", "Docker"]
status: "Veroeffentlicht"
weight: 5
---

Ein interaktives Web-Dashboard zur Analyse der Marktmikrostruktur von Kryptowaehrungen.
Verbindet sich mit einer ClickHouse-Datenbank zur Visualisierung von Trades, Orderbuch-Zustand und Volumenprofilen mit Millisekunden-Praezision.

## Visualisierungen

Mehrteiliges Layout mit drei synchronisierten Ansichten:
- **Volumenprofil** - kumulative Volumenverteilung ueber Preisniveaus
- **Preischart** - Candlestick-Linie mit Trade-Markern (Kaeufe/Verkaeufe) und Volumenbalken
- **Orderbuch** - Bids und Asks mit kumulativen Tiefenkurven zu jedem Zeitpunkt

## Funktionen

- Zeitnavigation mit 100ms-Granularitaet
- Konfigurierbare Orderbuch-Tiefe (0,1% bis 100%)
- In-Memory-Caching von Datenbankabfragen
- Orderbuch-Rekonstruktion aus Snapshots und inkrementellen Updates
- CSV-Import fuer Batch-Analyse von Signalen
- Multi-Instanz-Deployment (3 parallele Dashboards)

## Architektur

Gebaut mit Dash (Plotly) und ClickHouse als Zeitreihen-Backend.
Dockerisiert mit gunicorn fuer Produktion.
