import React from 'react';
import { ViverciLogo } from './ViverciLogo';

interface BrandManifestoCardProps {
  className?: string;
}

export const BrandManifestoCard: React.FC<BrandManifestoCardProps> = ({ className = '' }) => {
  return (
    <div
      id="brand-manifesto-card"
      className={`relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-[36px] border-[3.5px] border-[#14382C] bg-[#FAF9F5] p-8 sm:p-10 flex flex-col items-center justify-between text-center shadow-sm select-none transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div className="w-full flex-1 flex flex-col items-center justify-center pt-2">
        <h3 className="text-xl sm:text-2xl font-bold leading-[1.3] text-[#14382C] tracking-tight">
          Un luogo può
          <br />
          creare valore,
        </h3>
        <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold leading-[1.3] text-[#C08235] tracking-tight">
          senza lasciarlo
          <br />
          alla comunità.
        </p>
      </div>

      <div className="pt-4 pb-1">
        <ViverciLogo size="md" />
      </div>
    </div>
  );
};
