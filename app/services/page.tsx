import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CollapsibleFaq from "@/components/CollapsibleFaq";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { servicesFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Bookkeeping, Payroll & Cleanup Services",
  description:
    "Outsourced bookkeeping, payroll support, accounting cleanup, QuickBooks help, and financial reporting for small businesses in Virginia and North Carolina.",
};

const packages = [
  {
    title: "Ongoing bookkeeping",
    subtitle: "Keep the books current every month",
    bullets: [
      "Monthly reconciliations",
      "Categorization and accuracy checks",
      "Monthly financial statements",
      "Practical recommendations",
    ],
  },
  {
    title: "Catch-up and cleanup",
    subtitle: "Get an overdue or messy file back to usable",
    bullets: [
      "Review of available records",
      "Bring months up to date",
      "Resolve common QuickBooks issues",
      "A cleaner handoff into ongoing work",
    ],
  },
  {
    title: "Planning support",
    subtitle: "Budgeting and reporting for decisions",
    bullets: [
      "Budget build and refresh",
      "Variance review cadence",
      "Simple forecasting updates",
      "Reporting owners can actually use",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-20">
          <p className="eyebrow text-accent">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Accounting support that gives you time back.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/75">
            Bookkeeping, payroll support, cleanup, reporting, and practical
            guidance for small-business owners in Virginia and North Carolina.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">{company.primaryCta}</Button>
            <Button href="/industries" variant="secondaryOnDark">
              Find Your Industry
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">
            What we help you get done
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/70">
            Choose what you need now, then add support as the business grows.
            VANDY coordinates with your tax professional; we are not a CPA firm
            and do not prepare tax returns.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="surface-card group p-6 transition hover:-translate-y-0.5"
              >
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {s.homepageTitle}
                </h3>
                <p className="mt-3 text-ink/70">{s.homepageDesc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-forest group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Common ways owners work with us
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/70">
            We’ll recommend a level of support after a conversation—based on
            where you are today and what you need next.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <article key={p.title} className="rounded-2xl bg-cream p-6 ring-1 ring-sand">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink/60">{p.subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/80">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">FAQs</h2>
          <CollapsibleFaq faqs={servicesFaqs} />
        </Container>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="Tell us what is working, what is not, and what you want off your plate. We’ll recommend a practical next step."
        secondaryHref="/switch"
        secondaryLabel="See How Easy It Is to Switch"
      />
    </>
  );
}
