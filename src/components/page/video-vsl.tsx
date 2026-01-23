"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import Script from 'next/script';

const VideoVSL = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [wistiaLoaded, setWistiaLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !wistiaLoaded) return;

        // Add Wistia player to container when script is ready
        if (videoContainerRef.current && !videoContainerRef.current.querySelector('wistia-player')) {
            const player = document.createElement('wistia-player');
            player.setAttribute('media-id', 'zo9v9cgjd7');
            player.setAttribute('aspect', '0.5625');
            videoContainerRef.current.appendChild(player);
        }
    }, [mounted, wistiaLoaded]);

    // SSR placeholder to avoid hydration mismatch
    if (!mounted) {
        return (
            <section id="video-vsl" className="relative py-16 md:py-24 overflow-hidden bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div
                            className="w-full max-w-[360px] md:max-w-[400px]"
                            style={{ paddingTop: '177.78%', background: '#000' }}
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="video-vsl" className="relative py-16 md:py-24 overflow-hidden">
            {/* Wistia Styles - Inline for SSR safety */}
            <style dangerouslySetInnerHTML={{
                __html: `
                wistia-player[media-id='zo9v9cgjd7']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zo9v9cgjd7/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 177.78%;
                }
                wistia-player[media-id='zo9v9cgjd7'] {
                    display: block;
                    width: 100%;
                }
            `}} />

            {/* Radial glow behind video */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_60%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold mb-6"
                        animate={{ boxShadow: ['0 0 0px rgba(249, 115, 22, 0)', '0 0 20px rgba(249, 115, 22, 0.5)', '0 0 0px rgba(249, 115, 22, 0)'] }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: 9999 }}>
                            <Play className="w-4 h-4 fill-primary" />
                        </motion.span>
                        ASSISTA AGORA
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <span className="text-white">Veja o </span>
                        <motion.span
                            className="text-gradient-animate"
                            animate={{ textShadow: ['0 0 20px rgba(249, 115, 22, 0.5)', '0 0 40px rgba(249, 115, 22, 0.8)', '0 0 20px rgba(249, 115, 22, 0.5)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        >Painel</motion.span>
                        <span className="text-white"> Por Dentro</span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Descubra todas as funcionalidades que vão <span className="text-primary font-semibold">revolucionar</span> seu negócio
                    </p>
                </motion.div>

                {/* Video Container - Vertical Mobile Optimized - NO BORDER/FRAME */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Wistia Vertical Video - Clean, no borders */}
                    <div
                        ref={videoContainerRef}
                        className="w-full max-w-[360px] md:max-w-[400px]"
                    >
                        {/* Video player will be injected here by useEffect */}
                    </div>
                </motion.div>

                {/* CTA below video */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="#price-section">
                        <motion.div
                            animate={{ boxShadow: ['0 0 20px rgba(249, 115, 22, 0.5)', '0 0 40px rgba(249, 115, 22, 0.8)', '0 0 20px rgba(249, 115, 22, 0.5)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                            className="inline-block rounded-xl"
                        >
                            <Button size="lg" className="btn-3d font-bold text-lg px-10 py-7 rounded-xl bg-gradient-to-r from-primary via-red-500 to-orange-500 group">
                                QUERO ACESSO AGORA
                                <motion.span
                                    className="ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: 9999 }}
                                >
                                    →
                                </motion.span>
                            </Button>
                        </motion.div>
                    </Link>

                    {/* Trust badge */}
                    <motion.div
                        className="mt-6 inline-flex items-center gap-2 text-primary font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <Sparkles className="w-5 h-5" />
                        +3.000 lojistas já transformaram seus negócios
                    </motion.div>
                </motion.div>
            </div>

            {/* Carregamento otimizado do Wistia */}
            <Script
                src="https://fast.wistia.com/player.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // Script base carregado, agora carrega o embed específico
                    setWistiaLoaded(true);
                }}
            />
            <Script
                src="https://fast.wistia.com/embed/zo9v9cgjd7.js"
                strategy="lazyOnload"
                type="module"
            />
        </section>
    );
};

export default VideoVSL;
