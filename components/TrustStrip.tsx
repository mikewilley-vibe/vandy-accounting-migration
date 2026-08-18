import Image from "next/image";
import Container from "@/components/Container";
import { credentials } from "@/data/company";

const items = [
  ...credentials,
  "Now serving Virginia & North Carolina",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-sand bg-paper" aria-label="Credentials and tools">
      <Container className="flex flex-col gap-8 py-8 md:py-10">
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink/75 ring-1 ring-sand md:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
          <div className="flex items-center gap-3">
            <Image
              src="/quickbooks-proadvisor-gold.png"
              alt="Intuit QuickBooks ProAdvisor Program — Gold"
              width={72}
              height={72}
              className="h-14 w-14 object-contain"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/55">
              Gold ProAdvisor
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/QB.png"
              alt="QuickBooks"
              width={56}
              height={56}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/55">
              QuickBooks
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/ADP.png"
              alt="ADP payroll"
              width={72}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/55">
              Payroll partnership
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
