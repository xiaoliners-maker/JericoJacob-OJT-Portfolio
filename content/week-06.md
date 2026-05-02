---
title: "Week 6 — Edit Profile, Avatar Upload & Push Notifications"
slug: "week-06"
period: "Mar 16–19, 2026"
week: 6
tags: ["Flutter", "Supabase", "FCM", "Push Notifications", "MediTrack"]
---

## Overview

Feature-heavy week. Implemented three major capabilities: profile editing, avatar image upload (cross-platform), and push notification reminders via Firebase Cloud Messaging.

## Day-by-Day

**Mar 16** — Implemented **Edit Profile** feature in the MediTrack mobile app — allowing users to update their personal information (name, contact, preferences) saved to Firestore.

**Mar 17** — Added **image avatar upload** feature to both the mobile app and the web portal. Used **Supabase Storage** as the cloud storage layer for avatar images (Firebase Spark plan limitation prevented native Storage use).

**Mar 18** — Integrated **FCM (Firebase Cloud Messaging)** push notification alerts in the MediTrack mobile app to remind patients of upcoming medication schedules.

**Mar 19** — Attended the **Base Build Mapandan** community engagement event.

## Technical Highlights

- Supabase chosen as avatar storage workaround (Firebase Spark plan has no Storage)
- FCM setup required `google-services.json` configuration and background handler registration in Flutter
- Edit Profile writes back to Firestore `users` collection on both platforms consistently

## Challenges

FCM on Android required handling both **foreground** and **background** notification states separately in Flutter. The `FirebaseMessaging.onBackgroundMessage` handler had to be a top-level function, not a class method — a tricky Flutter constraint.
