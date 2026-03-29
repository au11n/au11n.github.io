---
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
- Muster-Labeling-System (gut/schlecht) zur Strategiebewertung
- Parameteroptimierung mit Grenzwertberechnung aus gelabelten Daten
- Multi-Worker-Parallelverarbeitung ueber Symbole
- Automatischer Download historischer Handelsdaten von Boersen
- Run-Management mit Resume-Unterstuetzung und Parameter-Hashing
- CSV-Export gelabelter Ergebnisse
- Echtzeit-Fortschritt ueber Server-Sent Events

## Workflow

Detektortyp und Parameter waehlen, Zeitraum angeben, Scan starten.
Erkannte Muster visuell pruefen, labeln, Parameter anpassen, wiederholen.
Ergebnisse fuer weitere Analyse exportieren.
