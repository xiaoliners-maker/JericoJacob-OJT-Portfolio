import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "ghost";
}

export default function Button({ href, label, external = false, variant = "primary" }: ButtonProps) {
  const isPrimary = variant === "primary";

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.5rem 1.125rem",
    borderRadius: "6px",
    fontSize: "0.8125rem",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.02em",
    textDecoration: "none",
    minHeight: "44px",
    transition: "all 0.2s",
    cursor: "pointer",
    ...(isPrimary
      ? { background: "#af203a", color: "#ffffff", border: "1px solid #af203a", fontWeight: 500 }
      : { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--bg-border)" }),
  };

  const ArrowIcon = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 1H11M11 1V9.5M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{label}<ArrowIcon /></a>;
  }
  return <Link href={href} style={style}>{label}</Link>;
}
