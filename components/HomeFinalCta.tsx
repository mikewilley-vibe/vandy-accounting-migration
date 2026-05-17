// components/HomeFinalCta.tsx
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function HomeFinalCta() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B3C5D] via-slate-800 to-emerald-900 px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-blue-700/15 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Ready to get started?</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Cleaner books. Clearer decisions.<br className="hidden md:block" /> More confidence.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your business and we&rsquo;ll recommend exactly the right level of support &mdash; no obligation, no long-term commitment required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-emerald-400 hover:shadow-emerald-500/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/30"
              >
                Explore Services
              </Link>
            </div>
            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
              {["Free initial consultation", "No contracts required", "Response within 1 business day"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <svg className="h-3 w-3 text-emerald-400 shrink-0" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
