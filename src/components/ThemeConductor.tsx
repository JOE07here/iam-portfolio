"use client";

import { useEffect } from "react";

/** Dark palettes cycled automatically. Cloud Silver (light) is manual-only —
 *  auto-flipping dark→light mid-read is jarring rather than subtle. */
const ROTATION = ["blue", "purple", "green", "aurora"];

/** Sections that nudge the theme while scrolled into view. */
const SECTION_THEMES: Record<string, string> = {
  top: "blue",
  skills: "purple",
  projects: "green",
  research: "aurora",
  contact: "blue",
};

/**
 * Drives the automatic theme system: rotates palettes every 20s when idle and
 * adapts to the section in view while scrolling. A manual palette choice
 * (PaletteToggle) pauses automation until the visitor picks "Auto" again.
 * Renders nothing.
 */
export default function ThemeConductor() {
  useEffect(() => {
    const html = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let manual = false;
    try {
      const stored = localStorage.getItem("palette");
      manual = !!stored && stored !== "auto";
    } catch {
      // storage unavailable — treat as auto
    }

    let index = 0;
    let animTimer: ReturnType<typeof setTimeout>;
    let rotateTimer: ReturnType<typeof setInterval>;

    const apply = (theme: string) => {
      if (html.dataset.theme === theme || (!theme && !html.dataset.theme)) return;
      html.classList.add("theme-anim");
      html.dataset.theme = theme;
      const i = ROTATION.indexOf(theme);
      if (i >= 0) index = i;
      clearTimeout(animTimer);
      animTimer = setTimeout(() => html.classList.remove("theme-anim"), 1200);
    };

    const restartRotation = () => {
      clearInterval(rotateTimer);
      if (manual || reduced) return;
      rotateTimer = setInterval(() => {
        index = (index + 1) % ROTATION.length;
        apply(ROTATION[index]);
      }, 20000);
    };

    // Per-section adaptation: the band across the middle of the viewport
    // decides which section is "current".
    const observer = new IntersectionObserver(
      (entries) => {
        if (manual || reduced) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const theme = SECTION_THEMES[entry.target.id];
            if (theme) {
              apply(theme);
              restartRotation(); // don't rotate right after a scroll-driven change
            }
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    for (const id of Object.keys(SECTION_THEMES)) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // PaletteToggle broadcasts manual choices / return-to-auto here.
    const onPaletteSet = (event: Event) => {
      const choice = (event as CustomEvent<string>).detail;
      manual = choice !== "auto";
      restartRotation();
    };
    window.addEventListener("palette-set", onPaletteSet);

    restartRotation();

    return () => {
      clearInterval(rotateTimer);
      clearTimeout(animTimer);
      observer.disconnect();
      window.removeEventListener("palette-set", onPaletteSet);
    };
  }, []);

  return null;
}
