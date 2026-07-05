import { research } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Research() {
  return (
    <Section id="research" eyebrow="06 · Research" title={research.title}>
      <Reveal className="max-w-3xl space-y-5">
        {research.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {research.areas.map((area, i) => (
          <Reveal key={area.title} delay={i * 60}>
            <div className="h-full rounded-xl border border-edge bg-surface p-6">
              <h3 className="font-semibold text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-ink">
          <span className="font-mono text-accent">→ </span>
          {research.note}
        </p>
      </Reveal>
    </Section>
  );
}
