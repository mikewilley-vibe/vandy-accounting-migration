import Button from "@/components/Button";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <Container className="py-24 text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
          That page isn’t here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink/70">
          Try the homepage, or tell us about your business and we’ll point you
          in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
