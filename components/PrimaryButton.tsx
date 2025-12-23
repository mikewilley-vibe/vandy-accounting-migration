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
        "inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}