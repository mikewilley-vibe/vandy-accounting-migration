import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCtaButton from "@/components/MobileCtaButton";

export const metadata: Metadata = {
  title: "Vandy Accounting Solutions | Your Outsourced Accounting Solution",
  description:
    "Vandy Accounting Solutions helps companies create an organized and informational approach to accounting and finance.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">{children}</main>
        <SiteFooter />
        <MobileCtaButton />
      </body>
    </html>
  );
}