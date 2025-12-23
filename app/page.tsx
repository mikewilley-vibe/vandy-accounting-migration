import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import BackgroundArt from "@/components/BackgroundArt";
import SectionDivider from "@/components/SectionDivider";

const services = [
  {
    title: "Remote bookkeeping",
    desc: "Monthly bookkeeping and reconciliations that keep your records clean and reliable.",
    href: "/services/remote-bookkeeping",
  },
  {
    title: "QuickBooks support",
    desc: "Cleanup and practical support so your QuickBooks stays accurate and usable.",
    href: "/services/quickbooks-support",
  },
  {
    title: "Payroll partnership",
    desc: "An ADP payroll partnership to simplify processing and coordination.",
    href: "/services/payroll-partnership",
  },
  {
    title: "Month-end & year-end coordination",
    desc: "Closing support and year-end coordination for peace of mind.",
    href: "/services/month-end-year-end",
  },
  {
    title: "Budget preparation",
    desc: "Practical budgeting support so you can plan with clarity and confidence.",
    href: "/services/budget-preparation",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-14">
      {/* HERO (LIGHT) */}
      <Section variant="dark" className="relative bg-gradient-to-b from-slate-50 to-white">
        <BackgroundArt src="/calculator-outline.png" position="right" />

        <div className="px-7 py-12 md:px-10 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-slate-600">
                Vandy Accounting Solutions
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Your outsourced accounting solution.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-[60ch]">
                Vandy Accounting Solutions helps companies create an organized and
                informational approach to accounting and finance. Julie L. Riess is at
                the helm, using industry-proven methods to help you develop a fiscal
                strategy for your business and ensure your financial needs are met.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <PrimaryButton href="/contact">Book a call</PrimaryButton>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                             border border-slate-200/70 bg-white text-slate-900 transition hover:bg-slate-50"
                >
                  View services
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-sm text-slate-600">
                {["Remote-friendly", "QuickBooks ProAdvisor", "Budgeting + Close"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-1 border border-slate-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl bg-white border border-slate-200/60 p-7">
              <div className="text-sm font-semibold text-slate-900">Contact</div>
              <p className="mt-3 text-slate-600">
                Reach out by email or phone. We typically respond within one business day.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-700">
                <div>
                  <span className="font-semibold text-slate-500">E</span>{" "}
                  <a
                    className="font-semibold text-slate-900 hover:underline hover:underline-offset-4"
                    href="mailto:info@vandyaccounting.com"
                  >
                    info@vandyaccounting.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-500">P</span>{" "}
                  <a
                    className="font-semibold text-slate-900 hover:underline hover:underline-offset-4"
                    href="tel:+13174906113"
                  >
                    (317) 490-6113
                  </a>
                </div>
                <div className="text-slate-500">
                  7755 Shasta Drive, Indianapolis, IN 46217
                </div>
              </div>

              <div className="mt-6">
                <PrimaryButton href="/contact">Request a quote</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES (DARK + Bench-style dark cards) */}
      <Section variant="darkGrid" className="relative">
        <BackgroundArt
          src="/invoice-outline.png"
          position="bottomRight"
          opacityClass="opacity-[0.07] md:opacity-[0.10]"
        />

        <SectionHeader
          tone="dark"
          eyebrow="Services"
          title="What we offer"
          subtitle="A flexible set of services that gives you clarity, control, and confidence."
        />

        <div className="px-7 pb-10 md:px-10 md:pb-12">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur
                           transition will-change-transform hover:-translate-y-[1px] hover:bg-white/10 hover:shadow-lg"
              >
                <div className="text-lg font-semibold text-white">
                  {s.title}
                </div>
                <p className="mt-2 text-white/75 leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-white/90 underline underline-offset-4 group-hover:opacity-80">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/services"
              className="text-sm font-semibold text-white/85 underline underline-offset-4 hover:text-white"
            >
              See the full services page →
            </Link>
          </div>
        </div>
      </Section>

 {/* HOW IT WORKS (light, outlined, boxed steps) */}
<Section
  variant="panel"
  className="border-2 border-slate-900/90 bg-white"
>
  <SectionHeader
    eyebrow="How it works"
    title="Calm, consistent monthly close."
    subtitle="We keep your books clean, reconcile accounts, and deliver reporting you can actually use—without the chaos."
  />

  <div className="px-7 pb-10 md:px-10 md:pb-12">
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {[
        {
          k: "Step 1",
          t: "Get set up",
          d: "Secure access + a quick discovery call.",
          n: "01",
        },
        {
          k: "Step 2",
          t: "Reconcile & clean",
          d: "Fix issues and keep accounts aligned.",
          n: "02",
        },
        {
          k: "Step 3",
          t: "Report & improve",
          d: "Monthly reporting + proactive recommendations.",
          n: "03",
        },
      ].map((x) => (
        <div
          key={x.t}
          className="relative rounded-2xl bg-slate-50/60 p-6 ring-1 ring-slate-200/70"
        >
          {/* number badge */}
          <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
            {x.n}
          </div>

          <div className="text-sm font-semibold text-slate-600">{x.k}</div>
          <div className="mt-2 text-lg font-semibold text-slate-900">{x.t}</div>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.d}</p>

          {/* subtle bottom rule */}
          <div className="mt-5 h-px w-full bg-slate-200/70" />

          {/* optional “micro-cta” */}
          <div className="mt-3 text-xs font-semibold text-slate-800">
            Included every month
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

{/* TESTIMONIALS (dark, high-contrast) */}
<Section variant="darkGrid" className="relative">
  <BackgroundArt
    src="/ledger-lines.png"
    position="topRight"
    opacityClass="opacity-[0.10] md:opacity-[0.14]"
  />

  <SectionHeader
    tone="dark"
    eyebrow="Testimonials"
    title="What others say"
    subtitle="Real words from clients and long-term partners."
  />

  <div className="px-7 pb-10 md:px-10 md:pb-12">
    <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
      <p className="text-white/85 leading-relaxed">
        “Julie’s academic accomplishments and dual background in public accounting and
        non-profit service is an ideal blend for anyone seeking someone that will ensure
        maintenance of required recordkeeping but have an above average eye toward improvement and
        strategic planning. She was outstanding at explaining accounting concepts and
        requirements and earned a great deal of respect from all. Vendors adored her quick
        response time and thoroughness. I am confident Julie will fulfill your financial
        services needs and excel as your financial expert.”
      </p>

      <div className="mt-6 h-px w-full bg-white/10" />

      <div className="mt-5">
        <div className="font-semibold text-white">
          — Robert A. Woods, CPA, CGMA
        </div>
        <div className="mt-1 text-sm text-white/70">
          Former member of the Board of Directors of the Indiana Society of Certified Public
          Accountants
        </div>
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between gap-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
      <p className="text-sm text-white/75">
        Vandy Accounting Solutions is a proud Gold-certified Intuit QuickBooks ProAdvisor.
      </p>

      <Link
        href="/about"
        className="shrink-0 text-sm font-semibold text-white underline underline-offset-4 hover:opacity-85"
      >
        Learn more →
      </Link>
    </div>
  </div>
</Section>

{/* FINAL CTA (light, outlined, readable) */}
<Section variant="plain">
  <div className="px-7 md:px-10">
    <div
      className="
        rounded-3xl
        border border-slate-900
        bg-white
        px-10 py-12
        text-slate-900
      "
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* TEXT */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-slate-600">
            Ready to get started?
          </p>

          <h3 className="mt-2 text-3xl font-semibold tracking-tight">
            Ready for cleaner books and clearer decisions?
          </h3>

          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Tell us what you need and we’ll recommend the right level of support.
          </p>
        </div>

        {/* BUTTON */}
        <div className="shrink-0">
          <PrimaryButton href="/contact">
            Contact us
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</Section>
    </div>
  );
}