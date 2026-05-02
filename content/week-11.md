---
week: 11
slug: week-11
title: "Bug Fixes, Hosting & Portfolio"
period: "Apr 27 – May 2, 2026"
tags: ["MediTrack", "Debugging", "Vercel", "Next.js", "Tailwind CSS"]
---

## Overview

The final stretch of OJT focused on stabilizing everything built over the past ten weeks — squashing bugs across both platforms, resolving a Vercel deployment issue, and starting work on this portfolio and activity log.

## Daily Breakdown

**April 27** — Fixed bugs in the MediTrack web platform related to mobile app connectivity. The web and mobile clients were losing sync on certain patient record updates.

**April 28** — Continued resolving MediTrack web and mobile bugs. Traced a race condition in the Firestore listener that caused stale data to appear on the mobile app after a web-side update.

**April 29** — Resolved Vercel hosting issues. The production deployment was failing due to a misconfigured environment variable in the Vercel project settings; corrected and redeployed successfully.

**April 30** — Further bug fixes in the MediTrack mobile application. Addressed edge cases in the offline caching layer that caused crashes when connectivity was restored.

**May 2** — Began developing this portfolio and activity log using Next.js and Tailwind CSS, documenting the full OJT journey from onboarding through final deployment.

## Key Takeaways

- Debugging across web and mobile simultaneously requires careful logging on both ends — the bug often lives at the boundary between them.
- Environment variable mismatches between local and production are a common but easy-to-miss source of deployment failures.
- Building in public (this portfolio) is itself a form of documentation that reinforces what was learned.
