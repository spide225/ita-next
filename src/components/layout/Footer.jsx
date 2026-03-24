'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { animFadeInDown } from "../../lib/animations/Variants"
import { footer } from "framer-motion/client"

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
        <motion.div
            variants={animFadeInDown}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
                <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div>
                        <p className="mt-4 text-gray-300 text-sm max-w-sm">
                            Ivoire Technologie Appliquée — Ingénierie électrotechnique, maintenance industrielle et solutions
                            d’automatisation.
                        </p>
                    </div>
                    {/* Col 2 */}
                    <div>
                        <h3 className="font-semibold text-white">Liens utiles</h3>
                        <ul className="mt-3 space-y-2 text-gray-300">
                            <li>
                                <Link href="/about" className="hover:text-blue-400">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-blue-400">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-blue-400">
                                    Réalisations
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*Col 3*/}
                    <div>
                        <h3 className="font-semibold text-white">
                            Contact
                        </h3>
                        <ul className="space-y-2 mt-3 text-gray-300 text-sm">
                            <li>
                                Adresse : Wassakara Yopougon, Abidjan
                            </li>
                            <li>
                                Tél : +225 07 07 33 28 71
                            </li>
                            <li>
                                Email : <a href="mailto:contact@ita.ci" className="hover:text-blue-400">contact@ita-ci.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-400 text-sm">
                        {new Date().getFullYear()} - Ivoire Technologie Appliquée. Tous droits réservés. • <a href="#"
                            className="hover:text-blue-400">Mentions légales</a>
                    </div>
                </div>
        </motion.div>
</footer>
    )
}

export default Footer