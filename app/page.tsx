import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeFinalCta from "@/components/HomeFinalCta";
import FullBleedSection from "@/components/FullBleedSection";
import AwardStrip from "@/components/AwardStrip";
import ClientTrustBadges from "@/components/ClientTrustBadges";
import HomeTestimonials from "@/components/HomeTestimonials";
import PageShell from "@/components/PageShell";

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
    <div>
      <HomeHero />

      <PageShell>
        <HomeServices services={services} />
      </PageShell>

      <FullBleedSection variant="light" className="border-y border-slate-200 py-16">
        <AwardStrip />
      </FullBleedSection>

      <PageShell>
        <HomeHowItWorks />
        <HomeTestimonials />
        <HomeFinalCta />
        <ClientTrustBadges />
      </PageShell>
    </div>
  );
}
