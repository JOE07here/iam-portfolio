"use client";

import { useEffect, useState } from "react";

const CYCLE = ["auto", "blue", "purple", "green", "silver", "aurora"];

const LABELS: Record<string, string> = {
  auto: "Auto (rotates slowly)",
  blue: "Identity Blue",
  purple: "Zero Trust Purple",
  green: "Terminal Green",
  silver: "Cloud Silver",
  aurora: "Research Aurora",
};

/**
 * Cycles through the theme palettes. "Auto" hands control to ThemeConductor
 * (slow rotation + section adaptation); any named palette pins the look and
 * persists across visits.
 */
export default function PaletteToggle() {
  const [mode, setMode] = useState("auto");

  // Sync the label with a previously saved choice
  useEffect(() => {
    try {
      const stored = localStorage.getItem("palette");
      if (stored && CYCLE.includes(stored)) setMode(stored);
    } catch {
      // storage unavailable
    }
  }, []);

  const cycle = () => {
    const next = CYCLE[(CYCLE.indexOf(mode) + 1) % CYCLE.length];
    setMode(next);
    if (next !== "auto") {
      document.documentElement.dataset.theme = next;
    }
    try {
      localStorage.setItem("palette", next);
    } catch {
      // storage unavailable — choice just won't persist
    }
    window.dispatchEvent(new CustomEvent("palette-set", { detail: next }));
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Color theme: ${LABELS[mode]}. Activate to switch.`}
      title={`Theme: ${LABELS[mode]}`}
      className="rounded-md border border-edge p-2 text-muted transition hover:text-ink"
    >
      <svg
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
        <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />
      </svg>
    </button>
  );
}
