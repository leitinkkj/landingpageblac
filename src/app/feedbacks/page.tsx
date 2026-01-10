
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquarePlus, CornerUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { testimonials } from "@/lib/testimonials";
import { useState } from "react";
import { cn } from "@/lib/utils";


export default function FeedbacksPage() {
  const { toast } = useToast();
  const [visibleCount, setVisibleCount] = useState(9);

  const handleReplyClick = () => {
      toast({
          title: "Acesso Exclusivo",
          description: "Você precisa adquirir o acesso vitalício para responder um feedback.",
          variant: "destructive"
      })
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 20);
  }

  const highlightedTestimonials = ["Sofia G.", "Roberto Siqueira"];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" passHref>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="font-headline text-5xl font-black text-white uppercase">
            Feedbacks da <span className="text-primary">Comunidade</span>
          </h1>
          <p className="font-headline text-xl text-gray-400 mt-2 max-w-2xl mx-auto">
            A tropa não mente. Veja os feedbacks reais de quem tá fazendo dinheiro com a Black Shoppe.
          </p>
        </div>
        <div className="text-center mb-12">
            <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                    toast({
                        title: "Acesso Exclusivo",
                        description: "Você precisa adquirir o acesso vitalício para deixar um feedback.",
                        variant: "destructive"
                    })
                }}
            >
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                Deixe um Feedback
            </Button>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <div key={index} className="break-inside-avoid">
              <Card 
                 className={cn(
                  "bg-card/50 border-border/50 backdrop-blur-sm text-left flex flex-col justify-between group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-xl h-full",
                  highlightedTestimonials.includes(testimonial.name) && "border-primary/30 shadow-lg shadow-primary/10 ring-2 ring-primary/50"
                )}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <Avatar className="w-12 h-12 mr-4 border-2 border-primary/50">
                      <AvatarImage src={testimonial.profileImage} alt={`Foto de ${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                       <div className="flex items-center justify-between">
                         <h3 className="font-headline text-lg font-bold text-white">{testimonial.name}</h3>
                         <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-primary">
                         <CheckCircle2 className="h-4 w-4" />
                         <span>{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic flex-grow mb-4">{testimonial.feedback}</p>
                  
                  {testimonial.image && (
                    <div className="relative aspect-video w-full rounded-md overflow-hidden mt-auto mb-4">
                      <Image 
                        src={testimonial.image}
                        alt="Imagem do feedback"
                        width={400}
                        height={225}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  )}

                   <div className="mt-auto pt-4 border-t border-border/50">
                     <div className="flex items-center gap-4">
                         <button onClick={handleReplyClick} className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors">
                            <CornerUpRight className="h-3 w-3" />
                            Responder
                        </button>
                    </div>

                    {testimonial.replies && testimonial.replies.length > 0 && (
                        <div className="mt-4 space-y-4">
                            {testimonial.replies.map((reply, replyIndex) => (
                                <div key={replyIndex} className="flex items-start gap-3">
                                    <Avatar className="w-8 h-8 border border-primary/30">
                                       <AvatarImage src={reply.authorImage} alt={`Foto de ${reply.author}`} />
                                       <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 bg-black/20 p-3 rounded-md">
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="font-bold text-sm text-primary">{reply.author}</p>
                                            <p className="text-xs text-gray-500">{reply.date}</p>
                                        </div>
                                        <p className="text-sm text-gray-400">{reply.text}</p>
                                        <button onClick={handleReplyClick} className="mt-1 flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors">
                                           <CornerUpRight className="h-3 w-3" />
                                            Responder
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
         <div className="text-center mt-16 space-y-4">
            {visibleCount < testimonials.length && (
                <Button size="lg" onClick={handleShowMore}>
                    Mostrar mais...
                </Button>
            )}
            <Link href="/" passHref>
              <Button size="lg" variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Página de Vendas
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};
