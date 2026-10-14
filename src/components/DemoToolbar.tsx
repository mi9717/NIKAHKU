import React, { useState } from 'react';
import { Smartphone, Monitor, Share2, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

interface DemoToolbarProps {
  guestName: string;
  onGuestNameChange: (name: string) => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({
  guestName,
  onGuestNameChange,
  isMobileFrame,
  onToggleFrame,
}) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('to', guestName);
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-3 text-xs">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#5C7C64] flex items-center justify-center text-[#FFFDF9] font-bold font-serif-wedding text-sm shadow-xs">
            N
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-[#43584B]">
              <span>NikahKu</span>
              <span className="text-[10px] font-normal px-1.5 py-0.2 rounded bg-[#EAF0EB] text-[#5C7C64] border border-[#7A9A80]/20">
                Demo
              </span>
            </div>
            <p className="text-[10px] text-[#7A9A80] hidden sm:block">
              Undangan {weddingConfig.couple.displayNames}
            </p>
          </div>
        </div>

        {/* Guest Name & Frame Controls */}
        <div className="flex items-center gap-2">
          
          {/* Guest input on desktop */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
            <span className="text-[11px] text-[#7A9A80]">Nama Tamu:</span>
            <input
              type="text"
              value={guestName}
              onChange={(e) => onGuestNameChange(e.target.value)}
              placeholder="Ganti nama tamu..."
              className="text-xs text-[#43584B] font-medium bg-transparent focus:outline-none w-32"
            />
          </div>

          {/* Desktop Frame Toggle */}
          <button
            onClick={onToggleFrame}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EB] hover:bg-[#dce6dd] text-[#43584B] border border-[#7A9A80]/30 transition-colors cursor-pointer"
            title="Ubah Mode Tampilan"
          >
            {isMobileFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-[#5C7C64]" />
                <span>Mode Penuh</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#5C7C64]" />
                <span>Frame Smartphone</span>
              </>
            )}
          </button>

          {/* Share Custom Link */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C7C64] hover:bg-[#4a6350] text-white font-medium shadow-xs transition-colors cursor-pointer"
            title="Salin tautan dengan nama tamu"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#E6CA65]" />
                <span>Link Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#E6CA65]" />
                <span>Bagikan</span>
              </>
            )}
          </button>

          {/* Mobile settings trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-lg bg-[#EAF0EB] text-[#43584B] border border-[#7A9A80]/30"
            title="Pengaturan Tamu"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Settings */}
      {isOpen && (
        <div className="md:hidden px-4 py-2.5 bg-[#FAF8F5] border-t border-[#D4AF37]/20 flex flex-col gap-2 animate-in slide-in-from-top">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-[#7A9A80] font-medium">Ubah Nama Tamu:</span>
            <input
              type="text"
              value={guestName}
              onChange={(e) => onGuestNameChange(e.target.value)}
              placeholder="Contoh: Andi Pratama"
              className="text-xs text-[#43584B] font-medium bg-white px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 w-44"
            />
          </div>
        </div>
      )}
    </header>
  );
};
