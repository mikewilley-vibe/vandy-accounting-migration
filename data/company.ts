export const company = {
  name: "VANDY Accounting Solutions",
  shortName: "VANDY",
  legalName: "Vandy Accounting Solutions",
  tagline: "You run the business. We’ll handle the books.",
  promise:
    "Spend less time managing your books and more time running your business.",
  email: "info@vandyaccounting.com",
  phone: "(317) 490-6113",
  phoneHref: "+13174906113",
  addressLine1: "7755 Shasta Drive",
  addressLine2: "Indianapolis, IN 46217",
  facebookUrl: "https://www.facebook.com/vandyaccounting",
  linkedinUrl: "https://www.linkedin.com",
  siteUrl: "https://www.vandyaccounting.com",
  owner: {
    name: "Julie L. Riess",
    role: "Owner",
    photo: "/julie-riess.webp",
    photoAlt:
      "Portrait of Julie L. Riess, owner of VANDY Accounting Solutions",
  },
  primaryCta: "Schedule a Consultation",
  secondaryCta: "See How Easy It Is to Switch",
  growthMarkets: ["Virginia", "North Carolina"] as const,
  originStates: ["Virginia", "Indiana"] as const,
  officeState: "Indiana",
  serviceModel:
    "Remote-friendly accounting support for owner-operated businesses, with a physical office in Indianapolis.",
} as const;

export const credentials = [
  "20+ years of accounting experience",
  "Master’s and Bachelor’s degrees in Accounting",
  "Controller background across industries",
  "Gold-certified QuickBooks ProAdvisor",
  "ADP payroll partnership",
] as const;

export const originStory = {
  eyebrow: "Where Virginia and Indiana business expertise come together",
  paragraphs: [
    "The name VANDY was born from two places that shaped our journey: Virginia and Indiana. What began as a vision connecting these two states has grown into an accounting and advisory firm that helps owners get the books off their plate.",
    "Today, VANDY continues to grow while bringing that same relationship-driven approach to businesses throughout Virginia and North Carolina. We combine local understanding with the practical financial support growing companies need.",
    "Built on relationships. Driven by expertise. Ready to help your business grow.",
  ],
} as const;
