import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'About Us | Bright Face Barber',
  description: 'Learn about Bright Face Barber, our story, and our master barbers.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-20 px-6 relative border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 grayscale">
          <img src="/images/imgi_34_IMG-20240731-WA0016.jpg" alt="Barbershop Interior" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-wide mb-6">About Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The story behind London's premier grooming destination.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="order-2 md:order-1 relative aspect-square">
            <img src="/images/imgi_28_IMG-20240731-WA0004.jpg" alt="Master Barber" className="object-cover w-full h-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 border border-white/20 -translate-x-4 -translate-y-4 -z-10"></div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase mb-8 tracking-wide">Our Philosophy</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
              <p>
                Bright Face Barber was founded on a simple principle: every man deserves to look and feel his absolute best. We wanted to create a space where classic barbering traditions meet contemporary style, in an environment that feels both exclusive and welcoming.
              </p>
              <p>
                Located in the heart of the city at 33 Newman Street, our shop is designed to be a sanctuary. A place where you can step away from the noise, sit back, and enjoy a truly premium service.
              </p>
              <p>
                Our master barbers, including the highly requested Talib, are passionate about their craft. They take the time to understand exactly what you want, ensuring you never feel rushed. Whether you need a quick tidy-up or a complete restyle, you are in expert hands.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Space */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wide mb-6">The Atmosphere</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto"></div>
          </AnimatedSection>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "/images/imgi_38_IMG-20240731-WA0016.jpg",
            "/images/imgi_44_IMG-20240731-WA0014.jpg",
            "/images/imgi_17_IMG_0102.jpg"
          ].map((src, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.2} className="aspect-[4/5] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={src} alt="Shop Interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
