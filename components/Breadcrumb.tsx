import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-600" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <span className="text-slate-400">/</span>}
          {index === items.length - 1 ? (
            <span className="font-semibold text-slate-900">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="focus-ring text-slate-600 hover:text-slate-900 link-underline transition-smooth"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
