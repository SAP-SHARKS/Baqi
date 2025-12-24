import React, { useState } from 'react';

// Types
type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

interface PlaceholderImageProps {
  type: 'profile' | 'family1' | 'family2' | 'mosque' | 'quran' | 'gathering';
  className?: string;
  seed?: number;
}

// Placeholder Image Component
const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ type, className = '' }) => {
  const images: Record<string, JSX.Element> = {
    profile: (
      <svg viewBox="0 0 400 500" className={className}>
        <defs>
          <linearGradient id="bg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#e8f5f3',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#d4ebe7',stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect fill="url(#bg1)" width="400" height="500"/>
        <circle cx="200" cy="180" r="70" fill="#0D5C4D" opacity="0.9"/>
        <ellipse cx="200" cy="350" rx="80" ry="100" fill="#0D5C4D" opacity="0.9"/>
        <circle cx="180" cy="165" r="8" fill="#F0EDE5"/>
        <circle cx="220" cy="165" r="8" fill="#F0EDE5"/>
        <path d="M170 200 Q200 220 230 200" stroke="#F0EDE5" strokeWidth="4" fill="none"/>
      </svg>
    ),
    family1: (
      <svg viewBox="0 0 400 500" className={className}>
        <rect fill="#F5F0E8" width="400" height="500"/>
        <ellipse cx="120" cy="200" rx="50" ry="60" fill="#0A4A3E"/>
        <ellipse cx="280" cy="200" rx="50" ry="60" fill="#0D5C4D"/>
        <circle cx="120" cy="150" r="45" fill="#0A4A3E"/>
        <circle cx="280" cy="150" r="45" fill="#0D5C4D"/>
        <ellipse cx="120" cy="380" rx="45" ry="70" fill="#0A4A3E"/>
        <ellipse cx="280" cy="380" rx="45" ry="70" fill="#0D5C4D"/>
        <circle cx="120" cy="320" r="40" fill="#0A4A3E"/>
        <circle cx="280" cy="320" r="40" fill="#0D5C4D"/>
      </svg>
    ),
    family2: (
      <svg viewBox="0 0 400 500" className={className}>
        <rect fill="#EBE8E0" width="400" height="500"/>
        <circle cx="200" cy="150" r="55" fill="#0D5C4D"/>
        <ellipse cx="200" cy="300" rx="60" ry="80" fill="#0D5C4D"/>
        <circle cx="120" cy="350" r="30" fill="#C9A962" opacity="0.7"/>
        <circle cx="280" cy="350" r="30" fill="#C9A962" opacity="0.7"/>
      </svg>
    ),
    mosque: (
      <svg viewBox="0 0 400 500" className={className}>
        <rect fill="#E8EDE8" width="400" height="500"/>
        <rect x="80" y="200" width="240" height="300" fill="#0D5C4D"/>
        <ellipse cx="200" cy="200" rx="130" ry="60" fill="#0A4A3E"/>
        <rect x="170" y="100" width="60" height="100" fill="#0D5C4D"/>
        <ellipse cx="200" cy="100" rx="30" ry="20" fill="#0D5C4D"/>
        <circle cx="200" cy="70" r="12" fill="#C9A962"/>
        <rect x="50" y="250" width="20" height="250" fill="#0A4A3E"/>
        <rect x="330" y="250" width="20" height="250" fill="#0A4A3E"/>
        <ellipse cx="60" cy="250" rx="10" ry="15" fill="#0A4A3E"/>
        <ellipse cx="340" cy="250" rx="10" ry="15" fill="#0A4A3E"/>
        <path d="M160 320 Q200 310 240 320 L240 450 L160 450 Z" fill="#F0EDE5" opacity="0.3"/>
      </svg>
    ),
    quran: (
      <svg viewBox="0 0 400 500" className={className}>
        <rect fill="#E5DED0" width="400" height="500"/>
        <rect x="60" y="80" width="280" height="340" rx="10" fill="#0D5C4D"/>
        <rect x="70" y="90" width="260" height="320" rx="8" fill="#F5F0E5"/>
        <path d="M200 150 L210 175 L185 165 L215 165 L190 175 Z" fill="#C9A962"/>
        <rect x="120" y="200" width="160" height="4" rx="2" fill="#0D5C4D" opacity="0.3"/>
        <rect x="120" y="215" width="140" height="4" rx="2" fill="#0D5C4D" opacity="0.3"/>
        <rect x="120" y="230" width="150" height="4" rx="2" fill="#0D5C4D" opacity="0.3"/>
        <rect x="120" y="260" width="160" height="4" rx="2" fill="#0D5C4D" opacity="0.3"/>
        <rect x="120" y="275" width="130" height="4" rx="2" fill="#0D5C4D" opacity="0.3"/>
      </svg>
    ),
    gathering: (
      <svg viewBox="0 0 400 500" className={className}>
        <rect fill="#E8E4DC" width="400" height="500"/>
        <ellipse cx="100" cy="200" rx="40" ry="50" fill="#0A4A3E"/>
        <ellipse cx="200" cy="190" rx="45" ry="55" fill="#0D5C4D"/>
        <ellipse cx="300" cy="200" rx="40" ry="50" fill="#0A4A3E"/>
        <circle cx="100" cy="160" r="35" fill="#0A4A3E"/>
        <circle cx="200" cy="145" r="40" fill="#0D5C4D"/>
        <circle cx="300" cy="160" r="35" fill="#0A4A3E"/>
        <rect x="80" y="320" width="240" height="120" rx="60" fill="#C9A962" opacity="0.2"/>
      </svg>
    ),
  };
  
  return images[type] || images.profile;
};

const MemorialPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('about');
  const [showShareModal, setShowShareModal] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Top Banner */}
      <div className="bg-teal-900 text-white py-2.5 px-4 text-center text-sm border-b border-teal-800">
        <span className="text-base">☽</span> <strong>Baqi</strong> <span className="text-teal-300">— الباقي</span> • Preserving Islamic Legacies
      </div>

      {/* Hero Section - Photo Grid */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Photos Grid */}
          <div className="grid grid-cols-3 gap-2 p-4" style={{ height: '450px' }}>
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
              <PlaceholderImage type="profile" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <PlaceholderImage type="family1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <PlaceholderImage type="mosque" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <PlaceholderImage type="family2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <PlaceholderImage type="quran" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name and info */}
          <div className="px-4 pb-6">
            <p className="text-sm text-stone-500 mb-1">In memory of</p>
            <h1 className="text-4xl font-bold mb-3">Muhammad Rahman</h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-stone-600 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🕯️</span>
                <div>
                  <p className="text-xs text-stone-500">Passed</p>
                  <p className="font-semibold">October 1, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎂</span>
                <div>
                  <p className="text-xs text-stone-500">Born</p>
                  <p className="font-semibold">December 13, 1943</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🏠</span>
                <div>
                  <p className="text-xs text-stone-500">Resided</p>
                  <p className="font-semibold">Denver, CO, USA</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 flex-wrap">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 rounded-md hover:bg-stone-50 text-sm font-medium">
                <span className="text-red-500">🤲</span> Make Du'a (23)
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 rounded-md hover:bg-stone-50 text-sm font-medium">
                <span>💬</span> Comment (15)
              </button>
              <button 
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 rounded-md hover:bg-stone-50 text-sm font-medium"
              >
                <span>↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-y border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
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
                className={`flex items-center gap-1.5 px-5 py-3.5 text-sm whitespace-nowrap transition-colors ${
                  currentTab === tab.id
                    ? 'border-b-3 border-teal-800 text-teal-800 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {currentTab === 'about' && <AboutTab />}
            {currentTab === 'memories' && <MemoriesTab />}
            {currentTab === 'sadaqah' && <SadaqahTab />}
            {currentTab === 'obituary' && <ObituaryTab />}
            {currentTab === 'events' && <EventsTab rsvpOpen={rsvpOpen} setRsvpOpen={setRsvpOpen} />}
            {currentTab === 'timeline' && <TimelineTab />}
            {currentTab === 'favorites' && <FavoritesTab />}
          </div>
          <div className="space-y-6">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-xl mb-4">Share Memorial</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                <span className="text-xl">📧</span>
                <span className="font-medium">Email</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                <span className="text-xl">💬</span>
                <span className="font-medium">WhatsApp</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                <span className="text-xl">🔗</span>
                <span className="font-medium">Copy Link</span>
              </button>
            </div>
            <button onClick={() => setShowShareModal(false)} className="mt-4 w-full py-2.5 border border-stone-300 rounded-lg hover:bg-stone-50 font-medium">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Tab Components
const AboutTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-6 text-center">
      <p className="text-2xl text-teal-900 mb-2 leading-relaxed" style={{fontFamily: 'serif'}}>
        إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </p>
      <p className="text-sm text-stone-600">"Surely we belong to Allah and to Him we shall return"</p>
    </div>

    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl flex-shrink-0">💌</div>
        <div>
          <h3 className="font-bold text-lg">Personal note from Lamar & The Kids</h3>
          <p className="text-sm text-stone-500">Family</p>
        </div>
      </div>
      <p className="text-stone-700 leading-relaxed">
        We'd like to extend our deepest gratitude for all of your support, love, and kindness during this difficult time. 
        Alhamdulillah for the 76 blessed years Allah (SWT) granted us with our beloved husband and father. May Allah grant him Jannatul Firdaus. Ameen.
      </p>
    </div>
  </div>
);

const MemoriesTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h2 className="font-bold text-lg mb-4">Share your condolences...</h2>
      <textarea 
        placeholder="Share a memory, du'a, or story about Muhammad..."
        className="w-full p-4 border border-stone-200 rounded-lg resize-none focus:ring-2 focus:ring-teal-500"
        rows={4}
      />
      <div className="flex gap-3 mt-3">
        <button className="px-5 py-2.5 bg-teal-800 text-white rounded-lg hover:bg-teal-900 font-medium">Post Memory</button>
        <button className="px-5 py-2.5 border border-stone-300 rounded-lg hover:bg-stone-50 font-medium">📷 Photo</button>
      </div>
    </div>
  </div>
);

const SadaqahTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl border-2 border-amber-500 shadow-md p-6 relative">
      <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">FAMILY'S CHOICE</span>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-4xl">💧</div>
        <div>
          <h3 className="font-bold text-xl mb-2">Water Well in Bangladesh</h3>
          <p className="text-stone-600">Muhammad's final wish to provide clean water.</p>
        </div>
      </div>
      <div className="mb-5">
        <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-700" style={{ width: '84.5%' }} />
        </div>
        <p className="text-sm mt-2"><span className="font-bold text-teal-800">$8,450</span> of $10,000</p>
      </div>
      <button className="w-full bg-teal-800 text-white py-3.5 rounded-lg font-bold hover:bg-teal-900">Donate Now</button>
    </div>
  </div>
);

const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
    <h2 className="text-3xl font-bold mb-6">Obituary</h2>
    <div className="prose prose-stone max-w-none">
      <p className="leading-relaxed mb-4">
        <strong>Muhammad Cadence Rahman</strong>, 76, of Denver, Colorado, returned to his Lord on October 1st, 2024, 
        after courageously facing his illness with unwavering faith and patience.
      </p>
      <p className="leading-relaxed mb-4">
        For over 30 years, Brother Muhammad was a beloved Quran teacher at Masjid Al-Noor in Denver. 
        Known for his gentle demeanor and profound knowledge, he touched countless lives.
      </p>
      <p className="italic text-stone-700 bg-teal-50 p-4 rounded-lg mt-6">
        May Allah grant him Jannatul Firdaus. Ameen.
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
    { id: 1, title: 'Salat al-Janazah', date: 'Saturday, Oct 5, 2024', time: '1:30 PM', location: 'Masjid Al-Noor' },
    { id: 2, title: 'Burial', date: 'Saturday, Oct 5, 2024', time: '3:00 PM', location: 'Islamic Cemetery' },
  ];

  return (
    <div className="space-y-6">
      {events.map(event => (
        <div key={event.id} className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
          <h3 className="font-bold text-xl mb-4">{event.title}</h3>
          <p className="text-stone-600 mb-2">📅 {event.date}</p>
          <p className="text-stone-600 mb-2">🕐 {event.time}</p>
          <p className="text-stone-600 mb-4">📍 {event.location}</p>
          <button 
            onClick={() => setRsvpOpen(rsvpOpen === event.id ? null : event.id)}
            className="w-full py-2.5 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-900"
          >
            RSVP
          </button>
        </div>
      ))}
    </div>
  );
};

const TimelineTab: React.FC = () => (
  <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
    <h2 className="text-2xl font-bold mb-8">Life Timeline</h2>
    <div className="space-y-6">
      {[
        { year: '1943', title: 'Born in Dhaka, Bangladesh' },
        { year: '1975', title: 'Began teaching at Masjid Al-Noor' },
        { year: '2024', title: 'Returned to Allah' },
      ].map((m, i) => (
        <div key={i} className="flex gap-4">
          <span className="inline-block bg-teal-800 text-white text-xs px-2 py-1 rounded h-fit">{m.year}</span>
          <p className="font-semibold">{m.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const FavoritesTab: React.FC = () => (
  <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
    <h2 className="text-2xl font-bold mb-6">Muhammad's Favorites</h2>
    <div className="space-y-4">
      <div><strong>📖 Favorite Surahs:</strong> Surah Rahman, Surah Yasin</div>
      <div><strong>🕌 Favorite Masjids:</strong> Masjid Al-Haram, Masjid Al-Noor</div>
      <div><strong>🍲 Favorite Foods:</strong> Biryani, Dates, Honey</div>
    </div>
  </div>
);

const Sidebar: React.FC = () => (
  <>
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">💝 In lieu of flowers</h3>
      <p className="text-3xl font-bold text-teal-800">$11,910</p>
      <p className="text-sm text-stone-500 mb-4">Raised by 67 people</p>
      <button className="w-full bg-teal-800 text-white py-3 rounded-lg font-bold hover:bg-teal-900">Give Sadaqah</button>
    </div>
    
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">Survived By</h3>
      <div className="space-y-3">
        {['Amina Rahman (Wife)', 'Lamar Rahman (Son)', 'Aisha Rahman (Daughter)'].map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-800 text-white flex items-center justify-center font-bold">{p[0]}</div>
            <span className="text-sm">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default MemorialPage;
