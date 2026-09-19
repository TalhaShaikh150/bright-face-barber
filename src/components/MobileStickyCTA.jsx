"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export default function MobileStickyCTA() {
  const pathname = usePathname();

  // If already on booking page, hide the duplicate sticky button to keep screen clear
  if (pathname === '/booking') {
    return null;
  }

  return (
    <aside 
      aria-label="Mobile quick actions"
      className="block sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/15 px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-8px_30px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center gap-2.5">
        
        {/* Tap to Call */}
        <a 
          href="tel:02076379288"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-poppins text-xs uppercase tracking-wider transition-colors shrink-0 font-medium"
          aria-label="Call Bright Face Barber shop"
        >
          <FaPhoneAlt size={10} className="text-emerald-400" />
          <span>Call</span>
        </a>

        {/* Primary Book Now CTA */}
        <Link 
          href="/booking"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-btn font-bold text-xs uppercase tracking-wider transition-transform active:scale-95"
        >
          <span>Book Chair</span>
          <FaArrowRight size={10} />
        </Link>

      </div>
    </aside>
  );
}
