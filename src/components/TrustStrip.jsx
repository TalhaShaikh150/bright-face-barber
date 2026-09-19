"use client";
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function TrustStrip() {
  return (
    <section 
      aria-label="Google Business Profile Reviews and Barber Shop Rating"
      className="bg-[#080808] border-y border-white/10 py-3.5 sm:py-4 px-4 sm:px-8 md:px-14 relative z-20 text-white font-poppins"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        
        {/* Left: Google Rating Badge & Stars */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
          
          {/* Google Logo Mark */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="font-poppins text-xs font-medium tracking-wide uppercase text-neutral-300">
              Google Rating
            </span>
          </div>

          {/* Rating Number & 5 Gold Stars */}
          <div className="flex items-center gap-2">
            <span className="font-poppins text-base sm:text-lg font-bold text-white tracking-tight">
              5.0
            </span>
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={13} className="fill-current" />
              ))}
            </div>
            <span className="font-poppins text-xs text-neutral-400 font-normal">
              (186 Reviews)
            </span>
          </div>

          <a 
            href="https://share.google/u41PKPG8WwfOcUXyS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-poppins text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors ml-1 font-normal"
          >
            <span>Verified Profile</span>
            <FaExternalLinkAlt size={9} />
          </a>

        </div>

        {/* Right: Key Trust Pillars Styled in Poppins */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 font-poppins text-xs font-medium text-neutral-300">
          <div className="flex items-center gap-1.5">
            <FaCheckCircle size={12} className="text-emerald-400 shrink-0" />
            <span>British Scissor Discipline</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <FaMapMarkerAlt size={12} className="text-emerald-400 shrink-0" />
            <span>33 Newman St, Fitzrovia W1</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Walk-Ins & Bookings</span>
          </div>
        </div>

      </div>
    </section>
  );
}
