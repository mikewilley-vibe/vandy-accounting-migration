import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Virginia & North Carolina",
  description:
    "Contact VANDY Accounting Solutions to talk about bookkeeping, payroll support, cleanup, or switching providers. Now accepting clients in Virginia and North Carolina.",
  openGraph: {
    title: "Contact VANDY Accounting Solutions",
    description:
      "Tell us about your business. We’ll follow up to schedule a conversation.",
  },
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
    label: "Indianapolis office",
    value: `${company.addressLine1}, ${company.addressLine2}`,
    href: null,
  },
  {
    icon: Clock,
    label: "What happens next",
    value: "We review your note and follow up to schedule a conversation, typically within one business day.",
    href: null,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-20">
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us about your business.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/75">
            VANDY is actively accepting new clients in Virginia and North
            Carolina. Share a few details and we’ll follow up to schedule a
            conversation.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Reach VANDY directly
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Prefer not to use the form? Call or email. Virginia and North
                Carolina clients are served remotely from our Indianapolis
                office.
              </p>
            </div>
            <ul className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink/45">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm font-semibold text-ink hover:text-forest"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-ink/80">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6 md:p-8">
            <div className="mb-6">
              <p className="eyebrow">Start here</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                {company.primaryCta}
              </h2>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
