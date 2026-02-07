
import React, { useEffect } from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { Heart, Stars } from 'lucide-react';

const SuccessView: React.FC = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 animate-in fade-in duration-1000">
      <div className="relative mb-12">
        <Heart className="text-rose-500 scale-150 animate-bounce" size={120} fill="#f43f5e" />
        <Stars className="absolute -top-4 -right-4 text-amber-400 animate-pulse" size={48} />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-romantic text-rose-600 mb-6 drop-shadow-sm">Yay! I'm so happy!</h1>
      <p className="text-2xl md:text-3xl font-elegant text-rose-800 mb-12">I love you more than words can say.</p>
      
      <div className="max-w-md bg-white/90 p-8 rounded-3xl shadow-2xl border-4 border-rose-200">
        <h3 className="text-xl font-bold text-rose-500 mb-4 uppercase tracking-widest">Our Next Date</h3>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-700 italic text-lg">Thinking of somewhere special...</p>
          <div className="h-1 w-24 bg-rose-200 rounded-full my-2"></div>
          <p className="text-rose-600 font-romantic text-3xl">February 14th(virtual date?)</p>
        </div>
      </div>

      <p className="mt-16 text-rose-400 italic">Save the date, beautiful! ❤️</p>
    </div>
  );
};

export default SuccessView;
