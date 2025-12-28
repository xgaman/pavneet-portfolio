
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm Pavneet's Digital Assistant. Ask me anything about her skills, education, or projects." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAskGemini = async () => {
    if (!query.trim() || isLoading) return;

    const userMessage = query.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setQuery('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a digital twin assistant for Pavneet Kour.
          Bio: Computer Engineering graduate, Fresher, passionate about 3D web, UI/UX, and complex software systems.
          Education: Diploma in Computer Engineering (2021-2024).
          Skills: React, TypeScript, Three.js, C++, Python, Tailwind CSS.
          Tone: Futuristic, professional, helpful, and slightly "cyberpunk".
          Goal: Answer questions about Pavneet's professional profile and encourage people to contact her. Keep responses concise.`,
        }
      });

      const aiText = response.text || "I'm having trouble connecting to my neural network. Please try again later.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Error in transmission. My systems are recalibrating." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,251,255,0.4)] hover:scale-110 transition-transform group"
      >
        <Bot className="text-black group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[110] w-[350px] md:w-[400px] glass rounded-2xl border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-cyan-500/10 border-b border-cyan-500/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Sparkles size={16} className="text-black" />
                </div>
                <div>
                  <h4 className="text-white font-orbitron text-sm font-bold">DIGITAL TWIN AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-[300px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-cyan-500 text-black font-medium' 
                      : 'bg-gray-800/50 text-gray-200 border border-gray-700'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/50 p-3 rounded-2xl border border-gray-700 flex gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-cyan-500/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleAskGemini(); }}
                className="flex gap-2"
              >
                <input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask digital Pavneet..."
                  className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-black hover:bg-cyan-400 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiAssistant;
