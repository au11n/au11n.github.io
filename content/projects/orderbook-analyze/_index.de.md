---
layout: "project"
title: "Orderbook Analyze"
description: "Anomalieerkennungssystem fuer Kryptowaehrungs-Orderbuecher"
tech: ["Python", "pandas", "ClickHouse", "numpy"]
status: "Veroeffentlicht"
weight: 7
---

Ein Marktdaten-Analysesystem zur Erkennung von Anomalien in Kryptowaehrungs-Orderbuechern und Preisbewegungen.
Nutzt ClickHouse als Backend fuer historische Handels- und Orderbuchdaten von Binance.

## Erkennungsmodule

- **Preisanomalien** - scharfe Preisaenderungen ueber konfigurierbare Schwellenwerte mit Volumenkonzentrationsanalyse
- **Grosse Spreads** - ungewoehnlich breite Bid-Ask-Spreads
- **Duenne Orderbuch-Bereiche** - Zonen mit unzureichender Liquiditaet und Tiefenluecken

## Analyse-Pipeline

Trades werden nach Symbol, Preis und Zeitfenster gruppiert, dann nach Handelsanzahl und Preisaenderungsschwellen gefiltert.
Volumina werden ueber historische Basiswaehrungspreise in USDT normalisiert.
Ergebnisse werden als CSV mit detaillierten Metriken exportiert: Preisaenderung, Volumen, Handelsanzahl, Volumenposition.

## Datenquellen

Historische Trades und Orderbuch-Snapshots ueber die Binance-REST-API.
ClickHouse fuer grossflaechige Abfragen ueber Zeitraeume.
