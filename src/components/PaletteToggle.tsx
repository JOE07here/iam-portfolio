"use client";

/**
 * Switches between the terminal-green palette (default) and the classic navy
 * palette by toggling the `navy` class on <html>. Persisted to localStorage
 * and restored before paint by the inline script in layout.tsx.
 */
export default function PaletteToggle() {
  const toggle = () => {
    const isNavy = document.documentElement.classList.toggle("navy");
    try {
      localStorage.setItem("palette", isNavy ? "navy" : "green");
    } catch {
      // storage unavailable — palette just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color palette (green or navy)"
      title="Switch color palette"
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
