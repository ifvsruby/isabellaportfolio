"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BorderGlow from "./ui/BorderGlow";

const processSteps = [
  {
    num: "01",
    title: "Descoberta",
    desc: "Objetivo, público, referências, conteúdo e métrica de sucesso.",
  },
  {
    num: "02",
    title: "Direção",
    desc: "Sitemap, narrativa, wireframe e direção visual (Style Frame).",
  },
  {
    num: "03",
    title: "Design",
    desc: "Interface responsiva, componentes e protótipo de alta fidelidade.",
  },
  {
    num: "04",
    title: "Desenvolvimento",
    desc: "Código, animações, integrações, SEO técnico e performance.",
  },
  {
    num: "05",
    title: "Revisão",
    desc: "QA visual, testes mobile, acessibilidade e conteúdo.",
  },
  {
    num: "06",
    title: "Lançamento",
    desc: "Publicação, analytics configurado, e suporte inicial.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(
    () => {
      const steps = gsap.utils.toArray(".process-step") as HTMLElement[];
      
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.3, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
      
      // Draw line down the middle
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-track",
            start: "top 50%",
            end: "bottom 60%",
            scrub: true,
          }
        }
      )
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-obsidian text-bone border-b border-border-dark"
    >
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 lg:mb-24 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse shadow-[0_0_10px_rgba(74,107,240,0.8)]"></span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-mist uppercase font-bold">
              05 A Metodologia
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] tracking-tighter max-w-4xl mx-auto mb-4 md:mb-6">
            Design sem estratégia é apenas decoração.
          </h2>
          <p className="text-mist text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto">
            Um processo cirúrgico desenhado para <strong className="text-white font-medium italic">lucrar.</strong>
          </p>
        </div>

        <div className="process-track relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-[2px] bg-border-dark origin-top"></div>
          <div className="process-line absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-px w-[2px] bg-signal origin-top scale-y-0"></div>

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`process-step relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 last:mb-0 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Node / Dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2.5 md:-ml-[11px] w-5 h-5 bg-obsidian border-2 border-signal rounded-full z-10 flex items-center justify-center">
                  <div className="w-1 h-1 bg-signal rounded-full"></div>
                </div>

                {/* Content Box */}
                <div
                  className={`w-full md:w-[45%] pl-8 md:pl-0 ${
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="font-mono text-signal font-bold text-xl mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-mist text-body">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-32 text-center max-w-5xl mx-auto px-4 relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[80%] bg-signal/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <BorderGlow
            className="relative z-10 w-full rounded-[2rem] md:rounded-[3rem] shadow-2xl"
            backgroundColor="#050505"
            colors={['#FFFFFF', '#A1A1AA', '#333333']}
            borderRadius={32}
            glowRadius={20}
          >
            <div className="px-6 py-12 md:p-16 border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-signal/50 to-transparent"></div>
              
              <h3 className="font-display font-bold text-[clamp(1.6rem,4vw,3rem)] leading-[1.2] md:leading-[1.1] tracking-tighter relative z-10">
                <span className="text-bone drop-shadow-lg">O verdadeiro luxo não é apenas visual.</span>
                <span className="text-mist block mt-4 md:mt-6 text-[clamp(1.2rem,2.5vw,2rem)] font-medium tracking-tight">
                  É a engenharia invisível que conduz o seu cliente do primeiro olhar <br className="hidden lg:block" />até a <span className="text-white italic relative inline-block z-10 px-1">conversão final<span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-signal/40 -z-10 rounded-sm"></span></span>, sem nenhum atrito.
                </span>
              </h3>
            </div>
          </BorderGlow>
        </div>

      </div>
    </section>
  );
}
