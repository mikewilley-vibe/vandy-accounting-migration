import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function HomeTestimonials() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="From people VANDY has worked with"
          title="Real words. No invented reviews."
          subtitle="These comments come from clients and colleagues who have worked with Julie L. Riess."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              quote={item.quote}
              name={item.name}
              title={item.title}
              tone={index % 2 === 0 ? "soft" : "white"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
