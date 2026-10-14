import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, HeartHandshake, User, MessageSquareHeart, Clock } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';

interface Wish {
  id: string;
  name: string;
  status: 'hadir' | 'tidak' | 'ragu';
  message: string;
  time: string;
}

interface RsvpWishesSectionProps {
  initialGuestName?: string;
}

const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Budi Santoso & Keluarga',
    status: 'hadir',
    message: 'Barakallahu lakuma wa baraka alaikuma wa jama\'a bainakuma fii khair. Selamat menempuh hidup baru untuk Andi dan Siti! Semoga sakinah, mawaddah, warahmah.',
    time: '2 jam yang lalu',
  },
  {
    id: '2',
    name: 'Rina Kusuma',
    status: 'hadir',
    message: 'MasyaAllah Siti sayang, lancar-lancar sampai hari H yaa! Cantik banget undangannya. InsyaAllah aku hadir tepat waktu.',
    time: '5 jam yang lalu',
  },
  {
    id: '3',
    name: 'Dimas Anggara (Rekan Kantor Andi)',
    status: 'hadir',
    message: 'Selamat bro Andi! Akhirnya berlabuh ke pelaminan. Semoga dilancarkan semua persiapannya bro!',
    time: 'Kemarin',
  },
  {
    id: '4',
    name: 'Keluarga Besar Bpk. Handoko',
    status: 'ragu',
    message: 'Selamat berbahagia kepada kedua mempelai. Semoga menjadi keluarga yang senantiasa dirahmati Allah SWT.',
    time: 'Kemarin',
  },
];

export const RsvpWishesSection: React.FC<RsvpWishesSectionProps> = ({ initialGuestName = '' }) => {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [name, setName] = useState(initialGuestName);
  const [status, setStatus] = useState<'hadir' | 'tidak' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      message: message.trim(),
      time: 'Baru saja',
    };

    setWishes([newWish, ...wishes]);
    setIsSubmitted(true);
    setMessage('');

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#5C7C64', '#7A9A80']
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const getStatusBadge = (s: Wish['status']) => {
    switch (s) {
      case 'hadir':
        return <span className="inline-flex items-center text-[10px] font-semibold text-[#5C7C64] bg-[#EAF0EB] px-2 py-0.5 rounded-full">✓ Hadir</span>;
      case 'tidak':
        return <span className="inline-flex items-center text-[10px] font-semibold text-[#8B5A5A] bg-[#FCE8E8] px-2 py-0.5 rounded-full">✕ Berhalangan</span>;
      case 'ragu':
        return <span className="inline-flex items-center text-[10px] font-semibold text-[#967727] bg-[#FEF6E4] px-2 py-0.5 rounded-full">? Masih Ragu</span>;
    }
  };

  return (
    <section id="rsvp" className="py-16 px-6 sm:px-10 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] relative">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-2">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5C7C64] bg-[#EAF0EB] px-3.5 py-1 rounded-full border border-[#7A9A80]/30">
            Konfirmasi &amp; Doa
          </span>
        </div>
        <h2 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#43584B] mt-2">
          RSVP &amp; Doa Restu
        </h2>
        <p className="text-xs sm:text-sm text-[#7A9A80] max-w-sm mx-auto mt-2 font-medium">
          Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Mohon konfirmasi kehadiran Anda.
        </p>

        <GoldDivider className="my-4" />

        {/* RSVP Form */}
        <div className="rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/50 p-6 sm:p-7 shadow-md text-left mt-6">
          {isSubmitted && (
            <div className="mb-4 p-3 rounded-xl bg-[#EAF0EB] border border-[#7A9A80] text-[#43584B] text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#5C7C64] shrink-0" />
              <span>Terima kasih! Konfirmasi kehadiran dan ucapan Anda telah berhasil dikirimkan.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#43584B] mb-1">
                Nama Lengkap / Keluarga
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Pratama & Keluarga"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#5C7C64] text-[#43584B]"
                />
                <User className="w-4 h-4 text-[#7A9A80] absolute left-3 top-3" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#43584B] mb-1">
                  Konfirmasi Kehadiran
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'hadir' | 'tidak' | 'ragu')}
                  className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#5C7C64] text-[#43584B]"
                >
                  <option value="hadir">Ya, Saya Akan Hadir</option>
                  <option value="tidak">Maaf, Tidak Bisa Hadir</option>
                  <option value="ragu">Masih Ragu / Belum Pasti</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#43584B] mb-1">
                  Jumlah Tamu
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#5C7C64] text-[#43584B]"
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#43584B] mb-1">
                Ucapan Doa &amp; Harapan
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tuliskan ucapan dan doa tulus untuk Andi & Siti..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D4AF37]/40 bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#5C7C64] text-[#43584B] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#5C7C64] hover:bg-[#4a6350] text-[#FFFDF9] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#D4AF37]/50"
            >
              <Send className="w-4 h-4 text-[#E6CA65]" />
              <span>Kirim Konfirmasi &amp; Doa</span>
            </button>
          </form>
        </div>

        {/* Wishes List Feed */}
        <div className="mt-8 text-left">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-serif-wedding text-lg font-bold text-[#43584B] flex items-center gap-2">
              <MessageSquareHeart className="w-4 h-4 text-[#5C7C64]" />
              <span>Doa &amp; Ucapan ({wishes.length})</span>
            </h3>
            <span className="text-[11px] text-[#7A9A80]">
              Terbaru ditampilkan di atas
            </span>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-3.5 sm:p-4 rounded-xl bg-[#FFFDF9] border border-[#D4AF37]/30 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs sm:text-sm font-bold text-[#43584B]">
                    {w.name}
                  </span>
                  {getStatusBadge(w.status)}
                </div>
                <p className="text-xs text-[#55695D] leading-relaxed">
                  {w.message}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#94AFA0] mt-2">
                  <Clock className="w-3 h-3" />
                  <span>{w.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
