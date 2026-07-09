import { contact, site } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="07 · Contact" title="Get in touch." description={contact.blurb}>
      <Reveal>
        <div className="rounded-2xl border border-edge bg-surface p-8 text-center sm:p-12">
          <p className="mx-auto max-w-2xl text-xl font-semibold leading-snug text-ink sm:text-2xl">
            {contact.cta}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              Email Me
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            {/* mailto: does nothing on machines without a mail app — copy is the fallback */}
            <CopyEmail email={site.email} />
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn{" "}
              <span className="btn-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub{" "}
              <span className="btn-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <p className="mt-8 font-mono text-sm text-muted">
            Based in {site.location} · {site.email}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
