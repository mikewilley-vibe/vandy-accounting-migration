// components/SectionHeader.tsx
import React from "react";

type Tone = "light" | "dark";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  className?: string;
}) {
  const eyebrowClass =
    tone === "dark"
      ? "text-sm font-semibold text-white/80"
      : "text-sm font-semibold text-slate-600";

  const titleClass =
    tone === "dark"
      ? "text-2xl md:text-3xl font-semibold tracking-tight text-white"
      : "text-2xl md:text-3xl font-semibold tracking-tight text-slate-900";

  const subtitleClass =
    tone === "dark"
      ? "text-lg text-white/75"
      : "text-lg text-slate-600";

  return (
    <div className={["space-y-2 px-7 pt-7 md:px-10 md:pt-10", className].join(" ")}>
      {eyebrow ? <div className={eyebrowClass}>{eyebrow}</div> : null}
      <h2 className={titleClass}>{title}</h2>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
    </div>
  );
}