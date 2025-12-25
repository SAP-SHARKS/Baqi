
import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

const MemorialPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('about');
  const [showShareModal, setShowShareModal] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Top Identity Bar - Only visible at top */}
      <div className="bg-teal-900 text-white py-2.5 px-4 text-center text-sm border-b border-teal-800 pt-20 lg:pt-2.5">
        <span className="text-base">☽</span> <strong>Baqi</strong> <span className="text-teal-300">— الباقي</span> • Preserving Islamic Legacies
      </div>

      {/* Hero Section - Non-sticky top content */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:h-[500px]">
            {/* Large Main Photo */}
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg bg-stone-100 aspect-square md:aspect-auto">
              <PlaceholderImage type="profile" className="w-full h-full" />
            </div>
            
            {/* Grid of smaller photos */}
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

          {/* Name and Key Information */}
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

            {/* Engagement Actions */}
            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md">
                <span className="text-red-500 text-lg">🤲</span> Make Du'a <span className="text-stone-400 font-medium">(23)</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md">
                <span className="text-lg">💬</span> Share Memory <span className="text-stone-400 font-medium">(15)</span>
              </button>
              <button 
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm hover:shadow-md"
              >
                <span className="text-lg">↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Navigation - Sticks under site header */}
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

      {/* Main Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-10 min-h-[1000px]">
            {currentTab === 'about' && <AboutTab />}
            {currentTab === 'memories' && <MemoriesTab />}
            {currentTab === 'sadaqah' && <SadaqahTab />}
            {currentTab === 'obituary' && <ObituaryTab />}
            {currentTab === 'events' && <EventsTab rsvpOpen={rsvpOpen} setRsvpOpen={setRsvpOpen} />}
            {currentTab === 'timeline' && <TimelineTab />}
            {currentTab === 'favorites' && <FavoritesTab />}
          </div>
          
          {/* Sticky Sidebar Column */}
          <div className="hidden lg:block">
            <div className="sticky top-36 space-y-8">
              <Sidebar />
            </div>
          </div>
          
          {/* Mobile Sidebar (Not sticky, just at bottom) */}
          <div className="lg:hidden space-y-8">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Dynamic Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[120] p-4 backdrop-blur-md" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-2xl mb-6 text-stone-900">Share Memorial</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700">
                <span className="text-2xl">📧</span> Email
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700">
                <span className="text-2xl">💬</span> WhatsApp
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all font-bold text-stone-700">
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

// Sub-Tab Components
const AboutTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900 to-teal-800 border border-teal-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10" />
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
      <p className="text-stone-600 leading-relaxed text-lg">
        He was a man who lived by the principles of the Quran. His laughter filled our home, and his wisdom 
        was a beacon for our community. We invite you to share your stories here, so his grandchildren 
        might grow up knowing the full breadth of the man we called 'Abbu'.
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
    <div className="bg-white rounded-[2.5rem] border-4 border-amber-500 shadow-2xl p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full -mr-32 -mt-32" />
      <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-8 shadow-lg">
        FAMILY'S SADAQAH CHOICE
      </span>
      <div className="flex flex-col md:flex-row items-start gap-10 mb-8">
        <div className="w-24 h-24 rounded-3xl bg-teal-50 flex items-center justify-center text-5xl flex-shrink-0 shadow-inner">
          <PlaceholderImage type="water" className="w-16 h-16" />
        </div>
        <div className="flex-1">
          <h3 className="font-black text-3xl text-stone-900 mb-4 uppercase tracking-tighter">Water Well in Bangladesh</h3>
          <p className="text-stone-600 leading-relaxed text-xl">
            Help fulfill Muhammad's final wish to bring clean water to his ancestral village. This well is a form of <strong>Sadaqah Jariyah</strong> that will benefit generations.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="font-black text-4xl text-teal-800 tracking-tighter">$8,450</span>
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mt-1">Raised by 42 generous souls</p>
          </div>
          <span className="text-sm font-black text-stone-400 uppercase tracking-widest">Goal: $10,000</span>
        </div>
        <div className="h-5 bg-stone-100 rounded-full overflow-hidden shadow-inner border border-stone-200">
          <div className="h-full bg-gradient-to-r from-teal-800 to-teal-500 rounded-full transition-all duration-1000" style={{ width: '84.5%' }} />
        </div>
      </div>
      <button className="w-full bg-teal-800 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-teal-900 shadow-2xl transform hover:-translate-y-1 transition-all">
        Donate Now
      </button>
    </div>

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
      <h3 className="font-black text-xl mb-8 uppercase tracking-tight">Recent Donors</h3>
      <div className="space-y-6">
        {[
          { name: 'Anonymous', amount: '$100', time: '2 hours ago', icon: '🤲' },
          { name: 'Fatima Ahmed', amount: '$50', time: '1 day ago', icon: '✨' },
          { name: 'Omar Khan', amount: '$25', time: '2 days ago', icon: '📖' },
          { name: 'Zaid Malik', amount: '$200', time: '3 days ago', icon: '🌊' },
        ].map((d, i) => (
          <div key={i} className="flex justify-between items-center pb-6 border-b border-stone-50 last:border-0 last:pb-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 text-stone-800 flex items-center justify-center text-xl shadow-sm">
                {d.icon}
              </div>
              <div>
                <p className="font-black text-stone-900 uppercase tracking-tight">{d.name}</p>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{d.time}</p>
              </div>
            </div>
            <span className="text-teal-800 font-black text-xl tracking-tighter">{d.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-4xl font-serif font-black mb-10 pb-6 border-b-2 border-stone-50 text-stone-900 tracking-tight">The Life of Muhammad Rahman</h2>
    <div className="prose prose-stone max-w-none space-y-8">
      <p className="text-xl leading-relaxed text-stone-700 font-medium">
        <strong className="text-teal-900">Muhammad Cadence Rahman</strong>, 76, returned to his Lord on 
        October 1st, 2024, after courageously facing his final illness with unwavering faith.
      </p>
      <p className="text-lg leading-relaxed text-stone-600">
        Born in Dhaka, Bangladesh in 1943, Muhammad's thirst for knowledge led him to Al-Azhar University. 
        Upon moving to the USA in 1968, he became a foundational member of the Denver Muslim community.
      </p>
      <p className="text-lg leading-relaxed text-stone-600">
        His 30-year legacy as a Quran teacher at Masjid Al-Noor touched hundreds of lives, fostering a love for 
        divine guidance across generations. He was often seen staying late after classes, helping students 
        perfect their tajweed or discussing the deeper meanings of the verses.
      </p>
      <div className="bg-stone-50 p-8 rounded-3xl border-l-8 border-teal-800 italic text-2xl font-serif text-stone-800 my-10">
        "He lived for the pleasure of Allah, and left behind seeds of knowledge that will grow for decades."
      </div>
      <p className="text-lg leading-relaxed text-stone-600">
        In his later years, Muhammad found peace in his garden, which he often compared to the descriptions 
        of Jannah. He would share his harvest with neighbors of all faiths, believing that kindness was the 
        best form of dawah.
      </p>
      <p className="text-lg leading-relaxed text-stone-600">
        Muhammad is survived by his wife Amina, children Lamar, Aisha, and Yusuf, and eight beloved grandchildren 
        who were the light of his life in his final days.
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
    { id: 1, title: 'Janazah Prayer', date: 'Saturday, Oct 5, 2024', time: '1:30 PM (After Dhuhr)', location: 'Masjid Al-Noor', icon: '🕌' },
    { id: 2, title: 'Burial Ceremony', date: 'Saturday, Oct 5, 2024', time: '3:00 PM', location: 'Islamic Cemetery of CO', icon: '⚱️' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 shadow-sm">
        <p className="text-stone-700 leading-relaxed font-bold flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          Note: Burial will follow the Prophet's ﷺ Sunnah of prompt interment.
        </p>
      </div>

      {events.map(event => (
        <div key={event.id} className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden group hover:border-teal-800 transition-all">
          <div className="bg-stone-50 px-8 py-6 border-b border-stone-100 flex justify-between items-center">
            <h3 className="font-black text-2xl uppercase tracking-tighter">{event.title}</h3>
            <span className="text-3xl">{event.icon}</span>
          </div>
          <div className="p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-stone-400 font-black uppercase text-[10px] tracking-widest">Date & Time</p>
                <div className="flex items-center gap-3 font-bold text-stone-800">
                  <span className="text-xl">📅</span> {event.date}
                </div>
                <div className="flex items-center gap-3 font-bold text-stone-800">
                  <span className="text-xl">🕐</span> {event.time}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-stone-400 font-black uppercase text-[10px] tracking-widest">Location</p>
                <div className="flex items-start gap-3 font-bold text-stone-800">
                  <span className="text-xl">📍</span> {event.location}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setRsvpOpen(rsvpOpen === event.id ? null : event.id)}
              className="w-full py-4 bg-teal-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-teal-900 transition-all shadow-lg mt-4"
            >
              Confirm Attendance
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineTab: React.FC = () => {
  const milestones = [
    { year: '1943', icon: '👶', title: 'Birth in Dhaka, Bangladesh', desc: 'A journey begins.' },
    { year: '1968', icon: '🇺🇸', title: 'Immigration to USA', desc: 'Bringing faith to new shores.' },
    { year: '1972', icon: '💍', title: 'Marriage to Amina', desc: 'The start of a beautiful family.' },
    { year: '1975', icon: '👨‍🏫', title: 'Teaching at Al-Noor', desc: 'Educating the next generation.' },
    { year: '1980', icon: '🕋', title: 'Spiritual Hajj', desc: 'Fulfilling the 5th pillar.' },
    { year: '2005', icon: '📜', title: 'Elder Recognition', desc: 'Honored for 30 years of service.' },
    { year: '2024', icon: '✨', title: 'Final Return', desc: 'The conclusion of a blessed life.' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
      <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Legacy Timeline</h2>
      <div className="relative">
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-stone-100 rounded-full" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-24 group">
              <div className="absolute left-0 w-20 h-20 bg-white border-4 border-stone-100 rounded-2xl flex items-center justify-center shadow-xl z-10 group-hover:border-teal-800 transition-colors">
                <span className="text-3xl">{m.icon}</span>
              </div>
              <div className="bg-stone-50 rounded-3xl p-8 transition-transform hover:scale-[1.02]">
                <span className="inline-block bg-teal-800 text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-3 shadow-md">{m.year}</span>
                <h3 className="font-black text-xl uppercase tracking-tight text-stone-900">{m.title}</h3>
                <p className="text-stone-500 font-medium mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoritesTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-3xl font-black mb-10 uppercase tracking-tight">Spiritual Affinities</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {[
        { icon: '📖', title: 'Beloved Surahs', items: 'Ar-Rahman, Yasin, Al-Mulk' },
        { icon: '🕌', title: 'Sacred Spaces', items: 'Masjid Al-Haram, Al-Nabawi, Al-Noor' },
        { icon: '🍲', title: 'Sunnah Foods', items: 'Dates, Raw Honey, Olive Oil' },
        { icon: '📚', title: 'Essential Reads', items: 'Riyadh as-Salihin, Ibn Kathir' },
        { icon: '🌺', title: 'Garden Plants', items: 'Jasmine, Mint, Fig Trees' },
        { icon: '🎨', title: 'Calligraphy Style', items: 'Thuluth, Kufic' }
      ].map((f, i) => (
        <div key={i} className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 hover:shadow-lg transition-all group">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="font-black text-xs text-stone-400 uppercase tracking-[0.2em] mt-3">{f.title}</h3>
          </div>
          <p className="text-stone-800 font-bold text-lg leading-relaxed">{f.items}</p>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar: React.FC = () => (
  <>
    <div className="bg-teal-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">💝</div>
        <h3 className="font-black text-2xl uppercase tracking-tighter">Everlasting Sadaqah</h3>
      </div>
      <p className="text-teal-100 text-lg font-medium mb-8 leading-relaxed relative z-10">In lieu of flowers, the family requests your contribution to his chosen water project.</p>
      <div className="mb-8 relative z-10">
        <p className="text-5xl font-black tracking-tighter text-amber-400 mb-1">$11,910</p>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Raised by 67 donors</p>
      </div>
      <button className="w-full bg-amber-500 text-teal-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 shadow-xl transition-all relative z-10">
        Give Sadaqah Jariyah →
      </button>
    </div>
    
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
      <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Stay Connected</h3>
      <p className="text-sm text-stone-500 font-medium mb-6">Be notified of memorial updates and shared stories.</p>
      <input 
        type="email" 
        placeholder="Email address" 
        className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl mb-3 text-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-800 outline-none transition-all"
      />
      <button className="w-full bg-stone-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all">
        Subscribe
      </button>
    </div>

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
            <div className="w-14 h-14 rounded-2xl bg-stone-50 text-teal-800 flex items-center justify-center font-black text-xl shadow-inner group-hover:bg-teal-800 group-hover:text-white transition-all">
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
  </>
);

export default MemorialPage;
