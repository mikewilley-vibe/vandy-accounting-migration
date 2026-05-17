// components/HomeWhoWeServe.tsx
import FadeIn from "@/components/FadeIn";

const industries = [
  {
    label: "Medical & Dental",
    description: "Practices & clinics",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a2 2 0 0 1 2 2v3h3a2 2 0 0 1 0 4h-3v3a2 2 0 0 1-4 0v-3H7a2 2 0 0 1 0-4h3V4a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Law Firms",
    description: "Attorneys & partners",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L5 7v13h14V7l-7-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Contractors",
    description: "Construction & trades",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Real Estate",
    description: "Agents & investors",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Restaurants",
    description: "Food & hospitality",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 2v7a5 5 0 0 0 5 5 5 5 0 0 0 5-5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14v8M13 2v4a3 3 0 0 0 6 0V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 6v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Nonprofits",
    description: "Organizations & charities",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Manufacturing",
    description: "Production & supply chain",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 20h20M4 20V8l5-3 3 5 5-4v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Trucking",
    description: "Fleets & logistics",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function HomeWhoWeServe() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <FadeIn className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Who We Serve</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Built for businesses like yours
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 leading-relaxed">
          We work with small and mid-size businesses across a wide range of industries — from solo practitioners to multi-location operations.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {industries.map((ind, i) => (
          <FadeIn key={ind.label} delay={i * 0.06}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-gradient-to-b hover:from-emerald-50/60 hover:to-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/8 to-emerald-500/8 text-emerald-700 ring-1 ring-slate-200 transition-all duration-300 group-hover:from-blue-600/15 group-hover:to-emerald-500/15 group-hover:ring-emerald-200">
                {ind.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{ind.label}</div>
                <div className="mt-0.5 text-xs text-slate-400">{ind.description}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
