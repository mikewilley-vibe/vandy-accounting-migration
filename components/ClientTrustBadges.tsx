import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { number: "50+", label: "Businesses served" },
  { number: "20+", label: "Years of experience" },
  { number: "100%", label: "Response rate" },
  { number: "1 day", label: "Typical response time" },
];

const delayClasses = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
];

export default function ClientTrustBadges() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Trusted by Indiana businesses"
        title="Proven track record"
        subtitle="Julie brings two decades of accounting expertise and a commitment to every client relationship."
        className="animate-fade-in-up"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-in-up ${delayClasses[i]} rounded-2xl bg-white p-6 text-center ring-1 ring-slate-200/70`}
            >
              <div className="text-3xl font-semibold text-[hsl(var(--brand))]">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
