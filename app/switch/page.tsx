import type { Metadata } from "next";
import Button from "@/components/Button";
import CollapsibleFaq from "@/components/CollapsibleFaq";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { switchFaqs } from "@/data/faqs";
import { switchReassurances, switchSteps } from "@/data/content";

export const metadata: Metadata = {
  title: "Switch Accountants | Switching to VANDY Is Easier Than You Think",
  description:
    "Switching bookkeepers or accountants does not have to be a disruption. VANDY helps small businesses in Virginia and North Carolina organize the transition.",
};

export default function SwitchPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <Container className="py-16 md:py-24">
          <p className="eyebrow text-accent">Switching providers</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Switching to VANDY is easier than you think.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Staying with an unresponsive accountant because switching sounds
            difficult can cost you more time and frustration. VANDY helps
            organize the transition, understand the condition of your books, and
            build a clear plan for moving forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">{company.primaryCta}</Button>
            <Button href="/contact" variant="secondaryOnDark">
              Tell Us About Your Business
            </Button>
          </div>
          <p className="mt-5 text-sm text-cream/55">
            Already working with another accountant? We’ll help organize the
            transition.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">
            A simple three-step process
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {switchSteps.map((step) => (
              <article key={step.step} className="surface-card p-7">
                <div className="font-display text-4xl text-accent">{step.step}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink/70">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              What we want you to know before you reach out
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Switching should feel organized, not like starting over with a
              stranger. We set expectations first, then do the work.
            </p>
            <ul className="mt-8 space-y-3">
              {switchReassurances.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-cream px-5 py-4 text-ink ring-1 ring-sand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-cream">
            <h3 className="font-display text-2xl font-semibold">
              We do not overpromise the handoff
            </h3>
            <p className="mt-4 leading-relaxed text-cream/75">
              We help you understand what information needs to be transferred.
              We do not contact a former provider or pull records from another
              firm unless you authorize that step.
            </p>
            <p className="mt-4 leading-relaxed text-cream/75">
              If the books are behind, we will say so plainly and explain the
              cleanup involved before ongoing work begins.
            </p>
            <div className="mt-8">
              <Button href="/contact">Talk With VANDY</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Switching questions
          </h2>
          <CollapsibleFaq faqs={switchFaqs} />
        </Container>
      </section>

      <CtaBand
        title="Ready when you are."
        body="Tell us what is working, what is not, and whether you want to switch. We’ll follow up to schedule a conversation."
      />
    </>
  );
}
