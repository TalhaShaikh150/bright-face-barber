import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaGoogle } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-5 sm:px-8 md:px-14 border-t border-white/10 text-white relative">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Main Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <Image 
                src="/images/logo.png" 
                alt="Bright Face Barber London" 
                width={80} 
                height={80} 
                className="w-auto h-10 sm:h-12 object-contain invert"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl tracking-[0.1em] uppercase font-normal text-white">
                  Bright Face Barber
                </span>
                <span className="font-poppins text-[9px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  Fitzrovia · London W1
                </span>
              </div>
            </div>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Rooted in classic British scissor discipline and traditional hot towel therapy. Dedicated to unhurried grooming in Central London.
            </p>

            <div className="space-y-2 pt-1 font-poppins text-xs text-neutral-300">
              <p className="text-white font-medium">33 Newman Street, Fitzrovia, London, W1T 1PY</p>
              <div className="flex flex-wrap items-center gap-4 text-neutral-400 pt-1">
                <a 
                  href="tel:02076379288" 
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors text-white font-medium"
                >
                  <FaPhoneAlt size={11} className="text-emerald-400" />
                  <span>020 7637 9288</span>
                </a>
                <span className="text-white/20">·</span>
                <a 
                  href="mailto:info@brightface.uk" 
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@brightface.uk
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Barber Shop Operating Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
              Opening Hours
            </span>

            <ul className="space-y-3 font-poppins text-xs">
              <li className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-neutral-400">Monday — Friday</span>
                <span className="text-white font-medium">10:00 am — 8:00 pm</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-neutral-400">Saturday</span>
                <span className="text-white font-medium">10:00 am — 7:00 pm</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-neutral-400">Sunday</span>
                <span className="text-white font-medium">11:00 am — 5:00 pm</span>
              </li>
            </ul>

            <p className="font-sans text-[11px] text-neutral-400 pt-1">
              Walk-ins warmly welcomed subject to daily chair availability.
            </p>
          </div>

          {/* Column 3: Navigation & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4 lg:text-right">
            <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
              Directory
            </span>

            <nav>
              <ul className="space-y-2.5 font-sans text-xs uppercase tracking-[0.15em]">
                <li><Link href="/" className="text-neutral-400 hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-neutral-400 hover:text-emerald-400 transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-neutral-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="/booking" className="text-neutral-400 hover:text-emerald-400 transition-colors">Booking</Link></li>
                <li><Link href="/contact" className="text-neutral-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
              </ul>
            </nav>

            <div className="flex items-center gap-3 pt-3 lg:justify-end">
              <a 
                href="https://share.google/u41PKPG8WwfOcUXyS" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Google Business Profile & Reviews"
                title="Google Business Profile"
                className="w-8 h-8 rounded-full bg-black border border-white/15 text-white/80 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                <FaGoogle size={11} />
              </a>
              <a 
                href="https://www.instagram.com/brightfacebarber/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-black border border-white/15 text-white/80 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                <FaInstagram size={12} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100068887779024" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-black border border-white/15 text-white/80 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                <FaFacebookF size={11} />
              </a>
              <a 
                href="mailto:info@brightface.uk" 
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-black border border-white/15 text-white/80 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                <FaEnvelope size={10} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-poppins text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-medium">
          <p>© {new Date().getFullYear()} Bright Face Barber London. All rights reserved.</p>
          <div className="flex gap-6">
            <span>33 Newman Street</span>
            <span>Fitzrovia W1</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
