---
title: "Lerner"
description: "Cross-platform German language learning app for Russian speakers"
tech: ["Flutter", "Dart", "SQLite", "Riverpod", "Go"]
status: "In development"
weight: 1
---

A mobile and desktop application for learning German, designed specifically for Russian speakers. Covers levels from A0 to B2 with a structured curriculum of 96 lessons.

## Key Features

- **Spaced repetition (SM-2)** - vocabulary review with independent tracking for words, irregular verbs, articles, and conjugations
- **4 exercise types** - multiple choice, text input, word order, and full sentence construction with progressive difficulty
- **Error loop mechanic** - mistakes trigger re-drilling from the error point, ensuring solid learning
- **Built-in dictionary** - browse, search, filter by part of speech, add words to review
- **Text-to-speech** - native pronunciation for all vocabulary
- **Thematic situations** - real-world scenarios: shopping, doctor, bank, government office
- **Offline-first** - all content stored locally, no internet required
- **Dark/light theme**

## Architecture

The app uses a structured 5-stage lesson flow: theory, word learning, grammar check, sentence drills (100 exercises per session), and spaced repetition review.

Vocabulary database contains ~24,000 German words, curated using a custom Go TUI tool (Bubbletea) for interactive sorting and filtering of dictionary CSVs.

Cross-platform: Android, iOS, Linux, Windows, macOS.
