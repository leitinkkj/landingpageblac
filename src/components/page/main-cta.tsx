"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Check, Bot, Users, Package, Search, Shield, Zap, ArrowRight, Star, Sparkles, Crown, DollarSign, Flame, Store, Plane, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const included = [
    { icon: Search, title: "IA Mineradora de Promoções" },
    { icon: Bot, title: "IA de Negócios (Coach)" },
    { icon: Store, title: "Marketplace Tempo Real" },
    { icon: Users, title: "Grupos de Networking VIP" },
    { icon: GraduationCap, title: "Aulas Black Completas" },
    { icon: Package, title: "Lista de Fornecedores" },
    { icon: Plane, title: "Lista de Fronteireiros" },
    { icon: Zap, title: "Atualizações Semanais" },
];


const MainCTA = () => {
    return (
        <section id="price-section" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={30} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={DollarSign} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Star} className="top-[15%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Crown} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Flame} className="bottom-[15%] right-[5%] w-7 h-7" delay={0.5} />
            <FloatingIcon Icon={Sparkles} className="top-[50%] left-[3%] w-5 h-5" delay={1.5} />
            <FloatingIcon Icon={Zap} className="top-[40%] right-[3%] w-6 h-6" delay={2.5} />

            {/* Glow effects */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Split Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-sm rounded-full mb-6"
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: ['0 0 0px hsl(var(--primary))', '0 0 30px hsl(var(--primary))', '0 0 0px hsl(var(--primary))']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>🔥</motion.span>
                            OFERTA ESPECIAL
                        </motion.div>

                        {/* Title */}
                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
                            <span className="text-white">Acesso </span>
                            <motion.span
                                className="text-gradient-animate block"
                                animate={{ textShadow: ['0 0 20px hsl(var(--primary) / 0.5)', '0 0 50px hsl(var(--primary) / 0.8)', '0 0 20px hsl(var(--primary) / 0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Completo</motion.span>
                            <span className="text-white">ao Painel</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8">
                            Tudo que você precisa para <span className="text-white font-semibold">encontrar os melhores preços</span> e
                            <span className="text-primary font-semibold"> escalar seu negócio</span>.
                        </p>

                        {/* Included grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {included.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.div
                                            className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                        >
                                            <Check className="w-3 h-3 text-primary" />
                                        </motion.div>
                                        <span className="text-white text-sm">{item.title}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right - Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Animated glow behind card */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-red-500/40 to-orange-500/40 rounded-3xl blur-2xl"
                                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            {/* Card */}
                            <motion.div
                                className="relative glass-card p-8 md:p-10"
                                animate={{
                                    borderColor: [
                                        'hsl(var(--primary) / 0.3)',
                                        'hsl(var(--primary) / 0.8)',
                                        'rgba(255, 69, 0, 0.8)',
                                        'hsl(var(--primary) / 0.3)'
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                {/* Shine effect */}
                                <motion.div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        animate={{ x: ['-200%', '200%'] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </motion.div>

                                <div className="relative z-10">
                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <p className="text-muted-foreground line-through text-xl mb-2">De R$350,00</p>
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-3xl text-muted-foreground">R$</span>
                                            <motion.span
                                                className="text-7xl md:text-8xl font-black text-white"
                                                animate={{
                                                    scale: [1, 1.03, 1],
                                                    textShadow: ['0 0 30px hsl(var(--primary) / 0.5)', '0 0 60px hsl(var(--primary) / 0.8)', '0 0 30px hsl(var(--primary) / 0.5)']
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                67
                                            </motion.span>
                                        </div>
                                        <motion.p
                                            className="text-primary font-semibold text-lg mt-2"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            Pagamento único • Acesso vitalício
                                        </motion.p>
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href="https://go.use-dice.com/xHMb3hAk1loWHCMNN-c1_5QGAtXl3vq1"
                                        onClick={() => {
                                            if (typeof window !== 'undefined' && (window as any).fbq) {
                                                (window as any).fbq('track', 'InitiateCheckout', {
                                                    content_name: 'Black Shoppe - Acesso Completo',
                                                    content_category: 'Produto Digital',
                                                    value: 67.00,
                                                    currency: 'BRL'
                                                });
                                            }
                                        }}
                                    >
                                        <motion.div
                                            animate={{ boxShadow: ['0 0 20px hsl(var(--primary) / 0.5)', '0 0 50px hsl(var(--primary) / 0.8)', '0 0 20px hsl(var(--primary) / 0.5)'] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="rounded-2xl"
                                        >
                                            <Button
                                                size="lg"
                                                className="w-full btn-3d font-bold text-xl py-8 rounded-2xl bg-gradient-to-r from-primary via-red-500 to-orange-500 group"
                                            >
                                                QUERO ACESSO AGORA
                                                <motion.span
                                                    className="ml-2 inline-flex"
                                                    animate={{ x: [0, 8, 0] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    <ArrowRight className="w-6 h-6" />
                                                </motion.span>
                                            </Button>
                                        </motion.div>
                                    </Link>

                                    {/* Trust badges */}
                                    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                                        <motion.span
                                            className="flex items-center gap-2"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Shield className="w-4 h-4 text-green-500" />
                                            Pagamento seguro
                                        </motion.span>
                                        <motion.span
                                            className="flex items-center gap-2"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                        >
                                            <Zap className="w-4 h-4 text-primary" />
                                            7 dias garantia
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MainCTA;
