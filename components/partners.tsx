"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, BarChart3, Palette } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Increase Foot Traffic",
    description: "Students and faculty flock to convenient charging locations.",
  },
  {
    icon: DollarSign,
    title: "Revenue Share",
    description: "Earn passive income from every borrow at your venue.",
  },
  {
    icon: BarChart3,
    title: "Sustainability Report",
    description: "Track your venue's environmental impact with detailed analytics.",
  },
  {
    icon: Palette,
    title: "Branded Station Skins",
    description: "Customize stations with your venue's branding and colors.",
  },
]

export function Partners() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-gradient-to-b from-nrg-bg to-nrg-bg/80 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-bl from-nrg-secondary/10 to-transparent" />

      <div className="container relative px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-nrg-accent">Partner</span> with NRG
              </h2>
              <p className="text-lg text-nrg-ink/70 mb-6">
                Host an NRG station at your venue and provide essential service to your community while earning revenue.
              </p>
              <Button asChild size="lg">
                <Link href="/#partners">Host an NRG Station</Link>
              </Button>
            </div>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-nrg-accent/20 shrink-0">
                    <benefit.icon className="w-5 h-5 text-nrg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-nrg-ink/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Station Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-gradient">
              <CardContent className="p-8">
                <div className="aspect-[3/4] relative">
                  {/* Station mockup with brand logo placeholder */}
                  <svg
                    viewBox="0 0 300 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Station body */}
                    <rect x="50" y="20" width="200" height="360" rx="20" fill="#1A1A24" stroke="#28F27E" strokeWidth="2" />

                    {/* Partner brand logo placeholder */}
                    <rect x="80" y="50" width="140" height="60" rx="10" fill="#0B0B10" stroke="#6E56CF" strokeWidth="1" />
                    <text x="150" y="75" textAnchor="middle" fill="#6E56CF" fontSize="14" fontWeight="bold">
                      YOUR
                    </text>
                    <text x="150" y="95" textAnchor="middle" fill="#6E56CF" fontSize="14" fontWeight="bold">
                      LOGO
                    </text>

                    {/* NRG branding */}
                    <text x="150" y="135" textAnchor="middle" fill="#28F27E" fontSize="20" fontWeight="bold">
                      Powered by NRG
                    </text>

                    {/* Slot indicators */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <g key={i}>
                        <rect
                          x="70"
                          y={160 + i * 42}
                          width="160"
                          height="32"
                          rx="6"
                          fill="#0B0B10"
                          stroke="#28F27E"
                          strokeWidth="1"
                        />
                        <circle cx="215" cy={176 + i * 42} r="3" fill="#28F27E" className="animate-glow" />
                      </g>
                    ))}

                    {/* Glow effect */}
                    <ellipse cx="150" cy="390" rx="80" ry="10" fill="#28F27E" opacity="0.3" className="animate-pulse-slow" />
                  </svg>
                </div>
                <p className="text-center text-sm text-nrg-ink/70 mt-6">
                  Custom branded station with your logo and colors
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

