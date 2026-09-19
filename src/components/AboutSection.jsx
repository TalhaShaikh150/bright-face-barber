"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-14 bg-[#050505] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-14 sm:space-y-20 relative z-10">
        
        {/* Header Lockup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 sm:pb-10"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                About Bright Face Barber
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[0.92] md:leading-[0.88] tracking-tight uppercase text-white">
              Welcome to <br />
              <span className="italic font-light text-emerald-400">Bright Face Barber</span>
            </h2>
          </div>

          <div className="md:text-right font-poppins text-[11px] sm:text-xs text-neutral-400 space-y-1.5 uppercase tracking-wider font-medium">
            <p className="text-white font-semibold">33 Newman Street, Fitzrovia</p>
            <p>London W1T 1PY</p>
            <p className="text-emerald-400 font-semibold">Est. 2018 · Central London</p>
          </div>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Clean Focused Description */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-neutral-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p className="text-white font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                At Bright Face Barber, we believe a great haircut is more than just a trim, it&apos;s an experience.
              </p>

              <p>
                Nestled in the heart of London, our barber shop is dedicated to delivering top-notch grooming with a personal touch.
              </p>

              <p>
                Our talented team of barbers combines classic techniques with modern flair, ensuring you leave not only looking sharp but feeling confident.
              </p>

              <p className="text-neutral-200">
                Whether you’re here for a timeless cut, a fresh fade, or a meticulously crafted beard trim, we’ve got you covered.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link 
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3.5 rounded-full font-btn font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
              >
                <span>Book Appointment</span>
                <FaArrowRight size={11} />
              </Link>

              <Link 
                href="/about"
                className="inline-flex items-center gap-2 font-poppins text-xs uppercase tracking-wider text-neutral-300 hover:text-emerald-400 transition-colors font-medium group py-2"
              >
                <span>Read Full Story & Meet Talib</span>
                <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1 text-emerald-400" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Clean Framed Architectural Photography */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/15 group bg-[#0d0d0d]">
              <Image
                src="/images/about.jpg"
                alt="Bright Face Barber - 33 Newman Street Barber Shop Lounge"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
