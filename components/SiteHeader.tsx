import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b" style={{ background: "hsla(var(--bg) / 0.85)" }}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder wired logo: put real file in /public/logo.png */}
          <Image
            src="/logo.png"
            alt="Vandy Accounting Solutions"
            width={44}
            height={44}
            className="rounded-md"
            priority
          />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Vandy Accounting Solutions</div>
            <div className="text-sm" style={{ color: "hsl(var(--muted))" }}>
              Your Outsourced Accounting Solution
            </div>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:opacity-80">
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl px-4 py-2 text-sm font-semibold"
          style={{
            background: "hsl(var(--brand))",
            color: "hsl(var(--brand-foreground))",
          }}
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}