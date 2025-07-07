import { cn } from "../lib/utils";
import {
  Radio,
  SatelliteDish,
  Server,
  Plane,
  AirVent,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const products = [
  {
    name: "Spectre M Radio",
    desc: "Compact handheld radio with secure voice and data encryption for tactical deployments.",
    icon: <Radio />,
    image: "/feat/SM.png"
  },
  {
    name: "Spectre H Radio",
    desc: "Manpack radio designed for extended-range communication in harsh conditions.",
    icon: <SatelliteDish />,
    image: "/feat/SH_manpack.png"
  },
  {
    name: "Spectre V Base Station",
    desc: "High-power base unit supporting multi-channel secure communications in fixed locations.",
    icon: <Server />,
    image: "/feat/SH_base.png"
  },
  {
    name: "X-8.9N Rotary-Wing Drone",
    desc: "Heavy-duty autonomous drone proven in arctic conditions for ISR and operational support.",
    icon: <AirVent />,
    image: "/feat/SM_ampli.png"
  },
  {
    name: "X-7 Tactical UAS",
    desc: "Lightweight, portable drone for short-range surveillance and reconnaissance missions.",
    icon: <Plane />,
    image: "/feat/SM_mobilemount.png"
  },
  {
    name: "Secure Command Suite",
    desc: "Integrated software for encrypted mission planning, asset control, and real-time situational awareness.",
    icon: <Shield />,
    image: "/feat/SH_amplifier.png"
  },
];

const Feature = ({ name, desc, icon, image, index }: { name: string; desc: string; icon: React.ReactNode; image: string; index: number }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center bg-transparent border border-gray-800 rounded-xl p-10 md:p-16 min-w-[300px] md:min-w-[400px] shadow-lg group/feature relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl",
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sliding photo background */}
      <motion.img
        src={image}
        alt={name}
        initial={{ y: 80, opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="absolute bottom-0 left-0 w-full h-2/3 object-cover z-0 pointer-events-none rounded-b-xl"
        style={{ filter: 'none' }}
      />
      {/* Optional: dark gradient overlay for text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-2/3 z-0 pointer-events-none rounded-b-xl bg-gradient-to-t from-black via-black/60 to-transparent"
      />
      <div className="mb-4 text-4CAF50 text-5xl relative z-10 px-2">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2 relative z-10 px-2 uppercase text-center">
        {name}
      </div>
      <p className="text-xl text-gray-300 font-medium text-center relative z-10 px-2">
        {desc}
      </p>
      {/* Hover overlay effect */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-4CAF50/10 to-transparent pointer-events-none z-0" />
    </motion.div>
  );
};

const FeaturedProducts = () => (
  <section id="products" className="py-32">
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white mb-16 uppercase text-center"
      >
        Featured Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 relative z-10">
        {products.map((product, i) => (
          <Feature key={product.name} {...product} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;