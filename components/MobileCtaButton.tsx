"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { company } from "@/data/company";

export default function MobileCtaButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <Button href="/contact" className="w-full shadow-lg">
        {company.primaryCta}
      </Button>
    </div>
  );
}
