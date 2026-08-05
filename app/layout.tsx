import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCtaButton from "@/components/MobileCtaButton";

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
  title: "Vandy Accounting Solutions | Your Outsourced Accounting Solution",
  description:
    "Vandy Accounting Solutions helps companies create an organized and informational approach to accounting and finance.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        <SiteHeader />
        <main className="overflow-x-clip py-0 md:py-0">{children}</main>
        <SiteFooter />
        <MobileCtaButton />
      </body>
    </html>
  );
}
