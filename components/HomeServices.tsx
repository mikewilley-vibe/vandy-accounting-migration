// components/HomeServices.tsx
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import BackgroundArt from "@/components/BackgroundArt";

type Service = { title: string; desc: string; href: string };

export default function HomeServices({ services }: { services: Service[] }) {
  return (
    <Section variant="darkGrid" className="relative">
      <BackgroundArt
        src="/invoice-outline.png"
        position="bottomRight"
        opacityClass="opacity-[0.07] md:opacity-[0.10]"
      />

      <SectionHeader
        tone="dark"
        eyebrow="Services"
        title="What we offer"
        subtitle="A flexible set of services that gives you clarity, control, and confidence."
        className="animate-fade-in-up"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, index) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group animate-fade-in-up rounded-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 p-6 transition-smooth hover:-translate-y-1 hover:border-white/25 hover:from-white/12 hover:to-white/6 hover:shadow-xl ${
                index === 0
                  ? "animation-delay-100"
                  : index === 1
                    ? "animation-delay-200"
                    : index === 2
                      ? "animation-delay-300"
                      : index === 3
                        ? "animation-delay-400"
                        : "animation-delay-500"
              }`}
            >
              <div className="text-lg font-semibold text-white transition-smooth group-hover:text-blue-100">
                {s.title}
              </div>
              <p className="mt-2 text-white/75 leading-relaxed transition-smooth group-hover:text-white/85">
                {s.desc}
              </p>
              <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white transition-smooth group-hover:underline group-hover:underline-offset-4">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-6 animate-fade-in-up animation-delay-600">
          <Link
            href="/services"
            className="text-sm font-semibold text-white/80 underline underline-offset-4 transition-smooth hover:text-white"
          >
            See the full services page →
          </Link>
        </div>
      </div>
    </Section>
  );
}