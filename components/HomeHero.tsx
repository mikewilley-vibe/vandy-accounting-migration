// components/HomeHero.tsx
import Image from "next/image";
import Link from "next/link";

const trustBadges = [
  "20+ Years of Experience",
  "QuickBooks ProAdvisor",
  "Free Initial Consultation",
  "Personalized Service",
];

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-[720px] md:min-h-[820px] overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/hero-meeting.jpg"
        alt="Business owner meeting with accountant to review financial documents and growth strategy"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Primary gradient overlay — stronger on left for text, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/20" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      {/* Subtle brand-color glow — blue on top-left, green bottom-right */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-800/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-emerald-700/20 blur-3xl" aria-hidden="true" />

      {/* Content — constrained inside a max-width wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-36 flex flex-col justify-center min-h-[720px] md:min-h-[820px]">
        <div className="max-w-2xl space-y-7">
          {/* Eyebrow */}
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Vandy Accounting Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Strategic Accounting Services{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              for Growing Businesses
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-white/80 leading-relaxed max-w-[55ch]">
            Bookkeeping, payroll, tax coordination, and CFO-level guidance to
            help your business grow with confidence.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-600 hover:to-emerald-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in animation-delay-400 flex flex-wrap gap-2 pt-1">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur-sm"
              >
                <svg className="h-3 w-3 text-emerald-400 shrink-0" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Floating trust card — desktop only */}
        <div className="absolute right-8 bottom-12 hidden xl:flex flex-col gap-3 w-60 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Why clients choose us</p>
          {["No long-term contracts", "Remote-friendly nationwide", "Response within 1 business day"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-white/80">
              <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
