import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function useSpringPointer(pointer, enabled) {
  const spring = useRef({ x: 0, y: 0, vx: 0, vy: 0 });

  useFrame((state, delta) => {
    const next = spring.current;
    const targetX = enabled ? pointer.current.x : Math.sin(state.clock.elapsedTime * 0.55) * 0.18;
    const targetY = enabled ? pointer.current.y : Math.cos(state.clock.elapsedTime * 0.42) * 0.12;
    const stiffness = 14;
    const damping = 7.5;

    next.vx += (targetX - next.x) * stiffness * delta;
    next.vy += (targetY - next.y) * stiffness * delta;
    next.vx *= Math.max(0, 1 - damping * delta);
    next.vy *= Math.max(0, 1 - damping * delta);
    next.x += next.vx;
    next.y += next.vy;
  });

  return spring;
}

function DustField() {
  const pointsRef = useRef();
  const particles = useMemo(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 4.2;
      positions[index * 3 + 1] = Math.random() * -3.2 - 0.25;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 1.8;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.035;
    pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.035;
  });

  return (
    <points ref={pointsRef} position={[0, 0.25, 0.2]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d3a35d" size={0.018} transparent opacity={0.28} depthWrite={false} />
    </points>
  );
}

function LightCone({ spring }) {
  const coneRef = useRef();

  useFrame(() => {
    if (!coneRef.current) return;
    coneRef.current.rotation.z = THREE.MathUtils.lerp(coneRef.current.rotation.z, -spring.current.x * 0.15, 0.04);
    coneRef.current.rotation.x = THREE.MathUtils.lerp(coneRef.current.rotation.x, spring.current.y * 0.08, 0.04);
  });

  return (
    <mesh ref={coneRef} position={[0, -1.65, 0]} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[2.35, 3.5, 48, 1, true]} />
      <meshBasicMaterial color="#d3a35d" transparent opacity={0.09} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function PendantLamp({ pointer, active }) {
  const groupRef = useRef();
  const lightRef = useRef();
  const targetRef = useRef();
  const spring = useSpringPointer(pointer, active);

  useFrame(() => {
    if (!groupRef.current || !lightRef.current || !targetRef.current) return;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, spring.current.y * 0.34, 0.055);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -spring.current.x * 0.34, 0.055);
    targetRef.current.position.set(spring.current.x * 2.3, -2.5, spring.current.y * 1.05);
    lightRef.current.target = targetRef.current;
  });

  return (
    <group position={[0, 1.1, 0]}>
      <object3D ref={targetRef} position={[0, -2.5, 0]} />
      <LightCone spring={spring} />
      <group ref={groupRef}>
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
            <mesh position={[0, -0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.46, 0.026, 12, 48]} />
              <meshStandardMaterial color="#d3a35d" metalness={0.85} roughness={0.28} />
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
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
            />
          </group>
        </Float>
      </group>
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
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#070707']} />
        <ambientLight intensity={0.18} />
        <PendantLamp pointer={pointer} active={active} />
        <DustField />
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
