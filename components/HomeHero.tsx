import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { company } from "@/data/company";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[34rem] w-[34rem] rounded-full bg-forest/25 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid min-h-[min(92vh,760px)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
        <div className="max-w-2xl">
          <p className="animate-fade-in inline-flex rounded-full bg-accent/15 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
            Now accepting new clients in Virginia &amp; North Carolina
          </p>
          <h1 className="animate-fade-in-up animation-delay-100 mt-6 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            You Run the Business.
            <span className="block text-mist">We’ll Handle the Books.</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-[54ch] text-lg leading-relaxed text-cream/75">
            From bookkeeping and payroll to reporting and financial guidance,
            VANDY gives small-business owners more time, clearer numbers, and
            fewer accounting headaches.
          </p>
          <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact">{company.primaryCta}</Button>
            <Button href="/switch" variant="secondaryOnDark">
              {company.secondaryCta}
            </Button>
          </div>
          <p className="animate-fade-in-up animation-delay-400 mt-5 text-sm text-cream/60">
            Already working with another accountant? We’ll help organize the
            transition.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-200 relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero-restaurant.jpg"
              alt="Restaurant owner reviewing the day's operations in a working kitchen"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-xl text-cream">
              Spend less time managing your books and more time running your
              business.
            </p>
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/15 sm:block">
            <Image
              src="/images/industry-contractor.jpg"
              alt="Contractor reviewing plans at a job site"
              width={352}
              height={264}
              className="h-28 w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 top-10 hidden w-40 overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/15 md:block">
            <Image
              src="/images/industry-auto.jpg"
              alt="Independent auto shop with a vehicle on the lift"
              width={320}
              height={240}
              className="h-24 w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
