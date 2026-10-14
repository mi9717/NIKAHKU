import React from 'react';
import { Home, Users, Calendar, Image, MessageSquareHeart, Gift } from 'lucide-react';

interface NavbarBottomProps {
  activeSection: string;
}

export const NavbarBottom: React.FC<NavbarBottomProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'sampul', label: 'Sampul', icon: Home },
    { id: 'mempelai', label: 'Mempelai', icon: Users },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'galeri', label: 'Galeri', icon: Image },
    { id: 'rsvp', label: 'RSVP', icon: MessageSquareHeart },
    { id: 'kado', label: 'Kado', icon: Gift },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm bg-[#FAF8F5]/95 backdrop-blur-md rounded-full border border-[#D4AF37]/50 shadow-xl px-2 py-1.5 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all cursor-pointer ${
              isActive
                ? 'text-[#5C7C64] scale-105'
                : 'text-[#7A9A80] hover:text-[#5C7C64]'
            }`}
            title={item.label}
          >
            <div
              className={`p-1 rounded-full ${
                isActive ? 'bg-[#5C7C64] text-white' : 'bg-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-medium leading-none mt-0.5 ${
                isActive ? 'text-[#5C7C64] font-bold' : 'text-[#7A9A80]'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
