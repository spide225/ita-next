import ProjectsGrid from "../../components/projects/ProjectsGrid"
import ProjectsIntro from "../../components/projects/ProjectsIntro"
import Testimonials from "../../components/projects/Testimonials"


export const metadata = {
  title: "Réalisations industrielles - ITA",
  description:
    "Projets et réalisations d’ITA en maintenance industrielle, électrotechnique et installation d’équipements.",
  openGraph: {
    title: "Réalisations industrielles - ITA",
    description:
      "Découvrez nos interventions et installations en milieu industriel.",
    url: "https://www.ita-ci.com/projects",
    images: ["/img/home-banner-2.png"],
  },
};


function Projects(){
    return(
        <div>
            {/* Projects Hero */}
            <ProjectsIntro/>

            {/* Projects Grid */}
            <ProjectsGrid/>

            {/* Testimonials */}
            <Testimonials/>
        </div>
    )
}

export default Projects