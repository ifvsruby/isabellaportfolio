"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import BorderGlow from "./ui/BorderGlow";

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Posso pedir alterações durante o desenvolvimento?",
    answer: "Sim. Durante o desenvolvimento você pode acompanhar o projeto e pedir alterações para que o resultado final fique realmente alinhado com o que você imaginou."
  },
  {
    id: "q2",
    question: "Meu site vai funcionar bem no celular e em outros dispositivos?",
    answer: "Sim. Todos os sites são desenvolvidos de forma responsiva, pensando em celular, tablet e computador para que a experiência funcione bem em qualquer tamanho de tela."
  },
  {
    id: "q3",
    question: "Você também pode reformular um site que já existe?",
    answer: "Sim. Se você já tem um site, posso reformular o visual, melhorar a experiência, a estrutura e deixar tudo mais atual e profissional."
  },
  {
    id: "q4",
    question: "Em quanto tempo meu site fica pronto?",
    answer: "Na maioria dos projetos, o prazo fica entre 3 e 5 dias, dependendo do tamanho do site, da quantidade de páginas e das alterações necessárias."
  },
  {
    id: "q5",
    question: "Como funciona o pagamento?",
    answer: "O pagamento é dividido em 50% no início do projeto e 50% na entrega. Você pode pagar via Pix ou cartão de crédito, com possibilidade de parcelamento em até 12x."
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
      
      gsap.fromTo(
        ".faq-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" ref={containerRef} className="py-24 lg:py-32 bg-obsidian text-bone border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="faq-header text-center mb-16 md:mb-24">
          <div className="font-mono text-signal text-xs md:text-sm tracking-[0.4em] mb-4 uppercase">
            {"// Clareza & Alinhamento"}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div 
                key={item.id}
                className="faq-item group transform-gpu cursor-pointer"
              >
                <BorderGlow
                  className="w-full h-full shadow-2xl rounded-3xl"
                  backgroundColor="#0a0a0a"
                  colors={['#4A6BF0', '#A1A1AA', '#FFFFFF']}
                  borderRadius={24}
                  glowRadius={16}
                >
                  <div className="relative w-full bg-paper rounded-3xl overflow-hidden z-10 transition-colors duration-300">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4 relative z-20"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg md:text-2xl font-bold tracking-tight text-bone group-hover:text-signal transition-colors duration-300">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden relative z-20"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 text-mist text-base md:text-lg leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </BorderGlow>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
