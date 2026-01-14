"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Store, UserCheck, Lock, Star, Sparkles, Award, MessageCircle, Users, Bell } from 'lucide-react';
import { AnimatedParticles, FloatingIcon, ScanLine } from '@/components/effects/VisualEffects';

const trustPoints = [
    { icon: UserCheck, title: "Fornecedores Testados", desc: "Cada fornecedor foi pessoalmente verificado" },
    { icon: Store, title: "Lojas Reais", desc: "Com endereço em centros de comercialização" },
    { icon: CheckCircle, title: "Contatos Validados", desc: "WhatsApp e telefone funcionando" },
    { icon: Lock, title: "Acesso Seguro", desc: "Suas informações protegidas" },
];

const whatsappGroups = [
    {
        name: "PERFUMES NETWORKING",
        image: "/group-perfumes.jpg",
        members: "2.5k+",
        description: "Comunidade ativa de perfumistas"
    },
    {
        name: "POD NETWORKING",
        image: "/group-pods.jpg",
        members: "1.8k+",
        description: "Vendedores de PODs e vapes"
    },
    {
        name: "MODA NETWORKING",
        image: "/group-moda.jpg",
        members: "3.2k+",
        description: "Lojistas de moda e streetwear"
    },
    {
        name: "CELULARES NETWORKING",
        image: "/group-celulares.jpg",
        members: "4.1k+",
        description: "Comunidade de eletrônicos"
    },
];

const Confianca = () => {
    return (
        <section id="confianca" className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent" />

            <AnimatedParticles count={15} />
            <ScanLine />

            {/* Floating Icons */}
            <FloatingIcon Icon={Shield} className="top-[10%] left-[5%] w-8 h-8" delay={0} />
            <FloatingIcon Icon={Award} className="top-[20%] right-[8%] w-10 h-10" delay={1} />
            <FloatingIcon Icon={CheckCircle} className="bottom-[20%] left-[8%] w-6 h-6" delay={2} />
            <FloatingIcon Icon={Star} className="bottom-[30%] right-[5%] w-7 h-7" delay={0.5} />
            <FloatingIcon Icon={MessageCircle} className="top-[50%] left-[3%] w-6 h-6" delay={1.5} />

            {/* Glows */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold mb-6"
                        animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 20px rgba(34,197,94,0.5)', '0 0 0px rgba(34,197,94,0)'] }}
                        transition={{ duration: 2, repeat: 9999 }}
                    >
                        <Shield className="w-4 h-4" />
                        CONFIANÇA GARANTIDA
                    </motion.div>

                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
                        <motion.span
                            className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                            animate={{ textShadow: ['0 0 20px rgba(34,197,94,0.5)', '0 0 40px rgba(34,197,94,0.8)', '0 0 20px rgba(34,197,94,0.5)'] }}
                            transition={{ duration: 2, repeat: 9999 }}
                        >100%</motion.span>
                        <span className="text-white"> Confiável</span>
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4">
                        Todos os fornecedores e contatos são <span className="text-green-400 font-semibold">testados manualmente</span>.
                        Possuem <span className="text-white font-semibold">lojas reais</span> em centros de comercialização.
                    </p>

                    {/* NEW - Groups explanation */}
                    <motion.div
                        className="max-w-4xl mx-auto mt-8 p-6 glass-card border-green-500/40 relative overflow-hidden"
                        style={{ boxShadow: '0 0 20px rgba(34,197,94,0.15)' }}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: 9999, repeatDelay: 2 }}
                        />

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/50 flex items-center justify-center"
                                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: 9999 }}
                            >
                                <MessageCircle className="w-7 h-7 text-green-400" />
                            </motion.div>
                            <div className="text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    Grupos Exclusivos Black Shoppe
                                    <motion.span
                                        className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: 9999 }}
                                    >
                                        <Bell className="w-3 h-3 mr-1" />
                                        ATIVO
                                    </motion.span>
                                </h3>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    <span className="text-green-400 font-semibold">Cada nicho tem seu próprio grupo</span> da marca BLACK SHOPPE
                                    onde a comunidade fica <span className="text-white font-semibold">enviando atualizações em tempo real</span>,
                                    dizendo quando o pedido <span className="text-green-400 font-semibold">chegou</span>,
                                    se o fornecedor <span className="text-white font-semibold">é bom</span>, e tirando dúvidas.
                                    <br /><br />
                                    <span className="text-primary font-bold">Se você está com algum pé atrás</span>,
                                    veja os prints reais dos grupos abaixo! 👇
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* WhatsApp Groups Cards - FUTURISTIC */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-16">
                    {whatsappGroups.map((group, index) => (
                        <motion.div
                            key={group.name}
                            className="relative group"
                            initial={{ opacity: 0, y: 30, rotateX: -20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring" }}
                        >
                            {/* Card */}
                            <motion.div
                                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900/90 to-black border border-green-500/40 backdrop-blur-sm"
                                style={{ boxShadow: '0 0 15px rgba(34,197,94,0.2)' }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    rotateY: 5,
                                    rotateX: 5,
                                    boxShadow: '0 0 30px rgba(34,197,94,0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            >


                                {/* WhatsApp Icon Badge */}
                                <div
                                    className="absolute top-3 right-3 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                                    style={{ boxShadow: '0 0 15px #22c55e' }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>

                                {/* Image Container */}
                                <div className="relative aspect-[9/16] overflow-hidden">
                                    <Image
                                        src={group.image}
                                        alt={group.name}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    {/* Scan line effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-20"
                                        animate={{ y: ['-100%', '500%'] }}
                                        transition={{ duration: 3, repeat: 9999, ease: 'linear' }}
                                    />
                                </div>

                                {/* Bottom Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-green-500"
                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1, repeat: 9999 }}
                                        />
                                        <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Grupo Ativo</span>
                                    </div>
                                    <h4 className="text-white font-bold text-xs md:text-sm truncate">{group.name}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Users className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-muted-foreground text-xs">{group.members} membros</span>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                />
                            </motion.div>

                            {/* Floating particles around card */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 rounded-full bg-green-500"
                                    style={{
                                        top: `${20 + i * 30}%`,
                                        left: i % 2 === 0 ? '-5px' : 'auto',
                                        right: i % 2 === 1 ? '-5px' : 'auto',
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.3, 1, 0.3],
                                        scale: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2 + i * 0.5,
                                        repeat: 9999,
                                        delay: index * 0.2 + i * 0.3,
                                    }}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Trust Points Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            className="glass-card p-4 text-center group relative overflow-hidden flex flex-col items-center justify-center gap-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            style={{
                                background: 'linear-gradient(145deg, rgba(34,197,94,0.05) 0%, rgba(0,0,0,0.4) 100%)',
                                borderColor: 'rgba(34,197,94,0.15)'
                            }}
                            animate={{ borderColor: ['rgba(34,197,94,0.15)', 'rgba(34,197,94,0.3)', 'rgba(34,197,94,0.15)'] }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mb-1 group-hover:bg-green-500/30 transition-colors"
                                animate={{ rotate: [0, 5, -5, 0], y: [0, -3, 0] }}
                                transition={{ duration: 4, repeat: 9999, delay: index * 0.2 }}
                            >
                                <point.icon className="w-6 h-6 text-green-400" />
                            </motion.div>

                            <h3 className="font-bold text-white text-sm md:text-base leading-tight">{point.title}</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed max-w-[90%]">{point.desc}</p>

                            {/* Check badge */}
                            <motion.div
                                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center z-10"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: 9999, delay: index * 0.3 }}
                            >
                                <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>

                            {/* Glow */}
                            <motion.div
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom badge */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-4 glass-card"
                        animate={{ borderColor: ['rgba(34,197,94,0.2)', 'rgba(34,197,94,0.5)', 'rgba(34,197,94,0.2)'] }}
                        transition={{ duration: 3, repeat: 9999 }}
                    >
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 5, repeat: 9999, ease: "linear" }}>
                            <Shield className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <div className="text-left">
                            <h4 className="font-bold text-white">Garantia de Qualidade</h4>
                            <p className="text-muted-foreground text-sm">Todos os contatos funcionam ou você recebe suporte imediato</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Confianca;
