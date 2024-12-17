import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AnimatedBackground() {
  const points = React.useMemo(() => {
    const p = new Array(5000).fill(0).map((v) => (
      (Math.random() - 0.5) * 10
    ));
    return new Float32Array(p);
  }, []);

  const ref = React.useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#5b8bf7"
        sizeAttenuation
        transparent={false}
      />
    </points>
  );
}