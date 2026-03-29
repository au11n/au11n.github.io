---
title: "UTIO"
description: "Universal Trading Instrument Opener for TigerTrade terminal"
tech: ["Python", "aiohttp", "aiogram", "Telethon", "WebSocket"]
status: "Released"
weight: 3
---

A desktop application that automates opening trading instruments in the TigerTrade terminal based on signals from multiple sources.
Acts as middleware between trading signal providers and the trading platform.

## Signal Sources

- **Telegram Bot** - monitors channels and chats via Bot API
- **Telegram Userbot** - user-account based monitoring with session persistence
- **WebSocket Client** - real-time signal streaming
- **TradingView** - webhook integration

## Signal Processing

Three parsers work in cascade to extract trading data from any message format:
JSON parser for structured data, regex parser for free-form text, and template parser for custom patterns.

Supports 9 exchanges (Binance, Bybit, OKX, MEXC, Bitmex, Bitfinex, Gate.io, Bitget) with SPOT and FUTURES markets.
Link Group routing (A-Z, 0-11) for organizing multiple terminal windows.

## Web Interface

Built-in control panel on port 8080:
- Live configuration management
- Real-time connection status monitoring
- Searchable signal history
- Test signal capability for validation
- Data masking for sensitive information

## Architecture

Fully async (aiohttp + aiogram + telethon).
Automatic reconnection with keep-alive for TigerTrade WebSocket.
Rotating file-based logging and JSONL signal history.
Compiles to a standalone Windows executable via PyInstaller.
