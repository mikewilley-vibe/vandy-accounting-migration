import Button from "@/components/Button";
import Container from "@/components/Container";
import { company } from "@/data/company";

export default function CtaBand({
  title,
  body,
  primaryLabel = company.primaryCta,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/75">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/contact">{primaryLabel}</Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="secondaryOnDark">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
