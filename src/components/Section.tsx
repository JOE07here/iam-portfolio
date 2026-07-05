import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/** Shared section shell: anchor id, numbered eyebrow, heading, optional intro. */
export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-accent">{eyebrow}</p>
          <h2 id={`${id}-heading`} className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? <p className="mt-4 max-w-3xl leading-relaxed text-muted">{description}</p> : null}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
