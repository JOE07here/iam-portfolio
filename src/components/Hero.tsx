"use client";

import { hero, site } from "@/data/portfolio";
import { heroDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Badge from "./Badge";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

export default function Hero() {
  const { language } = useLanguage();
  const content = language === "de" ? heroDe : hero;
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 sm:pt-44">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-alt/30 bg-accent-alt/10 px-3 py-1 font-mono text-xs text-accent-alt">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-alt opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-alt" />
            </span>
            {content.availability}
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          {/* Static lead line — the professional identity, always readable */}
          <p className="mt-5 max-w-4xl text-xl font-semibold leading-snug text-ink/90 sm:text-2xl">
            {content.roleLine}
          </p>

          {/* Subtle terminal-style typewriter cycling through focus areas */}
          <p className="mt-3 min-h-[1.5em] max-w-4xl font-mono text-sm text-muted sm:text-base">
            <span className="text-accent" aria-hidden="true">
              ~${" "}
            </span>
            <Typewriter phrases={content.taglines} />
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{content.subheadline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              {language === "de" ? "Projekte ansehen" : "View Projects"}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            {/* Appears automatically once site.cvUrl is set in portfolio.ts */}
            {site.cvUrl ? (
              <a href={site.cvUrl} className="btn btn-secondary" download>
                {language === "de" ? "Lebenslauf herunterladen" : "Download CV"}
              </a>
            ) : null}
            <a href="#contact" className="btn btn-ghost">
              {language === "de" ? "Kontakt" : "Contact Me"}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Key platforms and certifications">
            {content.badges.map((badge) => (
              <li key={badge}>
                <Badge>{badge}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
