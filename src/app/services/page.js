import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Bright Face Barber',
  description: 'Explore our premium barbering services, from classic haircuts to hot towel shaves.',
};

export default function Services() {
  const services = [
    {
      category: "Hair",
      items: [
        { name: "Classic Haircut", price: "£35", description: "Tailored haircut finished with professional styling and a hot towel." },
        { name: "Skin Fade", price: "£40", description: "Seamless fade down to the skin, precision crafted." },
        { name: "Restyle", price: "£45", description: "Complete transformation of your current hairstyle." },
        { name: "Clippers Only (1 Grade)", price: "£20", description: "Quick, clean, and consistent buzz cut." },
      ]
    },
    {
      category: "Beard",
      items: [
        { name: "Beard Trim & Shape", price: "£20", description: "Sculpting and shaping with clipper and scissors, finished with beard oil." },
        { name: "Hot Towel Shave", price: "£30", description: "Traditional wet shave with straight razor, hot towels, and premium lather." },
        { name: "Beard Trim with Foil", price: "£25", description: "Sharper finish using foil shavers on the cheeks and neck." },
      ]
    },
    {
      category: "Packages",
      items: [
        { name: "The Bright Face Experience", price: "£60", description: "Haircut & Hot Towel Shave. The ultimate grooming session." },
        { name: "Haircut & Beard Trim", price: "£50", description: "Keep everything sharp and fresh in one sitting." },
        { name: "Father & Son", price: "£55", description: "Quality time and quality cuts for two." },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-20 px-6 relative border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <img src="/images/imgi_24_IMG_0113.jpg" alt="Barber Tools" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-wide mb-6">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Premium grooming tailored to the modern gentleman.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          {services.map((category, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <AnimatedSection>
                <h2 className="text-3xl font-serif font-bold uppercase mb-12 tracking-widest text-center text-white/90 pb-4 border-b border-white/10 inline-block w-full">{category.category}</h2>
              </AnimatedSection>
              
              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <AnimatedSection key={itemIdx} delay={itemIdx * 0.1}>
                    <div className="group flex flex-col md:flex-row justify-between items-start md:items-end gap-4 p-6 glass hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/20 rounded-sm">
                      <div className="max-w-xl">
                        <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <div className="text-2xl font-serif font-bold text-white shrink-0 group-hover:text-gray-300 transition-colors">
                        {item.price}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-20">
          <Link href="/booking" className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all hover:scale-105 duration-300 inline-block">
            Book Now
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
