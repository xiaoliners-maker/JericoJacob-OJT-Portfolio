import type { Metadata } from "next";
import { getAllLogMeta } from "@/lib/content";
import LogCard from "@/components/molecules/LogCard";

export const metadata: Metadata = {
  title: "Weekly Logs — Jerico P. Jacob",
  description: "Week-by-week internship learning logs from Makerspace Innovhub OJT.",
};

export default function LogsPage() {
  const logs = getAllLogMeta();

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
      <div className="animate-enter animate-enter-1" style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--line)" }}>
        <p style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
          Logs
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--text-primary)", margin: "0 0 0.75rem", lineHeight: 1.1 }}>
          Weekly Logs
        </h1>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", maxWidth: "520px", lineHeight: 1.7 }}>
          11 weeks of learning, building, and shipping. Each log captures what was built, learned, and challenged.
        </p>
      </div>

      <div
        className="animate-enter animate-enter-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {logs.map((log) => <LogCard key={log.slug} log={log} />)}
      </div>
    </div>
  );
}
