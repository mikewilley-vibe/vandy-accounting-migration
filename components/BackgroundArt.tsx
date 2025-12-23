// components/BackgroundArt.tsx
import Image from "next/image";

type Props = {
  src: string; // in /public
  alt?: string;
  position?: "right" | "left" | "topRight" | "bottomRight" | "topLeft";
  opacityClass?: string; // override if needed
};

export default function BackgroundArt({
  src,
  alt = "",
  position = "right",
  opacityClass = "opacity-[0.10] md:opacity-[0.14]",
}: Props) {
  const pos =
    position === "right"
      ? "right-0 top-1/2 -translate-y-1/2"
      : position === "left"
      ? "left-0 top-1/2 -translate-y-1/2"
      : position === "topRight"
      ? "right-0 top-0"
      : position === "bottomRight"
      ? "right-0 bottom-0"
      : "left-0 top-0";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div
        className={[
          "absolute",
          pos,
          opacityClass,
          "w-[260px] h-[260px] md:w-[360px] md:h-[360px]",
        ].join(" ")}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}