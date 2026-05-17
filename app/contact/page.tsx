// app/contact/page.tsx
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact | Vandy Accounting Solutions",
  description:
    "Contact Vandy Accounting Solutions to request a quote or ask a question.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${company.addressLine1}, ${company.addressLine2}`,
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within one business day",
    href: null,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Background accent blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Page header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
            Get In Touch
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Let&rsquo;s start a conversation
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Ready for clear, confident financial management? Reach out and we&rsquo;ll get
            back to you within one business day.
          </p>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-10">
          {/* Floating circular logo badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-emerald-600 shadow-lg ring-4 ring-white z-10" aria-hidden="true">
            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">

            {/* ── Left: contact details ── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Ready for Clear, Confident Financial Management?
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Reach out and we&rsquo;ll get back to you within one business day.
                </p>
              </div>

              {/* Trust bullets */}
              <ul className="space-y-3">
                {[
                  "Free Initial Consultation",
                  "Confidential &amp; Secure",
                  "No long-term contracts required",
                  "Response within one business day",
                  "Remote-friendly — works with any location",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <ul className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                      <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm font-semibold text-slate-800 transition-colors hover:text-emerald-700"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-slate-700">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <p className="text-xs leading-relaxed text-slate-500">
                  <span className="font-semibold text-slate-700">Pro tip:</span>{" "}
                  Include your business type and what you need help with
                  (bookkeeping, cleanup, budgeting, close) so we can respond
                  faster.
                </p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div>
              <div className="mb-7">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                  Send a message
                </div>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
                  Tell us what you need
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill out the form and we&rsquo;ll reply within one business day.
                </p>
              </div>
              <ContactForm />

              {/* Mini testimonial */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex gap-0.5 mb-2" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;Julie stepped in, took my mess, and made sense of it. Now the State is happy. The IRS is happy. And I am extremely happy.&rdquo;
                </p>
                <p className="mt-1.5 text-xs font-semibold text-slate-700">— Daniel Borud, RN · CEO, Northern Lights Medical</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
