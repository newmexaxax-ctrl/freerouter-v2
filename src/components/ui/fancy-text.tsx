"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface FancyTextProps {
  children: string;
  className?: string;
  fillClassName?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

const FancyText = React.forwardRef<HTMLSpanElement, FancyTextProps>(
  (
    {
      children,
      className = "display-xl text-black/10",
      fillClassName = "text-black",
      stagger = 0.04,
      duration = 0.9,
      delay = 0,
    },
    ref,
  ) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const finalRef = (ref ?? spanRef) as React.RefObject<HTMLSpanElement>;
    const prefersReduced = useReducedMotion();

    const chars = children.split("");
    const [hideBase, setHideBase] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useLayoutEffect(() => {
      if (!finalRef.current) return;
      const size = parseFloat(getComputedStyle(finalRef.current).fontSize);
      setIsSmall(size < 28);
    }, [finalRef]);

    if (prefersReduced) {
      return (
        <span ref={finalRef} className={cn(className, fillClassName)}>
          {children}
        </span>
      );
    }

    return (
      <span ref={finalRef} className="relative inline-block">
        <span
          className={cn(className)}
          style={{ opacity: hideBase && isSmall ? 0 : 1 }}
        >
          {children}
        </span>

        <span className="absolute inset-0 flex overflow-hidden" aria-hidden>
          {chars.map((char, i) => (
            <motion.span
              key={i}
              className={cn(className, fillClassName)}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: EASE_OUT,
              }}
              onAnimationComplete={() => {
                if (i === chars.length - 1 && isSmall) setHideBase(true);
              }}
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </span>
    );
  },
);

FancyText.displayName = "FancyText";
export { FancyText };
