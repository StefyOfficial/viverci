import React from 'react';
import { 
  Home, 
  Stethoscope, 
  Bus, 
  Wallet, 
  GraduationCap, 
  Users, 
  Shield, 
  Moon, 
  Trees, 
  Coffee 
} from 'lucide-react';

export const TenDimensions: React.FC = () => {
  const dimensions = [
    {
      name: 'Casa',
      question: 'Posso permettermi una casa dignitosa?',
      icon: Home,
    },
    {
      name: 'Salute',
      question: 'Quanto è facile accedere alle cure?',
      icon: Stethoscope,
    },
    {
      name: 'Trasporti',
      question: 'Posso muovermi senza dipendere continuamente dall\'auto?',
      icon: Bus,
    },
    {
      name: 'Costo della vita',
      question: 'Il costo quotidiano è sostenibile?',
      icon: Wallet,
    },
    {
      name: 'Futuro e scuole',
      question: 'Questo luogo offre possibilità nel lungo periodo?',
      icon: GraduationCap,
    },
    {
      name: 'Comunità',
      question: 'È possibile costruire relazioni e sentirsi parte del luogo?',
      icon: Users,
    },
    {
      name: 'Sicurezza',
      question: 'Come ci si sente nella vita quotidiana?',
      icon: Shield,
    },
    {
      name: 'Quiete',
      question: 'Posso trovare tranquillità, spazio e silenzio?',
      icon: Moon,
    },
    {
      name: 'Natura e respiro',
      question: 'La natura fa parte della vita quotidiana?',
      icon: Trees,
    },
    {
      name: 'Vita gratuita / Non consumo',
      question: 'Quanto posso vivere qui senza dover continuamente spendere?',
      icon: Coffee,
    },
  ];

  return (
    <section id="dimensioni" className="w-full py-20 sm:py-28 bg-white border-b border-[#14382C]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
            LE 10 DIMENSIONI DI VIVERCI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14382C] tracking-tight leading-tight">
            Cosa significa davvero vivere bene in un luogo?
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#14382C]/75 leading-relaxed">
            Non numeri astratti, ma le domande concrete che toccano le giornate di ciascuno di noi.
          </p>
        </div>

        {/* 10 Human Question Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {dimensions.map((dim, idx) => {
            const IconComp = dim.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#14382C]/10 flex flex-col justify-between hover:border-[#14382C]/30 hover:bg-white transition-all duration-200 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#14382C]/5 border border-[#14382C]/10 flex items-center justify-center text-[#14382C] group-hover:scale-105 transition-transform mb-4">
                    <IconComp className="w-5 h-5 text-[#C08235]" />
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-wider text-[#14382C] mb-2">
                    {dim.name}
                  </h3>

                  <p className="text-sm font-medium text-[#14382C]/80 leading-snug">
                    “{dim.question}”
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
