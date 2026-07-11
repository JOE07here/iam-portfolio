import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";
import Aurora from "@/components/Aurora";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const description =
  "IAM engineer in Germany with 2.8+ years of enterprise identity experience across Okta, MidPoint, Keycloak, Microsoft Entra ID, and ServiceNow — focused on identity governance, federation, and non-human identity security.";

// SEO metadata — personal details come from src/data/portfolio.ts.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — IAM Engineer & Identity Security`,
  description,
  keywords: [
    "Identity and Access Management",
    "IAM Engineer",
    "Identity Governance",
    "IGA",
    "Okta",
    "MidPoint",
    "Keycloak",
    "Microsoft Entra ID",
    "ServiceNow",
    "SSO",
    "MFA",
    "Access Reviews",
    "Identity Lifecycle Management",
    "Non-Human Identities",
    "Germany",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    title: `${site.name} — IAM Engineer & Identity Security`,
    description,
    url: `${site.url}/`,
    siteName: site.name,
    type: "profile",
    locale: "en_GB",
    // Static 1200x630 card in public/og.png (regenerate by tweaking colors/text
    // in a design tool or ask Claude to re-render it)
    images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: `${site.name} — IAM Engineer & Identity Security` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — IAM Engineer & Identity Security`,
    description,
    images: [`${site.url}/og.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060b16",
};

// ProfilePage structured data with Person as the main entity (schema.org)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: site.name,
    jobTitle: "IAM Engineer",
    description,
    url: `${site.url}/`,
    address: { "@type": "PostalAddress", addressCountry: "DE" },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Identity and Access Management",
      "Identity Governance and Administration",
      "Cloud Identity",
      "Zero Trust",
      "Okta",
      "MidPoint",
      "Keycloak",
      "Microsoft Entra ID",
      "ServiceNow",
      "SAML",
      "OpenID Connect",
      "SCIM",
      "Multi-Factor Authentication",
      "Access Reviews",
      "Identity Lifecycle Management",
      "Non-Human Identity Governance",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script in <body> adds the `js` class
    // before React hydrates — an intentional server/client difference
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-ink antialiased`}>
        {/* Runs before first paint: marks JS as available (scroll-reveal
            hiding is gated on it) and resolves the saved Dark/System/Light
            choice without a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var m=localStorage.getItem('mode');if(m!=='light'&&m!=='system')m='dark';document.documentElement.dataset.mode=m;if(m==='light'||(m==='system'&&matchMedia('(prefers-color-scheme: light)').matches))document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Aurora />
        {children}
      </body>
    </html>
  );
}
