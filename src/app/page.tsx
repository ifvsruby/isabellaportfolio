import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import ConversionPillars from "@/components/ConversionPillars";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Preloader />
      <Hero />
      <Marquee />
      <Portfolio />
      <Services />
      <About />
      <ConversionPillars />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
