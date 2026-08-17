"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BorderGlow from "./ui/BorderGlow";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    num: "/01",
    title: "Design de Interfaces",
    desc: "Interfaces limpas, objetivas e criadas sob medida para guiar a atenção do visitante para a conversão.",
    tags: ["FIGMA", "WIREFRAMING", "UI DESIGN"]
  },
  {
    num: "/02",
    title: "Desenvolvimento Web",
    desc: "Código de alta performance, animações fluidas e arquitetura escalável.",
    tags: ["REACT", "NEXT.JS", "TAILWIND CSS", "GSAP"]
  },
  {
    num: "/03",
    title: "Copywriting & Estratégia",
    desc: "O site muito além de ser bonito, precisa vender. Desenvolvo a narrativa e a estrutura persuasiva que guiam o visitante.",
    tags: ["ESCRITA PERSUASIVA", "FUNIL DE CONVERSÃO"]
  },
  {
    num: "/04",
    title: "Otimização & Performance",
    desc: "Carregamento instantâneo e métricas aprovadas pelo Google para reter cada visita.",
    tags: ["SEO TÉCNICO", "CORE WEB VITALS", "ACESSIBILIDADE"]
  }
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Simple entry animation when scrolled into view
      gsap.fromTo(
        ".service-box",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="servicos"
      ref={containerRef}
      className="py-24 lg:py-32 bg-obsidian text-bone relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          
          {/* Left: Titles (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="font-display font-bold text-signal text-xs tracking-[0.2em] mb-4 uppercase">
              SERVIÇOS, HABILIDADES E COMPETÊNCIAS
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              O que faço <br/>de melhor?
            </h2>
            <p className="text-mist text-lg mb-8 max-w-sm">
              Crio projetos de design e web que ajudam empresas a se posicionarem melhor, crescerem e mostrarem de verdade o valor que têm.
            </p>
            <button className="bg-signal text-bone font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-signal-dark transition-colors">
              QUERO MEU PROJETO
            </button>
          </div>

          {/* Right: Cards (Stacking via CSS Sticky) */}
          <div className="lg:w-2/3 flex flex-col gap-6 lg:pb-32">
            {servicesList.map((srv, idx) => (
              <div 
                key={idx} 
                className="service-box sticky top-[var(--offset)] shadow-2xl transform-gpu cursor-pointer"
                style={{ '--offset': `calc(8rem + ${idx * 2.5}rem)` } as React.CSSProperties}
              >
                <BorderGlow
                  className="w-full h-full rounded-3xl"
                  backgroundColor="#0a0a0a"
                  colors={['#4A6BF0', '#A1A1AA', '#FFFFFF']}
                  borderRadius={24}
                  glowRadius={16}
                >
                  <div className="relative z-10 w-full bg-[#0a0a0a] p-8 md:p-10 rounded-3xl flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-bone">
                        {srv.title}
                      </h3>
                      <span className="font-mono text-xl md:text-2xl text-mist/50">
                        {srv.num}
                      </span>
                    </div>
                    
                    <p className="text-mist text-sm md:text-base max-w-lg">
                      {srv.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {srv.tags.map(tag => (
                        <span key={tag} className="font-display font-bold text-[10px] tracking-widest uppercase bg-graphite border border-white/5 px-3 py-1.5 rounded-full text-mist">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
