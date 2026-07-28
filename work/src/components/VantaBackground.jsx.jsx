// /components/VantaBackground.jsx
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import styles from '@/styles/Home.module.css';

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x87CEEB, // light blue (same as your screenshot)
        color: 0xffffff,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        {children}
      </div>
    </div>
  );
}
