import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug["catch-up-cleanup"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function CatchUpCleanupPage() {
  return <ServicePage service={service} />;
}
