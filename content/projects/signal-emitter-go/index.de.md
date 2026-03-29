---
title: "Signal Emitter"
description: "Echtzeit-Engine zur Erkennung von Kryptomarkt-Anomalien"
tech: ["Go", "WebSocket", "Docker", "Telegram API"]
status: "In Entwicklung"
weight: 9
---

Ein leistungsstarker Echtzeit-Marktmonitoring-Dienst, der anomale Handelsmuster auf 7 Kryptowaehrungsboersen erkennt und Benachrichtigungen ueber Telegram sendet.
Von Python auf Go umgeschrieben, mit einer 1000-fachen Geschwindigkeitssteigerung.

## Unterstuetzte Boersen

Binance, Bybit, OKX, Kraken, KuCoin, Bitget, Upbit.
Spot- und Futures-Maerkte mit Orderbuch-Unterstuetzung.

## Signal-Kategorien

Detektoren analysieren mehrere Dimensionen der Marktaktivitaet:
- Volumen-Clustering und -Anomalien
- Preisvolatilitaetsmuster
- Direktionaler Volumendruck
- Orderbuch-Dichteverschiebungen

## Architektur

Goroutine-basierte Pipeline: WebSocket-Aufnahme mit 100-200k Trade-Puffern, Batch-Verarbeitung nach Groesse oder Zeitfenster, parallele Detektoranalyse und Telegram-Benachrichtigung mit Chart-Generierung.

Health-Monitor ueberwacht Trade-Timeouts, Kanalueberlaeufe und Warteschlangen-Aufbau.
YAML-Konfiguration pro Boerse mit Symbolfilterung und Detektor-Parameter-Tuning.
