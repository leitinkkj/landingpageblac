"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Pause, Sparkles, Volume2, VolumeX, Maximize, Star, Zap, Eye, Crown } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const WistiaPlayer = ({ videoId }: { videoId: string }) => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        const playerScript = document.createElement('script');
        playerScript.src = 'https://fast.wistia.com/player.js';
        playerScript.async = true;

        playerScript.onload = () => {
            const embedScript = document.createElement('script');
            embedScript.src = `https://fast.wistia.com/embed/${videoId}.js`;
            embedScript.async = true;

            embedScript.onload = () => {
                setScriptsLoaded(true);
            };

            document.body.appendChild(embedScript);
        };

        document.body.appendChild(playerScript);

        return () => {
            const playerScript = document.querySelector(`script[src='https://fast.wistia.com/player.js']`);
            const embedScript = document.querySelector(`script[src='https://fast.wistia.com/embed/${videoId}.js']`);
            if (playerScript) document.body.removeChild(playerScript);
            if (embedScript) document.body.removeChild(embedScript);
        };
    }, [videoId]);

    return (
        <>
            <style>{`
        wistia-player[media-id='${videoId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
            {scriptsLoaded && (
                <wistia-player media-id={videoId} aspect="1.7777777777777777"></wistia-player>
            )}
        </>
    );
};

const VideoVSL = () => {
    return (
        <section id="video-vsl" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Radial glow behind video */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_60%)]" />

            <AnimatedParticles count={20} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Play} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Star} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={Eye} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Crown} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: 9999 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
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

                {/* Video Container */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Neon frame */}
                        <motion.div
                            className="absolute -inset-2 md:-inset-3 rounded-2xl"
                            style={{
                                background: 'linear-gradient(90deg, hsl(var(--primary)), #ff4500, #ff6b00, hsl(var(--primary)))',
                                backgroundSize: '300% 100%',
                            }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 4, repeat: 9999, ease: "linear" }}
                        />

                        {/* Inner glow */}
                        <motion.div
                            className="absolute -inset-4 md:-inset-6 rounded-3xl bg-primary/20 blur-xl"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: 9999 }}
                        />

                        {/* Video frame with corners */}
                        <motion.div
                            className="relative glass-card overflow-hidden"
                            animate={{ borderColor: ['rgba(249, 115, 22, 0.3)', 'rgba(249, 115, 22, 0.8)', 'rgba(249, 115, 22, 0.3)'] }}
                            transition={{ duration: 4, repeat: 9999 }}
                        >
                            {/* Corner decorations */}
                            {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((position, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${position} w-8 h-8 z-20 pointer-events-none`}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: 9999, delay: index * 0.25 }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent" />
                                </motion.div>
                            ))}

                            {/* Scan line over video */}
                            <motion.div
                                className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                            >
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                                    animate={{ top: ['-5%', '105%'] }}
                                    transition={{ duration: 4, repeat: 9999, ease: "linear" }}
                                />
                            </motion.div>

                            {/* Video player - lazy loading para performance */}
                            <div className="relative aspect-video bg-black/50">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect fill='%23111' width='1920' height='1080'/%3E%3C/svg%3E"
                                >
                                    <source src="https://i.imgur.com/NuhwhfU.mp4" type="video/mp4" />
                                    Seu navegador não suporta vídeos HTML5.
                                </video>
                            </div>

                            {/* Bottom gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </motion.div>
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
        </section>
    );
};

export default VideoVSL;
