// components/Section.tsx
import React from "react";

type Variant = "panel" | "plain" | "tint" | "dark" | "darkGrid";

export default function Section({
  children,
  className = "",
  variant = "panel",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base = "rounded-3xl overflow-hidden"; // overflow for background art layers
  const variants: Record<Variant, string> = {
    panel: "bg-white border border-slate-200/60",
    plain: "bg-transparent",
    tint: "bg-slate-50 border border-slate-200/50",
    dark: "bg-slate-900 text-white border border-slate-900",
    // subtle grid feel, still dark
    darkGrid:
      "bg-slate-900 text-white border border-slate-900 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_30%)]",
  };

  return (
    <section className={[base, variants[variant], className].join(" ")}>
      {children}
    </section>
  );
}