import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "remote-bookkeeping")!;

export const metadata: Metadata = {
  title: "Remote Bookkeeping | Vandy Accounting Solutions",
  description: service.short,
};

export default function RemoteBookkeepingPage() {
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
        ctaHeading="Ready for cleaner, more reliable books?"
        ctaSubheading="Tell us about your business and we'll recommend the right level of bookkeeping support."
      />
    </PageShell>
  );
}
