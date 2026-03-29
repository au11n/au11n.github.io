---
title: "Signal Backtester"
description: "Web-based backtesting tool for market anomaly detectors"
tech: ["Go", "Plotly.js", "SSE"]
status: "In development"
weight: 10
---

An interactive web tool for backtesting market anomaly detectors on historical cryptocurrency trade data.
Shares the detector engine with Signal Emitter.

## Features

- Interactive UI with Plotly.js charts for each detected pattern
- Pattern labeling system (good/bad) for strategy evaluation
- Parameter optimization with boundary computation from labeled data
- Multi-worker parallel processing across symbols
- Automatic download of historical trade data from exchanges
- Run management with resume support and parameter hashing
- CSV export of labeled results
- Real-time progress via Server-Sent Events

## Workflow

Select detector type and parameters, specify date range, launch scan.
Review detected patterns visually, label them, adjust parameters, repeat.
Export results for further analysis.
