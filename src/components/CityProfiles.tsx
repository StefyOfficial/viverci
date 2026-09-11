import React from 'react';
import { BrandManifestoCard } from './BrandManifestoCard';
import { Sparkles, Eye, Home } from 'lucide-react';

export const CityProfiles: React.FC = () => {
  const profiles = [
    {
      title: 'Città Umana',
      description: 'Dove qualità della vita, accessibilità e relazioni hanno un peso importante.',
    },
    {
      title: 'Città Equilibrata',
      description: 'Dove opportunità e qualità della vita convivono senza forti squilibri.',
    },
    {
      title: 'Città Vetrina',
      description: 'Bellissima da mostrare. Non necessariamente semplice da abitare.',
    },
    {
      title: 'Città Estrattiva',
      description: 'Produce o attira valore, ma poco di quel valore ritorna alla comunità.',
    },
    {
      title: 'Città Fragile',
      description: 'Ha qualità e potenziale, ma alcuni elementi essenziali della quotidianità sono vulnerabili.',
    },
    {
      title: 'Città Alienante',
      description: 'Offre molto, ma può chiedere un prezzo elevato in tempo, stress, relazioni o appartenenza.',
    },
  ];

  return (
    <section id="profili" className="w-full py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#14382C]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
            NON UNA CLASSIFICA: UN PROFILO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14382C] tracking-tight leading-tight">
            Una città non è un numero.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#14382C]/80 leading-relaxed">
            Due persone possono vivere la stessa città in modi completamente diversi. 
            Per questo Viverci non vuole ridurre un luogo a un voto unico.
          </p>

          {/* Visual explanation of dominant profile and secondary traits */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-2 p-3 sm:p-4 rounded-2xl bg-white border border-[#14382C]/10 text-xs sm:text-sm text-[#14382C]/80">
            <span className="font-bold text-[#14382C]">Ogni città è composta da:</span>
            <span className="px-3 py-1 rounded-full bg-[#14382C] text-[#FAF9F5] font-semibold text-xs">
              Profilo dominante
            </span>
            <span className="text-[#C08235] font-bold">+</span>
            <span className="px-3 py-1 rounded-full bg-[#C08235]/15 text-[#C08235] font-semibold text-xs border border-[#C08235]/30">
              Tratti secondari
            </span>
          </div>
        </div>

        {/* 6 Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {profiles.map((prof, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[28px] bg-white border border-[#14382C]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C08235] block mb-2">
                  Profilo
                </span>
                <h3 className="text-xl font-bold text-[#14382C] tracking-tight mb-2">
                  {prof.title}
                </h3>
                <p className="text-sm text-[#14382C]/75 leading-relaxed">
                  “{prof.description}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------- */}
        {/* APPROFONDIMENTO: CITTÀ VETRINA */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[#14382C]/15">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
              IL CONCETTO DI CITTÀ VETRINA
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14382C] tracking-tight leading-tight">
              Come viene raccontato un luogo non è sempre come viene vissuto.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* RACCONTATO */}
            <div className="p-7 sm:p-8 rounded-[32px] bg-white border border-[#14382C]/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C08235]">
                <Eye className="w-4 h-4" />
                <span>Raccontato</span>
              </div>
              <ul className="space-y-2 text-base text-[#14382C]/80 font-medium">
                <li>• turismo</li>
                <li>• eventi</li>
                <li>• ristoranti</li>
                <li>• attrazioni</li>
                <li>• marketing</li>
              </ul>
            </div>

            {/* VISSUTO */}
            <div className="p-7 sm:p-8 rounded-[32px] bg-[#14382C] text-[#FAF9F5] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C08235]">
                <Home className="w-4 h-4" />
                <span>Vissuto</span>
              </div>
              <ul className="space-y-2 text-base text-[#FAF9F5]/90 font-medium">
                <li>• affitti</li>
                <li>• redditi</li>
                <li>• tempo</li>
                <li>• rumore</li>
                <li>• servizi</li>
                <li>• relazioni</li>
                <li>• quotidianità</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-base sm:text-lg text-[#14382C]/80 max-w-2xl leading-relaxed font-normal">
            Viverci non vuole distruggere l'immagine di una città. Vuole completarla con ciò che normalmente non viene mostrato.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* APPROFONDIMENTO: CITTÀ ESTRATTIVA / COMUNITÀ */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-20 sm:mt-24 pt-16 sm:pt-20 border-t border-[#14382C]/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Official Instagram Card */}
          <div className="lg:col-span-5 flex justify-center">
            <BrandManifestoCard />
          </div>

          {/* Text context */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block">
              VALORE E TERRITORIO
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14382C] tracking-tight leading-snug">
              Un luogo può creare valore,
              <br />
              <span className="text-[#C08235]">senza lasciarlo alla comunità.</span>
            </h3>

            <p className="text-base sm:text-lg text-[#14382C]/80 leading-relaxed font-normal">
              Turismo, investimenti e crescita non significano automaticamente una vita migliore per chi abita un territorio.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#14382C]/10">
              <p className="text-lg sm:text-xl font-bold text-[#14382C] leading-snug">
                “Quanto del valore prodotto da un luogo ritorna realmente alla sua comunità?”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
