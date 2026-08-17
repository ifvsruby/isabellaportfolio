"use client";

import { useRef, useState, MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/data/site";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useGSAP(
    () => {
      // Reveal animations
      gsap.fromTo(
        ".about-text > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
      );
      
      gsap.fromTo(
        ".about-card",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
      );
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section id="sobre" ref={containerRef} className="py-16 lg:py-32 bg-obsidian text-bone border-t border-border-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Spotlight Image Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="about-card relative aspect-[3/4] rounded-3xl overflow-hidden bg-graphite border border-white/5 cursor-crosshair group"
              style={{
                background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(123, 97, 255, 0.15), transparent 40%)`
              }}
            >
              {/* Internal glow border that follows mouse */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
              ></div>

              <div className="absolute inset-1 rounded-[22px] bg-[#0a0a0a] z-0 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center md:bg-[center_top_-2rem]"
                  style={{ backgroundImage: "url('/images/isabella-about.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent z-10 pointer-events-none"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                <div>
                  <div className="font-display text-xl text-bone mb-1 tracking-tighter uppercase flex items-baseline">
                    <span className="italic font-light mr-1.5">Isabella</span>
                    <span className="font-bold">Marisa</span>
                  </div>
                  <div className="font-mono text-[10px] text-mist tracking-widest uppercase">{siteConfig.role}</div>
                </div>
                <div className="flex gap-2">
                  {/* Social dots */}
                  {siteConfig.instagram && <a href={siteConfig.instagram} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bone hover:bg-signal transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>}
                  {siteConfig.linkedin && <a href={siteConfig.linkedin} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bone hover:bg-signal transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>}
                </div>
              </div>
            </div>
            
            {/* Background ambient glow behind card (Optimized) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-signal blur-3xl opacity-10 -z-10 rounded-full transform-gpu"></div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="about-text lg:col-span-7 flex flex-col items-start lg:pl-4">
            <div className="font-display font-bold text-signal text-xs tracking-[0.2em] mb-6 uppercase">
              {"// QUEM SOU EU"}
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
              Design com propósito.<br/>
              <span className="text-[#A1A1AA]">Projetos com personalidade.</span>
            </h2>
            
            <div className="space-y-6 text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-2xl mb-12">
              <p>
                Meu nome é Isabella, tenho 18 anos e trabalho com marketing digital há cerca de 2 anos. Nesse tempo, já explorei diferentes áreas, aprendi muita coisa na prática e fui entendendo cada vez mais onde realmente quero colocar minha energia.
              </p>
              <p>
                Hoje, meu foco está na criação de sites. Gosto de transformar ideias em experiências digitais bonitas, estratégicas e que realmente representem a identidade de cada negócio sem fazer algo genérico só por fazer.
              </p>
              <p>
                Estou sempre buscando evoluir, testar ferramentas novas e melhorar meu olhar para design, experiência e presença digital. Quero que cada projeto tenha personalidade, funcione bem e entregue algo que faça sentido de verdade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start w-full mt-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fuzzy-btn font-display text-center w-full sm:w-auto"
              >
                QUERO MEU PROJETO
              </a>
              <div className="flex flex-row gap-4 w-full sm:w-auto">
                <a
                  href={siteConfig.behance || "https://www.behance.net/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-border-light text-bone font-display font-bold text-xs tracking-widest uppercase px-4 md:px-6 py-4 rounded-full hover:bg-white/5 transition-colors flex-1 text-center"
                >
                  BEHANCE
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-border-light text-bone font-display font-bold text-xs tracking-widest uppercase px-4 md:px-6 py-4 rounded-full hover:bg-white/5 transition-colors flex-1 text-center"
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
