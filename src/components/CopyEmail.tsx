"use client";

import { useState } from "react";

/**
 * Copies the email address to the clipboard — the reliable fallback for
 * visitors whose machines have no mail app wired to mailto: links.
 */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the address is still shown as text below
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
      {copied ? "Copied ✓" : "Copy Email"}
    </button>
  );
}
