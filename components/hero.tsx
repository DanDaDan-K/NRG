"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Globe, Smartphone, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-nrg-bg via-nrg-bg to-nrg-bg/80 py-20 md:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      <div className="container relative px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Borrow. Charge.{" "}
                <span className="text-nrg-accent">Return.</span>{" "}
                <span className="text-nrg-secondary">Repeat.</span>
              </h1>
              <p className="text-lg md:text-xl text-nrg-ink/80 max-w-xl">
                Subscription-based campus power bank network. One borrow a day, up to 1 hour, from any station.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#pricing">Start your subscription</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#how">See how it works</Link>
              </Button>
            </div>

            {/* Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Zap className="w-3 h-3 mr-1" />
                Campus-first
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Leaf className="w-3 h-3 mr-1" />
                ESG-friendly
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Globe className="w-3 h-3 mr-1" />
                Bilingual
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Smartphone className="w-3 h-3 mr-1" />
                App-less QR
              </Badge>
            </motion.div>
          </motion.div>

          {/* Right Column - Station Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <StationIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// SVG Station with glowing slots and floating power bank
function StationIllustration() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        {/* Ambient glow beneath */}
        <ellipse
          cx="200"
          cy="480"
          rx="150"
          ry="20"
          fill="#28F27E"
          opacity="0.3"
          className="animate-pulse-slow"
        />

        {/* Station kiosk body */}
        <rect
          x="100"
          y="100"
          width="200"
          height="350"
          rx="20"
          fill="#1A1A24"
          stroke="#28F27E"
          strokeWidth="2"
        />

        {/* Station screen */}
        <rect
          x="120"
          y="130"
          width="160"
          height="80"
          rx="8"
          fill="#0B0B10"
          stroke="#6E56CF"
          strokeWidth="1"
        />
        <text
          x="200"
          y="165"
          textAnchor="middle"
          fill="#28F27E"
          fontSize="18"
          fontWeight="bold"
        >
          SCAN TO
        </text>
        <text
          x="200"
          y="190"
          textAnchor="middle"
          fill="#28F27E"
          fontSize="18"
          fontWeight="bold"
        >
          BORROW
        </text>

        {/* Power bank slots with glow */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x="130"
              y={240 + i * 45}
              width="140"
              height="35"
              rx="6"
              fill="#0B0B10"
              stroke="#28F27E"
              strokeWidth="1"
              className="glow-ring"
              opacity="0.8"
            />
            {/* Slot indicator light */}
            <circle
              cx="250"
              cy={257 + i * 45}
              r="4"
              fill="#28F27E"
              className="animate-glow"
            />
          </g>
        ))}

        {/* Floating power bank with 3-in-1 cable */}
        <g className="animate-pulse-slow">
          {/* Power bank body */}
          <rect
            x="320"
            y="200"
            width="60"
            height="100"
            rx="8"
            fill="#1A1A24"
            stroke="#28F27E"
            strokeWidth="2"
          />
          
          {/* Battery indicator */}
          <rect x="335" y="220" width="30" height="15" rx="2" fill="#28F27E" opacity="0.8" />
          <rect x="335" y="240" width="30" height="15" rx="2" fill="#28F27E" opacity="0.6" />
          <rect x="335" y="260" width="30" height="15" rx="2" fill="#28F27E" opacity="0.4" />
          
          {/* 3-in-1 cable */}
          <path
            d="M 350 300 Q 360 320 355 340"
            stroke="#CFB994"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="355" cy="340" r="4" fill="#CFB994" />
          
          {/* Cable connectors (USB-C, Lightning, Micro-USB) */}
          <text x="365" y="335" fill="#CFB994" fontSize="10">C L M</text>
        </g>

        {/* Lightning bolt accent */}
        <path
          d="M 200 50 L 190 70 L 200 70 L 195 85 L 210 65 L 200 65 Z"
          fill="#28F27E"
          className="animate-glow"
        />
      </svg>
    </div>
  )
}

