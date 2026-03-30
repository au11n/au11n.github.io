---
layout: "project"
title: "Grammus"
description: "Plattformuebergreifende App zum Deutschlernen fuer russischsprachige Nutzer"
tech: ["Flutter", "Dart", "SQLite", "Riverpod", "Go"]
status: "In Entwicklung"
weight: 1
---

Eine mobile und Desktop-Anwendung zum Deutschlernen, speziell fuer russischsprachige Nutzer entwickelt.
Abdeckung der Niveaustufen A0 bis B2 mit einem strukturierten Lehrplan aus 96 Lektionen.

## Hauptfunktionen

- **Spaced Repetition (SM-2)** - Vokabelwiederholung mit unabhaengigem Tracking fuer Woerter, unregelmaessige Verben, Artikel und Konjugationen
- **4 Uebungstypen** - Multiple Choice, Texteingabe, Wortstellung und vollstaendige Satzkonstruktion mit steigendem Schwierigkeitsgrad
- **Fehlerschleife** - Fehler loesen ein erneutes Ueben ab dem Fehlerpunkt aus
- **Integriertes Woerterbuch** - Durchsuchen, Filtern nach Wortart, Woerter zur Wiederholung hinzufuegen
- **Text-to-Speech** - Muttersprachliche Aussprache fuer alle Vokabeln
- **Thematische Situationen** - Alltagsszenarien: Einkaufen, Arzt, Bank, Amt
- **Offline-first** - Alle Inhalte lokal gespeichert, kein Internet noetig
- **Helles/dunkles Design**

## Architektur

Die App nutzt einen strukturierten 5-Stufen-Lektionsablauf: Theorie, Wortlernen, Grammatikpruefung, Satzuebungen (100 Uebungen pro Sitzung) und Spaced-Repetition-Wiederholung.

Die Vokabeldatenbank enthaelt ca. 24.000 deutsche Woerter, kuratiert mit einem eigenen Go-TUI-Tool (Bubbletea) zur interaktiven Sortierung und Filterung von Woerterbuch-CSVs.

Plattformuebergreifend: Android, iOS, Linux, Windows, macOS.
