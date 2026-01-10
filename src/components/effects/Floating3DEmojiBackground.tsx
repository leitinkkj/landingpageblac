"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Floating 3D Emoji Background
const Floating3DEmojiBackground = () => {
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

            // Colors
            const colors = {
                primary: 0xff6b00,
                cyan: 0x22d3ee,
                purple: 0xa855f7,
                gold: 0xeab308,
                green: 0x22c55e,
                red: 0xef4444,
                pink: 0xec4899
            };

            // Emoji shapes - creating 3D representations
            const emojiTypes = [
                { name: '💰', shape: 'coin', color: colors.gold },      // Money bag - coin shape
                { name: '💎', shape: 'diamond', color: colors.cyan },   // Diamond
                { name: '🛍️', shape: 'cube', color: colors.primary },  // Shopping bag - cube
                { name: '📦', shape: 'box', color: colors.primary },    // Package - box
                { name: '👑', shape: 'crown', color: colors.gold },     // Crown
                { name: '🤖', shape: 'robot', color: colors.purple },   // Robot - icosahedron
                { name: '⭐', shape: 'star', color: colors.gold },      // Star
                { name: '🔥', shape: 'flame', color: colors.red },      // Fire - cone
                { name: '📈', shape: 'arrow', color: colors.green },    // Chart - arrow
                { name: '🚀', shape: 'rocket', color: colors.primary }, // Rocket - cone
                { name: '🏪', shape: 'store', color: colors.cyan },     // Store - cube
                { name: '💵', shape: 'dollar', color: colors.green },   // Dollar - cylinder
            ];

            // Create shape based on emoji type
            const createEmojiShape = (type: typeof emojiTypes[0], size: number) => {
                let geometry: THREE.BufferGeometry;

                switch (type.shape) {
                    case 'coin':
                    case 'dollar':
                        geometry = new THREE.CylinderGeometry(size, size, size * 0.2, 16);
                        break;
                    case 'diamond':
                        geometry = new THREE.OctahedronGeometry(size, 0);
                        break;
                    case 'cube':
                    case 'box':
                    case 'store':
                        geometry = new THREE.BoxGeometry(size, size, size);
                        break;
                    case 'crown':
                        geometry = new THREE.ConeGeometry(size, size * 1.2, 5);
                        break;
                    case 'robot':
                        geometry = new THREE.IcosahedronGeometry(size, 0);
                        break;
                    case 'star':
                        // Create star shape
                        const starShape = new THREE.Shape();
                        const outerRadius = size;
                        const innerRadius = size * 0.4;
                        const points = 5;
                        for (let i = 0; i < points * 2; i++) {
                            const radius = i % 2 === 0 ? outerRadius : innerRadius;
                            const angle = (i * Math.PI) / points - Math.PI / 2;
                            if (i === 0) {
                                starShape.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
                            } else {
                                starShape.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
                            }
                        }
                        starShape.closePath();
                        geometry = new THREE.ExtrudeGeometry(starShape, { depth: size * 0.3, bevelEnabled: false });
                        break;
                    case 'flame':
                    case 'rocket':
                        geometry = new THREE.ConeGeometry(size * 0.6, size * 1.5, 6);
                        break;
                    case 'arrow':
                        geometry = new THREE.ConeGeometry(size * 0.5, size * 1.5, 4);
                        break;
                    default:
                        geometry = new THREE.SphereGeometry(size, 16, 16);
                }

                // Glowing material
                const material = new THREE.MeshPhongMaterial({
                    color: type.color,
                    emissive: type.color,
                    emissiveIntensity: 0.6,
                    transparent: true,
                    opacity: 0.9,
                    side: THREE.DoubleSide,
                    shininess: 100,
                });

                const mesh = new THREE.Mesh(geometry, material);

                // Add wireframe outline for extra style
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
                const wireframe = new THREE.LineSegments(edges, lineMaterial);
                mesh.add(wireframe);

                return mesh;
            };

            // All floating objects
            const floatingObjects: {
                mesh: THREE.Mesh;
                velocity: { x: number; y: number; z: number };
                rotSpeed: { x: number; y: number; z: number };
                basePos: { x: number; y: number; z: number };
                orbitRadius: number;
                orbitSpeed: number;
                orbitOffset: number;
            }[] = [];

            // Create 25 floating emojis spread across the screen
            const numObjects = 30;
            for (let i = 0; i < numObjects; i++) {
                const emojiType = emojiTypes[i % emojiTypes.length];
                const size = 0.8 + Math.random() * 1.2; // Varied sizes
                const mesh = createEmojiShape(emojiType, size);

                // Random position across entire screen
                const x = (Math.random() - 0.5) * 80;
                const y = (Math.random() - 0.5) * 50;
                const z = (Math.random() - 0.5) * 30 - 10;

                mesh.position.set(x, y, z);
                scene.add(mesh);

                floatingObjects.push({
                    mesh,
                    velocity: {
                        x: (Math.random() - 0.5) * 0.02,
                        y: (Math.random() - 0.5) * 0.02,
                        z: (Math.random() - 0.5) * 0.01
                    },
                    rotSpeed: {
                        x: (Math.random() - 0.5) * 0.04,
                        y: (Math.random() - 0.5) * 0.04,
                        z: (Math.random() - 0.5) * 0.02
                    },
                    basePos: { x, y, z },
                    orbitRadius: 2 + Math.random() * 5,
                    orbitSpeed: 0.3 + Math.random() * 0.5,
                    orbitOffset: Math.random() * Math.PI * 2
                });
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(colors.primary, 2, 150);
            pointLight1.position.set(20, 20, 20);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(colors.cyan, 1.5, 120);
            pointLight2.position.set(-20, -10, 15);
            scene.add(pointLight2);

            const pointLight3 = new THREE.PointLight(colors.purple, 1.2, 100);
            pointLight3.position.set(0, 25, 10);
            scene.add(pointLight3);

            // Star particles
            const starCount = 200;
            const starGeometry = new THREE.BufferGeometry();
            const starPositions = new Float32Array(starCount * 3);

            for (let i = 0; i < starCount; i++) {
                starPositions[i * 3] = (Math.random() - 0.5) * 100;
                starPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
                starPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 20;
            }

            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.12,
                transparent: true,
                opacity: 0.6,
            });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

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
                time += 0.01;

                // Animate each object with free floating movement
                floatingObjects.forEach((obj) => {
                    // Orbital floating motion
                    obj.mesh.position.x = obj.basePos.x + Math.sin(time * obj.orbitSpeed + obj.orbitOffset) * obj.orbitRadius;
                    obj.mesh.position.y = obj.basePos.y + Math.cos(time * obj.orbitSpeed * 0.7 + obj.orbitOffset) * obj.orbitRadius * 0.6;
                    obj.mesh.position.z = obj.basePos.z + Math.sin(time * obj.orbitSpeed * 0.5 + obj.orbitOffset) * (obj.orbitRadius * 0.3);

                    // Continuous rotation
                    obj.mesh.rotation.x += obj.rotSpeed.x;
                    obj.mesh.rotation.y += obj.rotSpeed.y;
                    obj.mesh.rotation.z += obj.rotSpeed.z;
                });

                // Camera parallax with mouse
                camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.03;
                camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.03;
                camera.lookAt(0, 0, 0);

                // Animate stars
                stars.rotation.y += 0.0002;
                stars.rotation.x += 0.0001;

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
            {/* Base gradient background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.12)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(200,100%,50%,0.08)_0%,_transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(280,100%,50%,0.06)_0%,_transparent_40%)]" />
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
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <motion.div
                        className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default Floating3DEmojiBackground;
