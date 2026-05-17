import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const serviceLinks = [
  { href: "/services/remote-bookkeeping", label: "Remote Bookkeeping" },
  { href: "/services/quickbooks-support", label: "QuickBooks Support" },
  { href: "/services/payroll-partnership", label: "Payroll Partnership" },
  { href: "/services/month-end-year-end", label: "Month-End & Year-End" },
  { href: "/services/budget-preparation", label: "Budget Preparation" },
];

const companyLinks = [
  { href: "/about", label: "About Julie" },
  { href: "/services", label: "All Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1.4fr]">

          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Vandy Accounting Solutions" width={160} height={40} className="brightness-0 invert opacity-90" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Strategic accounting services for small and mid-size businesses. Clarity, confidence, and peace of mind — every month.
            </p>
            <div className="space-y-1.5 text-sm">
              <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white">
                <svg className="h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1.01l-2.21 2.21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white">
                <svg className="h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {company.email}
              </a>
              <p className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed pl-6">
                {company.addressLine1}<br />{company.addressLine2}
              </p>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-300">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-300">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              {company.facebookUrl && (
                <a href={company.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
              {company.linkedinUrl && (
                <a href={company.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* QB badge column (hidden on mobile/tablet) */}
          <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300">Certified</h3>
            <Image
              src="/quickbooks-proadvisor-gold.png"
              alt="QuickBooks Gold ProAdvisor"
              width={120}
              height={80}
              className="opacity-80 transition-opacity hover:opacity-100"
            />
            <p className="text-xs text-slate-500 leading-relaxed max-w-[160px]">
              Gold-certified Intuit QuickBooks ProAdvisor — verified expertise in QuickBooks setup, cleanup, and support.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vandy Accounting Solutions. All rights reserved.</p>
          <p>Indianapolis, IN &bull; Remote-friendly nationwide</p>
        </div>
      </div>
    </footer>
  );
}
