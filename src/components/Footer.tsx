"use client";

import { site } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-edge px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">
          {language === "de" ? "Identity & Access Management · Identity Security · Cloud Identity" : "Identity & Access Management · Identity Security · Cloud Identity"}
        </p>
      </div>
    </footer>
  );
}
