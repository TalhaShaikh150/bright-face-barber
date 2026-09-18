"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutSection from './AboutSection';

export default function AboutSectionVariants({ initialVariant = 1 }) {
  // If variant 1 (default), render the official clean AboutSection directly
  if (initialVariant === 1) {
    return <AboutSection />;
  }

  // Variant 2: Italiana (Milanese Modernist)
  if (initialVariant === 2) {
    return (
      <section className="py-24 md:py-36 px-6 md:px-14 bg-white text-neutral-900 relative border-b border-black/5">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black pb-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500 block mb-3">
                Heritage & Atmosphere // Fitzrovia
              </span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-italiana leading-[0.88] tracking-tight uppercase text-black">
                Bright Face <br />
                <span className="text-neutral-400 font-light">Barber</span>
              </h2>
            </div>
            <div className="md:text-right font-mono text-xs text-neutral-500 space-y-1 uppercase tracking-widest">
              <p>33 Newman Street</p>
              <p>London W1T 1PY</p>
              <p className="text-black font-bold">Est. 2018</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <p className="font-italiana text-2xl sm:text-3xl md:text-4xl leading-snug text-neutral-900 border-l-2 border-black pl-6">
                "A great haircut is never just a trim — it is an intentional ritual of restoration, precision, and confidence."
              </p>
              <div className="space-y-4 font-sans text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
                <p>At Bright Face Barber, we believe a great haircut is more than just a trim, it's an experience.</p>
                <p>Nestled in the heart of London at 33 Newman Street, our barber shop is dedicated to delivering top-notch grooming with a personal touch.</p>
                <p>Our talented team combines classic British scissors discipline with modern flair, ensuring you leave not only looking sharp but feeling completely confident.</p>
                <p>Whether you're here for a timeless cut, a fresh fade, or a meticulously crafted beard trim, we've got you covered.</p>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl border border-black/10 group">
                <Image
                  src="/images/about.jpg"
                  alt="Bright Face Barber - About Us"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant 3: Bodoni Moda (Dramatic Modern Didone)
  if (initialVariant === 3) {
    return (
      <section className="py-24 md:py-36 px-6 md:px-14 bg-white text-neutral-900 relative border-b border-black/5">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black pb-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500 block mb-3">
                Heritage & Atmosphere // Fitzrovia
              </span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-normal leading-[0.88] tracking-tight uppercase text-black">
                Bright Face <br />
                <span className="italic font-light text-neutral-400">Barber</span>
              </h2>
            </div>
            <div className="md:text-right font-mono text-xs text-neutral-500 space-y-1 uppercase tracking-widest">
              <p>33 Newman Street</p>
              <p>London W1T 1PY</p>
              <p className="text-black font-bold">Est. 2018</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-snug text-neutral-900 border-l-2 border-black pl-6">
                "A great haircut is never just a trim — it is an intentional ritual of restoration, precision, and confidence."
              </p>
              <div className="space-y-4 font-sans text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
                <p>At Bright Face Barber, we believe a great haircut is more than just a trim, it's an experience.</p>
                <p>Nestled in the heart of London at 33 Newman Street, our barber shop is dedicated to delivering top-notch grooming with a personal touch.</p>
                <p>Our talented team combines classic British scissors discipline with modern flair, ensuring you leave not only looking sharp but feeling completely confident.</p>
                <p>Whether you're here for a timeless cut, a fresh fade, or a meticulously crafted beard trim, we've got you covered.</p>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl border border-black/10 group">
                <Image
                  src="/images/about.jpg"
                  alt="Bright Face Barber - About Us"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AboutSection />;
}
