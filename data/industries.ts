export type Industry = {
  slug: string;
  name: string;
  navLabel: string;
  short: string;
  hero: string;
  intro: string;
  problemsHeading: string;
  problems: { title: string; body: string }[];
  howWeHelp: { title: string; body: string }[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "restaurants-hospitality",
    name: "Restaurants and hospitality",
    navLabel: "Restaurants & hospitality",
    short: "Payroll, vendor bills, food and labor costs, and cash-flow visibility.",
    hero: "Run the floor. We’ll keep the books from becoming another shift.",
    intro:
      "Restaurants, bars, cafés, and food-service businesses move fast. Tips, vendor invoices, labor, and daily sales can pile up while you are trying to keep guests happy. VANDY helps hospitality owners in Virginia and North Carolina stay current on the books so cash flow and costs are easier to see.",
    problemsHeading: "What hospitality owners usually need help organizing",
    problems: [
      {
        title: "Payroll and tip-related complexity",
        body: "Tips, split shifts, and changing schedules make payroll harder than a standard weekly run. We can help organize payroll support and keep those numbers connected to the rest of the books.",
      },
      {
        title: "Vendor bills that never stop",
        body: "Food, beverage, linen, and equipment invoices arrive constantly. We help you keep bills categorized and current so you are not reconstructing spending from a stack of statements.",
      },
      {
        title: "Food and labor costs that are hard to see",
        body: "When the books lag, it is difficult to tell whether a busy week was actually a profitable week. Current records make food, labor, and overhead easier to review.",
      },
      {
        title: "Cash-flow visibility",
        body: "Deposits, card processing, and cash drawers can make it hard to know what landed in the bank. We help organize the flow so you can see what is coming in and going out.",
      },
      {
        title: "Multi-location reporting",
        body: "If you operate more than one location, mixed or delayed books make comparisons guesswork. We can help structure reporting so each location is easier to review.",
      },
    ],
    howWeHelp: [
      {
        title: "Keep the books current through busy seasons",
        body: "Monthly bookkeeping and cleanup support reduce the after-hours accounting work that hospitality owners often absorb themselves.",
      },
      {
        title: "Connect payroll to the rest of the picture",
        body: "Through VANDY’s ADP payroll partnership, we can help coordinate payroll so labor costs show up clearly in your reporting.",
      },
      {
        title: "Prepare records for your tax professional",
        body: "We coordinate with your tax preparer and organize year-end documentation so tax season is not a scavenger hunt.",
      },
    ],
    image: "/images/hero-restaurant.jpg",
    imageAlt:
      "Restaurant owner reviewing operations in a Virginia hospitality kitchen",
    seoTitle: "Restaurant Bookkeeping in Virginia & North Carolina | VANDY",
    seoDescription:
      "Bookkeeping, payroll support, and financial reporting for restaurants, bars, cafés, and food-service businesses in Virginia and North Carolina.",
  },
  {
    slug: "contractors-trades",
    name: "Contractors and skilled trades",
    navLabel: "Contractors & trades",
    short: "Job costing, project profitability, subcontractors, and equipment expenses.",
    hero: "Finish the job. We’ll help you see what it actually made.",
    intro:
      "Builders, remodelers, and skilled-trade companies live in the field—not in a spreadsheet. Job costs, subcontractor payments, equipment, and progress billing can scatter across accounts if nobody is keeping the books current. VANDY helps contractors in Virginia and North Carolina organize the financial side so project performance is easier to see.",
    problemsHeading: "Where contractor books often get messy",
    problems: [
      {
        title: "Job costing that never quite lands",
        body: "Materials, labor, and subs can sit in mixed accounts until it is too late to tell which jobs made money. We can help organize the books so job-related activity is easier to review.",
      },
      {
        title: "Project profitability you cannot see until later",
        body: "If reporting lags, you find out a job was thin after the crew has moved on. Current books make it easier to look at what a project actually cost.",
      },
      {
        title: "Subcontractor payments and 1099 organization",
        body: "Paying subs is one job. Keeping those payments organized for year-end is another. We can help keep vendor payments and related records in better order and coordinate with your tax preparer.",
      },
      {
        title: "Equipment and vehicle expenses",
        body: "Trucks, tools, fuel, and repairs add up quickly. We help categorize and track those costs so they do not disappear into uncategorized transactions.",
      },
      {
        title: "Progress billing and cash flow",
        body: "Deposits, draws, and retainage can make cash look healthier than the job really is. We help organize incoming revenue and outgoing costs so cash flow is easier to follow.",
      },
    ],
    howWeHelp: [
      {
        title: "Catch up the file, then keep it moving",
        body: "If the books are behind, we start with cleanup, then build a monthly process that can keep pace with active jobs.",
      },
      {
        title: "Reporting owners can use between jobs",
        body: "Month-end reporting is written for decision-making, not for an accounting textbook.",
      },
      {
        title: "Payroll support as the crew grows",
        body: "When you add people, payroll coordination through our ADP partnership can take one more recurring task off your plate.",
      },
    ],
    image: "/images/industry-contractor.jpg",
    imageAlt:
      "Contractor reviewing plans at a residential job site in Virginia",
    seoTitle: "Contractor Bookkeeping in Virginia & North Carolina | VANDY",
    seoDescription:
      "Bookkeeping and accounting support for contractors, builders, and skilled trades in Virginia and North Carolina—including job costing, payroll, and cleanup.",
  },
  {
    slug: "automotive-salvage",
    name: "Automotive, salvage, and recycling",
    navLabel: "Automotive & salvage",
    short: "Inventory, cash tracking, equipment, payroll, and operational reporting.",
    hero: "Parts move fast. The books should keep up.",
    intro:
      "Auto repair shops, salvage yards, junkyards, and recycling businesses deal with a mix of cash, parts, equipment, vendors, and people. That combination is hard to track if bookkeeping is squeezed into evenings. VANDY helps automotive and salvage operators in Virginia and North Carolina organize the financial side of the operation.",
    problemsHeading: "Operational issues we hear from this industry",
    problems: [
      {
        title: "Inventory and asset organization",
        body: "Parts, cores, vehicles, and equipment can be difficult to keep straight in the books. We can help organize available records and reporting so assets and related activity are easier to follow. We do not replace an inventory management system, but we can support the accounting around it.",
      },
      {
        title: "Cash and transaction tracking",
        body: "Cash sales, card payments, and mixed deposits make it easy to lose the thread. We help reconcile accounts and categorize activity so incoming money is clearer.",
      },
      {
        title: "Vendor and customer payments",
        body: "Buying and selling parts, paying vendors, and collecting from customers can sprawl across accounts. We help create a more organized approach to bills, payments, and incoming revenue.",
      },
      {
        title: "Equipment expenses",
        body: "Lifts, forklifts, trucks, and yard equipment are expensive to run. We help keep those costs categorized so they show up in reporting instead of disappearing into miscellaneous.",
      },
      {
        title: "Payroll and operational reporting",
        body: "Shop and yard teams still need to get paid on time, and owners still need a read on how the month went. Payroll support and monthly reporting help both.",
      },
    ],
    howWeHelp: [
      {
        title: "Bring overdue books current",
        body: "If the file has been neglected during busy seasons, cleanup and catch-up work can restore a usable starting point.",
      },
      {
        title: "Build a monthly rhythm that fits the yard or shop",
        body: "Ongoing bookkeeping is designed to stay out of the way of the operation while still keeping records current.",
      },
      {
        title: "Clarify what the month actually produced",
        body: "Reporting is explained in plain language so you can see cash, costs, and whether the operation is moving in the right direction.",
      },
    ],
    image: "/images/industry-salvage.jpg",
    imageAlt:
      "Salvage and recycling yard operation with equipment and auto parts",
    seoTitle:
      "Bookkeeping for Auto Shops, Salvage Yards & Recycling | VANDY",
    seoDescription:
      "Accounting support for auto repair, salvage yards, junkyards, and recycling businesses in Virginia and North Carolina.",
  },
  {
    slug: "healthcare-residential-care",
    name: "Healthcare and residential care",
    navLabel: "Healthcare & care",
    short: "Payroll, billing follow-through, compliance-minded records, and clear reporting.",
    hero: "Care comes first. The books should not compete with it.",
    intro:
      "Medical practices, dental offices, and residential care operators carry a lot of administrative weight. VANDY has worked with healthcare and care organizations and continues to support owners who need responsive bookkeeping, payroll coordination, and reporting they can understand—without turning the practice into an accounting project.",
    problemsHeading: "Where healthcare and care operators get stuck",
    problems: [
      {
        title: "Administrative work crowding out the actual work",
        body: "When the owner or office manager is also the bookkeeper, evenings disappear. We take on the accounting workflow so your team can stay focused on care.",
      },
      {
        title: "Payroll for a schedule that never sits still",
        body: "Shifts, overtime, and changing coverage make payroll more than a simple weekly task. We can help coordinate payroll support and keep it aligned with the books.",
      },
      {
        title: "Records that need to stay organized",
        body: "Healthcare and residential care businesses often need cleaner documentation for tax preparers, lenders, or other reviews. We keep books current and coordinate year-end materials.",
      },
      {
        title: "Unclear profitability",
        body: "Busy does not always mean profitable. Current reporting helps you see labor, overhead, and cash flow with less guesswork.",
      },
    ],
    howWeHelp: [
      {
        title: "Ongoing bookkeeping that stays out of the way",
        body: "Monthly reconciliations, categorization, and statements so the practice is not reconstructing the year in March.",
      },
      {
        title: "A calmer close",
        body: "Month-end and year-end coordination create a repeatable process instead of a last-minute scramble.",
      },
      {
        title: "A partner who answers",
        body: "Healthcare operators should not have to chase their accountant. VANDY is built for year-round communication, not a once-a-year drop-in.",
      },
    ],
    image: "/images/industry-healthcare.jpg",
    imageAlt:
      "Healthcare or residential care team talking in a warm clinic setting",
    seoTitle:
      "Healthcare & Residential Care Bookkeeping | VANDY Accounting",
    seoDescription:
      "Bookkeeping and payroll support for medical, dental, and residential care businesses in Virginia and North Carolina.",
  },
  {
    slug: "retail-local-services",
    name: "Retail and local services",
    navLabel: "Retail & local services",
    short: "Daily sales, vendor bills, payroll, and a clearer read on the month.",
    hero: "Keep the doors open. We’ll keep the books from piling up in the back office.",
    intro:
      "Retailers and local service businesses live on daily sales, vendor terms, and a small team that already has a full day. VANDY helps owners in Virginia and North Carolina keep bookkeeping, bills, and payroll from turning into a second job.",
    problemsHeading: "Common retail and local-service friction",
    problems: [
      {
        title: "Daily sales that never quite match the books",
        body: "Card batches, cash, and deposits can drift if nobody is reconciling consistently. We help keep incoming revenue organized.",
      },
      {
        title: "Vendor bills and inventory-related spending",
        body: "Purchases can swamp a DIY file. We categorize spending and help you see what the store or service business is actually putting out each month. We can support the accounting around inventory even when we are not running a warehouse system.",
      },
      {
        title: "Owner-operator bookkeeping after closing time",
        body: "If you are reconciling at night, the business already has an accounting problem. Ongoing bookkeeping is designed to give that time back.",
      },
      {
        title: "Hiring and payroll as the team grows",
        body: "Adding a first employee—or a fifth—changes the administrative load. Payroll support can grow with the shop.",
      },
    ],
    howWeHelp: [
      {
        title: "A monthly process that matches a retail calendar",
        body: "We keep books current through busy seasons and quieter months so you are not catching up later.",
      },
      {
        title: "Reports you can read before you reorder or hire",
        body: "Financial reporting is written for owners, not for an accounting classroom.",
      },
      {
        title: "An easier switch if your current setup is not working",
        body: "If you are ready to change providers, we help organize the transition and review the condition of the books first.",
      },
    ],
    image: "/images/industry-retail.jpg",
    imageAlt:
      "Independent retail shop owner arranging merchandise in a local store",
    seoTitle: "Retail Bookkeeping in Virginia & North Carolina | VANDY",
    seoDescription:
      "Bookkeeping and payroll support for retailers and local service businesses in Virginia and North Carolina.",
  },
  {
    slug: "professional-services",
    name: "Professional services",
    navLabel: "Professional services",
    short: "Billings, expenses, payroll, and reporting for firms that sell expertise.",
    hero: "You bill for expertise. You should not also have to be the bookkeeper.",
    intro:
      "Attorneys, consultants, agencies, and other professional firms sell time and judgment. The books still need to be current, bills still need to be organized, and owners still need a clear view of cash. VANDY has worked with attorney firms and other professional practices and supports firms in Virginia and North Carolina that want responsive accounting help.",
    problemsHeading: "What professional firms typically need",
    problems: [
      {
        title: "Revenue that is billed, collected, or stuck",
        body: "Invoices, retainers, and delayed collections can make cash look different from the work you have already done. We help organize incoming revenue and keep the books current.",
      },
      {
        title: "Operating expenses that hide in the file",
        body: "Software, contractors, rent, and travel add up. Clean categorization makes overhead easier to see.",
      },
      {
        title: "A partner who is available outside tax season",
        body: "Professional firms need answers during the year, not only when returns are due. VANDY is built for ongoing support.",
      },
      {
        title: "Growth that outpaces DIY bookkeeping",
        body: "A second hire, a new office, or a busier caseload is often the moment the owner’s spreadsheet stops working. We help put a more durable process in place.",
      },
    ],
    howWeHelp: [
      {
        title: "Bookkeeping that respects billable time",
        body: "We take the recurring accounting work so you can stay on client work.",
      },
      {
        title: "Planning support when the firm is changing shape",
        body: "Budgeting and advisory conversations help you look at hiring, cash, and upcoming decisions with current numbers.",
      },
      {
        title: "Cleaner year-end coordination",
        body: "We organize records and work with your tax professional so year-end is more handoff than scavenger hunt.",
      },
    ],
    image: "/images/industry-professional.jpg",
    imageAlt:
      "Professional-service advisors talking through a plan in a bright office",
    seoTitle:
      "Bookkeeping for Professional Services | VANDY Accounting Solutions",
    seoDescription:
      "Outsourced accounting for law firms, consultants, and professional-service businesses in Virginia and North Carolina.",
  },
  {
    slug: "small-business",
    name: "Owner-operated small businesses",
    navLabel: "Small businesses",
    short: "Bookkeeping, payroll, cleanup, and reporting for growing companies.",
    hero: "If you own it, you should not also have to chase the books.",
    intro:
      "VANDY works with owner-operated and growing small businesses across many industries—manufacturing, logistics, real estate, nonprofits, restaurants, retail, professional firms, and more. If you are in Virginia or North Carolina and want a responsive financial partner, we want to talk.",
    problemsHeading: "Signs the current setup is no longer enough",
    problems: [
      {
        title: "The books are behind",
        body: "Catch-up work is one of the most common reasons owners reach out. We review what exists, explain the gaps, and help bring the file current.",
      },
      {
        title: "You only hear from the accountant at tax time",
        body: "Year-round questions deserve year-round support. VANDY is built for ongoing communication, not a seasonal drop-in.",
      },
      {
        title: "You cannot tell what the business is actually making",
        body: "If reports are late, confusing, or missing, decisions get made on gut feel. We produce reporting owners can use.",
      },
      {
        title: "DIY bookkeeping has hit its limit",
        body: "The same person should not be running operations and reconstructing transactions at midnight. Outsourced accounting is meant to give that time back.",
      },
    ],
    howWeHelp: [
      {
        title: "A process that can grow with you",
        body: "Start with cleanup or monthly bookkeeping, then add payroll support, reporting, or planning as the company needs it.",
      },
      {
        title: "A straightforward way to switch",
        body: "If you already have someone, we help organize the transition and review the condition of the books before ongoing work begins.",
      },
      {
        title: "A long-term working relationship",
        body: "The goal is not a one-time cleanup. It is a durable partnership that stays useful as the business changes.",
      },
    ],
    image: "/images/service-area-main-street.jpg",
    imageAlt:
      "Main Street storefronts in a Virginia or North Carolina downtown district",
    seoTitle:
      "Small-Business Accounting in Virginia & North Carolina | VANDY",
    seoDescription:
      "Outsourced accounting for small businesses in Virginia and North Carolina—bookkeeping, payroll support, cleanup, and reporting.",
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<string, Industry>;
