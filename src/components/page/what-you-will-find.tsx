"use client";

import {
    Smartphone, Gamepad2, Watch, Rocket, Shirt, SprayCan,
    Laptop, Headphones, Camera, Gift, Car, Home, Dumbbell,
    Baby, Dog, Flower, Utensils, Music, Plane, Bike,
    type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// Extended list of niches
const allCategories: { Icon: LucideIcon; title: string; color: string }[] = [
    // Row 1
    { Icon: Smartphone, title: "iPhones & Apple", color: "from-blue-500/20" },
    { Icon: Gamepad2, title: "Games & Consoles", color: "from-purple-500/20" },
    { Icon: Watch, title: "Smartwatches", color: "from-cyan-500/20" },
    { Icon: Rocket, title: "Drones", color: "from-orange-500/20" },
    { Icon: Shirt, title: "Moda Premium", color: "from-pink-500/20" },
    { Icon: SprayCan, title: "Perfumes", color: "from-rose-500/20" },
    { Icon: Laptop, title: "MacBooks & PCs", color: "from-slate-500/20" },
    { Icon: Headphones, title: "Áudio Premium", color: "from-indigo-500/20" },
    { Icon: Camera, title: "Câmeras", color: "from-amber-500/20" },
    { Icon: Gift, title: "Presentes", color: "from-red-500/20" },

    // Row 2
    { Icon: Car, title: "Automotivo", color: "from-zinc-500/20" },
    { Icon: Home, title: "Casa & Decor", color: "from-teal-500/20" },
    { Icon: Dumbbell, title: "Fitness", color: "from-green-500/20" },
    { Icon: Baby, title: "Infantil", color: "from-sky-500/20" },
    { Icon: Dog, title: "Pet Shop", color: "from-yellow-500/20" },
    { Icon: Flower, title: "Skincare", color: "from-fuchsia-500/20" },
    { Icon: Utensils, title: "Cozinha", color: "from-orange-500/20" },
    { Icon: Music, title: "Instrumentos", color: "from-violet-500/20" },
    { Icon: Plane, title: "Viagem", color: "from-blue-400/20" },
    { Icon: Bike, title: "Esportes", color: "from-lime-500/20" },
];

// Split into rows
const row1 = allCategories.slice(0, 10);
const row2 = allCategories.slice(10, 20);

// Compact card for mobile - shows icon + short title
const CompactCard = ({ Icon, title, color }: { Icon: LucideIcon; title: string; color: string }) => (
    <div className={`flex-shrink-0 w-[100px] md:w-[140px] lg:w-[200px]`}>
        <div className={`glass-card h-full p-3 md:p-4 lg:p-5 group relative overflow-hidden bg-gradient-to-br ${color} to-transparent`}>
            {/* Icon */}
            <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 p-2 md:p-3 group-hover:border-primary/50 transition-colors">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase leading-tight line-clamp-2">
                    {title}
                </span>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    </div>
);

// Full card for desktop
const FullCard = ({ Icon, title, color }: { Icon: LucideIcon; title: string; color: string }) => (
    <motion.div
        className="flex-shrink-0 w-[220px] hidden lg:block"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
    >
        <div className={`glass-card h-full p-5 group relative overflow-hidden bg-gradient-to-br ${color} to-transparent`}>
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 p-3 group-hover:border-primary/50 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-white uppercase">
                    {title}
                </span>
            </div>
        </div>
    </motion.div>
);

const InfiniteCarousel = ({ items, direction = "left", speed = 30 }: { items: typeof allCategories; direction?: "left" | "right"; speed?: number }) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-2 md:gap-3 lg:gap-4"
                animate={{
                    x: direction === "left" ? [0, -100 * items.length] : [-100 * items.length, 0]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <CompactCard key={`${item.title}-${index}`} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

const WhatYouWillFind = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Decorative accents */}
            <div className="absolute top-1/2 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Stacked on mobile, split on desktop */}
                <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8 mb-8 md:mb-12">
                    <motion.div
                        className="lg:col-span-6 mb-4 lg:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            +20 NICHOS • ATUALIZAÇÃO SEMANAL
                        </span>
                        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight">
                            <span className="text-white">O Que Você </span>
                            <span className="text-gradient-animate">Vai Encontrar</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-6 lg:flex lg:items-end"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-muted-foreground text-sm md:text-base lg:text-lg lg:ml-auto lg:max-w-md lg:text-right">
                            Produtos reais e tendências virais —
                            <span className="text-white font-medium"> tudo num só lugar.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Carousels */}
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                    {/* Row 1 - Left */}
                    <InfiniteCarousel items={row1} direction="left" speed={35} />

                    {/* Row 2 - Right */}
                    <InfiniteCarousel items={row2} direction="right" speed={40} />
                </div>

                {/* Stats - 2x2 grid on mobile, 4 columns on desktop */}
                <motion.div
                    className="grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {[
                        { number: "20+", label: "Nichos" },
                        { number: "500+", label: "Fornecedores" },
                        { number: "1k+", label: "Produtos" },
                        { number: "∞", label: "Lucros" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="glass-card p-3 md:p-4 text-center"
                        >
                            <div className="text-xl md:text-2xl lg:text-3xl font-black text-primary">{stat.number}</div>
                            <div className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatYouWillFind;
