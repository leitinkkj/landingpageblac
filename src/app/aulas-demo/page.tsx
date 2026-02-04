
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Video, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const lockedLessons = [
  {
    title: "AULA 1: O QUE SÃO OS FRONTEIROS?",
    description: "Vídeo explicativo revelando quem são os 'Fronteiros', a peça-chave entre você e o Paraguai. Aprenda como contatá-los pelo WhatsApp para buscar qualquer produto com a melhor precificação de varejo e atacado. Você sabia que o perfume Lattafa Asad, um dos árabes mais desejados, custa apenas 4 dólares lá? Veja a prova em vídeo!"
  },
  {
    title: "AULA 2: COMO EVOLUIR SUA MERCADORIA A UNIDADES INFINITAS",
    description: "Desvende a estratégia para transformar seu estoque limitado em um fluxo contínuo de produtos. Aprenda a negociar com fornecedores para escalar seus pedidos sem arriscar seu capital, garantindo mercadoria ilimitada para atender qualquer demanda."
  },
  {
    title: "AULA 3: COMO ALCANÇAR SEUS CLIENTES PARA COMPRAREM DE VOCÊ",
    description: "Domine as técnicas de marketing e vendas para atrair uma legião de clientes fiéis. Descubra como construir uma marca forte, usar as redes sociais a seu favor e criar ofertas irresistíveis que fazem os clientes implorarem para comprar."
  },
  {
    title: "AULA 4: O SEGREDO DO ATACADO MAIS BARATO DO BRASIL",
    description: "Acesse a rota secreta dos preços baixos. Nesta aula, revelamos os contatos e as técnicas de negociação para conseguir preços de atacado que sua concorrência nem sonha em ter, direto da fonte."
  },
  {
    title: "AULA 5: PRECIFICAÇÃO INTELIGENTE: LUCRO MÁXIMO GARANTIDO",
    description: "Aprenda a calcular seus preços de forma estratégica. Entenda a margem de lucro ideal para cada produto, como ser competitivo e, ao mesmo tempo, maximizar seus ganhos em cada venda."
  },
  {
    title: "AULA 6: LOGÍSTICA SEM FRONTEIRAS: DO PARAGUAI PARA TODO BRASIL",
    description: "Descomplique o envio de mercadorias. Conheça as melhores e mais seguras transportadoras, métodos de envio e como garantir que seus produtos cheguem rapidamente e em perfeito estado para seus clientes em qualquer lugar do país."
  },
  {
    title: "AULA 7: DE REVENDEDOR A FORNECEDOR EM 4 MESES",
    description: "O plano de ação completo para você deixar de ser apenas um revendedor e se tornar um fornecedor de referência. Siga o passo a passo e construa seu império no atacado em tempo recorde."
  },
]

export default function DemoLessonsPage() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" passHref>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <Video className="mx-auto h-24 w-24 text-primary mb-6" />
          <h1 className="font-headline text-4xl md:text-6xl font-black uppercase">
            Aulas da <span className="text-primary">Black Shoppe</span>
          </h1>
          <p className="font-headline text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Aqui estão as aulas DEMO exclusivas, onde você vai aprender os segredos do Paraguai e como colocá-los em prática de forma rápida e eficiente. Está pronto para começar a ganhar como nunca antes?
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lockedLessons.map((lesson, index) => (
              <div key={index} className="bg-card/50 border border-border/50 rounded-lg p-6 text-left overflow-hidden transform transition-transform duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
                <Link href="https://www.ggcheckout.com/checkout/v5/rpU6SEztCV3PJcXZTcsm" passHref>
                  <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden bg-black/80 flex items-center justify-center text-center p-4 cursor-pointer hover:bg-black/90 transition-colors">
                    <div className="text-white">
                      <Lock className="h-10 w-10 text-primary mx-auto mb-2 animate-pulse-glow" />
                      <p className="font-bold uppercase">Clique para Desbloquear</p>
                    </div>
                  </div>
                </Link>
                <h3 className="font-headline text-xl font-bold uppercase text-white mb-2">{lesson.title}</h3>
                <p className="text-gray-400 text-sm">{lesson.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="font-headline text-3xl font-bold text-white uppercase">Desbloqueie o método secreto do Paraguai</h2>
            <p className="font-headline text-lg text-gray-400 mt-2">Acesso completo e vitalício para transformar seu negócio em 4 meses.</p>
            <Link href="https://www.ggcheckout.com/checkout/v5/rpU6SEztCV3PJcXZTcsm" passHref>
              <Button size="lg" className="mt-6 font-bold text-lg px-10 py-7 rounded-full animate-pulse-glow">
                QUERO ACESSO COMPLETO AGORA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
