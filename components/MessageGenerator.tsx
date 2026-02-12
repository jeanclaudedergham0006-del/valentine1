
import React, { useState } from 'react';
import { Send, Loader2, Sparkles, Copy, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const MessageGenerator: React.FC = () => {
  const [partnerName, setPartnerName] = useState('');
  const [tone, setTone] = useState('romantic');
  const [loading, setLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [error, setError] = useState('');

  const generateMessage = async () => {
    if (!partnerName) {
      setError('Please enter your partner\'s name');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Write a ${tone} Valentine's Day love letter for someone named ${partnerName}. 
      Make it heartfelt, poetic, and meaningful. Do not use generic cliches if possible. 
      Limit to about 150 words. Format it beautifully.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setGeneratedMessage(response.text || 'I couldn\'t think of anything... my heart is too full!');
    } catch (err) {
      console.error(err);
      setError('The AI is feeling shy right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert('Copied to heart! (and clipboard)');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-rose-900 mb-4">The Love Letter Studio</h2>
        <p className="text-rose-700">Let our AI help you find the perfect words for your sweetheart.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Input Side */}
        <div className="glass p-8 rounded-3xl shadow-xl border border-rose-100">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-rose-800 mb-2">Partner's Name</label>
              <input 
                type="text" 
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="e.g. Juliet"
                className="w-full px-5 py-4 rounded-2xl border border-rose-200 focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-rose-800 mb-2">Tone of Voice</label>
              <div className="grid grid-cols-2 gap-3">
                {['Romantic', 'Playful', 'Soulful', 'Short & Sweet'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t.toLowerCase())}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      tone === t.toLowerCase() 
                        ? 'bg-rose-500 text-white shadow-lg' 
                        : 'bg-white text-rose-500 border border-rose-200 hover:bg-rose-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-red-500 text-sm italic">{error}</p>}

            <button 
              onClick={generateMessage}
              disabled={loading}
              className="w-full py-4 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {generatedMessage ? 'Rewrite Letter' : 'Generate Letter'}
            </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass p-8 min-h-[400px] rounded-3xl flex flex-col border border-rose-100">
            {!generatedMessage ? (
              <div className="flex-1 flex flex-col items-center justify-center text-rose-300 gap-4 opacity-50">
                <Send className="w-12 h-12" />
                <p className="font-romantic text-2xl">Awaiting your love...</p>
              </div>
            ) : (
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-rose-400 font-bold">Your Custom Letter</span>
                  <div className="flex gap-2">
                    <button onClick={copyToClipboard} className="p-2 hover:bg-rose-50 text-rose-500 rounded-lg transition-colors" title="Copy">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button onClick={generateMessage} className="p-2 hover:bg-rose-50 text-rose-500 rounded-lg transition-colors" title="Regenerate">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="whitespace-pre-wrap font-romantic text-2xl md:text-3xl text-rose-900 leading-relaxed italic">
                  {generatedMessage}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageGenerator;
