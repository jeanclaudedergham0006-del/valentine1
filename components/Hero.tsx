
import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center py-12 md:py-20">
      <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-8 animate-bounce shadow-sm">
        <Heart className="w-4 h-4 fill-current" />
        <span className="font-arabic-romantic text-lg px-2">إلى توأم روحي</span>
        <span>To My Dearest Soulmate</span>
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="relative mb-12 group">
        <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
          <img 
            src="/image/WhatsApp Image 2026-02-01 at 6.48.53 PM.jpeg" 
            alt="The Happy Couple" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl -rotate-6 hidden md:block border border-rose-50">
           <p className="font-romantic text-2xl text-rose-500">Together Forever</p>
           <p className="font-arabic-romantic text-xl text-rose-400">معاً إلى الأبد</p>
        </div>
      </div>

      <h1 className="text-5xl md:text-8xl font-serif font-bold text-rose-900 mb-8 leading-tight">
        An Eternal Sanctuary for <br />
        <span className="text-rose-600 italic font-romantic">Our Boundless Affection</span>
      </h1>
      
      <div className="mb-8">
        <p className="font-arabic-romantic text-3xl md:text-5xl text-rose-500 mb-4 animate-pulse">
          عشقٌ لا ينتهي.. وحبٌّ يتجدد كل يوم
        </p>
      </div>

      <p className="text-lg md:text-2xl text-rose-700 max-w-3xl mb-12 font-light leading-relaxed px-4">
        Beyond the ephemeral beauty of roses lies a 
        <span className="font-semibold text-rose-800"> devotion </span> that transcends time. 
        <span className="block mt-2 font-arabic-romantic text-2xl text-rose-600 italic">
          مكانٌ نحتفل فيه بهمساتنا، ونقدر فيه ضحكاتنا، ونعشق فيه رحلتنا معاً.
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        <button 
          onClick={onStart}
          className="px-10 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-2xl hover:shadow-rose-300 transition-all flex items-center justify-center gap-3 group scale-105 hover:scale-110 active:scale-95"
        >
          Begin Our Love Note
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-10 py-5 bg-white border-2 border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full font-bold transition-all shadow-md">
          Our Special Moments
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-rose-300 font-arabic-romantic text-3xl opacity-80" dir="rtl">
        <span className="hover:text-rose-500 transition-colors cursor-default">#حبيبي</span>
        <span>•</span>
        <span className="hover:text-rose-400 transition-colors cursor-default">#عشق</span>
        <span>•</span>
        <span className="hover:text-rose-500 transition-colors cursor-default">#للأبد</span>
        <span>•</span>
        <span className="hover:text-rose-400 transition-colors cursor-default">#روح_واحدة</span>
        <span>•</span>
        <span className="hover:text-rose-500 transition-colors cursor-default">#غرام</span>
      </div>
    </div>
  );
};

export default Hero;
