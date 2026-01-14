// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PrimaryButton from "@/components/PrimaryButton";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact | Vandy Accounting Solutions",
  description:
    "Contact Vandy Accounting Solutions to request a quote or ask a question.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section className="bg-white">
        {/* PAGE HEADER (polished + aligned) */}
        <div className="px-7 pt-7 md:px-10 md:pt-10">
          <div className="space-y-3">
            <div className="animate-fade-in text-sm font-semibold text-slate-600">Contact</div>

            <h1 className="animate-fade-in-up animation-delay-100 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Get in touch
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg text-slate-600 max-w-2xl">
              Reach out directly or send a message. We typically respond within
              one business day.
            </p>
          </div>
        </div>

        {/* SOFT DIVIDER */}
        <div className="px-7 md:px-10">
          <div className="mt-8 h-px w-full bg-slate-200/60" />
        </div>

        {/* CONTENT */}
        <div className="px-7 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* LEFT (quieter, more scannable) */}
            <aside className="space-y-6">
              <div className="animate-fade-in-up animation-delay-300 rounded-2xl bg-slate-50/60 p-6 ring-1 ring-slate-200/70 transition-smooth hover:bg-slate-50 hover:ring-slate-200/100">
                <div className="text-sm font-semibold text-slate-900">
                  {company.name}
                </div>

                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <div>{company.addressLine1}</div>
                  <div>{company.addressLine2}</div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex gap-2">
                    <span className="w-5 shrink-0 text-slate-500">P</span>
                    <a
                      className="focus-ring font-semibold text-slate-900 link-underline"
                      href={`tel:${company.phone}`}
                    >
                      {company.phone}
                    </a>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 shrink-0 text-slate-500">E</span>
                    <a
                      className="focus-ring font-semibold text-slate-900 link-underline"
                      href={`mailto:${company.email}`}
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-400 rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-smooth hover:ring-slate-200 hover:shadow-md">
                <div className="text-sm font-semibold text-slate-900">
                  Connect with us
                </div>

                <div className="mt-3">
                  <SocialLinks size="md" />
                </div>

                <div className="mt-4 text-sm text-slate-600">
                  Prefer email?{" "}
                  <Link
                    href={`mailto:${company.email}`}
                    className="focus-ring font-semibold link-underline"
                  >
                    Send a message
                  </Link>
                  .
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-500 text-xs text-slate-500 leading-relaxed">
                Tip: If you include your business type and what you want help
                with (bookkeeping, cleanup, budgeting, close), we can respond
                faster.
              </div>
            </aside>

            {/* RIGHT (form is the hero) */}
            <div className="animate-fade-in-up animation-delay-300 rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200/70 transition-smooth hover:ring-slate-200 hover:bg-white">
              {/* Form heading aligned with page header rhythm */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-600">
                  Send a message
                </div>
                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Tell us what you need
                </div>
                <p className="text-sm text-slate-600">
                  We’ll reply within one business day.
                </p>
              </div>

              <div className="mt-6">
                <ContactForm />
              </div>
                <label className="block">
                  <div className="text-sm font-semibold text-slate-900">
                    Name
                  </div>
                  <input
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-200/70 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <div className="text-sm font-semibold text-slate-900">
                    Email
                  </div>
                  <input
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-200/70 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                  />
                </label>

                <label className="block">
                  <div className="text-sm font-semibold text-slate-900">
                    Message
                  </div>
                  <textarea
                    rows={6}
                    className="mt-2 w-full resize-none rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-200/70 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="What are you looking for help with? (bookkeeping, cleanup, budgeting, close, etc.)"
                  />
                </label>

                <div className="pt-2 space-y-2">
                  <PrimaryButton href="#" className="w-fit">
                    Submit
                  </PrimaryButton>

                  {/* subtle success expectation */}
                  <p className="text-xs text-slate-600">
                    After you submit, we’ll review your note and respond within{" "}
                    <span className="font-semibold text-slate-900">
                      one business day
                    </span>
                    .
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    This form is a placeholder right now. When you’re ready, we
                    can wire it to an email service (Formspree / Resend) or use a
                    mailto fallback.
                  </p>
                </div>
                </div>
              </div>
          </div>
        </div>
      </Section>
    </div>
  );
}