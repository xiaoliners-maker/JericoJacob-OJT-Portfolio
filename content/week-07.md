---
title: "Week 7 — Notification Refinement & Bug Blitz"
slug: "week-07"
period: "Mar 23–27, 2026"
week: 7
tags: ["Flutter", "Bug Fixes", "UI/UX", "MediTrack"]
---

## Overview

Focused sprint on stability and polish. Refined push notifications, hunted down multiple bugs, and improved the visual quality of both platforms.

## Key Activities

- Refined and improved FCM push notification delivery reliability in the Flutter app
- Fixed multiple bugs across mobile affecting navigation, data loading, and state management
- Improved and polished front-end design on both MediTrack mobile and web platforms
- Continued front-end development and UI/UX improvements across the full system

## Bugs Squashed

- Fixed black screen on launch (missing `AudioServiceActivity` registration in `AndroidManifest.xml`)
- Resolved tab tappability issue caused by `Stack` widget absorbing pointer events
- Fixed `saveDuration` method not being wired to the audio state handler
