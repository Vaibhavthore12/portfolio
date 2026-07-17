'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const icons = [
  { Icon: FaReact, color: '#61DAFB', x: '10%', y: '20%', delay: 0, size: 32 },
  { Icon: FaNodeJs, color: '#339933', x: '85%', y: '15%', delay: 0.5, size: 28 },
  { Icon: SiMongodb, color: '#47A248', x: '75%', y: '75%', delay: 1, size: 26 },
  { Icon: FaJs, color: '#F7DF1E', x: '15%', y: '70%', delay: 1.5, size: 24 },
  { Icon: SiNextdotjs, color: '#ffffff', x: '90%', y: '45%', delay: 0.3, size: 30 },
  { Icon: SiTypescript, color: '#3178C6', x: '5%', y: '45%', delay: 0.8, size: 22 },
  { Icon: FaBootstrap, color: '#7952B3', x: '60%', y: '85%', delay: 1.2, size: 24 },
  { Icon: SiTailwindcss, color: '#06B6D4', x: '30%', y: '90%', delay: 0.7, size: 22 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-15"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            y: [0, -15, 5, -10, 0],
            x: [0, 5, -5, 3, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            opacity: { delay: item.delay, duration: 0.8 },
            scale: { delay: item.delay, duration: 0.8 },
            y: { duration: 8 + i, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 10 + i, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 12 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <item.Icon size={item.size} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
}
