"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toolsData = [
  {
    category: "Estratégia e Conteúdo",
    items: ["Pesquisa de Mercado", "Análise de Concorrência", "Copywriting", "Arquitetura da Informação", "SEO On-page"],
    description: "Tudo começa antes do design. Definimos o que precisa ser dito, para quem e em qual ordem para maximizar a retenção e conversão.",
  },
  {
    category: "UX/UI e Prototipação",
    items: ["Figma", "Wireframing", "Design Systems", "Prototipagem Interativa", "Design Mobile-first"],
    description: "Construção visual focada em experiência. Crio interfaces limpas e objetivas que guiam o olhar e transmitem autoridade imediata.",
  },
  {
    category: "Desenvolvimento",
    items: ["React & Next.js", "Tailwind CSS", "TypeScript", "GSAP & Framer Motion", "APIs & Integrações"],
    description: "Código moderno, limpo e seguro. Sem construtores lentos. Seu site é construído com a mesma tecnologia usada pelas maiores empresas do mundo.",
  },
  {
    category: "Performance e Lançamento",
    items: ["Core Web Vitals", "Otimização de Imagens", "Acessibilidade (WCAG)", "Analytics Setup", "Hospedagem Premium"],
    description: "Um site rápido retém usuários. Garanto que a entrega final não apenas pareça boa, mas carregue instantaneamente e respeite padrões de acessibilidade.",
  },
];

export default function Tools() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-paper text-obsidian border-t border-border-light">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column (List) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <h3 className="font-display font-bold text-2xl mb-6">Capacidades</h3>
            
            {toolsData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-4 transition-all duration-300 border-l-2 ${
                  activeIndex === index
                    ? "border-signal-dark bg-bone font-medium"
                    : "border-transparent hover:bg-bone/50 text-obsidian/60 hover:text-obsidian"
                }`}
              >
                {data.category}
              </button>
            ))}
          </div>

          {/* Right Column (Details panel) */}
          <div className="lg:col-span-7 bg-bone border border-border-light p-8 md:p-12 relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-2xl mb-4 text-signal-dark">
                    {toolsData[activeIndex].category}
                  </h4>
                  <p className="text-body-lg text-obsidian/80 mb-8 max-w-lg">
                    {toolsData[activeIndex].description}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-2">
                  {toolsData[activeIndex].items.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-border-dark text-obsidian/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
