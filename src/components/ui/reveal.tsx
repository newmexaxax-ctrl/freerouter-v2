"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/** Strong ease-out — responsive UI entrance (easing.dev / Emil Kowalski) */
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "translateY(12px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once, margin: "-6% 0px" }}
      transition={{
        duration: 0.28,
        delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(12px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export function Stagger({
  children,
  className,
  stagger = 0.05,
  delay = 0,
}: StaggerProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-4% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={itemVariants}
      transition={{ duration: 0.28, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
