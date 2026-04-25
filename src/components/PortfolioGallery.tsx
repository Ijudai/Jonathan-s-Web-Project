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
    { 
      name: "The Celestial Penthouse", 
      desc: "Hospitality & Interior Design • New York", 
      img: "/luxury_penthouse_interior_1777038806495.png" 
    },
    { 
      name: "The Meridian Tower", 
      desc: "General Contracting • London", 
      img: "/luxury_skyscraper_construction_1777040636330.png" 
    },
    { 
      name: "The Nexus Logistics Hub", 
      desc: "Supply Chain & Global Logistics • Singapore", 
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
      name: "The Gilded Opera", 
      desc: "Public Space Mastery • Vienna", 
      img: "/grand_opera_house_foyer_1777038886706.png" 
    },
    { 
      name: "Global Strategy Hub", 
      desc: "Consulting & Executive Spaces • Tokyo", 
      img: "/luxury_executive_boardroom_1777040676690.png" 
    },
    { 
      name: "The Heritage Library", 
      desc: "Private Estates & Rare Interiors • Oxford", 
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
      name: "L'Éclat Culinary Atelier", 
      desc: "Hospitality & Michelin-Star Setup • Paris", 
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
      name: "The Serene Sanctuary", 
      desc: "Wellness Architecture & Spas • Bali", 
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
      name: "Azure Cliffside Villa", 
      desc: "Architectural Excellence • Santorini", 
      img: "/modern_glass_villa_cliffside_1777038945271.png" 
    },
    { 
      name: "Dune Mirage Palace", 
      desc: "Hospitality & Iconic Development • Abu Dhabi", 
      img: "/futuristic_desert_palace_1777038998296.png" 
    }
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
          id: "horizontal-scroll",
          trigger: containerRef.current,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${scrollWrapperRef.current ? scrollWrapperRef.current.scrollWidth - window.innerWidth : 2000}`,
          invalidateOnRefresh: true,
        },
      });

      // Parallax effect on images
      gsap.utils.toArray(".project-img").forEach((img: any) => {
        gsap.to(img, {
          x: -100,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            containerAnimation: gsap.getById("horizontal-scroll"), // Note: this requires a specific setup, but simplified here
            start: "left right",
            end: "right left",
            scrub: true
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section 
      id="portfolio"
      ref={containerRef} 
      className="relative w-full h-screen bg-navy text-white overflow-hidden flex flex-col justify-center border-t border-[rgba(201,169,98,0.1)]"
    >
      <div className="absolute top-28 md:top-24 left-8 md:left-24 z-10 w-full mb-12">
        <h2 className="text-4xl md:text-6xl font-serif mb-2 text-gradient-gold tracking-tight">The Global Hall of Legends</h2>
        <p className="font-sans text-gray-400 uppercase tracking-[0.3em] text-xs">Curated Excellence Across Continents</p>
      </div>

      <div 
        ref={scrollWrapperRef} 
        className="flex w-full md:w-max items-center h-[70vh] px-8 md:px-24 gap-8 md:gap-16 mt-20 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide z-20 relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className="w-[85vw] md:w-[65vw] h-[55vh] md:h-[60vh] flex-shrink-0 snap-center flex flex-col justify-end p-10 glass-panel rounded-3xl relative overflow-hidden group transition-all duration-700 hover:shadow-[0_0_50px_rgba(201,169,98,0.15)]"
          >
            {/* Background Image Container with Parallax Simulation */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <Image 
                src={proj.img} 
                alt={proj.name} 
                fill
                sizes="(max-width: 768px) 90vw, 70vw"
                className="project-img object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60" 
                priority={i < 2}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,1)] via-[rgba(10,22,40,0.3)] to-transparent z-10" />

            <div className="relative z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] uppercase tracking-widest text-gold mb-4 backdrop-blur-sm">
                Project 0{i + 1}
              </span>
              <h3 className="text-3xl md:text-5xl font-serif mb-3 tracking-wide">{proj.name}</h3>
              <p className="font-sans text-gray-400 uppercase tracking-widest text-xs md:text-sm">
                {proj.desc}
              </p>
            </div>
            
            {/* Subtle interactive line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-700 ease-out z-30" />
            
            {/* Overlay for depth */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl z-40 pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 hidden md:flex">
         <div className="w-12 h-[1px] bg-gold/30" />
         <span className="text-[10px] uppercase tracking-[0.5em] text-gold/50">Scroll to Explore</span>
         <div className="w-12 h-[1px] bg-gold/30" />
      </div>
    </section>
  );
}
