"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  /** Phrases to cycle through. The first one is server-rendered in full (SEO-safe). */
  phrases: string[];
};

/**
 * Terminal-style typewriter: types a phrase out, pauses, deletes it, then
 * types the next one. The blinking cursor rides the end of the text.
 * Respects prefers-reduced-motion (shows the first phrase statically).
 */
export default function Typewriter({ phrases }: TypewriterProps) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (phrases.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phraseIndex = 0;
    let length = phrases[0].length; // matches the server-rendered text
    let deleting = true; // after the initial pause, delete the first phrase
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (deleting) {
        length -= 1;
        setText(phrases[phraseIndex].slice(0, length));
        if (length === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(step, 400); // brief rest before typing the next phrase
        } else {
          timer = setTimeout(step, 35);
        }
      } else {
        length += 1;
        setText(phrases[phraseIndex].slice(0, length));
        if (length === phrases[phraseIndex].length) {
          deleting = true;
          timer = setTimeout(step, 2200); // let the full phrase be read
        } else {
          timer = setTimeout(step, 70);
        }
      }
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <>
      <span aria-hidden="true">{text}</span>
      <span className="cursor-blink text-accent" aria-hidden="true">
        ▍
      </span>
      {/* Screen readers get the full list instead of churning text */}
      <span className="sr-only">{phrases.join(" · ")}</span>
    </>
  );
}
