# Jerico P. Jacob — OJT Portfolio

A data-driven portfolio and activity log built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

Outputs a fully static site to `/out` — deploy to **Vercel** or **Netlify**.

## 🗂 Data Architecture

### Add a Project
Edit `data/projects.json` — no UI code changes needed.

```json
{
  "id": "my-new-project",
  "title": "Project Title",
  "description": "What it does.",
  "techStack": ["React", "Firebase"],
  "completionDate": "2026-05-01",
  "category": "Frontend",
  "featured": false,
  "highlights": ["Key feature 1", "Key feature 2"]
}
```

### Add a Weekly Log
Create a `.md` file in `/content/week-XX.md`:

```markdown
---
title: "Week 11 — New Features"
slug: "week-11"
period: "May 1–5, 2026"
week: 11
tags: ["Next.js", "TypeScript"]
---

## Overview
Your log content here...
```

The new log is automatically picked up — no code changes needed.

## 🧱 Architecture (Lego-Style / SOLID)

```
app/                    # Next.js App Router pages
├── page.tsx            # Home — Hero, Featured, Timeline
├── work/
│   ├── page.tsx        # Server: fetches all projects
│   └── WorkGallery.tsx # Client: filter logic (SRP)
└── logs/
    ├── page.tsx        # All logs index
    └── [slug]/page.tsx # Dynamic log pages (generateStaticParams)

components/
├── atoms/
│   ├── Badge.tsx       # Reusable tag/badge pill
│   └── Button.tsx      # Internal/external link button
├── molecules/
│   ├── ProjectCard.tsx # Project display card
│   ├── LogCard.tsx     # Log preview card
│   └── Timeline.tsx    # Internship timeline
└── layout/
    ├── Nav.tsx         # Persistent navigation
    └── Footer.tsx      # Persistent footer

data/
└── projects.json       # All project data (source of truth)

content/
└── week-XX.md          # Weekly log files (Markdown)

types/
└── index.ts            # TypeScript interfaces (Project, LogMeta, etc.)

lib/
└── content.ts          # Data access layer (getAllProjects, getLogBySlug, etc.)
```

## 🏗 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Data**: Local JSON + Markdown (gray-matter + remark)
- **Deployment**: Vercel

## 👤 Intern Info

- **Name**: Jerico P. Jacob
- **University**: University of Eastern Pangasinan
