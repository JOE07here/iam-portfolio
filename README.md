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

### GitHub Pages (current setup — live)

The site is deployed at **https://joe07here.github.io/iam-portfolio/**.
Every push to `main` rebuilds and redeploys automatically via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Nothing else to do —
edit content, commit, push.

The static export is configured in [`next.config.ts`](next.config.ts)
(`output: "export"` + `basePath: "/iam-portfolio"`).

### Vercel (if you switch later)

1. Remove the `output`, `basePath`, and `images` lines from `next.config.ts`,
   and drop the `/iam-portfolio` prefix from `site.cvUrl` in `src/data/portfolio.ts`.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo.
3. Accept the defaults (Vercel auto-detects Next.js) and deploy.
4. Update `site.url` in `src/data/portfolio.ts` to the new URL.

### Netlify (if you switch later)

Same config changes as Vercel, then import the repo on
[netlify.com](https://netlify.com) — build command `npm run build`.

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
