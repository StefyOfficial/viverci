import React from 'react';
import { ViverciLogo } from './ViverciLogo';
import { Compass, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenDiscovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscovery }) => {
  return (
    <header className="w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#14382C]/10 sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <ViverciLogo size="md" />
        </a>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#14382C]/75">
          <a href="#perche-esiste" className="hover:text-[#14382C] transition-colors">
            Perché esiste
          </a>
          <a href="#come-funziona" className="hover:text-[#14382C] transition-colors">
            Come funziona
          </a>
          <a href="#dimensioni" className="hover:text-[#14382C] transition-colors">
            Le 10 dimensioni
          </a>
          <a href="#profili" className="hover:text-[#14382C] transition-colors">
            I profili
          </a>
          <a href="#waiting-list" className="text-[#C08235] hover:text-[#A66E2B] transition-colors">
            Waiting list
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/viverciofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#14382C]/70 hover:text-[#14382C] px-2.5 py-2 transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#C08235]" />
            <span>@viverciofficial</span>
          </a>

          <button
            onClick={onOpenDiscovery}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#14382C] text-[#FAF9F5] text-xs sm:text-sm font-bold hover:bg-[#1C4E3D] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#C08235]" />
            <span>Trova la tua città</span>
          </button>
        </div>

      </div>
    </header>
  );
};
