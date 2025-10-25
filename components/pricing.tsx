"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "NRG Student Basic",
    price: "15",
    description: "Perfect for daily campus life",
    features: [
      "1 borrow per day",
      "Up to 1 hour per borrow",
      "3-in-1 cables included",
      "Return at any station",
      "Bilingual support",
      "AED 2/hour overtime",
    ],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "NRG+",
    price: "25",
    description: "For power users",
    features: [
      "2 borrows per day",
      "Up to 2 hours each",
      "Priority station access",
      "3-in-1 cables included",
      "Return at any station",
      "Bilingual support",
      "AED 2/hour overtime",
    ],
    cta: "Get NRG+",
    popular: true,
  },
  {
    name: "Faculty",
    price: "30",
    description: "Built for educators",
    features: [
      "1 borrow per day",
      "Up to 2 hours per borrow",
      "Priority support",
      "3-in-1 cables included",
      "Return at any station",
      "Bilingual support",
      "Dedicated helpline",
    ],
    cta: "Choose Faculty",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-nrg-bg/80 to-nrg-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-nrg-accent/5 via-transparent to-nrg-secondary/5" />

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-nrg-accent">predictable</span> pricing
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Choose the plan that fits your campus rhythm. All plans include fair-use access and station availability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" variant="default">
                  Most Popular
                </Badge>
              )}
              <Card className={`h-full ${plan.popular ? "border-nrg-accent shadow-lg shadow-nrg-accent/20" : "card-gradient"}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-nrg-ink/70">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-nrg-accent">AED {plan.price}</span>
                    <span className="text-nrg-ink/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-nrg-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-nrg-ink/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <Link href="#pricing">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-nrg-ink/60 max-w-3xl mx-auto"
        >
          * Overtime charged at AED 2/hour after included time. Fair-use policy and station availability apply. 
          All prices in AED (United Arab Emirates Dirham).
        </motion.p>
      </div>
    </section>
  )
}

