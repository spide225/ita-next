'use client'

import { motion } from "framer-motion"
import { animZoomIn } from "../../lib/animations/Variants"

const Projects = [
    {
        title: "Installation industrielle",
        desc: "Ivoire Technologie Appliquée (ITA) a réalisé la mise en place d’un système électrique complet pour une unité de production, garantissant sécurité et performance."
    },
    {
        title: "Automatisation d’atelier",
        desc: "Déploiement de solutions automatisées par ITA pour optimiser la chaîne de production, réduire les coûts et améliorer l’efficacité industrielle."
    },
    {
        title: "Maintenance préventive",
        desc: "Programme de maintenance préventive sur équipements haute tension, assuré par Ivoire Technologie Appliquée (ITA) pour garantir fiabilité et durabilité."
    },
]

function FewProjects() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 text-center">
                    Nos Réalisations
                </h2>
                <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
                    Quelques projets réalisés par Ivoire Technologie Appliquée (ITA) avec nos clients dans le domaine de l’ingénierie électrotechnique, l’automatisation industrielle et la maintenance.
                </p>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {Projects.map((project) => (
                        <motion.div
                            variants={animZoomIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            key={project.title}
                        >
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                {/* Image projet à ajouter si disponible */}
                                <div className="p-4">
                                    <h3 className="text-lg text-center font-semibold text-gray-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{project.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FewProjects