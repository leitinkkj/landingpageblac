"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Animation variants
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Scroll animation wrapper component
interface ScrollAnimationProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    threshold?: number;
    once?: boolean;
}

export function ScrollAnimation({
    children,
    variants = fadeInUp,
    className = '',
    delay = 0,
    threshold = 0.1,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            className={className}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for lists/grids
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
}

export function StaggerContainer({
    children,
    className = '',
    threshold = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div variants={staggerItem} className={className}>
            {children}
        </motion.div>
    );
}

// Hover animation wrapper
interface HoverAnimationProps {
    children: ReactNode;
    className?: string;
    scale?: number;
    y?: number;
    rotate?: number;
}

export function HoverAnimation({
    children,
    className = '',
    scale = 1.05,
    y = -8,
    rotate = 0,
}: HoverAnimationProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale,
                y,
                rotate,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.div>
    );
}

// Icon animation (continuous float + hover)
interface AnimatedIconProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedIcon({ children, className = '' }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -5, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.4 },
            }}
        >
            {children}
        </motion.div>
    );
}

// 3D tilt effect on hover
interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
        >
            {children}
        </motion.div>
    );
}

// Glow pulse animation
interface GlowPulseProps {
    children: ReactNode;
    className?: string;
    color?: string;
}

export function GlowPulse({ children, className = '', color = 'hsl(var(--primary))' }: GlowPulseProps) {
    return (
        <motion.div
            className={className}
            animate={{
                boxShadow: [
                    `0 0 20px ${color}40, 0 0 40px ${color}20`,
                    `0 0 30px ${color}60, 0 0 60px ${color}30`,
                    `0 0 20px ${color}40, 0 0 40px ${color}20`,
                ],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {children}
        </motion.div>
    );
}
