import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { whyVandy } from "@/data/content";

export default function HomeWhy() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why VANDY"
          title="A financial partner that stays in the work with you."
          subtitle="Owners choose VANDY when they want accounting support that is responsive, practical, and built for a long-term relationship."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {whyVandy.map((item) => (
            <article key={item.title} className="surface-card p-7">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
