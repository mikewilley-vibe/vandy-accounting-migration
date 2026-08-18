import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CollapsibleFaq from "@/components/CollapsibleFaq";
import { homeFaqs } from "@/data/faqs";

export default function HomeFaq() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="What owners usually ask before they reach out."
        />
        <CollapsibleFaq faqs={homeFaqs} />
      </Container>
    </section>
  );
}
