
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ChevronRight, Camera } from 'lucide-react';
import { generateRomanticMessage, generateReasonsILoveYou } from '../services/geminiService';

interface MainStageProps {
  onYes: () => void;
}

const MainStage: React.FC<MainStageProps> = ({ onYes }) => {
  const [step, setStep] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [romanticMessage, setRomanticMessage] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const msg = await generateRomanticMessage("beutiful ");
      const res = await generateReasonsILoveYou();
      setRomanticMessage(msg);
      setReasons(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPos({ x, y });
    setNoCount(prev => prev + 1);
  };

  const getNoText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", 
      "Surely not?", "You might regret this!", "Give it another thought!", 
      "Are you absolutely certain?", "This could be a mistake!", "Have a heart!", 
      "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?", 
      "Is that your final answer?", "You're breaking my heart ;("
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Heart className="text-rose-500 animate-pulse" size={64} />
        <p className="mt-4 text-rose-600 font-romantic text-2xl">Crafting a little magic...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 relative">
      {step === 0 && (
        <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-rose-50 text-center animate-in fade-in zoom-in duration-700">
          <Sparkles className="mx-auto text-amber-400 mb-6" size={40} />
          <h2 className="text-3xl font-elegant text-rose-800 mb-6">A Message From My Heart</h2>
          <p className="text-lg text-rose-700 font-serif italic mb-8 leading-relaxed">
            "{romanticMessage}"
          </p>
          <button 
            onClick={() => setStep(1)}
            className="flex items-center justify-center gap-2 mx-auto bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg font-semibold"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="max-w-2xl w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-elegant text-rose-900 mb-12">5 Reasons Why You're Amazing</h2>
          <div className="grid gap-6">
            {reasons.map((reason, i) => (
              <div 
                key={i} 
                className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border-l-4 border-rose-400 shadow-sm text-left animate-in fade-in slide-in-from-left duration-500"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <p className="text-rose-800 font-medium text-lg italic">"{reason}"</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setStep(2)}
            className="mt-12 bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full transition-all hover:scale-110 shadow-xl font-bold text-xl"
          >
            A special memory...
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md w-full animate-in fade-in zoom-in duration-700 text-center">
          <div className="bg-white p-4 pb-12 shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white inline-block">
            <div className="relative group overflow-hidden bg-rose-50">
              <img 
                src="https://i.pinimg.com/736x/44/a4/97/44a497091361d29a0ce7b42677dced19.jpg" 
                alt="Us" 
                className="w-full h-80 object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6">
              <p className="font-romantic text-3xl text-rose-800">Together is my favorite place to be.</p>
              <p className="text-rose-400 text-sm mt-2 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                <Camera size={14} /> Our Favorite Moment
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-rose-700 font-elegant italic mb-8 max-w-xs mx-auto">
              "Looking at this reminds me that every adventure with you is a gift I'll cherish forever."
            </p>
            <button 
              onClick={() => setStep(3)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-3 rounded-full transition-all hover:scale-110 shadow-xl font-bold"
            >
              Continue to the Big Question
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center relative max-w-lg">
          <img 
            src="https://i.pinimg.com/736x/62/f1/97/62f197332af4a5b3dea6121ba0c6aa56.jpg?auto=format&fit=crop&q=80&w=400" 
            alt="Love" 
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-2xl animate-bounce"
            style={{ animationDuration: '3s' }}
          />
          <h2 className="text-5xl md:text-6xl font-romantic text-rose-600 mb-12">Will you be my Valentine?</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 min-h-[100px]">
            <button
              onClick={onYes}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl transition-all transform hover:scale-125 z-10"
              style={{ fontSize: `${1.5 + noCount * 0.1}rem` }}
            >
              YES! ❤️
            </button>
            
            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className={`bg-rose-100 text-rose-400 px-6 py-2 rounded-full text-lg transition-all ${noCount > 0 ? 'fixed' : ''} z-20 whitespace-nowrap`}
              style={noCount > 0 ? { left: noButtonPos.x, top: noButtonPos.y } : {}}
            >
              {getNoText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainStage;
