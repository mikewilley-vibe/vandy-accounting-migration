type FloatingShapeProps = {
  src: string;
  className?: string;
};

export default function FloatingShape({
  src,
  className = "",
}: FloatingShapeProps) {
  return (
    <img
      src={src}
      aria-hidden
      className={[
        "pointer-events-none absolute opacity-20",
        "animate-float",
        className,
      ].join(" ")}
    />
  );
}