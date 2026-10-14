import confetti from 'canvas-confetti';
import { MailOpen, Heart, Sparkles, Calendar } from 'lucide-react';
import { GoldDivider, LeafOrnament, CornerFlourish } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface CoverHeroProps {
  guestName: string;
  onOpen: () => void;
  isOpen: boolean;
  config?: WeddingConfig;
}

export const CoverHero: React.FC<CoverHeroProps> = ({ 
  guestName, 
  onOpen, 
  isOpen,
  config = weddingConfig 
}) => {
  const handleOpenClick = () => {
    // Fire festive gold and pastel green confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#94AFA0', '#5C7C64', '#F5EBE6', '#FFFDF9']
      });
    } catch {
      // safe fallback
    }
    onOpen();
  };

  return (
    <section 
      id="sampul"
      className="relative min-h-screen flex flex-col items-center justify-between p-6 sm:p-10 text-center overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5]"
    >
      {/* Decorative Botanical Corner Flourishes */}
      <div className="absolute top-4 left-4">
        <CornerFlourish position="top-left" className="w-16 h-16 sm:w-24 sm:h-24" />
      </div>
      <div className="absolute top-4 right-4">
        <CornerFlourish position="top-right" className="w-16 h-16 sm:w-24 sm:h-24" />
      </div>
      <div className="absolute bottom-4 left-4">
        <CornerFlourish position="bottom-left" className="w-16 h-16 sm:w-24 sm:h-24" />
      </div>
      <div className="absolute bottom-4 right-4">
        <CornerFlourish position="bottom-right" className="w-16 h-16 sm:w-24 sm:h-24" />
      </div>

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#7A9A80]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 pt-6 sm:pt-10 flex flex-col items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF0EB] border border-[#7A9A80]/30 shadow-xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#5C7C64]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#5C7C64]">
            {config.hero.badgeText}
          </span>
        </div>
        <p className="font-serif-wedding text-sm sm:text-base tracking-[0.25em] uppercase text-[#7A9A80] font-medium">
          {config.hero.subTitle}
        </p>
      </div>

      {/* Center Couple Names & Monogram */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center max-w-sm">
        {/* Arch Frame with Couple Silhouette / Monogram */}
        <div className="relative mb-6">
          <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-t-full border-2 border-[#D4AF37]/70 p-2 bg-[#FAF8F5]/80 shadow-md flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-t-full border border-[#7A9A80]/30 overflow-hidden relative">
              <img
                src={config.hero.coverPhoto}
                alt={`${config.couple.displayNames} Wedding`}
                className="w-full h-full object-cover object-center filter brightness-95 contrast-95 transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C7C64]/60 via-transparent to-transparent flex items-end justify-center pb-3">
                <span className="text-white text-xs tracking-widest font-light font-serif-wedding">
                  {config.hero.eventDateShort}
                </span>
              </div>
            </div>
          </div>
          {/* Floating leaf icon */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF8F5] px-2 rounded-full border border-[#D4AF37]/40 shadow-xs">
            <LeafOrnament className="w-6 h-6 animate-float-slow" />
          </div>
        </div>

        {/* Romantic Couple Names */}
        <h1 className="font-script-wedding text-5xl sm:text-6xl text-[#5C7C64] leading-tight select-none">
          {config.couple.displayNames}
        </h1>

        <GoldDivider className="my-2" />

        <p className="text-xs sm:text-sm text-[#7A9A80] font-medium tracking-wide flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          {config.hero.eventDateLabel} &bull; {config.hero.locationCity}
        </p>
      </div>

      {/* Bottom Guest Greeting & Open Button */}
      <div className="relative z-10 pb-6 sm:pb-8 w-full max-w-sm flex flex-col items-center">
        <div className="w-full bg-[#FAF8F5]/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/30 shadow-md mb-4 text-center">
          <p className="text-xs text-[#7A9A80] uppercase tracking-wider mb-1 font-medium">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="my-1.5 py-1 px-3 bg-[#EAF0EB]/60 rounded-lg inline-block border border-[#7A9A80]/20">
            <h2 className="text-base sm:text-lg font-bold text-[#43584B] font-serif-wedding capitalize">
              {guestName || 'Tamu Undangan'}
            </h2>
          </div>
          <p className="text-[11px] text-[#7A9A80] italic mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* Primary Call to Action: Buka Undangan */}
        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#5C7C64] hover:bg-[#4a6350] text-[#FFFDF9] font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-[#D4AF37]/60 overflow-hidden cursor-pointer"
        >
          {/* Subtle gold shine effect on hover */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
          
          <MailOpen className="w-5 h-5 text-[#E6CA65] group-hover:scale-110 transition-transform duration-300" />
          <span className="tracking-wide font-semibold">
            {isOpen ? 'Lihat Isi Undangan' : 'Buka Undangan'}
          </span>
          <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] group-hover:animate-ping" />
        </button>

        {isOpen && (
          <p className="text-xs text-[#7A9A80] mt-3 animate-pulse">
            &darr; Gulir ke bawah untuk melihat detail &darr;
          </p>
        )}
      </div>
    </section>
  );
};
