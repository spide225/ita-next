'use client'

import { motion } from "framer-motion"
import { animFadeOut } from "../../lib/animations/Variants"

function ServicesIntro() {
    return (
        <section className="px-4 py-16 text-center bg-gray-50">
            <motion.div
                variants={animFadeOut}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900">Nos Services</h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        <strong>Ivoire Technologie Appliquée</strong> met à votre disposition son expertise en électrotechnique pour concevoir, installer,
                        entretenir et automatiser vos systèmes industriels. Nos solutions sont adaptées aux besoins
                        spécifiques de chaque client, avec un haut niveau d’exigence et de fiabilité.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default ServicesIntro