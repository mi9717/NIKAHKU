import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface AudioPlayerButtonProps {
  onToggleMusic?: (playing: boolean) => void;
  isPlayingProp?: boolean;
}

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const nextState = romanticAudio.toggle();
    setIsPlaying(nextState);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        className={`group relative flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 border border-[#D4AF37] cursor-pointer ${
          isPlaying
            ? 'bg-[#5C7C64] text-white hover:bg-[#4a6350]'
            : 'bg-[#FAF8F5]/90 text-[#43584B] hover:bg-white backdrop-blur-md'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#E6CA65] animate-pulse" />
            <div className="hidden sm:flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-full bg-[#E6CA65] rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-0.5 h-3/4 bg-[#E6CA65] rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-0.5 h-full bg-[#E6CA65] rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
            <span className="hidden sm:inline text-xs font-medium">
              Musik Romantis
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#7A9A80]" />
            <span className="hidden sm:inline text-xs font-medium text-[#55695D]">
              Putar Musik
            </span>
          </>
        )}
      </button>
    </div>
  );
};
