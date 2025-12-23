// data/services.ts
export type Service = {
  slug: string;
  title: string;
  short: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "remote-bookkeeping",
    title: "Remote bookkeeping",
    short:
      "Monthly bookkeeping and reconciliations that keep your records clean and reliable.",
    whoItsFor: [
      "Business owners who want clean books without hiring in-house",
      "Teams that need monthly close support and consistent reporting",
    ],
    whatsIncluded: [
      "Monthly bank and credit card reconciliations",
      "Accurate transaction categorization",
      "General ledger maintenance",
      "Monthly financial statements",
      "Issue identification and cleanup",
      "Coordination with tax professionals",
    ],
    outcomes: [
      "Confidence in your numbers",
      "Less time spent fixing errors",
      "Smoother tax season and better decisions",
    ],
  },
  {
    slug: "quickbooks-support",
    title: "QuickBooks support",
    short:
      "Practical guidance and cleanup so your QuickBooks stays accurate and usable.",
    whoItsFor: [
      "Companies already using QuickBooks that want it set up correctly",
      "Owners who want fewer “mystery” balances and duplicate entries",
    ],
    whatsIncluded: [
      "QuickBooks review + cleanup plan",
      "Chart of Accounts organization",
      "Workflow recommendations (bills, invoices, deposits)",
      "Ongoing support as-needed",
    ],
    outcomes: ["A file you can trust", "Cleaner reporting", "Less rework"],
  },
  {
    slug: "payroll-partnership",
    title: "Payroll partnership",
    short: "An ADP payroll partnership to simplify processing and coordination.",
    whoItsFor: [
      "Teams that want payroll done right and on time",
      "Companies hiring or expanding into new states",
    ],
    whatsIncluded: [
      "Payroll coordination with ADP",
      "New hire setup guidance",
      "Basic payroll reconciliation support",
      "Support for common payroll questions",
    ],
    outcomes: ["Fewer payroll headaches", "More consistency and confidence"],
  },
  {
    slug: "month-end-year-end",
    title: "Month-end & year-end coordination",
    short:
      "Closing support and year-end financial record coordination for peace of mind.",
    whoItsFor: [
      "Owners who want a reliable monthly close",
      "Organizations preparing for taxes, lenders, or grants",
    ],
    whatsIncluded: [
      "Monthly close checklist and cadence",
      "Year-end coordination and cleanup",
      "Documentation support for your tax preparer",
    ],
    outcomes: ["Cleaner close", "Faster year-end readiness", "Better docs"],
  },
  {
    slug: "budget-preparation",
    title: "Budget preparation",
    short: "Practical budgeting support so you can plan with clarity and confidence.",
    whoItsFor: [
      "Leaders who want a realistic plan for growth",
      "Organizations that need better visibility into cash flow",
    ],
    whatsIncluded: [
      "Budget build + review",
      "Forecast updates (monthly or quarterly)",
      "Simple dashboards and variance review",
    ],
    outcomes: ["Clearer planning", "Less uncertainty", "Better decisions"],
  },
];