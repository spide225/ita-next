'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import {animFadeOut, animZoomIn, animZoomOut} from "../../lib/animations/Variants"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    // ici tu pourras faire un fetch POST vers ton API Django si besoin
  };

  return (
    <section className="bg-gray-50 py-16">
      <motion.div
      variants={animZoomOut}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
      >
<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-blue-900">Écrivez-nous</h2>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
        </p>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Sujet
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
      </motion.div>
      
    </section>
  );
}

export default ContactForm