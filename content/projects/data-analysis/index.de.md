---
title: "Crypto Data Analysis"
description: "Analyse- und Anomalieerkennungssystem fuer Kryptowaehrungs-Handelsdaten"
tech: ["Python", "pandas", "scikit-learn", "mplfinance", "ClickHouse"]
status: "Veroeffentlicht"
weight: 6
---

Ein quantitatives Analysesystem fuer Kryptowaehrungsmaerkte zur Erkennung von Handelsanomalien aus Binance-Daten.

## Analysemodule

- **Walls-Detektor** - erkennt grosse Auftraege und Ungleichgewichte im Orderbuch
- **Strike-Detektor** - erkennt schnelle Preisspitzen (>8% in Millisekunden)
- **Feature-Extraktion** - lineare Regressionsanalyse, Preisrauschen und Schwankungsmetriken
- **Ungleichgewichtsanalyse** - Erkennung von Bid/Ask-Ungleichgewichten im Orderbuch
- **Unterstuetzungsniveaus** - automatische Identifikation signifikanter Preisniveaus

## Datenpipeline

Laedt OHLC- und aggregierte Handelsdaten ueber die Binance-REST-API herunter.
Multi-Thread-Verarbeitung ueber 1m-, 5m-, 1h-Zeitrahmen.
ClickHouse-Integration fuer grossflaechige historische Analyse.

## Visualisierung

Candlestick-Charts ueber mplfinance.
Overlay von Level- und Strike-Markern.
Jupyter-Notebooks fuer interaktive Exploration.
