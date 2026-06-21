import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertTriangle, ChevronRight, RefreshCw, Car } from 'lucide-react';

interface CompatibilityTesterProps {
  onClose: () => void;
}

export default function CompatibilityTester({ onClose }: CompatibilityTesterProps) {
  const [year, setYear] = useState<string>('');
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [result, setResult] = useState<{ isCompatible: boolean; message: string; badge: string } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!year || !make) return;

    const numericYear = parseInt(year, 10);
    const isModern = numericYear >= 2012;

    if (isModern) {
      setResult({
        isCompatible: true,
        message: `Great news! Your ${year} ${make} ${model || ''} meets Astrateq's hardware and telemetry integration standards. Your vehicle platform qualifies for our plug-and-play founding driver kit.`,
        badge: 'FIT2026_ACTIVE'
      });
    } else {
      setResult({
        isCompatible: false,
        message: `Your ${year} ${make} is supported with our auxiliary legacy adapter, though some advanced telemetry functions may be limited. You can still join the cohort to validate your vehicle's fit.`,
        badge: 'LEGCY_VALID'
      });
    }
    setChecked(true);
  };

  const handleReset = () => {
    setYear('');
    setMake('');
    setModel('');
    setChecked(false);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-ice text-brand-navy rounded-xl">
            <Car className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-brand-navy">Check Vehicle Fit</h3>
            <p className="text-xs text-gray-500">Confirm compatibility in under 30 seconds</p>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!checked ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleCheck}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-brand-navy mb-1.5 font-display">
                Vehicle Year <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-3 h-11 text-sm text-brand-navy focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 27 }, (_, i) => String(2027 - i)).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1.5 font-display">
                  Make <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ford, Toyota"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-3 h-11 text-sm text-brand-navy focus:outline-none focus:focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1.5 font-display">
                  Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. F-150, RAV4"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-3 h-11 text-sm text-brand-navy focus:outline-none focus:focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-12 bg-brand-navy font-display font-medium text-sm text-white rounded-xl shadow-md hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Analyze Vehicle Fit</span>
              <ChevronRight className="w-4 h-4 ml-1 text-cyan-400" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-5"
          >
            <div className={`p-4 rounded-xl border ${result?.isCompatible ? 'bg-cyan-50/55 border-cyan-200/60' : 'bg-amber-50/55 border-amber-200/50'}`}>
              <div className="flex items-start space-x-3">
                {result?.isCompatible ? (
                  <div className="p-1.5 bg-cyan-100 text-cyan-700 rounded-lg mt-0.5">
                    <Check className="w-5 h-5 text-cyan-600" />
                  </div>
                ) : (
                  <div className="p-1.5 bg-amber-100 text-amber-700 rounded-lg mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                )}
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">
                    {result?.isCompatible ? 'Fully Compatible Platform' : 'Legacy Compatibility Protocol'}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {result?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-ice/40 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono block">Personalized Priority Code</span>
                <span className="text-sm font-semibold font-mono text-brand-navy">{result?.badge}</span>
              </div>
              <div className="px-2.5 py-1 bg-white text-xs border border-gray-200 rounded-full text-cyan-700 font-medium">
                Verified Fit
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleReset}
                className="h-12 border border-gray-200 rounded-xl font-display text-sm text-gray-600 hover:bg-gray-55 transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Test Another</span>
              </button>
              
              <a
                href={`https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility&year=${year}&make=${make}&model=${model}&code=${result?.badge}`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="h-12 bg-cyan-600 text-white rounded-xl font-display font-medium text-sm hover:bg-cyan-700 transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <span>Reserve Early</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
