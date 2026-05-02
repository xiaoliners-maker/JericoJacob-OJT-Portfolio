"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/types";
import ProjectCard from "@/components/molecules/ProjectCard";

interface WorkGalleryProps {
  projects: Project[];
}

const ALL = "All";

export default function WorkGallery({ projects }: WorkGalleryProps) {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL, ...cats];
  }, [projects]);

  const techOptions = useMemo(() => {
    const techs = new Set(projects.flatMap((p) => p.techStack));
    return Array.from(techs).sort();
  }, [projects]);

  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [activeTech, setActiveTech] = useState<string>(ALL);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = activeCategory === ALL || p.category === activeCategory;
      const techMatch = activeTech === ALL || p.techStack.includes(activeTech);
      return catMatch && techMatch;
    });
  }, [projects, activeCategory, activeTech]);

  const chipBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.35rem 0.875rem",
    borderRadius: "6px",
    fontSize: "0.75rem",
    fontFamily: "var(--font-mono)",
    cursor: "pointer",
    minHeight: "44px",
    border: "1px solid var(--bg-border)",
    background: "transparent",
    color: "var(--text-secondary)",
    transition: "all 0.15s",
  };

  const chipActive: React.CSSProperties = {
    ...chipBase,
    background: "var(--accent-glow)",
    border: "1px solid var(--accent-dim)",
    color: "var(--accent)",
  };

  return (
    <div>
      {/* Category filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={activeCategory === cat ? chipActive : chipBase}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", alignItems: "center", marginBottom: "2rem" }}>
        <span
          style={{
            fontSize: "0.625rem",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginRight: "0.25rem",
          }}
        >
          Tech
        </span>
        {[ALL, ...techOptions].map((tech) => {
          const active = activeTech === tech;
          return (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.2rem 0.625rem",
                borderRadius: "4px",
                fontSize: "0.6875rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                minHeight: "44px",
                background: active ? "rgba(201,169,110,0.1)" : "transparent",
                border: active ? "1px solid var(--accent-dim)" : "1px solid var(--bg-border)",
                color: active ? "var(--accent)" : "var(--text-muted)",
                transition: "all 0.15s",
              }}
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p
        style={{
          fontSize: "0.6875rem",
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
          marginBottom: "1.5rem",
          letterSpacing: "0.04em",
        }}
      >
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "5rem 0",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
          }}
        >
          No projects match the selected filters.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
