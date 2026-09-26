import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCtaButton from "@/components/MobileCtaButton";
import { company } from "@/data/company";
import { siteUrl } from "@/data/site";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vandy Accounting Solutions | Bookkeeping & Outsourced Accounting",
  description:
    "Vandy Accounting Solutions provides remote bookkeeping, QuickBooks support, monthly financial reporting, and outsourced accounting from Indianapolis, Indiana.",
  alternates: { canonical: "/" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteUrl}/#business`,
  name: company.name,
  url: siteUrl,
  telephone: company.phoneHref,
  email: company.email,
  image: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressLine1,
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46217",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="overflow-x-clip py-0 md:py-0">{children}</main>
        <SiteFooter />
        <MobileCtaButton />
      </body>
    </html>
  );
}
