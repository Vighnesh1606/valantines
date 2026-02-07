
import React from 'react';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-elegant text-rose-800 mb-2">I have a secret...</h1>
        <p className="text-rose-600 font-light">Click to open your surprise</p>
      </div>
      
      <button 
        onClick={onOpen}
        className="group relative transition-transform hover:scale-105 active:scale-95 duration-300"
      >
        <div className="bg-white p-8 rounded-2xl shadow-2xl border-4 border-rose-100 flex items-center justify-center">
          <Mail size={80} className="text-rose-400 group-hover:text-rose-500 transition-colors" />
          <div className="absolute -top-2 -right-2 bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center animate-bounce">
            1
          </div>
        </div>
      </button>
      
      <div className="mt-12 text-rose-300 italic font-romantic text-2xl">
        Made with love, just for you.
      </div>
    </div>
  );
};

export default Envelope;
