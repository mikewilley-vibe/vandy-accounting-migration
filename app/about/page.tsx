import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "About | Vandy Accounting Solutions",
  alternates: { canonical: "/about" },
  description:
    "Meet Julie L. Riess, owner of Vandy Accounting Solutions—an experienced accountant focused on clear books, practical process, and long-term client partnerships.",
};

const highlights = [
  "20+ years of accounting experience",
  "Master’s & Bachelor’s in Accounting",
  "Controller background across industries",
  "Gold-certified QuickBooks ProAdvisor",
];

const focusAreas = [
  {
    title: "Relationship-first support",
    body: "Services are customized around your goals, timelines, and the way your business actually works—not a one-size template.",
  },
  {
    title: "Managerial accounting mindset",
    body: "Beyond keeping the books tidy, Julie looks for process improvements, clearer reporting, and better decision support.",
  },
  {
    title: "Day-to-day controller experience",
    body: "Having lived inside the workflow, she understands close pressure, vendor follow-up, compliance details, and handoffs to tax.",
  },
];

const testimonials = [
  {
    quote:
      "Julie’s academic accomplishments and dual background in public accounting and non-profit service is an ideal blend for anyone seeking someone that will ensure maintenance of required recordkeeping but have an above average eye toward improvement and strategic planning. She was outstanding at explaining accounting concepts and requirements and earned a great deal of respect from all. Vendors adored her quick response time and thoroughness. I am confident Julie will fulfill your financial services needs and excel as your financial expert.",
    name: "Robert A. Woods, CPA, CGMA",
    title:
      "Former member of the Board of Directors of the Indiana Society of Certified Public Accountants",
  },
  {
    quote:
      "Acting as Accountant and Controller for me with three different businesses I’ve owned over the past 12 years, Julie is quick to respond and proactive with recommendations to streamline processes within my organizations. Julie has helped grow my businesses as well as save money by implementing best practices internally as well as externally with vendors, ultimately helping to increase my bottom line profit. She is very well versed with regulations within the State of Indiana from process to tax requirements, ensuring I stay in compliance and continue to grow. She has proven to be a quick study and is flexible with her abilities. Working outside the accounting realm, Julie even helped evaluate and determine which media markets to invest in and which to pull out of for one of my businesses running multi-million dollar radio and television commercials across the US and Canada. With the constant change, Julie met the challenges on time and helped garner the attention of major retailers. Julie was a strong part in helping us meet those retailers’ requirements and land these national retailer contracts. Julie’s understanding of processes has also helped develop better working relationships with banks and state-ran organizations. Recently, Julie assisted my business in receiving a PPP loan, allowing us to weather the storm during the pandemic. Julie worked directly with the bank and helped us throughout the process to approval. Thanks to Julie we are on pace to outperform our best year yet, all due to her persistence and understanding of processes.",
    name: "Erik Hurwick",
    title:
      "CEO of Hurwick Enterprises Incorporated & Founding Partner of Indiana Re-Entry Integration Services",
  },
  {
    quote:
      "Julie has always gone above and beyond the call of duty in helping me with my personal and business accounting and tax issues. I’m a very small business, and I often don’t have the time or the skill to successfully manage my books. I miss little things that turn into BIG things later. I became overwhelmed. Julie stepped in, took my mess, and made sense of it. Asking for help is so difficult but having Julie organize my business has made it possible for me to go out and provide the skill that people need from me. Now the State is happy. The IRS is happy. And I am extremely happy.",
    name: "Daniel Borud, RN",
    title: "CEO of Northern Lights Medical",
  },
  {
    quote:
      "Julie takes excellent care of all our accounting, including monthly account reconciliation, paying bills, payroll, audits for 401K and insurance yearly. She works directly with our bank to help with any issues we may have. Julie does a great job with continued education and stays on top of all the different taxes we have. Pro Plastics has employees in four different states, and she makes sure to stay on top of the different taxes for each state. Julie has continually went above and beyond for Pro Plastics. She has taken time to make sure wire transfers are done properly, even taking a check to the bank when the wire transfer was not able to be done online. We are blessed to work with Julie!",
    name: "Christy Nance",
    title: "Office Manager of Pro Plastics Sales & Service",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-10 md:space-y-14 md:py-14">
      {/* Intro */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-12">
          <p className="animate-fade-in text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand))]">
            About
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="min-w-0">
              <h1 className="animate-fade-in-up animation-delay-100 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Meet Julie L. Riess
              </h1>
              <p className="animate-fade-in-up animation-delay-200 mt-4 max-w-[62ch] text-lg leading-relaxed text-slate-600">
                Owner of Vandy Accounting Solutions—focused on client
                relationships, practical financial process, and clear reporting
                that helps owners make better decisions.
              </p>

              <ul className="animate-fade-in-up animation-delay-300 mt-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[hsla(var(--brand)/0.08)] px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-[hsla(var(--brand)/0.18)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-wrap items-center gap-3">
                <PrimaryButton href="/contact">Request a quote</PrimaryButton>
                <Link
                  href="/services"
                  className="focus-ring inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition-smooth hover:bg-slate-50 hover:ring-slate-300"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200 mx-auto w-full max-w-[220px] lg:mx-0">
              <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5">
                <Image
                  src="/julie-riess.webp"
                  alt="Portrait of Julie L. Riess, owner of Vandy Accounting Solutions"
                  width={440}
                  height={550}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Julie L. Riess
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Experience that transfers to your books
            </h2>
            <div className="mt-5 space-y-5 text-[15px] leading-[1.75] text-slate-700 md:text-base">
              <p>
                Julie is a solutions-driven accountant focused on client
                satisfaction and relationship building, company growth
                evaluation and recommendations, financial process
                implementation, and customizing services to meet individual
                client needs and objectives.
              </p>
              <p>
                Her approach is managerial-accounting focused, combining more
                than 20 years of experience with practical tools for clearer
                financial insight.
              </p>
              <p>
                As a Fiscal and Corporate Controller for more than a decade,
                Julie knows the day-to-day pressures organizations face—she has
                worked through the pluses, minuses, debits, and credits herself.
              </p>
              <p>
                She has partnered with medical and dental practices, attorney
                firms, HOAs, manufacturing, logistics/trucking, real estate,
                retail, restaurant and food services, federal and state
                grant-funded nonprofits, membership organizations, schools, and
                many other industries.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70 transition-smooth hover:bg-white hover:shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="px-7 py-8 md:px-10 md:py-10">
          <div className="mb-6 max-w-2xl">
            <h2
              id="about-testimonials-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
            >
              Client testimonials
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Long-term partnerships built on trust, clarity, and results.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
            {testimonials.map((item, index) => {
              const delayClass =
                index === 0
                  ? "animation-delay-200"
                  : index === 1
                    ? "animation-delay-300"
                    : index === 2
                      ? "animation-delay-400"
                      : "animation-delay-500";

              return (
                <TestimonialCard
                  key={item.name}
                  quote={item.quote}
                  name={item.name}
                  title={item.title}
                  tone={index % 2 === 0 ? "soft" : "white"}
                  className={`animate-fade-in-up ${delayClass}`}
                />
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="px-7 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Ready to make your accounting feel easier?
              </h2>
              <p className="mt-2 text-lg text-slate-200">
                Share what you need and we&apos;ll recommend the right level of
                support.
              </p>
            </div>
            <PrimaryButton href="/contact">Contact us</PrimaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
