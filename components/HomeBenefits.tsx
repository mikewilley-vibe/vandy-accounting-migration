import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { benefits } from "@/data/content";

export default function HomeBenefits() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title="Accounting should make your life easier—not add to your workload."
          subtitle="VANDY is a responsive financial partner that takes accounting work off a business owner’s plate."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="surface-card p-6 md:p-7"
            >
              <div className="font-display text-3xl text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
