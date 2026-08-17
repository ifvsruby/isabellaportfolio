"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BorderGlow from "./ui/BorderGlow";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal the left text
      gsap.fromTo(
        ".portfolio-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Infinite Marquee for the projects on the right
      if (marqueeRef.current) {
        gsap.to(".marquee-track", {
          xPercent: -50,
          ease: "none",
          duration: 55, // Slightly faster speed
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projetos"
      className="relative min-h-screen py-24 lg:py-0 bg-[#050505] text-bone flex flex-col justify-center overflow-hidden"
    >
      {/* Optimized Background noise (no mix-blend-mode for performance) */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

      {/* 
        RIGHT LAYER: The Carousel. 
        Absolutely positioned behind the text. 
        Starts at ~30vw on desktop to guarantee overlap with the solid left block.
      */}
      <div className="relative lg:absolute lg:inset-y-0 lg:left-[25vw] xl:left-[28vw] lg:right-0 z-10 flex items-center overflow-hidden mt-12 lg:mt-0 order-2 lg:order-none" ref={marqueeRef}>
        
        {/* Soft gradient mask to blend with the dark background smoothly - placed behind the text */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 hidden lg:block pointer-events-none"></div>

        <div className="marquee-track flex items-center gap-6 px-4 lg:px-0 will-change-transform w-max">
          {[...siteConfig.projects, ...siteConfig.projects, ...siteConfig.projects, ...siteConfig.projects].map((project, idx) => (
            <div key={`${project.slug}-${idx}`} className="shrink-0 h-[450px] lg:h-[600px] aspect-[3/4] max-w-[85vw] group transform-gpu cursor-pointer">
              <BorderGlow
                className="w-full h-full shadow-2xl rounded-2xl"
                backgroundColor="#0a0a0a"
                colors={['#4A6BF0', '#A1A1AA', '#FFFFFF']}
                borderRadius={16}
                glowRadius={16}
              >
                <Link 
                  href={`/projetos/${project.slug}`} 
                  className="relative block w-full h-full overflow-hidden rounded-2xl bg-[#0a0a0a]"
                >
                  {/* Image Background only, no text */}
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.client}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  {/* Subtle dark overlay that fades on hover to indicate interactivity */}
                  <div className="absolute inset-0 bg-[#050505]/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                </Link>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>

      {/* 
        LEFT LAYER: The Text Content.
        Solid background hides the carousel scrolling behind it.
      */}
      <div className="relative z-20 w-full lg:w-[45vw] xl:w-[40vw] max-w-[700px] shrink-0 flex flex-col justify-center px-4 md:px-8 lg:pl-[120px] bg-[#050505] h-full lg:h-screen pt-12 lg:pt-0 order-1 lg:order-none">
        
        <div className="w-full">
          <h2 className="portfolio-text font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] tracking-tight mb-8 whitespace-normal lg:whitespace-nowrap">
            Seu trabalho <br className="hidden md:block"/>
            pode ser <br className="hidden md:block"/>
            excelente. Seu <br className="hidden md:block"/>
            site também <br className="hidden md:block"/>
            <span className="text-signal">precisa parecer.</span>
          </h2>
          
          <div className="w-full lg:w-[380px]">
            <div className="portfolio-text text-[#A1A1AA] text-base md:text-lg leading-relaxed mb-10">
              A excelência do seu serviço não importa se o design não transmite autoridade à primeira vista. Se o seu site parece amador, o cliente assumirá que o seu trabalho também é.
            </div>
            
            <div className="portfolio-text flex items-center gap-4 text-sm font-medium text-bone">
              <p>A solução é construir um posicionamento visual impossível de ser ignorado.</p>
              <ArrowRight size={18} className="text-signal shrink-0" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
