import type { ReactNode } from "react";

/** Small pill badge used for tools, skills, and hero platform chips. */
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="badge-glow inline-flex items-center rounded-full border border-edge bg-panel px-3 py-1 font-mono text-xs text-muted transition">
      {children}
    </span>
  );
}
