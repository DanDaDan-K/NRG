'use client';

import { motion } from 'framer-motion';

export default function BatteryAnimation() {
  return (
    <div className="relative w-32 h-48 mx-auto">
      {/* Battery outline */}
      <svg
        viewBox="0 0 100 150"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Battery cap */}
        <rect x="35" y="0" width="30" height="10" rx="3" fill="#F4F6F8" opacity="0.3" />
        
        {/* Battery body */}
        <rect x="10" y="10" width="80" height="130" rx="8" fill="none" stroke="#F4F6F8" strokeWidth="3" opacity="0.3" />
        
        {/* Animated battery level (draining) */}
        <motion.rect
          x="15"
          y="15"
          width="70"
          height="120"
          rx="5"
          fill="url(#batteryGradient)"
          initial={{ height: 120, y: 15 }}
          animate={{ 
            height: [120, 90, 60, 30, 10],
            y: [15, 45, 75, 105, 125]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <motion.stop
              offset="0%"
              stopColor="#00F3A4"
              animate={{ stopColor: ["#00F3A4", "#FFD700", "#FF6B6B"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.stop
              offset="100%"
              stopColor="#00D88C"
              animate={{ stopColor: ["#00D88C", "#FFA500", "#FF0000"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            />
          </linearGradient>
        </defs>
        
        {/* Warning icon when low */}
        <motion.text
          x="50"
          y="80"
          textAnchor="middle"
          fontSize="40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
        >
          ⚠️
        </motion.text>
      </svg>

      {/* Percentage text */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 text-plugo-text font-bold text-xl"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: [1, 1, 1, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <motion.span
          animate={{ 
            content: ["100%", "75%", "50%", "25%", "5%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 1, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
          >
            100%
          </motion.span>
        </motion.span>
      </motion.div>
    </div>
  );
}

