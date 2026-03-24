'use client'

import { Bolt, Wrench, Cpu, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const mainServices = [
  {
    icon: <Bolt className="h-12 w-12 text-yellow-500 mb-4" />,
    title: "Ingénierie Électrotechnique",
    desc: "Études, conception et installation de systèmes électrotechniques pour sites industriels, tertiaires et infrastructures.",
    subServices: [
      "Conception de schémas électriques",
      "Installation de réseaux électriques",
      "Mise en conformité des installations",
    ],
  },
  {
    icon: <Wrench className="h-12 w-12 text-gray-700 mb-4" />,
    title: "Maintenance Industrielle",
    desc: "Des solutions de maintenance préventive et curative pour garantir la fiabilité et la longévité de vos équipements.",
    subServices: [
      "Diagnostic et audit technique",
      "Maintenance corrective",
      "Programmes de maintenance préventive",
    ],
  },
  {
    icon: <Cpu className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Automatisation",
    desc: "Mise en place de solutions automatisées pour améliorer la productivité, réduire les coûts et sécuriser vos processus.",
    subServices: [
      "Automatisation de lignes de production",
      "Programmation d’automates",
      "Supervision et contrôle à distance",
    ],
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-amber-500 mb-4" />,
    title: "Conseil & Assistance",
    desc: "Accompagnement personnalisé pour vos projets électrotechniques et vos choix technologiques.",
    subServices: [
      "Études de faisabilité",
      "Optimisation énergétique",
      "Assistance à la mise en service",
    ],
  },
]

function MainServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      {mainServices.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {service.icon}
          <h2 className="text-xl font-semibold text-blue-900">{service.title}</h2>
          <p className="mt-2 text-gray-700">{service.desc}</p>
          <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
            {service.subServices.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  )
}

export default MainServices
