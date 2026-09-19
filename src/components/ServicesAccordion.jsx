"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import { SERVICES } from '@/data/services';

export default function ServicesAccordion({ isDark = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`w-full divide-y ${isDark ? 'divide-white/10' : 'divide-black/10'}`}>
      {SERVICES.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={service.id} 
            className={`group transition-all duration-300 ${
              isOpen 
                ? isDark ? 'bg-white/[0.03] border-l-2 border-emerald-500 pl-2 sm:pl-3' : 'bg-black/[0.02]' 
                : 'hover:bg-white/[0.01]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-5 sm:py-6 md:py-7 flex justify-between items-center text-left transition-all px-1 sm:px-2 md:px-4 gap-3"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 md:gap-6 min-w-0 pr-2">
                <span className={`text-lg sm:text-2xl lg:text-3xl font-heading tracking-tight transition-colors duration-300 ${
                  isOpen 
                    ? isDark ? 'text-white' : 'text-black' 
                    : isDark ? 'text-white/85 group-hover:text-emerald-300' : 'text-black/80 group-hover:text-black'
                }`}>
                  {service.name}
                </span>
                <span className="font-poppins text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-400 font-medium">
                  {service.time}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-5 md:gap-8 ml-2 sm:ml-4 shrink-0">
                <span className={`font-poppins text-sm sm:text-base md:text-lg font-bold tracking-tight ${
                  isDark ? 'text-emerald-400' : 'text-black'
                }`}>
                  {service.price}
                </span>
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                  isOpen 
                    ? isDark 
                      ? 'border-emerald-400 bg-emerald-500 text-black rotate-180 shadow-sm' 
                      : 'border-black bg-black text-white rotate-180' 
                    : isDark 
                      ? 'border-white/20 text-white/60 group-hover:border-emerald-400 group-hover:text-emerald-400' 
                      : 'border-black/20 text-black/60 group-hover:border-black'
                }`}>
                  {isOpen ? <FaMinus size={9} /> : <FaPlus size={9} />}
                </span>
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-1 sm:px-2 md:px-4 pb-6 sm:pb-7 pt-1 max-w-2xl space-y-4">
                    <p className={`font-sans text-xs sm:text-sm md:text-base leading-relaxed ${
                      isDark ? 'text-white/70' : 'text-neutral-600'
                    }`}>
                      {service.fullDesc || service.shortDesc}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href={`/booking?service=${service.id}`}
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full font-btn font-bold text-xs uppercase tracking-[0.16em] transition-all hover:scale-105 active:scale-95 shadow-md"
                      >
                        <span>Book This Service</span>
                        <FaArrowRight size={10} />
                      </Link>
                      <span className="font-poppins text-xs text-neutral-400 font-medium">
                        {service.price} · {service.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
