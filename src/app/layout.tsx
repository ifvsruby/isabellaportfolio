import type { Metadata } from "next";
import { Archivo, Manrope, IBM_Plex_Mono, Geist } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isabella Marisa — Design Estratégico e Desenvolvimento Web",
  description: "Crio sites estratégicos, rápidos e personalizados para transformar presença digital em autoridade, confiança e novos contatos. Design High-End focado em conversão.",
  keywords: ["Web Designer", "Desenvolvedora Web", "Design Estratégico", "UI/UX", "Sites de Alta Conversão", "Next.js", "Figma"],
  authors: [{ name: "Isabella Marisa" }],
  creator: "Isabella Marisa",
  publisher: "Isabella Marisa",
  metadataBase: new URL("https://portfolio-isabella.vercel.app"),
  openGraph: {
    title: "Isabella Marisa — Design Estratégico",
    description: "Crio sites estratégicos, rápidos e personalizados para marcas de alto padrão.",
    url: "https://portfolio-isabella.vercel.app",
    siteName: "Isabella Marisa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isabella Marisa Portfolio - Web Design & Desenvolvimento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabella Marisa — Design Estratégico",
    description: "Sites focados em autoridade, confiança e novos contatos.",
    creator: "@isabellamarisa",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn("antialiased", archivo.variable, manrope.variable, plexMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col bg-obsidian text-bone font-body overflow-x-hidden selection:bg-signal selection:text-obsidian">
        <Preloader />
        <Header />
        <SmoothScroll>
          <MotionProvider>
            {children}
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
