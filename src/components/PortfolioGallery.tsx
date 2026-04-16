"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function PortfolioGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const projects = [
    { name: "The Prime Rib Abuja", desc: "Complete F&B Strategy & Menu Engineering", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop" },
    { name: "Sovereign Lounge Kaduna", desc: "Ambience Design & Operational SOPs", img: "https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=1200&auto=format&fit=crop" },
    { name: "Aura Boutique Hotel", desc: "End-to-end Hospitality Blueprint", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" },
    { name: "Gourmet Vault", desc: "Staff Training & Premium Scaling", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop" }
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !scrollWrapperRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(scrollWrapperRef.current, {
        x: () => {
          if (!scrollWrapperRef.current) return 0;
          return -(scrollWrapperRef.current.scrollWidth - window.innerWidth);
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWrapperRef.current ? scrollWrapperRef.current.scrollWidth - window.innerWidth : 2000}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section 
      id="portfolio"
      ref={containerRef} 
      className="relative w-full h-screen bg-navy text-white overflow-hidden flex flex-col justify-center border-t border-[rgba(201,169,98,0.2)]"
    >
      <div className="absolute top-28 md:top-24 left-8 md:left-24 z-10 w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-2 text-gradient-gold">The Hall of Legends</h2>
        <p className="font-sans text-gray-400">Transformations in Abuja & Kaduna</p>
      </div>

      <div 
        ref={scrollWrapperRef} 
        className="flex w-max md:w-max items-center h-[60vh] px-8 md:px-24 gap-12 mt-20 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide md:overflow-visible"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className="w-[85vw] md:w-[60vw] h-[50vh] flex-shrink-0 snap-center flex flex-col justify-end p-8 glass-panel rounded-2xl relative overflow-hidden group royal-interactive"
          >
            {/* Background Image */}
            <Image 
              src={proj.img} 
              alt={proj.name} 
              fill
              sizes="(max-width: 768px) 80vw, 60vw"
              className="object-cover z-0 transition-transform duration-700 group-hover:scale-110 opacity-50" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.95)] via-[rgba(10,22,40,0.4)] to-transparent z-10" />

            <div className="relative z-20">
              <h3 className="text-3xl font-serif mb-2">{proj.name}</h3>
              <p className="font-sans text-gold uppercase tracking-widest text-sm">{proj.desc}</p>
            </div>
            
            {/* Animated Hover Border Effect simulated via GSAP DrawSVG equivalent with simple CSS initially */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-500 rounded-2xl z-30 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
