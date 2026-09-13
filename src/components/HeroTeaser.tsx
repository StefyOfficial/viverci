import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  submitToWaitingList,
  getSavedWaitingList,
  clearSavedWaitingList,
  WAITING_LIST_EVENT,
} from '../services/waitingList';

interface HeroTeaserProps {
  onOpenDiscovery?: () => void;
  onScrollToExplore?: () => void;
}

export const HeroTeaser: React.FC<HeroTeaserProps> = () => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize state with shared storage and custom events
  useEffect(() => {
    const { email: savedEmail } = getSavedWaitingList();
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSubmitted(true);
    }

    const handleWaitingListUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ email: string | null }>;
      if (customEvent.detail?.email) {
        setEmail(customEvent.detail.email);
        setIsSubmitted(true);
        setErrorMessage('');
      } else {
        setIsSubmitted(false);
        setEmail('');
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

    if (!email.trim()) {
      setErrorMessage('Inserisci un indirizzo email valido.');
      return;
    }

    setIsLoading(true);
    const result = await submitToWaitingList({ email, botField });
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
    setBotField('');
    setErrorMessage('');
  };

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

        {/* Compact Hero Email Form */}
        <div className="mt-8 sm:mt-10 w-full max-w-xl mx-auto">
          {!isSubmitted ? (
            <form
              name="viverci-waiting-list"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="w-full"
            >
              <input type="hidden" name="form-name" value="viverci-waiting-list" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Non compilare questo campo:
                  <input
                    name="bot-field"
                    tabIndex={-1}
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    autoComplete="off"
                  />
                </label>
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Email Input */}
                <div className="relative flex-1">
                  <label htmlFor="hero-email-input" className="sr-only">
                    La tua email
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#14382C]/40">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="hero-email-input"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    aria-required="true"
                    aria-invalid={!!errorMessage}
                    aria-describedby={errorMessage ? 'hero-email-error' : undefined}
                    disabled={isLoading}
                    className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-full bg-white border border-[#14382C]/15 text-[#14382C] placeholder-[#14382C]/45 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C08235] focus:border-transparent transition-all shadow-xs disabled:opacity-60"
                  />
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#14382C] text-[#FAF9F5] font-bold text-sm sm:text-base hover:bg-[#1C4E3D] active:scale-98 transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                >
                  {isLoading ? (
                    <span>Invio...</span>
                  ) : (
                    <>
                      <span>Avvisami al lancio</span>
                      <ArrowRight className="w-4 h-4 text-[#C08235]" />
                    </>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p
                  id="hero-email-error"
                  role="alert"
                  aria-live="assertive"
                  className="mt-2.5 text-xs font-semibold text-rose-700 text-center sm:text-left sm:pl-4"
                >
                  {errorMessage}
                </p>
              )}

              {/* Anti-spam microcopy */}
              <p className="mt-3.5 text-xs text-[#14382C]/60 text-center">
                Solo aggiornamenti sul progetto. Niente spam.
              </p>
            </form>
          ) : (
            /* Success State */
            <div
              role="status"
              aria-live="polite"
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#14382C]/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#14382C] text-[#FAF9F5] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#C08235]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-[#14382C]">
                    Grazie! Ti avviseremo quando Viverci sarà pronto.
                  </p>
                  <p className="text-xs text-[#14382C]/70">
                    Email registrata: <strong className="text-[#14382C]">{email}</strong>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#14382C]/60 hover:text-[#14382C] underline cursor-pointer shrink-0"
              >
                Modifica email
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
