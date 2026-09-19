import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Bright Face Barber London',
  description: 'Connect with Bright Face Barber at 33 Newman Street, Fitzrovia, London W1T 1PY.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 flex flex-col selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-14 relative flex-grow">
        
        <div className="max-w-[1360px] mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          
          {/* Top Page Header - Spans across the top for clean visual alignment */}
          <AnimatedSection className="space-y-3 max-w-2xl">
            <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              33 Newman Street · Fitzrovia W1
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-normal uppercase tracking-tight text-white leading-[0.95]">
              Contact & <span className="italic font-light text-emerald-400">Get In Touch</span>
            </h1>
            <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
              Whether you wish to arrange an appointment, inquire about group bookings, or discuss styling advice, we are always happy to help.
            </p>
          </AnimatedSection>

          {/* 2-Column Grid: Both cards start at the exact same top baseline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Studio Details Card (5 cols) */}
            <AnimatedSection delay={0.1} className="lg:col-span-5 h-full">
              <div className="h-full p-7 sm:p-9 md:p-10 rounded-3xl sm:rounded-[36px] bg-[#0d0d0d] border border-white/10 shadow-2xl flex flex-col justify-between space-y-8">
                
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-5">
                    <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase tracking-tight">
                      Studio Details
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
                      Located in Fitzrovia, Central London.
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Barber Shop Address</h3>
                      <p className="font-sans text-sm text-white font-medium">33 Newman Street, Fitzrovia</p>
                      <p className="font-poppins text-xs text-neutral-400">London W1T 1PY</p>
                      <a 
                        href="https://share.google/u41PKPG8WwfOcUXyS" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors pt-1 font-poppins font-medium"
                      >
                        <span>View on Google Business / Maps</span>
                        <FaExternalLinkAlt size={9} />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                      <FaPhoneAlt size={13} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Phone Number</h3>
                      <a href="tel:02076379288" className="font-poppins text-sm text-emerald-400 hover:underline block font-semibold">
                        020 7637 9288
                      </a>
                      <p className="font-sans text-xs text-neutral-400">Answered during operating hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                      <FaEnvelope size={13} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Written Enquiries</h3>
                      <a href="mailto:info@brightface.uk" className="font-poppins text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors block break-all font-medium">
                        info@brightface.uk
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                      <FaClock size={13} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-poppins text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Operating Hours</h3>
                      <p className="font-poppins text-xs text-neutral-300">Mon–Fri: 10:00 am — 8:00 pm</p>
                      <p className="font-poppins text-xs text-neutral-300">Sat: 10:00 am — 7:00 pm · Sun: 11:00 am — 5:00 pm</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer / Quick Notice */}
                <div className="pt-5 border-t border-white/10">
                  <span className="font-poppins text-[11px] text-neutral-400 uppercase tracking-wider block font-medium">
                    Walk-ins Welcome Subject to Daily Availability
                  </span>
                </div>

              </div>
            </AnimatedSection>

            {/* Right Column: Contact Form Card (7 cols) */}
            <AnimatedSection delay={0.2} className="lg:col-span-7 h-full">
              <ContactForm />
            </AnimatedSection>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
