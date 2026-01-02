// components/AnimatedBackdrop.tsx
import React from "react";

export default function AnimatedBackdrop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute inset-0 -z-10 overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* Big moving gradient wash */}
      <div className="absolute inset-0 animated-gradient bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(59,130,246,0.18),transparent_50%),linear-gradient(to_bottom,rgba(15,23,42,0.95),rgba(15,23,42,0.92))]" />

      {/* Soft vignette + “glass” feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%,rgba(0,0,0,0.10))]" />
    </div>
  );
}