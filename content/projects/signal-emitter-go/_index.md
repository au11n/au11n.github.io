---
layout: "project"
title: "Signal Emitter"
description: "Real-time cryptocurrency market anomaly detection engine"
tech: ["Go", "WebSocket", "Docker", "Telegram API"]
status: "In development"
weight: 9
---

A high-performance real-time market monitoring service,
detecting anomalous trading patterns across 7 cryptocurrency exchanges and sending alerts via Telegram.
Rewritten from Python to Go, achieving a 1000x speed improvement.

## Supported Exchanges

Binance, Bybit, OKX, Kraken, KuCoin, Bitget, Upbit.
Spot and futures markets with order book support.

## Signal Categories

Detectors analyze changes in market activity:
- Volume anomalies
- Price volatility patterns
- Order book density

## Architecture

- Zero-Alloc architecture
- Lock-Free architecture
