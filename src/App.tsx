import React, { useState, useEffect } from 'react';
import { CoverHero } from './components/CoverHero';
import { CoupleSection } from './components/CoupleSection';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { RsvpWishesSection } from './components/RsvpWishesSection';
import { GiftSection } from './components/GiftSection';
import { ClosingSection } from './components/ClosingSection';
import { NavbarBottom } from './components/NavbarBottom';
import { AudioPlayerButton } from './components/AudioPlayerButton';
import { DemoToolbar } from './components/DemoToolbar';
import { romanticAudio } from './utils/audio';
import { weddingConfig } from './data/weddingConfig';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const [activeSection, setActiveSection] = useState('sampul');

  // Parse guest name from URL ?to=... if present
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to') || params.get('nama') || params.get('guest');
      if (to && to.trim()) {
        setGuestName(to.trim());
      }
    } catch {
      // safe fallback
    }
  }, []);

  // Set up intersection observer to highlight current section in bottom nav
  useEffect(() => {
    const sections = ['sampul', 'mempelai', 'acara', 'galeri', 'rsvp', 'kado', 'penutup'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Start soft romantic music
    romanticAudio.start();

    // Smooth scroll to the Couple Section
    setTimeout(() => {
      const coupleEl = document.getElementById('mempelai');
      if (coupleEl) {
        coupleEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#43584B] flex flex-col selection:bg-[#7A9A80]/30 selection:text-[#43584B]">
      {/* Top Demo & Branding Header */}
      <DemoToolbar
        guestName={guestName}
        onGuestNameChange={setGuestName}
        isMobileFrame={isMobileFrame}
        onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
      />

      {/* Main Container */}
      <main className="flex-1 flex justify-center items-start py-0 md:py-6">
        <div
          className={`w-full bg-[#FAF8F5] transition-all duration-300 relative ${
            isMobileFrame
              ? 'md:max-w-md md:rounded-[40px] md:shadow-2xl md:border-[10px] md:border-[#38443b] md:overflow-hidden'
              : 'max-w-2xl shadow-xl'
          }`}
        >
          {/* Smartphone Speaker notch for mobile preview on desktop */}
          {isMobileFrame && (
            <div className="hidden md:flex justify-center pt-3 pb-1 bg-[#38443b]">
              <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#222]" />
                <span className="w-8 h-1 rounded-full bg-[#333]" />
              </div>
            </div>
          )}

          {/* 1. Sampul Undangan & Tombol Buka Undangan */}
          <CoverHero
            guestName={guestName}
            onOpen={handleOpenInvitation}
            isOpen={isOpen}
            config={weddingConfig}
          />

          {/* Invitation Content */}
          <div className="relative">
            {/* 3. Bagian Foto Pasangan & Profil */}
            <CoupleSection config={weddingConfig} />

            {/* 4. Informasi Tanggal dan Lokasi Acara */}
            <EventSection config={weddingConfig} />

            {/* Galeri Momen Bahagia & Kisah Cinta */}
            <GallerySection config={weddingConfig} />

            {/* RSVP & Ucapan Doa Tamu */}
            <RsvpWishesSection initialGuestName={guestName} />

            {/* Amplop Digital & Kirim Kado */}
            <GiftSection config={weddingConfig} />

            {/* 5. Bagian Penutup Undangan */}
            <ClosingSection config={weddingConfig} />
          </div>

          {/* Floating Audio Toggle */}
          <AudioPlayerButton />

          {/* Floating Mobile Bottom Navigation */}
          {isOpen && <NavbarBottom activeSection={activeSection} />}
        </div>
      </main>
    </div>
  );
}
