"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-navy/80 backdrop-blur-md border-b border-[rgba(201,169,98,0.2)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-serif text-gold tracking-widest uppercase royal-interactive">
              Luxora Dynamix
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase royal-interactive">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase royal-interactive">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase royal-interactive">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gold focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open State */}
      {isOpen && (
        <div className="md:hidden bg-navy border-b border-[rgba(201,169,98,0.2)] pb-4">
          <div className="flex flex-col space-y-4 px-4 pt-4">
            <Link 
              href="#services" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase border-b border-[rgba(255,255,255,0.05)] pb-2"
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase border-b border-[rgba(255,255,255,0.05)] pb-2"
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase pb-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
