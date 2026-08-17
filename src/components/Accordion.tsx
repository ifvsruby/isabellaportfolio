"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-border-light overflow-hidden">
      <button
        type="button"
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-lg md:text-xl text-obsidian pr-8">
          {title}
        </span>
        <span
          className={`shrink-0 transition-transform duration-300 ease-ui ${
            isOpen ? "rotate-45 text-signal-dark" : "text-mist"
          }`}
        >
          <Plus size={24} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="pb-6 text-obsidian/80 text-body pr-4 md:pr-12">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.q}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.a}
        </AccordionItem>
      ))}
    </div>
  );
}
