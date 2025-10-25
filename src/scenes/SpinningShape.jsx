import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const primaryColor = new THREE.Color('#3b82f6');
const secondaryColor = new THREE.Color('#8b5cf6');

const SpinningMesh = () => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Rotation
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;

      // Color interpolation
      const t = (1 + Math.sin(clock.getElapsedTime())) / 2; // Increased speed
      const newColor = primaryColor.clone().lerp(secondaryColor, t);
      mesh.current.material.color.set(newColor);
    }
  });

  return (
    <Icosahedron ref={mesh} args={[2.5, 1]}>
      <meshStandardMaterial color={primaryColor} wireframe />
    </Icosahedron>
  );
};

const SpinningShape = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SpinningMesh />
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default SpinningShape;