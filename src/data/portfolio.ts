/* =============================================================================
 * PORTFOLIO DATA — the single source of truth for every section of the site.
 *
 * Edit everything here. Search this file for "EDIT" to find each place that
 * needs your personal input (links, dates, company names, CV path, etc.).
 * No component files need to change for normal content updates.
 * ============================================================================= */

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  title: string;
  problem: string;
  built: string;
  tools: string[];
  outcome: string;
  /** Live demo / write-up URL. Leave "" — the link is hidden until set. */
  caseStudyUrl: string;
};

export type Certification = {
  code: string;
  name: string;
  issuer: string;
  period: string;
  credentialUrl: string;
};

/* -----------------------------------------------------------------------------
 * PROFESSIONAL EMAIL
 *
 * EDIT: put your real, recruiter-reachable email address here (e.g. a Gmail,
 * Outlook, or custom-domain address). While this is "", the site shows NO
 * email anywhere — the Email/Copy buttons and the address line are hidden.
 * Do NOT use the Apple private-relay address: relay addresses can silently
 * drop mail from senders Apple hasn't approved, so recruiters may not reach
 * you.
 * ---------------------------------------------------------------------------*/
export const PROFESSIONAL_EMAIL = ""; // EDIT: e.g. "joemon.johnson@example.com"

/* -----------------------------------------------------------------------------
 * SITE / IDENTITY — name, links, CV, deployed URL
 * ---------------------------------------------------------------------------*/
export const site = {
  name: "Joemon Johnson",
  role: "IAM Engineer · Identity Security · Cloud Identity",
  location: "Germany", // EDIT: add a city if you want, e.g. "Leipzig, Germany"
  email: PROFESSIONAL_EMAIL,
  linkedin: "https://www.linkedin.com/in/joemon-johnson/",
  github: "https://github.com/JOE07here",
  /* CV BUTTON — hidden while cvUrl is "".
     To enable it:
       1. Export your CV as PDF and copy it to  public/cv/Joemon_Johnson_CV.pdf
       2. Set cvUrl to "/iam-portfolio/cv/Joemon_Johnson_CV.pdf"
          (the "/iam-portfolio" prefix matches the GitHub Pages basePath —
          drop it if the site ever moves to a root domain). */
  cvUrl: "",
  url: "https://joe07here.github.io/iam-portfolio", // deployed URL (used for SEO / Open Graph)
};

/* -----------------------------------------------------------------------------
 * HERO
 * ---------------------------------------------------------------------------*/
export const hero = {
  availability: "Open to IAM & Identity Security roles — Germany / EU",
  // The static lead line under your name.
  roleLine: "IAM Engineer · Identity Security · Cloud Identity",
  // Cycled by the small typewriter line. Add/remove/reorder freely.
  taglines: [
    "IAM Engineer",
    "Identity Governance",
    "Cloud Identity",
    "MidPoint / Okta / Entra ID",
    "Non-Human Identity Security",
  ],
  subheadline:
    "2.8+ years of enterprise IAM experience across Okta, MidPoint, Microsoft Entra ID, Keycloak, and ServiceNow — currently working as an Identity Management working student in Germany while completing an M.Sc. in Computer Science with a focus on Cyber Security.",
  badges: ["Okta", "MidPoint", "Keycloak", "Entra ID", "ServiceNow", "SC-100", "SC-300"],
};

/* -----------------------------------------------------------------------------
 * ABOUT
 * ---------------------------------------------------------------------------*/
export const about = {
  paragraphs: [
    "I work in identity and access management — the part of security that decides who (and what) gets access to which systems, and whether that access can be trusted. Today I support a production enterprise IAM platform as an Identity Management working student in Germany, alongside my M.Sc. in Computer Science with a focus on Cyber Security.",
    "Before moving to Germany, I spent over two years at Capgemini as a Security Analyst / IAM Engineer: integrating single sign-on with SAML and OIDC, running MFA and access-policy programs, and resolving provisioning and synchronization issues across Okta, Active Directory, MidPoint, and ServiceNow. That work taught me where identity systems actually break in production — and how to keep them consistent, auditable, and secure.",
    "My direction is deliberate: IAM Engineer today, Identity Security Engineer next, Cybersecurity Architect long-term. Along the way I'm building research depth in a problem most identity programs haven't solved yet — governing non-human identities: service accounts, API keys, workload identities, and AI agents.",
  ],
  facts: [
    { label: "Location", value: "Germany" },
    { label: "Currently", value: "Working Student — Identity Management" },
    { label: "Education", value: "M.Sc. Computer Science — Focus on Cyber Security" },
    { label: "Previously", value: "Security Analyst / IAM Engineer, Capgemini" },
    { label: "Direction", value: "IAM → Identity Security → Cybersecurity Architect" },
  ],
};

/* -----------------------------------------------------------------------------
 * EDUCATION & LANGUAGES
 * ---------------------------------------------------------------------------*/
export const education = {
  degree: "M.Sc. Computer Science — Focus on Cyber Security",
  school: "SRH University of Applied Sciences Heidelberg, Campus Leipzig",
  graduation: "Expected graduation: March 2027",
  previous: "B.Tech Electronics & Communication Engineering — Karunya Institute of Technology and Sciences, India",
};

export const languages = [
  { name: "English", level: "B2 · IELTS 6.5" },
  { name: "German", level: "A1 · currently working toward B1" },
];

/* -----------------------------------------------------------------------------
 * AVAILABILITY / LOCATION — shown in the Contact section.
 * Only rows with a non-empty value are rendered; leave "" to hide a row.
 * Do not fill in anything that hasn't been confirmed.
 * ---------------------------------------------------------------------------*/
export const availabilityInfo = [
  { label: "Location", value: "Germany" },
  { label: "Open to", value: "IAM, Identity Security & Cloud Identity roles — Germany / EU" },
  { label: "Work authorization", value: "" }, // EDIT: e.g. "German student visa — 20h/week permitted" (only if you want it public)
  { label: "Available from", value: "" }, // EDIT: e.g. "Full-time from April 2027"
];

/* -----------------------------------------------------------------------------
 * SKILLS — grouped the way IAM recruiters scan for them.
 * ---------------------------------------------------------------------------*/
export const skills: SkillGroup[] = [
  {
    title: "Identity Governance & Administration",
    skills: [
      "Access Reviews & Certification",
      "Role Modeling / RBAC",
      "Segregation of Duties",
      "Least Privilege",
      "Entitlement Management",
      "Lifecycle Management (JML)",
    ],
  },
  {
    title: "IAM Platforms",
    skills: [
      "Okta",
      "MidPoint",
      "Keycloak",
      "Microsoft Entra ID / Azure AD",
      "Active Directory",
      "ServiceNow (ITSM)",
    ],
  },
  {
    title: "Federation & Authentication",
    skills: [
      "SAML",
      "OIDC / OAuth 2.0",
      "SSO Integration",
      "MFA",
      "SCIM Provisioning",
      "LDAP",
    ],
  },
  {
    title: "Cloud Identity",
    skills: [
      "Microsoft Entra ID",
      "Conditional Access",
      "Hybrid Identity",
      "Azure Administration (AZ-104)",
    ],
  },
  {
    title: "Automation & Scripting",
    skills: ["PowerShell", "REST APIs", "Python (working knowledge)", "SQL (working knowledge)", "Git"],
  },
  {
    title: "Security & Compliance",
    skills: [
      "Zero Trust Architecture",
      "Non-Human Identity Security",
      "Security Audit Support",
      "ISO 27001 (audit support)",
      "NIS2 / DORA awareness",
      "GDPR awareness",
    ],
  },
];

/* -----------------------------------------------------------------------------
 * EXPERIENCE
 * Keep company-sensitive details out — describe the work, not the client.
 * ---------------------------------------------------------------------------*/
export const experience: ExperienceItem[] = [
  {
    role: "Working Student — Identity Management",
    company: "Enterprise Identity Team", // kept anonymous by request; add employer name here if allowed
    location: "Germany",
    period: "Feb 2026 — Present",
    summary:
      "Supporting identity management operations and governance on a production enterprise IAM platform.",
    highlights: [
      "Support joiner–mover–leaver (JML) lifecycle processes and role/entitlement assignments in an enterprise IAM platform (MidPoint).",
      "Analyze and troubleshoot provisioning, synchronization, and role-assignment issues between the identity platform and connected systems.",
      "Contribute to access review and recertification preparation, keeping entitlement data accurate and auditable.",
      "Document integration behavior, findings, and runbooks in Confluence and track work through Jira workflows.",
    ],
    tags: ["MidPoint", "Keycloak", "Access Reviews", "Jira", "Confluence"],
  },
  {
    role: "Security Analyst / IAM Engineer",
    company: "Capgemini",
    location: "Bengaluru, India",
    period: "Feb 2023 — Sep 2025",
    summary:
      "IAM operations and engineering across Okta, Active Directory, MidPoint, and ServiceNow in an enterprise environment.",
    highlights: [
      "Integrated and troubleshot SSO for enterprise applications using SAML and OIDC in Okta, including API token setup for OIDC integrations.",
      "Managed user lifecycle operations — provisioning, deprovisioning, group and sign-on policy management — and resolved account synchronization issues across connected systems.",
      "Applied RBAC, segregation-of-duties, and least-privilege principles to access control policies; helped drive MFA enrollment to full coverage for admin and high-risk accounts.",
      "Handled a high-volume ServiceNow queue (700+ tickets) with over 95% SLA adherence, supported periodic security audits, and served as interim lead for L2 operations.",
    ],
    tags: ["Okta", "Active Directory", "SAML / OIDC", "MFA", "ServiceNow"],
  },
];

/* -----------------------------------------------------------------------------
 * PROJECTS — fewer, stronger, verifiable.
 * caseStudyUrl "" hides the link entirely (no disabled button is rendered).
 * ---------------------------------------------------------------------------*/
export const projects: Project[] = [
  {
    title: "CyberLens — Non-Human Identity Scanner (formerly AgentLens)",
    problem:
      "AI agents and service accounts act with real credentials and real permissions, but most identity programs cannot easily inventory them — let alone certify, scope, or de-provision their access.",
    built:
      "Built a browser-based scanner that inspects MidPoint and Keycloak configurations to surface risky agent and service identities: stale credentials, excessive privileges, and missing ownership. Runs fully client-side — no identity data leaves the browser.",
    tools: ["Next.js", "TypeScript", "MidPoint", "Keycloak", "Non-Human Identity"],
    outcome:
      "A working, publicly hosted prototype and a sharper thesis question: what does lifecycle governance look like when the identity is an autonomous agent?",
    caseStudyUrl: "https://joe07here.github.io/cyberlens/",
  },
  {
    title: "MidPoint Role Assignment and 409 Conflict Analysis",
    problem:
      "Role assignments against a MidPoint deployment were intermittently failing with HTTP 409 conflict responses, leaving entitlement state inconsistent and forcing manual rework.",
    built:
      "Analyzed the REST API interaction and MidPoint's concurrency behavior around user object modification, reproduced the conflict conditions, and mapped which operations collide when role assignments run in parallel.",
    tools: ["MidPoint", "REST APIs", "RBAC", "Concurrency Analysis", "Troubleshooting"],
    outcome:
      "Documented root-cause analysis with safe retry and sequencing recommendations — turning a recurring operational failure into an understood, documented behavior.",
    caseStudyUrl: "", // write-up not published yet — link stays hidden until set
  },
  {
    title: "Keycloak and Microsoft Entra ID SSO Integration Lab",
    problem:
      "Federated login across identity providers looks simple in architecture diagrams, but fails in practice on claims mapping, protocol mismatches, and trust configuration.",
    built:
      "Built a lab integrating Keycloak with Microsoft Entra ID: identity brokering over OIDC and SAML, claim and attribute mapping, and MFA / conditional-access behavior across the federation boundary.",
    tools: ["Keycloak", "Microsoft Entra ID", "OIDC", "SAML", "Federation"],
    outcome:
      "A working reference setup with documented pitfalls for identity-provider brokering — reusable for future integration work and demos.",
    caseStudyUrl: "", // write-up not published yet — link stays hidden until set
  },
];

/* -----------------------------------------------------------------------------
 * CERTIFICATIONS
 * credentialUrl "" hides the verify link for that card.
 * ---------------------------------------------------------------------------*/
export const certifications: Certification[] = [
  {
    code: "SC-100",
    name: "Microsoft Certified: Cybersecurity Architect Expert",
    issuer: "Microsoft",
    period: "2025 — 2027",
    credentialUrl:
      "https://learn.microsoft.com/en-us/users/joemonjohnson-5555/credentials/f7f30c5bf0f8de6b",
  },
  {
    code: "SC-300",
    name: "Microsoft Certified: Identity and Access Administrator Associate",
    issuer: "Microsoft",
    period: "2025 — 2027",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/FFB8237328F76F3F?sharingId=31675020DAB84AC5",
  },
  {
    code: "SC-900",
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    period: "2024",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/399E8E012EAEF47A",
  },
  {
    code: "AZ-104",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    period: "2024 — 2027",
    credentialUrl:
      "https://learn.microsoft.com/en-us/users/joemonjohnson-5555/credentials/9d1f40a458093d55",
  },
  {
    code: "OKTA",
    name: "Okta Certified Professional",
    issuer: "Okta",
    period: "2025 — 2027",
    credentialUrl:
      "https://www.credly.com/badges/83e49431-70e6-4fef-93c8-4b6d7c7d12a2/public_url",
  },
];

/* -----------------------------------------------------------------------------
 * RECRUITER SNAPSHOT — the six scan-in-five-seconds facts shown right under
 * the hero. All backed by the experience/certifications sections.
 * ---------------------------------------------------------------------------*/
export const recruiterSnapshot = [
  "2.8+ years IAM experience (Capgemini + working student)",
  "Germany-based · M.Sc. Cyber Security student",
  "Working Student — Identity Management",
  "Okta · MidPoint · Keycloak · Entra ID · ServiceNow",
  "SC-100 · SC-300 · SC-900 · AZ-104 · Okta Certified Professional",
  "700+ IAM tickets · 95%+ SLA adherence",
];

/* -----------------------------------------------------------------------------
 * RESEARCH / THESIS DIRECTION
 * ---------------------------------------------------------------------------*/
export const research = {
  title: "Research Focus: Non-Human Identity Governance",
  paragraphs: [
    "Most identity programs are built for people. Yet non-human identities — service accounts, API keys, workload identities, and increasingly AI agents — typically far outnumber human users in an enterprise, hold standing privileged access, and often have no clear owner or offboarding process.",
    "My research focuses on bringing identity governance discipline to this population: inventorying non-human identities, assigning ownership, scoring risk, and designing access certification processes that scale. It sits at the intersection of identity governance and administration (IGA), Zero Trust architecture, and the growing regulatory attention on access governance in Europe (NIS2, DORA) — plus the emerging question of how autonomous AI agents should be authenticated, authorized, and audited.",
  ],
  areas: [
    {
      title: "Machine & Workload Identities",
      description:
        "Service accounts, workload identities, and API keys — how they are issued, scoped, rotated, and retired across hybrid environments.",
    },
    {
      title: "AI Agents & Identity",
      description:
        "What identity, authentication, and authorization should look like for autonomous AI agents acting on behalf of humans and systems.",
    },
    {
      title: "Risk-Based Access Certification",
      description:
        "Replacing flat review campaigns with risk-ranked certification driven by privilege, usage, credential-age, and ownership signals.",
    },
    {
      title: "Zero Trust IAM",
      description:
        "Continuous verification and least-privilege enforcement applied to non-human principals — not just workforce users.",
    },
  ],
  note: "Open to thesis supervision, research collaboration, and industry conversations in this space.",
};

/* -----------------------------------------------------------------------------
 * CONTACT
 * ---------------------------------------------------------------------------*/
export const contact = {
  blurb:
    "Whether you're hiring for an identity team, supervising research on non-human identity governance, or want to compare notes on IAM — get in touch.",
  cta: "Open to IAM, Identity Security, Cloud Identity, and Cybersecurity opportunities.",
};
