'use client';

import { motion } from 'framer-motion';

export default function CampusMap() {
  const campuses = [
    { name: 'NYU Abu Dhabi', location: 'Saadiyat', status: 'active', x: 50, y: 50 },
    { name: 'Sorbonne University', location: 'Abu Dhabi', status: 'soon', x: 45, y: 55 },
    { name: 'Zayed University', location: 'Abu Dhabi', status: 'soon', x: 40, y: 52 },
    { name: 'American University of Sharjah', location: 'Sharjah', status: 'soon', x: 70, y: 45 },
    { name: 'Khalifa University', location: 'Abu Dhabi', status: 'soon', x: 55, y: 48 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Map Container */}
      <div className="relative w-full h-96 bg-plugo-dark/30 backdrop-blur-sm rounded-3xl border border-plugo-accent/20 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00F3A4" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* UAE outline (simplified) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <path
            d="M 30 40 Q 35 30, 45 35 Q 55 40, 60 38 L 75 45 L 80 55 L 70 65 L 55 68 L 40 65 L 30 55 Z"
            fill="none"
            stroke="#00F3A4"
            strokeWidth="0.5"
          />
        </svg>

        {/* Campus pins */}
        {campuses.map((campus, idx) => (
          <motion.div
            key={campus.name}
            className="absolute"
            style={{ left: `${campus.x}%`, top: `${campus.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            {/* Pin */}
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.2 }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-full blur-xl ${
                  campus.status === 'active'
                    ? 'bg-plugo-accent animate-pulse-glow'
                    : 'bg-plugo-accent/30'
                }`}
                style={{ width: '30px', height: '30px', margin: '-15px' }}
              />

              {/* Pin dot */}
              <div
                className={`relative w-4 h-4 rounded-full border-2 ${
                  campus.status === 'active'
                    ? 'bg-plugo-accent border-plugo-accent'
                    : 'bg-plugo-dark border-plugo-accent/50'
                }`}
                style={{ margin: '-8px' }}
              />

              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-plugo-dark/90 backdrop-blur-sm border border-plugo-accent/30 rounded-lg px-3 py-2 whitespace-nowrap">
                  <div className="text-plugo-text font-semibold text-sm">{campus.name}</div>
                  <div className="text-plugo-accent text-xs">
                    {campus.status === 'active' ? '🟢 Active' : '🔜 Coming Soon'}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-plugo-accent animate-pulse-glow" />
          <span className="text-plugo-text/60 text-sm">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-plugo-dark border border-plugo-accent/50" />
          <span className="text-plugo-text/60 text-sm">Coming Soon</span>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-plugo-text/80 mt-6 text-lg">
        From Saadiyat to Sharjah — the student energy network
      </p>
    </div>
  );
}

