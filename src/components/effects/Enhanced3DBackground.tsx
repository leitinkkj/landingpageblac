"use client";

import { motion } from 'framer-motion';

// 3D Floating Icon Component - More visible version
const Icon3D = ({
    children,
    className = "",
    delay = 0,
    size = 60,
    color = "#ff6b00"
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    size?: number;
    color?: string;
}) => {
    return (
        <motion.div
            className={`absolute z-[5] ${className}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.9, 1.1, 0.9],
                y: [0, -20, 0],
                rotateY: [0, 20, 0],
                rotateX: [0, 10, 0],
            }}
            transition={{
                duration: 8 + Math.random() * 4,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                width: size,
                height: size,
                perspective: '500px',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Box */}
            <div
                className="relative w-full h-full rounded-2xl"
                style={{
                    background: `linear-gradient(135deg, ${color}40 0%, ${color}10 100%)`,
                    border: `2px solid ${color}50`,
                    boxShadow: `
            0 0 30px ${color}30,
            0 10px 40px rgba(0,0,0,0.5),
            inset 0 1px 0 ${color}40
          `,
                    transform: 'rotateX(10deg) rotateY(-10deg)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                {/* Icon content */}
                <div
                    className="absolute inset-0 flex items-center justify-center text-3xl"
                    style={{ color: color }}
                >
                    {children}
                </div>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                />
            </div>
        </motion.div>
    );
};

// Emoji/Symbol icons that are always visible
const icons3D = [
    // Left side
    { emoji: "💰", className: "top-[5%] left-[2%]", delay: 0, size: 70, color: "#22c55e" },
    { emoji: "🛍️", className: "top-[20%] left-[3%]", delay: 1, size: 60, color: "#ff6b00" },
    { emoji: "📦", className: "top-[40%] left-[1%]", delay: 2, size: 55, color: "#22d3ee" },
    { emoji: "🏪", className: "top-[60%] left-[2%]", delay: 3, size: 65, color: "#a855f7" },
    { emoji: "👑", className: "top-[80%] left-[3%]", delay: 4, size: 50, color: "#eab308" },

    // Right side
    { emoji: "💎", className: "top-[8%] right-[2%]", delay: 0.5, size: 65, color: "#22d3ee" },
    { emoji: "📈", className: "top-[25%] right-[3%]", delay: 1.5, size: 55, color: "#22c55e" },
    { emoji: "🤖", className: "top-[45%] right-[1%]", delay: 2.5, size: 70, color: "#a855f7" },
    { emoji: "⭐", className: "top-[65%] right-[2%]", delay: 3.5, size: 60, color: "#eab308" },
    { emoji: "🔥", className: "top-[85%] right-[3%]", delay: 4.5, size: 55, color: "#ff6b00" },
];

// Mobile icons (fewer, smaller)
const mobileIcons = [
    { emoji: "💰", className: "top-[10%] left-[2%]", delay: 0, size: 45, color: "#22c55e" },
    { emoji: "💎", className: "top-[10%] right-[2%]", delay: 1, size: 45, color: "#22d3ee" },
    { emoji: "🛍️", className: "top-[35%] left-[1%]", delay: 2, size: 40, color: "#ff6b00" },
    { emoji: "⭐", className: "top-[35%] right-[1%]", delay: 3, size: 40, color: "#eab308" },
    { emoji: "📦", className: "top-[60%] left-[2%]", delay: 4, size: 45, color: "#22d3ee" },
    { emoji: "🔥", className: "top-[60%] right-[2%]", delay: 5, size: 45, color: "#ff6b00" },
    { emoji: "👑", className: "top-[85%] left-[1%]", delay: 6, size: 40, color: "#eab308" },
    { emoji: "🤖", className: "top-[85%] right-[1%]", delay: 7, size: 40, color: "#a855f7" },
];

// Floating orbs for ambient effect
const FloatingOrb = ({ className, color, size, delay }: { className: string; color: string; size: number; delay: number }) => (
    <motion.div
        className={`absolute rounded-full ${className}`}
        style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color}40 0%, ${color}10 50%, transparent 70%)`,
            boxShadow: `0 0 ${size}px ${color}30`,
        }}
        animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, -50, 0],
        }}
        transition={{
            duration: 10 + Math.random() * 5,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Main Background Component
const Enhanced3DBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

            {/* Ambient glows */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.15)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.1)_0%,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(200,100%,50%,0.08)_0%,_transparent_40%)]" />

            {/* 3D Grid floor */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,107,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.15) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Perspective grid at bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-30"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,107,0,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.2) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(300px) rotateX(60deg)',
                    transformOrigin: 'center bottom',
                    maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                }}
            />

            {/* Floating orbs */}
            <FloatingOrb className="top-[15%] left-[10%]" color="#ff6b00" size={150} delay={0} />
            <FloatingOrb className="top-[40%] right-[15%]" color="#22d3ee" size={120} delay={2} />
            <FloatingOrb className="bottom-[20%] left-[20%]" color="#a855f7" size={100} delay={4} />
            <FloatingOrb className="top-[60%] right-[25%]" color="#22c55e" size={80} delay={6} />

            {/* Desktop 3D Icons */}
            <div className="hidden md:block">
                {icons3D.map((icon, index) => (
                    <Icon3D
                        key={`desktop-${index}`}
                        className={icon.className}
                        delay={icon.delay}
                        size={icon.size}
                        color={icon.color}
                    >
                        {icon.emoji}
                    </Icon3D>
                ))}
            </div>

            {/* Mobile 3D Icons */}
            <div className="block md:hidden">
                {mobileIcons.map((icon, index) => (
                    <Icon3D
                        key={`mobile-${index}`}
                        className={icon.className}
                        delay={icon.delay}
                        size={icon.size}
                        color={icon.color}
                    >
                        {icon.emoji}
                    </Icon3D>
                ))}
            </div>

            {/* Scan lines effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                }}
            />

            {/* Moving light beam */}
            <motion.div
                className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                animate={{
                    left: ['0%', '100%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                }}
            />
        </div>
    );
};

export default Enhanced3DBackground;
