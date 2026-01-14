import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function ClientTrustBadges() {
  const stats = [
    { number: '50+', label: 'Businesses served' },
    { number: '20+', label: 'Years of experience' },
    { number: '100%', label: 'Response rate' },
    { number: '1 day', label: 'Typical response time' },
  ];

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
              className={`animate-fade-in-up animation-delay-${
                100 + i * 100
              } rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 text-center transition-smooth hover:shadow-md`}
            >
              <div className="text-3xl font-bold text-emerald-700">{stat.number}</div>
              <div className="mt-2 text-sm text-slate-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-white ring-1 ring-slate-200/70">
          <div className="text-sm font-semibold text-slate-600 mb-3">Gold-certified by Intuit</div>
          <div className="flex items-center gap-4">
            <div>
              <img
                src="/quickbooks-proadvisor-gold.png"
                alt="Intuit QuickBooks ProAdvisor Gold"
                className="h-16 w-auto"
              />
            </div>
            <div className="text-sm text-slate-700">
              Vandy Accounting Solutions is officially certified as a Gold-level QuickBooks ProAdvisor,
              demonstrating proven expertise and commitment to professional excellence.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
