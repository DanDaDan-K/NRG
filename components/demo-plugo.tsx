'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type Phase = 'idle' | 'plan' | 'active' | 'returned';
type Plan = 'monthly' | 'hourly' | null;

export default function DemoPlugo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [plan, setPlan] = useState<Plan>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [weeklyUsage, setWeeklyUsage] = useState<number>(12); // Mock usage for monthly plan

  // Timer effect
  useEffect(() => {
    if (phase === 'active' && startTime) {
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);
        setElapsed(elapsedSeconds);

        // Calculate cost for hourly plan
        if (plan === 'hourly') {
          const hours = elapsedSeconds / 3600;
          setCost(parseFloat((hours * 3).toFixed(2)));
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [phase, startTime, plan]);

  const handleScan = () => {
    setPhase('plan');
  };

  const handleSelectPlan = (selectedPlan: 'monthly' | 'hourly') => {
    setPlan(selectedPlan);
    setStartTime(Date.now());
    setPhase('active');
  };

  const handleReturn = () => {
    setPhase('returned');
  };

  const handleReset = () => {
    setPhase('idle');
    setPlan(null);
    setStartTime(null);
    setElapsed(0);
    setCost(0);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(secs).padStart(2, '0')}s`;
  };

  const getSessionDuration = () => {
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    if (minutes === 0) return `${seconds} seconds`;
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Station Card */}
      <motion.div
        className="relative bg-plugo-dark/50 backdrop-blur-sm border-2 border-plugo-accent/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,243,164,0.2)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Station Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-plugo-accent/10 border border-plugo-accent/30 rounded-full mb-4">
            <span className="text-plugo-accent font-semibold">🔌 PLUGO Station #001</span>
          </div>
          <h3 className="text-2xl text-plugo-text font-bold">NYUAD Library</h3>
          <p className="text-plugo-text/60">12 power banks available</p>
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Station Visual */}
          <div className="flex flex-col items-center space-y-6">
            {/* Kiosk Display */}
            <div className="relative w-full max-w-sm">
              {/* Station body */}
              <div className="relative bg-plugo-dark border-2 border-plugo-accent/40 rounded-2xl p-6 shadow-lg">
                {/* Display screen */}
                <div className="bg-plugo-accent/10 border border-plugo-accent/30 rounded-lg p-4 mb-6">
                  <AnimatePresence mode="wait">
                    {phase === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center space-y-3"
                      >
                        {/* QR Code placeholder */}
                        <div className="bg-white p-4 rounded-lg inline-block">
                          <svg width="120" height="120" viewBox="0 0 120 120">
                            <rect width="120" height="120" fill="white" />
                            {/* QR pattern (simplified) */}
                            {[...Array(8)].map((_, i) => (
                              <g key={i}>
                                {[...Array(8)].map((_, j) => (
                                  <rect
                                    key={`${i}-${j}`}
                                    x={10 + j * 13}
                                    y={10 + i * 13}
                                    width="10"
                                    height="10"
                                    fill={(i + j) % 2 === 0 ? '#0D0D12' : 'transparent'}
                                  />
                                ))}
                              </g>
                            ))}
                          </svg>
                        </div>
                        <p className="text-plugo-text/80 text-sm">Scan to Rent</p>
                      </motion.div>
                    )}

                    {phase === 'plan' && (
                      <motion.div
                        key="plan"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="space-y-3"
                      >
                        <p className="text-plugo-accent text-center font-semibold mb-4">
                          Select Your Plan
                        </p>
                        <button
                          onClick={() => handleSelectPlan('monthly')}
                          className="w-full py-3 bg-plugo-accent/20 border border-plugo-accent rounded-lg text-plugo-text hover:bg-plugo-accent hover:text-plugo-dark transition-all font-semibold"
                        >
                          📅 Monthly - AED 35
                        </button>
                        <button
                          onClick={() => handleSelectPlan('hourly')}
                          className="w-full py-3 bg-plugo-accent/20 border border-plugo-accent rounded-lg text-plugo-text hover:bg-plugo-accent hover:text-plugo-dark transition-all font-semibold"
                        >
                          ⚡ Hourly - AED 3/hr
                        </button>
                      </motion.div>
                    )}

                    {phase === 'active' && (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center space-y-3"
                      >
                        <div className="text-plugo-accent font-bold text-lg">✓ Active</div>
                        <div className="text-plugo-text/80 text-sm">
                          {plan === 'monthly' ? '📅 Monthly Plan' : '⚡ Hourly Plan'}
                        </div>
                      </motion.div>
                    )}

                    {phase === 'returned' && (
                      <motion.div
                        key="returned"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center space-y-3"
                      >
                        <div className="text-5xl">✓</div>
                        <div className="text-plugo-accent font-bold">Returned</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Power bank slots */}
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-12 rounded-md relative ${
                        i === 0 && phase === 'active'
                          ? 'bg-transparent border-2 border-dashed border-plugo-accent/30'
                          : 'bg-plugo-accent/30 border border-plugo-accent/50'
                      }`}
                      animate={
                        i === 0 && phase === 'active'
                          ? { borderColor: ['rgba(0,243,164,0.3)', 'rgba(0,243,164,0.7)', 'rgba(0,243,164,0.3)'] }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {i !== 0 || (i === 0 && phase !== 'active') ? (
                        <div className="absolute inset-0 flex items-center justify-center text-plugo-accent/70 text-xs">
                          🔋
                        </div>
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ejected Power Bank Animation */}
              <AnimatePresence>
                {phase === 'active' && (
                  <motion.div
                    className="absolute -right-12 top-1/2 -translate-y-1/2"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <motion.div
                      className="w-16 h-24 bg-gradient-to-br from-plugo-accent to-plugo-accent/70 rounded-lg shadow-[0_0_30px_rgba(0,243,164,0.6)] flex items-center justify-center text-3xl border-2 border-plugo-accent"
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(0,243,164,0.6)',
                          '0 0 50px rgba(0,243,164,0.8)',
                          '0 0 30px rgba(0,243,164,0.6)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🔋
                    </motion.div>
                    <motion.div
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-plugo-dark/90 backdrop-blur-sm px-3 py-1 rounded-full border border-plugo-accent/30 whitespace-nowrap"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-plugo-accent text-xs font-semibold">Your power bank</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Button */}
            {phase === 'idle' && (
              <motion.button
                onClick={handleScan}
                className="px-8 py-4 bg-plugo-accent text-plugo-dark font-bold rounded-xl hover:bg-plugo-accent/90 transition-all shadow-[0_0_20px_rgba(0,243,164,0.4)] text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Simulate Scan
              </motion.button>
            )}

            {phase === 'active' && (
              <motion.button
                onClick={handleReturn}
                className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔁 Return Power Bank
              </motion.button>
            )}
          </div>

          {/* Right: Session Info */}
          <div className="space-y-6">
            <div className="bg-plugo-dark/70 border border-plugo-accent/20 rounded-2xl p-6 space-y-4">
              <h4 className="text-xl font-bold text-plugo-text mb-4">Session Info</h4>

              {phase === 'idle' && (
                <div className="text-center py-12 text-plugo-text/50">
                  <p className="text-6xl mb-4">👆</p>
                  <p>Tap "Simulate Scan" to start</p>
                </div>
              )}

              {phase === 'plan' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-plugo-text/50"
                >
                  <p className="text-6xl mb-4">📋</p>
                  <p>Select your plan to continue</p>
                </motion.div>
              )}

              {(phase === 'active' || phase === 'returned') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {/* Plan Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-plugo-text/60">Plan:</span>
                    <span className="px-4 py-2 bg-plugo-accent/20 border border-plugo-accent rounded-full text-plugo-accent font-semibold">
                      {plan === 'monthly' ? '📅 Monthly' : '⚡ Hourly'}
                    </span>
                  </div>

                  {/* Timer */}
                  {phase === 'active' && (
                    <div className="bg-plugo-dark border border-plugo-accent/30 rounded-xl p-6 text-center">
                      <div className="text-plugo-text/60 text-sm mb-2">Duration</div>
                      <div className="font-mono text-3xl md:text-4xl text-plugo-accent font-bold tracking-wider">
                        {formatTime(elapsed)}
                      </div>
                    </div>
                  )}

                  {/* Cost Display */}
                  <div className="flex items-center justify-between">
                    <span className="text-plugo-text/60">Current Cost:</span>
                    <span className="text-2xl font-bold text-plugo-accent">
                      {plan === 'hourly' ? `AED ${cost.toFixed(2)}` : 'AED 0.00'}
                    </span>
                  </div>

                  {/* Monthly Plan Usage */}
                  {plan === 'monthly' && phase === 'active' && (
                    <div className="mt-4 p-4 bg-plugo-accent/5 border border-plugo-accent/20 rounded-xl">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-plugo-text/60">Weekly Usage</span>
                        <span className="text-plugo-accent font-semibold">
                          {weeklyUsage + Math.floor(elapsed / 3600)} / 40 hours
                        </span>
                      </div>
                      <div className="w-full bg-plugo-dark rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-plugo-accent to-blue-400"
                          initial={{ width: `${(weeklyUsage / 40) * 100}%` }}
                          animate={{
                            width: `${((weeklyUsage + elapsed / 3600) / 40) * 100}%`,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Hourly Plan Info */}
                  {plan === 'hourly' && phase === 'active' && (
                    <div className="mt-4 p-4 bg-plugo-accent/5 border border-plugo-accent/20 rounded-xl">
                      <div className="text-sm text-plugo-text/60 text-center">
                        💡 Rate: AED 3 per hour
                        <br />
                        Pay only for what you use
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Tips */}
            {phase === 'idle' && (
              <div className="bg-plugo-accent/5 border border-plugo-accent/20 rounded-xl p-4">
                <p className="text-plugo-text/70 text-sm">
                  💡 <strong>Tip:</strong> This is a fully interactive demo. All data is simulated
                  in your browser — no real charges apply!
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Summary Modal */}
      <AnimatePresence>
        {phase === 'returned' && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="bg-plugo-dark border-2 border-plugo-accent rounded-3xl p-8 max-w-md w-full relative shadow-[0_0_60px_rgba(0,243,164,0.3)]">
                {/* Confetti effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2 }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '50%',
                      }}
                      animate={{
                        y: [0, -100, -200],
                        x: [(Math.random() - 0.5) * 100],
                        rotate: [0, 360],
                        opacity: [1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.05,
                      }}
                    >
                      {['🎉', '⚡', '✨', '🔋'][i % 4]}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-3xl font-bold text-plugo-accent mb-2">
                      Session Complete!
                    </h3>
                    <p className="text-plugo-text/60">Your PLUGO Session Summary</p>
                  </div>

                  <div className="space-y-4 mb-6 bg-plugo-dark/50 border border-plugo-accent/20 rounded-xl p-6">
                    <div className="flex justify-between">
                      <span className="text-plugo-text/60">Plan:</span>
                      <span className="text-plugo-text font-semibold">
                        {plan === 'monthly' ? 'Monthly Subscription' : 'Hourly Rate'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-plugo-text/60">Duration:</span>
                      <span className="text-plugo-text font-semibold">{getSessionDuration()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-plugo-accent/20">
                      <span className="text-plugo-text/60">Total:</span>
                      <span className="text-3xl font-bold text-plugo-accent">
                        {plan === 'hourly' ? `AED ${cost.toFixed(2)}` : 'AED 0.00'}
                      </span>
                    </div>
                    {plan === 'monthly' && (
                      <div className="text-sm text-plugo-text/60 text-center">
                        ✓ Included in your monthly subscription
                      </div>
                    )}
                    <div className="text-sm text-plugo-text/60 pt-4 border-t border-plugo-accent/20">
                      <strong>Station:</strong> NYUAD Library
                    </div>
                  </div>

                  <div className="bg-plugo-accent/10 border border-plugo-accent/30 rounded-xl p-4 mb-6 text-center">
                    <p className="text-plugo-text/80 leading-relaxed">
                      Thank you for testing PLUGO.
                      <br />
                      <span className="text-plugo-accent font-semibold">
                        Together we&apos;re building the future of on-campus power.
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-4 bg-plugo-accent text-plugo-dark font-bold rounded-xl hover:bg-plugo-accent/90 transition-all"
                  >
                    🔄 Reset Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

