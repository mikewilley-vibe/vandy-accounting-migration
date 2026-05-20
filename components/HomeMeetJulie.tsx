// components/HomeMeetJulie.tsx
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const credentials = [
  "Master's Degree in Accounting",
  "Bachelor's Degree in Accounting",
  "20+ Years Accounting & Controller Experience",
  "QuickBooks Gold ProAdvisor",
  "ADP Certified Payroll Partner",
  "Multi-state payroll compliance expertise",
];

export default function HomeMeetJulie() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B3C5D] via-slate-800 to-slate-900 shadow-2xl">
        <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* Left — photo */}
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <Image
              src="/julie-riess.webp"
              alt="Julie L. Riess, founder of Vandy Accounting Solutions, with 20+ years of accounting experience"
              fill
              className="object-cover object-top"
            />
            {/* Gradient overlays for brand color blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B3C5D]/40 hidden lg:block" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/70 to-transparent lg:hidden" />
            {/* Floating credential badge */}
            <div className="absolute bottom-5 left-5 hidden lg:flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-md">
              <svg className="h-4 w-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
              </svg>
              <span className="text-xs font-semibold text-white">QuickBooks Gold ProAdvisor</span>
            </div>
          </div>

          {/* Right — bio */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Meet Julie
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Julie L. Riess
              </h2>
              <p className="mt-1.5 text-base font-medium text-slate-300">
                Founder & Lead Accountant
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-5">
              <p className="text-slate-300 leading-relaxed text-[15px]">
                With more than 20 years of accounting and controller experience, Julie helps
                business owners gain clarity, confidence, and peace of mind. She brings
                corporate-level expertise — including controller roles at multi-state
                organizations — to small and mid-size businesses, without the overhead.
              </p>
            </FadeIn>

            <FadeIn delay={0.18} className="mt-6">
              <ul className="space-y-2.5">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.26} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-emerald-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/30"
              >
                Read Julie&rsquo;s Full Bio
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
