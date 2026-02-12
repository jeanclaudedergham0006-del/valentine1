
import React from 'react';
import { Heart, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  // Mapping the 8 uploaded images with romantic captions
  const galleryImages = [
    { id: 1, url: './image/WhatsApp Image 2026-02-01 at 4.08.00 PM.jpeg', caption: 'Sweet Devotion', arabic: 'عشق وحنين' },
    { id: 2, url: './image/WhatsApp Image 2026-02-01 at 4.08.00 PM (1).jpeg', caption: 'Our Reflection', arabic: 'جمال روحنا' },
    { id: 3, url: './image/WhatsApp Image 2026-02-01 at 4.08.00 PM (2).jpeg', caption: 'Deep Connection', arabic: 'مودة ورحمة' },
    { id: 4, url: './image/WhatsApp Image 2026-02-01 at 6.48.53 PM.jpeg', caption: 'Peaceful Moments', arabic: 'لحظات هادئة' },
    { id: 5, url: './image/WhatsApp Image 2026-02-01 at 6.48.53 PM (1).jpeg', caption: 'Tender Love', arabic: 'حنان دافئ' },
    { id: 6, url: './image/WhatsApp Image 2026-02-01 at 6.48.53 PM (2).jpeg', caption: 'Always Close', arabic: 'دائماً بالقرب' },
    { id: 7, url: './image/WhatsApp Image 2026-02-01 at 6.48.53 PM (3).jpeg', caption: 'Style & Grace', arabic: 'تألق وأناقة' },
    { id: 8, url: './image/WhatsApp Image 2026-02-01 at 6.48.53 PM.jpeg', caption: 'Our Grand Story', arabic: 'حكايتنا الكبيرة' },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-3 text-rose-400 mb-4">
          <div className="h-px w-12 bg-rose-200"></div>
          <Camera className="w-6 h-6" />
          <div className="h-px w-12 bg-rose-200"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-rose-900 mb-2">Our Love Gallery</h2>
        <p className="font-arabic-romantic text-4xl text-rose-500">معرض حبنا</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {galleryImages.map((photo, index) => (
          <div 
            key={photo.id}
            className="group relative bg-white p-4 pb-12 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-rose-50 mb-6">
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image doesn't load
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x600/fff1f2/e11d48?text=Love+${photo.id}`;
                }}
              />
              <div className="absolute inset-0 bg-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="text-center space-y-2">
              <p className="font-arabic-romantic text-2xl text-rose-600" dir="rtl">{photo.arabic}</p>
              <p className="font-romantic text-xl text-rose-400 italic">{photo.caption}</p>
            </div>
            
            <div className="absolute -top-3 -right-3 bg-rose-500 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block p-8 glass rounded-full animate-float">
          <p className="font-romantic text-4xl text-rose-400 italic mb-2">"To the world you are one person, but to me you are the world."</p>
          <p className="font-arabic-romantic text-4xl text-rose-500">"أنت للعالم مجرد شخص، لكنك بالنسبة لي العالم كله."</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
