import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-bone border-t border-border-dark py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="font-display text-2xl tracking-wide mb-6 inline-block">
              <span className="italic font-light mr-1.5">Isabella</span>
              <span className="font-bold">Marisa</span>
            </Link>
            <p className="text-mist max-w-sm">
              Design Estratégico e Desenvolvimento Web para marcas que buscam autoridade e conversão.
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-mist uppercase tracking-widest mb-2">Navegação</h4>
            <Link href="#projetos" className="hover:text-signal transition-colors w-fit">Projetos</Link>
            <Link href="#servicos" className="hover:text-signal transition-colors w-fit">Serviços</Link>
            <Link href="#sobre" className="hover:text-signal transition-colors w-fit">Sobre</Link>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-mist uppercase tracking-widest mb-2">Contato</h4>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-signal transition-colors w-fit">
              {siteConfig.email}
            </a>
            {siteConfig.whatsapp && (
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors w-fit">
                WhatsApp: {siteConfig.whatsapp}
              </a>
            )}
            
            <div className="flex gap-4 mt-4">
              {siteConfig.instagram && (
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-signal transition-colors" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-signal transition-colors" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-dark text-sm text-mist/60 font-mono">
          <p>© {currentYear} {siteConfig.brandName}. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Desenvolvido com foco em performance e estratégia.</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
