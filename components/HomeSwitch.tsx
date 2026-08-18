import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { switchReassurances, switchSteps } from "@/data/content";

export default function HomeSwitch() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Switching accountants"
          title="Switching to VANDY is easier than you think."
          subtitle="Staying with an unresponsive accountant because switching sounds difficult can cost you more time and frustration. VANDY helps organize the transition, understand the condition of your books, and build a clear plan for moving forward."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {switchSteps.map((step) => (
            <article key={step.step} className="rounded-2xl bg-cream p-6 ring-1 ring-sand md:p-8">
              <div className="font-display text-4xl text-accent">{step.step}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {step.body}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {switchReassurances.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/75">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Schedule a Consultation</Button>
          <Button href="/switch" variant="secondary">
            See the full switching process
          </Button>
        </div>
      </Container>
    </section>
  );
}
