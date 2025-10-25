"use client"

import { motion } from "framer-motion"
import { CreditCard, QrCode, Battery, RotateCcw } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    number: "01",
    title: "Subscribe",
    description: "Choose your plan starting at AED 15/month. Simple pricing, no hidden fees.",
  },
  {
    icon: QrCode,
    number: "02",
    title: "Scan station QR",
    description: "Find an NRG station. Open your camera and scan the QR code. No app required.",
  },
  {
    icon: Battery,
    number: "03",
    title: "Borrow power bank",
    description: "Grab 1 power bank per day, use for up to 1 hour. Includes 3-in-1 cables.",
  },
  {
    icon: RotateCcw,
    number: "04",
    title: "Return anywhere",
    description: "Drop it off at any NRG station on campus when you're done. Easy.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-32 bg-gradient-to-b from-nrg-bg to-nrg-bg/80 relative overflow-hidden">
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
            How <span className="text-nrg-accent">NRG</span> Works
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Four simple steps to never worry about battery life on campus again.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated timeline path (hidden on mobile) */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 -z-10"
            style={{ height: "2px" }}
          >
            <motion.line
              x1="10%"
              y1="1"
              x2="90%"
              y2="1"
              stroke="#28F27E"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 right-1/2 translate-x-1/2 md:translate-x-0 md:right-auto md:left-0 w-12 h-12 rounded-full bg-nrg-accent/20 border-2 border-nrg-accent flex items-center justify-center font-bold text-nrg-accent text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nrg-accent/20 to-nrg-secondary/20 border border-nrg-accent/30 flex items-center justify-center mb-6 glow-ring">
                  <step.icon className="w-9 h-9 text-nrg-accent" />
                  {/* Pulsing node */}
                  <div className="absolute w-3 h-3 bg-nrg-accent rounded-full animate-glow" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-nrg-ink/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

