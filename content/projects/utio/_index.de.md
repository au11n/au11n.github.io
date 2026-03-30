---
layout: "project"
title: "UTIO"
description: "Universal Trading Instrument Opener fuer das TigerTrade-Terminal"
tech: ["Python", "aiohttp", "aiogram", "Telethon", "WebSocket"]
status: "Veroeffentlicht"
weight: 3
---

Eine Desktop-Anwendung, die das Oeffnen von Handelsinstrumenten im TigerTrade-Terminal anhand von Signalen aus mehreren Quellen automatisiert.
Fungiert als Middleware zwischen Signal-Anbietern und der Handelsplattform.

## Signalquellen

- **Telegram Bot** - ueberwacht Kanaele und Chats ueber die Bot-API
- **Telegram Userbot** - Monitoring auf Basis eines Benutzerkontos mit Session-Persistenz
- **WebSocket Client** - Echtzeit-Signal-Streaming
- **TradingView** - Webhook-Integration

## Signalverarbeitung

Drei Parser arbeiten kaskadierend, um Handelsdaten aus jedem Nachrichtenformat zu extrahieren:
JSON-Parser fuer strukturierte Daten, Regex-Parser fuer Freitext und Template-Parser fuer benutzerdefinierte Muster.

Unterstuetzt 9 Boersen (Binance, Bybit, OKX, MEXC, Bitmex, Bitfinex, Gate.io, Bitget) mit SPOT- und FUTURES-Maerkten.
Link-Group-Routing (A-Z, 0-11) zur Organisation mehrerer Terminal-Fenster.

## Web-Oberflaeche

Integriertes Control Panel auf Port 8080:
- Live-Konfigurationsverwaltung
- Echtzeit-Verbindungsstatus-Monitoring
- Durchsuchbare Signal-Historie
- Test-Signal-Funktion zur Validierung
- Datenmaskierung fuer sensible Informationen

## Architektur

Vollstaendig asynchron (aiohttp + aiogram + telethon).
Automatische Wiederverbindung mit Keep-Alive fuer TigerTrade-WebSocket.
Rotierende dateibasierte Protokollierung und JSONL-Signal-Historie.
Kompiliert zu einer eigenstaendigen Windows-Programmdatei ueber PyInstaller.
