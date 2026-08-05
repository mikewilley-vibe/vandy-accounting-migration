"use client";

import { useId, useState } from "react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  tone?: "soft" | "white";
  className?: string;
  collapseAfter?: number;
};

export default function TestimonialCard({
  quote,
  name,
  title,
  tone = "white",
  className = "",
  collapseAfter = 320,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const isLong = quote.length > collapseAfter;
  const displayQuote =
    !isLong || expanded ? quote : `${quote.slice(0, collapseAfter).trimEnd()}…`;

  const toneClasses =
    tone === "soft"
      ? "bg-slate-50 hover:bg-white"
      : "bg-white hover:bg-slate-50/80";

  return (
    <figure
      className={[
        "flex h-full flex-col rounded-2xl p-7 ring-1 ring-slate-200/70 transition-smooth hover:shadow-md hover:ring-slate-300/80",
        toneClasses,
        className,
      ].join(" ")}
    >
      <blockquote id={panelId} className="flex-1">
        <p className="text-[15px] leading-relaxed text-slate-800 md:text-base">
          “{displayQuote}”
        </p>
      </blockquote>

      {isLong ? (
        <button
          type="button"
          className="focus-ring mt-4 self-start text-sm font-semibold text-[hsl(var(--brand))] transition-smooth hover:brightness-110"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read full testimonial"}
        </button>
      ) : null}

      <figcaption className="mt-5 border-t border-slate-200/80 pt-4 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="mt-1 block leading-snug">{title}</span>
      </figcaption>
    </figure>
  );
}
