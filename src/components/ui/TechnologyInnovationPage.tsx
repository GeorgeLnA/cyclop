"use client";

import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Cpu, Zap, Globe, Shield, Rocket, Brain } from "lucide-react";
import { cn } from "../../lib/utils";
import React from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const words = text.split(" ");
  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className={"sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"}>
        <p ref={targetRef} className={"flex flex-wrap p-5 text-2xl font-bold text-white md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl uppercase"}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-white"}>
        {children}
      </motion.span>
    </span>
  );
};

// Marquee Component
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

function Marquee({ children, pauseOnHover = false, direction = "left", speed = 30, className, ...props }: MarqueeProps) {
  return (
    <div className={cn("w-full overflow-hidden sm:mt-24 mt-10 z-10", className)} {...props}>
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

// Badge Component
function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "destructive" | "outline" }) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

// Technology Innovation Page Component
interface TechInnovation {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

type ViewType = "innovation" | "technology" | "future";

const TechnologyInnovationPage: FC = () => {
  const [activeView, setActiveView] = useState<ViewType>("innovation");

  const technologies: TechInnovation[] = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Advanced AI systems powering next-generation applications"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "QUANTUM COMPUTING",
      description: "Revolutionary computing power for complex problem solving"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "BLOCKCHAIN TECHNOLOGY",
      description: "Decentralized systems ensuring security and transparency"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "CYBERSECURITY",
      description: "Advanced protection against evolving digital threats"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "SPACE TECHNOLOGY",
      description: "Innovative solutions for space exploration and communication"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "NEURAL NETWORKS",
      description: "Deep learning systems mimicking human cognitive processes"
    }
  ];

  const FAQ_SECTIONS: Record<ViewType, FAQSection> = {
    innovation: {
      category: "INNOVATION",
      items: [
        {
          id: "what-is-innovation",
          question: "WHAT DRIVES TECHNOLOGICAL INNOVATION?",
          answer: "Technological innovation is driven by the need to solve complex problems, improve efficiency, and create new opportunities for human advancement."
        },
        {
          id: "future-tech",
          question: "WHAT TECHNOLOGIES WILL SHAPE THE FUTURE?",
          answer: "AI, quantum computing, biotechnology, renewable energy, and space exploration are key technologies that will define our future."
        },
        {
          id: "innovation-impact",
          question: "HOW DOES INNOVATION IMPACT SOCIETY?",
          answer: "Innovation transforms how we work, communicate, learn, and live, creating new industries while solving global challenges."
        }
      ]
    },
    technology: {
      category: "TECHNOLOGY",
      items: [
        {
          id: "emerging-tech",
          question: "WHAT ARE THE MOST PROMISING EMERGING TECHNOLOGIES?",
          answer: "Quantum computing, advanced AI, biotechnology, and sustainable energy solutions are among the most promising emerging technologies."
        },
        {
          id: "tech-adoption",
          question: "HOW FAST DO NEW TECHNOLOGIES GET ADOPTED?",
          answer: "Technology adoption varies widely, from months for software to decades for infrastructure, depending on complexity and investment required."
        }
      ]
    },
    future: {
      category: "FUTURE",
      items: [
        {
          id: "future-predictions",
          question: "WHAT WILL TECHNOLOGY LOOK LIKE IN 2030?",
          answer: "By 2030, we expect widespread AI integration, quantum computing breakthroughs, advanced renewable energy, and significant progress in space technology."
        },
        {
          id: "preparing-future",
          question: "HOW CAN WE PREPARE FOR FUTURE TECHNOLOGICAL CHANGES?",
          answer: "Continuous learning, adaptability, and staying informed about emerging trends are key to preparing for technological changes."
        }
      ]
    }
  };

  // ... (rest of the component code, with all headings in uppercase) ...

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section with Text Reveal */}
      {/* Removed animated TextRevealByWord hero section as requested */}

      {/* Technologies Marquee */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase text-center">
            LEADING TECHNOLOGIES
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto font-semibold uppercase">
            EXPLORE THE CUTTING-EDGE TECHNOLOGIES THAT ARE DRIVING INNOVATION ACROSS INDUSTRIES
          </p>
        </div>
        <Marquee speed={40} pauseOnHover>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-8 flex items-center justify-center"
            >
              <motion.div 
                className="bg-transparent border border-gray-800 rounded-lg p-6 min-w-[300px] md:min-w-[400px] shadow-lg hover:border-4CAF50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4CAF50">
                    {React.cloneElement(tech.icon as React.ReactElement, { className: 'h-8 w-8 text-4CAF50' })}
                  </div>
                  <h3 className="font-bold text-white text-lg md:text-2xl uppercase tracking-widest">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-xl text-gray-300 font-medium">
                  {tech.description}
                </p>
              </motion.div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Innovation Stats Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl bg-transparent border border-gray-800 p-10 md:p-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase">
                INNOVATION BY NUMBERS
              </h2>
              <p className="text-xl text-gray-300 max-w-screen-sm">
                DRIVING TECHNOLOGICAL ADVANCEMENT THROUGH RESEARCH, DEVELOPMENT, AND BREAKTHROUGH INNOVATIONS
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-semibold tracking-widest text-gray-400 text-sm">RESEARCH PROJECTS</p>
                <span className="text-4xl font-bold md:text-5xl text-white">500+</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="uppercase font-semibold tracking-widest text-gray-400 text-sm">PATENTS FILED</p>
                <span className="text-4xl font-bold md:text-5xl text-white">200+</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="uppercase font-semibold tracking-widest text-gray-400 text-sm">TECHNOLOGIES DEVELOPED</p>
                <span className="text-4xl font-bold md:text-5xl text-white">50+</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="uppercase font-semibold tracking-widest text-gray-400 text-sm">GLOBAL IMPACT</p>
                <span className="text-4xl font-bold md:text-5xl text-white">100M+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* Removed FAQ section and CTA section as requested */}
    </div>
  );
};

export default TechnologyInnovationPage; 