import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import PageShell from "@/components/PageShell";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact | Vandy Accounting Solutions",
  alternates: { canonical: "/contact" },
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
    <PageShell>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand))]">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Let&rsquo;s start a conversation
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Ready to simplify your accounting? Reach out and we&rsquo;ll get back to
          you within one business day.
        </p>
      </div>

      <Section className="bg-white">
        <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Contact details
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                We&rsquo;re here to help with all your accounting needs.
              </p>
            </div>

            <ul className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsla(var(--brand)/0.08)] ring-1 ring-[hsla(var(--brand)/0.18)]">
                    <Icon
                      className="h-5 w-5 text-[hsl(var(--brand))]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm font-semibold text-slate-800 transition-colors hover:text-[hsl(var(--brand))]"
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

          <div>
            <div className="mb-7">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--brand))]">
                Send a message
              </div>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900">
                Tell us what you need
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the form and we&rsquo;ll reply within one business day.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
