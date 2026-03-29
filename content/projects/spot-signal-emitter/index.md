---
title: "Spot Signal Emitter"
description: "Real-time cryptocurrency trading anomaly detection system"
tech: ["Python", "WebSocket", "Docker", "pandas", "matplotlib"]
status: "Released"
weight: 4
---

A real-time anomaly detection system that monitors trading activity across 6 cryptocurrency exchanges and sends alerts via Telegram when significant price movements or volume anomalies are detected.

## Supported Exchanges

Binance, Bybit, Bitget, OKX, KuCoin, Kraken.
Both spot and futures markets.

## Detection Algorithms

- **Price movement** - significant moves above configurable thresholds
- **Volume anomalies** - 15-min vs 1-hour volume ratio spikes
- **Repeated volumes** - detection of repeating volume patterns
- **Heavy volume clustering** - symbol-specific threshold ranges
- **Density-based detection** - price density anomalies

## Architecture

Multi-threaded pipeline: WebSocket data ingestion, trade processing, DataFrame storage with multi-index, parallel detector analysis, and Telegram alerting with mplfinance charts.

Smart rate limiting prevents alert fatigue with per-symbol cooldowns and deduplication.
BTC volatility filter suppresses noise during high-volatility periods.

## Deployment

Dockerized with 12 service containers (one per exchange/market pair).
Memory-limited (1.8GB per container), auto-restart on failure, centralized logging.
