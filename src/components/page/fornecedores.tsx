"use client";

import { motion } from 'framer-motion';
import { Package, Phone, MapPin, CheckCircle, RefreshCcw, Star, Sparkles, Crown, Shield, Zap } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

// NICHOS MAIS PROCURADOS - Organizados por popularidade
const nichosRow1 = [
    { name: "Perfumes", icon: "🧴" },
    { name: "PODs", icon: "💨" },
    { name: "Moda", icon: "👔" },
    { name: "Relógios", icon: "⌚" },
    { name: "Calçados", icon: "👟" },
    { name: "Bonés", icon: "🧢" },
    { name: "Celulares", icon: "📱" },
    { name: "Tênis", icon: "👟" },
    { name: "Óculos", icon: "🕶️" },
    { name: "Bolsas", icon: "👜" },
    { name: "Streetwear", icon: "🧥" },
    { name: "Joias", icon: "💍" },
    { name: "Cosméticos", icon: "💄" },
    { name: "Games", icon: "🎮" },
    { name: "Eletrônicos", icon: "🔌" },
];

const nichosRow2 = [
    { name: "Vapes", icon: "💨" },
    { name: "Roupas", icon: "👗" },
    { name: "Camisetas", icon: "👕" },
    { name: "Jaquetas", icon: "🧥" },
    { name: "Chinelos", icon: "🩴" },
    { name: "Pulseiras", icon: "📿" },
    { name: "Correntes", icon: "⛓️" },
    { name: "Brincos", icon: "💎" },
    { name: "Carteiras", icon: "👛" },
    { name: "Mochilas", icon: "🎒" },
    { name: "Notebooks", icon: "💻" },
    { name: "Fones", icon: "🎧" },
    { name: "Smartwatch", icon: "⌚" },
    { name: "Suplementos", icon: "💪" },
    { name: "Whey", icon: "🥛" },
];

const nichosRow3 = [
    { name: "Camisas", icon: "👔" },
    { name: "Short", icon: "🩳" },
    { name: "Meias", icon: "🧦" },
    { name: "Lingerie", icon: "👙" },
    { name: "Roupas Fitness", icon: "🏋️" },
    { name: "Acessórios", icon: "💍" },
    { name: "Cabelo", icon: "💇" },
    { name: "Skincare", icon: "🧖" },
    { name: "Maquiagem", icon: "💄" },
    { name: "Unhas", icon: "💅" },
    { name: "Barbearia", icon: "💈" },
    { name: "Essências", icon: "🌸" },
    { name: "Árabes", icon: "🕌" },
    { name: "Importados", icon: "✈️" },
    { name: "Originais", icon: "✅" },
];

const NichoCard = ({ nicho, index }: { nicho: { name: string; icon: string }; index: number }) => (
    <motion.div
        className="flex-shrink-0 w-[85px] sm:w-[110px] md:w-[160px] p-2 sm:p-3 md:p-4 mx-1 sm:mx-2 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-primary/20 backdrop-blur-sm relative overflow-hidden group"
        whileHover={{
            scale: 1.1,
            y: -5,
            borderColor: 'hsl(var(--primary))',
            boxShadow: '0 0 30px hsl(var(--primary) / 0.4)'
        }}
        transition={{ type: "spring", stiffness: 400 }}
    >
        {/* Glow effect */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />

        {/* Shine sweep */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        />

        <div className="relative z-10 text-center">
            <span className="text-xl sm:text-2xl md:text-4xl block mb-1 md:mb-2">
                {nicho.icon}
            </span>
            <h4 className="font-bold text-white text-[10px] sm:text-xs md:text-sm truncate">{nicho.name}</h4>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rotate-45 translate-x-8 -translate-y-8 group-hover:bg-primary/40 transition-colors" />
        </div>
    </motion.div>
);

const InfiniteCarousel = ({ items, direction = 'left', speed = 30 }: {
    items: typeof nichosRow1;
    direction?: 'left' | 'right';
    speed?: number;
}) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden py-4">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
                }}
                transition={{
                    x: {
                        duration: speed,
                        repeat: 9999,
                        ease: 'linear',
                    }
                }}
            >
                {duplicatedItems.map((nicho, index) => (
                    <NichoCard key={`${nicho.name}-${index}`} nicho={nicho} index={index % items.length} />
                ))}
            </motion.div>
        </div>
    );
};

const Fornecedores = () => {
    return (
        <section id="fornecedores" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={20} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Package} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Phone} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={CheckCircle} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />
            <FloatingIcon Icon={Crown} className="top-[50%] left-[3%] w-6 h-6" delay={1.5} />
            <FloatingIcon Icon={Zap} className="top-[40%] right-[3%] w-5 h-5" delay={2.2} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: 9999 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 6, repeat: 9999, delay: 2 }}
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold mb-6"
                        animate={{
                            boxShadow: ['0 0 0px rgba(249, 115, 22, 0)', '0 0 20px rgba(249, 115, 22, 0.5)', '0 0 0px rgba(249, 115, 22, 0)'],
                            borderColor: ['rgba(249, 115, 22, 0.3)', 'rgba(249, 115, 22, 1)', 'rgba(249, 115, 22, 0.3)']
                        }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: 9999, ease: "linear" }}>
                            <RefreshCcw className="w-4 h-4" />
                        </motion.span>
                        ATUALIZADA SEMANALMENTE
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <span className="text-white">Lista de </span>
                        <motion.span
                            className="text-gradient-animate"
                            animate={{ textShadow: ['0 0 20px rgba(249, 115, 22, 0.5)', '0 0 40px rgba(249, 115, 22, 0.8)', '0 0 20px rgba(249, 115, 22, 0.5)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        >Fornecedores</motion.span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
                        Fornecedores de <span className="text-primary font-semibold">todos os nichos</span> imagináveis com
                        <span className="text-white font-semibold"> atualizações semanais</span>.
                    </p>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto">
                        WhatsApp direto, endereço completo e contato verificado.
                    </p>
                </motion.div>

                {/* Infinite Carousels - 3 rows moving in different directions */}
                <div className="space-y-2 md:space-y-4 mb-12">
                    <InfiniteCarousel items={nichosRow1} direction="left" speed={40} />
                    <InfiniteCarousel items={nichosRow2} direction="right" speed={35} />
                    <InfiniteCarousel items={nichosRow3} direction="left" speed={45} />
                </div>

                {/* Stats Banner */}
                <motion.div
                    className="glass-card p-6 md:p-8 max-w-4xl mx-auto mb-12 relative overflow-hidden border-primary/30"
                    style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.15)' }}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Shine sweep */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: 9999, repeatDelay: 2 }}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { label: "Nichos", value: "40+", icon: "📦" },
                            { label: "Fornecedores", value: "500+", icon: "🏪" },
                            { label: "Atualizações", value: "Semanal", icon: "🔄" },
                            { label: "Verificados", value: "100%", icon: "✅" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.span
                                    className="text-2xl md:text-3xl block mb-2"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: 9999, delay: index * 0.3 }}
                                >
                                    {stat.icon}
                                </motion.span>
                                <motion.h4
                                    className="text-2xl md:text-3xl font-black text-white mb-1"
                                    animate={{
                                        textShadow: ['0 0 0px', '0 0 20px rgba(249, 115, 22, 1)', '0 0 0px']
                                    }}
                                    transition={{ duration: 2, repeat: 9999, delay: index * 0.2 }}
                                >
                                    {stat.value}
                                </motion.h4>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { icon: Phone, text: "WhatsApp Direto" },
                        { icon: MapPin, text: "Endereço Completo" },
                        { icon: Shield, text: "100% Verificados" },
                        { icon: RefreshCcw, text: "Atualização Semanal" },
                    ].map((item, index) => (
                        <motion.div
                            key={item.text}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            whileHover={{
                                borderColor: 'hsl(var(--primary))',
                                backgroundColor: 'hsl(var(--primary) / 0.1)'
                            }}
                            animate={{
                                y: [0, -3, 0],
                                borderColor: ['rgba(255,255,255,0.1)', 'rgba(249, 115, 22, 0.3)', 'rgba(255,255,255,0.1)']
                            }}
                            transition={{ duration: 3, repeat: 9999, delay: index * 0.4 }}
                        >
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 5, repeat: 9999, ease: "linear", delay: index }}
                            >
                                <item.icon className="w-4 h-4 text-primary" />
                            </motion.span>
                            <span className="text-sm text-muted-foreground">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Fornecedores;
