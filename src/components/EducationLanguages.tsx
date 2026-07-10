import { education, languages } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function EducationLanguages() {
  return (
    <Section
      id="education"
      eyebrow="06 · Education & Languages"
      title="Education & languages."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-xl border border-edge bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Education</h3>
            <p className="mt-3 text-lg font-semibold text-ink">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.graduation}</p>
            <p className="mt-4 border-t border-edge pt-4 text-sm text-muted">{education.previous}</p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="h-full rounded-xl border border-edge bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Languages</h3>
            <ul className="mt-3 space-y-3">
              {languages.map((language) => (
                <li key={language.name} className="flex items-baseline justify-between gap-4 border-b border-edge pb-3 last:border-b-0">
                  <span className="font-semibold text-ink">{language.name}</span>
                  <span className="text-sm text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
