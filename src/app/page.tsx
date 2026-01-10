
import Hero from '@/components/page/hero';
import VideoVSL from '@/components/page/video-vsl';
import IAMineradora from '@/components/page/ia-mineradora';
import IANegocios from '@/components/page/ia-negocios';
import Marketplace from '@/components/page/marketplace';
import GruposNetworking from '@/components/page/grupos-networking';
import AulasBlack from '@/components/page/aulas-black';
import Fornecedores from '@/components/page/fornecedores';
import Fronteireiros from '@/components/page/fronteireiros';
import Confianca from '@/components/page/confianca';
import Feedback from '@/components/page/feedback';
import MainCTA from '@/components/page/main-cta';
import Footer from '@/components/page/footer';
import OrangeParticlesBackground from '@/components/effects/OrangeParticlesBackground';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Clean Orange Particles Background - No 3D Icons */}
      <OrangeParticlesBackground />

      <main className="flex-1 relative z-10">
        <Hero />
        <VideoVSL />
        <IAMineradora />
        <IANegocios />
        <Marketplace />
        <GruposNetworking />
        <AulasBlack />
        <Fornecedores />
        <Fronteireiros />
        <Confianca />
        <Feedback />
        <MainCTA />
      </main>
      <Footer />
    </div>
  );
}
