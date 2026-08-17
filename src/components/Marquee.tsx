"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  "Site Institucional",
  "Landing Page",
  "Redesign",
  "Desenvolvimento Responsivo",
  "Performance",
  "Projetos Personalizados",
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create seamless loop
      gsap.to(".marquee-track", {
        xPercent: -50, // Move half the width since we duplicated the content
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    },
    { scope: marqueeRef }
  );

  return (
    <div
      ref={marqueeRef}
      className="w-full bg-graphite border-y border-border-dark py-6 overflow-hidden flex items-center"
    >
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {/* First set */}
        <div className="flex items-center">
          {services.map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="font-display font-medium text-lg lg:text-xl text-bone px-8">
                {service}
              </span>
              <span className="w-1.5 h-1.5 bg-signal rounded-full mx-4"></span>
            </div>
          ))}
        </div>
        {/* Duplicated set for seamless loop */}
        <div className="flex items-center">
          {services.map((service, index) => (
            <div key={`dup-${index}`} className="flex items-center">
              <span className="font-display font-medium text-lg lg:text-xl text-bone px-8">
                {service}
              </span>
              <span className="w-1.5 h-1.5 bg-signal rounded-full mx-4"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
