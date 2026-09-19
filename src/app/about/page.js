import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

export const metadata = {
  title: 'About Bright Face Barber | Philosophy, Experience & Master Barber Talib',
  description: 'Learn about Bright Face Barber at 33 Newman Street, our philosophy, the Bright Face experience, our mission, and our founder & master barber Talib.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      {/* 1. Cinematic Hero Section Cover */}
      <section className="relative w-full overflow-hidden bg-[#000000] border-b border-white/10">
        
        {/* Panoramic Hero Cover Banner with rounded bottom corners matching reference */}
        <div className="relative w-full min-h-[58vh] sm:min-h-[66vh] md:min-h-[72vh] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-20 overflow-hidden rounded-b-[36px] sm:rounded-b-[48px] md:rounded-b-[56px] border-b border-white/15">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about-cover.jpg"
              alt="Bright Face Barber - 33 Newman Street Shop Interior Cover"
              fill
              className="object-cover object-center brightness-[0.82] contrast-[1.08] saturate-[1.05]"
              priority
              sizes="100vw"
            />
            {/* Cinematic Gradient Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/65 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Top Overline Badge */}
          <div className="relative z-10">
            <span className="font-poppins text-[10px] sm:text-xs uppercase tracking-[0.22em] text-emerald-400 font-semibold inline-flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              About Bright Face Barber · 33 Newman Street, London W1
            </span>
          </div>

          {/* Central / Lower Title Typography */}
          <div className="relative z-10 max-w-4xl space-y-3 sm:space-y-5 my-auto py-8 sm:py-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-normal uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              The Newman <br />
              <span className="italic font-light text-emerald-300">Street Story</span>
            </h1>
            <p className="font-sans text-neutral-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Craftsmanship, customer satisfaction, and an unwavering dedication to elevating male grooming in Central London.
            </p>
          </div>

          {/* Bottom Features Strip inside the Hero Cover */}
          <div className="relative z-10 pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 text-neutral-300 font-poppins text-[11px] sm:text-xs">
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="text-white font-medium">Est. 2018 · Fitzrovia W1</span>
              <span className="text-white/30">•</span>
              <span>Vintage Décor & Modern Amenities</span>
            </div>
            <span className="text-emerald-400 font-semibold">Proprietor: Talib M</span>
          </div>

        </div>
      </section>

      {/* 2. Philosophy & The Bright Face Experience */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-14 bg-[#000000]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Atmospheric Photography */}
          <AnimatedSection className="lg:col-span-6 relative aspect-[4/3] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#0d0d0d] group">
            <Image 
              src="/images/about.jpg" 
              alt="Bright Face Barber - 33 Newman Street Lounge & Atmosphere" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              sizes="(max-width: 1024px) 100vw, 650px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15">
              <p className="font-poppins text-xs uppercase tracking-wider text-neutral-300 font-medium">
                Vintage Décor & Modern Amenities · Relaxing Lounge
              </p>
            </div>
          </AnimatedSection>
          
          {/* Right: Philosophy & Experience Text */}
          <AnimatedSection delay={0.15} className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-normal uppercase tracking-tight text-white leading-tight">
                Grooming As <span className="italic font-light text-emerald-400">Self-Expression</span>
              </h2>
            </div>

            <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
              At Bright Face Barber, we understand that grooming is as much about self-expression as it is about style. Our approach is rooted in a commitment to craftsmanship and customer satisfaction. We take the time to listen to your needs and offer tailored advice, ensuring you receive a look that complements your personality and lifestyle. With a focus on precision and detail, we aim to enhance your natural features and bring out the best in you.
            </p>

            {/* The Bright Face Experience Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  The Bright Face Experience
                </span>
              </div>
              <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
                Step into Bright Face Barber and experience a blend of tradition and innovation. Our welcoming atmosphere, complete with vintage décor and modern amenities, sets the stage for a relaxing and enjoyable visit. From the moment you walk through our doors, you’ll be greeted by friendly faces and a professional team ready to make your grooming experience exceptional. Enjoy a complimentary beverage, kick back, and let us take care of the rest.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 3. About Our Leader: Talib */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-14 bg-[#050505] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Leader Narrative */}
          <AnimatedSection className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                About Our Leader
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal uppercase tracking-tight text-white leading-tight">
                Meet <span className="italic font-light text-emerald-400">Talib</span>
              </h2>
              <p className="font-poppins text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-semibold">
                Proprietor & Master Barber · Over 10 Years Industry Experience
              </p>
            </div>

            {/* Featured Quote from Talib */}
            <blockquote className="border-l-2 border-emerald-400 pl-5 sm:pl-6 py-2 bg-white/[0.02] rounded-r-2xl border-y border-r border-white/5 pr-4">
              <p className="font-heading text-xl sm:text-2xl md:text-3xl font-light italic text-white leading-snug">
                &ldquo;I’m a fussy barber. Why? Because my customers deserve the best.&rdquo;
              </p>
              <cite className="font-poppins text-xs uppercase tracking-wider text-emerald-400 font-semibold mt-2 block not-italic">
                ~ Talib M
              </cite>
            </blockquote>

            <div className="space-y-4 font-sans text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Inspired by his legendary uncle, Talib began learning to cut hair in high school and continued his training throughout college.
              </p>
              <p>
                With over 10 years of experience in the industry, Talib is now highly skilled in all aspects of male grooming. A perfectionist by nature, he diligently works to refine and develop his craft, ensuring he remains at the forefront of the industry. Starting from humble beginnings in his garage, he advanced to neighbourhood barbershops and, in recent years, has worked in some of London&apos;s finest establishments.
              </p>
              <p className="text-white font-medium">
                As the proprietor and operator of Bright Face, his mission is to consistently provide exceptional barbering services and impart his expert knowledge to train the next generation of Master Barbers to follow in his footsteps.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3 font-poppins text-xs">
              <span className="px-4 py-2 rounded-full bg-[#0d0d0d] border border-white/15 text-neutral-300">
                10+ Years Industry Experience
              </span>
              <span className="px-4 py-2 rounded-full bg-[#0d0d0d] border border-white/15 text-neutral-300">
                Master Grooming Specialist
              </span>
              <span className="px-4 py-2 rounded-full bg-[#0d0d0d] border border-emerald-500/30 text-emerald-400 font-medium">
                Proprietor & Operator
              </span>
            </div>
          </AnimatedSection>

          {/* Right Column: Leader Portrait Photo */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/5] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#0d0d0d] group">
              <Image 
                src="/images/talib.jpg" 
                alt="Talib M - Proprietor & Master Barber at Bright Face Barber" 
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 space-y-1.5">
                <h3 className="font-heading text-lg text-white uppercase tracking-tight">
                  Talib M · Proprietor
                </h3>
                <p className="font-heading text-sm text-neutral-200 italic">
                  &ldquo;I’m a fussy barber. Why? Because my customers deserve the best.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 4. OUR MISSION */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-14 bg-[#000000] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission Heading & Text */}
          <AnimatedSection className="lg:col-span-6 space-y-6">
            <span className="font-poppins text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              Our Mission
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-normal uppercase tracking-tight text-white leading-tight">
              OUR <span className="italic font-light text-emerald-400">MISSION</span>
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-normal">
              At Bright Face Barber, our mission is to elevate the art of barbering while providing an exceptional grooming experience for every client. We strive to be more than just a place for a haircut; we aim to be a sanctuary where tradition meets innovation, and where each visit is a moment of personal transformation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-full font-btn font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-md text-center"
              >
                <span>Book an Appointment</span>
                <FaArrowRight size={11} />
              </Link>
              <a 
                href="tel:02076379288"
                className="inline-flex items-center justify-center gap-2.5 font-poppins text-xs uppercase tracking-wider text-neutral-300 hover:text-emerald-400 transition-colors py-4 px-8 rounded-full bg-[#0d0d0d] border border-white/15 hover:border-emerald-500/40 font-medium text-center"
              >
                <FaPhoneAlt size={11} className="text-emerald-400" />
                <span>020 7637 9288</span>
              </a>
            </div>
          </AnimatedSection>

          {/* Right Column: Mission Image */}
          <AnimatedSection delay={0.2} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#0d0d0d] group">
              <Image 
                src="/images/mission.jpg" 
                alt="Bright Face Barber - The Art of Barbering Tools & Mission" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </main>
  );
}
