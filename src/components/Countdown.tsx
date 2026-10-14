import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // ISO date string
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3 my-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-[#F5F0EB]/90 backdrop-blur-xs border border-[#D4AF37]/40 shadow-xs"
        >
          <span className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#5C7C64] leading-none">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7A9A80] font-medium mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
