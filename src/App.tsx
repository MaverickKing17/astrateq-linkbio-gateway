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
        <header className="flex flex-col items-center text-center mt-2 gap-3.5">
          
          {/* Times Square Style Interactive Neon Billboard Pill */}
          <motion.div 
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="group relative cursor-pointer inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ff4b00] via-[#ff6a00] to-[#ff9100] border-2 border-white/65 px-4.5 py-2 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,75,0,0.45)] hover:shadow-[0_0_38px_rgba(255,106,0,0.8)] transition-all duration-300"
          >
            {/* Glowing marquee underlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 blur-[2px]" />
            
            {/* Light sweep indicator line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"></span>
            </span>
            
            <span className="relative text-[10.5px] md:text-[11.5px] font-sans font-black tracking-widest text-white uppercase drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)] group-hover:scale-[1.01] transition-transform">
              Canada Driver Pilot Program
            </span>
            
            <span className="text-white/50 text-[10px] select-none font-bold">•</span>
            
            <span className="relative px-2.5 py-0.5 rounded bg-black/35 border border-white/30 text-[9px] font-mono font-black text-white uppercase tracking-widest animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.15)]">
              ACTIVE LIVE
            </span>
          </motion.div>

          {/* Logo Brand Representation - Upgraded Imgur URL with text */}
          <div className="flex items-center justify-center mb-1 mt-1 animate-fade-in">
            <img 
              src="https://i.imgur.com/sHJc7d5.png" 
              alt="Astrateq Gadgets Premium Automotive Brand" 
              referrerPolicy="no-referrer"
              className="h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,102,204,0.1)] transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-slate-300 to-slate-400/40" />
            <p className="text-[11px] font-display font-bold text-slate-700 tracking-[0.28em] uppercase transition-all duration-500 hover:text-[#0078d4] hover:tracking-[0.3em] select-none">
              Drive Safer <span className="text-[#0078d4] font-sans mx-1 opacity-90 animate-pulse">•</span> Drive Smarter
            </p>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-slate-300 to-slate-400/40" />
          </div>
        </header>

        {/* HERO SECTION (Times Square Interactive BillBoard Layout) */}
        <motion.div 
          id="hero-card" 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-tr from-[#030712] via-[#090d1a] to-[#17051e] rounded-3xl p-6.5 border-2 border-[#ff007f]/40 shadow-[0_0_40px_rgba(255,0,127,0.2)] flex flex-col gap-5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_55px_rgba(0,245,212,0.35)] hover:border-[#00f5d4]/60"
        >
          {/* Neon backlighting blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-56 h-56 bg-gradient-to-br from-[#ff007f]/20 via-[#00f5d4]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-gradient-to-tr from-[#ffb700]/15 via-[#00f5d4]/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
          
          <div className="space-y-4 relative z-10">
            {/* Premium billboard product tag / badge */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-3 py-1 text-[9px] font-mono tracking-widest font-black text-white bg-gradient-to-r from-[#ff007f] to-[#ff2a85] rounded-md uppercase border border-white/20 shadow-[0_0_12px_rgba(255,0,127,0.45)]">
                Pilot Exclusive
              </span>
              <span className="text-white/20 select-none">•</span>
              <span className="text-[10px] text-yellow-400 font-black font-mono tracking-wider uppercase drop-shadow-[0_0_8px_rgba(234,179,8,0.3)] animate-pulse">
                ASTRATEQ OBD-II ADAPTER
              </span>
            </div>

            <h1 className="font-display font-black text-2xl md:text-3xl leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              The privacy-first <span className="bg-gradient-to-r from-[#00f5d4] via-emerald-400 to-[#ffb700] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,245,212,0.3)] animate-pulse">smart assistant</span> that plugs into your car.
            </h1>
            <p className="text-[14px] md:text-[15px] text-slate-200 leading-relaxed font-sans font-medium tracking-tight">
              Get diagnostic insights, safety metrics, and trip summaries completely offline. Join our pilot driver program to verify compatibility, reserve a priority waitlist slot, or take the short readiness quiz today.
            </p>
          </div>

          {/* Crossover Premium Image representation (Muskoka Drive Layout) with neon frames */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.5)] border border-white/10 group">
            <img 
              src={astrateqSummerDrive} 
              alt="Premium SUV driving on scenic summer Ontario highway" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            {/* Soft dark elegant gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-neutral-950/85 backdrop-blur-md text-white rounded-lg px-3 py-1.5 text-[9.5px] font-mono tracking-wide font-black border border-[#00f5d4]/40 shadow-[0_0_12px_rgba(0,245,212,0.25)]">
              <MapPin className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
              <span>GTA / Muskoka Roads, Ontario</span>
            </div>
          </div>
        </motion.div>

        {/* PRIMARY CTA SECTION */}
        {/* TIMES SQUARE HIGH-IMPACT BILLBOARD CONVERSION MODULE */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 md:p-7.5 text-white border-2 border-[#0078d4]/80 shadow-[0_20px_50px_rgba(0,120,212,0.25)] ring-4 ring-[#0078d4]/20 group">
          
          {/* Ambient Cybernetic Neon BG Lights */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-48 h-48 bg-[#0078d4]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4.5">
            
            {/* Live Ticker Status Header */}
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Canada Driver Pilot Program
                </span>
              </div>
              <span className="text-[9.5px] md:text-[11px] font-mono font-extrabold text-cyan-300 tracking-wider">
                92% SPOTS FILLED
              </span>
            </div>

            {/* Canadian Founding Cohort Title Banner */}
            <div className="text-center py-2 bg-white/5 rounded-2xl p-4 border border-white/10">
              <span className="inline-flex flex-col items-center gap-1.5">
                <span className="text-[10px] md:text-xs font-mono font-black text-amber-400 tracking-widest uppercase flex items-center gap-1">
                  <span>⚡</span> LIMITED SPACE <span>⚡</span>
                </span>
                <span className="text-sm md:text-base font-sans font-black text-white tracking-wide uppercase">
                  Reserve Pre-Launch Priority Slot
                </span>
                <p className="text-[11px] md:text-xs text-slate-300 font-sans font-medium mt-1 leading-normal max-w-md mx-auto">
                  Apply to join our pre-launch pilot. Selected drivers receive priority waitlist status for upcoming hardware and lifetime diagnostic software access 100% free of charge.
                </p>
              </span>
            </div>

            {/* Massive Times-Square Style CTA Button */}
            <motion.div
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group/mo"
            >
              {/* Dynamic pulsing neon backdrop glow in brilliant premium turquoise blue */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#005a9e] via-[#00f5d4] to-[#0078d4] rounded-2xl blur-xl opacity-80 group-hover/mo:opacity-100 group-hover/mo:scale-103 transition duration-300 animate-pulse" />
              
              <a 
                href={primaryCTAUrl}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="relative w-full py-5.5 bg-gradient-to-r from-[#005a9e] via-[#0078d4] to-[#00f5d4] rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_12px_40px_rgba(0,120,212,0.35)] hover:shadow-[0_20px_50px_rgba(0,245,212,0.55)] transition-all text-center border-2 border-white/40 cursor-pointer overflow-hidden group/btn"
                id="cta-primary-cohort"
              >
                {/* Premium active neon hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:animate-shine duration-1100" />
                
                <div className="flex items-center gap-2.5 px-5 relative z-10">
                  <Sparkles className="w-6.5 h-6.5 text-[#e0f7fa] animate-bounce shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  <span className="font-sans font-black text-xl md:text-2xl tracking-wide uppercase text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]">
                    Join Founding Driver Cohort
                  </span>
                  <ChevronRight className="w-6 h-6 text-[#e0f7fa] group-hover/btn:translate-x-2 transition-transform duration-300 stroke-[4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                </div>
                
                <div className="mt-1.5 flex items-center gap-2 px-3 py-0.5 bg-black/40 rounded-full border border-white/10 relative z-10">
                  <span className="text-[10px] md:text-[11px] text-[#e0f7fa] font-mono tracking-wider uppercase font-black">
                    Secure Canadian Validation priority
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </div>
              </a>
            </motion.div>

            {/* Micro-trust indicators below the button */}
            <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
              <div className="flex flex-col items-center gap-1">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase tracking-wider">SECURE ENTRY</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-white/10">
                <span className="text-xs font-black text-[#0078d4] font-mono">100%</span>
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase tracking-wider">PRIVACY MATCH</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-black text-emerald-400 font-mono">FREE</span>
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase tracking-wider">REGISTRATION</span>
              </div>
            </div>

          </div>
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
                    Summer Driving Safety Check
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    Interactive
                  </span>
                </div>
                <span className="text-[11px] text-amber-50/90 font-semibold mt-1 leading-relaxed">
                  Take a quick 60-second questionnaire to check if your car is tuned up and safe for summer road trips.
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
                    Check If Your Car Fits
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    Compatibility
                  </span>
                </div>
                <span className="text-[11px] text-cyan-50/90 font-semibold mt-1 leading-relaxed">
                  Search your vehicle's make and model to instantly verify support for our smart plug-in adapter.
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
                    How It Works
                  </span>
                </div>
                <span className="text-[11px] text-purple-50/90 font-semibold mt-1 leading-relaxed">
                  Learn how our smart on-board adapter analyzes your driving patterns completely offline.
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
            whileHover={{ y: -1.5, shadow: "0 12px 30px rgba(249,115,22,0.18)" }} 
            whileTap={{ scale: 0.99 }} 
            className="overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 rounded-2xl border border-orange-500/30 shadow-[0_4px_22px_rgba(249,115,22,0.15)] transition-all duration-300"
          >
            <div className="p-4 flex items-start gap-3.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                <Shield className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-sans font-extrabold tracking-tight text-sm text-white">
                    Our Zero-Cloud Privacy Guarantee
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-md border border-white/25 shrink-0">
                    Privacy
                  </span>
                </div>
                <span className="text-[11px] text-orange-50/90 font-semibold mt-1 leading-relaxed">
                  See how our hardware processes tracking and engine diagnostic data locally inside your vehicle.
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
                    Project Roadmap & Launch Updates
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-white bg-red-650 px-2 py-0.5 rounded-md shadow-xs shrink-0 animate-pulse border border-red-500">
                    Timeline
                  </span>
                </div>
                <span className="text-[11px] text-blue-100 font-semibold mt-1 leading-relaxed">
                  Track our manufacturing steps, shipping dates, and active pilot test zones across Canada.
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
        
        {/* PREMIUM INTERACTIVE ROADSIDE ONBOARDING SEQUENCE (How to Join details) */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6.5 shadow-[0_16px_40px_rgba(0,0,0,0.015)] relative overflow-hidden group">
          
          {/* Subtle modern electric styling overlay */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-b from-[#0078d4]/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Top aesthetic subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0078d4] via-cyan-400 to-[#f97316]" />
          
          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#0078d4] font-bold mb-7 text-center flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d4]"></span>
            </span>
            <span>How to Join the Program</span>
          </h3>
          
          <div className="relative flex flex-col gap-5">
            
            {/* Elegant active gradient vertical timeline connector */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#0078d4] via-cyan-400 to-[#f97316] z-0 rounded-full" />
            
            {/* Onboarding step 1 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-blue-600 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(0,120,212,0.35)] ring-4 ring-blue-50/70 z-20 transition-transform duration-300 group-hover/item:scale-110">
                1
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#0c243c] via-[#004b87] to-[#0078d4] p-4.5 rounded-2xl border border-blue-500/30 shadow-[0_10px_35px_rgba(0,120,212,0.15)] hover:shadow-[0_12px_40px_rgba(0,120,212,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white font-sans">Apply Online</span>
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-200"></span>
                    </span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Step 1</span>
                </div>
                <p className="text-[11px] text-blue-100 font-semibold leading-relaxed mt-2 font-sans">
                  Click the tangerine button above and complete our quick pilot registration to secure your spot.
                </p>
              </div>
            </div>

            {/* Onboarding step 2 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-cyan-600 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(6,182,212,0.35)] ring-4 ring-cyan-50/70 z-20 transition-transform duration-300 group-hover/item:scale-110">
                2
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#063442] via-[#00637c] to-[#01a2c4] p-4.5 rounded-2xl border border-cyan-500/30 shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white font-sans">Confirm Your Fit</span>
                    <span className="text-[8px] font-bold font-mono text-cyan-200 uppercase bg-cyan-900/40 px-2 py-0.5 rounded border border-cyan-400/30 tracking-wider">Automated</span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Step 2</span>
                </div>
                <p className="text-[11px] text-cyan-100 font-semibold leading-relaxed mt-2 font-sans">
                  Use our instant compatibility checker to verify that our adapter matches your car's model year.
                </p>
              </div>
            </div>

            {/* Onboarding step 3 */}
            <div className="flex items-start gap-4.5 relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-orange-600 bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-[0_4px_14px_rgba(249,115,22,0.35)] ring-4 ring-orange-100/30 z-20 transition-transform duration-300 group-hover/item:scale-110">
                3
              </div>
              <div className="flex-1 flex flex-col bg-gradient-to-br from-[#3e1700] via-[#8c3500] to-[#f97316] p-4.5 rounded-2xl border border-orange-500/30 shadow-[0_10px_35px_rgba(249,115,22,0.15)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.25)] transition-all duration-300 transform hover:scale-[1.01] text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-extrabold tracking-tight text-white font-sans">Plug & Drive Privately</span>
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-300"></span>
                    </span>
                  </div>
                  <span className="text-[8px] font-bold font-mono tracking-wider bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full uppercase">Step 3</span>
                </div>
                <p className="text-[11px] text-orange-100 font-semibold leading-relaxed mt-2 font-sans">
                  Once approved, plug your adapter into your car's standard port and track detailed vehicle insights entirely offline.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TIMES SQUARE BILLBOARD METROPOLITAN TRUST & PRIVACY MATRIX */}
        <div className="bg-gradient-to-br from-[#02050f] via-[#0b0f1d] to-[#120524] border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.18)] rounded-3xl p-6.5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_55px_rgba(0,245,212,0.35)] hover:border-cyan-400/60 group">
          
          <div className="absolute top-[-25%] right-[-25%] w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-20%] w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4.5 relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#ff007f] to-[#aa00ff] text-white flex items-center justify-center shrink-0 border border-[#ff007f]/40 shadow-[0_0_15px_rgba(255,0,127,0.45)]">
              <Lock className="w-5.5 h-5.5 text-white stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-display font-black text-base text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">Privacy by design</h3>
              <p className="text-[9.5px] font-black font-mono text-[#00f5d4] uppercase tracking-[0.14em] drop-shadow-[0_0_6px_rgba(0,245,212,0.3)]">Astrateq Premium Protocols</p>
            </div>
          </div>
          
          <div className="space-y-3 relative z-10">
            {[
              { title: 'On-device intelligence direction', desc: 'Telemetry processed locally without continuous cloud logging.', tag: 'LOCAL-AIS', color: 'blue', textTheme: 'text-blue-200', descTheme: 'text-blue-100/75', borderTheme: 'border-blue-500/25', bgTheme: 'bg-blue-950/20 hover:bg-blue-950/35 hover:border-blue-400/45', badgeBg: 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.45)]', tagTheme: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
              { title: 'User-controlled data expectations', desc: 'Complete sovereign oversight of vehicle logs and index markers.', tag: 'SOVEREIGN', color: 'cyan', textTheme: 'text-cyan-200', descTheme: 'text-cyan-100/75', borderTheme: 'border-cyan-500/25', bgTheme: 'bg-cyan-950/20 hover:bg-cyan-950/35 hover:border-cyan-400/45', badgeBg: 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.45)]', tagTheme: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
              { title: 'No unnecessary data sharing', desc: 'Secure local containment ensuring absolute hardware isolation.', tag: 'ISOLATED', color: 'purple', textTheme: 'text-purple-200', descTheme: 'text-purple-100/75', borderTheme: 'border-purple-500/25', bgTheme: 'bg-purple-950/20 hover:bg-purple-950/35 hover:border-purple-400/45', badgeBg: 'bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.45)]', tagTheme: 'bg-purple-50/20 text-purple-300 border-purple-500/40' },
              { title: 'No advertising-tracker resale', desc: 'Zero commercial profile monetizations, cookies, or broker networks.', tag: 'ZERO-ADS', color: 'amber', textTheme: 'text-amber-200', descTheme: 'text-amber-100/75', borderTheme: 'border-amber-500/25', bgTheme: 'bg-amber-950/20 hover:bg-amber-950/35 hover:border-amber-400/45', badgeBg: 'bg-[#ffb700] shadow-[0_0_12px_rgba(255,183,0,0.45)]', tagTheme: 'bg-amber-500/20 text-[#ffb700] border-amber-500/40' },
              { title: 'Built around Canadian driver trust', desc: 'Designed custom tailored and optimized for PIPEDA guidelines.', tag: 'PIPEDA', color: 'emerald', textTheme: 'text-emerald-200', descTheme: 'text-emerald-100/75', borderTheme: 'border-emerald-500/25', bgTheme: 'bg-emerald-950/20 hover:bg-emerald-950/35 hover:border-emerald-400/45', badgeBg: 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)]', tagTheme: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
            ].map((item, idx) => (
              <div key={idx} className={`p-3.5 ${item.bgTheme} rounded-2xl border ${item.borderTheme} flex items-start gap-4 transition-all duration-300 transform hover:scale-[1.01]`}>
                <div className={`w-8 h-8 rounded-xl ${item.badgeBg} text-white flex items-center justify-center shrink-0`}>
                  <Check className="w-4 h-4 text-white stroke-[3.5]" />
                </div>
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className={`leading-none font-display font-black ${item.textTheme} text-xs tracking-tight`}>{item.title}</span>
                    <span className={`text-[8.4px] font-mono font-black tracking-wider uppercase border px-2 py-0.5 rounded shrink-0 ${item.tagTheme}`}>{item.tag}</span>
                  </div>
                  <span className={`text-[10px] ${item.descTheme} font-semibold mt-2 leading-relaxed font-sans`}>{item.desc}</span>
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
          <div className="relative mt-8 p-6.5 rounded-3xl bg-gradient-to-br from-[#061424] via-[#0b2239] to-[#123657] border-2 border-[#0078d4]/45 shadow-[0_15px_45px_rgba(0,120,212,0.18)] hover:shadow-[0_20px_55px_rgba(0,120,212,0.28)] hover:border-[#0078d4]/70 transition-all duration-500 overflow-hidden text-center">
            
            {/* Ambient decorative glowing backlights to represent the core products */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl pointer-events-none opacity-50 select-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none opacity-50 select-none" />

            <div className="flex flex-col items-center gap-5 relative z-10">
              
              {/* Premium Title or Line with visual indicator */}
              <div className="flex items-center gap-3 w-full max-w-xs justify-center select-none">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#0078d4]/40" />
                <span className="text-[10px] md:text-xs font-black font-mono text-cyan-300 tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Stay Connected</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#0078d4]/40" />
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
              <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

              {/* Copyright Info - Enlarged, Visual Clarity, Segoe UI (font-sans) */}
              <div className="flex flex-col items-center gap-1.5 max-w-md">
                <p className="text-xs md:text-[13.5px] font-sans font-bold text-slate-100 tracking-[0.05em] select-none flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 transition-colors duration-300 hover:text-[#00f5d4]">
                  <span>&copy; {new Date().getFullYear()}</span>
                  <span className="font-extrabold uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Astrateq Gadgets™</span>
                  <span className="font-medium text-slate-400">•</span>
                  <span className="font-semibold text-slate-300">All Rights Reserved.</span>
                </p>
                <div className="flex items-center gap-1.5 mt-0.5 select-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <p className="text-[10.5px] md:text-sm text-cyan-200/80 font-sans font-medium tracking-wide">
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
