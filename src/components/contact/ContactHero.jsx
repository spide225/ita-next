'use client'

import { motion } from "framer-motion"
import { animFadeOut } from "../../lib/animations/Variants"

function ContactHero() {
    return (
        <section className="bg-blue-600 text-blue-50 py-16 text-center">
            <motion.div
                variants={animFadeOut}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <h1 className="text-4xl font-bold">
                    Restons en contact
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Vous avez un projet en électrotechnique, une question sur nos services industriels, ou un besoin spécifique ?<br/>  
                    <strong>Ivoire Technologie Appliquée (ITA)</strong> est à votre disposition pour vous accompagner dans vos projets d’ingénierie, d’automatisation et de maintenance industrielle.
                </p>
            </motion.div>
        </section>
    )
}

export default ContactHero