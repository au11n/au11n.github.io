---
title: "Spot Signal Emitter"
description: "Echtzeit-Anomalieerkennung fuer Kryptowaehrungshandel"
tech: ["Python", "WebSocket", "Docker", "pandas", "matplotlib"]
status: "Veroeffentlicht"
weight: 4
---

Ein Echtzeit-Anomalieerkennungssystem, das Handelsaktivitaeten auf 6 Kryptowaehrungsboersen ueberwacht und Benachrichtigungen ueber Telegram sendet, wenn signifikante Preisbewegungen oder Volumenanomalien erkannt werden.

## Unterstuetzte Boersen

Binance, Bybit, Bitget, OKX, KuCoin, Kraken.
Sowohl Spot- als auch Futures-Maerkte.

## Erkennungsalgorithmen

- **Preisbewegung**
- **Volumenanomalien**
- **Dichtebasierte Erkennung**

## Architektur

Multi-Thread-Pipeline: WebSocket-Datenaufnahme, Trade-Verarbeitung, DataFrame-Speicher mit Multi-Index, parallele Detektoranalyse und Telegram-Benachrichtigung mit mplfinance-Charts.

BTC-Volatilitaetsfilter unterdrueckt Rauschen in Hochvolatilitaetsphasen.

## Deployment

Dockerisiert mit 12 Service-Containern (einer pro Boersen-/Markt-Paar).
