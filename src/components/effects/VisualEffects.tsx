"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import {
    Sparkles, Star, Zap, Crown, Gem, Flame,
    DollarSign, ShoppingBag, Rocket, Heart
} from 'lucide-react';

// Floating icon component
export const FloatingIcon = ({
    Icon,
    className = "",
    delay = 0,
    duration = 6,
    x = 0,
    y = 0
}: {
    Icon: React.ElementType;
    className?: string;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
}) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        initial={{ opacity: 0, y: y }}
        animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [y, y - 30, y],
            x: [x, x + 10, x - 10, x],
            rotate: [0, 10, -10, 0]
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: 9999,
            ease: "easeInOut"
        }}
    >
        <Icon className="text-primary/30 drop-shadow-[0_0_10px_hsl(var(--primary))]" />
    </motion.div>
);

// Animated particles
export const AnimatedParticles = ({ count = 20 }: { count?: number }) => {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Generate particles only on client side to avoid hydration mismatch
    const particles = useMemo(() => {
        if (!mounted) return [];
        // Reduce particle count on mobile for performance
        const actualCount = isMobile ? Math.min(count, 10) : count;

        return Array.from({ length: actualCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 2,
            duration: Math.random() * 5 + 10,
            delay: Math.random() * 5,
        }));
    }, [count, mounted, isMobile]);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        // GPU hint
                        transform: 'translateZ(0)',
                    }}
                    animate={{
                        translateY: [0, -40, 0],
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: 9999,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

// Neon glow border animation
export const NeonBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        <motion.div
            className="absolute -inset-[2px] rounded-2xl opacity-75"
            style={{
                background: 'linear-gradient(90deg, hsl(var(--primary)), #ff4500, hsl(var(--primary)))',
                backgroundSize: '200% 100%',
            }}
            animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
                duration: 3,
                repeat: 9999,
                ease: "linear",
            }}
        />
        <div className="relative bg-background rounded-2xl">
            {children}
        </div>
    </div>
);

// Pulsing neon text
export const NeonText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.span
        className={className}
        animate={{
            textShadow: [
                '0 0 10px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.6), 0 0 30px rgba(249, 115, 22, 0.4)',
                '0 0 20px rgba(249, 115, 22, 1), 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.6)',
                '0 0 10px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.6), 0 0 30px rgba(249, 115, 22, 0.4)',
            ]
        }}
        transition={{
            duration: 2,
            repeat: 9999,
            ease: "easeInOut"
        }}
    >
        {children}
    </motion.span>
);

// Scanning line effect
export const ScanLine = ({ className = "" }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <motion.div
            className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none ${className}`}
            animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: 4,
                repeat: 9999,
                ease: "linear",
            }}
        />
    );
};

// Orbiting element
export const OrbitingElement = ({
    Icon,
    radius = 100,
    duration = 10,
    delay = 0,
    className = ""
}: {
    Icon: React.ElementType;
    radius?: number;
    duration?: number;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        animate={{
            rotate: 360,
        }}
        transition={{
            duration,
            delay,
            repeat: 9999,
            ease: "linear",
        }}
        style={{ width: radius * 2, height: radius * 2 }}
    >
        <div style={{ transform: `translateX(${radius}px)` }}>
            <Icon className="w-6 h-6 text-primary/40" />
        </div>
    </motion.div>
);

// Glitch effect text
export const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.span
        className={`relative inline-block ${className}`}
        animate={{
            x: [0, -2, 2, 0],
        }}
        transition={{
            duration: 0.5,
            repeat: 9999,
            repeatDelay: 3,
        }}
    >
        {children}
        <motion.span
            className="absolute inset-0 text-cyan-500 opacity-50"
            animate={{
                x: [0, 2, -2, 0],
            }}
            transition={{
                duration: 0.5,
                repeat: 9999,
                repeatDelay: 3,
            }}
            style={{ clipPath: 'inset(0 0 50% 0)' }}
        >
            {children}
        </motion.span>
    </motion.span>
);

// Floating icons preset for sections
export const SectionFloatingIcons = ({ variant = "default" }: { variant?: "default" | "money" | "tech" | "social" }) => {
    const iconSets = {
        default: [
            { Icon: Sparkles, className: "top-[10%] left-[5%] w-6 h-6", delay: 0 },
            { Icon: Star, className: "top-[20%] right-[8%] w-8 h-8", delay: 1 },
            { Icon: Zap, className: "bottom-[15%] left-[10%] w-5 h-5", delay: 2 },
            { Icon: Crown, className: "bottom-[25%] right-[5%] w-7 h-7", delay: 0.5 },
        ],
        money: [
            { Icon: DollarSign, className: "top-[10%] left-[5%] w-6 h-6", delay: 0 },
            { Icon: Gem, className: "top-[30%] right-[8%] w-8 h-8", delay: 1 },
            { Icon: DollarSign, className: "bottom-[20%] left-[15%] w-5 h-5", delay: 2 },
            { Icon: Crown, className: "bottom-[10%] right-[10%] w-7 h-7", delay: 0.5 },
        ],
        tech: [
            { Icon: Rocket, className: "top-[15%] left-[8%] w-6 h-6", delay: 0 },
            { Icon: Zap, className: "top-[25%] right-[5%] w-8 h-8", delay: 1 },
            { Icon: Sparkles, className: "bottom-[20%] left-[5%] w-5 h-5", delay: 2 },
            { Icon: Star, className: "bottom-[30%] right-[12%] w-7 h-7", delay: 0.5 },
        ],
        social: [
            { Icon: Heart, className: "top-[10%] left-[10%] w-6 h-6", delay: 0 },
            { Icon: Star, className: "top-[20%] right-[5%] w-8 h-8", delay: 1 },
            { Icon: Sparkles, className: "bottom-[15%] left-[8%] w-5 h-5", delay: 2 },
            { Icon: Crown, className: "bottom-[25%] right-[8%] w-7 h-7", delay: 0.5 },
        ],
    };

    const icons = iconSets[variant];

    return (
        <>
            {icons.map((icon, index) => (
                <FloatingIcon key={index} Icon={icon.Icon} className={icon.className} delay={icon.delay} />
            ))}
        </>
    );
};

// Animated background grid
export const AnimatedGrid = ({ className = "" }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
              linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)
            `,
                    backgroundSize: '50px 50px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                    duration: 20,
                    repeat: 9999,
                    ease: "linear",
                }}
            />
        </div>
    );
};

// Electric arc effect
export const ElectricArc = ({ className = "" }: { className?: string }) => (
    <motion.div
        className={`absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none ${className}`}
        animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
        }}
        transition={{
            duration: 0.5,
            repeat: 9999,
            repeatDelay: 2,
        }}
    />
);
