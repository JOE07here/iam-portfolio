"use client";

import { about } from "@/data/portfolio";
import { aboutDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  const { language } = useLanguage();
  const content = language === "de" ? aboutDe : about;
  return (
    <Section
      id="about"
      eyebrow={language === "de" ? "01 · Über mich" : "01 · About"}
      title={language === "de" ? "IAM Engineer aus Erfahrung, Security Architect als Ziel." : "IAM engineer by practice, security architect by direction."}
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5">
          {content.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="space-y-4 rounded-xl border border-edge bg-surface p-6">
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
