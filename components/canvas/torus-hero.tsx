"use client"

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useHotkeyContext } from '@/components/providers/hotkey-provider'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

interface TorusProps {
  animationsEnabled: boolean
}

function AnimatedTorus({ animationsEnabled }: TorusProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!)
  
  // Spring animation for hover effects
  const [springs, api] = useSpring(() => ({
    scale: 1,
    rotation: [0, 0, 0],
    config: config.gentle,
  }))

  // Continuous rotation animation
  useFrame((state) => {
    if (!animationsEnabled) return
    
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z += 0.003
    }
    
    // Pulsing effect for the material
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  // GSAP timeline for initial animation
  useEffect(() => {
    if (!animationsEnabled || !meshRef.current) return

    const tl = gsap.timeline()
    
    // Initial state
    gsap.set(meshRef.current.scale, { x: 0, y: 0, z: 0 })
    gsap.set(meshRef.current.rotation, { x: 0, y: 0, z: 0 })
    
    // Animate in
    tl.to(meshRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2,
      ease: "power2.out",
    })
    .to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI * 2,
      duration: 8,
      ease: "none",
    }, "-=1.5")

    return () => {
      tl.kill()
    }
  }, [animationsEnabled])

  // Iridescent material
  const iridescentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#6E00FF'),
      emissive: new THREE.Color('#AA00FF'),
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.9,
    })
  }, [])

  return (
    <animated.mesh
      ref={meshRef}
      scale={springs.scale}
      rotation={springs.rotation as any}
      onPointerEnter={() => api.start({ scale: 1.1 })}
      onPointerLeave={() => api.start({ scale: 1 })}
    >
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <primitive object={iridescentMaterial} ref={materialRef} attach="material" />
    </animated.mesh>
  )
}

export function TorusHero() {
  const { animationsEnabled } = useHotkeyContext()
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#AA00FF" />
        
        <AnimatedTorus animationsEnabled={animationsEnabled} />
      </Canvas>
    </div>
  )
} 