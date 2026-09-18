"use client";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[100vh] lg:h-[100vh] lg:min-h-[100vh] flex flex-col justify-between overflow-hidden bg-black select-none pt-24 md:pt-28 pb-1 md:pb-2">
      
      {/* 1. Cinematic Full-Bleed 100vh Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] saturate-[1.04]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* 2. Cinema Vignettes (Soft top for navbar, soft bottom for info) */}
      <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

      {/* 3. Subtle Cinema Sound Control */}
      <div className="absolute top-24 right-6 md:right-12 z-30">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white text-[10px] md:text-[11px] font-mono tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105"
        >
          {isMuted ? <FaVolumeMute size={11} /> : <FaVolumeUp size={11} />}
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>
      </div>

      {/* Top spacer to ensure title sits in the optical visual center */}
      <div className="relative z-20 h-2"></div>

      {/* 4. Central Cinematic Title Card (Scaled for Laptop & Desktop Screens) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none my-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="space-y-3 md:space-y-4 max-w-4xl"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/70 block">
            Fitzrovia · London W1 · Est. 2018
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-cormorant font-normal uppercase tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] leading-[0.88]">
            Bright Face <br />
            <span className="italic font-light text-white/75">Barber</span>
          </h1>
          
          <div className="pt-1 md:pt-2">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/80 max-w-md mx-auto font-normal">
              Mastering the Art of Grooming
            </p>
          </div>
        </motion.div>
      </div>

      {/* 5. Bottom Area: Studio Timing & Address (Clean, No Phone, Sitting Above The Fold) */}
      <div className="relative z-20 w-full px-8 md:px-14 pb-4 md:pb-5">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-white font-sans text-xs md:text-sm font-normal">
          <div>
            <p className="leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white/95">
              Monday to Friday 10 am – 8 pm<br/>
              Saturday 10 am – 7 pm<br/>
              Sunday 11:00 am to 5:00 pm
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white/95">
              33 Newman Street, London, W1T 1PY.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
