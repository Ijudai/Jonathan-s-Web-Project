"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";

const ThreeDBackground = dynamic(() => import("./3DBackground"), {
  ssr: false,
});


export default function Hero() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(
      subRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );

    // Apply shimmer effect to heading
    gsap.to(".shimmer", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="home" className="relative w-full h-[100dvh] overflow-hidden bg-navy flex flex-col items-center justify-center">
      {/* 3D Background */}
      <ThreeDBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Crown Logo Materializing */}
        <div ref={logoRef} className="mb-8 relative w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_15px_rgba(201,169,98,0.6)]">
          <Image
            src="/luxora-crown.png"
            alt="Luxora Dynamix Crown"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-contain"
            priority
          />
        </div>

        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-gradient-gold mb-6 shimmer"
          style={{
            backgroundSize: "200% auto",
          }}
        >
          Elevating Industry Standards
        </h1>
        
        <p ref={subRef} className="text-lg md:text-xl text-gray-300 font-sans max-w-2xl">
          A multi-faceted powerhouse specializing in General Contracting, Consulting, Supply Chain, and Hospitality. Delivering over 100+ years of combined expertise.
        </p>
      </div>

      <div className="absolute bottom-10 z-10 animate-bounce cursor-pointer royal-interactive">
        <div className="w-8 h-12 rounded-full border-2 border-gold flex justify-center p-1">
          <div className="w-1 h-3 bg-gold rounded-full bg-opacity-80" />
        </div>
      </div>
    </section>
  );
}
