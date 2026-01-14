"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
    Check, Bot, Users, Package, Search, Shield, Zap, ArrowRight, Star, Sparkles,
    Crown, DollarSign, Flame, Store, Plane, GraduationCap, Clock, BadgeCheck,
    Gift, TrendingUp, Award, Heart, Lock, RefreshCw, Infinity, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const included = [
    { icon: Search, title: "IA Mineradora de Promoções", desc: "Encontra os melhores preços automaticamente" },
    { icon: Bot, title: "IA de Negócios (Coach)", desc: "Seu mentor 24h para estratégias" },
    { icon: Store, title: "Marketplace Tempo Real", desc: "Ofertas atualizadas a cada minuto" },
    { icon: Users, title: "Grupos de Networking VIP", desc: "Comunidade ativa de lojistas" },
    { icon: GraduationCap, title: "Aulas Black Completas", desc: "Do zero ao avançado" },
    { icon: Package, title: "Lista de Fornecedores", desc: "+500 fornecedores verificados" },
    { icon: Plane, title: "Lista de Fronteireiros", desc: "Entregas do Paraguai garantidas" },
    { icon: Zap, title: "Atualizações Semanais", desc: "Novos fornecedores toda semana" },
];

const testimonialPics = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
];

const MainCTA = () => {

    return (
        <section id="price-section" className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(26,100%,50%,0.15)_0%,_transparent_60%)]" />

            <AnimatedParticles count={25} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={DollarSign} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Star} className="top-[15%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Crown} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Flame} className="bottom-[15%] right-[5%] w-7 h-7" delay={0.5} />
            <FloatingIcon Icon={Gift} className="top-[50%] left-[3%] w-5 h-5" delay={1.5} />
            <FloatingIcon Icon={Award} className="top-[40%] right-[3%] w-6 h-6" delay={2.5} />

            {/* Multiple glow effects */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/15 rounded-full blur-[150px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 6, repeat: 9999 }}
            />
            <motion.div
                className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 5, repeat: 9999, delay: 1 }}
            />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Urgency Banner */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 rounded-full mb-6"
                        animate={{
                            boxShadow: ['0 0 20px rgba(239,68,68,0.3)', '0 0 40px rgba(239,68,68,0.6)', '0 0 20px rgba(239,68,68,0.3)'],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 0.5, repeat: 9999 }}
                        >
                            <AlertCircle className="w-5 h-5 text-red-400" />
                        </motion.div>
                        <span className="text-red-400 font-bold text-sm md:text-base">⚡ OFERTA POR TEMPO LIMITADO</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: 9999 }}
                        >
                            <Flame className="w-5 h-5 text-orange-400" />
                        </motion.div>
                    </motion.div>

                    {/* Main Title */}
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4">
                        <span className="text-white">Garanta Seu </span>
                        <motion.span
                            className="text-gradient-animate inline-block"
                            animate={{ textShadow: ['0 0 20px rgba(249, 115, 22, 0.5)', '0 0 50px rgba(249, 115, 22, 0.8)', '0 0 20px rgba(249, 115, 22, 0.5)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        >Acesso VIP</motion.span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        O painel <span className="text-primary font-semibold">#1 do Brasil</span> para lojistas que querem
                        <span className="text-white font-semibold"> lucrar mais</span> com atacado e varejo
                    </p>
                </motion.div>



                {/* Main Content Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 items-start max-w-7xl mx-auto">

                    {/* Left - Benefits (takes 3 columns) */}
                    <motion.div
                        className="lg:col-span-3 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* What's Included Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: 9999 }}
                            >
                                <Gift className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold text-white">O que está incluso:</h3>
                                <p className="text-muted-foreground text-sm">8 ferramentas completas por um único preço</p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-2 gap-3">
                            {included.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="glass-card p-4 border-white/10 hover:border-primary/40 transition-all group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -3, scale: 1.02 }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <motion.div
                                                className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors"
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 4, repeat: 9999, delay: index * 0.2 }}
                                            >
                                                <Icon className="w-5 h-5 text-primary" />
                                            </motion.div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 2, repeat: 9999, delay: index * 0.1 }}
                                                    >
                                                        <Check className="w-4 h-4 text-green-400" />
                                                    </motion.div>
                                                </div>
                                                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Extra Value Banner */}
                        <motion.div
                            className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: 9999 }}
                                >
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </motion.div>
                                <div>
                                    <p className="text-green-400 font-bold text-lg">Valor total: R$ 2.847,00</p>
                                    <p className="text-muted-foreground text-sm">Tudo isso por apenas <span className="text-white font-bold">R$ 67</span> (economia de 97%)</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Pricing Card (takes 2 columns) */}
                    <motion.div
                        className="lg:col-span-2 order-1 lg:order-2 w-full flex justify-center"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative sticky top-24 w-full max-w-md mx-auto">
                            {/* Animated glow behind card */}
                            <motion.div
                                className="absolute -inset-3 bg-gradient-to-r from-primary via-red-500 to-orange-500 rounded-3xl blur-xl"
                                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: 9999 }}
                            />

                            {/* Popular Badge */}
                            <motion.div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center gap-2 shadow-lg"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: 9999 }}
                                >
                                    <Crown className="w-4 h-4 text-black" />
                                    <span className="text-black font-bold text-sm uppercase">Mais Vendido</span>
                                    <Star className="w-4 h-4 text-black fill-black" />
                                </motion.div>
                            </motion.div>

                            {/* Card */}
                            <motion.div
                                className="relative glass-card p-6 md:p-8 border-2 border-primary/50 overflow-hidden"
                                animate={{
                                    borderColor: [
                                        'rgba(249, 115, 22, 0.5)',
                                        'rgba(249, 115, 22, 1)',
                                        'rgba(255, 69, 0, 0.8)',
                                        'rgba(249, 115, 22, 0.5)'
                                    ]
                                }}
                                transition={{ duration: 3, repeat: 9999 }}
                            >
                                {/* Corner decorations */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
                                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full" />

                                {/* Shine effect */}
                                <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        animate={{ x: ['-200%', '200%'] }}
                                        transition={{ duration: 3, repeat: 9999, repeatDelay: 1 }}
                                    />
                                </motion.div>

                                <div className="relative z-10 pt-4">
                                    {/* Discount Badge */}
                                    <div className="flex justify-center mb-4">
                                        <motion.div
                                            className="px-4 py-2 bg-red-500 rounded-lg"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 1, repeat: 9999 }}
                                        >
                                            <span className="text-white font-black text-lg">-81% OFF</span>
                                        </motion.div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-6">
                                        <p className="text-muted-foreground line-through text-xl mb-1">De R$ 350,00</p>
                                        <div className="flex items-start justify-center">
                                            <span className="text-3xl text-muted-foreground mt-2">R$</span>
                                            <motion.span
                                                className="text-7xl md:text-8xl font-black text-white leading-none"
                                                animate={{
                                                    scale: [1, 1.02, 1],
                                                    textShadow: ['0 0 30px rgba(249, 115, 22, 0.5)', '0 0 60px rgba(249, 115, 22, 0.8)', '0 0 30px rgba(249, 115, 22, 0.5)']
                                                }}
                                                transition={{ duration: 2, repeat: 9999 }}
                                            >
                                                67
                                            </motion.span>
                                        </div>
                                        <motion.div
                                            className="flex items-center justify-center gap-2 mt-2"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: 9999 }}
                                        >
                                            <Infinity className="w-5 h-5 text-primary" />
                                            <span className="text-primary font-semibold">Pagamento único • Acesso vitalício</span>
                                        </motion.div>
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
                                            animate={{
                                                boxShadow: ['0 0 20px rgba(249, 115, 22, 0.5)', '0 0 60px rgba(249, 115, 22, 0.9)', '0 0 20px rgba(249, 115, 22, 0.5)'],
                                                scale: [1, 1.02, 1]
                                            }}
                                            transition={{ duration: 1.5, repeat: 9999 }}
                                            className="rounded-2xl"
                                        >
                                            <Button
                                                size="lg"
                                                className="w-full btn-3d font-black text-lg md:text-xl py-7 md:py-8 rounded-2xl bg-gradient-to-r from-primary via-red-500 to-orange-500 hover:from-orange-500 hover:via-red-500 hover:to-primary transition-all group uppercase tracking-wide"
                                            >
                                                <motion.span
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 0.5, repeat: 9999 }}
                                                >
                                                    🔥
                                                </motion.span>
                                                <span className="mx-2">QUERO ACESSO AGORA</span>
                                                <motion.span
                                                    className="inline-flex"
                                                    animate={{ x: [0, 8, 0] }}
                                                    transition={{ duration: 1, repeat: 9999 }}
                                                >
                                                    <ArrowRight className="w-6 h-6" />
                                                </motion.span>
                                            </Button>
                                        </motion.div>
                                    </Link>

                                    {/* Social Proof */}
                                    <motion.div
                                        className="mt-4 flex items-center justify-center gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div className="flex -space-x-2">
                                            {testimonialPics.map((pic, i) => (
                                                <motion.img
                                                    key={i}
                                                    src={pic}
                                                    alt=""
                                                    className="w-8 h-8 rounded-full border-2 border-black bg-gray-800"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1 + i * 0.1 }}
                                                    loading="lazy"
                                                />
                                            ))}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-white text-sm font-semibold">+3.247 pessoas</p>
                                            <p className="text-muted-foreground text-xs">já garantiram o acesso</p>
                                        </div>
                                    </motion.div>

                                    {/* Trust badges */}
                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        {[
                                            { icon: Shield, text: "Pagamento 100% Seguro", color: "text-green-400" },
                                            { icon: RefreshCw, text: "7 Dias de Garantia", color: "text-blue-400" },
                                            { icon: Lock, text: "Dados Protegidos", color: "text-purple-400" },
                                            { icon: Zap, text: "Acesso Imediato", color: "text-yellow-400" },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-2 text-xs text-muted-foreground"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2 + i * 0.1 }}
                                            >
                                                <item.icon className={`w-4 h-4 ${item.color}`} />
                                                <span>{item.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Payment Methods */}
                                    <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-white/10">
                                        <span className="text-muted-foreground text-xs">Aceita:</span>
                                        <div className="flex items-center gap-2">
                                            {['💳', '📱', '🏦'].map((emoji, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="text-lg"
                                                    animate={{ y: [0, -3, 0] }}
                                                    transition={{ duration: 1.5, repeat: 9999, delay: i * 0.2 }}
                                                >
                                                    {emoji}
                                                </motion.span>
                                            ))}
                                        </div>
                                        <span className="text-muted-foreground text-xs">Cartão, Pix, Boleto</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bottom guarantee banner */}
                            <motion.div
                                className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 3, repeat: 9999, ease: "linear" }}
                                    >
                                        <BadgeCheck className="w-8 h-8 text-green-400" />
                                    </motion.div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">GARANTIA INCONDICIONAL</p>
                                        <p className="text-muted-foreground text-xs">Se não gostar, devolvemos 100% do seu dinheiro em até 7 dias</p>
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
