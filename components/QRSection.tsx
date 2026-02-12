
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Gift, ExternalLink, Info, Heart, Edit3 } from 'lucide-react';

const QRSection: React.FC = () => {
  const [giftLink, setGiftLink] = useState('https://miladbraysicarservice.noviq.cloud');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-rose-900 mb-4">The Special Surprise</h2>
        <p className="text-rose-700">Scan this QR code to reveal the mystery gift I've picked for us.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center">
          <div className="relative p-8 bg-white rounded-3xl animate-glow shimmer-container border-4 border-rose-50 group hover:scale-105 transition-transform duration-500">
            <div className="absolute -top-6 -left-6 bg-rose-500 text-white p-3 rounded-2xl shadow-lg animate-float z-20">
              <Gift className="w-6 h-6" />
            </div>
            
            <div className="relative z-10">
              <QRCodeSVG 
                value={giftLink} 
                size={240}
                level="H"
                includeMargin={true}
                imageSettings={{
                  src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }}
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 relative z-10">
              <span className="text-rose-400 text-xs font-bold tracking-widest uppercase">Secret Reveal</span>
              <div className="w-1 h-1 rounded-full bg-rose-300"></div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
             <button 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors text-sm font-medium"
            >
              <Edit3 className="w-4 h-4" />
              {isEditing ? "Done Editing" : "Change Link"}
            </button>
            <a 
              href={giftLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Test Link
            </a>
          </div>
        </div>

        <div className="space-y-8">
          {isEditing ? (
            <div className="p-6 glass rounded-2xl border-2 border-dashed border-rose-200 animate-pulse">
              <label className="block text-sm font-bold text-rose-800 mb-2">Insert Your Gift Link</label>
              <input 
                type="url"
                value={giftLink}
                onChange={(e) => setGiftLink(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-rose-100 outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="https://..."
              />
              <p className="mt-2 text-xs text-rose-400 italic">This link will be encoded into the QR code above.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-rose-900">How it works</h3>
                <p className="text-rose-700 leading-relaxed font-light">
                  I've chosen a gift that signifies our journey together. Scan this code with your phone camera 
                  to reveal where we're going or what we're doing next.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Step icon={<Info className="w-4 h-4" />} text="Open your phone camera" />
                <Step icon={<Heart className="w-4 h-4" />} text="Point it at the QR code" />
                <Step icon={<ExternalLink className="w-4 h-4" />} text="Click the link to reveal the gift" />
              </div>
            </>
          )}

          <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100">
            <p className="text-rose-900 text-sm font-medium">
              "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-rose-700">
    <div className="bg-rose-100 p-2 rounded-lg text-rose-500">
      {icon}
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default QRSection;
