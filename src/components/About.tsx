import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white mb-8"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-300 mb-6"
      >
        Cyberlux Corporation<br />
        Delivering advanced technology solutions for military, government, and commercial applications since 2000.<br />
        Trusted by global defense partners for innovation, quality, and mission-critical performance.
      </motion.p>
    </div>
  </section>
);

export default About;