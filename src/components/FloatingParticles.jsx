import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_TYPES = ['star', 'cloud', 'heart', 'bubble'];

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate unique particles with stable random coordinates
    const list = Array.from({ length: 18 }).map((_, i) => {
      const type = PARTICLE_TYPES[i % PARTICLE_TYPES.length];
      const size = type === 'cloud' ? 45 + Math.random() * 30 : 15 + Math.random() * 20;
      return {
        id: i,
        type,
        size,
        x: Math.random() * 100, // percentage of viewport width
        y: Math.random() * 100, // percentage of viewport height
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 25,
        driftX: -30 + Math.random() * 60,
        driftY: -40 - Math.random() * 50,
        rotate: Math.random() * 360,
      };
    });
    setParticles(list);
  }, []);

  const renderSVG = (type) => {
    switch (type) {
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-300" style={{ color: '#FFD700', filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.4))' }}>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-80" style={{ color: '#FFF' }}>
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        );
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-pink-200" style={{ color: '#FFC0CB' }}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'bubble':
      default:
        return (
          <div 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid rgba(222, 93, 131, 0.15)',
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(222, 93, 131, 0.05))',
            }}
          />
        );
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.type === 'cloud' ? 0.35 : 0.5,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            rotate: [p.rotate, p.rotate + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        >
          {renderSVG(p.type)}
        </motion.div>
      ))}
    </div>
  );
}
