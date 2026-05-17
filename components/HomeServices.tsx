// components/HomeServices.tsx
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type Service = { title: string; desc: string; href: string; icon: React.ReactNode };

function ArrowRight() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeServices({ services }: { services: Service[] }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Section header */}
      <FadeIn className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Services</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Everything your business needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 leading-relaxed">
          A flexible set of services that gives you clarity, control, and confidence — without the overhead of a full-time accounting department.
        </p>
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.07}>
            <Link
              href={s.href}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_20px_40px_-8px_rgba(16,185,129,0.15),0_4px_16px_-2px_rgba(0,0,0,0.06)]"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-emerald-500/10 text-emerald-700 ring-1 ring-emerald-200/60 transition-all duration-300 group-hover:from-blue-600/20 group-hover:to-emerald-500/20 group-hover:ring-emerald-300">
                {s.icon}
              </div>
              <div className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                {s.title}
              </div>
              <p className="mt-2 flex-1 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-all duration-200 group-hover:gap-2.5">
                Learn more <ArrowRight />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md"
        >
          View all services & packages →
        </Link>
      </FadeIn>
    </div>
  );
}
