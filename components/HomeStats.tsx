// components/HomeStats.tsx
import FadeIn from "@/components/FadeIn";

const stats = [
  {
    value: "20+",
    label: "Years of Experience",
    sub: "Since early 2000s",
    gradient: "from-blue-600 to-blue-500",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Businesses Served",
    sub: "Across 10+ industries",
    gradient: "from-emerald-600 to-teal-500",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Industries Supported",
    sub: "Medical to manufacturing",
    gradient: "from-teal-600 to-cyan-500",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16l4-6 4 3 4-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Gold",
    label: "QuickBooks ProAdvisor",
    sub: "Intuit certified",
    gradient: "from-amber-500 to-yellow-400",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HomeStats() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08} className="h-full">
            <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-lg">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold tracking-tight text-slate-900">{stat.value}</div>
              <div className="space-y-0.5">
                <div className="text-sm font-semibold text-slate-700 leading-snug">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.sub}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
