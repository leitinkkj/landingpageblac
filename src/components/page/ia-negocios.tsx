"use client";

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Target, TrendingUp, Lightbulb, Zap } from 'lucide-react';
import { AnimatedParticles, ScanLine } from '@/components/effects/VisualEffects';

const IANegocios = () => {
    return (
        <section id="ia-negocios" className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

            <AnimatedParticles count={10} />

            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left - Content (Breve e Objetivo) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-bold mb-4">
                            <Bot className="w-4 h-4" />
                            COACH PESSOAL
                        </div>

                        {/* Title */}
                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                            <span className="text-white">IA de </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Negócios</span>
                        </h2>

                        {/* Texto Objetivo - Uma linha */}
                        <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-lg mx-auto lg:mx-0">
                            Sua <span className="text-white font-semibold">mentora 24h</span> para escalar vendas
                        </p>

                        {/* Visual Icons - Simples */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[
                                { icon: Target, color: "text-purple-400", border: "border-purple-500/30" },
                                { icon: TrendingUp, color: "text-pink-400", border: "border-pink-500/30" },
                                { icon: Lightbulb, color: "text-amber-400", border: "border-amber-500/30" },
                                { icon: MessageSquare, color: "text-cyan-400", border: "border-cyan-500/30" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={`w-12 h-12 rounded-xl bg-white/5 border ${item.border} flex items-center justify-center`}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Chat Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            className="glass-card p-5 md:p-6 relative overflow-hidden"
                            animate={{ borderColor: ['rgba(168,85,247,0.2)', 'rgba(168,85,247,0.4)', 'rgba(168,85,247,0.2)'] }}
                            transition={{ duration: 4, repeat: 9999 }}
                        >
                            <ScanLine />

                            {/* Chat Header */}
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: 9999 }}
                                >
                                    <Bot className="w-5 h-5 text-white" />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">IA Coach</h4>
                                    <span className="text-green-400 text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                        Online
                                    </span>
                                </div>
                            </div>

                            {/* Chat Messages - Compacto */}
                            <div className="space-y-3">
                                <motion.div
                                    className="flex justify-end"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
                                        <p className="text-white text-sm">Como aumento minhas vendas?</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex justify-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
                                        <p className="text-white text-sm">Aqui vão 3 estratégias:</p>
                                        <ul className="text-muted-foreground text-xs mt-1 space-y-0.5">
                                            <li>✅ Poste 3x/dia nos horários de pico</li>
                                            <li>✅ Stories com enquetes</li>
                                            <li>✅ Parcerias com influencers</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Typing */}
                                <motion.div
                                    className="flex items-center gap-1.5 text-muted-foreground text-xs"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: 9999 }}
                                >
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                    <span className="ml-1">digitando...</span>
                                </motion.div>
                            </div>

                            {/* Glow */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IANegocios;
