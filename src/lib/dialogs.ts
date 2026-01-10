
export type DialogStep = {
  speech: string;
  image: string;
  imageHint: string;
};

type DialogFinalAction = {
  titleHighlight: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  videoUrl?: string; 
};

type Dialog = {
  steps: DialogStep[];
  finalAction: DialogFinalAction;
};

export const dialogs: Record<string, Dialog> = {
  "compras-inteligentes": {
    steps: [
       {
        speech: "Boas-vindas ao Marketplace Exclusivo! Sou seu guia na Black Shoppe e vou te mostrar um novo universo de compras.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character waving"
      },
      {
        speech: "Nossa plataforma conecta você diretamente aos melhores fornecedores, com produtos até 80% mais baratos. Chega de pagar caro!",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character explaining"
      },
      {
        speech: "Quer ver como funciona na prática? Preparamos um vídeo rápido mostrando o poder do nosso marketplace. Clique abaixo para assistir!",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      }
    ],
    finalAction: {
      titleHighlight: "Veja o Marketplace",
      title: "em Ação!",
      description: "Assista ao vídeo e descubra como nossa plataforma pode transformar sua experiência de compra.",
      buttonText: "ASSISTIR AO VÍDEO",
      buttonHref: "#",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  "fornecedores": {
    steps: [
      {
        speech: "Cansado de fornecedores que não entregam o prometido? Aqui na Black Shoppe, a história é outra. Todos são validados.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Nossa equipe seleciona e valida os fornecedores mais confiáveis e lucrativos. Apenas os melhores entram aqui, garantindo qualidade e preço justo.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character arms crossed"
      },
      {
        speech: "Dê uma olhada na nossa lista de demonstração para ter um gostinho do que te espera. São produtos com margens que você não vai acreditar!",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      }
    ],
    finalAction: {
      titleHighlight: "Amostra Grátis",
      title: "do Nosso Poder!",
      description: "Explore uma pequena parte dos produtos e lucros que esperam por você.",
      buttonText: "VER LISTA DEMO",
      buttonHref: "/lista-demo"
    }
  },
  "grupos-exclusivos": {
    steps: [
      {
        speech: "Imagine receber as melhores ofertas direto no seu celular. Nos nossos grupos de WhatsApp e Telegram, é exatamente isso que acontece!",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Fornecedores postam promoções e lançamentos exclusivos todos os dias. Você fica sabendo primeiro e aproveita as melhores oportunidades.",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      },
      {
        speech: "Chega de perder tempo caçando ofertas. Quer ver como centralizamos tudo para você? Assista ao vídeo!",
        image: "https://i.imgur.com/hi6L79z.png",
        imageHint: "orange hoodie character celebrating"
      }
    ],
    finalAction: {
      titleHighlight: "VEJA O PAINEL DE GRUPOS",
      title: "EM AÇÃO",
      description: "Você não vai acreditar como é fácil ficar por dentro de tudo!",
      buttonText: "ASSISTIR AO VÍDEO",
      buttonHref: "#",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  "assistente-virtual": {
    steps: [
       {
        speech: "Eu sou seu novo Assistente Virtual! Fui criado para tirar suas dúvidas e acelerar seus resultados aqui na Black Shoppe.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Precisa encontrar um produto? Quer saber sobre um fornecedor? É só me perguntar! Dou respostas rápidas e automáticas para você não perder tempo.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character explaining"
      },
       {
        speech: "Estou aqui para ser seu braço direito e garantir que sua experiência seja a melhor possível. Conte comigo!",
        image: "https://i.imgur.com/hi6L79z.png",
        imageHint: "orange hoodie character celebrating"
      }
    ],
    finalAction: {
      titleHighlight: "Quer testar?",
      title: "Compre o acesso!",
      description: "Adquira o acesso vitalício e comece a usar o assistente virtual agora mesmo para otimizar suas buscas.",
      buttonText: "QUERO ACESSO VITALÍCIO",
      buttonHref: "https://www.ggcheckout.com/checkout/v2/rpU6SEztCV3PJcXZTcsm",
    }
  },
  "buscador-promocoes": {
    steps: [
       {
        speech: "Você já imaginou encontrar promoções secretas que ninguém mais vê? Com nosso Buscador, isso é possível!",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Essa ferramenta exclusiva varre a internet em busca dos melhores preços e descontos escondidos. Em segundos, você tem acesso a oportunidades de lucro incríveis.",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      }
    ],
    finalAction: {
      titleHighlight: "Pare de perder dinheiro!",
      title: "Encontre as melhores ofertas.",
      description: "Compre o acesso vitalício e use nosso buscador para encontrar preços que a concorrência nem sonha em ter.",
      buttonText: "QUERO ACESSO VITALÍCIO",
      buttonHref: "https://www.ggcheckout.com/checkout/v2/rpU6SEztCV3PJcXZTcsm",
    }
  },
   "metodo-6": {
    steps: [
       {
        speech: "Chegou a hora de virar o jogo! Com o Método 6, nossa estratégia exclusiva, você vai aprender a se tornar um fornecedor de sucesso.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Em menos de 4 meses, você estará vendendo no atacado, usando o poder da Inteligência Artificial e dos nossos buscadores para encontrar produtos com alta demanda e margem de lucro.",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      }
    ],
    finalAction: {
      titleHighlight: "Pronto para escalar?",
      title: "Torne-se um fornecedor.",
      description: "Garanta seu acesso e comece hoje mesmo a trilhar o caminho para se tornar um grande fornecedor no seu nicho.",
      buttonText: "QUERO ACESSO VITALÍCIO",
      buttonHref: "https://www.ggcheckout.com/checkout/v2/rpU6SEztCV3PJcXZTcsm",
    }
  },
   "aulas-black": {
    steps: [
       {
        speech: "Conhecimento é poder! Nas Aulas Black, você terá acesso a treinamentos de vendas e branding que vão direto ao ponto.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Aprenda a construir uma marca forte, criar ofertas irresistíveis e escalar suas vendas de forma consistente. Chega de conteúdo enrolado, aqui o foco é no resultado.",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      }
    ],
    finalAction: {
      titleHighlight: "Quer vender mais?",
      title: "Aprenda com quem sabe.",
      description: "Tenha acesso a todas as aulas e transforme seu negócio em uma máquina de vendas.",
      buttonText: "VER AULAS DEMO",
      buttonHref: "/aulas-demo",
    }
  },
  "networking": {
    steps: [
       {
        speech: "Na Black Shoppe, você nunca está sozinho. Nossos grupos de networking conectam você com milhares de empreendedores que estão no campo de batalha, vendendo de verdade.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Troque ideias, estratégias e feche parcerias em nichos variados. Este é o lugar para aprender com a experiência de quem já alcançou o sucesso.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character arms crossed"
      }
    ],
    finalAction: {
      titleHighlight: "Conecte-se com os melhores!",
      title: "O Poder do Networking.",
      description: "Veja alguns dos grupos exclusivos que esperam por você e comece a construir conexões valiosas.",
      buttonText: "VER GRUPOS DE NETWORKING",
      buttonHref: "/grupos-networking"
    }
  },
  "treinamento": {
    steps: [
      {
        speech: "Além do marketplace mais completo e poderoso do Brasil, temos um segredo guardado a sete chaves, diretamente do Paraguai. Um método EXCLUSIVO dentro do app que vai transformar você em fornecedor rapidamente!",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character saluting"
      },
      {
        speech: "Esse não é um treinamento qualquer. Em MENOS de 4 meses, você vai estar vendendo no atacado para revendedores em grande escala, começando do ZERO, com um método que poucos conhecem – o segredo do Paraguai.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character arms crossed"
      },
      {
        speech: "Sabe quanto um fornecedor de sucesso ganha por mês? Eu não vou te dar um número qualquer. Vou te falar que nossos revendedores que viraram fornecedores estão faturando até R$200K por mês. E isso com pedidos diários de R$5K a R$10K! Agora imagine o que você pode conquistar com esse método SECRETO.",
        image: "https://i.imgur.com/VO7KOIo.png",
        imageHint: "orange hoodie character pointing"
      },
      {
        speech: "O segredo por trás desse sucesso? O método mais poderoso do Paraguai, usado por poucos, mas agora compartilhado com você. Estratégias de fronteiros, precificação imbatível e acesso a uma rede de fornecedores que pode multiplicar seus lucros. Você vai aprender tudo isso, e mais!",
        image: "https://i.imgur.com/X5Npz5Y.png",
        imageHint: "orange hoodie character worried"
      },
      {
        speech: "Chegou a hora de desvendar esse mistério. Veja as aulas DEMO que preparamos pra você no marketplace. Prepare-se para descobrir um mundo de oportunidades que vão transformar sua vida financeira para sempre.",
        image: "https://i.imgur.com/hi6L79z.png",
        imageHint: "orange hoodie character celebrating"
      }
    ],
    finalAction: {
      titleHighlight: "Desvende o Segredo",
      title: "do Paraguai!",
      description: "Assista às aulas demonstrativas e comece sua jornada para se tornar um fornecedor de sucesso.",
      buttonText: "VER AULAS DEMO",
      buttonHref: "/aulas-demo"
    }
  },
  "suporte": {
    steps: [
      {
        speech: "Deu algum problema? Relaxa! Nosso suporte é imediato e está sempre online para te ajudar, 24 horas por dia, 7 dias por semana.",
        image: "https://i.imgur.com/9pL2nHo.png",
        imageHint: "orange hoodie character friendly"
      },
      {
        speech: "Sem robôs, sem enrolação. Fale com um especialista de verdade que vai resolver seu problema na hora. Sua tranquilidade é nossa prioridade.",
        image: "https://i.imgur.com/bLL7HEb.png",
        imageHint: "orange hoodie character explaining"
      }
    ],
    finalAction: {
      titleHighlight: "PRECISA DE AJUDA?",
      title: "Fale Conosco!",
      description: "Nossa equipe está pronta para te atender. Clique no botão abaixo para enviar uma mensagem agora mesmo!",
      buttonText: "ENVIAR MENSAGEM",
      buttonHref: "https://wa.me/"
    }
  }
};
