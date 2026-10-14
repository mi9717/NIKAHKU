import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { GoldDivider, LeafOrnament, CornerFlourish } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface ClosingSectionProps {
  config?: WeddingConfig;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ config = weddingConfig }) => {
  const { closing, couple } = config;

  return (
    <section id="penutup" className="py-20 px-6 sm:px-10 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#EAE3DC] relative text-center overflow-hidden">
      {/* Corner Flourishes */}
      <div className="absolute top-4 left-4">
        <CornerFlourish position="top-left" className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
      <div className="absolute top-4 right-4">
        <CornerFlourish position="top-right" className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Monogram Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#D4AF37] bg-[#FAF8F5] flex items-center justify-center shadow-md mb-6 relative">
          <span className="font-script-wedding text-3xl sm:text-4xl text-[#5C7C64] pt-1">
            {couple.monogram}
          </span>
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#5C7C64] flex items-center justify-center text-white">
            <Sparkles className="w-3 h-3 text-[#E6CA65]" />
          </div>
        </div>

        {/* Heartfelt closing message */}
        <p className="text-xs sm:text-sm text-[#43584B] leading-relaxed max-w-md mx-auto font-serif-wedding text-base sm:text-lg italic">
          &ldquo;{closing.verse}&rdquo;
        </p>

        <p className="text-xs text-[#55695D] mt-4 leading-relaxed max-w-sm">
          {closing.subtext}
        </p>

        <p className="text-xs sm:text-sm font-serif-wedding text-[#5C7C64] font-semibold tracking-wider uppercase mt-6">
          {closing.closingGreeting}
        </p>

        <GoldDivider className="my-6" />

        {/* Families and Couple Signature */}
        <div className="space-y-4">
          <p className="text-xs text-[#7A9A80] uppercase tracking-widest font-semibold">
            {closing.heading}
          </p>

          <h3 className="font-script-wedding text-4xl sm:text-5xl text-[#5C7C64]">
            {couple.displayNames}
          </h3>

          <div className="pt-2 text-xs text-[#55695D] space-y-1">
            {closing.families.map((family, idx) => (
              <React.Fragment key={idx}>
                <p>{family}</p>
                {idx < closing.families.length - 1 && <p>&amp;</p>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Small floating botanical */}
        <div className="mt-8">
          <LeafOrnament className="w-8 h-8 animate-float-slow mx-auto" />
        </div>

        {/* NikahKu Brand Footer */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/30 w-full text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-xs text-[#43584B] shadow-2xs mb-2">
            <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="font-bold tracking-wide">NikahKu</span>
            <span className="text-[#7A9A80]">&bull; Undangan Pernikahan Digital</span>
          </div>
          <p className="text-[11px] text-[#7A9A80]">
            Template Desain: <span className="text-[#5C7C64] font-medium">Ivory Sage Elegance</span>
          </p>
          <p className="text-[10px] text-[#94AFA0] mt-1">
            &copy; 2026 NikahKu Digital Invitation. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
};
