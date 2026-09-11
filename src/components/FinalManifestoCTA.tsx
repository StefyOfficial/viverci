import React from 'react';
import { Compass, MapPin, ArrowRight } from 'lucide-react';

interface FinalManifestoCTAProps {
  onOpenDiscovery: () => void;
  onScrollToExplore: () => void;
}

export const FinalManifestoCTA: React.FC<FinalManifestoCTAProps> = ({
  onOpenDiscovery,
  onScrollToExplore,
}) => {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#14382C]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main CTA block */}
        <div className="max-w-3xl space-y-5">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block">
            LA TUA SCELTA
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#14382C] tracking-tight leading-tight">
            Il posto giusto non è uguale per tutti.
          </h2>
          <p className="text-lg sm:text-2xl text-[#14382C]/80 leading-relaxed max-w-2xl mx-auto font-normal">
            Dipende da quello che cerchi, da quello che puoi permetterti e soprattutto dalla vita che vuoi costruire.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenDiscovery}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#14382C] text-[#FAF9F5] text-base font-bold hover:bg-[#1C4E3D] transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <Compass className="w-5 h-5 text-[#C08235]" />
              <span>Trova la tua città</span>
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

        {/* ----------------------------------------------------------- */}
        {/* MANIFESTO FINALE */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[#14382C]/15 max-w-3xl space-y-6">
          <p className="text-lg sm:text-2xl text-[#14382C]/70 font-medium">
            Non chiediamo quanto vale una città.
          </p>

          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#14382C] tracking-tight leading-[1.1]">
            Chiediamo che vita permette di vivere.
          </h3>

          <p className="text-base sm:text-xl text-[#14382C]/80 font-normal leading-relaxed pt-2">
            Perché scegliere dove vivere significa scegliere molto più di un punto sulla mappa.
          </p>
        </div>

      </div>
    </section>
  );
};
