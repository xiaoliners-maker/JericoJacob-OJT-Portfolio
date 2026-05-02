---
title: "Week 9 — H4M Finalization & Vercel Deployment"
slug: "week-09"
period: "Apr 13–17, 2026"
week: 9
tags: ["Vercel", "Deployment", "Bug Fixes", "MediTrack", "Firebase", "Testing"]
---

## Overview

Final stretch for the Hack4Mapandan submission. Fixed deployment issues on Vercel, resolved backend bugs, and conducted thorough end-to-end testing across both platforms.

## Day-by-Day

**Apr 13** — Fixed frontend and backend bugs in MediTrack — including SPA routing issues on the deployed Vercel application (fixed via `vercel.json` rewrites configuration).

**Apr 14** — Finalized the MediTrack H4M submission: resolved remaining bugs, polished deployment, and improved UI/UX for the final version.

**Apr 15** — Conducted thorough application testing across all core flows — patient login, doctor alert creation, medication logging, and profile editing.

**Apr 16** — Continued MediTrack mobile integration and revalidated Firebase backend connectivity end-to-end.

**Apr 17** — Performed comprehensive bug hunting and fixes across the entire MediTrack system.

## Technical Highlights

- **Vercel SPA fix**: Added `vercel.json` with rewrite rule `{ "source": "/(.*)", "destination": "/" }` to handle client-side routing
- Firebase Firestore composite index created for `log_entries` to support adherence streak queries
- Streak computation logic verified to mirror the Flutter Dart implementation
