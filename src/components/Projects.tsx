import { projects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Badge from "./Badge";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Projects & case studies."
      description="Selected work across identity governance, federation, and non-human identity security."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 80}>
            <article className="card-glow group flex h-full flex-col rounded-xl border border-edge bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 sm:p-8">
              <h3 className="text-lg font-semibold leading-snug text-ink">{project.title}</h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent">Problem</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                    What I built / analyzed
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted">{project.built}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                    Outcome / learning
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted">{project.outcome}</dd>
                </div>
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool}>
                    <Badge>{tool}</Badge>
                  </li>
                ))}
              </ul>

              {/* Rendered only when a real URL exists — nothing shows otherwise */}
              {project.caseStudyUrl ? (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition group-hover:gap-2.5"
                >
                  View Project
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
