'use client'

import { motion } from "framer-motion"
import { animZoomIn } from "../../lib/animations/Variants"
import Link from "next/link"

function CallToActionServices() {
    return (
        <section className="bg-blue-600 py-16 text-center text-blue-50">
            <motion.div
                variants={animZoomIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="text-3xl font-bold">
                    Besoin d’un service électrotechnique ?
                </h2>
                <p className="mt-3">
                    <h3>Ivoire Technologie Appliquée est à votre service !</h3>
                    Contactez notre équipe d’experts pour une étude personnalisée de vos besoins en électrotechnique, automatisation, maintenance industrielle et solutions industrielles.
                </p>
                <Link
                    href="/contact"
                    className="mt-6 inline-block bg-blue-50 text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100"
                >
                    Nous contacter
                </Link>
            </motion.div>
        </section>
    )
}

export default CallToActionServices