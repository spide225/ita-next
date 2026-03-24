'use client'

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

const contactItems = [
  {
    icon: <Phone size={32} />,
    title: "Téléphone",
    info: "+225 07 07 33 28 71",
  },
  {
    icon: <Mail size={32} />,
    title: "Email",
    info: "contact@ita-ci.ci",
  },
  {
    icon: <MapPin size={32} />,
    title: "Adresse",
    info: "Yopougon, Abidjan",
  },
  {
    icon: <Clock size={32} />,
    title: "Horaires",
    info: "Lun – Ven, 08h – 18h",
  },
]

function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 text-center">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-blue-600 flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.info}</p>
        </motion.div>
      ))}
    </section>
  )
}

export default ContactSection
