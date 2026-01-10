
export type Reply = {
  author: string;
  authorImage?: string;
  text: string;
  date: string;
};

export type Testimonial = {
  name: string;
  title: string;
  feedback: string;
  image?: string;
  profileImage?: string;
  date: string;
  replies?: Reply[];
};


export const testimonials: Testimonial[] = [
  {
    name: "Caio Martins",
    title: "Fornecedor Verificado",
    date: "1 mês atrás",
    feedback: "A área de 'Fronteiros' e fornecedores do Paraguai é uma mina de ouro. Peguei todas essas caixas por 3 dólares a unidade. A margem de lucro é absurda. Simplesmente o melhor investimento que fiz.",
    image: "https://i.imgur.com/nBwEM8b.jpeg",
    profileImage: "https://i.imgur.com/Y3hZp9S.jpeg",
    replies: [
        {
            author: "Lawffy",
            authorImage: "https://i.imgur.com/UuR05tq.jpeg",
            text: "Brabo demais! To querendo começar a importar assim. Essa dica dos fronteiros vale ouro.",
            date: "1 mês atrás"
        }
    ]
  },
  {
    name: "Roberto Siqueira",
    title: "Lojista de Roupas",
    date: "2 semanas atrás",
    feedback: "O que a Black Shoppe fez foi colocar o Brás na palma da nossa mão. Abasteci minha loja inteira sem sair do escritório. A variedade e os preços são exatamente os que encontramos lá, só que com a comodidade de fechar negócio a qualquer momento. Fantástico!",
    image: "https://i.imgur.com/QV0fhGs.jpeg",
    profileImage: "https://i.imgur.com/Pq8iO4V.jpeg",
  },
  {
    name: "José Ferreira",
    title: "Dono de Mercadinho",
    date: "1 semana atrás",
    feedback: "loja abastecida remessinha boa kkkk. com o app da black shoppe to conseguindo ter o menor preço da cidade facil. os cliente tão fazendo a festa.",
    image: "https://i.imgur.com/Jiu8a4P.jpeg",
    profileImage: "https://i.imgur.com/hO3iX5v.jpeg",
  },
   {
    name: "Sofia G.",
    title: "Proprietária de Salão",
    date: "5 dias atrás",
    feedback: "Eu nunca mais vou pagar caro com frete e fornecedores da minha cidade com esse app novo do bras e da 25 de março online. Abasteci todo meu estoque de esmaltes por um preço que eu achava impossível. A Black Shoppe mudou a realidade do meu negócio.",
    image: "https://i.imgur.com/UtPsYoz.jpeg",
    profileImage: "https://i.imgur.com/7ZcZkL2.jpeg",
    replies: [
        {
            author: "Black Shoppe",
            authorImage: "https://i.imgur.com/smAc4dn.png",
            text: "Ficamos muito felizes em ajudar, Sofia! Essa é a nossa missão: conectar empreendedores como você aos melhores preços, sem intermediários. Sucesso! ✨",
            date: "5 dias atrás"
        }
    ]
  },
   {
    name: "Enzo Gabriel",
    title: "Pergunta da Comunidade",
    date: "1 dia atrás",
    feedback: "Galerinha, to precisando de um fronteiro que busca pod, alguém indica um de confiança? a taxa dos cara q eu pegava tava mt alta",
    profileImage: "https://i.imgur.com/7oH0Y4e.jpeg",
    replies: [
      {
        author: "Marcelo Imports",
        authorImage: "https://i.imgur.com/CNsNBDl.jpeg",
        text: "Opa, eu busco! Minha taxa é uma das melhores, chama no zap que a gente negocia. O contato tá na lista de fronteiros aqui do app.",
        date: "23 horas atrás",
      },
      {
        author: "Lawffy",
        authorImage: "https://i.imgur.com/UuR05tq.jpeg",
        text: "o marcelo é brabo, pode confiar. peguei uns pod dos eua com ele e chegou tudo certinho. recomendo!",
        date: "15 horas atrás",
      },
    ],
  },
  {
    name: "Carlos Andrade",
    title: "CEO, Andrade Imports",
    date: "1 semana atrás",
    feedback: "A plataforma Black Shoppe otimizou nossa operação de forma sem precedentes. Ter acesso consolidado a todos os fornecedores do Brás e da 25 de Março, com a possibilidade de fechar pedidos a qualquer hora, representa uma economia de tempo e recursos inestimável. Recomendo fortemente.",
    profileImage: "https://i.imgur.com/5gxVOgZ.jpeg",
  },
  {
    name: "Lipe",
    title: "Comprador Verificado",
    date: "2 dias atrás",
    feedback: "toma no cu malbec de 90 conto é de fuder kkkk. slk no app da black shoppe os cara faz mágica. Chegou hj e já to usando p sair",
    image: "https://i.imgur.com/31OOI5I.jpeg",
    profileImage: "https://i.imgur.com/sAVs2d1.jpeg",
    replies: [
        {
            author: "dudinha_16",
            authorImage: "https://i.imgur.com/jX8qQ2e.jpeg",
            text: "serio q é esse preço msm? to querendo pegar pro meu namo",
            date: "2 dias atrás"
        },
        {
            author: "Lipe",
            authorImage: "https://i.imgur.com/dE8w4z9.jpeg",
            text: "@dudinha_16 pode pegar sem medo, chegou rapido e é original. o cheiro eh top",
            date: "1 dia atrás"
        }
    ]
  },
  {
    name: "kauanzinxx",
    title: "Revendedor",
    date: "3 dias atrás",
    feedback: "seloko nunca vi isso, peguei caixa fechada desse akakak ta vendendo igual agua aqui na city",
    image: "https://i.imgur.com/NlTeD96.jpeg",
    profileImage: "https://i.imgur.com/1cXJ8oH.jpeg",
  },
    {
    name: "IgorVendas",
    title: "Vendedor Verificado",
    date: "4 dias atrás",
    feedback: "Tamo lucrando mais que o premio do roud 6 akakkak remessinha de blue chanel do paraguay só 15 dollar quem aproveito a promo saiu ganhando demais so espera brotar outra",
    image: "https://i.imgur.com/Vtvnk0i.jpeg",
    profileImage: "https://i.imgur.com/y4W1z2H.jpeg",
  },
  {
    name: "Felipe Almeida",
    title: "Distribuidor de Eletrônicos",
    date: "1 mês atrás",
    feedback: "A função de alerta de promoções do app é uma virada de chave. Recebi a notificação sobre os PS5, comprei 20 unidades a R$990 cada e abasteci minha loja para o mês inteiro. Essa ferramenta mudou nossa forma de adquirir inventário.",
    profileImage: "https://i.imgur.com/V8wV2S1.jpeg",
  },
   {
    name: "Thiago Oliveira",
    title: "Pergunta da Comunidade",
    date: "12 horas atrás",
    feedback: "Tropa, qual grupo de networking vcs mais recomendam pra quem ta começando a vender online? To meio perdido aqui, muita opção.",
    profileImage: "https://i.imgur.com/tZ2eK4x.jpeg",
    replies: [
      {
        author: "Vendedor_nato",
        authorImage: "https://i.imgur.com/Xifp9aM.jpeg",
        text: "Entra no 'VAREJO ONLINE NETWORKING', mn. A galera lá dá umas dicas de ouro pra quem tá no começo. Me ajudou dms a montar minha loja.",
        date: "11 horas atrás",
      },
      {
        author: "Lucas Farias",
        authorImage: "https://i.imgur.com/Fwujc1I.jpeg",
        text: "Fora o de varejo, o de 'MARKETING DIGITAL NETWORKING' é brabo. Aprendi umas estratégias de tráfego pago que nunca ia descobrir sozinho. Vale cada centavo do acesso.",
        date: "9 horas atrás",
      },
       {
        author: "Thiago Oliveira",
        authorImage: "https://i.imgur.com/hO3iX5v.jpeg",
        text: "Boaa, vou colar nesses dois então. Vlw pela força!",
        date: "8 horas atrás",
      }
    ],
  },
  {
    name: "Ryanzinn",
    title: "Comprador Verificado",
    date: "1 dia atrás",
    feedback: "os pods dos eua sao mt louco nunca vi assim, ate me perdi no market place com tanto modelo diferente q nunca viu em nenhum lugar kkkk top",
    image: "https://i.imgur.com/cL51Zqf.jpeg",
    profileImage: "https://i.imgur.com/KUVbQ3I.jpeg",
  },
  {
    name: "Jovem_Sagazz",
    title: "Comprador Verificado",
    date: "4 dias atrás",
    feedback: "comprei um v80 basicão com um dos fornecedores e nunca comprei tao barato na vida. surreal o preço dos cara",
    image: "https://i.imgur.com/xkpWDfP.jpeg",
    profileImage: "https://i.imgur.com/qEsP8WX.jpeg",
  },
  {
    name: "Duda",
    title: "Compradora Verificada",
    date: "5 dias atrás",
    feedback: "toma no cu malbec de 90 conto é de fuder kkkk. comprei pro meu namorado e ele amou, cheiro de homem rico afff",
    image: "https://i.imgur.com/Lo4QYlh.jpeg",
    profileImage: "https://i.imgur.com/mJ2u9fJ.jpeg",
  },
  {
    name: "Fernanda Lima",
    title: "Dona de E-commerce",
    date: "2 semanas atrás",
    feedback: "Achei incrível a variedade de produtos de beleza. Consegui montar um estoque de cremes e maquiagens importadas para minha loja com uma margem que eu não encontrava em nenhum outro lugar. O acesso direto aos fornecedores no app é um diferencial enorme.",
    profileImage: "https://i.imgur.com/I9Z4b0E.jpeg",
     replies: [
        {
            author: "Beatriz Almeida",
            authorImage: "https://i.imgur.com/O1zT8zG.jpeg",
            text: "Amiga, qual fornecedor vc pegou os cremes? To precisando renovar meu estoque!",
            date: "1 semana atrás"
        },
        {
            author: "Fernanda Lima",
            authorImage: "https://i.imgur.com/oI2n3Lz.jpeg",
            text: "@Beatriz Almeida oii, peguei com a 'ImportaBeauty', o contato tá na pasta de Cosméticos. Super confiável!",
            date: "6 dias atrás"
        }
    ]
  },
  {
    name: "Arthur Viana",
    title: "Comprador Verificado",
    date: "6 dias atrás",
    feedback: "toma no cu malbec de 90 conto é de fuder kkkk. comprei logo 2 pqp, um pra usar e outro pra guardar de tão barato. vlw black shoppe",
    image: "https://i.imgur.com/IlviZK2.jpeg",
    profileImage: "https://i.imgur.com/E1gQv4D.jpeg",
  },
   {
    name: "Ricardo Mendes",
    title: "Gerente de Compras",
    date: "3 semanas atrás",
    feedback: "A curadoria de fornecedores é impecável. A facilidade de encontrar e negociar grandes volumes de mercadoria diretamente pelo marketplace nos poupou semanas de trabalho e inúmeras viagens. Essencial para qualquer lojista.",
    profileImage: "https://i.imgur.com/zvyYxP7.jpeg",
  },
  {
    name: "Breno Costa",
    title: "Pergunta da Comunidade",
    date: "2 dias atrás",
    feedback: "Alguém que faz drop ta usando os grupos de networking? Queria saber se tem um grupo bom pra pegar umas dicas de produto viral.",
    profileImage: "https://i.imgur.com/qL3b0Lg.jpeg",
    replies: [
        {
            author: "ReiDoDrop",
            authorImage: "https://i.imgur.com/S5g0p6W.jpeg",
            text: "O grupo 'TIK TOK SHOP NETWORKING' é o melhor pra isso. A galera lá vive postando os achados que tão bombando. Já peguei uns 3 produtos de lá que venderam muito.",
            date: "1 dia atrás"
        }
    ]
  },
  {
    name: "Felipe Moura",
    title: "Comprador Verificado",
    date: "1 semana atrás",
    feedback: "comprei o phantom e gostei muito, cheiroso dms slk, geral perguntando qual perfume to usando. paguei mixaria",
    image: "https://i.imgur.com/kAxkRz2.jpeg",
    profileImage: "https://i.imgur.com/G2aE3E8.jpeg",
  },
   {
    name: "Isabela Martins",
    title: "Revendedora de Acessórios",
    date: "1 mês atrás",
    feedback: "Comprei um lote de bolsas e carteiras que esgotou em uma semana na minha cidade. A qualidade é excelente e os preços do atacado são imbatíveis. Já estou preparando o próximo pedido!",
    profileImage: "https://i.imgur.com/qO5kS0B.jpeg",
  },
  {
    name: "Lawffy",
    title: "Comprador Verificado",
    date: "2 dias atrás",
    feedback: "os pod que tem no app é coisa de outro mundo, bagulho dos eua mesmo, nunca vi uns modelo desse aqui no br. to lucrando dms revendendo",
    image: "https://i.imgur.com/rcq0H0W.jpeg",
    profileImage: "https://i.imgur.com/UuR05tq.jpeg",
  },
  {
    name: "Rafael Guimarães",
    title: "Pergunta da Comunidade",
    date: "2 dias atrás",
    feedback: "Alguém sabe um fornecedor bom de eletrônico que tenha garantia? Comprei umas caixinha de som de outro lugar e deu ruim, to com medo de arriscar de novo.",
    profileImage: "https://i.imgur.com/R3aG0gW.jpeg",
    replies: [
        {
            author: "Felipe Almeida",
            authorImage: "https://i.imgur.com/L1n5kS2.jpeg",
            text: "Cara, pode ir no 'Tech Solutions', o contato tá na pasta de Eletrônicos. Os caras dão garantia de 3 meses em tudo e o preço ainda é bom. Peguei um lote de PS5 com eles e veio tudo perfeito.",
            date: "2 dias atrás",
        },
        {
            author: "Black Shoppe",
            authorImage: "https://i.imgur.com/smAc4dn.png",
            text: "Isso mesmo! A 'Tech Solutions' é um dos nossos parceiros verificados. Todos os fornecedores com o selo de verificado na plataforma passam por uma análise rigorosa para garantir a qualidade e segurança da sua compra. 😉",
            date: "1 dia atrás",
        },
    ],
  },
  {
    name: "Ana Julia",
    title: "Dona de Boutique",
    date: "3 dias atrás",
    feedback: "Estava receosa no começo, mas a plataforma superou todas as minhas expectativas. Comprei um lote de vestidos e a qualidade era incrível. Minhas clientes amaram e o lucro foi ótimo!",
    profileImage: "https://i.imgur.com/QkY0z7Y.jpeg",
  },
  {
    name: "Barretos",
    title: "Compradora Verificada",
    date: "1 dia atrás",
    feedback: "8 conto nesse seloko kkk",
    image: "https://i.imgur.com/l1riIyw.jpeg",
    profileImage: "https://i.imgur.com/XXEBs3d.jpeg",
  },
  {
    name: "Lucas G.",
    title: "Vendedor de Perfumes",
    date: "1 semana atrás",
    feedback: "A area de atacado do market place é esquisito de bom. To pegando perfume que eu vendia a 200 por 40 conto. O lucro tá vindo forte.",
    profileImage: "https://i.imgur.com/pL7kS7m.jpeg",
  },
   {
    name: "Rodrigo Bastos",
    title: "Loja de Games",
    date: "3 semanas atrás",
    feedback: "Estava prestes a pagar 5k em um PS5 para revenda na minha cidade. Graças às promoções em tempo real do app, encontrei o mesmo console por R$1.800. A economia foi surreal e a margem de lucro, nem se fala.",
    profileImage: "https://i.imgur.com/QkZ0Y7L.jpeg",
  },
   {
    name: "Daniel Moreira",
    title: "E-commerce de Eletrônicos",
    date: "1 mês atrás",
    feedback: "Acesso a fornecedores de eletrônicos de ponta com preços que nos permitem ser competitivos no mercado nacional. A plataforma é robusta e o suporte sempre ágil.",
    profileImage: "https://i.imgur.com/N5h2Z6J.jpeg",
     replies: [
        { author: "Ricardo Mendes", authorImage: "https://i.imgur.com/bO3f5gG.jpeg", text: "Assino embaixo. A consolidação de fornecedores é o maior trunfo.", date: "3 semanas atrás" }
    ]
  },
   {
    name: "Mariana Costa",
    title: "Pergunta da Comunidade",
    date: "3 dias atrás",
    feedback: "Galera da moda, o grupo de networking 'MODA NETWORKING' é bom mesmo? Queria pegar umas dicas de fornecedor de oversized.",
    profileImage: "https://i.imgur.com/D4Z2z2z.jpeg",
    replies: [
        {
            author: "Bruno Andrade",
            authorImage: "https://i.imgur.com/mZtT5a1.jpeg",
            text: "É o melhor q tem! A galera lá troca contato direto. Peguei o fornecedor 'StreetWear SP' lá, o mesmo das oversized que postei aqui. Pode entrar sem medo.",
            date: "2 dias atrás",
        },
        {
            author: "Vitória Modas",
            authorImage: "https://i.imgur.com/13m4WjP.jpeg",
            text: "Confirmo! O grupo é ótimo não só pra streetwear, mas pra moda em geral. Muitas dicas de tendência.",
            date: "2 dias atrás",
        },
    ]
  },
   {
    name: "Vitória Modas",
    title: "Revendedora",
    date: "2 semanas atrás",
    feedback: "Comprei umas jaquetas jeans que são o maior sucesso! O preço do atacado me permitiu colocar uma margem ótima e mesmo assim vender mais barato que a concorrência. Adorei!",
    image: "https://i.imgur.com/uG2YyqS.jpeg",
    profileImage: "https://i.imgur.com/pX3qY5b.jpeg",
     replies: [
        { author: "Ana Julia", authorImage: "https://i.imgur.com/oI2n3Lz.jpeg", text: "Amiga, eu também! A qualidade é muito boa, né? Minhas clientes amaram.", date: "1 semana atrás" }
    ]
  },
  {
    name: "Renato Augusto",
    title: "Vendedor",
    date: "1 semana atrás",
    feedback: "A area de atacado do marketplace é surreal. Comprei um lote de relógio invicta que já to vendendo o triplo do preço. Bagulho de qualidade.",
    profileImage: "https://i.imgur.com/T0bS8sB.jpeg",
  },
  {
    name: "Bruno Andrade",
    title: "Revendedor Verificado",
    date: "1 dia atrás",
    feedback: "mn slk essas oversized do app sao mt brabas, peguei umas 10 p revender e ja foi tudo, os cria da city piraram. fornecedor 'StreetWear SP' eh o brabo",
    image: "https://i.imgur.com/NoXFWZ5.jpeg",
    profileImage: "https://i.imgur.com/mZtT5a1.jpeg",
    replies: [
        { author: "Leonardo Souza", authorImage: "https://i.imgur.com/9zZ4y0P.jpeg", text: "qual o nome desse fornecedor ai mn?", date: "1 dia atrás" },
        { author: "Bruno Andrade", authorImage: "https://i.imgur.com/L1n5kS2.jpeg", text: "@Leonardo Souza ta na pasta de streetwear mn, 'StreetWear SP', pode ir q é sucesso", date: "22 horas atrás"}
    ]
  },
  {
    name: "Marcos Vinicius",
    title: "Loja de Calçados",
    date: "2 semanas atrás",
    feedback: "Acesso direto aos lançamentos de calçados que só chegam aqui meses depois. Com a Black Shoppe, estamos sempre um passo à frente da concorrência.",
    profileImage: "https://i.imgur.com/dE8w4z9.jpeg",
  },
  {
    name: "Júlia Lima",
    title: "Manicure",
    date: "4 dias atrás",
    feedback: "Meninas, vcs não tem noção do tanto que economizei nos esmaltes e produtos de unha. Meu salão tá com o estoque cheio e gastei metade do que gastava antes. Recomendo muito!",
     profileImage: "https://i.imgur.com/eW2j6aH.jpeg",
     replies: [
        { author: "Sofia G.", authorImage: "https://i.imgur.com/jX8qQ2e.jpeg", text: "Eu também! A Black Shoppe mudou meu negócio. A economia é real!", date: "3 dias atrás" }
    ]
  },
  {
    name: "Matheus Alves",
    title: "Loja de Acessórios",
    date: "1 mês atrás",
    feedback: "A variedade de acessórios para celular é impressionante. Capinhas, cabos, películas... Tudo com preço de atacado que permite uma margem de lucro excelente.",
    profileImage: "https://i.imgur.com/gO1dY6g.jpeg",
  },
  {
    name: "Kaiky Souza",
    title: "Comprador Verificado",
    date: "5 dias atrás",
    feedback: "essas camisa de time eh qualidade dms, peguei uma do Corinthians e o pano eh top. chegou em 3 dia",
    image: "https://i.imgur.com/K9ZFwXl.jpeg",
    profileImage: "https://i.imgur.com/iR3nF9s.jpeg",
  },
  {
    name: "Julia Pereira",
    title: "Loja de Decoração",
    date: "3 semanas atrás",
    feedback: "Encontramos artigos de decoração únicos, como essa luminária de lua, que se tornaram best-sellers em nossa loja. A Black Shoppe abriu um leque de possibilidades criativas.",
    profileImage: "https://i.imgur.com/Z4mMoMU.jpeg",
  },
  {
    name: "Beatriz Almeida",
    title: "Maquiadora",
    date: "1 semana atrás",
    feedback: "Achei a pasta de 'Principia' e 'Creamy' e quase tive um treco kkkk. Abasteci minha maleta toda com produtos que eu pagava o dobro. As clientes tão amando as novidades.",
    image: "https://i.imgur.com/CmyjH1E.jpeg",
    profileImage: "https://i.imgur.com/7sP7AZb.jpeg",
  },
  {
    name: "Pedro Henrique",
    title: "Comprador Verificado",
    date: "6 dias atrás",
    feedback: "slk, peguei um bone da Lacoste por 20 conto, bagulho original mrm. no shopping eh 200 conto um desse. ta maluco",
    image: "https://i.imgur.com/GQGMS3O.jpeg",
    profileImage: "https://i.imgur.com/wV2eY0D.jpeg",
    replies: [
      { author: "Black Shoppe", authorImage: "https://i.imgur.com/smAc4dn.png", text: "É isso aí, Pedrinho! Na Black Shoppe a gente conecta você com o preço real, sem atravessador. Tmj! 🚀", date: "6 dias atrás"}
    ]
  },
  {
    name: "Fabrício Nunes",
    title: "Loja de Informática",
    date: "2 meses atrás",
    feedback: "A pasta de hardware com os 'Fronteiros' é o segredo. Placas de vídeo e processadores com preço do Paraguai, entregues no Brasil. Nossa montagem de PCs ficou muito mais competitiva.",
    profileImage: "https://i.imgur.com/sAVs2d1.jpeg",
  },
  {
    name: "Fernanda Souza",
    title: "Compradora Verificada",
    date: "10 dias atrás",
    feedback: "FINALMENTE achei os hidratantes árabes que todo mundo fala! E o preço? Sem condições! Peguei logo 3. Minhas amigas ficaram loucas querendo saber onde comprei rsrs",
    image: "https://i.imgur.com/v1nGjxE.jpeg",
    profileImage: "https://i.imgur.com/qEsP8WX.jpeg",
  },
  {
    name: "Gustavo Rocha",
    title: "Revendedor Verificado",
    date: "1 dia atrás",
    feedback: "Esses smartwatch é venda certa, rapaziada. Pego a 7 dolar na fronteira pelo app, vendo a 150 facil. O lucro é absurdo, quem não entrou ta dormindo no ponto.",
    image: "https://i.imgur.com/CGqnF7t.jpeg",
    profileImage: "https://i.imgur.com/E1gQv4D.jpeg",
  },
  {
    name: "André Medeiros",
    title: "Distribuidor",
    date: "1 mês atrás",
    feedback: "Otimizamos nossa logística em 70% com a Black Shoppe. Fechar pedidos de diferentes fornecedores em uma única plataforma é uma revolução.",
    profileImage: "https://i.imgur.com/gO1dY6g.jpeg",
     replies: [
        { author: "Ricardo Mendes", authorImage: "https://i.imgur.com/tZ2eK4x.jpeg", text: "Assino embaixo. A consolidação de fornecedores é o maior trunfo.", date: "3 semanas atrás" }
    ]
  },
   {
    name: "Clara Santos",
    title: "Compradora Verificada",
    date: "1 semana atrás",
    feedback: "Amei os conjuntinhos de crochê! Super na moda e o preço é ótimo. Já garanti o meu pro verão. Chegou antes do prazo!",
    image: "https://i.imgur.com/e4KyS16.jpeg",
    profileImage: "https://i.imgur.com/Fwujc1I.jpeg",
  },
   {
    name: "Vinicius Junior",
    title: "Comprador Verificado",
    date: "3 dias atrás",
    feedback: "crl essa bermuda cargo eh mt chave, pano bom e veste bem. por 30 conto ta dado. vou pegar mais umas 2 de outra cor",
    image: "https://i.imgur.com/cvnLVKQ.jpeg",
    profileImage: "https://i.imgur.com/JgW3zJ1.jpeg",
  },
  {
    name: "Aline Fitness",
    title: "Influencer Fitness",
    date: "2 semanas atrás",
    feedback: "As garrafas térmicas são perfeitas pra academia, e com esse preço, comprei uma de cada cor pra combinar com meus looks. A qualidade é excelente!",
    profileImage: "https://i.imgur.com/zvyYxP7.jpeg",
     replies: [
        { author: "Mariana Silva", authorImage: "https://i.imgur.com/XXEBs3d.jpeg", text: "Amiga, passa o contato do fornecedor!!", date: "1 semana atrás" },
        { author: "Aline Fitness", authorImage: "https://i.imgur.com/sAVs2d1.jpeg", text: "@Mariana Silva Oii, é o 'ImportaTudo', tá na pasta de 'Outros'. Ele sempre tem novidade!", date: "1 semana atrás"}
    ]
  },
  {
    name: "Eduardo Rocha",
    title: "Loja de Eletrônicos",
    date: "1 mês atrás",
    feedback: "A notificação de 'queima de estoque' de um dos fornecedores de Foz do Iguaçu nos permitiu adquirir um lote de iPads com 60% de desconto. O lucro foi recorde no último trimestre.",
    image: "https://i.imgur.com/Cbm9N14.jpeg",
    profileImage: "https://i.imgur.com/KUVbQ3I.jpeg",
  },
  {
    name: "Ricardo Souza",
    title: "Comprador Verificado",
    date: "4 dias atrás",
    feedback: "esses moletom gola careca sao top pra usar no dia a dia, peguei um basico e to usando sempre, confortavel dms",
    image: "https://i.imgur.com/hKkSjiX.jpeg",
    profileImage: "https://i.imgur.com/hO3iX5v.jpeg",
  },
  {
    name: "Paulo Moreira",
    title: "Gerente de Compras",
    date: "3 semanas atrás",
    feedback: "A pasta 'Linha Premium' é nossa fonte principal. Camisas com qualidade de shopping, mas com preço de atacado que nos permite uma margem excelente. Nossos clientes estão satisfeitos.",
    image: "https://i.imgur.com/g7SLNQH.jpeg",
    profileImage: "https://i.imgur.com/dE8w4z9.jpeg",
  },
  {
    name: "Gabriel Jesus",
    title: "Comprador Verificado",
    date: "1 semana atrás",
    feedback: "os kit de cueca da ck por esse preço eh piada ne? kkkkkk peguei logo 3 kit, renovar o estoque.",
    image: "https://i.imgur.com/1IlJqxr.jpeg",
    profileImage: "https://i.imgur.com/N5h2Z6J.jpeg",
     replies: [
        { author: "Bruno Andrade", authorImage: "https://i.imgur.com/L1n5kS2.jpeg", text: "kkkkk tb peguei, qualidade eh boa msm", date: "5 dias atrás" }
    ]
  },
  {
    name: "Miguel Santos",
    title: "Dono de Boutique",
    date: "1 mês atrás",
    feedback: "A seção de suéters e camisas egípcias elevou o nível da nossa coleção de inverno. Peças de alta qualidade que seriam impossíveis de encontrar por esse preço em outros lugares. A Black Shoppe é essencial para nós.",
    image: "https://i.imgur.com/tbaVrql.jpeg",
    profileImage: "https://i.imgur.com/V8wV2S1.jpeg",
  },
  {
    name: "Leonardo Souza",
    title: "Pergunta da Comunidade",
    date: "8 dias atrás",
    feedback: "Pessoal, alguém me indica um fornecedor bom de camisas egípcias? Quero umas com qualidade premium mesmo.",
    profileImage: "https://i.imgur.com/G2aE3E8.jpeg",
    replies: [
      {
        author: "Miguel Santos",
        authorImage: "https://i.imgur.com/R3aG0gW.jpeg",
        text: "Fala, Léo! Pode procurar pelo 'Rei do Algodão' na pasta de Roupas. A qualidade é absurda, fio 40.1. Meus clientes adoram.",
        date: "8 dias atrás"
      },
      {
        author: "Leonardo Souza",
        authorImage: "https://i.imgur.com/L1n5kS2.jpeg",
        text: "Valeu, Miguel! Vou dar uma olhada agora mesmo. Tmj!",
        date: "7 dias atrás"
      }
    ]
  },
  {
    name: "Douglas Costa",
    title: "Comprador Verificado",
    date: "12 dias atrás",
    feedback: "O preço dos bonés premium é piada. Peguei 10 pra revender e já foram 8. A rapaziada pira na qualidade.",
    image: "https://i.imgur.com/l6FBiyi.jpeg",
    profileImage: "https://i.imgur.com/pL7kS7m.jpeg"
  },
  {
    name: "Larissa Manoela",
    title: "Revendedora",
    date: "1 mês atrás",
    feedback: "A pasta de 'outros streetwear' é meu lugar secreto kkkk. Sempre acho umas peças diferentes que ninguém tem na cidade. Vendo tudo super rápido.",
    image: "https://i.imgur.com/QtWTfMn.jpeg",
    profileImage: "https://i.imgur.com/kS0iIjv.jpeg"
  },
  {
    name: "Felipe Melo",
    title: "Comprador Verificado",
    date: "15 dias atrás",
    feedback: "Peguei um moletom canguru e to usando mais que tudo. Confortável e estiloso, preço justo.",
    image: "https://i.imgur.com/U5t5Kv2.jpeg",
    profileImage: "https://i.imgur.com/qL3b0Lg.jpeg"
  },
  {
    name: "Pedro Rocha",
    title: "Vendedor Ambulante",
    date: "20 dias atrás",
    feedback: "Compro as garrafas e revendo no sinal. O lucro é de mais de 200%. A Black Shoppe me deu uma fonte de renda que eu não tinha antes.",
    profileImage: "https://i.imgur.com/jX8qQ2e.jpeg"
  },
  {
    name: "Camila Cabello",
    title: "Pergunta da Comunidade",
    date: "11 dias atrás",
    feedback: "Gente, qual o melhor grupo de networking pra quem vende moda feminina? Queria umas dicas de marketing.",
    profileImage: "https://i.imgur.com/CNsNBDl.jpeg",
    replies: [
      {
        author: "Vitória Modas",
        authorImage: "https://i.imgur.com/D4Z2z2z.jpeg",
        text: "O 'MODA NETWORKING' é ótimo, mas o de 'MARKETING DIGITAL' é onde o ouro tá. Aprendi a fazer uns anúncios no Insta que triplicaram minhas vendas.",
        date: "10 dias atrás"
      }
    ]
  },
  {
    name: "Jorge Jesus",
    title: "Treinador de Futebol",
    date: "1 dia atrás",
    feedback: "Comprei as camisas de time para a equipe e a qualidade é fantástica. Preço de atacado que coube no orçamento. Recomendo!",
    image: "https://i.imgur.com/z9tgT5V.jpeg",
    profileImage: "https://i.imgur.com/T5pTzIm.jpeg"
  },
  {
    name: "MC Daniel",
    title: "Comprador Verificado",
    date: "9 dias atrás",
    feedback: "slk esses tênis são mt brabo, peguei um pra mim e um pra minha mina, ela amou. preço de banana, qualidade de shopping",
    image: "https://i.imgur.com/KxQHMfa.jpeg",
    profileImage: "https://i.imgur.com/1cXJ8oH.jpeg"
  },
  {
    name: "Neymar Jr",
    title: "Comprador Verificado",
    date: "14 dias atrás",
    feedback: "to usando mais esse relógio do que o meu rolex kkkk. bagulho é bonito e barato. peguei logo 3",
    image: "https://i.imgur.com/pPJrrgV.jpeg",
    profileImage: "https://i.imgur.com/KUVbQ3I.jpeg"
  },
  {
    name: "Anitta",
    title: "Compradora Verificada",
    date: "18 dias atrás",
    feedback: "Esses conjuntos de crochê são perfeitos pro verão europeu! Já garanti os meus. Precinho que só a Black Shoppe tem.",
    image: "https://i.imgur.com/BzFNqEe.jpeg",
    profileImage: "https://i.imgur.com/I9Z4b0E.jpeg"
  },
  {
    name: "LeBron James",
    title: "Jogador de Basquete",
    date: "19 dias atrás",
    feedback: "As bermudas dryfit são ideais para o treino. Leves, confortáveis e o preço de atacado é imbatível. Comprei pra todo o time.",
    image: "https://i.imgur.com/qUq3ezD.jpeg",
    profileImage: "https://i.imgur.com/5gxVOgZ.jpeg"
  },
  {
    name: "Rihanna",
    title: "Dona da Fenty Beauty",
    date: "25 dias atrás",
    feedback: "A seção de cosméticos é incrível. Encontrei produtos da Principia e Creamy com preços que nem eu consigo como fornecedora. A concorrência que se cuide.",
    image: "https://i.imgur.com/kVgjljr.png",
    profileImage: "https://i.imgur.com/7ZcZkL2.jpeg"
  },
  {
    name: "Cristiano Ronaldo",
    title: "Comprador Verificado",
    date: "22 dias atrás",
    feedback: "Os perfumes árabes são uma descoberta. Fixação excelente e fragrâncias únicas. Preço inacreditável.",
    image: "https://i.imgur.com/LXghuLD.jpeg",
    profileImage: "https://i.imgur.com/T0bS8sB.jpeg",
    replies: [
      {
        author: "Lipe",
        authorImage: "https://i.imgur.com/JgW3zJ1.jpeg",
        text: "Qual vc pegou, CR7? To querendo um que seja marcante.",
        date: "21 dias atrás"
      },
      {
        author: "Cristiano Ronaldo",
        authorImage: "https://i.imgur.com/bO3f5gG.jpeg",
        text: "@Lipe Peguei o 'Asad' da Lattafa. Pode ir sem medo, o cheiro é de patrão.",
        date: "20 dias atrás"
      }
    ]
  }
];
