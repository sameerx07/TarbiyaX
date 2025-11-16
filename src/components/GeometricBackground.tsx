import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const GeometricBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    // Circles
    { type: 'circle', size: 200, x: 10, y: 15, color: 'primary', opacity: 0.1 },
    { type: 'circle', size: 150, x: 80, y: 25, color: 'accent', opacity: 0.08 },
    { type: 'circle', size: 180, x: 60, y: 70, color: 'secondary', opacity: 0.12 },
    { type: 'circle', size: 120, x: 30, y: 60, color: 'primary', opacity: 0.09 },
    { type: 'circle', size: 160, x: 85, y: 80, color: 'accent', opacity: 0.1 },
    
    // Hexagons
    { type: 'hexagon', size: 100, x: 20, y: 40, color: 'secondary', opacity: 0.08 },
    { type: 'hexagon', size: 80, x: 70, y: 50, color: 'primary', opacity: 0.09 },
    { type: 'hexagon', size: 90, x: 45, y: 85, color: 'accent', opacity: 0.07 },
    
    // Triangles
    { type: 'triangle', size: 120, x: 15, y: 75, color: 'accent', opacity: 0.08 },
    { type: 'triangle', size: 100, x: 75, y: 10, color: 'secondary', opacity: 0.09 },
    { type: 'triangle', size: 110, x: 50, y: 30, color: 'primary', opacity: 0.07 },
  ];

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      style={{ background: 'transparent' }}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [0, mouseX.current * (index % 2 === 0 ? 1 : -1), 0],
            y: [0, mouseY.current * (index % 2 === 0 ? 1 : -1), 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {shape.type === 'circle' && (
            <div
              className={`w-full h-full rounded-full bg-${shape.color}`}
              style={{ 
                opacity: shape.opacity,
                background: shape.color === 'primary' 
                  ? 'hsl(var(--primary))' 
                  : shape.color === 'secondary'
                  ? 'hsl(var(--secondary))'
                  : 'hsl(var(--accent))',
              }}
            />
          )}
          {shape.type === 'hexagon' && (
            <div
              className="w-full h-full"
              style={{
                opacity: shape.opacity,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: shape.color === 'primary' 
                  ? 'hsl(var(--primary))' 
                  : shape.color === 'secondary'
                  ? 'hsl(var(--secondary))'
                  : 'hsl(var(--accent))',
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-full h-full"
              style={{
                opacity: shape.opacity,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: shape.color === 'primary' 
                  ? 'hsl(var(--primary))' 
                  : shape.color === 'secondary'
                  ? 'hsl(var(--secondary))'
                  : 'hsl(var(--accent))',
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.03 }}>
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <motion.path
          d="M 10 20 Q 50 50 80 30 T 150 100"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 10 20 Q 50 50 80 30 T 150 100",
              "M 10 25 Q 55 45 85 35 T 155 95",
              "M 10 20 Q 50 50 80 30 T 150 100",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 200 150 Q 300 200 400 180 T 600 250"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 200 150 Q 300 200 400 180 T 600 250",
              "M 205 145 Q 305 195 405 185 T 595 255",
              "M 200 150 Q 300 200 400 180 T 600 250",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
