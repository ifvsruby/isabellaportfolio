"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/data/site";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Fade in the text
    tl.to(".preloader-content", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    // 2. Slide the whole preloader up and away (faster pace)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: "expo.inOut",
      delay: 0.8
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#020202] flex items-center justify-center pointer-events-none"
    >
      <div className="preloader-content opacity-0 translate-y-8 flex flex-col items-center gap-6">
        {/* Encrypted Name Effect */}
        <h1 className="font-display text-[2rem] md:text-[3rem] tracking-[0.2em] uppercase flex items-baseline">
          <EncryptedText 
            text="Isabella" 
            className="italic font-light mr-3"
            encryptedClassName="text-mist"
            revealedClassName="text-bone"
            revealDelayMs={120}
          />
          <EncryptedText 
            text="Marisa" 
            className="font-bold"
            encryptedClassName="text-mist"
            revealedClassName="text-bone"
            revealDelayMs={120}
          />
        </h1>
      </div>
    </div>
  );
}
