import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Vandy Accounting Solutions | Your Outsourced Accounting Solution",
  description:
    "Vandy Accounting Solutions helps companies create an organized and informational approach to accounting and finance.",
  // If you want “not launched yet” safety, uncomment:
  // robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="container py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}