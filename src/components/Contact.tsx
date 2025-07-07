import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white mb-8 text-center"
      >
        Get in Touch
      </motion.h2>
      <form className="space-y-6 mb-10">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Name</label>
          <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-4CAF50" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
          <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-4CAF50" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-2">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-4CAF50" />
        </div>
        <button type="submit" className="w-full bg-4CAF50 text-black font-bold py-4 rounded-lg text-lg shadow-lg transition-all duration-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400">
          Request Quote
        </button>
      </form>
      <div className="text-center text-gray-400 text-lg space-y-2">
        <div>Address: Cyberlux Corporation, Research Triangle, NC</div>
        <div>Phone: +1 (800) 000-0000</div>
        <div>Email: info@cyberlux.com</div>
      </div>
    </div>
  </section>
);

export default Contact;