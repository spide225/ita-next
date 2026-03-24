'use client'

import { motion } from "framer-motion"
import { animZoomIn, animRotateScale } from "../../lib/animations/Variants"

function CallToAction() {
    return (
        <section className="bg-blue-600 py-16 text-center text-white">
        <motion.div
            variants={animZoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            
                <h2 className="text-3xl font-bold">Un projet électrotechnique en vue ?</h2>
                <p className="mt-3">Contactez ITA pour discuter de vos besoins et obtenir un devis personnalisé.</p>
                <motion.div
                    variants={animRotateScale}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                ></motion.div>
                <a href="{% url 'PresentationApp:contact' %}" className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">
                    Nous contacter
                </a>
            
        </motion.div>
        </section>

    )
}

export default CallToAction