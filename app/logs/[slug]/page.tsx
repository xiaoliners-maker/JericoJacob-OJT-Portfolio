import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllLogSlugs, getLogBySlug, getAllLogMeta } from "@/lib/content";
import Link from "next/link";
import Badge from "@/components/atoms/Badge";

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allMeta = getAllLogMeta();
  const meta = allMeta.find((m) => m.slug === slug);
  if (!meta) return {};
  return {
    title: `${meta.title} — Jerico P. Jacob`,
    description: `Week ${meta.week} internship log: ${meta.period}`,
  };
}

export default async function LogPage({ params }: Props) {
  const { slug } = await params;
  const allSlugs = getAllLogSlugs();
  if (!allSlugs.includes(slug)) notFound();

  const log = await getLogBySlug(slug);
  const allMeta = getAllLogMeta();
  const currentIndex = allMeta.findIndex((m) => m.slug === slug);
  const prev = currentIndex > 0 ? allMeta[currentIndex - 1] : null;
  const next = currentIndex < allMeta.length - 1 ? allMeta[currentIndex + 1] : null;

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
      {/* Back */}
      <Link
        href="/logs"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "0.75rem",
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
          textDecoration: "none",
          marginBottom: "2.5rem",
          minHeight: "44px",
          transition: "color 0.2s",
        }}
      >
        ← All Logs
      </Link>

      {/* Header */}
      <header
        style={{
          marginBottom: "2.5rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span
            style={{
              fontSize: "0.6875rem",
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
              background: "var(--accent-glow)",
              border: "1px solid var(--accent-dim)",
              borderRadius: "4px",
              padding: "0.2em 0.6em",
            }}
          >
            Week {log.week}
          </span>
          <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            {log.period}
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          {log.title}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {log.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="tag" />
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="prose-log" dangerouslySetInnerHTML={{ __html: log.content }} />

      {/* Navigation */}
      <nav
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--line)",
          display: "flex",
          gap: "0.75rem",
        }}
      >
        {prev ? (
          <Link href={`/logs/${prev.slug}`} className="log-nav-link">
            <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "0.375rem" }}>← Previous</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{prev.title}</div>
          </Link>
        ) : <div style={{ flex: 1 }} />}

        {next ? (
          <Link href={`/logs/${next.slug}`} className="log-nav-link" style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "0.375rem" }}>Next →</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{next.title}</div>
          </Link>
        ) : <div style={{ flex: 1 }} />}
      </nav>
    </div>
  );
}
