"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Professional 3D Background with real Three.js 3D models
const Professional3DBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Dynamic import Three.js
        import('three').then((THREE) => {
            // Scene setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0); // Transparent background

            // Colors
            const primaryColor = 0xff6b00;
            const cyanColor = 0x22d3ee;
            const purpleColor = 0xa855f7;
            const goldColor = 0xeab308;
            const greenColor = 0x22c55e;

            // Create glowing material - MORE INTENSE
            const createGlowMaterial = (color: number, opacity = 1) => {
                return new THREE.MeshPhongMaterial({
                    color: color,
                    emissive: color,
                    emissiveIntensity: 0.8, // Increased
                    transparent: true,
                    opacity: opacity,
                    side: THREE.DoubleSide,
                    shininess: 150,
                });
            };

            // 3D Objects array
            const objects: THREE.Mesh[] = [];
            const objectData: { baseY: number; baseX: number; rotationSpeed: { x: number; y: number; z: number }; floatSpeed: number; floatAmplitude: number }[] = [];

            // Create different 3D shapes

            // 1. DIAMOND / GEM shapes
            const createDiamond = (size: number, color: number) => {
                const geometry = new THREE.OctahedronGeometry(size, 0);
                const material = createGlowMaterial(color);
                return new THREE.Mesh(geometry, material);
            };

            // 2. CUBE shapes with wireframe
            const createCube = (size: number, color: number) => {
                const geometry = new THREE.BoxGeometry(size, size, size);
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
                const wireframe = new THREE.LineSegments(edges, lineMaterial);

                const solidMaterial = createGlowMaterial(color, 0.6);
                const solidMesh = new THREE.Mesh(geometry, solidMaterial);

                const group = new THREE.Group();
                group.add(solidMesh);
                group.add(wireframe);
                return group;
            };

            // 3. TORUS shapes
            const createTorus = (size: number, color: number) => {
                const geometry = new THREE.TorusGeometry(size, size * 0.35, 16, 32);
                const material = createGlowMaterial(color);
                return new THREE.Mesh(geometry, material);
            };

            // 4. ICOSAHEDRON
            const createIcosahedron = (size: number, color: number) => {
                const geometry = new THREE.IcosahedronGeometry(size, 0);
                const wireframeMaterial = new THREE.MeshBasicMaterial({
                    color: color,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.9
                });
                return new THREE.Mesh(geometry, wireframeMaterial);
            };

            // 5. CONE shapes
            const createCone = (size: number, color: number) => {
                const geometry = new THREE.ConeGeometry(size * 0.7, size * 1.8, 4);
                const material = createGlowMaterial(color);
                return new THREE.Mesh(geometry, material);
            };

            // 6. SPHERE with rings
            const createSphereWithRing = (size: number, color: number) => {
                const group = new THREE.Group();

                const sphereGeometry = new THREE.SphereGeometry(size * 0.7, 16, 16);
                const sphereMaterial = createGlowMaterial(color, 0.8);
                const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

                const ringGeometry = new THREE.RingGeometry(size * 1.1, size * 1.3, 32);
                const ringMaterial = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide
                });
                const ring = new THREE.Mesh(ringGeometry, ringMaterial);
                ring.rotation.x = Math.PI * 0.5;

                group.add(sphere);
                group.add(ring);
                return group;
            };

            // Create objects with positions - BIGGER and CLOSER
            const createObject = (
                createFn: (size: number, color: number) => THREE.Mesh | THREE.Group,
                size: number,
                color: number,
                x: number,
                y: number,
                z: number
            ) => {
                const obj = createFn(size, color);
                obj.position.set(x, y, z);
                scene.add(obj);
                objects.push(obj as THREE.Mesh);
                objectData.push({
                    baseY: y,
                    baseX: x,
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.03,
                        y: (Math.random() - 0.5) * 0.03,
                        z: (Math.random() - 0.5) * 0.02
                    },
                    floatSpeed: 0.6 + Math.random() * 0.4,
                    floatAmplitude: 1.5 + Math.random() * 2
                });
            };

            // LEFT SIDE objects - BIGGER and CLOSER to center
            createObject(createDiamond, 3, primaryColor, -15, 10, 0);
            createObject(createCube, 2.5, cyanColor, -12, 3, -3);
            createObject(createTorus, 2, purpleColor, -14, -4, -2);
            createObject(createIcosahedron, 2.5, goldColor, -11, -10, -4);
            createObject(createCone, 2.5, greenColor, -13, -16, -1);

            // RIGHT SIDE objects
            createObject(createSphereWithRing, 2.5, cyanColor, 15, 12, -2);
            createObject(createDiamond, 2.8, goldColor, 12, 5, 0);
            createObject(createIcosahedron, 3, primaryColor, 14, -3, -3);
            createObject(createTorus, 2.2, purpleColor, 11, -9, -1);
            createObject(createCube, 2.5, greenColor, 13, -15, -2);

            // Some in middle but further back
            createObject(createDiamond, 1.5, cyanColor, -4, 14, -15);
            createObject(createDiamond, 1.2, primaryColor, 5, 12, -12);
            createObject(createTorus, 1, purpleColor, 0, -12, -10);

            // INTENSE Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(primaryColor, 3, 150);
            pointLight1.position.set(10, 10, 15);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(cyanColor, 2.5, 120);
            pointLight2.position.set(-10, -10, 15);
            scene.add(pointLight2);

            const pointLight3 = new THREE.PointLight(purpleColor, 2, 100);
            pointLight3.position.set(0, 15, 10);
            scene.add(pointLight3);

            // Particles - MORE visible
            const particleCount = 150;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 60;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.15,
                transparent: true,
                opacity: 0.7,
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Mouse interaction
            const handleMouseMove = (event: MouseEvent) => {
                mouseRef.current = {
                    x: (event.clientX / window.innerWidth) * 2 - 1,
                    y: -(event.clientY / window.innerHeight) * 2 + 1,
                };
            };
            window.addEventListener('mousemove', handleMouseMove);

            // Handle resize
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

                // Animate objects
                objects.forEach((obj, i) => {
                    const data = objectData[i];

                    // Floating animation
                    obj.position.y = data.baseY + Math.sin(time * data.floatSpeed) * data.floatAmplitude;
                    obj.position.x = data.baseX + Math.cos(time * data.floatSpeed * 0.5) * (data.floatAmplitude * 0.4);

                    // Rotation
                    obj.rotation.x += data.rotationSpeed.x;
                    obj.rotation.y += data.rotationSpeed.y;
                    obj.rotation.z += data.rotationSpeed.z;
                });

                // Parallax effect with mouse
                camera.position.x += (mouseRef.current.x * 4 - camera.position.x) * 0.03;
                camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.03;
                camera.lookAt(0, 0, 0);

                // Rotate particles slowly
                particles.rotation.y += 0.0003;

                renderer.render(scene, camera);
            };

            setIsLoaded(true);
            animate();

            // Cleanup
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
            {/* Base gradient background - BEHIND everything */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.15)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(200,100%,50%,0.1)_0%,_transparent_40%)]" />
            </div>

            {/* Three.js Canvas - z-[5] to be ABOVE background but BELOW content */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[5] pointer-events-none"
                style={{ background: 'transparent' }}
            />

            {/* Loading indicator */}
            {!isLoaded && (
                <motion.div
                    className="fixed inset-0 z-[6] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.div
                        className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: 9999, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default Professional3DBackground;
