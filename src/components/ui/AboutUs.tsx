"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Star, Users, Target, Award, Heart } from "lucide-react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

// AnimatedTooltip Component
export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base uppercase">
                  {item.name}
                </div>
                <div className="text-gray-400 text-xs uppercase">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={56}
            width={56}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

// Responsive Text Utility
const BREAKPOINTS = {
  SM: 0,
  MD: 600,
  LG: 960,
  XL: 1200
};

export const useResponsive = (styles: any) => {
  const [responsiveStyles, setResponsiveStyles] = useState<any>();

  useEffect(() => {
    const getResponsive = (styles: any) => {
      let currentDirection;
      if (typeof styles === "object") {
        if (styles.sm && window.innerWidth >= BREAKPOINTS.SM) {
          currentDirection = (styles.sm);
        } if (styles.md && window.innerWidth >= BREAKPOINTS.MD) {
          currentDirection = (styles.md);
        } if (styles.lg && window.innerWidth >= BREAKPOINTS.LG) {
          currentDirection = (styles.lg);
        } if (styles.xl && window.innerWidth >= BREAKPOINTS.XL) {
          currentDirection = (styles.xl);
        }
      } else {
        currentDirection = (styles);
      }
      return currentDirection;
    };

    const listener = () => {
      setResponsiveStyles(getResponsive(styles));
    };

    listener();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [JSON.stringify(styles)]);

  return responsiveStyles;
};

interface ResponsiveProp<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

const variants = {
  "heading-72": "font-semibold leading-[4.5rem] tracking-[-4.32px]",
  "heading-64": "font-semibold leading-[4rem] tracking-[-3.84px]",
  "heading-56": "font-semibold leading-[3.5rem] tracking-[-3.36px]",
  "heading-48": "font-semibold leading-[3.5rem] tracking-[-2.88px]",
  "heading-40": "font-semibold leading-[3rem] tracking-[-2.4px]",
  "heading-32": "font-semibold leading-10 tracking-[-1.28px]",
  "heading-24": "font-semibold leading-8 tracking-[-0.96px]",
  "heading-20": "font-semibold leading-[1.625rem] tracking-[-0.4px]",
  "heading-16": "font-semibold leading-6 tracking-[-0.32px]",
  "button-16": "font-medium leading-5",
  "button-14": "font-medium leading-5",
  "button-12": "font-medium leading-4",
  "label-20": "leading-8",
  "label-18": "leading-5",
  "label-16": "leading-5",
  "label-14": "leading-5",
  "label-13": "leading-4",
  "label-12": "leading-4",
  "copy-24": "leading-9",
  "copy-20": "leading-9",
  "copy-18": "leading-7",
  "copy-16": "leading-6",
  "copy-14": "leading-5",
  "copy-13": "leading-[1.125rem]"
};

export type TTextVariant = keyof typeof variants;

interface TextProps {
  size?: number | ResponsiveProp<number>;
  variant?: TTextVariant | ResponsiveProp<TTextVariant>;
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  color?: string;
  children?: React.ReactNode;
  truncate?: boolean | number;
  align?: "left" | "center" | "right" | "justify";
  monospace?: boolean;
  className?: string;
}

export const Text = ({
  size = 16,
  variant,
  transform,
  color = "gray-1000",
  children,
  truncate,
  align,
  monospace = false,
  className
}: TextProps) => {
  let _size = useResponsive(size) || 16;
  const _variant = useResponsive(variant) || "";
  if (_variant) {
    _size = parseInt((_variant as string)?.split("-")[1]);
  }

  return (
    <p
      className={cn(
        monospace ? "font-mono" : "font-sans",
        !_variant && _size >= 48 && "font-bold",
        !_variant && _size >= 20 && _size < 48 && "font-semibold",
        !_variant && _size >= 72 && "leading-[4.5rem]",
        !_variant && _size >= 64 && _size < 72 && "leading-[4rem]",
        !_variant && _size >= 48 && _size < 64 && "leading-[3.5rem]",
        !_variant && _size >= 32 && _size < 48 && "leading-10",
        !_variant && _size >= 28 && _size < 32 && "leading-9",
        !_variant && _size >= 24 && _size < 28 && "leading-8",
        !_variant && _size >= 16 && _size < 24 && "leading-6",
        !_variant && _size >= 14 && _size < 16 && "leading-5",
        !_variant && _size >= 12 && _size < 14 && "leading-4",
        !_variant && _size >= 10 && _size < 12 && "leading-3",
        !!_variant && typeof _variant === 'string' && variants[_variant as TTextVariant],
        typeof truncate === "boolean" && "truncate",
        className
      )}
      style={{
        color: `var(--ds-${color})`,
        fontSize: `${_size}px`,
        textTransform: transform,
        textAlign: align,
        display: typeof truncate === "number" ? "-webkit-box" : undefined,
        WebkitBoxOrient: typeof truncate === "number" ? "vertical" : undefined,
        WebkitLineClamp: typeof truncate === "number" ? truncate : undefined,
        overflow: typeof truncate === "number" ? "hidden" : undefined,
    }}
    >
      {children}
    </p>
  );
};

// About Us Component
interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>;
  team?: Array<{
    id: number;
    name: string;
    designation: string;
    image: string;
  }>;
  testimonials?: Array<{
    name: string;
    role: string;
    text: string;
    avatar: string;
    rating?: number;
  }>;
}

export const AboutUs = ({
  title = "ABOUT CYCLOP",
  subtitle = "Building the future of tactical technology",
  description = "Cyclop is a passionate team of innovators, creators, and problem-solvers dedicated to delivering exceptional military and tactical solutions. Our journey began with a vision: to transform advanced ideas into reality and help defense and security organizations thrive in an ever-evolving landscape.",
  stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Team Members"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      value: "200+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      value: "99%",
      label: "Client Satisfaction"
    }
  ],
  team = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
    },
    {
      id: 5,
      name: "Lisa Wang",
      designation: "Product Manager",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
    }
  ],
  testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, TechStart Inc.",
      text: "Working with this team has been transformative for our business. Their expertise and dedication are unmatched.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Founder, Creative Solutions",
      text: "The level of professionalism and innovation they bring to every project is exceptional. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      rating: 5
    }
  ]
}: AboutUsProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-transparent border border-gray-800 px-3 py-1 text-xl text-4CAF50 font-bold uppercase tracking-widest">
              ABOUT US
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase">
              {title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold uppercase">
              {subtitle}
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {description}
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2 border border-gray-800 rounded-lg bg-transparent p-4 hover:border-4CAF50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-transparent border border-4CAF50">
                {React.cloneElement(stat.icon as React.ReactElement, { className: 'h-8 w-8 text-4CAF50' })}
              </div>
              <div className="text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text variant="heading-32" className="text-white mb-4" transform="uppercase">
            Meet Our Team
          </Text>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The brilliant minds behind our success. Each team member brings unique expertise and passion to deliver exceptional results.
          </p>
          <div className="flex justify-center">
            <AnimatedTooltip items={team} />
          </div>
        </motion.div>

        {/* Remove testimonials and CTA section */}
      </div>
    </section>
  );
};

export default AboutUs; 