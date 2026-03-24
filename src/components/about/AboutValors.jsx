'use client'

import { motion } from "framer-motion"
import { animPopIn } from "../../lib/animations/Variants"


const Valors = [
    {
        title: "Innovation",
        desc: "Toujours proposer des solutions modernes et adaptées aux défis techniques."
    },
    {
        title: "Fiabilité",
        desc: "Offrir un haut niveau de qualité et garantir la sécurité des installations."
    },
    {
        title: "Proximité",
        desc: "Être proche des clients et à l’écoute de leurs besoins spécifiques."
    },
]

function AboutValors() {
    return (
        <section className="mx-auto px-4 py-16 bg-white flex flex-col items-center">
            <div className="max-w-7xl">
                <h2 className="text-2xl font-bold text-blue-900 text-center">Nos valeurs</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {
                        Valors.map((valor) => (
                            <motion.div
                                variants={animPopIn}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <div className="bg-white rounded-xl shadow-md p-6 text-center border-blue-900 h-full" key={valor.title}>
                                    <h3 className="text-xl font-semibold text-blue-900">{valor.title}</h3>
                                    <p className="mt-2 text-gray-600 text-sm">{valor.desc}</p>
                                </div>
                            </motion.div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutValors