import React, { useState } from 'react';

// Types
type TabType = 'about' | 'memories' | 'sadaqah' | 'obituary' | 'events' | 'timeline' | 'favorites';

interface PlaceholderImageProps {
  type: 'profile' | 'family1' | 'family2' | 'mosque' | 'quran';
  className?: string;
}

// Better Placeholder Images - More Realistic
const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ type, className = '' }) => {
  const images: Record<string, JSX.Element> = {
    profile: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="profileBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#D4E8E4',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#B8D5CF',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>
        <rect fill="url(#profileBg)" width="800" height="1000"/>
        {/* Person silhouette with blurred face */}
        <ellipse cx="400" cy="700" rx="180" ry="240" fill="#0D5C4D" opacity="0.85"/>
        <circle cx="400" cy="350" r="140" fill="#0D5C4D" opacity="0.85"/>
        {/* Blurred face circle */}
        <circle cx="400" cy="350" r="120" fill="#8BA39E" filter="url(#blur1)"/>
        {/* Clothing detail */}
        <rect x="300" y="520" width="200" height="8" fill="#0A4A3E" opacity="0.3"/>
      </svg>
    ),
    family1: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="family1Bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#F5F2ED',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#E8E4DC',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur2">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect fill="url(#family1Bg)" width="800" height="1000"/>
        {/* Two people */}
        <ellipse cx="300" cy="700" rx="140" ry="200" fill="#0D5C4D" opacity="0.8"/>
        <ellipse cx="500" cy="700" rx="140" ry="200" fill="#0A4A3E" opacity="0.8"/>
        <circle cx="300" cy="400" r="100" fill="#0D5C4D" opacity="0.8"/>
        <circle cx="500" cy="400" r="100" fill="#0A4A3E" opacity="0.8"/>
        {/* Blurred faces */}
        <circle cx="300" cy="400" r="85" fill="#9FB5B0" filter="url(#blur2)"/>
        <circle cx="500" cy="400" r="85" fill="#8FA5A0" filter="url(#blur2)"/>
      </svg>
    ),
    family2: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="family2Bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#EAE7E0',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#DDD9D0',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur3">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <rect fill="url(#family2Bg)" width="800" height="1000"/>
        {/* Three people - family group */}
        <ellipse cx="250" cy="750" rx="120" ry="180" fill="#0A4A3E" opacity="0.75"/>
        <ellipse cx="400" cy="700" rx="150" ry="220" fill="#0D5C4D" opacity="0.85"/>
        <ellipse cx="550" cy="750" rx="120" ry="180" fill="#0A4A3E" opacity="0.75"/>
        <circle cx="250" cy="450" r="85" fill="#0A4A3E" opacity="0.75"/>
        <circle cx="400" cy="400" r="110" fill="#0D5C4D" opacity="0.85"/>
        <circle cx="550" cy="450" r="85" fill="#0A4A3E" opacity="0.75"/>
        {/* Blurred faces */}
        <circle cx="250" cy="450" r="70" fill="#95ACA7" filter="url(#blur3)"/>
        <circle cx="400" cy="400" r="95" fill="#9FB5B0" filter="url(#blur3)"/>
        <circle cx="550" cy="450" r="70" fill="#95ACA7" filter="url(#blur3)"/>
      </svg>
    ),
    mosque: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#E8F0ED',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#D4E3DE',stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect fill="url(#skyBg)" width="800" height="1000"/>
        {/* Mosque structure */}
        <rect x="200" y="400" width="400" height="600" fill="#0D5C4D" opacity="0.9"/>
        <ellipse cx="400" cy="400" rx="220" ry="100" fill="#0A4A3E" opacity="0.9"/>
        {/* Main dome */}
        <rect x="320" y="200" width="160" height="200" fill="#0D5C4D" opacity="0.9"/>
        <ellipse cx="400" cy="200" rx="80" ry="50" fill="#0D5C4D" opacity="0.9"/>
        <circle cx="400" cy="150" r="25" fill="#C9A962"/>
        {/* Minarets */}
        <rect x="150" y="450" width="40" height="550" fill="#0A4A3E" opacity="0.85"/>
        <rect x="610" y="450" width="40" height="550" fill="#0A4A3E" opacity="0.85"/>
        <ellipse cx="170" cy="450" rx="20" ry="30" fill="#0A4A3E" opacity="0.85"/>
        <ellipse cx="630" cy="450" rx="20" ry="30" fill="#0A4A3E" opacity="0.85"/>
        {/* Door archway */}
        <path d="M340 600 Q400 550 460 600 L460 1000 L340 1000 Z" fill="#F0EDE5" opacity="0.4"/>
      </svg>
    ),
    quran: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bookBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#E5DED0',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#D8CFC0',stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect fill="url(#bookBg)" width="800" height="1000"/>
        {/* Book cover */}
        <rect x="150" y="150" width="500" height="700" rx="20" fill="#0D5C4D" opacity="0.95"/>
        <rect x="170" y="170" width="460" height="660" rx="15" fill="#F5F0E5"/>
        {/* Islamic star */}
        <path d="M400 280 L420 340 L370 315 L430 315 L380 340 Z" fill="#C9A962"/>
        {/* Text lines */}
        <rect x="230" y="400" width="340" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="430" width="300" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="460" width="320" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="510" width="340" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="540" width="280" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="570" width="310" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        {/* Decorative border */}
        <rect x="170" y="170" width="460" height="660" rx="15" fill="none" stroke="#C9A962" strokeWidth="3"/>
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
        <div className="max-w-6xl mx-auto p-4">
          {/* FIXED Photo Grid - 1 Large Left + 4 Small Right in 2x2 */}
          <div className="grid grid-cols-4 gap-3" style={{ height: '500px' }}>
            {/* Large main photo - spans 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg bg-stone-100">
              <PlaceholderImage type="profile" className="w-full h-full" />
            </div>
            
            {/* Top right - 2 photos side by side */}
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="family1" className="w-full h-full" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="mosque" className="w-full h-full" />
            </div>
            
            {/* Bottom right - 2 photos side by side */}
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="family2" className="w-full h-full" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-stone-100">
              <PlaceholderImage type="quran" className="w-full h-full" />
            </div>
          </div>

          {/* Name and info - LEFT ALIGNED */}
          <div className="mt-6 mb-4">
            <p className="text-sm text-stone-500 mb-1">In memory of</p>
            <h1 className="text-4xl font-bold mb-3 text-stone-900">Muhammad Rahman</h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-stone-600 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xl">🕯️</span>
                <div>
                  <p className="text-xs text-stone-500 uppercase">Passed</p>
                  <p className="font-semibold text-stone-900">October 1, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎂</span>
                <div>
                  <p className="text-xs text-stone-500 uppercase">Born</p>
                  <p className="font-semibold text-stone-900">December 13, 1943</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🏠</span>
                <div>
                  <p className="text-xs text-stone-500 uppercase">Resided</p>
                  <p className="font-semibold text-stone-900">Denver, CO, USA</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 text-sm font-medium transition-colors shadow-sm">
                <span className="text-red-500">🤲</span> Make Du'a <span className="text-stone-400">(23)</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 text-sm font-medium transition-colors shadow-sm">
                <span>💬</span> Comment <span className="text-stone-400">(15)</span>
              </button>
              <button 
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 text-sm font-medium transition-colors shadow-sm"
              >
                <span>↗</span> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY Navigation - Stays on scroll */}
      <div className="sticky top-0 z-50 bg-white border-y border-stone-200 shadow-sm">
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
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all ${
                  currentTab === tab.id
                    ? 'border-b-2 border-teal-800 text-teal-800 bg-teal-50/50'
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
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                <span className="text-xl">📧</span>
                <span className="font-medium">Email</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                <span className="text-xl">💬</span>
                <span className="font-medium">WhatsApp</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
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
        Alhamdulillah for the 76 blessed years Allah (SWT) granted us with our beloved husband and father. 
        We're grateful for every du'a, every memory shared, and every act of sadaqah in his name. 
        May Allah grant him Jannatul Firdaus. Ameen.
      </p>
    </div>

    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">Share Your Memories</h3>
      <div className="space-y-3">
        {[
          'What was your favorite Quran recitation by Muhammad?',
          'What Islamic lesson did Muhammad teach you?',
          'What do you remember most about his character?',
        ].map((q, i) => (
          <button key={i} className="w-full text-left p-4 bg-stone-50 rounded-lg hover:bg-stone-100 border border-stone-100 transition-colors">
            <p className="text-sm text-stone-700">{q}</p>
            <p className="text-xs text-teal-700 mt-1.5 font-medium">Share your answer →</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const MemoriesTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h2 className="font-bold text-lg mb-4">Share your condolences...</h2>
      <textarea 
        placeholder="Share a memory, du'a, or story about Muhammad..."
        className="w-full p-4 border border-stone-200 rounded-lg resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        rows={4}
      />
      <div className="flex gap-3 mt-3">
        <button className="px-5 py-2.5 bg-teal-800 text-white rounded-lg hover:bg-teal-900 font-medium transition-colors">Post Memory</button>
        <button className="px-5 py-2.5 border border-stone-300 rounded-lg hover:bg-stone-50 font-medium transition-colors flex items-center gap-2">
          <span>📷</span> Photo
        </button>
      </div>
    </div>

    {/* Sample memories */}
    <div className="space-y-4">
      {[
        { name: 'Imam Abdullah', text: 'Brother Muhammad was one of the most sincere souls. May Allah grant him Jannah.', time: '2 days ago' },
        { name: 'Sarah Ahmed', text: 'He taught my children Quran with such patience. We will never forget him.', time: '3 days ago' },
      ].map((m, i) => (
        <div key={i} className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-800 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {m.name[0]}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-base">{m.name}</p>
              <p className="text-xs text-stone-500">{m.time}</p>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed">{m.text}</p>
          <div className="flex gap-6 text-sm border-t border-stone-100 pt-3 mt-4">
            <button className="text-stone-600 hover:text-teal-800 font-medium">🤲 Make Du'a (15)</button>
            <button className="text-stone-600 hover:text-teal-800 font-medium">💬 Reply (2)</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SadaqahTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl border-2 border-amber-500 shadow-md p-6 relative">
      <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">FAMILY'S CHOICE</span>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-4xl flex-shrink-0">💧</div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2">Water Well in Bangladesh</h3>
          <p className="text-stone-600 leading-relaxed">
            Muhammad's final wish to provide clean water to his ancestral village. This well will serve 500+ families.
          </p>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold text-teal-800 text-lg">$8,450</span>
          <span className="text-stone-500">of <strong>$10,000</strong> goal</span>
        </div>
        <div className="h-4 bg-stone-200 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-teal-700 to-teal-600 rounded-full transition-all" style={{ width: '84.5%' }} />
        </div>
        <p className="text-sm text-stone-500 mt-2">42 generous donors</p>
      </div>
      <button className="w-full bg-teal-800 text-white py-3.5 rounded-lg font-bold text-lg hover:bg-teal-900 shadow-md transition-all">
        Donate Now
      </button>
    </div>

    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">Recent Contributions</h3>
      <div className="space-y-4">
        {[
          { name: 'Anonymous', amount: '$100', time: '2 hours ago' },
          { name: 'Fatima Ahmed', amount: '$50', time: '1 day ago' },
          { name: 'Omar Khan', amount: '$25', time: '2 days ago' },
        ].map((d, i) => (
          <div key={i} className="flex justify-between items-center pb-4 border-b border-stone-100 last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold flex-shrink-0">
                {d.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm">{d.name}</p>
                <p className="text-xs text-stone-500">{d.time}</p>
              </div>
            </div>
            <span className="text-teal-800 font-bold">{d.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ObituaryTab: React.FC = () => (
  <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
    <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-stone-200">Obituary</h2>
    <div className="prose prose-stone max-w-none">
      <p className="text-base leading-relaxed mb-4">
        <strong className="text-lg">Muhammad Cadence Rahman</strong>, 76, of Denver, Colorado, returned to his Lord on 
        October 1st, 2024, after courageously facing his illness with unwavering faith and patience.
      </p>
      <p className="text-base leading-relaxed mb-4">
        Muhammad was born on December 13th, 1943, in Dhaka, Bangladesh. After completing his studies in Islamic Sciences 
        at Al-Azhar University in Cairo, he immigrated to the United States in 1968.
      </p>
      <p className="text-base leading-relaxed mb-4">
        For over 30 years, Brother Muhammad was a beloved Quran teacher at Masjid Al-Noor in Denver, where he taught 
        hundreds of children and adults. Known for his gentle demeanor and profound knowledge, he touched countless lives.
      </p>
      <p className="text-base leading-relaxed italic text-stone-700 bg-teal-50 p-4 rounded-lg mt-6">
        May Allah grant him Jannatul Firdaus and reunite him with the prophets and the righteous. Ameen.
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
    { id: 1, title: 'Ghusl (Washing)', date: 'Friday, Oct 4, 2024', time: '6:00 PM', location: 'Islamic Center of Denver' },
    { id: 2, title: 'Salat al-Janazah', date: 'Saturday, Oct 5, 2024', time: '1:30 PM', location: 'Masjid Al-Noor' },
    { id: 3, title: 'Burial', date: 'Saturday, Oct 5, 2024', time: '3:00 PM', location: 'Islamic Cemetery' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-stone-700 leading-relaxed">
          <strong>Islamic Tradition:</strong> Burial should occur as soon as possible, typically within 24 hours.
        </p>
      </div>

      {events.map(event => (
        <div key={event.id} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-6 py-4 border-b border-stone-200">
            <h3 className="font-bold text-xl">{event.title}</h3>
          </div>
          <div className="p-6 space-y-3">
            <p className="text-stone-600 flex items-center gap-2"><span className="text-xl">📅</span> {event.date}</p>
            <p className="text-stone-600 flex items-center gap-2"><span className="text-xl">🕐</span> {event.time}</p>
            <p className="text-stone-600 flex items-center gap-2"><span className="text-xl">📍</span> {event.location}</p>
            <button 
              onClick={() => setRsvpOpen(rsvpOpen === event.id ? null : event.id)}
              className="w-full py-2.5 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-900 transition-colors mt-4"
            >
              RSVP
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineTab: React.FC = () => {
  const milestones = [
    { year: '1943', icon: '👶', title: 'Born in Dhaka, Bangladesh' },
    { year: '1965', icon: '🎓', title: 'Graduated from Al-Azhar University' },
    { year: '1975', icon: '👨‍🏫', title: 'Began teaching at Masjid Al-Noor' },
    { year: '1980', icon: '🕋', title: 'First Hajj pilgrimage' },
    { year: '2024', icon: '🕯️', title: 'Returned to Allah' },
  ];

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-stone-200">Life Timeline</h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-teal-800" />
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-20">
              <div className="absolute left-0 w-16 h-16 bg-white border-4 border-teal-800 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-2xl">{m.icon}</span>
              </div>
              <div className="bg-stone-50 rounded-lg p-5 hover:shadow-md transition-shadow">
                <span className="inline-block bg-teal-800 text-white text-xs font-bold px-2 py-1 rounded mb-2">{m.year}</span>
                <h3 className="font-bold text-lg">{m.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoritesTab: React.FC = () => (
  <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-stone-200">Muhammad's Favorites</h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {[
        { icon: '📖', title: 'Favorite Surahs', items: 'Surah Rahman, Surah Yasin, Surah Mulk' },
        { icon: '🕌', title: 'Favorite Masjids', items: 'Masjid Al-Haram, Al-Masjid an-Nabawi' },
        { icon: '🍲', title: 'Favorite Foods', items: 'Biryani, Dates, Honey' },
        { icon: '📚', title: 'Favorite Books', items: 'Riyadh as-Salihin, Tafsir Ibn Kathir' },
      ].map((f, i) => (
        <div key={i} className="bg-gradient-to-br from-stone-50 to-teal-50 rounded-xl p-5 border border-stone-200">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center text-3xl flex-shrink-0">{f.icon}</div>
            <h3 className="font-bold text-sm text-stone-600 uppercase tracking-wide mt-2">{f.title}</h3>
          </div>
          <p className="text-stone-700 leading-relaxed">{f.items}</p>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar: React.FC = () => (
  <>
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">💝</div>
        <h3 className="font-bold text-lg">In lieu of flowers</h3>
      </div>
      <p className="text-sm text-stone-600 mb-4 leading-relaxed">Please consider sadaqah jariyah instead.</p>
      <div className="mb-4">
        <p className="text-3xl font-bold text-teal-800">$11,910</p>
        <p className="text-sm text-stone-500">Raised by 67 people</p>
      </div>
      <button className="w-full bg-gradient-to-r from-teal-800 to-teal-700 text-white py-3 rounded-lg font-bold hover:from-teal-900 hover:to-teal-800 shadow-md transition-all">
        Give Sadaqah →
      </button>
    </div>
    
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-3">Want to stay updated?</h3>
      <p className="text-sm text-stone-600 mb-4">Get notified when new photos and stories are shared.</p>
      <input 
        type="email" 
        placeholder="Your email" 
        className="w-full p-3 border border-stone-200 rounded-lg mb-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      />
      <button className="w-full bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-stone-900 transition-colors">
        Subscribe
      </button>
    </div>

    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-5">Survived By</h3>
      <div className="space-y-4">
        {[
          { name: 'Amina Rahman', relation: 'Wife' },
          { name: 'Lamar Rahman', relation: 'Son' },
          { name: 'Aisha Rahman', relation: 'Daughter' },
          { name: 'Yusuf Rahman', relation: 'Son' },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-700 to-teal-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {p.name[0]}
            </div>
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-stone-500">{p.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-5">Other Key Details</h3>
      <div className="space-y-4 text-sm">
        <div className="pb-4 border-b border-stone-100">
          <p className="text-stone-500 text-xs uppercase mb-1">Burial Location</p>
          <p className="font-semibold">Islamic Cemetery of Colorado</p>
        </div>
        <div>
          <p className="text-stone-500 text-xs uppercase mb-1">Funeral Services By</p>
          <p className="font-semibold">Noor Islamic Funeral Home</p>
        </div>
      </div>
    </div>
  </>
);

export default MemorialPage;
