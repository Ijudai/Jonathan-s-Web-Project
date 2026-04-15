import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxora Dynamix | General Contracting, Consulting, Supply Chain & Hospitality",
  description: "A multi-faceted powerhouse specializing in General Contracting, Consulting, Supply Chain, and Hospitality across Africa.",
  keywords: ["General Contracting Africa", "Business Consulting", "Supply Chain Optimization", "Hospitality Management", "Restaurant Management Systems", "Business Strategy Abuja"],
  openGraph: {
    title: "Luxora Dynamix | Multi-Faceted Industry Experts",
    description: "Transforming operations across General Contracting, Consulting, Supply Chain, and Hospitality into high-performing enterprises in Africa.",
    url: "https://luxoradynamix.com",
    siteName: "Luxora Dynamix",
    images: [
      {
        url: "/luxora-og.jpg",
        width: 1200,
        height: 630,
        alt: "Luxora Dynamix Presentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxora Dynamix | Industry Excellence",
    description: "Expert General Contracting, Consulting, Supply Chain, and Hospitality services.",
    images: ["/luxora-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Luxora Dynamix",
    "description": "Premium B2B services in Africa, specializing in General Contracting, Consulting, Supply Chain, and Hospitality.",
    "url": "https://luxoradynamix.com",
    "logo": "https://luxoradynamix.com/luxora-crown.png",
    "telephone": ["+2348027417453", "+2348145059511"],
    "email": "luxoradynamix@gmail.com",
    "areaServed": ["Abuja", "Kaduna", "Nigeria", "Africa"],
    "knowsAbout": ["General Contracting", "Business Consulting", "Supply Chain", "Hospitality Management", "Business Strategy", "Franchise Development"]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white selection:bg-gold selection:text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
