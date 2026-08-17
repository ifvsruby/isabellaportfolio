"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".problem-label",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          ".problem-headline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".problem-text",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        );

      // Light horizontal movement on scroll for gallery
      gsap.to(".problem-gallery", {
        x: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-32 bg-obsidian border-b border-border-dark overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left: Text Content (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="problem-label font-mono text-sm tracking-widest text-mist mb-8">
            01 PERCEPÇÃO
          </div>

          <h2 className="problem-headline font-display font-bold text-3xl lg:text-[clamp(2.3rem,4vw,3.5rem)] leading-tight text-bone mb-8">
            Antes de te chamar, ele vai pesquisar sua empresa.
          </h2>

          <div className="problem-text space-y-6 text-body-lg text-mist pr-4">
            <p>
              O problema nem sempre é a qualidade do seu serviço. É como ele é
              percebido. Se o seu site parece antigo, confuso ou amador, a
              confiança cai antes mesmo da primeira conversa.
            </p>
            <p className="text-bone font-medium">
              Seu site precisa deixar claro, em poucos segundos, por que sua
              empresa merece atenção.
            </p>
          </div>
        </div>

        {/* Right: Gallery (6 cols) */}
        <div className="lg:col-span-6 relative h-[400px] md:h-[500px] w-full">
          <div className="problem-gallery absolute inset-0 flex items-center gap-6 pl-4 lg:pl-0">
            
            {/* Mockup 1 */}
            <div className="w-[280px] md:w-[320px] h-[350px] md:h-[400px] shrink-0 bg-graphite border border-border-dark overflow-hidden relative translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-obsidian to-graphite opacity-50"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-mist">[Conceito Saúde]</div>
            </div>
            
            {/* Mockup 2 */}
            <div className="w-[280px] md:w-[320px] h-[350px] md:h-[400px] shrink-0 bg-graphite border border-border-dark overflow-hidden relative -translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-obsidian to-graphite opacity-50"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-mist">[Conceito Estética]</div>
            </div>

            {/* Mockup 3 */}
            <div className="w-[280px] md:w-[320px] h-[350px] md:h-[400px] shrink-0 bg-graphite border border-border-dark overflow-hidden relative translate-y-12">
              <div className="absolute inset-0 bg-gradient-to-br from-obsidian to-graphite opacity-50"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-mist">[Conceito Adv]</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
