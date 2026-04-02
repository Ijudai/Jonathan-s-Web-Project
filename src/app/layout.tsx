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
  title: "Luxora Dynamix | Premium Hospitality Consulting Africa",
  description: "Transforming restaurants, lounges, and clubs into high-performing, world-class destinations. Expert menu engineering, staff recruitment, and operational systems.",
  keywords: ["Hospitality Consulting Africa", "Restaurant Management Systems", "Menu Engineering", "Staff Recruitment Nigeria", "B2B Hospitality Strategy Abuja", "Franchise Development Kaduna"],
  openGraph: {
    title: "Luxora Dynamix | Premium Hospitality Consulting Africa",
    description: "Transforming restaurants, lounges, and clubs into high-performing destinations in Africa.",
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
    title: "Luxora Dynamix | Premium Hospitality Consulting",
    description: "Expert menu engineering, staff recruitment, and operational systems.",
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
    "@type": "ConsultingBusiness",
    "name": "Luxora Dynamix",
    "description": "Premium B2B Hospitality Consulting in Africa, specializing in Concept Development, Operational Structuring, Menu Engineering, and Staff Training.",
    "url": "https://luxoradynamix.com",
    "logo": "https://luxoradynamix.com/luxora-crown.png",
    "telephone": "+2348000000000",
    "email": "contact@luxoradynamix.com",
    "areaServed": ["Abuja", "Kaduna", "Nigeria", "Africa"],
    "knowsAbout": ["Restaurant Operations", "Menu Engineering", "Hospitality Training", "Business Strategy", "Franchise Development"]
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
