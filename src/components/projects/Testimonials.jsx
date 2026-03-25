'use client'

import { motion } from "framer-motion"

const testimonials = [
  {
    text: "Ivoire Technologie Appliquée (ITA) nous a accompagnés dans la modernisation de notre ligne de production. Résultat : notre productivité s'est accrue.",
    author: "— Directeur d’usine",
    enterprise: ""
  },
  {
    text: "Une équipe professionnelle, réactive et à l’écoute. ITA a parfaitement répondu à nos besoins, tant en maintenance qu'en nouveau projet. Je recommande sans hésiter.",
    author: "— Responsable technique",
    enterprise: ""
  },
  {
    text: "Grâce à la maintenance préventive de Ivoire Technologie Appliquée (ITA), nos équipements tournent sans interruption depuis 18 mois.",
    author: "— Chef de production",
    enterprise: ""
  },
]

function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h2
          className="text-3xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nos clients industriels et entreprises nous ont fait confiance :
        </motion.p>

        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">"{t.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.author}</h4>
              <h4 className="mt-4 font-semibold text-gray-900">{t.enterprise}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials