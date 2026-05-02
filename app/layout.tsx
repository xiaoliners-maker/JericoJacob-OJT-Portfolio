import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Jerico P. Jacob — OJT Portfolio",
  description: "Internship portfolio of Jerico P. Jacob at Makerspace Innovhub. Full-stack developer — React, Flutter, Firebase.",
  keywords: ["Jerico Jacob", "MediTrack", "Flutter", "React", "Firebase", "Makerspace Innovhub", "OJT"],
  openGraph: {
    title: "Jerico P. Jacob — OJT Portfolio",
    description: "Full-stack internship portfolio: MediTrack, PandanChain, and more.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
        <Nav />
        <main style={{ paddingTop: "56px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
