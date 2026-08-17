"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    title: "Direcionamento Estratégico",
    description: "Cada seção tem um propósito. Não existe bloco vazio ou decoração sem sentido. A estratégia guia o layout, não o contrário.",
    tag: "Fundação"
  },
  {
    title: "Clareza de Mensagem",
    description: "O design não deve competir com a sua mensagem, ele deve amplificá-la. Seu visitante entende exatamente o que você faz em 5 segundos.",
    tag: "Copywriting"
  },
  {
    title: "Experiência Mobile",
    description: "Desenhado do zero para telas menores. Touch targets grandes, leitura confortável e animações adaptadas para não comprometer a performance celular.",
    tag: "Mobile-first"
  },
  {
    title: "Performance Real",
    description: "Um site bonito, mas que demora 5 segundos para carregar, perde 50% dos visitantes. Otimização de imagens, carregamento sob demanda e código limpo.",
    tag: "Velocidade"
  },
];

export default function Pillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-paper text-obsidian overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (List) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Pilares do trabalho
              </h2>
              <p className="text-obsidian/70">O que sustenta um projeto de alta conversão.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left group flex items-center justify-between p-6 border transition-all duration-300 ${
                    activeIndex === index
                      ? "border-signal-dark bg-bone"
                      : "border-border-light bg-transparent hover:border-obsidian/20"
                  }`}
                >
                  <span className={`font-display font-bold text-xl md:text-2xl transition-colors ${
                    activeIndex === index ? "text-signal-dark" : "text-obsidian"
                  }`}>
                    {pillar.title}
                  </span>
                  <span className={`transition-transform duration-300 ${activeIndex === index ? "translate-x-2 text-signal-dark" : "text-mist group-hover:text-obsidian"}`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Details panel) */}
          <div className="lg:col-span-6 h-[400px] lg:h-[500px]">
            <div className="w-full h-full bg-graphite text-bone p-8 md:p-12 relative flex items-center justify-center overflow-hidden">
              {/* Background Aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian to-graphite opacity-80"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center text-center max-w-md"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-signal border border-signal/30 px-3 py-1 rounded-full mb-8">
                    {pillars[activeIndex].tag}
                  </span>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    &quot;{pillars[activeIndex].description}&quot;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
