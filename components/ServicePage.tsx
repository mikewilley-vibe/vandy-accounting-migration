import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import type { Service } from "@/data/services";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-20">
          <Breadcrumb
            tone="dark"
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <p className="eyebrow mt-6 text-accent">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/75">{service.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">{company.primaryCta}</Button>
            <Button href="/services" variant="secondaryOnDark">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="surface-card p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Who this is for
            </h2>
            <ul className="mt-5 space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">
              What you can expect
            </h2>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">
            What’s included
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <li key={item} className="rounded-2xl bg-cream p-5 ring-1 ring-sand">
                <div className="font-semibold text-ink">{item}</div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={service.ctaHeading}
        body={service.ctaSubheading}
        secondaryHref="/switch"
        secondaryLabel="See How Easy It Is to Switch"
      />
    </>
  );
}
