---
layout: "project"
title: "Trading Dashboard"
description: "Cryptocurrency market microstructure analysis dashboard"
tech: ["Python", "Dash", "Plotly", "ClickHouse", "Docker"]
status: "Released"
weight: 5
---

An interactive web dashboard for analyzing cryptocurrency market microstructure.
Connects to a ClickHouse database to visualize trades, order book state, and volume profiles with millisecond precision.

## Visualizations

Multi-panel layout with three synchronized views:
- **Volume profile** - cumulative volume distribution across price levels
- **Price chart** - candlestick line with trade markers (buys/sells) and volume bars
- **Order book** - bids and asks with cumulative depth curves at any point in time

## Features

- Time navigation with 100ms granularity
- Configurable order book depth (0.1% to 100%)
- In-memory caching of database queries
- Order book reconstruction from snapshots and incremental updates
- CSV import for batch analysis of signals
- Multi-instance deployment (3 parallel dashboards)

## Architecture

Built with Dash (Plotly) and ClickHouse as the time-series backend.
Dockerized with gunicorn for production.
