"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Real 3D Money with Wings Model Background
const MoneyWingsModel3DBackground = () => {
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
            camera.position.z = 60;

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            // Orange color palette
            const orangeMain = 0xff6b00;
            const orangeLight = 0xff8c00;
            const orangeDark = 0xff5500;
            const goldAccent = 0xffa500;

            // CREATE 3D MONEY WITH WINGS MODEL
            const createMoneyWingsModel = () => {
                const group = new THREE.Group();

                // === STACKED MONEY BILLS ===
                const billWidth = 2.5;
                const billHeight = 1.2;
                const billDepth = 0.08;
                const numBills = 5;

                // Create money bills stack
                for (let i = 0; i < numBills; i++) {
                    const billGeometry = new THREE.BoxGeometry(billWidth, billHeight, billDepth);

                    // Rounded edges effect with beveled material
                    const billMaterial = new THREE.MeshPhongMaterial({
                        color: orangeMain,
                        emissive: orangeDark,
                        emissiveIntensity: 0.3,
                        shininess: 80,
                        transparent: true,
                        opacity: 0.95,
                    });

                    const bill = new THREE.Mesh(billGeometry, billMaterial);

                    // Stack with slight offset and rotation for realism
                    bill.position.z = i * billDepth * 1.2;
                    bill.rotation.z = (Math.random() - 0.5) * 0.05;
                    bill.position.x = (Math.random() - 0.5) * 0.1;
                    bill.position.y = (Math.random() - 0.5) * 0.05;

                    // Add edge outline to each bill
                    const edges = new THREE.EdgesGeometry(billGeometry);
                    const edgeMaterial = new THREE.LineBasicMaterial({
                        color: goldAccent,
                        transparent: true,
                        opacity: 0.7
                    });
                    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
                    bill.add(edgeLines);

                    group.add(bill);
                }

                // === DOLLAR SIGN ON TOP BILL ===
                const dollarShape = new THREE.Shape();
                // Create $ shape
                const scale = 0.35;
                // S curve of dollar sign
                dollarShape.moveTo(0.3 * scale, 0.5 * scale);
                dollarShape.bezierCurveTo(0.3 * scale, 0.7 * scale, 0 * scale, 0.7 * scale, -0.2 * scale, 0.5 * scale);
                dollarShape.bezierCurveTo(-0.35 * scale, 0.35 * scale, -0.2 * scale, 0.15 * scale, 0 * scale, 0.1 * scale);
                dollarShape.bezierCurveTo(0.2 * scale, 0.05 * scale, 0.35 * scale, -0.1 * scale, 0.2 * scale, -0.25 * scale);
                dollarShape.bezierCurveTo(0.05 * scale, -0.45 * scale, -0.3 * scale, -0.35 * scale, -0.3 * scale, -0.5 * scale);

                const dollarGeometry = new THREE.ExtrudeGeometry(dollarShape, {
                    depth: 0.05,
                    bevelEnabled: true,
                    bevelThickness: 0.02,
                    bevelSize: 0.02,
                    bevelSegments: 3,
                });

                const dollarMaterial = new THREE.MeshPhongMaterial({
                    color: goldAccent,
                    emissive: orangeLight,
                    emissiveIntensity: 0.5,
                    shininess: 100,
                });

                const dollarSign = new THREE.Mesh(dollarGeometry, dollarMaterial);
                dollarSign.position.set(0, 0, numBills * billDepth * 1.2 + 0.1);
                dollarSign.rotation.x = 0;
                group.add(dollarSign);

                // Vertical line through dollar sign
                const lineGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8);
                const lineMaterial = new THREE.MeshPhongMaterial({
                    color: goldAccent,
                    emissive: orangeLight,
                    emissiveIntensity: 0.4,
                });
                const verticalLine = new THREE.Mesh(lineGeometry, lineMaterial);
                verticalLine.position.set(0, 0, numBills * billDepth * 1.2 + 0.12);
                verticalLine.rotation.x = Math.PI / 2;
                group.add(verticalLine);

                // === WINGS ===
                const createWing = (isRight: boolean) => {
                    const wingGroup = new THREE.Group();

                    // Main wing shape using custom geometry
                    const wingShape = new THREE.Shape();

                    // Wing outline - organic feather shape
                    wingShape.moveTo(0, 0);
                    wingShape.bezierCurveTo(0.3, 0.2, 0.8, 0.5, 1.5, 0.3);
                    wingShape.bezierCurveTo(2, 0.2, 2.3, 0.1, 2.5, 0);
                    wingShape.bezierCurveTo(2.3, -0.1, 2, -0.15, 1.5, -0.2);
                    wingShape.bezierCurveTo(0.8, -0.3, 0.3, -0.15, 0, 0);

                    const wingGeometry = new THREE.ExtrudeGeometry(wingShape, {
                        depth: 0.15,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.03,
                        bevelSegments: 2,
                    });

                    const wingMaterial = new THREE.MeshPhongMaterial({
                        color: orangeLight,
                        emissive: orangeMain,
                        emissiveIntensity: 0.4,
                        shininess: 60,
                        side: THREE.DoubleSide,
                    });

                    const wing = new THREE.Mesh(wingGeometry, wingMaterial);

                    // Add feather details - multiple smaller shapes
                    for (let i = 0; i < 4; i++) {
                        const featherGeometry = new THREE.ConeGeometry(0.08, 0.6 + i * 0.15, 4);
                        const featherMaterial = new THREE.MeshPhongMaterial({
                            color: goldAccent,
                            emissive: orangeMain,
                            emissiveIntensity: 0.3,
                        });
                        const feather = new THREE.Mesh(featherGeometry, featherMaterial);
                        feather.position.set(0.5 + i * 0.4, 0.15 - i * 0.05, 0.1);
                        feather.rotation.z = -Math.PI / 4 - i * 0.1;
                        wingGroup.add(feather);
                    }

                    // Wing edge glow
                    const wingEdges = new THREE.EdgesGeometry(wingGeometry);
                    const wingEdgeMaterial = new THREE.LineBasicMaterial({
                        color: 0xffaa00,
                        transparent: true,
                        opacity: 0.8,
                    });
                    const wingEdgeLines = new THREE.LineSegments(wingEdges, wingEdgeMaterial);
                    wing.add(wingEdgeLines);

                    wingGroup.add(wing);

                    // Position and mirror for right/left
                    if (isRight) {
                        wingGroup.position.set(billWidth / 2 + 0.1, 0, numBills * billDepth / 2);
                        wingGroup.rotation.y = -0.3;
                        wingGroup.rotation.z = 0.2;
                    } else {
                        wingGroup.scale.x = -1;
                        wingGroup.position.set(-billWidth / 2 - 0.1, 0, numBills * billDepth / 2);
                        wingGroup.rotation.y = 0.3;
                        wingGroup.rotation.z = -0.2;
                    }

                    return wingGroup;
                };

                // Add both wings
                group.add(createWing(true));
                group.add(createWing(false));

                // === GLOW EFFECT ===
                const glowGeometry = new THREE.SphereGeometry(2, 16, 16);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: orangeMain,
                    transparent: true,
                    opacity: 0.15,
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                glow.position.z = numBills * billDepth / 2;
                group.add(glow);

                return group;
            };

            // Floating models array
            const floatingModels: {
                model: THREE.Group;
                basePos: { x: number; y: number; z: number };
                rotSpeed: { x: number; y: number; z: number };
                floatSpeed: number;
                floatAmplitude: number;
                floatOffset: number;
            }[] = [];

            // Create 20 money wings models spread across screen
            const numModels = 20;
            for (let i = 0; i < numModels; i++) {
                const model = createMoneyWingsModel();

                // Random scale
                const scale = 0.8 + Math.random() * 1.2;
                model.scale.set(scale, scale, scale);

                // Spread across screen
                const x = (Math.random() - 0.5) * 100;
                const y = (Math.random() - 0.5) * 60;
                const z = (Math.random() - 0.5) * 40 - 15;

                model.position.set(x, y, z);

                // Random initial rotation
                model.rotation.x = (Math.random() - 0.5) * 0.5;
                model.rotation.y = (Math.random() - 0.5) * 0.8;
                model.rotation.z = (Math.random() - 0.5) * 0.3;

                scene.add(model);

                floatingModels.push({
                    model,
                    basePos: { x, y, z },
                    rotSpeed: {
                        x: (Math.random() - 0.5) * 0.008,
                        y: (Math.random() - 0.5) * 0.012,
                        z: (Math.random() - 0.5) * 0.005
                    },
                    floatSpeed: 0.2 + Math.random() * 0.3,
                    floatAmplitude: 3 + Math.random() * 5,
                    floatOffset: Math.random() * Math.PI * 2
                });
            }

            // === LIGHTING ===
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            scene.add(ambientLight);

            const mainLight = new THREE.DirectionalLight(orangeMain, 1.5);
            mainLight.position.set(10, 10, 20);
            scene.add(mainLight);

            const fillLight = new THREE.PointLight(orangeLight, 2, 150);
            fillLight.position.set(-20, 15, 25);
            scene.add(fillLight);

            const backLight = new THREE.PointLight(goldAccent, 1.5, 120);
            backLight.position.set(15, -10, -10);
            scene.add(backLight);

            // === ORANGE NEON PARTICLES ===
            const particleCount = 400;
            const particlesGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 140;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 25;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                color: orangeMain,
                size: 0.3,
                transparent: true,
                opacity: 0.7,
                blending: THREE.AdditiveBlending,
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
                time += 0.006;

                // Animate each model
                floatingModels.forEach((obj) => {
                    // Floating movement
                    obj.model.position.x = obj.basePos.x + Math.sin(time * obj.floatSpeed + obj.floatOffset) * obj.floatAmplitude;
                    obj.model.position.y = obj.basePos.y + Math.cos(time * obj.floatSpeed * 0.8 + obj.floatOffset) * obj.floatAmplitude * 0.7;
                    obj.model.position.z = obj.basePos.z + Math.sin(time * obj.floatSpeed * 0.5 + obj.floatOffset) * (obj.floatAmplitude * 0.4);

                    // Rotation
                    obj.model.rotation.x += obj.rotSpeed.x;
                    obj.model.rotation.y += obj.rotSpeed.y;
                    obj.model.rotation.z += obj.rotSpeed.z;
                });

                // Camera parallax
                camera.position.x += (mouseRef.current.x * 10 - camera.position.x) * 0.02;
                camera.position.y += (mouseRef.current.y * 6 - camera.position.y) * 0.02;
                camera.lookAt(0, 0, 0);

                // Animate particles
                particles.rotation.y += 0.0002;

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
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(26,100%,50%,0.3)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.2)_0%,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(20,100%,50%,0.15)_0%,_transparent_40%)]" />
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

export default MoneyWingsModel3DBackground;
