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
  Info,
  BookOpen
} from 'lucide-react';

// Import sub-components
import CompatibilityTester from './components/CompatibilityTester';
import ReadinessWizard from './components/ReadinessWizard';
import PrivacyDeepDive from './components/PrivacyDeepDive';
import ExplainerModal from './components/ExplainerModal';
import UpdatesModal from './components/UpdatesModal';
import ReadmeModal from './components/ReadmeModal';

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
          <div className="flex items-center justify-center mb-2 mt-2 animate-fade-in">
            <img 
              src="https://i.imgur.com/sHJc7d5.png" 
              alt="Astrateq Gadgets Premium Automotive Brand" 
              referrerPolicy="no-referrer"
              className="h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,102,204,0.1)] transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Sleek Badge Indicator */}
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/80 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,120,212,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4] animate-pulse" />
            <span className="text-[10px] font-bold text-[#0066b2] tracking-[0.08em] uppercase font-mono">Summer 2026 Trial Phase</span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-slate-300 to-slate-400/40" />
            <p className="text-[11px] font-display font-bold text-slate-700 tracking-[0.28em] uppercase transition-all duration-500 hover:text-[#0078d4] hover:tracking-[0.3em] select-none">
              Drive Safer <span className="text-[#0078d4] font-sans mx-1 opacity-90 animate-pulse">•</span> Drive Smarter
            </p>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-slate-300 to-slate-400/40" />
          </div>
        </header>

        {/* HERO SECTION (Porsche dynamic layout) */}
        <div id="hero-card" className="bg-gradient-to-tr from-white via-white to-blue-50/20 backdrop-blur-md rounded-3xl p-6 border border-slate-200/60 shadow-[0_10px_35px_rgba(0,102,178,0.02)] flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-[0_16px_45px_rgba(0,120,212,0.06)] hover:border-[#0078d4]/25 duration-500">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-blue-300/10 via-cyan-200/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-3.5">
            {/* Premium product tag / badge */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest font-extrabold text-[#0078d4] bg-[#0078d4]/8 rounded-md uppercase border border-[#0078d4]/15">
                Cohort Exclusive
              </span>
              <span className="text-[9px] text-slate-300 font-medium font-sans">•</span>
              <span className="text-[9.5px] text-slate-500 font-bold font-mono tracking-wider uppercase">Astrateq Intel Gen-II</span>
            </div>

            <h1 className="font-display font-black text-xl md:text-2xl leading-snug tracking-tight text-slate-900">
              Privacy-first <span className="bg-gradient-to-r from-[#005a9e] via-[#0078d4] to-cyan-500 bg-clip-text text-transparent">vehicle intelligence</span> for safer driving decisions.
            </h1>
            <p className="text-[13.5px] md:text-[15.5px] text-slate-600 leading-relaxed font-sans font-medium tracking-tight">
              Join early access, check your vehicle fit, or complete the <span className="text-[#0078d4] font-extrabold underline decoration-[#0078d4]/25 decoration-2 underline-offset-4 hover:text-[#005a9e] hover:decoration-[#0078d4]/50 transition-colors duration-300">Summer Readiness Check</span> before the Canadian founding cohort window closes.
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

        </div>        {/* PREMIUM INTERACTIVE ROADSIDE ONBOARDING SEQUENCE (Tesla / Porsche Style Roadmap Setup) */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6.5 shadow-[0_16px_40px_rgba(0,0,0,0.015)] relative overflow-hidden group">
          
          {/* Subtle modern electric styling overlay */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-b from-[#0078d4]/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Top aesthetic subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0078d4] via-cyan-400 to-emerald-400" />
          
          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#0078d4] font-bold mb-7 text-center flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d4]"></span>
            </span>
            <span>Pre-Launch Onboarding Sequence</span>
          </h3>
          
          <div className="relative flex flex-col gap-5">
            
            {/* Elegant active gradient vertical timeline connector */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#0078d4] via-cyan-400 to-emerald-400 z-0 rounded-full" />
            
            {/* Onboarding step 1 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(0,120,212,0.35)] ring-4 ring-blue-50/70 z-20 transition-transform duration-300 group-hover/item:scale-110">
                1
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#0c243c] via-[#004b87] to-[#0078d4] p-4.5 rounded-2xl border border-blue-500/30 shadow-[0_10px_35px_rgba(0,120,212,0.15)] hover:shadow-[0_12px_40px_rgba(0,120,212,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white">Join Founding Cohort</span>
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-200"></span>
                    </span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Priority</span>
                </div>
                <p className="text-[11px] text-blue-100 font-semibold leading-relaxed mt-2 font-sans">
                  Secure prioritized early access consideration in Canadian validation cohorts.
                </p>
              </div>
            </div>

            {/* Onboarding step 2 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(6,182,212,0.35)] ring-4 ring-cyan-50/70 z-20 transition-transform duration-300 group-hover/item:scale-110">
                2
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#063442] via-[#00637c] to-[#01a2c4] p-4.5 rounded-2xl border border-cyan-500/30 shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white">Verify Platform Fit</span>
                    <span className="text-[8px] font-bold font-mono text-cyan-200 uppercase bg-cyan-900/40 px-2 py-0.5 rounded border border-cyan-400/30 tracking-wider">Fast Route</span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Instant</span>
                </div>
                <p className="text-[11px] text-cyan-100 font-semibold leading-relaxed mt-2 font-sans">
                  Submit model details to verify on-device standard compatibility markers.
                </p>
              </div>
            </div>

            {/* Onboarding step 3 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-750 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(16,185,129,0.35)] ring-4 ring-emerald-50/70 z-20 transition-transform duration-300 group-hover/item:scale-110">
                3
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#023c22] via-[#057a44] to-[#10b981] p-4.5 rounded-2xl border border-emerald-500/30 shadow-[0_10px_35px_rgba(16,185,129,0.15)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white">Monitor Engineering</span>
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-200"></span>
                    </span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Live Feed</span>
                </div>
                <p className="text-[11px] text-emerald-100 font-semibold leading-relaxed mt-2 font-sans">
                  Follow local telemetry build updates, hardware casings, and geofencing progress.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* APPLE-GRAD TRUST & PRIVACY MATRIX */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6.5 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.015)]">
          <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-[#0078d4]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3.5 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white flex items-center justify-center shrink-0 border border-slate-700 shadow-3xs">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-slate-950 tracking-tight">Privacy by design</h3>
              <p className="text-[9px] font-bold font-mono text-[#0078d4] uppercase tracking-wider">Astrateq Premium Protocols</p>
            </div>
          </div>
          
          <div className="space-y-3.5">
            {[
              { title: 'On-device intelligence direction', desc: 'Telemetry processed locally without continuous cloud logging.', tag: 'LOCAL-AIS', color: 'blue', textTheme: 'text-blue-950', descTheme: 'text-blue-800/75', borderTheme: 'border-blue-200/50', bgTheme: 'bg-blue-50/45 hover:bg-blue-50/75', badgeBg: 'bg-blue-600 shadow-[0_2px_8px_rgba(0,120,212,0.25)]', tagTheme: 'bg-blue-100/70 text-blue-800 border-blue-200/60' },
              { title: 'User-controlled data expectations', desc: 'Complete sovereign oversight of vehicle logs and index markers.', tag: 'SOVEREIGN', color: 'cyan', textTheme: 'text-cyan-950', descTheme: 'text-cyan-800/75', borderTheme: 'border-cyan-200/50', bgTheme: 'bg-cyan-50/45 hover:bg-cyan-50/75', badgeBg: 'bg-cyan-600 shadow-[0_2px_8px_rgba(6,182,212,0.25)]', tagTheme: 'bg-cyan-100/70 text-cyan-800 border-cyan-200/60' },
              { title: 'No unnecessary data sharing', desc: 'Secure local containment ensuring absolute hardware isolation.', tag: 'ISOLATED', color: 'purple', textTheme: 'text-purple-950', descTheme: 'text-purple-800/75', borderTheme: 'border-purple-200/50', bgTheme: 'bg-purple-50/45 hover:bg-purple-50/75', badgeBg: 'bg-purple-600 shadow-[0_2px_8px_rgba(147,51,234,0.25)]', tagTheme: 'bg-purple-100/70 text-purple-800 border-purple-200/60' },
              { title: 'No advertising-tracker resale', desc: 'Zero commercial profile monetizations, cookies, or broker networks.', tag: 'ZERO-ADS', color: 'amber', textTheme: 'text-amber-950', descTheme: 'text-amber-850/75', borderTheme: 'border-amber-200/50', bgTheme: 'bg-amber-50/45 hover:bg-amber-50/75', badgeBg: 'bg-amber-600 shadow-[0_2px_8px_rgba(217,119,6,0.25)]', tagTheme: 'bg-amber-100/70 text-amber-800 border-amber-200/60' },
              { title: 'Built around Canadian driver trust', desc: 'Designed custom tailored and optimized for PIPEDA guidelines.', tag: 'PIPEDA', color: 'emerald', textTheme: 'text-emerald-950', descTheme: 'text-emerald-850/75', borderTheme: 'border-emerald-200/50', bgTheme: 'bg-emerald-50/45 hover:bg-emerald-50/75', badgeBg: 'bg-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.25)]', tagTheme: 'bg-emerald-100/70 text-emerald-800 border-emerald-200/60' }
            ].map((item, idx) => (
              <div key={idx} className={`p-3.5 ${item.bgTheme} rounded-2xl border ${item.borderTheme} flex items-start gap-4 hover:shadow-[0_8px_25px_rgba(0,0,0,0.015)] transition-all duration-300 transform hover:scale-[1.005]`}>
                <div className={`w-8 h-8 rounded-xl ${item.badgeBg} text-white flex items-center justify-center shrink-0`}>
                  <Check className="w-4 h-4 text-white stroke-[3.5]" />
                </div>
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className={`leading-none font-display font-bold ${item.textTheme} text-xs tracking-tight`}>{item.title}</span>
                    <span className={`text-[8px] font-mono font-bold tracking-wider uppercase border px-1.5 py-0.2 rounded shrink-0 ${item.tagTheme}`}>{item.tag}</span>
                  </div>
                  <span className={`text-[10px] ${item.descTheme} font-semibold mt-1.5 leading-normal font-sans`}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MICROSOFT-TOUCH HIGH DISCLOSURE PRE-LAUNCH TRANSPARENCY NOTE */}
        <footer className="space-y-6 pt-2 text-center">
          <div className="bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 border-2 border-blue-400/70 rounded-3xl p-6.5 text-left shadow-[0_0_25px_rgba(0,120,212,0.25)] ring-4 ring-blue-100/45 relative overflow-hidden group hover:border-[#0078d4] hover:shadow-[0_0_35px_rgba(0,120,212,0.45)] hover:ring-blue-100/80 transition-all duration-500">
            {/* Elegant premium left gradient highlight bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0078d4] via-[#0066b2] to-[#01a2c4] rounded-l-full" />
            
            {/* Subtle light blue radial glow behind */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-bl from-blue-100/30 via-transparent to-transparent opacity-70 rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5 font-display font-medium">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center border border-blue-200/50 shadow-3xs group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-4 h-4 text-[#0078d4] stroke-[2.5]" />
                </div>
                <span className="uppercase tracking-[0.2em] text-[10.5px] text-[#0078d4] font-mono font-extrabold">Disclosure Protocol</span>
              </div>
              <span className="text-[8.5px] font-mono font-bold text-[#0066b2] bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-3xs">
                Active Verification
              </span>
            </div>
            
            <p className="text-xs md:text-[13px] text-slate-600/95 leading-relaxed font-sans font-medium pl-1 md:pl-2.5 transition-colors duration-300">
              <span className="text-slate-900 font-bold">Astrateq Gadgets™</span> is currently undergoing an active, regulated period of <span className="text-[#0078d4] font-bold underline decoration-[#0078d4]/30 decoration-2 underline-offset-4">pre-launch market validation</span>. Full physical hardware availability, consumer vehicle compatibility indices, and exact target release schedules remain strictly subject to ongoing validation outcomes, manufacturing partner readiness, and ultimate corporate leadership approval.
            </p>
          </div>

          {/* SOCIAL LINKS & COPYRIGHT SECTION (Premium Fluent Microsoft Aesthetic Panel) */}
          <div className="relative mt-8 p-6.5 rounded-3xl bg-gradient-to-b from-slate-50/40 via-white to-slate-50/60 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,102,178,0.03)] hover:border-[#0078d4]/15 transition-all duration-500 overflow-hidden text-center">
            
            {/* Ambient decorative glowing backlights to represent the core products */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl pointer-events-none opacity-40 select-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none opacity-40 select-none" />

            <div className="flex flex-col items-center gap-5 relative z-10">
              
              {/* Premium Title or Line with visual indicator */}
              <div className="flex items-center gap-3 w-full max-w-xs justify-center select-none">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-200/80" />
                <span className="text-[9.5px] font-bold font-mono text-slate-400/90 tracking-[0.2em] uppercase">Stay Connected</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-200/80" />
              </div>

              {/* Social Buttons Block (Preserving components as requested) */}
              <div className="flex justify-center gap-5">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-pink-400/20 text-pink-600 flex items-center justify-center shadow-[0_3px_12px_rgba(219,39,119,0.06)] hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600 hover:text-white hover:border-pink-500 active:scale-90 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(219,39,119,0.3)] shrink-0 group/icon"
                  title="Follow Instagram (@astrateq24)"
                >
                  <Instagram className="w-5.5 h-5.5 group-hover/icon:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-sky-400/20 text-[#0078d4] flex items-center justify-center shadow-[0_3px_12px_rgba(0,120,212,0.06)] hover:bg-gradient-to-br hover:from-sky-500 hover:to-[#005a9e] hover:text-white hover:border-[#0078d4] active:scale-90 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,120,212,0.3)] shrink-0 group/icon"
                  title="Follow X / Twitter (@AstrateqIQ)"
                >
                  <Twitter className="w-5.5 h-5.5 group-hover/icon:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-blue-400/20 text-blue-700 flex items-center justify-center shadow-[0_3px_12px_rgba(26,54,93,0.06)] hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-800 hover:text-white hover:border-blue-600 active:scale-90 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(26,54,93,0.3)] shrink-0 group/icon"
                  title="Follow LinkedIn"
                >
                  <Linkedin className="w-5.5 h-5.5 group-hover/icon:scale-110 transition-transform duration-300" />
                </a>
              </div>
              
              {/* Splitter */}
              <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Copyright Info - Enlarged, Visual Clarity, Segoe UI (font-sans) */}
              <div className="flex flex-col items-center gap-1.5 max-w-md">
                <p className="text-xs md:text-[13.5px] font-sans font-bold text-slate-800 tracking-[0.05em] select-none flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 transition-colors duration-300 hover:text-[#0078d4]">
                  <span>&copy; {new Date().getFullYear()}</span>
                  <span className="font-extrabold uppercase text-[#0c243c]">Astrateq Gadgets™</span>
                  <span className="font-medium text-slate-400">•</span>
                  <span className="font-semibold text-slate-600">All Rights Reserved.</span>
                </p>
                <div className="flex items-center gap-1.5 mt-0.5 select-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <p className="text-[10.5px] md:text-sm text-slate-500 font-sans font-medium tracking-wide">
                    Engineered for Safe & Private Space awareness.
                  </p>
                </div>
              </div>

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
                {activeModal === 'readme' && <ReadmeModal onClose={handleCloseModal} />}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
