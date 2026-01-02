// components/FullBleedSection.tsx
import React from "react";

type Variant = "light" | "dark" | "darkGrid";

export default function FullBleedSection({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const variants: Record<Variant, string> = {
    light: "bg-white",
    dark: "bg-slate-900 text-white",
    darkGrid:
      "bg-slate-900 text-white bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_30%)]",
  };

  return (
    <section className={`w-full ${variants[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-7 md:px-10">
        {children}
      </div>
    </section>
  );
}