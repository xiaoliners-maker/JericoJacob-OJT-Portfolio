import { getFeaturedProjects, getAllLogMeta, getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/molecules/ProjectCard";
import Button from "@/components/atoms/Button";
import AnimatedStats from "@/components/molecules/AnimatedStats";

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    "React.js": (
      <svg width="20" height="20" viewBox="-11.5 -10.23 23 20.46" xmlns="http://www.w3.org/2000/svg">
        <circle r="2.05" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="1.15">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    "Next.js": (
      <svg width="20" height="20" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#fff"/>
        <path d="M149 27.5A90 90 0 1016.6 153.3L109 37.5a3 3 0 014.6 0l31.4 43V153a90 90 0 004-126z" fill="#000"/>
        <path d="M163 128.4L126 78.5a3 3 0 00-4.6 0L82 128v29.5a90 90 0 0081-29z" fill="#000"/>
      </svg>
    ),
    "Flutter": (
      <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0h17L10.5 20.5l-8.5-8.5z" fill="#54C5F8"/>
        <path d="M13 0l20.5 20.5L27 27 4.5 4.5z" fill="#29B6F6"/>
        <path d="M10.5 27.5L27 44H10L2 36z" fill="#01579B"/>
        <path d="M27 44l-8.5-8.5 8.5-8.5 8.5 8.5z" fill="#29B6F6"/>
        <path d="M18.5 35.5L27 44h10L19 27z" fill="#29B6F6" opacity="0.6"/>
      </svg>
    ),
    "Firebase": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8 26.6L9.4 4.7a.4.4 0 01.74-.08l3.5 6.6z" fill="#FFA000"/>
        <path d="M19.4 12.3l2.9-5.6a.4.4 0 01.72.08l3.2 19.8z" fill="#F57F17"/>
        <path d="M5.8 26.6l7.8-14.6 4.5 8.4z" fill="#FFCA28"/>
        <path d="M5.8 26.6l11.5-2.3 8.9 2.3-9.2-14z" fill="#FFA000"/>
      </svg>
    ),
    "TypeScript": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="3" fill="#3178C6"/>
        <path d="M18.6 17.6v1.8c.5.3 1 .5 1.6.5 1.8 0 3-.9 3-2.5 0-1.3-.8-2-2.2-2.6-.9-.4-1.2-.6-1.2-1.1 0-.4.3-.7.9-.7.6 0 1.2.3 1.6.6v-1.8c-.4-.2-1-.3-1.6-.3-1.7 0-2.9.9-2.9 2.4 0 1.2.8 1.9 2.1 2.5 1 .4 1.3.7 1.3 1.2 0 .5-.4.8-1.1.8-.7 0-1.4-.4-1.5-.8zM9.5 13.5H7.5v-2h5.8v2H11.3V22H9.5z" fill="#fff"/>
      </svg>
    ),
    "Tailwind CSS": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C17.4 13 18.5 14.1 21 14.1c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C19.6 9.1 18.5 8 16 8zm-5 6.1c-2.7 0-4.3 1.3-5 4 1-1.3 2.2 1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C12.4 19.1 13.5 20.2 16 20.2c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C14.6 15.2 13.5 14.1 11 14.1z" fill="#06B6D4"/>
      </svg>
    ),
    "Supabase": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3 2.5a1.5 1.5 0 00-2.6 1v13.2H5.5a1.5 1.5 0 00-1 2.6l11.2 12.2a1.5 1.5 0 002.6-1V18.3h9.2a1.5 1.5 0 001-2.6z" fill="#3ECF8E"/>
      </svg>
    ),
    "Node.js": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.2L4.2 10v12L16 28.8 27.8 22V10z" fill="#339933"/>
        <path d="M16 8.5v15M9 12.3l7 4 7-4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Git": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.1 14.6L17.4 1.9a2 2 0 00-2.8 0L12 4.5l3.5 3.5a2.4 2.4 0 013 3.1L22 14.6a2.4 2.4 0 11-1.4 1.4l-3.3-3.3v8.6a2.4 2.4 0 11-2 0V12.4a2.4 2.4 0 01-1.3-3.2L10.6 5.8 2 14.4a2 2 0 000 2.8L14.7 30a2 2 0 002.8 0L30.1 17.4a2 2 0 000-2.8z" fill="#F05032"/>
      </svg>
    ),
    "Vercel": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L30 28H2z" fill="#fff"/>
      </svg>
    ),
    "Dart": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 4.5h10l8 8v10l-3.5 5h-10l-8-8V8z" fill="#0175C2"/>
        <path d="M13 11h4l3 3v4l-3 3h-4l-3-3v-4z" fill="#fff"/>
      </svg>
    ),
    "Firestore": (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8 26.6L9.4 4.7a.4.4 0 01.74-.08l3.5 6.6z" fill="#FFA000"/>
        <path d="M19.4 12.3l2.9-5.6a.4.4 0 01.72.08l3.2 19.8z" fill="#F57F17"/>
        <path d="M5.8 26.6l7.8-14.6 4.5 8.4z" fill="#FFCA28"/>
        <path d="M5.8 26.6l11.5-2.3 8.9 2.3-9.2-14z" fill="#FFA000"/>
      </svg>
    ),
  };

  return <>{icons[name] ?? <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--accent-light)" }}>{name.slice(0, 2).toUpperCase()}</span>}</>;
};

// ─── Inline Timeline (replaces the imported Timeline component) ───────────────

const timelineItems = [
  {
    week: "Week 01–02 · Feb 2026",
    title: "Onboarding & Environment Setup",
    body: "Configured dev environment, learned codebase conventions, set up Firebase project and Supabase schema.",
  },
  {
    week: "Week 03–04",
    title: "MediTrack Web — Core UI",
    body: "Built patient registration flow, form validation with Zod, and responsive layouts using Tailwind CSS.",
  },
  {
    week: "Week 05–06",
    title: "Authentication & Role-Based Access",
    body: "Implemented Supabase Auth with row-level security and distinct admin / doctor / staff permission layers.",
  },
  {
    week: "Week 07–08",
    title: "MediTrack Mobile — Flutter",
    body: "Developed the Flutter companion app with Firestore sync, offline caching, and provider state management.",
  },
  {
    week: "Week 09–10 · Apr 2026",
    title: "Testing, Deployment & Handoff",
    body: "Deployed web app to Vercel, packaged Android APK, wrote technical documentation, and presented to stakeholders.",
  },
  {
    week: "Week 11 · Apr 27 – May 2, 2026",
    title: "Bug Fixes, Hosting & Portfolio",
    body: "Fixed MediTrack web and mobile connectivity bugs, resolved Vercel hosting issues, and began building this portfolio and activity log with Next.js and Tailwind CSS.",
  },
];

const InlineTimeline = () => (
  <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
    {/* Vertical rail */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: "8px",
        bottom: "8px",
        width: "1px",
        background: "var(--line)",
      }}
    />

    {timelineItems.map((item, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          paddingBottom: i < timelineItems.length - 1 ? "2rem" : 0,
        }}
      >
        {/* Dot */}
        <div
          style={{
            position: "absolute",
            left: "-1.75rem",
            top: "6px",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--accent)",
            border: "2px solid var(--background)",
            transform: "translateX(calc(-50% + 0.5px))",
          }}
        />

        {/* Week label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginBottom: "0.25rem",
          }}
        >
          {item.week}
        </p>

        {/* Title */}
        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--text-primary)",
            marginBottom: "0.25rem",
            fontWeight: 400,
          }}
        >
          {item.title}
        </p>

        {/* Body */}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
          }}
        >
          {item.body}
        </p>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featured = getFeaturedProjects();

  // ── Dynamic stats derived from content ──────────────────────────────────────
  const allLogs     = getAllLogMeta();
  const allProjects = getAllProjects();

  const platforms = new Set(
    allProjects.flatMap((p) =>
      p.techStack.some((t) => ["Flutter", "Dart"].includes(t)) ? ["mobile"] : []
    ).concat(
      allProjects.some((p) => p.techStack.some((t) => ["React.js", "Next.js", "HTML5"].includes(t)))
        ? ["web"] : []
    )
  ).size;

  const liveCount = allProjects.filter((p) => p.liveUrl).length;

  const stats = [
    { value: allLogs.length,     label: "Weeks",       desc: "of full-time OJT" },
    { value: allProjects.length, label: "Projects",    desc: "built end-to-end" },
    { value: platforms,          label: "Platforms",   desc: "web & mobile" },
    { value: liveCount,          label: "Live Deploy",  desc: "in production" },
  ];
  // ────────────────────────────────────────────────────────────────────────────

  const techs = [
    "React.js", "Next.js", "Flutter", "Firebase",
    "TypeScript", "Tailwind CSS", "Supabase", "Node.js",
    "Git", "Vercel", "Dart", "Firestore",
  ];

  const doubled = [...techs, ...techs];

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>

      {/* ── Hero ── */}
      <section
        className="animate-enter animate-enter-1"
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap" as const,
        }}
      >
        <div style={{ flex: "1 1 320px" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            {/* ✏️ CHANGE 1: dot <span> removed — plain text label only */}
            <span className="status-badge">
              OJT · Makerspace Innovhub · 2026
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem",
            }}
          >
            Jerico P. Jacob
          </h1>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.0625rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "580px",
              marginBottom: "0.75rem",
            }}
          >
            Front-End &amp; Mobile Developer intern at{" "}
            <span style={{ color: "var(--text-primary)" }}>Makerspace Innovhub</span>.
            Built full-stack systems with React, Flutter, and Firebase over{" "}
            <span style={{ color: "var(--accent)" }}>10 weeks</span>.
          </p>

          <p
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginBottom: "2rem",
              letterSpacing: "0.04em",
            }}
          >
            University of Eastern Pangasinan · Feb–Apr 2026
          </p>

          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.625rem" }}>
            <Button href="/work" label="View All Work" variant="primary" />
            <Button href="/logs" label="Weekly Logs" variant="ghost" />
            <Button
              href="https://meditrack-web-system.vercel.app/login"
              label="MediTrack Live"
              external
              variant="ghost"
            />
          </div>
        </div>

        <div style={{ flex: "0 0 auto" }}>
          <div
            style={{
              width: "clamp(200px, 22vw, 280px)",
              aspectRatio: "3/4",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jerico.jpg"
              alt="Jerico P. Jacob"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Stats (animated count-up on scroll) ── */}
      <AnimatedStats stats={stats} />

      {/* ── Featured Projects ── */}
      <section
        className="animate-enter animate-enter-3"
        style={{ padding: "4rem 0", borderBottom: "1px solid var(--line)" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2rem",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Featured Projects
          </h2>
          <Button href="/work" label="All work →" variant="ghost" />
        </div>

        <div className="card-grid">
          {featured.map((project) => {
            if (project.id === "meditrack-mobile") {
              // Strip Live + GitHub, surface only the APK download
              const mobileProject = {
                ...project,
                liveUrl: undefined,
                repoUrl: undefined,
                apkUrl: "https://drive.google.com/drive/folders/1hAnSS8sodqsIYsq07cJEbjKbEsojZhyK?usp=sharing",
              };
              return <ProjectCard key={project.id} project={mobileProject} />;
            }
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section
        className="animate-enter animate-enter-4"
        style={{ padding: "4rem 0", borderBottom: "1px solid var(--line)" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "var(--text-primary)",
            marginBottom: "2rem",
          }}
        >
          Tech Stack
        </h2>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {doubled.map((name, i) => (
              <div key={i} className="tech-pill">
                <TechIcon name={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OJT Timeline ── */}
      <section
        className="animate-enter animate-enter-5"
        style={{ padding: "4rem 0" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            OJT Timeline
          </h2>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            Feb–Apr 2026
          </span>
        </div>

        <InlineTimeline />
      </section>

    </div>
  );
}