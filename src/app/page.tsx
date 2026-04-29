import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";

// Dynamically import below-the-fold components to reduce initial JS bundle
const Services = dynamic(() => import("@/components/Services"));
const DetailedServices = dynamic(() => import("@/components/DetailedServices"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const PortfolioGallery = dynamic(() => import("@/components/PortfolioGallery"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

export default function Home() {
  return (
    <main className="min-h-screen bg-navy w-full relative">
      <CustomCursor />
      <Hero />
      <Services />
      <DetailedServices />
      <WhyChooseUs />
      <PortfolioGallery />
      <ContactForm />
    </main>
  );
}
