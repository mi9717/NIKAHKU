import React, { useState } from 'react';
import { Gift, Copy, Check, CreditCard, MapPin, QrCode } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface GiftSectionProps {
  config?: WeddingConfig;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ config = weddingConfig }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'bank' | 'alamat'>('bank');

  const { banks, qris, physicalGift } = config.gifts;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section id="kado" className="py-16 px-6 sm:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <div className="mb-2">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5C7C64] bg-[#EAF0EB] px-3.5 py-1 rounded-full border border-[#7A9A80]/30">
            Tanda Kasih
          </span>
        </div>
        <h2 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#43584B] mt-2">
          Amplop Digital &amp; Kado
        </h2>
        <p className="text-xs sm:text-sm text-[#7A9A80] max-w-sm mx-auto mt-2 font-medium">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih lainnya, dapat melalui:
        </p>

        <GoldDivider className="my-4" />

        {/* Tab Selector */}
        <div className="inline-flex rounded-xl bg-[#EAF0EB] p-1 border border-[#7A9A80]/20 my-4">
          <button
            onClick={() => setActiveTab('bank')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'bank'
                ? 'bg-[#5C7C64] text-white shadow-xs'
                : 'text-[#43584B] hover:text-[#5C7C64]'
            }`}
          >
            Transfer Bank / QRIS
          </button>
          <button
            onClick={() => setActiveTab('alamat')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'alamat'
                ? 'bg-[#5C7C64] text-white shadow-xs'
                : 'text-[#43584B] hover:text-[#5C7C64]'
            }`}
          >
            Kirim Kado Fisik
          </button>
        </div>

        {/* Content Tab 1: Bank & QRIS */}
        {activeTab === 'bank' && (
          <div className="space-y-4 mt-4 animate-in fade-in">
            {/* Dynamic Bank Cards */}
            {banks.map((bank) => (
              <div 
                key={bank.id}
                className="rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/50 p-5 shadow-xs text-left relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{ backgroundColor: bank.badgeBg, color: bank.badgeText }}
                    >
                      {bank.codeBadge}
                    </div>
                    <span className="font-semibold text-xs text-[#43584B]">
                      {bank.bankName}
                    </span>
                  </div>
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <p className="text-xs text-[#7A9A80]">Nomor Rekening:</p>
                <p className="font-mono text-base sm:text-lg font-bold text-[#43584B] my-1 tracking-wider">
                  {bank.accountNumber}
                </p>
                <p className="text-xs text-[#55695D]">
                  a.n. <strong className="text-[#43584B]">{bank.accountHolder}</strong>
                </p>

                <button
                  onClick={() => handleCopy(bank.accountNumber, bank.id)}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-[#EAF0EB] hover:bg-[#dbe4dd] text-[#43584B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#7A9A80]/30"
                >
                  {copiedKey === bank.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#5C7C64]" />
                      <span className="text-[#5C7C64]">Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7A9A80]" />
                      <span>Salin No. Rekening {bank.codeBadge}</span>
                    </>
                  )}
                </button>
              </div>
            ))}

            {/* QRIS Accordion / Preview */}
            <div className="p-4 rounded-xl bg-[#F5F0EB]/90 border border-[#D4AF37]/30 flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#43584B] mb-2">
                <QrCode className="w-4 h-4 text-[#D4AF37]" />
                <span>{qris.title}</span>
              </div>
              <div className="w-36 h-36 bg-white p-2 rounded-xl border border-gray-200 shadow-xs flex items-center justify-center">
                <img
                  src={qris.qrImageUrl}
                  alt={`QRIS Angpao ${config.couple.displayNames}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[10px] text-[#7A9A80] mt-2">
                NMID: {qris.nmid} &bull; {qris.merchantName}
              </p>
            </div>
          </div>
        )}

        {/* Content Tab 2: Alamat Kirim Kado */}
        {activeTab === 'alamat' && (
          <div className="mt-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/50 p-5 shadow-xs text-left animate-in fade-in">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#5C7C64]/10 flex items-center justify-center text-[#5C7C64]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-xs text-[#43584B] block">
                  {physicalGift.title}
                </span>
                <span className="text-[10px] text-[#7A9A80]">
                  Penerima: {physicalGift.recipient}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAF0EB] text-xs text-[#43584B] leading-relaxed">
              <p className="font-semibold">Kediaman Mempelai:</p>
              <p className="text-[#55695D] mt-0.5">
                {physicalGift.address}
              </p>
              <p className="text-[11px] text-[#7A9A80] mt-1">
                No. HP: {physicalGift.phone}
              </p>
            </div>

            <button
              onClick={() => handleCopy(`${physicalGift.address} (Penerima: ${physicalGift.recipient} - ${physicalGift.phone})`, "alamat")}
              className="mt-3 w-full py-2 px-3 rounded-xl bg-[#5C7C64] hover:bg-[#4a6350] text-[#FFFDF9] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedKey === 'alamat' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#E6CA65]" />
                  <span>Alamat Berhasil Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/80" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
