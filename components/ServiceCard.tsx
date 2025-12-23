// components/ServiceCard.tsx
import Link from "next/link";
import { Service } from "@/data/services";

type Tone = "light" | "dark";

export default function ServiceCard({
  service,
  tone = "light",
  className = "",
}: {
  service: Service;
  tone?: Tone;
  className?: string;
}) {
  const cardBase =
    "group block rounded-2xl p-6 transition will-change-transform " +
    "hover:-translate-y-[1px] hover:shadow-lg";

  const cardTone =
    tone === "dark"
      ? "bg-white/5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
      : "bg-white shadow-sm ring-1 ring-slate-200/70 hover:shadow-md";

  const titleTone =
    tone === "dark"
      ? "text-lg font-semibold text-white"
      : "text-lg font-semibold text-slate-900";

  const bodyTone =
    tone === "dark"
      ? "mt-2 text-white/75 leading-relaxed"
      : "mt-2 text-slate-700 leading-relaxed";

  const linkTone =
    tone === "dark"
      ? "mt-4 text-sm font-semibold text-white/90"
      : "mt-4 text-sm font-semibold text-slate-900";

  return (
    <Link
      href={`/services/${service.slug}`}
      className={[cardBase, cardTone, className].join(" ")}
    >
      <div className={titleTone}>{service.title}</div>
      <p className={bodyTone}>{service.short}</p>
      <div
        className={[
          linkTone,
          "inline-flex items-center gap-2 underline underline-offset-4 group-hover:opacity-80",
        ].join(" ")}
      >
        Learn more <span aria-hidden>→</span>
      </div>
    </Link>
  );
}