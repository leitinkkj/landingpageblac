"use client";

import React, { useState, useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Smartphone, Gem, Footprints, Shirt, Watch, SprayCan, TrendingUp, DollarSign, Coins, Star, Sparkles, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const profitItems = [
  { icon: Smartphone, label: "iPhone 13", buy: 1500, sell: 3500 },
  { icon: Watch, label: "Relógio Invicta", buy: 150, sell: 700 },
  { icon: Gem, label: "Perfume Árabe", buy: 25, sell: 200 },
  { icon: Footprints, label: "Tênis de Grife", buy: 80, sell: 450 },
  { icon: Shirt, label: "Camisa de Time", buy: 40, sell: 180 },
  { icon: SprayCan, label: "Kit Skincare", buy: 50, sell: 250 },
];

const ProfitCard = ({ icon: Icon, label, buy, sell, index }: { icon: LucideIcon, label: string, buy: number, sell: number, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const profit = sell - buy;
  const profitPercentage = Math.round((profit / buy) * 100);
  const [animatedProfit, setAnimatedProfit] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setAnimatedProfit(Math.floor(progress * profit));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, profit]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <motion.div
        className="glass-card p-5 h-full flex items-center gap-4 relative overflow-hidden"
        animate={{
          borderColor: ['hsl(var(--primary) / 0.1)', 'hsl(var(--primary) / 0.3)', 'hsl(var(--primary) / 0.1)']
        }}
        transition={{ duration: 3, repeat: 9999, delay: index * 0.5 }}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: 9999, delay: index * 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-transparent p-3 rounded-xl border border-primary/20"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: 9999, delay: index * 0.2 }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <h3 className="font-bold text-white truncate">{label}</h3>
          <p className="text-muted-foreground text-xs">R${buy} → R${sell}</p>
        </div>

        {/* Profit */}
        <div className="flex-shrink-0 text-right">
          <motion.div
            className="text-green-400 font-black text-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: 9999 }}
          >+R${animatedProfit}</motion.div>
          <div className="text-green-400/70 text-xs">+{profitPercentage}%</div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const ProfitSection = () => {
  return (
    <section id="profit-v2" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Animated Particles */}
      <AnimatedParticles count={20} />

      {/* Scan Line */}
      <ScanLine />

      {/* Floating Icons - Money themed */}
      <FloatingIcon Icon={DollarSign} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
      <FloatingIcon Icon={Coins} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
      <FloatingIcon Icon={Gem} className="bottom-[20%] left-[10%] w-6 h-6" delay={2} />
      <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />
      <FloatingIcon Icon={DollarSign} className="top-[50%] right-[3%] w-5 h-5" delay={1.5} />
      <FloatingIcon Icon={Sparkles} className="top-[70%] left-[3%] w-6 h-6" delay={2.5} />

      {/* Accent glow */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: 9999 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Big emoji with animation */}
          <motion.div
            className="relative inline-block mb-6"
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: 9999 }}
          >
            <span className="text-6xl">💰</span>
          </motion.div>

          <motion.span
            className="block text-primary text-sm font-bold tracking-widest uppercase mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: 9999 }}
          >
            LUCROS REAIS
          </motion.span>

          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase">
            <span className="text-white">Veja Como Estão </span>
            <motion.span
              className="text-gradient-animate"
              animate={{
                textShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.5)',
                  '0 0 40px rgba(34, 197, 94, 0.8)',
                  '0 0 20px rgba(34, 197, 94, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: 9999 }}
            >Lucrando</motion.span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Stats highlight */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card p-8 h-full flex flex-col justify-center relative overflow-hidden"
              animate={{
                borderColor: ['hsl(var(--primary) / 0.2)', 'rgba(34, 197, 94, 0.5)', 'hsl(var(--primary) / 0.2)']
              }}
              transition={{ duration: 4, repeat: 9999 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: 9999 }}
              />

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: 9999, ease: "linear" }}
              >
                <DollarSign className="w-12 h-12 text-green-400 mb-4" />
              </motion.div>

              <motion.div
                className="text-5xl md:text-6xl font-black text-white mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: 9999 }}
              >
                R$<span className="text-green-400">2.000</span>
              </motion.div>

              <p className="text-muted-foreground">Lucro médio mensal dos membros ativos</p>

              <motion.div
                className="mt-6 flex items-center gap-2 text-green-400"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: 9999 }}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">+127% este mês</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Product grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {profitItems.map((item, index) => (
                <ProfitCard key={item.label} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="#price-section">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.3)',
                  '0 0 40px rgba(34, 197, 94, 0.6)',
                  '0 0 20px rgba(34, 197, 94, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: 9999 }}
              className="inline-block rounded-xl"
            >
              <Button
                size="lg"
                className="btn-3d font-bold text-lg px-10 py-7 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500"
              >
                VER LUCROS AO VIVO
                <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: 9999 }}>→</motion.span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitSection;
