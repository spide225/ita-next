'use client'

import { motion } from "framer-motion"
import { animSlideInRight } from "../../lib/animations/Variants"

function AboutEnterprise() {
    return (
        <motion.div
            variants={animSlideInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold text-blue-900 text-center">À propos d’ITA</h1>
                <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Ivoire Technologie Appliquée (ITA) est une société spécialisée en ingénierie électrotechnique,
                    maintenance industrielle et automatisation. Nous accompagnons les entreprises et organisations
                    dans la conception, la réalisation et la fiabilisation de leurs projets techniques, avec un
                    savoir-faire reconnu et des solutions innovantes.
                </p>
            </section>
        </motion.div>

    )
}

export default AboutEnterprise