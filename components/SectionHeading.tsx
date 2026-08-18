export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  id?: string;
}) {
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const subColor = tone === "dark" ? "text-cream/75" : "text-ink/70";
  const eyeColor = tone === "dark" ? "text-accent" : "text-forest";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`eyebrow ${eyeColor}`}>{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem] lg:leading-[1.15] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
