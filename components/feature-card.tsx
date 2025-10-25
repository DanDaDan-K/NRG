"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Cable, MapPin, Globe, Leaf, BarChart3, LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: QrCode,
    title: "App-less QR Flow",
    description: "No downloads. No sign-ups at the kiosk. Scan, authenticate via web, borrow. Done in seconds.",
  },
  {
    icon: Cable,
    title: "3-in-1 Cables Built-in",
    description: "Every power bank includes USB-C, Lightning, and Micro-USB. One device works for everyone.",
  },
  {
    icon: MapPin,
    title: "Campus-wide Returns",
    description: "Borrowed at the library? Return at the student center. Total flexibility across all stations.",
  },
  {
    icon: Globe,
    title: "Bilingual Interface",
    description: "Full support for English and Arabic. Seamless experience for all students.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Shared batteries reduce e-waste. End-of-life recycling program. Optional solar stations.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics for Hosts",
    description: "Partner venues get real-time insights on foot traffic, usage patterns, and revenue share.",
  },
]

export function FeatureCard() {
  return (
    <section id="features" className="py-20 md:py-32 bg-nrg-bg">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="text-nrg-accent">campus life</span>
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Every feature designed to make borrowing power simple, fast, and accessible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-gradient h-full hover:border-nrg-accent/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-nrg-accent/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-nrg-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-nrg-ink/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Battery Health Meter Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <BatteryMeter />
        </motion.div>
      </div>
    </section>
  )
}

// Animated Battery Health Meter SVG
function BatteryMeter() {
  return (
    <div className="w-full max-w-md p-8 card-gradient rounded-2xl">
      <h3 className="text-center text-lg font-semibold mb-6">Battery Health Monitoring</h3>
      <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Battery outline */}
        <rect x="50" y="40" width="200" height="80" rx="10" stroke="#28F27E" strokeWidth="3" fill="#0B0B10" />
        <rect x="250" y="60" width="15" height="40" rx="5" fill="#28F27E" />

        {/* Battery level bars */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={70 + i * 45}
            y="55"
            width="35"
            height="50"
            rx="4"
            fill="#28F27E"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            style={{ transformOrigin: "bottom" }}
            opacity={1 - i * 0.15}
          />
        ))}

        {/* Percentage text */}
        <text x="150" y="145" textAnchor="middle" fill="#28F27E" fontSize="20" fontWeight="bold">
          80% Health
        </text>
      </svg>
      <p className="text-center text-sm text-nrg-ink/70 mt-4">
        All power banks maintained at optimal charge cycles for longevity.
      </p>
    </div>
  )
}

