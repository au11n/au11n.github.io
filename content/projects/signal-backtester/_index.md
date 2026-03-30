---
layout: "project"
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
- Pattern labeling system for strategy evaluation
- Multi-worker parallel processing across symbols
- Automatic download of historical trade data from exchanges
- Run management with resume support and parameter hashing
- CSV export of labeled results
- Real-time progress via Server-Sent Events
- Fine-tuning detectors for production use
