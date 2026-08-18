import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug["quickbooks-support"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function QuickBooksSupportPage() {
  return <ServicePage service={service} />;
}
