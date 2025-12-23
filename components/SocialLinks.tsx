// components/SocialLinks.tsx
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

  const iconClass = `${sizeMap[size]} text-slate-700 hover:text-slate-900 transition`;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Facebook */}
      <Link
        href={company.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={iconClass}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.8v3h-2c-.8 0-1.3.4-1.3 1.2V12H17l-.6 3h-2.7v7A10 10 0 0 0 22 12z" />
        </svg>
      </Link>

      {/* LinkedIn */}
      <Link
        href={company.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconClass}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9z" />
        </svg>
      </Link>
    </div>
  );
}