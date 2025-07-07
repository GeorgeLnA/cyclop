"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState, useId } from "react";
import { motion } from "framer-motion";

// Utility function for cn
function cnUtil(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

const classNames = cnUtil;

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={classNames(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

const Beam = () => {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 ml-24 mt-8 pointer-events-none"
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke="url(#grad1)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id="grad1"
          variants={{
            initial: {
              x1: '40%',
              x2: '50%',
              y1: '160%',
              y2: '180%'
            },
            animate: {
              x1: '0%',
              x2: '10%',
              y1: '-40%',
              y2: '-20%'
            }
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2
          }}
        >
          <stop stopColor="#00ff41" stopOpacity="0" />
          <stop stopColor="#00ff41" />
          <stop offset="0.325" stopColor="#39ff14" />
          <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

interface MilitaryBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const MilitaryBackground: React.FC<MilitaryBackgroundProps> = ({
  className,
  children
}) => {
  return (
    <div className={classNames(
      "fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden",
      className
    )}>
      {/* Base grid pattern */}
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray="2 2"
        className={classNames(
          "fill-green-500/10 stroke-green-500/20",
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
      {/* Animated beam overlay */}
      <div className="absolute inset-0 z-20">
        <Beam />
      </div>
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 z-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-green-500 fill-none stroke-2">
          <path d="M10 0 L0 0 L0 10" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 z-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-green-500 fill-none stroke-2">
          <path d="M30 0 L40 0 L40 10" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 z-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-green-500 fill-none stroke-2">
          <path d="M10 40 L0 40 L0 30" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 z-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-green-500 fill-none stroke-2">
          <path d="M30 40 L40 40 L40 30" />
        </svg>
      </div>
      {/* Crosshair center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <svg width="60" height="60" viewBox="0 0 60 60" className="stroke-green-500/50 fill-none stroke-1">
          <circle cx="30" cy="30" r="25" strokeDasharray="4 4" />
          <path d="M30 5 L30 15 M30 45 L30 55 M5 30 L15 30 M45 30 L55 30" />
        </svg>
      </div>
      {/* No content overlay, no text, just background */}
    </div>
  );
};

export default function StrategicMilitaryBackground() {
  return <MilitaryBackground />;
} 