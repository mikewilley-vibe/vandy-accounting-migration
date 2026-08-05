'use client';

import { useState } from 'react';

type FaqItem = {
  q: string;
  a: string;
};

export default function CollapsibleFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-7 grid gap-4 md:grid-cols-2">
      {faqs.map((f, i) => (
        <div
          key={f.q}
          className={`animate-fade-in-up animation-delay-${
            200 + i * 100
          } rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 transition-smooth hover:ring-slate-200 hover:bg-white hover:shadow-md overflow-hidden`}
        >
          <button
            onClick={() => toggleFaq(i)}
            className="w-full text-left p-6 focus:outline-none focus-ring flex items-center justify-between hover:bg-slate-100/50 transition-smooth"
            aria-expanded={openIndex === i}
          >
            <div className="font-semibold text-slate-900">{f.q}</div>
            <svg
              className={`h-5 w-5 text-slate-600 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-6 border-t border-slate-200/70 pt-4 animate-fade-in">
              <p className="text-slate-700 leading-relaxed">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
