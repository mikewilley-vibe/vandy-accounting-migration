// components/HomeTestimonials.tsx
import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "Acting as Accountant and Controller for me with three different businesses over the past 12 years, Julie is quick to respond and proactive with recommendations to streamline processes. She has helped grow my businesses and save money by implementing best practices. Thanks to Julie we are on pace to outperform our best year yet.",
    name: "Erik Hurwick",
    title: "CEO, Hurwick Enterprises & Founding Partner, Indiana Re-Entry Integration Services",
    featured: true,
  },
  {
    quote:
      "Julie stepped in, took my mess, and made sense of it. Now the State is happy. The IRS is happy. And I am extremely happy. Asking for help is so difficult but having Julie organize my business has made it possible for me to go out and provide the skill that people need from me.",
    name: "Daniel Borud, RN",
    title: "CEO, Northern Lights Medical",
    featured: false,
  },
  {
    quote:
      "Julie takes excellent care of all our accounting, including monthly reconciliation, paying bills, payroll, and audits. Pro Plastics has employees in four different states, and she makes sure to stay on top of the different taxes for each state. She has continually gone above and beyond for Pro Plastics.",
    name: "Christy Nance",
    title: "Office Manager, Pro Plastics Sales & Service",
    featured: false,
  },
  {
    quote:
      "Julie's academic accomplishments and dual background in public accounting and non-profit service is an ideal blend for anyone seeking someone that will ensure maintenance of required recordkeeping but have an above average eye toward improvement and strategic planning. I am confident Julie will fulfill your financial services needs and excel as your financial expert.",
    name: "Robert A. Woods, CPA, CGMA",
    title: "Former Board Member, Indiana Society of Certified Public Accountants",
    featured: false,
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#0B3C5D] to-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Testimonials</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Trusted by businesses across Indiana
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Real words from real clients who rely on Vandy Accounting every month.
          </p>
        </FadeIn>

        {/* Featured testimonial */}
        <FadeIn className="mb-6">
          <blockquote className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-8 md:p-10 backdrop-blur-sm shadow-xl">
            {/* Decorative large quote mark */}
            <svg
              className="absolute top-4 right-6 h-24 w-24 text-emerald-400/10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
            </svg>
            <StarRating />
            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-4xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-sm font-bold text-white shrink-0">
                {featured.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{featured.name}</div>
                <div className="mt-0.5 text-xs text-slate-400">{featured.title}</div>
              </div>
            </footer>
          </blockquote>
        </FadeIn>

        {/* Supporting testimonials */}
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8">
                <StarRating />
                <p className="mt-4 flex-1 text-slate-300 leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/60 to-emerald-500/60 text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{t.title}</div>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
