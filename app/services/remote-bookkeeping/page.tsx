import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Remote Bookkeeping | Vandy Accounting Solutions",
  description:
    "Reliable remote bookkeeping services that keep your financial records clean, accurate, and decision-ready.",
};

export default function RemoteBookkeepingPage() {
  return (
    <>
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Remote bookkeeping", href: "/services/remote-bookkeeping" },
          ]}
        />
      </div>
      <ServicePage
      title="Remote bookkeeping"
      description="Consistent, accurate bookkeeping—handled remotely—so your financial records stay clean, reliable, and ready for decision-making."
      idealFor={[
        "Small to mid-sized businesses",
        "Owners who want clean books without hiring in-house",
        "Companies using QuickBooks",
        "Organizations that need reliable monthly close",
      ]}
      included={[
        "Monthly bank and credit card reconciliations",
        "Accurate transaction categorization",
        "General ledger maintenance",
        "Monthly financial statements",
        "Issue identification and cleanup",
        "Coordination with tax professionals",
      ]}
      outcomes={[
        "Confidence in your numbers",
        "Less time spent fixing errors",
        "Cleaner books that support better decisions",
        "Smoother tax season and year-end reporting",
      ]}
      ctaHeading="Ready for cleaner, more reliable books?"
      ctaSubheading="Tell us about your business and we'll recommend the right level of bookkeeping support."
    />
    </>
  );
}