import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';

export const metadata = {
  title: 'Services & Pricing | Bright Face Barber London',
  description: 'Explore our barbering menu, from precision scissor tailoring to traditional hot towel straight-razor shaves.',
};

export default function Services() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-14 relative border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
            Fitzrovia London W1 · Grooming Menu
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-normal uppercase tracking-tight text-white leading-[0.92]">
            Our <span className="italic font-light text-emerald-400">Services</span>
          </h1>
          <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every appointment is tailored to your hair texture, lifestyle, and facial structure with unhurried care.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-14 bg-[#000000]">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const categoryItems = cat.ids.map(id => SERVICES.find(s => s.id === id)).filter(Boolean);

            return (
              <div key={idx} className="space-y-8">
                <AnimatedSection className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal uppercase tracking-tight text-white">
                    {cat.category}
                  </h2>
                  <span className="font-poppins text-xs uppercase tracking-wider text-emerald-400 font-medium">
                    {cat.tag}
                  </span>
                </AnimatedSection>
                
                <div className="space-y-4">
                  {categoryItems.map((item, itemIdx) => (
                    <AnimatedSection key={item.id} delay={itemIdx * 0.04}>
                      <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                        <div className="space-y-1.5 max-w-xl">
                          <div className="flex items-center gap-3">
                            <h3 className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-poppins text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
                              {item.time}
                            </span>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                            {item.fullDesc || item.shortDesc}
                          </p>
                        </div>

                        <div className="shrink-0 flex items-center justify-between sm:justify-end sm:border-l sm:border-white/10 sm:pl-6 pt-3 sm:pt-0 border-t border-white/5 sm:border-t-0 gap-4 sm:gap-6">
                          <span className="font-poppins text-xl sm:text-2xl font-bold text-emerald-400">
                            {item.price}
                          </span>
                          <Link
                            href={`/booking?service=${item.id}`}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-btn font-bold text-xs uppercase tracking-[0.14em] transition-all hover:scale-105 active:scale-95 shadow-sm shrink-0"
                          >
                            <span>Book This</span>
                            <FaArrowRight size={10} />
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <AnimatedSection className="text-center mt-16 sm:mt-24">
          <Link 
            href="/booking" 
            className="bg-emerald-500 text-black px-12 py-4 rounded-full font-btn font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 duration-300 inline-block shadow-md"
          >
            Reserve Your Chair
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
