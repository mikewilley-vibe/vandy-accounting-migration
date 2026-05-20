import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import HomeServices from "@/components/HomeServices";
import HomeWhoWeServe from "@/components/HomeWhoWeServe";
import HomeMeetJulie from "@/components/HomeMeetJulie";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFinalCta from "@/components/HomeFinalCta";
import CollapsibleFaq from "@/components/CollapsibleFaq";
import FadeIn from "@/components/FadeIn";
import AwardStrip from "@/components/AwardStrip";

export const metadata: Metadata = {
  title: "Vandy Accounting Solutions | Strategic Accounting for Growing Businesses",
  description:
    "Bookkeeping, payroll, QuickBooks support, and CFO-level guidance for small and mid-size businesses. 20+ years experience. Based in Indianapolis, IN.",
};

const services = [
  {
    title: "Remote Bookkeeping",
    desc: "Monthly bookkeeping and reconciliations that keep your records clean, accurate, and reliable — every month.",
    href: "/services/remote-bookkeeping",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "QuickBooks Support",
    desc: "Cleanup and practical support so your QuickBooks stays accurate, organized, and easy to use.",
    href: "/services/quickbooks-support",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 12h5M12 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Payroll Partnership",
    desc: "ADP payroll partnership to simplify processing, compliance, and multi-state payroll coordination.",
    href: "/services/payroll-partnership",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Month-End & Year-End",
    desc: "Closing support and year-end coordination so tax season is smooth and stress-free.",
    href: "/services/month-end-year-end",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14l2.5 2.5L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Budget Preparation",
    desc: "Practical budgeting and forecasting support so you can plan ahead with clarity and confidence.",
    href: "/services/budget-preparation",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16l4-6 4 3 4-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Controller Services",
    desc: "CFO-level oversight, financial reporting, and strategic guidance — without the full-time executive cost.",
    href: "/services",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What do you need from me to get started?",
    a: "We'll start with a free discovery call, then request access to your bookkeeping system (often QuickBooks) and your bank/credit card statements for the period in scope.",
  },
  {
    q: "Do you work with businesses outside Indiana?",
    a: "Yes — all services are remote-friendly. We work with businesses across the country. We'll confirm your needs and workflows during the first call.",
  },
  {
    q: "Can you work with my tax preparer?",
    a: "Absolutely. We provide clean year-end reporting and documentation so your tax preparer has exactly what they need, and tax season goes smoothly.",
  },
  {
    q: "Is payroll included in the monthly service?",
    a: "Payroll is offered via an ADP partnership and can be added to your service plan based on what your business needs.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across a wide range of industries including medical, legal, construction, real estate, restaurants, nonprofits, manufacturing, and trucking.",
  },
  {
    q: "How are fees structured?",
    a: "We offer tailored monthly retainer packages based on the scope of your needs. Contact us for a free consultation and we'll walk you through the options.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO — full-bleed, no container */}
      <HomeHero />

      {/* STATS — light background */}
      <div className="bg-slate-50 py-14 md:py-16">
        <HomeStats />
      </div>

      {/* SERVICES — white background */}
      <div className="bg-white py-16 md:py-20">
        <HomeServices services={services} />
      </div>

      {/* WHO WE SERVE — subtle gray */}
      <div className="bg-slate-50 py-16 md:py-20">
        <HomeWhoWeServe />
      </div>

      {/* MEET JULIE — white with brand-blue dark card */}
      <div className="bg-white py-16 md:py-20">
        <HomeMeetJulie />
      </div>

      {/* CERTIFICATIONS — white background */}
      <div className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AwardStrip />
        </div>
      </div>

      {/* HOW IT WORKS — subtle gradient bg */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
        <HomeHowItWorks />
      </div>

      {/* TESTIMONIALS — dark brand gradient */}
      <HomeTestimonials />

      {/* FAQ */}
      <div className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Common questions answered
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
              Not sure where to start? Here are answers to the questions we hear most.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CollapsibleFaq faqs={faqs} />
          </FadeIn>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-slate-50 pt-16 md:pt-20">
        <HomeFinalCta />
      </div>
    </div>
  );
}
