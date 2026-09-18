import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Book an Appointment | Bright Face Barber',
  description: 'Book your next haircut or grooming session at Bright Face Barber.',
};

export default function Booking() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 flex flex-col">
      <Navbar />
      
      <section className="py-20 px-6 relative flex-grow flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <img src="/images/imgi_78_Achromatic-hero.jpg" alt="Dark Background" className="w-full h-full object-cover blur-md" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wide mb-4">Book Appointment</h1>
            <p className="text-gray-400">Reserve your time with our master barbers.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Full Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Email Address</label>
                    <input type="email" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Service</label>
                    <select className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm appearance-none">
                      <option value="classic">Classic Haircut</option>
                      <option value="fade">Skin Fade</option>
                      <option value="beard">Beard Trim & Shape</option>
                      <option value="shave">Hot Towel Shave</option>
                      <option value="package">The Bright Face Experience</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Preferred Date</label>
                    <input type="date" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Additional Notes</label>
                  <textarea rows="4" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm resize-none" placeholder="Any specific requests or barbers..."></textarea>
                </div>

                <div className="pt-4 text-center">
                  <button type="button" className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all hover:scale-105 duration-300 w-full md:w-auto">
                    Confirm Request
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
