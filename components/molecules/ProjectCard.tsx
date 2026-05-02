"use client";

import type { Project } from "@/types";
import Badge from "@/components/atoms/Badge";

interface ProjectCardProps {
  project: Project & { apkUrl?: string };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--accent-light)" }}>
          {project.category}
        </span>
        <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          {new Date(project.completionDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </span>
      </div>

      <h3 style={{ fontSize: "1rem", fontFamily: "var(--font-serif)", color: "var(--text-primary)", marginBottom: "0.5rem", lineHeight: 1.3, fontWeight: 400 }}>
        {project.title}
      </h3>

      <div style={{ height: "1px", background: "var(--line)", margin: "0.75rem 0" }} />

      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>
        {project.description}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "flex", flexDirection: "column" as const, gap: "0.3rem" }}>
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} style={{ display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            <span style={{ color: "var(--accent-dim)", flexShrink: 0 }}>—</span>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.375rem", marginBottom: "1.25rem" }}>
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} variant="tech" />
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link-primary">Live ↗</a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="card-link-ghost">GitHub ↗</a>
        )}
        {project.apkUrl && (
          <a href={project.apkUrl} download className="card-link-primary">Get APK ↓</a>
        )}
      </div>
    </article>
  );
}