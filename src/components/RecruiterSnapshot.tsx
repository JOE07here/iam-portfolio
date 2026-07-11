"use client";

import { recruiterSnapshot } from "@/data/portfolio";
import { recruiterSnapshotDe } from "@/data/portfolio.de";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

/** Compact scan-first card under the hero: the six facts a recruiter needs
 *  before deciding to keep reading. */
export default function RecruiterSnapshot() {
  const { language } = useLanguage();
  const items = language === "de" ? recruiterSnapshotDe : recruiterSnapshot;
  return (
    <section id="snapshot" aria-label="Recruiter snapshot" className="px-6 pb-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
            <p className="font-mono text-sm text-accent">00 · {language === "de" ? "Profil auf einen Blick" : "Professional Summary"}</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                  <span className="text-accent" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
