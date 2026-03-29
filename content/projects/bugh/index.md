---
title: "BugH"
description: "Personal operating system for bug bounty hunting"
tech: ["Go", "PostgreSQL", "SQLite", "Cobra", "Rod"]
status: "In development"
weight: 2
---

A comprehensive bug bounty hunting toolkit combining an automated reconnaissance/testing CLI tool (Scalpel) with a structured knowledge base of 750+ security research files.

## Scalpel - CLI Tool

A Go-based command-line tool with 13 core commands for the full bug bounty workflow:

- **Scope** - automated reconnaissance with 25 passive sources (crt.sh, DNS, Wayback Machine, Shodan, GitHub, Common Crawl) and 39 active collectors (JS parsing, tech detection, form discovery, GraphQL, Swagger, source maps).
Supports stealth mode, resume, and snapshot diff
- **Race** - race condition testing engine with 6 send modes (HTTP/2 framing, HTTP/1.1 last-byte, pipeline, HTTP/3) and 9 pre-built recipes (coupon double-spend, cache poisoning, duplicate registrations)
- **Probe** - mutation-based anomaly detection with baseline comparison and 13 mutation dictionaries
- **Params** - hidden parameter discovery using batch + binary search approach
- **Hunt** - AI-powered attack planning with hybrid search (BM25 + cosine similarity + RRF fusion) and LLM-guided questioning
- **CVE Check** - local CVE database matching with NVD, EPSS, KEV, and PoC data
- **Nuclei** - selective vulnerability scanning based on detected technologies (Wappalyzer DB with 7,360+ tech signatures)
- **BB Watch** - bug bounty platform monitoring (HackerOne, Bugcrowd, Intigriti, YesWeHack)
- **Proxy** - MITM proxy with YAML-based match & replace rules

## Knowledge Base

A collection of 750+ Markdown files organized into categories:

- **Tricks** (535) - non-standard approaches and bypasses
- **Methods** (110) - standard testing methodologies
- **Vulns** (26) - vulnerability reference sheets
- **Tools** (18) - tool documentation
- **Routes** (6) - step-by-step attack checklists
