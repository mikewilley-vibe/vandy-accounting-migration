import { company } from "@/data/company";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    legalName: company.legalName,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    image: `${company.siteUrl}/logo.png`,
    founder: {
      "@type": "Person",
      name: company.owner.name,
      jobTitle: company.owner.role,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine1,
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46217",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "Indiana" },
    ],
    description:
      "Remote-friendly bookkeeping, payroll support, accounting cleanup, and financial reporting for small businesses in Virginia and North Carolina, with an office in Indianapolis.",
    knowsAbout: [
      "Bookkeeping",
      "Payroll coordination",
      "QuickBooks",
      "Financial reporting",
      "Accounting cleanup",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
