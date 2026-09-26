import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "payroll-partnership")!;

export const metadata: Metadata = {
  title: "Payroll Partnership | Vandy Accounting Solutions",
  alternates: { canonical: `/services/${service.slug}` },
  description: service.short,
};

export default function PayrollPartnershipPage() {
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
        ctaHeading="Want payroll that runs smoother?"
        ctaSubheading="Tell us your pay schedule and current setup—we'll recommend the right next step."
      />
    </PageShell>
  );
}
