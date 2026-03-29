---
title: "Signal Emitter"
description: "Echtzeit-Engine zur Erkennung von Kryptomarkt-Anomalien"
tech: ["Go", "WebSocket", "Docker", "Telegram API"]
status: "In Entwicklung"
weight: 9
---

Ein leistungsstarker Echtzeit-Marktmonitoring-Dienst,
der anomale Handelsmuster auf 7 Kryptowaehrungsboersen erkennt und Benachrichtigungen ueber Telegram sendet.
Von Python auf Go umgeschrieben, mit einer 1000-fachen Geschwindigkeitssteigerung.

## Unterstuetzte Boersen

Binance, Bybit, OKX, Kraken, KuCoin, Bitget, Upbit.
Spot- und Futures-Maerkte mit Orderbuch-Unterstuetzung.

## Signal-Kategorien

Detektoren analysieren Veraenderungen in der Marktaktivitaet:
- Volumenanomalien
- Preisvolatilitaetsmuster
- Orderbuch-Dichte

## Architektur

- Zero-Alloc-Architektur
- Lock-Free-Architektur
