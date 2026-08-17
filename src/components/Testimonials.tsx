"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/data/site";

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  // Dividir os depoimentos em duas fileiras para o efeito duplo
  const row1 = siteConfig.testimonials.slice(0, 3);
  const row2 = siteConfig.testimonials.slice(3, 5); // Pode ficar menor se houver poucos depoimentos

  useGSAP(
    () => {
      // Animação infinita da Fileira 1 (Esquerda para Direita)
      gsap.to(".testi-track-1", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      // Animação infinita da Fileira 2 (Direita para Esquerda)
      // Definimos o início em -50% e vamos até 0%
      gsap.fromTo(
        ".testi-track-2",
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 40,
          repeat: -1,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-32 bg-obsidian text-bone overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="font-display font-bold text-signal text-xs tracking-[0.2em] mb-4 uppercase">
            {"// DEPOIMENTOS"}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 max-w-2xl">
            O que as pessoas estão dizendo
          </h2>
          <p className="text-mist text-lg">
            Projetos que saíram do zero para resultado
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 */}
        <div className="w-full overflow-hidden flex">
          <div className="testi-track-1 flex gap-6 will-change-transform pr-6">
            {/* Duplicating the array multiple times guarantees infinite loop without gaps */}
            {[...row1, ...row1, ...row1, ...row1, ...row1].map((testi, i) => (
              <div 
                key={`r1-${i}`} 
                className="w-[320px] md:w-[400px] shrink-0 bg-paper border border-border-dark rounded-3xl p-8 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-sm text-bone tracking-wide uppercase mb-1">
                    {testi.author}
                  </h3>
                  <p className="font-display font-bold text-[10px] text-mist/70 tracking-widest uppercase">
                    {testi.role} {testi.company && `• ${testi.company}`}
                  </p>
                </div>
                <p className="text-mist italic text-sm leading-relaxed">
                  &quot;{testi.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden flex">
          <div className="testi-track-2 flex gap-6 will-change-transform pr-6">
            {[...row2, ...row2, ...row2, ...row2, ...row2].map((testi, i) => (
              <div 
                key={`r2-${i}`} 
                className="w-[320px] md:w-[400px] shrink-0 bg-paper border border-border-dark rounded-3xl p-8 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-sm text-bone tracking-wide uppercase mb-1">
                    {testi.author}
                  </h3>
                  <p className="font-display font-bold text-[10px] text-mist/70 tracking-widest uppercase">
                    {testi.role} {testi.company && `• ${testi.company}`}
                  </p>
                </div>
                <p className="text-mist italic text-sm leading-relaxed">
                  &quot;{testi.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
