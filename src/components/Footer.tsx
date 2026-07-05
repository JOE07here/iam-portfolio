import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-edge px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">
          Identity &amp; Access Management · Identity Security · Cloud Identity
        </p>
      </div>
    </footer>
  );
}
