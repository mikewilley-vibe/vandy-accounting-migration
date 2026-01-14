import Section from "@/components/Section";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFinalCta from "@/components/HomeFinalCta";
import FullBleedSection from "@/components/FullBleedSection";
import AwardStrip from "@/components/AwardStrip";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import ClientTrustBadges from "@/components/ClientTrustBadges";
import ResourcesSection from "@/components/ResourcesSection";

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
      {/* HERO (light, executive) */}
      <Section variant="panel" className="bg-white">
        <HomeHero />
      </Section>

      {/* SERVICES (dark, Big-4 vibe) */}
      <HomeServices services={services} />

        {/* AWARD STRIP (full-width like Big 4) */}
    <FullBleedSection variant="light" className="py-16 border-y border-slate-200">
  <AwardStrip />
</FullBleedSection>

      {/* HOW IT WORKS (light, outlined container + boxed steps) */}
      <HomeHowItWorks />

      {/* TESTIMONIALS (dark) */}
    
    

      {/* FINAL CTA (white outlined, visible text) */}
      <HomeFinalCta />

      {/* TRUST BADGES */}
      <ClientTrustBadges />

      {/* RESOURCES */}
      <ResourcesSection />
    </div>
  );
}