"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useHotkeyContext } from '@/components/providers/hotkey-provider'
import * as THREE from 'three'

function TensorCubes() {
  const groupRef = useRef<THREE.Group>(null!)
  const { animationsEnabled } = useHotkeyContext()

  useFrame((state) => {
    if (!animationsEnabled || !groupRef.current) return
    
    groupRef.current.rotation.y += 0.005
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    
    groupRef.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh
      mesh.rotation.x += 0.01 + index * 0.001
      mesh.rotation.z += 0.005 + index * 0.001
      mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2
    })
  })

  const cubes = []
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        cubes.push({ x: x * 1.5, y: y * 1.5, z: z * 1.5, key: `${x}-${y}-${z}` })
      }
    }
  }

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh key={cube.key} position={[cube.x, cube.y, cube.z]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial 
            color={new THREE.Color().setHSL((index * 0.1) % 1, 0.7, 0.6)}
            transparent
            opacity={0.7}
            emissive={new THREE.Color('#AA00FF')}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

export function TensorGrid() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [8, 8, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6E00FF" />
        <TensorCubes />
      </Canvas>
    </div>
  )
} 