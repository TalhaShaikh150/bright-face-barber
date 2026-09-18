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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[76px] flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-sans font-medium text-neutral-800">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive 
                    ? 'border-b-2 border-black font-semibold text-black' 
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Center: Crest Logo + Brand Name */}
        <Link 
          href="/" 
          className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 group transition-opacity hover:opacity-90"
        >
          <Image 
            src="/images/logo.png" 
            alt="Bright Face Barber" 
            width={48} 
            height={48} 
            className="w-auto h-9 md:h-10 object-contain"
            priority
          />
          <span className="font-sans font-bold text-[16px] md:text-[17px] text-black tracking-tight whitespace-nowrap">
            Bright Face Barber
          </span>
        </Link>

        {/* Right: Solid Black Social Circles & BOOK NOW Pill */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          
          {/* Social Icons with solid black filled circles */}
          <div className="hidden md:flex items-center gap-2.5">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-[33px] h-[33px] rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all hover:scale-105"
            >
              <FaInstagram size={13} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-[33px] h-[33px] rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all hover:scale-105"
            >
              <FaFacebookF size={12} />
            </a>
            <a 
              href="mailto:brightfacebarber@gmail.com" 
              aria-label="Email"
              className="w-[33px] h-[33px] rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all hover:scale-105"
            >
              <FaEnvelope size={11} />
            </a>
          </div>

          {/* Solid Black BOOK NOW Pill Button */}
          <Link 
            href="/booking" 
            className="bg-black text-white font-sans font-bold text-[11px] uppercase tracking-[0.16em] px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-sm shrink-0 hover:scale-[1.02] active:scale-95"
          >
            BOOK NOW
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-black hover:text-neutral-700 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-sans ${
                    pathname === link.href ? 'font-bold text-black border-l-2 border-black pl-3' : 'text-neutral-700 pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
              >
                <FaInstagram size={13} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
              >
                <FaFacebookF size={12} />
              </a>
              <a 
                href="mailto:brightfacebarber@gmail.com" 
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
              >
                <FaEnvelope size={11} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
