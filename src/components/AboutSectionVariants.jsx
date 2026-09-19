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
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-italiana leading-[0.88] tracking-tight uppercase text-black">
                Bright Face <br />
                <span className="text-neutral-400 font-light">Barber</span>
              </h2>
            </div>
            <div className="md:text-right font-poppins text-xs text-neutral-500 space-y-1 uppercase tracking-wider font-medium">
              <p>33 Newman Street</p>
              <p>London W1T 1PY</p>
              <p className="text-black font-bold">Est. 2018</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold block">
                  Our Philosophy
                </span>
                <p className="font-italiana text-2xl sm:text-3xl md:text-4xl leading-snug text-neutral-900 border-l-2 border-black pl-5">
                  "At Bright Face Barber, we understand that grooming is as much about self-expression as it is about style."
                </p>
              </div>
              <div className="space-y-4 font-sans text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                <p>
                  Our approach is rooted in a commitment to craftsmanship and customer satisfaction. We take the time to listen to your needs and offer tailored advice, ensuring you receive a look that complements your personality and lifestyle. With a focus on precision and detail, we aim to enhance your natural features and bring out the best in you.
                </p>
                <div className="p-6 rounded-2xl bg-neutral-100 border border-black/5 space-y-2">
                  <span className="font-poppins text-xs uppercase tracking-[0.16em] text-black font-semibold block">
                    The Bright Face Experience
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Step into Bright Face Barber and experience a blend of tradition and innovation. Our welcoming atmosphere, complete with vintage décor and modern amenities, sets the stage for a relaxing and enjoyable visit with complimentary beverages.
                  </p>
                </div>
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
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-normal leading-[0.88] tracking-tight uppercase text-black">
                Bright Face <br />
                <span className="italic font-light text-neutral-400">Barber</span>
              </h2>
            </div>
            <div className="md:text-right font-poppins text-xs text-neutral-500 space-y-1 uppercase tracking-wider font-medium">
              <p>33 Newman Street</p>
              <p>London W1T 1PY</p>
              <p className="text-black font-bold">Est. 2018</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold block">
                  Our Philosophy
                </span>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-snug text-neutral-900 border-l-2 border-black pl-5">
                  "At Bright Face Barber, we understand that grooming is as much about self-expression as it is about style."
                </p>
              </div>
              <div className="space-y-4 font-sans text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                <p>
                  Our approach is rooted in a commitment to craftsmanship and customer satisfaction. We take the time to listen to your needs and offer tailored advice, ensuring you receive a look that complements your personality and lifestyle. With a focus on precision and detail, we aim to enhance your natural features and bring out the best in you.
                </p>
                <div className="p-6 rounded-2xl bg-neutral-100 border border-black/5 space-y-2">
                  <span className="font-poppins text-xs uppercase tracking-[0.16em] text-black font-semibold block">
                    The Bright Face Experience
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Step into Bright Face Barber and experience a blend of tradition and innovation. Our welcoming atmosphere, complete with vintage décor and modern amenities, sets the stage for a relaxing and enjoyable visit with complimentary beverages.
                  </p>
                </div>
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
