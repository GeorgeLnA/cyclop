import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Jul_07__1553_18s_202507071642_1wmkv.mp4"
      />
      {/* Animated overlay */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-4 mt-64">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-6 font-mono tracking-wider"
        >
          Cutting-Edge Tactical Systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-green-400 font-mono mb-10 max-w-2xl"
        >
          Advanced Drones, Radios, and Communication Technology
        </motion.p>
        <motion.a
          href="#solutions"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-4CAF50 text-black font-bold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Explore Our Systems
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;