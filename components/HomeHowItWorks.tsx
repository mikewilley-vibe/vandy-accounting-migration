// components/HomeHowItWorks.tsx
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { k: "Step 1", t: "Get set up", d: "Secure access + a quick discovery call." },
  { k: "Step 2", t: "Reconcile & clean", d: "Fix issues and keep accounts aligned." },
  { k: "Step 3", t: "Report & improve", d: "Monthly reporting + proactive recommendations." },
];

export default function HomeHowItWorks() {
  return (
    <Section
      variant="plain"
      className="rounded-3xl bg-white ring-1 ring-slate-900/20"
    >
      <SectionHeader
        eyebrow="How it works"
        title="Calm, consistent monthly close."
        subtitle="We keep your books clean, reconcile accounts, and deliver reporting you can actually use—without the chaos."
        className="text-slate-900"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <div className="mt-2 grid gap-4 md:grid-cols-3">
          {steps.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl bg-slate-50 border border-slate-200/70 p-6"
            >
              <div className="text-sm font-semibold text-slate-600">{x.k}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{x.t}</div>
              <p className="mt-2 text-slate-600 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}