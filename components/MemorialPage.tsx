
import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

const MemorialPage: React.FC = () => {
  const [tab, setTab] = useState<'tribute' | 'photos' | 'funeral' | 'donate'>('tribute');
  
  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-14">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-32 h-32 rounded-full border-4 border-amber-500 mx-auto mb-6 overflow-hidden bg-teal-800 shadow-2xl ring-8 ring-white/5">
            <PlaceholderImage type="person" className="w-full h-full" />
          </div>
          <h1 className="text-4xl font-serif font-bold mb-2">Muhammad Rahman</h1>
          <p className="text-amber-400 font-black tracking-widest text-sm mb-4 uppercase">1952 — 2024</p>
          <p className="text-xl font-serif italic text-white/70">"To Allah we belong, and to Him we return."</p>
          <div className="mt-8 flex justify-center gap-4">
             <div className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">342 Memories Shared</div>
             <div className="bg-amber-500/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-500/20 text-amber-400">$8,200 Raised</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-14 z-40 flex justify-center gap-2 py-4 bg-white/80 backdrop-blur-md border-b border-stone-200">
        {[
          { id: 'tribute', label: '📖 Tribute' },
          { id: 'photos', label: '📷 Photos' },
          { id: 'funeral', label: '🕌 Funeral' },
          { id: 'donate', label: '💝 Sadaqah' },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              tab === t.id ? 'bg-teal-800 text-white shadow-lg' : 'text-stone-500 hover:bg-stone-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        {tab === 'tribute' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200">
                <h2 className="text-2xl font-serif font-bold mb-6 text-stone-900 underline decoration-amber-500 decoration-4 underline-offset-8">A Beautiful Journey</h2>
                <p className="text-stone-600 leading-relaxed text-lg font-medium">
                  Muhammad Rahman returned to his Lord on January 15, 2024. A pillar of Masjid Al-Noor for over 30 years, 
                  Muhammad was known for his gentle wisdom, his love for gardening, and his dedication to teaching 
                  Quran to the youth of our community. 
                </p>
                <p className="text-stone-600 mt-6 leading-relaxed text-lg font-medium">
                  He leaves behind a legacy of kindness and a family that strives to continue his mission of 
                  service. His last wish was to provide clean water to a remote village, a project we are 
                  honored to fulfill in his name.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold mb-6">Memory Wall</h3>
                <div className="relative mb-8">
                  <textarea 
                    placeholder="Share a memory of Muhammad..."
                    className="w-full p-6 bg-stone-50 border border-stone-200 rounded-2xl text-stone-900 focus:ring-2 focus:ring-teal-500 outline-none h-32 resize-none"
                  />
                  <button className="absolute bottom-4 right-4 bg-teal-800 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-teal-900 transition-all">
                    Post
                  </button>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: 'Imam Abdullah', text: 'Brother Muhammad was the first one at Fajr every single day. His sincerity was unmatched.', date: '2 days ago' },
                    { name: 'Sarah Ahmed', text: 'My children still talk about the way he taught them Surah Fatiha. He had so much patience.', date: '5 days ago' },
                    { name: 'Omar Malik', text: 'A true gentleman who always had a kind word for everyone.', date: '1 week ago' },
                  ].map((m, i) => (
                    <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex gap-4">
                      <div className="w-12 h-12 bg-teal-800 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black">
                        {m.name[0]}
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-stone-900">{m.name}</p>
                          <span className="text-[10px] font-bold text-stone-400 uppercase">{m.date}</span>
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-lg font-bold mb-4">Support the Legacy</h3>
                <p className="text-teal-100 text-sm mb-6 leading-relaxed">Muhammad's family has requested Sadaqah Jariyah in lieu of flowers.</p>
                <button 
                  onClick={() => setTab('donate')}
                  className="w-full bg-amber-500 text-teal-950 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square bg-stone-200 rounded-3xl overflow-hidden group relative cursor-pointer border-4 border-white shadow-md">
                <PlaceholderImage type={i % 2 === 0 ? 'family' : 'mosque'} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
            ))}
            <div className="aspect-square bg-stone-100 rounded-3xl border-4 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 hover:border-teal-800 hover:text-teal-800 cursor-pointer transition-all">
              <span className="text-4xl mb-2">+</span>
              <span className="text-xs font-bold uppercase tracking-widest">Add Photos</span>
            </div>
          </div>
        )}

        {tab === 'funeral' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-stone-100 p-3 rounded-2xl">🕌</span> 
                Funeral Services
              </h2>
              <div className="space-y-10">
                {[
                  { icon: '🚿', title: 'Ghusl & Preparation', time: 'Fri, Jan 19 • 6:00 PM', place: 'Islamic Funeral Center' },
                  { icon: '🕌', title: 'Janazah (Funeral) Prayer', time: 'Sat, Jan 20 • 1:30 PM (after Dhuhr)', place: 'Masjid Al-Noor (Grand Hall)' },
                  { icon: '⚱️', title: 'Burial Procession', time: 'Sat, Jan 20 • 3:00 PM', place: 'Garden of Peace Islamic Cemetery' },
                ].map((e, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                      {e.icon}
                    </div>
                    <div className="flex-1 border-l-2 border-stone-100 pl-6">
                      <p className="text-lg font-bold text-stone-900">{e.title}</p>
                      <p className="text-teal-800 font-bold text-sm mt-1">{e.time}</p>
                      <p className="text-stone-500 font-medium text-sm mt-1">{e.place}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-12 w-full border-2 border-teal-800 text-teal-800 py-4 rounded-2xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center gap-2">
                📅 Add to my Calendar
              </button>
            </div>
          </div>
        )}

        {tab === 'donate' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border-4 border-amber-500 relative transform hover:scale-[1.01] transition-transform">
              <span className="absolute -top-4 left-10 bg-amber-500 text-white font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                Family's Choice
              </span>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-teal-50 p-6 rounded-3xl">
                  <PlaceholderImage type="water" className="w-24 h-24" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Water Well in Bangladesh</h3>
                  <p className="text-stone-600 font-medium leading-relaxed mb-6">
                    Muhammad always spoke about his desire to provide clean water to the remote village where he grew up.
                  </p>
                  <div className="space-y-3">
                    <div className="h-4 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                      <div className="h-full bg-teal-800 rounded-full" style={{ width: '67%' }} />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-black text-teal-800">$6,700 Raised</span>
                      <span className="font-bold text-stone-400">Target: $10,000</span>
                    </div>
                  </div>
                  <button className="mt-8 w-full bg-teal-800 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-teal-900 transition-all">
                    Donate in his Name
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 hover:border-teal-800/30 transition-all">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-5xl bg-stone-50 p-6 rounded-3xl">📚</div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Quran Education Fund</h3>
                  <p className="text-stone-600 font-medium mb-6">Support the children's hifz program Muhammad loved so much.</p>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-stone-400 rounded-full" style={{ width: '42%' }} />
                  </div>
                  <button className="w-full border-2 border-teal-800 text-teal-800 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemorialPage;
