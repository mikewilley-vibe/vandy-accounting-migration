import Link from 'next/link';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const resources = [
  {
    title: 'Small Business Tax Tips',
    excerpt: 'Five tax strategies every small business owner should know about.',
    category: 'Tax',
    readTime: '5 min read',
    href: '#',
  },
  {
    title: 'QuickBooks Setup Best Practices',
    excerpt: 'How to structure your chart of accounts for cleaner reporting.',
    category: 'QuickBooks',
    readTime: '8 min read',
    href: '#',
  },
  {
    title: 'Monthly Close Checklist',
    excerpt: 'A step-by-step guide to keeping your books organized monthly.',
    category: 'Accounting',
    readTime: '6 min read',
    href: '#',
  },
];

export default function ResourcesSection() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Resources"
        title="Accounting tips & guides"
        subtitle="Learn how to keep your books cleaner and make better financial decisions."
        className="animate-fade-in-up"
      />

      <div className="px-7 pb-10 md:px-10 md:pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource, i) => (
            <Link
              key={resource.title}
              href={resource.href}
              className={`animate-fade-in-up animation-delay-${
                100 + i * 100
              } group rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70 transition-smooth hover:ring-slate-300 hover:shadow-md hover:bg-white`}
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-[hsla(var(--brand)/0.1)] px-3 py-1 text-xs font-semibold text-[hsl(var(--brand))]">
                    {resource.category}
                  </span>
                </div>
                <span className="text-xs text-slate-500">{resource.readTime}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 transition-smooth group-hover:text-[hsl(var(--brand))]">
                {resource.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{resource.excerpt}</p>

              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand))] transition-all group-hover:gap-2">
                Read more <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 p-6 text-center ring-1 ring-slate-200/70">
          <p className="text-slate-700">
            More articles coming soon. Want to suggest a topic?{' '}
            <Link href="/contact" className="link-underline font-semibold text-[hsl(var(--brand))] hover:brightness-110">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
