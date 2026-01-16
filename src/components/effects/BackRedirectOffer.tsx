"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Clock, ArrowRight, X, Sparkles, Zap, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const STORAGE_KEY = 'blackshoppe_back_offer';
const VISITED_KEY = 'blackshoppe_visited';
const CHECKOUT_URL = 'https://www.ggcheckout.com/checkout/v4/3AsfT7M1Zdr6WmhiEHdo';

export const BackRedirectOffer = () => {
    const [showOffer, setShowOffer] = useState(false);
    const [countdown, setCountdown] = useState(300); // 5 minutos

    useEffect(() => {
        // Verifica se já mostrou a oferta antes
        const alreadyShown = sessionStorage.getItem(STORAGE_KEY);

        // Verifica se a pessoa já visitou a página antes (em outra sessão também)
        const hasVisited = localStorage.getItem(VISITED_KEY);

        if (hasVisited && !alreadyShown) {
            // Pessoa já visitou antes e está voltando - mostrar oferta imediatamente
            setTimeout(() => {
                setShowOffer(true);
                sessionStorage.setItem(STORAGE_KEY, 'shown');
            }, 500); // Pequeno delay para parecer mais natural
        }

        // Marca que visitou a página
        localStorage.setItem(VISITED_KEY, 'true');

        // Detecta quando a pessoa tenta sair da página
        const handleBeforeUnload = () => {
            // Marca que a pessoa saiu
            localStorage.setItem(VISITED_KEY, 'left');
        };

        // Detecta quando a aba fica oculta (pessoa muda de aba, minimiza, etc)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                // Pessoa saiu da aba
                localStorage.setItem(VISITED_KEY, 'left');
            } else if (document.visibilityState === 'visible') {
                // Pessoa voltou para a aba
                const wasLeft = localStorage.getItem(VISITED_KEY) === 'left';
                const wasShown = sessionStorage.getItem(STORAGE_KEY);

                if (wasLeft && !wasShown) {
                    setShowOffer(true);
                    sessionStorage.setItem(STORAGE_KEY, 'shown');
                }
            }
        };

        // Detecta o botão voltar do navegador
        const handlePopState = () => {
            const wasShown = sessionStorage.getItem(STORAGE_KEY);
            if (!wasShown) {
                setShowOffer(true);
                sessionStorage.setItem(STORAGE_KEY, 'shown');
            }
        };

        // Detecta quando a página é mostrada novamente (back/forward cache)
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                // Página foi restaurada do cache (botão voltar)
                const wasShown = sessionStorage.getItem(STORAGE_KEY);
                if (!wasShown) {
                    setShowOffer(true);
                    sessionStorage.setItem(STORAGE_KEY, 'shown');
                }
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('popstate', handlePopState);
        window.addEventListener('pageshow', handlePageShow);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);

    // Countdown timer
    useEffect(() => {
        if (!showOffer || countdown <= 0) return;

        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [showOffer, countdown]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleClose = () => {
        setShowOffer(false);
    };

    const handleAccept = () => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
                content_name: 'Black Shoppe - Oferta Especial Back Redirect',
                content_category: 'Produto Digital',
                value: 37.00,
                currency: 'BRL'
            });
        }
    };

    return (
        <AnimatePresence>
            {showOffer && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Particles/confetti effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: ['#f97316', '#eab308', '#22c55e', '#3b82f6'][i % 4],
                                    left: `${Math.random() * 100}%`,
                                    top: '-10%'
                                }}
                                animate={{
                                    y: ['0vh', '110vh'],
                                    x: [0, (Math.random() - 0.5) * 100],
                                    rotate: [0, 360],
                                    opacity: [1, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: 9999,
                                    delay: Math.random() * 2
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="relative bg-gradient-to-b from-gray-900 to-black border-2 border-primary rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl overflow-hidden"
                        initial={{ scale: 0.8, y: 50, rotateX: -15 }}
                        animate={{ scale: 1, y: 0, rotateX: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 20 }}
                    >
                        {/* Glow effects */}
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-primary/40 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl"
                            animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: 9999, delay: 0.5 }}
                        />

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                        >
                            <X className="w-4 h-4 text-white/70" />
                        </button>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            {/* Urgency Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-4"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1, repeat: 9999 }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 0.5, repeat: 9999 }}
                                >
                                    <AlertTriangle className="w-4 h-4 text-red-400" />
                                </motion.div>
                                <span className="text-red-400 font-bold text-sm">ESPERA! NÃO VAI EMBORA!</span>
                            </motion.div>

                            {/* Gift Icon */}
                            <motion.div
                                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/50"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 2, repeat: 9999 }}
                            >
                                <Gift className="w-10 h-10 text-white" />
                            </motion.div>

                            {/* Main Title */}
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                                🎁 PRESENTE EXCLUSIVO!
                            </h2>

                            <p className="text-lg text-white/90 mb-4">
                                Que bom que você voltou! Ganhamos sua atenção e por isso você ganhou{' '}
                                <span className="text-green-400 font-black">R$10 DE DESCONTO</span>!
                            </p>

                            {/* Price comparison */}
                            <div className="bg-black/40 rounded-2xl p-4 mb-4 border border-white/10">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="text-center">
                                        <p className="text-muted-foreground text-xs uppercase">De</p>
                                        <p className="text-2xl text-red-400 line-through font-bold">R$ 47</p>
                                    </div>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 0.5, repeat: 9999 }}
                                    >
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </motion.div>
                                    <div className="text-center">
                                        <p className="text-muted-foreground text-xs uppercase">Por apenas</p>
                                        <motion.p
                                            className="text-4xl text-green-400 font-black"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 1, repeat: 9999 }}
                                        >
                                            R$ 37
                                        </motion.p>
                                    </div>
                                </div>
                            </div>

                            {/* Countdown */}
                            <motion.div
                                className="flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-xl"
                                animate={{ borderColor: ['rgba(239,68,68,0.3)', 'rgba(239,68,68,0.7)', 'rgba(239,68,68,0.3)'] }}
                                transition={{ duration: 1, repeat: 9999 }}
                            >
                                <Clock className="w-5 h-5 text-red-400" />
                                <span className="text-white font-medium">Oferta expira em:</span>
                                <motion.span
                                    className="text-red-400 font-black text-xl tabular-nums"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1, repeat: 9999 }}
                                >
                                    {formatTime(countdown)}
                                </motion.span>
                            </motion.div>

                            {/* Benefits */}
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {[
                                    { icon: CheckCircle, text: "Acesso Vitalício" },
                                    { icon: Zap, text: "Liberação Imediata" },
                                    { icon: Shield, text: "7 Dias de Garantia" },
                                    { icon: Sparkles, text: "+500 Fornecedores" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-2 text-left text-xs text-white/80"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link href={CHECKOUT_URL} onClick={handleAccept}>
                                <motion.button
                                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white font-black text-lg uppercase tracking-wide shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                                    animate={{
                                        boxShadow: [
                                            '0 10px 30px rgba(34, 197, 94, 0.3)',
                                            '0 10px 50px rgba(34, 197, 94, 0.6)',
                                            '0 10px 30px rgba(34, 197, 94, 0.3)'
                                        ],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 1.5, repeat: 9999 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Sparkles className="w-5 h-5" />
                                    QUERO MEUS R$10 DE DESCONTO
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 0.8, repeat: 9999 }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.span>
                                </motion.button>
                            </Link>

                            {/* Subtext */}
                            <p className="text-muted-foreground text-xs mt-4">
                                ⚡ Oferta válida apenas por tempo limitado
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackRedirectOffer;
