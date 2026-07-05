import { hero, site } from "@/data/portfolio";
import Badge from "./Badge";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 sm:pt-44">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-alt/30 bg-accent-alt/10 px-3 py-1 font-mono text-xs text-accent-alt">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-alt opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-alt" />
            </span>
            {hero.availability}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {hero.headline.split("|").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-accent"> | </span>}
                {part.trim()}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.subheadline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={site.cvUrl} className="btn btn-secondary" download>
              Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Key platforms and certifications">
            {hero.badges.map((badge) => (
              <li key={badge}>
                <Badge>{badge}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
