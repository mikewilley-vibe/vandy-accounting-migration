"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

type ServiceIconKey =
  | "bookkeeping"
  | "quickbooks"
  | "payroll"
  | "close"
  | "budget";

type ServiceMenuItem = {
  href: string;
  label: string;
  icon: ServiceIconKey;
  description?: string;
};

const servicesMenu: ServiceMenuItem[] = [
  {
    href: "/services/remote-bookkeeping",
    label: "Remote bookkeeping",
    icon: "bookkeeping",
    description: "Monthly bookkeeping + reconciliations",
  },
  {
    href: "/services/quickbooks-support",
    label: "QuickBooks support",
    icon: "quickbooks",
    description: "Cleanup + practical QuickBooks help",
  },
  {
    href: "/services/payroll-partnership",
    label: "Payroll partnership",
    icon: "payroll",
    description: "ADP partnership + coordination",
  },
  {
    href: "/services/month-end-year-end",
    label: "Month-end & year-end",
    icon: "close",
    description: "Close support + year-end coordination",
  },
  {
    href: "/services/budget-preparation",
    label: "Budget preparation",
    icon: "budget",
    description: "Plan with clarity + confidence",
  },
];

function Icon({ name }: { name: ServiceIconKey }) {
  const cls = "h-4 w-4 text-slate-600";
  switch (name) {
    case "bookkeeping":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "quickbooks":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 12h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 9.5v5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "payroll":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7h10v14H7V7Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 3h6v4H9V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 11h5M9.5 15h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "close":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 4h10a2 2 0 0 1 2 2v14H5V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 9h8M8 13h8M8 17h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16.5 3.5 19 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "budget":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10h8M8 14h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.5 8.5h.01M17.5 15.5h.01"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "text-sm font-semibold transition",
        active ? "text-slate-900" : "text-slate-700 hover:text-slate-900",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement | null>(null);

  // Close menus on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close Services dropdown when clicking outside
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const el = servicesWrapRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const pathname = usePathname();
  const activeServiceLabel = useMemo(() => {
    const match = servicesMenu.find((s) => pathname?.startsWith(s.href));
    return match?.label ?? null;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Vandy Accounting Solutions"
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">
              Vandy Accounting Solutions
            </div>
            <div className="text-xs text-slate-600">
              Your Outsourced Accounting Solution
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Services dropdown */}
          <div
            ref={servicesWrapRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={[
                "inline-flex items-center gap-2 text-sm font-semibold transition",
                pathname?.startsWith("/services")
                  ? "text-slate-900"
                  : "text-slate-700 hover:text-slate-900",
              ].join(" ")}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span>Services</span>
              <svg
                className={[
                  "h-4 w-4 transition",
                  servicesOpen ? "rotate-180" : "",
                ].join(" ")}
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

            {servicesOpen ? (
              <div
                className="absolute left-0 top-full mt-3 w-[340px] rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/70 overflow-hidden"
                role="menu"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="px-4 pt-4 pb-3 border-b border-slate-200/60">
                  <div className="text-xs font-semibold text-slate-500">
                    Services
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {activeServiceLabel ?? "Explore what we offer"}
                  </div>
                </div>

                <div className="p-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-smooth hover:bg-slate-50"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200/60 group-hover:bg-white">
                        <Icon name={item.icon} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </div>
                        {item.description ? (
                          <div className="text-xs text-slate-600">
                            {item.description}
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  ))}

                  <div className="mt-2 px-3 pb-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-smooth"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Normal links */}
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA (desktop) */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            style={{ background: "hsl(var(--brand))" }}
          >
            Request a quote
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen ? (
        <div id="mobile-nav" className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-slate-900"
              >
                Services
              </Link>

              <div className="ml-2 grid gap-2">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-50"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200/60">
                      <Icon name={item.icon} />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              <NavLink href="/about" label="About" onClick={() => setMobileOpen(false)} />
              <NavLink href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                style={{ background: "hsl(var(--brand))" }}
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}