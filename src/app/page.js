import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import ServicesAccordion from '@/components/ServicesAccordion';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-neutral-100 selection:bg-emerald-500 selection:text-black relative">
      
      {/* Dynamic Cinematic Dark Navbar with Emerald Details */}
      <Navbar />
      
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* Google Business Profile Rating & Reviews Trust Strip */}
      <TrustStrip />

      {/* 2. About Section - Clean Dark Luxury & Craftsman Heritage */}
      <AboutSection />

      {/* 3. Booking Section - Editorial Unhurried Reservation */}
      <BookingSection />

      {/* 4. Our Services - Clean & Uncluttered Editorial Layout */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-14 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Narrative, Link */}
            <AnimatedSection className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                    Grooming Menu · Newman St
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[0.9] tracking-tight uppercase text-white">
                  Our <br/>
                  <span className="italic font-light text-emerald-400">Services</span>
                </h2>
              </div>

              <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Every cut, shave, and treatment is customized to your preferences, facial structure, and lifestyle with unhurried care.
              </p>

              <div className="pt-2">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-black px-8 sm:px-10 py-4 text-xs font-btn uppercase tracking-wider font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  <span>View Full Menu</span>
                  <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Column: Clean Accordion */}
            <AnimatedSection delay={0.2} className="lg:col-span-7 w-full">
              <ServicesAccordion isDark={true} />
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 5. Testimonials - Spacious & Uncluttered Guestbook */}
      <section className="py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-14 bg-[#000000] text-white relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1440px] mx-auto relative z-10 space-y-12 sm:space-y-16">
          
          <AnimatedSection className="text-center max-w-xl mx-auto space-y-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mb-1"></span>
            <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              The Fitzrovia Guestbook
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal uppercase tracking-tight text-white">
              Client Stories & Reviews
            </h2>
          </AnimatedSection>

          {/* Testimonial Carousel - Naturally Breathable */}
          <div className="w-full">
            <TestimonialCarousel isDark={true} />
          </div>

        </div>
      </section>

      {/* Global Clean Minimalist Footer */}
      <Footer />

    </main>
  );
}
