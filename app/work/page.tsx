import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import WorkGallery from "./WorkGallery";

export const metadata: Metadata = {
  title: "Work — Jerico P. Jacob",
  description: "All projects, features, and technical work from the OJT internship at Makerspace Innovhub.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
      <div className="animate-enter animate-enter-1" style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--line)" }}>
        <p style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
          Portfolio
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--text-primary)", margin: "0 0 0.75rem", lineHeight: 1.1 }}>
          Work
        </h1>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", maxWidth: "520px", lineHeight: 1.7 }}>
          All projects and activities completed during the 11-weeks internship. Filter by category or tech stack.
        </p>
      </div>
      <div className="animate-enter animate-enter-2">
        <WorkGallery projects={projects} />
      </div>
    </div>
  );
}
