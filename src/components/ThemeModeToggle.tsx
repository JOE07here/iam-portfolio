"use client";

import { useEffect, useState } from "react";

const ORDER = ["dark", "system", "light"] as const;
type Mode = (typeof ORDER)[number];

const LABELS: Record<Mode, string> = {
  dark: "Dark",
  system: "System",
  light: "Light",
};

/** Resolves a mode to the actual look and applies it to <html>. */
function apply(mode: Mode) {
  const html = document.documentElement;
  html.dataset.mode = mode;
  const light =
    mode === "light" ||
    (mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches);
  html.classList.toggle("light", light);
}

/**
 * Three-state theme toggle: Dark → System → Light. "System" follows the
 * visitor's OS preference (and reacts live if it changes). The choice is
 * persisted and restored before first paint by the inline script in
 * layout.tsx. Which icon shows is decided in CSS from html[data-mode].
 */
export default function ThemeModeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.mode as Mode | undefined;
    if (current && ORDER.includes(current)) setMode(current);

    // In System mode, follow OS scheme changes live
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSchemeChange = () => {
      if (document.documentElement.dataset.mode === "system") apply("system");
    };
    mq.addEventListener("change", onSchemeChange);
    return () => mq.removeEventListener("change", onSchemeChange);
  }, []);

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
    setMode(next);
    apply(next);
    try {
      localStorage.setItem("mode", next);
    } catch {
      // storage unavailable — choice just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${LABELS[mode]}. Activate to switch.`}
      title={`Theme: ${LABELS[mode]}`}
      className="rounded-md border border-edge p-2 text-muted transition hover:text-ink"
    >
      {/* moon — dark */}
      <svg
        className="mode-icon mode-icon-dark"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      {/* monitor — system */}
      <svg
        className="mode-icon mode-icon-system"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
      {/* sun — light */}
      <svg
        className="mode-icon mode-icon-light"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
