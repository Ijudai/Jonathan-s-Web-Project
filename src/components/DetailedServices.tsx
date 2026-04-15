"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, BookOpen, Wine, ChefHat, Users, Settings, Rocket, TrendingUp } from "lucide-react";

export default function DetailedServices() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const sections = itemsRef.current.filter(Boolean);

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: (index % 4) * 0.15, // Stagger rows
        }
      );
    });

  }, { scope: containerRef });

  const specificServices = [
    { title: "Concept Development & Setup", icon: <Lightbulb size={32} className="text-gold" /> },
    { title: "Menu Engineering & Development", icon: <BookOpen size={32} className="text-gold" /> },
    { title: "Bar Setup & Mixology Services", icon: <Wine size={32} className="text-gold" /> },
    { title: "Kitchen & Culinary Operations", icon: <ChefHat size={32} className="text-gold" /> },
    { title: "Staff Recruitment & Training", icon: <Users size={32} className="text-gold" /> },
    { title: "Operations & Management Systems", icon: <Settings size={32} className="text-gold" /> },
    { title: "Restaurant, Lounge & Club Launch Support", icon: <Rocket size={32} className="text-gold" /> },
    { title: "Consulting & Business Growth Strategy", icon: <TrendingUp size={32} className="text-gold" /> },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 bg-[#03070b]" // slightly darker/different shade to separate from 050b14
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#C9A962 1px, transparent 1px), linear-gradient(90deg, #C9A962 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Hospitality Offerings
          </h2>
          <p className="text-gold font-sans tracking-widest uppercase text-sm">
            Specialized Executions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specificServices.map((service, i) => (
            <div 
              key={i}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:border-[rgba(201,169,98,0.5)] transition-all duration-300 transform hover:-translate-y-2 [transform-style:preserve-3d]"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(201,169,98,0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-white font-serif text-lg leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
