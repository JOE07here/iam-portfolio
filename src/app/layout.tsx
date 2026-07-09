import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";
import ThemeConductor from "@/components/ThemeConductor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const seoTitle = `${site.name} | IAM Engineer in Germany | Okta, MidPoint, Entra ID`;
const seoDescription =
  "IAM Engineer in Germany focused on identity governance and cloud identity — Okta, MidPoint, Keycloak, Microsoft Entra ID, ServiceNow, SSO, MFA, RBAC, access reviews, and identity lifecycle management.";

// SEO metadata — pulled from src/data/portfolio.ts (edit `site` there).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: site.url },
  keywords: [
    "Identity and Access Management",
    "IAM Engineer",
    "Identity Governance",
    "Cloud Identity",
    "Cybersecurity",
    "Okta",
    "MidPoint",
    "Keycloak",
    "Microsoft Entra ID",
    "ServiceNow",
    "SSO",
    "MFA",
    "RBAC",
    "SCIM",
    "Access Reviews",
    "Identity Lifecycle Management",
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
    title: seoTitle,
    description: seoDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060b16",
};

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "IAM Engineer",
  description: seoDescription,
  url: site.url,
  address: { "@type": "PostalAddress", addressCountry: "DE" },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Identity & Access Management",
    "Identity Governance",
    "Cloud Identity",
    "Zero Trust",
    "Okta",
    "MidPoint",
    "Keycloak",
    "Microsoft Entra ID",
    "ServiceNow",
    "SSO",
    "MFA",
    "RBAC",
    "SCIM",
    "Access Reviews",
    "Identity Lifecycle Management",
    "Non-Human Identity Governance",
  ],
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
            is gated on it) and restores a pinned palette without a flash.
            'navy'/'green' are legacy stored values from the old toggle system. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var p=localStorage.getItem('palette');if(p==='navy')p='blue';if(p&&p!=='auto')document.documentElement.dataset.theme=p}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeConductor />
        {children}
      </body>
    </html>
  );
}
