"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function ServicesAccordion({ isDark = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    { 
      title: "Wash, Cut & Style", 
      time: "45 MIN", 
      price: "£35", 
      details: "A bespoke haircut tailored to your head shape and hair texture, accompanied by an invigorating hair wash, conditioning, blow-dry, and signature pomade styling." 
    },
    { 
      title: "Head Shave", 
      time: "35 MIN", 
      price: "£30", 
      details: "Traditional wet head shave using hot aromatic towels, protective pre-shave cream, a freshly sharpened straight razor, and soothing post-shave balm." 
    },
    { 
      title: "Clippers Cut", 
      time: "25 MIN", 
      price: "£20", 
      details: "A uniform clipper cut across the scalp with clean tapered neckline, crisp edges, and a refreshing scalp splash." 
    },
    { 
      title: "Scissor Cut", 
      time: "45 MIN", 
      price: "£40", 
      details: "Pure shear craftsmanship. Handcrafted layers and flowing texture tailored specifically for longer hairstyles and soft, natural movements." 
    },
    { 
      title: "Beard Shaping & Sculpt", 
      time: "30 MIN", 
      price: "£20", 
      details: "Meticulous beard trimming and lining with clippers and foil shaver, finished with hot towel therapy and organic conditioning beard elixir." 
    },
    { 
      title: "Hot Towel Wet Shave", 
      time: "40 MIN", 
      price: "£30", 
      details: "The quintessence of barbering. Steamed herbal towels, warm rich lather applied with badger brush, razor-close shave, and an ice-cold skin tonic wrap." 
    },
    { 
      title: "Eyebrows Threading", 
      time: "15 MIN", 
      price: "£10", 
      details: "Precision cotton thread hair removal to naturally frame your facial features without harsh lines." 
    },
    { 
      title: "Haircut & Beard Master Combo", 
      time: "60 MIN", 
      price: "£50", 
      details: "Our complete signature experience. Full bespoke haircut, styled wash, detailed beard trim, straight razor contouring, and hot towel finish." 
    },
  ];

  return (
    <div className="w-full divide-y divide-black/10">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`group transition-colors duration-300 ${
              isOpen 
                ? isDark ? 'bg-white/5' : 'bg-black/[0.02]' 
                : 'hover:bg-black/[0.01]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-5 sm:py-6 md:py-7 flex justify-between items-center text-left transition-all px-1 sm:px-2 md:px-4 gap-3"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 md:gap-6 min-w-0 pr-2">
                <span className={`text-lg sm:text-2xl lg:text-3xl font-serif tracking-tight transition-colors duration-300 ${
                  isOpen 
                    ? isDark ? 'text-white' : 'text-black' 
                    : isDark ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'
                }`}>
                  {service.title}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-400">
                  {service.time}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-5 md:gap-8 ml-2 sm:ml-4 shrink-0">
                <span className={`font-mono text-sm sm:text-base md:text-lg font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {service.price}
                </span>
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                  isOpen 
                    ? isDark 
                      ? 'border-white bg-white text-black rotate-180' 
                      : 'border-black bg-black text-white rotate-180' 
                    : isDark 
                      ? 'border-white/20 text-white/60 group-hover:border-white' 
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
                  <div className="px-1 sm:px-2 md:px-4 pb-5 sm:pb-7 pt-1 max-w-2xl">
                    <p className={`font-sans text-xs sm:text-sm md:text-base leading-relaxed ${
                      isDark ? 'text-white/70' : 'text-neutral-600'
                    }`}>
                      {service.details}
                    </p>
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
