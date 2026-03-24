import CallToActionServices from "../../components/services/CallToActionServices"
import MainServices from "../../components/services/MainServices"
import ServicesIntro from "../../components/services/ServicesIntro"
import WhyUs from "../../components/services/WhyUs"

export const metadata = {
  title: "Services de maintenance industrielle et électrotechnique - ITA",
  description:
    "Nos services : maintenance industrielle préventive et corrective, installation de lignes et machines, interventions électrotechniques et rébobinage de moteurs électriques.",
  openGraph: {
    title: "Services de maintenance industrielle et électrotechnique - ITA",
    description:
      "Des solutions techniques complètes pour vos équipements industriels.",
    url: "https://www.ita-ci.com/services",
    images: ["/img/home-banner-2.png"],
  },
};


function Services(){
    return(
        <div>
            {/* Services Intro */}
            <ServicesIntro/>

            {/* Services Principaux */}
            <MainServices/>

            {/* Pourquoi Nous ? */}
            <WhyUs/>

            {/* Call To Action */}
            <CallToActionServices/>
        </div>
    )
}

export default Services