import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { company } from "@/data/company";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-slate-200/70 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-lg font-semibold text-slate-900">
            {company.name}
          </div>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
            {company.tagline}
          </p>
          <div className="mt-5">
            <SocialLinks size="md" />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Explore</div>
          <ul className="mt-3 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a
                className="focus-ring hover:text-slate-900"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                className="focus-ring hover:text-slate-900"
                href={`tel:${company.phoneHref}`}
              >
                {company.phone}
              </a>
            </li>
            <li>
              {company.addressLine1}
              <br />
              {company.addressLine2}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
