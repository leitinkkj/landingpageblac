"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Premium 3D Flying Money Background
const PremiumFlyingMoney3D = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        import('three').then((THREE) => {
            // Setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 70;

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            renderer.shadowMap.enabled = true;

            // Premium orange gradient material
            const createPremiumMaterial = (color: number, emissiveIntensity = 0.4) => {
                return new THREE.MeshStandardMaterial({
                    color: color,
                    emissive: color,
                    emissiveIntensity: emissiveIntensity,
                    metalness: 0.3,
                    roughness: 0.4,
                    transparent: true,
                    opacity: 0.95,
                });
            };

            // CREATE PREMIUM FLYING MONEY MODEL
            const createFlyingMoneyModel = () => {
                const group = new THREE.Group();

                // === MAIN MONEY BUNDLE - Smooth rounded shape ===
                const bundleShape = new THREE.Shape();
                const w = 1.8;
                const h = 0.9;
                const r = 0.15; // corner radius

                bundleShape.moveTo(-w / 2 + r, -h / 2);
                bundleShape.lineTo(w / 2 - r, -h / 2);
                bundleShape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
                bundleShape.lineTo(w / 2, h / 2 - r);
                bundleShape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
                bundleShape.lineTo(-w / 2 + r, h / 2);
                bundleShape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
                bundleShape.lineTo(-w / 2, -h / 2 + r);
                bundleShape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

                const bundleGeometry = new THREE.ExtrudeGeometry(bundleShape, {
                    depth: 0.5,
                    bevelEnabled: true,
                    bevelThickness: 0.08,
                    bevelSize: 0.08,
                    bevelSegments: 8,
                });

                const bundleMaterial = createPremiumMaterial(0xff6b00, 0.5);
                const bundle = new THREE.Mesh(bundleGeometry, bundleMaterial);
                bundle.castShadow = true;
                bundle.receiveShadow = true;
                group.add(bundle);

                // === MONEY BAND (ribbon around bundle) ===
                const bandGeometry = new THREE.BoxGeometry(0.4, 1.1, 0.6);
                const bandMaterial = createPremiumMaterial(0xffa500, 0.6);
                const band = new THREE.Mesh(bandGeometry, bandMaterial);
                band.position.z = 0.25;
                group.add(band);

                // === DOLLAR SIGN - Clean and simple ===
                const dollarGroup = new THREE.Group();

                // S shape using torus segments
                const sTopGeometry = new THREE.TorusGeometry(0.18, 0.04, 8, 16, Math.PI);
                const sMaterial = createPremiumMaterial(0xffcc00, 0.7);
                const sTop = new THREE.Mesh(sTopGeometry, sMaterial);
                sTop.position.set(0, 0.12, 0.55);
                sTop.rotation.z = Math.PI / 2;
                dollarGroup.add(sTop);

                const sBottomGeometry = new THREE.TorusGeometry(0.18, 0.04, 8, 16, Math.PI);
                const sBottom = new THREE.Mesh(sBottomGeometry, sMaterial);
                sBottom.position.set(0, -0.12, 0.55);
                sBottom.rotation.z = -Math.PI / 2;
                dollarGroup.add(sBottom);

                // Vertical line
                const lineGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8);
                const line = new THREE.Mesh(lineGeometry, sMaterial);
                line.position.set(0, 0, 0.55);
                dollarGroup.add(line);

                group.add(dollarGroup);

                // === PREMIUM WINGS - Elegant feather design ===
                const createWing = (isRight: boolean) => {
                    const wingGroup = new THREE.Group();

                    // Main wing body - smooth curved shape
                    const wingPoints = [];
                    const segments = 20;
                    for (let i = 0; i <= segments; i++) {
                        const t = i / segments;
                        const x = t * 2.2;
                        const y = Math.sin(t * Math.PI) * 0.6 * (1 - t * 0.3);
                        wingPoints.push(new THREE.Vector2(x, y));
                    }
                    for (let i = segments; i >= 0; i--) {
                        const t = i / segments;
                        const x = t * 2.2;
                        const y = -Math.sin(t * Math.PI) * 0.4 * (1 - t * 0.3);
                        wingPoints.push(new THREE.Vector2(x, y));
                    }

                    const wingShape = new THREE.Shape(wingPoints);
                    const wingGeometry = new THREE.ExtrudeGeometry(wingShape, {
                        depth: 0.12,
                        bevelEnabled: true,
                        bevelThickness: 0.02,
                        bevelSize: 0.02,
                        bevelSegments: 3,
                    });

                    const wingMaterial = createPremiumMaterial(0xff8c00, 0.45);
                    const wing = new THREE.Mesh(wingGeometry, wingMaterial);

                    // Feather details - elegant lines
                    for (let i = 0; i < 6; i++) {
                        const featherLength = 0.5 + (i * 0.15);
                        const featherGeometry = new THREE.CylinderGeometry(0.015, 0.008, featherLength, 6);
                        const featherMaterial = createPremiumMaterial(0xffaa00, 0.5);
                        const feather = new THREE.Mesh(featherGeometry, featherMaterial);

                        const posX = 0.3 + i * 0.32;
                        const posY = Math.sin((i / 5) * Math.PI) * 0.3;
                        feather.position.set(posX, posY, 0.08);
                        feather.rotation.z = -Math.PI / 3 - i * 0.08;
                        wingGroup.add(feather);
                    }

                    // Wing tip glow
                    const tipGlow = new THREE.Mesh(
                        new THREE.SphereGeometry(0.15, 12, 12),
                        new THREE.MeshBasicMaterial({
                            color: 0xff6b00,
                            transparent: true,
                            opacity: 0.4,
                        })
                    );
                    tipGlow.position.set(2, 0, 0.06);
                    wingGroup.add(tipGlow);

                    wingGroup.add(wing);

                    // Position wing
                    if (isRight) {
                        wingGroup.position.set(1, 0, 0);
                        wingGroup.rotation.y = 0.15;
                        wingGroup.rotation.z = 0.1;
                    } else {
                        wingGroup.scale.x = -1;
                        wingGroup.position.set(-1, 0, 0);
                        wingGroup.rotation.y = -0.15;
                        wingGroup.rotation.z = -0.1;
                    }

                    return wingGroup;
                };

                group.add(createWing(true));
                group.add(createWing(false));

                // === SPARKLE PARTICLES around model ===
                const sparkleCount = 8;
                for (let i = 0; i < sparkleCount; i++) {
                    const sparkle = new THREE.Mesh(
                        new THREE.OctahedronGeometry(0.06, 0),
                        new THREE.MeshBasicMaterial({
                            color: 0xffcc00,
                            transparent: true,
                            opacity: 0.8,
                        })
                    );
                    const angle = (i / sparkleCount) * Math.PI * 2;
                    const radius = 2.5 + Math.random() * 0.5;
                    sparkle.position.set(
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.5,
                        0.3 + Math.random() * 0.3
                    );
                    sparkle.userData.angle = angle;
                    sparkle.userData.radius = radius;
                    group.add(sparkle);
                }

                return group;
            };

            // Floating models
            const floatingModels: {
                model: THREE.Group;
                basePos: { x: number; y: number; z: number };
                rotSpeed: { x: number; y: number; z: number };
                floatSpeed: number;
                floatAmplitude: number;
                floatOffset: number;
                wingFlap: number;
            }[] = [];

            // Create 18 premium flying money models
            const numModels = 18;
            for (let i = 0; i < numModels; i++) {
                const model = createFlyingMoneyModel();

                const scale = 1 + Math.random() * 1.5;
                model.scale.set(scale, scale, scale);

                const x = (Math.random() - 0.5) * 120;
                const y = (Math.random() - 0.5) * 70;
                const z = (Math.random() - 0.5) * 50 - 20;

                model.position.set(x, y, z);
                model.rotation.x = (Math.random() - 0.5) * 0.4;
                model.rotation.y = (Math.random() - 0.5) * 0.6;
                model.rotation.z = (Math.random() - 0.5) * 0.3;

                scene.add(model);

                floatingModels.push({
                    model,
                    basePos: { x, y, z },
                    rotSpeed: {
                        x: (Math.random() - 0.5) * 0.006,
                        y: (Math.random() - 0.5) * 0.01,
                        z: (Math.random() - 0.5) * 0.004
                    },
                    floatSpeed: 0.15 + Math.random() * 0.25,
                    floatAmplitude: 4 + Math.random() * 6,
                    floatOffset: Math.random() * Math.PI * 2,
                    wingFlap: Math.random() * Math.PI * 2
                });
            }

            // === LIGHTING ===
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const keyLight = new THREE.DirectionalLight(0xffffff, 1);
            keyLight.position.set(20, 20, 30);
            keyLight.castShadow = true;
            scene.add(keyLight);

            const orangeLight = new THREE.PointLight(0xff6b00, 2.5, 200);
            orangeLight.position.set(-30, 20, 40);
            scene.add(orangeLight);

            const goldLight = new THREE.PointLight(0xffa500, 2, 150);
            goldLight.position.set(30, -15, 30);
            scene.add(goldLight);

            // === ORANGE PARTICLES ===
            const particleCount = 500;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 160;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 30;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xff6b00,
                size: 0.25,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending,
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

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
                time += 0.005;

                floatingModels.forEach((obj, index) => {
                    // Smooth floating
                    obj.model.position.x = obj.basePos.x + Math.sin(time * obj.floatSpeed + obj.floatOffset) * obj.floatAmplitude;
                    obj.model.position.y = obj.basePos.y + Math.cos(time * obj.floatSpeed * 0.7 + obj.floatOffset) * obj.floatAmplitude * 0.6;
                    obj.model.position.z = obj.basePos.z + Math.sin(time * obj.floatSpeed * 0.4 + obj.floatOffset) * (obj.floatAmplitude * 0.3);

                    // Gentle rotation
                    obj.model.rotation.x += obj.rotSpeed.x;
                    obj.model.rotation.y += obj.rotSpeed.y;
                    obj.model.rotation.z += obj.rotSpeed.z;

                    // Wing flapping effect - animate wing children
                    const wingFlapAmount = Math.sin(time * 3 + obj.wingFlap) * 0.1;
                    obj.model.children.forEach((child, childIndex) => {
                        if (childIndex >= 3 && childIndex <= 4) { // Wings
                            child.rotation.z = (childIndex === 3 ? 0.1 : -0.1) + wingFlapAmount * (childIndex === 3 ? 1 : -1);
                        }
                    });
                });

                // Camera parallax
                camera.position.x += (mouseRef.current.x * 12 - camera.position.x) * 0.015;
                camera.position.y += (mouseRef.current.y * 8 - camera.position.y) * 0.015;
                camera.lookAt(0, 0, 0);

                particles.rotation.y += 0.00015;

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
            {/* Premium orange background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.35)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(30,100%,50%,0.2)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(26,100%,50%,0.1)_0%,_transparent_40%)]" />
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
                    transition={{ delay: 0.4, duration: 0.3 }}
                >
                    <motion.div
                        className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5, repeat: 9999, ease: "linear" }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default PremiumFlyingMoney3D;
