import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "budget-preparation")!;

export const metadata: Metadata = {
  title: "Budget Preparation | Vandy Accounting Solutions",
  alternates: { canonical: `/services/${service.slug}` },
  description: service.short,
};

export default function BudgetPreparationPage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <ServicePage
        title={service.title}
        description={service.short}
        idealFor={service.whoItsFor}
        included={service.whatsIncluded}
        outcomes={service.outcomes}
        ctaHeading="Want a budget you can actually use?"
        ctaSubheading="Tell us your goals and where you are today—we'll recommend a plan."
      />
    </PageShell>
  );
}
