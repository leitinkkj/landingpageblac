
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderKanban, ShoppingCart, Footprints, Gem, Shirt, Diamond } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProductAccordion from "@/components/page/product-accordion";
import {
  oversizedStreetWear, bones, bonesPremium, bonesLacoste, calcados, outrosStreetwear,
  camisasPeruanas, linhaPremium, bermudasDryfit, golaPolos, shortsCargo, bermudasJeans,
  topMoletoms, camisasDryfit, conjuntoCroche, kitsCuecas, appleCelulares, appleMacbooks,
  appleIpad, eletronicos, garrafas, hidratantesArabes, principiaProdutos, creamySeruns,
  perfumesFamosos1, perfumesFamosos2, perfumesArabes, relogiosPremium,
  moletonsCanguro, moletonsGolaCareca, sueters, camisasEgipcias
} from "@/lib/products";

export default function DemoListPage() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="absolute top-4 left-4 z-20">
        <Link href="/" passHref>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="text-center my-8 animate-fade-in-up">
          <FolderKanban className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-headline text-4xl md:text-6xl font-black uppercase">
            Pastas de <span className="text-primary">Fornecedores</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
            Uma amostra do poder de compra que você terá. Explore as pastas abaixo e veja a variedade e os preços imbatíveis que te esperam.
          </p>
        </div>

        <Tabs defaultValue="roupas" className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-transparent p-0">
            <TabsTrigger value="roupas" className="py-3 text-lg"><Shirt className="mr-2" />Roupas</TabsTrigger>
            <TabsTrigger value="calcados" className="py-3 text-lg"><Footprints className="mr-2" />Calçados</TabsTrigger>
            <TabsTrigger value="acessorios" className="py-3 text-lg"><Diamond className="mr-2" />Acessórios</TabsTrigger>
            <TabsTrigger value="outros" className="py-3 text-lg"><Gem className="mr-2" />Outros</TabsTrigger>
          </TabsList>

          {/* Aba de Roupas */}
          <TabsContent value="roupas">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="font-headline text-3xl font-black text-primary uppercase flex items-center gap-3">
                  <Shirt className="h-8 w-8" /> Moda Masculina e Streetwear
                </CardTitle>
                <CardDescription>Preços que esmagam a concorrência. Lucro certo!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ProductAccordion title="Oversized Street Wear" images={oversizedStreetWear} />
                <ProductAccordion title="Camisas Peruanas" images={camisasPeruanas} />
                <ProductAccordion title="Linha Premium" images={linhaPremium} />
                <ProductAccordion title="Bermudas Dryfit" images={bermudasDryfit} />
                <ProductAccordion title="Gola Polos" images={golaPolos} />
                <ProductAccordion title="Shorts Cargo" images={shortsCargo} />
                <ProductAccordion title="Bermudas Jeans" images={bermudasJeans} />
                <ProductAccordion title="Top Moletons Mais Vendidos" images={topMoletoms} />
                <ProductAccordion title="Camisas Dryfit" images={camisasDryfit} />
                <ProductAccordion title="Conjunto Crochê" images={conjuntoCroche} />
                <ProductAccordion title="Kits Cuecas" images={kitsCuecas} />
                <ProductAccordion title="Moletons Canguru" images={moletonsCanguro} />
                <ProductAccordion title="Moletons Gola Careca" images={moletonsGolaCareca} />
                <ProductAccordion title="Sueters (Alta Qualidade)" images={sueters} />
                <ProductAccordion title="Camisas Egípcias" images={camisasEgipcias} />
                <ProductAccordion title="Outros Streetwear" images={outrosStreetwear} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Calçados */}
          <TabsContent value="calcados">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="font-headline text-3xl font-black text-primary uppercase flex items-center gap-3">
                  <Footprints className="h-8 w-8" /> Calçados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-dashed border-primary/50 rounded-lg p-6 text-center animate-pulse-glow">
                  <h3 className="font-headline text-2xl font-bold uppercase text-white">PROMOÇÃO IMPERDÍVEL 🚨</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-lg">
                    <div>
                      <p className="font-semibold text-gray-300">Atacado Revenda (+10 pares)</p>
                      <p><span className="font-bold text-primary text-3xl">R$ 59,90</span> <span className="text-sm text-gray-400">(dinheiro)</span></p>
                      <p><span className="font-bold text-primary text-3xl">R$ 79,90</span> <span className="text-sm text-gray-400">(cartão)</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300">Atacado Mínimo (3 pares)</p>
                      <p><span className="font-bold text-white text-3xl">R$ 79,90</span> <span className="text-sm text-gray-400">(dinheiro)</span></p>
                      <p><span className="font-bold text-white text-3xl">R$ 89,90</span> <span className="text-sm text-gray-400">(cartão)</span></p>
                    </div>
                  </div>
                  <p className="mt-4 font-bold text-2xl text-white">Varejo: <span className="text-primary">R$ 119,90</span></p>
                </div>
                <ProductAccordion title="Tênis (Modelos Diversos)" images={calcados} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Acessórios */}
          <TabsContent value="acessorios">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="font-headline text-3xl font-black text-primary uppercase flex items-center gap-3">
                  <Diamond className="h-8 w-8" /> Acessórios
                </CardTitle>
                <CardDescription>Bonés, Relógios e mais. O detalhe que faz a diferença no seu lucro.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="border border-dashed border-primary/50 rounded-lg p-6 text-center animate-pulse-glow my-4">
                  <h3 className="font-headline text-2xl font-bold uppercase text-white">BONÉS 🧢 NOVIDADE</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-lg">
                    <div>
                      <p className="font-semibold text-gray-300">Atacado Revenda (+10)</p>
                      <p><span className="font-bold text-primary text-3xl">R$ 22,00</span> <span className="text-sm text-gray-400">(dinheiro)</span></p>
                      <p><span className="font-bold text-primary text-3xl">R$ 25,00</span> <span className="text-sm text-gray-400">(cartão)</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300">Atacado Mínimo (3)</p>
                      <p><span className="font-bold text-white text-3xl">R$ 25,00</span> <span className="text-sm text-gray-400">(dinheiro)</span></p>
                      <p><span className="font-bold text-white text-3xl">R$ 30,00</span> <span className="text-sm text-gray-400">(cartão)</span></p>
                    </div>
                  </div>
                  <p className="mt-4 font-bold text-2xl text-white">Varejo: <span className="text-primary">R$ 35,00</span></p>
                </div>

                <ProductAccordion title="Bonés" images={bones} />
                <ProductAccordion title="Bonés Linha Premium" images={bonesPremium} />
                <ProductAccordion title="Bonés Linha Lacoste" images={bonesLacoste} />
                <ProductAccordion title="Relógios Premium" images={relogiosPremium} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Outros */}
          <TabsContent value="outros">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="font-headline text-3xl font-black text-primary uppercase flex items-center gap-3">
                  <Gem className="h-8 w-8" /> Eletrônicos, Beleza & Mais
                </CardTitle>
                <CardDescription>Categorias de alto valor agregado e lucro explosivo.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ProductAccordion title="Apple Celulares" images={appleCelulares} />
                <ProductAccordion title="Apple Macbooks" images={appleMacbooks} />
                <ProductAccordion title="Apple iPad" images={appleIpad} />
                <ProductAccordion title="Eletrônicos Diversos" images={eletronicos} />
                <ProductAccordion title="Garrafas" images={garrafas} />
                <ProductAccordion title="Hidratantes Árabes (Exclusivo)" images={hidratantesArabes} />
                <ProductAccordion title="Principia Produtos (TOP)" images={principiaProdutos} />
                <ProductAccordion title="Creamy Seruns (TOP)" images={creamySeruns} />
                <ProductAccordion title="Perfumes Famosos" images={perfumesFamosos1.concat(perfumesFamosos2)} />
                <ProductAccordion title="Perfumes Árabes" images={perfumesArabes} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-headline text-2xl font-bold">E isso é só o começo!</h3>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Tenha acesso a milhares de produtos com margens de lucro incríveis e transforme seu negócio.</p>
          <Link href="https://www.ggcheckout.com/checkout/v5/rpU6SEztCV3PJcXZTcsm" passHref>
            <Button size="lg" className="mt-6 font-bold text-lg px-10 py-7 rounded-full animate-pulse-glow">
              QUERO ACESSO COMPLETO AGORA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
