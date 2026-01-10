"use client";

import { motion } from 'framer-motion';
import { Store, MapPin, Clock, ShoppingBag, Truck, Tag, Star, Zap, Sparkles, TrendingDown } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const locations = [
    { name: "25 de Março", city: "São Paulo", icon: "🏪" },
    { name: "Brás", city: "São Paulo", icon: "🛍️" },
    { name: "Santa Efigênia", city: "São Paulo", icon: "📱" },
    { name: "Ciudad del Este", city: "Paraguai", icon: "🇵🇾" },
];

const liveProducts = [
    { name: "iPhone 14 Pro", price: "R$ 3.890", discount: "-45%", time: "há 2 min" },
    { name: "PS5 Slim", price: "R$ 2.450", discount: "-38%", time: "há 5 min" },
    { name: "Air Jordan 1", price: "R$ 280", discount: "-65%", time: "há 12 min" },
];

const Marketplace = () => {
    return (
        <section id="marketplace" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={ShoppingBag} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Store} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Tag} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={TrendingDown} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold mb-6"
                        animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 20px rgba(34,197,94,0.5)', '0 0 0px rgba(34,197,94,0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                            <Clock className="w-4 h-4" />
                        </motion.span>
                        EM TEMPO REAL
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <motion.span
                            className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                            animate={{ textShadow: ['0 0 20px rgba(34,197,94,0.5)', '0 0 40px rgba(34,197,94,0.8)', '0 0 20px rgba(34,197,94,0.5)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >Marketplace</motion.span>
                        <span className="text-white"> Ao Vivo</span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Navegue na <span className="text-primary font-semibold">25 de Março</span> e no
                        <span className="text-primary font-semibold"> Brás</span> inteiro sem sair da sua casa.
                        Promoções em <span className="text-green-400 font-semibold">tempo real</span>!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left - Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Centros Conectados
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {locations.map((location, index) => (
                                <motion.div
                                    key={location.name}
                                    className="glass-card p-5 text-center group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    animate={{ borderColor: ['hsl(var(--primary) / 0.1)', 'rgba(34,197,94,0.3)', 'hsl(var(--primary) / 0.1)'] }}
                                >
                                    <motion.span
                                        className="text-4xl mb-3 block"
                                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        {location.icon}
                                    </motion.span>
                                    <h4 className="font-bold text-white text-sm">{location.name}</h4>
                                    <p className="text-muted-foreground text-xs">{location.city}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Live Feed */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white text-xl flex items-center gap-2">
                                <motion.span
                                    className="w-2 h-2 bg-green-400 rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                                Ofertas Surgindo Agora
                            </h3>
                        </div>

                        <motion.div
                            className="glass-card p-5 relative overflow-hidden"
                            animate={{ borderColor: ['rgba(34,197,94,0.2)', 'rgba(34,197,94,0.5)', 'rgba(34,197,94,0.2)'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <ScanLine />

                            <div className="space-y-4">
                                {liveProducts.map((product, index) => (
                                    <motion.div
                                        key={product.name}
                                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 group hover:border-green-500/30 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center"
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                            >
                                                <ShoppingBag className="w-6 h-6 text-green-400" />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{product.name}</h4>
                                                <span className="text-muted-foreground text-xs">{product.time}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <motion.span
                                                className="text-lg font-black text-green-400"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >{product.price}</motion.span>
                                            <span className="block text-xs text-green-400/70">{product.discount}</span>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* More indicator */}
                                <motion.div
                                    className="text-center py-3 text-muted-foreground text-sm"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    +127 ofertas surgindo agora...
                                </motion.div>
                            </div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;
