"use client";
import { useState } from 'react';
import { useFont } from '@/context/FontContext';
import { FaTimes, FaCheck, FaSlidersH } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FontSelector() {
  const { activeFont, setActiveFontById, fonts } = useFont();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Pill Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open font typography selector"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0d0d0d] text-white border border-white/20 hover:border-emerald-400 backdrop-blur-xl transition-all duration-300 hover:scale-105 group"
        >
          <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-[10px] font-poppins group-hover:bg-emerald-500 group-hover:text-black transition-colors font-semibold">
            Aa
          </span>
          <div className="text-left flex flex-col">
            <span className="text-[10px] font-poppins uppercase tracking-[0.16em] text-neutral-400 font-medium">
              Font Studio
            </span>
            <span className="text-xs font-sans font-semibold text-white tracking-tight">
              {activeFont.name}
            </span>
          </div>
          <FaSlidersH size={11} className="text-neutral-400 group-hover:text-emerald-400 transition-colors ml-1" />
        </button>
      </div>

      {/* Slide-over Drawer / Modal for Live Typography Selection */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 pointer-events-none">
            
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
            />

            {/* Panel Content */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-md max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-[#0d0d0d] border border-white/15 sm:rounded-3xl rounded-t-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden pointer-events-auto z-10 text-white"
            >
              
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                      Live Typography Suite
                    </span>
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                    Select Brand Typeface
                  </h3>
                  <p className="font-sans text-xs text-neutral-400">
                    Switch typography live across all headings and editorial titles.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close typography modal"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FaTimes size={13} />
                </button>
              </div>

              {/* Scrollable Font Options List */}
              <div className="overflow-y-auto p-4 sm:p-5 space-y-2.5 max-h-[58vh]">
                {fonts.map((font) => {
                  const isSelected = activeFont.id === font.id;
                  return (
                    <button
                      key={font.id}
                      onClick={() => setActiveFontById(font.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 group flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/50'
                          : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                      }`}
                    >
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-poppins text-[9px] uppercase tracking-wider text-emerald-400 font-medium">
                            {font.category}
                          </span>
                          {font.tag && (
                            <span className="text-[9px] font-poppins px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-medium">
                              {font.tag}
                            </span>
                          )}
                        </div>

                        {/* Font Title Rendered In Its Own Font */}
                        <div
                          style={{ fontFamily: font.family }}
                          className={`text-xl sm:text-2xl font-normal tracking-tight uppercase truncate ${
                            isSelected ? 'text-emerald-300' : 'text-white'
                          }`}
                        >
                          {font.name}
                        </div>

                        {/* Specimen Preview */}
                        <div
                          style={{ fontFamily: font.family }}
                          className="text-xs italic text-neutral-400 truncate"
                        >
                          Bright Face Barber · Fitzrovia London W1
                        </div>
                      </div>

                      <div className="shrink-0 mt-1">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-emerald-500 text-black'
                            : 'border border-white/20 text-transparent group-hover:border-white/40'
                        }`}>
                          <FaCheck size={10} />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer info note */}
              <div className="p-4 border-t border-white/10 bg-black/50 flex items-center justify-between text-[11px] font-poppins text-neutral-400 font-medium">
                <span>Active: <span className="text-white font-bold">{activeFont.name}</span></span>
                <button
                  onClick={() => setActiveFontById('cormorant')}
                  className="hover:text-emerald-400 text-neutral-400 underline underline-offset-4 transition-colors"
                >
                  Reset Default
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
