---
title: "Crypto Data Analysis"
description: "Cryptocurrency trading data analysis and anomaly detection system"
tech: ["Python", "pandas", "scikit-learn", "mplfinance", "ClickHouse"]
status: "Released"
weight: 6
---

A quantitative analysis system for cryptocurrency markets focused on detecting trading anomalies from Binance data.

## Analysis Modules

- **Walls detector** - identifies large orders and imbalances in the order book
- **Strike detector** - detects rapid price spikes (>8% in milliseconds)
- **Feature extraction** - linear regression analysis, price noise and fluctuation metrics
- **Imbalance analysis** - order book bid/ask imbalance detection
- **Support levels** - automatic identification of significant price levels

## Data Pipeline

Downloads OHLC and aggregated trade data from Binance REST API.
Multi-threaded processing across 1m, 5m, 1h timeframes.
ClickHouse integration for large-scale historical analysis.

## Visualization

Candlestick charts via mplfinance.
Level and strike markers overlay.
Jupyter notebooks for interactive exploration.
