---
layout: "project"
title: "Binance News Parser"
description: "Real-time Binance listing announcement monitor"
tech: ["Python", "Selenium", "BeautifulSoup", "requests"]
status: "Released"
weight: 8
---

A high-speed monitor for detecting new cryptocurrency listing announcements on Binance.
Sends instant Telegram alerts when a target token is announced for Binance Futures launch.

## Scraping Strategies

Two parallel approaches for maximum speed:
- **Selenium** - headless Chrome with optimized settings (no images, disk cache) for JavaScript-rendered pages
- **API requests** - direct queries to Binance CMS API with cache bypass techniques (varying page sizes, encoding options)

## Features

- Monitors 100+ target cryptocurrencies
- Telegram notifications on match
- Cache bypass via CloudFront header manipulation
- Process pool with 10 parallel instances for redundancy
- Timed polling synchronized to specific intervals
