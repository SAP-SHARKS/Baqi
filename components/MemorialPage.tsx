import React, { useState, useEffect } from 'react';
import PlaceholderImage from './PlaceholderImage';

type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

const MemorialPage: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<TabType>('about');

  // Hero Image State
  const [heroImages, setHeroImages] = React.useState({
    main: null as string | null,
    thumb1: null as string | null,
    thumb2: null as string | null,
    thumb3: null as string | null,
    thumb4: null as string | null,
  });

  // Handle Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, slot: keyof typeof heroImages) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHeroImages(prev => ({ ...prev, [slot]: url }));
    }
  };

  // Remove Image Function
  const removeImage = (e: React.MouseEvent, slot: keyof typeof heroImages) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setHeroImages(prev => ({ ...prev, [slot]: null }));
  };
  
  // Smooth scroll function
  const scrollToSection = (id: TabType) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll Spy Logic for Active Tabs
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
              
              {heroImages.main && (
                <button 
                  onClick={(e) => removeImage(e, 'main')}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-600/90 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-xl z-30 transition-all border-2 border-white"
                >
                  ✕
                </button>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white font-bold text-sm bg-teal-900/80 px-4 py-2 rounded-full shadow-lg">Change Main Photo</span>
              </div>
            </label>

            {/* Smaller Thumbnail Slots */}
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

                  {heroImages[slot] && (
                    <button 
                      onClick={(e) => removeImage(e, slot)}
                      className="absolute top-2 right-2 w-7 h-7 bg-red-600/90 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg z-30 transition-all border border-white"
                    >
                      <span className="text-[10px]">✕</span>
                    </button>
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
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold shadow-sm">
                <span className="text-red-500 text-lg">🤲</span> Make Du'a <span className="text-stone-400 font-medium">(23)</span>
              </button>
              <button onClick={() => scrollToSection('memories')} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold shadow-sm">
                <span className="text-lg">💬</span> Share Memory
              </button>
              <button onClick={() => setShowShareModal(true)} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 text-sm font-bold shadow-sm">
                <span className="text-lg">↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
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

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-24">
            <section id="about" className="scroll-mt-32"><AboutTab /></section>
            <section id="memories" className="scroll-mt-32"><MemoriesTab /></section>
            <section id="sadaqah" className="scroll-mt-32"><SadaqahTab /></section>
            <section id="obituary" className="scroll-mt-32"><ObituaryTab /></section>
            <section id="events" className="scroll-mt-32"><EventsTab rsvpOpen={rsvpOpen} setRsvpOpen={setRsvpOpen} /></section>
            <section id="timeline" className="scroll-mt-32"><TimelineTab /></section>
            <section id="favorites" className="scroll-mt-32"><FavoritesTab /></section>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:block sticky top-36 h-fit space-y-8">
            <Sidebar />
          </div>

          <div className="lg:hidden mt-20 space-y-8">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[120] p-4 backdrop-blur-md" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-2xl mb-6 text-stone-900">Share Memorial</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl font-bold text-stone-700 hover:bg-stone-50">
                <span className="text-2xl">📧</span> Email
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl font-bold text-stone-700 hover:bg-stone-50">
                <span className="text-2xl">💬</span> WhatsApp
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl font-bold text-stone-700 hover:bg-stone-50">
                <span className="text-2xl">🔗</span> Copy Link
              </button>
            </div>
            <button onClick={() => setShowShareModal(false)} className="mt-8 w-full py-4 bg-stone-100 text-stone-800 rounded-xl font-black uppercase tracking-widest text-xs">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Sub Components ---

const AboutTab: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900 to-teal-800 border border-teal-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
      <p className="text-3xl text-amber-200 mb-4 leading-relaxed relative z-10" style={{fontFamily: 'serif'}}>
        إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </p>
      <p className="text-sm text-teal-100 font-medium uppercase tracking-[0.2em] relative z-10">"Surely we belong to Allah and to Him we shall return"</p>
    </div>
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
      <h3 className="font-bold text-2xl text-stone-900 mb-6 uppercase tracking-tight">A Personal Note</h3>
      <p className="text-stone-700 leading-relaxed text-xl font-serif italic mb-6">
        "Alhamdulillah for the 76 blessed years Allah (SWT) granted us with our beloved husband and father. We are overwhelmed by the outpouring of love."
      </p>
    </div>
  </div>
);

const MemoriesTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-10">
    <h2 className="font-bold text-2xl mb-6">Condolences & Memories</h2>
    <textarea placeholder="Share a memory..." className="w-full p-6 bg-stone-50 border border-stone-200 rounded-2xl mb-4" rows={4} />
    <button className="px-8 py-3 bg-teal-800 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-teal-900">Post Memory</button>
  </div>
);

const SadaqahTab: React.FC = () => (
  <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-sm p-12 text-center">
    <h3 className="font-serif text-3xl text-stone-900 mb-4">Orphan Education & Care</h3>
    <p className="text-stone-600 leading-relaxed mb-10 text-lg">Support this project in the name of Muhammad Rahman.</p>
    <a href="https://www.launchgood.com/v4/campaign/together_lets_educate_and_care_for_orphans" target="_blank" rel="noopener noreferrer" className="block w-full bg-teal-800 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest no-underline">
      Confirm & Donate →
    </a>
  </div>
);

const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-4xl font-serif font-black mb-10 pb-6 border-b-2 border-stone-50">Obituary</h2>
    <p className="text-lg leading-relaxed text-stone-600">Muhammad Cadence Rahman was a pillar of the Denver community...</p>
  </div>
);

const EventsTab: React.FC<any> = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-black uppercase tracking-tight">Services</h2>
    <div className="bg-white rounded-3xl border border-stone-200 p-10">
      <h3 className="font-black text-2xl uppercase mb-4">Janazah Prayer</h3>
      <p className="font-bold text-stone-800">📅 Saturday, Oct 5, 2024 • 🕌 Masjid Al-Noor</p>
    </div>
  </div>
);

const TimelineTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Legacy Timeline</h2>
    <div className="relative pl-10 border-l-4 border-stone-100 space-y-12">
      <div>
        <span className="bg-teal-800 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">1943</span>
        <h3 className="font-black text-xl mt-2">Birth in Dhaka</h3>
      </div>
      <div>
        <span className="bg-teal-800 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">1968</span>
        <h3 className="font-black text-xl mt-2">Immigration to USA</h3>
      </div>
    </div>
  </div>
);

const FavoritesTab: React.FC = () => (
  <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12">
    <h2 className="text-3xl font-black uppercase tracking-tight mb-10">Spiritual Affinities</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100">
        <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Beloved Surahs</h3>
        <p className="font-bold text-lg">Ar-Rahman, Yasin, Al-Mulk</p>
      </div>
    </div>
  </div>
);

const Sidebar: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-teal-900 rounded-[2rem] p-10 text-white shadow-2xl">
      <h3 className="font-black text-2xl uppercase mb-6">Sadaqah Jariyah</h3>
      <p className="text-5xl font-black text-amber-400 mb-8">$11,910</p>
      <a href="https://www.launchgood.com/v4/campaign/together_lets_educate_and_care_for_orphans" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-amber-500 text-teal-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs no-underline">
        Give Sadaqah Jariyah →
      </a>
    </div>
  </div>
);

export default MemorialPage;
