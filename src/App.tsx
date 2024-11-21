import React, { useState } from 'react';
import Questions from './components/Questions';
import Result from './components/Result';
import Welcome from './components/Welcome';

function App() {
  const [step, setStep] = useState<'welcome' | 'questions' | 'result'>('welcome');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStart = () => {
    setStep('questions');
  };

  const handleComplete = (results: Record<string, string>) => {
    setAnswers(results);
    setStep('result');
  };

  const handleRestart = () => {
    setAnswers({});
    setStep('welcome');
  };

  return (
    <main className="min-h-screen w-full relative">
      <div 
        className="fixed inset-0 bg-no-repeat bg-center pointer-events-none"
        style={{
          backgroundImage: 'url(https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM01ER0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7c049c39b536e42ac2b59b5cf6af694a232b84d0/%E9%AD%94%E6%B3%95%E9%99%A3.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: 0.8
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {step === 'welcome' && <Welcome onStart={handleStart} />}
        {step === 'questions' && <Questions onComplete={handleComplete} />}
        {step === 'result' && <Result answers={answers} onRestart={handleRestart} />}
      </div>
    </main>
  );
}

export default App;