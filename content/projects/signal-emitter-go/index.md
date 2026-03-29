---
title: "Signal Emitter"
description: "Real-time cryptocurrency market anomaly detection engine"
tech: ["Go", "WebSocket", "Docker", "Telegram API"]
status: "In development"
weight: 9
---

A high-performance real-time market monitoring service that detects anomalous trading patterns across 7 cryptocurrency exchanges and sends alerts via Telegram.
Rewritten from Python to Go, achieving a 1000x speed improvement.

## Supported Exchanges

Binance, Bybit, OKX, Kraken, KuCoin, Bitget, Upbit.
Spot and futures markets with order book support.

## Signal Categories

Detectors analyze multiple dimensions of market activity:
- Volume clustering and anomalies
- Price volatility patterns
- Directional volume pressure
- Order book density shifts

## Architecture

Goroutine-based pipeline: WebSocket ingestion with 100-200k trade buffers, batch processing by size or time window, parallel detector analysis, and Telegram alerting with chart generation.

Health monitor tracks trade timeouts, channel overflow, and queue buildup.
Per-exchange YAML configuration with symbol filtering and detector parameter tuning.
