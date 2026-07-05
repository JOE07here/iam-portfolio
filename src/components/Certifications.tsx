import { certifications, certificationsNote } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 · Certifications"
      title="Certifications."
      description="Microsoft security and identity certifications, plus Okta professional certification."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.code} delay={i * 60}>
            <article className="flex h-full flex-col rounded-xl border border-edge bg-surface p-6 transition hover:border-accent/50">
              <p className="font-mono text-2xl font-bold text-accent">{cert.code}</p>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-ink">{cert.name}</h3>
              <p className="mt-2 font-mono text-xs text-muted">
                {cert.issuer} · {cert.period}
              </p>
              <div className="mt-auto pt-5">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Verify credential
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="text-sm text-muted/70">Credential link placeholder</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        {certificationsNote}
      </p>
    </Section>
  );
}
