"use client";

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, TrendingUp, Target, Rocket, ArrowRight, Play } from 'lucide-react';

const steps = [
    { num: "01", title: "Fundamentos", icon: BookOpen },
    { num: "02", title: "Mineração IA", icon: Target },
    { num: "03", title: "Estratégias", icon: TrendingUp },
    { num: "04", title: "Escala", icon: Rocket },
];

const AulasBlack = () => {
    return (
        <section id="aulas" className="relative py-16 md:py-20 overflow-hidden">
            {/* Subtle background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: 9999 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Compact Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold mb-4"
                        animate={{ boxShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 15px rgba(239,68,68,0.4)', '0 0 0px rgba(239,68,68,0)'] }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <GraduationCap className="w-3.5 h-3.5" />
                        TREINAMENTO EXCLUSIVO
                    </motion.div>

                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-3">
                        <motion.span
                            className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
                        >Aulas Black</motion.span>
                    </h2>

                    <p className="text-muted-foreground text-base max-w-lg mx-auto">
                        De <span className="text-white font-semibold">lojista</span> a{" "}
                        <span className="text-red-400 font-semibold">fornecedor real</span> com IA + fornecedores exclusivos
                    </p>
                </motion.div>

                {/* Visual Timeline/Steps - Horizontal */}
                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent -translate-y-1/2" />
                    <motion.div
                        className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 -translate-y-1/2"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                className="relative flex flex-col items-center text-center group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                {/* Icon Circle */}
                                <motion.div
                                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-red-500/40 flex items-center justify-center mb-3 group-hover:border-red-500 transition-colors cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    animate={{
                                        boxShadow: [
                                            '0 0 0px rgba(239,68,68,0.3)',
                                            '0 0 20px rgba(239,68,68,0.5)',
                                            '0 0 0px rgba(239,68,68,0.3)'
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: 9999, delay: index * 0.5 }}
                                >
                                    {/* Inner glow */}
                                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10" />

                                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-red-400 relative z-10" />

                                    {/* Step number badge */}
                                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                                        {step.num}
                                    </span>

                                    {/* Play overlay on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </motion.div>
                                </motion.div>

                                {/* Title */}
                                <h3 className="font-bold text-white text-sm md:text-base">
                                    {step.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20"
                        animate={{ borderColor: ['rgba(239,68,68,0.2)', 'rgba(239,68,68,0.5)', 'rgba(239,68,68,0.2)'] }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <Rocket className="w-5 h-5 text-red-400" />
                        <span className="text-white text-sm font-medium">
                            Em <span className="text-red-400 font-bold">4 meses</span> você vira fornecedor
                        </span>
                        <ArrowRight className="w-4 h-4 text-red-400" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AulasBlack;
