import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Small-Business Accounting",
  description:
    "Accounting support for restaurants, contractors, auto and salvage businesses, healthcare, retail, professional firms, and other small businesses in Virginia and North Carolina.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-20">
          <p className="eyebrow text-accent">Industries</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Accounting support for the way your business actually runs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/75">
            VANDY works with owner-operated companies across Virginia and North
            Carolina. Find the operational issues we most often help organize in
            your industry.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group overflow-hidden rounded-3xl bg-paper shadow-sm ring-1 ring-sand transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/8]">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {industry.name}
                </h2>
                <p className="mt-2 text-ink/70">{industry.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-forest group-hover:underline">
                  See how VANDY can help →
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Don’t see your industry listed?"
        body="If you run an owner-operated business in Virginia or North Carolina, we still want to hear from you."
        primaryLabel={company.primaryCta}
      />
    </>
  );
}
