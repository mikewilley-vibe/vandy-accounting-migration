import Link from "next/link";
import Section from "@/components/Section";
import PrimaryButton from "@/components/PrimaryButton";

type ServicePageProps = {
  title: string;
  description: string;

  idealFor: string[];
  included: string[];
  outcomes: string[];

  ctaHeading: string;
  ctaSubheading: string;

  eyebrow?: string; // defaults to "Services"
};

export default function ServicePage({
  title,
  description,
  idealFor,
  included,
  outcomes,
  ctaHeading,
  ctaSubheading,
  eyebrow = "Services",
}: ServicePageProps) {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <p className="text-sm font-semibold text-slate-600">{eyebrow}</p>

          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PrimaryButton href="/contact">Request a quote</PrimaryButton>
            <Link
              href="/services"
              className="text-sm font-semibold underline underline-offset-4 hover:opacity-80"
            >
              View all services
            </Link>
          </div>
        </div>
      </Section>

      {/* WHAT IT IS / IDEAL FOR */}
      <Section>
        <div className="grid gap-10 px-7 py-8 md:grid-cols-2 md:px-10 md:py-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Who this is for
            </h2>
            <p className="text-slate-700 leading-relaxed">
              This service is designed to reduce friction, create consistency,
              and deliver clear reporting you can trust.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
            <h3 className="text-lg font-semibold text-slate-900">Ideal for</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {idealFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section>
        <div className="px-7 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What’s included
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {included.map((w) => (
              <div
                key={w}
                className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/70"
              >
                <p className="text-slate-800">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section>
        <div className="px-7 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Outcomes you can expect
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70"
              >
                <div className="font-semibold text-slate-900">{o}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href="/contact">Talk to Julie</PrimaryButton>
            <p className="text-sm text-slate-600">
              We typically respond within{" "}
              <span className="font-semibold text-slate-900">
                one business day
              </span>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-900">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {ctaHeading}
              </h3>
              <p className="mt-2 text-lg text-slate-200">{ctaSubheading}</p>
            </div>
            <PrimaryButton href="/contact">Contact us</PrimaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
}