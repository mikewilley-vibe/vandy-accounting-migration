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
  collapseAfter = 280,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const isLong = quote.length > collapseAfter;
  const displayQuote =
    !isLong || expanded ? quote : `${quote.slice(0, collapseAfter).trimEnd()}…`;

  const toneClasses =
    tone === "soft"
      ? "bg-sand/60 hover:bg-paper"
      : "bg-paper hover:bg-cream";

  return (
    <figure
      className={[
        "flex h-full flex-col rounded-3xl p-7 ring-1 ring-sand transition",
        toneClasses,
        className,
      ].join(" ")}
    >
      <blockquote id={panelId} className="flex-1">
        <p className="text-[15px] leading-relaxed text-ink/85 md:text-base">
          “{displayQuote}”
        </p>
      </blockquote>
      {isLong ? (
        <button
          type="button"
          className="mt-4 self-start text-sm font-semibold text-forest hover:underline"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read full testimonial"}
        </button>
      ) : null}
      <figcaption className="mt-5 border-t border-sand pt-4 text-sm text-ink/60">
        <span className="font-semibold text-ink">{name}</span>
        <span className="mt-1 block leading-snug">{title}</span>
      </figcaption>
    </figure>
  );
}
