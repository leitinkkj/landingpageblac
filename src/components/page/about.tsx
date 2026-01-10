"use client";

import { Swords, ArrowDown, Target, Crown, Flame, Sparkles, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Animated Particles */}
      <AnimatedParticles count={15} />

      {/* Scan Line */}
      <ScanLine />

      {/* Floating Icons */}
      <FloatingIcon Icon={Sparkles} className="top-[10%] left-[5%] w-6 h-6" delay={0} />
      <FloatingIcon Icon={Star} className="top-[20%] right-[5%] w-8 h-8" delay={1} />
      <FloatingIcon Icon={Zap} className="bottom-[15%] left-[10%] w-5 h-5" delay={2} />
      <FloatingIcon Icon={Crown} className="bottom-[25%] right-[8%] w-7 h-7" delay={0.5} />
      <FloatingIcon Icon={Flame} className="top-[50%] left-[3%] w-6 h-6" delay={1.5} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Split Layout - Content Left, Visual Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label with animation */}
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-[2px] bg-primary"
                animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="text-primary text-sm font-bold tracking-widest uppercase"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                POR QUE ENTRAR
              </motion.span>
            </div>

            {/* Title */}
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
              <span className="text-white">Entre no</span>
              <br />
              <motion.span
                className="text-gradient-animate inline-block"
                animate={{
                  textShadow: [
                    '0 0 20px hsl(var(--primary) / 0.5)',
                    '0 0 40px hsl(var(--primary) / 0.8)',
                    '0 0 20px hsl(var(--primary) / 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >Campo de Batalha</motion.span>
              <br />
              <span className="text-white">do Comércio Real</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Enquanto os outros vendem <span className="text-white">PDFs e promessas</span>, aqui você entra na trincheira com acesso real, contatos verdadeiros e <motion.span
                className="text-primary font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >lucro imediato</motion.span>.
            </p>

            {/* CTA to video */}
            <motion.div
              className="flex items-center gap-4 text-primary"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >💣</motion.span>
              <span className="font-semibold">Assista a demonstração abaixo</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Visual Cards (Stacked) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Stacked floating cards */}
            <div className="relative h-[400px]">
              {/* Card 1 - Back */}
              <motion.div
                className="absolute top-0 left-0 w-72 glass-card p-6 transform"
                animate={{
                  rotate: [-6, -4, -6],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              >
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <Crown className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Acesso Exclusivo</h3>
                <p className="text-muted-foreground text-sm">Fornecedores que ninguém mais tem acesso.</p>
              </motion.div>

              {/* Card 2 - Middle */}
              <motion.div
                className="absolute top-16 left-16 w-72 glass-card p-6 z-10"
                animate={{
                  rotate: [3, 5, 3],
                  y: [0, -8, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              >
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Target className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Contatos Reais</h3>
                <p className="text-muted-foreground text-sm">WhatsApp direto dos melhores fornecedores.</p>
              </motion.div>

              {/* Card 3 - Front */}
              <motion.div
                className="absolute top-32 left-8 w-72 glass-card p-6 z-20"
                animate={{
                  rotate: [-2, 0, -2],
                  y: [0, -6, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Flame className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Lucro Imediato</h3>
                <p className="text-muted-foreground text-sm">Comece a faturar desde o primeiro dia.</p>
              </motion.div>

              {/* Decorative glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
