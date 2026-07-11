"use client";

import { useEffect } from "react";

/** Corner sequence: top-left blue → bottom-right green → top-right purple →
 *  bottom-left cyan. Must stay in sync with the blob animation-delays and the
 *  68s cycle in globals.css (4 × 17s phases). */
const SEQUENCE = ["blue", "green", "purple", "cyan"];
const PHASE_MS = 17000;

/**
 * The automatic "RGB aurora" background.
 *
 * The moving light itself is pure CSS (four corner blobs animating opacity +
 * scale only — compositor-friendly, no repaints). This component renders that
 * layer and runs a small clock that shifts the UI accent colour
 * (html[data-accent]) to follow the currently active corner, pausing when the
 * tab is hidden. Reduced-motion visitors get a static dark background with a
 * single subtle glow (handled in CSS) and a fixed accent.
 */
export default function Aurora() {
  useEffect(() => {
    const html = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let phaseTimer: ReturnType<typeof setInterval> | undefined;
    let animTimer: ReturnType<typeof setTimeout>;

    const advance = () => {
      index = (index + 1) % SEQUENCE.length;
      // theme-anim enables a slow colour cross-fade just for this switch
      html.classList.add("theme-anim");
      html.dataset.accent = SEQUENCE[index];
      clearTimeout(animTimer);
      animTimer = setTimeout(() => html.classList.remove("theme-anim"), 4500);
    };

    const start = () => {
      if (!phaseTimer) phaseTimer = setInterval(advance, PHASE_MS);
    };
    const stop = () => {
      clearInterval(phaseTimer);
      phaseTimer = undefined;
    };

    // Pause both the accent clock and the CSS blob animation when hidden
    const onVisibility = () => {
      if (document.hidden) {
        stop();
        html.classList.add("page-hidden");
      } else {
        html.classList.remove("page-hidden");
        start();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      clearTimeout(animTimer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora-blob aurora-blob-blue" />
      <span className="aurora-blob aurora-blob-green" />
      <span className="aurora-blob aurora-blob-purple" />
      <span className="aurora-blob aurora-blob-cyan" />
    </div>
  );
}
