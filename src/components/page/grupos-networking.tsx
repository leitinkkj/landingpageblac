"use client";

import { motion } from 'framer-motion';
import { Users, MessageCircle, Crown, Star, Trophy, Handshake, Sparkles, Zap } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const players = [
    { name: "Carlos M.", role: "Fornecedor de Eletrônicos", emoji: "📱" },
    { name: "Ana Paula", role: "Importadora", emoji: "✈️" },
    { name: "Roberto S.", role: "Atacadista de Moda", emoji: "👔" },
    { name: "Juliana F.", role: "Fronteirista", emoji: "🛒" },
];

const GruposNetworking = () => {
    return (
        <section id="grupos" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Users} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Crown} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Trophy} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left - Visual (Chat groups) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <motion.div
                            className="glass-card p-6 relative overflow-hidden"
                            animate={{ borderColor: ['rgba(234,179,8,0.2)', 'rgba(234,179,8,0.5)', 'rgba(234,179,8,0.2)'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <ScanLine />

                            {/* Group Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Users className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-white">Grupo VIP Black Shoppe</h4>
                                    <span className="text-muted-foreground text-xs">3.247 membros</span>
                                </div>
                            </div>

                            {/* Players */}
                            <div className="space-y-3 mb-4">
                                {players.map((player, index) => (
                                    <motion.div
                                        key={player.name}
                                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5, borderColor: 'rgba(234,179,8,0.3)' }}
                                    >
                                        <span className="text-2xl">{player.emoji}</span>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-sm">{player.name}</h5>
                                            <span className="text-yellow-400 text-xs flex items-center gap-1">
                                                <Crown className="w-3 h-3" />
                                                {player.role}
                                            </span>
                                        </div>
                                        <motion.span
                                            className="w-2 h-2 bg-green-400 rounded-full"
                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Activity */}
                            <motion.div
                                className="text-center py-3 text-muted-foreground text-sm"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <MessageCircle className="w-4 h-4 inline mr-2" />
                                127 mensagens hoje
                            </motion.div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-bold mb-6"
                            animate={{ boxShadow: ['0 0 0px rgba(234,179,8,0)', '0 0 20px rgba(234,179,8,0.5)', '0 0 0px rgba(234,179,8,0)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Handshake className="w-4 h-4" />
                            CONEXÕES REAIS
                        </motion.div>

                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
                            <span className="text-white">Grupos de </span>
                            <motion.span
                                className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                                animate={{ textShadow: ['0 0 20px rgba(234,179,8,0.5)', '0 0 40px rgba(234,179,8,0.8)', '0 0 20px rgba(234,179,8,0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Networking</motion.span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                            Grupos de troca de papo com <span className="text-yellow-400 font-semibold">grandes players do mercado</span>.
                            Tire dúvidas, receba estratégias e <span className="text-white font-semibold">alavanque seu pequeno negócio</span>
                            com quem já chegou lá.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {[
                                { icon: Crown, text: "Acesso a fornecedores exclusivos" },
                                { icon: MessageCircle, text: "Tire dúvidas com quem fatura alto" },
                                { icon: Trophy, text: "Estratégias comprovadas de vendas" },
                                { icon: Handshake, text: "Parcerias e oportunidades" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <motion.div
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        <item.icon className="w-5 h-5 text-yellow-400" />
                                    </motion.div>
                                    <span className="text-white">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GruposNetworking;
