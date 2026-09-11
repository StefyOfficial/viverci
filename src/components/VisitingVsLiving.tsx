import React from 'react';
import { Camera, Home, Check } from 'lucide-react';

export const VisitingVsLiving: React.FC = () => {
  const touristItems = [
    'monumenti',
    'ristoranti',
    'eventi',
    'skyline',
    'attrazioni',
    'turismo',
  ];

  const residentItems = [
    'affitto',
    'trasporti',
    'tempo',
    'rumore',
    'servizi',
    'relazioni',
    'natura',
    'costo della vita',
  ];

  return (
    <section id="visitare-vs-viverci" className="w-full py-20 sm:py-28 bg-white border-b border-[#14382C]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
            DUE PROSPETTIVE DIVERSE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#14382C] tracking-tight leading-[1.15]">
            Una città può essere bellissima da visitare.
            <br />
            <span className="text-[#C08235]">Ma viverci è un'altra storia.</span>
          </h2>
        </div>

        {/* Two Columns Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          
          {/* Column 1: COME LA VEDIAMO */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#FAF9F5] border border-[#14382C]/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#14382C]/5 border border-[#14382C]/10 flex items-center justify-center text-[#14382C]">
                  <Camera className="w-5 h-5 text-[#C08235]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#14382C]/50 block">
                    Punto di vista esterno
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#14382C] tracking-tight">
                    Come la vediamo
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5 mt-6">
                {touristItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base text-[#14382C]/80 font-medium capitalize">
                    <span className="w-2 h-2 rounded-full bg-[#C08235]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#14382C]/10 text-xs text-[#14382C]/60 italic">
              L'esperienza del visitatore di passaggio
            </div>
          </div>

          {/* Column 2: COME LA VIVIAMO */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#14382C] text-[#FAF9F5] border border-[#14382C] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FAF9F5]">
                  <Home className="w-5 h-5 text-[#C08235]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5]/60 block">
                    Punto di vista reale
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F5] tracking-tight">
                    Come la viviamo
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5 mt-6">
                {residentItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base text-[#FAF9F5]/90 font-medium capitalize">
                    <span className="w-2 h-2 rounded-full bg-[#C08235]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-[#FAF9F5]/70 italic">
              La realtà quotidiana di chi ci abita ogni giorno
            </div>
          </div>

        </div>

        {/* Closing punchline */}
        <div className="mt-14 sm:mt-16 text-center max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl font-extrabold text-[#14382C] tracking-tight">
            Viverci guarda la città dalla parte di chi la abita.
          </p>
        </div>

      </div>
    </section>
  );
};
