import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSectionVariants from '@/components/AboutSectionVariants';
import ServicesAccordion from '@/components/ServicesAccordion';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: "Editorial 01: Cormorant Garamond | Bright Face Barber",
  description: "Preview of Editorial Variation 01 (Cormorant Garamond) for Bright Face Barber.",
};

export default function Variant1Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white relative">
      
      {/* Floating Variation Badge */}
      <div className="fixed bottom-5 left-5 z-40 bg-black/85 backdrop-blur-md text-white text-[11px] font-poppins py-2 px-4 rounded-full flex items-center gap-4 border border-white/20 shadow-2xl font-medium">
        <span>PREVIEW: EDITORIAL 01 // CORMORANT</span>
        <Link href="/" className="underline flex items-center gap-1.5 hover:text-neutral-300">
          <FaArrowLeft size={9} /> Switcher
        </Link>
      </div>

      <Navbar />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Variation 1: London Editorial */}
      <AboutSectionVariants initialVariant={1} showSwitcher={false} />

      {/* 3. Booking Section */}
      <section className="py-28 md:py-36 px-8 md:px-14 bg-black text-white relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[36px] md:rounded-[44px] overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
              <Image 
                src="/images/booking.jpg" 
                alt="Bright Face Barber - Chair Stations" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold uppercase tracking-[0.25em] text-white">
              Booking
            </h2>
            <div className="space-y-4 text-neutral-300 font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>Reserve your spot at our barber shop for a top-notch grooming experience.</p>
              <p className="text-white font-medium">Your fresh look is just an appointment away!</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-white text-black px-12 py-4 text-xs font-btn uppercase tracking-wider font-bold rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Book Now</span>
                <FaArrowRight size={11} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-24 md:py-32 px-8 md:px-14 bg-white text-neutral-900 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-normal leading-[0.9] tracking-tight uppercase text-black">
              Our <br/>
              <span className="italic font-light text-neutral-400">Services</span>
            </h2>
            <p className="font-sans text-neutral-600 text-base md:text-lg leading-relaxed max-w-md">
              Every cut, shave, and treatment is customized to your preferences and finished with care.
            </p>
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image src="/images/service-1.jpg" alt="Classic Cut" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image src="/images/service-2.jpg" alt="Skin Fade" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image src="/images/service-3.jpg" alt="Beard Sculpt" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <div className="pt-2">
              <Link href="/booking" className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 text-xs font-btn uppercase tracking-wider font-bold rounded-full hover:bg-neutral-800 transition-all duration-300">
                <span>Book</span>
                <FaArrowRight size={11} />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <ServicesAccordion isDark={false} />
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 md:py-32 px-8 md:px-14 bg-black text-white relative">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-white/50">Client Stories</h2>
          </AnimatedSection>
          <TestimonialCarousel isDark={true} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
