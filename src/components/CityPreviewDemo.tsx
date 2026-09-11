import React from 'react';
import { MapPin, Info, Sparkles, Building, Bus, Wallet, Users, Moon, Trees, Stethoscope } from 'lucide-react';

export const CityPreviewDemo: React.FC = () => {
  const dimensions = [
    { name: 'Casa', icon: Building, status: 'Pressione elevata sui canoni di locazione' },
    { name: 'Trasporti', icon: Bus, status: 'Rete capillare, ottima ciclabilità urbana' },
    { name: 'Costo della vita', icon: Wallet, status: 'Sopra la media nazionale per beni e servizi' },
    { name: 'Comunità', icon: Users, status: 'Dinamica professionale, relazioni frammentate' },
    { name: 'Quiete', icon: Moon, status: 'Ritmo sostenuto e inquinamento acustico' },
    { name: 'Natura', icon: Trees, status: 'Parchi urbani accessibili, verde periurbano' },
    { name: 'Salute', icon: Stethoscope, status: 'Centri specialistici e presidi d’eccellenza' },
  ];

  return (
    <section id="scheda-esempio" className="w-full py-20 sm:py-28 bg-white border-b border-[#14382C]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C08235]/10 text-[#C08235] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Esempio grafico dimostrativo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14382C] tracking-tight leading-tight">
            Come si presenta una città su Viverci
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#14382C]/75">
            Nessun voto complessivo fittizio. Uno spaccato chiaro della quotidianità reale.
          </p>
        </div>

        {/* Demo City Card */}
        <div className="max-w-3xl mx-auto rounded-[36px] sm:rounded-[44px] bg-[#FAF9F5] border-2 border-[#14382C]/15 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Header City */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#14382C]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#14382C]/60">
                <MapPin className="w-4 h-4 text-[#C08235]" />
                <span>Italia</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#14382C] tracking-tight mt-1">
                MILANO
              </h3>
            </div>

            {/* Profile and Traits badges */}
            <div className="flex flex-col sm:items-end gap-1.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14382C] text-[#FAF9F5] text-xs font-bold tracking-wide">
                <span>Profilo:</span>
                <span className="text-[#C08235]">Città Vetrina</span>
              </div>
              <div className="text-xs text-[#14382C]/75 font-semibold">
                Tratti: <span className="font-normal text-[#14382C]">Equilibrata · Alienante</span>
              </div>
            </div>
          </div>

          {/* Com'è viverci */}
          <div className="py-7 border-b border-[#14382C]/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#14382C]/60">
              Com'è viverci <span className="font-normal lowercase opacity-75">(testo demo)</span>
            </h4>
            <p className="text-sm sm:text-base text-[#14382C]/85 leading-relaxed font-normal">
              Milano offre grandi opportunità di crescita, eventi culturali continui e una mobilità pubblica che consente di vivere senza automobile. Tuttavia, la pressione sui canoni d’affitto e i ritmi serrati richiedono una forte compatibilità con uno stile di vita dinamico e ad alta intensità.
            </p>
          </div>

          {/* Dimensions preview list */}
          <div className="pt-7 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#14382C]/60">
              Le dimensioni osservate:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dimensions.map((dim, idx) => {
                const IconComp = dim.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#14382C]/10 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#14382C]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="w-4 h-4 text-[#C08235]" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#14382C]">
                        {dim.name}
                      </span>
                      <span className="text-xs text-[#14382C]/70">
                        {dim.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Demo disclaimer */}
          <div className="mt-8 pt-4 border-t border-[#14382C]/10 flex items-center justify-between text-[11px] text-[#14382C]/50">
            <span>Scheda a solo scopo illustrativo</span>
            <span>Nessun voto sintetico</span>
          </div>

        </div>

      </div>
    </section>
  );
};
