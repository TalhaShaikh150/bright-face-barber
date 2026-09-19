"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { SERVICES } from '@/data/services';

export default function BookingSection() {
  // Use the top 3 popular services from our centralized services source
  const featuredServices = [
    SERVICES.find(s => s.id === "wash-cut-style") || SERVICES[0],
    SERVICES.find(s => s.id === "hot-towel-wet-shave") || SERVICES[5],
    SERVICES.find(s => s.id === "haircut-beard-trim") || SERVICES[7]
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-14 bg-[#000000] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Editorial Section Header */}
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
              <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                Book Your Visit · Fitzrovia W1
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-heading font-normal leading-[0.92] md:leading-[0.88] tracking-tight uppercase text-white">
              Reserve Your <br />
              <span className="italic font-light text-emerald-400">Chair</span>
            </h2>
          </div>

          <div className="md:text-right max-w-sm space-y-2">
            <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Reserve your spot at our barber shop for a top-notch grooming experience. Your fresh look is just an appointment away!
            </p>
            <p className="font-poppins text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
              33 Newman Street · London W1T 1PY
            </p>
          </div>
        </motion.div>

        {/* 2-Column Clean Editorial Reservation Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Key Services & Booking Action (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Clean Services Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-poppins text-xs uppercase tracking-[0.16em] text-neutral-400 block font-semibold">
                  Popular Grooming Services
                </span>
                <span className="font-poppins text-[10px] text-emerald-400 uppercase tracking-wider font-medium">
                  Tap to select & book
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {featuredServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/booking?service=${service.id}`}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-white/[0.03] rounded-xl px-2 -mx-2 transition-all block"
                  >
                    <div className="space-y-1 max-w-lg">
                      <div className="flex items-center gap-3">
                        <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                          {service.name}
                        </h3>
                        <span className="font-poppins text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
                          {service.time}
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
                      <span className="font-poppins text-base sm:text-lg font-bold text-emerald-400">
                        {service.price}
                      </span>
                      <span className="font-poppins text-xs text-neutral-400 group-hover:text-emerald-400 transition-colors font-medium">
                        Book →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Booking Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 border-t border-white/10">
              <Link 
                href="/booking" 
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-black px-8 sm:px-10 py-4 text-xs font-btn uppercase tracking-[0.2em] font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95 group text-center"
              >
                <span>Book Appointment</span>
                <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="tel:02076379288" 
                className="inline-flex items-center justify-center gap-2.5 font-poppins text-xs uppercase tracking-wider text-neutral-300 hover:text-emerald-400 transition-colors py-3.5 px-5 rounded-full bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/40 font-medium"
              >
                <FaPhoneAlt size={10} className="text-emerald-400" />
                <span>Call Us: 020 7637 9288</span>
              </a>
            </div>

            <p className="text-[11px] font-poppins text-neutral-400 uppercase tracking-wider font-medium">
              Walk-ins warmly welcomed subject to daily chair availability.
            </p>

          </motion.div>

          {/* Right Column: Barber Shop Photograph (5 Cols) */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
