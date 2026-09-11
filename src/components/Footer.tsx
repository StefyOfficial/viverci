import React from 'react';
import { ViverciLogo } from './ViverciLogo';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF9F5] border-t border-[#14382C]/10 py-12 text-[#14382C]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ViverciLogo size="sm" />
          <span className="text-xs text-[#14382C]/60">
            Capire com'è davvero vivere in una città prima di decidere di trasferirsi.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#14382C]/60">
          <a
            href="https://instagram.com/viverciofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#14382C] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C08235]" />
            <span>@viverciofficial</span>
          </a>
          <span>© {new Date().getFullYear()} Viverci</span>
        </div>

      </div>
    </footer>
  );
};
