---
layout: "project"
title: "Orderbook Analyze"
description: "Cryptocurrency orderbook anomaly detection system"
tech: ["Python", "pandas", "ClickHouse", "numpy"]
status: "Released"
weight: 7
---

A market data analysis system for detecting anomalies in cryptocurrency orderbooks and price movements.
Uses ClickHouse as the backend for historical trade and orderbook data from Binance.

## Detection Modules

- **Price anomalies** - sharp price changes exceeding configurable thresholds with volume concentration analysis
- **Large spreads** - abnormally wide bid-ask spreads
- **Sparse orderbook regions** - areas with insufficient liquidity and depth gaps

## Analysis Pipeline

Trades are grouped by symbol, price, and time window, then filtered by trade count and price change thresholds.
Volumes are normalized to USDT using historical base currency prices.
Results are exported to CSV with detailed metrics: price change, volume, trade count, volume position.

## Data Sources

Historical trades and orderbook snapshots from Binance REST API.
ClickHouse for large-scale querying across time ranges.
