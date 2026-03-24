'use client'

import { animZoomIn } from "../../lib/animations/Variants"
import { motion } from "framer-motion"

function ProjectsIntro() {
    return (
        <section className="bg-blue-600 text-blue-50 py-16 text-center">
            <motion.div
                variants={animZoomIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <h1 className="text-4xl font-bold">Nos Projets</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Découvrez quelques-unes de nos réalisations en électrotechnique, automatisation et maintenance industrielle.
                </p>
            </motion.div>

        </section>
    )
}

export default ProjectsIntro