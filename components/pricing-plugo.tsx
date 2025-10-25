'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingPlugo() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'hourly'>('monthly');

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Subscription',
      price: 'AED 35',
      period: '/month',
      features: [
        'Gives 40 hours of charging per week',
        'Use whenever you want during the month',
        'Ideal for daily campus users',
        'No additional fees',
      ],
      icon: '🔋',
    },
    {
      id: 'hourly',
      name: 'Hourly Rate',
      price: 'AED 3',
      period: '/hour',
      features: [
        'Pay only for what you use',
        'Scan, charge, return, and pay automatically',
        'Perfect for occasional use',
        'No commitment required',
      ],
      icon: '⚡',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-plugo-dark/50 backdrop-blur-sm rounded-full p-1.5 flex gap-2 border border-plugo-accent/20">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedPlan === 'monthly'
                ? 'bg-plugo-accent text-plugo-dark'
                : 'text-plugo-text/60 hover:text-plugo-text'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan('hourly')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedPlan === 'hourly'
                ? 'bg-plugo-accent text-plugo-dark'
                : 'text-plugo-text/60 hover:text-plugo-text'
            }`}
          >
            Hourly
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all ${
              selectedPlan === plan.id
                ? 'bg-plugo-accent/10 border-2 border-plugo-accent shadow-[0_0_40px_rgba(0,243,164,0.3)]'
                : 'bg-plugo-dark/30 border border-plugo-text/10 hover:border-plugo-accent/30'
            }`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{plan.icon}</div>

            {/* Plan name */}
            <h3 className="text-2xl font-bold text-plugo-text mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-bold text-plugo-accent">{plan.price}</span>
              <span className="text-plugo-text/60 text-xl">{plan.period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-plugo-text/80">
                  <span className="text-plugo-accent mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`w-full py-4 rounded-xl font-semibold transition-all ${
                selectedPlan === plan.id
                  ? 'bg-plugo-accent text-plugo-dark hover:bg-plugo-accent/90'
                  : 'bg-plugo-dark/50 text-plugo-text border border-plugo-accent/20 hover:border-plugo-accent'
              }`}
            >
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Fine print */}
      <p className="text-center text-plugo-text/50 mt-12 text-lg">
        No hidden fees. No deposits. Just plug and go.
      </p>
    </div>
  );
}

