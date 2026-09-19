"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-[72px] sm:h-[76px] flex items-center justify-between relative">
        
        {/* Left: Navigation Links on Desktop / Brand on Mobile */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-sans font-medium text-neutral-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive 
                      ? 'border-b-2 border-emerald-400 font-semibold text-white' 
                      : 'text-neutral-300 hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile/Tablet Brand Logo & Name */}
          <Link 
            href="/" 
            className="flex lg:hidden items-center gap-2.5 group transition-opacity hover:opacity-90"
          >
            <Image 
              src="/images/logo.png" 
              alt="Bright Face Barber" 
              width={40} 
              height={40} 
              className="w-auto h-8 sm:h-9 object-contain invert"
              priority
            />
            <span className="font-sans font-bold text-[15px] sm:text-[16px] text-white tracking-tight whitespace-nowrap">
              Bright Face Barber
            </span>
          </Link>
        </div>

        {/* Center: Crest Logo + Brand Name (Desktop only, centered) */}
        <Link 
          href="/" 
          className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2 group transition-opacity hover:opacity-90"
        >
          <Image 
            src="/images/logo.png" 
            alt="Bright Face Barber" 
            width={48} 
            height={48} 
            className="w-auto h-9 md:h-10 object-contain invert"
            priority
          />
          <span className="font-sans font-bold text-[17px] text-white tracking-tight whitespace-nowrap">
            Bright Face Barber
          </span>
        </Link>

        {/* Right: Emerald BOOK NOW Pill & Social Circles */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Social Icons (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a 
              href="https://www.instagram.com/brightfacebarber/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-[33px] h-[33px] rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all hover:scale-105"
            >
              <FaInstagram size={13} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100068887779024" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-[33px] h-[33px] rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all hover:scale-105"
            >
              <FaFacebookF size={12} />
            </a>
            <a 
              href="mailto:info@brightface.uk" 
              aria-label="Email"
              className="w-[33px] h-[33px] rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all hover:scale-105"
            >
              <FaEnvelope size={11} />
            </a>
          </div>

          {/* Solid Emerald BOOK NOW Pill Button (Clean, No Glow) */}
          <Link 
            href="/booking" 
            className="hidden sm:inline-flex bg-emerald-500 text-black font-btn font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.16em] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-emerald-400 transition-all shadow-sm shrink-0 hover:scale-[1.02] active:scale-95"
          >
            BOOK NOW
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={21} /> : <FaBars size={21} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl overflow-hidden text-white"
          >
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-sans transition-colors ${
                    pathname === link.href 
                      ? 'font-bold text-emerald-400 border-l-2 border-emerald-400 pl-3' 
                      : 'text-neutral-300 hover:text-emerald-400 pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Book Now CTA (Clean, No Glow) */}
            <div className="mb-6 pt-2">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center bg-emerald-500 text-black font-btn font-bold text-xs uppercase tracking-[0.2em] py-3.5 rounded-full hover:bg-emerald-400 transition-colors shadow-sm"
              >
                Book Appointment
              </Link>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="font-poppins text-xs uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Fitzrovia · London
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/brightfacebarber/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <FaInstagram size={13} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100068887779024" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <FaFacebookF size={12} />
                </a>
                <a 
                  href="mailto:info@brightface.uk" 
                  aria-label="Email"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <FaEnvelope size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
