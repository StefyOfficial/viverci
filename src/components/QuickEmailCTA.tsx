import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  submitToWaitingList,
  getSavedWaitingList,
  clearSavedWaitingList,
  WAITING_LIST_EVENT,
} from '../services/waitingList';

export const QuickEmailCTA: React.FC = () => {
  const [email, setEmail] = useState('');
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
    const result = await submitToWaitingList({ email });
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
    setErrorMessage('');
  };

  return (
    <section
      aria-labelledby="quick-cta-title"
      className="w-full py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#14382C]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-white border border-[#14382C]/10 p-6 sm:p-10 lg:p-12 shadow-xs text-center overflow-hidden">
          {/* Subtle background warm ambient glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#C08235]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#C08235] block mb-3">
              VIVERCI STA PRENDENDO FORMA
            </span>

            {/* Titolo */}
            <h2
              id="quick-cta-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14382C] tracking-tight leading-snug"
            >
              Vuoi sapere quando sarà possibile esplorare le città?
            </h2>

            {/* Testo breve */}
            <p className="mt-3 text-sm sm:text-base text-[#14382C]/80 leading-relaxed font-normal">
              Lascia la tua email e ti avviseremo quando Viverci sarà pronto.
            </p>

            {/* Form / Feedback container */}
            <div className="mt-6 sm:mt-8">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="max-w-xl mx-auto"
                >
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Campo email */}
                    <div className="relative flex-1">
                      <label htmlFor="quick-email-input" className="sr-only">
                        La tua email
                      </label>
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#14382C]/40">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        id="quick-email-input"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="La tua email"
                        aria-required="true"
                        aria-invalid={!!errorMessage}
                        aria-describedby={errorMessage ? 'quick-email-error' : undefined}
                        disabled={isLoading}
                        className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-full bg-[#FAF9F5] border border-[#14382C]/15 text-[#14382C] placeholder-[#14382C]/45 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C08235] focus:border-transparent transition-all disabled:opacity-60"
                      />
                    </div>

                    {/* Pulsante */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      aria-busy={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#14382C] text-[#FAF9F5] font-bold text-sm sm:text-base hover:bg-[#1C4E3D] active:scale-98 transition-all shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
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

                  {/* Messaggio di errore */}
                  {errorMessage && (
                    <p
                      id="quick-email-error"
                      role="alert"
                      aria-live="assertive"
                      className="mt-2.5 text-xs font-semibold text-rose-700 text-center sm:text-left sm:pl-4"
                    >
                      {errorMessage}
                    </p>
                  )}

                  {/* Microcopy sotto il form */}
                  <p className="mt-3.5 text-xs text-[#14382C]/60 text-center">
                    Solo aggiornamenti sul progetto. Niente spam.
                  </p>
                </form>
              ) : (
                /* Success State */
                <div
                  role="status"
                  aria-live="polite"
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F5] border border-[#14382C]/10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 text-left">
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
        </div>
      </div>
    </section>
  );
};
