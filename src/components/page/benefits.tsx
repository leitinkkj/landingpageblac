"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, Users, GraduationCap, Bot, Search, Zap, LifeBuoy, Handshake, ArrowRight, Star, Sparkles, Crown, Flame } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const benefits = [
  { icon: ShoppingCart, title: "Marketplace Exclusivo", description: "Produtos até 80% mais baratos", image: "https://i.imgur.com/4dZ7UM6.png", href: "/dialogo/compras-inteligentes" },
  { icon: Handshake, title: "Fornecedores Validados", description: "Apenas os mais confiáveis", image: "https://i.imgur.com/p9SAmCs.png", href: "/dialogo/fornecedores" },
  { icon: Users, title: "Grupos de Ofertas", description: "Promoções diárias", image: "https://i.imgur.com/pqwO02G.png", href: "/dialogo/grupos-exclusivos" },
  { icon: Bot, title: "Atendente Inteligente", description: "Suporte automático 24/7", image: "https://i.imgur.com/tkTc90k.png", href: "/dialogo/assistente-virtual" },
  { icon: Search, title: "Promoções Escondidas", description: "Encontre os melhores preços", image: "https://i.imgur.com/V2pDrGQ.png", href: "/dialogo/buscador-promocoes" },
  { icon: Zap, title: "Estratégia Exclusiva", description: "Vire fornecedor em 4 meses", image: "https://i.imgur.com/hncSxuT.png", href: "/dialogo/metodo-6" },
  { icon: GraduationCap, title: "Treinamentos", description: "Escale sua marca", image: "https://i.imgur.com/hncSxuT.png", href: "/dialogo/aulas-black" },
  { icon: LifeBuoy, title: "Networking", description: "Conexões reais", image: "https://i.imgur.com/V2pDrGQ.png", href: "/dialogo/networking" },
  { icon: Zap, title: "Suporte Imediato", description: "Equipe sempre pronta", image: "https://i.imgur.com/tkTc90k.png", href: "/dialogo/suporte" },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Animated Particles */}
      <AnimatedParticles count={25} />

      {/* Scan Line */}
      <ScanLine />

      {/* Floating Icons */}
      <FloatingIcon Icon={Star} className="top-[5%] left-[5%] w-8 h-8" delay={0} />
      <FloatingIcon Icon={Sparkles} className="top-[15%] right-[8%] w-10 h-10" delay={1} />
      <FloatingIcon Icon={Crown} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
      <FloatingIcon Icon={Flame} className="bottom-[10%] right-[5%] w-7 h-7" delay={0.5} />
      <FloatingIcon Icon={Zap} className="top-[40%] left-[2%] w-5 h-5" delay={1.5} />
      <FloatingIcon Icon={Star} className="top-[60%] right-[3%] w-6 h-6" delay={2.5} />

      {/* Glows */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              {/* Big number with glow */}
              <motion.span
                className="text-7xl md:text-8xl font-black text-primary/30 leading-none hidden md:block"
                animate={{
                  textShadow: [
                    '0 0 20px hsl(var(--primary) / 0.3)',
                    '0 0 40px hsl(var(--primary) / 0.5)',
                    '0 0 20px hsl(var(--primary) / 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                09
              </motion.span>
              <div>
                <motion.span
                  className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  BENEFÍCIOS EXCLUSIVOS
                </motion.span>
                <h2 className="font-headline text-4xl md:text-5xl font-black uppercase">
                  <span className="text-white">Tudo Que Você Recebe</span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLarge = index === 0 || index === 4 || index === 7;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={isLarge ? 'row-span-2' : ''}
              >
                <Link href={benefit.href}>
                  <motion.div
                    className={`glass-card relative overflow-hidden group cursor-pointer h-full ${isLarge ? 'min-h-[280px]' : 'min-h-[140px]'} flex flex-col`}
                    animate={{
                      borderColor: ['hsl(var(--primary) / 0.1)', 'hsl(var(--primary) / 0.3)', 'hsl(var(--primary) / 0.1)']
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {/* Animated shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    />

                    {/* Background image */}
                    {isLarge && (
                      <>
                        <Image src={benefit.image} alt={benefit.title} fill className="object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                      </>
                    )}

                    {/* Content */}
                    <div className="relative z-10 p-5 flex flex-col h-full">
                      {/* Icon */}
                      <motion.div
                        className={`bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/20 inline-flex mb-3 ${isLarge ? 'p-3' : 'p-2'}`}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.1 }}
                      >
                        <Icon className={`text-primary ${isLarge ? 'h-8 w-8' : 'h-5 w-5'}`} />
                      </motion.div>

                      <h3 className={`font-bold text-white mb-1 group-hover:text-primary transition-colors ${isLarge ? 'text-xl' : 'text-sm'}`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-muted-foreground ${isLarge ? 'text-sm' : 'text-xs'}`}>
                        {benefit.description}
                      </p>

                      {/* Arrow */}
                      <motion.div
                        className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary text-sm font-medium"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span>Ver mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
