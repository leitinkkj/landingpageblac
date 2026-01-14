"use client";

import Link from 'next/link';
import Logo from '@/components/page/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, MessageCircle, Sparkles, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingIcon, AnimatedParticles } from '@/components/effects/VisualEffects';

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-transparent" />

      {/* Particles */}
      <AnimatedParticles count={10} />

      {/* Floating Icons */}
      <FloatingIcon Icon={Sparkles} className="top-[20%] left-[5%] w-5 h-5" delay={0} />
      <FloatingIcon Icon={Star} className="top-[30%] right-[8%] w-6 h-6" delay={1} />
      <FloatingIcon Icon={Zap} className="bottom-[20%] left-[10%] w-4 h-4" delay={2} />

      {/* Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: 9999 }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              A comunidade secreta que conecta você aos fornecedores mais poderosos do Brasil e do Paraguai.
            </p>
          </motion.div>

          {/* Social and links */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    animate={{
                      y: [0, -3, 0],
                      boxShadow: [
                        '0 0 0px hsl(var(--primary) / 0)',
                        '0 0 15px hsl(var(--primary) / 0.5)',
                        '0 0 0px hsl(var(--primary) / 0)'
                      ]
                    }}
                    transition={{
                      y: { duration: 2, repeat: 9999, delay: index * 0.3 },
                      boxShadow: { duration: 2, repeat: 9999, delay: index * 0.3 }
                    }}
                    className="rounded-full"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-primary/10 border border-primary/20 hover:bg-primary hover:border-primary transition-all duration-300 group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </Button>
                  </motion.a>
                );
              })}
            </div>

            {/* Navigation links */}
            <div className="flex gap-6 font-medium text-sm">
              {['Termos', 'Privacidade', 'Suporte'].map((link, index) => (
                <motion.div
                  key={link}
                  whileHover={{ scale: 1.05 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: 9999, delay: index * 0.3 }}
                >
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-10 pt-8 border-t border-primary/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.p
            className="text-sm text-muted-foreground"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: 9999 }}
          >
            &copy; {new Date().getFullYear()} Black Shoppe. Todos os direitos reservados.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
