import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumb({
  items,
  tone = "light",
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-cream/60" : "text-ink/55";
  const current = tone === "dark" ? "text-cream" : "text-ink";

  return (
    <nav className={`flex flex-wrap items-center gap-2 text-sm ${muted}`} aria-label="Breadcrumb">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          {index === items.length - 1 ? (
            <span className={`font-semibold ${current}`}>{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
