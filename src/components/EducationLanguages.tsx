"use client";

import { education, languages } from "@/data/portfolio";
import { educationDe, languagesDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";

export default function EducationLanguages() {
  const { language } = useLanguage();
  const educationContent = language === "de" ? educationDe : education;
  const languageContent = language === "de" ? languagesDe : languages;
  return (
    <Section
      id="education"
      eyebrow={language === "de" ? "06 · Ausbildung & Sprachen" : "06 · Education & Languages"}
      title={language === "de" ? "Ausbildung & Sprachen." : "Education & languages."}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-xl border border-edge bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{language === "de" ? "Ausbildung" : "Education"}</h3>
            <p className="mt-3 text-lg font-semibold text-ink">{educationContent.degree}</p>
            <p className="mt-1 text-sm text-muted">{educationContent.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{educationContent.graduation}</p>
            <p className="mt-4 border-t border-edge pt-4 text-sm text-muted">{educationContent.previous}</p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="h-full rounded-xl border border-edge bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{language === "de" ? "Sprachen" : "Languages"}</h3>
            <ul className="mt-3 space-y-3">
              {languageContent.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-edge pb-3 last:border-b-0">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="text-sm text-muted">{item.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
