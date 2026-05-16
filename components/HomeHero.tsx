// components/HomeHero.tsx
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";

export default function HomeHero() {
  return (
    <div className="relative min-h-[600px] md:min-h-[680px] overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/hero-desk.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden
      />

      {/* Gradient overlay — left-heavy for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />

      {/* Content */}
      <div className="relative z-10 px-7 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="animate-fade-in text-sm font-semibold text-white/70">
              Vandy Accounting Solutions
            </p>

            <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Outsourced accounting that stays calm, clean, and consistent.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg text-white/80 leading-relaxed max-w-[60ch]">
              Monthly bookkeeping, reconciliations, and practical reporting—so you
              can make decisions with clarity and confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="animate-fade-in-up animation-delay-300">
                <PrimaryButton href="/contact">Book a call</PrimaryButton>
              </div>

              <Link
                href="/services"
                className="animate-fade-in-up animation-delay-400 focus-ring inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-smooth hover:bg-white/20 hover:border-white/50 hover:shadow-md"
              >
                View services
              </Link>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-sm text-white/75">
              {["Remote-friendly", "QuickBooks ProAdvisor", "Budgeting + Close"].map((t, i) => (
                <span
                  key={t}
                  className={`animate-fade-in animation-delay-${
                    500 + i * 100
                  } rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/20 transition-smooth hover:border-white/40 hover:bg-white/20 cursor-default`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT (contact card) */}
          <div className="animate-fade-in-up animation-delay-300 rounded-3xl bg-white/95 backdrop-blur-sm border border-white/60 p-7 shadow-2xl transition-smooth hover:bg-white">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <p className="mt-3 text-slate-700">
              Reach out by email or phone. We typically respond within one business day.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-800">
              <div>
                <span className="font-semibold text-slate-600">E</span>{" "}
                <a
                  className="focus-ring font-semibold text-slate-900 link-underline"
                  href="mailto:info@vandyaccounting.com"
                >
                  info@vandyaccounting.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-600">P</span>{" "}
                <a
                  className="focus-ring font-semibold text-slate-900 link-underline"
                  href="tel:+13174906113"
                >
                  (317) 490-6113
                </a>
              </div>
              <div className="text-slate-700">
                7755 Shasta Drive, Indianapolis, IN 46217
              </div>
            </div>

            <div className="mt-6">
              <PrimaryButton href="/contact">Request a quote</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
