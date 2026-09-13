import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ArrowRight, Instagram, Sparkles, Heart } from 'lucide-react';
import { ViverciLogo } from './ViverciLogo';
import {
  submitToWaitingList,
  getSavedWaitingList,
  clearSavedWaitingList,
  WAITING_LIST_EVENT,
} from '../services/waitingList';

export const WaitingListSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const { email: savedEmail, reason: savedReason } = getSavedWaitingList();
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSubmitted(true);
    }
    if (savedReason) {
      setReason(savedReason);
    }

    const handleWaitingListUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ email: string | null; reason: string | null }>;
      if (customEvent.detail?.email) {
        setEmail(customEvent.detail.email);
        setIsSubmitted(true);
        if (customEvent.detail.reason) {
          setReason(customEvent.detail.reason);
        }
        setErrorMessage('');
      } else {
        setIsSubmitted(false);
        setEmail('');
        setReason('');
      }
    };

    window.addEventListener(WAITING_LIST_EVENT, handleWaitingListUpdate);
    return () => {
      window.removeEventListener(WAITING_LIST_EVENT, handleWaitingListUpdate);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Inserisci un indirizzo email valido.');
      return;
    }

    setIsLoading(true);
    const result = await submitToWaitingList({ email, reason });
    setIsLoading(false);

    if (result.success) {
      setIsSubmitted(true);
      setErrorMessage('');
    } else {
      setErrorMessage(result.error || 'Qualcosa non ha funzionato. Riprova tra poco.');
    }
  };

  const handleReset = () => {
    clearSavedWaitingList();
    setIsSubmitted(false);
    setEmail('');
    setReason('');
    setErrorMessage('');
  };

  const reasons = [
    'Sto pensando di trasferirmi',
    'Vorrei confrontare alcune città',
    'Sono curioso di capire meglio dove vivo',
    'Sto valutando un trasferimento all’estero',
  ];

  return (
    <section
      id="waiting-list"
      className="w-full py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#14382C]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Waiting List Container */}
        <div className="relative rounded-[36px] sm:rounded-[44px] bg-[#14382C] text-[#FAF9F5] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle warm ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C08235]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#FAF9F5] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C08235]" />
              <span>In costruzione</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF9F5] leading-tight">
              Viverci sta prendendo forma.
            </h2>

            {/* Subtext */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-normal">
              Lascia la tua email per sapere quando sarà possibile iniziare a esplorare e confrontare le città su Viverci.
            </p>

            {/* Form */}
            <div className="mt-8 pt-2">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email input + CTA */}
                  <div>
                    <label htmlFor="waiting-email" className="block text-xs font-bold uppercase tracking-wider text-[#FAF9F5]/70 mb-2.5">
                      La tua email
                    </label>
                    <div className="flex flex-col sm:flex-row items-stretch gap-3">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-[#14382C]/50" />
                        </div>
                        <input
                          id="waiting-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="nome@esempio.it"
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-full bg-[#FAF9F5] text-[#14382C] placeholder-[#14382C]/45 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#C08235] shadow-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C08235] text-[#FAF9F5] font-bold text-base hover:bg-[#D49347] transition-all shadow-md active:scale-98 cursor-pointer shrink-0"
                      >
                        {isLoading ? (
                          <span>Iscrizione...</span>
                        ) : (
                          <>
                            <span>Entra nella waiting list</span>
                            <ArrowRight className="w-5 h-5 text-[#FAF9F5]" />
                          </>
                        )}
                      </button>
                    </div>

                    {errorMessage && (
                      <p className="mt-2 text-xs font-semibold text-rose-300">
                        {errorMessage}
                      </p>
                    )}
                  </div>

                  {/* Optional Reason Question */}
                  <div className="pt-2">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#FAF9F5]/60 mb-2.5">
                      Cosa ti porta su Viverci? <span className="font-normal lowercase opacity-75">(facoltativo)</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setReason(reason === item ? '' : item)}
                          className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border text-left ${
                            reason === item
                              ? 'bg-[#FAF9F5] text-[#14382C] border-[#FAF9F5] font-semibold'
                              : 'bg-white/5 text-[#FAF9F5]/75 border-white/15 hover:bg-white/10'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Anti-spam small disclaimer */}
                  <p className="text-[12px] text-[#FAF9F5]/60">
                    Solo aggiornamenti sul progetto. Niente spam.
                  </p>
                </form>
              ) : (
                /* Success State */
                <div className="p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C08235] text-[#FAF9F5] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#FAF9F5]">
                        Sei nella waiting list!
                      </h4>
                      <p className="text-xs sm:text-sm text-[#FAF9F5]/80">
                        Ti avviseremo all'indirizzo <strong className="text-[#FAF9F5]">{email}</strong> appena Viverci sarà online.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs text-[#C08235] font-semibold">
                      Grazie per l'interesse verso il progetto
                    </span>
                    <button
                      onClick={handleReset}
                      className="text-xs text-[#FAF9F5]/60 hover:text-[#FAF9F5] underline"
                    >
                      Modifica email
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Instagram Block - Dedicated & Brand-aligned */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#14382C]/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#14382C]/5 border border-[#14382C]/10 flex items-center justify-center shrink-0 text-[#14382C]">
              <Instagram className="w-6 h-6 text-[#14382C]" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-extrabold text-base text-[#14382C]">@viverciofficial</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C08235] bg-[#C08235]/10 px-2 py-0.5 rounded-full">
                  Profilo ufficiale
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#14382C]/70 mt-0.5">
                Segui lo sviluppo del progetto, i retroscena e le riflessioni su come viviamo le nostre città.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/viverciofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14382C] text-[#FAF9F5] text-xs sm:text-sm font-semibold hover:bg-[#1C4E3D] transition-all shadow-xs cursor-pointer shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#C08235]" />
            <span>Seguici su Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
