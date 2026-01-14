"use client";

import { motion } from 'framer-motion';
import { ChevronDown, ShoppingBag, Truck, Tag, Shield, Star, Users, Zap, TrendingUp, Crown, Sparkles, Package, Percent, Clock, Heart } from 'lucide-react';
import { AnimatedParticles, AnimatedGrid, ScanLine } from '@/components/effects/VisualEffects';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black" />
    );
  }

  // Ícones flutuantes ao redor do título
  const floatingIcons = [
    { icon: ShoppingBag, color: "from-orange-500 to-red-500", position: "top-[15%] left-[10%]", delay: 0 },
    { icon: Package, color: "from-blue-500 to-cyan-500", position: "top-[20%] right-[12%]", delay: 0.3 },
    { icon: Percent, color: "from-green-500 to-emerald-500", position: "top-[45%] left-[5%]", delay: 0.6 },
    { icon: Truck, color: "from-purple-500 to-pink-500", position: "top-[50%] right-[8%]", delay: 0.9 },
    { icon: Tag, color: "from-yellow-500 to-orange-500", position: "bottom-[30%] left-[8%]", delay: 1.2 },
    { icon: Crown, color: "from-amber-500 to-yellow-500", position: "bottom-[25%] right-[10%]", delay: 1.5 },
  ];

  const stats = [
    { value: "2.8K+", icon: Users, color: "text-blue-400" },
    { value: "R$2.4M", icon: TrendingUp, color: "text-green-400" },
    { value: "4.9", icon: Star, color: "text-yellow-400" },
    { value: "70%", icon: Percent, color: "text-primary" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Effects */}
      <AnimatedGrid />
      <AnimatedParticles count={40} />
      <ScanLine className="z-20 opacity-20" />

      {/* Animated Energy Lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              width: '100%',
              top: `${15 + i * 14}%`,
              left: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: 9999,
              delay: i * 0.6,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating Icons Around */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.position} z-20 hidden md:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            delay: item.delay,
            y: { duration: 3 + i * 0.3, repeat: 9999 },
            rotate: { duration: 4, repeat: 9999 },
          }}
        >
          <motion.div
            className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,255,255,0.1)',
                '0 0 40px rgba(255,255,255,0.2)',
                '0 0 20px rgba(255,255,255,0.1)',
              ]
            }}
            transition={{ duration: 2, repeat: 9999 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* #1 Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/60 rounded-full px-5 py-2"
              animate={{
                boxShadow: ['0 0 20px rgba(245,158,11,0.3)', '0 0 50px rgba(245,158,11,0.6)', '0 0 20px rgba(245,158,11,0.3)'],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: 9999 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: 9999 }}
              >
                <Crown className="w-6 h-6 text-amber-400" />
              </motion.div>
              <span className="text-amber-400 font-black text-lg md:text-xl uppercase tracking-wider">#1 DO BRASIL</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: 9999 }}
              >
                <Zap className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pre-title */}
          <motion.p
            className="text-white/50 text-base md:text-xl font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            O Maior Painel de
          </motion.p>

          {/* Main Title - Consistente Mobile/Desktop */}
          <motion.h1
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-black uppercase leading-[0.85] mb-2 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="text-gradient-animate inline-block">Atacado</span>
            <span className="text-primary/60 mx-2 md:mx-3">&</span>
            <span className="text-gradient-animate inline-block">Varejo</span>
          </motion.h1>

          {/* Post-title */}
          <motion.p
            className="text-white/50 text-lg md:text-2xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            do <span className="text-primary">Brasil</span>
          </motion.p>

          {/* Visual Stats Bar */}
          <motion.div
            className="flex justify-center gap-4 md:gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-1"
                  animate={{
                    borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']
                  }}
                  transition={{ duration: 3, repeat: 9999, delay: i * 0.3 }}
                >
                  <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                  <span className="text-white font-black text-sm md:text-base">{stat.value}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Floating Icons */}
          <motion.div
            className="flex md:hidden justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[ShoppingBag, Package, Truck, Tag, Percent, Crown].map((Icon, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/80 to-orange-600/80 flex items-center justify-center"
                animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2 + i * 0.2, repeat: 9999, delay: i * 0.15 }}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Trust Indicators */}
          <motion.div
            className="flex justify-center gap-6 md:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { icon: Shield, color: "text-green-400" },
              { icon: Clock, color: "text-blue-400" },
              { icon: Heart, color: "text-red-400" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: 9999, delay: i * 0.3 }}
              >
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center`}>
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: 9999 }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center"
          animate={{
            boxShadow: ['0 0 10px rgba(249, 115, 22, 0.2)', '0 0 30px rgba(249, 115, 22, 0.5)', '0 0 10px rgba(249, 115, 22, 0.2)']
          }}
          transition={{ duration: 2, repeat: 9999 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Enhanced Ambient Glows */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: 9999 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[150px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 6, repeat: 9999, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/15 to-transparent rounded-full blur-[120px]"
        animate={mounted ? {
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1]
        } : {}}
        transition={{ duration: 7, repeat: 9999 }}
      />
    </section>
  );
};

export default Hero;
