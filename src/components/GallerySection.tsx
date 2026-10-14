import React, { useState } from 'react';
import { Camera, X, Heart } from 'lucide-react';
import { GoldDivider } from './FloralDecorations';
import { weddingConfig, WeddingConfig } from '../data/weddingConfig';

interface GallerySectionProps {
  config?: WeddingConfig;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config = weddingConfig }) => {
  type PhotoItem = WeddingConfig['gallery'][0];
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const { gallery, loveStory } = config;

  return (
    <section id="galeri" className="py-16 px-6 sm:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <div className="mb-2">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#5C7C64] bg-[#EAF0EB] px-3.5 py-1 rounded-full border border-[#7A9A80]/30">
            Kisah Kami
          </span>
        </div>
        <h2 className="font-serif-wedding text-3xl sm:text-4xl font-bold text-[#43584B] mt-2">
          Galeri Momen Bahagia
        </h2>
        <p className="text-xs sm:text-sm text-[#7A9A80] max-w-sm mx-auto mt-2 font-medium">
          Potret kenangan manis perjalanan cinta kami dari awal bertemu hingga menuju jenjang pernikahan.
        </p>

        <GoldDivider className="my-4" />

        {/* Romantic Timeline (Love Story) */}
        <div className="my-8 text-left border-l-2 border-[#D4AF37]/50 ml-4 pl-5 space-y-6">
          {loveStory.map((milestone, index) => (
            <div key={milestone.id || index} className="relative">
              <div 
                className={`absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${
                  index % 2 === 0 ? 'bg-[#5C7C64]' : 'bg-[#D4AF37]'
                }`} 
              />
              <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                {milestone.date}
              </span>
              <h4 className="font-serif-wedding text-base font-bold text-[#43584B]">
                {milestone.title}
              </h4>
              <p className="text-xs text-[#55695D] mt-0.5 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-[#D4AF37]/30 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#43584B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-left">
                <span className="text-[10px] text-[#E6CA65] uppercase tracking-wider font-semibold">
                  {photo.category}
                </span>
                <p className="text-white text-xs font-serif-wedding line-clamp-1">
                  {photo.caption}
                </p>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-lg w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-4 bg-[#FAF8F5] text-center border-t border-[#D4AF37]/30">
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#5C7C64] font-medium mb-1">
                  <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span>{selectedPhoto.category}</span>
                </div>
                <h4 className="font-serif-wedding text-lg font-bold text-[#43584B]">
                  {selectedPhoto.caption}
                </h4>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
