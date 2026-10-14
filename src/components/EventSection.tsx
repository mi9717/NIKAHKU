import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Sparkles } from 'lucide-react';
import { Countdown } from './Countdown';
import { GoldDivider } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface EventSectionProps {
  config?: WeddingConfig;
}

export const EventSection: React.FC<EventSectionProps> = ({ config = weddingConfig }) => {
  const { countdownTargetISO, akad, resepsi, dressCode, calendar } = config.events;

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(calendar.eventTitle);
    const details = encodeURIComponent(calendar.eventDescription);
    const location = encodeURIComponent(calendar.eventLocation);
    const dates = calendar.calendarDates;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section id="acara" className="py-16 px-6 sm:px-10 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] relative">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Section Title */}
        <div className="mb-2">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5C7C64] bg-[#EAF0EB] px-3.5 py-1 rounded-full border border-[#7A9A80]/30">
            Save The Date
          </span>
        </div>
        <h2 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#43584B] mt-2">
          Rangkaian Acara
        </h2>
        <p className="text-xs sm:text-sm text-[#7A9A80] max-w-sm mx-auto mt-2 font-medium">
          Merupakan suatu kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara/i untuk menyaksikan ikrar suci kami.
        </p>

        <GoldDivider className="my-4" />

        {/* Live Countdown */}
        <div className="my-6">
          <p className="text-xs text-[#5C7C64] font-medium tracking-wide uppercase">
            Menghitung Hari Menuju Hari Bahagia:
          </p>
          <Countdown targetDate={countdownTargetISO} />
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 mt-8">
          
          {/* Card 1: Akad Nikah */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-md relative overflow-hidden text-left hover:border-[#D4AF37] transition-colors">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5C7C64] via-[#D4AF37] to-[#5C7C64]" />
            
            <div className="flex items-center justify-between border-b border-[#EAF0EB] pb-3 mb-4">
              <div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D4AF37] block">
                  {akad.badge}
                </span>
                <h3 className="font-serif-wedding text-2xl font-bold text-[#43584B]">
                  {akad.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EAF0EB] flex items-center justify-center text-[#5C7C64]">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#55695D]">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{akad.dateFormatted}</p>
                  <p className="text-xs text-[#7A9A80]">{akad.hijriDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{akad.time}</p>
                  <p className="text-xs text-[#7A9A80]">{akad.note}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{akad.locationName}</p>
                  <p className="text-xs text-[#7A9A80] leading-relaxed">
                    {akad.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAF0EB] flex flex-wrap gap-3">
              <a
                href={akad.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5C7C64] hover:bg-[#4a6350] text-[#FFFDF9] text-xs font-semibold shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E6CA65]" />
                <span>Petunjuk Lokasi (Maps)</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Card 2: Resepsi Pernikahan */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-md relative overflow-hidden text-left hover:border-[#D4AF37] transition-colors">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#5C7C64] to-[#D4AF37]" />
            
            <div className="flex items-center justify-between border-b border-[#EAF0EB] pb-3 mb-4">
              <div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#5C7C64] block">
                  {resepsi.badge}
                </span>
                <h3 className="font-serif-wedding text-2xl font-bold text-[#43584B]">
                  {resepsi.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EAF0EB] flex items-center justify-center text-[#5C7C64]">
                <Calendar className="w-5 h-5 text-[#5C7C64]" />
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#55695D]">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{resepsi.dateFormatted}</p>
                  <p className="text-xs text-[#7A9A80]">{resepsi.sessions}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{resepsi.time}</p>
                  <p className="text-xs text-[#7A9A80]">{resepsi.note}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#43584B]">{resepsi.locationName}</p>
                  <p className="text-xs text-[#7A9A80] leading-relaxed">
                    {resepsi.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAF0EB] flex flex-wrap gap-3">
              <a
                href={resepsi.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5C7C64] hover:bg-[#4a6350] text-[#FFFDF9] text-xs font-semibold shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E6CA65]" />
                <span>Petunjuk Lokasi (Maps)</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5F0EB] hover:bg-[#eae3dc] text-[#43584B] border border-[#D4AF37]/50 text-xs font-semibold transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Simpan ke Google Kalender</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dresscode info */}
        <div className="mt-8 p-4 rounded-xl bg-[#EAF0EB]/80 border border-[#7A9A80]/30 text-center">
          <p className="text-xs font-semibold text-[#43584B] tracking-wide uppercase">
            {dressCode.title}
          </p>
          <p className="text-xs text-[#55695D] mt-1">
            {dressCode.description}
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {dressCode.colors.map((color, idx) => (
              <span 
                key={idx}
                className="w-5 h-5 rounded-full shadow-xs" 
                style={{ 
                  backgroundColor: color.hex, 
                  border: color.border ? `1px solid ${color.border}` : '1px solid white' 
                }} 
                title={color.name} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
