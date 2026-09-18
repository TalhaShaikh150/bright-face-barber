import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 border-t border-white/10 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 md:pb-20 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="Bright Face Barber" 
                width={80} 
                height={80} 
                className="w-auto h-10 sm:h-12 object-contain invert"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.12em] uppercase font-bold text-white">
                  Bright Face
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
                  London W1 · Est. 2018
                </span>
              </div>
            </div>

            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
              A sanctuary for classic craftsmanship and modern grooming in the heart of London. Dedicated to precision, care, and quiet confidence.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaInstagram size={13} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaFacebookF size={13} />
              </a>
              <a 
                href="mailto:brightfacebarber@gmail.com" 
                aria-label="Email"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaEnvelope size={11} />
              </a>
            </div>
          </div>

          {/* Studio Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block">
              Studio Operating Hours
            </span>
            
            <ul className="space-y-3 sm:space-y-4 font-mono text-[11px] sm:text-xs">
              <li className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/80">Monday – Friday</span>
                <span className="text-white font-bold">10:00 am — 8:00 pm</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/80">Saturday</span>
                <span className="text-white font-bold">10:00 am — 7:00 pm</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/80">Sunday</span>
                <span className="text-white font-bold">11:00 am — 5:00 pm</span>
              </li>
            </ul>

            <div className="pt-2 text-neutral-400 text-xs flex items-center gap-2">
              <FaMapMarkerAlt size={12} className="text-neutral-500 shrink-0" />
              <span className="leading-normal">33 Newman Street, Fitzrovia, London, W1T 1PY</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-6 lg:text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block">
              Directory
            </span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em]">
              <li><Link href="/" className="hover-underline text-neutral-400 hover:text-white transition-colors">01 // Home</Link></li>
              <li><Link href="/services" className="hover-underline text-neutral-400 hover:text-white transition-colors">02 // Services</Link></li>
              <li><Link href="/about" className="hover-underline text-neutral-400 hover:text-white transition-colors">03 // About Us</Link></li>
              <li><Link href="/booking" className="hover-underline text-neutral-400 hover:text-white transition-colors">04 // Book Chair</Link></li>
              <li><Link href="/contact" className="hover-underline text-neutral-400 hover:text-white transition-colors">05 // Contact</Link></li>
            </ul>

            <div className="pt-2 sm:pt-4 lg:flex lg:justify-end">
              <a 
                href="tel:02076379288" 
                className="inline-flex items-center gap-2 font-mono text-xs text-white bg-white/10 px-4 py-2 rounded-full border border-white/15 hover:bg-white hover:text-black transition-colors"
              >
                <FaPhoneAlt size={10} />
                <span>020 7637 9288</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-500">
          <p>© {new Date().getFullYear()} Bright Face Barber. Crafted with care in London.</p>
          <div className="flex gap-6 sm:gap-8">
            <span className="text-neutral-400">All Rights Reserved</span>
            <span className="text-neutral-400">Powered By Mr A</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
