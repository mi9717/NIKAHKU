import React from 'react';

export const LeafOrnament: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-8 h-8", 
  color = "#7A9A80" 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M50 10C50 10 35 25 35 45C35 65 50 90 50 90C50 90 65 65 65 45C65 25 50 10 50 10Z" 
      fill={color} 
      fillOpacity="0.25"
    />
    <path 
      d="M50 10C50 35 50 65 50 90" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M50 30C43 25 38 27 38 27M50 45C40 40 37 42 37 42M50 60C42 55 40 58 40 58M50 30C57 25 62 27 62 27M50 45C60 40 63 42 63 42M50 60C58 55 60 58 60 58" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#FAF8F5]"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
    <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#FAF8F5]"></div>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent"></div>
  </div>
);

export const CornerFlourish: React.FC<{ 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = "w-16 h-16" }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`${rotation} ${className} pointer-events-none opacity-40`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C 40 0, 80 40, 80 80" stroke="#7A9A80" strokeWidth="1.5" fill="none" />
        <path d="M0 0 C 25 0, 50 25, 50 50" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <circle cx="80" cy="80" r="3" fill="#D4AF37" />
        <circle cx="50" cy="50" r="2.5" fill="#7A9A80" />
        <path d="M15 5 C 25 2, 35 15, 30 25 C 20 20, 15 10, 15 5 Z" fill="#7A9A80" fillOpacity="0.4" />
        <path d="M5 15 C 2 25, 15 35, 25 30 C 20 20, 10 15, 5 15 Z" fill="#7A9A80" fillOpacity="0.4" />
      </svg>
    </div>
  );
};
