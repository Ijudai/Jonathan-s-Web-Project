"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, HardHat, Truck, Utensils } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    let mm = gsap.matchMedia();

    // Desktop Animation (complex 3D timeline with pinning)
    mm.add("(min-width: 768px)", () => {
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
          tl.fromTo(
            card,
            { z: -1000, scale: 0.2, opacity: 0, y: 200 },
            { z: 0, scale: 1, opacity: 1, y: 0, ease: "power2.out", duration: 1 },
            index * 0.5
          ).to(
            card,
            { y: index % 2 === 0 ? -100 : -50, duration: 1 },
            ">"
          );
        }
      });
    });

    // Mobile Animation (smooth seamless flow, no pinning)
    mm.add("(max-width: 767px)", () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const services = [
    {
      title: "General Contracting",
      icon: <HardHat size={40} className="text-gold mb-3" />,
      desc: "Delivering end-to-end infrastructure, construction, and developmental projects with unyielding precision and quality.",
    },
    {
      title: "Consulting",
      icon: <Briefcase size={40} className="text-gold mb-3" />,
      desc: "Providing strategic advisory, operational blueprints, and comprehensive roadmaps to drive business growth.",
    },
    {
      title: "Supply Chain",
      icon: <Truck size={40} className="text-gold mb-3" />,
      desc: "Optimizing procurement, logistics, and resource management to ensure seamless, scalable operations globally.",
    },
    {
      title: "Hospitality",
      icon: <Utensils size={40} className="text-gold mb-3" />,
      desc: "Transforming venues through culinary development, impeccable ambience, and world-class operational mastery.",
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
          Our Four Pillars
        </p>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-32">
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
