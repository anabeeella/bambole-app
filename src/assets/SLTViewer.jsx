import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

const Model = ({ url }) => {
  const geometry = useLoader(STLLoader, url)
  return (
    <Center>
      <mesh geometry={geometry} scale={0.2} rotation={[20, Math.PI, 10]}>
        <meshStandardMaterial color="white" />
      </mesh>
    </Center>
  )
}

const STLViewer = ({ file }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        shadows
        camera={{
          position: [0, 10, 15],
          fov: 75,
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[-5, -5, 10]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Model url={file} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

export default STLViewer
