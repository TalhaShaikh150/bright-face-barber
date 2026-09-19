"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

export default function TestimonialCarousel({ isDark = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Haddad",
      role: "Verified Client · London W1",
      date: "Google Review",
      text: "I enquired late and was desperate for a hair cut and beard trim for an early flight the next day, Talib was a saviour - hanging back late to make sure he got it in. The service is amazing and the cut is the best in the area. I have been working around Goodge Street and trying to find a new barber for a while but I can confidently say I'll be coming back. 100% recommend <3",
      rating: 5
    },
    {
      name: "Hamish Gibson",
      role: "Client of 2 Years · Central London",
      date: "Google Review",
      text: "I've been coming here for 2 years and I'm thrilled with how my haircut turns out every time. Talib and his colleague are excellent barbers and are always very accommodating, friendly, and professional. Talib offers very good advice and tips on which styles work best and how to style it afterwards too. Always happy to keep coming back!",
      rating: 5
    },
    {
      name: "Farhan Gurbanov",
      role: "Verified Client · Fitzrovia",
      date: "Google Review",
      text: "Best barber shop you'll find in London. Very calm and professional atmosphere. Gives the best haircuts and advise for hair care. Would definitely recommend to everyone.",
      rating: 5
    },
    {
      name: "Rodrigo Franco",
      role: "Regular Client · London",
      date: "Google Review",
      text: "Amazing barbershop in London with great service and hospitality. Haircuts are always great and always very easy to make a booking. Highly recommend.",
      rating: 5
    },
    {
      name: "Ismail",
      role: "Verified Client · London",
      date: "Google Review",
      text: "Super friendly and very professional. I used to go to Ted Grooming Room where the results were too inconsistent for much higher prices. So I switched to Bright Face and they never disappointed! The service is top quality, I would definitely recommend!",
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
            <p className={`font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-6 sm:mb-8 max-w-2xl ${
              isDark ? 'text-white/95' : 'text-neutral-900'
            }`}>
              "{current.text}"
            </p>

            {/* Author info */}
            <div className="space-y-1">
              <h3 className={`text-sm sm:text-base md:text-lg font-heading font-bold uppercase tracking-[0.15em] ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {current.name}
              </h3>
              <p className={`font-poppins text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium ${
                isDark ? 'text-neutral-400' : 'text-black/50'
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
              ? 'border-white/20 text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 bg-white/5 hover:scale-105' 
              : 'border-black/20 text-black/60 hover:text-black hover:border-black bg-white/60 hover:scale-105'
          }`}
        >
          <FaArrowLeft size={12} />
        </button>

        {/* Carousel Indicators with Emerald Active Glow */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentIndex === i 
                  ? isDark ? 'w-8 bg-emerald-400' : 'w-8 bg-black' 
                  : isDark ? 'w-2 bg-white/20 hover:bg-white/40' : 'w-2 bg-black/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          aria-label="Next testimonial"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isDark 
              ? 'border-white/20 text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 bg-white/5 hover:scale-105' 
              : 'border-black/20 text-black/60 hover:text-black hover:border-black bg-white/60 hover:scale-105'
          }`}
        >
          <FaArrowRight size={12} />
        </button>
      </div>

      {/* Direct link to Google Business Profile */}
      <div className="pt-6 sm:pt-8 text-center">
        <a
          href="https://share.google/u41PKPG8WwfOcUXyS"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-poppins text-xs uppercase tracking-wider py-2.5 px-5 rounded-full border transition-all duration-300 font-medium ${
            isDark
              ? 'border-white/15 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.06]'
              : 'border-black/15 text-black/80 hover:text-black hover:border-black bg-black/[0.02] hover:bg-black/[0.06]'
          }`}
        >
          <span>View All 186 Reviews on Google Business</span>
          <FaExternalLinkAlt size={9} className="text-emerald-400" />
        </a>
      </div>

    </div>
  );
}
