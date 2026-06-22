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
    <div className="min-h-screen bg-[#f0f4f8] text-slate-900 flex flex-col items-center px-4 py-10 relative font-sans antialiased selection:bg-[#0078d4]/10 selection:text-[#0078d4] overflow-x-hidden">
      
      {/* Decorative ultra-premium ambient lights — Apple/Tesla style */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/10 to-teal-200/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200/10 via-cyan-200/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[8%] right-[-15%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#0078d4]/5 via-blue-200/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Main Single-View Container (Mobile optimized max-width with extreme design density) */}
      <div className="w-full max-w-md flex flex-col gap-6 relative z-10">
        
        {/* HEADER SECTION (Tesla/Apple style minimal elegance) */}
        <header className="flex flex-col items-center text-center mt-2 gap-3.5">
          
          {/* Status Badge: Canadian pre-launch validation active */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-[#0078d4]/20 px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,120,212,0.06)] transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d4] shadow-[0_0_8px_rgba(0,120,212,0.5)]"></span>
            </span>
            
            <span className="relative text-[10.5px] md:text-[11px] font-mono font-black tracking-wider text-slate-800 uppercase">
              Canadian pre-launch validation active
            </span>
            
            <span className="text-slate-300 select-none">•</span>
            
            <span className="relative px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono font-bold text-amber-800 uppercase tracking-wider">
              Validation phase active
            </span>
          </motion.div>

          {/* Logo Brand Representation - Upgraded Imgur URL with text */}
          <div className="flex items-center justify-center mb-1 mt-1 animate-fade-in">
            <img 
              src="https://i.imgur.com/sHJc7d5.png" 
              alt="Astrateq Gadgets Premium Automotive Brand" 
              referrerPolicy="no-referrer"
              className="h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,102,204,0.05)] transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-slate-300 to-slate-400/20" />
            <p className="text-[11px] font-sans font-bold text-slate-700 tracking-[0.28em] uppercase select-none">
              Drive Safer <span className="text-[#0078d4] font-sans mx-1 opacity-90 animate-pulse">•</span> Drive Smarter
            </p>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-slate-300 to-slate-400/20" />
          </div>
        </header>

        {/* HERO SECTION (Times Square Interactive BillBoard Layout) */}
        <motion.div 
          id="hero-card" 
          whileHover={{ y: -1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0b1329] rounded-3xl p-6 border border-[#1e294b] shadow-[0_8px_30px_rgba(15,23,42,0.15)] flex flex-col gap-5 relative overflow-hidden"
        >
          {/* Neon backlighting blobs - clean, subtle */}
          <div className="absolute top-[-10%] right-[-10%] w-56 h-56 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            {/* Premium billboard product tag / badge */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-3 py-1 text-[9px] font-mono tracking-widest font-black text-white bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-md uppercase border border-white/10 shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
                Pre-launch validation
              </span>
              <span className="text-white/20 select-none">•</span>
              <span className="text-[10px] text-cyan-300 font-bold font-mono tracking-wider uppercase">
                Privacy-first vehicle intelligence concept
              </span>
            </div>

            <h1 className="font-sans font-black text-2xl md:text-2xl leading-tight tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Privacy-first vehicle intelligence for smarter driving decisions.
            </h1>
            <p className="text-[13.5px] md:text-[14px] text-slate-300 leading-relaxed font-sans font-medium">
              Join the Canadian pre-launch validation program, check your vehicle fit, or complete the Summer Vehicle Readiness Check before the founding cohort window closes.
            </p>
          </div>

          {/* Crossover Premium Image representation (Muskoka Drive Layout) */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-white/10 group">
            <img 
              src={astrateqSummerDrive} 
              alt="Premium SUV driving on scenic summer Ontario highway" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Soft dark elegant gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#0b1329]/90 backdrop-blur-md text-white rounded-lg px-3 py-1.5 text-[9.5px] font-mono tracking-wide font-black border border-white/10 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>GTA / Muskoka Roads, Ontario</span>
            </div>
          </div>
        </motion.div>

        {/* PRIMARY CTA SECTION */}
        {/* TIMES SQUARE HIGH-IMPACT BILLBOARD CONVERSION MODULE */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0b1329] p-6 md:p-7 text-white border-2 border-[#0078d4]/80 shadow-[0_15px_40px_rgba(0,120,212,0.18)] ring-4 ring-[#0078d4]/10 group">
          
          {/* Ambient Cybernetic Neon BG Lights */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-48 h-48 bg-[#0078d4]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4.5">
            
            {/* Live Ticker Status Header */}
            <div className="flex items-center justify-between gap-1.5 border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Canadian Driver Pilot Program — Validation Window Active
                </span>
              </div>
              <span className="text-[9.5px] md:text-[10px] font-mono font-extrabold text-cyan-400 tracking-wider">
                Canadian pilot allocation active
              </span>
            </div>

            {/* Canadian Founding Cohort Title Banner */}
            <div className="text-center py-2 bg-white/5 rounded-2xl p-4 border border-white/10">
              <span className="inline-flex flex-col items-center gap-1.5">
                <span className="text-[10px] md:text-xs font-mono font-black text-amber-400 tracking-widest uppercase flex items-center gap-1">
                  <span>⚡</span> Pre-launch validation phase <span>⚡</span>
                </span>
                <span className="text-base md:text-lg font-sans font-black text-white tracking-wide uppercase">
                  Reserve Early Access Consideration
                </span>
                <p className="text-[12px] text-slate-300 font-sans font-medium mt-1 leading-normal max-w-sm mx-auto">
                  Submit your founding cohort interest and selected early-access tier. No payment is charged today during validation testing.
                </p>
              </span>
            </div>

            {/* Massive Times-Square Style CTA Button */}
            <motion.div
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="w-full relative group/mo"
            >
              {/* Dynamic pulsing neon backdrop glow in brilliant premium turquoise blue */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005a9e] via-cyan-500 to-[#0078d4] rounded-2xl blur-md opacity-80 group-hover/mo:opacity-100 transition duration-300" />
              
              <a 
                href={primaryCTAUrl}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="relative w-full py-4.5 bg-gradient-to-r from-[#005a9e] via-[#0078d4] to-cyan-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg transition-all text-center border border-white/25 cursor-pointer overflow-hidden group/btn"
                id="cta-primary-cohort"
              >
                <div className="flex items-center gap-2 px-5 relative z-10">
                  <Sparkles className="w-5 h-5 text-cyan-100 shrink-0 select-none" />
                  <span className="font-sans font-black text-lg md:text-xl tracking-wide uppercase text-white">
                    Join Founding Driver Cohort
                  </span>
                  <ChevronRight className="w-5 h-5 text-cyan-100 group-hover/btn:translate-x-1 transition-transform duration-300 stroke-[3]" />
                </div>
                
                <div className="mt-2 flex items-center gap-2 px-3 py-0.5 bg-black/45 rounded-full border border-white/10 relative z-10">
                  <span className="text-[9.5px] md:text-[10px] text-cyan-100 font-mono tracking-wide uppercase font-black">
                    No charge today · Pre-launch validation · Canadian driver program
                  </span>
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
        </div>
        {/* SECONDARY ACTION BUTTONS FLOW */}
        <div className="flex flex-col gap-4">
          
          {/* Card 1: Summer Vehicle Readiness Check */}
          <motion.a 
            href="https://join.astrateqgadgets.com/summer-readiness?entry=linkbio&intent=readiness"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ y: -1.5 }} 
            whileTap={{ scale: 0.99 }} 
            className="flex flex-col bg-[#0b1329] rounded-2xl border border-[#1e294b] p-5 shadow-sm transition-all duration-300 group/card"
          >
            <div className="flex items-start gap-3.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/15">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <span className="font-sans font-extrabold tracking-tight text-sm text-white group-hover/card:text-cyan-300 transition-colors">
                  Summer Vehicle Readiness Check
                </span>
                <span className="text-[12px] text-slate-300 font-medium mt-1 leading-normal">
                  Take a quick 60-second check to understand your summer driving readiness profile.
                </span>
              </div>
            </div>
            
            <div className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-sm">
              <span>Start Readiness Check</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </motion.a>

          {/* Card 2: Check Vehicle Compatibility */}
          <motion.a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ y: -1.5 }} 
            whileTap={{ scale: 0.99 }} 
            className="flex flex-col bg-[#0b1329] rounded-2xl border border-[#1e294b] p-5 shadow-sm transition-all duration-300 group/card"
          >
            <div className="flex items-start gap-3.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/15">
                <Car className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <span className="font-sans font-extrabold tracking-tight text-sm text-white group-hover/card:text-cyan-300 transition-colors">
                  Check Vehicle Compatibility
                </span>
                <span className="text-[12px] text-slate-300 font-medium mt-1 leading-normal">
                  Confirm whether your vehicle profile is likely to support the Astrateq pre-launch concept.
                </span>
              </div>
            </div>
            
            <div className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-sm">
              <span>Check Compatibility</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </motion.a>

          {/* Card 3: See How Astrateq Works */}
          <motion.a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ y: -1.5 }} 
            whileTap={{ scale: 0.99 }} 
            className="flex flex-col bg-[#0b1329] rounded-2xl border border-[#1e294b] p-5 shadow-sm transition-all duration-300 group/card"
          >
            <div className="flex items-start gap-3.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/15">
                <Milestone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <span className="font-sans font-extrabold tracking-tight text-sm text-white group-hover/card:text-cyan-300 transition-colors">
                  See How Astrateq Works
                </span>
                <span className="text-[12px] text-slate-300 font-medium mt-1 leading-normal">
                  Learn how privacy-first vehicle intelligence could help drivers understand signals, patterns, and readiness context.
                </span>
              </div>
            </div>
            
            <div className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-sm">
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </motion.a>

          {/* Card 4: Privacy-First Data Approach */}
          <motion.a 
            href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ y: -1.5 }} 
            whileTap={{ scale: 0.99 }} 
            className="flex flex-col bg-[#0b1329] rounded-2xl border border-[#1e294b] p-5 shadow-sm transition-all duration-300 group/card"
          >
            <div className="flex items-start gap-3.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/15">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <span className="font-sans font-extrabold tracking-tight text-sm text-white group-hover/card:text-cyan-300 transition-colors">
                  Privacy-First Data Approach
                </span>
                <span className="text-[12px] text-slate-300 font-medium mt-1 leading-normal">
                  Review how Astrateq Gadgets is approaching local-first intelligence and reduced data exposure.
                </span>
              </div>
            </div>
            
            <div className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-sm">
              <span>Review Privacy Approach</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </motion.a>

          {/* Card 5: Project Roadmap & Build Updates */}
          <motion.a 
            href="https://join.astrateqgadgets.com?entry=linkbio&intent=updates"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            whileHover={{ y: -1.5 }} 
            whileTap={{ scale: 0.99 }} 
            className="flex flex-col bg-[#0b1329] rounded-2xl border border-[#1e294b] p-5 shadow-sm transition-all duration-300 group/card"
          >
            <div className="flex items-start gap-3.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/15">
                <Bell className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <span className="font-sans font-extrabold tracking-tight text-sm text-white group-hover/card:text-cyan-300 transition-colors">
                  Project Roadmap & Build Updates
                </span>
                <span className="text-[12px] text-slate-300 font-medium mt-1 leading-normal">
                  Follow pre-launch progress, product direction, validation updates, and Canadian rollout planning.
                </span>
              </div>
            </div>
            
            <div className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-sm">
              <span>View Build Updates</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </motion.a>

        </div>
        
        {/* PREMIUM INTERACTIVE ROADSIDE ONBOARDING SEQUENCE (How to Join details) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6.5 shadow-[0_8px_25px_rgba(15,23,42,0.03)] relative overflow-hidden group">
          
          {/* Subtle modern electric styling overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-[#0078d4]/5 via-cyan-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          {/* Top aesthetic subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0078d4]" />
          
          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#0078d4] font-bold mb-7 text-center flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d4]"></span>
            </span>
            <span>How to Join the Program</span>
          </h3>
          
          <div className="relative flex flex-col gap-5">
            
            {/* Elegant vertical timeline line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/20 via-cyan-400/20 to-orange-500/20 z-0 rounded-full" />
            
            {/* Onboarding step 1 */}
            <div className="flex items-start gap-4 rel relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-blue-600 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-sans font-bold text-sm shrink-0 shadow-sm z-20 transition-transform duration-300">
                1
              </div>
              <div className="flex-1 flex flex-col bg-slate-50 border border-slate-200/60 p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-sans font-bold text-slate-800">Join Early Access</span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase">Step 1</span>
                </div>
                <p className="text-[11.5px] text-slate-600 mt-1.5 leading-normal font-sans font-semibold">
                  Submit your founding cohort interest.
                </p>
              </div>
            </div>

            {/* Onboarding step 2 */}
            <div className="flex items-start gap-4 rel relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-cyan-600 bg-gradient-to-br from-cyan-600 to-cyan-500 text-white flex items-center justify-center font-sans font-bold text-sm shrink-0 shadow-sm z-20 transition-transform duration-300">
                2
              </div>
              <div className="flex-1 flex flex-col bg-slate-50 border border-slate-200/60 p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-sans font-bold text-slate-800">Confirm Vehicle Fit</span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded-full uppercase">Step 2</span>
                </div>
                <p className="text-[11.5px] text-slate-600 mt-1.5 leading-normal font-sans font-semibold">
                  Complete a short compatibility and readiness check.
                </p>
              </div>
            </div>

            {/* Onboarding step 3 */}
            <div className="flex items-start gap-4 rel relative z-10 group/item">
              <div className="w-10 h-10 rounded-full bg-orange-650 bg-gradient-to-br from-orange-600 to-orange-500 text-white flex items-center justify-center font-sans font-bold text-sm shrink-0 shadow-sm z-20 transition-transform duration-300">
                3
              </div>
              <div className="flex-1 flex flex-col bg-slate-50 border border-slate-200/60 p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-sans font-bold text-slate-800">Follow Validation Progress</span>
                  <span className="text-[8px] font-bold font-mono tracking-wider text-orange-700 bg-orange-50 border border-orange-150 px-2 py-0.5 rounded-full uppercase">Step 3</span>
                </div>
                <p className="text-[11.5px] text-slate-600 mt-1.5 leading-normal font-sans font-semibold">
                  Receive updates as Astrateq Gadgets validates demand, compatibility, and launch readiness.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TIMES SQUARE BILLBOARD METROPOLITAN TRUST & PRIVACY MATRIX */}
        <div className="bg-[#0b1329] border border-[#1e294b] shadow-[0_8px_35px_rgba(15,23,42,0.18)] rounded-3xl p-6.5 relative overflow-hidden transition-all duration-300 group">
          
          <div className="absolute top-[-25%] right-[-25%] w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4.5 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-500 text-white flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
              <Lock className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-sans font-black text-base text-white tracking-tight">Privacy by design</h3>
              <p className="text-[9.5px] font-black font-mono text-cyan-400 uppercase tracking-wider">Astrateq data principles</p>
            </div>
          </div>
          
          <div className="space-y-3 relative z-10">
            {[
              { title: 'Local-first intelligence direction', desc: 'Designed to reduce unnecessary cloud dependency.', tag: 'LOCAL-FIRST', textTheme: 'text-cyan-100', descTheme: 'text-slate-300', borderTheme: 'border-white/5', bgTheme: 'bg-white/5 hover:bg-white/10', badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
              { title: 'User-controlled data expectations', desc: 'Built around clear consent and driver transparency.', tag: 'TRANSPARENT', textTheme: 'text-cyan-100', descTheme: 'text-slate-300', borderTheme: 'border-white/5', bgTheme: 'bg-white/5 hover:bg-white/10', badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
              { title: 'No unnecessary data sharing', desc: 'Data minimization is a core design principle.', tag: 'MINIMAL', textTheme: 'text-cyan-100', descTheme: 'text-slate-300', borderTheme: 'border-white/5', bgTheme: 'bg-white/5 hover:bg-white/10', badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
              { title: 'No ad-tracking resale', desc: 'Astrateq Gadgets is not being designed around advertising resale models.', tag: 'ZERO-ADS', textTheme: 'text-cyan-100', descTheme: 'text-slate-300', borderTheme: 'border-white/5', bgTheme: 'bg-white/5 hover:bg-white/10', badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
              { title: 'Canadian driver trust', desc: 'Built with Canadian privacy expectations in mind.', tag: 'TRUST', textTheme: 'text-cyan-100', descTheme: 'text-slate-300', borderTheme: 'border-white/5', bgTheme: 'bg-white/5 hover:bg-white/10', badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' }
            ].map((item, idx) => (
              <div key={idx} className={`p-3.5 ${item.bgTheme} rounded-xl border ${item.borderTheme} flex items-start gap-3.5 transition-all duration-300 transform hover:scale-[1.005]`}>
                <div className={`w-7 h-7 rounded-lg ${item.badgeBg} flex items-center justify-center shrink-0`}>
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className={`leading-none font-sans font-extrabold ${item.textTheme} text-xs tracking-tight`}>{item.title}</span>
                    <span className="text-[7.5px] font-mono font-bold tracking-wider uppercase border border-white/10 px-1.5 py-0.5 rounded shrink-0 text-cyan-300 bg-white/5">{item.tag}</span>
                  </div>
                  <span className={`text-[11.5px] ${item.descTheme} font-sans font-medium mt-1.5 leading-normal`}>{item.desc}</span>
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
            This page is for pre-launch market validation only. Astrateq Gadgets™ is a pre-launch concept brand; physical hardware availability, consumer vehicle compatibility indices, and rollout planning remain subject to validation results and pilot demand.
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
