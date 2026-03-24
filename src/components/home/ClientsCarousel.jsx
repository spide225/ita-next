'use client'

import camaye from "../../public/img/logo-clients/camaye.png"
import centralIndustrie from "../../public/img/logo-clients/central-industrie.png"
import ciCereales from "../../public/img/logo-clients/ci-cereales.png"
import diakiteCocoa from "../../public/img/logo-clients/diakite-cocoa.png"
import lePecheur from "../../public/img/logo-clients/le-pecheur.png"
import lmci from "../../public/img/logo-clients/lmci.png"
import nardiCafe from "../../public/img/logo-clients/nardi-cafe.png"
import premont from "../../public/img/logo-clients/premont.png"
import sicocoa from "../../public/img/logo-clients/sicocoa.png"
import tuna from "../../public/img/logo-clients/tuna-poissonnerie.png"
import uInter from "../../public/img/logo-clients/u-inter-cc-ci.png"
import giz from "../../public/img/logo-clients/giz.png"

import { motion } from "framer-motion"
import Image from "next/image"

function ClientsCarousel() {
  const clients = [
    { name: "CAMAYE", logo: camaye },
    { name: "CENTRAL INDUSTRIE", logo: centralIndustrie },
    { name: "GROUPE DOMAK - CI CEREALES", logo: ciCereales },
    { name: "DIAKITE COCOA", logo: diakiteCocoa },
    { name: "LE PECHEUR", logo: lePecheur },
    { name: "LMCI", logo: lmci },
    { name: "NARDI CAFE", logo: nardiCafe },
    { name: "PREMONT SA", logo: premont },
    { name: "SICOCOA", logo: sicocoa },
    { name: "TUNA & CO POISSONNERIE", logo: tuna },
    { name: "U.INTER.CC-CI", logo: uInter },
    { name: "GIZ", logo: giz },
  ]

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Ils nous font confiance
        </h2>

        {/* Container animé */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* on duplique les logos pour un effet fluide */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="object-contain h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsCarousel
