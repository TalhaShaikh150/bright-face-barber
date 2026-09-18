import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Bright Face Barber',
  description: 'Get in touch with Bright Face Barber in London.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 flex flex-col">
      <Navbar />
      
      <section className="py-20 px-6 relative flex-grow flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <img src="/images/imgi_24_IMG_0113.jpg" alt="Dark Background" className="w-full h-full object-cover blur-md grayscale" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wide mb-8">Get In Touch</h1>
            <p className="text-gray-400 mb-12 font-light text-lg">
              Have a question or need to adjust your booking? Reach out to us using the details below or send us a message directly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Location</h3>
                  <p className="text-gray-400">33 Newman Street<br/>London, UK</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Phone</h3>
                  <p className="text-gray-400">+44 20 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Email</h3>
                  <p className="text-gray-400">info@brightfacebarber.com</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="glass p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold uppercase tracking-wide mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Full Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Email Address</label>
                  <input type="email" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">Message</label>
                  <textarea rows="4" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors rounded-sm resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-2">
                  <button type="button" className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all hover:scale-105 duration-300 w-full">
                    Send Message
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
