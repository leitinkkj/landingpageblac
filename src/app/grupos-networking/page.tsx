
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"


const networkingGroups = [
  "POD NETWORKING", "MODA NETWORKING", "IPHONES NETWORKING", "ELETRÔNICOS NETWORKING",
  "PERFUMES NETWORKING", "TIK TOK SHOP NETWORKING", "MERCADO LIVRE NETWORKING",
  "AMAZON NETWORKING", "CENTRAL NETWORKING", "MARKETING DIGITAL NETWORKING",
  "VAREJO ONLINE NETWORKING", "SAÚDE E BELEZA NETWORKING", "FERRAMENTAS DE TRABALHO NETWORKING",
  "MÓVEIS E DECORAÇÃO NETWORKING", "LIVROS E CURSOS NETWORKING", "IMPORTAÇÃO NETWORKING",
  "TECNOLOGIA NETWORKING", "VEÍCULOS E MOTORES NETWORKING", "ENTRETENIMENTO NETWORKING",
  "HARDWARE E SOFTWARE NETWORKING", "STARTUPS NETWORKING", "MODA INFANTIL NETWORKING"
];

export default function NetworkingGroupsPage() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="absolute top-4 left-4">
        <Link href="/" passHref>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <Users className="mx-auto h-24 w-24 text-primary mb-6" />
          <h1 className="font-headline text-4xl md:text-6xl font-black uppercase">
            Grupos de <span className="text-primary">Networking</span> Exclusivos
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Agora, veja todos os grupos de networking disponíveis para você. De todos os nichos que você possa imaginar. Com um simples deslizar, você terá acesso a todos. Não perca tempo e aproveite as oportunidades!
          </p>
          <div className="mt-12 w-full max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {networkingGroups.map((group, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-card/80 border-primary/20 backdrop-blur-sm">
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                          <span className="font-headline text-2xl font-bold text-white uppercase">{group}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white" />
              <CarouselNext className="text-white" />
            </Carousel>
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="https://www.ggcheckout.com/checkout/v5/rpU6SEztCV3PJcXZTcsm" passHref>
              <Button size="lg" className="font-bold text-lg px-10 py-7 rounded-full animate-pulse-glow">
                QUERO ACESSO A TODOS OS GRUPOS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
