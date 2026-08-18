import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { industries, industryBySlug } from "@/data/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug[slug];
  if (!industry) return {};
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industryBySlug[slug];
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <Image
            src={industry.image}
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        </div>
        <Container className="relative py-16 md:py-24">
          <Breadcrumb
            tone="dark"
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.navLabel, href: `/industries/${industry.slug}` },
            ]}
          />
          <p className="eyebrow mt-6 text-accent">{industry.name}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {industry.hero}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">{industry.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">{company.primaryCta}</Button>
            <Button href="/services" variant="secondaryOnDark">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="max-w-3xl font-display text-3xl font-semibold text-ink">
            {industry.problemsHeading}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {industry.problems.map((problem) => (
              <article key={problem.title} className="surface-card p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {problem.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                  {problem.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              How VANDY can help
            </h2>
            <ul className="mt-8 space-y-6">
              {industry.howWeHelp.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-ink/70">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/switch" variant="secondary">
                See How Easy It Is to Switch
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let’s talk about your books."
        body="If this sounds like the support you have been missing, schedule a conversation. We’ll help you see what better accounting support could look like."
        secondaryHref="/contact"
        secondaryLabel="Tell Us About Your Business"
      />
    </>
  );
}
