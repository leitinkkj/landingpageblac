"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bot, Zap, Lock, Eye, Sparkles, TrendingDown, MapPin, DollarSign, Package } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { AnimatedParticles, ScanLine } from '@/components/effects/VisualEffects';

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
        { icon: Bot },
        { icon: MapPin },
        { icon: Package },
        { icon: TrendingDown },
        { icon: Sparkles },
    ];

    const handleSearch = () => {
        if (!searchTerm.trim()) return;

        setIsSearching(true);
        setShowResults(false);
        setSearchPhase(0);

        const interval = setInterval(() => {
            setSearchPhase((prev) => {
                if (prev >= searchPhases.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsSearching(false);
                        setShowResults(true);
                    }, 600);
                    return prev;
                }
                return prev + 1;
            });
        }, 600);
    };

    return (
        <section id="ia-mineradora" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />

            <AnimatedParticles count={15} />

            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Clean and Professional */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Simple Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Bot className="w-4 h-4" />
                        TECNOLOGIA EXCLUSIVA
                    </motion.div>

                    {/* Title - Clean */}
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <span className="text-white">IA </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mineradora</span>
                    </h2>

                    {/* Subtitle - Direct */}
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-2">
                        Pesquise <span className="text-white font-semibold">qualquer produto</span> e encontre os
                        <span className="text-cyan-400 font-semibold"> melhores preços</span> do mercado.
                    </p>
                </motion.div>

                {/* Search Box - BIG and Clear */}
                <motion.div
                    className="max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-4 md:p-6 border border-cyan-500/20">
                        {/* Search Input - Large */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Digite qualquer produto: iPhone, Perfume, Tênis..."
                                    className="w-full bg-black/60 border-2 border-cyan-500/30 rounded-xl py-5 pl-14 pr-4 text-white text-lg placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/60 transition-colors"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                />
                            </div>

                            <Button
                                size="lg"
                                onClick={handleSearch}
                                disabled={isSearching || !searchTerm.trim()}
                                className="h-auto py-5 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-lg font-bold disabled:opacity-50"
                            >
                                {isSearching ? (
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: 9999, ease: "linear" }}>
                                        <Bot className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <>
                                        <Zap className="w-5 h-5 mr-2" />
                                        BUSCAR
                                    </>
                                )}
                            </Button>
                        </div>

                        {/* Quick Suggestions */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="text-sm text-muted-foreground">Sugestões:</span>
                            {['iPhone 15', 'Perfume Importado', 'Tênis Nike', 'AirPods Pro', 'Relógio'].map((suggestion) => (
                                <button
                                    key={suggestion}
                                    onClick={() => setSearchTerm(suggestion)}
                                    className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Source Cards - Simple and Clean */}
                <motion.div
                    className="flex justify-center gap-4 md:gap-6 mb-12 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {[
                        { icon: MapPin, label: "Paraguai", color: "text-green-400", border: "border-green-500/30" },
                        { icon: Package, label: "25 de Março", color: "text-orange-400", border: "border-orange-500/30" },
                        { icon: Package, label: "Brás", color: "text-blue-400", border: "border-blue-500/30" },
                        { icon: TrendingDown, label: "Até -70%", color: "text-cyan-400", border: "border-cyan-500/30" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border ${item.border}`}
                        >
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-white font-medium text-sm">{item.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Loading Animation - Simple */}
                <AnimatePresence>
                    {isSearching && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-md mx-auto mb-12"
                        >
                            <div className="glass-card p-8 text-center">
                                <motion.div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1, repeat: 9999 }}
                                >
                                    {(() => {
                                        const PhaseIcon = searchPhases[searchPhase].icon;
                                        return <PhaseIcon className="w-8 h-8 text-cyan-400" />;
                                    })()}
                                </motion.div>

                                <p className="text-white font-medium mb-4">Buscando melhores preços...</p>

                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${((searchPhase + 1) / searchPhases.length) * 100}%` }}
                                        transition={{ duration: 0.4 }}
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
                            className="max-w-3xl mx-auto"
                        >
                            <div className="glass-card p-6 relative overflow-hidden">
                                {/* Lock Overlay */}
                                <div className="absolute inset-0 backdrop-blur-sm bg-black/60 z-20 flex flex-col items-center justify-center">
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: 9999 }}
                                    >
                                        <Lock className="w-8 h-8 text-primary" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-white mb-2">Resultados Encontrados!</h3>
                                    <p className="text-muted-foreground text-center mb-6 text-sm">
                                        Desbloqueie para ver preços e fornecedores
                                    </p>

                                    <Link href="#price-section">
                                        <Button size="lg" className="font-bold px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-orange-500">
                                            <Eye className="w-5 h-5 mr-2" />
                                            DESBLOQUEAR
                                        </Button>
                                    </Link>
                                </div>

                                {/* Blurred Results */}
                                <div className="space-y-3 blur-sm">
                                    {mockResults.map((result, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                            <span className="font-medium text-white">{result.product}</span>
                                            <span className="text-xl font-bold text-green-400">-{result.economia}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default IAMineradora;
