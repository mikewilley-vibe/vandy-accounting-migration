import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "QuickBooks Support | Vandy Accounting Solutions",
  description:
    "QuickBooks review, cleanup, and practical support so your file stays accurate and usable.",
};

export default function QuickBooksSupportPage() {
  return (
    <ServicePage
      title="QuickBooks support"
      description="Practical guidance and cleanup so QuickBooks stays accurate, usable, and ready for reporting—without the stress."
      idealFor={[
        "Businesses already using QuickBooks that want it set up correctly",
        "Owners seeing uncategorized transactions or “mystery” balances",
        "Teams dealing with duplicate entries, bank feed issues, or messy reports",
        "Anyone preparing for taxes and needing cleaner documentation",
      ]}
      included={[
        "QuickBooks review + cleanup plan",
        "Chart of Accounts organization (so reports make sense)",
        "Bank feed + rules cleanup (reduce duplicates and miscoding)",
        "Reconciliation issue diagnosis (why accounts won’t reconcile)",
        "Undeposited funds / deposits review",
        "Monthly close checklist and reporting improvements",
      ]}
      outcomes={[
        "A QuickBooks file you can trust",
        "Cleaner reports and fewer surprises",
        "Less time spent fixing problems later",
        "A repeatable month-end process",
      ]}
      ctaHeading="Want QuickBooks that’s actually trustworthy?"
      ctaSubheading="Tell us what you’re seeing and we’ll recommend the right next step."
    />
  );
}