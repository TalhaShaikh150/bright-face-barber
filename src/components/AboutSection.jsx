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
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-heading font-normal leading-[0.92] md:leading-[0.88] tracking-tight uppercase text-white">
              Bright Face <br />
              <span className="italic font-light text-emerald-400">Barber</span>
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
          
          {/* Left: Philosophy & Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                Our Philosophy
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight">
                Self-Expression & <span className="italic font-light text-emerald-400">Craftsmanship</span>
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal">
              At Bright Face Barber, we understand that grooming is as much about self-expression as it is about style. Our approach is rooted in a commitment to craftsmanship and customer satisfaction. We take the time to listen to your needs and offer tailored advice, ensuring you receive a look that complements your personality and lifestyle. With a focus on precision and detail, we aim to enhance your natural features and bring out the best in you.
            </p>

            {/* The Bright Face Experience Highlight Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0d0d] border border-white/10 space-y-3 shadow-xl">
              <span className="font-poppins text-xs uppercase tracking-[0.18em] text-emerald-400 font-semibold block">
                The Bright Face Experience
              </span>
              <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Step into Bright Face Barber and experience a blend of tradition and innovation. Our welcoming atmosphere, complete with vintage décor and modern amenities, sets the stage for a relaxing and enjoyable visit. From the moment you walk through our doors, you’ll be greeted by friendly faces and a professional team ready to make your grooming experience exceptional. Enjoy a complimentary beverage, kick back, and let us take care of the rest.
              </p>
            </div>

            <div className="pt-2">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2.5 font-poppins text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors font-semibold group"
              >
                <span>Read Our Story & Meet Talib</span>
                <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15">
                <p className="font-poppins text-[11px] uppercase tracking-wider text-neutral-300 font-medium">
                  Vintage Décor · Modern Amenities · 33 Newman Street
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
