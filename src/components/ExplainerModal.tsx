import { Info, HelpCircle, Laptop, Settings, ChevronRight, Milestone, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ExplainerModalProps {
  onClose: () => void;
}

export default function ExplainerModal({ onClose }: ExplainerModalProps) {
  const roadmap = [
    {
      phase: 'Phase 1: Validation (Active)',
      title: 'Summer 25/26 Canadian Calibration',
      desc: 'We are mapping Ontario-specific highways (401, 400, QEW) and collecting crowd driver concerns to train local situational awareness scenarios.'
    },
    {
      phase: 'Phase 2: Compatibility Fit',
      title: 'Vehicle Diagnostic Diagnostics',
      desc: "Eligible cohort vehicles check their physical fitment profile using our 30-second checker to confirm optimal telemetry interface."
    },
    {
      phase: 'Phase 3: Cohort Release',
      title: 'Founding Member Equipment Suite',
      desc: 'Top-tier cohort reservations receive invitations to validate real prototypes. Initial launch contains plug-and-play visual alerts and zero-subscription tracking.'
    }
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-cyan-50 text-cyan-700 rounded-xl">
          <Milestone className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-brand-navy">How Astrateq Works</h3>
          <p className="text-xs text-gray-500">Market validation and early roadmap steps</p>
        </div>
      </div>

      <div className="space-y-4">
        {roadmap.map((step, idx) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="relative pl-6 border-l-2 border-cyan-100 last:border-0 pb-1"
          >
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border border-white" />
            <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-600 font-semibold">{step.phase}</span>
            <h4 className="font-display font-semibold text-xs text-brand-navy mt-0.5">{step.title}</h4>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-ice/40 p-3.5 rounded-xl border border-gray-100 flex items-start space-x-2.5">
        <AlertCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <p className="text-[10px] text-gray-500 leading-relaxed">
          <strong>Pre-Launch Honesty:</strong> Availability is subject to rigorous validation results, certification timelines, and future tooling supply. We prioritize build safety and local hardware stability over rushed commercial launch.
        </p>
      </div>

      <div className="pt-2 flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 h-11 border border-gray-200 rounded-xl text-xs font-display font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back to Gateway
        </button>
        <a
          href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
          target="_blank"
          rel="noreferrer"
          className="flex-1 h-11 bg-brand-navy hover:bg-opacity-95 text-white rounded-xl text-xs font-display font-medium flex items-center justify-center space-x-1 shadow-sm transition-all"
        >
          <span>See Pre-Launch Details</span>
          <ChevronRight className="w-4 h-4 text-cyan-400" />
        </a>
      </div>
    </div>
  );
}
