"use client";

import { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D Shape Component
function FloatingShape({
    position,
    geometry,
    color,
    speed = 1,
}: {
    position: [number, number, number];
    geometry: 'box' | 'octahedron' | 'icosahedron' | 'tetrahedron';
    color: string;
    speed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialY = position[1];

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
            meshRef.current.rotation.x += 0.003;
            meshRef.current.rotation.y += 0.005;
        }
    });

    const geo = useMemo(() => {
        switch (geometry) {
            case 'box':
                return new THREE.BoxGeometry(0.8, 0.8, 0.8);
            case 'octahedron':
                return new THREE.OctahedronGeometry(0.6);
            case 'icosahedron':
                return new THREE.IcosahedronGeometry(0.5);
            case 'tetrahedron':
                return new THREE.TetrahedronGeometry(0.7);
            default:
                return new THREE.BoxGeometry(0.8, 0.8, 0.8);
        }
    }, [geometry]);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} geometry={geo}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.7}
                />
            </mesh>
        </Float>
    );
}

// Main Scene
function Scene() {
    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (groupRef.current) {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = -(e.clientY / window.innerHeight - 0.5) * 2;
                groupRef.current.rotation.y = x * 0.1;
                groupRef.current.rotation.x = y * 0.1;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const shapes = useMemo(() => [
        { position: [-6, 2, -3] as [number, number, number], geometry: 'octahedron' as const, color: '#ff6b00', speed: 0.8 },
        { position: [-5, -1, -4] as [number, number, number], geometry: 'box' as const, color: '#ff4500', speed: 1.2 },
        { position: [-7, 0, -5] as [number, number, number], geometry: 'icosahedron' as const, color: '#ff8c00', speed: 0.6 },
        { position: [6, 1, -3] as [number, number, number], geometry: 'box' as const, color: '#ff6b00', speed: 0.9 },
        { position: [5, -2, -4] as [number, number, number], geometry: 'octahedron' as const, color: '#ff4500', speed: 1.1 },
        { position: [7, 2, -5] as [number, number, number], geometry: 'tetrahedron' as const, color: '#ff8c00', speed: 0.7 },
        { position: [0, 3, -8] as [number, number, number], geometry: 'octahedron' as const, color: '#ff6b00', speed: 0.5 },
        { position: [2, -3, -7] as [number, number, number], geometry: 'box' as const, color: '#ff4500', speed: 0.8 },
    ], []);

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 5, 0]} intensity={1} color="#ff6b00" />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff4500" />

            <Stars
                radius={100}
                depth={50}
                count={1500}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />

            <group ref={groupRef}>
                {shapes.map((shape, index) => (
                    <FloatingShape key={index} {...shape} />
                ))}
            </group>

            <fog attach="fog" args={['#000000', 5, 30]} />
        </>
    );
}

// Main exported component
export default function Background3D() {
    const [mounted, setMounted] = useState(false);
    const [shouldRender3D, setShouldRender3D] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Only render 3D on desktop with good GPU
        const isMobile = window.innerWidth < 768 || window.matchMedia('(hover: none)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setShouldRender3D(!isMobile && !prefersReducedMotion);
    }, []);

    if (!mounted) {
        return null;
    }

    // CSS-only background for mobile or when 3D is disabled
    if (!shouldRender3D) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(26,100%,50%,0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(26,100%,50%,0.05)_0%,_transparent_40%)]" />
                <div className="particles-mobile" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Suspense fallback={
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
            }>
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 60 }}
                    dpr={[1, 1.5]}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: true,
                    }}
                    style={{ background: 'transparent' }}
                    onCreated={({ gl }) => {
                        gl.setClearColor(0x000000, 0);
                    }}
                >
                    <Scene />
                </Canvas>
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        </div>
    );
}
