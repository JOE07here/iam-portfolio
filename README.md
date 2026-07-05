# Joemon Johnson — IAM & Identity Security Portfolio

A recruiter-ready personal portfolio for an Identity & Access Management / cybersecurity profile.
Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**. No backend, no database, no paid services.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is fully working immediately with sample data.

## How to edit your personal details

**Everything editable lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**
Search that file for `EDIT` — every placeholder is marked. In particular:

| What | Where in `portfolio.ts` |
| --- | --- |
| Name, email, LinkedIn, GitHub, location | `site` object (top of file) |
| CV file path | `site.cvUrl` |
| Deployed URL (used for SEO / Open Graph) | `site.url` |
| Hero headline, subheadline, badges | `hero` |
| About paragraphs and quick facts | `about` |
| Skill groups | `skills` |
| Experience cards (dates, employer name, bullets) | `experience` |
| Project cards + "View Case Study" links | `projects` (`caseStudyUrl`) |
| Certification dates + verify links | `certifications` (`credentialUrl`) |
| Research focus text | `research` |
| Contact CTA | `contact` |

SEO metadata in [`src/app/layout.tsx`](src/app/layout.tsx) is generated from the same data file, so you normally never need to touch component files.

## How to add your CV

1. Export your CV as a PDF.
2. Save it as `public/cv/Joemon_Johnson_CV.pdf` (replace the placeholder note in that folder).
3. If you use a different filename, update `site.cvUrl` in `src/data/portfolio.ts` to match.

The "Download CV" button in the hero points at that path.

## How to deploy

### Vercel (recommended — zero config)

1. Push this folder to a GitHub repository (`git init`, commit, push).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Accept the defaults (Vercel auto-detects Next.js) and deploy.
4. Update `site.url` in `src/data/portfolio.ts` to the deployed URL and redeploy.

### Netlify

1. Push the repo to GitHub.
2. On [netlify.com](https://netlify.com) → **Add new site** → import the repo.
3. Build command: `npm run build` — Netlify's Next.js runtime handles the rest.

### GitHub Pages (static export)

1. In [`next.config.ts`](next.config.ts), uncomment the three lines under "FOR GITHUB PAGES ONLY"
   and set `basePath` to your repo name (e.g. `/iam-portfolio`).
2. Run `npm run build` — the static site is emitted to `out/`.
3. Publish `out/` with GitHub Actions (the official [Next.js deploy workflow](https://github.com/actions/deploy-pages)) or push it to a `gh-pages` branch.
4. Note: with a `basePath`, also prefix `site.cvUrl` (e.g. `/iam-portfolio/cv/...`).

## How to add a custom domain later

- **Vercel / Netlify:** Project → Settings → Domains → add your domain, then create the
  `A` / `CNAME` records they show you at your DNS provider. HTTPS is automatic.
- **GitHub Pages:** Repo → Settings → Pages → Custom domain, and add a `CNAME` file
  containing your domain to `public/`. Remove `basePath` if the site now lives at the domain root.
- After switching, update `site.url` in `src/data/portfolio.ts` so Open Graph links stay correct.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # HTML shell, fonts, SEO + Open Graph metadata
│   ├── page.tsx          # Assembles all sections
│   ├── globals.css       # Theme tokens (colors, fonts), buttons, animations
│   └── icon.svg          # Favicon (shield)
├── components/           # One component per section + shared building blocks
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Headline, CTA buttons, platform badges
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx    # Timeline cards
│   ├── Projects.tsx      # Case-study cards
│   ├── Certifications.tsx
│   ├── Research.tsx      # Thesis / research direction
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Section.tsx       # Shared section shell (eyebrow + heading)
│   ├── Badge.tsx         # Pill chips
│   └── Reveal.tsx        # Scroll fade-in (IntersectionObserver, no libraries)
└── data/
    └── portfolio.ts      # ← ALL content. Edit this file.
```

## Design notes

- Dark navy theme with cyan/green accents — change the palette in the `@theme` block of `src/app/globals.css`.
- Animations are subtle (scroll fade-ins) and respect `prefers-reduced-motion`.
- Semantic HTML, keyboard-focus outlines, and a skip-to-content link are built in.
- Zero runtime dependencies beyond React/Next — fast to load, easy to maintain.
