import React, { useState, useEffect } from 'react';
import PlaceholderImage from './PlaceholderImage';

type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

const MemorialPage: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<TabType>('about');

// Inside MemorialPage component, near line 10
const [heroImages, setHeroImages] = React.useState({
  main: null as string | null,
  thumb1: null as string | null,
  thumb2: null as string | null,
  thumb3: null as string | null,
  thumb4: null as string | null,
});

const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, slot: keyof typeof heroImages) => {
  const file = e.target.files?.[0];
  if (file) {
    // Generates a temporary URL for previewing the local file
    const url = URL.createObjectURL(file);
    setHeroImages(prev => ({ ...prev, [slot]: url }));
  }
};
  
  // Smooth scroll function with offset for sticky nav
  const scrollToSection = (id: TabType) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130; // Height of sticky site nav + tab bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Logic to highlight active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: TabType[] = ['about', 'memories', 'sadaqah', 'obituary', 'events', 'timeline', 'favorites'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  {/* Main Profile Photo Slot */}
  <label className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg bg-stone-100 cursor-pointer relative group">
    <input 
      type="file" 
      className="hidden" 
      accept="image/*" 
      onChange={(e) => handleImageUpload(e, 'main')} 
    />
    {heroImages.main ? (
      <img src={heroImages.main} className="w-full h-full object-cover" alt="Main" />
    ) : (
      <PlaceholderImage type="profile" className="w-full h-full" />
    )}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <span className="text-white font-bold text-sm bg-teal-900/80 px-4 py-2 rounded-full shadow-lg">Change Main Photo</span>
    </div>
  </label>

  {/* Smaller Thumbnail Slots (Thumb 1 - 4) */}
  {(['thumb1', 'thumb2', 'thumb3', 'thumb4'] as const).map((slot, i) => {
    const defaultTypes: ("family1" | "mosque" | "family2" | "quran")[] = ["family1", "mosque", "family2", "quran"];
    return (
      <label key={slot} className="hidden md:block col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100 cursor-pointer relative group">
        <input 
          type="file" 
          className="hidden" 
          accept="image/*" 
          onChange={(e) => handleImageUpload(e, slot)} 
        />
        {heroImages[slot] ? (
          <img src={heroImages[slot]!} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
        ) : (
          <PlaceholderImage type={defaultTypes[i]} className="w-full h-full" />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-[10px] text-white font-bold uppercase tracking-widest">
          Upload
        </div>
      </label>
    );
  })}
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
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm">
                <span className="text-red-500 text-lg">🤲</span> Make Du'a <span className="text-stone-400 font-medium">(23)</span>
              </button>
              <button onClick={() => scrollToSection('memories')} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm">
                <span className="text-lg">💬</span> Share Memory
              </button>
              <button onClick={() => setShowShareModal(true)} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold transition-all shadow-sm">
                <span className="text-lg">↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-16 z-50 bg-white/95 backdrop-blur-md border-y border-stone-200 shadow-sm overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth py-1">
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
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center gap-2 px-6 py-5 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                  activeSection === tab.id
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

      {/* Single Page Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Main Scrollable Column */}
          <div className="lg:col-span-2 space-y-24">
            <section id="about" className="scroll-mt-32">
              <AboutTab />
            </section>
            
            <section id="memories" className="scroll-mt-32">
              <MemoriesTab />
            </section>
            
            <section id="sadaqah" className="scroll-mt-32">
              <SadaqahTab />
            </section>
            
            <section id="obituary" className="scroll-mt-32">
              <ObituaryTab />
            </section>
            
            <section id="events" className="scroll-mt-32">
              <EventsTab rsvpOpen={rsvpOpen} setRsvpOpen={setRsvpOpen} />
            </section>
            
            <section id="timeline" className="scroll-mt-32">
              <TimelineTab />
            </section>
            
            <section id="favorites" className="scroll-mt-32">
              <FavoritesTab />
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:block sticky top-36 h-fit space-y-8">
            <Sidebar />
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden mt-20 space-y-8">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Share Modal */}
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

// --- High Fidelity Section Components ---

const AboutTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900 to-teal-800 border border-teal-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <p className="text-3xl text-amber-200 mb-4 leading-relaxed relative z-10" style={{fontFamily: 'serif'}}>
        إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </p>
      <p className="text-sm text-teal-100 font-medium uppercase tracking-[0.2em] relative z-10">"Surely we belong to Allah and to Him we shall return"</p>
    </div>

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl flex-shrink-0 shadow-inner">💌</div>
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
          'A story from his teaching days?'
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
      <h2 className="font-bold text-2xl mb-6">Condolences & Memories</h2>
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
        { name: 'Imam Abdullah', text: 'Brother Muhammad was one of the most sincere souls I have known. His presence at Fajr was a constant inspiration.', time: '2 days ago', initial: 'A' },
        { name: 'Sarah Ahmed', text: 'He taught my children Quran with such patience. They still talk about his kindness.', time: '3 days ago', initial: 'S' },
      ].map((m, i) => (
        <div key={i} className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10 hover:border-teal-800 transition-colors group">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg">
              {m.initial}
            </div>
            <div className="flex-1">
              <p className="font-black text-stone-900 text-lg uppercase tracking-tight">{m.name}</p>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">{m.time}</p>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-lg font-medium">{m.text}</p>
        </div>
      ))}
    </div>
  </div>
);


const SadaqahTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-sm p-8 md:p-12 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
          🕌
        </div>
        
        <h3 className="font-serif text-3xl text-stone-900 mb-4">Orphan Education & Care</h3>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Support this project in the name of Muhammad Rahman. Your gift will be processed through 
          our verified partnership with <strong>LaunchGood</strong>.
        </p>

        {/* This creates a 'Premium' checkout-style card */}
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 mb-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Ongoing Charity</span>
            <span className="text-emerald-600 font-bold text-sm">Verified Campaign ✓</span>
          </div>
          
          <a 
            href="https://www.launchgood.com/v4/campaign/together_lets_educate_and_care_for_orphans" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-teal-800 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-teal-900 shadow-xl transition-all no-underline"
          >
            Confirm & Donate →
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
        </div>
      </div>
    </div>
  </div>
);


const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-4xl font-serif font-black mb-10 pb-6 border-b-2 border-stone-50 text-stone-900 tracking-tight">Obituary</h2>
    <div className="prose prose-stone max-w-none space-y-8">
      <p className="text-xl leading-relaxed text-stone-700 font-medium">
        <strong className="text-teal-900">Muhammad Cadence Rahman</strong>, 76, returned to his Lord on October 1st, 2024.
      </p>
      <p className="text-lg leading-relaxed text-stone-600">
        Born in Dhaka, Bangladesh in 1943, Muhammad moved to the USA in 1968 and became a foundational member of the Denver Muslim community.
      </p>
      <p className="text-lg leading-relaxed text-stone-600">
        His 30-year legacy as a Quran teacher at Masjid Al-Noor touched hundreds of lives, fostering a love for divine guidance across generations.
      </p>
    </div>
  </div>
);

const EventsTab: React.FC<any> = ({ rsvpOpen, setRsvpOpen }) => {
  const events = [
    { id: 1, title: 'Janazah Prayer', date: 'Saturday, Oct 5, 2024', time: '1:30 PM', location: 'Masjid Al-Noor', icon: '🕌' },
    { id: 2, title: 'Burial Ceremony', date: 'Saturday, Oct 5, 2024', time: '3:00 PM', location: 'Islamic Cemetery of CO', icon: '⚱️' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black mb-10 uppercase tracking-tight">Services</h2>
      {events.map(event => (
        <div key={event.id} className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden group hover:border-teal-800 transition-all">
          <div className="p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-4xl shadow-inner">
              {event.icon}
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="font-black text-2xl uppercase tracking-tighter">{event.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4 font-bold text-stone-800">
                <p>📅 {event.date}</p>
                <p>🕐 {event.time}</p>
                <p className="sm:col-span-2">📍 {event.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineTab: React.FC = () => {
  const milestones = [
    { year: '1943', icon: '👶', title: 'Birth in Dhaka, Bangladesh' },
    { year: '1968', icon: '🇺🇸', title: 'Immigration to USA' },
    { year: '1980', icon: '🕋', title: 'Spiritual Hajj' },
    { year: '2024', icon: '✨', title: 'Final Return' },
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
              <div className="bg-stone-50 rounded-3xl p-8">
                <span className="inline-block bg-teal-800 text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-3 shadow-md">{m.year}</span>
                <h3 className="font-black text-xl uppercase tracking-tight text-stone-900">{m.title}</h3>
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
      ].map((f, i) => (
        <div key={i} className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 hover:shadow-lg transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-4xl">{f.icon}</div>
            <h3 className="font-black text-xs text-stone-400 uppercase tracking-[0.2em] mt-3">{f.title}</h3>
          </div>
          <p className="text-stone-800 font-bold text-lg leading-relaxed">{f.items}</p>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-teal-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">💝</div>
        <h3 className="font-black text-2xl uppercase tracking-tighter">Sadaqah Jariyah</h3>
      </div>
      <p className="text-teal-100 text-lg font-medium mb-8 leading-relaxed relative z-10">In lieu of flowers, honor his legacy through everlasting charity.</p>
      <div className="mb-8 relative z-10">
        <p className="text-5xl font-black tracking-tighter text-amber-400 mb-1">$11,910</p>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Raised by 67 donors</p>
      </div>
      <a 
  href="https://www.launchgood.com/v4/campaign/together_lets_educate_and_care_for_orphans" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block text-center w-full bg-amber-500 text-teal-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 shadow-xl transition-all relative z-10 no-underline"
>
  Give Sadaqah Jariyah →
</a>
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
            <div className="w-14 h-14 rounded-2xl bg-stone-50 text-teal-800 flex items-center justify-center font-black text-xl shadow-inner transition-all">
              {p.name[0]}
            </div>
            <div>
              <p className="font-black text-stone-900 uppercase tracking-tight text-sm">{p.name}</p>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{p.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MemorialPage;
