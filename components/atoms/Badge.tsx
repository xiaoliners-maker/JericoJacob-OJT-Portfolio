interface BadgeProps {
  label: string;
  variant?: "tech" | "category" | "tag";
}

const variantStyles: Record<string, { background: string; color: string; border: string }> = {
  tech:     { background: "rgba(175,32,58,0.08)",  color: "#d4415a", border: "1px solid rgba(175,32,58,0.22)" },
  category: { background: "rgba(160,160,160,0.08)", color: "#909090", border: "1px solid rgba(160,160,160,0.18)" },
  tag:      { background: "rgba(175,32,58,0.06)",  color: "#b85068", border: "1px solid rgba(175,32,58,0.16)" },
};

export default function Badge({ label, variant = "tech" }: BadgeProps) {
  const s = variantStyles[variant];
  return (
    <span style={{
      display: "inline-block",
      fontSize: "0.6875rem",
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.03em",
      padding: "0.2em 0.6em",
      borderRadius: "4px",
      background: s.background,
      color: s.color,
      border: s.border,
    }}>
      {label}
    </span>
  );
}
