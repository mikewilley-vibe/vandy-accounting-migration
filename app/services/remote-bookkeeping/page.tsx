import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug["remote-bookkeeping"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function RemoteBookkeepingPage() {
  return <ServicePage service={service} />;
}
