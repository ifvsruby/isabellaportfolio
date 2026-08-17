"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Reveal stats container
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
          },
        }
      );

      // Counter Animation
      gsap.to(".stat-num", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
        textContent: (i: number, target: HTMLElement) => target.getAttribute("data-target"),
        duration: 2.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="contato" ref={containerRef} className="pt-24 lg:pt-32 bg-obsidian text-bone overflow-hidden flex flex-col">
      
      {/* Statistics Block */}
      <div className="stats-container container mx-auto px-4 md:px-8 max-w-6xl mb-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-y border-white/10 py-16 text-center place-items-center">
          <div className="stat-item flex flex-col items-center text-center">
            <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-signal mb-4">
              <span className="stat-num" data-target="20">0</span>+
            </span>
            <span className="font-mono text-sm tracking-widest text-mist uppercase">Projetos Lançados</span>
          </div>
          <div className="stat-item flex flex-col items-center text-center">
            <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-signal mb-4">
              <span className="stat-num" data-target="97">0</span>%
            </span>
            <span className="font-mono text-sm tracking-widest text-mist uppercase">Taxa de Aprovação</span>
          </div>
          <div className="stat-item flex flex-col items-center text-center">
            <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-signal mb-4">
              <span className="stat-num" data-target="2">0</span>
            </span>
            <span className="font-mono text-sm tracking-widest text-mist uppercase">Anos de Experiência</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* The 1000x More Beautiful CTA Typography (Ultra-Premium Editorial) */}
        <div className="relative w-full flex flex-col items-center text-center z-10 py-24 md:py-32">
          
          <div className="font-mono text-signal text-xs md:text-sm tracking-[0.4em] mb-12 uppercase relative z-10">
            {"// O PRÓXIMO PASSO"}
          </div>
          
          <h3 className="hero-text font-display flex flex-col items-center justify-center z-10 text-center mix-blend-plus-lighter w-full mb-12">
            <span className="block text-[clamp(2.5rem,10vw,9.5rem)] leading-[0.85] tracking-tighter drop-shadow-2xl text-bone font-black uppercase">
              VAMOS CRIAR ALGO
            </span>
            <span className="font-light text-bone/70 block italic lowercase text-[clamp(2.25rem,9vw,8.5rem)] leading-[0.8] tracking-tight mt-2 md:mt-4">
              memorável.
            </span>
          </h3>
          
          <p className="text-mist text-lg md:text-2xl max-w-2xl mb-16 relative z-10 font-light leading-relaxed">
            Me conte sobre o seu negócio, o que você faz e onde quer chegar. O formulário não existe. <strong className="text-bone font-medium">Você fala diretamente comigo.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-10 group/cta">
            {/* Ambient glow behind buttons */}
            <div className="absolute inset-0 bg-signal/10 blur-3xl rounded-full scale-[2] group-hover/cta:scale-[2.5] transition-transform duration-700"></div>

            <a 
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fuzzy-btn font-display text-center relative z-10"
            >
              QUERO MEU PROJETO
            </a>
            
            <a 
              href={`mailto:${siteConfig.email}`}
              className="fuzzy-btn font-display text-center relative z-10"
            >
              COPIAR E-MAIL
            </a>
          </div>

          <div className="mt-20 flex items-center justify-center gap-4 text-xs text-mist/50 font-mono uppercase tracking-widest relative z-10">
            <div className="w-8 h-px bg-white/20"></div>
            <span>Sem respostas automáticas • Papo reto</span>
            <div className="w-8 h-px bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
