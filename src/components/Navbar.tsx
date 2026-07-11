"use client";

import { useState } from "react";
import { site } from "@/data/portfolio";
import ThemeModeToggle from "./ThemeModeToggle";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navLinks = language === "de" ? [
    { href: "#about", label: "Über mich" }, { href: "#skills", label: "Kenntnisse" },
    { href: "#experience", label: "Erfahrung" }, { href: "#projects", label: "Projekte" },
    { href: "#certifications", label: "Zertifikate" }, { href: "#education", label: "Ausbildung" },
    { href: "#research", label: "Forschung" }, { href: "#contact", label: "Kontakt" },
  ] : [
    { href: "#about", label: "About" }, { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" }, { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" }, { href: "#education", label: "Education" },
    { href: "#research", label: "Research" }, { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-background/80 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-ink">
          <span className="text-accent">~/</span>
          {site.name.toLowerCase().replace(/\s+/g, "-")}
        </a>

        <div className="flex items-center gap-2 md:gap-5">
          {/* Desktop links */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm text-muted transition hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center rounded-md border border-edge p-0.5 text-xs" aria-label="Language selection">
            {(["en", "de"] as const).map((code) => (
              <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code}
                className={`rounded px-2 py-1 font-mono uppercase transition ${language === code ? "bg-accent text-background" : "text-muted hover:text-ink"}`}>
                {code}
              </button>
            ))}
          </div>

          <ThemeModeToggle />

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="rounded-md border border-edge p-2 text-muted transition hover:text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-nav" className="space-y-1 border-t border-edge bg-background px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-2 py-2 text-sm text-muted transition hover:bg-surface hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
