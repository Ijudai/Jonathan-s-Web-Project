"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Crown } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Golden stamp animation
    if (!sealRef.current || !formRef.current) return;

    gsap.to(formRef.current, {
      opacity: 0.2,
      scale: 0.95,
      filter: "blur(4px)",
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      sealRef.current,
      { scale: 5, opacity: 0, rotation: -45 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.3 }
    );
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-navy flex items-center justify-center p-4 py-20">
      
      <div className="w-full max-w-2xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Strategic Partnership</h2>
        <p className="text-gold font-sans tracking-widest uppercase text-sm mb-12">Transform Your Brand</p>

        <div className="relative">
          {/* Form */}
          <div ref={formRef} className={`glass-panel p-8 md:p-12 rounded-3xl ${submitted ? 'pointer-events-none' : ''}`}>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(201,169,98,0.3)] rounded-lg p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(201,169,98,0.3)] rounded-lg p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                />
              </div>
              
              <input 
                type="text" 
                placeholder="Business / Establishment Name" 
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(201,169,98,0.3)] rounded-lg p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans"
              />

              <textarea 
                placeholder="Describe your hospitality business needs..." 
                rows={4}
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(201,169,98,0.3)] rounded-lg p-4 text-white focus:outline-none focus:border-gold transition-colors font-sans resize-none"
              />

              <button 
                type="submit"
                className="mt-4 w-full royal-interactive bg-gold text-navy font-bold text-lg py-4 rounded-lg uppercase tracking-widest hover:bg-[#e8d096] transition-colors shadow-[0_0_20px_rgba(201,169,98,0.4)]"
              >
                Request Consultation
              </button>
            </form>
          </div>

          {/* Golden Seal (Hidden initially) */}
          <div 
            ref={sealRef} 
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-20"
          >
            <div className="w-32 h-32 bg-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(201,169,98,0.8)] border-4 border-[#8B6914]">
              <Crown className="text-navy w-12 h-12 mb-1" />
              <span className="text-navy font-serif font-bold text-sm tracking-widest">RECEIVED</span>
            </div>
            <p className="mt-6 text-white text-xl font-serif drop-shadow-md">
              Your inquiry has been received. Our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
