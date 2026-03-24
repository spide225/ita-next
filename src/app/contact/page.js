import ContactForm from "../../components/contact/ContactForm"
import ContactHero from "../../components/contact/ContactHero"
import ContactInfo from "../../components/contact/ContactInfo"
import Location from "../../components/contact/Location"


export const metadata = {
  title: "Contactez ITA - Assistance industrielle",
  description:
    "Contactez ITA pour vos besoins en maintenance industrielle, installation d’équipements et interventions électrotechniques.",
  openGraph: {
    title: "Contactez ITA - Assistance industrielle",
    description:
      "Notre équipe est disponible pour vos projets et urgences techniques.",
    url: "https://www.ita-ci.com/contact",
    images: ["/img/photo-dg.jpg"],
  },
};


function Contact(){
    return(
        <div>
            {/* Contact Hero */}
            <ContactHero/>

            {/* Coordonnées */}
            <ContactInfo/>

            {/* Formulaires */}
            <ContactForm/>

            {/* Localisation */}
            <Location/>
        </div>
    )
}

export default Contact