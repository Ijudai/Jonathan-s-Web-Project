import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";
import Services from "@/components/Services";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy w-full relative">
      <CustomCursor />
      <Hero />
      <Services />
      <PortfolioGallery />
      <ContactForm />
    </main>
  );
}
