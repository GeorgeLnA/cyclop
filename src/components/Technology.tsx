import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Secure Communication',
    description: 'AES encryption, ECCM, and real-time spectrum agility built into every radio system.'
  },
  {
    title: 'Autonomous Flight',
    description: 'AI-powered drone control with Visual Inertial Odometry for precision guidance and obstacle avoidance.'
  },
  {
    title: 'Global Deployment',
    description: 'Systems deployed across 80+ countries with proven mission adaptability and reliability.'
  },
];

const Technology = () => (
  <section id="technology" className="py-24">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Technology & Innovation
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="border border-gray-800 p-8 rounded-lg hover:border-4CAF50 transition-all duration-300 group bg-black/70"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Technology;