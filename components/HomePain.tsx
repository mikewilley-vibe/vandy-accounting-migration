import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { painPoints } from "@/data/content";

export default function HomePain() {
  return (
    <section className="bg-forest-dark py-20 text-cream md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          tone="dark"
          eyebrow="A direct look"
          title="Is your current accounting setup holding you back?"
          subtitle="If several of these sound familiar, you do not have to keep managing it alone."
        />
        <div>
          <ul className="space-y-3">
            {painPoints.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-lg text-cream"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-cream/80">
            You don’t have to keep managing it alone. Let’s talk about what
            better accounting support could look like.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Talk With VANDY</Button>
            <Button href="/switch" variant="secondaryOnDark">
              See How Easy It Is to Switch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
