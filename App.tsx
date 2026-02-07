
import React, { useState } from 'react';
import { AppStage } from './types';
import Envelope from './components/Envelope';
import MainStage from './components/MainStage';
import SuccessView from './components/SuccessView';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.ENVELOPE);

  const handleOpen = () => setStage(AppStage.STORY);
  const handleYes = () => setStage(AppStage.SUCCESS);

  return (
    <div className="relative min-h-screen bg-rose-50 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      
      <main className="relative z-10">
        {stage === AppStage.ENVELOPE && (
          <div className="animate-in fade-in duration-1000">
            <Envelope onOpen={handleOpen} />
          </div>
        )}

        {(stage === AppStage.STORY || stage === AppStage.QUESTION) && (
          <MainStage onYes={handleYes} />
        )}

        {stage === AppStage.SUCCESS && (
          <SuccessView />
        )}
      </main>

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <div className="absolute top-4 left-4 border-t-4 border-l-4 border-rose-500 w-12 h-12 rounded-tl-xl"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <div className="absolute bottom-4 right-4 border-b-4 border-r-4 border-rose-500 w-12 h-12 rounded-br-xl"></div>
      </div>
    </div>
  );
};

export default App;
