"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Badge floating animation
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // List items reveal
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (mottoRef.current) {
      gsap.fromTo(
        mottoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: mottoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

  }, { scope: containerRef });

  const reasons = [
    "Over 100+ years combined team experience",
    "End-to-end hospitality solutions",
    "Luxury-focused execution",
    "Proven operational systems",
    "Hands-on project delivery",
  ];

  return (
    <section 
      id="why-us"
      ref={containerRef}
      className="relative w-full py-24 bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#03070b] to-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Why Choose <span className="text-gold">Luxora Dynamix</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-10" />

          <ul ref={listRef} className="space-y-6">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <CheckCircle2 className="text-gold flex-shrink-0" size={28} />
                <span className="text-xl text-gray-200 font-sans">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Badge & Slogan */}
        <div className="flex flex-col items-center justify-center space-y-12">
          
          <div ref={badgeRef} className="relative group">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gold rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="w-48 h-48 rounded-full border-2 border-gold flex flex-col items-center justify-center bg-[#050b14] shadow-[0_0_30px_rgba(201,169,98,0.3)] relative z-10 royal-interactive">
              <Clock className="text-gold mb-2" size={40} />
              <span className="text-4xl font-serif text-white font-bold leading-none">24/7</span>
              <span className="text-gold text-sm tracking-widest uppercase mt-1 text-center px-4">Customer<br/>Service</span>
            </div>
          </div>

          <div 
            ref={mottoRef}
            className="glass-panel p-8 rounded-2xl text-center border-l-4 border-gold shadow-2xl relative"
          >
            <span className="absolute -top-6 -left-4 text-6xl text-[rgba(201,169,98,0.2)] font-serif">"</span>
            <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed">
              Where Luxury meets structure, Experience & Excellence
            </p>
            <span className="absolute -bottom-10 -right-4 text-6xl text-[rgba(201,169,98,0.2)] font-serif">"</span>
          </div>

        </div>
      </div>
    </section>
  );
}
