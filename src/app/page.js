import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesAccordion from '@/components/ServicesAccordion';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white relative">
      
      {/* Dynamic Cinematic Navbar */}
      <Navbar />
      
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. About Section - Cormorant Garamond Editorial (Unified Font) */}
      <AboutSection />

      {/* 3. Booking Teaser - BLACK */}
      <section className="py-28 md:py-36 px-8 md:px-14 bg-black text-white relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Booking Image Frame with Refined Rounded Architecture */}
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
          
          {/* Booking Info & Action */}
          <AnimatedSection delay={0.2} className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold uppercase tracking-[0.25em] text-white">
              Booking
            </h2>

            <div className="space-y-4 text-neutral-300 font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                Reserve your spot at our barber shop for a top-notch grooming experience.
              </p>
              <p className="text-white font-medium">
                Your fresh look is just an appointment away!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-white text-black px-12 py-4 text-xs font-sans uppercase tracking-[0.2em] font-bold rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Book Now</span>
                <FaArrowRight size={11} />
              </Link>
              
              <a 
                href="tel:02076379288" 
                className="font-sans text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
              >
                Or Call 020 7637 9288
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 4. Our Services - WHITE */}
      <section className="py-24 md:py-32 px-8 md:px-14 bg-white text-neutral-900 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Style Previews, Book Button */}
          <AnimatedSection className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-normal leading-[0.9] tracking-tight uppercase text-black">
              Our <br/>
              <span className="italic font-light text-neutral-400">Services</span>
            </h2>

            <p className="font-sans text-neutral-600 text-base md:text-lg leading-relaxed max-w-md">
              Every cut, shave, and treatment is customized to your preferences and finished with care.
            </p>

            {/* Circular Preview Images */}
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image 
                  src="/images/service-1.jpg" 
                  alt="Classic Cut & Beard Style" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image 
                  src="/images/service-2.jpg" 
                  alt="Precision Skin Fade" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 relative border border-black/10 shadow-lg group">
                <Image 
                  src="/images/service-3.jpg" 
                  alt="Sculpted Beard Treatment" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 text-xs font-sans uppercase tracking-[0.2em] font-bold rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <span>Book</span>
                <FaArrowRight size={11} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column: Accordion */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <ServicesAccordion isDark={false} />
          </AnimatedSection>

        </div>
      </section>

      {/* 5. Testimonials - BLACK */}
      <section className="py-24 md:py-32 px-8 md:px-14 bg-black text-white relative">
        <div className="max-w-[1400px] mx-auto">
          
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-white/50">
              Client Stories
            </h2>
          </AnimatedSection>

          {/* Testimonial Carousel */}
          <TestimonialCarousel isDark={true} />

        </div>
      </section>

      {/* Global Footer */}
      <Footer />

    </main>
  );
}
