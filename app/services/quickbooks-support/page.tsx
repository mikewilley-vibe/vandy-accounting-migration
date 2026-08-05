import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "quickbooks-support")!;

export const metadata: Metadata = {
  title: "QuickBooks Support | Vandy Accounting Solutions",
  description: service.short,
};

export default function QuickBooksSupportPage() {
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
        ctaHeading="Want QuickBooks that's actually trustworthy?"
        ctaSubheading="Tell us what you're seeing and we'll recommend the right next step."
      />
    </PageShell>
  );
}
