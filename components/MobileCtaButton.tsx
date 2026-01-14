'use client';

import { useEffect, useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';

export default function MobileCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past first section (hero)
      const heroHeight = window.innerHeight * 1.5;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:hidden z-40 animate-fade-in">
      <PrimaryButton href="/contact" className="w-full text-center">
        Get started
      </PrimaryButton>
    </div>
  );
}
