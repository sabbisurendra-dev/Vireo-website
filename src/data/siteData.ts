export interface NavLink {
  name: string;
  href: string;
}

export interface MetricStat {
  value: string;
  label: string;
  subtext: string;
  color: string;
}

export interface PillarFeature {
  title: string;
  subtitle: string;
  desc: string;
  iconName: string;
}

export interface PillarData {
  id: string;
  badge: string;
  title: string;
  highlightTitle: string;
  desc: string;
  accentColor: 'emerald' | 'blue' | 'amber';
  features: PillarFeature[];
  checkText: string;
}

export interface ComplianceCard {
  title: string;
  desc: string;
  badge: string;
  iconName: string;
  accentColor: string;
}

export const siteConfig = {
  brand: {
    name: "VIREO",
    tagline: "Vireo AI",
    badge: "Vireo AI v1.0 Live",
    liveAppUrl: "https://sabbisurendra-dev.github.io/vireo_ai/",
    githubRepoUrl: "https://github.com/sabbisurendra-dev/vireo_ai",
    websiteRepoUrl: "https://github.com/sabbisurendra-dev/Vireo-website"
  },

  navLinks: [
    { name: 'Product Offerings', href: '#offerings' },
    { name: 'Live Sandbox', href: '#sandbox' },
    { name: 'Security & Vault', href: '#security' },
  ] as NavLink[],

  hero: {
    badge: "Vireo AI v1.0 Live",
    securityNotice: "Local-First Zero-Trust Architecture",
    titlePrefix: "The Self-Improving",
    titleGradient: "AI Executive Operating System",
    subheadline: "Unify personal health intelligence, habit loops, skill acceleration frameworks, and digital ID leather wallet vaults into one high-performance executive system.",
    ctaPrimary: "Launch Live App Prototype",
    ctaSecondary: "Explore Interactive Sandbox",
    metrics: [
      { value: "10x", label: "Productivity Velocity", subtext: "Skills, Habits & Focus", color: "emerald" },
      { value: "100%", label: "Zero-Trust Privacy", subtext: "Local-First Storage", color: "blue" },
      { value: "Compliant", label: "DPDP & GDPR Framework", subtext: "Health Data Governance", color: "emerald" }
    ] as MetricStat[]
  },

  pillars: {
    sectionBadge: "3 Core Pillars of Vireo AI",
    sectionTitle: "Designed for Executive Mastery & Long-Term Compounding",
    sectionDesc: "Every feature in Vireo AI is built around 3 fundamental human growth vectors: Health Intelligence, Skill Acceleration, and Secure Asset Governance.",

    items: [
      {
        id: "health",
        badge: "PILLAR 01 • HEALTH INTELLIGENCE",
        title: "Proactive Health Indicators & ",
        highlightTitle: "Habit Correlation",
        desc: "Stop tracking health in isolation. Vireo AI correlates sleep quality, exercise intensity, hydration, and nutritional loops with your cognitive output—providing supportive nudges rather than punitive alerts.",
        accentColor: "emerald",
        checkText: "Includes non-intrusive emergency & weather radar widget.",
        features: [
          {
            title: "Multi-Horizon Metrics",
            subtitle: "Immediate Actionables & Trends",
            desc: "Track daily status, 7-day velocity, and 30-day trajectory.",
            iconName: "TrendingUp"
          },
          {
            title: "Correlation Framework",
            subtitle: "Data-Driven Nudges",
            desc: "Identifies connected habits (e.g. 10k steps boost focus duration by 35%).",
            iconName: "Flame"
          }
        ]
      },
      {
        id: "skills",
        badge: "PILLAR 02 • SKILL ACCELERATION & PERSONAL GROWTH",
        title: "Skill Acceleration & ",
        highlightTitle: "Learning Feed",
        desc: "Master critical competencies and track continuous growth. Vireo AI structures your learning feeds, daily skill loops, technical notes, and launch specs while keeping your progress organized.",
        accentColor: "blue",
        checkText: "Supports customized daily learning loops.",
        features: [
          {
            title: "Voice & Specification Builder",
            subtitle: "Instant Technical Specs",
            desc: "Converts voice notes into standard specs, launch plans & prompt libraries.",
            iconName: "FileText"
          },
          {
            title: "Skill Progression Hub",
            subtitle: "Continuous Competency",
            desc: "Track active skills in progress with structured milestones.",
            iconName: "BookOpen"
          }
        ]
      },
      {
        id: "wallet",
        badge: "PILLAR 03 • DIGITAL LEATHER WALLET & VAULT",
        title: "Tactile Leather Wallet Experience & ",
        highlightTitle: "Encrypted Asset Vault",
        desc: "Replaces your physical pocket wallet with a digital leather wallet experience holding authenticated scanned copies of your PAN, Aadhaar, Driving License, Corporate IDs, and instant Indian UPI payment shortcuts.",
        accentColor: "amber",
        checkText: "Biometrically protected Assets & Liabilities ledger.",
        features: [
          {
            title: "Tactile Wallet Experience",
            subtitle: "Real Leather UI Animation",
            desc: "Opens smoothly to display verified identity cards, permits & UPI payment apps.",
            iconName: "CreditCard"
          },
          {
            title: "Frictional Privacy Vault",
            subtitle: "Protected Assets & Liabilities",
            desc: "Net worth, bank accounts, property deeds & mutual funds kept hidden behind biometric locks.",
            iconName: "Lock"
          }
        ]
      }
    ] as PillarData[]
  },

  compliance: {
    sectionBadge: "Security, Privacy & Public Regulations",
    sectionTitle: "Zero-Trust Privacy & Regulatory Compliance",
    sectionDesc: "Built from the ground up to respect user sovereignty over personal health, identity proofs, and financial records.",
    cards: [
      {
        title: "Local-First Storage System",
        desc: "Your active user data—including technical specs, skill progress logs, daily habit routines, and wallet choices—is kept safely inside your local browser storage (localStorage & IndexedDB).",
        badge: "Zero telemetry tracking or third-party sales.",
        iconName: "HardDrive",
        accentColor: "emerald"
      },
      {
        title: "DPDP Act (India 2023) Compliant",
        desc: "Fully compliant with India's Digital Personal Data Protection Act 2023. Explicit data fiduciary consent mechanisms, user-controlled right to erasure, and local data sovereignty.",
        badge: "Complete user sovereignty & data portability.",
        iconName: "Scale",
        accentColor: "blue"
      },
      {
        title: "GDPR & Global Health Governance",
        desc: "Adheres to strict European GDPR data protection standards and global health privacy guidelines. Personal health vitals and habits are never logged to public servers.",
        badge: "Privacy by design at all architectural layers.",
        iconName: "Globe",
        accentColor: "purple"
      },
      {
        title: "Frictional Secondary Security Vault",
        desc: "Sensitive financial ledgers (Assets & Liabilities, property documents, mutual fund statements) are kept intentionally behind secondary authentication steps for peace of mind.",
        badge: "Protection against casual shoulder-surfing.",
        iconName: "Key",
        accentColor: "amber"
      }
    ] as ComplianceCard[]
  },

  footer: {
    brandDescription: "Vireo AI: The self-improving AI executive operating system for high performers.",
    legalNotice: "DPDP Act & GDPR Compliant",
    productLinks: [
      { name: "Health & Habit Intelligence", href: "#offerings" },
      { name: "Skill Acceleration & Learning Feed", href: "#offerings" },
      { name: "Digital Leather Wallet & Vault", href: "#offerings" }
    ],
    repoLinks: [
      { name: "Live Prototype App", href: "https://sabbisurendra-dev.github.io/vireo_ai/" },
      { name: "Prototype GitHub Repo", href: "https://github.com/sabbisurendra-dev/vireo_ai" },
      { name: "Showcase Website GitHub Repo", href: "https://github.com/sabbisurendra-dev/Vireo-website" }
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "#security" },
      { name: "Digital Data Protection Notice", href: "#security" },
      { name: "Health Data Management Terms", href: "#security" },
      { name: "Zero-Trust Security Standard", href: "#security" }
    ],
    copyrightText: "Vireo AI. Built for executive mastery.",
    footnote: "Designed with Fortune 500 & Silicon Valley Standards"
  }
};
