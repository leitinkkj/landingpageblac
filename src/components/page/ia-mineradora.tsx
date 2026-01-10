"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bot, Zap, Lock, Eye, Sparkles, Star, Crown, TrendingDown, MapPin, DollarSign, Package } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const mockResults = [
    { product: "iPhone 15 Pro Max 256GB", paraguai: "R$ 4.200", sp: "R$ 5.800", economia: "27%" },
    { product: "AirPods Pro 2ª Geração", paraguai: "R$ 890", sp: "R$ 1.450", economia: "38%" },
    { product: "Perfume Sauvage Dior 100ml", paraguai: "R$ 320", sp: "R$ 650", economia: "50%" },
];

const IAMineradora = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [searchPhase, setSearchPhase] = useState(0);

    const searchPhases = [
        { text: "Conectando com fornecedores...", icon: Bot },
        { text: "Minerando preços no Paraguai...", icon: MapPin },
        { text: "Verificando 25 de Março e Brás...", icon: Package },
        { text: "Comparando melhores ofertas...", icon: TrendingDown },
        { text: "Encontramos resultados!", icon: Sparkles },
    ];

    const handleSearch = () => {
        if (!searchTerm.trim()) return;

        setIsSearching(true);
        setShowResults(false);
        setSearchPhase(0);

        // Simulate search phases
        const interval = setInterval(() => {
            setSearchPhase((prev) => {
                if (prev >= searchPhases.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsSearching(false);
                        setShowResults(true);
                    }, 500);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);
    };

    return (
        <section id="ia-mineradora" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Cyber grid effect */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,107,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <AnimatedParticles count={20} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Search} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Bot} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={DollarSign} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={TrendingDown} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-6"
                        animate={{ boxShadow: ['0 0 0px rgba(34,211,238,0)', '0 0 20px rgba(34,211,238,0.5)', '0 0 0px rgba(34,211,238,0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Bot className="w-4 h-4" />
                        INTELIGÊNCIA ARTIFICIAL EXCLUSIVA
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <span className="text-white">IA </span>
                        <motion.span
                            className="text-gradient-animate"
                            animate={{ textShadow: ['0 0 20px hsl(var(--primary))', '0 0 40px hsl(var(--primary))', '0 0 20px hsl(var(--primary))'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >Mineradora</motion.span>
                        <span className="text-white"> de Promoções</span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Nossa IA vasculha <span className="text-primary font-semibold">Paraguai</span> e os maiores
                        <span className="text-white font-semibold"> centros de comercialização</span> para encontrar os melhores preços de acordo com seu nicho
                    </p>
                </motion.div>

                {/* Search Interface */}
                <motion.div
                    className="max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="relative glass-card p-2 md:p-3"
                        animate={{ borderColor: ['hsl(var(--primary) / 0.2)', 'rgba(34,211,238,0.5)', 'hsl(var(--primary) / 0.2)'] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <div className="flex flex-col md:flex-row gap-3">
                            {/* Input */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Digite o produto que você procura..."
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                />
                            </div>

                            {/* Button */}
                            <motion.div
                                animate={{ boxShadow: ['0 0 0px rgba(34,211,238,0)', '0 0 20px rgba(34,211,238,0.5)', '0 0 0px rgba(34,211,238,0)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="rounded-xl"
                            >
                                <Button
                                    size="lg"
                                    onClick={handleSearch}
                                    disabled={isSearching || !searchTerm.trim()}
                                    className="w-full md:w-auto btn-3d font-bold text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50"
                                >
                                    {isSearching ? (
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                            <Bot className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <>
                                            <Zap className="w-5 h-5 mr-2" />
                                            MINERAR
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </div>

                        {/* Search suggestions */}
                        <div className="flex flex-wrap gap-2 mt-3 px-2">
                            <span className="text-xs text-muted-foreground">Sugestões:</span>
                            {['iPhone 15', 'Perfume Árabe', 'Tênis Nike', 'AirPods'].map((suggestion) => (
                                <button
                                    key={suggestion}
                                    onClick={() => setSearchTerm(suggestion)}
                                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Loading Animation */}
                <AnimatePresence>
                    {isSearching && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-2xl mx-auto mb-12"
                        >
                            <div className="glass-card p-8 text-center relative overflow-hidden">
                                <ScanLine />

                                <motion.div
                                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center"
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    {(() => {
                                        const PhaseIcon = searchPhases[searchPhase].icon;
                                        return <PhaseIcon className="w-10 h-10 text-cyan-400" />;
                                    })()}
                                </motion.div>

                                <motion.p
                                    className="text-xl font-semibold text-white mb-4"
                                    key={searchPhase}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {searchPhases[searchPhase].text}
                                </motion.p>

                                {/* Progress bar */}
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${((searchPhase + 1) / searchPhases.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Results */}
                <AnimatePresence>
                    {showResults && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                                {/* Blur overlay */}
                                <div className="absolute inset-0 backdrop-blur-sm bg-black/50 z-20 flex flex-col items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="mb-4"
                                    >
                                        <Lock className="w-16 h-16 text-primary" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2 text-center px-4">Resultados Encontrados!</h3>
                                    <p className="text-muted-foreground text-center mb-6 px-4">
                                        Para visualizar os preços e contatos dos fornecedores
                                    </p>
                                    <Link href="#price-section">
                                        <motion.div
                                            animate={{ boxShadow: ['0 0 20px hsl(var(--primary) / 0.5)', '0 0 40px hsl(var(--primary) / 0.8)', '0 0 20px hsl(var(--primary) / 0.5)'] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="rounded-xl"
                                        >
                                            <Button size="lg" className="btn-3d font-bold text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-primary via-red-500 to-orange-500">
                                                <Eye className="w-5 h-5 mr-2" />
                                                DESBLOQUEAR RESULTADOS
                                            </Button>
                                        </motion.div>
                                    </Link>
                                </div>

                                {/* Blurred results preview */}
                                <div className="space-y-4 blur-sm">
                                    {mockResults.map((result, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                            <div>
                                                <h4 className="font-bold text-white">{result.product}</h4>
                                                <div className="flex gap-4 text-sm">
                                                    <span className="text-muted-foreground">Paraguai: <span className="text-green-400">{result.paraguai}</span></span>
                                                    <span className="text-muted-foreground">SP: {result.sp}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-2xl font-black text-green-400">-{result.economia}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Features */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { icon: MapPin, title: "Paraguai", desc: "Ciudad del Este" },
                        { icon: Package, title: "25 de Março", desc: "São Paulo" },
                        { icon: Package, title: "Brás", desc: "São Paulo" },
                        { icon: TrendingDown, title: "Menor Preço", desc: "Garantido" },
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="glass-card p-4 text-center"
                            whileHover={{ y: -5, scale: 1.02 }}
                            animate={{ borderColor: ['hsl(var(--primary) / 0.1)', 'hsl(var(--primary) / 0.3)', 'hsl(var(--primary) / 0.1)'] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                            <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                            <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                            <p className="text-muted-foreground text-xs">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IAMineradora;
