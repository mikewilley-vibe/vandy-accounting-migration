"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company } from "@/data/company";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "rounded-md px-1 py-1 text-sm font-semibold transition",
        active ? "text-forest" : "text-ink/80 hover:text-ink",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function Dropdown({
  label,
  href,
  items,
  footerHref,
  footerLabel,
}: {
  label: string;
  href: string;
  items: { href: string; label: string; description?: string }[];
  footerHref: string;
  footerLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, href);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && e.target instanceof Node && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const cancelClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 180);
      }}
    >
      <button
        type="button"
        className={[
          "inline-flex items-center gap-1 rounded-md px-1 py-1 text-sm font-semibold transition",
          active ? "text-forest" : "text-ink/80 hover:text-ink",
        ].join(" ")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-3 w-[22rem] overflow-hidden rounded-2xl border border-sand bg-paper shadow-xl"
        >
          <ul className="max-h-[min(70vh,28rem)] overflow-y-auto p-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block rounded-xl px-3 py-2.5 transition hover:bg-cream"
                  onClick={() => setOpen(false)}
                >
                  <div className="text-sm font-semibold text-ink">{item.label}</div>
                  {item.description ? (
                    <div className="mt-0.5 text-xs leading-snug text-ink/60">
                      {item.description}
                    </div>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-sand px-4 py-3">
            <Link
              href={footerHref}
              className="text-xs font-semibold text-forest hover:underline"
              onClick={() => setOpen(false)}
            >
              {footerLabel} →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/90 backdrop-blur-md">
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight text-ink">
              {company.shortName}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-ink/55 sm:block">
              Accounting Solutions
            </span>
          </span>
          <span className="sr-only">{company.name} home</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <Dropdown
            label="Services"
            href="/services"
            footerHref="/services"
            footerLabel="Explore all services"
            items={services.map((s) => ({
              href: `/services/${s.slug}`,
              label: s.homepageTitle,
              description: s.homepageDesc,
            }))}
          />
          <Dropdown
            label="Industries"
            href="/industries"
            footerHref="/industries"
            footerLabel="Find your industry"
            items={industries.map((i) => ({
              href: `/industries/${i.slug}`,
              label: i.navLabel,
              description: i.short,
            }))}
          />
          <NavItem href="/switch" label="Switch to VANDY" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-primary hidden px-4 py-2.5 text-sm lg:inline-flex"
          >
            {company.primaryCta}
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-sand bg-paper px-3.5 py-2 text-sm font-semibold text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-sand bg-paper lg:hidden"
        >
          <nav className="container-site flex flex-col gap-4 py-5" aria-label="Mobile">
            <Link href="/services" className="text-sm font-semibold text-ink" onClick={closeMobile}>
              Services
            </Link>
            <div className="grid gap-1 pl-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-lg px-2 py-1.5 text-sm text-ink/80"
                  onClick={closeMobile}
                >
                  {s.homepageTitle}
                </Link>
              ))}
            </div>
            <Link href="/industries" className="text-sm font-semibold text-ink" onClick={closeMobile}>
              Industries
            </Link>
            <div className="grid gap-1 pl-2">
              {industries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="rounded-lg px-2 py-1.5 text-sm text-ink/80"
                  onClick={closeMobile}
                >
                  {i.navLabel}
                </Link>
              ))}
            </div>
            <NavItem href="/switch" label="Switch to VANDY" onClick={closeMobile} />
            <NavItem href="/about" label="About" onClick={closeMobile} />
            <NavItem href="/contact" label="Contact" onClick={closeMobile} />
            <Link href="/contact" className="btn-primary mt-2 w-full" onClick={closeMobile}>
              {company.primaryCta}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
