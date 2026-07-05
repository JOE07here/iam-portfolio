"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in milliseconds. */
  delay?: number;
};

/**
 * Fades content up once it scrolls into view.
 * The hidden initial state is CSS-gated on `html.js` (set in layout.tsx), so
 * content stays visible without JavaScript. Animation is disabled for users
 * with prefers-reduced-motion (see globals.css).
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | null = null;

    const show = () => {
      node.classList.add("reveal-visible");
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const onScroll = () => {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.9) show();
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      },
      { threshold: 0.15 },
    );
    observer.observe(node);

    // Fallback for environments where IntersectionObserver misses programmatic scrolls
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
