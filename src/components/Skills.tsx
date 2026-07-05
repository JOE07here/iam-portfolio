import { skills } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Badge from "./Badge";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="What I work with."
      description="Grouped by domain — from core IAM engineering to the governance and cloud identity layers on top."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
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
