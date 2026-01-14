import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Budget Preparation | Vandy Accounting Solutions",
  description:
    "Budgeting and forecasting support so you can plan with clarity and confidence.",
};

export default function BudgetPreparationPage() {
  return (
    <>
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Budget preparation", href: "/services/budget-preparation" },
          ]}
        />
      </div>
      <ServicePage
      title="Budget preparation"
      description="Practical budgeting and forecasting—built around your business—so you can plan with clarity and confidence."
      idealFor={[
        "Owners planning growth and needing a realistic plan",
        "Organizations that want better cash flow visibility",
        "Teams that want to understand spending and profitability drivers",
        "Businesses tired of budgets that don’t match reality",
      ]}
      included={[
        "Budget build or refresh (based on your goals)",
        "Simple forecasting updates (monthly or quarterly)",
        "Variance review cadence (budget vs actual)",
        "Cash flow considerations and planning",
        "Decision-ready reporting and recommendations",
      ]}
      outcomes={[
        "A budget you can actually use",
        "Clearer planning and fewer surprises",
        "Better visibility into profitability and spending",
        "More confident decisions month to month",
      ]}
      ctaHeading="Want a budget you can actually use?"
      ctaSubheading="Tell us your goals and where you are today—we'll recommend a plan."
    />
    </>
  );
}