"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faqs";

export default function CollapsibleFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-8 divide-y divide-sand overflow-hidden rounded-3xl bg-paper ring-1 ring-sand">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={faq.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="font-semibold text-ink">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-ink/50 transition-transform ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            {open ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-5"
              >
                <p className="max-w-3xl leading-relaxed text-ink/70">{faq.a}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
