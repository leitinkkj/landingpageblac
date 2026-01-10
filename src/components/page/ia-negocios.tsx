"use client";

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Target, TrendingUp, Lightbulb, Brain, Sparkles, Star, Zap } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const features = [
    { icon: Target, title: "Defina Metas", desc: "Estabeleça objetivos claros pro seu negócio" },
    { icon: TrendingUp, title: "Estratégias", desc: "Receba estratégias personalizadas" },
    { icon: Lightbulb, title: "Dicas Diárias", desc: "Insights para crescer seu faturamento" },
    { icon: MessageSquare, title: "Chat 24/7", desc: "Tire dúvidas a qualquer momento" },
];

const IANegocios = () => {
    return (
        <section id="ia-negocios" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Brain} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Lightbulb} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Target} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-bold mb-6"
                            animate={{ boxShadow: ['0 0 0px rgba(168,85,247,0)', '0 0 20px rgba(168,85,247,0.5)', '0 0 0px rgba(168,85,247,0)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Brain className="w-4 h-4" />
                            SEU COACH DE NEGÓCIOS
                        </motion.div>

                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
                            <span className="text-white">IA de </span>
                            <motion.span
                                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                animate={{ textShadow: ['0 0 20px rgba(168,85,247,0.5)', '0 0 40px rgba(168,85,247,0.8)', '0 0 20px rgba(168,85,247,0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Negócios</motion.span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                            Uma inteligência artificial que é tipo seu <span className="text-white font-semibold">treinador pessoal</span>,
                            seu <span className="text-purple-400 font-semibold">coach do seu negócio</span>.
                            Ela te guia passo a passo para escalar suas vendas.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="glass-card p-4 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                >
                                    <motion.div
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-3"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        <feature.icon className="w-5 h-5 text-purple-400" />
                                    </motion.div>
                                    <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                                    <p className="text-muted-foreground text-xs">{feature.desc}</p>
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
                        className="relative"
                    >
                        {/* Chat Interface Mockup */}
                        <motion.div
                            className="glass-card p-6 relative overflow-hidden"
                            animate={{ borderColor: ['rgba(168,85,247,0.2)', 'rgba(168,85,247,0.5)', 'rgba(168,85,247,0.2)'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <ScanLine />

                            {/* Chat Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Bot className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-white">IA Coach Black</h4>
                                    <motion.span
                                        className="text-green-400 text-xs flex items-center gap-1"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                                        Online agora
                                    </motion.span>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-4">
                                {/* User message */}
                                <motion.div
                                    className="flex justify-end"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
                                        <p className="text-white text-sm">Como faço pra aumentar minhas vendas no Instagram?</p>
                                    </div>
                                </motion.div>

                                {/* Bot message */}
                                <motion.div
                                    className="flex justify-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 max-w-[80%]">
                                        <p className="text-white text-sm mb-2">Ótima pergunta! Aqui vão 3 estratégias comprovadas:</p>
                                        <ul className="text-muted-foreground text-xs space-y-1">
                                            <li>✅ Poste 3x ao dia nos horários de pico</li>
                                            <li>✅ Use stories com enquetes e perguntas</li>
                                            <li>✅ Faça parcerias com micro-influencers</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Typing indicator */}
                                <motion.div className="flex items-center gap-2 text-muted-foreground text-xs">
                                    <motion.span
                                        className="flex gap-1"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                                    </motion.span>
                                    IA está digitando...
                                </motion.div>
                            </div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
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

export default IANegocios;
