
import React, { useState } from 'react';
import { Quote, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const LoveQuotes: React.FC = () => {
  const [featuredQuote, setFeaturedQuote] = useState<{ text: string; arabicText?: string; author: string } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const staticQuotes = [
    { text: "In all the world, there is no heart for me like yours.", arabicText: "في كل العالم، ليس هناك قلب لي مثل قلبك.", author: "Maya Angelou" },
    { text: "My soul and your soul are forever tangled.", arabicText: "روحي وروحك متشابكتان للأبد.", author: "N.R. Hart" },
    { text: "You are my heart, my life, my one and only thought.", arabicText: "أنت قلبي، وحياتي، وفكرتي الوحيدة.", author: "Arthur Conan Doyle" }
  ];

  const generateMagicQuote = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = "Generate a short, beautiful, and deeply romantic original love quote for Valentine's Day. Provide the response as a JSON object with keys 'text' (English version), 'arabicText' (Arabic translation), and 'author' (e.g. 'A Soul in Love'). Keep the quote poetic and heartfelt.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      if (result.text) {
        setFeaturedQuote(result);
      }
    } catch (err) {
      console.error("Failed to fetch love quote:", err);
      const randomFallback = staticQuotes[Math.floor(Math.random() * staticQuotes.length)];
      setFeaturedQuote(randomFallback);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Magic Quote Section */}
        <div className="mb-20 text-center">
          <button
            onClick={generateMagicQuote}
            disabled={isGenerating}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-rose-200 text-rose-500 rounded-full font-bold shadow-sm hover:shadow-rose-100 hover:border-rose-300 transition-all active:scale-95 disabled:opacity-70"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5 text-rose-400 group-hover:rotate-12 transition-transform" />
            )}
            <span className="font-arabic-romantic text-xl mr-2">اكتشف سحر الحب</span>
            <span>{featuredQuote ? "Discover More Love" : "Surprise Me with Love"}</span>
          </button>

          {featuredQuote && (
            <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative p-12 glass rounded-[3rem] border-2 border-rose-100 bg-rose-50/30 max-w-3xl mx-auto shadow-inner">
                <Quote className="w-12 h-12 text-rose-200 absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2" />
                
                {featuredQuote.arabicText && (
                  <p className="text-3xl md:text-5xl font-arabic-romantic text-rose-600 leading-relaxed mb-6" dir="rtl">
                    "{featuredQuote.arabicText}"
                  </p>
                )}
                
                <p className="text-xl md:text-2xl font-romantic text-rose-400 leading-relaxed mb-6 italic">
                  "{featuredQuote.text}"
                </p>
                
                <div className="h-px w-16 bg-rose-200 mx-auto mb-4"></div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-400 italic">
                  — {featuredQuote.author} —
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Static Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {staticQuotes.map((quote, idx) => (
            <div key={idx} className="relative p-10 glass rounded-3xl border border-rose-100 flex flex-col items-center text-center group hover:bg-rose-50/50 transition-colors">
              <Quote className="w-10 h-10 text-rose-200 absolute -top-5 left-10 group-hover:text-rose-400 transition-colors" />
              
              <p className="text-2xl font-arabic-romantic text-rose-700 mb-4" dir="rtl">
                "{quote.arabicText}"
              </p>
              
              <p className="text-lg font-serif italic text-rose-800 mb-6 leading-relaxed opacity-60">
                "{quote.text}"
              </p>
              
              <div className="mt-auto">
                <div className="h-px w-12 bg-rose-200 mx-auto mb-4"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-rose-400">
                  {quote.author}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-5xl font-arabic-romantic text-rose-500 mb-8">
            كلماتٌ تهمسُ للقلب
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto text-rose-700/60 font-arabic-romantic text-2xl" dir="rtl">
            <span>حنان لا ينتهي</span>
            <span>•</span>
            <span>عاطفة متوهجة</span>
            <span>•</span>
            <span>سعادة أبدية</span>
            <span>•</span>
            <span>قلب نابض بالشغف</span>
            <span>•</span>
            <span>رابط مقدس</span>
            <span>•</span>
            <span>أرواح متآلفة</span>
            <span>•</span>
            <span>حب غير مشروط</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveQuotes;
