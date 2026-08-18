import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import TrustStrip from "@/components/TrustStrip";
import HomeBenefits from "@/components/HomeBenefits";
import HomeServices from "@/components/HomeServices";
import HomeIndustries from "@/components/HomeIndustries";
import HomePain from "@/components/HomePain";
import HomeSwitch from "@/components/HomeSwitch";
import HomeWhy from "@/components/HomeWhy";
import HomeServiceArea from "@/components/HomeServiceArea";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFaq from "@/components/HomeFaq";
import HomeFinalCta from "@/components/HomeFinalCta";

export const metadata: Metadata = {
  title: "Small-Business Accounting in Virginia & North Carolina | VANDY",
  description:
    "You run the business. VANDY handles the books. Bookkeeping, payroll support, cleanup, and reporting for small-business owners in Virginia and North Carolina.",
  openGraph: {
    title: "You Run the Business. We’ll Handle the Books. | VANDY",
    description:
      "Small-business accounting support across Virginia and North Carolina. Now accepting new clients.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <HomeBenefits />
      <HomeServices />
      <HomeIndustries />
      <HomePain />
      <HomeSwitch />
      <HomeWhy />
      <HomeServiceArea />
      <HomeTestimonials />
      <HomeFaq />
      <HomeFinalCta />
    </>
  );
}
