import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { LogMeta, LogPost, Project } from "@/types";

const contentDir = path.join(process.cwd(), "content");

export function getAllLogSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md") && fs.statSync(path.join(contentDir, f)).size > 0)
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllLogMeta(): LogMeta[] {
  return getAllLogSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        period: data.period ?? "",
        week: data.week ?? 0,
        tags: data.tags ?? [],
      } as LogMeta;
    })
    .sort((a, b) => a.week - b.week);
}

export async function getLogBySlug(slug: string): Promise<LogPost> {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    period: data.period ?? "",
    week: data.week ?? 0,
    tags: data.tags ?? [],
    content: await marked(content),
  };
}

// ── Projects ──────────────────────────────────────────────────────────────────
const projectsData: Project[] = [
  {
    id: "meditrack-web",
    title: "MediTrack Web System",
    description: "A full-stack Health Maintenance Medication Tracking web platform built for Hack4Mapandan (H4M). Features a doctor dashboard, patient management, prescription monitoring, push notifications, and real-time Firebase integration. Deployed live on Vercel.",
    techStack: ["React.js", "Tailwind CSS", "Firebase", "Firestore", "Supabase", "Vercel"],
    completionDate: "2026-04-17",
    category: "Frontend",
    featured: true,
    liveUrl: "https://meditrack-web-system.vercel.app/login",
    repoUrl: "https://github.com/maecryshel/MediTrack-Web-System",
    highlights: [
      "Role-based authentication (Doctor/Patient)",
      "Real-time Firestore alerts system",
      "Avatar image upload via Supabase",
      "FCM push notification reminders",
      "Vercel production deployment",
    ],
  },
  {
    id: "meditrack-mobile",
    title: "MediTrack Mobile App",
    description: "A cross-platform Flutter mobile application for medication adherence tracking. Integrated with Firebase for real-time data sync with the web platform. Features Edit Profile, avatar upload, push notifications, and role-based access for patients.",
    techStack: ["Flutter", "Dart", "Firebase", "FCM", "Firestore"],
    completionDate: "2026-04-25",
    category: "Mobile",
    featured: true,
    liveUrl: "https://drive.google.com/drive/folders/1hAnSS8sodqsIYsq07cJEbjKbEsojZhyK?usp=sharing",
    highlights: [
      "Cross-platform (Android) via Flutter",
      "Medication schedule display",
      "Firebase Auth with role-based login",
      "Push notification reminders (FCM)",
      "Edit Profile & avatar upload",
    ],
  },
  {
    id: "pandanchain-landing",
    title: "PandanChain Marketing Landing Page",
    description: "Designed and developed the marketing landing page for PandanChain, a Document Management System (DMS) for Mapandan, Pangasinan. Built with HTML5, CSS3, and Tailwind CSS. Iterated through design reviews and pushed final output to GitHub.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "GitHub"],
    completionDate: "2026-02-12",
    category: "Frontend",
    featured: false,
    repoUrl: "https://github.com/xiaoliners-maker/PandanChain-MarketingPage",
    highlights: [
      "Responsive marketing layout",
      "Tailwind CSS utility-first design",
      "GitHub version control workflow",
      "Iterative design revisions",
    ],
  },
  {
    id: "hack4mapandan-ppt",
    title: "Hack4Mapandan H4M Presentation",
    description: "Created the PowerPoint presentation for the Hack4Mapandan (H4M) competition entry — Health Maintenance Medication Tracking. Showcased the MediTrack system's key features, architecture, and impact on medication adherence.",
    techStack: ["Microsoft PowerPoint", "Google Drive"],
    completionDate: "2026-03-03",
    category: "Research",
    featured: false,
    liveUrl: "https://drive.google.com/drive/folders/1alRsYgfg_zGLdYANv8KxCofx0BEpBKbB?usp=sharing",
    highlights: [
      "Hack4Mapandan competition submission",
      "Feature highlights and architecture overview",
      "Health tech impact storytelling",
    ],
  },
  {
    id: "odoo-payroll-research",
    title: "Open HRMS / Odoo Payroll Module Research",
    description: "Authored a technical research paper on the Open HRMS (Odoo) payroll module, covering Salary Structures and Salary Rules architecture. Demonstrated system customizability without modifying core code — aligned with SOLID principles.",
    techStack: ["Google Docs", "Odoo", "Open HRMS"],
    completionDate: "2026-02-19",
    category: "Research",
    featured: false,
    highlights: [
      "Salary Structures & Rules deep-dive",
      "SOLID principles alignment",
      "Philippine payroll BIR compliance research",
    ],
  },
  {
    id: "mapandan-interviews",
    title: "PandanChain Community Interview Transcripts",
    description: "Conducted field interviews with residents of Mapandan, Pangasinan for the PandanChain DMS project. Transcribed audio recordings into clear and accurate written documents for further research and system requirements analysis.",
    techStack: ["Google Docs", "Field Research"],
    completionDate: "2026-02-18",
    category: "Research",
    featured: false,
    highlights: [
      "Community-centered design research",
      "Audio transcription",
      "Stakeholder needs mapping",
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projectsData;
}