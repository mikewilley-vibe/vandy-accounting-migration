import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm" style={{ color: "hsl(var(--muted))" }}>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Vandy Accounting Solutions</div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/services" className="hover:opacity-80">Services</Link>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}