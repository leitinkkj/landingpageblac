"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import TypewriterEffect from './typewriter-effect';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { ScrollAnimation } from '@/components/effects/ScrollAnimations';

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
      document.body.removeChild(playerScript);
      const embedScript = document.querySelector(`script[src*='${videoId}.js']`);
      if (embedScript) {
        document.body.removeChild(embedScript);
      }
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


const PlatformVideo = () => {
  return (
    <section id="platform-video" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_60%)]" />

      {/* Animated top border */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: 9999 }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">

        {/* Title */}
        <ScrollAnimation>
          <div className="mb-4">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-wider">
              <TypewriterEffect text="Veja o Jogo Acontecer ao Vivo" />
            </h2>
          </div>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-primary via-red-500 to-orange-500 mx-auto rounded-full mb-6"
            animate={{ width: ["8rem", "12rem", "8rem"] }}
            transition={{ duration: 3, repeat: 9999, ease: "easeInOut" }}
          />

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Assista ao marketplace e descubra, na prática, como a plataforma funciona.{' '}
            <span className="text-white font-medium">Veja fornecedores, produtos, filtros e lucros em tempo real.</span>
          </p>
        </ScrollAnimation>

        {/* Video Container */}
        <ScrollAnimation className="mt-12 max-w-4xl mx-auto" delay={200}>
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />

            {/* Neon frame */}
            <div className="relative animated-border p-3 rounded-2xl">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />

              {/* Video wrapper */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/80">
                <WistiaPlayer videoId="g3c6pwtlfg" />

                {/* Play overlay - shows when not loaded yet */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: 9999 }}
                    className="bg-primary/80 p-6 rounded-full"
                  >
                    <Play className="w-12 h-12 text-white fill-white" />
                  </motion.div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />
            </div>
          </motion.div>
        </ScrollAnimation>

        {/* CTA Button */}
        <ScrollAnimation className="mt-12" delay={400}>
          <Link href="#price-section">
            <Button
              size="lg"
              className="btn-3d font-bold text-lg px-10 py-7 rounded-xl bg-gradient-to-r from-primary via-red-500 to-orange-500 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-glow-pulse"
            >
              <span className="flex items-center gap-2">
                ACESSAR O MARKETPLACE AGORA
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: 9999 }}
                >
                  →
                </motion.span>
              </span>
            </Button>
          </Link>
        </ScrollAnimation>

        {/* Bottom badge */}
        <ScrollAnimation delay={600}>
          <motion.div
            className="mt-10 inline-flex items-center gap-2 text-primary font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: 9999 }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Atualizado semanalmente com novos fornecedores e produtos virais.</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PlatformVideo;
