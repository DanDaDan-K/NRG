"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What if I don't return within 1 hour?",
    answer: "No worries! We charge AED 2 per additional hour. You'll receive a notification as you approach your time limit. Fair-use policy applies to ensure availability for everyone.",
  },
  {
    question: "Do I need to install an app?",
    answer: "Nope! NRG is completely app-less. Just scan the station's QR code with your phone's camera, authenticate via web browser, and you're good to go. One less app cluttering your phone.",
  },
  {
    question: "What cables are included?",
    answer: "Every power bank comes with built-in 3-in-1 cables: USB-C, Lightning, and Micro-USB. One device works for iPhone, Android, and most other devices.",
  },
  {
    question: "Is it only for students?",
    answer: "No! While we're campus-focused, we offer plans for students, faculty, and staff. Check our pricing section for plan details tailored to your needs.",
  },
  {
    question: "What if a station is empty?",
    answer: "We monitor station inventory in real-time and redistribute power banks to high-demand areas. You can check availability before heading to a station. If empty, our system will suggest the nearest station with availability.",
  },
  {
    question: "How do hosts/venues partner with NRG?",
    answer: "Venues can apply to host a station through our partner program. You get foot traffic, revenue share, sustainability reporting, and optional custom branding. Click 'Partner with us' to learn more.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-nrg-bg/80 to-nrg-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-nrg-accent">Questions</span>
          </h2>
          <p className="text-lg text-nrg-ink/70 max-w-2xl mx-auto">
            Everything you need to know about NRG. Still have questions? Reach out to us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-lg px-6 border-nrg-accent/20"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-base font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-nrg-ink/80 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

