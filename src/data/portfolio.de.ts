import type { Certification, ExperienceItem, Project, SkillGroup } from "./portfolio";

export const heroDe = {
  availability: "Offen für Positionen in IAM & Identity Security — Deutschland / Europa",
  roleLine: "IAM Engineer · Identity Security · Cloud Identity",
  taglines: ["IAM Engineering", "Identity Governance", "Cloud Identity", "MidPoint / Okta / Entra ID", "Non-Human Identity Security"],
  subheadline: "Mehr als 3 Jahre Erfahrung im Enterprise-IAM mit Okta, MidPoint, Microsoft Entra ID, Keycloak und ServiceNow. Derzeit unterstütze ich als Werkstudent im Identity Management eine produktive IAM-Umgebung in Deutschland und absolviere parallel meinen M.Sc. in Informatik mit Schwerpunkt Cyber Security.",
  badges: ["Okta", "MidPoint", "Keycloak", "Entra ID", "ServiceNow", "SC-100", "SC-300"],
};

export const recruiterSnapshotDe = [
  "Mehr als 3 Jahre IAM-Erfahrung (Capgemini + Werkstudent)",
  "In Deutschland · M.Sc.-Student mit Schwerpunkt Cyber Security",
  "Werkstudent — Identity Management",
  "Okta · MidPoint · Keycloak · Entra ID · ServiceNow",
  "SC-100 · SC-300 · SC-900 · AZ-104 · Okta Certified Professional",
  "700+ IAM-Tickets · über 95 % SLA-Erfüllung",
];

export const aboutDe = {
  paragraphs: [
    "Ich arbeite im Identity & Access Management — dem Bereich der IT-Sicherheit, der steuert, wer oder was auf welche Systeme zugreifen darf und ob dieser Zugriff vertrauenswürdig ist. Aktuell unterstütze ich als Werkstudent im Identity Management eine produktive Enterprise-IAM-Plattform in Deutschland und absolviere parallel meinen M.Sc. in Informatik mit Schwerpunkt Cyber Security.",
    "Vor meinem Umzug nach Deutschland war ich über zwei Jahre bei Capgemini als Security Analyst / IAM Engineer tätig. Dort integrierte ich Single Sign-on mit SAML und OIDC, betreute MFA- und Zugriffsrichtlinien und löste Provisionierungs- und Synchronisationsprobleme in Okta, Active Directory, MidPoint und ServiceNow. Diese Erfahrung hat mir gezeigt, wo Identitätssysteme im produktiven Betrieb scheitern — und wie sie konsistent, auditierbar und sicher bleiben.",
    "Mein berufliches Ziel ist klar: heute IAM Engineer, als Nächstes Identity Security Engineer und langfristig Cybersecurity Architect. Parallel vertiefe ich meine Forschung zu einer Herausforderung, die viele Identity-Programme noch nicht gelöst haben: die Governance nicht-menschlicher Identitäten wie Servicekonten, API-Schlüssel, Workload Identities und KI-Agenten.",
  ],
  facts: [
    { label: "Standort", value: "Deutschland" },
    { label: "Aktuell", value: "Werkstudent — Identity Management" },
    { label: "Studium", value: "M.Sc. Informatik — Schwerpunkt Cyber Security" },
    { label: "Zuvor", value: "Security Analyst / IAM Engineer, Capgemini" },
    { label: "Ziel", value: "IAM → Identity Security → Cybersecurity Architect" },
  ],
};

export const skillsDe: SkillGroup[] = [
  { title: "Identity Governance & Administration", skills: ["Access Reviews & Zertifizierung", "Rollenmodellierung / RBAC", "Funktionstrennung (SoD)", "Least Privilege", "Berechtigungsmanagement", "Identity Lifecycle (JML)"] },
  { title: "IAM-Plattformen", skills: ["Okta", "MidPoint", "Keycloak", "Microsoft Entra ID / Azure AD", "Active Directory", "ServiceNow (ITSM)"] },
  { title: "Föderation & Authentifizierung", skills: ["SAML", "OIDC / OAuth 2.0", "SSO-Integration", "MFA", "SCIM-Provisionierung", "LDAP"] },
  { title: "Cloud Identity", skills: ["Microsoft Entra ID", "Conditional Access", "Hybride Identitäten", "Azure-Administration (AZ-104)"] },
  { title: "Automatisierung & Skripting", skills: ["PowerShell", "REST APIs", "Python (Praxiskenntnisse)", "SQL (Praxiskenntnisse)", "Git"] },
  { title: "Security & Compliance", skills: ["Zero-Trust-Architektur", "Non-Human Identity Security", "Unterstützung von Security Audits", "ISO 27001 (Audit-Unterstützung)", "NIS2 / DORA", "DSGVO"] },
];

export const experienceDe: ExperienceItem[] = [
  {
    role: "Werkstudent — Identity Management", company: "Enterprise Identity Team", location: "Deutschland", period: "Feb. 2026 — heute",
    summary: "Unterstützung des Identity Management und der Governance auf einer produktiven Enterprise-IAM-Plattform.",
    highlights: [
      "Unterstützung von Joiner-Mover-Leaver-Prozessen sowie Rollen- und Berechtigungszuweisungen in MidPoint.",
      "Analyse und Behebung von Provisionierungs-, Synchronisations- und Rollenzuweisungsproblemen zwischen der Identity-Plattform und angebundenen Systemen.",
      "Mitwirkung bei der Vorbereitung von Access Reviews und Rezertifizierungen, um Berechtigungsdaten korrekt und auditierbar zu halten.",
      "Dokumentation von Integrationsverhalten, Erkenntnissen und Runbooks in Confluence sowie Nachverfolgung der Aufgaben über Jira.",
    ], tags: ["MidPoint", "Keycloak", "Access Reviews", "Jira", "Confluence"],
  },
  {
    role: "Security Analyst / IAM Engineer", company: "Capgemini", location: "Bengaluru, Indien", period: "Feb. 2023 — Sep. 2025",
    summary: "IAM-Betrieb und Engineering mit Okta, Active Directory, MidPoint und ServiceNow in einem Enterprise-Umfeld.",
    highlights: [
      "Integration und Fehleranalyse von Enterprise-SSO-Anwendungen mit SAML und OIDC in Okta, einschließlich API-Token-Konfiguration für OIDC-Integrationen.",
      "Betreuung des User Lifecycles mit Provisionierung, Deprovisionierung sowie Gruppen- und Sign-on-Richtlinien; Behebung von Synchronisationsproblemen.",
      "Anwendung von RBAC, Funktionstrennung und Least Privilege; Mitwirkung an der vollständigen MFA-Abdeckung für administrative und risikoreiche Konten.",
      "Bearbeitung von über 700 ServiceNow-Tickets mit mehr als 95 % SLA-Erfüllung, Unterstützung regelmäßiger Security Audits und Vertretung der L2-Teamleitung.",
    ], tags: ["Okta", "Active Directory", "SAML / OIDC", "MFA", "ServiceNow"],
  },
];

export const projectsDe: Project[] = [
  {
    title: "CyberLens — Scanner für nicht-menschliche Identitäten",
    problem: "KI-Agenten und Servicekonten arbeiten mit realen Zugangsdaten und Berechtigungen, sind für viele Identity-Programme jedoch nur schwer inventarisierbar und steuerbar.",
    built: "Entwicklung eines browserbasierten Scanners, der MidPoint- und Keycloak-Konfigurationen analysiert und riskante Agenten- und Service-Identitäten sichtbar macht — darunter veraltete Zugangsdaten, übermäßige Rechte und fehlende Verantwortliche. Die Verarbeitung erfolgt vollständig im Browser.",
    tools: ["Next.js", "TypeScript", "MidPoint", "Keycloak", "Non-Human Identity"],
    outcome: "Ein öffentlich verfügbarer Prototyp und eine geschärfte Forschungsfrage: Wie lässt sich Lifecycle Governance auf autonome Agenten übertragen?",
    caseStudyUrl: "https://joe07here.github.io/cyberlens/",
  },
  {
    title: "MidPoint-Rollenzuweisung und Analyse von 409-Konflikten",
    problem: "Rollenzuweisungen in MidPoint schlugen zeitweise mit HTTP-409-Konflikten fehl, wodurch Berechtigungsstände inkonsistent wurden und manuelle Nacharbeit erforderlich war.",
    built: "Analyse der REST-API-Interaktion und des Nebenläufigkeitsverhaltens bei Änderungen an Benutzerobjekten; Reproduktion der Konflikte und Zuordnung kollidierender paralleler Operationen.",
    tools: ["MidPoint", "REST APIs", "RBAC", "Concurrency Analysis", "Troubleshooting"],
    outcome: "Dokumentierte Ursachenanalyse mit Empfehlungen für sichere Wiederholungen und Sequenzierung — aus einem wiederkehrenden Fehler wurde ein nachvollziehbares Betriebsverhalten.", caseStudyUrl: "",
  },
  {
    title: "SSO-Integrationslabor: Keycloak und Microsoft Entra ID",
    problem: "Föderierte Anmeldung wirkt in Architekturdiagrammen einfach, scheitert in der Praxis jedoch häufig an Claim-Mapping, Protokollunterschieden und Vertrauenskonfiguration.",
    built: "Aufbau eines Labors mit Keycloak und Microsoft Entra ID: Identity Brokering über OIDC und SAML, Claim- und Attribut-Mapping sowie MFA- und Conditional-Access-Verhalten über die Föderationsgrenze hinweg.",
    tools: ["Keycloak", "Microsoft Entra ID", "OIDC", "SAML", "Federation"],
    outcome: "Eine funktionierende Referenzumgebung mit dokumentierten Stolpersteinen, die für künftige Integrationen und Demos wiederverwendet werden kann.", caseStudyUrl: "",
  },
];

export const educationDe = {
  degree: "M.Sc. Informatik — Schwerpunkt Cyber Security", school: "SRH University of Applied Sciences Heidelberg, Campus Leipzig", graduation: "Voraussichtlicher Abschluss: März 2027", previous: "B.Tech Electronics & Communication Engineering — Karunya Institute of Technology and Sciences, Indien",
};
export const languagesDe = [
  { name: "Englisch", level: "Professionelle Sprachkenntnisse" },
  { name: "Deutsch", level: "Grundkenntnisse · aktuell im Aufbau" },
];
export const availabilityInfoDe = [
  { label: "Standort", value: "Deutschland" },
  { label: "Interessiert an", value: "IAM, Identity Security & Cloud Identity — Deutschland / Europa" },
];

export const certificationsDe: Certification[] = [
  { code: "SC-100", name: "Microsoft Certified: Cybersecurity Architect Expert", issuer: "Microsoft", period: "2025 — 2027", credentialUrl: "https://learn.microsoft.com/en-us/users/joemonjohnson-5555/credentials/f7f30c5bf0f8de6b" },
  { code: "SC-300", name: "Microsoft Certified: Identity and Access Administrator Associate", issuer: "Microsoft", period: "2025 — 2027", credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/FFB8237328F76F3F?sharingId=31675020DAB84AC5" },
  { code: "SC-900", name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", period: "2024", credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/JoemonJohnson-5555/399E8E012EAEF47A" },
  { code: "AZ-104", name: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", period: "2024 — 2027", credentialUrl: "https://learn.microsoft.com/en-us/users/joemonjohnson-5555/credentials/9d1f40a458093d55" },
  { code: "OKTA", name: "Okta Certified Professional", issuer: "Okta", period: "2025 — 2027", credentialUrl: "https://www.credly.com/badges/83e49431-70e6-4fef-93c8-4b6d7c7d12a2/public_url" },
];

export const researchDe = {
  title: "Forschungsschwerpunkt: Governance nicht-menschlicher Identitäten",
  paragraphs: [
    "Die meisten Identity-Programme sind für Menschen konzipiert. Nicht-menschliche Identitäten — Servicekonten, API-Schlüssel, Workload Identities und zunehmend KI-Agenten — sind in Unternehmen jedoch oft zahlreicher, besitzen dauerhafte privilegierte Zugriffe und haben häufig weder klare Verantwortliche noch einen Offboarding-Prozess.",
    "Meine Forschung überträgt bewährte Identity-Governance-Prinzipien auf diese Identitäten: Inventarisierung, Zuweisung von Verantwortlichkeiten, Risikobewertung und skalierbare Zugriffszertifizierung. Der Schwerpunkt liegt an der Schnittstelle von IGA, Zero Trust und europäischen Anforderungen wie NIS2 und DORA sowie der Frage, wie autonome KI-Agenten authentifiziert, autorisiert und auditiert werden sollten.",
  ],
  areas: [
    { title: "Maschinen- & Workload-Identitäten", description: "Servicekonten, Workload Identities und API-Schlüssel — ihre sichere Vergabe, Begrenzung, Rotation und Stilllegung in hybriden Umgebungen." },
    { title: "KI-Agenten & Identität", description: "Identität, Authentifizierung und Autorisierung autonomer KI-Agenten, die im Auftrag von Menschen und Systemen handeln." },
    { title: "Risikobasierte Zugriffszertifizierung", description: "Priorisierung von Reviews anhand von Privilegien, Nutzung, Alter der Zugangsdaten und klarer Verantwortlichkeit." },
    { title: "Zero Trust IAM", description: "Kontinuierliche Verifizierung und Least Privilege für nicht-menschliche Identitäten — nicht nur für Mitarbeitende." },
  ],
  note: "Offen für Masterarbeitsbetreuung, Forschungskooperationen und den fachlichen Austausch mit Unternehmen.",
};

export const contactDe = {
  blurb: "Ob Sie für ein Identity-Team einstellen, Forschung zur Governance nicht-menschlicher Identitäten betreuen oder sich zu IAM austauschen möchten — ich freue mich auf Ihre Nachricht.",
  cta: "Offen für Positionen in IAM, Identity Security, Cloud Identity und Cybersecurity.",
};
