'use client'

import imgCEO from "../../public/img/photo-dg.jpg"
import { motion } from "framer-motion"
import { animSlideInLeft, animSlideInRight, animFadeOut, animPopIn } from "../../lib/animations/Variants"

import Image from "next/image"

function AboutCEO() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <motion.div
                        variants={animPopIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image 
                        src={imgCEO} 
                        className="rounded-full object-cover h-100 w-100"
                        alt="Directeur Général" />
                    </motion.div>

                </div>
                <motion.div
                    variants={animFadeOut}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div>
                        <h2 className="text-2xl font-bold text-blue-900">Le mot du dirigeant</h2>
                        <p className="mt-4 text-gray-700">
                            « Chez ITA, nous croyons que l’électrotechnique est un levier stratégique pour la croissance
                            et la compétitivité des entreprises africaines. Notre mission est d’apporter des solutions fiables,
                            performantes et adaptées aux besoins spécifiques de chaque client. »
                        </p>
                        <p className="mt-6 font-semibold text-gray-900">Koffi AMAN</p>
                        <p className="text-sm text-gray-600">Directeur Général</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutCEO