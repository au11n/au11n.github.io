---
layout: "project"
title: "Signal Backtester"
description: "Webbasiertes Backtesting-Tool fuer Marktanomaliedetektoren"
tech: ["Go", "Plotly.js", "SSE"]
status: "In Entwicklung"
weight: 10
---

Ein interaktives Web-Tool zum Backtesting von Marktanomaliedetektoren auf historischen Kryptowaehrungs-Handelsdaten.
Teilt die Detektor-Engine mit Signal Emitter.

## Funktionen

- Interaktive UI mit Plotly.js-Charts fuer jedes erkannte Muster
- Muster-Labeling-System zur Strategiebewertung
- Multi-Worker-Parallelverarbeitung ueber Symbole
- Automatischer Download historischer Handelsdaten von Boersen
- Run-Management mit Resume-Unterstuetzung und Parameter-Hashing
- CSV-Export gelabelter Ergebnisse
- Echtzeit-Fortschritt ueber Server-Sent Events
- Feinabstimmung der Detektoren fuer den Produktionseinsatz
