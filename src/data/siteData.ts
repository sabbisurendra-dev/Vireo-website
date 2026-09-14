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
    badge: "Vireo AI Live",
    liveAppUrl: "https://sabbisurendra-dev.github.io/vireo_ai/"
  },

  navLinks: [
    { name: 'Product Offerings', href: '#offerings' },
    { name: 'Live Sandbox', href: '#sandbox' },
    { name: 'Security & Vault', href: '#security' },
  ] as NavLink[],

  hero: {
    badge: "Vireo AI Live",
    securityNotice: "Local-First Private Security",
    titlePrefix: "The Self-Improving",
    titleGradient: "AI Personal Assistant",
    subheadline: "Connected health intelligence, continuous skill growth, and secure digital identity—unified in your personal AI assistant.",
    ctaPrimary: "Launch Live App Prototype",
    ctaSecondary: "Explore Interactive Sandbox",
    metrics: [
      { value: "10x", label: "Productivity Velocity", subtext: "Skills, Habits & Focus", color: "emerald" },
      { value: "100%", label: "Complete Privacy", subtext: "Local Storage Security", color: "blue" },
      { value: "Compliant", label: "DPDP & GDPR Framework", subtext: "Health Data Governance", color: "emerald" }
    ] as MetricStat[]
  },

  pillars: {
    sectionBadge: "3 Core Pillars of Vireo AI",
    sectionTitle: "Designed for Personal Growth",
    sectionDesc: "Every feature in Vireo AI is built around 3 fundamental human growth vectors: Health Intelligence, Skill Acceleration, and Secure Asset Governance.",

    items: [
      {
        id: "health",
        badge: "PILLAR 01 • HEALTH INTELLIGENCE",
        title: "Proactive Health Indicators & ",
        highlightTitle: "Unified Device Intelligence",
        desc: "Stop tracking health in fragmented apps. Vireo AI unifies data from all your smartwatches, fitness bands, smart scales, and smartphones—correlating sleep, activity, recovery, and hydration metrics into intelligent, data-driven nudges that optimize your daily cognitive focus and long-term vitality.",
        accentColor: "emerald",
        checkText: "Includes non-intrusive emergency & weather radar widget.",
        features: [
          {
            title: "Unified Multi-Device Hub",
            subtitle: "Smartwatches, Bands & Scales",
            desc: "Consolidates sleep, activity, HRV, recovery, and weight metrics from Apple Watch, Oura, Garmin, Fitbit & smartphones in one place.",
            iconName: "TrendingUp"
          },
          {
            title: "Holistic Nudge Framework",
            subtitle: "Cross-Device Correlations",
            desc: "Generates data-driven nudges taking your total sleep score, workout intensity, and recovery vitals into account (e.g. 7.5+ hrs sleep boosts focus by 35%).",
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
            title: "Skill Progression Hub",
            subtitle: "Continuous Competency",
            desc: "Track active skills in progress with structured milestones.",
            iconName: "BookOpen"
          },
          {
            title: "Voice & Specification Builder",
            subtitle: "Instant Technical Specs",
            desc: "Converts voice notes into standard specs, launch plans & prompt libraries.",
            iconName: "FileText"
          }
        ]
      },
      {
        id: "wallet",
        badge: "PILLAR 03 • DIGITAL WALLET & VAULT",
        title: "Smart Digital Wallet Experience & ",
        highlightTitle: "Encrypted Asset Vault",
        desc: "Replaces your physical pocket wallet with a digital wallet experience holding authenticated digital copies of your PAN, Aadhaar, Driving License, Corporate IDs, and instant Indian UPI payment shortcuts.",
        accentColor: "amber",
        checkText: "Biometrically protected Assets & Liabilities ledger.",
        features: [
          {
            title: "Smart Wallet Experience",
            subtitle: "Digital Wallet",
            desc: "Display verified identity cards, permits & UPI payment apps.",
            iconName: "CreditCard"
          },
          {
            title: "Secure Private Vault",
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
    sectionTitle: "Fully Private & Regulatory Compliance",
    sectionDesc: "Built from the ground up to respect user sovereignty over personal health, identity proofs, and financial records.",
    cards: [
      {
        title: "Local Storage Security",
        desc: "Your active user data—including technical specs, skill progress logs, daily habit routines, smartwatch metrics, and wallet choices—is kept safely inside your local browser storage (localStorage & IndexedDB).",
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
        desc: "Adheres to strict European GDPR data protection standards and global health privacy guidelines. Personal health vitals and device streams are never logged to public servers.",
        badge: "Privacy by design at all architectural layers.",
        iconName: "Globe",
        accentColor: "purple"
      },
      {
        title: "Fully Private Vault",
        desc: "Sensitive financial ledgers (Assets & Liabilities, property documents, mutual fund statements) are kept intentionally behind secondary authentication steps for peace of mind.",
        badge: "Protection against casual shoulder-surfing.",
        iconName: "Key",
        accentColor: "amber"
      }
    ] as ComplianceCard[]
  },

  footer: {
    brandDescription: "Vireo AI: Your self-improving AI personal assistant for high performers.",
    legalNotice: "DPDP Act & GDPR Compliant",
    productLinks: [
      { name: "Health & Habit Intelligence", href: "#offerings" },
      { name: "Skill Acceleration & Learning Feed", href: "#offerings" },
      { name: "Digital Wallet & Vault", href: "#offerings" },
      { name: "Launch Live Prototype App", href: "https://sabbisurendra-dev.github.io/vireo_ai/" }
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "#security" },
      { name: "Digital Data Protection Notice", href: "#security" },
      { name: "Health Data Management Terms", href: "#security" },
      { name: "Local Security Standard", href: "#security" }
    ],
    copyrightText: "Vireo AI. Built for personal growth."
  }
};
