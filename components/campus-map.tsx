"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const campuses = [
  { name: "NYU Abu Dhabi", status: "live", x: "45%", y: "60%" },
  { name: "Sorbonne Abu Dhabi", status: "planned", x: "47%", y: "65%" },
  { name: "Khalifa University", status: "planned", x: "50%", y: "58%" },
  { name: "Zayed University", status: "planned", x: "65%", y: "55%" },
  { name: "AUS / AUD", status: "planned", x: "85%", y: "50%" },
]

export function CampusMap() {
  return (
    <section id="campuses" className="py-20 md:py-32 bg-nrg-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powering <span className="text-nrg-accent">universities</span> across the UAE
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Launching at NYU Abu Dhabi. Expanding to universities across the Emirates.
          </p>
        </motion.div>

        {/* UAE Map with Campus Pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full aspect-[16/10] card-gradient rounded-2xl p-8 md:p-12">
            <UAEMapSVG />

            {/* Campus pins */}
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ left: campus.x, top: campus.y, transform: "translate(-50%, -50%)" }}
              >
                {/* Pin */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  campus.status === "live" 
                    ? "bg-nrg-accent shadow-lg shadow-nrg-accent/50" 
                    : "bg-nrg-secondary/60"
                } transition-transform group-hover:scale-125`}>
                  <MapPin className="w-5 h-5 text-nrg-bg" />
                  {campus.status === "live" && (
                    <span className="absolute w-8 h-8 rounded-full bg-nrg-accent animate-ping opacity-75" />
                  )}
                </div>

                {/* Hover card */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-nrg-bg border border-nrg-accent/30 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                    <p className="text-sm font-semibold">{campus.name}</p>
                    <Badge 
                      variant={campus.status === "live" ? "default" : "secondary"}
                      className="text-xs mt-1"
                    >
                      {campus.status === "live" ? "Live" : "Planned"}
                    </Badge>
                  </div>
                  {/* Arrow */}
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-nrg-accent/30 absolute top-full left-1/2 -translate-x-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-nrg-accent" />
            <span className="text-sm text-nrg-ink/70">Live</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-nrg-secondary/60" />
            <span className="text-sm text-nrg-ink/70">Planned</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Simplified UAE map SVG with dotted outline
function UAEMapSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-30"
    >
      {/* Dotted UAE outline (simplified) */}
      <path
        d="M 100 250 L 120 220 L 180 200 L 250 190 L 320 200 L 380 220 L 450 240 L 500 280 L 480 320 L 420 340 L 350 345 L 280 340 L 200 330 L 140 300 L 100 270 Z"
        stroke="#28F27E"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="transparent"
      />
      
      {/* Abu Dhabi region highlight */}
      <circle cx="270" cy="250" r="80" fill="#28F27E" opacity="0.05" />
      
      {/* Dubai/Sharjah region highlight */}
      <circle cx="450" cy="230" r="60" fill="#6E56CF" opacity="0.05" />
    </svg>
  )
}

