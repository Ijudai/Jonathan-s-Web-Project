"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function PortfolioGallery() {
  const containerRef = useRef<HTMLElement>(null);

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

    if (!containerRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Parallax effect on images
      gsap.utils.toArray(".project-img-container").forEach((container: any) => {
        const imgWrapper = container.querySelector(".project-img-wrapper");
        if (imgWrapper) {
          gsap.to(imgWrapper, {
            y: 60,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });
      
      // Reveal animations for text
      gsap.utils.toArray(".project-info").forEach((info: any) => {
         gsap.from(info, {
           y: 30,
           opacity: 0,
           duration: 1,
           scrollTrigger: {
             trigger: info,
             start: "top 90%",
             toggleActions: "play none none reverse"
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
      className="relative w-full min-h-screen bg-navy text-white flex flex-col border-t border-[rgba(201,169,98,0.1)] py-24 md:py-32"
    >
      <div className="w-full px-4 md:px-24 mb-20 md:mb-32">
        <h2 className="text-4xl md:text-6xl font-serif mb-2 text-gradient-gold tracking-tight">The Global Hall of Legends</h2>
        <p className="font-sans text-gray-400 uppercase tracking-[0.3em] text-xs">Curated Excellence Across Continents</p>
      </div>

      <div 
        className="flex flex-col w-full items-center px-4 md:px-24 gap-20 md:gap-32 z-30 relative pb-10"
      >
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className="w-full md:w-[85vw] flex flex-col group"
          >
            {/* Image Container */}
            <div className="project-img-container w-full h-[55vh] md:h-[75vh] relative overflow-hidden rounded-3xl glass-panel transition-all duration-700 hover:shadow-[0_0_50px_rgba(201,169,98,0.15)] mb-8">
              <div className="project-img-wrapper absolute top-[-30px] left-0 w-full h-[calc(100%+60px)]">
                <Image 
                  src={proj.img} 
                  alt={proj.name} 
                  fill
                  sizes="(max-width: 768px) 95vw, 85vw"
                  className="project-img object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-90 hover:opacity-100" 
                  priority={i < 2}
                  style={{ objectPosition: 'center' }}
                />
              </div>
              {/* Optional overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.4)] to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-white/5 rounded-3xl z-40 pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
            </div>
            
            {/* Title and Description Under the Card */}
            <div className="project-info flex flex-col md:flex-row justify-between items-start md:items-end px-2">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] uppercase tracking-widest text-gold mb-4 backdrop-blur-sm">
                  Project 0{i + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif tracking-wide text-white transition-colors duration-500 group-hover:text-gold/90">{proj.name}</h3>
              </div>
              <p className="font-sans text-gray-400 uppercase tracking-widest text-xs md:text-sm mt-4 md:mt-0 md:max-w-[40%] text-left md:text-right">
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

