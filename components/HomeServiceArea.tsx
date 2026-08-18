import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function HomeServiceArea() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-cream md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/service-area-main-street.jpg"
          alt="Downtown storefronts along a Virginia or North Carolina Main Street"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>
      <Container className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow text-accent">Service area</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Small-business accounting support across Virginia and North Carolina.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">
            VANDY works with owners who want knowledgeable, responsive service
            and a long-term working relationship. We are actively accepting new
            clients in Virginia and North Carolina. Support is remote-friendly,
            so you get the same year-round attention whether you are in a
            restaurant, on a job site, or running a shop.
          </p>
          <p className="mt-4 max-w-2xl text-cream/65">
            The VANDY name comes from Virginia and Indiana. Our office is in
            Indianapolis. We do not operate additional storefronts; Virginia and
            North Carolina clients are served remotely.
          </p>
          <div className="mt-8">
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { label: "Growth markets", value: "Virginia & North Carolina" },
            { label: "Office", value: "Indianapolis, Indiana" },
            { label: "How we work", value: "Remote-friendly, year-round" },
            { label: "Who we help", value: "Owner-operated small businesses" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-ink/40 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-xl text-cream">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
