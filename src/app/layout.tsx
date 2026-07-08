import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, hero } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

// SEO metadata — pulled from src/data/portfolio.ts (edit `site` there).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Identity & Access Management | Cybersecurity | Cloud Identity`,
  description: hero.subheadline,
  keywords: [
    "Identity and Access Management",
    "IAM",
    "Identity Governance",
    "Cybersecurity",
    "Okta",
    "MidPoint",
    "Keycloak",
    "Microsoft Entra ID",
    "Zero Trust",
    "Non-Human Identities",
    "Identity Governance and Administration",
    "IGA",
    "NIS2",
    "DORA",
    "Machine Identities",
    "Germany",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Identity & Access Management | Cybersecurity`,
    description: hero.subheadline,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Identity & Access Management | Cybersecurity`,
    description: hero.subheadline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060b16",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script in <body> adds the `js` class
    // before React hydrates — an intentional server/client difference
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background font-sans text-ink antialiased`}
      >
        {/* Runs before first paint: marks JS as available (scroll-reveal hiding
            is gated on it) and restores saved theme + palette choices without a
            flash of the wrong look */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');if(localStorage.getItem('palette')==='navy')document.documentElement.classList.add('navy')}catch(e){}",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
