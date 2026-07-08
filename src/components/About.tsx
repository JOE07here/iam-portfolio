import { about } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="IAM engineer by practice, security architect by direction."
    >
      <Reveal>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-edge bg-surface p-5">
              <p className="font-mono text-2xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="space-y-4 rounded-xl border border-edge bg-surface p-6">
            {about.facts.map((fact) => (
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
