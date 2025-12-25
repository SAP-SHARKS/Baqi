import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';
import SadaqahCard from './SadaqahCard';

type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

const MemorialPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('about');
  const [showShareModal, setShowShareModal] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Top Identity Bar */}
      <div className="bg-teal-900 text-white py-2.5 px-4 text-center text-sm border-b border-teal-800 pt-20 lg:pt-2.5">
        <span className="text-base">☽</span> <strong>Baqi</strong> <span className="text-teal-300">— الباقي</span> • Preserving Islamic Legacies
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg bg-stone-100 aspect-square md:aspect-auto">
              <PlaceholderImage type="profile" className="w-full h-full" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="family1" className="w-full h-full" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="mosque" className="w-full h-full" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="family2" className="w-full h-full" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="quran" className="w-full h-full" />
            </div>
          </div>

          <div className="mt-8 mb-4 px-2 md:px-0">
            <p className="text-sm font-bold text-teal-800 uppercase tracking-widest mb-1">In Loving Memory of</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 leading-tight">Muhammad Rahman</h1>
            
            <div className="flex flex-wrap gap-8 text-sm text-stone-600 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕯️</span>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-tighter">Passed</p>
                  <p className="font-bold text-stone-900">October 1, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎂</span>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-tighter">Born</p>
                  <p className="font-bold text-stone-900">December 13, 1943</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-tighter">Resided</p>
                  <p className="font-bold text-stone-900">Denver, CO, USA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md">
                <span className="text-red-500 text-lg">🤲</span> Make Du'a <span className="text-stone-400 font-medium">(23)</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md">
                <span className="text-lg">💬</span> Share Memory <span className="text-stone-400 font-medium">(15)</span>
              </button>
              <button onClick={() => setShowShareModal(true)} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md">
                <span className="text-lg">↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Navigation */}
      <div className="sticky top-16 z-50 bg-white/95 backdrop-blur-md border-y border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'about' as TabType, icon: '📖', label: 'About' },
              { id: 'memories' as TabType, icon: '💭', label: 'Memories' },
              { id: 'sadaqah' as TabType, icon: '💝', label: 'Give' },
              { id: 'obituary' as TabType, icon: '📜', label: 'Obituary' },
              { id: 'events' as TabType, icon: '📅', label: 'Events' },
              { id: 'timeline' as TabType, icon: '⏳', label: 'Timeline' },
              { id: 'favorites' as TabType, icon: '⭐', label: 'Favorites' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-5 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                  currentTab === tab.id
                    ? 'border-teal-800 text-teal-800 bg-teal-50/30'
                    : 'border-transparent text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-10 min-h-[1000px]">
            {currentTab === 'about' && <AboutTab />}
            {currentTab === 'memories' && <MemoriesTab />}
            {currentTab === 'sadaqah' && <SadaqahTab />}
            {currentTab === 'obituary' && <ObituaryTab />}
            {currentTab === 'events' && <EventsTab rsvpOpen={rsvpOpen} setRsvpOpen={setRsvpOpen} />}
            {currentTab === 'timeline' && <TimelineTab />}
            {currentTab === 'favorites' && <FavoritesTab />}
          </div>
          
          <div className="lg:block">
            <div className="sticky top-36 space-y-8">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[120] p-4 backdrop-blur-md" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-2xl mb-6 text-stone-900">Share Memorial</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700">
                <span className="text-2xl">📧</span> Email
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700">
                <span className="text-2xl">💬</span> WhatsApp
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700 text-left">
                <span className="text-2xl">🔗</span> Copy Direct Link
              </button>
            </div>
            <button onClick={() => setShowShareModal(false)} className="mt-8 w-full py-4 bg-stone-100 text-stone-800 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-stone-200 transition-all">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Sub-Tab Components ---

const AboutTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900 to-teal-800 border border-teal-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
      <p className="text-3xl text-amber-200 mb-4 leading-relaxed relative z-10" style={{fontFamily: 'serif'}}>
        إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </p>
      <p className="text-sm text-teal-100 font-medium uppercase tracking-[0.2em] relative z-10">"Surely we belong to Allah and to Him we shall return"</p>
    </div>

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10 group hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">💌</div>
        <div>
          <h3 className="font-bold text-2xl text-stone-900">A Personal Note</h3>
          <p className="text-sm font-black text-stone-400 uppercase tracking-widest">From Lamar & The Family</p>
        </div>
      </div>
      <p className="text-stone-700 leading-relaxed text-xl font-serif italic mb-6">
        "Alhamdulillah for the 76 blessed years Allah (SWT) granted us with our beloved husband and father. 
        We are overwhelmed by the outpouring of love. Every shared memory is a balm for our hearts. 
        Thank you for honoring his legacy of patience and faith."
      </p>
    </div>

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
      <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
        <span className="bg-teal-50 p-2 rounded-lg">💭</span> 
        Spark a Memory
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          'Favorite recitation of Muhammad?',
          'Islamic advice he once gave you?',
          'Most memorable character trait?',
          'A story from his teaching days?',
          'A memory from his travels to Makkah?',
          'His favorite gardening tip?'
        ].map((q, i) => (
          <button key={i} className="w-full text-left p-6 bg-stone-50 rounded-2xl hover:bg-teal-50 border border-transparent hover:border-teal-200 transition-all group">
            <p className="text-stone-700 font-bold mb-3">{q}</p>
            <p className="text-[10px] font-black text-teal-800 uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Share →</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const MemoriesTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
      <h2 className="font-bold text-2xl mb-6">Share a Condolence</h2>
      <textarea 
        placeholder="Share a memory, du'a, or story about Muhammad..."
        className="w-full p-6 bg-stone-50 border border-stone-200 rounded-2xl resize-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-800 outline-none transition-all text-lg"
        rows={5}
      />
      <div className="flex gap-4 mt-6">
        <button className="flex-1 py-4 bg-teal-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-teal-900 shadow-xl transition-all">Post Memory</button>
        <button className="px-10 py-4 border-2 border-stone-200 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-stone-100 transition-all flex items-center gap-2">
          <span>📷</span> Photo
        </button>
      </div>
    </div>

    <div className="space-y-6">
      {[
        { name: 'Imam Abdullah', text: 'Brother Muhammad was one of the most sincere souls I have known. His presence at Fajr was a constant inspiration. May Allah grant him Jannah.', time: '2 days ago', initial: 'A' },
        { name: 'Sarah Ahmed', text: 'He taught my children Quran with such patience. They still talk about his kindness and the way he made them feel proud of their progress.', time: '3 days ago', initial: 'S' },
        { name: 'Omar Khan', text: 'I remember when we visited him last Ramadan. Despite his illness, he insisted on serving us himself. A true example of hospitality.', time: '1 week ago', initial: 'O' },
      ].map((m, i) => (
        <div key={i} className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10 hover:border-teal-800 transition-colors group">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              {m.initial}
            </div>
            <div className="flex-1">
              <p className="font-black text-stone-900 text-lg uppercase tracking-tight">{m.name}</p>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">{m.time}</p>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-lg font-medium">{m.text}</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest border-t border-stone-100 pt-6 mt-6">
            <button className="text-stone-400 hover:text-teal-800 transition-colors flex items-center gap-2">
              <span className="text-lg">🤲</span> Make Du'a (15)
            </button>
            <button className="text-stone-400 hover:text-teal-800 transition-colors flex items-center gap-2">
              <span className="text-lg">💬</span> Reply (2)
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SadaqahTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-[2.5rem] border-4 border-amber-500 shadow-2xl p-12 relative overflow-hidden text-center">
      <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-8 shadow-lg">
        FAMILY'S SADAQAH CHOICE
      </span>
      <h3 className="font-black text-3xl text-stone-900 mb-4 uppercase tracking-tighter">Water Well in Bangladesh</h3>
      <p className="text-stone-600 leading-relaxed text-xl mb-10">
        Help fulfill Muhammad's final wish to bring clean water to his ancestral village. This well is a form of <strong>Sadaqah Jariyah</strong>.
      </p>
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <span className="font-black text-4xl text-teal-800 tracking-tighter">$8,450</span>
          <span className="text-sm font-black text-stone-400 uppercase tracking-widest">Goal: $10,000</span>
        </div>
        <div className="h-5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
          <div className="h-full bg-gradient-to-r from-teal-800 to-teal-500 rounded-full" style={{ width: '84.5%' }} />
        </div>
      </div>
      <button className="w-full bg-teal-800 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-teal-900 shadow-2xl transition-all">
        Donate Now
      </button>
    </div>
  </div>
);

const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-4xl font-serif font-black mb-10 pb-6 border-b-2 border-stone-50 text-stone-900 tracking-tight">The Life of Muhammad Rahman</h2>
    <div className="prose prose-stone max-w-none space-y-8">
      <p className="text-xl leading-relaxed text-stone-700 font-medium">
        <strong className="text-teal-900">Muhammad Rahman</strong>, 76, returned to his Lord on 
        October 1st, 2024, facing his journey with unwavering faith.
      </p>
      <p className="text-lg leading-relaxed text-stone-600 italic">
        "He lived for the pleasure of Allah, and left behind seeds of knowledge that will grow for decades."
      </p>
    </div>
  </div>
);

interface EventsTabProps {
  rsvpOpen: number | null;
  setRsvpOpen: (id: number | null) => void;
}

const EventsTab: React.FC<EventsTabProps> = ({ rsvpOpen, setRsvpOpen }) => {
  const events = [
    { id: 1, title: 'Janazah Prayer', date: 'Saturday, Oct 5, 2024', time: '1:30 PM', location: 'Masjid Al-Noor', icon: '🕌' },
    { id: 2, title: 'Burial Ceremony', date: 'Saturday, Oct 5, 2024', time: '3:00 PM', location: 'Islamic Cemetery of CO', icon: '⚱️' },
  ];

  return (
    <div className="space-y-8">
      {events.map(event => (
        <div key={event.id} className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden group hover:border-teal-800 transition-all">
          <div className="bg-stone-50 px-8 py-6 border-b border-stone-100 flex justify-between items-center">
            <h3 className="font-black text-2xl uppercase tracking-tighter">{event.title}</h3>
            <span className="text-3xl">{event.icon}</span>
          </div>
          <div className="p-10">
            <p className="text-stone-800 font-bold mb-2">📅 {event.date}</p>
            <p className="text-stone-800 font-bold mb-4">🕐 {event.time}</p>
            <p className="text-stone-800 font-bold mb-6">📍 {event.location}</p>
            <button className="w-full py-4 bg-teal-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-teal-900 transition-all shadow-lg">
              Confirm Attendance
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12 text-center font-bold">
    Timeline Section
  </div>
);

const FavoritesTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12 text-center font-bold">
    Favorites Section
  </div>
);

// --- Sidebar Component ---

const Sidebar: React.FC = () => (
  <div className="space-y-8">
    <SadaqahCard campaignId="12345" />

    {/* Islamic Resources Section */}
    <div className="bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm p-8">
      <h3 className="font-black text-xl mb-6 uppercase tracking-tight text-emerald-900">Islamic Resources</h3>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-emerald-100 hover:shadow-md transition-all text-left group">
          <div>
            <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Guide</p>
            <p className="font-bold text-stone-800">Sunnahs of Janazah</p>
          </div>
          <span className="text-xl group-hover:translate-x-1 transition-transform">📖</span>
        </button>
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-emerald-100 hover:shadow-md transition-all text-left group">
          <div>
            <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Prayer</p>
            <p className="font-bold text-stone-800">Du'as for the Deceased</p>
          </div>
          <span className="text-xl group-hover:translate-x-1 transition-transform">🤲</span>
        </button>
      </div>
    </div>

    {/* Stay Connected */}
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
      <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Stay Connected</h3>
      <p className="text-sm text-stone-500 font-medium mb-6">Be notified of memorial updates and shared stories.</p>
      <input 
        type="email" 
        placeholder="Email address" 
        className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl mb-3 text-sm focus:border-teal-800 outline-none transition-all"
      />
      <button className="w-full bg-stone-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all">
        Subscribe
      </button>
    </div>

    {/* Survived By */}
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
      <h3 className="font-black text-xl mb-8 uppercase tracking-tight">Survived By</h3>
      <div className="space-y-6">
        {[
          { name: 'Amina Rahman', relation: 'Wife' },
          { name: 'Lamar Rahman', relation: 'Son' },
          { name: 'Aisha Rahman', relation: 'Daughter' },
          { name: 'Yusuf Rahman', relation: 'Son' },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-stone-50 text-teal-800 flex items-center justify-center font-black text-xl group-hover:bg-teal-800 group-hover:text-white transition-all">
              {p.name[0]}
            </div>
            <div>
              <p className="font-black text-stone-900 uppercase tracking-tight">{p.name}</p>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{p.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MemorialPage;
