
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MessageGenerator from './components/MessageGenerator';
import QRSection from './components/QRSection';
import HeartBackground from './components/HeartBackground';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import LoveQuotes from './components/LoveQuotes';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'message' | 'gift'>('home');

  return (
    <div className="min-h-screen relative text-rose-900 selection:bg-rose-200">
      <HeartBackground />
      
      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {activeTab === 'home' && (
            <>
              <Hero onStart={() => setActiveTab('message')} />
              <LoveQuotes />
              <Gallery />
            </>
          )}
          {activeTab === 'message' && <MessageGenerator />}
          {activeTab === 'gift' && <QRSection />}
        </main>

        <Footer />
      </div>

      {/* Floating Action Button for Celebration */}
      <button 
        onClick={() => {
          import('canvas-confetti').then((confetti) => {
            confetti.default({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#fb7185', '#e11d48', '#ffffff']
            });
          });
        }}
        className="fixed bottom-8 right-8 bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group z-50"
        title="Sprinkle Love"
      >
        <Heart className="w-6 h-6 group-hover:fill-current" />
      </button>
    </div>
  );
};

export default App;
