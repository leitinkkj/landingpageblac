"use client";

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, Percent } from 'lucide-react';
import { ScrollAnimation } from '@/components/effects/ScrollAnimations';

const PersonalUseSection = () => {
  return (
    <section id="personal-use" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      <div className="absolute inset-0 holographic opacity-30" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShoppingBag className="w-20 h-20 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Tag className="w-16 h-16 text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <motion.div
            className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <div className="relative bg-gradient-to-br from-primary/20 to-transparent p-5 rounded-full border border-primary/30">
                  <Percent className="h-12 w-12 text-primary drop-shadow-[0_0_15px_hsl(var(--primary))]" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-wider mb-4">
              <span className="text-white">VOCÊ NÃO PRECISA SER REVENDEDOR </span>
              <span className="text-gradient-animate">PARA LUCRAR.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Compre no <span className="text-primary font-semibold">preço de atacado</span> mesmo para uso pessoal.{' '}
              <span className="text-white font-medium">Smartphones, perfumes, moda, eletrônicos e mais</span> — direto da fonte.
            </p>

            {/* CTA */}
            <Link href="/lista-demo">
              <Button
                size="lg"
                variant="outline"
                className="btn-3d border-primary/50 text-white hover:bg-primary hover:text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Ver Preços de Demonstração
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </Link>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PersonalUseSection;
