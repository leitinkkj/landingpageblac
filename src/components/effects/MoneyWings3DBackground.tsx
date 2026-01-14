"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Money Wings Emoji 3D Background
const MoneyWings3DBackground = () => {
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

            // Load the money wings image as texture
            const textureLoader = new THREE.TextureLoader();
            const moneyTexture = textureLoader.load('/money-wings.png');

            // Floating sprites array
            const floatingSprites: {
                sprite: THREE.Sprite;
                basePos: { x: number; y: number; z: number };
                rotSpeed: number;
                floatSpeed: number;
                floatAmplitude: number;
                floatOffset: number;
                scaleBase: number;
                scalePulse: number;
            }[] = [];

            // Create 30 money wings sprites spread across the screen
            const numSprites = 30;

            for (let i = 0; i < numSprites; i++) {
                const material = new THREE.SpriteMaterial({
                    map: moneyTexture,
                    transparent: true,
                    opacity: 0.85,
                    blending: THREE.NormalBlending,
                });

                const sprite = new THREE.Sprite(material);

                // Random size variations
                const baseScale = 3 + Math.random() * 4;
                sprite.scale.set(baseScale * 1.5, baseScale, 1); // Wider due to wings

                // Spread across entire screen
                const x = (Math.random() - 0.5) * 120;
                const y = (Math.random() - 0.5) * 80;
                const z = (Math.random() - 0.5) * 40 - 10;

                sprite.position.set(x, y, z);
                scene.add(sprite);

                floatingSprites.push({
                    sprite,
                    basePos: { x, y, z },
                    rotSpeed: (Math.random() - 0.5) * 0.02,
                    floatSpeed: 0.3 + Math.random() * 0.5,
                    floatAmplitude: 3 + Math.random() * 5,
                    floatOffset: Math.random() * Math.PI * 2,
                    scaleBase: baseScale,
                    scalePulse: Math.random() * 0.3,
                });
            }

            // Orange ambient lighting
            const ambientLight = new THREE.AmbientLight(0xff6b00, 0.5);
            scene.add(ambientLight);

            // Orange point lights
            const pointLight1 = new THREE.PointLight(0xff6b00, 2, 150);
            pointLight1.position.set(30, 25, 30);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff5500, 1.5, 120);
            pointLight2.position.set(-30, -20, 25);
            scene.add(pointLight2);

            // ORANGE NEON PARTICLES
            const particleCount = 350;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 140;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 20;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xff6b00,
                size: 0.25,
                transparent: true,
                opacity: 0.7,
                blending: THREE.AdditiveBlending,
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Smaller sparkle particles
            const sparkleCount = 200;
            const sparkleGeometry = new THREE.BufferGeometry();
            const sparklePositions = new Float32Array(sparkleCount * 3);

            for (let i = 0; i < sparkleCount; i++) {
                sparklePositions[i * 3] = (Math.random() - 0.5) * 120;
                sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
                sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
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
            let time = 0;
            const animate = () => {
                requestAnimationFrame(animate);
                time += 0.008;

                // Animate each sprite with free floating movement
                floatingSprites.forEach((obj) => {
                    // Free floating movement in all directions
                    obj.sprite.position.x = obj.basePos.x + Math.sin(time * obj.floatSpeed + obj.floatOffset) * obj.floatAmplitude;
                    obj.sprite.position.y = obj.basePos.y + Math.cos(time * obj.floatSpeed * 0.8 + obj.floatOffset) * obj.floatAmplitude * 0.8;
                    obj.sprite.position.z = obj.basePos.z + Math.sin(time * obj.floatSpeed * 0.5 + obj.floatOffset) * (obj.floatAmplitude * 0.3);

                    // Subtle rotation
                    obj.sprite.material.rotation += obj.rotSpeed;

                    // Subtle scale pulsing
                    const scalePulse = 1 + Math.sin(time * 2 + obj.floatOffset) * obj.scalePulse;
                    obj.sprite.scale.set(obj.scaleBase * 1.5 * scalePulse, obj.scaleBase * scalePulse, 1);
                });

                // Camera parallax with mouse
                camera.position.x += (mouseRef.current.x * 8 - camera.position.x) * 0.02;
                camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.02;
                camera.lookAt(0, 0, 0);

                // Animate particles
                particles.rotation.y += 0.0002;
                particles.rotation.x += 0.0001;
                sparkles.rotation.y -= 0.00015;

                renderer.render(scene, camera);
            };

            setIsLoaded(true);
            animate();

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleResize);
                renderer.dispose();
            };
        }).catch(err => {
            console.error('Three.js failed to load:', err);
        });
    }, []);

    return (
        <>
            {/* Orange gradient background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.25)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.18)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(20,100%,50%,0.12)_0%,_transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(30,100%,50%,0.1)_0%,_transparent_40%)]" />
            </div>

            {/* Three.js Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[5] pointer-events-none"
                style={{ background: 'transparent' }}
            />

            {/* Loading */}
            {!isLoaded && (
                <motion.div
                    className="fixed inset-0 z-[6] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                >
                    <motion.div
                        className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.6, repeat: 9999, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default MoneyWings3DBackground;
