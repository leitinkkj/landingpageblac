"use client";

import { motion } from 'framer-motion';
import {
    DollarSign, ShoppingBag, Package, Store, Crown, Gem,
    Zap, Star, Sparkles, TrendingUp, Truck, Bot, Percent,
    CreditCard, Wallet, Receipt, BarChart3, Target
} from 'lucide-react';

interface Floating3DIconProps {
    Icon: React.ElementType;
    className?: string;
    size?: number;
    delay?: number;
    duration?: number;
    rotateX?: number;
    rotateY?: number;
    color?: string;
}

// Single 3D floating icon component
const Floating3DIcon = ({
    Icon,
    className = "",
    size = 40,
    delay = 0,
    duration = 20,
    rotateX = 15,
    rotateY = 15,
    color = "hsl(var(--primary))"
}: Floating3DIconProps) => {
    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1, 0.8],
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotateX: [rotateX, -rotateX, rotateX],
                rotateY: [rotateY, -rotateY, rotateY],
                rotateZ: [0, 10, 0],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div
                className="relative"
                style={{
                    filter: `drop-shadow(0 0 20px ${color}) drop-shadow(0 10px 30px rgba(0,0,0,0.5))`,
                    transform: 'translateZ(50px)',
                }}
            >
                <Icon
                    style={{
                        width: size,
                        height: size,
                        color: color,
                        strokeWidth: 1.5,
                    }}
                />
                {/* Reflection/glow layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${color}20 0%, transparent 50%)`,
                        borderRadius: '50%',
                        transform: 'translateZ(10px)',
                    }}
                />
            </div>
        </motion.div>
    );
};

// Configuration for all floating icons
const floatingIcons = [
    // Left side
    { Icon: DollarSign, className: "top-[8%] left-[3%]", size: 48, delay: 0, duration: 18, color: "hsl(var(--primary))" },
    { Icon: ShoppingBag, className: "top-[25%] left-[5%]", size: 36, delay: 2, duration: 22, color: "#22d3ee" },
    { Icon: Package, className: "top-[45%] left-[2%]", size: 44, delay: 4, duration: 20, color: "hsl(var(--primary))" },
    { Icon: Store, className: "top-[65%] left-[4%]", size: 40, delay: 1, duration: 24, color: "#a855f7" },
    { Icon: Crown, className: "top-[82%] left-[3%]", size: 32, delay: 3, duration: 19, color: "#eab308" },

    // Right side
    { Icon: Gem, className: "top-[10%] right-[4%]", size: 42, delay: 1.5, duration: 21, color: "#22d3ee" },
    { Icon: TrendingUp, className: "top-[28%] right-[2%]", size: 38, delay: 3.5, duration: 23, color: "#22c55e" },
    { Icon: Bot, className: "top-[48%] right-[5%]", size: 46, delay: 0.5, duration: 17, color: "#a855f7" },
    { Icon: Percent, className: "top-[68%] right-[3%]", size: 34, delay: 2.5, duration: 25, color: "hsl(var(--primary))" },
    { Icon: Star, className: "top-[85%] right-[4%]", size: 40, delay: 4.5, duration: 20, color: "#eab308" },

    // Top scattered
    { Icon: Zap, className: "top-[5%] left-[20%]", size: 30, delay: 5, duration: 26, color: "#eab308" },
    { Icon: Sparkles, className: "top-[12%] right-[25%]", size: 28, delay: 6, duration: 22, color: "hsl(var(--primary))" },

    // Middle scattered (hidden on mobile)
    { Icon: CreditCard, className: "top-[35%] left-[12%] hidden lg:block", size: 32, delay: 7, duration: 24, color: "#22d3ee" },
    { Icon: Wallet, className: "top-[55%] right-[10%] hidden lg:block", size: 36, delay: 8, duration: 21, color: "#22c55e" },
    { Icon: Receipt, className: "top-[72%] left-[15%] hidden lg:block", size: 30, delay: 9, duration: 23, color: "#a855f7" },
    { Icon: BarChart3, className: "top-[40%] right-[15%] hidden lg:block", size: 34, delay: 10, duration: 25, color: "hsl(var(--primary))" },

    // Bottom scattered
    { Icon: Truck, className: "bottom-[15%] left-[30%] hidden md:block", size: 38, delay: 11, duration: 20, color: "#22d3ee" },
    { Icon: Target, className: "bottom-[10%] right-[28%] hidden md:block", size: 32, delay: 12, duration: 22, color: "#ef4444" },
];

// Main background component
const Floating3DBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

            {/* Radial glows */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.12)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.08)_0%,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(200,100%,50%,0.06)_0%,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280,100%,50%,0.04)_0%,_transparent_50%)]" />

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%)',
                }}
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 70%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* 3D Grid floor effect */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,107,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: 'center top',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                }}
            />

            {/* Floating 3D Icons */}
            {floatingIcons.map((icon, index) => (
                <Floating3DIcon
                    key={index}
                    Icon={icon.Icon}
                    className={icon.className}
                    size={icon.size}
                    delay={icon.delay}
                    duration={icon.duration}
                    color={icon.color}
                />
            ))}

            {/* Ambient particles */}
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full bg-primary/30"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 8,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Vignette effect for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                }}
            />
        </div>
    );
};

export default Floating3DBackground;
