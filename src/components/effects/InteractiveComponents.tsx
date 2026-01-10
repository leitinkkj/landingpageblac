"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Ultra Interactive 3D Wrapper for any content
interface Interactive3DProps {
    children: ReactNode;
    className?: string;
    intensity?: number; // 1-10
    glowColor?: string;
    enableTilt?: boolean;
    enableGlow?: boolean;
    enableFloat?: boolean;
}

export const Interactive3DCard = ({
    children,
    className = "",
    intensity = 5,
    glowColor = "hsl(26, 100%, 50%)",
    enableTilt = true,
    enableGlow = true,
    enableFloat = true,
}: Interactive3DProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity * 2, -intensity * 2]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity * 2, intensity * 2]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !enableTilt) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{
                transformStyle: "preserve-3d",
                rotateX: enableTilt ? rotateX : 0,
                rotateY: enableTilt ? rotateY : 0,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={enableGlow ? {
                boxShadow: `0 25px 50px -12px ${glowColor}66, 0 0 40px ${glowColor}33`,
                scale: 1.02,
            } : {}}
            animate={enableFloat ? {
                y: [0, -8, 0],
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            } : {}}
        >
            {children}

            {/* Shine effect on hover */}
            <motion.div
                className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
                style={{ borderRadius: "inherit" }}
            >
                <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{
                        background: `linear-gradient(105deg, transparent 40%, ${glowColor}22 45%, ${glowColor}44 50%, ${glowColor}22 55%, transparent 60%)`,
                    }}
                    whileHover={{
                        opacity: 1,
                        x: ["0%", "200%"],
                        transition: { duration: 0.8 }
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

// Animated Icon Component
interface AnimatedIconProps {
    children: ReactNode;
    className?: string;
    animation?: 'spin' | 'bounce' | 'pulse' | 'wobble' | 'float';
}

export const AnimatedIcon = ({
    children,
    className = "",
    animation = 'pulse'
}: AnimatedIconProps) => {
    const animations = {
        spin: {
            rotate: [0, 360],
            transition: { duration: 3, repeat: Infinity, ease: "linear" }
        },
        bounce: {
            y: [0, -10, 0],
            transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
        },
        pulse: {
            scale: [1, 1.15, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        },
        wobble: {
            rotate: [0, -5, 5, -3, 3, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        },
        float: {
            y: [0, -8, 0],
            x: [0, 3, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <motion.div
            className={className}
            animate={animations[animation]}
            whileHover={{ scale: 1.2, rotate: 15 }}
        >
            {children}
        </motion.div>
    );
};

// Glowing Text Component
interface GlowTextProps {
    children: ReactNode;
    className?: string;
    color?: string;
}

export const GlowText = ({
    children,
    className = "",
    color = "hsl(26, 100%, 50%)"
}: GlowTextProps) => {
    return (
        <motion.span
            className={`relative inline-block ${className}`}
            animate={{
                textShadow: [
                    `0 0 10px ${color}, 0 0 20px ${color}`,
                    `0 0 20px ${color}, 0 0 40px ${color}`,
                    `0 0 10px ${color}, 0 0 20px ${color}`,
                ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            {children}
        </motion.span>
    );
};

// Animated Button
interface AnimatedButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const AnimatedButton = ({
    children,
    className = "",
    onClick
}: AnimatedButtonProps) => {
    return (
        <motion.button
            className={`relative overflow-hidden ${className}`}
            onClick={onClick}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px hsl(26, 100%, 50%, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
                boxShadow: [
                    "0 0 20px hsl(26, 100%, 50%, 0.3)",
                    "0 0 40px hsl(26, 100%, 50%, 0.5)",
                    "0 0 20px hsl(26, 100%, 50%, 0.3)",
                ]
            }}
            transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            {/* Ripple effect container */}
            <motion.span
                className="absolute inset-0"
                initial={false}
                whileHover={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)"
                }}
            />
            {children}
        </motion.button>
    );
};

// Floating Particles around element
interface FloatingParticlesProps {
    count?: number;
    color?: string;
    className?: string;
}

export const FloatingParticles = ({
    count = 6,
    color = "hsl(26, 100%, 50%)",
    className = ""
}: FloatingParticlesProps) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: `0 0 10px ${color}`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

// Section with continuous animations
interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    enableParticles?: boolean;
    enableGlow?: boolean;
}

export const AnimatedSection = ({
    children,
    className = "",
    enableParticles = true,
    enableGlow = true,
}: AnimatedSectionProps) => {
    return (
        <motion.section
            className={`relative overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated gradient background */}
            {enableGlow && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at center, hsl(26, 100%, 50%, 0.08) 0%, transparent 50%)"
                    }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}

            {enableParticles && <FloatingParticles count={8} />}

            <div className="relative z-10">
                {children}
            </div>
        </motion.section>
    );
};

export default {
    Interactive3DCard,
    AnimatedIcon,
    GlowText,
    AnimatedButton,
    FloatingParticles,
    AnimatedSection
};
