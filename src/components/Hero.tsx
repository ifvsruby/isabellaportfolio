"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/data/site";

import ShinyText from "./ui/ShinyText";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Entry Animation (waits for preloader to finish, assuming preloader takes ~1.8s to start sliding)
      const tl = gsap.timeline({ delay: 1.8 });

      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: "power4.out" }
      );

    },
    { scope: containerRef }
  );

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-12 overflow-hidden bg-[#050505] text-center"
    >
      {/* Subtle Mobile Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[60vh] bg-signal/15 blur-[120px] rounded-full pointer-events-none md:hidden z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center pointer-events-none">
        
        {/* Top Navbar / Eyebrow Info */}
        <div className="hero-text w-full max-w-7xl hidden md:flex flex-row justify-between items-center mb-24 opacity-80">
          <div className="flex items-center gap-4">
             <div className="w-12 h-px bg-white/20"></div>
             <span className="font-mono text-[10px] tracking-widest text-mist uppercase">Design Estratégico</span>
          </div>
          

          
          <div className="flex items-center gap-4">
             <span className="font-mono text-[10px] tracking-widest text-mist uppercase">Alta Conversão</span>
             <div className="w-12 h-px bg-white/20"></div>
          </div>
        </div>

        {/* Editorial / High-End Headline */}
        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="hero-text overflow-hidden mb-4 md:mb-6 z-10 relative">
            <span className="font-mono text-xs md:text-sm text-mist tracking-[0.3em] md:tracking-[0.4em] uppercase block text-center mt-4 md:mt-0">
              Um bom negócio não deveria
            </span>
          </div>
          
          <h1 className="hero-text font-display flex flex-col items-center justify-center z-10 text-center mix-blend-plus-lighter w-full relative">
            <span className="block text-[clamp(4rem,15.5vw,7.5rem)] lg:text-[9rem] xl:text-[11rem] leading-[0.75] md:leading-[0.85] tracking-tighter drop-shadow-2xl font-bold">
              <ShinyText 
                text="PARECER COMUM" 
                speed={3} 
                color="#8A8A93" 
                shineColor="#FFFFFF" 
                className="font-black md:font-bold tracking-tighter" 
              />
            </span>
            <span className="font-light text-bone/70 block italic lowercase text-[clamp(3rem,12vw,6rem)] lg:text-[8rem] xl:text-[10rem] leading-[0.8] tracking-tight mt-0 md:mt-4 pr-4 md:pr-12">
              na internet.
            </span>
          </h1>
        </div>

        {/* Supporting Copy & CTA */}
        <div className="hero-text flex flex-col items-center gap-8 md:gap-10 mt-10 md:mt-24 z-10 relative">
          <div className="flex flex-col items-center gap-6 max-w-2xl relative">
            <p className="hidden md:block text-mist text-base md:text-xl font-body leading-relaxed text-center font-light">
              Ajudo marcas ambiciosas a traduzirem seu valor real para o digital. Sites e Landing Pages de precisão técnica que transformam visitantes curiosos em <strong className="text-bone font-medium">clientes decididos</strong>.
            </p>
            <p className="md:hidden text-mist/80 text-[15px] leading-relaxed text-center font-light max-w-[320px]">
              Crio sites e Landing Pages que transformam valor em presença digital e visitantes em clientes.
            </p>
          </div>
          
          <div className="relative group/cta pointer-events-auto mt-2 w-[88vw] max-w-[340px] md:w-auto flex justify-center">
            {/* Ambient glow behind the button */}
            <div className="absolute inset-0 bg-signal/20 blur-2xl rounded-full scale-150 lg:group-hover/cta:scale-175 transition-transform duration-700"></div>
            
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="fuzzy-btn font-display relative z-10 w-full md:w-auto text-center"
            >
              QUERO MEU PROJETO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
