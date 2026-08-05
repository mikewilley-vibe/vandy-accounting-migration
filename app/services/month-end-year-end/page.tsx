import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "month-end-year-end")!;

export const metadata: Metadata = {
  title: "Month-End & Year-End Coordination | Vandy Accounting Solutions",
  description: service.short,
};

export default function CloseCoordinationPage() {
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
        ctaHeading="Want a month-end close that feels predictable?"
        ctaSubheading="Tell us what's currently slowing you down—we'll recommend a plan."
      />
    </PageShell>
  );
}
