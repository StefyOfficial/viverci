import React from 'react';
import { Heart, Compass, CheckCircle } from 'lucide-react';

export const HowViverciWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Cosa conta per te?',
      description: 'Casa, natura, tranquillità, lavoro, servizi, comunità, costo della vita e molto altro.',
      icon: Heart,
    },
    {
      step: '02',
      title: 'Come si vive lì?',
      description: 'Guarda la città attraverso le cose che influenzano davvero la quotidianità.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'È il posto giusto per te?',
      description: 'Confronta luoghi diversi e scopri quali possono essere più compatibili con la vita che vuoi costruire.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="come-funziona" className="w-full py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#14382C]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
            SEMPLICE E INTUITIVO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14382C] tracking-tight leading-tight">
            Come funziona Viverci
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#14382C]/75">
            Un percorso chiaro per mettere a fuoco ciò che desideri per la tua vita.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="p-8 sm:p-9 rounded-[32px] bg-white border border-[#14382C]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-black tracking-widest text-[#C08235] bg-[#C08235]/10 px-3 py-1 rounded-full">
                      PASSO {item.step}
                    </span>
                    <IconComp className="w-5 h-5 text-[#14382C]/60" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#14382C] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#14382C]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
