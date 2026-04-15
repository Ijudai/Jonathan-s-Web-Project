"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Crown, Phone, Mail } from "lucide-react";

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
    <section id="contact" className="relative w-full min-h-screen bg-navy flex items-center justify-center p-4 py-24">
      
      <div className="w-full max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Strategic Partnership</h2>
          <p className="text-gold font-sans tracking-widest uppercase text-sm mb-12">Transform Your Brand</p>

          <p className="text-gray-300 font-sans text-lg mb-10 max-w-md">
            Reach out to our experts to discuss how Luxora Dynamix can elevate your establishment to world-class standards.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-[rgba(201,169,98,0.1)]">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-sans mb-1">Direct Lines</p>
                <p className="text-white font-sans text-lg">+234 802 741 7453</p>
                <p className="text-white font-sans text-lg">+234 814 505 9511</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-[rgba(201,169,98,0.1)]">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-sans mb-1">Email</p>
                <p className="text-white font-sans text-lg">luxoradynamix@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div ref={formRef} className={`glass-panel p-8 md:p-10 rounded-3xl ${submitted ? 'pointer-events-none' : ''}`}>
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
                placeholder="Describe your business needs..." 
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
            <p className="mt-6 text-white text-xl font-serif drop-shadow-md text-center bg-navy/80 p-4 rounded-xl border border-gold/30">
              Your inquiry has been received.<br/>Our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
