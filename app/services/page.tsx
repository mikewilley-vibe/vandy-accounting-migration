// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PrimaryButton from "@/components/PrimaryButton";
import ServiceCard from "@/components/ServiceCard";
import CollapsibleFaq from "@/components/CollapsibleFaq";
import ServiceComparison from "@/components/ServiceComparison";
import ClientTrustBadges from "@/components/ClientTrustBadges";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Vandy Accounting Solutions",
  description:
    "Remote bookkeeping, QuickBooks support, payroll partnership, budgeting, and close coordination.",
};

const painPoints = [
  "Books are behind",
  "QuickBooks is messy",
  "Unclear cash flow",
  "Month-end takes forever",
  "Owner doing everything",
  "Need cleaner reporting",
];

const packages = [
  {
    title: "Ongoing bookkeeping",
    subtitle: "Reliable monthly close + reporting",
    bullets: [
      "Monthly reconciliations",
      "Categorization + accuracy checks",
      "Monthly financial statements",
      "Practical recommendations",
    ],
  },
  {
    title: "Clean-up & catch-up",
    subtitle: "Get your file back to trustworthy",
    bullets: [
      "Fix common QuickBooks issues",
      "Bring months up to date",
      "Resolve uncategorized items",
      "Create a clean handoff to tax prep",
    ],
  },
  {
    title: "Planning support",
    subtitle: "Budgeting + forecasting for clarity",
    bullets: [
      "Budget build + refresh",
      "Variance review cadence",
      "Simple forecasting updates",
      "Decision-ready reporting",
    ],
  },
];

const faqs = [
  {
    q: "What do you need from me to get started?",
    a: "We’ll start with a quick call, then request access to your bookkeeping system (often QuickBooks) and your bank/credit card statements for the period in scope.",
  },
  {
    q: "Do you work with businesses outside Indiana?",
    a: "Yes—services are remote-friendly. We’ll confirm your needs and workflows during the first call.",
  },
  {
    q: "Can you work with my tax preparer?",
    a: "Absolutely. We can provide clean year-end reporting and documentation so taxes go smoother.",
  },
  {
    q: "Is payroll included?",
    a: "Payroll is offered via an ADP partnership and can be added based on what your business needs.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      {/* HERO (tighter) */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <p className="animate-fade-in text-sm font-semibold text-slate-600">Services</p>

          <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="animate-fade-in-up animation-delay-100 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Support that makes your accounting feel easier
              </h1>
              <p className="animate-fade-in-up animation-delay-200 mt-3 text-base md:text-lg text-slate-600">
                Clean books, consistent close, and clear reporting—so you can make decisions with confidence.
              </p>

              <div className="animate-fade-in-up animation-delay-300 mt-5 flex flex-wrap gap-2">
                {painPoints.map((p, i) => (
                  <span
                    key={p}
                    className={`animate-fade-in animation-delay-${300 + i * 50} rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200/70 transition-smooth hover:bg-slate-100 hover:ring-slate-300`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap items-center gap-3">
              <PrimaryButton href="/contact">Request a quote</PrimaryButton>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-slate-200/70 bg-white text-slate-900 shadow-sm transition-smooth hover:bg-slate-50 hover:ring-slate-300"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES GRID */}
      <section className="space-y-4">
        <div className="animate-fade-in-up animation-delay-300 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-smooth hover:shadow-md">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What we offer
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Choose what you need now—then scale support as your business grows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.slug} className={`animate-fade-in-up animation-delay-${300 + (i + 1) * 100}`}>
              <ServiceCard href={`/services/${s.slug}`} title={s.title} desc={s.short} />
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES (no pricing, but feels premium) */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Common ways clients work with us
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                We’ll recommend a level of support after a quick call—based on where you are today and where you want to be.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <PrimaryButton href="/contact">Tell us what you need</PrimaryButton>
            <p className="text-sm text-slate-600">
              Typical response within <span className="font-semibold text-slate-900">one business day</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <h2 className="animate-fade-in-up text-2xl font-semibold tracking-tight text-slate-900">
            FAQs
          </h2>
          <p className="animate-fade-in-up animation-delay-100 mt-2 text-slate-600 max-w-2xl">
            Quick answers to common questions before you reach out.
          </p>

          <CollapsibleFaq faqs={faqs} />
        </div>
      </Section>

      {/* SERVICE COMPARISON */}
      <ServiceComparison />

      {/* TRUST BADGES */}
      <ClientTrustBadges />

      {/* FINAL CTA */}
      <Section className="bg-slate-900">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="animate-fade-in-up text-2xl font-semibold tracking-tight text-white">
                Ready for cleaner books and clearer decisions?
              </h3>
              <p className="animate-fade-in-up animation-delay-100 mt-2 text-slate-100 text-lg">
                Send a note and we’ll recommend the right next step.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <PrimaryButton href="/contact">Contact us</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}