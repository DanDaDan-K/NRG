'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StorySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function StorySection({ children, className = '', id, delay = 0 }: StorySectionProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
}

