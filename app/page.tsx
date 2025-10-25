'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import StorySection from '@/components/story-section';
import PricingPlugo from '@/components/pricing-plugo';
import CampusMap from '@/components/campus-map';
import PartnerModal from '@/components/partner-modal';
import BatteryAnimation from '@/components/battery-animation';
import DemoPlugo from '@/components/demo-plugo';

export default function Home() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  return (
    <main className="bg-plugo-dark text-plugo-text overflow-x-hidden">
      {/* Header/Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-plugo-dark/70 border-b border-plugo-accent/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/plugo-logo.svg"
              alt="PLUGO"
              width={120}
              height={32}
              priority
            />
          </motion.div>
          
          <motion.div
            className="flex gap-8 items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#pricing" className="text-plugo-text/70 hover:text-plugo-accent transition-colors">
              Pricing
            </a>
            <a href="#map" className="text-plugo-text/70 hover:text-plugo-accent transition-colors">
              Locations
            </a>
            <a href="#demo" className="text-plugo-text/70 hover:text-plugo-accent transition-colors">
              Demo
            </a>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-6 py-2 bg-plugo-accent text-plugo-dark rounded-full font-semibold hover:bg-plugo-accent/90 transition-colors"
            >
              Partner
            </button>
          </motion.div>
        </nav>
      </header>

      {/* Chapter 1 — The Problem: Battery Anxiety */}
      <StorySection className="bg-gradient-to-b from-plugo-dark via-plugo-dark/95 to-plugo-dark">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-6xl md:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every day, thousands of students
            <br />
            <span className="text-plugo-text/40">run out of charge</span>
            <br />
            <span className="text-plugo-accent">halfway through class.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="py-12"
          >
            <BatteryAnimation />
          </motion.div>

          <motion.div
            className="space-y-4 text-xl md:text-2xl text-plugo-text/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>They scramble for outlets.</p>
            <p>Borrow cables.</p>
            <p>Miss messages. Miss moments.</p>
          </motion.div>

          <motion.a
            href="#solution"
            className="inline-block mt-12 text-plugo-accent text-xl font-semibold hover:text-plugo-accent/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Let&apos;s fix that. ↓
          </motion.a>
        </div>
      </StorySection>

      {/* Chapter 2 — The Spark: PLUGO */}
      <StorySection id="solution" className="bg-gradient-to-b from-plugo-dark to-plugo-dark/90">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 blur-3xl bg-plugo-accent/30 animate-pulse-glow" />
            <Image
              src="/plugo-logo.svg"
              alt="PLUGO"
              width={300}
              height={80}
              className="relative mx-auto"
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Power that moves with you.
          </motion.h2>

          <motion.div
            className="space-y-6 text-xl md:text-2xl text-plugo-text/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>PLUGO is the first student-built campus charging network.</p>
            <p>Grab a power bank anytime. Use it freely. Return anywhere.</p>
            <p className="text-plugo-accent font-semibold">
              Choose how you plug in — by time or by subscription.
            </p>
          </motion.div>

          <motion.a
            href="#how-it-works"
            className="inline-block text-plugo-text/60 hover:text-plugo-accent transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            See how it works ↓
          </motion.a>
        </div>
      </StorySection>

      {/* Chapter 3 — How PLUGO Works */}
      <StorySection id="how-it-works" className="bg-plugo-dark/95">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How PLUGO Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: '📍',
                title: 'Find a station',
                description: 'Locate nearby PLUGO stations via map or QR code',
              },
              {
                step: '02',
                icon: '📱',
                title: 'Scan and take',
                description: 'Scan QR code and grab a fully charged power bank',
              },
              {
                step: '03',
                icon: '⚡',
                title: 'Charge and move',
                description: 'Keep your phone charged while you move freely',
              },
              {
                step: '04',
                icon: '🔄',
                title: 'Return anywhere',
                description: 'Drop it at any PLUGO station on campus',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                className="relative p-6 rounded-2xl bg-plugo-dark/50 backdrop-blur-sm border border-plugo-accent/10 hover:border-plugo-accent/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="text-plugo-accent/30 text-4xl font-bold mb-4">{item.step}</div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-plugo-text mb-2">{item.title}</h3>
                <p className="text-plugo-text/60">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated flow */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-4 text-plugo-accent/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-6xl">📍</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              →
            </motion.span>
            <span className="text-6xl">🔋</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-4xl"
            >
              →
            </motion.span>
            <span className="text-6xl">⚡</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-4xl"
            >
              →
            </motion.span>
            <span className="text-6xl">🔄</span>
          </motion.div>
        </div>
      </StorySection>

      {/* Chapter 4 — Two Ways to Power Up */}
      <StorySection id="pricing" className="bg-gradient-to-b from-plugo-dark/90 to-plugo-dark">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Two Ways to Power Up
            </h2>
            <p className="text-xl text-plugo-text/60">
              Choose the plan that fits your campus life
            </p>
          </motion.div>

          <PricingPlugo />
        </div>
      </StorySection>

      {/* Chapter 5 — Behind the Simplicity */}
      <StorySection className="bg-plugo-dark/95">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Behind the Simplicity
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-plugo-text/80 leading-relaxed">
                Each PLUGO station holds <span className="text-plugo-accent font-semibold">12 portable chargers</span>,
                connected via smart locks.
              </p>
              <p className="text-xl text-plugo-text/80 leading-relaxed">
                <span className="text-plugo-accent font-semibold">IoT sensors</span> track rentals in real time,
                powered by clean electricity.
              </p>
              <p className="text-xl text-plugo-text/80 leading-relaxed">
                Our web app handles subscriptions, QR scans, and payments through{' '}
                <span className="text-plugo-accent font-semibold">Stripe UAE</span>.
              </p>
              <div className="pt-6 border-t border-plugo-accent/20">
                <p className="text-plugo-accent font-semibold text-lg">
                  Built by students at NYU Abu Dhabi.
                </p>
                <p className="text-plugo-text/60">
                  Growing across UAE universities.
                </p>
              </div>
            </motion.div>

            {/* Right: Schematic */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-plugo-dark/50 backdrop-blur-sm border border-plugo-accent/20">
                <svg viewBox="0 0 200 300" className="w-full h-auto">
                  {/* Station body */}
                  <rect x="40" y="20" width="120" height="260" rx="8" fill="none" stroke="#00F3A4" strokeWidth="2" />
                  
                  {/* Screen */}
                  <rect x="55" y="35" width="90" height="50" rx="4" fill="#00F3A4" opacity="0.2" />
                  <text x="100" y="65" textAnchor="middle" fill="#00F3A4" fontSize="12">PLUGO</text>
                  
                  {/* Slots (12 chargers) */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const row = Math.floor(i / 3);
                    const col = i % 3;
                    return (
                      <motion.rect
                        key={i}
                        x={55 + col * 30}
                        y={100 + row * 40}
                        width="25"
                        height="30"
                        rx="3"
                        fill="#00F3A4"
                        opacity="0.3"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                      />
                    );
                  })}
                  
                  {/* IoT indicator */}
                  <motion.circle
                    cx="100"
                    cy="265"
                    r="8"
                    fill="#00F3A4"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text x="100" y="293" textAnchor="middle" fill="#00F3A4" fontSize="10">IoT</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </StorySection>

      {/* Chapter 6 — Where We Are */}
      <StorySection id="map" className="bg-gradient-to-b from-plugo-dark to-plugo-dark/90">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Where We Are
          </motion.h2>

          <motion.p
            className="text-xl text-plugo-text/60 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Expanding across UAE universities
          </motion.p>

          <CampusMap />
        </div>
      </StorySection>

      {/* Chapter 7 — Why It Matters */}
      <StorySection className="bg-gradient-to-b from-plugo-dark/90 via-[#0A3D2E] to-plugo-dark">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why It Matters
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: '🔄',
                title: 'Less E-Waste',
                description: 'Shared power means less e-waste. One power bank serves many.',
              },
              {
                icon: '🌱',
                title: 'Smaller Footprint',
                description: 'Fewer personal batteries = smaller environmental footprint.',
              },
              {
                icon: '♻️',
                title: 'Responsible',
                description: 'PLUGO reuses, recycles, and recharges responsibly.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-plugo-accent">{item.title}</h3>
                <p className="text-plugo-text/70 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-8 py-4 bg-transparent border-2 border-plugo-accent text-plugo-accent rounded-xl font-semibold hover:bg-plugo-accent hover:text-plugo-dark transition-all text-lg"
            >
              Join the green charge → Partner with PLUGO
            </button>
          </motion.div>
        </div>
      </StorySection>

      {/* Chapter 8 — Vision & Call-to-Action */}
      <StorySection className="bg-gradient-to-b from-plugo-dark to-plugo-dark/95">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              We started PLUGO because
              <br />
              <span className="text-plugo-accent">running out of power</span>
              <br />
              means missing out on life.
            </h2>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-plugo-text/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our mission: make energy{' '}
            <span className="text-plugo-accent font-semibold">shareable</span>,{' '}
            <span className="text-plugo-accent font-semibold">sustainable</span>, and{' '}
            <span className="text-plugo-accent font-semibold">student-led</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#pricing"
              className="px-10 py-5 bg-plugo-accent text-plugo-dark rounded-xl font-bold text-lg hover:bg-plugo-accent/90 transition-all shadow-[0_0_30px_rgba(0,243,164,0.3)]"
            >
              Get PLUGO
            </a>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-10 py-5 bg-transparent border-2 border-plugo-accent text-plugo-accent rounded-xl font-bold text-lg hover:bg-plugo-accent hover:text-plugo-dark transition-all"
            >
              Partner with us
            </button>
          </motion.div>
        </div>
      </StorySection>

      {/* Chapter 9 — Interactive Demo */}
      <StorySection id="demo" className="bg-gradient-to-b from-plugo-dark/95 to-plugo-dark">
        <div className="max-w-6xl mx-auto w-full">
          {/* Narrative Transition */}
          <motion.div
            className="text-center mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              And now, see it in action.
            </h2>
            <p className="text-xl md:text-2xl text-plugo-text/70 max-w-3xl mx-auto leading-relaxed">
              Experience how PLUGO feels on your own screen —
              <br />
              <span className="text-plugo-accent font-semibold">
                the same simple flow our users will have on campus.
              </span>
            </p>
          </motion.div>

          {/* Demo Component */}
          <DemoPlugo />

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-plugo-text/60 text-lg">
              Like what you see? Let&apos;s bring PLUGO to your campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="px-8 py-4 bg-plugo-accent text-plugo-dark rounded-xl font-semibold hover:bg-plugo-accent/90 transition-all"
              >
                View Pricing
              </a>
              <button
                onClick={() => setIsPartnerModalOpen(true)}
                className="px-8 py-4 bg-transparent border-2 border-plugo-accent text-plugo-accent rounded-xl font-semibold hover:bg-plugo-accent hover:text-plugo-dark transition-all"
              >
                Become a Partner
              </button>
            </div>
          </motion.div>
        </div>
      </StorySection>

      {/* Footer */}
      <footer className="border-t border-plugo-accent/10 bg-plugo-dark/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Image
                src="/plugo-logo.svg"
                alt="PLUGO"
                width={100}
                height={27}
              />
              <p className="text-plugo-text/50 text-sm mt-2">Power that moves with you</p>
            </div>
            
            <div className="flex gap-8 text-plugo-text/60">
              <a href="#pricing" className="hover:text-plugo-accent transition-colors">Pricing</a>
              <a href="#map" className="hover:text-plugo-accent transition-colors">Locations</a>
              <a href="#demo" className="hover:text-plugo-accent transition-colors">Demo</a>
              <button onClick={() => setIsPartnerModalOpen(true)} className="hover:text-plugo-accent transition-colors">
                Partner
              </button>
            </div>
            
            <div className="text-plugo-text/50 text-sm">
              © 2025 PLUGO. Built at NYU Abu Dhabi.
            </div>
          </div>
        </div>
      </footer>

      {/* Partner Modal */}
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </main>
  );
}
