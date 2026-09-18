"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCarousel({ isDark = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Thomas Kelly",
      role: "Regular Client · Fitzrovia",
      date: "Visited August 2024",
      text: "Best barbershop in the local area. I've tried multiple others in London and none can match the cut and care taken, as well as value for money. You're never rushed in and out, and they always ensure you're happy with your cut no matter if it takes extra time. Atmosphere is chilled out, plenty of space so you can genuinely relax.",
      rating: 5
    },
    {
      name: "Yusif Suleymanov",
      role: "Verified Client · London W1",
      date: "Visited July 2024",
      text: "Tried many different barbershops in London, but stuck to Bright Face right after the first cut. Amazing barbers, especially Talib, very professional and lovely precision work on my hair & beard. Best barbershop in London. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Haddad",
      role: "Client · Central London",
      date: "Visited September 2024",
      text: "I enquired late and was desperate for a haircut and beard trim for an early flight the next morning. Talib was a saviour — hanging back late to make sure he got it in. The craftsmanship is amazing and the cut is without question the sharpest in the area.",
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
      
      {/* Decorative large quote watermark */}
      <div className={`absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none select-none ${
        isDark ? 'text-white' : 'text-black'
      }`}>
        <FaQuoteLeft className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28" />
      </div>

      <div className="relative z-10 px-1 sm:px-4 md:px-12 min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center flex flex-col items-center justify-center w-full"
          >
            {/* Stars */}
            <div className="flex gap-1.5 text-neutral-200 mb-4 sm:mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} size={13} className="text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className={`font-serif text-base sm:text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-6 sm:mb-8 max-w-2xl ${
              isDark ? 'text-white/90' : 'text-neutral-900'
            }`}>
              "{current.text}"
            </p>

            {/* Author info */}
            <div className="space-y-1">
              <h3 className={`text-sm sm:text-base md:text-lg font-serif font-bold uppercase tracking-[0.15em] ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {current.name}
              </h3>
              <p className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] ${
                isDark ? 'text-white/50' : 'text-black/50'
              }`}>
                {current.role} • {current.date}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
        <button 
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isDark 
              ? 'border-white/20 text-white/60 hover:text-white hover:border-white bg-black/60 hover:scale-105' 
              : 'border-black/20 text-black/60 hover:text-black hover:border-black bg-white/60 hover:scale-105'
          }`}
        >
          <FaArrowLeft size={12} />
        </button>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentIndex === i 
                  ? isDark ? 'w-8 bg-white' : 'w-8 bg-black' 
                  : isDark ? 'w-2 bg-white/20' : 'w-2 bg-black/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          aria-label="Next testimonial"
          className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isDark 
              ? 'border-white/20 text-white/60 hover:text-white hover:border-white bg-black/60 hover:scale-105' 
              : 'border-black/20 text-black/60 hover:text-black hover:border-black bg-white/60 hover:scale-105'
          }`}
        >
          <FaArrowRight size={12} />
        </button>
      </div>

    </div>
  );
}
