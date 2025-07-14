"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useHotkeyContext } from '@/components/providers/hotkey-provider'
import * as THREE from 'three'

function WaveformPoints() {
  const meshRef = useRef<THREE.Points>(null!)
  const { animationsEnabled } = useHotkeyContext()

  const points = useMemo(() => {
    const temp = []
    for (let i = 0; i < 1000; i++) {
      const t = i / 100
      const x = Math.cos(t) * (1 + t * 0.1)
      const y = Math.sin(t) * (1 + t * 0.1)
      const z = t * 0.5
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state) => {
    if (!animationsEnabled || !meshRef.current) return
    
    meshRef.current.rotation.z += 0.01
    meshRef.current.rotation.y += 0.005
    
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#AA00FF"
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  )
}

export function WaveformSpiral() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6E00FF" />
        <WaveformPoints />
      </Canvas>
    </div>
  )
} 