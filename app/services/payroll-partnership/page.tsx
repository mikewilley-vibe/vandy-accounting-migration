import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Payroll Partnership | Vandy Accounting Solutions",
  description:
    "An ADP payroll partnership to simplify processing and coordination—plus bookkeeping alignment for cleaner reporting.",
};

export default function PayrollPartnershipPage() {
  return (
    <ServicePage
      title="Payroll partnership"
      description="Payroll coordination through an ADP partnership—built to make payroll smoother, reduce mistakes, and keep your books clean."
      idealFor={[
        "Businesses that want payroll handled reliably and on time",
        "Owners who want fewer payroll headaches and clearer workflows",
        "Teams hiring, changing pay schedules, or cleaning up payroll processes",
        "Companies that want payroll and bookkeeping to “match” each month",
      ]}
      included={[
        "Payroll coordination through an ADP partnership",
        "New hire / employee setup guidance",
        "Support for common payroll questions and workflow decisions",
        "Basic payroll reconciliation support for cleaner books",
        "Coordination with bookkeeping reporting cadence (when applicable)",
      ]}
      outcomes={[
        "More consistent payroll processing",
        "Fewer surprises at month-end",
        "Cleaner reporting and better documentation",
        "Confidence that payroll is handled correctly",
      ]}
      ctaHeading="Want payroll that runs smoother?"
      ctaSubheading="Tell us your pay schedule and current setup—we’ll recommend the right next step."
    />
  );
}