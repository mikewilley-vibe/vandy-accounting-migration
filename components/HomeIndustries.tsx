import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/data/industries";

export default function HomeIndustries() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title="Built for the way your kind of business actually runs."
            subtitle="From restaurants and job sites to shops, yards, clinics, and professional firms—VANDY works with owner-operated companies across Virginia and North Carolina."
          />
          <Link
            href="/industries"
            className="shrink-0 text-sm font-semibold text-forest hover:underline"
          >
            Find your industry →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-sand transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {industry.navLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {industry.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
