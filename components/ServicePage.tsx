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
  eyebrow?: string;
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
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <p className="text-sm font-semibold text-slate-600">{eyebrow}</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PrimaryButton href="/contact">Request a quote</PrimaryButton>
            <Link
              href="/services"
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition-smooth hover:bg-slate-50 hover:ring-slate-300"
            >
              View all services
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="px-7 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Who this is for
          </h2>
          <ul className="mt-6 space-y-3">
            {idealFor.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand))]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="px-7 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70"
              >
                <div className="font-semibold text-slate-900">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

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
              <span className="font-semibold text-slate-900">one business day</span>.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="dark">
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
