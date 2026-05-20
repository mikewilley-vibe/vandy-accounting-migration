// components/AwardStrip.tsx
import Link from "next/link";
import Image from "next/image";

export default function AwardStrip() {
  return (
    <div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200/70 overflow-hidden">
      <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
        {/* LEFT */}
        <div>
          <p className="text-sm font-semibold text-slate-600">
            Certifications &amp; Partnerships
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Certified software partners you can trust
          </h2>

          <p className="mt-3 text-slate-600 leading-relaxed max-w-[55ch]">
            Vandy Accounting Solutions holds a Gold QuickBooks ProAdvisor certification and is an
            official ADP Payroll Partner — two of the most recognized credentials in small business
            accounting and payroll.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/quickbooks-support"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              QuickBooks support
            </Link>
            <Link
              href="/services/payroll-partnership"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Payroll partnership
            </Link>
          </div>
        </div>

        {/* RIGHT — two partner badges */}
        <div className="relative flex flex-col gap-4">
          {/* QuickBooks Gold */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/QB.png"
                alt="Intuit QuickBooks ProAdvisor Program — Gold"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">QuickBooks Gold ProAdvisor</p>
              <p className="text-xs text-slate-500 mt-0.5">Intuit certified — advanced bookkeeping &amp; QBO expertise</p>
            </div>
          </div>

          {/* ADP Payroll Partner */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/ADP.png"
                alt="ADP Payroll Partner"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">ADP Payroll Partner</p>
              <p className="text-xs text-slate-500 mt-0.5">Certified partner — payroll processing &amp; compliance coordination</p>
            </div>
          </div>

          {/* subtle decorative glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(11,60,93,0.10),transparent_60%)]" />
        </div>
      </div>
    </div>
  );
}