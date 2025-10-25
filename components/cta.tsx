"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-nrg-bg to-nrg-bg/80 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-nrg-accent/10 via-transparent to-nrg-secondary/10" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Lightning bolt accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-full bg-nrg-accent/20 glow-ring">
              <Zap className="w-12 h-12 text-nrg-accent" />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to bring <span className="text-nrg-accent">NRG</span> to your campus?
            </h2>
            <p className="text-lg md:text-xl text-nrg-ink/70 max-w-2xl mx-auto">
              Join the movement to keep students powered, productive, and connected.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-base">
              <Link href="#pricing">
                <Zap className="w-4 h-4 mr-2" />
                Start your subscription
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="#partners">Partner with us</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-nrg-ink/60"
          >
            Trusted by students at NYU Abu Dhabi • Expanding across the UAE
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

