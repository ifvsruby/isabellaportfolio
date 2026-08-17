"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

// Register GSAP Plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Synchronize GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Clean up on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Refresh ScrollTrigger on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
