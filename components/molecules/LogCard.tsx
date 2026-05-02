import Link from "next/link";
import type { LogMeta } from "@/types";
import Badge from "@/components/atoms/Badge";

interface LogCardProps {
  log: LogMeta;
}

export default function LogCard({ log }: LogCardProps) {
  return (
    <Link href={`/logs/${log.slug}`} className="log-card">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span className="week-badge">W{String(log.week).padStart(2, "0")}</span>
        <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          {log.period}
        </span>
      </div>
      <h3 style={{ fontSize: "0.9rem", fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontWeight: 400, lineHeight: 1.4, margin: 0 }}>
        {log.title}
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.3rem" }}>
        {(log.tags ?? []).slice(0, 4).map((tag) => (
          <Badge key={tag} label={tag} variant="tag" />
        ))}
      </div>
    </Link>
  );
}