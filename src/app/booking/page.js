import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Book an Appointment | Bright Face Barber London',
  description: 'Book your haircut, hot towel shave, or full grooming service at 33 Newman Street, Fitzrovia.',
};

export default function Booking() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-24 sm:pt-28 flex flex-col selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-14 relative flex-grow flex items-center">
        
        <div className="max-w-4xl mx-auto w-full relative z-10 space-y-10">
          
          <AnimatedSection className="text-center space-y-3">
            <span className="font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              Fitzrovia Barber Shop Booking · Central London W1
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-normal uppercase tracking-tight text-white">
              Reserve Your <span className="italic font-light text-emerald-400">Chair</span>
            </h1>
            <p className="font-sans text-neutral-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Reserve your spot at our barber shop for a top-notch grooming experience. Your fresh look is just an appointment away!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Suspense fallback={
              <div className="bg-[#0d0d0d] p-12 rounded-3xl border border-white/10 text-center font-poppins text-neutral-400 text-xs animate-pulse font-medium">
                Loading Booking Form...
              </div>
            }>
              <BookingForm />
            </Suspense>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </main>
  );
}
