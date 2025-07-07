import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollLockShowcaseProps {
  className?: string;
}

// First scroll lock showcase (X-8.9)
const ScrollLockShowcase: React.FC<ScrollLockShowcaseProps> = ({ className }) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0.03, 0.13], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.03, 0.13], [40, 0]);
  return (
    <section ref={sectionRef} className={`relative min-h-[200vh] flex items-center justify-center bg-transparent ${className ?? ''}`}>
      <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center w-full z-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900/60 tracking-widest select-none pointer-events-none mb-2 md:mb-4"
        >
          X-8.9
        </motion.h2>
        <img
          src="/X-8.9.png"
          alt="X-8.9 Drone"
          className="w-[320px] md:w-[420px] max-w-full mx-auto drop-shadow-2xl select-none pointer-events-none z-30"
          draggable={false}
        />
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="mt-4 w-full max-w-xl text-center z-40"
        >
          <div className="bg-black/80 border border-green-900/40 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-4CAF50 mb-2 font-mono tracking-wide">Heavy-Lift Rotary-Wing Drone</h3>
            <p className="text-gray-200 text-lg font-mono">Multi-mission platform for ISR, payload delivery, and tactical support in extreme environments.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Second scroll lock showcase (X-8.9N)
const ScrollLockShowcase2: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0.03, 0.13], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.03, 0.13], [40, 0]);
  return (
    <section ref={sectionRef} className="relative min-h-[200vh] flex items-center justify-center bg-transparent -mt-32">
      <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center w-full z-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900/60 tracking-widest select-none pointer-events-none mb-2 md:mb-4"
        >
          X-8.9N
        </motion.h2>
        <img
          src="/X-8.9N.png"
          alt="X-8.9N Drone"
          className="w-[320px] md:w-[420px] max-w-full mx-auto drop-shadow-2xl select-none pointer-events-none z-30"
          draggable={false}
        />
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="mt-4 w-full max-w-xl text-center z-40"
        >
          <div className="bg-black/80 border border-green-900/40 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-4CAF50 mb-2 font-mono tracking-wide">Arctic Operations UAS</h3>
            <p className="text-gray-200 text-lg font-mono">Proven in subzero conditions for real-time ISR and operational support with U.S. Special Operations.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Third scroll lock showcase (X-8.10)
const ScrollLockShowcase3: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0.03, 0.13], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.03, 0.13], [40, 0]);
  return (
    <section ref={sectionRef} className="relative min-h-[200vh] flex items-center justify-center bg-transparent -mt-32">
      <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center w-full z-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900/60 tracking-widest select-none pointer-events-none mb-2 md:mb-4"
        >
          X-8.10
        </motion.h2>
        <img
          src="/X-8.10.png"
          alt="X-8.10 Drone"
          className="w-[320px] md:w-[420px] max-w-full mx-auto drop-shadow-2xl select-none pointer-events-none z-30"
          draggable={false}
        />
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="mt-4 w-full max-w-xl text-center z-40"
        >
          <div className="bg-black/80 border border-green-900/40 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-4CAF50 mb-2 font-mono tracking-wide">Next-Gen Tactical UAS</h3>
            <p className="text-gray-200 text-lg font-mono">Lightweight, portable, and AI-enabled for rapid deployment and precision reconnaissance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ScrollLockShowcase, ScrollLockShowcase2, ScrollLockShowcase3 };
export default ScrollLockShowcase; 