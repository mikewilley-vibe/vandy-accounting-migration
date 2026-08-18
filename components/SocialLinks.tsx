import Link from "next/link";
import { company } from "@/data/company";

type Size = "sm" | "md" | "lg";

export default function SocialLinks({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: Size;
}) {
  const sizeMap: Record<Size, string> = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const iconClass = `${sizeMap[size]} text-current`;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href={company.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VANDY Accounting Solutions on Facebook"
        className="text-cream/70 transition hover:text-cream"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.8v3h-2c-.8 0-1.3.4-1.3 1.2V12H17l-.6 3h-2.7v7A10 10 0 0 0 22 12z" />
        </svg>
      </Link>
    </div>
  );
}
