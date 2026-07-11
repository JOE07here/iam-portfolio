"use client";

import { experience } from "@/data/portfolio";
import { experienceDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";
import Badge from "./Badge";

export default function Experience() {
  const { language } = useLanguage();
  const content = language === "de" ? experienceDe : experience;
  return (
    <Section
      id="experience"
      eyebrow={language === "de" ? "03 · Erfahrung" : "03 · Experience"}
      title={language === "de" ? "Wo ich praktische Erfahrung gesammelt habe." : "Where I've done the work."}
      description={language === "de" ? "Enterprise-IAM-Betrieb und Engineering — ohne vertrauliche Kundendetails." : "Enterprise IAM operations and engineering — described without client-confidential detail."}
    >
      <ol className="relative space-y-10 border-l border-edge pl-8">
        {content.map((item, i) => (
          <li key={item.role} className="relative">
            {/* Timeline dot */}
            <span
              className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />
            <Reveal delay={i * 100}>
              <article className="rounded-xl border border-edge bg-surface p-6 sm:p-8">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.company} · {item.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1 text-accent" aria-hidden="true">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
