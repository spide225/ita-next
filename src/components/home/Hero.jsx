'use client'

import Link from "next/link"
import banner from "../../public/img/home-main-banner.png"
import { motion } from "framer-motion";
import { animFadeInUp } from "../../lib/animations/Variants";
import Image from "next/image";

function Hero() {
  return (
    <motion.div
      variants={animFadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <section className="relative bg-cover bg-center w-full min-h-screen flex items-center md:text-left">
        <Image
          src={banner}
          fill
          alt="Ivoire Technologie Appliquée ITA – Solutions électrotechniques et industrielles"
          className="object-cover -z-10"
          priority
        />
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold md:text-5xl text-blue-900">
              Ivoire Technologie Appliquée (ITA) – Solutions Électro-techniques Fiables
            </h1>
            <p className="mt-4 text-lg text-gray-700 font-semibold">
              Nous vous accompagnons dans vos projets d’ingénierie électrotechnique, de maintenance industrielle,
              d’automatisation et de solutions technologiques avancées.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="/contact"
                className="hidden md:flex bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Hero;