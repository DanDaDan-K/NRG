"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Leaf, Shield, CreditCard, Database, Recycle, Sun, TreePine } from "lucide-react"

const securityFeatures = [
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Processed via Stripe and Tap with industry-standard encryption.",
  },
  {
    icon: Database,
    title: "Data Minimization",
    description: "We collect only what's needed. No tracking, no ads, no data selling.",
  },
  {
    icon: Shield,
    title: "Privacy-first QR",
    description: "No personal info stored on devices. Session-based authentication.",
  },
]

const sustainabilityFeatures = [
  {
    icon: Recycle,
    title: "Reduce E-waste",
    description: "Shared batteries mean fewer personal power banks ending up in landfills.",
  },
  {
    icon: TreePine,
    title: "End-of-life Recycling",
    description: "All batteries responsibly recycled through certified programs.",
  },
  {
    icon: Sun,
    title: "Solar Stations",
    description: "Optional solar-powered outdoor stations for sustainable energy.",
  },
]

export function SecuritySustainability() {
  return (
    <section className="py-20 md:py-32 bg-nrg-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-nrg-accent/5 to-nrg-secondary/5" />

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-nrg-accent">Secure</span> and{" "}
            <span className="text-nrg-secondary">sustainable</span>
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Your data is protected. Our planet is respected.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Security Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="card-gradient h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-nrg-accent/20">
                    <Lock className="w-6 h-6 text-nrg-accent" />
                  </div>
                  <CardTitle className="text-2xl">Security & Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-nrg-bg/50 shrink-0">
                      <feature.icon className="w-5 h-5 text-nrg-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-nrg-ink/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Lock icon illustration */}
                <div className="flex justify-center pt-4">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="30" y="50" width="60" height="50" rx="8" fill="#1A1A24" stroke="#28F27E" strokeWidth="2" />
                    <path
                      d="M 40 50 V 40 C 40 28 48 20 60 20 C 72 20 80 28 80 40 V 50"
                      stroke="#28F27E"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle cx="60" cy="75" r="8" fill="#28F27E" className="animate-glow" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sustainability Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="card-gradient h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-nrg-secondary/20">
                    <Leaf className="w-6 h-6 text-nrg-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Sustainability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {sustainabilityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-nrg-bg/50 shrink-0">
                      <feature.icon className="w-5 h-5 text-nrg-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-nrg-ink/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Leaf icon illustration */}
                <div className="flex justify-center pt-4">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 60 20 Q 90 20 100 50 Q 100 80 60 100 Q 60 100 60 100 Q 20 80 20 50 Q 30 20 60 20 Z"
                      fill="#6E56CF"
                      opacity="0.3"
                    />
                    <path d="M 60 30 L 60 100" stroke="#6E56CF" strokeWidth="2" />
                    <path d="M 60 50 Q 75 55 80 65" stroke="#6E56CF" strokeWidth="2" fill="none" />
                    <path d="M 60 70 Q 75 75 78 85" stroke="#6E56CF" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

