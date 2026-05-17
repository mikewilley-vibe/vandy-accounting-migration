// components/HomeHowItWorks.tsx
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Schedule a Consultation",
    desc: "Book a free, no-pressure call to introduce yourself and share what's on your plate.",
    gradient: "from-blue-700 to-blue-500",
    ring: "ring-blue-200",
  },
  {
    num: "02",
    title: "We Assess Your Needs",
    desc: "We review your current systems, books, and goals to understand exactly what your business needs.",
    gradient: "from-blue-500 to-teal-500",
    ring: "ring-teal-200",
  },
  {
    num: "03",
    title: "Receive a Tailored Plan",
    desc: "You get a customized service plan — the right scope, the right level of support, no fluff.",
    gradient: "from-teal-500 to-emerald-500",
    ring: "ring-emerald-200",
  },
  {
    num: "04",
    title: "Focus on Growing Your Business",
    desc: "We handle the accounting. You get clean books, clear reports, and the confidence to make smart decisions.",
    gradient: "from-emerald-500 to-emerald-600",
    ring: "ring-emerald-200",
  },
];

export default function HomeHowItWorks() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <FadeIn className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">How It Works</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Getting started is simple
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 leading-relaxed">
          From your first call to clean monthly reports — here&rsquo;s what working together looks like.
        </p>
      </FadeIn>

      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Horizontal connector line — desktop */}
        <div className="absolute top-[2.6rem] left-[calc(12.5%-0.5px)] right-[calc(12.5%-0.5px)] hidden h-0.5 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 lg:block" aria-hidden="true" />

        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className={`relative z-10 mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-sm font-extrabold text-white shadow-md ring-4 ring-white`}>
                {step.num}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">{step.title}</h3>
              <p className="mt-2.5 text-sm text-slate-500 leading-relaxed flex-1">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.45} className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-600 hover:to-emerald-500 hover:shadow-lg"
        >
          Start with a Free Consultation
        </Link>
      </FadeIn>
    </div>
  );
}
