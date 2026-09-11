import React from 'react';

export const WhyViverciExists: React.FC = () => {
  return (
    <section id="perche-esiste" className="w-full py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#14382C]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
            PERCHÉ VIVERCI ESISTE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14382C] tracking-tight leading-[1.15]">
            Ogni anno migliaia di persone cambiano città.
            <br />
            O cambiano Paese.
          </h2>
          <p className="mt-6 text-base sm:text-xl text-[#14382C]/80 leading-relaxed">
            Per lavoro, studio, famiglia, costo della vita o semplicemente per cercare un luogo più adatto a sé. 
            Trasferirsi è comune. Capire dove andare è molto più difficile.
          </p>
        </div>

        {/* 3 Simple, Big Number Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* CARD 1 */}
          <div className="p-8 sm:p-9 rounded-[32px] bg-white border border-[#14382C]/10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14382C] tracking-tight block">
                109.000
              </span>
              <p className="mt-4 text-base sm:text-lg font-medium text-[#14382C]/90 leading-snug">
                cittadini italiani hanno trasferito la residenza all'estero nel 2025.
              </p>
              <p className="mt-3 text-xs text-[#14382C]/60">
                Nel 2024 erano circa 141.000.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#14382C]/10">
              <span className="text-[11px] text-[#14382C]/50 block">
                Fonte: ISTAT — Migrazioni interne e internazionali della popolazione residente, anni 2024-2025.
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="p-8 sm:p-9 rounded-[32px] bg-white border border-[#14382C]/10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#C08235] tracking-tight block">
                6,6 MILIONI
              </span>
              <p className="mt-4 text-base sm:text-lg font-medium text-[#14382C]/90 leading-snug">
                di cittadini italiani vivono abitualmente all'estero.
              </p>
              <p className="mt-3 text-xs text-[#14382C]/60">
                6 milioni e 604 mila al 31 dicembre 2025.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#14382C]/10">
              <span className="text-[11px] text-[#14382C]/50 block">
                Fonte: ISTAT — Gli italiani residenti all'estero, anno 2025. Dati preliminari.
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-8 sm:p-9 rounded-[32px] bg-white border border-[#14382C]/10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14382C] tracking-tight block">
                112.000
              </span>
              <p className="mt-4 text-base sm:text-lg font-medium text-[#14382C]/90 leading-snug">
                trasferimenti dal Mezzogiorno al Centro-Nord nel 2025.
              </p>
              <p className="mt-3 text-xs text-[#14382C]/60">
                Contro circa 67.000 trasferimenti nella direzione opposta.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#14382C]/10">
              <span className="text-[11px] text-[#14382C]/50 block">
                Fonte: ISTAT — Migrazioni interne e internazionali della popolazione residente, anni 2024-2025.
              </span>
            </div>
          </div>

        </div>

        {/* Human question closing the data */}
        <div className="mt-14 sm:mt-18 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xl sm:text-2xl font-bold text-[#14382C] tracking-tight">
            Dietro ogni trasferimento c'è una domanda:
            <br />
            <span className="text-[#C08235]">dove posso costruire la vita che sto cercando?</span>
          </p>
          <p className="text-base sm:text-lg text-[#14382C]/75 font-medium">
            Viverci nasce per aiutare a trovare una risposta.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* IL PASSAGGIO DAI DATI AL PROGETTO (Transizione) */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[#14382C]/15 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#14382C]/60 block mb-4">
            Oltre il semplice trasloco
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14382C] tracking-tight">
            Trasferirsi non significa soltanto cambiare indirizzo.
          </h3>

          <p className="mt-5 text-base sm:text-xl text-[#14382C]/80 max-w-2xl mx-auto leading-relaxed">
            Significa cambiare casa, quartiere, abitudini, distanze, persone, ritmi, opportunità e quotidianità.
          </p>

          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#14382C]/5 border border-[#14382C]/10">
            <p className="text-xl sm:text-3xl font-extrabold text-[#14382C] leading-snug">
              Per questo scegliere una città significa scegliere molto più di un punto sulla mappa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
