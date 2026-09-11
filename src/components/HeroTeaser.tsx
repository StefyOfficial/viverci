import React from 'react';
import { Compass, MapPin, ArrowRight } from 'lucide-react';

interface HeroTeaserProps {
  onOpenDiscovery: () => void;
  onScrollToExplore: () => void;
}

export const HeroTeaser: React.FC<HeroTeaserProps> = ({ onOpenDiscovery, onScrollToExplore }) => {
  return (
    <section id="hero" className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#14382C]/10 overflow-hidden bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14382C]/5 border border-[#14382C]/15 text-xs font-semibold text-[#14382C] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C08235]" />
          <span>Scegliere dove vivere con consapevolezza</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#14382C] tracking-tight leading-[1.12]">
          Non scegliere solo una città.
          <br />
          Scegli la vita che vuoi <span className="text-[#C08235]">viverci</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-[#14382C]/85 font-medium leading-snug max-w-2xl">
          Viverci ti aiuta a capire com'è davvero vivere in una città prima di scegliere di trasferirti.
        </p>

        {/* Under text */}
        <p className="mt-4 text-sm sm:text-base text-[#14382C]/70 max-w-xl leading-relaxed">
          Casa, costo della vita, trasporti, comunità, servizi, natura e quotidianità. Oltre l'immagine turistica di un luogo.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenDiscovery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#14382C] text-[#FAF9F5] text-base font-bold hover:bg-[#1C4E3D] transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#C08235]" />
            <span>Trova la città giusta per te</span>
          </button>

          <button
            onClick={onScrollToExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#14382C] border border-[#14382C]/15 text-base font-semibold hover:border-[#14382C]/30 hover:bg-[#FAF9F5] transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C08235]" />
            <span>Esplora le città</span>
          </button>
        </div>

      </div>
    </section>
  );
};
