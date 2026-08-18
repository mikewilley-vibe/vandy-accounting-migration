export type Service = {
  slug: string;
  title: string;
  short: string;
  homepageTitle: string;
  homepageDesc: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
  ctaHeading: string;
  ctaSubheading: string;
};

export const services: Service[] = [
  {
    slug: "remote-bookkeeping",
    title: "Bookkeeping",
    homepageTitle: "Bookkeeping",
    homepageDesc:
      "Keep the books accurate, current, and ready for better business decisions.",
    short:
      "Ongoing bookkeeping that stays current—so you spend less time in the numbers and more time running the business.",
    whoItsFor: [
      "Owners who want clean books without hiring an in-house bookkeeper",
      "Growing companies that need consistent monthly records they can trust",
      "Businesses ready to stop piecing the books together after hours",
    ],
    whatsIncluded: [
      "Monthly bank and credit card reconciliations",
      "Accurate transaction categorization",
      "General ledger maintenance",
      "Monthly financial statements",
      "Issue identification and cleanup",
      "Coordination with your tax professional",
      "Support organizing bills, payments, and incoming revenue",
    ],
    outcomes: [
      "Books that stay current instead of becoming a year-end scramble",
      "Clearer visibility into cash flow and profitability",
      "Less time spent fixing errors or chasing missing details",
    ],
    seoTitle: "Small-Business Bookkeeping | VANDY Accounting Solutions",
    seoDescription:
      "Outsourced bookkeeping for small businesses in Virginia and North Carolina. Keep your books current, organized, and ready for better decisions.",
    ctaHeading: "Ready for books that stay current?",
    ctaSubheading:
      "Tell us how you currently handle bookkeeping and we’ll recommend a practical next step.",
  },
  {
    slug: "catch-up-cleanup",
    title: "Catch-up & cleanup",
    homepageTitle: "Catch-Up and Cleanup",
    homepageDesc:
      "Bring overdue, inconsistent, or disorganized books back under control.",
    short:
      "A structured cleanup so overdue, messy, or incomplete books become usable again—without judgment about how they got there.",
    whoItsFor: [
      "Owners whose books are months behind",
      "Businesses with inconsistent QuickBooks files, uncategorized transactions, or duplicate entries",
      "Companies switching providers and needing a clear picture of the current records",
    ],
    whatsIncluded: [
      "Review of available records and bookkeeping systems",
      "Identification of gaps, duplicates, and common QuickBooks issues",
      "Catch-up work to bring months up to date",
      "Chart of accounts organization where needed",
      "A cleaner handoff into ongoing bookkeeping",
      "Documentation support for your tax preparer",
    ],
    outcomes: [
      "A file you can actually work from",
      "Less uncertainty about what is missing",
      "A clearer path from cleanup into a repeatable monthly process",
    ],
    seoTitle: "Accounting Cleanup Services | VANDY Accounting Solutions",
    seoDescription:
      "Catch-up and cleanup bookkeeping for small businesses in Virginia and North Carolina. Bring overdue or disorganized books back under control.",
    ctaHeading: "Books behind? Let’s get them back under control.",
    ctaSubheading:
      "Share where things stand today. We’ll talk through what a cleanup would involve before work begins.",
  },
  {
    slug: "payroll-partnership",
    title: "Payroll support",
    homepageTitle: "Payroll Support",
    homepageDesc:
      "Make paying employees and managing payroll responsibilities easier.",
    short:
      "Payroll coordination through an ADP partnership—so paying people and staying organized around payroll is less of a weekly burden.",
    whoItsFor: [
      "Teams that want payroll processed with fewer last-minute surprises",
      "Owners who are hiring, adding locations, or expanding into additional states",
      "Businesses that need help coordinating payroll with the rest of the books",
    ],
    whatsIncluded: [
      "Payroll coordination with ADP",
      "New-hire setup guidance",
      "Basic payroll reconciliation support",
      "Support for common payroll questions",
    ],
    outcomes: [
      "A more consistent payroll process",
      "Fewer payroll questions landing back on the owner",
      "Better connection between payroll and the books",
    ],
    seoTitle: "Payroll and Bookkeeping Support | VANDY Accounting Solutions",
    seoDescription:
      "Payroll support for small businesses in Virginia and North Carolina through VANDY’s ADP partnership, coordinated with your bookkeeping.",
    ctaHeading: "Want payroll to take less of your week?",
    ctaSubheading:
      "Tell us your current payroll setup and we’ll talk through how VANDY can help coordinate it.",
  },
  {
    slug: "quickbooks-support",
    title: "QuickBooks support",
    homepageTitle: "QuickBooks Support",
    homepageDesc:
      "Get a QuickBooks file you can trust—organized, usable, and easier to maintain.",
    short:
      "Practical QuickBooks cleanup and support so the file stays accurate, organized, and useful for day-to-day decisions.",
    whoItsFor: [
      "Companies already using QuickBooks that want it set up correctly",
      "Owners tired of mystery balances, duplicates, or reports that do not add up",
      "Teams that need a cleaner workflow for bills, invoices, and deposits",
    ],
    whatsIncluded: [
      "QuickBooks review and cleanup plan",
      "Chart of accounts organization",
      "Workflow recommendations for bills, invoices, and deposits",
      "Ongoing support as needed",
    ],
    outcomes: [
      "A file you can trust",
      "Cleaner reporting",
      "Less rework every month",
    ],
    seoTitle: "QuickBooks Support for Small Businesses | VANDY",
    seoDescription:
      "QuickBooks cleanup and ongoing support for small businesses in Virginia and North Carolina. Get a file that is accurate and usable.",
    ctaHeading: "Want QuickBooks that actually makes sense?",
    ctaSubheading:
      "Tell us what you are seeing in the file and we’ll recommend a practical next step.",
  },
  {
    slug: "month-end-year-end",
    title: "Financial reporting",
    homepageTitle: "Financial Reporting",
    homepageDesc:
      "Turn accounting data into clear information owners can actually use.",
    short:
      "Month-end and year-end coordination that produces reporting you can understand—and records that are ready when you need them.",
    whoItsFor: [
      "Owners who want a reliable monthly close instead of a scramble",
      "Businesses that receive reports but do not get a clear read on performance",
      "Companies preparing for taxes, lenders, or other year-end needs",
    ],
    whatsIncluded: [
      "Monthly close checklist and cadence",
      "Year-end coordination and cleanup",
      "Financial statements you can review with context",
      "Documentation support for your tax preparer",
    ],
    outcomes: [
      "A more predictable close",
      "Clearer visibility into how the business is doing",
      "Smoother year-end preparation",
    ],
    seoTitle: "Financial Reporting for Small Businesses | VANDY",
    seoDescription:
      "Month-end close and financial reporting for small businesses in Virginia and North Carolina. Get numbers you can actually use.",
    ctaHeading: "Want reporting you can actually use?",
    ctaSubheading:
      "Tell us what you need to see each month and we’ll recommend a close and reporting approach.",
  },
  {
    slug: "budget-preparation",
    title: "Business advisory",
    homepageTitle: "Business Advisory",
    homepageDesc:
      "Get practical financial guidance for decisions, planning, and growth.",
    short:
      "Budgeting, planning, and practical financial guidance so you can see what the numbers mean before you make the next move.",
    whoItsFor: [
      "Owners who want a realistic plan instead of guessing at cash flow",
      "Businesses that have outgrown DIY tracking and need better visibility",
      "Leaders making hiring, pricing, or growth decisions and want the numbers nearby",
    ],
    whatsIncluded: [
      "Budget build and review",
      "Forecast updates on a monthly or quarterly cadence",
      "Simple dashboards and variance review",
      "Practical recommendations based on the books",
    ],
    outcomes: [
      "Clearer planning",
      "Better visibility into cash flow",
      "Decisions backed by current numbers",
    ],
    seoTitle: "Small-Business Financial Guidance | VANDY Accounting Solutions",
    seoDescription:
      "Practical budgeting and financial guidance for growing small businesses in Virginia and North Carolina.",
    ctaHeading: "Want a clearer view of the next 12 months?",
    ctaSubheading:
      "Share your goals and current setup. We’ll talk through how planning support could help.",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;
