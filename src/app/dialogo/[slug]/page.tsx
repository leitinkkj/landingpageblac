
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dialogs, DialogStep } from '@/lib/dialogs';

type DialogPageProps = {
  params: {
    slug: string;
  };
};

export default function DialogPage({ params }: DialogPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const dialog = dialogs[params.slug];

  if (!dialog) {
    notFound();
  }

  const { steps, finalAction } = dialog;

  const handleNext = () => {
    if (isAnimatingOut || currentStep >= steps.length) return;
    
    setIsAnimatingOut(true);
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsAnimatingOut(false);
    }, 400); 
  };
  
  const step: DialogStep | undefined = steps[currentStep];

  const handleFinalActionClick = (e: React.MouseEvent) => {
    if (finalAction.videoUrl) {
      e.preventDefault();
      setShowVideo(true);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_theme(colors.black)_60%)]">
        <div 
          className={`w-full max-w-2xl flex flex-col items-center text-center transition-all duration-300 ease-in-out ${isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          onClick={step ? handleNext : undefined}
          style={{ cursor: step ? 'pointer' : 'default' }}
        >
          {step ? (
            <>
              <div 
                className="relative bg-card/80 rounded-2xl p-1 bg-gradient-to-br from-rose-500 to-primary shadow-2xl shadow-primary/40 backdrop-blur-sm max-w-2xl animate-fade-in-up mb-6 group"
                style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.6)' }}
              >
                <div className="relative bg-card/90 rounded-xl p-6 md:p-10 h-full w-full">
                    <p className="text-2xl md:text-3xl leading-relaxed font-black uppercase">
                        {step.speech}
                    </p>
                    <div className="absolute bottom-4 right-4">
                        <ArrowRight className="h-6 w-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300 animate-pulse" />
                    </div>
                </div>
                 <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-primary"></div>
              </div>

              <div className="relative w-64 h-64 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Image
                  src={step.image}
                  alt="Mascote Black Shoppe"
                  width={256}
                  height={256}
                  className="object-contain"
                  data-ai-hint={step.imageHint}
                />
              </div>
            </>
          ) : (
            <>
              {showVideo && finalAction.videoUrl ? (
                <div className="w-full max-w-3xl aspect-video animate-fade-in-up">
                    <iframe
                        className="w-full h-full rounded-lg border-2 border-primary"
                        src={finalAction.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                     <Link href="/" passHref>
                      <Button variant="ghost" className="mt-6">
                          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
                      </Button>
                    </Link>
                </div>
              ) : (
                <div className="text-center animate-fade-in-up flex flex-col items-center w-full max-w-3xl" style={{ animationDelay: '200ms' }}>
                    <h2 className="font-headline text-3xl md:text-4xl font-black mb-6 uppercase">
                        <span className="text-primary">{finalAction.titleHighlight}</span> {finalAction.title}
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto mb-8">
                      {finalAction.description}
                    </p>
                    <Link href={finalAction.buttonHref} passHref>
                        <Button 
                          size="lg" 
                          className="font-bold text-lg px-10 py-7 rounded-full animate-pulse-glow"
                          onClick={handleFinalActionClick}
                        >
                           {finalAction.videoUrl && <PlayCircle className="mr-2 h-6 w-6" />}
                           {finalAction.buttonText}
                        </Button>
                    </Link>
                     <Link href="/" passHref>
                        <Button variant="ghost" className="mt-6">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
                        </Button>
                    </Link>
                </div>
              )}
             </>
          )}
        </div>
    </div>
  );
}
