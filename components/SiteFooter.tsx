import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { company } from "@/data/company";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-md bg-cream/10 object-contain p-0.5"
            />
            <span className="font-display text-xl font-semibold">{company.shortName}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Small-business accounting support across Virginia and North Carolina.
            The name comes from Virginia and Indiana. The work now reaches owners
            who want the books off their plate.
          </p>
          <p className="mt-4 text-sm font-medium text-accent">
            Now accepting new clients in Virginia and North Carolina.
          </p>
          <div className="mt-6">
            <SocialLinks size="md" />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-cream/75 transition hover:text-cream"
                >
                  {s.homepageTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">
            Industries
          </h2>
          <ul className="mt-4 space-y-2">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="text-sm text-cream/75 transition hover:text-cream"
                >
                  {i.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <a className="hover:text-cream" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="hover:text-cream" href={`tel:${company.phoneHref}`}>
                {company.phone}
              </a>
            </li>
            <li className="pt-2">
              <div className="font-semibold text-cream">Indianapolis office</div>
              {company.addressLine1}
              <br />
              {company.addressLine2}
            </li>
            <li className="pt-2 text-cream/60">
              Virginia and North Carolina clients are served remotely. We do not
              list additional office locations.
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            <Link href="/contact" className="text-sm font-semibold text-accent hover:underline">
              {company.primaryCta}
            </Link>
            <Link href="/switch" className="text-sm font-semibold text-cream/80 hover:text-cream">
              {company.secondaryCta}
            </Link>
            <Link href="/about" className="text-sm text-cream/70 hover:text-cream">
              About VANDY
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Built on relationships. Driven by expertise.</p>
        </div>
      </div>
    </footer>
  );
}
