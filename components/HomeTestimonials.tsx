// components/HomeTestimonials.tsx
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function HomeTestimonials() {
  return (
    <Section variant="darkGrid" className="relative">
      <SectionHeader
        tone="dark"
        eyebrow="Testimonials"
        title="What others say"
        subtitle="Real words from clients and long-term partners."
        className="animate-fade-in-up"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <blockquote className="animate-fade-in-up animation-delay-200 rounded-2xl border border-white/15 bg-white/5 p-7">
          <p className="leading-relaxed text-white/85">
            “Julie’s academic accomplishments and dual background in public accounting and
            non-profit service is an ideal blend for anyone seeking someone that will ensure
            maintenance of required recordkeeping but have an above average eye toward improvement
            and strategic planning. She was outstanding at explaining accounting concepts and
            requirements and earned a great deal of respect from all. Vendors adored her quick
            response time and thoroughness. I am confident Julie will fulfill your financial
            services needs and excel as your financial expert.”
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="font-semibold text-white">
              — Robert A. Woods, CPA, CGMA
            </div>
            <div className="mt-1 text-sm text-white/70">
              Former member of the Board of Directors of the Indiana Society of Certified Public Accountants
            </div>
          </div>
        </blockquote>
      </div>
    </Section>
  );
}
