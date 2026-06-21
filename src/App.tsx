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
    <div className="min-h-screen bg-[#f5f8fa] text-[#0d1e3d] flex flex-col items-center px-4 py-8 relative font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      
      {/* Decorative subtle ambient soft lights */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] rounded-full bg-cyan-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full bg-blue-100/20 blur-[100px] pointer-events-none" />

      {/* Main Single-View Container (Mobile optimized max-width) */}
      <div className="w-full max-w-md flex flex-col gap-6 relative z-10">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col items-center text-center mt-3 gap-1.5">
          {/* Logo Brand Representation */}
          <div className="flex items-center justify-center mb-1 animate-fade-in">
            <img 
              src="https://i.imgur.com/sHJc7d5.png" 
              alt="Astrateq Gadgets Logo with Brand" 
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <div className="inline-flex items-center gap-1.5 bg-white border border-cyan-100/80 px-2.5 py-1 rounded-full shadow-xs mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-cyan-700 tracking-wide uppercase font-mono">Pre-launch</span>
          </div>

          <p className="text-xs font-mono text-cyan-700 tracking-wide uppercase">Drive Safer. Drive Smarter.</p>
        </header>

        {/* HERO SECTION */}
        <div id="hero-card" className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-xl leading-snug tracking-tight text-[#0d1e3d]">
              Privacy-first vehicle intelligence for safer driving decisions.
            </h1>
            <p className="text-xs text-gray-500 leading-relaxed">
              Join early access, check your vehicle fit, or complete the Summer Readiness Check before the Canadian founding cohort window closes.
            </p>
          </div>

          {/* Crossover Premium Image representation */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xs border border-gray-150 group">
            <img 
              src={astrateqSummerDrive} 
              alt="Premium SUV driving on scenic summer Ontario highway" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Soft dark gradient at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white rounded-md px-2 py-1 text-[9px] font-mono tracking-wide">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>GTA / Muskoka Roads, Ontario</span>
            </div>
          </div>
        </div>

        {/* PRIMARY CTA SECTION */}
        <div className="flex flex-col gap-2">
          
          {/* Canadian Microcopy Urgency Info label */}
          <div className="text-center">
            <span className="text-[10px] font-medium text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200 shadow-2xs">
              Limited Canadian founding cohort access — Summer validation phase active
            </span>
          </div>

          {/* Primary Dominant Button */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full relative group"
          >
            {/* Glow backing */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-[#0078d4] rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition duration-300 animate-pulse" />
            
            <a 
              href={primaryCTAUrl}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="relative w-full h-16 bg-gradient-to-r from-[#0078d4] to-[#005a9e] rounded-2xl flex flex-col items-center justify-center p-3 text-white shadow-xl hover:shadow-cyan-200/50 transition-all text-center border border-white/20 cursor-pointer overflow-hidden"
              id="cta-primary-cohort"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-cyan-200 animate-pulse shrink-0" />
                <span className="font-display font-extrabold text-base tracking-wide text-white">
                  Join Founding Driver Cohort
                </span>
                <ChevronRight className="w-4 h-4 text-cyan-200" />
              </div>
              <span className="text-[10px] text-cyan-100 font-mono tracking-wider uppercase mt-0.5 flex items-center gap-1.5 font-bold">
                <span>Secure early access consideration</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* SECONDARY ACTION BUTTONS FLOW */}
        <div className="flex flex-col gap-3">
          
          {/* Button 1: Summer Vehicle Readiness Check (IMPROVED - FIRST UNDER COHORT CTA) */}
          <motion.div whileTap={{ scale: 0.98 }} className="group">
            <button
              onClick={() => handleOpenModal('readiness')}
              className="w-full text-left bg-white border-l-4 border-l-amber-500 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-4 flex items-center justify-between hover:border-amber-400 hover:shadow-[0_8px_25px_rgba(245,158,11,0.12)] hover:bg-amber-50/5 transition-all relative cursor-pointer shadow-xs"
              id="btn-summer-readiness"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 border border-amber-400/20 shadow-md shadow-orange-500/10">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-[#0d1e3d] group-hover:text-amber-700 transition-colors">
                    Summer Vehicle Readiness Check
                  </span>
                  <span className="text-xs text-gray-500 font-medium">60-second driver readiness profile</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-amber-700 font-bold hidden xs:inline-flex bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-250">Interactive</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-amber-600 transition-all" />
              </div>
            </button>
            
            {/* Quick clean standard link bypass */}
            <div className="flex justify-end mt-1 px-3">
              <a 
                href="https://join.astrateqgadgets.com/summer-readiness?entry=linkbio&intent=readiness"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-amber-600 tracking-wide font-mono flex items-center gap-1"
              >
                <span>Skip to external page</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Button 2: Check Vehicle Compatibility */}
          <motion.div whileTap={{ scale: 0.98 }} className="group">
            <button
              onClick={() => handleOpenModal('compatibility')}
              className="w-full text-left bg-white border-l-4 border-l-cyan-500 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-4 flex items-center justify-between hover:border-cyan-400 hover:shadow-[0_8px_25px_rgba(6,182,212,0.12)] hover:bg-cyan-50/5 transition-all cursor-pointer shadow-xs"
              id="btn-vehicle-compatibility"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 border border-cyan-400/20 shadow-md shadow-cyan-500/10">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-[#0d1e3d] group-hover:text-cyan-700 transition-colors">
                    Check Vehicle Compatibility
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Confirm vehicle fit in under 30 seconds</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-cyan-700 font-bold hidden xs:inline-flex bg-cyan-50 px-2 py-0.5 rounded-sm border border-cyan-150">Interactive</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-cyan-600 transition-all" />
              </div>
            </button>
            
            <div className="flex justify-end mt-1 px-3">
              <a 
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=compatibility"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-cyan-600 tracking-wide font-mono flex items-center gap-1"
              >
                <span>Skip to external page</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Button 3: See How Astrateq Works */}
          <motion.div whileTap={{ scale: 0.98 }} className="group">
            <button
              onClick={() => handleOpenModal('explainer')}
              className="w-full text-left bg-white border-l-4 border-l-purple-500 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-4 flex items-center justify-between hover:border-purple-400 hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)] hover:bg-purple-50/5 transition-all cursor-pointer shadow-xs"
              id="btn-how-works"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shrink-0 border border-purple-400/20 shadow-md shadow-purple-500/10">
                  <Milestone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-[#0d1e3d] group-hover:text-purple-700 transition-colors">
                    See How Astrateq Works
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Understand the pre-launch validation concept</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-purple-600 transition-all" />
            </button>
            
            <div className="flex justify-end mt-1 px-3">
              <a 
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=explainer"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-purple-600 tracking-wide font-mono flex items-center gap-1"
              >
                <span>Open in external tab</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Button 4: How Your Data Is Protected */}
          <motion.div whileTap={{ scale: 0.98 }} className="group">
            <button
              onClick={() => handleOpenModal('privacy')}
              className="w-full text-left bg-white border-l-4 border-l-emerald-500 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-4 flex items-center justify-between hover:border-emerald-400 hover:shadow-[0_8px_25px_rgba(16,185,129,0.12)] hover:bg-emerald-50/5 transition-all cursor-pointer shadow-xs"
              id="btn-privacy-protection"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 border border-emerald-400/20 shadow-md shadow-emerald-500/10">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-[#0d1e3d] group-hover:text-emerald-700 transition-colors">
                    How Your Data Is Protected
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Privacy-first approach, no unnecessary exposure</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-emerald-600 transition-all" />
            </button>
            
            <div className="flex justify-end mt-1 px-3">
              <a 
                href="https://reserve.astrateqgadgets.com?entry=linkbio&intent=privacy"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-emerald-600 tracking-wide font-mono flex items-center gap-1"
              >
                <span>Open in external tab</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Button 5: Live Build & Product Updates */}
          <motion.div whileTap={{ scale: 0.98 }} className="group">
            <button
              onClick={() => handleOpenModal('updates')}
              className="w-full text-left bg-white border-l-4 border-l-[#0078d4] border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-[0_8px_25px_rgba(0,120,212,0.12)] hover:bg-blue-50/5 transition-all cursor-pointer shadow-xs"
              id="btn-live-updates"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078d4] to-blue-700 text-white flex items-center justify-center shrink-0 border border-blue-400/20 shadow-md shadow-blue-500/10">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-[#0d1e3d] group-hover:text-blue-700 transition-colors">
                    Live Build & Product Updates
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Follow pre-launch progress and updates</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all" />
            </button>
            
            <div className="flex justify-end mt-1 px-3">
              <a 
                href="https://join.astrateqgadgets.com?entry=linkbio&intent=updates"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-blue-600 tracking-wide font-mono flex items-center gap-1"
              >
                <span>Open in external tab</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* MINI PROCESS STRIP */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 mt-1">
          <h3 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-3 text-center">Pre-Launch Onboarding Sequence</h3>
          <div className="grid grid-cols-3 gap-1.5 relative">
            
            <div className="text-center flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <span className="text-[11px] font-bold text-[#0d1e3d]">Join</span>
              <p className="text-[9px] text-gray-400 leading-normal px-1">Secure early access consideration</p>
            </div>

            <div className="text-center flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <span className="text-[11px] font-bold text-[#0d1e3d]">Check Fit</span>
              <p className="text-[9px] text-gray-400 leading-normal px-1">Confirm your vehicle profile</p>
            </div>

            <div className="text-center flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <span className="text-[11px] font-bold text-[#0d1e3d]">Smarter</span>
              <p className="text-[9px] text-gray-400 leading-normal px-1">Follow how the system evolves</p>
            </div>

          </div>
        </div>

        {/* TRUST / PRIVACY SECTION (COMPACT CARD) */}
        <div className="bg-[#e6f0fa]/40 border border-cyan-100/40 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-4.5 h-4.5 text-cyan-600" />
            <h3 className="font-display font-bold text-sm text-[#0d1e3d]">Privacy by design</h3>
          </div>
          <ul className="space-y-2">
            {[
              'On-device intelligence direction',
              'User-controlled data expectations',
              'No unnecessary data sharing',
              'No ad-tracking resale',
              'Built around Canadian driver trust'
            ].map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-xs text-gray-600">
                <Check className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span className="leading-normal">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PRE-LAUNCH TRANSPARENCY NOTE */}
        <footer className="space-y-6 pt-3 text-center">
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 border border-gray-100 text-[10px] text-gray-400 leading-relaxed text-left space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-gray-500 mb-1 font-display">
              <Info className="w-3.5 h-3.5 text-cyan-600" />
              <span>Pre-launch Transparency Note</span>
            </div>
            Astrateq Gadgets is currently in pre-launch market validation. Hardware availability, compatibility, and rollout timing are subject to validation results, supplier readiness, and future manufacturing decisions.
          </div>

          {/* SOCIAL LINKS (Secondary, placed at the bottom, non-competing) */}
          <div className="space-y-3">
            <div className="flex justify-center gap-5">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-150 flex items-center justify-center text-[#0d1e3d] hover:text-cyan-600 hover:border-cyan-200 transition-colors shadow-xs"
                title="Follow Instagram (@astrateq24)"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-150 flex items-center justify-center text-[#0d1e3d] hover:text-cyan-600 hover:border-cyan-200 transition-colors shadow-xs"
                title="Follow X / Twitter (@AstrateqIQ)"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-150 flex items-center justify-center text-[#0d1e3d] hover:text-cyan-600 hover:border-cyan-200 transition-colors shadow-xs"
                title="Follow LinkedIn (company/astrateq-gadgets)"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
            
            <p className="text-[10px] text-gray-400 font-mono tracking-wider">
              &copy; {new Date().getFullYear()} Astrateq Gadgets. All rights reserved.
            </p>
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
