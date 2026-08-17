"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ultra-premium Lenis config (similar to Julio Sena)
    const lenis = new Lenis({
      lerp: 0.07, // Buttery smooth inertia
      wheelMultiplier: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
