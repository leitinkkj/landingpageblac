"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MessageCircle, ThumbsUp, Sparkles, CheckCircle, X, Send, Clock, Heart, Reply, ChevronDown } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

// Fotos de perfil placeholder (cores diferentes para cada usuário)
const getAvatarUrl = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ff6b00,ff8c00,ff5500`;

const testimonials = [
  {
    id: 1,
    name: "Lucas Mendes",
    avatar: getAvatarUrl("lucas"),
    role: "Lojista de Eletrônicos",
    text: "A IA Mineradora mudou meu negócio. Encontrei fornecedores que vendem 40% mais barato que eu pagava antes!",
    stars: 5,
    likes: 47,
    time: "há 2 dias",
  },
  {
    id: 2,
    name: "Camila Rodrigues",
    avatar: getAvatarUrl("camila"),
    role: "Revendedora de Perfumes",
    text: "O marketplace em tempo real é incrível. Pego ofertas antes de qualquer concorrente.",
    stars: 5,
    likes: 32,
    time: "há 3 dias",
  },
  {
    id: 3,
    name: "Pedro Henrique",
    avatar: getAvatarUrl("pedro"),
    role: "Atacadista de Moda",
    text: "Virei fornecedor em 3 meses usando as Aulas Black. Hoje faturo 10x mais!",
    stars: 5,
    likes: 89,
    time: "há 1 semana",
  },
  {
    id: 4,
    name: "Juliana Ferreira",
    avatar: getAvatarUrl("juliana"),
    role: "Dropshipper",
    text: "Os fronteireiros são confiáveis demais. Nunca tive problema com nenhuma entrega.",
    stars: 5,
    likes: 24,
    time: "há 4 dias",
  },
  {
    id: 5,
    name: "Roberto Santos",
    avatar: getAvatarUrl("roberto"),
    role: "Dono de Loja Física",
    text: "Conheci fornecedores nos grupos que hoje são meus parceiros de negócio. Networking de verdade!",
    stars: 5,
    likes: 56,
    time: "há 5 dias",
  },
  {
    id: 6,
    name: "Fernanda Lima",
    avatar: getAvatarUrl("fernanda"),
    role: "Empreendedora Digital",
    text: "A IA de Negócios me dá estratégias todo dia. É como ter um mentor 24 horas!",
    stars: 5,
    likes: 41,
    time: "há 1 semana",
  },
];

// Comentários expandidos para o modal
const allComments = [
  // Elogios
  {
    id: 1,
    name: "Marcos Oliveira",
    avatar: getAvatarUrl("marcos"),
    role: "Lojista de PODs",
    text: "Melhor investimento que fiz esse ano! A lista de fornecedores é absurda de boa.",
    stars: 5,
    likes: 123,
    time: "há 1 dia",
    replies: [
      {
        id: 101,
        name: "Black Shoppe",
        avatar: "/logo.png",
        isAdmin: true,
        text: "Obrigado pelo feedback, Marcos! Estamos sempre buscando os melhores fornecedores. 🔥",
        time: "há 1 dia",
        likes: 45,
      }
    ]
  },
  {
    id: 2,
    name: "Ana Paula",
    avatar: getAvatarUrl("ana"),
    role: "Revendedora",
    text: "Gente, vocês viram os fornecedores novos de relógio? Preço insano!",
    stars: 5,
    likes: 67,
    time: "há 2 dias",
    replies: [
      {
        id: 102,
        name: "Carlos Eduardo",
        avatar: getAvatarUrl("carlos"),
        isAdmin: false,
        text: "Vi sim! Já fiz meu primeiro pedido, chegou certinho.",
        time: "há 2 dias",
        likes: 12,
      },
      {
        id: 103,
        name: "Beatriz Costa",
        avatar: getAvatarUrl("beatriz"),
        isAdmin: false,
        text: "Qual fornecedor? Me indica por favor!",
        time: "há 1 dia",
        likes: 3,
      }
    ]
  },
  // Comentário mediano
  {
    id: 3,
    name: "Ricardo Alves",
    avatar: getAvatarUrl("ricardo"),
    role: "Iniciante",
    text: "Estou começando agora, ainda aprendendo a usar tudo. Parece bom, mas preciso de mais tempo pra avaliar.",
    stars: 4,
    likes: 18,
    time: "há 3 dias",
    replies: [
      {
        id: 104,
        name: "Black Shoppe",
        avatar: "/logo.png",
        isAdmin: true,
        text: "Fica tranquilo Ricardo! Qualquer dúvida chama no suporte que ajudamos. Estamos aqui pra isso! 💪",
        time: "há 3 dias",
        likes: 28,
      }
    ]
  },
  {
    id: 4,
    name: "Thiago Martins",
    avatar: getAvatarUrl("thiago"),
    role: "Atacadista",
    text: "Já fechei 5 parcerias pelos grupos de networking. O valor do painel se paga em uma semana.",
    stars: 5,
    likes: 94,
    time: "há 4 dias",
    replies: []
  },
  {
    id: 5,
    name: "Larissa Souza",
    avatar: getAvatarUrl("larissa"),
    role: "Lojista de Moda",
    text: "A IA Mineradora achou um fornecedor de jaquetas que ninguém conhecia. Tô lucrando muito!",
    stars: 5,
    likes: 76,
    time: "há 5 dias",
    replies: [
      {
        id: 105,
        name: "Felipe Ramos",
        avatar: getAvatarUrl("felipe"),
        isAdmin: false,
        text: "Qual nicho você colocou na IA? To procurando jaquetas também",
        time: "há 4 dias",
        likes: 5,
      },
      {
        id: 106,
        name: "Larissa Souza",
        avatar: getAvatarUrl("larissa"),
        isAdmin: false,
        text: "Coloquei 'jaquetas streetwear atacado' e ela achou uns 8 fornecedores bons!",
        time: "há 4 dias",
        likes: 21,
      }
    ]
  },
  // Pergunta
  {
    id: 6,
    name: "Gabriel Santos",
    avatar: getAvatarUrl("gabriel"),
    role: "Novo Membro",
    text: "Pessoal, os fornecedores de perfume árabe são confiáveis mesmo? Quero fazer meu primeiro pedido.",
    stars: 4,
    likes: 12,
    time: "há 6 dias",
    replies: [
      {
        id: 107,
        name: "Mariana Costa",
        avatar: getAvatarUrl("mariana"),
        isAdmin: false,
        text: "Super confiáveis! Já comprei 3 vezes com o mesmo fornecedor.",
        time: "há 5 dias",
        likes: 18,
      },
      {
        id: 108,
        name: "Black Shoppe",
        avatar: "/logo.png",
        isAdmin: true,
        text: "Gabriel, todos os fornecedores da lista são verificados pela nossa equipe. Pode comprar tranquilo! Qualquer problema nosso suporte resolve. 🛡️",
        time: "há 5 dias",
        likes: 34,
      }
    ]
  },
  {
    id: 7,
    name: "Patrícia Lima",
    avatar: getAvatarUrl("patricia"),
    role: "Empreendedora",
    text: "Achei um pouco confuso no começo, mas depois que peguei o jeito, não largo mais. Recomendo assistir as aulas!",
    stars: 4,
    likes: 29,
    time: "há 1 semana",
    replies: []
  },
  {
    id: 8,
    name: "Eduardo Ferreira",
    avatar: getAvatarUrl("eduardo"),
    role: "Importador",
    text: "Os fronteireiros economizaram uns R$3.000 pra mim em taxas. Melhor custo-benefício do mercado.",
    stars: 5,
    likes: 88,
    time: "há 1 semana",
    replies: [
      {
        id: 109,
        name: "Black Shoppe",
        avatar: "/logo.png",
        isAdmin: true,
        text: "Isso aí Eduardo! Os fronteireiros são parceiros selecionados a dedo. 🚚✨",
        time: "há 1 semana",
        likes: 22,
      }
    ]
  },
  {
    id: 9,
    name: "Amanda Reis",
    avatar: getAvatarUrl("amanda"),
    role: "Lojista de Calçados",
    text: "Primeira compra deu tudo certo! Chegou rápido e qualidade top. Já vou fazer a segunda.",
    stars: 5,
    likes: 45,
    time: "há 1 semana",
    replies: []
  },
  {
    id: 10,
    name: "Bruno Carvalho",
    avatar: getAvatarUrl("bruno"),
    role: "Atacadista de Bonés",
    text: "Tava com pé atrás no começo, mas depois que vi os grupos e os fornecedores, vi que é sério mesmo.",
    stars: 5,
    likes: 67,
    time: "há 2 semanas",
    replies: [
      {
        id: 110,
        name: "Lucas Mendes",
        avatar: getAvatarUrl("lucas"),
        isAdmin: false,
        text: "Normal ter desconfiança, mas depois que entra vê que é outro nível!",
        time: "há 2 semanas",
        likes: 15,
      }
    ]
  },
];

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAccessAlert, setShowAccessAlert] = useState(false);

  return (
    <section id="feedbacks" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />

      <AnimatedParticles count={15} />
      <ScanLine />

      {/* Floating Icons */}
      <FloatingIcon Icon={Star} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
      <FloatingIcon Icon={ThumbsUp} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
      <FloatingIcon Icon={MessageCircle} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
      <FloatingIcon Icon={Sparkles} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />

      {/* Glows */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: 9999 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-primary" />
            ))}
          </motion.div>

          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
            <span className="text-white">O Que Dizem </span>
            <motion.span
              className="text-gradient-animate"
              style={{ textShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
            >Nossos Membros</motion.span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Mais de <span className="text-primary font-semibold">3.000 lojistas</span> já transformaram seus negócios
          </p>

          {/* Stats */}
          <motion.div
            className="inline-flex items-center gap-6 glass-card px-6 py-3 border-primary/30"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <span className="text-3xl font-black text-primary">98%</span>
              <p className="text-muted-foreground text-xs">recomendam</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-black text-green-400">+3.000</span>
              <p className="text-muted-foreground text-xs">membros ativos</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-black text-yellow-400">4.9</span>
              <p className="text-muted-foreground text-xs">nota média</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-card p-5 relative overflow-hidden group border-white/10 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
            >
              {/* Header com foto */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full bg-gray-800"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-black flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <span className="text-primary text-xs">{testimonial.role}</span>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground text-xs">{testimonial.time}</span>
              </div>

              {/* Text - SEM ASPAS */}
              <p className="text-white/90 text-sm mb-4 leading-relaxed">{testimonial.text}</p>

              {/* Footer com likes */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Heart className="w-4 h-4" />
                  <span>{testimonial.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Reply className="w-4 h-4" />
                  Responder
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Ver Mais Avaliações
            <ChevronDown className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={() => setShowAccessAlert(true)}
            className="px-8 py-4 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-lg flex items-center gap-2 hover:border-primary/50 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            Deixar Avaliação
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de Comentários Expandidos */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Avaliações dos Membros</h3>
                  <p className="text-muted-foreground text-sm">{allComments.length} avaliações</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
                {allComments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    {/* Main Comment */}
                    <div className="glass-card p-4 border-white/10">
                      <div className="flex items-start gap-3">
                        <img
                          src={comment.avatar}
                          alt={comment.name}
                          loading="lazy"
                          className="w-10 h-10 rounded-full bg-gray-800"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-white text-sm">{comment.name}</h4>
                            <span className="text-primary text-xs">• {comment.role}</span>
                            <span className="text-muted-foreground text-xs ml-auto">{comment.time}</span>
                          </div>
                          <div className="flex gap-0.5 mb-2">
                            {Array.from({ length: comment.stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-white/90 text-sm">{comment.text}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs">
                              <Heart className="w-3.5 h-3.5" />
                              {comment.likes}
                            </button>
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs">
                              <Reply className="w-3.5 h-3.5" />
                              Responder
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-8 space-y-3">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className={`p-4 rounded-xl ${reply.isAdmin ? 'bg-primary/10 border border-primary/30' : 'bg-white/5 border border-white/5'}`}
                          >
                            <div className="flex items-start gap-3">
                              {reply.isAdmin ? (
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                  <Sparkles className="w-4 h-4 text-white" />
                                </div>
                              ) : (
                                <img
                                  src={reply.avatar}
                                  alt={reply.name}
                                  loading="lazy"
                                  className="w-8 h-8 rounded-full bg-gray-800"
                                />
                              )}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className={`font-bold text-sm ${reply.isAdmin ? 'text-primary' : 'text-white'}`}>
                                    {reply.name}
                                  </h4>
                                  {reply.isAdmin && (
                                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full font-bold">
                                      ADMIN
                                    </span>
                                  )}
                                  <span className="text-muted-foreground text-xs ml-auto">{reply.time}</span>
                                </div>
                                <p className="text-white/90 text-sm">{reply.text}</p>
                                <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs mt-2">
                                  <Heart className="w-3 h-3" />
                                  {reply.likes}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Alert de Acesso Necessário */}
      <AnimatePresence>
        {showAccessAlert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAccessAlert(false)}
          >
            <motion.div
              className="bg-gray-900 border border-primary/30 rounded-2xl p-8 max-w-md text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Área Exclusiva</h3>
              <p className="text-muted-foreground mb-6">
                Adquira o acesso para comentar sobre o painel e interagir com a comunidade!
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://www.ggcheckout.com/checkout/v4/rpU6SEztCV3PJcXZTcsm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'InitiateCheckout', {
                        content_name: 'Black Shoppe - Acesso Completo',
                        content_category: 'Produto Digital',
                        value: 47.00,
                        currency: 'BRL'
                      });
                    }
                  }}
                >
                  <motion.button
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quero Ter Acesso
                  </motion.button>
                </Link>
                <button
                  onClick={() => setShowAccessAlert(false)}
                  className="text-muted-foreground hover:text-white transition-colors text-sm"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Feedback;
