"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(12,12,10,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Jerico Jacob
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "6px",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    minHeight: "44px",
                    transition: "all 0.2s",
                    color: isActive ? "#d4415a" : "var(--text-secondary)",
                    background: isActive ? "rgba(175,32,58,0.10)" : "transparent",
                    border: isActive ? "1px solid rgba(175,32,58,0.3)" : "1px solid transparent",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile button */}
        <button
          style={{
            display: "none",
            minHeight: "44px",
            minWidth: "44px",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="show-mobile"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--line)",
            background: "var(--bg)",
            padding: "0.75rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  color: isActive ? "#d4415a" : "var(--text-secondary)",
                  background: isActive ? "rgba(175,32,58,0.10)" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
