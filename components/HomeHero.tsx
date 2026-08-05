// components/HomeHero.tsx
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import { company } from "@/data/company";

export default function HomeHero() {
  return (
    <section className="relative min-h-[min(92vh,760px)] overflow-hidden">
      <Image
        src="/hero-desk.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/72 to-slate-900/35" />

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,760px)] max-w-6xl flex-col justify-center px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl space-y-6">
          <p className="animate-fade-in font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {company.name}
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Outsourced accounting that stays calm, clean, and consistent.
          </h1>

          <p className="animate-fade-in-up animation-delay-200 max-w-[54ch] text-lg leading-relaxed text-white/80">
            Monthly bookkeeping, reconciliations, and practical reporting—so you
            can make decisions with clarity and confidence.
          </p>

          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center gap-4 pt-1">
            <PrimaryButton href="/contact">Request a quote</PrimaryButton>
            <Link
              href="/services"
              className="focus-ring link-underline text-sm font-semibold text-white/90"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
