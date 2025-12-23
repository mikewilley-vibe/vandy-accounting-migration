import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Month-End & Year-End Coordination | Vandy Accounting Solutions",
  description:
    "Closing support and year-end coordination so your reporting is consistent and tax season is smoother.",
};

export default function CloseCoordinationPage() {
  return (
    <ServicePage
      title="Month-end & year-end coordination"
      description="A calmer close process with clean reporting—so year-end doesn’t feel like a fire drill."
      idealFor={[
        "Businesses that want a repeatable month-end close",
        "Owners preparing for taxes, lenders, grants, or board reporting",
        "Teams that need better documentation and fewer year-end surprises",
        "Organizations that want faster, cleaner reporting each month",
      ]}
      included={[
        "Month-end close checklist and cadence",
        "Reconciliation verification and issue flagging",
        "Consistent monthly reporting package (P&L, Balance Sheet, etc.)",
        "Year-end coordination and documentation support",
        "Clean handoff for your tax preparer (as needed)",
      ]}
      outcomes={[
        "More consistent monthly reporting",
        "Fewer surprises at year-end",
        "Cleaner documentation and audit readiness",
        "Less stress during tax season",
      ]}
      ctaHeading="Want a month-end close that feels predictable?"
      ctaSubheading="Tell us what’s currently slowing you down—we’ll recommend a plan."
    />
  );
}