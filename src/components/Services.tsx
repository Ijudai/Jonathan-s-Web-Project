"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Utensils, Palette, Cog, Users, TrendingUp, Briefcase } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Camera Ascension Background Context
    tl.to(containerRef.current, {
      backgroundSize: "150%",
      backgroundColor: "#050b14", // darker navy
      ease: "none",
    }, 0);

    // Cards flying toward the viewer
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Animation
        tl.fromTo(
          card,
          {
            z: -1000,
            scale: 0.2,
            opacity: 0,
            y: 200,
          },
          {
            z: 0,
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
          },
          index * 0.5 // Staggered appearance
        ).to(
          card,
          {
            y: index === 0 ? -100 : (index === 1 ? -50 : -100), // Slightly offset the cards
            duration: 1,
          },
          ">"
        );
      }
    });

  }, { scope: containerRef });

  const services = [
    {
      title: "Culinary Development",
      icon: <Utensils size={40} className="text-gold mb-3" />,
      desc: "5-star menus, signature cocktails, and local dishes engineered for premium appeal and profitability.",
    },
    {
      title: "Experience & Ambience",
      icon: <Palette size={40} className="text-gold mb-3" />,
      desc: "Instagram-worthy interior design and spatial flow that encourages longer stays and higher spending.",
    },
    {
      title: "Staff Recruitment",
      icon: <Users size={40} className="text-gold mb-3" />,
      desc: "Recruitment and professional training programs for chefs, service staff, and operational personnel.",
    },
    {
      title: "Operational Mastery",
      icon: <Cog size={40} className="text-gold mb-3" />,
      desc: "Bulletproof SOPs, inventory management, and structured kitchen workflows for high accountability.",
    },
    {
      title: "Marketing & Sales",
      icon: <TrendingUp size={40} className="text-gold mb-3" />,
      desc: "High-conversion sales strategies and event structures designed to drive repeat guest visits.",
    },
    {
      title: "Franchise Expansion",
      icon: <Briefcase size={40} className="text-gold mb-3" />,
      desc: "Strategic frameworks enabling hospitality brands to successfully scale into multiple locations.",
    },
  ];

  return (
    <section 
      id="services"
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden bg-navy [perspective:1000px] flex flex-col items-center justify-center py-24"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(201,169,98,0.05) 0%, rgba(10,22,40,1) 80%)",
        backgroundSize: "100%"
      }}
    >
      <div className="absolute top-24 text-center w-full z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 royal-interactive">
          Core Proficiencies
        </h2>
        <p className="text-gold font-sans tracking-widest uppercase text-sm">
          Pillars of Hospitality
        </p>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-32">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="glass-panel p-8 rounded-2xl w-full text-center flex flex-col items-center royal-interactive [transform-style:preserve-3d] shadow-2xl hover:border-gold transition-colors duration-500"
          >
            {service.icon}
            <h3 className="text-xl font-serif text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 font-sans leading-relaxed text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
