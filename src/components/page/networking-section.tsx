"use client";
// Force rebuild - v2

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Star, Trophy, Sparkles, MessageCircle } from 'lucide-react';

const members = [
    { name: "Carlos M.", role: "Eletrônicos", emoji: "📱", online: true },
    { name: "Ana Paula", role: "Importadora", emoji: "✈️", online: true },
    { name: "Roberto S.", role: "Atacadista", emoji: "👔", online: false },
    { name: "Juliana F.", role: "Fronteirista", emoji: "🛒", online: true },
    { name: "Pedro L.", role: "Dropshipper", emoji: "📦", online: true },
    { name: "Marina C.", role: "Varejo", emoji: "🏪", online: false },
];

const NetworkingSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section id="grupos" className="relative py-24 md:py-32 overflow-hidden bg-black" />;
    }

    return (
        <section id="grupos" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

            {/* Animated Glows */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 8, repeat: 9999 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 6, repeat: 9999 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 mb-6"
                        animate={{
                            boxShadow: ['0 0 20px rgba(234,179,8,0.2)', '0 0 40px rgba(234,179,8,0.4)', '0 0 20px rgba(234,179,8,0.2)']
                        }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <Users className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 font-bold tracking-wide">+3.200 MEMBROS ATIVOS</span>
                    </motion.div>

                    <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        <motion.span
                            className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ duration: 5, repeat: 9999 }}
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            NETWORKING
                        </motion.span>
                    </h2>
                    <p className="text-xl text-white/60">Conecte-se com quem já chegou lá</p>
                </motion.div>

                {/* Visual Grid - Main Focus */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {/* Card 1 - Members Network */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden">
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(234,179,8,0.3), transparent)',
                                    backgroundSize: '200% 100%'
                                }}
                                animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
                                transition={{ duration: 3, repeat: 9999, ease: 'linear' }}
                            />

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/30"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: 9999 }}
                                    >
                                        <Crown className="w-7 h-7 text-black" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Grupo VIP</h3>
                                        <div className="flex items-center gap-2">
                                            <motion.span
                                                className="w-2 h-2 bg-green-400 rounded-full"
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 1, repeat: 9999 }}
                                            />
                                            <span className="text-sm text-green-400">Online agora</span>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: 9999 }}
                                >
                                    <span className="text-yellow-400 font-bold text-sm">EXCLUSIVO</span>
                                </motion.div>
                            </div>

                            {/* Members Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {members.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="relative bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-yellow-500/40 transition-all cursor-pointer group/member"
                                    >
                                        <div className="text-center">
                                            <motion.span
                                                className="text-3xl block mb-2"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 3, repeat: 9999, delay: index * 0.2 }}
                                            >
                                                {member.emoji}
                                            </motion.span>
                                            <h4 className="font-bold text-white text-sm">{member.name}</h4>
                                            <span className="text-xs text-yellow-400/80">{member.role}</span>
                                        </div>
                                        {/* Online indicator */}
                                        {member.online && (
                                            <motion.div
                                                className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"
                                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                                transition={{ duration: 1.5, repeat: 9999 }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Activity Bar */}
                            <motion.div
                                className="mt-6 flex items-center justify-center gap-3 px-4 py-3 bg-white/5 rounded-xl"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: 9999 }}
                            >
                                <MessageCircle className="w-4 h-4 text-yellow-400" />
                                <span className="text-white/60 text-sm">
                                    <span className="text-yellow-400 font-bold">127</span> mensagens hoje
                                </span>
                                <span className="text-white/30">•</span>
                                <span className="text-white/60 text-sm">
                                    <span className="text-green-400 font-bold">48</span> online
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card 2 - Benefits Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full">
                            <div className="flex flex-col h-full justify-between">
                                {/* Icons Grid */}
                                <div className="space-y-4">
                                    {[
                                        { icon: Crown, label: "Fornecedores", color: "from-yellow-400 to-orange-500" },
                                        { icon: Trophy, label: "Estratégias", color: "from-orange-400 to-red-500" },
                                        { icon: Star, label: "Parcerias", color: "from-yellow-300 to-yellow-500" },
                                        { icon: Sparkles, label: "Exclusivos", color: "from-amber-400 to-orange-400" },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-all"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.div
                                                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 4, repeat: 9999, delay: index * 0.3 }}
                                            >
                                                <item.icon className="w-5 h-5 text-black" />
                                            </motion.div>
                                            <span className="text-white font-medium">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom CTA hint */}
                                <motion.div
                                    className="mt-6 text-center"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: 9999 }}
                                >
                                    <span className="text-sm text-white/40">Acesso imediato ao entrar</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-8 mt-12"
                >
                    {[
                        { value: "3.247", label: "Membros" },
                        { value: "150+", label: "Fornecedores" },
                        { value: "24/7", label: "Suporte" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.span
                                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                                animate={{
                                    textShadow: ['0 0 20px rgba(234,179,8,0.3)', '0 0 40px rgba(234,179,8,0.5)', '0 0 20px rgba(234,179,8,0.3)']
                                }}
                                transition={{ duration: 2, repeat: 9999, delay: index * 0.3 }}
                            >
                                {stat.value}
                            </motion.span>
                            <span className="block text-sm text-white/50 mt-1">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NetworkingSection;
