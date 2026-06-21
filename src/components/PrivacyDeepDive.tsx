import { Shield, EyeOff, ServerCrash, Share2, HelpCircle, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyDeepDiveProps {
  onClose: () => void;
}

export default function PrivacyDeepDive({ onClose }: PrivacyDeepDiveProps) {
  const principles = [
    {
      icon: EyeOff,
      title: 'Zero Permanent Location Logging',
      desc: 'GPS position data resides strictly in high-speed, volatile local cache. The system forgets where you drove the moment your ignition turns off.'
    },
    {
      icon: Shield,
      title: 'Local On-Device AI',
      desc: 'Driver awareness triggers and telemetry models calculate directly on local device processors. We do not stream raw audio, sensor footage, or flight paths to cloud servers.'
    },
    {
      icon: ServerCrash,
      title: 'Independent Offline Integrity',
      desc: 'No continuous cellular stream required. Protection holds high fidelity even in northern Ontario cottage country, where coverage fails.'
    },
    {
      icon: Share2,
      title: 'No Data Commercialization',
      desc: 'We are completely funded by pre-launch founding memberships. We do not sell driver behavior patterns to insurance brokers, automotive dealerships, or third-party marketers.'
    }
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-cyan-15 bg-cyan-50 text-cyan-600 rounded-xl">
          <Shield className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-brand-navy">Privacy by Design</h3>
          <p className="text-xs text-gray-500">Security architecture & transparency policy</p>
        </div>
      </div>

      <div className="space-y-4">
        {principles.map((pr, idx) => {
          const Icon = pr.icon;
          return (
            <motion.div
              key={pr.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="p-3 bg-white border border-gray-100 rounded-xl space-y-1"
            >
              <div className="flex items-center space-x-2.5">
                <Icon className="w-4 h-4 text-cyan-600 shrink-0" />
                <h4 className="font-display font-semibold text-xs text-brand-navy">{pr.title}</h4>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed pl-6">
                {pr.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl flex items-start gap-2.5">
        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-[11px] text-emerald-800 leading-relaxed">
          <strong>Canadian Compliance:</strong> Completely designed around the Personal Information Protection and Electronic Documents Act (PIPEDA) to guarantee driver control.
        </div>
      </div>

      <div className="pt-2 flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 h-11 border border-gray-200 rounded-xl text-xs font-display font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back to Gateway
        </button>
        <a
          href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
          target="_blank"
          rel="noreferrer"
          className="flex-1 h-11 bg-brand-navy hover:bg-opacity-95 text-white rounded-xl text-xs font-display font-medium flex items-center justify-center space-x-1 shadow-sm transition-all"
        >
          <span>Cohort Reservation</span>
          <ChevronRight className="w-4 h-4 text-cyan-400" />
        </a>
      </div>
    </div>
  );
}
