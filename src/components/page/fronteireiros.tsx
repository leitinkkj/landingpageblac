"use client";

import { motion } from 'framer-motion';
import { Plane, Truck, DollarSign, MapPin, Package, ShieldCheck, Star, Sparkles, Zap } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const routines = [
    { icon: MapPin, title: "Paraguay", desc: "Ciudad del Este" },
    { icon: Plane, title: "Importação", desc: "De qualquer lugar" },
    { icon: Truck, title: "Entrega", desc: "Na sua porta" },
    { icon: DollarSign, title: "Lucro", desc: "Máxima margem" },
];

const Fronteireiros = () => {
    return (
        <section id="fronteireiros" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Plane} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Truck} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Package} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: 9999 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-bold mb-6"
                            animate={{ boxShadow: ['0 0 0px rgba(14,165,233,0)', '0 0 20px rgba(14,165,233,0.5)', '0 0 0px rgba(14,165,233,0)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        >
                            <Plane className="w-4 h-4" />
                            IMPORTAÇÃO FACILITADA
                        </motion.div>

                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
                            <span className="text-white">Lista de </span>
                            <motion.span
                                className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
                                animate={{ textShadow: ['0 0 20px rgba(14,165,233,0.5)', '0 0 40px rgba(14,165,233,0.8)', '0 0 20px rgba(14,165,233,0.5)'] }}
                                transition={{ duration: 2, repeat: 9999 }}
                            >Fronteireiros</motion.span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                            Aprenda a pegar seus produtos <span className="text-sky-400 font-semibold">de fora</span> com a
                            <span className="text-white font-semibold"> maior quantidade de lucro</span>.
                            Nossos fronteireiros buscam e trazem pra você!
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {[
                                { icon: ShieldCheck, text: "Fronteireiros verificados e confiáveis" },
                                { icon: DollarSign, text: "Maximize sua margem de lucro" },
                                { icon: Truck, text: "Entrega garantida no Brasil" },
                                { icon: Package, text: "Qualquer tipo de produto" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <motion.div
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: 9999, delay: index * 0.2 }}
                                    >
                                        <item.icon className="w-5 h-5 text-sky-400" />
                                    </motion.div>
                                    <span className="text-white">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            className="glass-card p-8 relative overflow-hidden"
                            animate={{ borderColor: ['rgba(14,165,233,0.2)', 'rgba(14,165,233,0.5)', 'rgba(14,165,233,0.2)'] }}
                            transition={{ duration: 4, repeat: 9999 }}
                        >
                            <ScanLine />

                            {/* Route visualization */}
                            <div className="relative">
                                {/* Connection line */}
                                <motion.div
                                    className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-500/50 via-cyan-500 to-sky-500/50"
                                    animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                                    transition={{ duration: 3, repeat: 9999 }}
                                />

                                <div className="grid grid-cols-4 gap-4 relative z-10">
                                    {routines.map((routine, index) => (
                                        <motion.div
                                            key={routine.title}
                                            className="text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center mb-3"
                                                animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
                                                transition={{ duration: 3, repeat: 9999, delay: index * 0.3 }}
                                            >
                                                <routine.icon className="w-6 h-6 text-sky-400" />
                                            </motion.div>
                                            <h4 className="font-bold text-white text-xs">{routine.title}</h4>
                                            <p className="text-muted-foreground text-xs">{routine.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <motion.div
                                    className="text-center p-4 bg-white/5 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.span
                                        className="text-3xl font-black text-sky-400"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: 9999 }}
                                    >50+</motion.span>
                                    <p className="text-muted-foreground text-xs">Fronteireiros ativos</p>
                                </motion.div>
                                <motion.div
                                    className="text-center p-4 bg-white/5 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.span
                                        className="text-3xl font-black text-cyan-400"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: 9999, delay: 0.5 }}
                                    >60%</motion.span>
                                    <p className="text-muted-foreground text-xs">Economia média</p>
                                </motion.div>
                            </div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: 9999 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Fronteireiros;
