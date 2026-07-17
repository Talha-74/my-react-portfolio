import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function PendantLamp({ pointer, active }) {
  const groupRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    if (!groupRef.current || !lightRef.current) return;

    const idleX = Math.sin(state.clock.elapsedTime * 0.55) * 0.08;
    const idleZ = Math.cos(state.clock.elapsedTime * 0.42) * 0.06;
    const targetX = active ? pointer.current.y * 0.32 : idleX;
    const targetZ = active ? -pointer.current.x * 0.32 : idleZ;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.045);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.045);
    lightRef.current.target.position.set(pointer.current.x * 2.2, -2.35, pointer.current.y * 1.1);
    lightRef.current.target.updateMatrixWorld();
  });

  return (
    <group ref={groupRef} position={[0, 1.1, 0]}>
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 2.8, 16]} />
        <meshStandardMaterial color="#4a4037" metalness={0.7} roughness={0.45} />
      </mesh>
      <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.08}>
        <group position={[0, 0.2, 0]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.74, 0.44, 0.62, 48, 1, true]} />
            <meshStandardMaterial color="#15110d" metalness={0.75} roughness={0.34} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, -0.32, 0]}>
            <sphereGeometry args={[0.2, 32, 16]} />
            <meshStandardMaterial emissive="#d3a35d" emissiveIntensity={1.6} color="#fff1c5" roughness={0.2} />
          </mesh>
          <spotLight
            ref={lightRef}
            castShadow
            color="#d3a35d"
            intensity={7.5}
            angle={0.46}
            penumbra={0.92}
            distance={9}
            position={[0, -0.18, 0]}
          />
        </group>
      </Float>
    </group>
  );
}

function LampScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const shellRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const handlePointerMove = (event) => {
      const rect = shellRef.current?.getBoundingClientRect();
      if (!rect) return;
      pointer.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.current.y = -(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      setActive(true);
    };

    const current = shellRef.current;
    const handlePointerLeave = () => setActive(false);

    current?.addEventListener('pointermove', handlePointerMove);
    current?.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      current?.removeEventListener('pointermove', handlePointerMove);
      current?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const node = shellRef.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lamp-scene" ref={shellRef} aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.15, 5.2], fov: 38 }}
        frameloop={visible ? 'always' : 'demand'}
      >
        <color attach="background" args={['#070707']} />
        <ambientLight intensity={0.18} />
        <PendantLamp pointer={pointer} active={active} />
        <mesh receiveShadow position={[0, -2.6, -1.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[7, 4]} />
          <shadowMaterial opacity={0.32} />
        </mesh>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

export default LampScene;
