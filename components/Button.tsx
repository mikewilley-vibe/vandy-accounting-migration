import Link from "next/link";

type Variant = "primary" | "secondary" | "secondaryOnDark";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary text-ink",
  secondaryOnDark: "btn-secondary btn-on-dark text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variantClass[variant]} focus-ring ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
