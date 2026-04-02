import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-navy/80 backdrop-blur-md border-b border-[rgba(201,169,98,0.2)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif text-gold tracking-widest uppercase royal-interactive">
              Luxora Dynamix
            </Link>
          </div>
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
        </div>
      </div>
    </nav>
  );
}
