import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug["payroll-partnership"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function PayrollPartnershipPage() {
  return <ServicePage service={service} />;
}
