/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Car,
  Compass,
  Milestone,
  Bell,
  Check,
  ChevronRight,
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  X,
  Lock,
  Sparkles,
  Info
} from 'lucide-react';

// Import sub-components
import CompatibilityTester from './components/CompatibilityTester';
import ReadinessWizard from './components/ReadinessWizard';
import PrivacyDeepDive from './components/PrivacyDeepDive';
import ExplainerModal from './components/ExplainerModal';
import UpdatesModal from './components/UpdatesModal';

// Import generated image
import astrateqSummerDrive from './assets/images/astrateq_summer_drive_1782065351029.jpg';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Social Links mapping
  const socialLinks = {
    instagram: 'https://instagram.com/astrateq24',
    x: 'https://x.com/AstrateqIQ',
    linkedin: 'https://linkedin.com/company/astrateq-gadgets'
  };

  // Primary URL
  const primaryCTAUrl = 'https://reserve.astrateqgadgets.com?entry=linkbio&intent=cohort';

  const handleOpenModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center px-4 py-10 relative font-sans antialiased selection:bg-[#0078d4]/10 selection:text-[#0078d4] overflow-x-hidden">
      
      {/* Decorative ultra-premium ambient lights — Apple/Tesla style */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/10 to-teal-200/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200/10 via-cyan-200/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[8%] right-[-15%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-emerald-300/10 via-blue-200/15 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Single-View Container (Mobile optimized max-width with extreme design density) */}
      <div className="w-full max-w-md flex flex-col gap-6 relative z-10">
        
        {/* HEADER SECTION (Tesla/Apple style minimal elegance) */}
        <header className="flex flex-col items-center text-center mt-2 gap-2">
          
          {/* Micro-Region Indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-200/40 border border-slate-300/30 text-[9px] font-bold text-slate-500 tracking-wider font-mono uppercase">
            <span>Region: CAN (Active)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>

          {/* Logo Brand Representation - Upgraded Imgur URL with text */}
          <div className="flex items-center justify-center mb-1 mt-1 animate-fade-in">
            <img 
              src="https://i.imgur.com/sHJc7d5.png" 
              alt="Astrateq Gadgets Premium Automotive Brand" 
              referrerPolicy="no-referrer"
              className="h-11 w-auto object-contain drop-shadow-[0_1px_4px_rgba(0,102,204,0.08)]"
            />
          </div>
          
          {/* Sleek Badge Indicator */}
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/80 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,120,212,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4] animate-pulse" />
            <span className="text-[10px] font-bold text-[#0066b2] tracking-[0.08em] uppercase font-mono">Summer 2026 Trial Phase</span>
          </div>

          <p className="text-[10px] font-semibold font-mono text-slate-400 tracking-[0.2em] uppercase mt-0.5">
            Drive Safer. Drive Smarter.
          </p>
        </header>

        {/* HERO SECTION (Porsche dynamic layout) */}
        <div id="hero-card" className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-[0_12px_40px_rgba(0,120,212,0.04)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/5 to-cyan-300/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-xl leading-snug tracking-tight text-slate-900">
              Privacy-first vehicle intelligence for safer driving decisions.
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Join early access, check your vehicle fit, or complete the Summer Readiness Check before the Canadian founding cohort window closes.
            </p>
          </div>

          {/* Crossover Premium Image representation (Muskoka Drive Layout) */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/50 group">
            <img 
              src={astrateqSummerDrive} 
              alt="Premium SUV driving on scenic summer Ontario highway" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Soft dark elegant gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white rounded-lg px-2.5 py-1 text-[9px] font-mono tracking-wide font-medium border border-white/10">
              <MapPin className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>GTA / Muskoka Roads, Ontario</span>
            </div>
          </div>
        </div>

        {/* PRIMARY CTA SECTION */}
        {/* PRIMARY CTA SECTION (Ultra High-Impact Apple/Porsche Conversion Flow) */}
        <div className="flex flex-col gap-2.5">
          
          {/* Canadian Microcopy Urgency Info label */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#005a9e] bg-[#e1f0fc] px-4 py-1.5 rounded-full border border-[#0078d4]/20 shadow-[0_2px_12px_rgba(0,120,212,0.04)] uppercase tracking-wide">
              <span>Limited Canadian Founding Cohort Access</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4] animate-ping" />
            </span>
          </div>

          {/* Primary Dominant Cohesive Button */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.985 }}
            className="w-full relative group"
          >
            {/* Pulsing luxurious glow backing */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-[#0078d4] to-cyan-400 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
            
            <a 
              href={primaryCTAUrl}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="relative w-full h-16 bg-gradient-to-r from-[#0078d4] via-[#0066b2] to-[#005a9e] rounded-2xl flex flex-col items-center justify-center p-3 text-white shadow-2xl hover:shadow-[#0078d4]/30 transition-all text-center border border-white/30 cursor-pointer overflow-hidden group/btn"
              id="cta-primary-cohort"
            >
              {/* Premium shining glass visual effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shine duration-1000" />
              
              <div className="flex items-center gap-2 relative z-10">
                <Sparkles className="w-4.5 h-4.5 text-cyan-200 animate-pulse shrink-0" />
                <span className="font-sans font-extrabold text-base tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                  Join Founding Driver Cohort
                </span>
                <ChevronRight className="w-4 h-4 text-cyan-200 group-hover/btn:translate-x-1 transition-transform" />
              </div>
              <span className="text-[9px] text-cyan-100 font-mono tracking-wider uppercase mt-1 flex items-center gap-1.5 font-extrabold relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                <span>Secure Early Access Consideration</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              </span>
            </a>
          </motion.div>
        </div>        {/* SECONDARY ACTION BUTTONS FLOW (Integrated Dual-Action Touch Targets) */}
        <div className="flex flex-col gap-4">
          
          {/* Button 1: Summer Vehicle Readiness Check */}
          <motion.div 
            whileHover={{ y: -1.5, shadow: "0 12px 30px rgba(245,158,11,0.15)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-2xl border border-amber-400/30 shadow-[0_4px_22px_rgba(245,158,11,0.12)] transition-all duration-300"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    Summer Vehicle Readiness Check
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    60s Profile
                  </span>
                </div>
                <span className="text-[11px] text-amber-50/90 font-semibold mt-1 leading-relaxed">
                  Evaluate your 60-second regional safety and summer traction preparedness.
                </span>
              </div>
            </div>
            
            {/* Integrated Dual Action Footer */}
            <div className="grid grid-cols-2 border-t border-white/15 bg-black/10">
              <button
                onClick={() => handleOpenModal('readiness')}
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors border-r border-white/15 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Applet</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </button>
              <a
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=readiness"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase font-mono text-[9px] tracking-wider"
              >
                <span>Direct Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90" />
              </a>
            </div>
          </motion.div>

          {/* Button 2: Check Vehicle Compatibility */}
          <motion.div 
            whileHover={{ y: -1.5, shadow: "0 12px 30px rgba(6,182,212,0.15)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-700 rounded-2xl border border-cyan-500/30 shadow-[0_4px_22px_rgba(6,182,212,0.12)] transition-all duration-300"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                <Car className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    Check Vehicle Compatibility
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    Live Testing
                  </span>
                </div>
                <span className="text-[11px] text-cyan-50/90 font-semibold mt-1 leading-relaxed">
                  Confirm physical and architectural placement parameters for your exact model.
                </span>
              </div>
            </div>
            
            {/* Integrated Dual Action Footer */}
            <div className="grid grid-cols-2 border-t border-white/15 bg-black/10">
              <button
                onClick={() => handleOpenModal('compatibility')}
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors border-r border-white/15 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Applet</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </button>
              <a
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase font-mono text-[9px] tracking-wider"
              >
                <span>Direct Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90" />
              </a>
            </div>
          </motion.div>

          {/* Button 3: See How Astrateq Works */}
          <motion.div 
            whileHover={{ y: -1.5, shadow: "0 12px 30px rgba(168,85,247,0.15)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-2xl border border-purple-500/30 shadow-[0_4px_22px_rgba(168,85,247,0.12)] transition-all duration-300"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                <Milestone className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    See How Astrateq Works
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    System Tech
                  </span>
                </div>
                <span className="text-[11px] text-purple-50/90 font-semibold mt-1 leading-relaxed">
                  Understand our local computing pipelines, geofencing bounds, and telemetry metrics.
                </span>
              </div>
            </div>
            
            {/* Integrated Dual Action Footer */}
            <div className="grid grid-cols-2 border-t border-white/15 bg-black/10">
              <button
                onClick={() => handleOpenModal('explainer')}
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors border-r border-white/15 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Applet</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </button>
              <a
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase font-mono text-[9px] tracking-wider"
              >
                <span>Direct Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90" />
              </a>
            </div>
          </motion.div>

          {/* Button 4: How Your Data Is Protected */}
          <motion.div 
            whileHover={{ y: -1.5, shadow: "0 12px 30px rgba(16,185,129,0.15)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-2xl border border-emerald-500/30 shadow-[0_4px_22px_rgba(16,185,129,0.12)] transition-all duration-300"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                <Shield className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    How Your Data Is Protected
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    Sovereignty
                  </span>
                </div>
                <span className="text-[11px] text-emerald-50/90 font-semibold mt-1 leading-relaxed">
                  Review our sandbox integrity, on-device containment, and PIPEDA security model.
                </span>
              </div>
            </div>
            
            {/* Integrated Dual Action Footer */}
            <div className="grid grid-cols-2 border-t border-white/15 bg-black/10">
              <button
                onClick={() => handleOpenModal('privacy')}
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors border-r border-white/15 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Applet</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </button>
              <a
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase font-mono text-[9px] tracking-wider"
              >
                <span>Direct Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90" />
              </a>
            </div>
          </motion.div>

          {/* Button 5: Live Build & Product Updates (Outstanding Vivid High-Contrast Dynamic Widget) */}
          <motion.div 
            whileHover={{ y: -1.5, shadow: "0 14px 35px rgba(0,120,212,0.22)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-[#005a9e] via-[#0078d4] to-blue-800 rounded-2xl border border-blue-400/30 shadow-[0_4px_22px_rgba(0,120,212,0.18)] transition-all duration-300 relative"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs relative">
                <Bell className="w-5.5 h-5.5 text-white animate-pulse" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-300 inline-block animate-pulse" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    Live Build & Product Updates
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-red-650 px-2 py-0.5 rounded-md shadow-xs shrink-0 animate-pulse border border-red-500">
                    Live Roadmap
                  </span>
                </div>
                <span className="text-[11px] text-blue-100 font-semibold mt-1 leading-relaxed">
                  Monitor hardware design variants, trial firmware logs, and localized trials.
                </span>
              </div>
            </div>
            
            {/* Integrated Dual Action Footer */}
            <div className="grid grid-cols-2 border-t border-white/15 bg-black/10">
              <button
                onClick={() => handleOpenModal('updates')}
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors border-r border-white/15 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Applet</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </button>
              <a
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=updates"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-center text-xs font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase font-mono text-[9px] tracking-wider"
              >
                <span>Direct Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* PREMIUM INTERACTIVE ROADSIDE ONBOARDING SEQUENCE (Tesla / Porsche Style Roadmap Setup) */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/70 rounded-3xl p-6 shadow-[0_12px_35px_rgba(0,0,0,0.015)] relative overflow-hidden group">
          
          {/* Top aesthetic subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0078d4] via-cyan-400 to-emerald-400" />
          
          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold mb-6 text-center flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d4]"></span>
            </span>
            <span>Pre-Launch Onboarding Sequence</span>
          </h3>
          
          <div className="relative flex flex-col gap-4">
            
            {/* Minimalist vertical connector timeline line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-[1px] bg-slate-200/80 z-0" />
            
            {/* Onboarding step 1 */}
            <div className="flex items-start gap-4 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-sans font-extrabold text-xs shrink-0 shadow-sm">
                1
              </div>
              <div className="flex flex-col bg-slate-50/50 p-3.5 rounded-2xl border border-slate-100 w-full group-hover/item:bg-slate-50 group-hover/item:border-slate-200/60 transition-all duration-300">
                <span className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Join Founding Cohort</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0078d4] animate-pulse" />
                </span>
                <span className="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1">
                  Secure prioritized early access consideration in Canadian validation cohorts.
                </span>
              </div>
            </div>

            {/* Onboarding step 2 */}
            <div className="flex items-start gap-4 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center font-sans font-extrabold text-xs shrink-0 shadow-sm">
                2
              </div>
              <div className="flex flex-col bg-slate-50/50 p-3.5 rounded-2xl border border-slate-100 w-full group-hover/item:bg-slate-50 group-hover/item:border-slate-200/60 transition-all duration-300">
                <span className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Verify Platform Fit</span>
                  <span className="text-[8px] font-bold font-mono text-cyan-600 uppercase bg-cyan-50 px-1.5 py-0.2 rounded border border-cyan-150">Fast</span>
                </span>
                <span className="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1">
                  Submit model details to verify on-device standard compatibility markers.
                </span>
              </div>
            </div>

            {/* Onboarding step 3 */}
            <div className="flex items-start gap-4 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center font-sans font-extrabold text-xs shrink-0 shadow-sm">
                3
              </div>
              <div className="flex flex-col bg-slate-50/50 p-3.5 rounded-2xl border border-slate-100 w-full group-hover/item:bg-slate-50 group-hover/item:border-slate-200/60 transition-all duration-300">
                <span className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Monitor Engineering</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </span>
                <span className="text-[11px] text-slate-550 font-semibold leading-relaxed mt-1">
                  Follow local telemetry build updates, hardware casings, and geofencing progress.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* APPLE-GRAD TRUST & PRIVACY MATRIX */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/70 rounded-3xl p-6 relative overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.015)]">
          <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-[#0078d4]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center shrink-0 border border-slate-100 shadow-3xs">
              <Lock className="w-4.5 h-4.5 text-slate-800" />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-sm text-slate-900 tracking-tight">Privacy by design</h3>
              <p className="text-[9px] font-bold font-mono text-[#0078d4] uppercase tracking-wider">Astrateq Premium Protocols</p>
            </div>
          </div>
          
          <ul className="space-y-4">
            {[
              { title: 'On-device intelligence direction', desc: 'Telemetry processed locally without continuous cloud logging' },
              { title: 'User-controlled data expectations', desc: 'Complete sovereign oversight of vehicle logs and index markers' },
              { title: 'No unnecessary data sharing', desc: 'Secure local containment ensuring absolute hardware isolation' },
              { title: 'No advertising-tracker resale', desc: 'Zero commercial profile monetizations, cookies, or broker networks' },
              { title: 'Built around Canadian driver trust', desc: 'Designed custom tailored and optimized for PIPEDA guidelines' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 group/bullet">
                <div className="bg-slate-50 text-slate-800 rounded-full p-0.5 shrink-0 mt-0.5 border border-slate-200 shadow-3xs hover:bg-slate-100 transition-colors">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight font-extrabold text-slate-900 text-[12.5px] tracking-tight transition-colors duration-200">{item.title}</span>
                  <span className="text-[10px] text-slate-500 leading-relaxed font-semibold mt-0.5">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* MICROSOFT-TOUCH HIGH DISCLOSURE PRE-LAUNCH TRANSPARENCY NOTE */}
        <footer className="space-y-6 pt-2 text-center">
          <div className="bg-white border border-slate-200/60 rounded-2xl p-4 text-left shadow-[0_4px_16px_rgba(0,0,0,0.005)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50/50 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-2 font-extrabold text-slate-900 mb-2 font-sans text-xs tracking-tight">
              <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center border border-slate-100 font-semibold">
                <Info className="w-3.5 h-3.5 text-[#0078d4]" />
              </div>
              <span className="uppercase tracking-wider text-[10px] text-slate-400 font-mono">Disclosure Protocol</span>
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
              Astrateq Gadgets is currently in pre-launch market validation. Hardware availability, compatibility, and rollout timing are subject to validation results, supplier readiness, and future manufacturing decisions.
            </p>
          </div>

          {/* SOCIAL LINKS (Apple Minimal High-Touch Icon Trays) */}
          <div className="space-y-4 pt-1">
            <div className="flex justify-center gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-pink-600 hover:bg-pink-50/10 hover:border-pink-200 hover:shadow-xs active:scale-95 transition-all duration-300 shrink-0 shadow-3xs"
                title="Follow Instagram (@astrateq24)"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-[#0078d4] hover:bg-blue-50/10 hover:border-blue-200 hover:shadow-xs active:scale-95 transition-all duration-300 shrink-0 shadow-3xs"
                title="Follow X / Twitter (@AstrateqIQ)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-blue-700 hover:bg-blue-50/10 hover:border-blue-200 hover:shadow-xs active:scale-95 transition-all duration-300 shrink-0 shadow-3xs"
                title="Follow LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <p className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase">
                &copy; {new Date().getFullYear()} Astrateq Gadgets. All rights reserved.
              </p>
              <p className="text-[9px] text-slate-400/80 font-semibold font-sans tracking-wide">
                Engineered for Safe & Private Space awareness.
              </p>
            </div>
          </div>
        </footer>

      </div>

      {/* FULLY ANIMATED INTERACTIVE SLIDE-UP DRAWER FOR INTERACTIVE WIDGETS */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-xs cursor-pointer"
            />

            {/* Bottom Sheet on Mobile, Centered Card on Larger screens */}
            <motion.div
              initial={{ opacity: 0, y: '70%', scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: '70%', scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="fixed bottom-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-md bg-[#f5f8fa] border-t sm:border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl z-50 p-6 flex flex-col focus:outline-none"
            >
              {/* Soft Pull Indicator for mobile feeling */}
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden cursor-pointer" onClick={handleCloseModal} />
              
              {/* Close Button top-right */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-navy rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-1 overflow-y-auto max-h-[75vh] pr-1">
                {activeModal === 'compatibility' && <CompatibilityTester onClose={handleCloseModal} />}
                {activeModal === 'readiness' && <ReadinessWizard onClose={handleCloseModal} />}
                {activeModal === 'privacy' && <PrivacyDeepDive onClose={handleCloseModal} />}
                {activeModal === 'explainer' && <ExplainerModal onClose={handleCloseModal} />}
                {activeModal === 'updates' && <UpdatesModal onClose={handleCloseModal} />}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
