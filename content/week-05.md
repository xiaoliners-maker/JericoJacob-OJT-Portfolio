---
title: "Week 5 — Flutter Mobile App & Firebase Integration"
slug: "week-05"
period: "Mar 9–13, 2026"
week: 5
tags: ["Flutter", "Firebase", "Firestore", "MediTrack", "Mobile"]
---

## Overview

The most technically dense week yet. Revised the MediTrack frontend, began building the Flutter mobile app from scratch, and wired both platforms to Firebase.

## Day-by-Day

**Mar 9** — Revised MediTrack frontend; planned Firebase database integration architecture and Firestore collection schema.

**Mar 10** — Started building the Flutter-based mobile application. Set up project structure, routing, and initial screens.

**Mar 11** — Developed the MediTrack mobile app and integrated it with the web system. Resolved data display issues caused by Firestore read/write mismatches.

**Mar 12** — Continued full-stack integration. Implemented **Firebase Auth** for user authentication and **Firestore** for real-time data connectivity across both platforms.

**Mar 13** — Improved and refined MediTrack frontend design and UI/UX for better usability.

## Technical Highlights

- **Flutter** used for cross-platform mobile (Android-first, tested on Samsung Galaxy / Android 12)
- **Firebase Auth** for role-based login (doctor vs patient)
- **Firestore** real-time sync between web and mobile
- Debugged data display issue: alerts were not reaching patients due to missing Firestore writes in the doctor portal

## Key Learnings

Integrating two separate codebases (React web + Flutter mobile) to a single Firebase backend requires very disciplined data modeling. Firestore collection names and document fields must be agreed upon by both sides before development begins.
