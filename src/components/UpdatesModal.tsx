import React, { useState } from 'react';
import { Mail, Check, ChevronRight, Bell, Smartphone, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface UpdatesModalProps {
  onClose: () => void;
}

export default function UpdatesModal({ onClose }: UpdatesModalProps) {
  const [email, setEmail] = useState<string>('');
  const [hardware, setHardware] = useState<boolean>(true);
  const [canadian, setCanadian] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate interactive micro-submission before redirecting
    setTimeout(() => {
      setIsSubmitting(false);
      setFinished(true);
    }, 850);
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-cyan-15 bg-cyan-50 text-cyan-600 rounded-xl">
          <Bell className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-brand-navy">Live Build & Updates</h3>
          <p className="text-xs text-gray-500">Trace pre-launch hardware testing</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.form
            key="updates-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <p className="text-xs text-gray-500 leading-relaxed">
              Sign up for our developer updates. We broadcast behind-the-scenes engineering logs, firmware achievements, and pre-launch availability timelines specifically for Ontario and the wider Canadian market.
            </p>

            <div className="space-y-2.5">
              <label className="flex items-start space-x-3 bg-white p-3 rounded-xl border border-gray-100 cursor-pointer hover:border-gray-200 transition-colors">
                <input
                  type="checkbox"
                  checked={hardware}
                  onChange={(e) => setHardware(e.target.checked)}
                  className="mt-0.5 rounded text-cyan-600 focus:ring-cyan-500 border-gray-300 w-4 h-4"
                />
                <div>
                  <span className="text-xs font-semibold text-brand-navy block">Hardware Development Logs</span>
                  <span className="text-[10px] text-gray-400">Micro-radar enclosure development and thermal metrics testing</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 bg-white p-3 rounded-xl border border-gray-100 cursor-pointer hover:border-gray-200 transition-colors">
                <input
                  type="checkbox"
                  checked={canadian}
                  onChange={(e) => setCanadian(e.target.checked)}
                  className="mt-0.5 rounded text-cyan-600 focus:ring-cyan-500 border-gray-300 w-4 h-4"
                />
                <div>
                  <span className="text-xs font-semibold text-brand-navy block">Canadian Allocations & Releases</span>
                  <span className="text-[10px] text-gray-400">Hwy 400/401 geofenced telemetry calibration notifications</span>
                </div>
              </label>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-400 mb-1.5">
                Corporate Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com or personal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 h-11 text-sm text-brand-navy focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-brand-navy hover:bg-opacity-95 text-white font-display font-medium text-xs rounded-xl flex items-center justify-center space-x-1 shadow-sm transition-all"
            >
              <span>{isSubmitting ? 'Registering...' : 'Register Preferences'}</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="updates-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-5 text-center py-4"
          >
            <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full">
              <Check className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-sm text-brand-navy">Preferences Cached</h4>
              <p className="text-xs text-gray-500 px-6">
                Your email priority matches the selected regional priorities. Let's finish your subscription in our pre-launch network.
              </p>
            </div>

            <a
              href={`https://join.astrateqgadgets.com?entry=linkbio&intent=updates&email=${encodeURIComponent(email)}&hw=${hardware}&ca=${canadian}`}
              target="_blank"
              rel="noreferrer"
              className="w-full h-11 bg-cyan-600 hover:bg-cyan-700 text-white font-display font-medium text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-all"
            >
              <span>Finalize Free updates signup</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
