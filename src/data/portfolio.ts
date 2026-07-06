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
 * SITE / IDENTITY — name, links, CV, deployed URL
 * ---------------------------------------------------------------------------*/
export const site = {
  name: "Joemon Johnson", // EDIT: your name
  role: "IAM Working Student · M.Sc. Cyber Security",
  location: "Germany", // EDIT: add a city if you want, e.g. "Leipzig, Germany"
  email: "your.email@example.com", // EDIT: your real email address
  linkedin: "https://www.linkedin.com/in/joemon-johnson/", // EDIT: your LinkedIn URL
  github: "https://github.com/JOE07here", // EDIT: your GitHub URL
  // EDIT: drop your CV into public/cv/ and keep this path in sync.
  // The "/iam-portfolio" prefix matches the GitHub Pages basePath — remove it
  // if you move to Vercel/Netlify or a custom domain at the root.
  cvUrl: "/iam-portfolio/cv/Joemon_Johnson_CV.pdf",
  url: "https://joe07here.github.io/iam-portfolio", // deployed URL (used for SEO / Open Graph)
};

/* -----------------------------------------------------------------------------
 * HERO
 * ---------------------------------------------------------------------------*/
export const hero = {
  availability: "Open to IAM & Identity Security opportunities",
  // Shown under your name (the name itself comes from site.name above)
  tagline: "Identity & Access Management | Cybersecurity | Cloud Identity",
  subheadline:
    "M.Sc. Cyber Security student and IAM working student in Germany, focused on identity governance, access management, Zero Trust IAM, and non-human identity security.",
  badges: ["Okta", "MidPoint", "Keycloak", "Entra ID", "ServiceNow", "SC-100", "SC-300"],
};

/* -----------------------------------------------------------------------------
 * ABOUT
 * ---------------------------------------------------------------------------*/
export const about = {
  paragraphs: [
    "I work in identity and access management — the part of security that decides who (and what) gets access to which systems, and whether that access can be trusted. I'm currently a working student in Identity Management in Germany, operating enterprise IAM tooling day to day, while completing my M.Sc. in Computer Science with a focus on Cyber Security.",
    "Before moving to Germany, I spent over two years at Capgemini as a Security Analyst / IAM Engineer: integrating single sign-on with SAML and OIDC, running MFA and access-policy programs, and resolving provisioning and synchronization issues across Okta, Active Directory, MidPoint, and ServiceNow. That work taught me where identity systems actually break in production — and how to keep them consistent, auditable, and secure.",
    "My direction is deliberate: IAM Engineer today, Identity Security Engineer next, Cybersecurity Architect long-term. Along the way, I'm building research depth in a problem most identity programs haven't solved yet — governing non-human identities: service accounts, API keys, workload identities, and AI agents.",
  ],
  facts: [
    { label: "Location", value: "Germany" },
    { label: "Currently", value: "Working Student — Identity Management" },
    { label: "Education", value: "M.Sc. Computer Science (Cyber Security)" },
    { label: "Previously", value: "Security Analyst / IAM Engineer, Capgemini" },
    { label: "Direction", value: "IAM → Identity Security → Cybersecurity Architect" },
  ],
};

/* -----------------------------------------------------------------------------
 * SKILLS
 * ---------------------------------------------------------------------------*/
export const skills: SkillGroup[] = [
  {
    title: "Identity & Access Management",
    skills: [
      "SSO (SAML, OIDC)",
      "OAuth 2.0",
      "MFA",
      "RBAC & ABAC",
      "Lifecycle Management (JML)",
      "SCIM Provisioning",
      "LDAP",
      "Privileged Access (PAM)",
    ],
  },
  {
    title: "Identity Governance",
    skills: [
      "Access Reviews & Certification",
      "Role Modeling",
      "Segregation of Duties",
      "Least Privilege",
      "Entitlement Management",
      "Audit & Compliance Support",
    ],
  },
  {
    title: "Cloud Identity",
    skills: [
      "Microsoft Entra ID / Azure AD",
      "Conditional Access",
      "Hybrid Identity",
      "Azure Administration",
      "Federation & Trust",
    ],
  },
  {
    title: "Security Concepts",
    skills: [
      "Zero Trust Architecture",
      "Non-Human Identity Security",
      "Risk-Based Access",
      "Identity Threat Surface Analysis",
      "Security Auditing",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Okta",
      "MidPoint",
      "Keycloak",
      "Microsoft Entra ID",
      "Active Directory",
      "ServiceNow",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Programming & Scripting",
    skills: [
      "PowerShell",
      "Python (basics)",
      "SQL (basics)",
      "JavaScript / TypeScript (basics)",
      "REST APIs",
      "Git",
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
    company: "Enterprise Identity Team", // EDIT: add your employer's name if you're allowed to
    location: "Germany",
    period: "2025 — Present", // EDIT: exact start month/year
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
    period: "Feb 2023 — Sep 2025", // EDIT: adjust if needed
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
 * PROJECTS
 * caseStudyUrl: "#" is a placeholder — EDIT each one to link a write-up,
 * GitHub repo, or blog post when it's ready.
 * ---------------------------------------------------------------------------*/
export const projects: Project[] = [
  {
    title: "Risk-Based Access Certification for Non-Human Identities",
    problem:
      "Access certification campaigns are designed around human users. Service accounts, API keys, and workload identities are often rubber-stamped or skipped entirely — even though they frequently hold the most privileged, least-monitored access in the environment.",
    built:
      "Designed a risk-scoring approach for non-human identities based on privilege level, credential age, last authentication, and ownership status — and prototyped how risk-ranked certification queues could replace flat, all-at-once review campaigns.",
    tools: ["Identity Governance", "MidPoint", "Risk Scoring", "Access Certification", "Zero Trust"],
    outcome:
      "Forms the foundation of my master's research direction. Demonstrated that a small set of measurable signals can meaningfully prioritize which non-human identities get reviewed first.",
    caseStudyUrl: "#", // EDIT: link the case study when published
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
    caseStudyUrl: "#", // EDIT: link the case study when published
  },
  {
    title: "Enterprise IAM Lifecycle Management with Okta and ServiceNow",
    problem:
      "Joiner–mover–leaver events across multiple connected systems create provisioning gaps, orphaned accounts, and slow fulfillment when handled manually.",
    built:
      "Operated and improved lifecycle processes across Okta, Active Directory, and downstream applications, with ServiceNow as the fulfillment and audit-trail layer — resolving synchronization failures and downstream provisioning breaks through service tasks.",
    tools: ["Okta", "Active Directory", "ServiceNow", "Lifecycle Management", "Provisioning"],
    outcome:
      "Consistent, auditable access fulfillment at high ticket volume with strong SLA adherence — and a practical understanding of exactly where lifecycle automation breaks in production.",
    caseStudyUrl: "#", // EDIT: link the case study when published
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
    caseStudyUrl: "#", // EDIT: link the case study when published
  },
  {
    title: "Access Review and RBAC Governance Case Study",
    problem:
      "Role structures drift over time: role explosion, over-provisioned users, and review campaigns that certify access nobody actually understands.",
    built:
      "Analyzed a role model against least-privilege and segregation-of-duties principles, then designed an access review campaign structure — reviewer selection, scoping, and decision support — aimed at reducing rubber-stamping.",
    tools: ["RBAC", "Access Reviews", "Segregation of Duties", "Least Privilege", "IGA"],
    outcome:
      "A concrete governance playbook: how to scope review campaigns, what data reviewers actually need, and which role-hygiene signals predict risky entitlements.",
    caseStudyUrl: "#", // EDIT: link the case study when published
  },
  {
    title: "AI Agents and Identity Governance Research Prototype",
    problem:
      "AI agents act with real credentials and real permissions, but most identity programs cannot even inventory them — let alone certify, scope, or de-provision their access.",
    built:
      "Prototyped a browser-based scanner that inspects MidPoint and Keycloak configurations to surface risky agent and service identities: stale credentials, excessive privileges, and missing ownership.",
    tools: ["Next.js", "TypeScript", "MidPoint", "Keycloak", "Non-Human Identity"],
    outcome:
      "A working v0.1 prototype and a sharper thesis question: what does lifecycle governance look like when the identity is an autonomous agent?",
    caseStudyUrl: "#", // EDIT: link the case study / repo when published
  },
];

/* -----------------------------------------------------------------------------
 * CERTIFICATIONS
 * credentialUrl: "" renders as a placeholder — EDIT to add verify links.
 * ---------------------------------------------------------------------------*/
export const certifications: Certification[] = [
  {
    code: "SC-100",
    name: "Microsoft Certified: Cybersecurity Architect Expert",
    issuer: "Microsoft",
    period: "20XX — 20XX", // EDIT: add the validity dates
    credentialUrl: "", // EDIT: add your credential verify link
  },
  {
    code: "SC-300",
    name: "Microsoft Certified: Identity and Access Administrator Associate",
    issuer: "Microsoft",
    period: "2025 — 2027", // EDIT: confirm dates
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/FFB8237328F76F3F?sharingId=31675020DAB84AC5", // EDIT: confirm link
  },
  {
    code: "SC-900",
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    period: "2024", // EDIT: confirm date
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/399E8E012EAEF47A", // EDIT: confirm link
  },
  {
    code: "AZ-104",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    period: "2024 — 2026", // EDIT: confirm dates
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/9D1F40A458093D55", // EDIT: confirm link
  },
  {
    code: "OKTA",
    name: "Okta Certified Professional",
    issuer: "Okta",
    period: "2025 — 2027", // EDIT: confirm dates
    credentialUrl:
      "https://www.credly.com/badges/83e49431-70e6-4fef-93c8-4b6d7c7d12a2/public_url",
  },
];

export const certificationsNote =
  "Credential links can be added here — edit src/data/portfolio.ts.";

/* -----------------------------------------------------------------------------
 * RESEARCH / THESIS DIRECTION
 * ---------------------------------------------------------------------------*/
export const research = {
  title: "Research Focus: Non-Human Identity Governance",
  paragraphs: [
    "Most identity programs are built for people. Yet in a typical enterprise, non-human identities — service accounts, API keys, workload identities, and increasingly AI agents — outnumber human users many times over, hold standing privileged access, and rarely have a clear owner.",
    "My research focuses on bringing identity governance discipline to this population: inventorying non-human identities, assigning ownership, scoring risk, and designing access certification processes that scale. It sits at the intersection of identity governance and administration (IGA), Zero Trust architecture, and the emerging question of how autonomous AI agents should be authenticated, authorized, and audited.",
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
    "Whether you're hiring for an identity team, supervising research on non-human identity governance, or want to compare notes on IAM — my inbox is open.",
  cta: "Open to IAM, Identity Security, Cloud Identity, and Cybersecurity opportunities.",
};
