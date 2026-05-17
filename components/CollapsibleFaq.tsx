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
    <div className="mt-7 grid gap-3 md:grid-cols-2">
      {faqs.map((f, i) => (
        <div
          key={f.q}
          className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-all duration-200 ${
            openIndex === i
              ? 'border-emerald-200 shadow-md'
              : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
          }`}
        >
          <button
            onClick={() => toggleFaq(i)}
            className="w-full text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-inset flex items-center justify-between gap-4 transition-colors duration-150 hover:bg-slate-50/60"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-slate-900 text-[15px] leading-snug">{f.q}</span>
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
              openIndex === i
                ? 'bg-emerald-500 text-white rotate-180'
                : 'bg-slate-100 text-slate-500'
            }`}>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-6 border-t border-slate-100 pt-4 animate-fade-in">
              <p className="text-slate-600 leading-relaxed text-sm">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
