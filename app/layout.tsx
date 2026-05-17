import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCtaButton from "@/components/MobileCtaButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://vandyaccounting.com"),
  title: {
    default: "Vandy Accounting Solutions | Strategic Accounting for Growing Businesses",
    template: "%s | Vandy Accounting Solutions",
  },
  description:
    "Bookkeeping, payroll, QuickBooks support, and CFO-level guidance for small and mid-size businesses. 20+ years of experience. Based in Indianapolis, IN.",
  keywords: [
    "outsourced accounting Indianapolis",
    "bookkeeping Indianapolis",
    "QuickBooks ProAdvisor Indiana",
    "small business accounting Indiana",
    "payroll services Indianapolis",
    "controller services small business",
    "remote bookkeeping",
    "CFO services small business",
  ],
  authors: [{ name: "Julie L. Riess", url: "https://vandyaccounting.com/about" }],
  openGraph: {
    title: "Vandy Accounting Solutions | Strategic Accounting for Growing Businesses",
    description:
      "Bookkeeping, payroll, QuickBooks support, and CFO-level guidance for small and mid-size businesses. 20+ years experience. Indianapolis, IN.",
    url: "https://vandyaccounting.com",
    siteName: "Vandy Accounting Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-meeting.jpg",
        width: 1200,
        height: 630,
        alt: "Vandy Accounting Solutions – Strategic Accounting for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vandy Accounting Solutions | Strategic Accounting for Growing Businesses",
    description:
      "Bookkeeping, payroll, QuickBooks support, and CFO-level guidance for small and mid-size businesses.",
    images: ["/hero-meeting.jpg"],
  },
  robots: { index: true, follow: true },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Vandy Accounting Solutions",
  description:
    "Strategic accounting services for small and mid-size businesses. Bookkeeping, payroll, QuickBooks support, and CFO-level guidance.",
  url: "https://vandyaccounting.com",
  telephone: "+13174906113",
  email: "info@vandyaccounting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7755 Shasta Drive",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46217",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.6837,
    longitude: -86.1925,
  },
  sameAs: [
    "https://www.facebook.com/vandyaccounting",
  ],
  founder: {
    "@type": "Person",
    name: "Julie L. Riess",
    jobTitle: "Founder & Lead Accountant",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <SiteHeader />
        <main className="overflow-x-clip">{children}</main>
        <SiteFooter />
        <MobileCtaButton />
      </body>
    </html>
  );
}