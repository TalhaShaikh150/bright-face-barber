"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhoneAlt, FaClock, FaCheck } from 'react-icons/fa';

export default function BookingSection() {
  const perks = [
    "One-on-one personalized consultation",
    "Precision haircut & beard grooming",
    "Complimentary hot & cold beverages",
    "Instant email booking confirmation",
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-14 bg-[#000000] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 sm:pb-10 mb-12 sm:mb-16"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                Book Your Visit · Fitzrovia W1
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[0.92] md:leading-[0.88] tracking-tight uppercase text-white">
              Reserve Your <br />
              <span className="italic font-light text-emerald-400">Chair</span>
            </h2>
          </div>

          <div className="md:text-right max-w-md space-y-2">
            <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
              Reserve your spot at our barber shop for a top-notch grooming experience. Your fresh look is just an appointment away!
            </p>
            <p className="font-poppins text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              33 Newman Street · London W1T 1PY
            </p>
          </div>
        </motion.div>

        {/* 2-Column Clean Reservation Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Focused, Clean Booking Details */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#0d0d0d] border border-white/10"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <FaCheck size={9} />
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-neutral-300 font-normal">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Studio Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0d0d] border border-white/10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <FaClock className="text-emerald-400" size={13} />
                  <span className="font-poppins text-xs uppercase tracking-wider text-white font-semibold">
                    Studio Hours
                  </span>
                </div>
                <span className="font-poppins text-[11px] text-emerald-400 font-medium">
                  Appointments & Walk-ins
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-poppins text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-400 block text-[11px]">Mon – Fri</span>
                  <span className="text-white font-semibold">10:00 am – 8:00 pm</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-400 block text-[11px]">Saturday</span>
                  <span className="text-white font-semibold">10:00 am – 7:00 pm</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-400 block text-[11px]">Sunday</span>
                  <span className="text-white font-semibold">11:00 am – 5:00 pm</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link 
                href="/booking" 
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-black px-10 py-4 text-xs font-btn uppercase tracking-wider font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] active:scale-95 group text-center"
              >
                <span>Book Appointment</span>
                <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="tel:02076379288" 
                className="inline-flex items-center justify-center gap-2.5 font-poppins text-xs uppercase tracking-wider text-neutral-300 hover:text-emerald-400 transition-colors py-4 px-6 rounded-full bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/40 font-medium"
              >
                <FaPhoneAlt size={10} className="text-emerald-400" />
                <span>Call Us: 020 7637 9288</span>
              </a>
            </div>

            <p className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider font-medium">
              Walk-ins warmly welcomed subject to daily chair availability.
            </p>

          </motion.div>

          {/* Right Column: Barber Shop Photograph */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl group bg-[#0d0d0d]">
              <Image 
                src="/images/booking.jpg" 
                alt="Bright Face Barber - 33 Newman Street Barber Shop" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
