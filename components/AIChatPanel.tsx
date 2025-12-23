
import React, { useState, useRef, useEffect } from 'react';
import { getLegacyAssistantResponse } from '../services/geminiService';
import { Message } from '../types';

const AIChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Assalamu Alaikum. I am your Baqi Legacy Assistant. How can I help you preserve your legacy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getLegacyAssistantResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || "I am unable to answer right now." }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
      <div className="bg-teal-800 p-4 text-white">
        <h3 className="font-bold flex items-center gap-2">
          <span>🤖</span> Legacy Assistant
        </h3>
        <p className="text-xs text-teal-100">Guided by purpose and faith</p>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-teal-700 text-white rounded-br-none' 
                : 'bg-white text-stone-800 shadow-sm border border-stone-100 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-stone-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about wasiyyah, messages, or legacy..."
            className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-teal-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-900 transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPanel;
