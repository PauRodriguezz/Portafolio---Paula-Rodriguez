import { motion } from 'motion/react';

export default function FloatingCircles() {
  // Configuración de círculos con diferentes posiciones y animaciones
  const circles = [
    { size: 8, x: '10%', delay: 0, duration: 15 },
    { size: 12, x: '20%', delay: 2, duration: 18 },
    { size: 6, x: '35%', delay: 4, duration: 12 },
    { size: 10, x: '50%', delay: 1, duration: 20 },
    { size: 8, x: '65%', delay: 3, duration: 16 },
    { size: 14, x: '75%', delay: 5, duration: 14 },
    { size: 7, x: '85%', delay: 2.5, duration: 17 },
    { size: 9, x: '95%', delay: 4.5, duration: 19 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#6695a5] opacity-10"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            bottom: -20,
          }}
          animate={{
            y: [-20, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.2, 0.2, 0.2, 0.2, 0],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}