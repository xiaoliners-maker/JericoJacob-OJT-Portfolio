export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "2.5rem 0", marginTop: "6rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "row" as const, alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" as const }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", margin: 0 }}>
          © 2026 Jerico P. Jacob · Makerspace Innovhub OJT
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {[
            { href: "https://github.com/maecryshel/MediTrack-Web-System", label: "GitHub" },
            { href: "https://meditrack-web-system.vercel.app/login", label: "MediTrack Live" },
          ].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
