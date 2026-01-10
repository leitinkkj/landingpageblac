"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Sparkles, ChevronDown, Zap, Shield, Users, Star, Crown, Flame,
  Rocket, DollarSign, Search, ShoppingBag, Bot, TrendingUp, Store, Gem
} from 'lucide-react';
import { AnimatedParticles, AnimatedGrid, NeonText, ScanLine, FloatingIcon } from '@/components/effects/VisualEffects';
import { useRef } from 'react';

const Hero = () => {
  // Mouse tracking for 3D effect
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background - transparent to show 3D icons */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/smAc4dn.png"
          alt="BLACK SHOPPE"
          fill
          className="object-cover object-top opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
      </div>

      <AnimatedGrid />
      <AnimatedParticles count={35} />
      <ScanLine className="z-20" />

      {/* MORE Floating Icons with intense animations */}
      <FloatingIcon Icon={Search} className="top-[15%] left-[5%] w-8 h-8" delay={0} />
      <FloatingIcon Icon={DollarSign} className="top-[25%] right-[8%] w-10 h-10" delay={1} />
      <FloatingIcon Icon={Store} className="bottom-[30%] left-[8%] w-6 h-6" delay={2} />
      <FloatingIcon Icon={Bot} className="top-[40%] right-[3%] w-7 h-7" delay={0.5} />
      <FloatingIcon Icon={ShoppingBag} className="bottom-[20%] right-[10%] w-8 h-8" delay={1.5} />
      <FloatingIcon Icon={TrendingUp} className="top-[60%] left-[3%] w-6 h-6" delay={2.5} />
      <FloatingIcon Icon={Gem} className="top-[10%] left-[40%] w-7 h-7" delay={0.8} />
      <FloatingIcon Icon={Crown} className="top-[70%] right-[5%] w-8 h-8" delay={1.2} />
      <FloatingIcon Icon={Star} className="bottom-[40%] left-[15%] w-5 h-5" delay={1.8} />
      <FloatingIcon Icon={Flame} className="top-[30%] left-[20%] w-6 h-6" delay={2.2} />
      <FloatingIcon Icon={Rocket} className="bottom-[15%] left-[45%] w-7 h-7" delay={0.3} />
      <FloatingIcon Icon={Sparkles} className="top-[50%] right-[15%] w-6 h-6" delay={1.6} />

      {/* Animated Energy Lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              width: '100%',
              top: `${20 + i * 15}%`,
              left: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 w-full py-20">

          {/* Left Column - Main Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge - Ultra Animated */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider relative overflow-hidden"
                animate={{
                  boxShadow: ['0 0 0px hsl(var(--primary))', '0 0 30px hsl(var(--primary))', '0 0 0px hsl(var(--primary))'],
                  borderColor: ['hsl(var(--primary) / 0.3)', 'hsl(var(--primary))', 'hsl(var(--primary) / 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4" />
                </motion.span>
                PAINEL #1 PARA LOJISTAS
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Star className="w-4 h-4 fill-primary" />
                </motion.span>
              </motion.span>
            </motion.div>

            {/* Title - With 3D Effect */}
            <motion.div
              className="space-y-2 mb-6"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <motion.h1
                className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none"
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <span className="text-white block">O Maior Painel de</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none">
                  <motion.span
                    className="text-gradient-animate inline-block"
                    animate={{
                      textShadow: [
                        '0 0 20px hsl(var(--primary))',
                        '0 0 60px hsl(var(--primary))',
                        '0 0 20px hsl(var(--primary))'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Atacado
                  </motion.span>
                  <span className="text-white"> & </span>
                  <motion.span
                    className="text-gradient-animate inline-block"
                    animate={{
                      textShadow: [
                        '0 0 20px hsl(var(--primary))',
                        '0 0 60px hsl(var(--primary))',
                        '0 0 20px hsl(var(--primary))'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    Varejo
                  </motion.span>
                </h1>
                <motion.div
                  className="absolute -left-4 top-1/2 w-1 bg-gradient-to-b from-primary to-red-500 rounded-full hidden lg:block"
                  animate={{
                    height: ['0px', '80px', '80px'],
                    opacity: [0, 1, 1],
                    boxShadow: ['0 0 0px hsl(var(--primary))', '0 0 20px hsl(var(--primary))', '0 0 0px hsl(var(--primary))']
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground font-light mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Dedicado para <span className="text-primary font-semibold">lojistas</span> que querem achar os
                <motion.span
                  className="text-white font-semibold"
                  animate={{
                    color: ['#fff', 'hsl(var(--primary))', '#fff'],
                    textShadow: ['0 0 0px', '0 0 20px hsl(var(--primary))', '0 0 0px']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                > melhores preços</motion.span> do mercado
              </motion.p>
            </motion.div>

            {/* Features Pills - Animated Float */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: Bot, text: "IA Mineradora" },
                { icon: Store, text: "Marketplace" },
                { icon: Users, text: "Networking" },
                { icon: ShoppingBag, text: "Fornecedores" },
              ].map((item, index) => (
                <motion.span
                  key={item.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground cursor-pointer relative overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'hsl(var(--primary))',
                    backgroundColor: 'hsl(var(--primary) / 0.1)'
                  }}
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: [
                      '0 0 0px transparent',
                      '0 5px 20px hsl(var(--primary) / 0.2)',
                      '0 0 0px transparent'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                  </motion.span>
                  {item.text}
                  {/* Pulse ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons - Ultra Effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="#price-section">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px hsl(var(--primary) / 0.5)',
                      '0 0 60px hsl(var(--primary) / 0.8)',
                      '0 0 20px hsl(var(--primary) / 0.5)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="rounded-xl relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Button size="lg" className="btn-3d font-bold text-lg px-8 py-7 rounded-xl bg-gradient-to-r from-primary via-red-500 to-orange-500 group relative">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="mr-2"
                    >
                      🔥
                    </motion.span>
                    QUERO ACESSO AGORA
                    <motion.span className="ml-2" animate={{ x: [0, 8, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>→</motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="#ia-mineradora">
                <motion.div
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" variant="outline" className="font-bold text-lg px-8 py-7 rounded-xl border-primary/50 hover:bg-primary/10 hover:border-primary transition-all group">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Search className="w-5 h-5 mr-2" />
                    </motion.span>
                    TESTAR IA MINERADORA
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats with 3D Effects */}
          <motion.div
            className="lg:col-span-5 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ perspective: 1000 }}
          >
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Main Stat - Floating 3D */}
              <motion.div
                className="col-span-2 glass-card p-6 relative overflow-hidden interactive-card"
                whileHover={{
                  scale: 1.03,
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                }}
                animate={{
                  borderColor: ['hsl(var(--primary) / 0.2)', 'hsl(var(--primary) / 0.6)', 'hsl(var(--primary) / 0.2)'],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 20, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_hsl(var(--primary))]" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-black text-white mb-2"
                  animate={{
                    textShadow: ['0 0 0px', '0 0 20px hsl(var(--primary))', '0 0 0px']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  IA que Minera Preços
                </motion.h3>
                <p className="text-muted-foreground">Paraguai + Centros de Comercialização</p>

                {/* Animated border trace */}
                <motion.div
                  className="absolute inset-0 rounded-inherit pointer-events-none"
                  style={{ borderRadius: 'inherit' }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent"
                    animate={{ x: ['0%', '400%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </motion.div>

              {/* Small Stats - 3D Hover */}
              <motion.div
                className="glass-card p-5 group relative overflow-hidden interactive-card"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateX: 8,
                  rotateY: -8,
                }}
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Store className="w-8 h-8 text-primary mb-3 drop-shadow-[0_0_10px_hsl(var(--primary))]" />
                </motion.div>
                <h3 className="text-2xl font-black text-white">25 Março</h3>
                <p className="text-muted-foreground text-sm">Navegue sem sair de casa</p>
              </motion.div>

              <motion.div
                className="glass-card p-5 group relative overflow-hidden interactive-card"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateX: 8,
                  rotateY: 8,
                }}
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-8 h-8 text-primary mb-3 drop-shadow-[0_0_10px_hsl(var(--primary))]" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-black text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  100%
                </motion.h3>
                <p className="text-muted-foreground text-sm">Fornecedores Testados</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{
            boxShadow: ['0 0 10px hsl(var(--primary))', '0 0 30px hsl(var(--primary))', '0 0 10px hsl(var(--primary))']
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="rounded-full p-2"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Glows - More Intense */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
