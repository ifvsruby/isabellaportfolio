"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const [selected, setSelected] = useState<string>("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Basic Intersection Observer for theme switching could be added here
  // based on data-theme attributes on sections.

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-3 md:top-6 left-0 w-full z-50"
      >
        <div className={`mx-auto w-[90%] md:w-full max-w-[1320px] px-4 md:px-6 flex justify-between md:grid md:grid-cols-[1fr_auto_1fr] items-center rounded-full transition-all duration-500 py-1.5 md:py-2 ${
          isScrolled 
            ? "bg-[#0d0d0d]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="justify-self-start font-display text-lg md:text-2xl tracking-tighter text-white flex items-baseline">
            <span className="italic font-light mr-1.5">Isabella</span>
            <span className="font-bold">Marisa</span>
          </Link>

          {/* Desktop Nav */}
          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-self-center items-center gap-2 p-1 rounded-full">
            {[
              { id: "inicio", label: "Início", href: "#inicio" },
              { id: "projetos", label: "Projetos", href: "#projetos" },
              { id: "servicos", label: "Serviços", href: "#servicos" },
              { id: "sobre", label: "Sobre", href: "#sobre" },
              { id: "faq", label: "FAQ", href: "#faq" },
            ].map((item) => {
              const isSelected = selected === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setSelected(item.id)}
                  className={`inline-flex items-center justify-center h-[36px] px-4 leading-none rounded-full text-[11px] tracking-widest font-display font-bold uppercase transition-colors duration-300 ${
                    isSelected ? "bg-white/10 text-white" : "text-[#888888] hover:text-white bg-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="justify-self-end flex items-center ml-auto">
            <Link
              href="#contato"
              className="!hidden md:!inline-flex fuzzy-btn font-display text-[11px] px-8 py-3.5"
            >
              INICIAR PROJETO
            </Link>
            
            {/* Mobile Toggle */}
            <button
              className="md:hidden p-1.5 md:p-2 text-white bg-white/10 rounded-full md:ml-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian text-bone flex flex-col justify-center items-center transition-transform duration-500 ease-premium ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center gap-10 text-3xl font-display">
          <Link href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</Link>
          <Link href="#projetos" onClick={() => setMobileMenuOpen(false)}>Projetos</Link>
          <Link href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
          <Link href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
          <Link href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-signal mt-4 border border-signal/50 px-8 py-4 rounded-full text-xl">Iniciar projeto</Link>
        </nav>
      </div>
    </>
  );
}
