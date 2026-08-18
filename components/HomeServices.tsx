import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="bg-navy py-20 text-cream md:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Services"
          title="Support that shows up as more time, clearer numbers, and less stress."
          subtitle="Each service is built around a business outcome—not a technical checklist."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/8"
            >
              <h3 className="font-display text-2xl font-semibold text-cream">
                {service.homepageTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/70">
                {service.homepageDesc}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-accent group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm font-semibold text-cream/80 underline decoration-white/30 underline-offset-4 hover:text-cream"
          >
            Explore our services
          </Link>
        </div>
      </Container>
    </section>
  );
}
