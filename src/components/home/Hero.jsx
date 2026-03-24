'use client'

import banner from "../../public/img/home-banner-2.png"
import Image from "next/image";
import Link from "next/link"
import { motion,  } from "framer-motion";
import { animFadeInUp } from "../../lib/animations/Variants";

function Hero() {
  return (
    <motion.div
      variants={animFadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <section
        className="
        relative bg-gray-100 bg-cover bg-center h w-full md:text-left"
        style={{ backgroundImage: `url(${banner})` }}

      >
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold md:text-5xl text-blue-900 text-shadow-xl">
              Solutions Électro-techniques Fiables
            </h1>
            <p className="mt-4 text-lg text-gray-700 font-semibold">
              ITA accompagne les entreprises dans leurs projets d’ingénierie électrotechnique,
              de maintenance industrielle et d’automatisation.
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
