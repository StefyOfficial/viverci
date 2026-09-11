import React from 'react';

interface ViverciLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const ViverciLogo: React.FC<ViverciLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl tracking-tight',
    lg: 'text-3xl tracking-tight',
    xl: 'text-4xl tracking-tight',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Speech bubble with stylized building skyline */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#14382C]"
        >
          {/* Speech bubble rounded contour */}
          <path
            d="M 50 10 
               C 72 10, 90 27, 90 49 
               C 90 71, 72 88, 50 88 
               C 42.5 88, 35.5 86, 29.5 82.5 
               L 16 88 
               L 19.8 75.5 
               C 13.5 68.5, 10 59.2, 10 49 
               C 10 27, 28 10, 50 10 Z"
            stroke="#14382C"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Left building */}
          <path
            d="M 33 55 L 43 55 L 43 78 L 33 78 Z"
            fill="#14382C"
          />
          {/* Main tall central building */}
          <path
            d="M 43 38 L 65 41 L 65 78 L 43 78 Z"
            fill="#14382C"
          />
          {/* Inner facade highlight line / angle */}
          <path
            d="M 53 43 L 53 78"
            stroke="#FAF9F5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Ochre windows in central tower */}
          <rect x="56.5" y="48" width="4.5" height="5" rx="0.5" fill="#C08235" />
          <rect x="56.5" y="58" width="4.5" height="5" rx="0.5" fill="#C08235" />
        </svg>
      </div>

      {/* Brand Wordmark: "viverci" with custom ochre dots on 'i' */}
      {showWordmark && (
        <div className={`font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#14382C] leading-none flex items-baseline ${textSizes[size]}`}>
          <span>v</span>
          {/* first 'i' with ochre dot */}
          <span className="relative inline-block">
            <span className="text-[#14382C]">ı</span>
            <span className="absolute -top-[0.28em] left-1/2 -translate-x-1/2 w-[0.24em] h-[0.24em] rounded-full bg-[#C08235]" />
          </span>
          <span>verc</span>
          {/* second 'i' with ochre dot */}
          <span className="relative inline-block">
            <span className="text-[#14382C]">ı</span>
            <span className="absolute -top-[0.28em] left-1/2 -translate-x-1/2 w-[0.24em] h-[0.24em] rounded-full bg-[#C08235]" />
          </span>
        </div>
      )}
    </div>
  );
};
