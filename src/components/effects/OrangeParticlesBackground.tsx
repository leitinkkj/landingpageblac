"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Clean Orange Particles Background - No 3D Icons
const OrangeParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        import('three').then((THREE) => {
            // Setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 50;

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            // === ORANGE NEON PARTICLES ===
            const particleCount = 600;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 150;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 20;
                sizes[i] = Math.random() * 0.3 + 0.1;
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

            // Second layer - smaller sparkles
            const sparkleCount = 400;
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

            // Third layer - tiny dust
            const dustCount = 300;
            const dustGeometry = new THREE.BufferGeometry();
            const dustPositions = new Float32Array(dustCount * 3);

            for (let i = 0; i < dustCount; i++) {
                dustPositions[i * 3] = (Math.random() - 0.5) * 100;
                dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
                dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 5;
            }

            dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
            const dustMaterial = new THREE.PointsMaterial({
                color: 0xffa500,
                size: 0.08,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending,
            });
            const dust = new THREE.Points(dustGeometry, dustMaterial);
            scene.add(dust);

            // Mouse interaction
            const handleMouseMove = (event: MouseEvent) => {
                mouseRef.current = {
                    x: (event.clientX / window.innerWidth) * 2 - 1,
                    y: -(event.clientY / window.innerHeight) * 2 + 1,
                };
            };
            window.addEventListener('mousemove', handleMouseMove);

            // Resize
            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', handleResize);

            // Animation
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate particle systems
                particles.rotation.y += 0.0002;
                particles.rotation.x += 0.0001;

                sparkles.rotation.y -= 0.00015;
                sparkles.rotation.z += 0.0001;

                dust.rotation.y += 0.0003;
                dust.rotation.x -= 0.00005;

                // Camera parallax
                camera.position.x += (mouseRef.current.x * 8 - camera.position.x) * 0.02;
                camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.02;
                camera.lookAt(0, 0, 0);

                renderer.render(scene, camera);
            };

            setIsLoaded(true);
            animate();

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleResize);
                renderer.dispose();
            };
        });
    }, []);

    return (
        <>
            {/* Orange gradient background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.3)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.2)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(20,100%,50%,0.15)_0%,_transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(26,100%,50%,0.08)_0%,_transparent_50%)]" />
            </div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[5] pointer-events-none"
                style={{ background: 'transparent' }}
            />

            {!isLoaded && (
                <motion.div
                    className="fixed inset-0 z-[6] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                />
            )}
        </>
    );
};

export default OrangeParticlesBackground;
