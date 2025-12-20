const services = [
  "Remote accounting & bookkeeping services",
  "Convenient real-time access to your Quickbooks file",
  "ADP payroll partnership",
  "Closing and year-end financial record coordination",
  "Budget preparation",
];

export default function ServicesPage() {
  return (
    <section className="rounded-2xl border bg-white p-8">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>

      <p className="mt-3 text-slate-700">
        Vandy Accounting Solutions delivers outstanding results by offering:
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <div key={s} className="rounded-2xl border bg-slate-50 p-5">
            <div className="text-lg font-semibold text-slate-900">{s}</div>
            <div className="mt-2 text-sm text-slate-600">
              {/* Placeholder: add 1–2 sentences per service when ready */}
              Details coming soon.
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-slate-700">
        Vandy Accounting Solutions is your outsourced accounting solution!
      </p>
    </section>
  );
}