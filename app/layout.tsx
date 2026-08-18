import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCtaButton from "@/components/MobileCtaButton";
import JsonLd from "@/components/JsonLd";
import { company } from "@/data/company";

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
  metadataBase: new URL(company.siteUrl),
  title: {
    default:
      "Small-Business Accounting in Virginia & North Carolina | VANDY",
    template: "%s | VANDY Accounting Solutions",
  },
  description:
    "VANDY Accounting Solutions helps small-business owners in Virginia and North Carolina spend less time on the books. Bookkeeping, payroll support, cleanup, and reporting—with a straightforward way to switch.",
  keywords: [
    "small-business accounting Virginia",
    "small-business accounting North Carolina",
    "bookkeeping services Virginia",
    "bookkeeping services North Carolina",
    "restaurant bookkeeping",
    "contractor bookkeeping",
    "outsourced accounting for small businesses",
    "accounting cleanup services",
    "switch accountants",
    "payroll and bookkeeping support",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: company.siteUrl,
    siteName: company.name,
    title: "You Run the Business. We’ll Handle the Books. | VANDY",
    description:
      "Small-business accounting support across Virginia and North Carolina. Bookkeeping, payroll, cleanup, and reporting for owner-operated companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "You Run the Business. We’ll Handle the Books. | VANDY",
    description:
      "Small-business accounting support across Virginia and North Carolina.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileCtaButton />
      </body>
    </html>
  );
}
