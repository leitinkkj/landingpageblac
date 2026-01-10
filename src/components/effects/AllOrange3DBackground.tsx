"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// ALL ORANGE 3D Background
const AllOrange3DBackground = () => {
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

            // ORANGE COLOR PALETTE ONLY
            const orangeColors = [
                0xff6b00, // Primary orange
                0xff8c00, // Dark orange
                0xff5500, // Red-orange
                0xffa500, // Orange
                0xff7700, // Bright orange
            ];

            // Create emoji texture - ALL ORANGE
            const createOrangeEmojiTexture = (emoji: string) => {
                const size = 256;
                const textureCanvas = document.createElement('canvas');
                textureCanvas.width = size;
                textureCanvas.height = size;
                const ctx = textureCanvas.getContext('2d')!;

                // Orange gradient background
                const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
                gradient.addColorStop(0, '#ff6b00');
                gradient.addColorStop(0.5, '#ff5500');
                gradient.addColorStop(1, '#000000');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, size, size);

                // Orange glow
                ctx.shadowColor = '#ff6b00';
                ctx.shadowBlur = 40;

                // Draw emoji
                ctx.font = `${size * 0.55}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'white';
                ctx.fillText(emoji, size / 2, size / 2);

                const texture = new THREE.CanvasTexture(textureCanvas);
                texture.needsUpdate = true;
                return texture;
            };

            // All emojis - will all render in ORANGE
            const emojis = ['💰', '💎', '🛍️', '📦', '👑', '🤖', '⭐', '🔥', '📈', '🚀', '🏪', '💵'];

            // Create orange 3D cube with emoji texture
            const createOrangeCube = (emoji: string, size: number) => {
                const texture = createOrangeEmojiTexture(emoji);
                const orangeColor = orangeColors[Math.floor(Math.random() * orangeColors.length)];

                const material = new THREE.MeshPhongMaterial({
                    map: texture,
                    color: orangeColor,
                    emissive: orangeColor,
                    emissiveIntensity: 0.5,
                    transparent: true,
                    opacity: 0.95,
                });
                const geometry = new THREE.BoxGeometry(size, size, size);
                const mesh = new THREE.Mesh(geometry, material);

                // Orange edge glow
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: 0xff6b00,
                    transparent: true,
                    opacity: 0.9
                });
                const wireframe = new THREE.LineSegments(edges, lineMaterial);
                mesh.add(wireframe);

                return mesh;
            };

            // Create orange sprite with emoji
            const createOrangeSprite = (emoji: string, size: number) => {
                const texture = createOrangeEmojiTexture(emoji);
                const material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0.9,
                    blending: THREE.AdditiveBlending,
                    color: 0xff6b00,
                });
                const sprite = new THREE.Sprite(material);
                sprite.scale.set(size, size, 1);
                return sprite;
            };

            // Create orange sphere
            const createOrangeSphere = (emoji: string, size: number) => {
                const texture = createOrangeEmojiTexture(emoji);
                const orangeColor = orangeColors[Math.floor(Math.random() * orangeColors.length)];

                const material = new THREE.MeshPhongMaterial({
                    map: texture,
                    color: orangeColor,
                    emissive: orangeColor,
                    emissiveIntensity: 0.4,
                    transparent: true,
                    opacity: 0.9,
                });
                const geometry = new THREE.SphereGeometry(size, 24, 24);
                return new THREE.Mesh(geometry, material);
            };

            // Floating objects
            const floatingObjects: {
                mesh: THREE.Object3D;
                basePos: { x: number; y: number; z: number };
                rotSpeed: { x: number; y: number; z: number };
                orbitRadius: number;
                orbitSpeed: number;
                orbitOffset: number;
            }[] = [];

            // Create 25 ALL ORANGE floating emoji objects
            const numObjects = 25;
            for (let i = 0; i < numObjects; i++) {
                const emoji = emojis[i % emojis.length];
                const size = 2 + Math.random() * 2.5;

                let mesh: THREE.Object3D;
                const shapeType = i % 3;
                if (shapeType === 0) {
                    mesh = createOrangeSprite(emoji, size);
                } else if (shapeType === 1) {
                    mesh = createOrangeCube(emoji, size * 0.7);
                } else {
                    mesh = createOrangeSphere(emoji, size * 0.5);
                }

                // Spread everywhere
                const x = (Math.random() - 0.5) * 100;
                const y = (Math.random() - 0.5) * 60;
                const z = (Math.random() - 0.5) * 40 - 10;

                mesh.position.set(x, y, z);
                scene.add(mesh);

                floatingObjects.push({
                    mesh,
                    basePos: { x, y, z },
                    rotSpeed: {
                        x: (Math.random() - 0.5) * 0.025,
                        y: (Math.random() - 0.5) * 0.025,
                        z: (Math.random() - 0.5) * 0.015
                    },
                    orbitRadius: 3 + Math.random() * 5,
                    orbitSpeed: 0.15 + Math.random() * 0.3,
                    orbitOffset: Math.random() * Math.PI * 2
                });
            }

            // ALL ORANGE LIGHTS
            const ambientLight = new THREE.AmbientLight(0xff6b00, 0.4);
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(0xff6b00, 3, 150);
            pointLight1.position.set(25, 20, 25);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xff5500, 2.5, 120);
            pointLight2.position.set(-25, -15, 20);
            scene.add(pointLight2);

            const pointLight3 = new THREE.PointLight(0xff8c00, 2, 100);
            pointLight3.position.set(0, 30, 15);
            scene.add(pointLight3);

            // ORANGE NEON PARTICLES
            const particleCount = 300;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 120;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 15;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            // ORANGE particles only
            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xff6b00,
                size: 0.3,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Second layer - dimmer orange sparkles
            const sparkleCount = 200;
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
                size: 0.18,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending,
            });
            const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
            scene.add(sparkles);

            // Mouse
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

                floatingObjects.forEach((obj) => {
                    obj.mesh.position.x = obj.basePos.x + Math.sin(time * obj.orbitSpeed + obj.orbitOffset) * obj.orbitRadius;
                    obj.mesh.position.y = obj.basePos.y + Math.cos(time * obj.orbitSpeed * 0.8 + obj.orbitOffset) * obj.orbitRadius * 0.7;
                    obj.mesh.position.z = obj.basePos.z + Math.sin(time * obj.orbitSpeed * 0.5 + obj.orbitOffset) * (obj.orbitRadius * 0.4);

                    obj.mesh.rotation.x += obj.rotSpeed.x;
                    obj.mesh.rotation.y += obj.rotSpeed.y;
                    obj.mesh.rotation.z += obj.rotSpeed.z;
                });

                camera.position.x += (mouseRef.current.x * 6 - camera.position.x) * 0.025;
                camera.position.y += (mouseRef.current.y * 4 - camera.position.y) * 0.025;
                camera.lookAt(0, 0, 0);

                particles.rotation.y += 0.0003;
                particles.rotation.x += 0.0001;
                sparkles.rotation.y -= 0.0002;

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
            {/* ALL ORANGE gradient background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.3)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.2)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(20,100%,50%,0.15)_0%,_transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(30,100%,50%,0.12)_0%,_transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(26,100%,50%,0.08)_0%,_transparent_60%)]" />
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
                        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default AllOrange3DBackground;
