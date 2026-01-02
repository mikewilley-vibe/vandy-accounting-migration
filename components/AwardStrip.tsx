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
            Recognition
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Gold-certified QuickBooks ProAdvisor
          </h2>

          <p className="mt-3 text-slate-600 leading-relaxed max-w-[55ch]">
            Vandy Accounting Solutions is a proud Gold-certified Intuit QuickBooks ProAdvisor.
            That means proven QuickBooks expertise, cleaner books, and a smoother monthly close.
          </p>

          <div className="mt-6">
            <Link
              href="/services/quickbooks-support"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Explore QuickBooks support
            </Link>
          </div>
        </div>

        {/* RIGHT (badge) */}
        <div className="relative">
          <div className="mx-auto w-full max-w-[360px] rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm">
            <div className="relative aspect-square w-full">
              <Image
                src="/quickbooks-proadvisor-gold.png"
                alt="Intuit QuickBooks ProAdvisor Program — Gold"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* subtle decorative glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(11,60,93,0.10),transparent_60%)]" />
        </div>
      </div>
    </div>
  );
}