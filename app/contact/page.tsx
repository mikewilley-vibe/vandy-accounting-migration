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
            Ready to simplify your accounting? Reach out and we&rsquo;ll get
            back to you within one business day.
          </p>
        </div>

        {/* Main card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-12px_rgba(15,118,110,0.15),0_20px_40px_-8px_rgba(0,0,0,0.08)] md:p-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">

            {/* ── Left: contact details ── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Contact details
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  We&rsquo;re here to help with all your accounting needs.
                </p>
              </div>

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
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
