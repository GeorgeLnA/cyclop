import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Colonel James Mitchell',
    role: 'Operations Commander',
    organization: 'Special Forces Unit',
    content: 'The reliability and performance of this equipment has been exceptional in our most demanding operations. The tactical drones have proven invaluable for reconnaissance missions.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Chief Sarah Rodriguez',
    role: 'Communications Director',
    organization: 'Federal Law Enforcement',
    content: 'Outstanding communication systems that maintain clarity and security even in the most challenging environments. The support team is also incredibly responsive.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Captain Michael Chen',
    role: 'Maritime Operations',
    organization: 'Coast Guard Division',
    content: 'These systems have transformed our operational capabilities. The durability and performance in maritime conditions exceed all expectations.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TRUSTED BY
            <span className="block text-5xl md:text-7xl text-4CAF50">PROFESSIONALS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our equipment is trusted by military units, law enforcement agencies, and security 
            professionals worldwide. Here's what they have to say about our mission-critical solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="border border-gray-800 p-8 rounded-lg hover:border-4CAF50 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 p-3 rounded-full bg-4CAF50/80">
                <Quote className="w-6 h-6 text-black" />
              </div>
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-4CAF50 text-sm font-semibold">{testimonial.organization}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-4CAF50 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border border-gray-800 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MISSION SUCCESS STATISTICS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                <div className="text-gray-400">Mission Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">48hr</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;