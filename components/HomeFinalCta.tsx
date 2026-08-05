// components/HomeFinalCta.tsx
import PrimaryButton from "@/components/PrimaryButton";
import Section from "@/components/Section";

export default function HomeFinalCta() {
  return (
    <Section
      variant="plain"
      className="rounded-3xl bg-white ring-1 ring-slate-900/25"
    >
      <div className="px-7 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-slate-600">Next step</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Ready for cleaner books and clearer decisions?
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              Tell us what you need and we’ll recommend the right level of support.
            </p>
          </div>

          <div className="shrink-0">
            <PrimaryButton href="/contact">Contact us</PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}