"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Eye, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/effects/ScrollAnimations";

const premiumProducts = [
  {
    name: "Nova Moto Elétrica",
    media: "https://i.imgur.com/QvrKRjP.png",
    mediaType: "image",
    description: "Lucro médio de 200% por unidade. Alta demanda e recompra garantida.",
    priceParaguay: "$ 39,00",
    tags: ["🚀 Alta Rotatividade"]
  },
  {
    name: "Pod de Capinha 30k Puffs",
    media: "https://i.imgur.com/dYcg6Kx.png",
    mediaType: "image",
    description: "Produto viral que esgota rápido. Margem de lucro de até 500%.",
    priceParaguay: "$ 4,00",
    tags: ["🔥 Tendência do TikTok", "💎 Top Lucro"]
  },
  {
    name: "Ar Condicionado Portátil",
    media: "https://i.imgur.com/lBM6ytj.mp4",
    mediaType: "video",
    description: "Perfeito para dropshipping. Produto sazonal com picos de venda altíssimos.",
    priceParaguay: "$ 9,00",
    tags: ["🚀 Alta Rotatividade"]
  },
  {
    name: "Notebook Gamer + Tablet",
    media: "https://i.imgur.com/WAT4SJ1.mp4",
    mediaType: "video",
    description: "Kit com alto valor percebido. Ideal para quem busca margens elevadas.",
    priceParaguay: "$ 18,00",
    tags: ["💎 Top Lucro"]
  },
  {
    name: "Jaquetas Americanas",
    media: "https://i.imgur.com/A7ifEhZ.mp4",
    mediaType: "video",
    description: "Estilo único e preço baixo. Vende fácil em qualquer estação.",
    priceParaguay: "$ 5,00",
    tags: ["🚀 Alta Rotatividade"]
  },
  {
    name: "Massageador Portátil",
    media: "https://i.imgur.com/dS8laZU.mp4",
    mediaType: "video",
    description: "Produto ideal para TikTok Shop, com potencial de viralização.",
    priceParaguay: "$ 1,50",
    tags: ["🔥 Tendência do TikTok"]
  },
  {
    name: "Mesa 4 em 1",
    media: "https://i.imgur.com/6LT9nlK.mp4",
    mediaType: "video",
    description: "Item de desejo com alto valor agregado e margem excelente.",
    priceParaguay: "",
    tags: ["💎 Top Lucro"]
  },
  {
    name: "Sofá Cama",
    media: "https://i.imgur.com/f4ZMYcj.mp4",
    mediaType: "video",
    description: "Solução prática para espaços pequenos, com demanda constante.",
    priceParaguay: "$ 15,00",
    tags: ["🚀 Alta Rotatividade"]
  },
  {
    name: "Air Fryer",
    media: "https://i.imgur.com/8uLQyZy.mp4",
    mediaType: "video",
    description: "Eletrodoméstico popular com giro rápido de estoque.",
    priceParaguay: "$ 12,00",
    tags: ["🚀 Alta Rotatividade"]
  },
  {
    name: "Beliche Portátil Top 1",
    media: "https://i.imgur.com/towi6Tn.mp4",
    mediaType: "video",
    description: "Número 1 de vendas no Paraguai. Fácil de importar e revender.",
    priceParaguay: "$ 8,00",
    tags: ["💎 Top Lucro"]
  },
  {
    name: "Console Box",
    media: "https://i.imgur.com/vxQ8x8V.mp4",
    mediaType: "video",
    description: "Nicho gamer com alta lucratividade. Produto de desejo para muitos.",
    priceParaguay: "$ 12,00",
    tags: ["🔥 Tendência do TikTok", "💎 Top Lucro"]
  },
  {
    name: "PS Vita Portátil Modificado",
    media: "https://i.imgur.com/KRnOL2I.mp4",
    mediaType: "video",
    description: "Produto de nicho com margem de lucro excepcional. Pouca concorrência.",
    priceParaguay: "$ 7,00",
    tags: ["💎 Top Lucro"]
  }
];

const PremiumProducts = () => {
  return (
    <section id="premium-products" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <ScrollAnimation className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider">
            <span className="text-white">Produtos </span>
            <span className="text-gradient-animate">Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Esses são os achados de ouro. As tendências que estão{' '}
            <span className="text-primary font-semibold">bombando</span> e que chegaram na Black Shoppe a preço de banana.
          </p>
        </ScrollAnimation>

        {/* Carousel */}
        <ScrollAnimation delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {premiumProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-card border-primary/20 rounded-2xl overflow-hidden group h-full flex flex-col">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        {/* Media */}
                        <div className="relative aspect-video bg-black overflow-hidden">
                          {product.mediaType === 'video' ? (
                            <video
                              src={product.media}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <Image
                              src={product.media}
                              alt={product.name}
                              fill
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          )}

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                          {/* Tags */}
                          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                            {product.tags.map(tag => (
                              <Badge
                                key={tag}
                                className="text-xs bg-primary/90 backdrop-blur-sm border-0 text-white px-2 py-1"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-headline text-xl font-bold text-white uppercase mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 flex-grow">
                            {product.description}
                          </p>

                          <div className="mt-auto space-y-4">
                            {product.priceParaguay && (
                              <div className="flex items-center justify-between bg-primary/10 p-3 rounded-xl border border-primary/20">
                                <span className="text-muted-foreground text-sm font-medium">Preço Paraguai:</span>
                                <span className="font-bold text-white text-xl">{product.priceParaguay}</span>
                              </div>
                            )}

                            <Button
                              variant="outline"
                              className="w-full border-primary/30 text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
                            >
                              <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                              Ver fornecedor
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-black/80 border-primary/50 text-white hover:bg-primary hover:border-primary h-12 w-12" />
            <CarouselNext className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-black/80 border-primary/50 text-white hover:bg-primary hover:border-primary h-12 w-12" />
          </Carousel>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default PremiumProducts
