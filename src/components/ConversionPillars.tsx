"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BorderGlow from "./ui/BorderGlow";

const pillars = [
  {
    title: "ESTRATÉGIA",
    desc: "Design sem propósito é apenas decoração. Mapeamos a essência da sua marca, os desejos do seu cliente ideal e estruturamos um caminho lógico que conduz à compra.",
    image: "Estratégia Visual"
  },
  {
    title: "COPYWRITING",
    desc: "O visual atrai, mas a mensagem decide. Substituímos jargões genéricos por uma narrativa clara e persuasiva, comunicando o valor real da sua oferta em cada frase.",
    image: "Textos Persuasivos"
  },
  {
    title: "UI/UX DESIGN",
    desc: "Arquitetura de interface pensada para encantar. Cada pixel é desenhado para transmitir luxo, clareza e facilidade de navegação, elevando sua autoridade no primeiro milissegundo.",
    image: "Interfaces Premium"
  },
  {
    title: "PERFORMANCE",
    desc: "Velocidade é a nova métrica de conversão. Construímos seu projeto com tecnologias modernas para carregamento instantâneo, garantindo que ninguém desista de esperar.",
    image: "Velocidade Absoluta"
  }
];

export default function ConversionPillars() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  // Use the newly generated 3D images
  const pillarImages = [
    "/pillars/strategy2.png",
    "/pillars/copywriting2.jpg",
    "/pillars/uiux2.jpg",
    "/pillars/performance2.png"
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".pillar-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-32 bg-[#050505] text-bone overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-signal/5 blur-[150px] rounded-[100%] pointer-events-none opacity-50"></div>

        <div className="pillar-header flex flex-col mb-16 md:mb-24 relative z-10">
          <div className="font-display font-bold text-signal text-xs tracking-[0.2em] mb-6 uppercase">
            {"// A METODOLOGIA"}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl">
            Pilares da <br className="hidden md:block"/>
            <span className="text-gradient-primary">Conversão Absoluta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Side: Smooth Interactive List */}
          <div className="lg:col-span-5 flex flex-col relative order-2 lg:order-1">
            {/* Animated vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>
            <div 
              className="absolute left-0 w-[2px] bg-signal transition-all duration-700 ease-out hidden lg:block"
              style={{ top: `${activeTab * 25}%`, height: '25%' }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] w-2 h-2 rounded-full bg-signal shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
            </div>

            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className="group relative cursor-pointer py-5 md:py-10 pl-10 lg:pl-10 transition-all duration-500"
              >
                {/* Mobile top border */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] lg:hidden transition-colors duration-300 ${activeTab === idx ? 'bg-signal' : 'bg-white/5'}`}></div>

                {/* Massive Watermark Number */}
                <span className={`absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 font-display font-bold text-[3rem] sm:text-[4.5rem] lg:text-[7rem] leading-none pointer-events-none transition-all duration-700 ease-out z-0 ${activeTab === idx ? 'text-signal/10 scale-110' : 'text-white/5 scale-100'}`}>
                  0{idx + 1}
                </span>

                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className={`font-display font-bold text-2xl md:text-4xl transition-all duration-500 flex items-center gap-4 ${activeTab === idx ? 'text-bone translate-x-2' : 'text-mist group-hover:text-bone/80'}`}>
                    {pillar.title}
                    {activeTab === idx && (
                      <span className="inline-block w-8 h-[2px] bg-signal"></span>
                    )}
                  </h3>
                  
                  {/* Mobile-only Accordion Description */}
                  <div 
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeTab === idx ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-mist text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-signal/30 ml-2">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Stunning 3D Image Panel */}
          <BorderGlow 
            className="lg:col-span-7 relative w-full h-[320px] sm:h-[450px] lg:h-[650px] shadow-2xl order-1 lg:order-2"
            backgroundColor="#0A0A0A"
            colors={['#4A6BF0', '#A1A1AA', '#FFFFFF']}
            borderRadius={32}
            glowRadius={20}
          >
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                `}
              >
                {/* High-end 3D Render Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out"
                  style={{ 
                    backgroundImage: `url(${pillarImages[idx]})`,
                    transform: activeTab === idx ? 'scale(1)' : 'scale(1.1)' 
                  }}
                ></div>
                
                {/* Dark Vignette / Gradient Overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Glassmorphism Description Text at the bottom (Desktop only) */}
                <div className="hidden lg:block absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 pointer-events-none">
                  <div className="relative border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 transform transition-transform duration-700 ease-out translate-y-0 shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-signal/50 to-transparent"></div>
                    <p className="text-bone text-base md:text-lg leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </BorderGlow>

        </div>
      </div>
    </section>
  );
}
