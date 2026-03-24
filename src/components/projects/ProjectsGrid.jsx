'use client'

import { motion } from "framer-motion"


const projects = [
  {
    title: "Installation d’une ligne de production automatisée",
    desc: "Mise en place d’un système automatisé pour optimiser la production agro-industrielle.",
    img: "/img/projet1.jpg", // tu peux remplacer par ton chemin réel
    link: "#",
  },
  {
    title: "Modernisation d’équipements électriques",
    desc: "Remplacement et mise aux normes des installations électriques pour un site industriel.",
    img: "/img/projet2.jpg",
    link: "#",
  },
  {
    title: "Maintenance préventive",
    desc: "Contrats de maintenance régulière pour réduire les pannes et améliorer la durabilité des équipements.",
    img: "/img/projet3.jpg",
    link: "#",
  },
]

function ProjectsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">


{projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image du projet */}
            <div className="h-48 bg-gray-200">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-900">{project.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{project.desc}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Voir plus
              </a>
            </div>
          </motion.div>
        ))}

            </div>
        </section>
    )
}

export default ProjectsGrid