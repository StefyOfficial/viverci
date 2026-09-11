import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, MapPin, Compass, Heart } from 'lucide-react';
import { ViverciLogo } from './ViverciLogo';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedMotive, setSelectedMotive] = useState<string>('costo-vita');
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>('citta-media');

  if (!isOpen) return null;

  const motives = [
    { id: 'costo-vita', label: 'Costo della vita & Casa', desc: 'Canoni sostenibili e tranquillità economica' },
    { id: 'ritmo', label: 'Quiete & Tempo per sé', desc: 'Meno stress, più natura, ritmi più umani' },
    { id: 'relazioni', label: 'Comunità & Relazioni', desc: 'Facilità di integrazione e tessuto sociale aperto' },
    { id: 'servizi', label: 'Salute, Scuole & Servizi', desc: 'Welfare di prossimità per te e la tua famiglia' },
  ];

  const environments = [
    { id: 'metropoli', label: 'Grande città', detail: 'Connessioni veloci e stimoli continui' },
    { id: 'citta-media', label: 'Città a misura d’uomo', detail: 'Equilibrio ideale tra servizi e ritmi quotidiani' },
    { id: 'borgo', label: 'Piccola comunità o borgo', detail: 'Relazioni ravvicinate e contatto con la natura' },
    { id: 'estero', label: 'Trasferimento all’estero', detail: 'Nuove prospettive e apertura internazionale' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#14382C]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] border border-[#14382C]/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-[#14382C]/60 hover:text-[#14382C] hover:bg-[#14382C]/10 transition-colors cursor-pointer"
          aria-label="Chiudi finestra"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ViverciLogo size="sm" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C08235] bg-[#C08235]/10 px-2.5 py-1 rounded-full">
            Trova la tua città
          </span>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#14382C] tracking-tight">
                Cosa conta di più per la tua vita?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#14382C]/75">
                Scegliere dove andare significa scegliere che tipo di vita vuoi costruire.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {motives.map((m) => {
                const isSelected = selectedMotive === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMotive(m.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#14382C] bg-[#14382C]/5 ring-2 ring-[#14382C]'
                        : 'border-[#14382C]/15 hover:border-[#14382C]/40 bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#14382C]">{m.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#14382C]" />}
                    </div>
                    <p className="text-xs text-[#14382C]/70 mt-1">{m.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#14382C]/10">
              <span className="text-xs text-[#14382C]/60 font-medium">Passo 1 di 2</span>
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14382C] text-[#FAF9F5] font-semibold text-sm hover:bg-[#1B4B3B] transition-colors cursor-pointer"
              >
                Continua
                <ArrowRight className="w-4 h-4 text-[#C08235]" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#14382C] tracking-tight">
                Quale dimensione cerchi per la tua quotidianità?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#14382C]/75">
                Ogni luogo ha un suo ritmo e una diversa accessibilità alle relazioni e ai servizi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {environments.map((env) => {
                const isSelected = selectedEnvironment === env.id;
                return (
                  <button
                    key={env.id}
                    onClick={() => setSelectedEnvironment(env.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#14382C] bg-[#14382C]/5 ring-2 ring-[#14382C]'
                        : 'border-[#14382C]/15 hover:border-[#14382C]/40 bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#14382C]">{env.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#14382C]" />}
                    </div>
                    <p className="text-xs text-[#14382C]/70 mt-1">{env.detail}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#14382C]/10">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#14382C]/75 font-semibold hover:underline cursor-pointer"
              >
                ← Torna indietro
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14382C] text-[#FAF9F5] font-semibold text-sm hover:bg-[#1B4B3B] transition-colors cursor-pointer"
              >
                Vedi il risultato
                <Sparkles className="w-4 h-4 text-[#C08235]" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white border border-[#14382C]/15 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-[#C08235] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                <span>La prospettiva di Viverci</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#14382C]">
                Non cerchiamo la città perfetta. Cerchiamo quella giusta per te.
              </h4>
              <p className="text-sm text-[#14382C]/80 leading-relaxed">
                Le città non sono voti da 1 a 10. Sono ecosistemi di case, trasporti, ritmi, comunità e natura. 
                Viverci ti aiuterà a confrontare i luoghi sulla base di come si vive davvero ogni giorno.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#14382C]/75 font-semibold hover:underline cursor-pointer"
              >
                Ricomincia
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <a
                  href="#waiting-list"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C08235] text-[#FAF9F5] font-bold text-xs sm:text-sm hover:bg-[#D49347] transition-colors shadow-sm text-center"
                >
                  Entra nella waiting list
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#14382C] text-[#FAF9F5] font-semibold text-xs sm:text-sm hover:bg-[#1B4B3B] transition-colors shadow-sm cursor-pointer"
                >
                  Esplora la pagina
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
