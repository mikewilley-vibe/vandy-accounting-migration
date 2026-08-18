import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import TestimonialCard from "@/components/TestimonialCard";
import { company, credentials, originStory } from "@/data/company";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About VANDY | Virginia, Indiana, and Growing Into North Carolina",
  description:
    "The VANDY name comes from Virginia and Indiana. Today we bring relationship-driven accounting support to owner-operated businesses in Virginia and North Carolina.",
  openGraph: {
    title: "About VANDY Accounting Solutions",
    description:
      "Where Virginia and Indiana business expertise come together—now serving growing companies across Virginia and North Carolina.",
  },
};

const focusAreas = [
  {
    title: "Relationship-based service",
    body: "Support is shaped around how your business actually runs—your seasonality, your software, and what you need to see each month.",
  },
  {
    title: "Responsive year-round help",
    body: "You should not have to wait until tax season to get a question answered. VANDY is built for ongoing communication.",
  },
  {
    title: "Practical financial guidance",
    body: "Beyond tidy records, Julie looks at process, reporting, and the decisions those numbers should inform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-accent">About VANDY</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Where Virginia and Indiana business expertise come together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            {originStory.eyebrow}. We help owner-operated companies spend less
            time on the books and more time running the business—and we are
            actively taking on new work in Virginia and North Carolina.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              The VANDY story
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/75">
              {originStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-[17px] leading-relaxed text-ink/75">
              Indiana remains part of who we are—our office is in Indianapolis,
              and that history still shapes the work. The growth markets we are
              building toward now are Virginia and North Carolina.
            </p>
          </div>
          <aside className="surface-card p-7">
            <h3 className="font-display text-2xl font-semibold text-ink">
              What we stand for
            </h3>
            <ul className="mt-5 space-y-4">
              {focusAreas.map((area) => (
                <li key={area.title}>
                  <div className="font-semibold text-ink">{area.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {area.body}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-2xl bg-sand">
              <Image
                src={company.owner.photo}
                alt={company.owner.photoAlt}
                width={440}
                height={550}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
              {company.owner.name}
            </p>
          </div>
          <div>
            <p className="eyebrow">Meet Julie</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              {company.owner.name}
            </h2>
            <p className="mt-2 text-lg text-ink/70">
              Owner of VANDY Accounting Solutions. Focused on client
              relationships, practical financial process, and reporting that
              helps owners make better decisions.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cream px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-sand"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75">
              <p>
                Julie is a solutions-driven accountant focused on client
                satisfaction, company growth evaluation, financial process
                implementation, and customizing services around what each
                business actually needs.
              </p>
              <p>
                Her approach is managerial-accounting focused, combining more
                than 20 years of experience with practical tools for clearer
                financial insight. As a Fiscal and Corporate Controller for more
                than a decade, she has lived inside the close, vendor follow-up,
                and the handoff to tax—so the work is grounded in how businesses
                actually operate.
              </p>
              <p>
                She has partnered with medical and dental practices, attorney
                firms, HOAs, manufacturing, logistics and trucking, real estate,
                retail, restaurant and food services, grant-funded nonprofits,
                membership organizations, schools, and many other
                owner-operated companies.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{company.primaryCta}</Button>
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">
            What clients and colleagues have said
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/70">
            Long-term working relationships, not once-a-year transactions.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.name}
                quote={item.quote}
                name={item.name}
                title={item.title}
                tone={index % 2 === 0 ? "soft" : "white"}
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want this kind of support for your business?"
        body="If you are an owner in Virginia or North Carolina looking for a responsive accounting partner, we want to hear from you."
        secondaryHref="/switch"
        secondaryLabel="See How Easy It Is to Switch"
      />
    </>
  );
}
