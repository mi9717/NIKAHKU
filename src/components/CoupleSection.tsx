import React from 'react';
import { Heart, Instagram } from 'lucide-react';
import { GoldDivider, LeafOrnament } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface CoupleSectionProps {
  config?: WeddingConfig;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ config = weddingConfig }) => {
  const { groom, bride } = config.couple;
  const { quote } = config;

  return (
    <section id="mempelai" className="py-16 px-6 sm:px-10 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#7A9A80]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-xl mx-auto text-center">
        {/* Arabic Basmalah */}
        <div className="mb-4">
          <p className="font-serif-wedding text-2xl sm:text-3xl text-[#5C7C64] tracking-wider">
            {quote.arabic}
          </p>
          <p className="text-xs text-[#7A9A80] uppercase tracking-widest mt-1">
            {quote.greeting}
          </p>
        </div>

        {/* Verse / Quote */}
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#F5F0EB]/80 border border-[#D4AF37]/30 shadow-xs relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF8F5] px-3">
            <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
          </div>
          <p className="text-xs sm:text-sm text-[#43584B] italic leading-relaxed font-serif-wedding text-center">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="text-[11px] font-semibold text-[#7A9A80] mt-3 uppercase tracking-wider">
            {quote.source}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#5C7C64] leading-relaxed max-w-md mx-auto mb-10">
          {quote.intro}
        </p>

        {/* Couple Cards Grid */}
        <div className="flex flex-col gap-10 sm:gap-12 items-center">
          
          {/* Mempelai Pria */}
          <div className="flex flex-col items-center w-full max-w-sm">
            {/* Photo frame */}
            <div className="relative mb-4 group">
              <div className="w-40 h-48 sm:w-44 sm:h-52 rounded-t-full rounded-b-2xl border-2 border-[#D4AF37] p-1.5 bg-[#FAF8F5] shadow-md transition-transform duration-500 group-hover:scale-102">
                <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-[#EAF0EB] relative">
                  <img
                    src={groom.photo}
                    alt={groom.fullName}
                    className="w-full h-full object-cover object-top filter contrast-95 brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43584B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#5C7C64] text-white p-1.5 rounded-full shadow-md border border-[#FAF8F5]">
                <LeafOrnament className="w-4 h-4" color="#FFFDF9" />
              </div>
            </div>

            <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#43584B]">
              {groom.fullName}
            </h3>
            <p className="text-xs text-[#7A9A80] mt-1 font-medium">
              {groom.title}
            </p>
            <p className="text-xs sm:text-sm text-[#55695D] mt-2 leading-relaxed px-4">
              {groom.orderInFamily}<br />
              <strong className="text-[#43584B]">{groom.father}</strong><br />
              &amp; <strong className="text-[#43584B]">{groom.mother}</strong>
            </p>
            <a
              href={groom.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#5C7C64] hover:text-[#D4AF37] transition-colors py-1 px-3 rounded-full bg-[#EAF0EB] border border-[#7A9A80]/20"
            >
              <Instagram className="w-3.5 h-3.5 text-[#5C7C64]" />
              <span>{groom.instagram}</span>
            </a>
          </div>

          {/* Romantic Ampersand separator */}
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#F5F0EB] flex items-center justify-center shadow-xs">
              <span className="font-script-wedding text-3xl text-[#5C7C64] leading-none pt-1">
                &amp;
              </span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
          </div>

          {/* Mempelai Wanita */}
          <div className="flex flex-col items-center w-full max-w-sm">
            {/* Photo frame */}
            <div className="relative mb-4 group">
              <div className="w-40 h-48 sm:w-44 sm:h-52 rounded-t-full rounded-b-2xl border-2 border-[#D4AF37] p-1.5 bg-[#FAF8F5] shadow-md transition-transform duration-500 group-hover:scale-102">
                <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-[#EAF0EB] relative">
                  <img
                    src={bride.photo}
                    alt={bride.fullName}
                    className="w-full h-full object-cover object-top filter contrast-95 brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43584B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-[#5C7C64] text-white p-1.5 rounded-full shadow-md border border-[#FAF8F5]">
                <LeafOrnament className="w-4 h-4" color="#FFFDF9" />
              </div>
            </div>

            <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#43584B]">
              {bride.fullName}
            </h3>
            <p className="text-xs text-[#7A9A80] mt-1 font-medium">
              {bride.title}
            </p>
            <p className="text-xs sm:text-sm text-[#55695D] mt-2 leading-relaxed px-4">
              {bride.orderInFamily}<br />
              <strong className="text-[#43584B]">{bride.father}</strong><br />
              &amp; <strong className="text-[#43584B]">{bride.mother}</strong>
            </p>
            <a
              href={bride.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#5C7C64] hover:text-[#D4AF37] transition-colors py-1 px-3 rounded-full bg-[#EAF0EB] border border-[#7A9A80]/20"
            >
              <Instagram className="w-3.5 h-3.5 text-[#5C7C64]" />
              <span>{bride.instagram}</span>
            </a>
          </div>

        </div>

        <GoldDivider className="mt-12" />
      </div>
    </section>
  );
};
