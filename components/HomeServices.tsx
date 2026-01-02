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
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 transition hover:-translate-y-[1px] hover:bg-white/[0.07]"
            >
              <div className="text-lg font-semibold text-white">
                {s.title}
              </div>
              <p className="mt-2 text-white/75 leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-white/90 group-hover:underline group-hover:underline-offset-4">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-6">
          <Link
            href="/services"
            className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
          >
            See the full services page →
          </Link>
        </div>
      </div>
    </Section>
  );
}