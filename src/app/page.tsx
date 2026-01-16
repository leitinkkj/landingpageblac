'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Componentes críticos - carregados imediatamente (above the fold)
import Hero from '@/components/page/hero';
import VideoVSL from '@/components/page/video-vsl';

// Background - carregado dinamicamente para não bloquear LCP
const OrangeParticlesBackground = dynamic(
  () => import('@/components/effects/OrangeParticlesBackground'),
  { ssr: false }
);

// Back Redirect Offer - carregado dinamicamente
const BackRedirectOffer = dynamic(
  () => import('@/components/effects/BackRedirectOffer').then(mod => ({ default: mod.BackRedirectOffer })),
  { ssr: false }
);

// Componentes não-críticos - lazy loaded para melhor performance
const IAMineradora = dynamic(() => import('@/components/page/ia-mineradora'), {
  loading: () => <div className="min-h-[400px]" />,
});

const IANegocios = dynamic(() => import('@/components/page/ia-negocios'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Marketplace = dynamic(() => import('@/components/page/marketplace'), {
  loading: () => <div className="min-h-[400px]" />,
});

const NetworkingSection = dynamic(() => import('@/components/page/networking-section'), {
  loading: () => <div className="min-h-[400px]" />,
});

const AulasBlack = dynamic(() => import('@/components/page/aulas-black'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Fornecedores = dynamic(() => import('@/components/page/fornecedores'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Fronteireiros = dynamic(() => import('@/components/page/fronteireiros'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Confianca = dynamic(() => import('@/components/page/confianca'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Feedback = dynamic(() => import('@/components/page/feedback'), {
  loading: () => <div className="min-h-[400px]" />,
});

const MainCTA = dynamic(() => import('@/components/page/main-cta'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import('@/components/page/footer'), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Clean Orange Particles Background - SSR disabled for performance */}
      <OrangeParticlesBackground />

      {/* Back Redirect Offer - detecta quando usuário sai e volta */}
      <BackRedirectOffer />

      <main className="flex-1 relative z-10">
        {/* Critical above-the-fold content */}
        <Hero />
        <VideoVSL />

        {/* Lazy-loaded sections */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <IAMineradora />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <IANegocios />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Marketplace />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <NetworkingSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <AulasBlack />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Fornecedores />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Fronteireiros />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Confianca />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Feedback />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <MainCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
