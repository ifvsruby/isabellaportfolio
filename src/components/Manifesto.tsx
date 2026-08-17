"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Split the text into words for animation (done manually in JSX for simplicity here, 
      // but we animate the opacity of children spans)
      const words = gsap.utils.toArray(".manifesto-word");
      
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "center center",
            scrub: true,
          },
        }
      );

      // Ambient glow that moves with scroll
      gsap.to(".manifesto-glow", {
        x: "100vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-[#020202] text-bone py-32 overflow-hidden"
    >
      {/* Background ambient noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      
      {/* Moving glow orb (Optimized) */}
      <div className="manifesto-glow absolute top-1/2 -translate-y-1/2 left-[-20vw] w-[40vw] h-[40vw] rounded-full bg-signal blur-3xl opacity-20 pointer-events-none transform-gpu"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-center">
        <h2 
          ref={textRef}
          className="font-display font-bold text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight text-center max-w-5xl uppercase"
        >
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">Não</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">é</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">só</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">um</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2 text-signal">site.</span>
          <br className="hidden md:block"/>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">É</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">a</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">forma</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">como</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">a</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">sua</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">ideia</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">é</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">percebida</span>
          <br className="hidden md:block"/>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">antes</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">da</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">primeira</span>
          <span className="manifesto-word inline-block mr-3 md:mr-6 mb-2">conversa.</span>
        </h2>
      </div>
    </section>
  );
}
