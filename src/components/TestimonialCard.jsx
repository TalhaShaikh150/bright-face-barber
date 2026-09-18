export default function TestimonialCard({ name, text }) {
  return (
    <div className="flex flex-col h-full border-l border-white/20 pl-8 md:pl-12 py-4">
      <div className="flex-grow">
        <p className="text-gray-300 font-serif text-lg md:text-xl leading-relaxed mb-10 font-light">
          "{text}"
        </p>
      </div>
      
      <div className="mt-auto">
        <h4 className="font-sans font-medium uppercase tracking-[0.2em] text-[11px] text-white">
          — {name}
        </h4>
      </div>
    </div>
  );
}
