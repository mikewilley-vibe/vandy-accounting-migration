import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

type Service = {
  name: string;
  bookkeeping: boolean;
  quickbooks: boolean;
  payroll: boolean;
  budget: boolean;
  closeSupport: boolean;
};

const comparisonData: Service[] = [
  {
    name: 'Monthly bookkeeping',
    bookkeeping: true,
    quickbooks: false,
    payroll: false,
    budget: false,
    closeSupport: true,
  },
  {
    name: 'QuickBooks cleanup',
    bookkeeping: false,
    quickbooks: true,
    payroll: false,
    budget: false,
    closeSupport: false,
  },
  {
    name: 'Payroll partnership',
    bookkeeping: false,
    quickbooks: false,
    payroll: true,
    budget: false,
    closeSupport: false,
  },
  {
    name: 'Budget preparation',
    bookkeeping: false,
    quickbooks: false,
    payroll: false,
    budget: true,
    closeSupport: false,
  },
];

const features = [
  { key: 'bookkeeping', label: 'Reconciliations' },
  { key: 'quickbooks', label: 'QuickBooks Support' },
  { key: 'payroll', label: 'Payroll' },
  { key: 'budget', label: 'Budgeting' },
  { key: 'closeSupport', label: 'Close Support' },
];

export default function ServiceComparison() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Compare services"
        title="Find what's right for you"
        subtitle="Each service builds toward cleaner books and clearer decisions."
        className="animate-fade-in-up"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200/70">
              <th className="text-left font-semibold text-slate-900 py-4 px-2">Service</th>
              {features.map((f) => (
                <th
                  key={f.key}
                  className="text-center font-semibold text-slate-900 py-4 px-2 whitespace-nowrap"
                >
                  {f.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((service, idx) => (
              <tr
                key={service.name}
                className={`border-b border-slate-200/50 ${
                  idx % 2 === 0 ? 'bg-slate-50/30' : ''
                }`}
              >
                <td className="font-semibold text-slate-900 py-4 px-2">{service.name}</td>
                {features.map((f) => {
                  const key = f.key as keyof Service;
                  const included = service[key];
                  return (
                    <td key={`${service.name}-${f.key}`} className="text-center py-4 px-2">
                      {included ? (
                        <svg
                          className="h-5 w-5 text-emerald-600 mx-auto"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-slate-300 mx-auto"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
