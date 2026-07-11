"use client";

import { availabilityInfo, contact, site } from "@/data/portfolio";
import { availabilityInfoDe, contactDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  const { language } = useLanguage();
  const content = language === "de" ? contactDe : contact;
  // Only rows explicitly filled in portfolio.ts are shown
  const availability = (language === "de" ? availabilityInfoDe : availabilityInfo).filter((row) => row.value);

  return (
    <Section id="contact" eyebrow={language === "de" ? "08 · Kontakt" : "08 · Contact"} title={language === "de" ? "Kontakt aufnehmen." : "Get in touch."} description={content.blurb}>
      <Reveal>
        <div className="rounded-2xl border border-edge bg-surface p-8 text-center sm:p-12">
          <p className="mx-auto max-w-2xl text-xl font-semibold leading-snug text-ink sm:text-2xl">
            {content.cta}
          </p>

          {availability.length > 0 ? (
            <dl className="mx-auto mt-6 max-w-xl space-y-1.5 text-sm">
              {availability.map((row) => (
                <div key={row.label} className="flex flex-wrap justify-center gap-x-2">
                  <dt className="text-muted">{row.label}:</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Email UI only exists once PROFESSIONAL_EMAIL is set in portfolio.ts */}
            {site.email ? (
              <>
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  {language === "de" ? "E-Mail senden" : "Email Me"}
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {/* mailto: does nothing on machines without a mail app — copy is the fallback */}
                <CopyEmail email={site.email} />
              </>
            ) : null}
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
            {language === "de" ? "Standort: Deutschland" : `Based in ${site.location}`}
            {site.email ? ` · ${site.email}` : ""}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
