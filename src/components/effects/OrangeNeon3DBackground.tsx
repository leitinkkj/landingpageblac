"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// 3D Background with emoji textures and orange neon particles
const OrangeNeon3DBackground = () => {
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

            // Create emoji texture using canvas
            const createEmojiTexture = (emoji: string, bgColor: string = '#ff6b00') => {
                const size = 256;
                const textureCanvas = document.createElement('canvas');
                textureCanvas.width = size;
                textureCanvas.height = size;
                const ctx = textureCanvas.getContext('2d')!;

                // Create gradient background
                const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
                gradient.addColorStop(0, bgColor);
                gradient.addColorStop(0.7, bgColor);
                gradient.addColorStop(1, 'rgba(0,0,0,0.3)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, size, size);

                // Add glow effect
                ctx.shadowColor = bgColor;
                ctx.shadowBlur = 30;

                // Draw emoji
                ctx.font = `${size * 0.6}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'white';
                ctx.fillText(emoji, size / 2, size / 2);

                const texture = new THREE.CanvasTexture(textureCanvas);
                texture.needsUpdate = true;
                return texture;
            };

            // All emojis with their colors
            const emojiConfigs = [
                { emoji: '💰', color: '#22c55e', name: 'money' },
                { emoji: '💎', color: '#22d3ee', name: 'diamond' },
                { emoji: '🛍️', color: '#ff6b00', name: 'shopping' },
                { emoji: '📦', color: '#ff6b00', name: 'package' },
                { emoji: '👑', color: '#eab308', name: 'crown' },
                { emoji: '🤖', color: '#a855f7', name: 'robot' },
                { emoji: '⭐', color: '#eab308', name: 'star' },
                { emoji: '🔥', color: '#ff6b00', name: 'fire' },
                { emoji: '📈', color: '#22c55e', name: 'chart' },
                { emoji: '🚀', color: '#ff6b00', name: 'rocket' },
                { emoji: '🏪', color: '#ff6b00', name: 'store' },
                { emoji: '💵', color: '#22c55e', name: 'dollar' },
            ];

            // Create textured sprite
            const createEmojiSprite = (config: typeof emojiConfigs[0], size: number) => {
                const texture = createEmojiTexture(config.emoji, config.color);
                const material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0.9,
                    blending: THREE.AdditiveBlending,
                });
                const sprite = new THREE.Sprite(material);
                sprite.scale.set(size, size, 1);
                return sprite;
            };

            // 3D Box with emoji texture on all sides
            const createEmojiCube = (config: typeof emojiConfigs[0], size: number) => {
                const texture = createEmojiTexture(config.emoji, config.color);
                const material = new THREE.MeshPhongMaterial({
                    map: texture,
                    emissive: new THREE.Color(config.color),
                    emissiveIntensity: 0.3,
                    transparent: true,
                    opacity: 0.95,
                    side: THREE.DoubleSide,
                });
                const geometry = new THREE.BoxGeometry(size, size, size);
                const mesh = new THREE.Mesh(geometry, material);

                // Add edge glow
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: new THREE.Color(config.color),
                    transparent: true,
                    opacity: 0.8
                });
                const wireframe = new THREE.LineSegments(edges, lineMaterial);
                mesh.add(wireframe);

                return mesh;
            };

            // Create emoji sphere with texture
            const createEmojiSphere = (config: typeof emojiConfigs[0], size: number) => {
                const texture = createEmojiTexture(config.emoji, config.color);
                const material = new THREE.MeshPhongMaterial({
                    map: texture,
                    emissive: new THREE.Color(config.color),
                    emissiveIntensity: 0.4,
                    transparent: true,
                    opacity: 0.9,
                });
                const geometry = new THREE.SphereGeometry(size, 24, 24);
                return new THREE.Mesh(geometry, material);
            };

            // All floating objects
            const floatingObjects: {
                mesh: THREE.Object3D;
                basePos: { x: number; y: number; z: number };
                rotSpeed: { x: number; y: number; z: number };
                orbitRadius: number;
                orbitSpeed: number;
                orbitOffset: number;
            }[] = [];

            // Create 25 floating emoji objects spread everywhere
            const numObjects = 25;
            for (let i = 0; i < numObjects; i++) {
                const config = emojiConfigs[i % emojiConfigs.length];
                const size = 2 + Math.random() * 3;

                // Alternate between sprites and 3D shapes
                let mesh: THREE.Object3D;
                const shapeType = i % 3;
                if (shapeType === 0) {
                    mesh = createEmojiSprite(config, size);
                } else if (shapeType === 1) {
                    mesh = createEmojiCube(config, size * 0.8);
                } else {
                    mesh = createEmojiSphere(config, size * 0.5);
                }

                // Spread across the entire screen
                const x = (Math.random() - 0.5) * 100;
                const y = (Math.random() - 0.5) * 60;
                const z = (Math.random() - 0.5) * 40 - 10;

                mesh.position.set(x, y, z);
                scene.add(mesh);

                floatingObjects.push({
                    mesh,
                    basePos: { x, y, z },
                    rotSpeed: {
                        x: (Math.random() - 0.5) * 0.03,
                        y: (Math.random() - 0.5) * 0.03,
                        z: (Math.random() - 0.5) * 0.02
                    },
                    orbitRadius: 3 + Math.random() * 6,
                    orbitSpeed: 0.2 + Math.random() * 0.4,
                    orbitOffset: Math.random() * Math.PI * 2
                });
            }

            // Orange ambient lighting
            const ambientLight = new THREE.AmbientLight(0xff6b00, 0.3);
            scene.add(ambientLight);

            // Multiple orange/warm lights
            const pointLight1 = new THREE.PointLight(0xff6b00, 2.5, 150);
            pointLight1.position.set(25, 20, 25);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff4500, 2, 120);
            pointLight2.position.set(-25, -15, 20);
            scene.add(pointLight2);

            const pointLight3 = new THREE.PointLight(0xffa500, 1.5, 100);
            pointLight3.position.set(0, 30, 15);
            scene.add(pointLight3);

            // ORANGE NEON PARTICLES
            const particleCount = 250;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            // Create orange/red/yellow gradient particles
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 120;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 15;

                // Orange color variations
                const orangeVariant = Math.random();
                if (orangeVariant < 0.5) {
                    // Pure orange
                    colors[i * 3] = 1.0;
                    colors[i * 3 + 1] = 0.42;
                    colors[i * 3 + 2] = 0.0;
                } else if (orangeVariant < 0.8) {
                    // Red-orange
                    colors[i * 3] = 1.0;
                    colors[i * 3 + 1] = 0.27;
                    colors[i * 3 + 2] = 0.0;
                } else {
                    // Yellow-orange
                    colors[i * 3] = 1.0;
                    colors[i * 3 + 1] = 0.6;
                    colors[i * 3 + 2] = 0.0;
                }
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.25,
                transparent: true,
                opacity: 0.8,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Second layer of smaller orange particles
            const sparkleCount = 150;
            const sparkleGeometry = new THREE.BufferGeometry();
            const sparklePositions = new Float32Array(sparkleCount * 3);

            for (let i = 0; i < sparkleCount; i++) {
                sparklePositions[i * 3] = (Math.random() - 0.5) * 100;
                sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
                sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
            }

            sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));
            const sparkleMaterial = new THREE.PointsMaterial({
                color: 0xff8c00,
                size: 0.15,
                transparent: true,
                opacity: 0.6,
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

                // Animate floating emojis
                floatingObjects.forEach((obj) => {
                    obj.mesh.position.x = obj.basePos.x + Math.sin(time * obj.orbitSpeed + obj.orbitOffset) * obj.orbitRadius;
                    obj.mesh.position.y = obj.basePos.y + Math.cos(time * obj.orbitSpeed * 0.8 + obj.orbitOffset) * obj.orbitRadius * 0.7;
                    obj.mesh.position.z = obj.basePos.z + Math.sin(time * obj.orbitSpeed * 0.5 + obj.orbitOffset) * (obj.orbitRadius * 0.4);

                    obj.mesh.rotation.x += obj.rotSpeed.x;
                    obj.mesh.rotation.y += obj.rotSpeed.y;
                    obj.mesh.rotation.z += obj.rotSpeed.z;
                });

                // Camera parallax
                camera.position.x += (mouseRef.current.x * 6 - camera.position.x) * 0.025;
                camera.position.y += (mouseRef.current.y * 4 - camera.position.y) * 0.025;
                camera.lookAt(0, 0, 0);

                // Animate particles
                particles.rotation.y += 0.0003;
                particles.rotation.x += 0.0001;
                sparkles.rotation.y -= 0.0002;
                sparkles.rotation.z += 0.0001;

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
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.15)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(15,100%,50%,0.12)_0%,_transparent_40%)]" />
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
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    <motion.div
                        className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default OrangeNeon3DBackground;
