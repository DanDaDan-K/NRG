'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/email service
    console.log('Partner inquiry:', formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: '', email: '', institution: '', message: '' });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div
              className="bg-plugo-dark border border-plugo-accent/30 rounded-3xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-plugo-text/60 hover:text-plugo-text transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-plugo-accent mb-2">Thank you!</h3>
                  <p className="text-plugo-text/60">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-plugo-text mb-2">Partner with PLUGO</h2>
                  <p className="text-plugo-text/60 mb-6">
                    Bring sustainable campus charging to your university
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-plugo-text/80 mb-2 text-sm">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-plugo-dark/50 border border-plugo-accent/20 rounded-xl text-plugo-text focus:border-plugo-accent focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-plugo-text/80 mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-plugo-dark/50 border border-plugo-accent/20 rounded-xl text-plugo-text focus:border-plugo-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-plugo-text/80 mb-2 text-sm">Institution</label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-3 bg-plugo-dark/50 border border-plugo-accent/20 rounded-xl text-plugo-text focus:border-plugo-accent focus:outline-none transition-colors"
                        placeholder="University name"
                      />
                    </div>

                    <div>
                      <label className="block text-plugo-text/80 mb-2 text-sm">Message (Optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-plugo-dark/50 border border-plugo-accent/20 rounded-xl text-plugo-text focus:border-plugo-accent focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your campus..."
                        rows={3}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-plugo-accent text-plugo-dark font-semibold py-4 rounded-xl hover:bg-plugo-accent/90 transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

