"use client";

import { skills } from "@/data/portfolio";
import { skillsDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";
import Badge from "./Badge";

export default function Skills() {
  const { language } = useLanguage();
  const content = language === "de" ? skillsDe : skills;
  return (
    <Section
      id="skills"
      eyebrow={language === "de" ? "02 · Kenntnisse" : "02 · Skills"}
      title={language === "de" ? "Meine fachlichen Schwerpunkte." : "What I work with."}
      description={language === "de" ? "Nach Themengebieten gegliedert — von IAM Engineering bis Identity Governance und Cloud Identity." : "Grouped by domain — from core IAM engineering to the governance and cloud identity layers on top."}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="h-full rounded-xl border border-edge bg-surface p-6 transition hover:border-accent/50">
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
