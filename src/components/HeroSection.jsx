"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = nextMuted;
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = nextMuted;
    }
  };

  return (
    <section 
      style={{ height: '100vh', minHeight: '100vh' }}
      className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-black select-none pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-5"
    >
      
      {/* 1. Cinematic Full-Bleed Video Backgrounds (Responsive Mobile & Desktop 100vh) */}
      {/* Mobile Video (<768px): Dedicated vertical mobile edit */}
      <video 
        ref={mobileVideoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="absolute inset-0 z-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] saturate-[1.04] md:hidden"
      >
        <source src="/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Desktop / Tablet Video (>=768px) */}
      <video 
        ref={desktopVideoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="absolute inset-0 z-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] saturate-[1.04] hidden md:block"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* 2. Cinema Vignettes */}
      <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

      {/* 3. Subtle Cinema Sound Control (Clean, No Glow) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-6 md:right-12 z-30">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 hover:border-emerald-400 text-white text-[10px] md:text-[11px] font-poppins tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105 font-medium"
        >
          {isMuted ? <FaVolumeMute size={11} className="text-neutral-400" /> : <FaVolumeUp size={11} className="text-emerald-400" />}
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>
      </div>

      {/* Top spacer to ensure title sits in the optical visual center */}
      <div className="relative z-20 h-1 sm:h-2"></div>

      {/* 4. Central Cinematic Title Card (Scaled for Mobile, Laptop & Desktop Screens) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none my-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="space-y-2.5 sm:space-y-4 max-w-4xl"
        >
          <span className="font-poppins text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-emerald-400 font-semibold block">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-2"></span>
            Fitzrovia · London W1 · Est. 2018
          </span>
          
          <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-cormorant font-normal uppercase tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] leading-[0.92] sm:leading-[0.88]">
            Bright Face <br />
            <span className="italic font-light text-emerald-300/85">Barber</span>
          </h1>
          
          <div className="pt-1 md:pt-2">
            <p className="font-sans text-[9px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-neutral-300 max-w-md mx-auto font-normal">
              Mastering the Art of Grooming
            </p>
          </div>

          {/* Large High-Contrast Primary Hero CTA */}
          <div className="pt-4 sm:pt-6 pointer-events-auto">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-black px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full font-btn font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_35px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 group"
            >
              <span>Book An Appointment</span>
              <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 5. Bottom Area: Studio Timing & Address (Clean, Sitting Above The Fold on all devices) */}
      <div className="relative z-20 w-full px-5 sm:px-8 md:px-14 pb-5 sm:pb-4 md:pb-5">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2.5 sm:gap-4 text-white font-sans text-[11px] sm:text-xs md:text-sm font-normal">
          <div>
            <p className="leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white/95">
              Monday to Friday 10 am – 8 pm<br/>
              Saturday 10 am – 7 pm<br/>
              Sunday 11:00 am to 5:00 pm
            </p>
          </div>
          
          <div className="sm:text-right">
            <p className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white/95">
              33 Newman Street, London, W1T 1PY.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
