import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  ShieldCheck, 
  Terminal, 
  Sliders, 
  ExternalLink,
  ChevronRight,
  Code2,
  Cpu,
  Bookmark,
  CheckCircle2,
  Copy,
  Plus,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

interface ReadmeModalProps {
  onClose: () => void;
}

export default function ReadmeModal({ onClose }: ReadmeModalProps) {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'features' | 'architecture'>('blueprint');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Title Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 flex items-center justify-center">
            <BookOpen className="w-5.5 h-5.5 text-[#0078d4]" />
          </div>
          <div>
            <h3 className="font-sans font-extrabold text-lg text-slate-950 tracking-tight">Interactive README</h3>
            <p className="text-[10px] font-mono tracking-wider uppercase text-[#0066b2] font-bold">System Spec & Technical Guidelines</p>
          </div>
        </div>
      </div>

      {/* Decorative Line Banner */}
      <div className="h-[2px] bg-gradient-to-r from-[#0078d4] via-cyan-400 to-emerald-400 rounded-full" />

      {/* Interactive Hub Tabs */}
      <div className="grid grid-cols-3 gap-1 bg-slate-150 p-1 rounded-xl">
        {[
          { id: 'blueprint', label: 'Design Spec', icon: Sliders },
          { id: 'features', label: 'Feature Matrix', icon: ShieldCheck },
          { id: 'architecture', label: 'Tech Stack', icon: Code2 }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 rounded-lg text-[10.5px] font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer text-center ${
                isActive 
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0078d4]' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Area Content */}
      <div className="mt-4 min-h-[220px]">
        {activeTab === 'blueprint' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0078d4] font-bold flex items-center gap-1.5 mb-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Visual Architecture Blueprint</span>
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                The funnel is engineered around an offline-first visual system optimized for maximum regional conversions, following high-end standards from Porsche and Tesla.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/75 p-3.5 space-y-3 shadow-3xs">
              <div className="flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0078d4] mt-1 shrink-0" />
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  <strong className="text-slate-900 font-extrabold">Microsoft-Inspired Fonts:</strong> Set with high contrast ratios, strict tracking constraints, and crisp sizing parameters (e.g. Fira Code/JetBrains Mono for tech lines).
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1 shrink-0" />
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  <strong className="text-slate-900 font-extrabold">Cohesive Branding:</strong> Top navigation micro-badges confirm continuous Canadian live-trial states. All logos reside within an optimized visual priority stack.
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  <strong className="text-slate-900 font-extrabold">Vibrant Custom Triggers:</strong> Interactive layout assets feature high physical response, custom background glowing layers, and elegant focus halos.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0078d4] font-bold flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Core Interactive Module Specs</span>
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-3">
                All features are powered by reactive client-side micro-systems executing in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {[
                { title: 'Cohort Reservations', desc: 'Secure custom onboard qualification sequences for limited GTA trials.' },
                { title: 'Compatibility Tester', desc: 'Sleek vehicle fitment check utilizing clean, direct step-by-step fields.' },
                { title: 'Astrateq Roadmap', desc: 'Check regional telemetry timelines, trial boundaries, and firmware plans.' },
                { title: 'Privacy Sovereignty', desc: 'Compliant with Canadian PIPEDA regulations. Zero trackers/broker sync.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white p-2.5 rounded-xl border border-slate-200/50">
                  <div className="w-5 h-5 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-extrabold text-slate-500">{idx+1}</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-950 tracking-tight leading-none">{step.title}</h5>
                    <p className="text-[10px] text-slate-500 font-semibold leading-normal mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4.5"
          >
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0078d4] font-bold flex items-center gap-1.5 mb-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Modern Web Execution Stack</span>
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Clean, performant compilation layer built for high-speed offline operation during severe environments.
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                <span className="text-slate-400 font-mono tracking-wider font-semibold uppercase text-[8px] block">UI Framework</span>
                <span className="text-slate-900 font-extrabold block">React 19 (TS Mode)</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                <span className="text-slate-400 font-mono tracking-wider font-semibold uppercase text-[8px] block">Style Engine</span>
                <span className="text-slate-900 font-extrabold block">Tailwind CSS v4</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                <span className="text-slate-400 font-mono tracking-wider font-semibold uppercase text-[8px] block">Animation Layer</span>
                <span className="text-slate-900 font-extrabold block">Motion/React</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                <span className="text-slate-400 font-mono tracking-wider font-semibold uppercase text-[8px] block">Bundle System</span>
                <span className="text-slate-900 font-extrabold block">Vite 6 Server</span>
              </div>
            </div>

            {/* Config & Links copying section */}
            <div className="space-y-2">
              <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold block">Fulfillment URLs Reference</span>
              <div className="space-y-1.5">
                {[
                  { label: 'Platform Domain', url: 'https://reserve.astrateqgadgets.com' },
                  { label: 'Direct Funnel Campaign', url: 'https://reserve.astrateqgadgets.com?intent=cohort' }
                ].map((link, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200/55 gap-2">
                    <span className="text-[10px] text-slate-800 font-bold shrink-0">{link.label}:</span>
                    <div className="flex items-center gap-1.5 overflow-hidden flex-1 justify-end">
                      <span className="text-[9px] font-mono text-[#0078d4] font-semibold truncate select-all">{link.url}</span>
                      <button 
                        onClick={() => handleCopy(link.url, link.label)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-[#0078d4] transition-colors cursor-pointer shrink-0"
                      >
                        {copiedLink === link.label ? (
                          <span className="text-[8px] font-sans font-extrabold text-emerald-600 uppercase">Copied!</span>
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Trust Quote Accent box */}
      <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-150/40 flex items-start gap-3">
        <Cpu className="w-5.5 h-5.5 text-[#0078d4] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-[#005a9e] tracking-wider uppercase font-bold block">Developer Compliance Standards</span>
          <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
            All code modules obey explicit modular isolation constraints. Views must load exclusively under lightweight UI conditions to ensure maximum roadside responsiveness.
          </p>
        </div>
      </div>

      {/* Footer controls inside modal */}
      <div className="pt-2 flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-sans font-extrabold flex items-center justify-center space-x-1.5 shadow-sm transition-all cursor-pointer"
        >
          <span>Acknowledge Specifications</span>
        </button>
      </div>
    </div>
  );
}
