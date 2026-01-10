"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Play, BookOpen, TrendingUp, Target, Award, Star, Sparkles, Zap, Rocket } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const modules = [
    { num: "01", title: "Fundamentos do Atacado", desc: "Entenda como funciona o mercado", icon: BookOpen },
    { num: "02", title: "Minerando Fornecedores", desc: "Use nossa IA para encontrar os melhores", icon: Target },
    { num: "03", title: "Estratégias de Revenda", desc: "Venda com alta margem de lucro", icon: TrendingUp },
    { num: "04", title: "De Lojista a Fornecedor", desc: "O método para escalar grande", icon: Rocket },
];

const AulasBlack = () => {
    return (
        <section id="aulas" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={GraduationCap} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Award} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={BookOpen} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold mb-6"
                        animate={{ boxShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 20px rgba(239,68,68,0.5)', '0 0 0px rgba(239,68,68,0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <GraduationCap className="w-4 h-4" />
                        TREINAMENTO EXCLUSIVO
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <motion.span
                            className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
                            animate={{ textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 40px rgba(239,68,68,0.8)', '0 0 20px rgba(239,68,68,0.5)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >Aulas Black</motion.span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        O <span className="text-primary font-semibold">Método Black</span> para você sair de um
                        <span className="text-white font-semibold"> lojista</span> para um
                        <span className="text-red-400 font-semibold"> fornecedor real</span>.
                        Usando nossa IA + nossos fornecedores exclusivos.
                    </p>
                </motion.div>

                {/* Modules Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.num}
                            className="glass-card p-6 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            animate={{ borderColor: ['rgba(239,68,68,0.1)', 'rgba(239,68,68,0.3)', 'rgba(239,68,68,0.1)'] }}
                        >
                            {/* Shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                            />

                            {/* Module Number */}
                            <motion.span
                                className="text-5xl font-black text-red-500/20 absolute top-4 right-4"
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                {module.num}
                            </motion.span>

                            {/* Icon */}
                            <motion.div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center mb-4"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                            >
                                <module.icon className="w-6 h-6 text-red-400" />
                            </motion.div>

                            <h3 className="font-bold text-white text-lg mb-2">{module.title}</h3>
                            <p className="text-muted-foreground text-sm">{module.desc}</p>

                            {/* Play button on hover */}
                            <motion.div
                                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                                    <Play className="w-5 h-5 text-white fill-white" />
                                </div>
                            </motion.div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.p
                        className="inline-flex items-center gap-2 text-muted-foreground"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Rocket className="w-5 h-5 text-red-400" />
                        Em <span className="text-white font-semibold">4 meses</span> você pode virar fornecedor real
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default AulasBlack;
