import CallToAction from "../components/home/CallToAction"
import ClientsCarousel from "../components/home/ClientsCarousel"
import Hero from "../components/home/Hero"
import ServicesSection from "../components/home/ServicesSection"

export const metadata = {
  title: "ITA - Maintenance industrielle et solutions électrotechniques",
  description:
    "ITA est spécialisée en maintenance industrielle, installation de lignes et machines, interventions électrotechniques et rébobinage de moteurs.",
  openGraph: {
    title: "ITA - Maintenance industrielle et solutions électrotechniques",
    description:
      "Maintenance industrielle, installation d’équipements et expertise électrotechnique pour les entreprises.",
    url: "https://www.ita-ci.com/",
    images: ["/img/home-banner-2.png"],
  },
};


export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesSection />

      {/* Galerie clients */}
      <ClientsCarousel />

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
}
