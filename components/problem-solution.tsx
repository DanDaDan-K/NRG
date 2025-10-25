"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, BatteryWarning, Cable, Weight, Zap, Repeat, QrCode, MapPin } from "lucide-react"

const problems = [
  {
    icon: BatteryWarning,
    title: "Battery Anxiety",
    description: "Your phone dying in the middle of class or during group work is stressful.",
  },
  {
    icon: AlertCircle,
    title: "Scarce Outlets",
    description: "Fighting for charging spots in libraries and common areas wastes time.",
  },
  {
    icon: Weight,
    title: "Heavy Power Banks",
    description: "Carrying your own power bank adds weight and another thing to remember to charge.",
  },
  {
    icon: Cable,
    title: "Forgetting Cables",
    description: "Left your cable at home? Wrong cable for your friend's phone? Frustrating.",
  },
]

const solutions = [
  {
    icon: QrCode,
    title: "Scan & Go",
    description: "No app needed. Just scan the station QR code and borrow instantly.",
  },
  {
    icon: Zap,
    title: "Charge Anywhere",
    description: "Keep your phone powered while you move between classes and study spots.",
  },
  {
    icon: MapPin,
    title: "Return Anywhere",
    description: "Drop off at any NRG station on campus when you're done. Total flexibility.",
  },
  {
    icon: Repeat,
    title: "Predictable Cost",
    description: "One subscription. No per-minute stress. Fair overtime rates if you need more time.",
  },
]

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-32 bg-nrg-bg relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-nrg-secondary/5 to-transparent" />
      
      <div className="container relative px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We get it.{" "}
                <span className="text-nrg-accent">Campus life is busy.</span>
              </h2>
              <p className="text-nrg-ink/70 text-lg">
                Dead batteries shouldn&apos;t hold you back from collaboration, creativity, or just staying connected.
              </p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-nrg-bg/50 border-red-500/30">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <problem.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{problem.title}</h3>
                        <p className="text-sm text-nrg-ink/70">{problem.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-nrg-accent">NRG</span> solves this.
              </h2>
              <p className="text-nrg-ink/70 text-lg">
                A simple, affordable subscription that keeps you powered all semester.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <Card className="card-gradient">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="p-2 rounded-lg bg-nrg-accent/20">
                        <solution.icon className="w-5 h-5 text-nrg-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{solution.title}</h3>
                        <p className="text-sm text-nrg-ink/70">{solution.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

