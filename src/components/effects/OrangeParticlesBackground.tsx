"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Clean Orange Particles Background - Optimized for Performance
const OrangeParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const rendererRef = useRef<any>(null);

    // Detectar se é dispositivo móvel para reduzir partículas
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isLowPowerDevice = typeof navigator !== 'undefined' &&
        (navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false);

    useEffect(() => {
        // Intersection Observer para carregar Three.js apenas quando visível
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        // Timeout de segurança - mostrar conteúdo mesmo se algo falhar
        const safetyTimeout = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => {
            observer.disconnect();
            clearTimeout(safetyTimeout);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Verificar se o usuário prefere movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsLoaded(true);
            return;
        }

        // Delay para não bloquear renderização inicial (LCP)
        const loadTimeout = setTimeout(() => {
            import('three').then((THREE) => {
                // Setup com otimizações
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.z = 50;

                const renderer = new THREE.WebGLRenderer({
                    canvas,
                    alpha: true,
                    antialias: false,
                    powerPreference: isLowPowerDevice ? 'low-power' : 'default',
                    failIfMajorPerformanceCaveat: true,
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
                renderer.setClearColor(0x000000, 0);
                rendererRef.current = renderer;

                // === PARTICLES - Quantidade baseada no dispositivo ===
                const baseCount = isMobile || isLowPowerDevice ? 100 : 200;

                // Main particles
                const particlesGeometry = new THREE.BufferGeometry();
                const positions = new Float32Array(baseCount * 3);

                for (let i = 0; i < baseCount; i++) {
                    positions[i * 3] = (Math.random() - 0.5) * 150;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 20;
                }

                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

                const particlesMaterial = new THREE.PointsMaterial({
                    color: 0xff6b00,
                    size: 0.3,
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending,
                });
                const particles = new THREE.Points(particlesGeometry, particlesMaterial);
                scene.add(particles);

                // Sparkles - quantidade menor
                const sparkleCount = isMobile ? 80 : 150;
                const sparkleGeometry = new THREE.BufferGeometry();
                const sparklePositions = new Float32Array(sparkleCount * 3);

                for (let i = 0; i < sparkleCount; i++) {
                    sparklePositions[i * 3] = (Math.random() - 0.5) * 120;
                    sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
                    sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;
                }

                sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));
                const sparkleMaterial = new THREE.PointsMaterial({
                    color: 0xff8c00,
                    size: 0.15,
                    transparent: true,
                    opacity: 0.5,
                    blending: THREE.AdditiveBlending,
                });
                const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
                scene.add(sparkles);

                // Mouse - passive para performance
                const handleMouseMove = (event: MouseEvent) => {
                    // Throttle mouse movement for performance
                    if (Math.random() > 0.3) return;
                    mouseRef.current = {
                        x: (event.clientX / window.innerWidth) * 2 - 1,
                        y: -(event.clientY / window.innerHeight) * 2 + 1,
                    };
                };
                window.addEventListener('mousemove', handleMouseMove, { passive: true });

                // Resize com throttle
                let resizeTimeout: ReturnType<typeof setTimeout>;
                const handleResize = () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        if (!rendererRef.current) return;
                        const width = window.innerWidth;
                        const height = window.innerHeight;
                        camera.aspect = width / height;
                        camera.updateProjectionMatrix();
                        rendererRef.current.setSize(width, height);
                    }, 250);
                };
                window.addEventListener('resize', handleResize, { passive: true });

                // Animation com requestAnimationFrame otimizado
                let animationId: number;
                const animate = () => {
                    animationId = requestAnimationFrame(animate);

                    // Rotações mais lentas = menos cálculos
                    particles.rotation.y += 0.0001;
                    particles.rotation.x += 0.00005;
                    sparkles.rotation.y -= 0.0001;

                    // Camera parallax com lerp suave
                    camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.01;
                    camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.01;
                    camera.lookAt(0, 0, 0);

                    renderer.render(scene, camera);
                };

                setIsLoaded(true);
                animate();

                // Cleanup function
                return () => {
                    cancelAnimationFrame(animationId);
                    clearTimeout(resizeTimeout);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('resize', handleResize);

                    // Dispose Three.js resources
                    particlesGeometry.dispose();
                    particlesMaterial.dispose();
                    sparkleGeometry.dispose();
                    sparkleMaterial.dispose();
                    renderer.dispose();
                    rendererRef.current = null;
                };
            }).catch(() => {
                // Fallback se Three.js falhar
                setIsLoaded(true);
            });
        }, 50);

        return () => {
            clearTimeout(loadTimeout);
        };
    }, [isVisible, isMobile, isLowPowerDevice]);

    return (
        <>
            {/* Orange gradient background - sempre renderizado (fallback estático) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.25)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.15)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(26,100%,50%,0.05)_0%,_transparent_50%)]" />
            </div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[5] pointer-events-none"
                style={{ background: 'transparent' }}
            />

            <AnimatePresence>
                {!isLoaded && showOverlay && (
                    <motion.div
                        className="fixed inset-0 z-[6] flex items-center justify-center bg-black pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        onAnimationComplete={() => setShowOverlay(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default OrangeParticlesBackground;

