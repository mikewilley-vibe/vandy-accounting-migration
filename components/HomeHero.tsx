// components/HomeHero.tsx
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import BackgroundArt from "@/components/BackgroundArt";

export default function HomeHero() {
  return (
    <div className="relative">
      <BackgroundArt src="/calculator-outline.png" position="right" />

      <div className="px-7 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="animate-fade-in text-sm font-semibold text-slate-600">
              Vandy Accounting Solutions
            </p>

            <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Outsourced accounting that stays calm, clean, and consistent.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg text-slate-600 leading-relaxed max-w-[60ch]">
              Monthly bookkeeping, reconciliations, and practical reporting—so you
              can make decisions with clarity and confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="animate-fade-in-up animation-delay-300">
                <PrimaryButton href="/contact">Book a call</PrimaryButton>
              </div>

              <Link
                href="/services"
                className="animate-fade-in-up animation-delay-400 focus-ring inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-slate-200/70 bg-white text-slate-900 transition-smooth hover:bg-slate-50 hover:border-slate-300 hover:shadow-md"
              >
                View services
              </Link>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-sm text-slate-600">
              {["Remote-friendly", "QuickBooks ProAdvisor", "Budgeting + Close"].map((t, i) => (
                <span
                  key={t}
                  className={`animate-fade-in animation-delay-${
                    500 + i * 100
                  } rounded-full bg-white px-3 py-1 border border-slate-200/60 transition-smooth hover:border-slate-400 hover:bg-slate-50 cursor-default`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT (contact card) */}
          <div className="animate-fade-in-up animation-delay-300 rounded-3xl bg-white border border-slate-200/60 p-7 shadow-sm transition-smooth hover:shadow-lg hover:border-slate-300">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <p className="mt-3 text-slate-600">
              Reach out by email or phone. We typically respond within one business day.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-500">E</span>{" "}
                <a
                  className="focus-ring font-semibold text-slate-900 link-underline"
                  href="mailto:info@vandyaccounting.com"
                >
                  info@vandyaccounting.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-500">P</span>{" "}
                <a
                  className="focus-ring font-semibold text-slate-900 link-underline"
                  href="tel:+13174906113"
                >
                  (317) 490-6113
                </a>
              </div>
              <div className="text-slate-500">
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