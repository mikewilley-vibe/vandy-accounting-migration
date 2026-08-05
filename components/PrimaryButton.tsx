// components/PrimaryButton.tsx
import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "btn-primary focus-ring inline-flex items-center justify-center rounded-xl bg-[hsl(var(--brand))] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110 active:shadow-md",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
