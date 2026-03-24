import AboutCEO from "../../components/about/AboutCEO"
import AboutEnterprise from "../../components/about/AboutEnterprise"
import AboutValors from "../../components/about/AboutValors"
import CallToActionAbout from "../../components/about/CallToActionAbout"
import FewProjects from "../../components/about/FewProjects"

export const metadata = {
  title: "À propos de ITA - Expertise en maintenance industrielle",
  description:
    "Découvrez ITA, entreprise spécialisée en maintenance industrielle, électrotechnique et installation d’équipements industriels.",
  openGraph: {
    title: "À propos de ITA - Expertise en maintenance industrielle",
    description:
      "ITA accompagne les industriels avec des solutions techniques fiables et durables.",
    url: "https://www.ita-ci.com/about",
    images: ["/img/photo-dg.jpg"],
  },
};

function About(){
    return(
        <div>
            {/* Presentation Entreprise */}
            <AboutEnterprise/>

            {/* Presentation DG */}
            <AboutCEO/>

            {/* Valeurs */}
            <AboutValors/>

            {/* Quelques réalisations */}
            <FewProjects/>

            {/* Call To Action About */}
            <CallToActionAbout/>
        </div>
    )
}

export default About