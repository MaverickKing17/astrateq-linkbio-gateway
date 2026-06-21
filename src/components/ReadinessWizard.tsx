import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, Award, ChevronRight, Compass, ArrowLeft, Fuel, Trees, Users, AlertCircle } from 'lucide-react';

interface ReadinessWizardProps {
  onClose: () => void;
}

export default function ReadinessWizard({ onClose }: ReadinessWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [routes, setRoutes] = useState<string>('');
  const [concern, setConcern] = useState<string>('');
  const [signal, setSignal] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const scoreCalculator = () => {
    let score = 70;
    if (routes.includes('Cottage') || routes.includes('Hwy 400')) score += 10;
    if (concern && concern !== 'none') score += 10;
    if (signal === 'extremely') score += 10;
    return Math.min(score, 100);
  };

  const finalScore = scoreCalculator();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-50 text-cyan-700 rounded-xl">
            <Compass className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-brand-navy">Summer Readiness Profile</h3>
            <p className="text-xs text-gray-500">Summer campaign focus — Canadian Validation</p>
          </div>
        </div>
        {!isCompleted && (
          <span className="text-xs font-mono text-gray-400">
            Step {step} of {totalSteps}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-brand-navy font-display flex items-center gap-2">
                  <Trees className="w-4 h-4 text-emerald-600" />
                  Where are your main summer driving routes?
                </h4>
                <div className="space-y-2">
                  {[
                    'Toronto / GTA Daily Commutes (DVP, Gardiner, 401)',
                    'Ontario Cottage Country Routes (Hwy 400, 11, Muskoka, Kawarthas)',
                    'Cross-Province High-Speed Highway Trips',
                    'Mainly local suburban / weekend errands only'
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRoutes(option)}
                      className={`w-full text-left p-3.5 text-xs rounded-xl border transition-all flex items-center justify-between ${
                        routes === option
                          ? 'border-cyan-500 bg-cyan-50/40 font-medium text-cyan-900'
                          : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <span>{option}</span>
                      {routes === option && <Check className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-brand-navy font-display flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  What is your primary highway safety concern?
                </h4>
                <div className="space-y-2">
                  {[
                    'Unexpected sudden braking and traffic bunching',
                    'DVP/401 narrow lane merges and blind spots',
                    'Distraction in slow and bumper-to-bumper cottage traffic',
                    'Fatigue on long multi-hour regional highways'
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setConcern(option)}
                      className={`w-full text-left p-3.5 text-xs rounded-xl border transition-all flex items-center justify-between ${
                        concern === option
                          ? 'border-cyan-500 bg-cyan-50/40 font-medium text-cyan-900'
                          : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <span>{option}</span>
                      {concern === option && <Check className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-brand-navy font-display flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-600" />
                  How important is offline intelligence in remote country?
                </h4>
                <div className="space-y-2">
                  {[
                    { key: 'extremely', label: 'Crucial: I drive in weak signal zones / cottage wilderness' },
                    { key: 'somewhat', label: 'Helpful: Nice to have secondary fallback protection' },
                    { key: 'minimal', label: 'Low priority: I stay within solid Rogers/Bell urban service' }
                  ].map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSignal(option.key)}
                      className={`w-full text-left p-3.5 text-xs rounded-xl border transition-all flex items-center justify-between ${
                        signal === option.key
                          ? 'border-cyan-500 bg-cyan-50/40 font-medium text-cyan-900'
                          : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <span>{option.label}</span>
                      {signal === option.key && <Check className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions Footer */}
            <div className="flex gap-2 pt-3 border-t border-gray-50">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center justify-center w-12 h-11 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-55 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                disabled={
                  (step === 1 && !routes) ||
                  (step === 2 && !concern) ||
                  (step === 3 && !signal)
                }
                onClick={handleNext}
                className={`flex-1 h-11 rounded-xl font-display text-sm font-medium transition-all flex items-center justify-center space-x-1.5 ${
                  ((step === 1 && !routes) || (step === 2 && !concern) || (step === 3 && !signal))
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-brand-navy text-white hover:bg-opacity-95'
                }`}
              >
                <span>{step === totalSteps ? 'See Readiness Score' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="finish"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 bg-cyan-55/20 text-cyan-700 rounded-full mb-1">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-display font-semibold text-base text-brand-navy">Readiness Check Complete</h4>
              <p className="text-xs text-gray-500 px-4">Your personalized summer driving safety compatibility score</p>
            </div>

            <div className="bg-brand-ice/50 rounded-2xl p-5 border border-cyan-100 flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl font-display font-bold text-brand-navy">{finalScore}%</div>
              <div className="text-[10px] font-mono tracking-wider text-cyan-700 uppercase bg-white px-2.5 py-0.5 rounded-full border border-cyan-100/60">
                {finalScore >= 90 ? 'Ideal Pioneer Candidate' : 'High Awareness Value'}
              </div>
              <p className="text-xs text-gray-600 pt-2 leading-relaxed">
                {finalScore >= 90
                  ? "Your summer high-speed driving patterns qualify for the on-device intelligence trials. The Astrateq system processes telemetry markers on-device to enhance highway awareness without cloud logging."
                  : "Astrateq is optimized for your safety concerns. Our on-device spatial telemetry algorithms address merging risk and bypass lag while fully prioritizing user trust."}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[11px] text-gray-500 justify-center">
                <Shield className="w-3.5 h-3.5 text-cyan-600" />
                <span>On-device processing protects your location details</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setRoutes('');
                    setConcern('');
                    setSignal('');
                    setIsCompleted(false);
                  }}
                  className="h-11 border border-gray-200 rounded-xl text-xs font-display text-gray-600 hover:bg-gray-55 transition-colors"
                >
                  Start Over
                </button>
                <a
                  href={`https://join.astrateqgadgets.com/summer-readiness?entry=linkbio&intent=readiness&score=${finalScore}`}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="h-11 bg-brand-navy text-white rounded-xl text-xs font-display font-medium hover:bg-opacity-95 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Submit Profile</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
